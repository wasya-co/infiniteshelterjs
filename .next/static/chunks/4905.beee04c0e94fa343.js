"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4905],{84905:function(a,b,c){c.r(b),c.d(b,{ion_ripple_effect:function(){return g}});var d=c(70655),e=c(75121),f=c(23007),g=function(){function a(a){(0,e.r)(this,a),this.type="bounded"}return a.prototype.addRipple=function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c=this;return(0,d.Jh)(this,function(d){return[2,new Promise(function(d){(0,e.f)(function(){var f=c.el.getBoundingClientRect(),g=f.width,k=f.height,l=Math.max(k,g),m=c.unbounded?l:Math.sqrt(g*g+k*k)+i,n=Math.floor(l*j),o=m/n,p=a-f.left,q=b-f.top;c.unbounded&&(p=.5*g,q=.5*k);var r=p-.5*n,s=q-.5*n,t=.5*g-p,u=.5*k-q;(0,e.c)(function(){var a=document.createElement("div");a.classList.add("ripple-effect");var b=a.style;b.top=s+"px",b.left=r+"px",b.width=b.height=n+"px",b.setProperty("--final-scale",""+o),b.setProperty("--translate-end",t+"px, "+u+"px"),(c.el.shadowRoot||c.el).appendChild(a),setTimeout(function(){d(function(){h(a)})},325)})})})]})})},Object.defineProperty(a.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!1,configurable:!0}),a.prototype.render=function(){var a,b=(0,f.b)(this);return(0,e.h)(e.H,{role:"presentation",class:((a={})[b]=!0,a.unbounded=this.unbounded,a)})},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),a}(),h=function(a){a.classList.add("fade-out"),setTimeout(function(){a.remove()},200)},i=10,j=.5;g.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}])