"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3497],{3497:function(e,t,r){r.r(t),r.d(t,{scopeCss:function(){return G}});/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */ let s=e=>{let t=[],r=0;e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{let l=`__ph-${r}__`;return t.push(s),r++,l});let s=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,l)=>{let c=`__ph-${r}__`;return t.push(l),r++,s+c});return{content:s,placeholders:t}},l=(e,t)=>t.replace(/__ph-(\d+)__/g,(t,r)=>e[+r]),c="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=RegExp("("+c+i,"gim"),p=RegExp("("+o+i,"gim"),h=RegExp("("+n+i,"gim"),u=c+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,f=/:host/gim,x=/::slotted/gim,$=/:host-context/gim,b=/\/\*\s*[\s\S]*?\*\//g,_=e=>e.replace(b,""),w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=e=>e.match(w)||[],W=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,k=/([{}])/g,O=/(^.*?[^\\])??((:+)(.*)|$)/,j="%BLOCK%",C=(e,t)=>{let r=E(e),s=0;return r.escapedString.replace(W,(...e)=>{let l=e[2],c="",n=e[4],o="";n&&n.startsWith("{"+j)&&(c=r.blocks[s++],n=n.substring(j.length+1),o="{");let i={selector:l,content:c},a=t(i);return`${e[1]}${a.selector}${e[3]}${o}${a.content}${n}`})},E=e=>{let t=e.split(k),r=[],s=[],l=0,c=[];for(let n=0;n<t.length;n++){let o=t[n];"}"===o&&l--,l>0?c.push(o):(c.length>0&&(s.push(c.join("")),r.push(j),c=[]),r.push(o)),"{"===o&&l++}c.length>0&&(s.push(c.join("")),r.push(j));let i={escapedString:r.join(""),blocks:s};return i},L=e=>e=e.replace($,o).replace(f,c).replace(x,n),T=(e,t,r)=>e.replace(t,(...e)=>{if(!e[2])return u+e[3];{let t=e[2].split(","),s=[];for(let l=0;l<t.length;l++){let c=t[l].trim();if(!c)break;s.push(r(u,c,e[3]))}return s.join(",")}}),B=(e,t,r)=>e+t.replace(c,"")+r,I=e=>T(e,a,B),K=(e,t,r)=>t.indexOf(c)>-1?B(e,t,r):e+t+r+", "+t+" "+e+r,N=(e,t)=>{let r="."+t+" > ",s=[];return e=e.replace(h,(...e)=>{if(!e[2])return u+e[3];{let t=e[2].trim(),l=e[3],c=r+t+l,n="";for(let o=e[4]-1;o>=0;o--){let i=e[5][o];if("}"===i||","===i)break;n=i+n}let a=n+c,p=`${n.trimRight()}${c.trim()}`;if(a.trim()!==p.trim()){let h=`${p}, ${a}`;s.push({orgSelector:a,updatedSelector:h})}return c}}),{selectors:s,cssText:e}},R=e=>T(e,p,K),M=e=>d.reduce((e,t)=>e.replace(t," "),e),U=e=>RegExp("^("+(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"))+")([>\\s~+[.,{:][\\s\\S]*)?$","m"),q=(e,t)=>{let r=U(t);return!r.test(e)},v=(e,t)=>e.replace(O,(e,r="",s,l="",c="")=>r+t+l+c),y=(e,t,r)=>{if(m.lastIndex=0,m.test(e)){let s=`.${r}`;return e.replace(g,(e,t)=>v(t,s)).replace(m,s+" ")}return t+" "+e},z=(e,t,r)=>{t=t.replace(/\[is=([^\]]*)\]/g,(e,...t)=>t[0]);let c="."+t,n=e=>{let s=e.trim();if(!s)return"";if(e.indexOf(u)>-1)s=y(e,t,r);else{let l=e.replace(m,"");l.length>0&&(s=v(l,c))}return s},o=s(e);e=o.content;let i="",a=0,p,h=/( |>|\+|~(?!=))\s*/g,g=e.indexOf(u)>-1,d=!g;for(;null!==(p=h.exec(e));){let f=p[1],x=e.slice(a,p.index).trim();d=d||x.indexOf(u)>-1;let $=d?n(x):x;i+=`${$} ${f} `,a=h.lastIndex}let b=e.substring(a);return d=d||b.indexOf(u)>-1,i+=d?n(b):b,l(o.placeholders,i)},A=(e,t,r,s)=>e.split(",").map(e=>s&&e.indexOf("."+s)>-1?e.trim():q(e,t)?z(e,t,r).trim():e.trim()).join(", "),D=(e,t,r,s,l)=>C(e,e=>{let l=e.selector,c=e.content;"@"!==e.selector[0]?l=A(e.selector,t,r,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=D(e.content,t,r,s));let n={selector:l.replace(/\s{2,}/g," ").trim(),content:c};return n}),F=(e,t,r,s,l)=>{e=L(e),e=I(e),e=R(e);let c=N(e,s);return e=M(e=c.cssText),t&&(e=D(e,t,r,s)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${r}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:c.selectors}},G=(e,t,r)=>{let s=t+"-h",l=t+"-s",c=S(e);e=_(e);let n=[];if(r){let o=e=>{let t=`/*!@___${n.length}___*/`,r=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:r}),e.selector=t+e.selector,e};e=C(e,e=>"@"!==e.selector[0]?o(e):((e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(e.content=C(e.content,o)),e))}let i=F(e,t,s,l);return e=[i.cssText,...c].join("\n"),r&&n.forEach(({placeholder:t,comment:r})=>{e=e.replace(t,r)}),i.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);