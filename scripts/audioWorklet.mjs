(function () {
	class BytebeatProcessor extends AudioWorkletProcessor {
		constructor() {
			super({ numberOfInputs: 0 });

			this.audioSample = 0; // TODO: is this needed? might be better to use currentTime
			this.lastFlooredTime = -1;
			this.byteSample = 0;

			this.sampleRatio = NaN;

			this.lastByteValue = null;
			this.lastValue = 0;
			this.lastFuncValue = null;

			this.isPlaying = false;

			this.func = null;
			this.playbackMode = "Bytebeat";
			this.sampleRate = 8000;
			this.sampleRateDivisor = 1;
			this.playSpeed = 1;

			Object.seal(this);


			this.updateSampleRatio();

			this.port.addEventListener("message", this.handleMessage.bind(this));
			this.port.start();
		}

		handleMessage(e) {
			const data = e.data;

			// set vars
			for (let v of [
				"playbackMode",
				"isPlaying",
				"sampleRate",
				"sampleRateDivisor",
				"playSpeed",
			])
				if (data[v] !== undefined)
					this[v] = data[v];

			// run functions
			if (data.setByteSample !== undefined)
				this.setByteSample(...data.setByteSample);

			// other
			if (data.code !== undefined)
				this.refreshCode(data.code); // code is already trimmed

			if (data.updateSampleRatio)
				this.updateSampleRatio();
		}

		setByteSample(value, clear = false) {
			this.byteSample = value;
			this.port.postMessage({ [clear ? "clearCanvas" : "clearDrawBuffer"]: true });
			this.audioSample = 0;
			this.lastFlooredTime = -1;
			this.lastValue = 0;
			this.lastByteValue = null;
			this.lastFuncValue = null;
		}
		refreshCode(code) { // code is already trimmed
			// create shortened functions
			const params = Object.getOwnPropertyNames(Math);
			const values = params.map(k => Math[k]);
			params.push("int");
			values.push(Math.floor);
			params.push("window");
			values.push(globalThis);

			this.deleteGlobals();

			// test bytebeat
			{
				const oldFunc = this.func;
				let errType;
				try {
					errType = "compile";
					this.func = new Function(...params, "t", `return 0, ${code || "undefined"}\n;`).bind(globalThis, ...values);
					errType = "runtime";
					this.func(0);
				} catch (err) {
					this.func = oldFunc;
					this.port.postMessage({ errorMessage: { type: errType, err, priority: 1 } });
					return;
				}
			}

			this.port.postMessage({ updateUrl: true, errorMessage: null });
		}
		deleteGlobals() {
			// delete most enumerable variables, and all single letter variables (not foolproof but works well enough)
			for (let i = 0; i < 26; i++)
				delete globalThis[String.fromCharCode(65 + i)], globalThis[String.fromCharCode(97 + i)];
			for (let v in globalThis)
				if (![
					"currentFrame",
					"currentTime",
					"sampleRate",
				].includes(v))
					delete globalThis[v];
		}
		updateSampleRatio() {
			let flooredTimeOffset;
			if (isNaN(this.sampleRatio))
				flooredTimeOffset = 0;
			else
				flooredTimeOffset = this.lastFlooredTime - Math.floor(this.sampleRatio * this.audioSample);
			this.sampleRatio = this.sampleRate * this.playSpeed / sampleRate;
			this.lastFlooredTime = Math.floor(this.sampleRatio * this.audioSample) - flooredTimeOffset;
			return this.sampleRatio;
		}

		process(inputs, outputs, parameters) { // TODO: stop this from blocking messages when lagging
			const chData = outputs[0][0];
			const chDataLen = chData.length; // for performance
			if (!chDataLen)
				return true;
			if (!this.isPlaying || !this.func) {
				chData.fill(0);
				return true;
			}
			let time = this.sampleRatio * this.audioSample;
			let byteSample = this.byteSample;
			const drawBuffer = [];
			for (let i = 0; i < chDataLen; i++) {
				time += this.sampleRatio;
				const flooredTime = Math.floor(time / this.sampleRateDivisor) * this.sampleRateDivisor;
				if (this.lastFlooredTime != flooredTime) {
					const roundSample = Math.floor(byteSample / this.sampleRateDivisor) * this.sampleRateDivisor;
					let funcValue;
					try {
						funcValue = this.func(roundSample);
					} catch (err) {
						this.port.postMessage({ errorMessage: { type: "runtime", err } });
						funcValue = NaN;
					}
					if (funcValue != this.lastFuncValue) {
						if (isNaN(funcValue))
							this.lastByteValue = NaN;
						else {
							if (this.playbackMode == "Bytebeat") {
								this.lastByteValue = funcValue & 255;
								this.lastValue = this.lastByteValue / 127.5 - 1;
							} else if (this.playbackMode == "Signed Bytebeat") {
								this.lastByteValue = (funcValue + 128) & 255;
								this.lastValue = this.lastByteValue / 127.5 - 1;
							} else if (this.playbackMode == "Floatbeat") {
								this.lastValue = funcValue;
								this.lastByteValue = Math.round((this.lastValue + 1) * 127.5);
							} else {
								this.lastByteValue = NaN;
							}
						}
						drawBuffer.push({ t: roundSample, value: this.lastByteValue });
					}
					byteSample += flooredTime - this.lastFlooredTime;
					this.lastFuncValue = funcValue;
					this.lastFlooredTime = flooredTime;
				}
				chData[i] = this.lastValue;
			}
			this.audioSample += chDataLen;
			this.byteSample = byteSample;
			this.port.postMessage({ byteSample, drawBuffer });
			return true;
		}
	}

	registerProcessor("bytebeatProcessor", BytebeatProcessor);
})();