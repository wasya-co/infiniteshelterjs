"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9189],{49189:function(a,b,c){c.r(b),c.d(b,{iosTransitionAnimation:function(){return m},shadow:function(){return g}});var d=c(87089),e=c(32550);let f=a=>document.querySelector(`${a}.ion-cloned-element`),g=a=>a.shadowRoot||a,h=a=>{let b="ION-TABS"===a.tagName?a:a.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=b){let d=b.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=d?d.querySelector(c):null}return a.querySelector(c)},i=(a,b)=>{let c="ION-TABS"===a.tagName?a:a.querySelector("ion-tabs"),d=[];if(null!=c){let e=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(d=e.querySelectorAll("ion-buttons"))}else d=a.querySelectorAll("ion-buttons");for(let f of d){let g=f.closest("ion-header"),h=g&&!g.classList.contains("header-collapse-condense-inactive"),i=f.querySelector("ion-back-button"),j=f.classList.contains("buttons-collapse"),k="start"===f.slot||""===f.slot;if(null!==i&&k&&(j&&h&&b||!j))return i}return null},j=(a,b,c,d,e)=>{let f=i(d,c),g=h(e),j=h(d),m=i(e,c),n=null!==f&&null!==g&&!c,o=null!==j&&null!==m&&c;if(n){let p=g.getBoundingClientRect(),q=f.getBoundingClientRect();l(a,b,c,g,p,q),k(a,b,c,f,p,q)}else if(o){let r=j.getBoundingClientRect(),s=m.getBoundingClientRect();l(a,b,c,j,r,s),k(a,b,c,m,r,s)}return{forward:n,backward:o}},k=(a,b,c,e,h,i)=>{let j=b?`calc(100% - ${i.right+4}px)`:`${i.left-4}px`,k=b?"7px":"-7px",l=b?"-4px":"4px",m=b?"-4px":"4px",n=b?"right":"left",o=[{offset:0,opacity:0,transform:`translate3d(${k}, ${h.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${l}, ${i.top-46}px, 0) scale(1)`}],p=[{offset:0,opacity:1,transform:`translate3d(${l}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${k}, ${h.top-40}px, 0) scale(2.1)`}],q=[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],r=[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}],s=(0,d.c)(),t=(0,d.c)(),u=f("ion-back-button"),v=g(u).querySelector(".button-text"),w=g(u).querySelector("ion-icon");u.text=e.text,u.mode=e.mode,u.icon=e.icon,u.color=e.color,u.disabled=e.disabled,u.style.setProperty("display","block"),u.style.setProperty("position","fixed"),t.addElement(w),s.addElement(v),s.beforeStyles({"transform-origin":`${n} center`}).beforeAddWrite(()=>{e.style.setProperty("display","none"),u.style.setProperty(n,j)}).afterAddWrite(()=>{e.style.setProperty("display",""),u.style.setProperty("display","none"),u.style.removeProperty(n)}).keyframes(c?p:o),t.beforeStyles({"transform-origin":`${b?"left":"right"} center`}).keyframes(c?r:q),a.addAnimation([s,t])},l=(a,b,c,e,g,h)=>{let i=b?`calc(100% - ${g.right}px)`:`${g.left}px`,j=b?"-18px":"18px",k=b?"right":"left",l=[{offset:0,opacity:0,transform:`translate3d(${j}, ${h.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${g.top-2}px, 0) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate3d(0, ${g.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${j}, ${h.top-4}px, 0) scale(0.5)`}],n=f("ion-title"),o=(0,d.c)();n.innerText=e.innerText,n.size=e.size,n.color=e.color,o.addElement(n),o.beforeStyles({"transform-origin":`${k} center`,height:"46px",display:"",position:"relative",[k]:i}).beforeAddWrite(()=>{e.style.setProperty("display","none")}).afterAddWrite(()=>{e.style.setProperty("display",""),n.style.setProperty("display","none")}).keyframes(c?l:m),a.addAnimation(o)},m=(a,b)=>{try{let c="cubic-bezier(0.32,0.72,0,1)",f="opacity",h="transform",i="0%",k=.8,l="rtl"===a.ownerDocument.dir,m=l?"-99.5%":"99.5%",n=l?"33%":"-33%",o=b.enteringEl,p=b.leavingEl,q="back"===b.direction,r=o.querySelector(":scope > ion-content"),s=o.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),t=o.querySelectorAll(":scope > ion-header > ion-toolbar"),u=(0,d.c)(),v=(0,d.c)();if(u.addElement(o).duration(b.duration||540).easing(b.easing||c).fill("both").beforeRemoveClass("ion-page-invisible"),p&&a){let w=(0,d.c)();w.addElement(a),u.addAnimation(w)}if(r||0!==t.length||0!==s.length?(v.addElement(r),v.addElement(s)):v.addElement(o.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),u.addAnimation(v),q?v.beforeClearStyles([f]).fromTo("transform",`translateX(${n})`,`translateX(${i})`).fromTo(f,k,1):v.beforeClearStyles([f]).fromTo("transform",`translateX(${m})`,`translateX(${i})`),r){let x=g(r).querySelector(".transition-effect");if(x){let y=x.querySelector(".transition-cover"),z=x.querySelector(".transition-shadow"),A=(0,d.c)(),B=(0,d.c)(),C=(0,d.c)();A.addElement(x).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),B.addElement(y).beforeClearStyles([f]).fromTo(f,0,.1),C.addElement(z).beforeClearStyles([f]).fromTo(f,.03,.7),A.addAnimation([B,C]),v.addAnimation([A])}}let D=o.querySelector("ion-header.header-collapse-condense"),{forward:E,backward:F}=j(u,l,q,o,p);if(t.forEach(a=>{let b=(0,d.c)();b.addElement(a),u.addAnimation(b);let c=(0,d.c)();c.addElement(a.querySelector("ion-title"));let e=(0,d.c)(),h=Array.from(a.querySelectorAll("ion-buttons,[menuToggle]")),j=a.closest("ion-header"),k=j&&j.classList.contains("header-collapse-condense-inactive"),o;o=q?h.filter(a=>{let b=a.classList.contains("buttons-collapse");return b&&!k||!b}):h.filter(a=>!a.classList.contains("buttons-collapse")),e.addElement(o);let p=(0,d.c)();p.addElement(a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));let r=(0,d.c)();r.addElement(g(a).querySelector(".toolbar-background"));let s=(0,d.c)(),t=a.querySelector("ion-back-button");if(t&&s.addElement(t),b.addAnimation([c,e,p,r,s]),e.fromTo(f,.01,1),p.fromTo(f,.01,1),q)k||c.fromTo("transform",`translateX(${n})`,`translateX(${i})`).fromTo(f,.01,1),p.fromTo("transform",`translateX(${n})`,`translateX(${i})`),s.fromTo(f,.01,1);else{D||c.fromTo("transform",`translateX(${m})`,`translateX(${i})`).fromTo(f,.01,1),p.fromTo("transform",`translateX(${m})`,`translateX(${i})`),r.beforeClearStyles([f,"transform"]);let v=null==j?void 0:j.translucent;if(v?r.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):r.fromTo(f,.01,"var(--opacity)"),E||s.fromTo(f,.01,1),t&&!E){let w=(0,d.c)();w.addElement(g(t).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),b.addAnimation(w)}}}),p){let G=(0,d.c)(),H=p.querySelector(":scope > ion-content"),I=p.querySelectorAll(":scope > ion-header > ion-toolbar"),J=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(H||0!==I.length||0!==J.length?(G.addElement(H),G.addElement(J)):G.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),u.addAnimation(G),q){G.beforeClearStyles([f]).fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)");let K=(0,e.g)(p);u.afterAddWrite(()=>{"normal"===u.getDirection()&&K.style.setProperty("display","none")})}else G.fromTo("transform",`translateX(${i})`,`translateX(${n})`).fromTo(f,1,k);if(H){let L=g(H).querySelector(".transition-effect");if(L){let M=L.querySelector(".transition-cover"),N=L.querySelector(".transition-shadow"),O=(0,d.c)(),P=(0,d.c)(),Q=(0,d.c)();O.addElement(L).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),P.addElement(M).beforeClearStyles([f]).fromTo(f,.1,0),Q.addElement(N).beforeClearStyles([f]).fromTo(f,.7,.03),O.addAnimation([P,Q]),G.addAnimation([O])}}I.forEach(a=>{let b=(0,d.c)();b.addElement(a);let c=(0,d.c)();c.addElement(a.querySelector("ion-title"));let e=(0,d.c)(),j=a.querySelectorAll("ion-buttons,[menuToggle]"),k=a.closest("ion-header"),m=k&&k.classList.contains("header-collapse-condense-inactive"),o=Array.from(j).filter(a=>{let b=a.classList.contains("buttons-collapse");return b&&!m||!b});e.addElement(o);let p=(0,d.c)(),r=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");r.length>0&&p.addElement(r);let s=(0,d.c)();s.addElement(g(a).querySelector(".toolbar-background"));let t=(0,d.c)(),v=a.querySelector("ion-back-button");if(v&&t.addElement(v),b.addAnimation([c,e,p,t,s]),u.addAnimation(b),t.fromTo(f,.99,0),e.fromTo(f,.99,0),p.fromTo(f,.99,0),q){m||c.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),p.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)"),s.beforeClearStyles([f,"transform"]);let w=null==k?void 0:k.translucent;if(w?s.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):s.fromTo(f,"var(--opacity)",0),v&&!F){let x=(0,d.c)();x.addElement(g(v).querySelector(".button-text")).fromTo("transform",`translateX(${i})`,`translateX(${(l?-124:124)+"px"})`),b.addAnimation(x)}}else m||c.fromTo("transform",`translateX(${i})`,`translateX(${n})`).fromTo(f,.99,0).afterClearStyles([h,f]),p.fromTo("transform",`translateX(${i})`,`translateX(${n})`).afterClearStyles([h,f]),t.afterClearStyles([f]),c.afterClearStyles([f]),e.afterClearStyles([f])})}return u}catch(R){throw R}}}}])