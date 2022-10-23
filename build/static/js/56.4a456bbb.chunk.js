/*! For license information please see 56.4a456bbb.chunk.js.LICENSE.txt */
(this.webpackJsonpInfiniteShelter=this.webpackJsonpInfiniteShelter||[]).push([[56],{390:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return C}));var n=r(20),s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),i=new RegExp("(-shadowcssslotted"+s,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,h=/:host/gim,f=/::slotted/gim,p=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,e){var r=x(t),n=0;return r.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",i=t[4],a="";i&&i.startsWith("{%BLOCK%")&&(c=r.blocks[n++],i=i.substring("%BLOCK%".length+1),a="{");var u={selector:o,content:c},l=e(u);return""+t[1]+l.selector+t[3]+a+l.content+i}))},x=function(t){for(var e=t.split(v),r=[],n=[],s=0,o=[],c=0;c<e.length;c++){var i=e[c];"}"===i&&s--,s>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push("%BLOCK%"),o=[]),r.push(i)),"{"===i&&s++}return o.length>0&&(n.push(o.join("")),r.push("%BLOCK%")),{escapedString:r.join(""),blocks:n}},b=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(r("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},_=function(t,e,r){return t+e.replace("-shadowcsshost","")+r},S=function(t,e,r){return e.indexOf("-shadowcsshost")>-1?_(t,e,r):t+e+r+", "+e+" "+t+r},O=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},W=function(t,e,r){for(var n,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,e,r){if(l.lastIndex=0,l.test(t)){var n="."+r;return t.replace(a,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(l,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(l,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+r+"__";return e.push(s),r++,n+o})),placeholders:e}}(t),i="",u=0,h=/( |>|\+|~(?!=))\s*/g,f=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=h.exec(t));){var p=n[1],d=t.slice(u,n.index).trim();i+=((f=f||d.indexOf("-shadowcsshost-no-combinator")>-1)?o(d):d)+" "+p+" ",u=h.lastIndex}var g=t.substring(u);return i+=(f=f||g.indexOf("-shadowcsshost-no-combinator")>-1)?o(g):g,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(c.placeholders,i)},j=function t(e,r,n,s,o){return w(e,(function(e){var o=e.selector,c=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():O(t,e)?W(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=t(e.content,r,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},k=function(t,e,r,n,s){var a=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),o=t[3],c=r+s+o,i="",a=t[4]-1;a>=0;a--){var u=t[5][a];if("}"===u||","===u)break;i=u+i}var l=i+c,h=""+i.trimRight()+c.trim();if(l.trim()!==h.trim()){var f=h+", "+l;n.push({orgSelector:l,updatedSelector:f})}return c}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:n,cssText:t}}(t=function(t){return b(t,c,S)}(t=function(t){return b(t,o,_)}(t=function(t){return t=t.replace(p,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(f,"-shadowcssslotted")}(t))),n);return t=function(t){return u.reduce((function(t,e){return t.replace(e," ")}),t)}(t=a.cssText),e&&(t=j(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:a.selectors}},C=function(t,e,r){var s=e+"-h",o=e+"-s",c=function(t){return t.match(g)||[]}(t);t=function(t){return t.replace(d,"")}(t);var i=[];if(r){var a=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,a),t):t}))}var u=k(t,e,s,o);return t=Object(n.e)([u.cssText],c).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=56.4a456bbb.chunk.js.map