"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9936],{76755:function(a,b,c){c.d(b,{g:function(){return d}});var d=function(a,b,c,d,g){return f(a[1],b[1],c[1],d[1],g).map(function(f){return e(a[0],b[0],c[0],d[0],f)})},e=function(a,b,c,d,e){return e*(3*b*Math.pow(e-1,2)+e*(-3*c*e+3*c+d*e))-a*Math.pow(e-1,3)},f=function(a,b,c,d,e){var f;return a-=e,b-=e,c-=e,h((d-=e)-3*c+3*b-a,3*c-6*b+3*a,3*b-3*a,a).filter(function(a){return a>=0&&a<=1})},g=function(a,b,c){var d=b*b-4*a*c;return d<0?[]:[(-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a)]},h=function(a,b,c,d){if(0===a)return g(b,c,d);b/=a,c/=a,d/=a;var e=(3*c-b*b)/3,f=(2*b*b*b-9*b*c+27*d)/27;if(0===e)return[Math.pow(-f,1/3)];if(0===f)return[Math.sqrt(-e),-Math.sqrt(-e)];var h=Math.pow(f/2,2)+Math.pow(e/3,3);if(0===h)return[Math.pow(f/2,.5)-b/3];if(h>0)return[Math.pow(-(f/2)+Math.sqrt(h),1/3)-Math.pow(f/2+Math.sqrt(h),1/3)-b/3];var i=Math.acos(-(f/(2*Math.sqrt(Math.pow(-(e/3),3))))),j=2*Math.pow(Math.sqrt(Math.pow(-(e/3),3)),1/3);return[j*Math.cos(i/3)-b/3,j*Math.cos((i+2*Math.PI)/3)-b/3,j*Math.cos((i+4*Math.PI)/3)-b/3]}},19936:function(a,b,c){c.r(b),c.d(b,{ion_menu:function(){return l},ion_menu_button:function(){return s},ion_menu_toggle:function(){return t}});var d=c(70655),e=c(75121),f=c(23007),g=c(76755),h=c(36221),i=c(98840),j=c(32110),k=c(13262),l=function(){function a(a){(0,e.r)(this,a),this.ionWillOpen=(0,e.e)(this,"ionWillOpen",7),this.ionWillClose=(0,e.e)(this,"ionWillClose",7),this.ionDidOpen=(0,e.e)(this,"ionDidOpen",7),this.ionDidClose=(0,e.e)(this,"ionDidClose",7),this.ionMenuChange=(0,e.e)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=h.G.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return a.prototype.typeChanged=function(a,b){var c=this.contentEl;c&&(void 0!==b&&c.classList.remove("menu-content-"+b),c.classList.add("menu-content-"+a),c.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},a.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},a.prototype.sideChanged=function(){this.isEndSide=(0,i.m)(this.side)},a.prototype.swipeGestureChanged=function(){this.updateState()},a.prototype.connectedCallback=function(){return(0,d.mG)(this,void 0,void 0,function(){var a,b,e,g,h=this;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(void 0===this.type&&(this.type=f.c.get("menuType","overlay")),b=(a=this.el).parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(e=void 0!==this.contentId?document.getElementById(this.contentId):b&&b.querySelector&&b.querySelector("[main]"))||!e.tagName)return console.error('Menu: must have a "content" element to listen for drag events on.'),[2];return this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),j.m._register(this),g=this,[4,Promise.resolve().then(c.bind(c,68224))];case 1:return g.gesture=d.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(a){return h.canStart(a)},onWillStart:function(){return h.onWillStart()},onStart:function(){return h.onStart()},onMove:function(a){return h.onMove(a)},onEnd:function(a){return h.onEnd(a)}}),this.updateState(),[2]}})})},a.prototype.componentDidLoad=function(){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(a){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]})})},a.prototype.disconnectedCallback=function(){this.blocker.destroy(),j.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},a.prototype.onSplitPaneChanged=function(a){this.isPaneVisible=a.detail.isPane(this.el),this.updateState()},a.prototype.onBackdropClick=function(a){this._isOpen&&this.lastOnEnd<a.timeStamp-100&&a.composedPath&&!a.composedPath().includes(this.menuInnerEl)&&(a.preventDefault(),a.stopPropagation(),this.close())},a.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},a.prototype.isActive=function(){return Promise.resolve(this._isActive())},a.prototype.open=function(a){return void 0===a&&(a=!0),this.setOpen(!0,a)},a.prototype.close=function(a){return void 0===a&&(a=!0),this.setOpen(!1,a)},a.prototype.toggle=function(a){return void 0===a&&(a=!0),this.setOpen(!this._isOpen,a)},a.prototype.setOpen=function(a,b){return void 0===b&&(b=!0),j.m._setOpen(this,a,b)},a.prototype._setOpen=function(a,b){return void 0===b&&(b=!0),(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(c){switch(c.label){case 0:if(!this._isActive()||this.isAnimating||a===this._isOpen)return[2,!1];return this.beforeAnimation(a),[4,this.loadAnimation()];case 1:return c.sent(),[4,this.startAnimation(a,b)];case 2:return c.sent(),this.afterAnimation(a),[2,!0]}})})},a.prototype.loadAnimation=function(){return(0,d.mG)(this,void 0,void 0,function(){var a,b;return(0,d.Jh)(this,function(c){switch(c.label){case 0:if((a=this.menuInnerEl.offsetWidth)===this.width&& void 0!==this.animation)return[2];return this.width=a,this.animation&&(this.animation.destroy(),this.animation=void 0),b=this,[4,j.m._createAnimation(this.type,this)];case 1:return b.animation=c.sent(),f.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}})})},a.prototype.startAnimation=function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c,e,g,h,i;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(c=!a,g="ios"===(e=(0,f.b)(this))?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",h="ios"===e?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",i=this.animation.direction(c?"reverse":"normal").easing(c?h:g).onFinish(function(){"reverse"===i.getDirection()&&i.direction("normal")}),!b)return[3,2];return[4,i.play()];case 1:return d.sent(),[3,3];case 2:i.play({sync:!0}),d.label=3;case 3:return[2]}})})},a.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},a.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},a.prototype.canStart=function(a){return!document.querySelector("ion-modal.show-modal")&&!!this.canSwipe()&&(!!this._isOpen|| !j.m._getOpenSync()&&n(window,a.currentX,this.isEndSide,this.maxEdgeStart))},a.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},a.prototype.onStart=function(){if(!this.isAnimating||!this.animation){(0,i.l)(!1,"isAnimating has to be true");return}this.animation.progressStart(!0,this._isOpen?1:0)},a.prototype.onMove=function(a){if(!this.isAnimating||!this.animation){(0,i.l)(!1,"isAnimating has to be true");return}var b=m(a.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-b:b)},a.prototype.onEnd=function(a){var b=this;if(!this.isAnimating||!this.animation){(0,i.l)(!1,"isAnimating has to be true");return}var c=this._isOpen,d=this.isEndSide,e=m(a.deltaX,c,d),f=this.width,h=e/f,j=a.velocityX,k=f/2,l=j>=0&&(j>.2||a.deltaX>k),n=j<=0&&(j< -.2||a.deltaX< -k),o=c?d?l:n:d?n:l,p=!c&&o;c&&!o&&(p=!0),this.lastOnEnd=a.currentTime;var q=o?.001:-.001,r=h<0?.01:h;q+=(0,g.g)([0,0],[.4,0],[.6,1],[1,1],(0,i.j)(0,r,.9999))[0]||0;var s=this._isOpen?!o:o;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return b.afterAnimation(p)},{oneTimeCallback:!0}).progressEnd(s?1:0,this._isOpen?1-q:q,300)},a.prototype.beforeAnimation=function(a){(0,i.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(o),this.backdropEl&&this.backdropEl.classList.add(p),this.blocker.block(),this.isAnimating=!0,a?this.ionWillOpen.emit():this.ionWillClose.emit()},a.prototype.afterAnimation=function(a){(0,i.l)(this.isAnimating,"_before() should be called while animating"),this._isOpen=a,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),a?(this.contentEl&&this.contentEl.classList.add(q),this.ionDidOpen.emit()):(this.el.classList.remove(o),this.contentEl&&this.contentEl.classList.remove(q),this.backdropEl&&this.backdropEl.classList.remove(p),this.animation&&this.animation.stop(),this.ionDidClose.emit())},a.prototype.updateState=function(){var a=this._isActive();this.gesture&&this.gesture.enable(a&&this.swipeGesture),!a&&this._isOpen&&this.forceClosing(),this.disabled||j.m._setActiveMenu(this),(0,i.l)(!this.isAnimating,"can not be animating")},a.prototype.forceClosing=function(){(0,i.l)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)},a.prototype.render=function(){var a,b=this,c=this.isEndSide,d=this.type,g=this.disabled,h=this.isPaneVisible,i=(0,f.b)(this);return(0,e.h)(e.H,{role:"navigation",class:((a={})[i]=!0,a["menu-type-"+d]=!0,a["menu-enabled"]=!g,a["menu-side-end"]=c,a["menu-side-start"]=!c,a["menu-pane-visible"]=h,a)},(0,e.h)("div",{class:"menu-inner",part:"container",ref:function(a){return b.menuInnerEl=a}},(0,e.h)("slot",null)),(0,e.h)("ion-backdrop",{ref:function(a){return b.backdropEl=a},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!1,configurable:!0}),a}(),m=function(a,b,c){return Math.max(0,b!==c?-a:a)},n=function(a,b,c,d){return c?b>=a.innerWidth-d:b<=d},o="show-menu",p="show-backdrop",q="menu-content-open";l.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var r=function(a){return(0,d.mG)(void 0,void 0,void 0,function(){var b,c;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return[4,j.m.get(a)];case 1:if(!(c=b=d.sent()))return[3,3];return[4,b.isActive()];case 2:c=d.sent(),d.label=3;case 3:return[2,!!c]}})})},s=function(){function a(a){var b=this;(0,e.r)(this,a),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=function(){return(0,d.mG)(b,void 0,void 0,function(){return(0,d.Jh)(this,function(a){return[2,j.m.toggle(this.menu)]})})}}return a.prototype.componentWillLoad=function(){this.inheritedAttributes=(0,i.i)(this.el,["aria-label"])},a.prototype.componentDidLoad=function(){this.visibilityChanged()},a.prototype.visibilityChanged=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:return a=this,[4,r(this.menu)];case 1:return a.visible=b.sent(),[2]}})})},a.prototype.render=function(){var a,b=this.color,c=this.disabled,d=this.inheritedAttributes,g=(0,f.b)(this),h=f.c.get("menuIcon","ios"===g?"menu-outline":"menu-sharp"),i=this.autoHide&&!this.visible,j={type:this.type},l=d["aria-label"]||"menu";return(0,e.h)(e.H,{onClick:this.onClick,"aria-disabled":c?"true":null,"aria-hidden":i?"true":null,class:(0,k.c)(b,((a={})[g]=!0,a.button=!0,a["menu-button-hidden"]=i,a["menu-button-disabled"]=c,a["in-toolbar"]=(0,k.h)("ion-toolbar",this.el),a["in-toolbar-color"]=(0,k.h)("ion-toolbar[color]",this.el),a["ion-activatable"]=!0,a["ion-focusable"]=!0,a))},(0,e.h)("button",Object.assign({},j,{disabled:c,class:"button-native",part:"native","aria-label":l}),(0,e.h)("span",{class:"button-inner"},(0,e.h)("slot",null,(0,e.h)("ion-icon",{part:"icon",icon:h,mode:g,lazy:!1,"aria-hidden":"true"}))),"md"===g&&(0,e.h)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),a}();s.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var t=function(){function a(a){var b=this;(0,e.r)(this,a),this.visible=!1,this.autoHide=!0,this.onClick=function(){return j.m.toggle(b.menu)}}return a.prototype.connectedCallback=function(){this.visibilityChanged()},a.prototype.visibilityChanged=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:return a=this,[4,r(this.menu)];case 1:return a.visible=b.sent(),[2]}})})},a.prototype.render=function(){var a,b=(0,f.b)(this),c=this.autoHide&&!this.visible;return(0,e.h)(e.H,{onClick:this.onClick,"aria-hidden":c?"true":null,class:((a={})[b]=!0,a["menu-toggle-hidden"]=c,a)},(0,e.h)("slot",null))},a}();t.style=":host(.menu-toggle-hidden){display:none}"},13262:function(a,b,c){c.d(b,{c:function(){return f},g:function(){return g},h:function(){return e},o:function(){return i}});var d=c(70655),e=function(a,b){return null!==b.closest(a)},f=function(a,b){var c;return"string"==typeof a&&a.length>0?Object.assign(((c={"ion-color":!0})["ion-color-"+a]=!0,c),b):b},g=function(a){var b,c={};return(b=a,void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(function(a){return null!=a}).map(function(a){return a.trim()}).filter(function(a){return""!==a}):[]).forEach(function(a){return c[a]=!0}),c},h=/^[a-z][a-z0-9+\-.]*:/,i=function(a,b,c,e){return(0,d.mG)(void 0,void 0,void 0,function(){var f;return(0,d.Jh)(this,function(d){return null!=a&&"#"!==a[0]&&!h.test(a)&&(f=document.querySelector("ion-router"))?(null!=b&&b.preventDefault(),[2,f.push(a,c,e)]):[2,!1]})})}}}])