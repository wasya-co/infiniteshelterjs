"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7089],{7089:function(e,t,n){n.d(t,{c:function(){return g}});var i=n(8155);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ let a,o=e=>(e.forEach(e=>{for(let t in e)if(e.hasOwnProperty(t)){let n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{let i=r(t);i!==t&&(e[i]=n,delete e[t])}}}),e),r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>{if(void 0===a){let t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},f=(e,t,n)=>{let i=t.startsWith("animation")?l(e):"";e.style.setProperty(i+t,n)},$=(e,t)=>{let n=t.startsWith("animation")?l(e):"";e.style.removeProperty(n+t)},s=(e,t)=>{let n,i={passive:!0},a=()=>{n&&n()},o=n=>{e===n.target&&(a(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",o,i),e.addEventListener("animationend",o,i),n=()=>{e.removeEventListener("webkitAnimationEnd",o,i),e.removeEventListener("animationend",o,i)}),a},m=(e=[])=>e.map(e=>{let t=e.offset,n=[];for(let i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`}).join(" "),d=[],c=e=>{let t=d.indexOf(e);return t<0&&(t=d.push(e)-1),`ion-animation-${t}`},h=e=>{let t=e.getRootNode();return t.head||t},u=(e,t,n)=>{let i=h(n),a=l(n),o=i.querySelector("#"+e);if(o)return o;let r=(n.ownerDocument||document).createElement("style");return r.id=e,r.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,i.appendChild(r),r},p=(e=[],t)=>{if(void 0!==t){let n=Array.isArray(t)?t:[t];return[...e,...n]}return e},g=e=>{let t,n,a,r,l,d,h=[],g=[],v=[],E=!1,_,y={},k=[],w=[],b={},C=0,T=!1,A=!1,L,N,P,O,S=!0,D=!1,x=!0,j,F,I=!1,K=e,R=[],W=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],M=[],Q="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,U="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Q,V=()=>M,X=e=>(z.forEach(t=>{t.destroy(e)}),Y(e),q.length=0,z.length=0,h.length=0,en(),E=!1,x=!0,F),Y=e=>{ei(),e&&ea()},ee=()=>{T=!1,A=!1,x=!0,N=void 0,P=void 0,O=void 0,C=0,D=!1,S=!0,I=!1},et=(e,t)=>{let n=(null==t?void 0:t.oneTimeCallback)?W:R;return n.push({c:e,o:t}),F},en=()=>(R.length=0,W.length=0,F),ei=()=>{if(U)M.forEach(e=>{e.cancel()}),M.length=0;else{let e=q.slice();(0,i.r)(()=>{e.forEach(e=>{$(e,"animation-name"),$(e,"animation-duration"),$(e,"animation-timing-function"),$(e,"animation-iteration-count"),$(e,"animation-delay"),$(e,"animation-play-state"),$(e,"animation-fill-mode"),$(e,"animation-direction")})})}},ea=()=>{Z.forEach(e=>{(null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)}),Z.length=0},eo=e=>(B.push(e),F),er=e=>(G.push(e),F),el=e=>(H.push(e),F),ef=e=>(J.push(e),F),e$=e=>(g=p(g,e),F),es=e=>(v=p(v,e),F),em=(e={})=>(y=e,F),ed=(e=[])=>{for(let t of e)y[t]="";return F},ec=e=>(k=p(k,e),F),eh=e=>(w=p(w,e),F),eu=(e={})=>(b=e,F),ep=(e=[])=>{for(let t of e)b[t]="";return F},eg=()=>void 0!==l?l:_?_.getFill():"both",ev=()=>void 0!==N?N:void 0!==d?d:_?_.getDirection():"normal",eE=()=>T?"linear":void 0!==a?a:_?_.getEasing():"linear",e_=()=>A?0:void 0!==P?P:void 0!==n?n:_?_.getDuration():0,ey=()=>void 0!==r?r:_?_.getIterations():1,e9=()=>void 0!==O?O:void 0!==t?t:_?_.getDelay():0,ek=()=>h,ew=e=>(d=e,eW(!0),F),eb=e=>(l=e,eW(!0),F),eC=e=>(t=e,eW(!0),F),eT=e=>(a=e,eW(!0),F),eA=e=>(U||0!==e||(e=1),n=e,eW(!0),F),eL=e=>(r=e,eW(!0),F),eN=e=>(_=e,F),e7=e=>{if(null!=e){if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value")}return F},eP=e=>{if(null!=e){if(Array.isArray(e))for(let t of e)t.parent(F),z.push(t);else e.parent(F),z.push(e)}return F},eO=e=>{let t=h!==e;return h=e,t&&eS(h),F},eS=e=>{U?V().forEach(t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{let n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}}):e6()},eD=()=>{B.forEach(e=>e()),G.forEach(e=>e());let e=g,t=v,n=y;q.forEach(i=>{let a=i.classList;for(let o in e.forEach(e=>a.add(e)),t.forEach(e=>a.remove(e)),n)n.hasOwnProperty(o)&&f(i,o,n[o])})},e8=()=>{eB(),H.forEach(e=>e()),J.forEach(e=>e());let e=S?1:0,t=k,n=w,i=b;q.forEach(e=>{let a=e.classList;for(let o in t.forEach(e=>a.add(e)),n.forEach(e=>a.remove(e)),i)i.hasOwnProperty(o)&&f(e,o,i[o])}),R.forEach(t=>t.c(e,F)),W.forEach(t=>t.c(e,F)),W.length=0,x=!0,S&&(D=!0),S=!0},ex=()=>{0!==C&&0==--C&&(e8(),_&&_.animationFinish())},e6=(t=!0)=>{ea();let n=o(h);q.forEach(a=>{if(n.length>0){let o=m(n);j=void 0!==e?e:c(o);let r=u(j,o,a);Z.push(r),f(a,"animation-duration",`${e_()}ms`),f(a,"animation-timing-function",eE()),f(a,"animation-delay",`${e9()}ms`),f(a,"animation-fill-mode",eg()),f(a,"animation-direction",ev());let l=ey()===1/0?"infinite":ey().toString();f(a,"animation-iteration-count",l),f(a,"animation-play-state","paused"),t&&f(a,"animation-name",`${r.id}-alt`),(0,i.r)(()=>{f(a,"animation-name",r.id||null)})}})},ej=()=>{q.forEach(e=>{let t=e.animate(h,{id:K,delay:e9(),duration:e_(),easing:eE(),iterations:ey(),fill:eg(),direction:ev()});t.pause(),M.push(t)}),M.length>0&&(M[0].onfinish=()=>{ex()})},eF=(e=!0)=>{eD(),h.length>0&&(U?ej():e6(e)),E=!0},eI=e=>{if(e=Math.min(Math.max(e,0),.9999),U)M.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+e_()*e,t.pause()});else{let t=`-${e_()*e}ms`;q.forEach(e=>{h.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))})}},eK=e=>{M.forEach(e=>{e.effect.updateTiming({delay:e9(),duration:e_(),easing:eE(),iterations:ey(),fill:eg(),direction:ev()})}),void 0!==e&&eI(e)},eR=(e=!0,t)=>{(0,i.r)(()=>{q.forEach(n=>{f(n,"animation-name",j||null),f(n,"animation-duration",`${e_()}ms`),f(n,"animation-timing-function",eE()),f(n,"animation-delay",void 0!==t?`-${t*e_()}ms`:`${e9()}ms`),f(n,"animation-fill-mode",eg()||null),f(n,"animation-direction",ev()||null);let a=ey()===1/0?"infinite":ey().toString();f(n,"animation-iteration-count",a),e&&f(n,"animation-name",`${j}-alt`),(0,i.r)(()=>{f(n,"animation-name",j||null)})})})},eW=(e=!1,t=!0,n)=>(e&&z.forEach(i=>{i.update(e,t,n)}),U?eK(n):eR(t,n),F),e3=(e=!1,t)=>(z.forEach(n=>{n.progressStart(e,t)}),ez(),T=e,E||eF(),eW(!1,!0,t),F),e5=e=>(z.forEach(t=>{t.progressStep(e)}),eI(e),F),eq=(e,t,n)=>(T=!1,z.forEach(i=>{i.progressEnd(e,t,n)}),void 0!==n&&(P=n),D=!1,S=!0,0===e?("reverse"==(N="reverse"===ev()?"normal":"reverse")&&(S=!1),U?(eW(),eI(1-t)):(O=-((1-t)*e_()*1),eW(!1,!1))):1===e&&(U?(eW(),eI(t)):(O=-(t*e_()*1),eW(!1,!1))),void 0===e||(et(()=>{P=void 0,N=void 0,O=void 0},{oneTimeCallback:!0}),_||eQ()),F),ez=()=>{E&&(U?M.forEach(e=>{e.pause()}):q.forEach(e=>{f(e,"animation-play-state","paused")}),I=!0)},eZ=()=>(z.forEach(e=>{e.pause()}),ez(),F),e0=()=>{L=void 0,ex()},eB=()=>{L&&clearTimeout(L)},eG=()=>{if(eB(),(0,i.r)(()=>{q.forEach(e=>{h.length>0&&f(e,"animation-play-state","running")})}),0===h.length||0===q.length)ex();else{let e=e9()||0,t=e_()||0,n=ey()||1;isFinite(n)&&(L=setTimeout(e0,e+t*n+100)),s(q[0],()=>{eB(),(0,i.r)(()=>{eH(),(0,i.r)(ex)})})}},eH=()=>{q.forEach(e=>{$(e,"animation-duration"),$(e,"animation-delay"),$(e,"animation-play-state")})},eJ=()=>{M.forEach(e=>{e.play()}),(0===h.length||0===q.length)&&ex()},eM=()=>{U?(eI(0),eK()):eR()},eQ=e=>new Promise(t=>{(null==e?void 0:e.sync)&&(A=!0,et(()=>A=!1,{oneTimeCallback:!0})),E||eF(),D&&(eM(),D=!1),x&&(C=z.length+1,x=!1),et(()=>t(),{oneTimeCallback:!0}),z.forEach(e=>{e.play()}),U?eJ():eG(),I=!1}),eU=()=>{z.forEach(e=>{e.stop()}),E&&(ei(),E=!1),ee()},eV=(e,t)=>{let n=h[0];return void 0!==n&&(void 0===n.offset||0===n.offset)?n[e]=t:h=[{offset:0,[e]:t},...h],F},eX=(e,t)=>{let n=h[h.length-1];return void 0!==n&&(void 0===n.offset||1===n.offset)?n[e]=t:h=[...h,{offset:1,[e]:t}],F},eY=(e,t,n)=>eV(e,t).to(e,n);return F={parentAnimation:_,elements:q,childAnimations:z,id:K,animationFinish:ex,from:eV,to:eX,fromTo:eY,parent:eN,play:eQ,pause:eZ,stop:eU,destroy:X,keyframes:eO,addAnimation:eP,addElement:e7,update:eW,fill:eb,direction:ew,iterations:eL,duration:eA,easing:eT,delay:eC,getWebAnimations:V,getKeyframes:ek,getFill:eg,getDirection:ev,getDelay:e9,getIterations:ey,getEasing:eE,getDuration:e_,afterAddRead:el,afterAddWrite:ef,afterClearStyles:ep,afterStyles:eu,afterRemoveClass:eh,afterAddClass:ec,beforeAddRead:eo,beforeAddWrite:er,beforeClearStyles:ed,beforeStyles:em,beforeRemoveClass:es,beforeAddClass:e$,onFinish:et,isRunning:()=>0!==C&&!I,progressStart:e3,progressStep:e5,progressEnd:eq}}}}]);