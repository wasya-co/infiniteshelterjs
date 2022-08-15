"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6390],{66390:function(a,b,c){c.r(b),c.d(b,{ion_tab:function(){return g},ion_tabs:function(){return h}});var d=c(84659),e=c(71129),f=c(10306),g=function(){function a(a){(0,e.r)(this,a),this.loaded=!1,this.active=!1}return a.prototype.componentWillLoad=function(){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(a){switch(a.label){case 0:if(!this.active)return[3,2];return[4,this.setActive()];case 1:a.sent(),a.label=2;case 2:return[2]}})})},a.prototype.setActive=function(){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(a){switch(a.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return a.sent(),this.active=!0,[2]}})})},a.prototype.changeActive=function(a){a&&this.prepareLazyLoaded()},a.prototype.prepareLazyLoaded=function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,f.a)(this.delegate,this.el,this.component,["ion-page"])}catch(a){console.error(a)}}return Promise.resolve(void 0)},a.prototype.render=function(){var a=this.tab,b=this.active,c=this.component;return(0,e.h)(e.H,{role:"tabpanel","aria-hidden":b?null:"true","aria-labelledby":"tab-button-"+a,class:{"ion-page":void 0===c,"tab-hidden":!b}},(0,e.h)("slot",null))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:!1,configurable:!0}),a}();g.style=":host(.tab-hidden){display:none !important}";var h=function(){function a(a){var b=this;(0,e.r)(this,a),this.ionNavWillLoad=(0,e.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,e.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,e.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(a){var c=a.detail,d=c.href,e=c.tab;if(b.useRouter&& void 0!==d){var f=document.querySelector("ion-router");f&&f.push(d)}else b.select(e)}}return a.prototype.componentWillLoad=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter||!((a=this.tabs).length>0))return[3,2];return[4,this.select(a[0])];case 1:b.sent(),b.label=2;case 2:return this.ionNavWillLoad.emit(),[2]}})})},a.prototype.componentWillRender=function(){var a=this.el.querySelector("ion-tab-bar");if(a){var b=this.selectedTab?this.selectedTab.tab:void 0;a.selectedTab=b}},a.prototype.select=function(a){return(0,d.mG)(this,void 0,void 0,function(){var b;return(0,d.Jh)(this,function(c){switch(c.label){case 0:if(b=i(this.tabs,a),!this.shouldSwitch(b))return[2,!1];return[4,this.setActive(b)];case 1:return c.sent(),[4,this.notifyRouter()];case 2:return c.sent(),this.tabSwitch(),[2,!0]}})})},a.prototype.getTab=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,i(this.tabs,a)]})})},a.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},a.prototype.setRouteId=function(a){return(0,d.mG)(this,void 0,void 0,function(){var b,c=this;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(b=i(this.tabs,a),!this.shouldSwitch(b))return[2,{changed:!1,element:this.selectedTab}];return[4,this.setActive(b)];case 1:return d.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return c.tabSwitch()}}]}})})},a.prototype.getRouteId=function(){return(0,d.mG)(this,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){return[2,void 0!==(a=this.selectedTab&&this.selectedTab.tab)?{id:a,element:this.selectedTab}:void 0]})})},a.prototype.setActive=function(a){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=a,this.ionTabsWillChange.emit({tab:a.tab}),a.active=!0,Promise.resolve())},a.prototype.tabSwitch=function(){var a=this.selectedTab,b=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,a&&b!==a&&(b&&(b.active=!1),this.ionTabsDidChange.emit({tab:a.tab}))},a.prototype.notifyRouter=function(){if(this.useRouter){var a=document.querySelector("ion-router");if(a)return a.navChanged("forward")}return Promise.resolve(!1)},a.prototype.shouldSwitch=function(a){var b=this.selectedTab;return void 0!==a&&a!==b&&!this.transitioning},Object.defineProperty(a.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:!1,configurable:!0}),a.prototype.render=function(){return(0,e.h)(e.H,{onIonTabButtonClick:this.onTabClicked},(0,e.h)("slot",{name:"top"}),(0,e.h)("div",{class:"tabs-inner"},(0,e.h)("slot",null)),(0,e.h)("slot",{name:"bottom"}))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),a}(),i=function(a,b){var c="string"==typeof b?a.find(function(a){return a.tab===b}):b;return c||console.error('tab with id: "'+c+'" does not exist'),c};h.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}])