"use strict";
(() => {
var exports = {};
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 551974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(887757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
// EXTERNAL MODULE: ./src/components/locations/index.jsx + 29 modules
var locations = __webpack_require__(33117);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(865432);
// EXTERNAL MODULE: ./src/AppRouter.jsx + 6 modules
var AppRouter = __webpack_require__(524495);
// EXTERNAL MODULE: ./src/AppWrapper2.jsx
var AppWrapper2 = __webpack_require__(598541);
;// CONCATENATED MODULE: ./pages/en/locations/show/[slug].jsx


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }













/**
 * Page
 * en / locations / show / :slug
 *
 * @TODO: Fix mobile it looks terrible. _vp_ 2022-09-09
 *
**/

var Page = function Page(props) {
  console.log('+++ +++ Page:', props);
  var location = props.item;

  if (!location) {
    return /*#__PURE__*/external_react_default().createElement("h1", null, "Wow, this location is missing?!");
  }

  if (location.is_premium) {
    return /*#__PURE__*/external_react_default().createElement("h1", null, "This location cannot be accessed right now, please try again later.");
  }

  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, location.name, " - ", (config_default()).siteTitle, " v2"), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), /*#__PURE__*/external_react_default().createElement(shared/* NavigationProvider */.KQ, {
    useHistory: router_namespaceObject.useRouter
  }, /*#__PURE__*/external_react_default().createElement(shared/* ThemeProvider */.f6, null, /*#__PURE__*/external_react_default().createElement(dist/* AuthContextProvider */.HD, {
    useApi: shared/* useApi */.h_
  }, /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* TwofoldContextProvider */.AO, null, /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* CollapsibleProvider */.h9, null, /*#__PURE__*/external_react_default().createElement(AppWrapper2/* Root */.fC, {
    className: "Root"
  }, /*#__PURE__*/external_react_default().createElement(locations/* LocationsShow */.N2, {
    location: location,
    match: {
      params: {
        slug: location.slug
      }
    }
  })), /*#__PURE__*/external_react_default().createElement(external_react_toastify_.ToastContainer, {
    position: "bottom-left"
  }), /*#__PURE__*/external_react_default().createElement(AppWrapper2/* WLoginModal */.T1, null), /*#__PURE__*/external_react_default().createElement(dist/* RegisterModal */.Kt, null), /*#__PURE__*/external_react_default().createElement(application/* BottomDrawer */.lY, null)))))));
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, location.name, " - ", (config_default()).siteTitle, " v2"), /*#__PURE__*/external_react_default().createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), /*#__PURE__*/external_react_default().createElement(AppWrapper2/* default */.ZP, {
    location: location
  }));
};

/* harmony default export */ const _slug_ = (Page);
/**
 * getStaticProps
 *
 * This function gets called at build time
 * By returning { props: { posts } }, the component will receive `posts` as a prop at build time
 *
  params contains the route parameters for pages using dynamic routes.
    For example, if the page name is [id].js , then params will look like { id: ... }.
  preview is true if the page is in the Preview Mode and undefined otherwise.
  previewData contains the preview data set by setPreviewData.
  locale contains the active locale (if enabled).
  locales contains all supported locales (if enabled).
  defaultLocale contains the configured default locale (if enabled).
**/

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}
/**
 * getStaticPaths
 *
 * This function gets called at build time
 * { fallback: false } means other routes should 404.
**/

function _getStaticProps() {
  _getStaticProps = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(match) {
    var slug, apiOrigin, item;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('+++ +++ getStaticProps:', match);
            slug = match.params.slug;
            // apiOrigin = 'http://localhost:3001'
            apiOrigin = 'https://manager.piousbox.com'; // const location = await api.getLocation({ slug, })

            _context.next = 5;
            return shared/* request.get */.WY.get("".concat(apiOrigin, "/api/maps/view/").concat(slug)).then(function (r) {
              return r.data;
            }).then(function (r) {
              return r.map;
            })["catch"](function (err) {
              return err;
            });

          case 5:
            item = _context.sent;
            return _context.abrupt("return", {
              props: {
                item: item
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

function getStaticPaths() {
  return _getStaticPaths.apply(this, arguments);
}

function _getStaticPaths() {
  _getStaticPaths = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
    var paths;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            paths = []; // paths.push({ params: { slug: '3d' }})
            // paths.push({ params: { slug: 'art-gallery' }})
            // paths.push({ params: { slug: 'chicago' }})

            paths.push({
              params: {
                slug: 'root'
              }
            }); // paths.push({ params: { slug: 'trading' }})
            // paths.push({ params: { slug: 'world' }})
            // paths.push({ params: { slug: 'yola91' }})

            console.log('+++ +++ getStaticPaths:', paths);
            return _context2.abrupt("return", {
              paths: paths,
              fallback: true
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticPaths.apply(this, arguments);
}

/***/ }),

/***/ 850187:
/***/ ((module) => {

module.exports = require("@capacitor-community/facebook-login");

/***/ }),

/***/ 666444:
/***/ ((module) => {

module.exports = require("@capacitor/core");

/***/ }),

/***/ 617493:
/***/ ((module) => {

module.exports = require("@capacitor/device");

/***/ }),

/***/ 180522:
/***/ ((module) => {

module.exports = require("@capacitor/push-notifications");

/***/ }),

/***/ 278531:
/***/ ((module) => {

module.exports = require("@capacitor/toast");

/***/ }),

/***/ 376943:
/***/ ((module) => {

module.exports = require("@googlemaps/react-wrapper");

/***/ }),

/***/ 790733:
/***/ ((module) => {

module.exports = require("@ionic/react");

/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 40124:
/***/ ((module) => {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ 995555:
/***/ ((module) => {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ 608263:
/***/ ((module) => {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ 883974:
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 165031:
/***/ ((module) => {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 926256:
/***/ ((module) => {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ 448308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 472105:
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 56518:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ 393365:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ 764515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 220943:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ 918054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 876590:
/***/ ((module) => {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 752167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 171982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 188945:
/***/ ((module) => {

module.exports = require("ionicons/icons");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 616689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 566405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 219931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 314661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 787938:
/***/ ((module) => {

module.exports = require("react-toggle");

/***/ }),

/***/ 441671:
/***/ ((module) => {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ 857518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 272248:
/***/ ((module) => {

module.exports = require("three");

/***/ }),

/***/ 578519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 439491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 113685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 795687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 822037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 257310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 473837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 959796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958,649], () => (__webpack_exec__(551974)));
module.exports = __webpack_exports__;

})();