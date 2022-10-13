(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820,9651],{9651:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,u=i(n(7294)),l=i(n(2717)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function c(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var f={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}},s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(h,e);var t,n,i,c,s,p=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function h(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),p.apply(this,arguments)}return i=h,c=[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||d[t]||"An unexpected error has occurred";return u.default.createElement("div",{style:f.error},u.default.createElement(l.default,null,u.default.createElement("title",null,t?"".concat(t,": ").concat(r):"Application error: a client-side exception has occurred")),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(void 0===n||n?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),t?u.default.createElement("h1",{className:"next-error-h1",style:f.h1},t):null,u.default.createElement("div",{style:f.desc},u.default.createElement("h2",{style:f.h2},this.props.title||t?r:u.default.createElement(u.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}],r(i.prototype,c),s&&r(i,s),Object.defineProperty(i,"prototype",{writable:!1}),h}(u.default.Component);s.displayName="ErrorPage",s.getInitialProps=c,s.origGetInitialProps=c,t.default=s},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),i=o(n(1585)),u=n(8e3),l=n(5850),d=n(9470);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(9475);var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,i,u,l=t.inAmpMode;return e.reduce(f,[]).reverse().concat(c(l).reverse()).filter((n=new Set,o=new Set,i=new Set,u={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var l=0,d=s.length;l<d;l++){var c=s[l];if(e.props.hasOwnProperty(c)){if("charSet"===c)i.has(c)?t=!1:i.add(c);else{var f=e.props[c],p=u[c]||new Set;("name"!==c||!r)&&p.has(f)?t=!1:(p.add(f),u[c]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=a.useContext(u.AmpStateContext),r=a.useContext(l.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function l(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),l()),a(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(function(){return n&&(n._pendingUpdate=l),function(){n&&(n._pendingUpdate=l)}}),i(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(1598).Z)(n(7294)),o=!1,a=o?function(){}:r.useLayoutEffect,i=o?function(){}:r.useEffect},1981:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(9651)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=1981)}),_N_E=e.O()}]);