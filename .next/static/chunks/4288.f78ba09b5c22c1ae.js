"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4288],{76755:function(a,b,c){c.d(b,{g:function(){return d}});var d=function(a,b,c,d,g){return f(a[1],b[1],c[1],d[1],g).map(function(f){return e(a[0],b[0],c[0],d[0],f)})},e=function(a,b,c,d,e){return e*(3*b*Math.pow(e-1,2)+e*(-3*c*e+3*c+d*e))-a*Math.pow(e-1,3)},f=function(a,b,c,d,e){var f;return a-=e,b-=e,c-=e,h((d-=e)-3*c+3*b-a,3*c-6*b+3*a,3*b-3*a,a).filter(function(a){return a>=0&&a<=1})},g=function(a,b,c){var d=b*b-4*a*c;return d<0?[]:[(-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a)]},h=function(a,b,c,d){if(0===a)return g(b,c,d);b/=a,c/=a,d/=a;var e=(3*c-b*b)/3,f=(2*b*b*b-9*b*c+27*d)/27;if(0===e)return[Math.pow(-f,1/3)];if(0===f)return[Math.sqrt(-e),-Math.sqrt(-e)];var h=Math.pow(f/2,2)+Math.pow(e/3,3);if(0===h)return[Math.pow(f/2,.5)-b/3];if(h>0)return[Math.pow(-(f/2)+Math.sqrt(h),1/3)-Math.pow(f/2+Math.sqrt(h),1/3)-b/3];var i=Math.acos(-(f/(2*Math.sqrt(Math.pow(-(e/3),3))))),j=2*Math.pow(Math.sqrt(Math.pow(-(e/3),3)),1/3);return[j*Math.cos(i/3)-b/3,j*Math.cos((i+2*Math.PI)/3)-b/3,j*Math.cos((i+4*Math.PI)/3)-b/3]}},23789:function(a,b,c){c.d(b,{a:function(){return f},d:function(){return g}});var d=c(70655),e=c(98840),f=function(a,b,c,f,g){return(0,d.mG)(void 0,void 0,void 0,function(){var h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(a)return[2,a.attachViewToDom(b,c,g,f)];if("string"!=typeof c&&!(c instanceof HTMLElement))throw Error("framework delegate is missing");return h="string"==typeof c?b.ownerDocument&&b.ownerDocument.createElement(c):c,f&&f.forEach(function(a){return h.classList.add(a)}),g&&Object.assign(h,g),b.appendChild(h),[4,new Promise(function(a){return(0,e.c)(h,a)})];case 1:return d.sent(),[2,h]}})})},g=function(a,b){if(b){if(a){var c=b.parentElement;return a.removeViewFromDom(c,b)}b.remove()}return Promise.resolve()}},14288:function(a,b,c){c.r(b),c.d(b,{ion_nav:function(){return n},ion_nav_link:function(){return p}});var d=c(70655),e=c(75121),f=c(23007),g=c(76755),h=c(98840),i=c(61195),j=c(23789),k=function(){function a(a,b){this.component=a,this.params=b,this.state=1}return a.prototype.init=function(a){return(0,d.mG)(this,void 0,void 0,function(){var b,c;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(this.state=2,this.element)return[3,2];return b=this.component,c=this,[4,(0,j.a)(this.delegate,a,b,["ion-page","ion-page-invisible"],this.params)];case 1:c.element=d.sent(),d.label=2;case 2:return[2]}})})},a.prototype._destroy=function(){(0,h.l)(3!==this.state,"view state must be ATTACHED");var a=this.element;a&&(this.delegate?this.delegate.removeViewFromDom(a.parentElement,a):a.remove()),this.nav=void 0,this.state=3},a}(),l=function(a,b,c){if(!a||a.component!==b)return!1;var d=a.params;if(d===c|| !d&&!c)return!0;if(!d||!c)return!1;var e=Object.keys(d),f=Object.keys(c);if(e.length!==f.length)return!1;for(var g=0,h=e;g<h.length;g++){var i=h[g];if(d[i]!==c[i])return!1}return!0},m=function(a,b){return a?a instanceof k?a:new k(a,b):null},n=function(){function a(a){(0,e.r)(this,a),this.ionNavWillLoad=(0,e.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,e.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,e.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return a.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)},a.prototype.rootChanged=function(){void 0===this.root||this.useRouter||this.setRoot(this.root,this.rootParams)},a.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var a=(0,f.b)(this);this.swipeGesture=f.c.getBoolean("swipeBackEnabled","ios"===a)}this.ionNavWillLoad.emit()},a.prototype.componentDidLoad=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:return this.rootChanged(),a=this,[4,c.e(4543).then(c.bind(c,54543))];case 1:return a.gesture=b.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},a.prototype.disconnectedCallback=function(){for(var a=0,b=this.views;a<b.length;a++){var c=b[a];(0,i.l)(c.element,i.d),c._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},a.prototype.push=function(a,b,c,d){return this.queueTrns({insertStart:-1,insertViews:[{component:a,componentProps:b}],opts:c},d)},a.prototype.insert=function(a,b,c,d,e){return this.queueTrns({insertStart:a,insertViews:[{component:b,componentProps:c}],opts:d},e)},a.prototype.insertPages=function(a,b,c,d){return this.queueTrns({insertStart:a,insertViews:b,opts:c},d)},a.prototype.pop=function(a,b){return this.queueTrns({removeStart:-1,removeCount:1,opts:a},b)},a.prototype.popTo=function(a,b,c){var d={removeStart:-1,removeCount:-1,opts:b};return"object"==typeof a&&a.component?(d.removeView=a,d.removeStart=1):"number"==typeof a&&(d.removeStart=a+1),this.queueTrns(d,c)},a.prototype.popToRoot=function(a,b){return this.queueTrns({removeStart:1,removeCount:-1,opts:a},b)},a.prototype.removeIndex=function(a,b,c,d){return void 0===b&&(b=1),this.queueTrns({removeStart:a,removeCount:b,opts:c},d)},a.prototype.setRoot=function(a,b,c,d){return this.setPages([{component:a,componentProps:b}],c,d)},a.prototype.setPages=function(a,b,c){return null==b&&(b={}),!0!==b.animated&&(b.animated=!1),this.queueTrns({insertStart:0,insertViews:a,removeStart:0,removeCount:-1,opts:b},c)},a.prototype.setRouteId=function(a,b,c,e){var f,g,h=this,i=this.getActiveSync();if(l(i,a,b))return Promise.resolve({changed:!1,element:i.element});var j=new Promise(function(a){return f=a}),k={updateURL:!1,viewIsReady:function(a){var b,c=new Promise(function(a){return b=a});return f({changed:!0,element:a,markVisible:function(){return(0,d.mG)(h,void 0,void 0,function(){return(0,d.Jh)(this,function(a){switch(a.label){case 0:return b(),[4,g];case 1:return a.sent(),[2]}})})}}),c}};if("root"===c)g=this.setRoot(a,b,k);else{var m=this.views.find(function(c){return l(c,a,b)});m?g=this.popTo(m,Object.assign(Object.assign({},k),{direction:"back",animationBuilder:e})):"forward"===c?g=this.push(a,b,Object.assign(Object.assign({},k),{animationBuilder:e})):"back"===c&&(g=this.setRoot(a,b,Object.assign(Object.assign({},k),{direction:"back",animated:!0,animationBuilder:e})))}return j},a.prototype.getRouteId=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){return[2,(a=this.getActiveSync())?{id:a.element.tagName,params:a.params,element:a.element}:void 0]})})},a.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},a.prototype.getByIndex=function(a){return Promise.resolve(this.views[a])},a.prototype.canGoBack=function(a){return Promise.resolve(this.canGoBackSync(a))},a.prototype.getPrevious=function(a){return Promise.resolve(this.getPreviousSync(a))},a.prototype.getLength=function(){return this.views.length},a.prototype.getActiveSync=function(){return this.views[this.views.length-1]},a.prototype.canGoBackSync=function(a){return void 0===a&&(a=this.getActiveSync()),!!(a&&this.getPreviousSync(a))},a.prototype.getPreviousSync=function(a){if(void 0===a&&(a=this.getActiveSync()),a){var b=this.views,c=b.indexOf(a);return c>0?b[c-1]:void 0}},a.prototype.queueTrns=function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c,e,f;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(this.isTransitioning&&null!=a.opts&&a.opts.skipIfBusy)return[2,Promise.resolve(!1)];if(c=new Promise(function(b,c){a.resolve=b,a.reject=c}),a.done=b,!(a.opts&& !1!==a.opts.updateURL&&this.useRouter)||!(e=document.querySelector("ion-router")))return[3,2];return[4,e.canTransition()];case 1:if(!1===(f=d.sent()))return[2,Promise.resolve(!1)];if("string"==typeof f)return e.push(f,a.opts.direction||"back"),[2,Promise.resolve(!1)];d.label=2;case 2:return a.insertViews&&0===a.insertViews.length&&(a.insertViews=void 0),this.transInstr.push(a),this.nextTrns(),[2,c]}})})},a.prototype.success=function(a,b){if(this.destroyed){this.fireError("nav controller was destroyed",b);return}if(b.done&&b.done(a.hasCompleted,a.requiresTransition,a.enteringView,a.leavingView,a.direction),b.resolve(a.hasCompleted),!1!==b.opts.updateURL&&this.useRouter){var c=document.querySelector("ion-router");if(c){var d="back"===a.direction?"back":"forward";c.navChanged(d)}}},a.prototype.failed=function(a,b){if(this.destroyed){this.fireError("nav controller was destroyed",b);return}this.transInstr.length=0,this.fireError(a,b)},a.prototype.fireError=function(a,b){b.done&&b.done(!1,!1,a),b.reject&&!this.destroyed?b.reject(a):b.resolve(!1)},a.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var a=this.transInstr.shift();return!!a&&(this.runTransition(a),!0)},a.prototype.runTransition=function(a){return(0,d.mG)(this,void 0,void 0,function(){var b,c,e,f,g,h,i;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(d.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(a),b=this.getActiveSync(),c=this.getEnteringView(a,b),!b&&!c)throw Error("no views in the stack to be removed");if(!(c&&1===c.state))return[3,2];return[4,c.init(this.el)];case 1:d.sent(),d.label=2;case 2:if(this.postViewInit(c,b,a),(e=(a.enteringRequiresTransition||a.leavingRequiresTransition)&&c!==b)&&a.opts&&b&&((f="back"===a.opts.direction)&&(a.opts.animationBuilder=a.opts.animationBuilder||c&&c.animationBuilder),b.animationBuilder=a.opts.animationBuilder),!e)return[3,4];return[4,this.transition(c,b,a)];case 3:return h=d.sent(),[3,5];case 4:h={hasCompleted:!0,requiresTransition:!1},d.label=5;case 5:return g=h,this.success(g,a),this.ionNavDidChange.emit(),[3,7];case 6:return i=d.sent(),this.failed(i,a),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},a.prototype.prepareTI=function(a){var b,c=this.views.length;if(a.opts=a.opts||{},void 0===a.opts.delegate&&(a.opts.delegate=this.delegate),void 0!==a.removeView){(0,h.l)(void 0!==a.removeStart,"removeView needs removeStart"),(0,h.l)(void 0!==a.removeCount,"removeView needs removeCount");var d=this.views.indexOf(a.removeView);if(d<0)throw Error("removeView was not found");a.removeStart+=d}void 0!==a.removeStart&&(a.removeStart<0&&(a.removeStart=c-1),a.removeCount<0&&(a.removeCount=c-a.removeStart),a.leavingRequiresTransition=a.removeCount>0&&a.removeStart+a.removeCount===c),a.insertViews&&((a.insertStart<0||a.insertStart>c)&&(a.insertStart=c),a.enteringRequiresTransition=a.insertStart===c);var e=a.insertViews;if(e){(0,h.l)(e.length>0,"length can not be zero");var f=(b=e).map(function(a){return a instanceof k?a:"component"in a?m(a.component,null===a.componentProps?void 0:a.componentProps):m(a,void 0)}).filter(function(a){return null!==a});if(0===f.length)throw Error("invalid views to insert");for(var g=0,i=f;g<i.length;g++){var j=i[g];j.delegate=a.opts.delegate;var l=j.nav;if(l&&l!==this)throw Error("inserted view was already inserted");if(3===j.state)throw Error("inserted view was already destroyed")}a.insertViews=f}},a.prototype.getEnteringView=function(a,b){var c=a.insertViews;if(void 0!==c)return c[c.length-1];var d=a.removeStart;if(void 0!==d)for(var e=this.views,f=d+a.removeCount,g=e.length-1;g>=0;g--){var h=e[g];if((g<d||g>=f)&&h!==b)return h}},a.prototype.postViewInit=function(a,b,c){(0,h.l)(b||a,"Both leavingView and enteringView are null"),(0,h.l)(c.resolve,"resolve must be valid"),(0,h.l)(c.reject,"reject must be valid");var d,e=c.opts,f=c.insertViews,g=c.removeStart,j=c.removeCount;if(void 0!==g&& void 0!==j){(0,h.l)(g>=0,"removeStart can not be negative"),(0,h.l)(j>=0,"removeCount can not be negative"),d=[];for(var k=0;k<j;k++){var l=this.views[k+g];l&&l!==a&&l!==b&&d.push(l)}e.direction=e.direction||"back"}var m=this.views.length+(void 0!==f?f.length:0)-(void 0!==j?j:0);if((0,h.l)(m>=0,"final balance can not be negative"),0===m)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),Error("navigation stack needs at least one root page");if(f){for(var n=c.insertStart,o=0,p=f;o<p.length;o++){var l=p[o];this.insertViewAt(l,n),n++}c.enteringRequiresTransition&&(e.direction=e.direction||"forward")}if(d&&d.length>0){for(var q=0,r=d;q<r.length;q++){var l=r[q];(0,i.l)(l.element,i.b),(0,i.l)(l.element,i.c),(0,i.l)(l.element,i.d)}for(var s=0,t=d;s<t.length;s++){var l=t[s];this.destroyView(l)}}},a.prototype.transition=function(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,g,h,j,k,l,m,n=this;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return g=(e=c.opts).progressAnimation?function(a){return n.sbAni=a}:void 0,h=(0,f.b)(this),j=a.element,k=b&&b.element,l=Object.assign(Object.assign({mode:h,showGoBack:this.canGoBackSync(a),baseEl:this.el,progressCallback:g,animated:this.animated&&f.c.getBoolean("animated",!0),enteringEl:j,leavingEl:k},e),{animationBuilder:e.animationBuilder||this.animation||f.c.get("navAnimation")}),[4,(0,i.t)(l)];case 1:return m=d.sent().hasCompleted,[2,this.transitionFinish(m,a,b,e)]}})})},a.prototype.transitionFinish=function(a,b,c,d){var e=a?b:c;return e&&this.cleanup(e),{hasCompleted:a,requiresTransition:!0,enteringView:b,leavingView:c,direction:d.direction}},a.prototype.insertViewAt=function(a,b){var c=this.views,d=c.indexOf(a);d> -1?((0,h.l)(a.nav===this,"view is not part of the nav"),c.splice(b,0,c.splice(d,1)[0])):((0,h.l)(!a.nav,"nav is used"),a.nav=this,c.splice(b,0,a))},a.prototype.removeView=function(a){(0,h.l)(2===a.state||3===a.state,"view state should be loaded or destroyed");var b=this.views,c=b.indexOf(a);(0,h.l)(c> -1,"view must be part of the stack"),c>=0&&b.splice(c,1)},a.prototype.destroyView=function(a){a._destroy(),this.removeView(a)},a.prototype.cleanup=function(a){if(!this.destroyed)for(var b=this.views,c=b.indexOf(a),d=b.length-1;d>=0;d--){var e=b[d],f=e.element;f&&(d>c?((0,i.l)(f,i.d),this.destroyView(e)):d<c&&(0,i.s)(f,!0))}},a.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},a.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},a.prototype.onMove=function(a){this.sbAni&&this.sbAni.progressStep(a)},a.prototype.onEnd=function(a,b,c){var d=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(function(){d.animationEnabled=!0},{oneTimeCallback:!0});var e=a?-.001:.001;a?e+=(0,g.g)([0,0],[.32,.72],[0,1],[1,1],b)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=(0,g.g)([0,0],[1,0],[.68,.28],[1,1],b)[0]),this.sbAni.progressEnd(a?1:0,e,c)}},a.prototype.render=function(){return(0,e.h)("slot",null)},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!1,configurable:!0}),a}();n.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var o=function(a,b,c,d,e){var f=a.closest("ion-nav");if(f){if("forward"===b){if(void 0!==c)return f.push(c,d,{skipIfBusy:!0,animationBuilder:e})}else if("root"===b){if(void 0!==c)return f.setRoot(c,d,{skipIfBusy:!0,animationBuilder:e})}else if("back"===b)return f.pop({skipIfBusy:!0,animationBuilder:e})}return Promise.resolve(!1)},p=function(){function a(a){var b=this;(0,e.r)(this,a),this.routerDirection="forward",this.onClick=function(){return o(b.el,b.routerDirection,b.component,b.componentProps,b.routerAnimation)}}return a.prototype.render=function(){return(0,e.h)(e.H,{onClick:this.onClick})},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),a}()}}])