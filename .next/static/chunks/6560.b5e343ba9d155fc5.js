"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6560],{23789:function(a,b,c){c.d(b,{a:function(){return f},d:function(){return g}});var d=c(70655),e=c(98840),f=function(a,b,c,f,g){return(0,d.mG)(void 0,void 0,void 0,function(){var h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(a)return[2,a.attachViewToDom(b,c,g,f)];if("string"!=typeof c&&!(c instanceof HTMLElement))throw Error("framework delegate is missing");return h="string"==typeof c?b.ownerDocument&&b.ownerDocument.createElement(c):c,f&&f.forEach(function(a){return h.classList.add(a)}),g&&Object.assign(h,g),b.appendChild(h),[4,new Promise(function(a){return(0,e.c)(h,a)})];case 1:return d.sent(),[2,h]}})})},g=function(a,b){if(b){if(a){var c=b.parentElement;return a.removeViewFromDom(c,b)}b.remove()}return Promise.resolve()}},36560:function(a,b,c){c.r(b),c.d(b,{ion_popover:function(){return q}});var d=c(70655),e=c(75121),f=c(23007),g=c(23789),h=c(98934),i=c(13262),j=c(61195),k=c(92741),l=function(a,b){var c="top",d="left",e=a.querySelector(".popover-content"),f=e.getBoundingClientRect(),g=f.width,h=f.height,i=a.ownerDocument.defaultView.innerWidth,j=a.ownerDocument.defaultView.innerHeight,l=b&&b.target&&b.target.getBoundingClientRect(),n=null!=l&&"top"in l?l.top:j/2-h/2,o=null!=l&&"left"in l?l.left:i/2,p=l&&l.width||0,q=l&&l.height||0,r=a.querySelector(".popover-arrow"),s=r.getBoundingClientRect(),t=s.width,u=s.height;null==l&&(r.style.display="none");var v={top:n+q,left:o+p/2-t/2},w={top:n+q+(u-1),left:o+p/2-g/2},x=!1,y=!1;w.left<m+25?(x=!0,w.left=m):g+m+w.left+25>i&&(y=!0,w.left=i-g-m,d="right"),n+q+h>j&&n-h>0?(v.top=n-(u+1),w.top=n-h-(u-1),a.className=a.className+" popover-bottom",c="bottom"):n+q+h>j&&(e.style.bottom=m+"%"),r.style.top=v.top+"px",r.style.left=v.left+"px",e.style.top=w.top+"px",e.style.left=w.left+"px",x&&(e.style.left="calc("+w.left+"px + var(--ion-safe-area-left, 0px))"),y&&(e.style.left="calc("+w.left+"px - var(--ion-safe-area-right, 0px))"),e.style.transformOrigin=c+" "+d;var z=(0,k.c)(),A=(0,k.c)(),B=(0,k.c)();return A.addElement(a.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),B.addElement(a.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),z.addElement(a).easing("ease").duration(100).addAnimation([A,B])},m=5,n=function(a){var b=(0,k.c)(),c=(0,k.c)(),d=(0,k.c)();return c.addElement(a.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),d.addElement(a.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),b.addElement(a).easing("ease").duration(500).addAnimation([c,d])},o=function(a,b){var c=a.ownerDocument,d="rtl"===c.dir,e="top",f=d?"right":"left",g=a.querySelector(".popover-content"),h=g.getBoundingClientRect(),i=h.width,j=h.height,l=c.defaultView.innerWidth,m=c.defaultView.innerHeight,n=b&&b.target&&b.target.getBoundingClientRect(),o=null!=n&&"bottom"in n?n.bottom:m/2-j/2,p=null!=n&&"left"in n?d?n.left-i+n.width:n.left:l/2-i/2,q=n&&n.height||0,r={top:o,left:p};r.left<12?(r.left=12,f="left"):i+12+r.left>l&&(r.left=l-i-12,f="right"),o+q+j>m&&o-j>0?(r.top=o-j-q,a.className=a.className+" popover-bottom",e="bottom"):o+q+j>m&&(g.style.bottom="12px");var s=(0,k.c)(),t=(0,k.c)(),u=(0,k.c)(),v=(0,k.c)(),w=(0,k.c)();return t.addElement(a.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),u.addElement(a.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),v.addElement(g).beforeStyles({top:r.top+"px",left:r.left+"px","transform-origin":e+" "+f}).fromTo("transform","scale(0.001)","scale(1)"),w.addElement(a.querySelector(".popover-viewport")).fromTo("opacity",.01,1),s.addElement(a).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([t,u,v,w])},p=function(a){var b=(0,k.c)(),c=(0,k.c)(),d=(0,k.c)();return c.addElement(a.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),d.addElement(a.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),b.addElement(a).easing("ease").duration(500).addAnimation([c,d])},q=function(){function a(a){var b=this;(0,e.r)(this,a),this.didPresent=(0,e.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,e.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,e.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,e.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(a){a.stopPropagation(),a.preventDefault(),b.dismiss()},this.onBackdropTap=function(){b.dismiss(void 0,h.B)},this.onLifecycle=function(a){var c=b.usersElement,d=r[a.type];if(c&&d){var e=new CustomEvent(d,{bubbles:!1,cancelable:!1,detail:a.detail});c.dispatchEvent(e)}}}return a.prototype.connectedCallback=function(){(0,h.e)(this.el)},a.prototype.present=function(){return(0,d.mG)(this,void 0,void 0,function(){var a,b,c;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(this.presented)return[2];if(!(a=this.el.querySelector(".popover-content")))throw Error("container is undefined");return b=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),c=this,[4,(0,g.a)(this.delegate,a,this.component,["popover-viewport",this.el["s-sc"]],b)];case 1:return c.usersElement=d.sent(),[4,(0,j.e)(this.usersElement)];case 2:return d.sent(),[2,(0,h.d)(this,"popoverEnter",l,o,this.event)]}})})},a.prototype.dismiss=function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return[4,(0,h.f)(this,a,b,"popoverLeave",n,p,this.event)];case 1:if(!(c=d.sent()))return[3,3];return[4,(0,g.d)(this.delegate,this.usersElement)];case 2:d.sent(),d.label=3;case 3:return[2,c]}})})},a.prototype.onDidDismiss=function(){return(0,h.g)(this.el,"ionPopoverDidDismiss")},a.prototype.onWillDismiss=function(){return(0,h.g)(this.el,"ionPopoverWillDismiss")},a.prototype.render=function(){var a,b=(0,f.b)(this),c=this.onLifecycle,d=this.htmlAttributes;return(0,e.h)(e.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},d,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,i.g)(this.cssClass)),((a={})[b]=!0,a["popover-translucent"]=this.translucent,a)),onIonPopoverDidPresent:c,onIonPopoverWillPresent:c,onIonPopoverWillDismiss:c,onIonPopoverDidDismiss:c,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),(0,e.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,e.h)("div",{tabindex:"0"}),(0,e.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,e.h)("div",{class:"popover-arrow"}),(0,e.h)("div",{class:"popover-content"})),(0,e.h)("div",{tabindex:"0"}))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),a}(),r={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};q.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},13262:function(a,b,c){c.d(b,{c:function(){return f},g:function(){return g},h:function(){return e},o:function(){return i}});var d=c(70655),e=function(a,b){return null!==b.closest(a)},f=function(a,b){var c;return"string"==typeof a&&a.length>0?Object.assign(((c={"ion-color":!0})["ion-color-"+a]=!0,c),b):b},g=function(a){var b,c={};return(b=a,void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(function(a){return null!=a}).map(function(a){return a.trim()}).filter(function(a){return""!==a}):[]).forEach(function(a){return c[a]=!0}),c},h=/^[a-z][a-z0-9+\-.]*:/,i=function(a,b,c,e){return(0,d.mG)(void 0,void 0,void 0,function(){var f;return(0,d.Jh)(this,function(d){return null!=a&&"#"!==a[0]&&!h.test(a)&&(f=document.querySelector("ion-router"))?(null!=b&&b.preventDefault(),[2,f.push(a,c,e)]):[2,!1]})})}}}])