(this.webpackJsonpguyd=this.webpackJsonpguyd||[]).push([[0],{323:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(26),a=n(115),i=(n(75),function(t,e,n,i,u){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,i=t.velocityX,o=n/2,s=i>=0&&(i>.2||t.deltaX>o),d=(s?1-a:a)*n,h=0;if(d>5){var f=d/Math.abs(i);h=Math.min(f,540)}u(s,a<=0?.01:Object(r.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.012f90d9.chunk.js.map