"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3954],{3954:function(n,t,e){e.r(t),e.d(t,{startFocusVisible:function(){return c}});var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=function(){var n=[],t=!0,e=document,c=function(t){n.forEach(function(n){return n.classList.remove(o)}),t.forEach(function(n){return n.classList.add(o)}),n=t},i=function(){t=!1,c([])};e.addEventListener("keydown",function(n){(t=s.includes(n.key))||c([])}),e.addEventListener("focusin",function(n){t&&n.composedPath&&c(n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")}))}),e.addEventListener("focusout",function(){e.activeElement===e.body&&c([])}),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}}}]);