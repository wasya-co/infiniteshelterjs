"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4996],{4996:function(e,n,t){t.r(n),t.d(n,{mdTransitionAnimation:function(){return r}});var i=t(7089),a=t(2550);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let r=(e,n)=>{let t="40px",r="back"===n.direction,o=n.enteringEl,$=n.leavingEl,l=(0,a.g)(o),s=l.querySelector("ion-toolbar"),d=(0,i.c)();if(d.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),r?d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${t})`,"translateY(0px)").fromTo("opacity",.01,1),s){let c=(0,i.c)();c.addElement(s),d.addAnimation(c)}if($&&r){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");let u=(0,i.c)();u.addElement((0,a.g)($)).onFinish(e=>{1===e&&u.elements.length>0&&u.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${t})`).fromTo("opacity",1,0),d.addAnimation(u)}return d}}}]);