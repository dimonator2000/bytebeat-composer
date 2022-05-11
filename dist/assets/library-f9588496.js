var classic = [
	{
		author: "tejeez",
		children: [
			{
				description: "Noisy beats",
				url: "https://youtu.be/GtQdIYUtAHg?t=2m55s",
				date: "2011-09-18",
				codeOriginal: "((-t&4095)*(255&t*(t&(t>>13)))>>12)+(127&t*(234&t>>8&t>>3)>>(3&t>>14))",
				codeMinified: "((-t&4095)*(255&t*(t&t>>13))>>12)+(127&t*(234&t>>8&t>>3)>>(3&t>>14))"
			},
			{
				description: "Bassline #countercomplex",
				url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
				date: "2011-10-05",
				codeOriginal: "(~t>>2)*((127&t*(7&t>>10))<(245&t*(2+(5&t>>14))))",
				starred: 1
			}
		]
	},
	{
		description: "Oh the headaches",
		author: "sub",
		url: "http://www.pouet.net/topic.php?which=8357&page=2#c388363",
		date: "2011-09-28",
		codeOriginal: "(t >> 5) | (t << 3) + ( t * 12 * ( (t>>13) | ( (t>>1) | (t>>10) | (t>>2) ) & (t>>8) ) )",
		codeMinified: "t>>5|(t<<3)+12*t*(t>>13|(t>>1|t>>10|t>>2)&t>>8)"
	},
	{
		author: "xpansive",
		children: [
			{
				description: "Lost in Space",
				url: "http://www.pouet.net/topic.php?which=8357&page=3#c388375",
				date: "2011-09-29",
				codeOriginal: "((t*(t>>8|t>>9)&46&t>>8)) ^ (t&t>>13|t>>6)",
				codeMinified: "t*(t>>8|t>>9)&46&t>>8^(t&t>>13|t>>6)"
			},
			{
				url: "http://www.pouet.net/topic.php?which=8357&page=21#c401775",
				date: "2012-02-25",
				codeOriginal: "t%(t/(t>>9|t>>13))"
			}
		]
	},
	{
		author: "viznut",
		children: [
			{
				description: "Sin() isn't kosher, people!",
				url: "https://www.pouet.net/topic.php?which=8357&page=4#c388477",
				date: "2011-09-30",
				codeOriginal: "(t>>6|t|t>>(t>>16))*10+((t>>11)&7)",
				codeMinified: "10*(t>>6|t|t>>(t>>16))+(7&t>>11)",
				starred: 1
			},
			{
				description: "Combined xpansive's and varjohukka's stuff",
				url: "https://www.pouet.net/topic.php?which=8357&page=4#c388488",
				date: "2011-09-30",
				codeOriginal: "(t>>7|t|t>>6)*10+4*(t&t>>13|t>>6)",
				starred: 2
			},
			{
				description: "Another attempt at melody construction",
				url: "http://www.pouet.net/topic.php?which=8357&page=9#c388930",
				date: "2011-10-04",
				codeOriginal: "(t*((3+(1^t>>10&5))*(5+(3&t>>14))))>>(t>>8&3)",
				codeMinified: "t*(3+(1^t>>10&5))*(5+(3&t>>14))>>(t>>8&3)",
				starred: 2
			},
			{
				description: "#countercomplex \"moon scanner generalization\", based on jaffa's formula",
				url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
				date: "2011-10-06",
				codeOriginal: "((t>>5&t)-(t>>5)+(t>>5&t))+(t*((t>>14)&14))",
				codeMinified: "2*(t>>5&t)-(t>>5)+t*(t>>14&14)",
				starred: 1
			}
		]
	},
	{
		description: "\"the 42 melody\", separately discovered by several people on irc etc",
		url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
		codeOriginal: "t*(42&t>>10)"
	},
	{
		author: "bear @ celephais",
		url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
		codeOriginal: "t+(t&t^t>>6)-t*((t>>9)&(t%16?2:6)&t>>9)",
		codeMinified: "t+(t&t^t>>6)-t*(t>>9&(t%16?2:6)&t>>9)"
	},
	{
		description: "Explosions",
		codeOriginal: "t>>5|(t>>2)*(t>>5)",
		starred: 1
	},
	{
		description: "Wheezing modem",
		codeOriginal: "100*((t<<2|t>>5|t^63)&(t<<10|t>>11))"
	},
	{
		description: "Sierpinski harmony",
		children: [
			{
				author: "miiro",
				url: "https://youtu.be/qlrs2Vorw2Y?t=2m14s",
				date: "2011-09-30",
				codeOriginal: "t*5&(t>>7)|t*3&(t*4>>10)",
				codeMinified: "5*t&t>>7|3*t&4*t>>10",
				starred: 1
			},
			{
				description: "remix of miiro's 1-line symphony",
				author: "stephth",
				url: "https://news.ycombinator.com/item?id=3063359#3064986",
				date: "2011-10-03",
				codeOriginal: "t*9&(t*1>>4)|t*5&(t>>7)|t*3&(t*4>>12)",
				codeMinified: "9*t&t>>4|5*t&t>>7|3*t&t>>10",
				starred: 1
			},
			{
				description: "percussive",
				author: "radavis",
				url: "https://github.com/radavis/bytebeat/blob/master/errie_error.c",
				date: "2014-08-10",
				codeOriginal: "(((t*9)&(t>>4))|(t*5&t>>7)|(t*3&t/1024))-1",
				codeMinified: "(9*t&t>>4|5*t&t>>7|3*t&t>>10)-1"
			},
			{
				description: "magical",
				author: "radavis",
				url: "https://github.com/radavis/bytebeat/blob/master/errie_error.c",
				date: "2014-08-10",
				codeOriginal: "((t*9)&(t>>4))|(t*5&t>>7)|(t*3&t/1024)-1",
				codeMinified: "9*t&t>>4|5*t&t>>7|(3*t&t>>10)-1"
			},
			{
				description: "minimal sierpinski harmony",
				author: "viznut",
				url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
				codeOriginal: "t&t>>8"
			}
		]
	},
	{
		description: "Street Surfer",
		author: [
			[
				"skurk",
				"http://www.pouet.net/topic.php?which=8357&page=4#c388479"
			],
			[
				"raer",
				"http://www.pouet.net/topic.php?which=8357&page=4#c388494"
			]
		],
		date: "2011-09-30",
		codeOriginal: "(t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t<<2:t)",
		codeMinified: "t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t)",
		starred: 2
	},
	{
		description: "I'm late to the party",
		author: "rrrola",
		url: "https://www.pouet.net/topic.php?which=8357&page=5#c388529",
		date: "2011-09-30",
		codeOriginal: "t*(4+(t>>9)%3)&t/3>>7&224"
	},
	{
		author: "godinpants",
		url: "https://chipmusic.org/forums/post/79378/#p79378",
		date: "2011-10-01",
		codeOriginal: "t / 3 >> (t % 40 + 5) | t / (24 + t & 3) >> (t % (15 - ((t >> 15) % 8) * 6) + 5)",
		codeMinified: "t/3>>t%40+5|t/(24+t&3)>>t%(15-(t>>15)%8*6)+5"
	},
	{
		author: "tonic",
		url: "http://www.pouet.net/topic.php?which=8357&page=5#c388569",
		date: "2011-10-01",
		children: [
			{
				description: "mr. arpeggiator playing a solo",
				codeOriginal: "(t/8)>>(t>>9)*t/((t>>14&3)+4)",
				codeMinified: "t/8>>(t>>9)*t/((t>>14&3)+4)"
			},
			{
				description: "mr. arpeggiator's cousin as bassist",
				codeOriginal: "(t/4&0xf4)>>t/((t>>14&3)+4)",
				codeMinified: "(t/4&244)>>t/((t>>14&3)+4)"
			},
			{
				description: "simple repeating bass",
				codeOriginal: "((2*t&255)*(((-t)>>6)&0xff))>>8",
				codeMinified: "(2*t&255)*(-t>>6&255)>>8"
			}
		]
	},
	{
		description: "a quite complex one using conditionals",
		author: "Paralax",
		url: "http://www.pouet.net/topic.php?which=8357&page=6#c388670",
		date: "2011-10-02",
		codeOriginal: "(t&t*5|t>>6 | ((t&0xFFFF)>0x8000? (-6*t)/7 : ((t&0x1FFFF)>0x10000 ? -9*t&100 : (-9*(t&100)))/11))*10",
		codeMinified: "10*(t&5*t|t>>6|(t&32768?-6*t/7:(t&65536?-9*t&100:-9*(t&100))/11))",
		starred: 2
	},
	{
		description: "robot out of control",
		author: "frenzy",
		url: "http://www.pouet.net/topic.php?which=8357&page=6#c388680",
		date: "2011-10-02",
		codeOriginal: "(t&64|t>>5)^(t&33|t>>8)^(t&14|t>>9|t&76)^(t|187)^(t*(t>>8&838+t>>13)&644)",
		codeMinified: "(t&64|t>>5)^(t&33|t>>8)^(t&14|t>>9|t&76)^(t|187)^t*(t>>8&838+t>>13)&644",
		starred: 1
	},
	{
		description: "this shit is addictive",
		author: "lucasvb",
		url: "http://www.reddit.com/r/programming/comments/kyj77/algorithmic_symphonies_from_one_line_of_code_how/",
		date: "2011-10-02",
		codeOriginal: "(t>>6|t<<1)+((t>>5|t<<3)|t>>3)|t>>2|t<<1",
		codeMinified: "(t>>6|t<<1)+(t>>5|t<<3|t>>3)|t>>2|t<<1"
	},
	{
		description: "One-liner",
		author: "µB",
		url: "https://chipmusic.org/%C2%B5b/music/one-liner/",
		date: "2011-10-02",
		codeOriginal: "(64*(t>>3|t>>4|t>>9)+(t>>11&t<<2))^2*(t>>16|t|t>>7)+32*(t>>t&32)",
		codeMinified: "64*(t>>3|t>>4|t>>9)+(t>>11&t<<2)^2*(t>>16|t|t>>7)+32*(t>>t&32)"
	},
	{
		author: "stimmer",
		url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409",
		date: "2011-10-03",
		codeOriginal: "(t*(4|7&t>>13)>>((~t>>11)&1)&128) + ((t)*(t>>11&t>>13)*((~t>>9)&3)&127)",
		codeMinified: "(t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&127)",
		starred: 2
	},
	{
		description: "generic 3/4 buildup",
		author: "yumeji",
		url: "https://www.pouet.net/topic.php?which=8357&page=6#c388717",
		date: "2011-10-03",
		codeOriginal: "t&0x256?t>>4:t>>10",
		codeMinified: "t&598?t>>4:t>>10",
		starred: 1
	},
	{
		description: "Frere Jacques",
		author: "Lord Graga",
		url: "http://www.pouet.net/topic.php?which=8357&page=7#c388764",
		date: "2011-10-03",
		codeOriginal: "(t>>7|t*3|t>>(t>>15))*10+((t>>8)&5)",
		codeMinified: "10*(t>>7|3*t|t>>(t>>15))+(t>>8&5)"
	},
	{
		author: "marmakoide",
		children: [
			{
				description: "Lemmings March",
				url: "http://www.pouet.net/topic.php?which=8357&page=7#c388798",
				date: "2011-10-03",
				codeOriginal: "(t>>5)|(t<<4)|((t&1023)^1981)|((t-67)>>4)",
				codeMinified: "t>>5|t<<4|t&1023^1981|t-67>>4"
			},
			{
				description: "string instruments, with a metallic triangle",
				url: "https://www.pouet.net/topic.php?which=8357&page=8#c388874",
				date: "2011-10-04",
				codeOriginal: "(t>>(t&7))|(t<<(t&42))|(t>>7)|(t<<5)",
				codeMinified: "t>>(t&7)|t<<(t&42)|t>>7|t<<5"
			},
			{
				description: "The fall of Derp Herp",
				url: "http://www.pouet.net/topic.php?which=8357&page=10#c388980",
				date: "2011-10-05",
				codeOriginal: "t*(0x13371337>>(t>>13&27)&127)|t>>4|t<<5",
				codeMinified: "t*(322376503>>(t>>13&27)&127)|t>>4|t<<5",
				starred: 2
			}
		]
	},
	{
		author: "216",
		children: [
			{
				description: "\"fractal trees\", 216's version",
				author: "Danharaj & 216",
				url: "http://www.reddit.com/r/programming/comments/kyj77/algorithmic_symphonies_from_one_line_of_code_how/",
				date: "2011-10-03",
				codeOriginal: "t|t%255|t%257",
				starred: 1
			},
			{
				url: "https://youtu.be/tCRPUv8V22o?t=345",
				date: "2011-10-10",
				codeOriginal: "t*(t^t+(t>>15|1)^(t-1280^t)>>10)"
			}
		]
	},
	{
		description: "music for a C64 game",
		author: "skurk",
		url: "http://www.pouet.net/topic.php?which=8357&page=8#c388896",
		date: "2011-10-04",
		codeOriginal: "t*(t>>((t&4096)?((t*t)/4096):(t/4096)))|(t<<(t/256))|(t>>4)",
		codeMinified: "t*(t>>(t&4096?t*t>>12:t>>12))|t<<(t>>8)|t>>4"
	},
	{
		description: "chip arpeggio that eats itself",
		author: "kb_",
		url: "http://www.pouet.net/topic.php?which=8357&page=8#c388898",
		date: "2011-10-04",
		sampleRate: 44100,
		codeMinified: "(((t>>1)*(15&(0x234568a0>>((t>>8)&28))))|((t>>1)>>(t>>11))^(t>>12))+((t>>4)&(t&24))",
		codeOriginal: "((t>>1)*(15&0x234568a0>>(t>>8&28))|t>>1>>(t>>11)^t>>12)+(t>>4&t&24)",
		starred: 1
	},
	{
		description: "CA98",
		starred: 2,
		children: [
			{
				author: "rrrola",
				url: "http://www.pouet.net/topic.php?which=8357&page=9#c388902",
				date: "2011-10-04",
				codeOriginal: "t*(0xCA98CA98>>(t>>9&30)&15)|t>>8"
			},
			{
				description: "slightly shorter version of rrola's",
				author: "ryg",
				url: "http://www.pouet.net/topic.php?which=8357&page=9#c388929",
				date: "2011-10-04",
				codeOriginal: "t*(0xCA98>>(t>>9&14)&15)|t>>8"
			}
		]
	},
	{
		description: "Modem melody",
		children: [
			{
				author: "krcko",
				url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
				date: "2011-10-04",
				codeOriginal: "(t&t>>12)*(t>>4|t>>8)",
				starred: 1
			},
			{
				description: "The 8-bit echo",
				author: "[deleted]",
				url: "https://www.reddit.com/r/bytebeat/comments/20km9l/cool_equations/",
				date: "2014-03-16",
				codeOriginal: "(t-(t>>4&t>>8)&t>>12)-1"
			}
		]
	},
	{
		author: "tangent128",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1317761042403#c4044676811126652266",
		date: "2011-10-04",
		codeOriginal: "t * ( ((t>>9)&10) | ((t>>11)&24) ^((t>>10)&15&(t>>15)) )",
		codeMinified: "t*(t>>9&10|t>>11&24^t>>10&15&t>>15)"
	},
	{
		author: "droid",
		url: "http://www.pouet.net/topic.php?which=8357&page=10#c388999",
		date: "2011-10-05",
		codeOriginal: "t>>6&1?t>>5:-t>>4"
	},
	{
		author: "ryg",
		children: [
			{
				description: "triangle waves",
				url: "http://www.pouet.net/topic.php?which=8357&page=11#c389010",
				date: "2011-10-05",
				codeOriginal: "(t<<5)^-(t>>3&1)"
			},
			{
				description: "the general form is (t<&lt;N)^-(t<<(N-8)&1)",
				codeOriginal: "(t<<4)^-(t>>4&1)"
			},
			{
				codeOriginal: "(t<<3)^-(t>>5&1)"
			},
			{
				description: "a jaunty tune",
				url: "http://www.pouet.net/topic.php?which=8357&page=17#c389829",
				date: "2011-10-10",
				codeOriginal: "(t*(t>>12)*64+(t>>1)*(t>>10)*(t>>11)*48)>>(((t>>16)|(t>>17))&1)",
				codeMinified: "t*(t>>12)*64+(t>>1)*(t>>10)*(t>>11)*48>>((t>>16|t>>17)&1)"
			}
		]
	},
	{
		description: "ass kicking vocals (starting properly after 50s or so)",
		author: "Tundrah",
		url: "https://www.pouet.net/topic.php?which=8357&page=12#c389107",
		date: "2011-10-05",
		codeOriginal: "(t>>5)|(t>>4)|((t%42)*(t>>4)|(0x15483113)-(t>>4))/(t>>16)^(t|(t>>4))",
		codeMinified: "t>>5|t>>4|(t%42*(t>>4)|357052691-(t>>4))/(t>>16)^(t|t>>4)"
	},
	{
		description: "Good old fractal melody",
		author: "Blueberry",
		url: "http://www.pouet.net/topic.php?which=8357&page=12#c389114",
		date: "2011-10-05",
		codeOriginal: "t*(((t>>9)^((t>>9)-1)^1)%13)",
		codeMinified: "(t>>9^(t>>9)-1^1)%13*t",
		starred: 1
	},
	{
		description: "Slow progression with 8-bit Atari inspired sounds",
		author: "visy",
		url: "http://www.pouet.net/topic.php?which=8357&page=13#c389250",
		date: "2011-10-06",
		codeOriginal: "(t%25-(t>>2|t*15|t%227)-t>>3)|((t>>5)&(t<<5)*1663|(t>>3)%1544)/(t%17|t%2048 )",
		codeMinified: "t%25-(t>>2|15*t|t%227)-t>>3|(t>>5&1663*(t<<5)|(t>>3)%1544)/(t%17|t%2048)",
		starred: 1
	},
	{
		description: "A bit long I suppose...but nice and soothing. Featuring a snippet from yumeji on pouet.net",
		author: "beyon",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1318081308422#c4945456935852459432",
		date: "2011-10-08",
		codeOriginal: "t>>6^t&0x25|t+(t^t>>11)-t*((t%24?2:6)&t>>11)^t<<1&(t&0x256?t>>4:t>>10)",
		codeMinified: "t>>6^t&37|t+(t^t>>11)-t*((t%24?2:6)&t>>11)^t<<1&(t&598?t>>4:t>>10)",
		starred: 2
	},
	{
		author: "harism",
		url: "http://viznut.fi/demos/unix/bytebeat_formulas.txt",
		date: "2011-10-09",
		codeOriginal: "((t>>1%128)+20)*3*t>>14*t>>18",
		codeMinified: "3*((t>>1)+20)*t>>14*t>>18"
	},
	{
		descriotion: "Feel the funk y'all (or something)",
		author: "George",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1318282586154#c3276288453210259061",
		date: "2011-10-10",
		codeOriginal: "20 * t*t* (t >>11)/7",
		codeMinified: "20*t*t*(t>>11)/7",
		starred: 1
	},
	{
		description: "music bugs",
		author: "Ola",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1318368575135#c8615755234789420078",
		date: "2011-10-11",
		codeOriginal: "((1-(((t+10)>>((t>>9)&((t>>14))))&(t>>4&-2)))*2)*(((t>>10)^((t+((t>>6)&127))>>10))&1)*32+128",
		codeMinified: "2*(1-(t+10>>(t>>9&t>>14)&t>>4&-2))*((t>>10^t+(t>>6&127)>>10)&1)*32+128"
	},
	{
		author: "Niklas_Roy",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1318497618021#c332012386255047591",
		date: "2011-10-13",
		children: [
			{
				description: "Arcade game",
				codeOriginal: "( t* (( t>>9| t>>13 ) & 15)) & 129",
				codeMinified: "t*((t>>9|t>>13)&15)&129"
			},
			{
				description: "Clean melody",
				codeOriginal: "t*(t>>9|t>>13)&16"
			},
			{
				description: "Louder clean melody",
				codeOriginal: "9*(t*((t>>9|t>>13)&15)&16)"
			}
		]
	},
	{
		author: "erlehmann",
		children: [
			{
				description: "sine-nomath",
				url: "https://github.com/erlehmann/algorithmic-symphonies/blob/master/sine-nomath/",
				date: "2011-11-18",
				codeOriginal: "(t&0xF)*((0-t)&0xF)*(((t&0x10)>>3)-1)*0x80/0x41+0x80",
				codeMinified: "(t&15)*(0-t&15)*(((t&16)>>3)-1)*128/65+128"
			},
			{
				description: "crowd",
				url: "https://github.com/erlehmann/algorithmic-symphonies/blob/master/crowd/",
				date: "2011-12-01",
				codeOriginal: "((t<<1)^((t<<1)+(t>>7)&t>>12))|t>>(4-(1^7&(t>>19)))|t>>7",
				codeMinified: "t<<1^(t<<1)+(t>>7)&t>>12|t>>4-(1^7&t>>19)|t>>7"
			}
		]
	},
	{
		author: "wiretapped",
		url: "https://www.noisebridge.net/wiki/Bytebeat",
		children: [
			{
				date: "2012-02-23",
				codeOriginal: "t^t>>4^(t*((t>>(11+(t>>16)%3))%16))^t*3",
				codeMinified: "t^t>>4^(t>>11+(t>>16)%3)%16*t^3*t"
			},
			{
				date: "2012-07-07",
				codeOriginal: "t*(3+(t>>10)%(4+(t>>11)%8))|(t>>5)",
				codeMinified: "t*(3+(t>>10)%(4+(t>>11)%8))|t>>5"
			},
			{
				date: "2014-07-11",
				codeOriginal: "t*(1+((t>>10)*(43+(2*(t>>(15-((t>>16)%13)))%8)))%8)*(1+(t>>14)%4)",
				codeMinified: "t*(1+(t>>10)*(43+2*(t>>15-(t>>16)%13)%8)%8)*(1+(t>>14)%4)",
				starred: 1
			},
			{
				date: "2015-03-20",
				codeOriginal: "(1+(t>>10)%7)*((t*(1+(t>>13)%4))%(24+(t>>14)*9%8)&16)*10",
				codeMinified: "(1+(t>>10)%7)*(t*(1+(t>>13)%4)%(24+9*(t>>14)%8)&16)*10"
			},
			{
				date: "2015-03-20",
				codeOriginal: "((t*(1|(t>>10-((t>>17)%4))%8))&(8<<((t>>13)%4))*((1|(t>>15)%8))) *11*(t>>10)",
				codeMinified: "11*(t*(1|(t>>10-(t>>17)%4)%8)&(8<<(t>>13)%4)*(1|(t>>15)%8))*(t>>10)"
			},
			{
				date: "2017-09-30",
				codeOriginal: "(((t>>((t>>12)%4))+t*(1+(1+(t>>16)%6)*((t>>10))*(t>>11)%8))^(t>>13))^((t>>6))",
				codeMinified: "(t>>(t>>12)%4)+t*(1+(1+(t>>16)%6)*(t>>10)*(t>>11)%8)^t>>13^t>>6"
			}
		]
	},
	{
		author: "yehar",
		children: [
			{
				description: "a bare-bones version",
				url: "http://www.pouet.net/topic.php?which=8357&page=21#c401690",
				date: "2012-02-25",
				codeOriginal: "t>>4|t*t*(t>>6&8^8)*(t>>11^t/3>>12)/(7+(t>>10&t>>14&3))",
				starred: 1
			},
			{
				description: "ONE MILLION alarm clocks",
				url: "http://www.pouet.net/topic.php?which=8357&page=21#c401895",
				date: "2012-02-27",
				codeOriginal: "t*t/(t>>12&t>>8)<<7",
				starred: 1
			}
		]
	},
	{
		author: "isislovecruft",
		url: "https://www.noisebridge.net/wiki/Bytebeat",
		children: [
			{
				date: "2012-07-11",
				codeOriginal: "((t*(t>>13|t>>8))|(t>>16)^t)-64",
				codeMinified: "(t*(t>>13|t>>8)|t>>16^t)-64"
			},
			{
				date: "2012-07-14",
				codeOriginal: "((~t>>2)*(2+(42&t*((7&t>>10)*2))<(24&t*((3&t>>14)+2))))",
				codeMinified: "(~t>>2)*(2+(42&2*t*(7&t>>10))<(24&t*((3&t>>14)+2)))"
			}
		]
	},
	{
		author: "[Deleted]",
		url: "https://www.reddit.com/r/bytebeat/comments/20km9l/cool_equations/",
		date: "2014-03-16",
		children: [
			{
				description: "Wip",
				codeOriginal: "(((t&t*5)|t>>4)+(t|t>>4*t<<8-1))^t>>12",
				codeMinified: "(t&5*t|t>>4)+(t|t>>4*t<<7)^t>>12"
			},
			{
				description: "Extremely loud grinding machine",
				codeOriginal: "t/(t%(t>>8|t>>16))",
				starred: 1
			},
			{
				description: "Everything is broken",
				codeOriginal: "(t*t/(1+(t>>9&t>>8)))&128",
				codeMinified: "t*t/(1+(t>>9&t>>8))&128",
				starred: 1
			},
			{
				description: "It wont stop",
				codeOriginal: "t*((t/401)^(t/400))",
				codeMinified: "t*(t/401^t/400)"
			},
			{
				description: "Ststututterter",
				codeOriginal: "(t*(-(t>>8|t|t>>9|t>>13)))^t",
				codeMinified: "t*-(t>>8|t|t>>9|t>>13)^t"
			},
			{
				description: "Waiver",
				codeOriginal: "(((t/91)&t)^((t/90)&t))-1",
				codeMinified: "(t/91&t^t/90&t)-1"
			},
			{
				description: "Glissando",
				codeOriginal: "(t*t)/(t>>13 ^ t>>8)",
				codeMinified: "t*t/(t>>13^t>>8)"
			},
			{
				description: "Plucker v2",
				codeOriginal: "((t/4)>>t/4)|(t>>2)",
				codeMinified: "t/4>>t/4|t>>2"
			}
		]
	},
	{
		description: "2ch.so Generative Music and remixes vol.1",
		author: "Anonymous from russian imageboards",
		url: "http://abload.de/img/1405110021643uguil.jpg",
		date: "2014-07-11",
		children: [
			{
				description: "1) THE SWINGS",
				codeOriginal: "(t%262144<131072)?(((t/64)>>3&t*2&t*10)|(t>>5&t*6)&(t>>4|t>>5)):(t%262144>131072&t%262144<163840)?(t>>4&t*8)&(t>>5|t>>4)|(t*3&t*10):(t%262144>163840&t%262144<196608)?(t>>4&t*8)&(t>>5|t>>4)|(t*3&t*6):(t%262144>196608&t%262144<229376)?(t>>4&t*8)&(t>>5|t>>4)|(t*4&t*6):(t%262144>229376&t%262144<245760)?(t>>4&t*8)&(t>>5|t>>4)|(t*4&t*2):(t>>4&t*8)&(t>>4)|(t*4&t*2)>>20",
				codeMinified: "131072>t%262144?t/64>>3&2*t&10*t|t>>5&6*t&(t>>4|t>>5):131072<t%262144&163840>t%262144?t>>4&8*t&(t>>5|t>>4)|3*t&10*t:163840<t%262144&196608>t%262144?t>>4&8*t&(t>>5|t>>4)|3*t&6*t:196608<t%262144&229376>t%262144?t>>4&8*t&(t>>5|t>>4)|4*t&6*t:229376<t%262144&245760>t%262144?t>>4&8*t&(t>>5|t>>4)|4*t&2*t:t>>4&8*t&t>>4|(4*t&2*t)>>20",
				starred: 2
			},
			{
				description: "2) ZEMFIRA",
				url: "http://arhivach.ng/thread/28592/#71681967",
				codeOriginal: "((t*40>>430|t*40>>4)*430)",
				codeMinified: "430*(5*t>>11|5*t>>1)",
				starred: 1
			},
			{
				description: "4) CAT-GIRL",
				codeOriginal: "t<35000?((t*8)|(t>>2)+(t*13)|(t>>3)%t|t>>5):(t<67500?((t*9)|(t>>2)+(t*13)|(t>>3)%t|t>>5):(t<84000?((t*9)|(t>>2)+(t*12)|(t>>3)%t|t>>5):(t<98000?((t*8)|(t>>2)+(t*12)|(t>>3)%t|t>>5):(t<129000?((t*8)|(t>>2)+(t*13)|(t>>3)%t|t>>5):t%0))))",
				codeMinified: "35E3>t?8*t|(t>>2)+13*t|(t>>3)%t|t>>5:67500>t?9*t|(t>>2)+13*t|(t>>3)%t|t>>5:84E3>t?9*t|(t>>2)+12*t|(t>>3)%t|t>>5:98E3>t?8*t|(t>>2)+12*t|(t>>3)%t|t>>5:129E3>t?8*t|(t>>2)+13*t|(t>>3)%t|t>>5:t%0",
				starred: 2
			},
			{
				description: "7) RICK ROLL",
				codeOriginal: "t>125000?t*4.238:t>124375?t*0.01:t>125000?t*4.238:t>122500?t*4.757:t>120000?t*3.364:t>118750?t*0.01:t>115000?t*3.364:t>113750?t*3.564:t>110000?t*4:t>108750?t*0.01:t>106250?t*4.757:t>105000?t*0.01:t>102500?t*4.238:t>101250?t*3.564:t>100000?t*4.238:t>98750?t*3.564:t>97500?t*3.175:t>95000?t*3.564:t>93750?t*4:t>91250?t*4.238:t>90000?t*0.01:t>87500?t*4.757:t>86250?t*0.01:t>83750?t*4.757:t>82500?t*3.564:t>81250?t*4.238:t>80000?t*3.564:t>78750?t*3.175:t>77500?t*0.01:t>72500?t*4.757:t>71250?t*0.01:t>68750?t*5.339:t>67500?t*0.01:t>65000?t*5.339:t>63750?t*3.564:t>62500?t*4.238:t>61250?t*3.564:t>60000?t*3.175:t>52500?t*3.175:t>45000?t*4.757:t>36250?t*4.283:t>35000?t*5.339:t>33750?t*5.657:t>32500?t*6.35:t>25000?t*5.656:t>20000?t*5.04:t>18500?t*3.36:t>7500?t*5.04:t*4.236",
				codeMinified: "125E3<t?4.238*t:124375<t?.01*t:125E3<t?4.238*t:122500<t?4.757*t:12E4<t?3.364*t:118750<t?.01*t:115E3<t?3.364*t:113750<t?3.564*t:11E4<t?4*t:108750<t?.01*t:106250<t?4.757*t:105E3<t?.01*t:102500<t?4.238*t:101250<t?3.564*t:1E5<t?4.238*t:98750<t?3.564*t:97500<t?3.175*t:95E3<t?3.564*t:93750<t?4*t:91250<t?4.238*t:9E4<t?.01*t:87500<t?4.757*t:86250<t?.01*t:83750<t?4.757*t:82500<t?3.564*t:81250<t?4.238*t:8E4<t?3.564*t:78750<t?3.175*t:77500<t?.01*t:72500<t?4.757*t:71250<t?.01*t:68750<t?5.339*t:67500<t?.01*t:65E3<t?5.339*t:63750<t?3.564*t:62500<t?4.238*t:61250<t?3.564*t:6E4<t?3.175*t:52500<t?3.175*t:45E3<t?4.757*t:36250<t?4.283*t:35E3<t?5.339*t:33750<t?5.657*t:32500<t?6.35*t:25E3<t?5.656*t:2E4<t?5.04*t:18500<t?3.36*t:7500<t?5.04*t:4.236*t",
				starred: 1
			},
			{
				description: "9) SADLY",
				url: "http://arhivach.ng/thread/28592/#71681889",
				codeOriginal: "((t*4>>43|t*4>>4)*43)",
				codeMinified: "43*(4*t>>43|4*t>>4)"
			},
			{
				description: "11) THE HIT OF THE SEASON",
				url: "http://arhivach.ng/thread/28592/#71678428",
				codeOriginal: "(t>0&t<65535?t%32>(t/10000)?t>>4:t>>6:0+t>65535&t<65535*2?t%32>(t%43)?t>>4:t>>6:0+t>65535*2&t<65535*3?t%36>(t%43)?t>>4:t>>6:0+t>65535*3&t<65535*4?t%64>(t%43)?t>>4:t>>6:0+t>65535*4&t<65535*5?t%43>5?t<<3:t>>6:0+t>65535*5&t<65535*6?t%27>5?t<<3:t>>6:0+t>65535*6&t<65535*8?t%63>5?t<<3:t>>6:0)&(t>>4)",
				codeMinified: "(0<t&65535>t?t%32>t/1E4?t>>4:t>>6:65535<0+t&131070>t?t%32>t%43?t>>4:t>>6:131070<0+t&196605>t?t%36>t%43?t>>4:t>>6:196605<0+t&262140>t?t%64>t%43?t>>4:t>>6:262140<0+t&327675>t?5<t%43?t<<3:t>>6:327675<0+t&393210>t?5<t%27?t<<3:t>>6:393210<0+t&524280>t?5<t%63?t<<3:t>>6:0)&t>>4",
				starred: 1
			},
			{
				description: "12) PSYCHEDELIC",
				codeOriginal: "t<40000?((t<20000?((t%(t>>9)*10)|(t/2)&t):(t*(t>>9)*10)&t/2)|(t%(t>>9)*3)&t/16):(t*(t>>9)^t)",
				codeMinified: "4E4>t?(2E4>t?t%(t>>9)*10|t/2&t:t*(t>>9)*10&t/2)|t%(t>>9)*3&t/16:t*(t>>9)^t"
			},
			{
				description: "15) FRACTAL",
				codeOriginal: "((t*2>>43|t*3*5>>4)*19)&(t*7>>172)/2",
				codeMinified: "19*(2*t>>43|15*t>>4)&(7*t>>172)/2"
			}
		]
	},
	{
		description: "Extraordinary thread of FRACTAL MUSIC",
		author: "Anonymous from russian imageboards",
		url: "http://arhivach.ng/thread/28592/",
		date: "2014-07-12",
		children: [
			{
				url: "http://arhivach.ng/thread/28592/#71678984",
				codeOriginal: "((t>>4+t%34)|(t>>5+t%(43+(t/7777%8>4?3:0))))|(t/4)|((t/8)%32+3)",
				codeMinified: "t>>4+t%34|t>>5+t%(43+(4<t/7777%8?3:0))|t/4|t/8%32+3",
				starred: 1
			},
			{
				description: "Electrohouse",
				url: "http://arhivach.ng/thread/28592/#71681785",
				codeOriginal: "t>>(((t%2?t%((t>>13)%8>=2?((t>>13)%8>=4?41:51):61):t%34)))|(~t>>4)",
				codeMinified: "t>>t%(t%2?t&32768?41:t&16384?51:61:34)&t>>4",
				starred: 2
			}
		]
	},
	{
		description: "fiesta",
		author: "cce",
		url: "https://battleofthebits.org/arena/Entry/fiesta/17514/",
		date: "2015-04-14",
		codeOriginal: "((t * (3 + (4 + ((t >> 12) % 2))*(t >> 10) % 7)) & 0x80) * 0.5 * (0.15 + (((t>>9) % 2)))",
		codeMinified: "(t*(3+(4+(t>>12)%2)*(t>>10)%7)&128)*.5*(.15+(t>>9)%2)",
		starred: 1
	},
	{
		description: "son of a glitch",
		author: "Xaser",
		url: "https://battleofthebits.org/arena/Entry/son+of+a+glitch.txt/17660/",
		date: "2015-04-29",
		codeOriginal: "( ( ((((t >> 10) & 44) % 32) >> 1) + ((((t >> 9) & 44) % 32) >> 1) ) * (t % (2 << 15) < (2 << 14) ? 1.0 : 0.8) * t | t >> 3 ) * (t|(t>>8|t>>6))",
		codeMinified: "((((t>>10&44)%32>>1)+((t>>9&44)%32>>1))*(32768>t%65536?1:.8)*t|t>>3)*(t|t>>8|t>>6)",
		starred: 2
	},
	{
		author: "Gabriel Miceli",
		url: "https://www.youtube.com/watch?v=V4GfkFbDojc",
		date: "2016-07-09",
		children: [
			{
				description: "Techno",
				sampleRate: 11025,
				codeOriginal: "(t*(((t/10|0)^(t/10|0)-1280)%11)/2&127)+(t*(((t/640|0)^(t/640|0)-2)%13)/2&127)",
				codeMinified: "(((t/10|0)^(t/10|0)-1280)%11*t/2&127)+(((t/640|0)^(t/640|0)-2)%13*t/2&127)"
			},
			{
				description: "New Sawtooth Music",
				codeOriginal: "t*((t-2296&t)>>11)"
			},
			{
				description: "Song by Gabriel Miceli",
				codeOriginal: "(t&t+t/256)-t*(t>>15)&64"
			}
		]
	},
	{
		description: "remix of \"I hear the long meowing of a cat :)\" by SthephanShi",
		author: "RealZynx92",
		url: "https://www.reddit.com/r/bytebeat/comments/pz264e/remix_of_i_hear_the_long_meowing_of_a_cat/",
		date: "2021-10-01",
		codeOriginal: "t*((t/2>>10|t%16*t>>8)&8*t>>12&18)|-(t/16)+64"
	},
	{
		author: "GDPlayer_1035",
		children: [
			{
				description: "test3",
				url: "https://www.reddit.com/r/bytebeat/comments/q6ar3c/test3/",
				date: "2021-10-12",
				sampleRate: 44100,
				codeOriginal: "((t*t-t/400*t/800^t/900)&192&-t/30)+t/40&t/80^t/80"
			},
			{
				description: "thing",
				url: "https://www.reddit.com/r/bytebeat/comments/q8cqdv/thing/",
				date: "2021-10-15",
				sampleRate: 44100,
				codeOriginal: "(t&t/2&t/4)*t/4E3",
				starred: 1
			}
		]
	},
	{
		description: "Electrohouse2",
		author: "Chasyxx",
		url: "https://www.reddit.com/r/bytebeat/comments/qi3enp/with_new_bytecodes_already_posted_here_are_all/",
		date: "2021-10-29",
		remixed: {
			description: "Electrohouse",
			author: "Anonymous from russian imageboards",
			url: "http://arhivach.ng/thread/28592/"
		},
		codeOriginal: "t>>t%(t%2?t&32768?41:t&16384?51:61:34)&(t/9&t/7|t/5&t/3|t|t*3&t*5|t*7&t*9)>>4"
	},
	{
		author: "kOLbOSa_exe",
		children: [
			{
				description: "OUR task is infinity",
				url: "https://www.reddit.com/r/bytebeat/comments/qi6eym/task_is_infinity/",
				date: "2021-10-29",
				codeOriginal: "t*(((t>>11&(t>>12))*(t>>8&(t>>16)))%34)+4e5/(t&4095)",
				codeMinified: "(t>>11&t>>12)*(t>>8&t>>16)%34*t+4E5/(t&4095)"
			},
			{
				description: "NO ARRAY ARRAY SONG",
				url: "https://www.reddit.com/r/bytebeat/comments/qjmy4v/no_array_array_song/",
				date: "2021-10-31",
				sampleRate: 44100,
				codeOriginal: "((t/t+(((t>>12)%6))+((t>>16)%3))*10)*t>>4",
				codeMinified: "(t/t+(t>>12)%6+(t>>16)%3)*10*t>>4"
			},
			{
				description: "NO ARRAY ARRAY SONG sqare ver",
				url: "https://www.reddit.com/r/bytebeat/comments/qjmy4v/no_array_array_song/",
				date: "2021-10-31",
				sampleRate: 44100,
				codeOriginal: "((t/t+(((t>>12)%6))+((t>>16)%3))*10)*(t/6)&64",
				codeMinified: "t/6*(t/t+(t>>12)%6+(t>>16)%3)*10&64"
			}
		]
	},
	{
		author: "getDolphinedLol",
		children: [
			{
				description: "thing",
				url: "https://www.reddit.com/r/bytebeat/comments/r4tpnq/thing_remix_by_getdolphinedlol/",
				date: "2021-11-29",
				sampleRate: 44100,
				codeOriginal: "t-((t>>(t&8192?3:2)>>2|t)&t>>10)"
			},
			{
				description: "floppy spinner :)",
				url: "https://www.reddit.com/r/bytebeat/comments/r58bdq/floppy_spinner_reposted_because_when_you_click/",
				date: "2021-11-30",
				sampleRate: 11025,
				codeOriginal: "t*(39&t>>12-t*(43&t>>10)/t*(49&t>>11)&t>>9-1)%200",
				codeMinified: "t*(39&t>>12-t*(43&t>>10)/t*(49&t>>11)&t>>8)%200"
			},
			{
				description: "sounds so emotional...",
				url: "https://www.reddit.com/r/bytebeat/comments/r7xva3/sounds_so_emotional_16k_hz/",
				date: "2021-12-03",
				sampleRate: 16000,
				codeOriginal: "t*(4&t>>14)+t*(3-(4&t>>10))*(2+(5&t>>12))"
			},
			{
				description: "Blobfish Party (made by experimenting with \"The time is running out!\")",
				url: "https://www.reddit.com/r/bytebeat/comments/rez7uh/blobfish_party_made_by_experimenting_with_the/",
				date: "2021-12-12",
				sampleRate: 11025,
				codeOriginal: "(t*(t&8192?7:5)*(6-(3&t>>8)+(3&t>>9))>>(3&-t>>(t&2048?2:11))|t>>3)",
				codeMinified: "t*(t&8192?7:5)*(6-(3&t>>8)+(3&t>>9))>>(3&-t>>(t&2048?2:11))|t>>3",
				starred: 1
			}
		]
	},
	{
		author: "Decent-Manager-6169",
		children: [
			{
				description: "stimmer but square and sawtooth are swap",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rk816x/stimmer_but_square_and_sawtooth_are_swap/",
				date: "2021-12-20",
				codeOriginal: "(t/2*(4|7&t>>13)>>(~t>>11&1)&127)+(t*2*(t>>11&t>>13)*(~t>>9&3)&128)"
			},
			{
				description: "stimmer but its all sawtooth",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rlcyg7/stimmer_but_its_all_sawtooth/",
				date: "2021-12-21",
				codeOriginal: "(t/2*(4|7&t>>13)>>(~t>>11&1)&127)+(t*(t>>11&t>>13)*(~t>>9&3)&127)"
			},
			{
				description: "stimmer but its all square",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rlczbs/stimmer_but_its_all_square/",
				date: "2021-12-21",
				codeOriginal: "(t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&64)",
				starred: 1
			},
			{
				description: "Completely Reverse of \"rrrola\"",
				remixed: {
					description: "rrrola",
					url: "http://www.pouet.net/topic.php?which=8357&page=9#c388902"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rwdxp0/completely_reverse_of_rrrola/",
				date: "2022-01-05",
				codeOriginal: "-t*(0xCA98CA98>>(-t>>9&30)&15)|-t>>8",
				starred: 1
			}
		]
	},
	{
		description: "Bagpipes or something",
		author: "_elevate__",
		url: "https://www.reddit.com/r/bytebeat/comments/rul9d3/bagpipes_or_something/",
		date: "2022-01-03",
		sampleRate: 22050,
		codeOriginal: "(((((t/1)/t+(t>>3)%8+(t>>3)%3)*1*t>>12)))",
		codeMinified: "(1+(t>>3)%8+(t>>3)%3)*t>>12"
	},
	{
		description: "Duck Hunt",
		author: "Diicorp95",
		remixed: {
			description: "Noise Maker",
			author: "Gabriel Miceli",
			url: "https://www.youtube.com/watch?v=V4GfkFbDojc"
		},
		url: "https://www.reddit.com/r/bytebeat/comments/s4oi7c/11025_hz_duck_hunt/",
		date: "2022-01-15",
		sampleRate: 11025,
		codeOriginal: "((t>>9^(t>>9)-1^1)%13*t&31)*(2+(t>>4))"
	},
	{
		author: "lhphr",
		url: "https://dollchan.net/btb/res/3.html#44",
		date: "2022-04-14",
		children: [
			{
				description: "idk it's \"t%\"",
				codeOriginal: "(t%(t&t>>12))*t>>8",
				codeMinified: "t%(t&t>>12)*t>>8"
			},
			{
				description: ":arp",
				date: "2022-03-13",
				sampleRate: 44100,
				codeOriginal: "((t>>(1+(t>>18)%2))%256*(t%(4+((t>>15)%8))))",
				codeMinified: "(t>>1+(t>>18)%2)%256*(t%(4+(t>>15)%8))"
			},
			{
				description: "%ral",
				date: "2022-04-14",
				sampleRate: 22050,
				codeOriginal: "t>>6^t&t>>9^t>>12|(t<<(t>>6)%4^-t&-t>>13)%128^-t>>1"
			}
		]
	}
];
var floatbeat = [
	{
		author: "Wiebe-Marten Wijnja",
		url: "http://wmmusic.nl/",
		children: [
			{
				description: "Cover of 'Predestined Fate' from VVVVVV",
				mode: "Floatbeat",
				file: "Wiebe-Marten Wijnja - Cover of 'Predestined Fate' from VVVVVV.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "Cover of 'Please Exist' from Knytt Underground",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "Wiebe-Marten Wijnja - Cover of 'Please Exist' from Knytt Underground.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Cover of 'Focus' from SuperHexagon",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "Wiebe-Marten Wijnja - Cover of 'Focus' from SuperHexagon.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Game of Thrones theme",
				url: "https://js1k.com/2014-dragons/details/1953",
				date: "2014",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "Wiebe-Marten Wijnja - Game of Thrones theme.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 1
			}
		]
	},
	{
		author: "lehandsomeguy",
		url: "https://www.reddit.com/r/bytebeat/comments/48r00a/floatbeat_test/",
		date: "2016-03-03",
		children: [
			{
				description: "Floatbeat test",
				mode: "Floatbeat",
				sampleRate: 32000,
				file: "lehandsomeguy - Floatbeat test.js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "Melody with array",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "lehandsomeguy - Melody with array.js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "Melody with array 2",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "lehandsomeguy - Melody with array 2.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "Drone",
				mode: "Floatbeat",
				sampleRate: 11025,
				file: "lehandsomeguy - Drone.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "Trippy test",
				mode: "Floatbeat",
				sampleRate: 44100,
				file: "lehandsomeguy - Trippy test.js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "Random melody with array",
				mode: "Floatbeat",
				sampleRate: 22050,
				file: "lehandsomeguy - Random melody with array.js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "Floatbeat to bytebeat",
				sampleRate: 32000,
				file: "lehandsomeguy - Floatbeat to bytebeat.js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "Pretentious Ryoji Ikeda",
				mode: "Floatbeat",
				sampleRate: 32000,
				file: "lehandsomeguy - Pretentious Ryoji Ikeda.js",
				fileFormatted: true,
				fileOriginal: true
			}
		]
	},
	{
		author: "RealZynx92",
		children: [
			{
				description: "floatbeat thingy",
				url: "https://www.reddit.com/r/bytebeat/comments/rchrtq/floatbeat_thingy/Weird",
				date: "2021-12-09",
				mode: "Floatbeat",
				sampleRate: 32000,
				codeOriginal: [
					"noi=function(x,a){return sin(x/9000*x*x*x)/256*a},",
					"kick=sin(pow(1.6,(-t/512%32+8)))/2,",
					"snare=noi(floor(t/3)*\"01\"[t>>14&1],-(t/128%128)+128)/3,",
					"hihat=noi(t,16-sqrt(-t&4095)/1.5),",
					"mel=min(max(atan(tan(t*[1,4,1,4,1.05,4,1.05,4][t>>13&7]*\"10\"[t>>12&1]/2/41)^sin(t/41)),-1),1)/((t/512&7)+3),",
					"bas=asin(sin(t*[1,1.05,1,1.05,0,1,1.05,1][t>>14&7]/41))/4,",
					"(kick+snare+hihat+mel+bas)/1.5"
				],
				codeMinified: "noi=(x,a)=>sin(x/9E3*x*x*x)/256*a,kick=sin(1.6**(-t/512%32+8))/2,snare=noi(int(t/3)*'01'[t>>14&1],-(t/128%128)+128)/3,hihat=noi(t,16-sqrt(-t&4095)/1.5),mel=min(max(atan(tan(t*[1,4,1,4,1.05,4,1.05,4][t>>13&7]*'10'[t>>12&1]/2/41)^sin(t/41)),-1),1)/((t/512&7)+3),bas=asin(sin(t*[1,1.05,1,1.05,0,1,1.05,1][t>>14&7]/41))/4,(kick+snare+hihat+mel+bas)/1.5",
				starred: 1
			},
			{
				description: "happy floatbeat melody",
				url: "https://www.reddit.com/r/bytebeat/comments/rtkgtn/happy_floatbeat_melody/",
				date: "2022-01-01",
				mode: "Floatbeat",
				sampleRate: 32000,
				codeOriginal: "a=t*[1,1,1,1,1.5,1.5,1.33,1.33][t>>15&7],b=t*[1,1.33][t>>14&1],sin(t*\"6868686834343434\"[t>>13&15]/41)/8+(b*4%256/256)/4+atan(tan(a/41)+cos(a/100))/[4,8,16,32][t>>13&3]",
				codeMinified: "a=t*[1,1,1,1,1.5,1.5,1.33,1.33][t>>15&7],b=t*[1,1.33][t>>14&1],sin(t*'6868686834343434'[t>>13&15]/41)/8+4*b%256/256/4+atan(tan(a/41)+cos(a/100))/[4,8,16,32][t>>13&3]",
				starred: 2
			}
		]
	},
	{
		description: "they're getting closer",
		author: "Bp103",
		url: "https://www.reddit.com/r/bytebeat/comments/rtld2d/theyre_getting_closer/",
		date: "2022-01-01",
		mode: "Floatbeat",
		sampleRate: 44100,
		codeOriginal: "r=44100,q=t/r,sin(q*(1.3*exp(-2*((q*16)%8))+(9e9*exp(-60*((q*64)%8))))+(((q/2)*r)&((q*8)%r))%tan((q*r)%2))",
		codeMinified: "r=44100,q=t/r,sin(q*(1.3*exp(16*q%8*-2)+9E9*exp(64*q%8*-60))+(q/2*r&8*q%r)%tan(q*r%2))"
	},
	{
		description: "new waveform, or this is a sinusoidal abuse?",
		author: "kOLbOSa_exe",
		url: "https://dollchan.net/btb/res/3.html#27",
		date: "2022-01-14",
		mode: "Floatbeat",
		sampleRate: 32000,
		codeOriginal: "gc=t/(t/[12,13,14,15,16,17,18,19,20,21,22,23,24][t>>12&13]),(sin(t/gc)+sin(t/20)+sin(t/20)+tan(sin(t/t-t/(gc+.01))))/4"
	}
];
var funcbeat = [
	{
		description: "Example",
		author: "SArpnt",
		date: "2022-04-24",
		mode: "Funcbeat",
		sampleRate: 48000,
		file: "SArpnt - Funcbeat example.js",
		fileOriginal: true
	}
];
var sthephanshi = [
	{
		description: "\"Explosive beat\". Formulas family discovered by experimenting with \"Explosions\" [<byte-snippet>(t>>2)*(t>>5)|t>>5</byte-snippet>]",
		children: [
			{
				codeOriginal: "(t>>4)*(t>>3)|t>>2"
			},
			{
				codeOriginal: "(t>>4)*(t>>3)|t>>3"
			},
			{
				codeOriginal: "(t>>4)*(t>>3)|t>>4"
			},
			{
				description: "\"Explosive beat\". Obtained from combining the first two formulas",
				codeOriginal: "(t>>4)*(t>>3)|t>>(t&4096?3:2)",
				starred: 1
			},
			{
				description: "\"M-m-multiple explosion beat\"",
				codeOriginal: "(t>>4)*(t>>2)|t>>(t>>12)%4"
			},
			{
				description: "\"Diesel engine\"",
				codeOriginal: "(t>>5)*(t>>5)|t>>2"
			}
		]
	},
	{
		description: "\"Robocop\". Cool beat discovered by experimenting with [<byte-snippet>(t>>2)*(t&16)|t>>2</byte-snippet>]",
		children: [
			{
				description: "Very cool sound with biting blows",
				codeOriginal: "(t>>2)*(t&(t&32768?16:24)|t>>(t>>8&28))|t>>2",
				starred: 1
			},
			{
				description: "Lower bass",
				codeOriginal: "(t>>3)*(t&(t&32768?16:24)|t>>(t>>8&28))|t>>2"
			},
			{
				description: "Slower tempo",
				codeOriginal: "(t>>2)*(t&(t&32768?16:24)|t>>(t>>8&24))|t>>3"
			}
		]
	},
	{
		description: "\"Toy phone\". Interesting formulas, sounds similar to children's toys",
		children: [
			{
				description: "Someone is calling by phone",
				codeOriginal: "t*((t>>10|t%16*t>>5)&8*t>>10&18)"
			},
			{
				description: "Very funny voice :)",
				codeOriginal: "t*((t>>10|t%16*t>>5)&8*t>>12&18)",
				starred: 1
			},
			{
				description: "I hear the long mewing of a cat :)",
				codeOriginal: "t*((t>>10|t%16*t>>8)&8*t>>12&18)"
			}
		]
	},
	{
		description: "\"Child swings\". Cool happy tune!",
		remixed: {
			description: "1) THE SWINGS",
			author: "Anonymous from russian imageboards",
			url: "http://abload.de/img/1405110021643uguil.jpg"
		},
		codeOriginal: "t>>9&2*t&10*t|t>>5&6*t",
		starred: 2
	},
	{
		description: "\"Cat-girl\". Nya!",
		remixed: {
			description: "4) CAT-GIRL",
			author: "Anonymous from russian imageboards",
			url: "http://abload.de/img/1405110021643uguil.jpg"
		},
		codeOriginal: "17*t|(t>>2)+(t&32768?13:14)*t|t>>3|t>>5",
		starred: 1
	},
	{
		description: "\"Trance beat\". Experiments with t>>N and ternary operations",
		remixed: {
			description: "11) THE HIT OF THE SEASON",
			author: "Anonymous from russian imageboards",
			url: "http://abload.de/img/1405110021643uguil.jpg"
		},
		children: [
			{
				codeOriginal: "t>>(t%16?4:6)|t>>(t%128?10:4)"
			},
			{
				codeOriginal: "t>>(t%32?4:3)|(t%128?t>>3:t>>3|t>>9)"
			}
		]
	},
	{
		description: "\"Brain burner\". RIP headphone users!",
		codeOriginal: "129*t%(t>>7)"
	},
	{
		description: "\"Psychedelica\". Experimenting with resonance",
		codeOriginal: "t^t%1001+t^t%1002"
	},
	{
		description: "\"Protoss engine\". Experimenting with resonance, a pretty hypnotic result",
		codeOriginal: "2*(-t%128|t%130)"
	},
	{
		description: "Harmonics",
		codeOriginal: "t<<2^t>>4^t<<4&t>>8|t<<1&-t>>4"
	},
	{
		description: "Bass beat + lead",
		codeOriginal: "15-t%(t&16384?26:29)&t>>4|t<<1&-t>>4"
	},
	{
		description: "Arabic beat",
		children: [
			{
				codeOriginal: "t%((t&-16|t>>10)&42)<<2|t>>4",
				starred: 1
			},
			{
				description: "Allahu akbar!",
				codeOriginal: "t%((t&-16|t>>11)&42)<<2|t>>4"
			}
		]
	},
	{
		description: "\"Game levels\"<br>Series of formulas discovered by experimenting with <a href='http://www.pouet.net/topic.php?which=8357&page=9#c388930' target='_blank'>viznut's code</a> [<byte-snippet>t*(3+(1^5&t>>10))*(5+(3&t>>14))>>(3&t>>8)</byte-snippet>]<br>Allows to get different interesting chiptune sounds!<br>",
		children: [
			{
				description: "Let replace (3+(1^5&t>>10)) with (2-(1&-t>>11))",
				codeOriginal: "t*(2-(1&-t>>11))*(5+(3&t>>14))>>(3&t>>8)"
			},
			{
				description: "And just add |t>>2... The tune became cleaner",
				codeOriginal: "t*(2-(1&-t>>11))*(5+(3&t>>14))>>(3&t>>8)|t>>2"
			},
			{
				description: "Replacing 3&t>>14 with 2&t>>14 changes the period and the second tone",
				codeOriginal: "t*(2-(1&-t>>11))*(5+(2&t>>14))>>(3&t>>8)|t>>2"
			},
			{
				description: "\"Boss level\". Slow down |t>>2 rhythm to |t>>3... Sounds dangerous!",
				codeOriginal: "t*(2-(1&-t>>11))*(5+(2&t>>14))>>(3&t>>8)|t>>3",
				starred: 1
			},
			{
				description: "By playing with the \"Boss level\" I made a different percussion",
				codeOriginal: "t*(t&16384?6:5)*(1+(1&t>>12))>>(3&t>>8)|t>>3"
			},
			{
				description: "\"Boss level #2\". |t>>4 rhythm sounds cool!",
				codeOriginal: "t*(t&16384?6:5)*(1+(1&t>>12))>>(3&t>>8)|t>>4"
			},
			{
				description: " "
			},
			{
				description: "Replacing (1+(1&t>>12)) with 3+(1&t>>8) adds an awesome harmonics",
				codeOriginal: "t*(t&16384?6:5)*(3+(1&t>>8))>>(3&t>>8)|t>>4"
			},
			{
				description: "Coefficients 4-/3-/2+/3+ can slightly change them",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>8)|t>>4"
			},
			{
				description: "We can use a ternary operation for more complicated beat",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>8)|t>>(t&4096?3:4)"
			},
			{
				description: "\"Aliens on approach\". Slow down the explosions to 3&t>>9, get a heavy chiptune beat",
				codeOriginal: "t*(t&16384?6:5)*(3-(1&t>>8))>>(3&t>>9)|t>>4",
				starred: 1
			},
			{
				description: "\"Aliens are close\". t>>5 rhythm",
				codeOriginal: "t*(t&16384?6:5)*(3+(1&t>>8))>>(3&t>>9)|t>>5",
				starred: 1
			},
			{
				description: "\"Aliens are here\". t>>6 rhythm - SUPER POWERFUL ECHOES",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>9)|t>>6",
				starred: 2
			},
			{
				description: "Inverted explosions give us mysterious sounds",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&-t>>9)|t>>6"
			},
			{
				description: " "
			},
			{
				description: "\"Aliens attack\". Complicated (t|t*3)>>5 rhythm with explosion drums. Cool!",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>9)|(t|t*3)>>5",
				starred: 1
			},
			{
				description: "\"Aliens encounter\". Making a ternary rhythm gives an EXTRA HARD BEAT!",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>9)|t>>(t&4096?3:4)",
				starred: 2
			},
			{
				description: "Funny inverted sounds :D",
				codeOriginal: "t*(t&16384?6:5)*(3+(3&t>>7))>>(3&t>>9)|t>>(t&4096?3:4)"
			},
			{
				description: " "
			},
			{
				description: "\"Prepare to fight\". Long period, sound is changing from low to high",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&-t>>15)|t>>(t&4096?3:4)",
				starred: 1
			},
			{
				description: "\"Prepare to fight #2\". Previous formula with doubled freqency bass",
				codeOriginal: "2*t*(t&16384?6:5)*(4-(3&t>>8))>>(3&-t>>15)|t>>(t&4096?3:4)",
				starred: 1
			},
			{
				description: "<br>Suddenly I discovered that replacing 3&t>>9 with 3&t>>2 in \"Aliens encounter\" gives a noise sound.<br>This is an excellent instrument for drums. For example, a ternary 3&t>>(t&4096?2:9)"
			},
			{
				description: "\"Aliens encounter + drums\". Impressive sound!",
				codeOriginal: "t*(t&16384?6:5)*(4-(1&t>>8))>>(3&t>>(t&4096?2:9))|t>>(t&4096?3:4)",
				starred: 2
			},
			{
				description: "\"Prepare to fight #2 + drums\"",
				codeOriginal: "2*t*(t&16384?6:5)*(4-(3&t>>8))>>(3&-t>>(t&4096?2:15))|t>>(t&4096?3:4)",
				starred: 2
			},
			{
				description: "<br>Finally you can use complex ternary operators to create more complex drums:"
			},
			{
				description: "\"Ready to fight?\". Cool for a fighting game :)",
				codeOriginal: "2*t*(t&16384?6:5)*(4-(3&t>>8))>>(3&-t>>(t&4096?2:15))|t>>(t&8192?t&4096?4:5:3)",
				starred: 2
			},
			{
				description: "\"Hard level\". My favorite!",
				codeOriginal: "t*(t&16384?7:5)*(5-(3&t>>8))>>(3&-t>>(t&4096?2:16))|t>>(t&16384?t&4096?3:4:3)",
				starred: 2
			},
			{
				description: "<br>Fantastic! Let's continue our experiments:"
			},
			{
				description: "\"Boss level #2\" variation with (1+(3&t>>10)) expression and t>>2 rhythm",
				codeOriginal: "t*(t&16384?6:5)*(1+(3&t>>10))>>(3&t>>8)|t>>2"
			},
			{
				description: "\"Another level\". Adding a noise beat by using ternary operation",
				codeOriginal: "t*(t&16384?6:5)*(1+(3&t>>(t&2048?4:10)))>>(3&t>>8)|t>>2",
				starred: 1
			},
			{
				description: "\"Happy level\". Previous formula with slightly changed coefficitnts",
				codeOriginal: "t*(t&16384?6:5)*(2+(3&t>>(t&2048?4:9)))>>(3&t>>8)|t>>2"
			},
			{
				description: "\"Happy level #2\". Inverted 3&-t>>8 gives a more happy tune :)",
				codeOriginal: "t*(t&16384?6:5)*(2+(3&t>>9))>>(3&-t>>8)|t>>4"
			},
			{
				description: "\"Happy level #3\". We can get an awesome harmonics with 3&-t>>9",
				codeOriginal: "t*(t&16384?6:5)*(2+(3&-t>>9))>>(3&t>>8)|t>>4",
				starred: 1
			},
			{
				description: "\"Awesome level\". We can get a cool cartoon-game melody!",
				codeOriginal: "t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>2",
				starred: 2
			},
			{
				description: "Slower rhythm...",
				codeOriginal: "t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>3",
				starred: 1
			},
			{
				codeOriginal: "t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(2&t>>9)|t>>3"
			},
			{
				description: "\"Awesome level #2\". The next awesome level!",
				codeOriginal: "t*(t&16384?6:5)*(5-(3&t>>(t&4096?7:14)))>>(3&t>>9)|t>>3",
				starred: 2
			},
			{
				description: " "
			},
			{
				description: "\"Alien dungeon\". So sinister.. t>>6 gives a fading effect",
				codeOriginal: "t*(t&16384?7:5)*(3+(3&t>>14))>>(3&t>>9)|t>>6",
				starred: 1
			},
			{
				description: "\"Alien dungeon\" with a complicated rhytm (t|t*3)>>5",
				codeOriginal: "t*(t&16384?7:5)*(3+(3&t>>14))>>(3&t>>9)|(t|t*3)>>5"
			},
			{
				description: "Previous with a slightly different tune",
				codeOriginal: "t*(t&16384?7:5)*(4-(3&t>>14))>>(3&t>>9)|(t|t*3)>>5",
				starred: 1
			},
			{
				description: "Other \"Boss level\" variation",
				codeOriginal: "t*(6+(1&t>>14))>>(3&t>>8)|t>>(t&4096?3:4)"
			},
			{
				description: "Previous tune with a ternary magic",
				codeOriginal: "t*((t&4096?6:16)+(1&t>>14))>>(3&t>>8)|t>>(t&4096?3:4)",
				starred: 1
			}
		]
	},
	{
		description: "The time is running out!",
		url: "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/",
		starred: 2,
		children: [
			{
				date: "2021-10-17",
				sampleRate: 11025,
				codeOriginal: "t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t&4096?2:16))|t>>3"
			},
			{
				description: "More complicated drums",
				date: "2021-10-17",
				sampleRate: 11025,
				codeOriginal: "t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))|t>>3"
			},
			{
				description: "Remix of RealZynx92's remix",
				url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/hhzb9ft/?utm_source=reddit&utm_medium=web2x&context=3",
				remixed: {
					description: "remix of \"The time is running out!\"",
					author: "RealZynx92",
					url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/"
				},
				date: "2021-10-25",
				sampleRate: 11025,
				codeOriginal: "((.5*t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))|t>>4)&127)+(1E5/(t&4095)&128-64)+(random()*(((-t>>(t&4096?6:5))%64)+64))"
			}
		]
	},
	{
		description: "Death chase",
		url: "https://www.reddit.com/r/bytebeat/comments/qh9hhr/death_chase/",
		date: "2021-10-28",
		starred: 2,
		children: [
			{
				description: "As a basis is taken modified <a href='https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/' target='_blank'>\"The time is running out!\"</a> and <a href='https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/' target='_blank'>\"remix by RealZynx92\"</a> songs. Used the idea of selecting notes and rhythm through an array.",
				sampleRate: 44100,
				codeOriginal: "t/=4,c=523.25,cs=554.36,e=659.26,g=784,((t*[cs,e,cs,g,cs,e,cs,c][(t>>14)%8]/(t&2<<16?440:220)*(3-(1&t>>9))>>(3&t>>8)|t>>([5,4,4,4,4,4,4,3,4,4,4,3,4,4,4,4,5,4,4,4,4,4,4,3,5,4,4,4,5,4,4,4][(t>>12)%32]))&127)+(3E5/(t&4095)&128-64)+(random()*(((-t>>([6,5,4,5,5,5,4,5][(t>>12)%8]))%64)+64))"
			},
			{
				description: "\"90's eurodance\" variation",
				sampleRate: 44100,
				codeOriginal: "t/=4,a=440,b=493.88,c=523.25,d=587.32,e=659.26,((t*[e,b,c,a,e,b,c,d][(t>>14)%8]/220*(3-(1&t>>9))>>(3&t>>8)|t>>([5,4,4,4,4,4,4,3,5,4,4,4,5,4,4,4][(t>>12)%16]))&127)+(3E5/(t&4095)&128-64)+(random()*(((-t>>([6,5,5,5,4,5,5,5][(t>>12)%8]))%64)+64))"
			}
		]
	},
	{
		description: "Neurofunk",
		url: "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/",
		date: "2022-01-10",
		starred: 1,
		children: [
			{
				codeOriginal: "t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2)"
			},
			{
				description: "Fist punch version",
				codeOriginal: "t*((t&4096?t%65536<59392?7:t>>6:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?4:3:2)"
			}
		]
	},
	{
		children: [
			{
				description: "\"Flying deep in dark space, you caught a distress signal and landed on an icy planet. In this frozen world, you have found an abandoned base of colonists. There is not a single survivor...\""
			},
			{
				description: "Frozen Planet",
				url: "https://battleofthebits.org/arena/Entry/Frozen+Planet/50767/",
				date: "2022-01-11",
				sampleRate: 44100,
				file: "SthephanShi - Frozen Planet.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		children: [
			{
				description: "\"An endless world of snowy expanses, icebergs, and blue waters...\"<br>The instruments are the same as in \"Frozen Planet\", but the composition is based on playing with coefficients of square-wave arpeggiator and a sine modifier. A notes array is used to generate different sounds in different iterations."
			},
			{
				description: "Antarctica",
				url: "https://www.reddit.com/r/bytebeat/comments/ufxliq/antarctica/",
				date: "2022-05-01",
				sampleRate: 44100,
				file: "SthephanShi - Antarctica.js",
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	}
];
var sarpnt = [
	{
		description: "menacing",
		url: "https://www.reddit.com/r/bytebeat/comments/ff5phi/menacing/",
		date: "2020-03-08",
		sampleRate: 44100,
		codeOriginal: "r=11e3,s=int(t/r+1)%32,b='ćóóóćÎÎÎÎÃÃÃÃÃÃÎ°°°°¦¦¦¦'.charCodeAt(s)/300*t%512,160/3*(sin(t%r/(t%r/100+8))+1)*(s%2+.6*!(s%16))+b%(400+128*sin(b/(21+sin(t/r))))%256/3+(.999*(0xDBC97749&2**s?2*b:b)%128>64+15*sin(t/1e4)?64-t/r%1*32:0)",
		starred: 2
	},
	{
		description: "arpeggiator fun",
		url: "https://www.reddit.com/r/bytebeat/comments/fjsa1y/arpeggiator_fun/",
		date: "2020-03-16",
		sampleRate: 44100,
		codeOriginal: "i=int,c='charCodeAt',b=t/441e3*16,q=b%.5,h=x=>t/2210*2**((x-36)/12)%1,w=(x,y=0)=>(h(x)-sin(y*2+b*PI)/8>.5)*30,s=i(b*2)%32,a=abs(8-i(b*8)%16),t||(v=.5),v=3.65*v*(1-v),sin(q/(q/100+3e-4))*40*!(54878&1<<s%16)+(v-.5)*70*max(0,1-(b+1)%2*.77)+w(s==6&&i(b*6%6)==1?85:s==14&&q<.25?78:'SSSSSSSQOOONNOLJLLLLLNLJIIIGGGGG'[c](s),s==5)+w('@@@@@@BCEEECCBCCEEEEECEEBBB@@@@@'[c](s))+h('pnkgrnkipmigpnkg'[c](a%4+i(s/8)*4)+12*-i(a/4))*27+99",
		starred: 2
	},
	{
		description: "Sync noise synth",
		url: "https://www.reddit.com/r/bytebeat/comments/flmyyd/sync_noise_synth/",
		date: "2020-03-20",
		sampleRate: 44100,
		codeOriginal: [
			"p=409.5, // Pitch",
			"s=sin(t/7e4)*20+22, // Sound",
			"k=3, // Seed",
			"v=50, // Volume",
			"x=sin(int(t%p*s/p+k))*1e4,",
			"(x-int(x))*v"
		]
	},
	{
		description: "pwm serpinski harmony",
		url: "https://www.reddit.com/r/bytebeat/comments/g9106h/pwm_serpinski_harmony/",
		date: "2020-04-27",
		codeOriginal: "t&(t>>7)-t&t>>8"
	},
	{
		description: "shredder",
		url: "https://www.reddit.com/r/bytebeat/comments/gfghdv/shredder_song_not_just_a_terrible_noise/",
		date: "2020-05-07",
		codeOriginal: "(~t>>max(t>>10&15,t>>12&15)&t*\"H$TT`0l6\".charCodeAt(t>>11&7)/19)*(10-(t>>16))",
		starred: 1
	},
	{
		description: "nose grind",
		url: "https://www.reddit.com/r/bytebeat/comments/ggkslh/cant_think_of_a_name_atm_but_new_thing/",
		date: "2020-05-09",
		sampleRate: 44100,
		codeOriginal: "h=t*[.5,.6,.57,.53][int(t/44e3)%4],((h&h*-2.5+sin(t/1e4)*100)%256*-cos(t/2e7+1.61))-10"
	},
	{
		description: "rhythmic thing",
		url: "https://www.reddit.com/r/bytebeat/comments/govfve/rhythmic_thing/",
		date: "2020-05-23",
		codeOriginal: "t*2>>(t*4.5>>4)"
	},
	{
		description: "buzzy grindy beat",
		url: "https://www.reddit.com/r/bytebeat/comments/imprs9/buzzy_grindy_beat/",
		date: "2020-09-04",
		codeOriginal: "t/((t>>3-(t>>14)%2)%(26>>(t>>16)%3))%1024/12<<9/(t>>5&127)"
	},
	{
		description: "\"charCodeAt\"",
		url: "https://www.reddit.com/r/bytebeat/comments/lqkf8j/charcodeat/",
		date: "2021-02-23",
		codeOriginal: "c='charCodeAt',l=9+!(t&65536),c[c]((t>>c[c](((t>>9)%l&t>>12)%l))%l)+(t&4096)*.9",
		starred: 1
	},
	{
		description: "i don't have a name for this",
		url: "https://www.reddit.com/r/bytebeat/comments/ns22lb/i_dont_have_a_name_for_this/",
		date: "2021-06-04",
		codeOriginal: "(t*3&t>>6)%76"
	},
	{
		description: "Experiment with Running man [<byte-snippet>t*(3+(1^5&t>>10))*(5+(3&t>>14))>>(3&t>>8)</byte-snippet>] and Street Surfer [<byte-snippet>t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t)</byte-snippet>]",
		date: "2021-10-07",
		children: [
			{
				description: "Isolated and edited drums",
				codeOriginal: "t&4096?(t*(t^t%9)|t>>3)>>1:255"
			},
			{
				description: "Altered running man",
				codeOriginal: "t*(1+(5&t>>10))*(3+(t>>17&1?(2^2&t>>14)/3:3&(t>>13)+1))>>(3&t>>9)"
			},
			{
				description: "Final song",
				codeOriginal: "(t*(1+(5&t>>10))*(3+(t>>17&1?(2^2&t>>14)/3:3&(t>>13)+1))>>(3&t>>9))&(t&4096?(t*(t^t%9)|t>>3)>>1:255)",
				starred: 1
			}
		]
	},
	{
		description: "minibake",
		url: "https://www.reddit.com/r/bytebeat/comments/rcykm8/minibake/",
		date: "2021-12-10",
		sampleRate: 44100,
		codeOriginal: "eval(unescape(escape`瑨楳⹄㼿㵁牲慹⠸㠵㤩⹦楬氨〩ⱂ㵴⼵㤰㘬爽䈥ㄬ瘽ㄭ爬洽䈾㸶ⱳ㵂┶㑼〬焽猾㸴Ɫ㵳┱㘬丽愽㹛〬ㄸⰲ〬㈲⸵ⰲ㐬㈷ⰳ〬㌲ⰳ㙝孡崪㜵⼵㘬匽⡦Ɒ㴰⤽㹳楮⠨䈪昫瀩⩐䤪㈩⼲⬮㔬吽⡦Ɒ⤽㸨砽⡂⩦⭰⤥ㄬ浩渨砬ㄭ砩⤬䌽昽㹂⩎⡦嬰嵛煝⤥ㄼ匨⸰㘩⨮㠫⸱☦㤬刽⡳Ɑ㴹攷⤽㸨獩渨猪洩⬱⤪津ㄬ渽∶㔴㐢孱崬氽猾㘱㼵㨢㘸〷≛戭ㄱ嵼籮ⱌ㴲㌲ㄹ㸾戬挽ㄳ㔱㔾㹢☱Ɐ㵛吨氽丨派㈳㼨䈼ㄵ㔲⤪㐺洼㠿氪㵌☱㩬☽䱼津㠩ⱓ⡬⤯㔩⨱㘰ⱔ⡤㵎⡳㴽㈸㼶㩳㸶ㄿ㔺戾ㄱ㼸㩮⴨Ⅲ♱㰲⤩⨲Ⱘ䈪搥ㄩ⩒⡂簰⤪ㄮ㔫⸲㔩⨨ㄭ爪⸷㔩⨴㔬匨愽丨㘴㤶㜾㹢☱☦⡢㰱㉼猾㘱㽮㨷⤩⼲ⱡ扳⡓⡡⼴⤭⸵⤪⡶⨨猽㴶㉼㄰㌷〾㹢☲⤫㈩⤪㌰ⱃ怱㈴ㅠⱣ⩃怳㔶㑠Ᵽ⩃怶㜸㙠ⱳ㴽㈶米㴽㔹簡⡳┸⤦♓⠰ⰲ⼨爫⸱㘩⤪㈷ⱳ┸㴽㐦♒⡴⼳簰⤪瘪㈷ⱳ㴽㘳簱㤵㈴㸾戦ㄦ♒⡴ⰴ〰⤪浡砨ㄭ爪ㄮ㔬〩⨲㝝⹲敤畣攨⡡ⱢⱩ⤽㹡⬨孛㈵㜬㈶ㄬ㐵㌬ㄹ㍼⡳㰶ㄩ⨲㘰嵛浝ⱸ㴵ㄱⰱ㈷㸾ㄲ⵭ⱸⱸⱛ㐴㌬㐴㌬㌬ㅝ孭┴崬ㅝ孭㸾㉝㸾椦ㄦ♢⤬〩⭄⹳桩晴⠩⼲ⱄ⹰畳栨派㈱☦漩Ɐ`.replace(/u(..)/g,\"$1%\")))",
		starred: 2
	},
	{
		description: "alright fine",
		url: "https://www.reddit.com/r/bytebeat/comments/rwryz6/alright_fine/",
		date: "2022-01-05",
		codeOriginal: "(t>>4&t/(\"SArpnt\".charCodeAt(t/2/\"76547698\"[t>>13&7]*(t>>10&3)%6)+t/(t>>17&1|2)%2))+(t>>12&1?-1:sin(t))",
		starred: 1
	}
];
var libraryJson = {
	classic: classic,
	"js-code": [
	{
		description: "Fanfare?",
		author: "varjohukka",
		url: "http://www.pouet.net/topic.php?which=8357&page=4#c388503",
		date: "2011-09-30",
		codeOriginal: "(((t&8192)?((t&4096)?((t&1024)?t*2:t*4):((t&512)?t*4:t*4.2)):((t &4096)?((t&1024)?t*2:t*10):((t&512)?t*2:t*8))>>2)*(( t&16384 )?3:2))|t*(( t&16384 )?1/8:1/(.01*t))",
		codeMinified: "(t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))"
	},
	{
		description: "Combination (Fanfare? + Street Surfer)",
		author: "raer",
		url: "http://www.pouet.net/topic.php?which=8357&page=4#c388504",
		date: "2011-09-30",
		codeOriginal: "((t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t <<2:t)) ^ ((((t&8192)?((t&4096)?((t&1024)?t*2:t*4):((t&512)?t*4:t*4.2)):((t&4096)?((t&1024)?t*2:t*10):((t&512)?t*2:t*8))>>2)*((t&16384)?3:2))|t*((t&16384)?1/8:1/(.01*t))>>1)",
		codeMinified: "(t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t))^((t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))>>1)",
		starred: 1
	},
	{
		description: "algorithmic music in a \"constructivist\" way",
		author: "a1k0n",
		url: "https://news.ycombinator.com/item?id=3063359#3064980",
		date: "2011-10-03",
		codeOriginal: "SS=function(s,o,r,p){var c=s.charCodeAt((t>>r)%p);return c==32?0:31&t*Math.pow(2,c/12-o)},SS(\"0 0     7 7     037:<<\",6,10,32) + (t&4096?SS(\"037\",4,8,3)*(4096-(t&4095))>>12 : 0)",
		codeMinified: "SS=(s,o,r,p)=>(c=s.charCodeAt((t>>r)%p),32==c?0:31&t*2**(c/12-o)),3*SS('0 0     7 7     037:<<',6,10,32)+5*(t&4096?SS('037',4,8,3)*(4096-(t&4095))>>12:0)",
		starred: 1
	},
	{
		description: "baseline, melody, snare, volume control",
		author: "CC123",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1317629876555#c513659358561118663",
		date: "2011-10-03",
		sampleRate: 11025,
		codeOriginal: "( ((t*4)*(((t>>>11)&1)?1:0)*(((t>>>11)&8)?0:1) + (t*2)*(((t>>>10)&1)?1:0)*(((t>>>10)&128)?0:1) +(t*4)*(((t>>>10)&1)?1:0)*(((t>>>10)&128)?1:0) + (t*sin(t)*(((t>>>10)&4)?1:0)*(((t>>>10)&1)?1:0))) % 256) * (7/10)",
		codeMinified: "(4*t*(t>>>11&1?1:0)*(t>>>11&8?0:1)+2*t*(t>>>10&1?1:0)*(t>>>10&128?0:1)+4*t*(t>>>10&1?1:0)*(t>>>10&128?1:0)+t*sin(t)*(t>>>10&4?1:0)*(t>>>10&1?1:0))%256*.7",
		starred: 1
	},
	{
		description: "No Limit",
		children: [
			{
				author: "mu6k",
				url: "http://www.pouet.net/topic.php?which=8357&page=9#c388931",
				date: "2011-10-04",
				mode: "Signed Bytebeat",
				codeOriginal: "((sin(2000/(t&0xfff))*127)*0.2 + (( (t<<1)*(1+0.333*((t&0xffff)>0x7fff)+0.177*((t&0xffff)>0xbfff )) )&0xff)*((t&0xfff)/0x1fff)*0.4 + (( ( (t>>4^t>>6|t>>10))|(t*3*(1+0.333*((t&0xffff)>0x7fff)+0.177*((t&0xffff)>0xbfff))) )&0xff)*0.25)",
				codeMinified: "127*sin(2E3/(t&4095))*.2+(t&4095)/8191*((t<<1)*(1+.333*(32767<(t&65535))+.177*(49151<(t&65535)))&255)*.4+.25*((t>>4^t>>6|t>>10|3*t*(1+.333*(32767<(t&65535))+.177*(49151<(t&65535))))&255)"
			},
			{
				description: "another take on simplifying mu6k's thing",
				author: "ryg",
				url: "https://www.pouet.net/topic.php?which=8357&page=10#c388986",
				date: "2011-10-05",
				mode: "Signed Bytebeat",
				codeOriginal: "sin(2000/(y=t&4095))*25+((x=t*(15&0x9866>>(t>>12&12))/6)&127)*(y/1e+4)+((t>>6^t>>8|t>>12|x)&63)",
				codeMinified: "sin(2e3/(y=t&4095))*25+(x=t*(15&0x9866>>(t>>12&12))/6&127)*y/1e4+((t>>6^t>>8|t>>12|x)&63)",
				starred: 1
			}
		]
	},
	{
		author: "ryg",
		children: [
			{
				description: "a new industrial chiptune",
				url: "http://www.pouet.net/topic.php?which=8357&page=11#c389005",
				date: "2011-10-05",
				sampleRate: 11025,
				codeOriginal: "t*(1+\"4451\"[t>>13&3]/10)&t>>9+(t*0.003&3)",
				codeMinified: "t*(1+'4451'[t>>13&3]/10)&t>>9+(.003*t&3)"
			},
			{
				url: "https://www.pouet.net/topic.php?which=8357&page=12#c389146",
				date: "2011-10-06",
				sampleRate: 44100,
				codeOriginal: "((t*\"36364689\"[t>>13&7]/12)&128)+((((t>>12)^(t>>12)-2)%11*t/4|t>>13)&127)",
				codeMinified: "(t*'36364689'[t>>13&7]/12&128)+(((t>>12^(t>>12)-2)%11*t/4|t>>13)&127)",
				starred: 1
			}
		]
	},
	{
		description: "G minor Bach",
		children: [
			{
				author: "skurk",
				url: "http://www.pouet.net/topic.php?which=8357&page=11#c389045",
				date: "2011-10-05",
				mode: "Signed Bytebeat",
				codeOriginal: "30*cos(t*Math.pow(2,(\"B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2&g t;*;2:1;26/\"+ \";2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*&g t;6=4>69\"+ \"2>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*< ;3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=4\"+ \"81=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1; 26/;2:1;2@&;,9*;\"+ \",8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92 =-;,=->*=-;,\"+ \"=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192 412141;-634\"+ \"1613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6\").charCodeAt (t>>9)/12-7))",
				codeMinified: "30*cos(t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2&g t;*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*&g t;6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*< ;3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1; 26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92 =-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192 412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>9)/12-7))",
				starred: 2
			},
			{
				description: "Non-COS version",
				codeMinified: "30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>9)/12-7)",
				starred: 2
			},
			{
				description: "\"Warpnig timeline\" [Slowed down, PWM changing version of G minor bach + noise]",
				author: "Chasyxx",
				url: "https://www.reddit.com/r/bytebeat/comments/qi3enp/with_new_bytecodes_already_posted_here_are_all/",
				date: "2021-10-29",
				codeOriginal: "a=(30*t*Math.pow(2,\"B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6\".charCodeAt(t>>10)/12-7))%256,a>([(Math.abs(((t>>8)%256)-128))+64])?Math.random()*16:~(Math.random()*16)",
				codeMinified: "a=30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>10)/12-7)%256,a>[abs((t>>8)%256-128)+64]?16*random():~(16*random())",
				starred: 2
			}
		]
	},
	{
		description: "some kind of 80s synth type thing (Never Gonna Give You Up)",
		author: "gasman",
		url: "http://www.pouet.net/topic.php?which=8357&page=12#c389109",
		date: "2011-10-05",
		codeOriginal: "(t<<3)*[8/9,1,9/8,6/5,4/3,3/2,0][[0xd2d2c8,0xce4088,0xca32c8,0x8e4009][t>>14&3]>>(0x3dbe4688>>((t>>10&15)>9?18:t>>10&15)*3&7)*3&7]",
		starred: 1
	},
	{
		description: "Longline Theory",
		starred: 2,
		children: [
			{
				author: "mu6k",
				url: "http://www.pouet.net/topic.php?which=8357&page=13#c389287",
				date: "2011-10-06",
				mode: "Signed Bytebeat",
				codeOriginal: "((sb=t>0xffff)&0)+Math.max(Math.min(((y=Math.pow(2,[15,15,23,8][t>>14&3]/12))&0)+(((y*t*0.241)&127-64)+((y*t*0.25)&127-64))*1.2+ (((a=1-(t&0x7ff)/0x7ff)&0)+(((5*t&0x7ff)*a)&255-127)*((0x53232323>>(t>>11&31))&1)*a*1.0+(((d=(14*t*t^t)&0x7ff)*a)&255-128)*((0xa444c444>>(t>>11&31))&1)*a*1.5+((a*a*d*(t>>9&1)&0xff-0x80)*0.1337))*sb+ ((g=(t&0x7ff)/0x7ff)&0)+((g=1-(g*g))&0)+((h=Math.pow(2,([[15,18,17,17,17,17,999,999,22,22,999,18,999,15,20,22],[20,18,17,17,10,10,999,999,20,22,20,18,17,18,17,10]][((t>>14&3)>2)&1][t>>10&15])/12))&0)+(((h*t&31)+(h*t*1.992&31)+(h*t*.497&31)+(h*t*0.977&31)-64))*g*2.0*sb,127),-128)",
				codeMinified: "((sb=65535<t)&0)+max(min(((y=2**([15,15,23,8][t>>14&3]/12))&0)+1.2*((y*t*.241&63)+(y*t*.25&63))+(((a=1-(t&2047)/2047)&0)+((5*t&2047)*a&128)*(1394811683>>(t>>11&31)&1)*a+((d=(14*t*t^t)&2047)*a&127)*(2755970116>>(t>>11&31)&1)*a*1.5+.1337*(a*a*d*(t>>9&1)&127))*sb+((g=(t&2047)/2047)&0)+((g=1-g*g)&0)+((h=2**([[15,18,17,17,17,17,999,999,22,22,999,18,999,15,20,22],[20,18,17,17,10,10,999,999,20,22,20,18,17,18,17,10]][2<(t>>14&3)&1][t>>10&15]/12))&0)+((h*t&31)+(h*t*1.992&31)+(h*t*.497&31)+(h*t*.977&31)-64)*g*2*sb,127),-128)",
				file: "mu6k - Longline Theory.js",
				fileFormatted: true
			},
			{
				description: "300b Information Theory",
				author: "ryg, las, decipher, p01",
				url: "http://www.pouet.net/topic.php?which=8357&page=17#c389541",
				date: "2011-10-07",
				mode: "Signed Bytebeat",
				codeOriginal: "w=t>>9,k=32,m=2048,a=1-t/m%1,d=(14*t*t^t)%m*a,y=[3,3,4.7,2][p=w/k&3]*t/4,h=\"IQNNNN!!]]!Q!IW]WQNN??!!W]WQNNN?\".charCodeAt(w/2&15|p/3<<4)/33*t-t,s=y*.98%80+y%80+(w>>7&&a*((5*t%m*a&128)*(0x53232323>>w/4&1)+(d&127)*(0xa444c444>>w/4&1)*1.5+(d*w&1)+(h%k+h*1.99%k+h*.49%k+h*.97%k-64)*(4-a-a))),s*s>>14?127:s"
			}
		]
	},
	{
		description: "Here's one that stands out",
		author: "Aaron Krister Johnson",
		url: "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1318630600804#c947426238247450493",
		date: "2011-10-14",
		codeOriginal: "(((t>>4)|(t%10))+3.3) | (((t%101)|(t>>14))&((t>>7)|(t*t%17)))",
		codeMinified: "(t>>4|t%10)+3.3|(t%101|t>>14)&(t>>7|t*t%17)"
	},
	{
		description: "Rabid symphony",
		author: "rabidcow",
		url: "https://www.reddit.com/r/programming/comments/mbakl/experimental_oneline_algorithmic_music/c2zn7qv/",
		date: "2011-11-15",
		codeOriginal: "t*Math.pow(2,(\"kotojokohogohotojokohogokokhpmjmjfokhomkjhggcc kotojokohogohotojokohogokokhpmjmjfrmorokfjkkkkkkrpomkjkmokmpoprrjjkkoommoottqqhjkkjjhfecebccccccfffhihfdfcdahhhjkjhghegcmjcjmjpjojmjkhchkhohmhkhjhkhmhohphmhoomkjkhhhhhh\".charCodeAt((t>>10)&255)-58)/12)*63>>6&132",
		codeMinified: "t*2**(('kotojokohogohotojokohogokokhpmjmjfokhomkjhggcckotojokohogohotojokohogokokhpmjmjfrmorokfjkkkkkkrpomkjkmokmpoprrjjkkoommoottqqhjkkjjhfecebccccccfffhihfdfcdahhhjkjhghegcmjcjmjpjojmjkhchkhohmhkhjhkhmhohphmhoomkjkhhhhhh'.charCodeAt(t>>10&255)-58)/12)*63>>6&132",
		starred: 1
	},
	{
		author: "yehar",
		children: [
			{
				url: "http://www.pouet.net/topic.php?which=8357&page=21#c401680",
				date: "2012-02-25",
				codeOriginal: "t>>4+!(-t>>13&7)+2*!(t>>17)|t*t*(t>>(t>>12^t>>11)%3+10)/(7+(t>>10&t>>14&3))*!(t&512)<<3+(t>>14&1)",
				starred: 1
			},
			{
				description: "No 4",
				url: "http://www.pouet.net/topic.php?which=8357&page=21#c401817",
				date: "2012-02-26",
				codeOriginal: "((v=t/2^(t&64?63:0))>>v)/(1+(v>>v>>7))&t/32|(t>>11)%8%3*t*t&15",
				codeMinified: "v=t/2^(t&64?63:0),v>>=v,v/(1+(v>>7))&t/32|(t>>11)%8%3*t*t&15"
			},
			{
				description: "No 5",
				url: "https://www.pouet.net/topic.php?which=8357&page=21#c401952",
				date: "2012-02-28",
				mode: "Signed Bytebeat",
				codeOriginal: "(u=3*t>>t/4096%4&-t%(t>>16|16)*t>>14&8191)/(u>>6|1)*4"
			}
		]
	},
	{
		author: "rudi",
		url: "https://www.pouet.net/topic.php?which=8357&page=21#c401789",
		date: "2012-02-26",
		codeOriginal: "(t*2)^t|(t&(t*0.75))-(t*0.99)^(t*6)",
		codeMinified: "t*2^t|(t&t*.75)-t*.99^t*6"
	},
	{
		author: "mu6k",
		url: "http://www.pouet.net/topic.php?which=8357&page=21#c401841",
		date: "2012-02-26",
		codeOriginal: "u=10^(t>>15&7),u+=3,y=(t>>11&7)/u,f=t*8*y,z=(t*16/u)&0x63|f|f*1.01,z*2",
		codeMinified: "u=10^t>>15&7,u+=3,y=(t>>11&7)/u,f=8*t*y,z=16*t/u&99|f|1.01*f,2*z"
	},
	{
		author: "Suborg",
		children: [
			{
				description: "interleaved major scale, making a rest after each note",
				url: "http://www.pouet.net/topic.php?which=8357&page=23#c459110",
				date: "2013-10-18",
				codeOriginal: "t*.35*(\"#\\013;\\013&\\013A\\013)\\013G\\013+\\013K\\013/\\013S\\0133\\013[\\0138\\013e\\013;\\013k\\013\".charCodeAt(t/1e3%32)-11)"
			},
			{
				description: "Fort Boyard",
				url: "http://www.pouet.net/topic.php?which=8357&page=23#c459199",
				date: "2013-10-19",
				codeOriginal: "t*.17*(\"33AAAAA\\013AAKKKGGG;;A\\013AK[KSSSSSSSS\\013\\013[\\013[SSSKKGGG;;;GGA\\013AK[KAAAAAAAA\".charCodeAt(t/1800%64)-11)"
			}
		]
	},
	{
		author: "[Deleted]",
		url: "https://www.reddit.com/r/bytebeat/comments/20km9l/cool_equations/",
		date: "2014-03-16",
		children: [
			{
				description: "\"Harmony\". Based off of mu6k's \"Long Line Theory\"",
				codeOriginal: "t%50.01+t%40.1+t%30.1+t%60.01"
			},
			{
				description: "\"Harmony v2\". Based off of mu6k's \"Long Line Theory\"",
				codeOriginal: "w=[1,2,3,4,3,4,1][(t>>13)%7]*t,(w%50.01+w%40.1+w%30.1+w%60.01)",
				codeMinified: "w=[1,2,3,4,3,4,1][(t>>13)%7]*t,w%50.01+w%40.1+w%30.1+w%60.01",
				starred: 1
			},
			{
				description: "Array song",
				codeOriginal: "a=[1,1,2,3,1,1,2,3,1,1,2,4,4,4,5,5,5][(t>>12)%17],b=[5,4,3,2][(t>>16)%4],(t*b/a)%50.1+(t*b/a)%50",
				codeMinified: "a=[1,1,2,3,1,1,2,3,1,1,2,4,4,4,5,5,5][(t>>12)%17],b=[5,4,3,2][(t>>16)%4],t*b/a%50.1+t*b/a%50"
			},
			{
				description: "Trill",
				codeOriginal: "sin(sin(t/100)-t/((2+(t>>10&t>>12)%9)))*64+128",
				codeMinified: "64*sin(sin(t/100)-t/(2+(t>>10&t>>12)%9))+128"
			}
		]
	},
	{
		description: "2ch.so Generative Music and remixes vol.1",
		author: "Anonymous from russian imageboards",
		url: "http://abload.de/img/1405110021643uguil.jpg",
		date: "2014-07-11",
		children: [
			{
				description: "6) FUNERAL",
				codeOriginal: "((((((t/16000)%2>1?t*3|16*t:t*2|16*t)|123)+((t/32000)%2>1?(t%1000<500?t*18.3:0):(t%1000<500?t*18.9:0)))|(t/1000<<4))-128)+(t%1000<50?t<<t/3:0)",
				codeMinified: "(((1<t/16E3%2?3*t|16*t:2*t|16*t)|123)+(1<t/32E3%2?500>t%1E3?18.3*t:0:500>t%1E3?18.9*t:0)|t/1E3<<4)-128+(50>t%1E3?t<<t/3:0)"
			},
			{
				description: "+ FUNERAL WITH RHYTHM",
				url: "http://arhivach.ng/thread/28592/#71681923",
				codeOriginal: "((((((t/16000)%2>1?t*3|16*t:t*2|16*t)|123)+((t/32000)%2>1?(t%1000<500?t*18.3:0):(t%1000<500?t*18.9:0)))|(t/1000<<8))|256)%205+(t&1000<50?t<<t/5:0)",
				codeMinified: "(((1<t/16E3%2?3*t|16*t:2*t|16*t)|123)+(1<t/32E3%2?500>t%1E3?18.3*t:0:500>t%1E3?18.9*t:0)|t/1E3<<8|256)%205+(t&0?t<<t/5:0)"
			},
			{
				description: "8) SAW",
				codeOriginal: "(((t/2560)%11.6<1.5?(t*7.5):(0)+(t/5120)%2.5<1?(t*5.7):(t*5))&(t*2>>5.5))^((((!t*12)|(t>>5))|((t*4)|(!t>>8))^((~t<<6)|(~t*50))*t*t*t)|((t*12)|(t>>4))|((t*~4)|(t>>8))^((t<<!6)|(t*128)))",
				codeMinified: "(1.5>t/2560%11.6?7.5*t:1>t/5120%2.5?5.7*t:5*t)&2*t>>5.5^(12*!t|t>>5|(4*t|!t>>8)^(~t<<6|50*~t)*t*t*t|12*t|t>>4|(-5*t|t>>8)^(t<<0|128*t))"
			},
			{
				description: "10) FUTURE ROCK",
				codeOriginal: "t%1000<50?t<<t/5:0+(t/16000)%2>1?(t/22.5>>t*14)*(t%200>5)%64:(t*2.1)*(t%200>5)%64+((t/500)%6>4?t*4.87:0)%176",
				codeMinified: "50>t%1E3?t<<t/5:1<t/16E3%2?(t/22.5>>14*t)*(5<t%200)%64:2.1*t*(5<t%200)%64+(4<t/500%6?4.87*t:0)%176",
				starred: 1
			}
		]
	},
	{
		description: "Extraordinary thread of FRACTAL MUSIC",
		author: "Anonymous from russian imageboards",
		url: "http://arhivach.ng/thread/28592/",
		date: "2014-07-12",
		children: [
			{
				url: "http://arhivach.ng/thread/28592/#71679463",
				codeOriginal: "(t+(t^(t>>7))^0.5)*5|((t*2>>43|t*3*5>>4)*19)&(t*7>>172)/2*(t*((t>>9|t>>13)&15))&129|t*((t>>9|t>3)&25&t>>10)",
				codeMinified: "5*(t+(t^t>>7)^.5)|19*(2*t>>43|15*t>>4)&(7*t>>172)/2*t*((t>>9|t>>13)&15)&129|t*((t>>9|3<t)&25&t>>10)"
			},
			{
				url: "http://arhivach.ng/thread/28592/#71681647",
				codeOriginal: "(t*t/10000)%100|((t%29+t%46+t%((t>>14)%2?34:43))+(t%17))<<1",
				codeMinified: "t*t/1E4%100|t%29+t%46+t%((t>>14)%2?34:43)+t%17<<1"
			}
		]
	},
	{
		description: "disheveeeel",
		author: "keramon",
		url: "https://battleofthebits.org/arena/Entry/disheveeeel.txt/17655/",
		date: "2015-04-29",
		codeOriginal: "t * t % (t / 3.33)",
		codeMinified: "t*t%(t/3.33)"
	},
	{
		description: "I could not explain this to the IT dept",
		author: "radian",
		url: "https://battleofthebits.org/arena/Entry/I+could+not+explain+this+to+the+IT+dept./17673/",
		date: "2015-05-04",
		codeOriginal: "S=function(c,o,r,p){  var c=c.charCodeAt((t>>r)%p);return c==32?0:31&t*Math.pow(2,c/12-o)},C=function(){if (t%8){return (t&8096?S(\"047\",4,8,3)*(4096-(t&4095))>>12 : 0);}return (t&8096?S(\"259049\",4,8,6)*(4096-(t&4095))>>13 : 0);},S(\"20 0 0 034 4 0 047 259:<<\",7,10,32)+C()+(t&4096?S(\"047\",3,8,3)*(4096-(t&4095))>>12 : 0) +(t&4096?S(\"0407\",5,16,4)*(4096-(t&4095))>>12 : 0) +(((800/(t&16383))&2)*35)",
		codeMinified: "S=(c,o,r,p)=>(c=c.charCodeAt((t>>r)%p),32==c?0:31&t*2**(c/12-o)),C=()=>t%8?t&8096?S('047',4,8,3)*(4096-(t&4095))>>12:0:t&8096?S('259049',4,8,6)*(4096-(t&4095))>>13:0,S('20 0 0 034 4 0 047 259:<<',7,10,32)+C()+(t&4096?S('047',3,8,3)*(4096-(t&4095))>>12:0)+(t&4096?S('0407',5,16,4)*(4096-(t&4095))>>12:0)+35*(800/(t&16383)&2)"
	},
	{
		description: "347 BEATSTEP INC.",
		author: "mega9man",
		url: "https://battleofthebits.org/arena/Entry/347+BEATSTEP+INC./20403/",
		date: "2016-01-06",
		sampleRate: 11025,
		codeOriginal: [
			"128 + ",
			"",
			"sin(t/24 *((t >> 10) & 42) + 1*sin(t/64 * (t/1 >> 15) & 21)) * 24 ",
			"",
			"+ (sin(t*1/3/4*1 + 4*sin(t*1/6/4*1)) * ((t >> 11) & 1)) * 16 ",
			"",
			"+ (sin(t*1/6/4*1 + 4*sin(t*1/12/4*1)) * ((t >> 10) & 1)) * 16",
			" ",
			"+ ((3e3/(y=t*4&16383))&1) * 56 ",
			"",
			"+ ((3e2/(y=t*32&28600))&1) * 56 ",
			"",
			"+ sin(t/16 *((t >> 10) & 42) + 1*sin(t/64 * (t/1 >> 7) & 8)) * 12"
		],
		codeMinified: "128+24*sin(t/24*(t>>10&42)+1*sin(t/64*(t/1>>15)&21))+sin(1*t/3/4+4*sin(1*t/6/4))*(t>>11&1)*16+sin(1*t/6/4+4*sin(1*t/12/4))*(t>>10&1)*16+56*(3E3/(y=4*t&16383)&1)+56*(300/(y=32*t&28600)&1)+12*sin(t/16*(t>>10&42)+1*sin(t/64*(t/1>>7)&8))",
		starred: 2
	},
	{
		author: "Gabriel Miceli",
		url: "https://www.youtube.com/watch?v=V4GfkFbDojc",
		date: "2016-07-09",
		children: [
			{
				description: "Noise Maker",
				remixed: {
					description: "Good old fractal melody",
					author: "Blueberry",
					url: "http://www.pouet.net/topic.php?which=8357&page=12#c389114"
				},
				sampleRate: 11025,
				codeOriginal: "i=t&8191,(((t*((t>>9^((t>>9)-1)^1)%13)&255)/2)+((((t>>3|t<<(t>>12&2))*(i<4096)+(t>>4|t*(t^t+t/256))*(i>4095)))&255)/2)*(2+(t>>16))",
				codeMinified: "i=t&8191,(((t>>9^(t>>9)-1^1)%13*t&255)/2+((t>>3|t<<(t>>12&2))*(4096>i)+(t>>4|t*(t^t+t/256))*(4095<i)&255)/2)*(2+(t>>16))",
				starred: 2
			},
			{
				description: "Now this actually sounds pretty cool",
				codeOriginal: "d=t*465/(43+6*(t>>15&3^1)),((d/4&t>>6)+d/2&127)+(d/6&127)",
				starred: 2
			},
			{
				description: "Crude Sinewave Dubstep",
				sampleRate: 44100,
				codeOriginal: "d=(t*(t&t>>12)*8/11025)|0,((d&16)/8-1)*(d*(d^15)+d+127)",
				codeMinified: "d=t*(t&t>>12)*8/11025|0,((d&16)/8-1)*(d*(d^15)+d+127)",
				starred: 1
			},
			{
				description: "Crazy Groovy Beats",
				sampleRate: 32000,
				codeOriginal: "a=t-2048,((t&t>>6)&(t*(t>>((t&65535)>>12))))+((t*3/4&t>>12)&127)+(t*(a>>7&a>>8&a>>9&16)>>t/64)",
				codeMinified: "a=t-2048,(t&t>>6&t*(t>>((t&65535)>>12)))+(3*t/4&t>>12&127)+(t*(a>>7&a>>8&a>>9&16)>>t/64)"
			},
			{
				description: "Crazy Groovy Beats 2",
				codeOriginal: "d=t>>12&1,h=(t>>9)+4,(t*t*(t&255)*d/156+(t*(t^15)+t)*((h|t/2048+1&127)-h)/64&127-d*((t>>5&127)*2/3+32))",
				codeMinified: "d=t>>12&1,h=(t>>9)+4,t*t*(t&255)*d/156+(t*(t^15)+t)*((h|t/2048+1&127)-h)/64&127-d*(2*(t>>5&127)/3+32)",
				starred: 1
			},
			{
				description: "New Sawtooth Music (again) Remix",
				codeOriginal: "j=(t-41024&t+1024)>>11&255,k=t&16383,(t*(j&255)/2&127)+((100000/(t&4095))/4&63)+((int(k/(k>>7)-136)/8)&((32*(1+(j>7))-1)))",
				codeMinified: "j=(t-41024&t+1024)>>11&255,k=t&16383,(t*(j&255)/2&127)+(1E5/(t&4095)/4&63)+(int(k/(k>>7)-136)/8&32*(1+(7<j))-1)"
			},
			{
				description: "The Rhythm",
				codeOriginal: "a=t-256,((44*(t/256-28|3)|t*8&t>>11&t>>5|t*(a>>3&a>>4&a>>5&64)>>t/16)/2&127)+(((t^t+t/256)&255)/(5-(t>>17&3))/2&127)"
			}
		]
	},
	{
		description: "here enjoy some choords I made :)",
		author: "LJ",
		url: "https://www.pouet.net/topic.php?which=8357&page=26#c524954",
		date: "2016-12-15",
		sampleRate: 32000,
		codeOriginal: "((Math.abs(t*(.02+(t*.0001&0x4)*.01)*(1+((t*.0001)%4)<<5)%0xFF-0x80))&0xFF) + (t%100)*.3*Math.abs(sin(t*.00005)*.25+.5)+Math.min(Math.max((t>>16)-2,0)*.5,1)*(t*.1&0xF)*(t*.01&0xFF)/0x70",
		codeMinified: "(abs(t*(.02+.01*(1E-4*t&4))*(1+1E-4*t%4<<5)%255-128)&255)+t%100*.3*abs(.25*sin(5E-5*t)+.5)+min(.5*max((t>>16)-2,0),1)*(.1*t&15)*(.01*t&255)/112"
	},
	{
		description: "driving my 8 bit car",
		author: "Direm01",
		url: "https://www.reddit.com/r/bytebeat/comments/7e7a61/t6t4300xccdd1000_11khz_infix/",
		date: "2017-11-20",
		codeOriginal: "(((t>>6)*t)>>430)*[0xccDD]%1000",
		codeMinified: "52445*((t>>6)*t>>430)%1E3",
		starred: 1
	},
	{
		author: "raphaelgoulart",
		children: [
			{
				description: "Fortnite Default Dance in Bytebeat",
				url: "https://www.reddit.com/r/bytebeat/comments/b48xrx/fortnite_default_dance_in_bytebeat/",
				date: "2019-03-22",
				sampleRate: 44100,
				codeOriginal: [
					"d=.127*t,",
					"b=floor(t/1578),",
					"a=[0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,5.3,5.3,4.75,4.75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,4.75,4.75,0,0,4,4,0,0,3.55,3.55,4,4,0,0],",
					"n=d*random(),",
					"r=floor(b/2)%64,",
					"([0,3,6,10].includes(floor(b/4%16))?d:0)%64+d*a[r]%64+d*a[r]/1.33%64+(b%4==0?n:0)%20+(b%32==16?n:0)%44"
				],
				codeMinified: "d=.127*t,b=int(t/1578),a=[0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,5.3,5.3,4.75,4.75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,4.75,4.75,0,0,4,4,0,0,3.55,3.55,4,4,0,0],n=d*random(),r=int(b/2)%64,([0,3,6,10].includes(int(b/4%16))?d:0)%64+d*a[r]%64+d*a[r]/1.33%64+(0==b%4?n:0)%20+(16==b%32?n:0)%44",
				starred: 1
			},
			{
				description: "ripthisentry.txt, tune#3",
				url: "https://battleofthebits.org/arena/Entry/ripthisentry.txt/32559/",
				date: "2019-08-27",
				codeOriginal: "n=[1,0,1,0,2,2,1,0,1,0,2,2,1,0,2,2],freq=n[floor(t/500)%16]*2,mod=t/15e3,sin(t*freq/40.7+sin(t*freq/40.7)*mod)*64+64",
				codeMinified: "n=[1,0,1,0,2,2,1,0,1,0,2,2,1,0,2,2],freq=n[int(t/500)%16]*2,mod=t/15e3,sin(t*freq/40.7+sin(t*freq/40.7)*mod)*64+64"
			}
		]
	},
	{
		description: "weirdo boy",
		author: "Romash",
		url: "https://battleofthebits.org/arena/Entry/weirdo+boy/31403/",
		date: "2019-04-12",
		mode: "Signed Bytebeat",
		sampleRate: 44100,
		codeOriginal: "freqs=[220,261,174*2,207],t2=t/11015*24,freq2=1+(t>>15&1)+(((41&(t>>12))%4)^(1+((t>>11)&2)-1)*((t>>10)>1024)),(((t2*(1-freq2)*0.999*freqs[t>>17&3])%128)+(((t2+500)*freq2*1.01*freqs[t>>17&3])%128)-128)/4+(((t2/2*0.999*freqs[t>>17&3])%128)+(((t2/2+500)*1.01*freqs[t>>17&3])%128)-128)*((t>>10)>1024)/4",
		codeMinified: "freqs=[220,261,348,207],t2=t/11015*24,freq2=1+(t>>15&1)+((41&t>>12)%4^(1+(t>>11&2)-1)*(1024<t>>10)),(t2*(1-freq2)*.999*freqs[t>>17&3]%128+(t2+500)*freq2*1.01*freqs[t>>17&3]%128-128)/4+(t2/2*.999*freqs[t>>17&3]%128+1.01*(t2/2+500)*freqs[t>>17&3]%128-128)*(1024<t>>10)/4"
	},
	{
		description: "rain",
		author: "InfinitySnapz",
		url: "https://www.reddit.com/r/bytebeat/comments/ceg1gu/rain/",
		date: "2019-07-17",
		sampleRate: 44100,
		codeOriginal: [
			"(t<2)?",
			"(",
			"",
			"a = 0, ",
			"b = 0,",
			"c = 0",
			"",
			"):(",
			"",
			"a = (a*0.999)+(random()*0.001),",
			"(b<0)?(b = random()*0.7,c = random()):(b = b-(1/44100)),",
			"abs((a*256*(sin(t/50000)*5+10))%256-128) + ((t/300*((c*10)+200))&2)*255*pow(b,random()/5+4)",
			"",
			")"
		],
		codeMinified: "t<2?(a=0,b=0,c=0):(a=.999*a+.001*random(),b<0?(b=.7*random(),c=random()):b-=1/44100,abs(256*a*(5*sin(t/5E4)+10)%256-128)+255*(t/300*(10*c+200)&2)*b**(random()/5+4))",
		starred: 1
	},
	{
		description: "Vl-Tone Rock 1 rhythm emulation",
		author: "spikkks",
		url: "https://www.reddit.com/r/bytebeat/comments/chkme0/vltone_rock_1_rhythm_emulation/",
		date: "2019-07-25",
		codeOriginal: [
			"n = [0,1,2,2,0,1,2,1],",
			"f=n[floor((t%14664)/1833)],",
			"((f==0) ? ((t%1833)*3.15&16)*(  (((t%1833)<325) ? (-3.15*(t%1833)>>6)+16 : 0)  *3.2 /16) : 0 +",
			"(f==1) ? ((t%1833)*6.3&16)*(  (((t%1833)<163) ? (-6.3*(t%1833)>>6)+16 : 0)  *3.2 /16) : 0 +",
			"(f==2) ? random()*51.2*(((t%1833)<1449) ? 1536/((t%1833)+1024)-.5 : 0) : 0) + 127"
		],
		codeMinified: "n=[0,1,2,2,0,1,2,1],f=n[int(t%14664/1833)],(f==0?3.2*(325>t%1833?(t%1833*-3.15>>6)+16:0)/16*(t%1833*3.15&16):0+(f==1)?3.2*(163>t%1833?(t%1833*-6.3>>6)+16:0)/16*(t%1833*6.3&16):0+(f==2)?51.2*random()*(1449>t%1833?1536/(t%1833+1024)-.5:0):0)+127"
	},
	{
		description: "Cool waveform i guess",
		author: "1583736",
		url: "https://www.reddit.com/r/bytebeat/comments/ntpnza/cool_waveform_i_guess/",
		date: "2021-06-06",
		children: [
			{
				description: "first one",
				sampleRate: 32000,
				codeOriginal: "t=(6*(t-((t>>10&4|t>>13&3)|(t>>17&6|t>>14&4))*t/((t>>16&7)+4))),Math.pow(Math.abs(1-Math.abs(0.5+cos(t/64.25))**0.3)+Math.abs(0.35-Math.abs(5.5+cos(t/64.5))**0.5),1-Math.abs(1-Math.abs(0.5-sin(t/63.75))**0.5+1-Math.abs(2.1-Math.abs(2.3-sin(t/96))**0.75)))*80+15",
				codeMinified: "t=6*(t-(t>>10&4|t>>13&3|t>>17&6|t>>14&4)*t/((t>>16&7)+4)),80*(abs(1-abs(.5+cos(t/64.25))**.3)+abs(.35-abs(5.5+cos(t/64.5))**.5))**(1-abs(1-abs(.5-sin(t/63.75))**.5+1-abs(2.1-abs(2.3-sin(t/96))**.75)))+15",
				starred: 1
			},
			{
				description: "second one",
				sampleRate: 32000,
				codeOriginal: "t=(3*(t-((t>>10&4|t>>13&3)|(t>>17&6|t>>14&4))*t/((t>>16&7)+4))),Math.pow(Math.abs(1-Math.abs(0.5+cos(t/64.25))**0.3),1-Math.abs(1-Math.abs(0.5-sin(t/63.75))**0.5))*128+32",
				codeMinified: "t=3*(t-(t>>10&4|t>>13&3|t>>17&6|t>>14&4)*t/((t>>16&7)+4)),128*abs(1-abs(.5+cos(t/64.25))**.3)**(1-abs(1-abs(.5-sin(t/63.75))**.5))+32"
			}
		]
	},
	{
		author: "RealZynx92",
		children: [
			{
				description: "2-bit song",
				url: "https://www.reddit.com/r/bytebeat/comments/q36kta/2bit_song/",
				date: "2021-10-07",
				sampleRate: 32000,
				codeOriginal: "(pow(2.75,-t/2048%8+8)&128)+(t*(t&t>>11)&64)|t/[2,2,2,2,3,3,4,4][(t>>14)%8]&128",
				codeMinified: "(2.75**(-t/2048%8+8)&128)+(t*(t&t>>11)&64)|t/[2,2,2,2,3,3,4,4][(t>>14)%8]&128"
			},
			{
				description: "dubstep_thingy",
				url: "https://www.reddit.com/r/bytebeat/comments/q5oh91/dubstep_thingy/",
				remixed: {
					description: "Crude Sinewave Dubstep",
					author: "Gabriel Miceli",
					url: "https://www.youtube.com/watch?v=V4GfkFbDojc"
				},
				date: "2021-10-11",
				sampleRate: 44100,
				codeOriginal: "a=t*(t&t>>12)/256,128+sin(a/20.5)*((a>>5)%32)*4"
			},
			{
				description: "another cool loop i guess",
				url: "https://www.reddit.com/r/bytebeat/comments/q5pbks/another_cool_loop_i_guess/",
				date: "2021-10-11",
				sampleRate: 44100,
				codeOriginal: "a=t/[2,4,3,5,6,7,8,10][(t>>13)%8],((a*2*(a&64?-1:1)))+15*(3E3/(t&16383)&4)+(25*sin((t*[1.5,1.5,1.5,1.35,1.2,1.2,1,1][(t>>15)%8])/41)+25)+(t*[0.5,0.75,1,0.8,1,1.2,0.4,0.6,0.8,0.3,0.5,0.6][((t>>10)%3)+((t>>16)%4)*3]/2&16)",
				codeMinified: "a=t/[2,4,3,5,6,7,8,10][(t>>13)%8],2*a*(a&64?-1:1)+15*(3E3/(t&16383)&4)+(25*sin(t*[1.5,1.5,1.5,1.35,1.2,1.2,1,1][(t>>15)%8]/41)+25)+(t*[.5,.75,1,.8,1,1.2,.4,.6,.8,.3,.5,.6][(t>>10)%3+(t>>16)%4*3]/2&16)",
				starred: 1
			},
			{
				description: "non-javascript 8khz song, turned out pretty good",
				url: "https://www.reddit.com/r/bytebeat/comments/q5rp4d/tried_to_make_a_nonjavascript_8khz_song_turned/",
				date: "2021-10-11",
				codeOriginal: "(((t>>4)>>(t&(t>>11)))*(((t>>4)>>(t&(t>>11)))&128?-1:1))+(t>>t/(t&65536?2:3)&63)+(3E4/(t&4095)&100)",
				codeMinified: "(t>>4>>(t&t>>11))*(t>>4>>(t&t>>11)&128?-1:1)+(t>>t/(t&65536?2:3)&63)+(3E4/(t&4095)&100)"
			},
			{
				description: "cool dubstep song",
				url: "https://www.reddit.com/r/bytebeat/comments/q6emvo/cool_dubstep_song/",
				date: "2021-10-12",
				sampleRate: 44100,
				codeOriginal: "((63+sin((t*(t&t>>12))/164)*64)*(t>>13<60)+(t*random()%((-t>>8)%128+128))*(t>>13<64))+((63+sin((t*(t&t>>12)*50/22050)/164)*64)+(3E5/(t&32767)&90)+(3E6/((t+16384)&32767)&100))*(t>>13>63)",
				codeMinified: "(63+64*sin(t*(t&t>>12)/164))*(t>>13<60)+t*random()%((-t>>8)%128+128)*(t>>13<64)+(63+64*sin(t*(t&t>>12)*50/22050/164)+(3E5/(t&32767)&90)+(3E6/(t+16384&32767)&100))*(t>>13>63)",
				starred: 2
			},
			{
				description: "remix of \"Trance beat\" by SthephanShi",
				url: "https://www.reddit.com/r/bytebeat/comments/q834xu/i_remixed_stephanshis_trance_beat/",
				date: "2021-10-14",
				codeOriginal: "((t>>(t%16?6:5)|t>>(t%128?11:3))&200)+(3E4/(t&4095)&64)"
			},
			{
				description: "probably the best song i ever made",
				url: "https://www.reddit.com/r/bytebeat/comments/q8r7g4/probably_the_best_song_i_ever_made/",
				date: "2021-10-15",
				sampleRate: 44100,
				codeOriginal: "a=t/[1.5,1.25,1.5,1][(t>>17)%4]*((t>>12)+1&1),(((a/4^(.998*a/8))&63)%(t>>14)+((32*sin((t/[1,1,1,2,1.5,1.5,1.25,1.25][(t>>15)%8]/20.5))+32)*(t>>20>0)))*(t>>15!=63)+(t*random()%((-t>>9)%64+64)*(t>>15==63))+(((3E5/(t&8191)&50)*[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1][(t>>13)%16])+((3E6/(t&8191)&45)*[0,0,0,0,1,0,0,0][(t>>13)%8])+((t/4*(t&t>>12))&32))*(t>>20>1)",
				codeMinified: "a=t/[1.5,1.25,1.5,1][(t>>17)%4]*((t>>12)+1&1),(((a/4^.998*a/8)&63)%(t>>14)+(32*sin(t/[1,1,1,2,1.5,1.5,1.25,1.25][(t>>15)%8]/20.5)+32)*(t>>20>0))*(t>>15!=63)+t*random()%((-t>>9)%64+64)*(t>>15==63)+((3E5/(t&8191)&50)*[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1][(t>>13)%16]+(3E6/(t&8191)&45)*[0,0,0,0,1,0,0,0][(t>>13)%8]+(t/4*(t&t>>12)&32))*(t>>20>1)",
				starred: 2
			},
			{
				description: "get stickbugged lol",
				url: "https://www.reddit.com/r/bytebeat/comments/qa0k1s/get_stickbugged_lol/",
				date: "2021-10-17",
				codeOriginal: "r=1.05946309,b=t/0.2575,as=b/r,a=as/r,c=b*r,cs=c*r,d=cs*r,ds=d*r,e=ds*r,f=e*r,fs=f*r,g=fs*r,gs=g*r,([fs,e,cs,b,as,,,,,,,,,,ds,,b,cs,d,ds,fs,,,,,,,,,,cs,,ds,cs,as,gs/2,ds/2,,,,,,,,,,as,,cs,b,gs/2,g/2,fs/2][(t>>10)%64]&127)+([fs/8,0,0,fs/4,fs/8,0,g/4,0,fs/8,0,fs/4,0,fs/8,0,fs/4][(t>>10)%16]&127)",
				codeMinified: "r=1.05946309,b=t/.2575,as=b/r,a=as/r,c=b*r,cs=c*r,d=cs*r,ds=d*r,e=ds*r,f=e*r,fs=f*r,g=fs*r,gs=g*r,([fs,e,cs,b,as,,,,,,,,,,ds,,b,cs,d,ds,fs,,,,,,,,,,cs,,ds,cs,as,gs/2,ds/2,,,,,,,,,,as,,cs,b,gs/2,g/2,fs/2][(t>>10)%64]&127)+([fs/8,0,0,fs/4,fs/8,0,g/4,0,fs/8,0,fs/4,0,fs/8,0,fs/4][(t>>10)%16]&127)",
				starred: 1
			},
			{
				description: "2-bit song hardcore remix",
				url: "https://www.reddit.com/r/bytebeat/comments/qdfa0i/2bit_song/",
				remixed: {
					description: "2-bit song",
					url: "https://www.reddit.com/r/bytebeat/comments/q36kta/2bit_song/"
				},
				date: "2021-10-22",
				sampleRate: 44100,
				codeOriginal: "(sqrt((t&16383)*5000)&128)+(3E6/((t+16384)&32767)&128)+(t/2*(t&t>>11)&64)|(t/32&128)&t/16",
				codeMinified: "(sqrt(5E3*(t&16383))&128)+(3E6/(t+16384&32767)&128)+(t/2*(t&t>>11)&64)|t/32&128&t/16",
				starred: 2
			},
			{
				description: "having fun with square waves",
				url: "https://www.reddit.com/r/bytebeat/comments/qeml94/having_fun_with_square_waves/",
				date: "2021-10-24",
				sampleRate: 44100,
				codeOriginal: "(t&64/(t&t>>12?t&t>>14?1:2:4))+(t/[1,2,8,2,4,3,2,3][(t>>13)%8]&64)+(sqrt((t&16383)*1000)&64)+(t*(t&t>>12)&32)",
				codeMinified: "(t&64/(t&t>>12?t&t>>14?1:2:4))+(t/[1,2,8,2,4,3,2,3][(t>>13)%8]&64)+(sqrt(1E3*(t&16383))&64)+(t*(t&t>>12)&32)"
			},
			{
				description: "remix of \"The time is running out!\"",
				url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/",
				remixed: {
					description: "The time is running out!",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
				},
				date: "2021-10-25",
				sampleRate: 11025,
				codeOriginal: "((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536<59392?(t&4096?2:16):2))|t>>4)/2&127)+(3E4/(t&4095)&128)+(random()*(((-t>>5)%64)+64))",
				codeMinified: "((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(59392>t%65536?t&4096?2:16:2))|t>>4)/2&127)+(3E4/(t&4095)&128)+random()*((-t>>5)%64+64)",
				starred: 1
			},
			{
				description: "remix of SthephanShi's remix",
				url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/hi9r80q/?utm_source=reddit&utm_medium=web2x&context=3",
				remixed: {
					description: "Remix of RealZynx92's remix",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/hhzb9ft/?utm_source=reddit&utm_medium=web2x&context=3"
				},
				date: "2021-10-27",
				sampleRate: 44100,
				codeOriginal: "t/=4,((t/2*(t&16384?7:5)*(t&512?0.5:(t&256?1:2))*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))|t>>4)&127)+(1E5/(t%(t&8192?4096:3072))&128-64)+(random()*(((-t>>(t&4096?5:(t&2048?3:4)))%64)+64))",
				codeMinified: "t/=4,((t/2*(t&16384?7:5)*(t&512?.5:t&256?1:2)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(59392>t%65536?t&4096?2:16:2))|t>>4)&127)+(1E5/(t%(t&8192?4096:3072))&64)+random()*((-t>>(t&4096?5:t&2048?3:4))%64+64)",
				starred: 2
			},
			{
				description: "better remix of \"The time is running out!\"",
				url: "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/",
				remixed: {
					description: "The time is running out!",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
				},
				date: "2021-11-03",
				sampleRate: 44100,
				codeOriginal: "t/=4,a=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),(t&524288?sqrt((t&4095)*5000)&64|t/16&64:(((t>>9)%64)*random()*((t>>15)%32==15))+6E4/(t%(t&8192?3072:4096))%100)+((-t>>3)%256+256)*tan(sin(a/40.75*2)+cos(a/40.75*2))/32+50",
				codeMinified: "t/=4,a=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(59392>t%65536?t&4096?2:16:2)),(t&524288?sqrt(5E3*(t&4095))&64|t/16&64:(t>>9)%64*random()*(15==(t>>15)%32)+6E4/(t%(t&8192?3072:4096))%100)+((-t>>3)%256+256)*tan(sin(a/40.75*2)+cos(a/40.75*2))/32+50",
				starred: 2
			},
			{
				description: "remix of \"first bytebeat remixed\"",
				url: "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/hj50s9a/?utm_source=reddit&utm_medium=web2x&context=3",
				remixed: {
					description: "first bytebeat remixed",
					author: "NewFall2020",
					url: "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/"
				},
				date: "2021-11-03",
				sampleRate: 44100,
				codeOriginal: "t/=5.5,64*sin((((t*(t&16384?6:5))/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|(t*(t&16384?6:5))*(3+(3&t>>(t&2048?334:14)))>>(1+(3&t>>8))&((sin(t)*t|t>>4)|(tan(t))|t>>3)&128)/21.5)+64+(sqrt((t&4095)*10000)&64|t/8&64)",
				codeMinified: "t/=5.5,64*sin(((t*(t&16384?6:5)/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|t*(t&16384?6:5)*(3+(3&t>>(t&2048?334:14)))>>1+(3&t>>8)&(sin(t)*t|t>>4|t>>3)&128)/21.5)+64+(sqrt(1E4*(t&4095))&64|t/8&64)"
			},
			{
				description: "fm synth, i guess...?",
				url: "https://www.reddit.com/r/bytebeat/comments/qlodty/fm_synth_i_guess/",
				date: "2021-11-03",
				sampleRate: 32000,
				codeOriginal: "a=t/1.15,c=t*1.05,d=c*1.1,e=d*1.15,f=d*1.2,b=[a,c,d,a,f,a,c,e][t>>14&7],m=[a,t,c,d,0,0,e,0][t>>12&7],i=[a,c,t,e][t>>17&3],25+4*tan(sin(b/81.5)+cos(b/81.5))+8*atan(sin(m/20.375)+cos(m/20.375))+100+sin(sin(i/40.75*4)+cos(i/40.75*4))*\"4321\"[t>>15&3]+16*sin(4E3/(t&16383)%100)+tan(sin([t,0,0,0][t>>10&3]*cos(t)))*2"
			},
			{
				description: "1-bit song",
				url: "https://www.reddit.com/r/bytebeat/comments/qmk3k8/1bit_song/",
				date: "2021-11-04",
				sampleRate: 32000,
				codeOriginal: "(48*(random()*\"0000202020002020\"[t/1.2>>10&15]&1))+(6E4/(t/1.2&4095))+(t*[1,random(),random(),random(),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][(t/1.2>>10)+16&31])+(t/\"12483456\"[t/1.2>>16&7]&40)&64",
				codeMinified: "48*(random()*'0000202020002020'[t/1.2>>10&15]&1)+6E4/(t/1.2&4095)+t*[1,random(),random(),random(),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][(t/1.2>>10)+16&31]+(t/'12483456'[t/1.2>>16&7]&40)&64",
				starred: 1
			},
			{
				description: "\"wow that was pretty cool\" remixed",
				remixed: {
					description: "wow that was pretty cool",
					author: "kOLbOSa_exe",
					url: "https://www.reddit.com/r/bytebeat/comments/q4glqu/wow_that_was_pretty_cool/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rjv3if/wow_that_was_pretty_cool_by_kolbosa_exe_remixed/",
				date: "2021-12-19",
				sampleRate: 44100,
				codeOriginal: "(t/\"4368436845874587\"[t>>16&15]&64)+((4e3/(4095&t/6)%500)*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2)+64+sin(3e4/(t&16383))*64",
				codeMinified: "(t/'4368436845874587'[t>>16&15]&64)+(4E3/(4095&t/6)%500*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2)+64+64*sin(3E4/(t&16383))"
			},
			{
				description: "something i made while experimenting with my own remix of TIRO",
				url: "https://www.reddit.com/r/bytebeat/comments/s70nm1/something_i_made_while_experimenting_with_my_own/",
				date: "2022-01-18",
				sampleRate: 32000,
				codeOriginal: "t/=5.5,((t*(t&16384?6:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536<59392?(t&4096?2:11):2))|t>>4)/2&127)+(3E4/(t&4095)&128)+(random()*(((-t>>5)%64)+64))+(t*\"23\"[t>>14&1]&64)",
				codeMinified: "t/=5.5,((t*(t&16384?6:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(59392>t%65536?t&4096?2:11:2))|t>>4)/2&127)+(3E4/(t&4095)&128)+random()*((-t>>5)%64+64)+(t*'23'[t>>14&1]&64)",
				starred: 2
			},
			{
				description: "zynx92 type beat remixed",
				url: "https://www.reddit.com/r/bytebeat/comments/s8hiun/comment/htjy1ae/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2022-01-21",
				sampleRate: 32000,
				codeOriginal: "(random()*\"1000\"[t>>10&3]*32)+(sqrt((t&16383)*400)&63*\"10\"[t>>12&1])+(((t&t>>11)&32)+(64*sin(t*(t&t>>12)*4/88200))+([1,1.5,0.5,0.8][(t>>16)%4]*t>>1&128))/3+31",
				codeMinified: "random()*'1000'[t>>10&3]*32+(sqrt(400*(t&16383))&63*'10'[t>>12&1])+((t&t>>11&32)+64*sin(t*(t&t>>12)*4/88200)+([1,1.5,.5,.8][(t>>16)%4]*t>>1&128))/3+31",
				starred: 1
			}
		]
	},
	{
		author: "kOLbOSa_exe",
		children: [
			{
				description: "fiery sine waveform",
				url: "https://www.reddit.com/r/bytebeat/comments/q4s2dl/some_cool_thingy_here/",
				date: "2021-10-09",
				sampleRate: 44100,
				codeOriginal: "per = (t/2048),(sin(t/10000)*64+80)+(random()*10)+((4e4/((t/4)&4095)%100)>>(random()*t))+(per>128?([13,-12,11,-10,9,-8,7,-6,5,-4,3,-2,1,0][(t>>12)%14]+15)&t%([34,32,33,35][(t>>14)%4]):0)+(per>64?(4e4/((t/4)%4095))%82:0)",
				codeMinified: "per=t/2048,64*sin(t/1E4)+80+10*random()+(4E4/(t/4&4095)%100>>random()*t)+(128<per?[13,-12,11,-10,9,-8,7,-6,5,-4,3,-2,1,0][(t>>12)%14]+15&t%[34,32,33,35][(t>>14)%4]:0)+(64<per?4E4/(t/4%4095)%82:0)"
			},
			{
				description: "electric guitar",
				url: "https://www.reddit.com/r/bytebeat/comments/q8x43h/please_post_this_on_dollchamnet_pleaseeeeeeeee/",
				date: "2021-10-15",
				codeOriginal: "((((((min(t^t+(t>>11))*40)|t/8&t>>6)/4)&127+((t>>4)%2))))^((5e5)/(t&4095))+(t*2%32)+(random()*t)&4e4/(t&4095)",
				codeMinified: "(40*min(t^t+(t>>11))|t/8&t>>6)/4&127+(t>>4)%2^5E5/(t&4095)+2*t%32+random()*t&4E4/(t&4095)"
			},
			{
				description: "ÿ&&",
				url: "https://www.reddit.com/r/bytebeat/comments/qgqx3g/%C3%BF/",
				date: "2021-10-27",
				sampleRate: 44100,
				codeOriginal: "((64*sin(t/20))&(64*cos(t/20000)))+128",
				codeMinified: "(64*sin(t/20)&64*cos(t/2E4))+128"
			},
			{
				description: "NO ARRAY ARRAY SONG sin ver",
				url: "https://www.reddit.com/r/bytebeat/comments/qjmy4v/no_array_array_song/",
				date: "2021-10-31",
				sampleRate: 44100,
				codeOriginal: "sin((((t/t+(((t>>12)%6))+((t>>16)%3))))*t>>4)*32+128",
				codeMinified: "sin((t/t+(t>>12)%6+(t>>16)%3)*t>>4)*32+128"
			}
		]
	},
	{
		author: "GDPlayer_1035",
		children: [
			{
				description: "chiptune engine v1",
				url: "https://www.reddit.com/r/bytebeat/comments/q5n3zc/chiptune_engine_v1/",
				date: "2021-10-11",
				sampleRate: 44100,
				codeOriginal: "delay=8000,len=8,s1=[1,2,4,8,6,4,2,1],s1v=[16,8,16,8,16,8,16,8],s2=[2,3,5,6,4,7,6,2],s2v=[8,4,8,4,8,4,8,4],n=[0,16,0,16,0,8,0,8],st1=t/2*s1[round(t/delay)%len]&s1v[round(t/delay)%len]*4,st2=t/2*s2[round(t/delay)%len]&s2v[round(t/delay)%len]*4,nse=random()*(n[round(t/delay)%len]*4),nse+st1+st2",
				codeMinified: "delay=8E3,len=8,s1=[1,2,4,8,6,4,2,1],s1v=[16,8,16,8,16,8,16,8],s2=[2,3,5,6,4,7,6,2],s2v=[8,4,8,4,8,4,8,4],n=[0,16,0,16,0,8,0,8],st1=t/2*s1[round(t/delay)%len]&4*s1v[round(t/delay)%len],st2=t/2*s2[round(t/delay)%len]&4*s2v[round(t/delay)%len],nse=4*random()*n[round(t/delay)%len],nse+st1+st2"
			},
			{
				description: "sequencer",
				url: "https://www.reddit.com/r/bytebeat/comments/q5r5zk/sequencer/",
				date: "2021-10-11",
				sampleRate: 44100,
				codeOriginal: [
					"delay=22050,",
					"c5=523,",
					"d5=587,",
					"e5=659,",
					"f5=698,",
					"g5=783,",
					"a5=880,",
					"b5=987,",
					"c6=1046,",
					"tones=[c5,d5,e5,f5,g5,a5,b5,c6][round(t/delay)%8],",
					"(sin(t/44100*tones*6.28000000000001)*128)+128"
				],
				codeMinified: "delay=22050,c5=523,d5=587,e5=659,f5=698,g5=783,a5=880,b5=987,c6=1046,tones=[c5,d5,e5,f5,g5,a5,b5,c6][round(t/delay)%8],128*sin(t/44100*tones*6.28)+128"
			},
			{
				description: "fire (max zoom)",
				url: "https://www.reddit.com/r/bytebeat/comments/q80gbs/fire_max_zoom/",
				date: "2021-10-14",
				sampleRate: 44100,
				codeOriginal: "(((((((t%2)?t/2:t/4)+t/800)+sin(t/(t%2?20:10))*9)&t^t))+t^t)",
				codeMinified: "(t/(t%2?2:4)+t/800+9*sin(t/(t%2?20:10))&t^t)+t^t",
				starred: 1
			},
			{
				description: "thing 2",
				url: "https://www.reddit.com/r/bytebeat/comments/q8ctdl/thing_2/",
				date: "2021-10-15",
				sampleRate: 44100,
				codeOriginal: "sin(((t*(t^(t/2&(t/2))&t/4)&t/90)^t)/22050)*128+128",
				codeMinified: "128*sin((t*(t^t/2&t/2&t/4)&t/90^t)/22050)+128"
			},
			{
				description: "printer",
				url: "https://www.reddit.com/r/bytebeat/comments/q94xkt/printer/",
				date: "2021-10-16",
				mode: "Signed Bytebeat",
				sampleRate: 11025,
				codeOriginal: "(((((t&t/900)*t&t)*t/90000000^t)&127)+(sin(t/9000*(t/9000&127))*63)-63)",
				codeMinified: "((((t&t/900)*t&t)*t/9E7^t)&127)+63*sin(t/9E3*(t/9E3&127))-63"
			},
			{
				description: "helicopter",
				url: "https://www.reddit.com/r/bytebeat/comments/q9skto/helicopter/",
				date: "2021-10-17",
				sampleRate: 44100,
				codeOriginal: "(((t%round(t/900)&-t*2)^t/900)/3)",
				codeMinified: "(t%round(t/900)&2*-t^t/900)/3"
			},
			{
				description: "atari styled bass",
				url: "https://www.reddit.com/r/bytebeat/comments/qcp8dy/atari_styled_bass/",
				date: "2021-10-21",
				sampleRate: 44100,
				codeOriginal: [
					"nse=\"808080080080800880808080080808800880808080808080088008808\",",
					"(nse[round(t/20)%nse.length])*28&t/90&-t/91"
				],
				codeMinified: "nse='808080080080800880808080080808800880808080808080088008808',28*nse[round(t/20)%nse.length]&t/90&-t/91"
			}
		]
	},
	{
		description: "Sine Music v2",
		author: "Jay-Arnett-97104",
		url: "https://www.reddit.com/r/bytebeat/comments/q8ev9z/sine_music_v2/",
		date: "2021-10-15",
		sampleRate: 11025,
		codeOriginal: "t=t*4,(sin(t/22/((t>>12)%4+1))*sin(t/22/((t>>15)%4+1))*((t/1)%0.0001)+128)*1280001",
		codeMinified: "t*=4,1280001*(sin(t/22/((t>>12)%4+1))*sin(t/22/((t>>15)%4+1))*(t/1%1E-4)+128)"
	},
	{
		description: "non-js bytebeat thing that resembles music if you squint your ears",
		author: "Bp103",
		url: "https://www.reddit.com/r/bytebeat/comments/qem3ip/nonjs_bytebeat_thing_that_resembles_music_if_you/",
		date: "2021-10-24",
		codeOriginal: "((t%(8000*32))<(8000*16)?(t<<((((46517>>((t/512)%16))<<15)>>15)%15))%(((.6+t)>>9)^((.4-t)<<3)):(t<<((((43690>>((t/1024)%16))<<15)>>15)%15))-(((.6+t)>>9)^((.4-t)<<3))) | ((t%8000*16)<(8000*8)?(2<<((((t%4096*2)<<3)/((t%4096*2)>>8))^(((t%8192)<<1))|4>>((t%8192)>>4)))-(((t%1024)<<3)/((t%1024)>>8)):(((t%4096*2)<<3)/((t%4096*2)>>8))^((t%8192)<<1))",
		codeMinified: "(128E3>t%256E3?(t<<(46517>>t/512%16<<15>>15)%15)%(.6+t>>9^.4-t<<3):(t<<(43690>>t/1024%16<<15>>15)%15)-(.6+t>>9^.4-t<<3))|(64E3>t%8E3*16?(2<<((t%4096*2<<3)/(t%4096*2>>8)^t%8192<<1|4>>(t%8192>>4)))-(t%1024<<3)/(t%1024>>8):(t%4096*2<<3)/(t%4096*2>>8)^t%8192<<1)"
	},
	{
		description: "Drifting electricity",
		author: "Chasyxx",
		url: "https://www.reddit.com/r/bytebeat/comments/qi3enp/with_new_bytecodes_already_posted_here_are_all/",
		date: "2021-10-29",
		codeOriginal: "t>>t%(t%2?[61,51,31,41][(t>>14)%4]:34)+(t>>6)|Math.cos((t>>1)/314.159)*128+128",
		codeMinified: "t>>t%(t%2?[61,51,31,41][(t>>14)%4]:34)+(t>>6)|128*cos((t>>1)/314.159)+128"
	},
	{
		author: "NewFall2020",
		children: [
			{
				description: "first bytebeat remixed (This was made by SthephanShi and I remixed it)",
				url: "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/",
				date: "2021-11-02",
				codeOriginal: "((t*(t&16384?6:5))/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|(t*(t&16384?6:5))*(3+(3&t>>(t&2048?334:14)))>>(1+(3&t>>8))&((sin(t)*t|t>>4)|(tan(t))|t>>3)",
				codeMinified: "(t*(t&16384?6:5)/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|t*(t&16384?6:5)*(3+(3&t>>(t&2048?334:14)))>>1+(3&t>>8)&(sin(t)*t|t>>4|t>>3)"
			},
			{
				description: "When Bytebeat has a Harmony v2",
				url: "https://www.reddit.com/r/bytebeat/comments/qqcblq/when_bytebeat_has_a_harmony_v2/",
				date: "2021-11-09",
				sampleRate: 32000,
				codeOriginal: "t/=4,d=[1,1.5,1.75,2,2.5,4,1,3][(t>>13)%8]*t,e=[1,1.5,1.75,1.6666,2,4,1,3][(t>>13)%8]*t,f=[1,1.5,1.75,1.6,2,2.4,1,3][(t>>13)%8]*t,g=[0.5,0.75,0.875,1,0.75,0.5,0.25,0.75,0.625,0.75,0.875,1,0.75,0.5,0.25,0.75][(t>>13)%16]*t,h=[2,3,3.5,4,5,8,2,6][(t>>13)%8]*t,(d%32+e%42.66666666+f%51.212121212121+g%64+h%16)",
				codeMinified: "t/=4,d=[1,1.5,1.75,2,2.5,4,1,3][(t>>13)%8]*t,e=[1,1.5,1.75,1.6666,2,4,1,3][(t>>13)%8]*t,f=[1,1.5,1.75,1.6,2,2.4,1,3][(t>>13)%8]*t,g=[.5,.75,.875,1,.75,.5,.25,.75,.625,.75,.875,1,.75,.5,.25,.75][(t>>13)%16]*t,h=[2,3,3.5,4,5,8,2,6][(t>>13)%8]*t,d%32+e%42.66666666+f%51.212121212121+g%64+h%16"
			},
			{
				description: "Awesome level - Remixed",
				remixed: {
					description: "Awesome level",
					author: "SthephanShi"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
				date: "2021-11-29",
				sampleRate: 32000,
				codeOriginal: [
					"t/=4,",
					"a=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>4),",
					"b=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4),",
					"c=3e4/(t&4095)&128-64,",
					"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
					"e=(random()*(((-t>>[6,5,5,5,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
					"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
				],
				codeMinified: "t/=4,a=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>4,b=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4,c=3E4/(t&4095)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e",
				starred: 2
			},
			{
				description: "Awesome level #2 Remix",
				remixed: {
					description: "Awesome level #2",
					author: "SthephanShi"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
				date: "2021-11-29",
				sampleRate: 32000,
				codeOriginal: [
					"t/=4,",
					"a=(t*(t&16384?6:5)*(3-(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>4),",
					"b=(t*(t&16384?6:5)*(5-(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4),",
					"c=3e4/(t&8191)&128-64,",
					"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
					"e=(random()*(((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
					"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
				],
				codeMinified: "t/=4,a=t*(t&16384?6:5)*(3-(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>4,b=t*(t&16384?6:5)*(5-(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4,c=3E4/(t&8191)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e"
			},
			{
				description: "Awesome level #3 fanmade",
				remixed: {
					description: "Awesome level #2",
					author: "SthephanShi"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
				date: "2021-11-29",
				sampleRate: 32000,
				codeOriginal: [
					"t/=4,",
					"a=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>3),",
					"b=(t*(t&16384?6:5)*(2+(3&t>>(t&4096?8:15)))>>(3&t>>9)|t>>4),",
					"c=3e4/(t&4095)&128-64,",
					"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
					"e=(random()*(((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
					"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
				],
				codeMinified: "t/=4,a=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>3,b=t*(t&16384?6:5)*(2+(3&t>>(t&4096?8:15)))>>(3&t>>9)|t>>4,c=3E4/(t&4095)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e"
			},
			{
				description: "TIRO remixed again",
				remixed: {
					description: "remix of \"The time is running out!\"",
					author: "RealZynx92",
					url: "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
				date: "2021-11-29",
				sampleRate: 44100,
				codeOriginal: [
					"t/=4,",
					"a=",
					"b=((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536?(t&4096?2:16):2))|t>>4)/2&127),",
					"c=3e4/(t%(t&8192?5120:4096))&128-64,",
					"d=(t*(t&16384?7:5)*(2*(1&t>>11)))/32%64,",
					"e=(random()*(((-t>>[6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,3][(t>>11)%64])%64)+64)),",
					"(b/2%128)+(c%164)+d+e"
				],
				codeMinified: "t/=4,b=(t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536?t&4096?2:16:2))|t>>4)/2&127,c=3E4/(t%(t&8192?5120:4096))&64,d=t*(t&16384?7:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,3][(t>>11)%64])%64+64),b/2%128+c%164+d+e",
				starred: 2
			},
			{
				description: "TIRO Remixed#5",
				remixed: {
					description: "better remix of \"The time is running out!\"",
					author: "RealZynx92",
					url: "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/qlst5m/comment/hmu205h/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2021-12-01",
				sampleRate: 44100,
				codeOriginal: [
					"t/=4,a=t&524288?(t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8))):(t*(t&16384?7:5)*(4-(3&t>>10)+(3&t<<7))),",
					"b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),",
					"c=((a/32%32)+(b/4%32)),",
					"",
					"t&524288?(random()*(((-t>>([6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64]))%64)+64))%102+((5.12e4/(t%(t&8192?4096:4096))&128-64)%180)+c:(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32]))%64)+64))%102+((3.02e4/(t%(t&8192?4096:6144))&128-64)%180)+c"
				],
				codeMinified: "t/=4,a=t&524288?t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8)):t*(t&16384?7:5)*(4-(3&t>>10)+(3&t<<7)),b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(59392>t%65536?t&4096?2:16:2)),c=a/32%32+b/4%32,t&524288?random()*((-t>>[6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64])%64+64)%102+(51200/(t%4096)&64)%180+c:random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32])%64+64)%102+(30200/(t%(t&8192?4096:6144))&64)%180+c",
				starred: 1
			},
			{
				description: "TIRO Remixed#5.1",
				remixed: {
					description: "better remix of \"The time is running out!\"",
					author: "RealZynx92",
					url: "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/qlst5m/comment/hmu25u3/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2021-12-01",
				sampleRate: 44100,
				codeOriginal: [
					"t/=4,a=t&524288?(t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8))):((t*(t&16384?7:5)*(1+(3&t>>10)+(3&t<<7)))),",
					"b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),",
					"c=((a/32%32)+(b/4%32)),",
					"",
					"t&524288?(random()*(((-t>>([6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64]))%64)+64))%102+((5.12e4/(t%(t&8192?4096:4096))&128-64)%180)+c:(t&262144?(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,3,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,4,3,2,1][(t>>11)%128]))%64)+64))%102+((3.02e4/(t%(t&8192?4096:6144))&128-64)%180)+c:(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32]))%64)+64))%1+((3.02e4/(t%(t&8192?3072:4096))&128-64)%180)+c)"
				],
				codeMinified: "t/=4,a=t&524288?t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8)):t*(t&16384?7:5)*(1+(3&t>>10)+(3&t<<7)),b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(59392>t%65536?t&4096?2:16:2)),c=a/32%32+b/4%32,t&524288?random()*((-t>>[6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64])%64+64)%102+(51200/(t%4096)&64)%180+c:t&262144?random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,3,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,4,3,2,1][(t>>11)%128])%64+64)%102+(30200/(t%(t&8192?4096:6144))&64)%180+c:random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32])%64+64)%1+(30200/(t%(t&8192?3072:4096))&64)%180+c",
				starred: 1
			},
			{
				description: "Neurofunk remixed",
				remixed: {
					description: "Neurofunk",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/s0laz2/comment/hv2s233/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2021-02-01",
				sampleRate: 44100,
				codeOriginal: [
					"t/=5.5125,",
					"a=t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),",
					"b=a/3%(85+(1/3))+((t%65536<61440?44583.5284:0)/(t&4095)/2%128),",
					"c=((t%1024<256?4:0))*(t*Math.random())|t>>0,",
					"d=((t%512<256?4:0))*(t*Math.random())|t>>0,",
					"e=(t%16384<(1024*14)?c:d),",
					"f=e/8%32+(b%190),",
					"(t%131072<126976?f:(f+(44583/(-t&4095))/2%128))"
				],
				codeMinified: "t/=5.5125,a=t*((t&4096?59392>t%65536?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),b=a/3%(85+1/3)+(61440>t%65536?44583.5284:0)/(t&4095)/2%128,c=(256>t%1024?4:0)*t*Math.random()|t>>0,d=(256>t%512?4:0)*t*Math.random()|t>>0,e=14336>t%16384?c:d,f=e/8%32+b%190,126976>t%131072?f:f+44583/(-t&4095)/2%128",
				starred: 1
			}
		]
	},
	{
		author: "getDolphinedLol",
		children: [
			{
				description: "Bots",
				url: "https://www.reddit.com/r/bytebeat/comments/raab29/bots_44100_hz/",
				date: "2021-12-06",
				sampleRate: 44100,
				codeOriginal: "-(((30*sin(t>>4))^t>>9)|(tan(t>>13)&t>>4)*t>>5)",
				codeMinified: "-(30*sin(t>>4)^t>>9|(tan(t>>13)&t>>4)*t>>5)",
				starred: 1
			},
			{
				description: "⌬ (Signed Bytebeat)",
				url: "https://www.reddit.com/r/bytebeat/comments/rda606/signed_bytebeat/",
				date: "2021-12-10",
				mode: "Signed Bytebeat",
				sampleRate: 44100,
				codeOriginal: "(30*sin(t>>5)*t>>15)",
				codeMinified: "30*sin(t>>5)*t>>15"
			},
			{
				description: "- (44100 Hz)",
				url: "https://www.reddit.com/r/bytebeat/comments/re5h0j/44100_hz/",
				date: "2021-12-11",
				sampleRate: 44100,
				codeOriginal: "((t-t%(t/62.4/2E1)^t)+t/4E3)-t>>1",
				codeMinified: "(t-t%(t/62.4/20)^t)+t/4E3-t>>1"
			},
			{
				description: "Ice Age",
				url: "https://www.reddit.com/r/bytebeat/comments/reokmi/ice_age_32k_hz/",
				date: "2021-12-12",
				sampleRate: 32000,
				codeOriginal: "m=(t*[6,7,8,7][t/1.6&t>>12&3]/8&t>>10)-5",
				codeMinified: "(t*[6,7,8,7][t/1.6&t>>12&3]/8&t>>10)-5"
			},
			{
				description: "Shredder Vol. 2",
				url: "https://www.reddit.com/r/bytebeat/comments/rxcwfw/shredder_vol_2_22050_hz/",
				date: "2022-01-06",
				sampleRate: 22050,
				codeOriginal: "t>>(t&8192?3:4)|t*(t>>5&t>>7)|(t*(t>>4&t>>5|t>>9)&144)|\"$TH\".charCodeAt(t+t>>t)",
				codeMinified: "t>>(t&8192?3:4)|t*(t>>5&t>>7)|t*(t>>4&t>>5|t>>9)&144|'$TH'.charCodeAt(t+t>>t)"
			},
			{
				description: "funky remix of \"the time is running out!\"",
				remixed: {
					description: "The time is running out!",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/ry4ikf/comment/hrmh2m3/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2022-01-07",
				mode: "Sighned Bytebeat",
				sampleRate: 11025,
				codeOriginal: "(t>>4|t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))&96)+(64*random(t)*(1&t>>11))+(44444/(t%pow(4,(3+(2+(1)))))&128)",
				codeMinified: "(t>>4|t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(59392>t%65536?t&4096?2:16:2))&96)+64*random()*(1&t>>11)+(44444/(t%4096)&128)",
				starred: 1
			},
			{
				description: "fitebeat",
				url: "https://www.reddit.com/r/bytebeat/comments/ry7d6g/fitebeat/",
				date: "2022-01-07",
				codeOriginal: "((\"Baz§zaB-\".charCodeAt((t*(t&4096?3:2)*(t&2048?2:1))>>3&7))+(((t>>1)*(t&32768?3:2)*(1&t>>11)&144))+(64*random(t)*(1-(1&t>>9)))+(44444/(t%pow(4,(3+(2+(1)))))&64))/2",
				codeMinified: "('Baz§zaB-'.charCodeAt(t*(t&4096?3:2)*(t&2048?2:1)>>3&7)+((t>>1)*(t&32768?3:2)*(1&t>>11)&144)+64*random()*(1-(1&t>>9))+(44444/(t%4096)&64))/2",
				starred: 1
			},
			{
				description: "65536",
				url: "https://www.reddit.com/r/bytebeat/comments/s0ixnm/65536_signed_bytebeat/",
				date: "2022-01-10",
				mode: "Signed Bytebeat",
				sampleRate: 44100,
				codeOriginal: "t/=4.7,(((t>>3)*(t&32768?3:2)*(t&65536?1.8:2)&64)+((t*(t&16384?3:2)*(t&4096?2:1)&64)+(64*sin(3123/(t%pow(4,(3+(2+(1)))))))+(64*random()*(1-(1&t>>10))))/2)-64",
				codeMinified: "t/=4.7,((t>>3)*(t&32768?3:2)*(t&65536?1.8:2)&64)+((t*(t&16384?3:2)*(t&4096?2:1)&64)+64*sin(3123/(t%4096))+64*random()*(1-(1&t>>10)))/2-64"
			},
			{
				description: "goose melody",
				url: "https://www.reddit.com/r/bytebeat/comments/s0t3j1/goose_melody/",
				date: "2022-01-10",
				sampleRate: 44100,
				codeOriginal: "t/=1.2,([4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,0.5,0,1,0,0.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,0.5,0,1,0,0.5,0][(t>>12)%64]*(t>>1)&128)",
				codeMinified: "t/=1.2,[4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0][(t>>12)%64]*(t>>1)&128"
			},
			{
				description: "the danger zone",
				url: "https://www.reddit.com/r/bytebeat/comments/s0xhgq/the_danger_zone/",
				date: "2022-01-11",
				sampleRate: 44100,
				codeOriginal: "[1,0.5,1,1.2,1,0.5,1,0.9,1,0.5,1,1.2,4,3.5,4,3][(t>>13)%16]*t&128",
				codeMinified: "[1,.5,1,1.2,1,.5,1,.9,1,.5,1,1.2,4,3.5,4,3][(t>>13)%16]*t&128"
			},
			{
				description: "Ctrl+V",
				url: "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/",
				date: "2022-01-11",
				sampleRate: 44100,
				codeOriginal: "(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2)+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)",
				codeMinified: "([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)",
				starred: 1
			},
			{
				description: "ARRAY 11025HZ SONG",
				url: "https://www.reddit.com/r/bytebeat/comments/s1cai7/array_11025hz_song/",
				date: "2022-01-11",
				sampleRate: 11025,
				codeOriginal: "([1,0,2,0,3,0,2.4,0][(t>>12)%8]*t)+([0,128][(t>>12)%2]*random())|t>>3",
				codeMinified: "[1,0,2,0,3,0,2.4,0][(t>>12)%8]*t+[0,128][(t>>12)%2]*random()|t>>3"
			},
			{
				description: "funny boi",
				url: "https://www.reddit.com/r/bytebeat/comments/s1bltj/funny_boi/",
				date: "2022-01-11",
				sampleRate: 44100,
				codeOriginal: "[3,0,3,0,3,3,2,2,3,3,3.5,3.5,3,3,2.5,2.5,3,2.9,3,2.9,3,0,3,0,2.5,2.5,2,2,1.8,1.8,2,2][(t>>12)%32]*t&191"
			},
			{
				description: "pootis",
				url: "https://www.reddit.com/r/bytebeat/comments/s1gjav/pootis_44100hz/",
				date: "2022-01-11",
				sampleRate: 44100,
				codeOriginal: "(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127)+(128*sin(4095/(t%pow(4,(3+(3+(1)))))))",
				codeMinified: "(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127)+128*sin(4095/(t%16384))",
				starred: 1
			},
			{
				description: "-PWM MUISC-",
				url: "https://www.reddit.com/r/bytebeat/comments/s27xzz/pwm_muisc/",
				date: "2022-01-12",
				sampleRate: 32000,
				codeOriginal: "(([2,2,1,0,1,0,1,0,0.9,0.9,1,1,1.5,1.5,0.5,0.5][(t>>11)%16]*t&127)+(t>>10)&128)+(10*random())+(16383/(t%pow(4,(3+(3+(1))))))",
				codeMinified: "(([2,2,1,0,1,0,1,0,.9,.9,1,1,1.5,1.5,.5,.5][(t>>11)%16]*t&127)+(t>>10)&128)+10*random()+16383/(t%16384)"
			},
			{
				description: "something cool",
				url: "https://www.reddit.com/r/bytebeat/comments/s628sb/something_cool/",
				date: "2022-01-17",
				sampleRate: 44100,
				codeOriginal: [
					"t/=4.7,",
					"(x=[4,2,1,0.5][(t>>10)%4]*t,",
					"(t*(t&16384?x:t&8192?3:4)&127)+(x&128)|t>>3)/2"
				],
				codeMinified: "t/=4.7,(x=[4,2,1,.5][(t>>10)%4]*t,(t*(t&16384?x:t&8192?3:4)&127)+(x&128)|t>>3)/2"
			},
			{
				description: "i put a whole bag of jellybeans up my ass",
				url: "https://www.reddit.com/r/bytebeat/comments/s66475/i_put_a_whole_bag_of_jellybeans_up_my_ass/",
				date: "2022-01-17",
				sampleRate: 44100,
				codeOriginal: "([1,0.5,2,0.5,3,0.5,2,0.5,5,0.5,4,0.5,3.5,0.5,4,0.5,7,0.5,6,0.5,7,0.5,8,0.8,8,0.8,8,0.8,8,0.8,8,0.5][(t>>12)%32]*t>>1&191)+(t>>9)&192",
				codeMinified: "([1,.5,2,.5,3,.5,2,.5,5,.5,4,.5,3.5,.5,4,.5,7,.5,6,.5,7,.5,8,.8,8,.8,8,.8,8,.8,8,.5][(t>>12)%32]*t>>1&191)+(t>>9)&192"
			},
			{
				description: "chocolate chip bytebeat code",
				url: "https://www.reddit.com/r/bytebeat/comments/s69l6o/chocolate_chip_bytebeat_code/",
				date: "2022-01-17",
				sampleRate: 44100,
				codeOriginal: "t/=4.7,[sin(t>>3),2,sin(t>>1),3][(t>>11)%4]*t|[2,1,0.5,0.1,2,1,0.5,PI][(t>>12)%8]*t>>4",
				codeMinified: "t/=4.7,[sin(t>>3),2,sin(t>>1),3][(t>>11)%4]*t|[2,1,.5,.1,2,1,.5,PI][(t>>12)%8]*t>>4",
				starred: 1
			},
			{
				description: "( ͡° ͜ʖ ͡°)",
				url: "https://www.reddit.com/r/bytebeat/comments/s6xqf1/%CA%96/",
				date: "2022-01-18",
				sampleRate: 11025,
				codeOriginal: "([sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),3][(t>>11)%16]*t&t>>3)-20",
				starred: 2
			},
			{
				description: "kinda funni remix of \"the time is running out!\"",
				url: "https://www.reddit.com/r/bytebeat/comments/s7aiq2/kinda_funni_remix_of_the_time_is_running_out_by/",
				remixed: {
					description: "The time is running out!",
					author: "SthephanShi",
					url: "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
				},
				date: "2021-10-19",
				sampleRate: 11025,
				codeOriginal: "t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t&4096?2:16))|4e4/(t&4095)|t>>(t&4096?t&8192?4:2:3)",
				starred: 1
			},
			{
				description: "grogrogilla",
				url: "https://www.reddit.com/r/bytebeat/comments/s73i8u/grogrogilla/",
				date: "2022-01-18",
				codeOriginal: "t/=0.4,([sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2.5,sin(t>>2),3,][(t>>12)%16]*t&t>>4)-20",
				codeMinified: "t/=.4,([sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2.5,sin(t>>2),3][(t>>12)%16]*t&t>>4)-20",
				starred: 1
			},
			{
				description: "taiko drums",
				url: "https://www.reddit.com/r/bytebeat/comments/s7daoh/taiko_drums/",
				date: "2022-01-19",
				sampleRate: 11025,
				codeOriginal: "([1,1,1,1,2,3,2.4,3,1,1,1,1,6,3,2,2.4][(t>>11)%16]*t*(t&4096?1:2)&t>>(t&8192?3:4))-16",
				starred: 1
			},
			{
				description: "snaerasrakd",
				url: "https://www.reddit.com/r/bytebeat/comments/saf49d/snaerasrakd/",
				date: "2022-01-23",
				sampleRate: 44100,
				codeOriginal: "t/=5.5,+[1.5,sin(t>>1),1.5,sin(t>>1),2,sin(t>>1),1.8,sin(t>>1),][(t>>12)%8]*t&-t>>4|128*random()*(1-(1&t>>9))|4e4/(t&4095)",
				codeMinified: "t/=5.5,+[1.5,sin(t>>1),1.5,sin(t>>1),2,sin(t>>1),1.8,sin(t>>1)][(t>>12)%8]*t&-t>>4|128*random()*(1-(1&t>>9))|4E4/(t&4095)",
				starred: 1
			}
		]
	},
	{
		author: "Decent-Manager-6169",
		children: [
			{
				description: "Weird Thingy Music",
				url: "https://www.reddit.com/r/bytebeat/comments/rbmtv1/weird_thingy_music/",
				date: "2021-12-08",
				sampleRate: 32000,
				codeOriginal: "a=t&t>>6,b=t|t>>8,c=t|t>>7,d=t|t>>9,a+b+c+d",
				codeMinified: "(t&t>>6)+(t|t>>8)+(t|t>>7)+(t|t>>9)"
			},
			{
				description: "Weird Thingy Music 2",
				url: "https://www.reddit.com/r/bytebeat/comments/recb8f/weird_thingy_music_2/",
				date: "2021-12-12",
				sampleRate: 44100,
				codeOriginal: [
					"ONE=t*[6,8,7,9][t/1.6>>12&3]/8,",
					"IDEK=ONE/[1,1.1,1,1.1,0.9,1,0.90,0.975][t/1.6>>17&7]/8&15,",
					"IHY=t*[6.1,8.2,7.3,7.3][t/1.6>>16&3]/10.8,IHY=(IHY%128+IHY%127+IHY%96+IHY%64+IHY%192)/16,",
					"IDK=(t*Math.random()|t/1.6>>11)&15,",
					"SDK=(t*Math.random()|t/1.6>>8)&15,",
					"IDEK+IHY+IDK+SDK"
				],
				codeMinified: "ONE=t*[6,8,7,9][t/1.6>>12&3]/8,IDEK=ONE/[1,1.1,1,1.1,.9,1,.9,.975][t/1.6>>17&7]/8&15,IHY=t*[6.1,8.2,7.3,7.3][t/1.6>>16&3]/10.8,IHY=(IHY%128+IHY%127+IHY%96+IHY%64+IHY%192)/16,IDK=(t*random()|t/1.6>>11)&15,SDK=(t*random()|t/1.6>>8)&15,IDEK+IHY+IDK+SDK"
			},
			{
				description: "Recreated Stimmer",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rjm4c4/recreated_stimmer/",
				date: "2021-12-19",
				codeOriginal: [
					"a=(t*(t>>11&t>>13))*[6,4,2,0][t>>9&3]/2&127,b=t*[2,4,2,4,",
					"2.5,5,2.5,5,",
					"3,6,3,6,",
					"3.5,7,3.5,7][t>>11&15]&128,a+b"
				],
				codeMinified: "a=t*(t>>11&t>>13)*[6,4,2,0][t>>9&3]/2&127,b=t*[2,4,2,4,2.5,5,2.5,5,3,6,3,6,3.5,7,3.5,7][t>>11&15]&128,a+b"
			},
			{
				description: "Stimmer (Sine Edition)",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rk7x5o/stimmer_sine_edition/",
				date: "2021-12-20",
				codeOriginal: [
					"(a=(t*(4|7&t>>13)>>(~t>>11&1)),",
					"b=Math.sin(a/4/5.1)*42+64)+(c=(t*(t>>11&t>>13)*(~t>>9&3)&127),",
					"d=Math.sin(c/4/10.2)*((-t>>7&15)+1)*4+64)"
				],
				codeMinified: "(a=t*(4|7&t>>13)>>(~t>>11&1),b=42*sin(a/4/5.1)+64)+(c=t*(t>>11&t>>13)*(~t>>9&3)&127,sin(c/4/10.2)*((-t>>7&15)+1)*4+64)"
			},
			{
				description: "stimmer but its all triangle",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rld1aj/stimmer_but_its_all_triangle/",
				date: "2021-12-21",
				codeOriginal: "a=(t*(4|7&t>>13)>>(~t>>11&1)),a=Math.abs(a%256-128),b=(t*2*(t>>11&t>>13)*(~t>>9&3)),b=Math.abs(b%256-128)/1.1,a+b",
				codeMinified: "a=t*(4|7&t>>13)>>(~t>>11&1),a=abs(a%256-128),b=2*t*(t>>11&t>>13)*(~t>>9&3),b=abs(b%256-128)/1.1,a+b"
			},
			{
				description: "Sine Music Test 1",
				url: "https://www.reddit.com/r/bytebeat/comments/rn8xsl/sine_music_test_1/",
				date: "2021-12-24",
				sampleRate: 44100,
				codeOriginal: [
					"a=t*\"87\"[t/1.1>>16&1]/2.75,a=(Math.cos(a/5.13/8)*64+64)/8,",
					"b=t*\"87\"[t/1.1>>16&1]/2.75/0.8,b=(Math.cos(b/5.13/8)*64+64)/8,",
					"c=(t*Math.random()|t/1.1>>7)&31*[1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0][t/1.1>>12&15],",
					"d=(t*Math.random()|t/1.1>>9)&31*[0,1][t/1.1>>15&1],",
					"e=t*[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0][t/1.1>>12&15]*[2.4,2.15,2.4,2.15,2.7,2.15,2.7,2.15][t/1.1>>16&7]/2.75,e=(Math.cos(e/14.8)*64+64)/4,a+b+c+d+e"
				],
				codeMinified: "a=t*'87'[t/1.1>>16&1]/2.75,a=(64*cos(a/5.13/8)+64)/8,b=t*'87'[t/1.1>>16&1]/2.75/.8,b=(64*cos(b/5.13/8)+64)/8,c=(t*random()|t/1.1>>7)&31*[1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0][t/1.1>>12&15],d=(t*random()|t/1.1>>9)&31*[0,1][t/1.1>>15&1],e=t*[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0][t/1.1>>12&15]*[2.4,2.15,2.4,2.15,2.7,2.15,2.7,2.15][t/1.1>>16&7]/2.75,e=(64*cos(e/14.8)+64)/4,a+b+c+d+e",
				starred: 2
			},
			{
				description: "Stimmer but with Hihat and Crash",
				remixed: {
					description: "Stimmer",
					url: "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
				},
				url: "https://www.reddit.com/r/bytebeat/comments/rrt7xo/stimmer_but_with_hihat_and_crash/",
				date: "2021-12-30",
				codeOriginal: [
					"a=((t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&127))/2,",
					"b=(t*Math.random()|t>>6)&63*\"01\"[t>>12&1],",
					"c=(t*Math.random()|t>>4)&32,a+b+c"
				],
				codeMinified: "a=((t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&127))/2,b=(t*random()|t>>6)&63*'01'[t>>12&1],c=(t*random()|t>>4)&32,a+b+c",
				starred: 1
			},
			{
				description: "Melody Of Im Blue (with drums)",
				url: "https://www.reddit.com/r/bytebeat/comments/rs1qqi/comment/hqridb8/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2021-12-30",
				sampleRate: 44100,
				codeOriginal: [
					"a=t*[1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.27,0.75,1,1.125,1.125,1.125,1,1.125,1.125,1,1.125,1.27][t/2.4>>12&63]/4&63,",
					"b=(Math.sin(t/2|t/12)*((-t/2.4>>6&31)+1)+32)*[1,0][t/2.4>>11&1],",
					"c=(Math.sin(t/3|t/18)*((-t/2.4>>8&31)+1)+32)*[0,1][t/2.4>>13&1],a+b+c"
				],
				codeMinified: "a=t*[1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.27,.75,1,1.125,1.125,1.125,1,1.125,1.125,1,1.125,1.27][t/2.4>>12&63]/4&63,b=(sin(t/2|t/12)*((-t/2.4>>6&31)+1)+32)*[1,0][t/2.4>>11&1],c=(sin(t/3|t/18)*((-t/2.4>>8&31)+1)+32)*[0,1][t/2.4>>13&1],a+b+c",
				starred: 2
			},
			{
				description: "Sine Melody",
				url: "https://www.reddit.com/r/bytebeat/comments/rwd856/sine_melody/",
				date: "2022-01-05",
				sampleRate: 44100,
				codeOriginal: [
					"a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=((Math.sin(v>>1)*64+64)+(Math.cos(w>>1)*64+64))/8+((Math.sin(v)*64+64)+(Math.cos(w)*64+64))/8)^64,",
					"b=Math.sin(t/[64,16,17,16,14,16,17,16,32,16,17,16,21,24,26,32][t>>14&15]*2)*2*((-t>>10&15)+1)+16,a+b"
				],
				codeMinified: "a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=(64*sin(v>>1)+64+(64*cos(w>>1)+64))/8+(64*sin(v)+64+(64*cos(w)+64))/8)^64,b=2*sin(t/[64,16,17,16,14,16,17,16,32,16,17,16,21,24,26,32][t>>14&15]*2)*((-t>>10&15)+1)+16,a+b",
				starred: 2
			},
			{
				description: "literally don't know the name",
				url: "https://www.reddit.com/r/bytebeat/comments/ryoyt5/literally_dont_know_the_name/",
				date: "2022-01-08",
				sampleRate: 44100,
				codeOriginal: [
					"a=t*\"60303060303060303060303060306030\"[t/5.5>>9&31]/8&127,",
					"b=t*\"60303060303060303060303060306030\"[t/5.5>>9&31]/[0,2.65,2.5,3][t/5.5>>14&3]/2&127,a+b"
				],
				codeMinified: "a=t*'60303060303060303060303060306030'[t/5.5>>9&31]/8&127,b=t*'60303060303060303060303060306030'[t/5.5>>9&31]/[0,2.65,2.5,3][t/5.5>>14&3]/2&127,a+b",
				starred: 1
			},
			{
				description: "Never gonna give you up",
				url: "https://www.reddit.com/r/bytebeat/comments/s0b0m0/i_made_the_coolest_music/",
				date: "2022-01-10",
				codeMinified: "a=64E3,80*(128<t*[[6.5,7.3,8.7,7.3,11,0,0,11,0,0,10,0,0,0,0,0,6.5,7.3,8.2,6.5,10,0,0,10,0,0,8.7,0,0,8.2,7.3,0,6.5,7.3,8.7,7.3,8.7,0,0,0,10,0,8.2,0,0,7.3,6.5,0,0,0,6.5,0,10,0,0,0,8.7,0,0,0,0,0,0,0][int(64*t/a%64)]][int(t/a)%1]%255)*(1-64*t%a/a)"
			},
			{
				description: "short simple music (based on: simple step sequencer)",
				url: "https://www.reddit.com/r/bytebeat/comments/s7cb1v/short_simple_music_based_on_simple_step_sequencer/",
				date: "2022-01-19",
				sampleRate: 32000,
				codeOriginal: "t*[2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,1.6,1.6,0,0,1.6,1.6,2,2,1.6,1.6,0,0,1.6,1.6,2,2,1.74,1.74,2.22,2.35,1.74,2.22,2.35,2.22,1.74,1.74,2.22,2.35,1.74,2.35,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22][t>>12&63]|t>>\"5655\"[t>>16&3]"
			}
		]
	},
	{
		author: "Diicorp95",
		children: [
			{
				description: "The rings",
				url: "https://www.reddit.com/r/bytebeat/comments/ruk9am/8000_hz_the_rings/",
				date: "2022-01-02",
				codeOriginal: "t/5*0.4^t-t+2**6*cos(2>>t)-(12*tan(t))",
				codeMinified: "t/5*.4^t-t+2**6*cos(2>>t)-12*tan(t)"
			},
			{
				description: "o$c1ll4tör (remix)",
				url: "https://www.reddit.com/r/bytebeat/comments/rwto8m/comment/hregwfu/?utm_source=reddit&utm_medium=web2x&context=3",
				date: "2022-01-05",
				mode: "Signed Bytebeat",
				sampleRate: 44100,
				codeOriginal: "127*sin(t/20.5)&63*cos(t/27.25)"
			}
		]
	},
	{
		author: "_elevate__",
		children: [
			{
				description: "the 42 melody but array and with a different waveform",
				url: "https://www.reddit.com/r/bytebeat/comments/rz5f3l/the_42_melody_but_array_and_with_a_different/",
				date: "2022-01-08",
				sampleRate: 44100,
				codeOriginal: "(sin((t/112.5)*[0,1,0,1,4,5,4,5,0,1,0,1,4,5,4,5,16,17,16,17,20,21,20,21,16,17,16,17,20,21,20,21][t/11025&31])*127)+(sin(t/5000)*100)",
				codeMinified: "127*sin(t/112.5*[0,1,0,1,4,5,4,5,0,1,0,1,4,5,4,5,16,17,16,17,20,21,20,21,16,17,16,17,20,21,20,21][t/11025&31])+100*sin(t/5E3)"
			},
			{
				description: "squsinsaw music",
				url: "https://www.reddit.com/r/bytebeat/comments/s7aiep/squsinsaw_music/",
				date: "2022-01-19",
				codeOriginal: "squ=((t)*[1,0,2,0,1,0,2,2,1,0,2,0,1,0,2,0,1.5,0,3,3,1.5,0,3,0,1.35,0,2.7,2.7,1.35,0,2.70,][t>>10&31])&64,sine=((sin(((t/40.743648)*([8,9,9.5,12][t>>10&3])*[1,1,1.5,1.35][t>>13&3]))*32)+32),saw=(((t/4)*[0,0,0,0,0,0,0,0,8,9.5,12,16,0,0,0,0][t>>8&15])&31),kick=((1E5/(t&4095)/5)&63),snr=((((t*t*t>>10)&63)|((t>>6)&63))*\"0101\"[t>>12&3]),(sine%((-t>>4)&63))+(squ*[0,1,1,1,1,1,1,1][t>>16&7])+(kick*[0,0,1,1,1,1,1,1][t>>16&7])+(snr*[0,0,1,1,1,1,1,1][t>>16&7])+(saw*[0,0,1,1,1,1,1,1][t>>16&7])",
				codeMinified: "squ=t*[1,0,2,0,1,0,2,2,1,0,2,0,1,0,2,0,1.5,0,3,3,1.5,0,3,0,1.35,0,2.7,2.7,1.35,0,2.7][t>>10&31]&64,sine=32*sin(t/40.743648*[8,9,9.5,12][t>>10&3]*[1,1,1.5,1.35][t>>13&3])+32,saw=t/4*[0,0,0,0,0,0,0,0,8,9.5,12,16,0,0,0,0][t>>8&15]&31,kick=1E5/(t&4095)/5&63,snr=(t*t*t>>10&63|t>>6&63)*'0101'[t>>12&3],sine%(-t>>4&63)+squ*[0,1,1,1,1,1,1,1][t>>16&7]+kick*[0,0,1,1,1,1,1,1][t>>16&7]+snr*[0,0,1,1,1,1,1,1][t>>16&7]+saw*[0,0,1,1,1,1,1,1][t>>16&7]",
				starred: 2
			}
		]
	},
	{
		description: "Demporal Tisturbance",
		author: "Arch0474",
		url: "https://dollchan.net/btb/res/3.html#32",
		date: "2022-02-13",
		sampleRate: 44100,
		codeOriginal: "((0.5*t&t>>8|t&t>>12&t&t>>8)|t*[.3,.335,0.5,0.5][(t>>16)%4])%128+t*0.5%[32,64,128,255][(t>>16)%4]*[0.4,0.3,0.2,0.1][(t>>16)%4]",
		codeMinified: "(.5*t&t>>8|t&t>>12&t&t>>8|t*[.3,.335,.5,.5][(t>>16)%4])%128+.5*t%[32,64,128,255][(t>>16)%4]*[.4,.3,.2,.1][(t>>16)%4]"
	},
	{
		author: "lhphr",
		url: "https://dollchan.net/btb/res/3.html#44",
		date: "2022-04-14",
		children: [
			{
				description: "madnessdescent{offset}",
				sampleRate: 11025,
				codeOriginal: "(z=(x=((a=t+16777216)&a>>7)+a/32768)/(y=-x|x*a<<8)|y/x)**z"
			},
			{
				description: "processings",
				date: "2022-04-05",
				sampleRate: 22050,
				codeOriginal: "(t**(1+(t>>8)/(t/2%(2-4*(x=(t>>17&1))))%(2+14*x))**(t/127%(2-x)))",
				codeMinified: "t**(1+(t>>8)/(t/2%(2-4*(x=t>>17&1)))%(2+14*x))**(t/127%(2-x))"
			},
			{
				description: "Unnecessary-ARPEG.drm",
				date: "2022-04-06",
				sampleRate: 11025,
				codeOriginal: "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64+((x=t>>(y=2+1*('99999999999999889999999967886855999999997788886799999999678568459199297788999756956999946788685347999999778888649391990664075405'[t>>10&127]))&2)-1)*(2*3e3*(x+1)/(t&(2**(y+1)-1))&1)*64",
				codeMinified: "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64+((x=t>>(y=2+1*'99999999999999889999999967886855999999997788886799999999678568459199297788999756956999946788685347999999778888649391990664075405'[t>>10&127])&2)-1)*(6E3*(x+1)/(t&(2**(y+1)-1))&1)*64",
				starred: 1
			},
			{
				description: "Unnecessary-ARPEG",
				date: "2022-04-07",
				sampleRate: 11025,
				codeOriginal: "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64"
			},
			{
				description: "Numbers Not In Sight",
				date: "2022-04-09",
				codeOriginal: "((~t)-(t))*((x=t/t)-(t>>(z=(y=x+x)**y*y+y))%y)^(t*(t>>z))%(y**y**y)*-t>>z",
				codeMinified: "(~t-t)*((x=t/t)-(t>>(z=(y=x+x)**y*y+y))%y)^t*(t>>z)%(y**y**y)*-t>>z"
			},
			{
				description: "delchor",
				date: "2022-04-13",
				sampleRate: 44100,
				codeOriginal: "(s=4*((l=t/44100*4400)%2**12)>>11<7)*((a=l*'12'[l>>8&1]*'66998887'[l>>13&7]/6)%48+a%64)|(a<<3&a>>7)%32",
				starred: 1
			}
		]
	}
],
	"js-bigcode": [
	{
		author: "Savestate",
		children: [
			{
				description: "Bit-Shift Melodies",
				url: "https://battleofthebits.org/arena/Entry/Bit-Shift+Melodies/17525/",
				date: "2015-04-15",
				sampleRate: 44100,
				file: "Savestate - Bit-Shift Melodies.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Earl Grey Groove",
				url: "http://battleofthebits.org/arena/Entry/Earl+Grey+Groove/20500/",
				date: "2016-01-13",
				file: "Savestate - Earl Grey Groove.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		description: "my headache generator",
		author: "frantic",
		url: "https://battleofthebits.org/arena/Entry/my+headache+generator/17548/",
		date: "2015-04-16",
		sampleRate: 44100,
		file: "frantic - my headache generator.js",
		fileFormatted: true,
		fileOriginal: true,
		starred: 1
	},
	{
		author: "Jimmyoshi",
		children: [
			{
				description: "damnit kf i have to do homework why'd you have to pick now to host a bytebeat ohb",
				url: "https://battleofthebits.org/arena/Entry/damnit+kf+i+have+to+do+homework+why%27d+you+have+to+pick+now+to+host+a+bytebeat+ohb+%5BPLAY+IN+22000+Hz+wow%5D.txt/17659/",
				date: "2015-04-29",
				sampleRate: 22050,
				file: "Jimmyoshi - damnit kf i have to do homework why'd you have to pick now to host a bytebeat ohb.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Spring Fever",
				url: "https://battleofthebits.org/arena/Entry/Spring+Fever/21648/",
				date: "2016-04-23",
				sampleRate: 22050,
				file: "Jimmyoshi - Spring Fever.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Daydreamer",
				url: "https://battleofthebits.org/arena/Entry/Daydreamer/25439/",
				date: "2017-04-29",
				sampleRate: 44100,
				file: "Jimmyoshi - Daydreamer.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "HITLER-CHANデートシム",
				url: "https://battleofthebits.org/arena/Entry/HITLER-CHAN%E3%83%87%E3%83%BC%E3%83%88%E3%82%B7%E3%83%A0.txt/25871/",
				date: "2017-06-16",
				sampleRate: 22050,
				file: "Jimmyoshi - HITLER-CHANデートシム.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		author: "raphaelgoulart",
		children: [
			{
				description: "the cute bytebeast ^o^",
				url: "https://battleofthebits.org/arena/Entry/the+cute+bytebeast+%5Eo%5E/17669/",
				date: "2015-05-01",
				sampleRate: 11025,
				file: "raphaelgoulart - the cute bytebeast ^o^.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "bossabeat",
				url: "https://battleofthebits.org/arena/Entry/bossabeat/21386/",
				date: "2016-03-28",
				sampleRate: 44100,
				file: "raphaelgoulart - bossabeat.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "bytefunk",
				url: "https://battleofthebits.org/arena/Entry/bytefunk/31042/",
				date: "2019-03-05",
				sampleRate: 22050,
				file: "raphaelgoulart - bytefunk.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "1k dance",
				url: "https://battleofthebits.org/arena/Entry/1k+dance/31132/",
				date: "2019-03-10",
				sampleRate: 11025,
				file: "raphaelgoulart - 1k dance.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "shy smile",
				url: "https://battleofthebits.org/arena/Entry/shy+smile/31801/",
				date: "2019-06-01",
				sampleRate: 44100,
				file: "raphaelgoulart - shy smile.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "ripthisentry.txt",
				url: "https://battleofthebits.org/arena/Entry/ripthisentry.txt/32559/",
				date: "2019-08-27",
				sampleRate: 44100,
				file: "raphaelgoulart - ripthisentry.txt.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			}
		]
	},
	{
		author: "funute",
		children: [
			{
				description: "bloop factory",
				url: "https://battleofthebits.org/arena/Entry/bloop+factory/20506/",
				date: "2016-01-13",
				sampleRate: 44100,
				file: "funute - bloop factory.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "bytebeat? how about bitbeat?",
				url: "https://battleofthebits.org/arena/Entry/bytebeat_+how+about+bitbeat_/21510/",
				date: "2016-04-07",
				sampleRate: 44100,
				file: "funute - bytebeat! how about bitbeat!.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "tiny rave",
				url: "https://battleofthebits.org/arena/Entry/tiny+rave/27419/",
				date: "2018-02-04",
				sampleRate: 44100,
				file: "funute - tiny rave.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "frequency machine",
				url: "https://battleofthebits.org/arena/Entry/frequency+machine/32329/",
				date: "2019-07-28",
				sampleRate: 44100,
				file: "funute - frequency machine.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "vgm engine",
				url: "https://battleofthebits.org/arena/Entry/vgm+engine/39556/",
				date: "2020-11-01",
				sampleRate: 44100,
				file: "funute - vgm engine.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		author: "pigdevil2010",
		children: [
			{
				description: "Last Palette",
				url: "https://battleofthebits.org/arena/Entry/Last+Palette/25369/",
				date: "2017-04-17",
				sampleRate: 44100,
				file: "pigdevil2010 - Last Palette.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "Last Fountain",
				url: "https://battleofthebits.org/arena/Entry/Last+Fountain/27281/",
				date: "2018-01-20",
				sampleRate: 44100,
				file: "pigdevil2010 - Last Fountain.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		author: "Bp103",
		children: [
			{
				description: "the proto-version",
				url: "https://twitter.com/Bp103/status/934396842850291712",
				date: "2017-11-25",
				sampleRate: 44100,
				file: "Bp103 - the proto-version.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true
			},
			{
				description: "a sequencer type thing",
				url: "https://www.reddit.com/r/bytebeat/comments/enmbix/made_a_sequencer_type_thing/",
				date: "2020-01-12",
				sampleRate: 32000,
				file: "Bp103 - a sequencer type thing.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "a song in a half baked pseudo-mml format",
				url: "https://twitter.com/Bp103/status/1221435415032406017",
				date: "2020-01-26",
				sampleRate: 32000,
				file: "Bp103 - a song in a half baked pseudo-mml format.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true
			},
			{
				description: "now its FM synth",
				url: "https://twitter.com/Bp103/status/1345905059964530688",
				date: "2021-01-04",
				sampleRate: 32000,
				file: "Bp103 - now its FM synth.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true
			},
			{
				description: "triangle kick drum and snare",
				url: "https://twitter.com/Bp103/status/1346329796041695233",
				date: "2021-01-05",
				sampleRate: 32000,
				file: "Bp103 - triangle kick drum and snare.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			},
			{
				description: "random bytebeat thing with delay effect",
				url: "https://twitter.com/Bp103/status/1401194230656253952",
				date: "2021-06-05",
				sampleRate: 44100,
				file: "Bp103 - random bytebeat thing with delay effect.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "bytebeat song 06-15-2021",
				url: "https://www.youtube.com/watch?v=aA7pyVkkPk4",
				date: "2021-06-15",
				sampleRate: 44100,
				file: "Bp103 - bytebeat song 06-15-2021.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "chip box",
				url: "https://www.reddit.com/r/bytebeat/comments/qenxc2/learned_how_to_do_functions_now_i_have_an/",
				date: "2021-10-24",
				sampleRate: 44100,
				file: "Bp103 - chip box.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			}
		]
	},
	{
		description: "happybeat",
		author: "Yung Gotenks",
		url: "https://battleofthebits.org/arena/Entry/happybeat/31161/",
		date: "2019-03-11",
		sampleRate: 44100,
		file: "Yung Gotenks - happybeat.js",
		fileFormatted: true,
		fileOriginal: true,
		starred: 1
	},
	{
		description: "Takitjää",
		author: "Lia",
		url: "https://battleofthebits.org/arena/Entry/Takitj%C3%A4%C3%A4/31188/",
		date: "2019-03-14",
		sampleRate: 44100,
		file: "Lia - Takitjää.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true
	},
	{
		description: "War Tradition",
		author: "petet",
		url: "https://battleofthebits.org/arena/Entry/War+Tradition/31413/",
		date: "2019-04-13",
		sampleRate: 32000,
		file: "petet - War Tradition.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true
	},
	{
		description: "Sunset",
		author: "InfinitySnapz",
		url: "https://www.reddit.com/r/bytebeat/comments/bxmsl7/sunset/",
		date: "2019-06-07",
		sampleRate: 44100,
		file: "InfinitySnapz - Sunset.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 1
	},
	{
		author: "argarak",
		children: [
			{
				description: "phase byte [++t]",
				url: "https://battleofthebits.org/arena/Entry/phase+byte+%5B%2B%2Bt%5D/32262/",
				date: "2019-07-15",
				file: "argarak - phase byte [++t].js",
				fileFormatted: true,
				fileOriginal: true
			},
			{
				description: "tuned_phase time_modulation",
				url: "https://battleofthebits.org/arena/Entry/tuned_phase+time_modulation/34772/",
				date: "2020-05-10",
				sampleRate: 44100,
				file: "argarak - tuned_phase time_modulation.js",
				fileFormatted: true
			},
			{
				description: "pcm.modshape.wv",
				url: "https://battleofthebits.org/arena/Entry/pcm.modshape.wv/39543/",
				date: "2020-10-31",
				sampleRate: 44100,
				file: "argarak - pcm.modshape.wv.js",
				fileFormatted: true,
				fileOriginal: true,
				starred: 1
			}
		]
	},
	{
		description: "Impromptu (Diatom)",
		author: "Radnyx",
		url: "https://battleofthebits.org/arena/Entry/Impromptu+%28Diatom%29/34240/",
		date: "2020-04-25",
		sampleRate: 32000,
		file: "Radnyx - Impromptu (Diatom).js",
		fileFormatted: true,
		fileOriginal: true,
		starred: 1
	},
	{
		description: "A NΞW DIMΞNSION",
		author: "burlynn n01se",
		url: "https://battleofthebits.org/arena/Entry/A+N%CE%9EW+DIM%CE%9ENSION/42606/",
		date: "2021-01-19",
		sampleRate: 22050,
		file: "burlynn n01se - A NΞW DIMΞNSION.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 2
	},
	{
		description: "__ws2.model",
		author: "beep-eep",
		url: "https://battleofthebits.org/arena/Entry/__ws2.model/43638/",
		date: "2021-02-13",
		sampleRate: 44100,
		file: "beep-eep - __ws2.model.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 1
	},
	{
		description: "511",
		author: "johanvandegriff",
		url: "https://www.reddit.com/r/bytebeat/comments/o7e957/511/",
		remixed: {
			description: "arpeggiator fun",
			author: "SArpnt",
			url: "https://www.reddit.com/r/bytebeat/comments/fjsa1y/arpeggiator_fun/"
		},
		date: "2021-06-25",
		sampleRate: 44100,
		file: "Johan Vandegriff - 511.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 2
	},
	{
		description: "cool loop i guess",
		author: "RealZynx92",
		url: "https://www.reddit.com/r/bytebeat/comments/q1tesu/cool_loop_i_guess/",
		date: "2021-10-05",
		sampleRate: 44100,
		file: "RealZynx92 - cool loop i guess.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 1
	},
	{
		author: "Decent-Manager-6169",
		children: [
			{
				description: "Red Green Blue 4",
				url: "https://www.reddit.com/r/bytebeat/comments/r8iuh0/red_green_blue_4/",
				date: "2021-12-04",
				sampleRate: 32000,
				file: "Decent-Manager-6169 - Red Green Blue 4.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 2
			},
			{
				description: "An Escaped War Or Something",
				url: "https://www.reddit.com/r/bytebeat/comments/rnngwr/an_escaped_war_or_something/",
				date: "2021-12-24",
				sampleRate: 44100,
				file: "Decent-Manager-6169 - An Escaped War Or Something.js",
				fileFormatted: true,
				fileMinified: true,
				fileOriginal: true,
				starred: 1
			}
		]
	},
	{
		description: "ByteSongg",
		author: "Danidanijr",
		url: "https://www.reddit.com/r/bytebeat/comments/rfsu6p/bytesongg_by_danidanijr_44100_hz/",
		date: "2021-12-14",
		sampleRate: 44100,
		file: "Danidanijr - ByteSongg.js",
		fileFormatted: true,
		fileMinified: true,
		fileOriginal: true,
		starred: 2
	}
],
	floatbeat: floatbeat,
	funcbeat: funcbeat,
	sthephanshi: sthephanshi,
	sarpnt: sarpnt
};

function parseEntry(entry) {
	if (Array.isArray(entry.codeOriginal))
		entry.codeOriginal = entry.codeOriginal.join("\n");

	return entry;
}
function stripEntryToSong(entry, codeType = undefined) {
	const { sampleRate, mode } = entry;
	let code = null;
	if (codeType)
		code = entry[codeType];
	if (code)
		return { code, sampleRate, mode };
	else
		return { sampleRate, mode };
}
function createByteSnippet(text, onclick) {
	const interactElem = document.createElement("button");
	const codeElem = document.createElement("code");
	interactElem.title = "Click to play this code";
	interactElem.classList = "code-button";
	codeElem.innerText = text;
	interactElem.addEventListener("click", onclick);
	interactElem.append(codeElem);
	return interactElem;
}
function createCodeTypeElem(entry, name) {
	const codeTypeElem = document.createElement("span");
	codeTypeElem.className = `library-song-${name}`;

	const fullSongData = stripEntryToSong(entry, name);
	codeTypeElem.append(createByteSnippet(entry[name], () => globalThis.bytebeat.setSong(fullSongData)));

	const codeLengthElem = document.createElement("span");
	codeLengthElem.className = "library-song-info";
	codeLengthElem.innerText = `${entry[name].length}C`;
	codeTypeElem.append(" ", codeLengthElem);

	return codeTypeElem;
}
function createEntryElem(entry) {
	const entryElem = document.createElement("li");

	if (entry.starred) {
		entryElem.classList.add([
			"star-white",
			"star-yellow",
		][entry.starred - 1]);
	}

	if (entry.description) {
		let descriptionElem;
		if (entry.url) {
			descriptionElem = document.createElement("a");
			descriptionElem.href = entry.url;
			descriptionElem.target = "_blank";
		} else
			descriptionElem = document.createElement("span");
		descriptionElem.innerHTML = entry.description;
		const songElems = Array.from(descriptionElem.getElementsByTagName("byte-snippet"));
		if (songElems.length) {
			for (const elem of songElems) {
				const songData = elem.dataset.songData ? JSON.parse(elem.dataset.songData) : {};
				
				const onclick =
					elem.dataset.hasOwnProperty("codeFile") ?
						() =>
							fetch(`library/${elem.dataset.codeFile}`)
								.then(response => response.text())
								.then(code => globalThis.bytebeat.setSong(Object.assign(
									songData,
									{ code },
								)))
					:
						() =>
							globalThis.bytebeat.setSong(Object.assign(
								{ code: elem.innerText },
								songData,
							));

				const snippetElem = createByteSnippet(elem.innerText, onclick);
				elem.replaceWith(snippetElem);
			}
		}
		entryElem.append(descriptionElem);
	} else if (entry.url) {
		const descriptionElem = document.createElement("span");
		const sourceElem = document.createElement("a");
		sourceElem.href = entry.url;
		sourceElem.target = "_blank";
		sourceElem.innerText = "source";
		descriptionElem.append("(", sourceElem, ")");
		entryElem.append(descriptionElem);
	}
	if (entry.author) {
		const authorListElem = document.createElement("span");
		if (!Array.isArray(entry.author))
			entry.author = [entry.author];

		for (let i in entry.author) {
			let author = entry.author[i];

			if (typeof author === "string")
				authorListElem.append(author);
			else {
				const authorElem = document.createElement("a");
				authorElem.innerText = author[0];
				authorElem.href = author[1];
				authorElem.target = "_blank";
				authorListElem.append(authorElem);
			}
			if (i < entry.author.length - 1)
				authorListElem.append(", ");
		}
		if (entry.description || entry.url) {
			authorListElem.prepend(" (by ");
			authorListElem.append(")");
		} else
			authorListElem.prepend("by ");

		entryElem.append(authorListElem);
	}
	if (entry.remixed) {
		if (entryElem.innerHTML)
			entryElem.append(" ");

		const remixElem = document.createElement("span");
		remixElem.append("(");

		if (entry.remixed.url) {
			const urlElem = document.createElement("a");
			urlElem.href = entry.url;
			urlElem.target = "_blank";
			if (entry.description) {
				urlElem.innerHTML = entry.remixed.description;
				remixElem.append("remix of ", urlElem);
			} else if (entry.remixed.author) {
				urlElem.innerText = "song";
				remixElem.append("remix of ", urlElem);
			} else {
				urlElem.innerText = "remix";
				remixElem.append(urlElem);
			}
		} else {
			if (entry.remixed.description)
				remixElem.append("remix of ", entry.remixed.description);
			else if (entry.author)
				remixElem.append("remix of song");
			else
				remixElem.append("remix");
		}

		if (entry.remixed.author)
			remixElem.append(` by ${entry.remixed.author}`);

		remixElem.append(")");
		entryElem.append(remixElem);
	}

	if (entry.date) {
		const dateElem = document.createElement("span");
		dateElem.className = "library-song-info";
		dateElem.innerText = `(${entry.date})`;

		entryElem.append(" ", dateElem);
	}
	if (entry.sampleRate) {
		const sampleRateElem = document.createElement("span");
		sampleRateElem.className = "library-song-info";
		sampleRateElem.innerText = `${entry.sampleRate}Hz`;

		entryElem.append(" ", sampleRateElem);
	}
	if (entry.mode) {
		const modeElem = document.createElement("span");
		modeElem.className = "library-song-info";
		modeElem.innerText = entry.mode;

		entryElem.append(" ", modeElem);
	}

	if (entryElem.innerHTML)
		entryElem.append(document.createElement("br"));


	if (entry.file) {
		for (const fileType of [
			{ name: "formatted", prop: "fileFormatted" },
			{ name: "minified", prop: "fileMinified" },
			{ name: "original", prop: "fileOriginal" },
		]) {
			if (entry[fileType.prop]) {
				const codeFileElem = document.createElement("button");
				codeFileElem.className = "code-load-file";
				codeFileElem.innerText = `\u25b6 ${fileType.name}`;
				const songData = stripEntryToSong(entry);
				codeFileElem.addEventListener("click", () =>
					fetch(`library/${fileType.name}/${entry.file}`)
						.then(response => response.text())
						.then(code => globalThis.bytebeat.setSong(Object.assign(songData, { code })))
				);
				entryElem.append(codeFileElem, " ");
			}
		}
		entryElem.append(document.createElement("br"));
	}

	{
		let codeOriginalElem = null;
		if (entry.codeOriginal) {
			codeOriginalElem = createCodeTypeElem(entry, "codeOriginal");
			entryElem.append(codeOriginalElem);
		}
		if (entry.codeMinified) {
			const codeMinifiedElem = createCodeTypeElem(entry, "codeMinified");
			entryElem.append(codeMinifiedElem);

			const codeTypeToggleElem = document.createElement("button");
			codeTypeToggleElem.className = "code-type-toggle";
			codeTypeToggleElem.innerText = "minified";

			if (entry.codeOriginal) {
				codeOriginalElem.classList.add("disabled");
				codeTypeToggleElem.addEventListener("click", () => {
					if (codeTypeToggleElem.innerText === "minified") {
						codeTypeToggleElem.innerText = "original";
						codeOriginalElem.classList.remove("disabled");
						codeMinifiedElem.classList.add("disabled");
					} else {
						codeTypeToggleElem.innerText = "minified";
						codeMinifiedElem.classList.remove("disabled");
						codeOriginalElem.classList.add("disabled");
					}
				});
			} else {
				codeTypeToggleElem.disabled = "true";
			}

			entryElem.append(" ", codeTypeToggleElem);
		}
	}


	if (entry.children) {
		let childrenElem = document.createElement("ul");
		for (let i = 0, len = entry.children.length; i < len; ++i) {
			let childEntry = parseEntry(entry.children[i]);
			childrenElem.append(createEntryElem(childEntry));
		}
		entryElem.append(childrenElem);
	}

	return entryElem;
}

function addPlaylist(library, id) {
	const playlist = library[id];
	const playlistElem = document.createElement("ul");
	for (let i = 0, len = playlist.length; i < len; ++i) {
		let entry = parseEntry(playlist[i]);
		playlistElem.append(createEntryElem(entry));
	}
	document.getElementById(`library-${id}`).append(playlistElem);
}


function addLibrary(library) {
	for (let p in library)
		addPlaylist(library, p);
}

// note: dom is already loaded when this script is ran
addLibrary(libraryJson);
