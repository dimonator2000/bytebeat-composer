wv=t=>(y=t%256,127>y?y:2*(256-y)),ms=int(t/1E4),p=t/1E4%16,b=p%4,qn=p%1,rh=t=>{for(i=m=0;i<t.length;i++)b>t[i]&&(m=b-t[i]);return m},sc=32>ms%256?1:min(1,max(0,3*qn-.3))*(0<ms%32),c=t*(12>p?2:2.4),max(0,min(255,sc*((wv(t/4)-wv(t/2+qn*wv(t*(ms>>2&15))+wv(2*t*(1+(ms>>5&3)))))*(1-rh([0,1,1.5,2,2.75,3.5]))*(63<ms%256)-wv(t/2+.5*wv(3*(7-qn*(2+(ms>>2&3))%1)**5))*(47<ms%64)+(t<<2+(t>>9)%3)%256*qn*qn*(64<ms%128)*.8-wv(6E3*(2-rh([.25,1,1.5,2.25,3]))**4*(191<ms%256?2:1))*(128<ms%256)+(wv(c)-wv(1.2*c)+wv(1.5*c)-wv(2.24*c)+wv(1.8*c))*(.7-rh([0,.75,1.5,2.5,3.25]))+random()*(16-p)**2/4)*.3-qn*(1-qn*(80>ms%128?2:4)%1)**4*80*random()*(63<ms%256)+wv(2*t+60*sin(25*b))*(31<ms%256)*(1>ms%32)*qn+wv(2E3*(1-qn)**9*(1+p%2))*max(0,1-5*qn)*(31<ms%256)+128))