/*! For license information please see 62.45920173.chunk.js.LICENSE.txt */
(this.webpackJsonpInfiniteShelter=this.webpackJsonpInfiniteShelter||[]).push([[62],{531:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(12),o=function(t){var e,n,o,v=10*-f,l=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){v=Object(i.t)(t),w(t)},L=function(){clearTimeout(o),o=void 0,e&&(j(!1),e=void 0)},b=function(t){e||E(a(t),t)},w=function(t){E(void 0,t)},E=function(t,n){if(!t||t!==e){clearTimeout(o),o=void 0;var a=Object(i.o)(n),c=a.x,d=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||T(e,c,d),j(!0)}if(t){var f=h.get(t);f&&(clearTimeout(f),h.delete(t));var v=r(t)?0:u;t.classList.remove(s),o=setTimeout((function(){T(t,c,d),o=void 0}),v)}e=t}},T=function(t,e,i){l=Date.now(),t.classList.add(s);var o=p&&c(t);o&&o.addRipple&&(g(),n=o.addRipple(e,i))},g=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},j=function(t){g();var n=e;if(n){var i=d-Date.now()+l;if(t&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,o)}else n.classList.remove(s)}},O=document;O.addEventListener("ionGestureCaptured",L),O.addEventListener("touchstart",(function(t){v=Object(i.t)(t),b(t)}),!0),O.addEventListener("touchcancel",m,!0),O.addEventListener("touchend",m,!0),O.addEventListener("pointercancel",L,!0),O.addEventListener("mousedown",(function(t){if(2!==t.button){var e=Object(i.t)(t)-f;v<e&&b(t)}}),!0),O.addEventListener("mouseup",(function(t){var e=Object(i.t)(t)-f;v<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=62.45920173.chunk.js.map