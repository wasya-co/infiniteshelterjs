"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4543],{54543:function(a,b,c){c.r(b),c.d(b,{createSwipeBackGesture:function(){return f}});var d=c(98840),e=c(68224);c(36221);var f=function(a,b,c,f,g){var h=a.ownerDocument.defaultView,i=function(a){return a.startX<=50&&b()},j=function(a){f(a.deltaX/h.innerWidth)},k=function(a){var b=a.deltaX,c=h.innerWidth,e=b/c,f=a.velocityX,i=f>=0&&(f>.2||a.deltaX>c/2),j=(i?1-e:e)*c,k=0;if(j>5){var l=j/Math.abs(f);k=Math.min(l,540)}g(i,e<=0?.01:(0,d.j)(0,e,.9999),k)};return(0,e.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:c,onMove:j,onEnd:k})}}}])