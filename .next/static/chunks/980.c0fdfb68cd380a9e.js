"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{80980:function(a,b,c){c.r(b),c.d(b,{startFocusVisible:function(){return f}});/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ var d="ion-focused",e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],f=function(a){var b=[],c=!0,f=a?a.shadowRoot:document,g=a||document.body,h=function(a){b.forEach(function(a){return a.classList.remove(d)}),a.forEach(function(a){return a.classList.add(d)}),b=a},i=function(){c=!1,h([])},j=function(a){(c=e.includes(a.key))||h([])},k=function(a){c&&a.composedPath&&h(a.composedPath().filter(function(a){return!!a.classList&&a.classList.contains("ion-focusable")}))},l=function(){f.activeElement===g&&h([])};return f.addEventListener("keydown",j),f.addEventListener("focusin",k),f.addEventListener("focusout",l),f.addEventListener("touchstart",i),f.addEventListener("mousedown",i),{destroy:function(){f.removeEventListener("keydown",j),f.removeEventListener("focusin",k),f.removeEventListener("focusout",l),f.removeEventListener("touchstart",i),f.removeEventListener("mousedown",i)},setFocus:h}}}}])