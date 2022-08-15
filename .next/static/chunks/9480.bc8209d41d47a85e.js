"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9480],{19480:function(a,b,c){c.r(b),c.d(b,{ion_virtual_scroll:function(){return u}});var d=c(70655),e=c(75121),f=c(98840),g="item",h="header",i="footer",j=function(a,b,c,d){for(var e=0,f=a;e<f.length;e++){var g=f[e];g.change=0,g.d=!0}for(var h=[],i=d.offset+d.length,j=d.offset;j<i;j++)!function(d){var e=c[d],f=a.find(function(a){return a.d&&a.cell===e});if(f){var g=b[d];g!==f.top&&(f.top=g,f.change=1),f.d=!1}else h.push(e)}(j);for(var k=a.filter(function(a){return a.d}),l=function(c){var d=k.find(function(a){return a.d&&a.cell.type===c.type}),e=c.i;d?(d.d=!1,d.change=2,d.cell=c,d.top=b[e]):a.push({d:!1,cell:c,visible:!0,change:2,top:b[e]})},m=0,n=h;m<n.length;m++)l(n[m]);a.filter(function(a){return a.d&& -9999!==a.top}).forEach(function(a){a.change=1,a.top=-9999})},k=function(a,b,c,d){for(var e,f=Array.from(a.children).filter(function(a){return"TEMPLATE"!==a.tagName}),g=f.length,h=0;h<c.length;h++){var i=c[h],j=i.cell;if(2===i.change){if(h<g)b(e=f[h],j,h);else{var k=l(a,j.type);(e=b(k,j,h)||k).classList.add("virtual-item"),a.appendChild(e)}e.$ionCell=j}else e=f[h];0!==i.change&&(e.style.transform="translate3d(0,"+i.top+"px,0)");var m=j.visible;i.visible!==m&&(m?e.classList.remove("virtual-loading"):e.classList.add("virtual-loading"),i.visible=m),j.reads>0&&(d(j,e),j.reads--)}},l=function(a,b){var c=m(a,b);return c&&a.ownerDocument?a.ownerDocument.importNode(c.content,!0).children[0]:null},m=function(a,b){switch(b){case g:return a.querySelector("template:not([name])");case h:return a.querySelector("template[name=header]");case i:return a.querySelector("template[name=footer]")}},n=function(a,b,c){for(var d,e=b.top,f=b.bottom,g=0;g<a.length&&!(a[g]>e);g++);for(var h=Math.max(g-c-1,0);g<a.length&&!(a[g]>=f);g++);return{offset:h,length:Math.min(g+c,a.length)-h}},o=function(a,b){var c=a.length>0?a[a.length-1].index:0;return 0===b?0:b===c+1?a.length:a.findIndex(function(a){return a.index===b})},p=function(a,b,c){if(0===c&&b.length>=a.length)return b;for(var d=0;d<b.length;d++)a[d+c]=b[d];return a},q=function(a,b,c,d,e,f,j,k,l,m,n,o){for(var p=[],q=o+n,r=n;r<q;r++){var s=a[r];if(e){var t=e(s,r,a);null!=t&&p.push({i:m++,type:h,value:t,index:r,height:c?c(t,r):j,reads:c?0:2,visible:!!c})}if(p.push({i:m++,type:g,value:s,index:r,height:b?b(s,r):l,reads:b?0:2,visible:!!b}),f){var t=f(s,r,a);null!=t&&p.push({i:m++,type:i,value:t,index:r,height:d?d(t,r):k,reads:d?0:2,visible:!!d})}}return p},r=function(a,b,c){for(var d=a[c],e=c;e<a.length;e++)a[e]=d,d+=b[e].height;return d},s=function(a,b){if(!a)return new Uint32Array(b);if(a.length===b)return a;if(!(b>a.length))return a.subarray(0,b);var c=new Uint32Array(b);return c.set(a),c},t=function(a,b,c){var d=b.find(function(b){return b.type===g&&b.index===a});return d?c[d.i]:-1},u=function(){function a(a){var b=this;(0,e.r)(this,a),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){b.updateVirtualScroll()}}return a.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},a.prototype.componentWillLoad=function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")},a.prototype.connectedCallback=function(){return(0,d.mG)(this,void 0,void 0,function(){var a,b;return(0,d.Jh)(this,function(c){switch(c.label){case 0:if(!(a=this.el.closest("ion-content")))return console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2];return b=this,[4,a.getScrollElement()];case 1:return b.scrollEl=c.sent(),this.contentEl=a,this.calcCells(),this.updateState(),[2]}})})},a.prototype.componentDidUpdate=function(){this.updateState()},a.prototype.disconnectedCallback=function(){this.scrollEl=void 0},a.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},a.prototype.positionForItem=function(a){return Promise.resolve(t(a,this.cells,this.getHeightIndex()))},a.prototype.checkRange=function(a,b){return void 0===b&&(b=-1),(0,d.mG)(this,void 0,void 0,function(){var c,e,f;return(0,d.Jh)(this,function(d){return this.items&&(c=-1===b?this.items.length-a:b,e=o(this.cells,a),f=q(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,e,a,c),this.cells=p(this.cells,f,e),this.lastItemLen=this.items.length,this.indexDirty=Math.max(a-1,0),this.scheduleUpdate()),[2]})})},a.prototype.checkEnd=function(){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(a){return this.items&&this.checkRange(this.lastItemLen),[2]})})},a.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,e.f)(this.readVS.bind(this)),(0,e.c)(this.writeVS.bind(this)))},a.prototype.readVS=function(){for(var a=this.contentEl,b=this.scrollEl,c=this.el,d=0,e=c;e&&e!==a;)d+=e.offsetTop,e=e.offsetParent;this.viewportOffset=d,b&&(this.viewportHeight=b.offsetHeight,this.currentScrollTop=b.scrollTop)},a.prototype.writeVS=function(){var a,b,c,d,f,g,h=this.indexDirty,i=(a=this.currentScrollTop-this.viewportOffset,b=this.viewportHeight,{top:Math.max(a-(c=100),0),bottom:a+b+c}),l=this.getHeightIndex(),m=n(l,i,2);if(d=h,f=this.range,g=m,d<=g.offset+g.length||f.offset!==g.offset||f.length!==g.length)this.range=m,j(this.virtualDom,l,this.cells,m),this.nodeRender?k(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,e.j)(this)},a.prototype.updateCellHeight=function(a,b){var c=this,d=function(){if(b.$ionCell===a){var d=window.getComputedStyle(b),e=b.offsetHeight+parseFloat(d.getPropertyValue("margin-bottom"));c.setCellHeight(a,e)}};b?(0,f.c)(b,d):d()},a.prototype.setCellHeight=function(a,b){var c=a.i;a===this.cells[c]&&(a.height!==b|| !0!==a.visible)&&(a.visible=!0,a.height=b,this.indexDirty=Math.min(this.indexDirty,c),this.scheduleUpdate())},a.prototype.scheduleUpdate=function(){var a=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return a.updateVirtualScroll()},100)},a.prototype.updateState=function(){var a=!!(this.scrollEl&&this.cells);a!==this.isEnabled&&(this.enableScrollEvents(a),a&&this.updateVirtualScroll())},a.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=q(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},a.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},a.prototype.calcHeightIndex=function(a){void 0===a&&(a=0),this.heightIndex=s(this.heightIndex,this.cells.length),this.totalHeight=r(this.heightIndex,this.cells,a),this.indexDirty=1/0},a.prototype.enableScrollEvents=function(a){var b=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var c=this.scrollEl;c&&(this.isEnabled=a,c.addEventListener("scroll",this.onScroll),this.rmEvent=function(){c.removeEventListener("scroll",b.onScroll)})},a.prototype.renderVirtualNode=function(a){var b=a.cell,c=b.type,d=b.value,e=b.index;switch(c){case g:return this.renderItem(d,e);case h:return this.renderHeader(d,e);case i:return this.renderFooter(d,e)}},a.prototype.render=function(){var a=this;return(0,e.h)(e.H,{style:{height:this.totalHeight+"px"}},this.renderItem&&(0,e.h)(v,{dom:this.virtualDom},this.virtualDom.map(function(b){return a.renderVirtualNode(b)})))},Object.defineProperty(a.prototype,"el",{get:function(){return(0,e.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),a}(),v=function(a,b,c){var d=a.dom;return c.map(b,function(a,b){var c=d[b],e=a.vattrs||{},f=e.class||"";return f+="virtual-item ",c.visible||(f+="virtual-loading"),Object.assign(Object.assign({},a),{vattrs:Object.assign(Object.assign({},e),{class:f,style:Object.assign(Object.assign({},e.style),{transform:"translate3d(0,"+c.top+"px,0)"})})})})};u.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}])