(this.webpackJsonpInfiniteShelter=this.webpackJsonpInfiniteShelter||[]).push([[1],{1080:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return c}));var r=n(14),i=n(68),a=n(188),c=function(t,e,n,c,u){var o=t.ownerDocument.defaultView,s=Object(i.a)(t),f=function(t){return s?-t.deltaX:t.deltaX};return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;c(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,i=e/n,a=function(t){return s?-t.velocityX:t.velocityX}(t),c=a>=0&&(a>.2||e>n/2),h=(c?1-i:i)*n,d=0;if(h>5){var l=h/Math.abs(a);d=Math.min(l,540)}u(c,i<=0?.01:Object(r.e)(0,i,.9999),d)}})}}}]);
//# sourceMappingURL=1.c0e2801c.chunk.js.map