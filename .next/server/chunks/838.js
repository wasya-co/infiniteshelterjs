exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 423414:
/***/ ((module) => {

"use strict";


module.exports = {
  appIndexPath: "src/index",
  // used in webpack
  apiOrigin: "",
  domain: "tgm.piousbox.com",
  // required! 2021-08-31
  debug: false,
  // homePath: "<some-path>",
  REACT_ENV: 'N/A',
  requireLogin: true,
  siteTitle: 'Infinite Shelter - Location Discovery Guide',
  stripePublicKey: ''
};

/***/ }),

/***/ 585553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var settings = {
  "apiOrigin": "https://manager.piousbox.com",
  "domain": "tgm.piousbox.com",
  // required! 2021-08-31
  "debug": false,
  GOOGLE_MAPS_KEY: 'AIzaSyCPzonnRCpTIUJauMMQcL3k69Vm5O8vz3M',
  APP_ENV: 'development_web',
  homePath: "/en/locations/show/root",
  REACT_ENV: 'production_ish',
  requireLogin: false,
  stripePublicKey: 'pk_live_xQX97vdZNe11A3HBVZc1GX6H'
};

var defaultSettings = __webpack_require__(423414);

module.exports = _objectSpread(_objectSpread({}, defaultSettings), settings);

/***/ }),

/***/ 448433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ appPaths),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(857518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(585553);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var $components_galleries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(878935);
/* harmony import */ var $components_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596707);
/* harmony import */ var $components_reports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(563204);
/* harmony import */ var $components_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(255502);
/* harmony import */ var $shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38085);









/**
 * appPaths
 *
 * @TODO: test-drive: (1) when providing location_slug, (2) when providing location, (3) when neither. _vp_ 2022-09-12
 * @TODO: for Photo, can show full-screen pic. _vp_ 2022-04-17
 *
**/

var appPaths = {
  item: function item(props) {
    // logg(props, 'appPaths.item')
    var item, location;

    if (props.item_type) {
      item = props;
    } else {
      item = props.item;
      location = props.location;
    }

    var _item = item,
        item_type = _item.item_type,
        slug = _item.slug;

    if (!slug) {
      // for Photo only
      slug = item.id;
    }

    if (item_type === $shared__WEBPACK_IMPORTED_MODULE_8__.C.item_types.location) {
      return "/en/locations/show/".concat(slug);
    }

    if (location) {
      return "/en/locations/show/".concat(location.slug, "/").concat($shared__WEBPACK_IMPORTED_MODULE_8__/* .inflector.tableize */ .$z.tableize(item_type), "/show/").concat(slug);
    } else {
      return "/en/".concat($shared__WEBPACK_IMPORTED_MODULE_8__/* .inflector.tableize */ .$z.tableize(item_type), "/show/").concat(slug);
    }
  },
  gallery: function gallery(_ref) {
    var location = _ref.location,
        location_slug = _ref.location_slug,
        slug = _ref.slug;

    if (location_slug) {
      return "/en/locations/show/".concat(location_slug, "/galleries/show/").concat(slug);
    }

    if (location) {
      return "/en/locations/show/".concat(location.slug, "/galleries/show/").concat(slug);
    } else {
      // return `/en/${inflector.tableize(item_type)}/show/${slug}`
      return "/en/galleries/show/".concat(slug);
    }
  },
  location: function location(_ref2) {
    var slug = _ref2.slug,
        newsitems_page = _ref2.newsitems_page;
    var newsitems_page_str = newsitems_page ? "newsitems_page=".concat(newsitems_page) : '';
    return "/en/locations/show/".concat(slug, "?").concat(newsitems_page_str);
  }
};
/**
 * AppRouter - obsoletes AppMobile and AppDesktop
 * _vp_ 2022-09-06
 *
 * @TODO: remove mentions of layout from router, yes? _vp_ 2022-09-10
 *
**/

var AppRouter = function AppRouter(props) {
  // logg(props, 'AppRouter')
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    main: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
    exact: true,
    from: "/",
    to: (config__WEBPACK_IMPORTED_MODULE_3___default().homePath)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/account",
    component: $components_users__WEBPACK_IMPORTED_MODULE_7__/* .Account */ .mR
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/galleries/show/:slug",
    component: $components_galleries__WEBPACK_IMPORTED_MODULE_4__/* .GalleriesShow */ .q
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/locations/show/:slug",
    component: $components_locations__WEBPACK_IMPORTED_MODULE_5__/* .LocationsShowAsync */ .qm,
    layout: $shared__WEBPACK_IMPORTED_MODULE_8__.C.layout_mapui
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/locations/show/:slug/:item_type/show/:item_slug",
    component: $components_locations__WEBPACK_IMPORTED_MODULE_5__/* .LocationsShowAsync */ .qm,
    layout: $shared__WEBPACK_IMPORTED_MODULE_8__.C.layout_mapui
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/locations/show2/:slug",
    component: $components_locations__WEBPACK_IMPORTED_MODULE_5__/* .LocationsShowAsync */ .qm,
    layout: $shared__WEBPACK_IMPORTED_MODULE_8__.C.layout_mapui
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/locations/show3d/:slug",
    component: $components_locations__WEBPACK_IMPORTED_MODULE_5__/* .LocationsShowMobile3d */ .HZ,
    layout: $shared__WEBPACK_IMPORTED_MODULE_8__.C.layout_mapui
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: true,
    path: "/en/reports/show/:slug",
    component: $components_reports__WEBPACK_IMPORTED_MODULE_6__/* .ReportsShow */ .X
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ 588233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "f": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(857518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var $components_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(660179);
/* harmony import */ var $shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38085);
/* harmony import */ var $src_AppRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(448433);
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }







 // I'm using this. _vp_ 2022-09-10










 // @TODO: stop exporting, move to AppProvider, along with BottomDrawer and ToastContainer.

var Root = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "WrappedApp__Root",
  componentId: "sc-lecg9m-0"
})(["padding:var(--ion-small-padding);"]);
/**
 * WrappedApp
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js _vp_ 2022-09-09
 * Now, AppProvider has all the providers, and this wrapper is empty. _vp_ 2022-09-18
 *
 *
 * @Test: has toast container
 * @Test: has bottomDrawer
 *
 * @DONE: unlockModal cannot be here, it must be inside react-router.
 *
**/

var WrappedApp = function WrappedApp(props) {
  // logg(props, 'WrappedApp')
  _objectDestructuringEmpty(props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement($shared__WEBPACK_IMPORTED_MODULE_5__/* .AppProvider */ .wI, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Root, {
    className: "Root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement($src_AppRouter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement($components_application__WEBPACK_IMPORTED_MODULE_4__/* .BottomDrawer */ .lY, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
    position: "bottom-left"
  }));
};

WrappedApp.propTypes = {}; // none

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrappedApp);

/***/ }),

/***/ 852947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zF": () => (/* reexport */ TwofoldLayout_Collapsible),
  "h9": () => (/* reexport */ CollapsibleProvider),
  "LW": () => (/* reexport */ TwofoldLayout_LongLine),
  "Nd": () => (/* reexport */ TwofoldLayout_TwofoldContext),
  "AO": () => (/* reexport */ TwofoldContextProvider)
});

// UNUSED EXPORTS: CollapsibleContext

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
;// CONCATENATED MODULE: ./src/components/TwofoldLayout/Collapsible.jsx
var _excluded = ["children"],
    _excluded2 = ["children", "variant"],
    _excluded3 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * CollapsibleProvider
**/

var CollapsibleContext = external_react_default().createContext({});
var CollapsibleProvider = function CollapsibleProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // logg(props, 'CollapsibleProvider')
  var defaultCollapsibles = _defineProperty({}, shared.C.collapsible.descr, true);

  var tmp;

  try {
    if (tmp = localStorage.getItem(shared.C.collapsibles)) {
      defaultCollapsibles = JSON.parse(tmp);
    }
  } catch (err) {
    (0,shared/* logg */.IJ)(err, 'Could not parse collapsibles from localStorage');
  }

  var _useState = (0,external_react_.useState)(defaultCollapsibles),
      _useState2 = _slicedToArray(_useState, 2),
      collapsibles = _useState2[0],
      _setCollapsibles = _useState2[1];

  var setCollapsibles = function setCollapsibles(m) {
    localStorage.setItem(shared.C.collapsibles, JSON.stringify(m));

    _setCollapsibles(m);
  };

  return /*#__PURE__*/external_react_default().createElement(CollapsibleContext.Provider, {
    value: {
      collapsibles: collapsibles,
      setCollapsibles: setCollapsibles
    }
  }, children);
};

var Gt = function Gt() {
  return /*#__PURE__*/external_react_default().createElement("span", null, "\xA0>\xA0\xA0");
};

var Inner = external_styled_components_default().div.withConfig({
  displayName: "Collapsible__Inner",
  componentId: "sc-92wcj7-0"
})(["clear:left;"]);

var Lt = function Lt() {
  return /*#__PURE__*/external_react_default().createElement("span", null, "\xA0<\xA0\xA0");
};

var Label = external_styled_components_default().div.withConfig({
  displayName: "Collapsible__Label",
  componentId: "sc-92wcj7-1"
})(["display:flex;margin-bottom:", ";color:", ";"], function (p) {
  return p.theme.borderWidth;
}, function (p) {
  return p.theme.colors.text;
});
var WTransparent = external_styled_components_default().div.withConfig({
  displayName: "Collapsible__WTransparent",
  componentId: "sc-92wcj7-2"
})(["padding:0 .5em .5em .5em;"]);

var W0 = function W0(_ref2) {
  var children = _ref2.children,
      variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, _excluded2);

  switch (variant) {
    case shared.C.variants.bordered:
      return /*#__PURE__*/external_react_default().createElement(shared/* WBordered */.xP, props, children);

    default:
      return /*#__PURE__*/external_react_default().createElement(WTransparent, props, children);
  }
};
/**
 * Collapsible
 *
 * @TODO: test-driven _vp_ 2021-10-29
 */


var Collapsible = function Collapsible(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded3);

  // logg(props, 'Collapsible')
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      slug = props.slug,
      variant = props.variant;

  var _useContext = (0,external_react_.useContext)(CollapsibleContext),
      collapsibles = _useContext.collapsibles,
      setCollapsibles = _useContext.setCollapsibles;

  var doToggle = function doToggle() {
    return setCollapsibles(_objectSpread(_objectSpread({}, collapsibles), {}, _defineProperty({}, slug, !collapsibles[slug])));
  };

  var collapsible = typeof config.collapsible === 'undefined' ? true : config.collapsible;
  var folded = collapsible ? !!collapsibles[slug] : false;
  return /*#__PURE__*/external_react_default().createElement(W0, {
    variant: variant,
    className: "Collapsible ".concat(className)
  }, props.label && collapsible && /*#__PURE__*/external_react_default().createElement(Label, {
    onClick: doToggle
  }, folded ? /*#__PURE__*/external_react_default().createElement(Lt, null) : /*#__PURE__*/external_react_default().createElement(Gt, null), " ", props.label), props.label && !collapsible && /*#__PURE__*/external_react_default().createElement(Label, null, props.label), !folded && /*#__PURE__*/external_react_default().createElement(Inner, null, children));
};

Collapsible.propTypes = {
  className: (external_prop_types_default()).string,
  config: external_prop_types_default().shape({
    collapsible: (external_prop_types_default()).bool
  }),
  label: (external_prop_types_default()).string,
  slug: (external_prop_types_default()).string.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const TwofoldLayout_Collapsible = (Collapsible);
;// CONCATENATED MODULE: ./src/components/TwofoldLayout/LongLine.jsx
/*
 * components / TwofoldLayout / index.jsx
 */



/**
 * LongLine
 *
 * Turns out I need this still - part of the layout.
 */

var LongLine = external_styled_components_default().div.withConfig({
  displayName: "LongLine",
  componentId: "sc-1nwgz2l-0"
})(["border:2px solid var(--ion-border-color);border-radius:var(--ion-border-radius);flex-grow:1;width:", ";height:", ";padding:2px;background:", ";"], function (p) {
  return p.orientation === shared.C.horizontal ? 'auto' : '10px';
}, function (p) {
  return p.orientation === shared.C.horizontal ? '10px' : 'auto';
}, function (p) {
  return p.theme.colors.background;
});
LongLine.propTypes = {
  orientation: (external_prop_types_default()).string // 'horizontal' or 'vertical'

};
/* harmony default export */ const TwofoldLayout_LongLine = (LongLine);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(40124);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(472105);
;// CONCATENATED MODULE: ./src/components/TwofoldLayout/TwofoldContext.jsx
var TwofoldContext_excluded = ["children"];

function TwofoldContext_slicedToArray(arr, i) { return TwofoldContext_arrayWithHoles(arr) || TwofoldContext_iterableToArrayLimit(arr, i) || TwofoldContext_unsupportedIterableToArray(arr, i) || TwofoldContext_nonIterableRest(); }

function TwofoldContext_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TwofoldContext_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TwofoldContext_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TwofoldContext_arrayLikeToArray(o, minLen); }

function TwofoldContext_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TwofoldContext_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TwofoldContext_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TwofoldContext_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TwofoldContext_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TwofoldContext_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var TwofoldContext = external_react_default().createContext({});
/**
 * TwofoldContextProvider
 *
 * ishjs has an older version of this - discard it. _vp_ 2022-03-05, 2022-09-12
*/

var TwofoldContextProvider = function TwofoldContextProvider(_ref) {
  var children = _ref.children,
      props = TwofoldContext_objectWithoutProperties(_ref, TwofoldContext_excluded);

  // logg(props, 'TwofoldContextProvider')
  var _currentUser = props.currentUser,
      _setCurrentUser = props.setCurrentUser,
      itemToUnlock = props.itemToUnlock,
      setItemToUnlock = props.setItemToUnlock,
      layout = props.layout,
      setLayout = props.setLayout,
      _showItem = props.showItem,
      _setShowItem = props.setShowItem,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? 1 : _props$zoom,
      setZoom = props.setZoom;
  /* B */
  // bottomDrawerOpen

  var _bdo = true; // for unregistered users, the drawer is open

  var _useState = (0,external_react_.useState)(_bdo),
      _useState2 = TwofoldContext_slicedToArray(_useState, 2),
      bottomDrawerOpen = _useState2[0],
      _setBottomDrawerOpen = _useState2[1];

  var setBottomDrawerOpen = function setBottomDrawerOpen(m) {
    try {
      localStorage.setItem(shared.C.bottomDrawerOpen, JSON.stringify(m));
    } catch (e) {}

    _setBottomDrawerOpen(m);
  };

  (0,external_react_.useEffect)(function () {
    try {
      var tmp = JSON.parse(localStorage.getItem(shared.C.bottomDrawerOpen));

      _setBottomDrawerOpen(tmp);
    } catch (e) {} // no window, or cannot parse json

  }, []); // let [ currentUser, setCurrentUser ] = useState(C.anonUser)
  // if (_setCurrentUser) {
  //   [ currentUser, setCurrentUser ] = [ _currentUser, _setCurrentUser ]
  // }
  // /* Get the current_user on load */
  // const mountedRef = useRef('init')
  // useEffect(() => {
  //   if (!mountedRef.current) { return } // @TODO: hmmm do I need this?
  //   const fn = async () => {
  //     const r = await api.getMyAccount()
  //     setCurrentUser(r)
  //   }
  //   fn()
  //   return () => mountedRef.current = null
  // }, [currentUser])
  // // Refresh current_user if is_purchasing
  // useEffect(() => {
  //   let closure = setTimeout(() => {
  //     const fn = async () => {
  //       const r = await api.getMyAccount()
  //       setCurrentUser(r)
  //     }
  //     fn()
  //   }, 1 * 1000)
  //   return () => clearTimeout(closure)
  // }, [currentUser.is_purchasing])

  /* E */
  // const [ editorMode, _setEditorMode ] = useState(JSON.parse(localStorage.getItem(C.names.editorMode)))
  // const setEditorMode = (t) => {
  //   localStorage.setItem(C.names.editorMode, t)
  //   _setEditorMode(t)
  // }

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = TwofoldContext_slicedToArray(_useState3, 2),
      editorMode = _useState4[0],
      setEditorMode = _useState4[1];
  /* F */


  var _useState5 = (0,external_react_.useState)(),
      _useState6 = TwofoldContext_slicedToArray(_useState5, 2),
      folded = _useState6[0],
      setFolded = _useState6[1];

  var foldedLeft = folded === shared.C.foldedLeft;
  var foldedRight = folded === shared.C.foldedRight;
  /* I */

  var _useState7 = (0,external_react_.useState)({}),
      _useState8 = TwofoldContext_slicedToArray(_useState7, 2),
      _itemToUnlock = _useState8[0],
      _setItemToUnlock = _useState8[1];

  if (!itemToUnlock) {
    itemToUnlock = _itemToUnlock;
    setItemToUnlock = _setItemToUnlock;
  }
  /* L */
  // const [ loginModalOpen, setLoginModalOpen ] = useState(false)

  /* M */


  var _useState9 = (0,external_react_.useState)(null),
      _useState10 = TwofoldContext_slicedToArray(_useState9, 2),
      mapPanelWidth = _useState10[0],
      setMapPanelWidth = _useState10[1];

  var _useState11 = (0,external_react_.useState)(null),
      _useState12 = TwofoldContext_slicedToArray(_useState11, 2),
      mapPanelHeight = _useState12[0],
      setMapPanelHeight = _useState12[1];
  /* P */


  var _useState13 = (0,external_react_.useState)(false),
      _useState14 = TwofoldContext_slicedToArray(_useState13, 2),
      purchaseModalOpen = _useState14[0],
      setPurchaseModalOpen = _useState14[1];
  /* R */
  // const [ ratedConfirmation, _setRatedConfirmation ] = useState(JSON.parse(localStorage.getItem(C.ratedConfirmation)))
  // const setRatedConfirmation = (which) => {
  //   localStorage.setItem(C.ratedConfirmation, JSON.stringify(which))
  //   _setRatedConfirmation(which)
  // }


  var _useState15 = (0,external_react_.useState)(true),
      _useState16 = TwofoldContext_slicedToArray(_useState15, 2),
      ratedConfirmation = _useState16[0],
      setRatedConfirmation = _useState16[1];

  var _useState17 = (0,external_react_.useState)(0),
      _useState18 = TwofoldContext_slicedToArray(_useState17, 2),
      resizeCount = _useState18[0],
      setResizeCount = _useState18[1];

  var touchResize = function touchResize() {
    return setResizeCount(resizeCount + 1);
  }; // const [ registerModalOpen, setRegisterModalOpen ] = useState(false)

  /* S */


  var _useState19 = (0,external_react_.useState)(false),
      _useState20 = TwofoldContext_slicedToArray(_useState19, 2),
      showItem = _useState20[0],
      setShowItem = _useState20[1];

  if (!!_setShowItem) {
    setShowItem = _setShowItem;
  }

  if (!!_showItem) {
    showItem = _showItem;
  }

  var _useState21 = (0,external_react_.useState)(false),
      _useState22 = TwofoldContext_slicedToArray(_useState21, 2),
      showUrl = _useState22[0],
      setShowUrl = _useState22[1];
  /* T */
  // twofoldPercent
  // @TODO: fix, this makes no sense. _vp_ 2022-09-12


  var _tfp;

  try {
    _tfp = JSON.parse(localStorage.getItem(shared.C.twofoldPercent));
  } catch (e) {}

  var _useState23 = (0,external_react_.useState)(_tfp || 0.5),
      _useState24 = TwofoldContext_slicedToArray(_useState23, 2),
      twofoldPercent = _useState24[0],
      _setTwofoldPercent = _useState24[1];

  var setTwofoldPercent = function setTwofoldPercent(p) {
    try {
      localStorage.setItem(shared.C.twofoldPercent, JSON.stringify(p));
    } catch (e) {}

    _setTwofoldPercent(p);
  };
  /* Z */


  var _useState25 = (0,external_react_.useState)(1),
      _useState26 = TwofoldContext_slicedToArray(_useState25, 2),
      _zoom = _useState26[0],
      _setZoom = _useState26[1];

  if (!setZoom) {
    zoom = _zoom;
    setZoom = _setZoom;
  }

  return /*#__PURE__*/external_react_default().createElement(TwofoldContext.Provider, {
    value: {
      bottomDrawerOpen: bottomDrawerOpen,
      setBottomDrawerOpen: setBottomDrawerOpen,
      editorMode: editorMode,
      setEditorMode: setEditorMode,
      folded: folded,
      setFolded: setFolded,
      foldedLeft: foldedLeft,
      foldedRight: foldedRight,
      itemToUnlock: itemToUnlock,
      setItemToUnlock: setItemToUnlock,
      layout: layout,
      setLayout: setLayout,
      mapPanelHeight: mapPanelHeight,
      setMapPanelHeight: setMapPanelHeight,
      mapPanelWidth: mapPanelWidth,
      setMapPanelWidth: setMapPanelWidth,
      purchaseModalOpen: purchaseModalOpen,
      setPurchaseModalOpen: setPurchaseModalOpen,
      ratedConfirmation: ratedConfirmation,
      setRatedConfirmation: setRatedConfirmation,
      resizeCount: resizeCount,
      touchResize: touchResize,
      showItem: showItem,
      setShowItem: setShowItem,
      showUrl: showUrl,
      setShowUrl: setShowUrl,
      twofoldPercent: twofoldPercent,
      setTwofoldPercent: setTwofoldPercent,
      zoom: zoom,
      setZoom: setZoom
    }
  }, children);
};

/* harmony default export */ const TwofoldLayout_TwofoldContext = (TwofoldContext);

;// CONCATENATED MODULE: ./src/components/TwofoldLayout/index.jsx




/***/ }),

/***/ 660179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lY": () => (/* reexport */ application_BottomDrawer),
  "Oo": () => (/* reexport */ application_Breadcrumbs),
  "rC": () => (/* reexport */ application_DayNightToggle),
  "_I": () => (/* reexport */ application_Metaline),
  "to": () => (/* reexport */ application_PurchaseModal),
  "fv": () => (/* reexport */ application_SideMenu),
  "ce": () => (/* reexport */ application_UnlockModal)
});

// UNUSED EXPORTS: RatedRestrictionModal

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(995555);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(883974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(578519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(918054);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(876590);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/components/users/index.jsx + 5 modules
var users = __webpack_require__(255502);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
;// CONCATENATED MODULE: ./src/components/application/BottomDrawer.jsx
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }













var Drawer = external_styled_components_default()((Drawer_default())).withConfig({
  displayName: "BottomDrawer__Drawer",
  componentId: "sc-1cfcaai-0"
})([".MuiDrawer-paper{background:", ";z-index:0;}.MuiDrawer-paperAnchorDockedBottom{border-top:0;}"], function (p) {
  return p.theme.colors.background;
});

function getLibrary(provider) {
  return new (external_web3_default())(provider);
}

var Inner0 = external_styled_components_default().div.withConfig({
  displayName: "BottomDrawer__Inner0",
  componentId: "sc-1cfcaai-1"
})(["display:flex;align-items:flex-start;color:", ";"], function (p) {
  return p.theme.colors.text;
});
var Inner1 = external_styled_components_default().div.withConfig({
  displayName: "BottomDrawer__Inner1",
  componentId: "sc-1cfcaai-2"
})(["border:2px solid var(--ion-border-color);border-radius:var(--ion-border-radius);height:calc(", " + 1*", ");margin:", ";flex-grow:1;"], function (p) {
  return p.theme.bottomDrawerOpenHeight;
}, function (p) {
  return p.theme.borderHeight;
}, function (p) {
  return p.theme.borderWidth;
}); // TODO: I may not need this

var Inner2 = external_styled_components_default().div.withConfig({
  displayName: "BottomDrawer__Inner2",
  componentId: "sc-1cfcaai-3"
})(["height:100px;display:flex;"]);
var WClosed = external_styled_components_default().div.withConfig({
  displayName: "BottomDrawer__WClosed",
  componentId: "sc-1cfcaai-4"
})(["position:absolute;bottom:-10px;width:calc(100% - 2*", ");display:flex;align-items:center;"], function (p) {
  return p.theme.borderWidth;
});
/**
 * BottomDrawer
 */

var BottomDrawer = function BottomDrawer(props) {
  // logg(props, 'BottomDrawer')
  _objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      setBottomDrawerOpen = _useContext.setBottomDrawerOpen;

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement(WClosed, null, /*#__PURE__*/external_react_default().createElement((IconButton_default()), {
    "aria-label": "open drawer",
    onClick: function onClick() {
      return setBottomDrawerOpen(true);
    }
  }, /*#__PURE__*/external_react_default().createElement(shared/* MenuIcon */.Oq, {
    fontSize: "small"
  })), /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* LongLine */.LW, {
    orientation: shared.C.horizontal
  })), /*#__PURE__*/external_react_default().createElement(Drawer, {
    anchor: "bottom",
    elevation: 1,
    open: !!bottomDrawerOpen,
    onClose: function onClose() {
      return setBottomDrawerOpen(false);
    },
    BackdropProps: {
      invisible: true
    },
    variant: "persistent"
  }, /*#__PURE__*/external_react_default().createElement(Inner0, null, /*#__PURE__*/external_react_default().createElement((IconButton_default()), {
    "aria-label": "open drawer",
    onClick: function onClick() {
      return setBottomDrawerOpen(false);
    },
    style: {
      paddingRight: 0
    }
  }, /*#__PURE__*/external_react_default().createElement(shared/* MenuIcon */.Oq, {
    fontSize: "small"
  })), /*#__PURE__*/external_react_default().createElement(Inner1, null, /*#__PURE__*/external_react_default().createElement(Inner2, null, /*#__PURE__*/external_react_default().createElement(core_.Web3ReactProvider, {
    getLibrary: getLibrary
  }, /*#__PURE__*/external_react_default().createElement(users/* MyAccountWidget */.pu, null)))))));
};

BottomDrawer.propTypes = {}; // none so far

/* harmony default export */ const application_BottomDrawer = (BottomDrawer);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/application/Breadcrumbs.jsx





 // One breadcrumb

var B0 = external_styled_components_default().a.withConfig({
  displayName: "Breadcrumbs__B0",
  componentId: "sc-1yfagtc-0"
})(["color:var(--ion-color);display:block;"]); // The divider

var B1 = external_styled_components_default().div.withConfig({
  displayName: "Breadcrumbs__B1",
  componentId: "sc-1yfagtc-1"
})(["padding:0.5em;color:var(--ion-color);"]);
var W0 = external_styled_components_default().div.withConfig({
  displayName: "Breadcrumbs__W0",
  componentId: "sc-1yfagtc-2"
})(["border:", "px solid cyan;display:flex;align-items:center;justify-content:stretch;z-index:0;"], function (p) {
  return p.debug ? '1' : '0';
});
var WBreadcrumbs = external_styled_components_default().div.withConfig({
  displayName: "Breadcrumbs__WBreadcrumbs",
  componentId: "sc-1yfagtc-3"
})(["display:block;flex-grow:1;> *{display:inline;}"]);
/**
 * Breadcrumbs
 */

var Breadcrumbs = function Breadcrumbs(props) {
  // logg(props, 'Breakcrumbs')
  var _props$breadcrumbs = props.breadcrumbs,
      breadcrumbs = _props$breadcrumbs === void 0 ? [] : _props$breadcrumbs;

  var _useContext = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext.useHistory;

  var history = useHistory();
  var out = [];
  breadcrumbs.map(function (b, idx) {
    if (idx + 1 === props.breadcrumbs.length) {
      // last one
      out.push( /*#__PURE__*/external_react_default().createElement(B0, {
        key: idx
      }, b.name));
    } else {
      var href = shared/* appPaths.location */.XO.location({
        slug: b.slug
      });

      var _goto = function _goto(e) {
        e.preventDefault();
        history.push(href);
      };

      out.push( /*#__PURE__*/external_react_default().createElement(B0, {
        key: idx,
        href: href,
        onClick: _goto
      }, b.name));
      out.push( /*#__PURE__*/external_react_default().createElement(B1, {
        key: "".concat(idx, "-divider")
      }, ">"));
    }
  });
  return /*#__PURE__*/external_react_default().createElement(W0, {
    debug: (config_default()).debug,
    className: "Breadcrumbs"
  }, /*#__PURE__*/external_react_default().createElement(application_SideMenu, {
    variant: shared.C.variants.inline
  }), /*#__PURE__*/external_react_default().createElement(WBreadcrumbs, {
    className: "WBreadcrumbs"
  }, out), /*#__PURE__*/external_react_default().createElement(application_DayNightToggle, null));
};

Breadcrumbs.propTypes = {
  breadcrumbs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
    name: (external_prop_types_default()).string.isRequired,
    slug: (external_prop_types_default()).string.isRequired
  }))
};
/* harmony default export */ const application_Breadcrumbs = (Breadcrumbs);
// EXTERNAL MODULE: ./src/components/application/DayNightToggle.module.scss
var DayNightToggle_module = __webpack_require__(379155);
var DayNightToggle_module_default = /*#__PURE__*/__webpack_require__.n(DayNightToggle_module);
;// CONCATENATED MODULE: ./src/components/application/DayNightToggle.jsx
function DayNightToggle_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }





/**
 * DayNightToggle
 * From: https://codepen.io/fagnanm/pen/RpWNyb
 * From: https://devbeep.com/css-day-night-toggle-switch/
 *
 * @TODO: test-drive. toggling *once* changes the theme *once*
**/

var DayNightToggle = function DayNightToggle(props) {
  // logg(props, 'DayNightToggle')
  DayNightToggle_objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(shared/* ThemeContext */.Ni),
      theme = _useContext.theme,
      toggleTheme = _useContext.toggleTheme; // logg(useContext(ThemeContext), 'DayNightToggle Used ThemeContext')


  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "DaynightToddle ".concat((DayNightToggle_module_default()).container),
    onClick: toggleTheme
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default())["switch"]
  }, /*#__PURE__*/external_react_default().createElement("label", {
    htmlFor: "toggle"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    readOnly: true,
    type: "checkbox",
    checked: theme === shared.C.themes.dark
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default()).sunMoon
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default()).dots
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default()).background
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default()).stars1
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: (DayNightToggle_module_default()).stars2
  })))));
};

DayNightToggle.propTypes = {}; // none

/* harmony default export */ const application_DayNightToggle = (DayNightToggle);
// EXTERNAL MODULE: ./src/components/application/Metaline.module.scss
var Metaline_module = __webpack_require__(952560);
var Metaline_module_default = /*#__PURE__*/__webpack_require__.n(Metaline_module);
;// CONCATENATED MODULE: ./src/components/application/Metaline.jsx




var Metaline_W0 = external_styled_components_default().div.withConfig({
  displayName: "Metaline__W0",
  componentId: "sc-d7epka-0"
})(["margin:.5em 0;color:", ";"], function (p) {
  return p.theme.colors.text;
});
/**
 * Metaline
**/

var Metaline = function Metaline(props) {
  // logg(props, 'Metaline')
  var created_at = props.created_at,
      city = props.city,
      _props$tags = props.tags,
      tags = _props$tags === void 0 ? [] : _props$tags,
      username = props.username;
  return /*#__PURE__*/external_react_default().createElement(Metaline_W0, {
    className: (Metaline_module_default()).Metaline
  }, created_at && /*#__PURE__*/external_react_default().createElement("span", {
    className: "date"
  }, "On ", (0,shared/* pp_date */.KW)(created_at), "\xA0"), username && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, "by ", /*#__PURE__*/external_react_default().createElement("span", {
    className: "user",
    style: {
      textDecoration: 'underline'
    }
  }, username), "\xA0"));
};

/* harmony default export */ const application_Metaline = (Metaline);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(219931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(764515);
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(220943);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/components/application/PurchaseModal.module.scss
var PurchaseModal_module = __webpack_require__(768711);
var PurchaseModal_module_default = /*#__PURE__*/__webpack_require__.n(PurchaseModal_module);
;// CONCATENATED MODULE: ./src/components/application/PurchaseModal.jsx
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var FlexRow = external_styled_components_default().div.withConfig({
  displayName: "PurchaseModal__FlexRow",
  componentId: "sc-v4mx5w-0"
})([""]);
var stripePromise = (0,stripe_js_.loadStripe)((config_default()).stripePublicKey);

var _PurchaseModal = function _PurchaseModal(props) {
  // logg(props, '_PurchaseModal')
  var _useContext = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser; // logg(useContext(AuthContext), 'PurchaseModalUsedAuthContext')


  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      purchaseModalOpen = _useContext2.purchaseModalOpen,
      setPurchaseModalOpen = _useContext2.setPurchaseModalOpen; // logg(useContext(TwofoldContext), 'PurchaseModalUsedTwofoldContext')


  var api = (0,shared/* useApi */.h_)();
  var stripe = (0,react_stripe_js_.useStripe)();
  var elements = (0,react_stripe_js_.useElements)();

  var _useState = (0,external_react_.useState)(50),
      _useState2 = _slicedToArray(_useState, 2),
      amountCents = _useState2[0],
      setAmountCents = _useState2[1]; // @TODO: add a virual cue "Loading" on button click.


  var buyUnlocks = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var client_secret, result, handle;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();

              if (!(!stripe || !elements)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return api.initPayment({
                amountCents: amountCents
              });

            case 5:
              client_secret = _context2.sent;
              _context2.next = 8;
              return stripe.confirmCardPayment(client_secret.client_secret, {
                payment_method: {
                  card: elements.getElement(react_stripe_js_.CardElement)
                }
              });

            case 8:
              result = _context2.sent;

              if (result.error) {
                (0,external_react_toastify_.toast)('We are sorry, but something went wrong.');
                (0,shared/* logg */.IJ)(result.error.message, 'e41 - cannot buyUnlocks()');
              } else {
                if (result.paymentIntent.status === 'succeeded') {
                  handle = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var response;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return api.getMyAccount();

                          case 2:
                            response = _context.sent;
                            (0,shared/* logg */.IJ)(response, 'tr2 success');

                            if (!response.is_purchasing) {
                              (0,shared/* logg */.IJ)('clearing interval!');
                              setCurrentUser(response);
                              setPurchaseModalOpen(false);
                              clearInterval(handle);
                            }

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })), 1 * 500);
                  setTimeout(function () {
                    return clearInterval(handle);
                  }, 10 * 1000);
                }
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function buyUnlocks(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  external_react_modal_default().setAppElement('body');
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    className: "PurchaseModal ".concat((PurchaseModal_module_default()).LoginModal),
    isOpen: purchaseModalOpen,
    overlayClassName: (PurchaseModal_module_default()).LoginModalOverlay,
    portalClassName: (PurchaseModal_module_default()).LoginModalPortal
  }, /*#__PURE__*/external_react_default().createElement(dist/* ModalHeader */.xB, {
    onClose: function onClose() {
      setPurchaseModalOpen(false);
    }
  }, "Buy unlocks"), /*#__PURE__*/external_react_default().createElement("form", {
    onSubmit: buyUnlocks
  }, /*#__PURE__*/external_react_default().createElement(FlexRow, null, "How many cents would you pay for 1 coin? Minimum 50 cents.", /*#__PURE__*/external_react_default().createElement("input", {
    value: amountCents,
    onChange: function onChange(e) {
      return setAmountCents(e.target.value);
    }
  })), /*#__PURE__*/external_react_default().createElement(react_stripe_js_.CardElement, null), /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit",
    disabled: !stripe
  }, "Pay")));
};

var PurchaseModal = function PurchaseModal(props) {
  return /*#__PURE__*/external_react_default().createElement(react_stripe_js_.Elements, {
    stripe: stripePromise
  }, /*#__PURE__*/external_react_default().createElement(_PurchaseModal, props));
};

/* harmony default export */ const application_PurchaseModal = (PurchaseModal);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
;// CONCATENATED MODULE: ./src/components/application/RatedRestrictionModal.jsx






/**
 * RatedRestrictionModal
 */

var RatedRestrictionModal = function RatedRestrictionModal(props) {
  // logg(props, 'RatedRestrictionModal')
  var ratedConfirmation = props.ratedConfirmation,
      setRatedConfirmation = props.setRatedConfirmation;
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    isOpen: !ratedConfirmation
  }, /*#__PURE__*/external_react_default().createElement("p", null, "You must be 18 years of age or older to view this content."), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return setRatedConfirmation(true);
    }
  }, "I am over 18"), "\xA0 \xA0", /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return window.location = 'https://disney.com';
    }
  }, "I am NOT over 18"));
};

RatedRestrictionModal.propTypes = {// ratedConfirmation, setRatedConfirmation - but maybe from a context instead?
};
/* harmony default export */ const application_RatedRestrictionModal = ((/* unused pure expression or super */ null && (RatedRestrictionModal)));
// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__(608263);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(165031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(926256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
;// CONCATENATED MODULE: ./src/components/application/SideMenu.jsx
function SideMenu_slicedToArray(arr, i) { return SideMenu_arrayWithHoles(arr) || SideMenu_iterableToArrayLimit(arr, i) || SideMenu_unsupportedIterableToArray(arr, i) || SideMenu_nonIterableRest(); }

function SideMenu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SideMenu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SideMenu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SideMenu_arrayLikeToArray(o, minLen); }

function SideMenu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SideMenu_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SideMenu_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SideMenu_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }






 // import { useHistory } from 'react-router-dom'





var SideMenu_W0 = external_styled_components_default().div.withConfig({
  displayName: "SideMenu__W0",
  componentId: "sc-ove78m-0"
})(["height:100vh;display:flex;flex-direction:column;justify-content:space-between;align-content:space-between;"]);
/**
 * SideMenu
**/

var SideMenu = function SideMenu(props) {
  var _currentUser$bookmark;

  // logg(props, 'SideMenu')
  SideMenu_objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext.useHistory;

  var _React$useState = external_react_default().useState(false),
      _React$useState2 = SideMenu_slicedToArray(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var _useState = (0,external_react_.useState)(false),
      _useState2 = SideMenu_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var history = useHistory();

  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      currentUser = _useContext2.currentUser,
      setCurrentUser = _useContext2.setCurrentUser;

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, props.variant === shared.C.variants.floating ? /*#__PURE__*/external_react_default().createElement((Fab_default()), {
    onClick: function onClick() {
      return setDrawerOpen(true);
    },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: '.5em'
    },
    "aria-label": "main menu"
  }, /*#__PURE__*/external_react_default().createElement(shared/* MenuIcon */.Oq, null)) : /*#__PURE__*/external_react_default().createElement(shared/* MenuIcon */.Oq, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    }
  }), /*#__PURE__*/external_react_default().createElement((Drawer_default()), {
    anchor: "left",
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    }
  }, /*#__PURE__*/external_react_default().createElement(SideMenu_W0, null, /*#__PURE__*/external_react_default().createElement((List_default()), null, /*#__PURE__*/external_react_default().createElement((ListItem_default()), {
    button: true,
    key: 'newsfeed',
    onClick: function onClick() {
      setDrawerOpen(false);
      history.push((config_default()).homePath);
    }
  }, "Home"), currentUser && ((_currentUser$bookmark = currentUser.bookmarks) === null || _currentUser$bookmark === void 0 ? void 0 : _currentUser$bookmark.map(function (b, idx) {
    return /*#__PURE__*/external_react_default().createElement((ListItem_default()), {
      button: true,
      key: idx,
      onClick: function onClick() {
        setDrawerOpen(false);
        history.push("/en/locations/show/".concat(b.slug));
      }
    }, /*#__PURE__*/external_react_default().createElement("span", null, b.name));
  })), /*#__PURE__*/external_react_default().createElement((ListItem_default()), null, "REACT_ENV: ", (config_default()).REACT_ENV)))));
};

SideMenu.propTypes = {
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const application_SideMenu = (SideMenu);
// EXTERNAL MODULE: ./src/components/locations/index.jsx + 50 modules
var locations = __webpack_require__(596707);
// EXTERNAL MODULE: ./src/AppRouter.jsx
var AppRouter = __webpack_require__(448433);
// EXTERNAL MODULE: ./src/components/application/UnlockModal.module.scss
var UnlockModal_module = __webpack_require__(18033);
;// CONCATENATED MODULE: ./src/components/application/UnlockModal.jsx
function UnlockModal_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ UnlockModal_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function UnlockModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function UnlockModal_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }












var BtnRow = external_styled_components_default().div.withConfig({
  displayName: "UnlockModal__BtnRow",
  componentId: "sc-wbtxk-0"
})(["display:flex;justify-content:space-around;"]);
/**
 * UnlockModal
 *
 * Alphabetized contexts
**/

var UnlockModal = function UnlockModal(props) {
  // logg(props, 'UnlockModal')
  UnlockModal_objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext.useHistory;

  var history = useHistory();

  var _useContext2 = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext2.currentUser,
      setCurrentUser = _useContext2.setCurrentUser,
      loginModalOpen = _useContext2.loginModalOpen,
      setLoginModalOpen = _useContext2.setLoginModalOpen,
      useApi = _useContext2.useApi; // logg(useContext(AuthContext), 'unlockModalUsedAuthContext')


  var location = (0,external_react_.useContext)(locations/* LocationContext */.LZ); // logg(location, 'UnlockModal Used LocationContext')

  var _useContext3 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext3.itemToUnlock,
      setItemToUnlock = _useContext3.setItemToUnlock,
      purchaseModalOpen = _useContext3.purchaseModalOpen,
      setPurchaseModalOpen = _useContext3.setPurchaseModalOpen,
      ratedConfirmation = _useContext3.ratedConfirmation,
      setRatedConfirmation = _useContext3.setRatedConfirmation; // logg(useContext(TwofoldContext), 'unlockModalUsedTwofoldContext')


  var api = useApi();

  var doUnlock = /*#__PURE__*/function () {
    var _ref = UnlockModal_asyncToGenerator( /*#__PURE__*/UnlockModal_regeneratorRuntime().mark(function _callee() {
      return UnlockModal_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.doUnlock({
                kind: itemToUnlock.item_type,
                id: itemToUnlock.id
              }).then(function (r) {
                (0,shared/* logg */.IJ)(r, 'UnlockModal Unlocked'); // @TODO: Change this to null if possible. Test-drive this change. _vp_ 2022-09-04

                setItemToUnlock({});
                setCurrentUser(r);
                history.push(AppRouter/* appPaths.item */.X.item({
                  item: itemToUnlock,
                  location: location
                }));
              })["catch"](function (e) {
                (0,shared/* logg */.IJ)(e, 'e19 - cannot doUnlock');
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doUnlock() {
      return _ref.apply(this, arguments);
    };
  }();

  if (!(itemToUnlock !== null && itemToUnlock !== void 0 && itemToUnlock.id)) {
    return null;
  }

  var closable = typeof itemToUnlock.closable === 'undefined' ? true : itemToUnlock.closable; // @TODO: this is messy

  var gohome = function gohome() {
    setItemToUnlock({});
    setRatedConfirmation(true);
    history.push((config_default()).homePath);
  };

  var cost = itemToUnlock.premium_tier;
  external_react_modal_default().setAppElement('body');
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    isOpen: !!itemToUnlock.id,
    className: "UnlockModal ".concat(UnlockModal_module.UnlockModal),
    overlayClassName: UnlockModal_module.UnlockModalOverlay,
    portalClassName: UnlockModal_module.UnlockModalPortal
  }, /*#__PURE__*/external_react_default().createElement(dist/* ModalHeader */.xB, {
    onClose: function onClose() {
      return closable && setItemToUnlock(false);
    }
  }, "Unlock this item?"), /*#__PURE__*/external_react_default().createElement("p", null, "To access this content, please unlock it first. It costs ", cost, " coin(s) to unlock."), currentUser.email && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You have ", /*#__PURE__*/external_react_default().createElement("b", null, currentUser.n_unlocks || '-'), " unlocks."), currentUser.n_unlocks >= cost && /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    className: "doUnlock",
    onClick: doUnlock
  }, "Unlock") || /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You don't have enough unlocks."), /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    onClick: function onClick() {
      setPurchaseModalOpen(true);
      setItemToUnlock(false);
    }
  }, "Purchase more."))) || /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You have to be logged in to unlock content. ", /*#__PURE__*/external_react_default().createElement("a", {
    onClick: function onClick() {
      setLoginModalOpen(true);
      setItemToUnlock(false);
    }
  }, "Please login."))), /*#__PURE__*/external_react_default().createElement(BtnRow, null, !closable && /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    onClick: gohome
  }, "Go Home")));
};

UnlockModal.propTypes = {}; // none

/* harmony default export */ const application_UnlockModal = (UnlockModal);
;// CONCATENATED MODULE: ./src/components/application/index.js
/*
 * Good - the entire list here.
**/









/***/ }),

/***/ 878935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ galleries_GalleriesShow)
});

// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
// EXTERNAL MODULE: ./src/components/galleries/Galleries.module.scss
var Galleries_module = __webpack_require__(710899);
var Galleries_module_default = /*#__PURE__*/__webpack_require__.n(Galleries_module);
;// CONCATENATED MODULE: ./src/components/galleries/GalleriesShow.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var W0 = external_styled_components_default().div.withConfig({
  displayName: "GalleriesShow__W0",
  componentId: "sc-1742rhv-0"
})(["height:auto;"]);
/**
 * GalleriesShow
 *
**/

var GalleriesShow = function GalleriesShow(props) {
  // logg(props, 'GalleriesShow')
  var match = props.match;

  var _useState = (0,external_react_.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      gallery = _useState2[0],
      setGallery = _useState2[1];

  var mountedRef = (0,external_react_.useRef)('init');

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext.itemToUnlock,
      setItemToUnlock = _useContext.setItemToUnlock;

  var api = (0,shared/* useApi */.h_)();
  (0,external_react_.useEffect)(function () {
    api.getGallery(match.params.slug).then(function (_gallery) {
      if (!mountedRef.current) {
        return;
      }

      (0,shared/* logg */.IJ)(_gallery, '_gallery');

      if (_gallery.is_premium && !_gallery.is_purchased) {
        setItemToUnlock(_gallery);
      } else {
        setGallery(_gallery);
      }
    });
    return function () {
      mountedRef.current = null;
    };
  }, [gallery.id, itemToUnlock.id]);
  return /*#__PURE__*/external_react_default().createElement(W0, {
    className: (Galleries_module_default()).GalleriesShow
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: (Galleries_module_default()).narrow
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: (Galleries_module_default()).heading
  }, /*#__PURE__*/external_react_default().createElement(shared/* BackBtn */.a5, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: (Galleries_module_default()).title
  }, gallery.name)), /*#__PURE__*/external_react_default().createElement(application/* Metaline */._I, gallery), /*#__PURE__*/external_react_default().createElement("div", {
    className: (Galleries_module_default()).thumbs
  }, gallery.photos && gallery.photos.map(function (ph, i) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      className: (Galleries_module_default()).card,
      key: i
    }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(react_.IonImg, {
      src: ph.thumb_url
    })));
  })), /*#__PURE__*/external_react_default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: gallery.description
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: (Galleries_module_default()).full_img_section
  }, gallery.photos && gallery.photos.map(function (ph, i) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      className: (Galleries_module_default()).item,
      key: i
    }, /*#__PURE__*/external_react_default().createElement("img", {
      src: ph.large_url
    }));
  })));
};

/* harmony default export */ const galleries_GalleriesShow = (GalleriesShow);
;// CONCATENATED MODULE: ./src/components/galleries/index.js


/***/ }),

/***/ 596707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tv": () => (/* reexport */ ConferenceRoom_ConferenceRoom),
  "LZ": () => (/* reexport */ LocationContext),
  "vR": () => (/* reexport */ locations_LocationProvider),
  "QH": () => (/* reexport */ LocationsRestricted),
  "N2": () => (/* reexport */ locations_LocationsShow),
  "qm": () => (/* reexport */ locations_LocationsShowAsync),
  "HZ": () => (/* reexport */ locations_LocationsShowMobile3d),
  "I8": () => (/* reexport */ locations_MapPanel),
  "fg": () => (/* reexport */ locations_WrappedMapPanel)
});

// UNUSED EXPORTS: GoogleMaps, ZoomCtrl

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
;// CONCATENATED MODULE: ./src/components/ConferenceRoom/ConferenceRoom.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import io from 'socket.io-client' // nope, I inject my own via head.script tag
// import { Peer } from "peerjs"

 // import uuid from 'react-uuid'



var W0 = external_styled_components_default().div.withConfig({
  displayName: "ConferenceRoom__W0",
  componentId: "sc-q97saq-0"
})([""]); // const peer = new Peer()

var isVideo = false;
var isAudio = false;
var roomId = "ce7abac6-5fa5-11ed-9b6a-0242ac120002"; // const thisId = uuid()

/**
 * ConferenceRoom
 *
 * From: https://peerjs.com/docs/#start
 * From: https://socket.io/get-started/chat
 * From: https://github.com/itstaranarora/video-chat-v1/blob/master/public/script.js#L49
 * From: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
**/

var ConferenceRoom = function ConferenceRoom(props) {
  (0,shared/* logg */.IJ)(props, 'ConferenceRoom'); // "peerjs": "^1.4.7", <- put this back in package.json
  // it's not there now b/c its presence craps out next_js entirely.

  if (true) {
    return /*#__PURE__*/external_react_default().createElement("h1", null, "next_js render - see ConferenceRoom.jsx");
  }

  var socket = io('ws://localhost:3030');

  var _useState = (0,external_react_.useState)(socket.connected),
      _useState2 = _slicedToArray(_useState, 2),
      isConnected = _useState2[0],
      setIsConnected = _useState2[1];

  var _useState3 = (0,external_react_.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      lastPong = _useState4[0],
      setLastPong = _useState4[1];

  var _useState5 = (0,external_react_.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      myId = _useState6[0],
      setMyId = _useState6[1];

  (0,shared/* logg */.IJ)(myId, 'myId');
  var conn;
  var videoGridRef = (0,external_react_.useRef)();
  var myVideo = document.createElement("video");
  myVideo.muted = true;
  var myVideoStream;
  (0,external_react_.useEffect)(function () {
    if (!isConnected) {
      return function () {};
    }

    peer.on("open", function (id) {
      (0,shared/* logg */.IJ)(id, 'peer onOpen Id');
      setMyId(id);
      conn = peer.connect(roomId);
      socket.emit('join', {
        roomId: roomId,
        myId: id
      }); // conn.send("Ping")
    }); // receive

    peer.on("connection", function (conn) {
      (0,shared/* logg */.IJ)(conn, 'peer onConnection');
      conn.on("data", function (data) {
        (0,shared/* logg */.IJ)(data, 'Peer OnData');
      });
      conn.on("open", function () {
        (0,shared/* logg */.IJ)([], 'peer OnOpen');
        conn.send("Pong");
      });
    }); // answer

    peer.on("call", function (call) {
      (0,shared/* logg */.IJ)(call, 'peer OnCall');
      navigator.mediaDevices.getUserMedia({
        video: isVideo,
        audio: isAudio
      }, function (stream) {
        call.answer(stream); // Answer the call with an A/V stream.

        call.on("stream", function (remoteStream) {
          (0,shared/* logg */.IJ)('show the stream in a <video> element 2'); // Show stream in some <video> element.
        });
      }, function (err) {
        console.error("Failed to get local stream 2", err);
      });
    });
    return function () {};
  }, [isConnected]);

  var cleanupCb = function cleanupCb() {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('pong');
    socket.off('joined');
  };

  (0,external_react_.useEffect)(function () {
    socket.on('connect', function () {
      // logg('socket connected')
      setIsConnected(true);
    });

    if (!myId) {
      return cleanupCb;
    }

    socket.on('disconnect', function () {
      (0,shared/* logg */.IJ)('socket disconnected');
      setIsConnected(false);
    });
    socket.on('pong', function () {
      // logg('socket pong')
      setLastPong(new Date().toISOString());
    });
    socket.on('joined', function (props) {
      (0,shared/* logg */.IJ)(props, 'socket OnJoined');
      var id = props.id;

      if (id !== myId) {
        (0,shared/* logg */.IJ)([], 'Calling...'); // call

        navigator.mediaDevices.getUserMedia({
          video: isVideo,
          audio: isAudio
        }, function (stream) {
          var call = peer.call(id, stream);
          call.on("stream", function (remoteStream) {
            (0,shared/* logg */.IJ)('show the stream in a <video> element'); // Show stream in some <video> element.
          });
        }, function (err) {
          console.error("Failed to get local stream", err);
        });
      }
    });
    return cleanupCb;
  }, [myId]);

  var sendPing = function sendPing() {
    socket.emit('ping');
  };

  var connectToNewUser = function connectToNewUser(userId, stream) {
    var call = peer.call(userId, stream);
    var video = document.createElement("video");
    call.on("stream", function (userVideoStream) {
      addVideoStream(video, userVideoStream);
    });
  };

  var myStream;
  var refAudio = (0,external_react_.useRef)();

  var addVideoStream = function addVideoStream(video, stream) {
    // video.srcObject = stream
    if (refAudio.current) {
      refAudio.current.srcObject = stream;
    }

    myStream = stream;
    video.addEventListener("loadedmetadata", function () {
      video.play(); // React.findDOMNode(videoGridRef.current).append(video);
    });
  };

  navigator.mediaDevices.getUserMedia({
    video: isVideo,
    audio: isAudio
  }).then(function (stream) {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    peer.on("call", function (call) {
      call.answer(stream);
      var video = document.createElement("video");
      call.on("stream", function (userVideoStream) {
        addVideoStream(video, userVideoStream);
      });
    });
    socket.on("user-connected", function (userId) {
      connectToNewUser(userId, stream);
    });
  });
  return /*#__PURE__*/external_react_default().createElement(W0, null, /*#__PURE__*/external_react_default().createElement("p", null, "myId: ", myId, " Connected: ", '' + isConnected), /*#__PURE__*/external_react_default().createElement("p", null, "Last pong: ", lastPong || '-', /*#__PURE__*/external_react_default().createElement("button", {
    onClick: sendPing
  }, "Send ping")), /*#__PURE__*/external_react_default().createElement("div", {
    id: "videoGrid",
    ref: videoGridRef,
    style: {
      width: '500px',
      height: '400px',
      border: '1px solid red'
    }
  }, /*#__PURE__*/external_react_default().createElement("audio", {
    controls: true,
    volume: "true",
    autoPlay: true,
    ref: refAudio
  })));
};

ConferenceRoom.propTypes = {}; // none

/* harmony default export */ const ConferenceRoom_ConferenceRoom = (ConferenceRoom);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(566405);
// EXTERNAL MODULE: external "@googlemaps/react-wrapper"
var react_wrapper_ = __webpack_require__(376943);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/locations/GoogleMaps.jsx
var _excluded = ["onClick", "onIdle", "children", "style"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GoogleMaps_slicedToArray(arr, i) { return GoogleMaps_arrayWithHoles(arr) || GoogleMaps_iterableToArrayLimit(arr, i) || GoogleMaps_unsupportedIterableToArray(arr, i) || GoogleMaps_nonIterableRest(); }

function GoogleMaps_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GoogleMaps_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GoogleMaps_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GoogleMaps_arrayLikeToArray(o, minLen); }

function GoogleMaps_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GoogleMaps_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function GoogleMaps_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * App
**/

var App = function App(props) {
  // logg(props, 'GoogleMaps2')
  var map = props.map;

  var _React$useState = external_react_.useState([]),
      _React$useState2 = GoogleMaps_slicedToArray(_React$useState, 2),
      clicks = _React$useState2[0],
      setClicks = _React$useState2[1];

  var _React$useState3 = external_react_.useState(12),
      _React$useState4 = GoogleMaps_slicedToArray(_React$useState3, 2),
      zoom = _React$useState4[0],
      setZoom = _React$useState4[1]; // initial zoom


  var _React$useState5 = external_react_.useState({
    lat: map.x,
    lng: map.y
  }),
      _React$useState6 = GoogleMaps_slicedToArray(_React$useState5, 2),
      center = _React$useState6[0],
      setCenter = _React$useState6[1];

  var onClick = function onClick(e) {// avoid directly mutating state
    // setClicks([...clicks, e.latLng]);
  };

  var onIdle = function onIdle(m) {
    // console.log("onIdle");
    m.getZoom() && setZoom(m.getZoom());
    m.getCenter() && setCenter(m.getCenter().toJSON());
  };

  var form = /*#__PURE__*/external_react_.createElement("div", {
    style: {
      display: 'none',
      padding: "1rem",
      flexBasis: "250px",
      height: "100%",
      overflow: "auto"
    }
  }, /*#__PURE__*/external_react_.createElement("label", {
    htmlFor: "zoom"
  }, "Zoom"), /*#__PURE__*/external_react_.createElement("input", {
    type: "number",
    id: "zoom",
    name: "zoom",
    value: zoom,
    onChange: function onChange(event) {
      return setZoom(Number(event.target.value));
    }
  }), /*#__PURE__*/external_react_.createElement("br", null), /*#__PURE__*/external_react_.createElement("label", {
    htmlFor: "lat"
  }, "Latitude"), /*#__PURE__*/external_react_.createElement("input", {
    type: "number",
    id: "lat",
    name: "lat",
    value: center.lat,
    onChange: function onChange(event) {
      return setCenter(_objectSpread(_objectSpread({}, center), {}, {
        lat: Number(event.target.value)
      }));
    }
  }), /*#__PURE__*/external_react_.createElement("br", null), /*#__PURE__*/external_react_.createElement("label", {
    htmlFor: "lng"
  }, "Longitude"), /*#__PURE__*/external_react_.createElement("input", {
    type: "number",
    id: "lng",
    name: "lng",
    value: center.lng,
    onChange: function onChange(event) {
      return setCenter(_objectSpread(_objectSpread({}, center), {}, {
        lng: Number(event.target.value)
      }));
    }
  }), /*#__PURE__*/external_react_.createElement("h3", null, clicks.length === 0 ? "Click on map to add markers" : "Clicks"), clicks.map(function (latLng, i) {
    return /*#__PURE__*/external_react_.createElement("pre", {
      key: i
    }, JSON.stringify(latLng.toJSON(), null, 2));
  }), /*#__PURE__*/external_react_.createElement("button", {
    onClick: function onClick() {
      return setClicks([]);
    }
  }, "Clear"));
  return /*#__PURE__*/external_react_.createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/external_react_.createElement(react_wrapper_.Wrapper, {
    apiKey: (config_default()).GOOGLE_MAPS_KEY
  }, /*#__PURE__*/external_react_.createElement(Map, {
    center: center,
    onClick: onClick,
    onIdle: onIdle,
    zoom: zoom,
    style: {
      flexGrow: "1",
      height: "100%"
    }
  }, map.markers.map(function (m, i) {
    return /*#__PURE__*/external_react_.createElement(Marker, {
      key: i,
      position: {
        lat: m.x,
        lng: m.y
      }
    });
  }))), form);
};
/**
 * GoogleMaps
**/


var Map = function Map(_ref) {
  var onClick = _ref.onClick,
      onIdle = _ref.onIdle,
      children = _ref.children,
      style = _ref.style,
      options = _objectWithoutProperties(_ref, _excluded);

  var ref = external_react_.useRef(null);

  var _React$useState7 = external_react_.useState(),
      _React$useState8 = GoogleMaps_slicedToArray(_React$useState7, 2),
      map = _React$useState8[0],
      setMap = _React$useState8[1];

  external_react_.useEffect(function () {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]); // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946

  useDeepCompareEffectForMaps(function () {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);
  external_react_.useEffect(function () {
    if (map) {
      ["click", "idle"].forEach(function (eventName) {
        return google.maps.event.clearListeners(map, eventName);
      });

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", function () {
          return onIdle(map);
        });
      }
    }
  }, [map, onClick, onIdle]);
  return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("div", {
    ref: ref,
    style: style
  }), external_react_.Children.map(children, function (child) {
    if (external_react_.isValidElement(child)) {
      // set the map prop on the child component
      return external_react_.cloneElement(child, {
        map: map
      });
    }
  }));
};

var Marker = function Marker(options) {
  var _React$useState9 = external_react_.useState(),
      _React$useState10 = GoogleMaps_slicedToArray(_React$useState9, 2),
      marker = _React$useState10[0],
      setMarker = _React$useState10[1];

  external_react_.useEffect(function () {
    if (!marker) {
      setMarker(new google.maps.Marker());
    } // remove marker from map on unmount


    return function () {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  external_react_.useEffect(function () {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};

function useDeepCompareMemoize(value) {
  var ref = external_react_.useRef();

  if (value !== ref.current) {
    ref.current = value;
  }

  return ref.current;
}

var useDeepCompareEffectForMaps = function useDeepCompareEffectForMaps(callback, dependencies) {
  external_react_.useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

/* harmony default export */ const GoogleMaps = (App);
;// CONCATENATED MODULE: ./src/components/locations/LocationProvider.jsx
var LocationProvider_excluded = ["children"];

function LocationProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocationProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocationProvider_ownKeys(Object(source), !0).forEach(function (key) { LocationProvider_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocationProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LocationProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LocationProvider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LocationProvider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LocationProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var LocationContext = external_react_default().createContext({});
/**
 * LocationProvider
 *
 * used in NewsitemGallery, for linking to a gallery inside a location.
**/

var LocationProvider = function LocationProvider(_ref) {
  var children = _ref.children,
      props = LocationProvider_objectWithoutProperties(_ref, LocationProvider_excluded);

  // logg(props, 'LocationProvider')
  return /*#__PURE__*/external_react_default().createElement(LocationContext.Provider, {
    value: LocationProvider_objectSpread({}, props)
  }, children);
};

/* harmony default export */ const locations_LocationProvider = (LocationProvider);
;// CONCATENATED MODULE: ./src/components/locations/LocationsRestricted.jsx


var Page = function Page() {
  return /*#__PURE__*/external_react_default().createElement("h1", null, "This location is restricted (tmp placeholder)");
};

/* harmony default export */ const LocationsRestricted = (Page);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(219931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
;// CONCATENATED MODULE: ./src/components/photos/PhotosShow.jsx


/**
 * PhotosShow
**/

var PhotosShow = function PhotosShow(props) {
  (0,shared/* logg */.IJ)(props, 'PhotosShow');
  var item = props.item;
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("img", {
    src: item.original_url,
    alt: ""
  }), item.subhead);
};

/* harmony default export */ const photos_PhotosShow = (PhotosShow);
;// CONCATENATED MODULE: ./src/components/photos/index.jsx

// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/components/galleries/index.js + 1 modules
var galleries = __webpack_require__(878935);
// EXTERNAL MODULE: ./src/components/reports/index.jsx + 2 modules
var reports = __webpack_require__(563204);
// EXTERNAL MODULE: ./src/AppRouter.jsx
var AppRouter = __webpack_require__(448433);
// EXTERNAL MODULE: ./src/components/ItemModal/ItemModal.module.scss
var ItemModal_module = __webpack_require__(22675);
var ItemModal_module_default = /*#__PURE__*/__webpack_require__.n(ItemModal_module);
;// CONCATENATED MODULE: ./src/components/ItemModal/ItemModal.jsx













/**
 * ItemModal
 * @TODO: move to $components/application ?
 * shows items, but also I use it to create reports
 *
**/

var ItemModal = function ItemModal(props) {
  (0,shared/* logg */.IJ)(props, 'ItemModal');
  var item = props.item;

  if (!item) {
    return null;
  }

  var params = (0,external_react_router_dom_.useParams)();
  var history = (0,external_react_router_dom_.useHistory)();

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      showItem = _useContext.showItem,
      setShowItem = _useContext.setShowItem;

  var onClose = function onClose() {
    history.push(AppRouter/* appPaths.location */.X.location({
      slug: params.slug
    }));
    setShowItem(null);
  };

  if (!item.action) {
    item.action = shared.C.actions.show;
  } // set default, but @TODO: make sure I don't have to useState()


  external_react_modal_default().setAppElement('body');
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    className: "ItemModal ".concat((ItemModal_module_default()).ItemModal),
    isOpen: !!item,
    overlayClassName: (ItemModal_module_default()).ItemModalOverlay,
    portalClassName: (ItemModal_module_default()).ItemModalPortal
  }, /*#__PURE__*/external_react_default().createElement(dist/* ModalHeader */.xB, {
    onClose: onClose
  }, item.name), item.item_type === shared.C.item_types.photo && /*#__PURE__*/external_react_default().createElement(photos_PhotosShow, {
    item: item
  }), item.item_type === shared.C.item_types.report && item.action === shared.C.actions.show && /*#__PURE__*/external_react_default().createElement(reports/* ReportsShow */.X, {
    item: item,
    match: {
      params: {
        slug: item.reportname
      }
    }
  }), item.item_type === shared.C.item_types.report && item.action === shared.C.actions["new"] && /*#__PURE__*/external_react_default().createElement(reports/* ReportsForm */.v, null), item.item_type === shared.C.item_types.gallery && /*#__PURE__*/external_react_default().createElement(galleries/* GalleriesShow */.q, {
    match: {
      params: {
        slug: item.slug
      }
    }
  }), ".^.");
};

/* harmony default export */ const ItemModal_ItemModal = (ItemModal);
;// CONCATENATED MODULE: ./src/components/ItemModal/index.jsx

;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemGallery.jsx
var NewsitemGallery_excluded = ["children", "src"];

function NewsitemGallery_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NewsitemGallery_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NewsitemGallery_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var Images = external_styled_components_default().a.withConfig({
  displayName: "NewsitemGallery__Images",
  componentId: "sc-1milq4-0"
})(["display:block;position:relative;width:100%;max-width:600px;height:0;padding-bottom:min( 400px,66.66% );margin:auto;"]);
var Thumb0 = external_styled_components_default().div.withConfig({
  displayName: "NewsitemGallery__Thumb0",
  componentId: "sc-1milq4-1"
})(["border:solid ", ";border-width:1px 1px 1px 1px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:66.66%;height:0;padding-bottom:66.66%;background-image:url('", "');background-size:contain;"], function (p) {
  return p.theme.colors.text;
}, function (p) {
  return p.src;
});
var Thumb1 = external_styled_components_default().div.withConfig({
  displayName: "NewsitemGallery__Thumb1",
  componentId: "sc-1milq4-2"
})(["border:solid ", ";border-width:1px 1px 0 0;position:absolute;left:66.66%;top:0;width:33.33%;height:0;padding-bottom:33.33%;background-color:#dedede;background-image:url('", "');background-size:contain;"], function (p) {
  return p.theme.colors.text;
}, function (p) {
  return p.src;
});

var _Thumb2 = external_styled_components_default().div.withConfig({
  displayName: "NewsitemGallery___Thumb2",
  componentId: "sc-1milq4-3"
})(["border:solid ", ";border-width:1px 1px 1px 0;position:absolute;left:66.66%;top:50%;width:33.33%;height:0;padding-bottom:33.33%;display:flex;justify-content:center;align-items:flex-start;background-color:#c4c4c4;background-image:url('", "');background-size:contain;"], function (p) {
  return p.theme.colors.text;
}, function (p) {
  return p.src;
});

var Thumb2 = function Thumb2(_ref) {
  var children = _ref.children,
      src = _ref.src,
      props = NewsitemGallery_objectWithoutProperties(_ref, NewsitemGallery_excluded);

  return /*#__PURE__*/external_react_default().createElement(_Thumb2, {
    style: {
      background: src
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      marginTop: 'calc( 50% - 0.5em )'
    }
  }, children));
};
/**
 * NewsitemGallery
 * _vp_ 2022-09-12
 *
 * @TODO: variant is used, but move it to LocationProvider, rather than props. _vp_ 2022-09-12
**/


var NewsitemGallery = function NewsitemGallery(props) {
  // logg(props, 'NewsitemGallery')
  var item = props.item,
      variant = props.variant;

  var _useContext = (0,external_react_.useContext)(LocationContext),
      location_slug = _useContext.slug;

  var _useContext2 = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext2.useHistory;

  var history = useHistory();
  var href = AppRouter/* appPaths.gallery */.X.gallery({
    location_slug: location_slug,
    slug: item.slug
  }); // @TODO: only if purchased or free! IMPORTANT _vp_ 2022-09-12

  var _goto = function _goto(e) {
    e.preventDefault();
    history.push(href);
  };

  return /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemContainer, {
    item: item,
    variant: variant
  }, /*#__PURE__*/external_react_default().createElement(Images, {
    className: "Images",
    href: href,
    onClick: _goto
  }, /*#__PURE__*/external_react_default().createElement(Thumb0, {
    src: item.photos[0] && item.photos[0].thumb_url
  }), /*#__PURE__*/external_react_default().createElement(Thumb1, {
    src: item.photos[1] && item.photos[1].thumb_url
  }), /*#__PURE__*/external_react_default().createElement(Thumb2, {
    src: item.photos[2] && item.photos[2].thumb_url
  }, "(", item.n_photos, " photos)")));
};

NewsitemGallery.propTypes = {
  item: external_prop_types_default().shape({
    photos: (external_prop_types_default()).array.isRequired
  })
};
/* harmony default export */ const newsitems_NewsitemGallery = (NewsitemGallery);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemPhoto.jsx







var ImageLarge = external_styled_components_default().img.withConfig({
  displayName: "NewsitemPhoto__ImageLarge",
  componentId: "sc-2jnpzp-0"
})(["max-width:100%;"]);
var NewsitemPhoto_W0 = external_styled_components_default().div.withConfig({
  displayName: "NewsitemPhoto__W0",
  componentId: "sc-2jnpzp-1"
})(["display:flex;justify-content:center;"]);
/**
 * default
 */

var NewsitemPhoto = function NewsitemPhoto(props) {
  // logg(props, 'NewsitemPhoto')
  var item = props.item,
      variant = props.variant;
  return /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemContainer, {
    className: "Newsitem NewsitemPhoto",
    item: item,
    variant: variant
  }, /*#__PURE__*/external_react_default().createElement(NewsitemPhoto_W0, null, item.photos[0] && /*#__PURE__*/external_react_default().createElement(ImageLarge, {
    src: item.photos[0].large_url
  })));
};

NewsitemPhoto.propTypes = {
  item: external_prop_types_default().shape({
    photos: (external_prop_types_default()).array.isRequired // @TODO: this is wrong, just show one photo

  }),
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_NewsitemPhoto = (NewsitemPhoto);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemReport.jsx








/**
 * NewsitemReport
**/

var NewsitemReport = function NewsitemReport(props) {
  // logg(props, "NewsitemReport");
  var item = props.item,
      variant = props.variant;
  return /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemContainer, props);
};

NewsitemReport.propTypes = {
  item: (external_prop_types_default()).object.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_NewsitemReport = (NewsitemReport);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemVideo.jsx







/**
 * NewsitemVideo
 *
**/

var NewsitemVideo = function NewsitemVideo(props) {
  // logg(props, 'NewsitemVideo')
  var item = props.item,
      variant = props.variant;
  return /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemContainer, {
    item: item,
    variant: variant
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, item.youtube_id ? /*#__PURE__*/external_react_default().createElement("iframe", {
    className: "iframe",
    width: "100%",
    height: "315",
    src: "//www.youtube.com/embed/".concat(item.youtube_id),
    frameBorder: "0",
    allow: "autoplay; encrypted-media",
    allowFullScreen: true
  }) : /*#__PURE__*/external_react_default().createElement("video", {
    style: {
      maxWidth: '100%',
      maxHeight: '50vh'
    },
    preload: "metadata",
    height: "auto",
    controls: true
  }, /*#__PURE__*/external_react_default().createElement("source", {
    src: item.url,
    type: "video/mp4"
  }))));
};

NewsitemVideo.propTypes = {
  item: (external_prop_types_default()).object.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_NewsitemVideo = (NewsitemVideo);
;// CONCATENATED MODULE: ./src/components/newsitems/Newsitems.jsx
var Newsitems_excluded = ["children"];

function Newsitems_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Newsitems_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Newsitems_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var Pagination = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__Pagination",
  componentId: "sc-16s1m55-0"
})(["border:", "px solid cyan;display:flex;"], function (p) {
  return p.debug ? 1 : 0;
});
var CurrentPageNum = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__CurrentPageNum",
  componentId: "sc-16s1m55-1"
})(["text-decoration:bold;"]);
var PageNum = external_styled_components_default().a.withConfig({
  displayName: "Newsitems__PageNum",
  componentId: "sc-16s1m55-2"
})(["display:block;"]);
var Newsitems_W0 = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__W0",
  componentId: "sc-16s1m55-3"
})([""]);
var W1 = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__W1",
  componentId: "sc-16s1m55-4"
})(["position:relative;::before{content:'", "';position:absolute;top:2px;left:2px;color:var(--ion-debug-color);}"], function (p) {
  return p.debug && p._key;
});

var _EditModeActions = external_styled_components_default().div.withConfig({
  displayName: "Newsitems___EditModeActions",
  componentId: "sc-16s1m55-5"
})(["position:absolute;right:1em;top:1em;z-index:2;"]);

var EditModeActions = function EditModeActions(_ref) {
  var children = _ref.children,
      props = Newsitems_objectWithoutProperties(_ref, Newsitems_excluded);

  // logg(props, 'EditModeActions')
  var item = props.item;

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      editorMode = _useContext.editorMode;

  if (!editorMode) {
    return null;
  }

  var api = (0,shared/* useApi */.h_)();

  var removeStory = function removeStory(e) {
    if (!confirm('Are you sure?')) {
      return;
    }

    api.deleteNewsitem({
      id: item.newsitem_id
    }).then(function (resp) {
      (0,external_react_toastify_.toast)('Removed the story');
    })["catch"](function (err) {
      (0,shared/* logg */.IJ)('320 - cannot delete newsitem');
    });
  };

  return /*#__PURE__*/external_react_default().createElement(_EditModeActions, null, /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    onClick: removeStory
  }, "Remove Story"));
};
/**
 * Newsitems
 *
 * @TODO: variant should come from the location, right? _vp_ 2022-09-11
**/


var Newsitems = function Newsitems(props) {
  // logg(props, 'Newsitems')
  var _props$newsitems = props.newsitems,
      newsitems = _props$newsitems === void 0 ? [] : _props$newsitems,
      variant = props.variant;

  if (!newsitems.length) {
    return /*#__PURE__*/external_react_default().createElement("div", null, "No Newsitems");
  }

  var _useContext2 = (0,external_react_.useContext)(LocationContext),
      newsitems_pagination = _useContext2.newsitems_pagination,
      destination_slug = _useContext2.slug;

  var rendered = [];
  newsitems.map(function (newsitem, idx) {
    var premium_tier = newsitem.premium_tier || 0; // const icon = ICONS[premium_tier]

    var item;

    switch (newsitem.item_type) {
      case shared.C.item_types.gallery:
        item = /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemGallery, {
          item: newsitem,
          variant: variant
        });
        break;

      case shared.C.item_types.report:
        item = /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemReport, {
          item: newsitem,
          variant: variant
        });
        break;

      case shared.C.item_types.video:
        item = /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemVideo, {
          item: newsitem,
          variant: variant
        });
        break;

      case shared.C.item_types.photo:
        item = /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemPhoto, {
          item: newsitem,
          variant: variant
        });
        break;

      default:
        item = /*#__PURE__*/external_react_default().createElement(GenericNewsitem, {
          item: newsitem
        });
    }

    rendered.push( /*#__PURE__*/external_react_default().createElement(W1, {
      key: idx,
      _key: idx + 1,
      className: "premium-".concat(premium_tier),
      debug: (config_default()).debug
    }, /*#__PURE__*/external_react_default().createElement(EditModeActions, {
      item: newsitem
    }), item));
  });
  return /*#__PURE__*/external_react_default().createElement(Newsitems_W0, {
    className: "Newsitems",
    variant: variant
  }, rendered, /*#__PURE__*/external_react_default().createElement(Pagination, null, "Pages:", newsitems_pagination.previous && /*#__PURE__*/external_react_default().createElement(PageNum, {
    href: AppRouter/* appPaths.location */.X.location({
      slug: destination_slug,
      newsitems_page: newsitems_pagination.previous
    })
  }, "previous") || null, /*#__PURE__*/external_react_default().createElement(CurrentPageNum, null, newsitems_pagination.current), newsitems_pagination.next && /*#__PURE__*/external_react_default().createElement(PageNum, {
    href: AppRouter/* appPaths.location */.X.location({
      slug: destination_slug,
      newsitems_page: newsitems_pagination.next
    })
  }, "next") || null));
};

Newsitems.propTypes = {
  newsitems: (external_prop_types_default()).array.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_Newsitems = (Newsitems);
;// CONCATENATED MODULE: ./src/components/Votable/Votable.jsx
var Votable_excluded = ["fill"],
    _excluded2 = ["fill"];

function Votable_slicedToArray(arr, i) { return Votable_arrayWithHoles(arr) || Votable_iterableToArrayLimit(arr, i) || Votable_unsupportedIterableToArray(arr, i) || Votable_nonIterableRest(); }

function Votable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Votable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Votable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Votable_arrayLikeToArray(o, minLen); }

function Votable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Votable_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Votable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Votable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Votable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Votable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var FlexCol = external_styled_components_default()(dist/* FlexCol */.Ht).withConfig({
  displayName: "Votable__FlexCol",
  componentId: "sc-19mp3xk-0"
})(["color:var(--ion-color);"]);

var _IconUp = function _IconUp(_ref) {
  var fill = _ref.fill,
      props = Votable_objectWithoutProperties(_ref, Votable_excluded);

  return /*#__PURE__*/external_react_default().createElement("div", props, /*#__PURE__*/external_react_default().createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 124.138 124.138",
    fill: fill,
    style: {
      enableBackground: 'new 0 0 124.138 124.138'
    }
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M50.569,124.138h23.1c4.7,0,9-3.8,9-8.601V81.138c0-4.7,3.5-9,8.2-9h14.699c7.2,0,11.2-8.101,6.801-13.8l-44.101-55 c-3.5-4.5-10.2-4.4-13.6,0l-42.9,55c-4.4,5.699-0.4,13.8,6.8,13.8h14.8c4.7,0,8.3,4.2,8.3,9v34.399 C41.669,120.338,45.769,124.138,50.569,124.138z"
  })), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " ")));
};

var IconUp = external_styled_components_default()(_IconUp).withConfig({
  displayName: "Votable__IconUp",
  componentId: "sc-19mp3xk-1"
})(["cursor:pointer;"]);

var _IconDown = function _IconDown(_ref2) {
  var fill = _ref2.fill,
      props = Votable_objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/external_react_default().createElement("div", props, /*#__PURE__*/external_react_default().createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "20px",
    height: "20px",
    viewBox: "0 0 124.075 124.075",
    fill: fill,
    style: {
      enableBackground: 'new 0 0 124.075 124.075'
    }
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M54.628,120.7c3.5,4.5,10.2,4.5,13.601,0l44.1-54.9c4.4-5.7,0.4-13.8-6.8-13.8h-14.7c-4.7,0-8.2-4.2-8.2-9V8.6 c0-4.8-4.2-8.6-9-8.6h-23.1c-4.8,0-8.9,3.8-8.9,8.6V43c0,4.7-3.6,9-8.3,9h-14.8c-7.1,0-11.2,8-6.8,13.7L54.628,120.7z"
  })), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null)));
};

var IconDown = external_styled_components_default()(_IconDown).withConfig({
  displayName: "Votable__IconDown",
  componentId: "sc-19mp3xk-2"
})(["cursor:pointer;"]);
var WCount = external_styled_components_default().div.withConfig({
  displayName: "Votable__WCount",
  componentId: "sc-19mp3xk-3"
})(["text-align:center;"]);
/**
 * Votable
 *
**/

var Votable = function Votable(props) {
  // logg(props, 'Votable')
  var item = props.item;

  var _useContext = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen; // logg(useContext(AuthContext), 'Votable Used AuthContext')


  var api = (0,shared/* useApi */.h_)();

  var _useState = (0,external_react_.useState)('undefined' === typeof item.votes_score ? '-' : item.votes_score),
      _useState2 = Votable_slicedToArray(_useState, 2),
      votesScore = _useState2[0],
      setVotesScore = _useState2[1];

  var _useState3 = (0,external_react_.useState)("#cecece"),
      _useState4 = Votable_slicedToArray(_useState3, 2),
      upFill = _useState4[0],
      setUpFill = _useState4[1];

  var _useState5 = (0,external_react_.useState)("#cecece"),
      _useState6 = Votable_slicedToArray(_useState5, 2),
      downFill = _useState6[0],
      setDownFill = _useState6[1];

  var _useState7 = (0,external_react_.useState)(item.current_user_vote_value),
      _useState8 = Votable_slicedToArray(_useState7, 2),
      currentUserVoteValue = _useState8[0],
      setCurrentUserVoteValue = _useState8[1];

  (0,external_react_.useEffect)(function () {
    if (currentUserVoteValue === shared.C.vote_values.up) {
      setUpFill('#cc3333'); // @TODO: abstract these colors _vp_ 2022-09-19

      setDownFill('#cecece');
    }

    if (currentUserVoteValue === shared.C.vote_values.down) {
      setUpFill('#cecece');
      setDownFill('#cc3333');
    }
  }, [currentUserVoteValue]);

  var voteUp = function voteUp() {
    if (!currentUser.email) {
      setLoginModalOpen("Please login or register to upvote or downvote.");
      return;
    }

    if (currentUserVoteValue === shared.C.vote_values.up) {
      (0,dist/* logg */.IJ)('unvoting is not implemented!');
      (0,external_react_toastify_.toast)('unvoting is not implemented!');
      api.unvote();
    } else {
      api.vote({
        value: shared.C.vote_values.up,
        votee_class_name: 'Newsitem',
        votee_id: item.newsitem_id,
        voter_id: currentUser.id
      }).then(function (r) {
        (0,dist/* logg */.IJ)(r, 'upvoted');
        setUpFill('#cc3333');
        setCurrentUserVoteValue(shared.C.vote_values.up);

        if (currentUserVoteValue === shared.C.vote_values.down) {
          setDownFill('#cecece');
          setVotesScore(votesScore + 2);
        } else {
          setVotesScore(votesScore + 1);
        }
      }); // api.vote({
      //   value: C.vote_values.up,
      //   votee_class_name: item.item_type, // eg Video
      //   votee_id: item.id,
      //   voter_id: currentUser.id,
      // })
    }
  };

  var voteDown = function voteDown() {
    if (!currentUser.email) {
      setLoginModalOpen("Please login or register to upvote or downvote.");
      return;
    }

    if (currentUserVoteValue === shared.C.vote_values.down) {
      (0,dist/* logg */.IJ)('unvoting is not implemented!');
      (0,external_react_toastify_.toast)('unvoting is not implemented!');
      api.unvote();
    } else {
      api.vote({
        value: shared.C.vote_values.down,
        votee_class_name: 'Newsitem',
        votee_id: item.newsitem_id,
        voter_id: currentUser.id
      }).then(function (r) {
        (0,dist/* logg */.IJ)(r, 'downvoted');
        setDownFill('#cc3333');
        setCurrentUserVoteValue(shared.C.vote_values.down);

        if (currentUserVoteValue === shared.C.vote_values.up) {
          setUpFill('#cecece');
          setVotesScore(votesScore - 2);
        } else {
          setVotesScore(votesScore - 1);
        }
      });
    }
  };

  return /*#__PURE__*/external_react_default().createElement(FlexCol, null, /*#__PURE__*/external_react_default().createElement(IconUp, {
    onClick: voteUp,
    width: 20,
    height: 20,
    fill: upFill
  }), /*#__PURE__*/external_react_default().createElement(WCount, null, votesScore), /*#__PURE__*/external_react_default().createElement(IconDown, {
    onClick: voteDown,
    width: 20,
    height: 20,
    fill: downFill
  }));
};

Votable.propTypes = {
  item: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const Votable_Votable = (Votable);
;// CONCATENATED MODULE: ./src/components/Votable/index.jsx


/* harmony default export */ const components_Votable = (Votable_Votable);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemContainer.jsx
var NewsitemContainer_excluded = ["children"],
    NewsitemContainer_excluded2 = ["children"],
    _excluded3 = ["children"];

function NewsitemContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NewsitemContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NewsitemContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











 // alphabetized

var Col = external_styled_components_default().div.withConfig({
  displayName: "NewsitemContainer__Col",
  componentId: "sc-11t8rkk-0"
})(["display:flex;flex-direction:column;"]);

var _Row = external_styled_components_default().div.withConfig({
  displayName: "NewsitemContainer___Row",
  componentId: "sc-11t8rkk-1"
})(["display:flex;align-items:flex-start;margin-top:", ";"], function (p) {
  return p.theme.smallWidth;
});

var Row = function Row(_ref) {
  var children = _ref.children,
      props = NewsitemContainer_objectWithoutProperties(_ref, NewsitemContainer_excluded);

  return /*#__PURE__*/external_react_default().createElement(_Row, Object.assign({
    className: "Row"
  }, props), children);
};

var RowInline = external_styled_components_default().div.withConfig({
  displayName: "NewsitemContainer__RowInline",
  componentId: "sc-11t8rkk-2"
})(["> *{display:inline;}"]);
var A = external_styled_components_default().a.withConfig({
  displayName: "NewsitemContainer__A",
  componentId: "sc-11t8rkk-3"
})(["color:var(--ion-color);text-decoration:none;"]);
var TitleA = external_styled_components_default().a.withConfig({
  displayName: "NewsitemContainer__TitleA",
  componentId: "sc-11t8rkk-4"
})(["margin-top:0;margin-bottom:0;color:var(--ion-color);font-size:2em;text-decoration:none;"]); // @TODO: better management of variant, for ParagonAustin and such _vp_ 2022-09-12

var NewsitemContainer_W0 = function W0(_ref2) {
  var children = _ref2.children,
      props = NewsitemContainer_objectWithoutProperties(_ref2, NewsitemContainer_excluded2);

  // logg(props, 'W0')
  var variant = props.variant;

  switch (variant) {
    case shared.C.variants.bordered:
      return /*#__PURE__*/external_react_default().createElement(shared/* WBordered */.xP, props, children);

    default:
      throw 'not implemented, how do I show a newsitem without a border?';
  }
};
/**
 * NewsitemContainer
 *
 * @TODO: should be config with variants: standard container, container for a single photo, etc.
 * but for now I'll use item.item_type
 * _vp_ 2022-03-13
 *
**/


var NewsitemContainer = function NewsitemContainer(_ref3) {
  var _item$subhead;

  var children = _ref3.children,
      props = NewsitemContainer_objectWithoutProperties(_ref3, _excluded3);

  // logg(props, 'NewsitemContainer')
  var className = props.className,
      item = props.item,
      variant = props.variant;

  var _useContext = (0,external_react_.useContext)(LocationContext),
      destination_slug = _useContext.slug; // logg(useContext(LocationContext), 'NewsitemContainer Used LocationContext')


  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext2.itemToUnlock,
      setItemToUnlock = _useContext2.setItemToUnlock,
      layout = _useContext2.layout,
      showItem = _useContext2.showItem,
      setShowItem = _useContext2.setShowItem; // logg(useContext(TwofoldContext), 'NewsitemContainerUsedContext')


  var history = (0,external_react_router_dom_.useHistory)();
  var href = AppRouter/* appPaths.item */.X.item({
    item: item,
    location: {
      slug: destination_slug
    }
  });

  var navigateToItem = function navigateToItem(e) {
    e.preventDefault();

    if (item.is_premium && !item.is_purchased) {
      setItemToUnlock(item);
    } else {
      history.push(href);
    }
  };

  return /*#__PURE__*/external_react_default().createElement(NewsitemContainer_W0, {
    className: className,
    variant: variant
  }, children, /*#__PURE__*/external_react_default().createElement(Row, null, /*#__PURE__*/external_react_default().createElement(Col, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/external_react_default().createElement(components_Votable, {
    item: item
  })), /*#__PURE__*/external_react_default().createElement(Col, {
    style: {
      overflowWrap: 'break-word'
    }
  }, /*#__PURE__*/external_react_default().createElement(RowInline, null, /*#__PURE__*/external_react_default().createElement(newsitems_ItemIcon, item), /*#__PURE__*/external_react_default().createElement(TitleA, {
    href: href,
    onClick: navigateToItem
  }, item.name)), /*#__PURE__*/external_react_default().createElement(application/* Metaline */._I, item))), ((_item$subhead = item.subhead) === null || _item$subhead === void 0 ? void 0 : _item$subhead.length) && /*#__PURE__*/external_react_default().createElement(A, {
    className: "subhead",
    href: href,
    onClick: navigateToItem,
    dangerouslySetInnerHTML: {
      __html: item.subhead
    }
  }) || null);
};

NewsitemContainer.propTypes = {
  item: (external_prop_types_default()).object.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_NewsitemContainer = (NewsitemContainer);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(472105);
;// CONCATENATED MODULE: ./src/components/newsitems/ItemIcon.jsx
var ItemIcon_excluded = ["fill", "w", "h"],
    ItemIcon_excluded2 = ["fill", "w", "h"],
    ItemIcon_excluded3 = ["fill", "w", "h"],
    _excluded4 = ["fill", "w", "h"],
    _excluded5 = ["fill", "w", "h"],
    _excluded6 = ["children"];

function ItemIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ItemIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ItemIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ReportIcon = function ReportIcon() {
  return /*#__PURE__*/React.createElement("div", null, "@TODO: ReportIcon");
};

var _Icon = external_styled_components_default().span.withConfig({
  displayName: "ItemIcon___Icon",
  componentId: "sc-1fvs9d6-0"
})(["margin:0 ", " 0 0;"], function (p) {
  return p.theme.smallWidth;
});

var IconGallery = function IconGallery(_ref) {
  var fill = _ref.fill,
      w = _ref.w,
      h = _ref.h,
      props = ItemIcon_objectWithoutProperties(_ref, ItemIcon_excluded);

  var theme = (0,external_styled_components_.useTheme)();
  fill = fill ? fill : theme.colors.text;
  w = w ? w : 24;
  h = h ? h : 24;
  return /*#__PURE__*/external_react_default().createElement(_Icon, {
    className: "IconGem"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: w,
    height: h,
    fill: fill,
    viewBox: "0 0 45.964 45.964",
    style: {
      enableBackground: 'new 0 0 45.964 45.964'
    }
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M7.071,30.834V11.062H4.042C1.803,11.062,0,12.893,0,15.13v26.732c0,2.24,1.803,4.051,4.042,4.051h26.733    c2.238,0,4.076-1.811,4.076-4.051v-2.92H15.179C10.733,38.943,7.071,35.281,7.071,30.834z"
  }), "   ", /*#__PURE__*/external_react_default().createElement("path", {
    d: "M41.913,0.05H15.179c-2.238,0-4.066,1.813-4.066,4.051v26.733c0,2.241,1.829,4.067,4.066,4.067h26.734    c2.237,0,4.051-1.826,4.051-4.067V4.102C45.964,1.862,44.15,0.05,41.913,0.05z M41.363,28.589    c-0.223,0.412-0.652,0.656-1.12,0.656H17.336c-0.403,0-0.782-0.18-1.022-0.502c-0.24-0.324-0.313-0.736-0.197-1.123l3.277-10.839    c0.216-0.713,0.818-1.24,1.554-1.361c0.736-0.12,1.476,0.19,1.908,0.797l4.582,6.437c0.617,0.867,1.812,1.082,2.689,0.484    l4.219-2.865c0.434-0.295,0.967-0.402,1.48-0.299c0.515,0.102,0.966,0.408,1.253,0.848l4.229,6.472    C41.564,27.687,41.585,28.179,41.363,28.589z"
  }), "  "), " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " ")));
};

var IconGem = function IconGem(_ref2) {
  var fill = _ref2.fill,
      w = _ref2.w,
      h = _ref2.h,
      props = ItemIcon_objectWithoutProperties(_ref2, ItemIcon_excluded2);

  var theme = (0,external_styled_components_.useTheme)();
  fill = fill ? fill : theme.colors.gold;
  w = w ? w : 24;
  h = h ? h : 24;
  return /*#__PURE__*/external_react_default().createElement(_Icon, {
    className: "IconGem"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    viewBox: "0 -32 576 576",
    xmlns: "http://www.w3.org/2000/svg",
    width: w,
    height: h,
    fill: fill
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
  })));
};

var IconGlasses = function IconGlasses(_ref3) {
  var fill = _ref3.fill,
      w = _ref3.w,
      h = _ref3.h,
      props = ItemIcon_objectWithoutProperties(_ref3, ItemIcon_excluded3);

  var theme = (0,external_styled_components_.useTheme)();
  fill = fill ? fill : theme.colors.cyan;
  w = w ? w : 24;
  h = h ? h : 24;
  return /*#__PURE__*/external_react_default().createElement(_Icon, {
    className: "IconGlasses"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 297 297",
    style: {
      enableBackground: 'new 0 0 297 297'
    },
    width: w,
    height: h,
    fill: fill
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M115.167,101.47H24.012C10.751,101.469,0,112.22,0,125.482v43.477c0,14.674,11.896,26.57,26.57,26.57h39.67     c21.977,0,41.223-14.737,46.954-35.953l10.297-45.336c0.633-3.567-0.276-7.232-2.431-9.804     C120.132,103.328,118.132,101.47,115.167,101.47z M24.542,138.106c-1.945,0-3.888-0.742-5.373-2.225     c-2.967-2.968-2.967-7.779,0-10.747l5.428-5.428c2.968-2.966,7.779-2.966,10.747,0c2.967,2.968,2.967,7.779,0,10.747     l-5.428,5.428C28.432,137.364,26.487,138.106,24.542,138.106z M64.111,130.453l-21.71,21.71     c-1.484,1.483-3.429,2.225-5.374,2.225c-1.945,0-3.889-0.742-5.374-2.225c-2.967-2.968-2.967-7.779,0-10.747l21.71-21.71     c2.968-2.966,7.779-2.966,10.747,0C67.078,122.674,67.078,127.485,64.111,130.453z"
  }), "    ", /*#__PURE__*/external_react_default().createElement("path", {
    d: "M160.885,106.524h-26.517c0.575,3.345,0.587,6.828-0.021,10.307l-2.22,12.693h31l-2.22-12.693     C160.299,113.352,160.311,109.868,160.885,106.524z"
  }), "    ", /*#__PURE__*/external_react_default().createElement("path", {
    d: "M272.988,101.47h-94.649c-2.965,0-4.965,1.858-5.893,2.966c-2.155,2.572-3.064,6.236-2.43,9.804l10.296,45.336     c5.731,21.216,24.977,35.954,46.954,35.954h43.164c14.674-0.001,26.57-11.897,26.57-26.571v-43.477     C297,112.22,286.249,101.47,272.988,101.47z M192.422,135.881c-2.967-2.968-2.967-7.779,0-10.747l5.428-5.428     c2.968-2.966,7.779-2.966,10.747,0c2.967,2.968,2.967,7.779,0,10.747l-5.428,5.428c-1.484,1.483-3.429,2.225-5.374,2.225     C195.851,138.106,193.906,137.364,192.422,135.881z M237.363,130.453l-21.71,21.71c-1.484,1.483-3.429,2.225-5.374,2.225     c-1.945,0-3.889-0.742-5.374-2.225c-2.967-2.968-2.967-7.779,0-10.747l21.71-21.71c2.968-2.966,7.779-2.966,10.747,0     C240.33,122.674,240.33,127.485,237.363,130.453z"
  }), "   "), "  "), " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " ")));
};

var IconReport = function IconReport(_ref4) {
  var fill = _ref4.fill,
      w = _ref4.w,
      h = _ref4.h,
      props = ItemIcon_objectWithoutProperties(_ref4, _excluded4);

  var theme = (0,external_styled_components_.useTheme)();
  fill = fill ? fill : theme.colors.text;
  w = w ? w : 24;
  h = h ? h : 24;
  return /*#__PURE__*/external_react_default().createElement(_Icon, {
    className: "IconReport"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 184.153 184.153",
    style: {
      enableBackground: 'new 0 0 184.153 184.153'
    },
    width: w,
    height: h,
    fill: fill
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M129.318,0H26.06c-1.919,0-3.475,1.554-3.475,3.475v177.203c0,1.92,1.556,3.475,3.475,3.475h132.034 c1.919,0,3.475-1.554,3.475-3.475V34.131C161.568,22.011,140.771,0,129.318,0z M154.62,177.203H29.535V6.949h99.784 c7.803,0,25.301,18.798,25.301,27.182V177.203z"
  }), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M71.23,76.441c15.327,0,27.797-12.47,27.797-27.797c0-15.327-12.47-27.797-27.797-27.797 c-15.327,0-27.797,12.47-27.797,27.797C43.433,63.971,55.902,76.441,71.23,76.441z M71.229,27.797 c11.497,0,20.848,9.351,20.848,20.847c0,0.888-0.074,1.758-0.183,2.617l-18.071-2.708L62.505,29.735    C65.162,28.503,68.112,27.797,71.229,27.797z M56.761,33.668l11.951,19.869c0.534,0.889,1.437,1.49,2.462,1.646l18.669,2.799    c-3.433,6.814-10.477,11.51-18.613,11.51c-11.496,0-20.847-9.351-20.847-20.847C50.381,42.767,52.836,37.461,56.761,33.668z"
  }), "   ", /*#__PURE__*/external_react_default().createElement("rect", {
    x: "46.907",
    y: "90.339",
    width: "73.058",
    height: "6.949"
  }), "   ", /*#__PURE__*/external_react_default().createElement("rect", {
    x: "46.907",
    y: "107.712",
    width: "48.644",
    height: "6.949"
  }), "   ", /*#__PURE__*/external_react_default().createElement("rect", {
    x: "46.907",
    y: "125.085",
    width: "62.542",
    height: "6.949"
  }), "  "))), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null)));
};

var IconVideo = function IconVideo(_ref5) {
  var fill = _ref5.fill,
      w = _ref5.w,
      h = _ref5.h,
      props = ItemIcon_objectWithoutProperties(_ref5, _excluded5);

  var theme = (0,external_styled_components_.useTheme)();
  fill = fill ? fill : theme.colors.text;
  w = w ? w : 24;
  h = h ? h : 24;
  return /*#__PURE__*/external_react_default().createElement(_Icon, {
    className: "IconVideo"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: fill,
    d: "M9.89989 0H29.6999C31.5149 0 32.9999 1.485 32.9999 3.3V23.1C32.9999 24.915 31.5149 26.4 29.6999 26.4H9.89989C8.08489 26.4 6.59989 24.915 6.59989 23.1V3.3C6.59989 1.485 8.08489 0 9.89989 0ZM0 6.6H3.3V29.7H26.4V33H3.3C1.485 33 0 31.515 0 29.7V6.6ZM29.7 23.1H9.89997V3.3H29.7V23.1ZM16.5001 20.625V5.775L26.4001 13.2L16.5001 20.625Z"
  })));
};

var _W0 = external_styled_components_default().div.withConfig({
  displayName: "ItemIcon___W0",
  componentId: "sc-1fvs9d6-1"
})(["display:inline;box-sizing:border-box;"]);

var ItemIcon_W0 = function W0(_ref6) {
  var children = _ref6.children,
      props = ItemIcon_objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/external_react_default().createElement(_W0, Object.assign({
    className: "ItemIcon"
  }, props), children);
};
/**
 * Displays the appropriate icon.
 *
 * @param [Boolean] props.isPurchased
 * @param [Number] props.premiumTier
 * @param [String] props.kind
 */


var ItemIcon = function ItemIcon(props) {
  // logg(props, "ItemIcon")
  var is_purchased = props.is_purchased,
      item_type = props.item_type,
      premium_tier = props.premium_tier;
  var out = [];

  if (premium_tier > 0) {
    if (is_purchased) {
      out.push( /*#__PURE__*/external_react_default().createElement(IconGlasses, {
        key: "IconGlasses"
      }));
    } else {
      out.push( /*#__PURE__*/external_react_default().createElement(IconGem, {
        key: "IconGem"
      }));
    }
  }

  switch (item_type) {
    case shared.C.item_types.gallery:
      out.push( /*#__PURE__*/external_react_default().createElement(IconGallery, {
        key: "IconGallery"
      }));
      break;

    case shared.C.item_types.report:
      out.push( /*#__PURE__*/external_react_default().createElement(IconReport, {
        key: "IconReport"
      }));
      break;

    case shared.C.item_types.video:
      out.push( /*#__PURE__*/external_react_default().createElement(IconVideo, {
        key: "IconVideo"
      }));
      break;

    case shared.C.item_types.location:
      // nothing, we're inside a Marker
      break;

    default:
      out.push( /*#__PURE__*/external_react_default().createElement("span", {
        key: "unknown-kind"
      }, "[\xA0?\xA0]"));
  }

  return /*#__PURE__*/external_react_default().createElement(ItemIcon_W0, null, out);
};
ItemIcon.propTypes = {
  is_premium: (external_prop_types_default()).bool,
  is_purchased: (external_prop_types_default()).bool,
  // .isRequired,
  item_type: (external_prop_types_default()).string.isRequired,
  premium_tier: (external_prop_types_default()).number
};
/* harmony default export */ const newsitems_ItemIcon = (ItemIcon);
;// CONCATENATED MODULE: ./src/components/newsitems/index.js
/*
 * $components / newsitems / index.jsx
 */



/* G */

var GenericNewsitem = function GenericNewsitem(props) {
  // logg(props, 'GenericNewsitem')
  var item = props.item;
  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  }));
};
/* N */






/* I */

var ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
};

/* V */
;// CONCATENATED MODULE: ./src/components/markers/Marker.jsx
var Marker_excluded = ["children"],
    Marker_excluded2 = ["className"],
    Marker_excluded3 = ["children"];

function Marker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Marker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Marker_ownKeys(Object(source), !0).forEach(function (key) { Marker_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Marker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Marker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Marker_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Marker_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Marker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * Wrapper Bordered Item. It is padded, margined.
**/

var Marker_W0 = external_styled_components_default().a.withConfig({
  displayName: "Marker___W0",
  componentId: "sc-lvan3-0"
})(["border:2px solid var(--ion-border-color);border-radius:var(--ion-border-radius);background:var(--ion-card-background-color);color:var(--ion-color);display:block;text-decoration:none;margin:0 .5em .5em 0;padding:.5em;text-align:center;width:18%;max-width:140px;min-width:120px;"]);

var MarkerEmpty = external_styled_components_default().div.withConfig({
  displayName: "Marker__MarkerEmpty",
  componentId: "sc-lvan3-1"
})(["width:18%;max-width:140px;min-width:120px;height:0;border:none;padding:0;margin:0 .5em 0 0;"]);

var markers_Marker_W0 = function W0(_ref) {
  var children = _ref.children,
      _props = Marker_objectWithoutProperties(_ref, Marker_excluded);

  var _props$className = _props.className,
      className = _props$className === void 0 ? '' : _props$className,
      props = Marker_objectWithoutProperties(_props, Marker_excluded2);

  return /*#__PURE__*/external_react_default().createElement(Marker_W0, Object.assign({
    className: "WBorderedItem ".concat(className)
  }, props), children);
};
/**
 * Marker
**/


var Marker_Marker = function Marker(_ref2) {
  var children = _ref2.children,
      props = Marker_objectWithoutProperties(_ref2, Marker_excluded3);

  // logg(props, 'Marker')
  var marker = props.marker;

  var _useContext = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext.useHistory;

  var history = useHistory();

  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext2.itemToUnlock,
      setItemToUnlock = _useContext2.setItemToUnlock,
      showUrl = _useContext2.showUrl,
      setShowUrl = _useContext2.setShowUrl;

  var href = AppRouter/* appPaths.location */.X.location({
    slug: marker.destination_slug
  });

  var _goto = function _goto(e) {
    e.preventDefault();

    if (marker.premium_tier && !marker.is_purchased) {
      setItemToUnlock(marker);
    } else {
      if (marker.url) {
        setShowUrl(marker.url); // @TODO: this should be encoded in the (server-side) router eventually. _vp_ 2022-09-11
      } else {
        history.push(href);
      }
    }
  };

  return /*#__PURE__*/external_react_default().createElement(markers_Marker_W0, Object.assign({
    onClick: _goto
  }, Marker_objectSpread({
    href: href
  }, props)), /*#__PURE__*/external_react_default().createElement("img", {
    src: marker.title_img_path
  }), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement(newsitems_ItemIcon, marker), " ", marker.name);
};

Marker_Marker.propTypes = {
  marker: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const markers_Marker = (Marker_Marker);
;// CONCATENATED MODULE: ./src/components/markers/MarkerEditModal.jsx





/**
 * MarkerEditModal
 *
 * For editing/adding markers.
**/

var MarkerEditModal = function MarkerEditModal(props) {
  var _useContext = useContext(MarkerContext),
      MarkerEditModalOpen = _useContext.MarkerEditModalOpen,
      setMarkerEditModalOpen = _useContext.setMarkerEditModalOpen; // logg(useContext(MarkerContext), 'MarkerEditModalUsedContext')


  return /*#__PURE__*/React.createElement(Modal, {
    className: "MarkerEditModal ".concat(styles.MarkerEditModal),
    isOpen: MarkerEditModalOpen
  }, /*#__PURE__*/React.createElement("h1", null, "marker modal", /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return setMarkerEditModalOpen(false);
    }
  }, "[x]")), /*#__PURE__*/React.createElement(MarkerForm, null));
};

/* harmony default export */ const markers_MarkerEditModal = ((/* unused pure expression or super */ null && (MarkerEditModal)));

;// CONCATENATED MODULE: ./src/components/markers/MarkersList.jsx
var MarkersList_excluded = ["children", "variant"];

function MarkersList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MarkersList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MarkersList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/* W */

var MarkersList_W0 = external_styled_components_default().div.withConfig({
  displayName: "MarkersList___W0",
  componentId: "sc-i7mf08-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]);

var markers_MarkersList_W0 = function W0(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = MarkersList_objectWithoutProperties(_ref, MarkersList_excluded);

  if (variant === shared.C.variants.bordered) {
    return /*#__PURE__*/external_react_default().createElement(shared/* WBordered */.xP, props, children);
  } else {
    return /*#__PURE__*/external_react_default().createElement(MarkersList_W0, props, children);
  }
};
/**
 * MarkersList
 * @TODO: review variant, it's currently always bordered. _vp_ 2022-09-11
 *
**/


var MarkersList = function MarkersList(props) {
  // logg(props, 'MarkersList')
  var variant = props.variant; // @TODO: re-add variant. It was there for ParagonAustin, WasyaCo, locations like that. _vp_ 2022-09-11

  var markers = [];
  props.markers.map(function (m, idx) {
    if (m.destination_slug) {
      markers.push( /*#__PURE__*/external_react_default().createElement(markers_Marker, {
        key: idx,
        marker: m
      }));
    }
  }); // Zero-height padding for the last row.

  var times = 12 - markers.length % 12;

  for (var i = 0; i < times; i++) {
    markers.push( /*#__PURE__*/external_react_default().createElement(MarkerEmpty, {
      key: "padded-".concat(i)
    }));
  }

  return /*#__PURE__*/external_react_default().createElement(markers_MarkersList_W0, {
    className: "MarkersList"
  }, markers);
};

MarkersList.propTypes = {
  markers: external_prop_types_default().arrayOf(external_prop_types_default().shape({
    destination_slug: (external_prop_types_default()).string
  })).isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const markers_MarkersList = (MarkersList);
;// CONCATENATED MODULE: ./src/components/markers/MarkerForm.jsx




var Actions = external_styled_components_default().div.withConfig({
  displayName: "MarkerForm__Actions",
  componentId: "sc-1qq3e62-0"
})([""]);
var MarkerForm_W0 = external_styled_components_default().div.withConfig({
  displayName: "MarkerForm__W0",
  componentId: "sc-1qq3e62-1"
})([""]);
/**
 * MarkerForm
**/

var MarkerForm_MarkerForm = function MarkerForm(props) {
  // logg(props, 'MarkerForm')
  var item = props.item;
  return /*#__PURE__*/external_react_default().createElement(MarkerForm_W0, null, /*#__PURE__*/external_react_default().createElement("form", null, /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "text",
    name: "name"
  }), " name"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "text",
    name: "name"
  }), " destination"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "file",
    name: "title_image"
  }), "map image"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "file",
    name: "title_image"
  }), "title image"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("checkbox", {
    name: "is_active"
  }), " active?"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("checkbox", {
    name: "is_public"
  }), " public?"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "text",
    name: "url"
  }), " url"), /*#__PURE__*/external_react_default().createElement("textarea", null), " description", /*#__PURE__*/external_react_default().createElement(Actions, null, /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit"
  }, "Create"))));
};

MarkerForm_MarkerForm.propTypes = {};
/* harmony default export */ const markers_MarkerForm = ((/* unused pure expression or super */ null && (MarkerForm_MarkerForm)));
;// CONCATENATED MODULE: ./src/components/markers/index.jsx
var markers_excluded = (/* unused pure expression or super */ null && (["children"]));

function markers_slicedToArray(arr, i) { return markers_arrayWithHoles(arr) || markers_iterableToArrayLimit(arr, i) || markers_unsupportedIterableToArray(arr, i) || markers_nonIterableRest(); }

function markers_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function markers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return markers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return markers_arrayLikeToArray(o, minLen); }

function markers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function markers_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function markers_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function markers_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = markers_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function markers_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var markers_MarkerContext = external_react_default().createContext({});
/**
 * MarkerProvider - for editing, right? _vp_ 2022-09-18
**/

var MarkerContextProvider = function MarkerContextProvider(_ref) {
  var children = _ref.children,
      props = markers_objectWithoutProperties(_ref, markers_excluded);

  var _useState = useState(),
      _useState2 = markers_slicedToArray(_useState, 2),
      marker = _useState2[0],
      setMarker = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = markers_slicedToArray(_useState3, 2),
      MarkerEditModalOpen = _useState4[0],
      setMarkerEditModalOpen = _useState4[1];

  return /*#__PURE__*/React.createElement(markers_MarkerContext.Provider, {
    value: {
      marker: marker,
      setMarker: setMarker,
      MarkerEditModalOpen: MarkerEditModalOpen,
      setMarkerEditModalOpen: setMarkerEditModalOpen
    }
  }, children);
};






;// CONCATENATED MODULE: ./src/components/locations/LocationsShow.jsx
var LocationsShow_excluded = ["fill"],
    LocationsShow_excluded2 = ["children"],
    LocationsShow_excluded3 = ["children"];

function LocationsShow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocationsShow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocationsShow_ownKeys(Object(source), !0).forEach(function (key) { LocationsShow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocationsShow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LocationsShow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LocationsShow_slicedToArray(arr, i) { return LocationsShow_arrayWithHoles(arr) || LocationsShow_iterableToArrayLimit(arr, i) || LocationsShow_unsupportedIterableToArray(arr, i) || LocationsShow_nonIterableRest(); }

function LocationsShow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LocationsShow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LocationsShow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LocationsShow_arrayLikeToArray(o, minLen); }

function LocationsShow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LocationsShow_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LocationsShow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function LocationsShow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LocationsShow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LocationsShow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














/**
 * MoveLeftRightIcon
**/

var _MoveLeftRightIcon = function _MoveLeftRightIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'var(--ion-inactive-color)' : _ref$fill,
      props = LocationsShow_objectWithoutProperties(_ref, LocationsShow_excluded);

  return /*#__PURE__*/external_react_default().createElement("div", props, /*#__PURE__*/external_react_default().createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 -0.5 17 17",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("defs", null), /*#__PURE__*/external_react_default().createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_default().createElement("g", {
    transform: "translate(1.000000, 0.000000)",
    fill: fill
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M5.958,8.951 L5.958,7.007 L3.979,7.007 L3.97900001,5.06677246 C3.97900001,4.57762889 0.265,7.332 0.265,7.332 C-0.095,7.696 -0.095,8.29 0.264,8.655 C0.264,8.655 3.97900001,11.4734899 3.97900001,10.9475709 L3.979,8.951 L5.958,8.951 Z"
  }), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M10.002,7 L10.002,8.973 L12.048,8.973 L12.048,11 C12.048,11.4553833 15.695,8.684 15.695,8.684 C16.055,8.336 16.055,7.771 15.695,7.423 C15.695,7.423 11.980774,4.64377734 11.980774,5.03546143 L12.048,7 L10.002,7 Z"
  }), /*#__PURE__*/external_react_default().createElement("rect", {
    x: "7",
    y: "0",
    width: "2",
    height: "16"
  })))));
};

var MoveLeftRightIcon = function MoveLeftRightIcon() {
  return /*#__PURE__*/external_react_default().createElement(_MoveLeftRightIcon, null);
};
/**
 * Description
 *
 * @TODO: move Description into shared ?
**/


var _D = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___D",
  componentId: "sc-j8biii-0"
})([""]);

var Description = function Description(_ref2) {
  var _ref2$item = _ref2.item,
      item = _ref2$item === void 0 ? {} : _ref2$item;

  if (!item.description) {
    return;
  }

  return /*#__PURE__*/external_react_default().createElement(_D, {
    className: "Description",
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  });
};
/**
 * Handle
**/


var _Handle = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___Handle",
  componentId: "sc-j8biii-1"
})(["border:", "px solid green;position:absolute;top:0;bottom:0;left:", ";right:", ";display:flex;flex-direction:column;align-items:center;width:var(--handle-width);z-index:2;"], function (p) {
  return p.debug ? 1 : 0;
}, function (p) {
  return p.foldedLeft ? 0 : p.foldedRight ? 'auto' : "".concat(p.twofoldPercent * 100, "%");
}, function (p) {
  return p.foldedRight ? 0 : 'auto';
});

var Handle = function Handle(props) {
  _objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      folded = _useContext.folded,
      setFolded = _useContext.setFolded,
      foldedLeft = _useContext.foldedLeft,
      foldedRight = _useContext.foldedRight,
      twofoldPercent = _useContext.twofoldPercent,
      setTwofoldPercent = _useContext.setTwofoldPercent; // logg(useContext(TwofoldContext), 'Handle Used TwofoldContext')


  var _useWindowSize = (0,shared/* useWindowSize */.iP)(),
      _useWindowSize2 = LocationsShow_slicedToArray(_useWindowSize, 1),
      w = _useWindowSize2[0];

  var _useState = (0,external_react_.useState)(),
      _useState2 = LocationsShow_slicedToArray(_useState, 2),
      offsetX = _useState2[0],
      setOffsetX = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = LocationsShow_slicedToArray(_useState3, 2),
      dragging = _useState4[0],
      setDragging = _useState4[1];

  var foldLeft = function foldLeft() {
    if (folded === shared.C.foldedRight) {
      setFolded(shared.C.foldedCenter);
    } else {
      setFolded(shared.C.foldedLeft);
    }
  };

  var foldRight = function foldRight() {
    if (folded === shared.C.foldedLeft) {
      setFolded(shared.C.foldedCenter);
    } else {
      setFolded(shared.C.foldedRight);
    }
  };

  var onMouseDown = function onMouseDown(e) {
    setDragging(true);
    setOffsetX(e.pageX);
  };

  var onMouseMove = function onMouseMove(e) {
    if (!dragging) {
      return;
    }

    if (e.clientX === 0) {
      return;
    }

    var movedBy = e.clientX - offsetX;

    if (movedBy === 0) {
      return;
    }

    var movedByPercent = movedBy / w;
    setTwofoldPercent(function (prev) {
      return prev + movedByPercent;
    });
  };

  var onMouseUp = function onMouseUp(e) {
    setDragging(false); // document.removeEventListener('mousemove', onMouseMove)
    // document.removeEventListener('mousedown', onMouseDown)
  }; // draggable="true"


  return /*#__PURE__*/external_react_default().createElement(_Handle, {
    className: "Handle",
    debug: (config_default()).debug,
    foldedLeft: foldedLeft,
    foldedRight: foldedRight,
    twofoldPercent: twofoldPercent
  }, /*#__PURE__*/external_react_default().createElement(shared/* ChevronLeft */.s$, {
    onClick: foldLeft
  }), /*#__PURE__*/external_react_default().createElement(shared/* ChevronRight */._Q, {
    onClick: foldRight
  }), /*#__PURE__*/external_react_default().createElement(MoveLeftRightIcon, null), [shared.C.foldedRight, shared.C.foldedLeft].indexOf(folded) !== -1 && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* LongLine */.LW, {
    orientation: shared.C.vertical
  }));
}; // @TODO: belongs in TwofoldLayout _vp_ 2022-09-21


var IframeModal = function IframeModal(props) {
  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      showUrl = _useContext2.showUrl,
      setShowUrl = _useContext2.setShowUrl;

  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    ariaHideApp: false,
    isOpen: !!showUrl
  }, /*#__PURE__*/external_react_default().createElement("span", {
    onClick: function onClick() {
      setShowUrl(false);
    }
  }, "[x]"), /*#__PURE__*/external_react_default().createElement("iframe", {
    height: "100%",
    style: {
      width: "100%",
      height: "100%"
    },
    scrolling: "yes",
    src: props.src,
    frameBorder: "no",
    allowtransparency: "true",
    allowFullScreen: true
  }));
};
/**
 * Left
**/


var _Left = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___Left",
  componentId: "sc-j8biii-2"
})(["background:", ";flex:", ";overflow:hidden;display:flex;flex-direction:column;margin-right:", ";height:calc(100vh - ", " - ", ");"], function (p) {
  return p.theme.colors.background;
}, function (p) {
  return p.foldedRight ? '99%' : "".concat(p.twofoldPercent * 100, "%");
}, function (p) {
  return p.foldedRight ? '30px' : 0;
}, function (p) {
  return p.theme.borderWidth;
}, function (p) {
  return p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight;
});

var Left = function Left(_ref3) {
  var children = _ref3.children,
      props = LocationsShow_objectWithoutProperties(_ref3, LocationsShow_excluded2);

  var _useContext3 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext3.bottomDrawerOpen,
      folded = _useContext3.folded,
      foldedLeft = _useContext3.foldedLeft,
      foldedRight = _useContext3.foldedRight,
      twofoldPercent = _useContext3.twofoldPercent;

  if (foldedLeft) {
    return null;
  }

  return /*#__PURE__*/external_react_default().createElement(_Left, {
    className: "Left",
    bottomDrawerOpen: bottomDrawerOpen,
    foldedRight: foldedRight,
    twofoldPercent: twofoldPercent
  }, children);
};
/**
 * Right
**/


var _Right = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___Right",
  componentId: "sc-j8biii-3"
})(["position:relative;padding:0 0 0 ", ";display:", ";flex:", ";overflow-x:hidden;flex-direction:column;height:calc(100vh - ", " - ", ");"], function (p) {
  return ['android', 'ios'].includes(p.os) ? '' : 'var(--handle-width)';
}, function (p) {
  return p.foldedRight ? 'none' : 'flex';
}, function (p) {
  return "".concat((1 - p.twofoldPercent) * 100, "%");
}, function (p) {
  return "calc(2*".concat(p.theme.borderWidth, ")");
}, function (p) {
  return p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight;
});

var Right = function Right(_ref4) {
  var children = _ref4.children,
      props = LocationsShow_objectWithoutProperties(_ref4, LocationsShow_excluded3);

  var _useContext4 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext4.bottomDrawerOpen,
      folded = _useContext4.folded,
      foldedLeft = _useContext4.foldedLeft,
      foldedRight = _useContext4.foldedRight,
      twofoldPercent = _useContext4.twofoldPercent;

  return /*#__PURE__*/external_react_default().createElement(_Right, Object.assign({
    className: "Right"
  }, LocationsShow_objectSpread({
    bottomDrawerOpen: bottomDrawerOpen,
    foldedRight: foldedRight,
    twofoldPercent: twofoldPercent
  }, props)), children);
};

var LocationsShow_W0 = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow__W0",
  componentId: "sc-j8biii-4"
})(["display:flex;position:relative;"]);
/**
 * LocationsShow (Static)
 * _vp_ 2022-09-06
 * _vp_ 2022-09-11
 *
 * @TODO: re-introduce MenuIcon in Handle. _vp_ 2022-09-01
 * @TODO: can this be shared across desktop and mobile? _vp_ 2022-09-06
 * @TODO: location.is_purchased doesn't look right... _vp_ 2022-09-06
 *
 * @TODO: hella enable caching all around and measure throughput. _vp_ 2022-09-10
**/

var LocationsShow = function LocationsShow(props) {
  (0,shared/* logg */.IJ)(props, 'LocationsShow');
  var location = props.location,
      match = props.match,
      showItem = props.showItem;

  if (!location) {
    return null;
  }

  var _useContext5 = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext5.currentUser; // logg(useContext(AuthContext), 'LocationsShow Used AuthContext')


  var _useContext6 = (0,external_react_.useContext)(shared/* AppContext */.Il),
      os = _useContext6.os;

  var _useContext7 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext7.bottomDrawerOpen,
      editorMode = _useContext7.editorMode,
      folded = _useContext7.folded,
      setFolded = _useContext7.setFolded,
      foldedLeft = _useContext7.foldedLeft,
      foldedRight = _useContext7.foldedRight,
      itemToUnlock = _useContext7.itemToUnlock,
      setItemToUnlock = _useContext7.setItemToUnlock,
      mapPanelWidth = _useContext7.mapPanelWidth,
      setMapPanelWidth = _useContext7.setMapPanelWidth,
      mapPanelHeight = _useContext7.mapPanelHeight,
      setMapPanelHeight = _useContext7.setMapPanelHeight,
      ratedConfirmation = _useContext7.ratedConfirmation,
      setRatedConfirmation = _useContext7.setRatedConfirmation,
      showUrl = _useContext7.showUrl,
      setShowUrl = _useContext7.setShowUrl,
      twofoldPercent = _useContext7.twofoldPercent; // logg(useContext(TwofoldContext), 'LocationsShowUsedTwofoldContext')


  var _useWindowSize3 = (0,shared/* useWindowSize */.iP)(),
      _useWindowSize4 = LocationsShow_slicedToArray(_useWindowSize3, 2),
      windowWidth = _useWindowSize4[0],
      windowHeight = _useWindowSize4[1];

  var _useState5 = (0,external_react_.useState)(false),
      _useState6 = LocationsShow_slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var mapPanelRef = (0,external_react_.useRef)(null); // Show ItemToUnlock Modal

  (0,external_react_.useEffect)(function () {
    // @TODO: having location.is_purchased doesn't sound performant, expecially with caching.
    if (location.is_premium && (!currentUser.email || !location.is_purchased)) {
      setItemToUnlock(LocationsShow_objectSpread({
        closable: false,
        item_type: shared.C.item_types.location
      }, location));
    } else {
      setItemToUnlock(false);
    }
  }, [currentUser, location]); // Set mapPanel sizes

  (0,external_react_.useEffect)(function () {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth);
      setMapPanelHeight(mapPanelRef.current.offsetHeight);
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight]);

  if (['ios', 'android'].indexOf(os) !== -1) {
    // return <LocationsShowMobile {...{ ...props, location }} />
    return /*#__PURE__*/external_react_default().createElement(LocationsShow_W0, null, /*#__PURE__*/external_react_default().createElement(locations_LocationProvider, location, /*#__PURE__*/external_react_default().createElement(Right, {
      os: os
    }, /*#__PURE__*/external_react_default().createElement(application/* Breadcrumbs */.Oo, location), /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
      className: "Maps",
      label: location.labels.map,
      slug: shared.C.collapsible.map,
      variant: shared.C.variants.transparent
    }, /*#__PURE__*/external_react_default().createElement(locations_LocationsShowMobile3d, {
      location: location.map ? location.map : location,
      match: props.match,
      ref: mapPanelRef,
      slug: match.params.slug
    })), location.markers.length && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
      className: "Markers",
      label: location.labels.markers,
      slug: shared.C.collapsible.markers,
      variant: shared.C.variants.transparent
    }, /*#__PURE__*/external_react_default().createElement(markers_MarkersList, {
      markers: location.markers,
      variant: shared.C.variants.bordered
    })) || null, location.description && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
      className: "Description",
      label: location.labels.description,
      slug: shared.C.collapsible.description,
      variant: shared.C.variants.bordered
    }, /*#__PURE__*/external_react_default().createElement(Description, {
      item: location
    })) || null, location.newsitems.length && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
      className: "Newsitems",
      label: location.labels.newsitems,
      slug: shared.C.collapsible.newsitems,
      variant: shared.C.variants.transparent
    }, /*#__PURE__*/external_react_default().createElement(newsitems_Newsitems, {
      newsitems: location.newsitems,
      variant: shared.C.variants.bordered
    })) || null), showUrl && /*#__PURE__*/external_react_default().createElement(IframeModal, {
      src: showUrl
    }), showItem && /*#__PURE__*/external_react_default().createElement(ItemModal_ItemModal, {
      item: showItem
    }), loading && /*#__PURE__*/external_react_default().createElement(shared/* Loading */.gb, null), /*#__PURE__*/external_react_default().createElement(application/* UnlockModal */.ce, null)));
  }

  return /*#__PURE__*/external_react_default().createElement(LocationsShow_W0, null, /*#__PURE__*/external_react_default().createElement(locations_LocationProvider, location, /*#__PURE__*/external_react_default().createElement(Left, null, /*#__PURE__*/external_react_default().createElement(application/* Breadcrumbs */.Oo, location), /*#__PURE__*/external_react_default().createElement(locations_WrappedMapPanel, {
    map: location.map ? location.map : location,
    ref: mapPanelRef,
    slug: match.params.slug
  })), /*#__PURE__*/external_react_default().createElement(Handle, null), /*#__PURE__*/external_react_default().createElement(Right, null, location.markers.length && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
    className: "Markers",
    label: location.labels.markers,
    slug: shared.C.collapsible.markers,
    variant: shared.C.variants.transparent
  }, /*#__PURE__*/external_react_default().createElement(markers_MarkersList, {
    markers: location.markers,
    variant: shared.C.variants.bordered
  })) || null, location.description && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
    className: "Description",
    label: location.labels.description,
    slug: shared.C.collapsible.description,
    variant: shared.C.variants.bordered
  }, /*#__PURE__*/external_react_default().createElement(Description, {
    item: location
  })) || null, location.newsitems.length && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
    className: "Newsitems",
    label: location.labels.newsitems,
    slug: shared.C.collapsible.newsitems,
    variant: shared.C.variants.transparent
  }, /*#__PURE__*/external_react_default().createElement(newsitems_Newsitems, {
    newsitems: location.newsitems,
    variant: shared.C.variants.bordered
  })) || null), showUrl && /*#__PURE__*/external_react_default().createElement(IframeModal, {
    src: showUrl
  }), showItem && /*#__PURE__*/external_react_default().createElement(ItemModal_ItemModal, {
    item: showItem
  }), loading && /*#__PURE__*/external_react_default().createElement(shared/* Loading */.gb, null), /*#__PURE__*/external_react_default().createElement(application/* UnlockModal */.ce, null)));
};

LocationsShow.propTypes = {
  location: (external_prop_types_default()).object,
  match: external_prop_types_default().shape({
    params: external_prop_types_default().shape({
      slug: (external_prop_types_default()).string.isRequired
    })
  }),
  showItem: (external_prop_types_default()).object
};
/* harmony default export */ const locations_LocationsShow = (LocationsShow);
;// CONCATENATED MODULE: ./src/components/locations/LocationsShowAsync.jsx
function LocationsShowAsync_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocationsShowAsync_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocationsShowAsync_ownKeys(Object(source), !0).forEach(function (key) { LocationsShowAsync_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocationsShowAsync_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LocationsShowAsync_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LocationsShowAsync_slicedToArray(arr, i) { return LocationsShowAsync_arrayWithHoles(arr) || LocationsShowAsync_iterableToArrayLimit(arr, i) || LocationsShowAsync_unsupportedIterableToArray(arr, i) || LocationsShowAsync_nonIterableRest(); }

function LocationsShowAsync_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LocationsShowAsync_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LocationsShowAsync_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LocationsShowAsync_arrayLikeToArray(o, minLen); }

function LocationsShowAsync_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LocationsShowAsync_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LocationsShowAsync_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/**
 * LocationsShowAsync
 *
 * uses react-router for search params
 *
 *
**/

var LocationsShowAsync = function LocationsShowAsync(props) {
  (0,shared/* logg */.IJ)(props, 'LocationsShowAsync');
  var match = props.match; // @TODO: this is elegantly LocationProvider _vp_ 2022-09-12

  var _useState = (0,external_react_.useState)(),
      _useState2 = LocationsShowAsync_slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1]; // @TODO: this is so ugly... _vp_ 2022-09-20


  function useQuery() {
    var _useLocation = (0,external_react_router_dom_.useLocation)(),
        search = _useLocation.search;

    return external_react_default().useMemo(function () {
      return new URLSearchParams(search);
    }, [search]);
  }

  var q = useQuery();
  match.params = LocationsShowAsync_objectSpread(LocationsShowAsync_objectSpread({}, match.params), {}, {
    newsitems_page: q.get('newsitems_page') || 1
  });

  var _useState3 = (0,external_react_.useState)(),
      _useState4 = LocationsShowAsync_slicedToArray(_useState3, 2),
      showItem = _useState4[0],
      setShowItem = _useState4[1];

  var api = (0,shared/* useApi */.h_)();
  (0,external_react_.useEffect)(function () {
    (0,shared/* logg */.IJ)(match, 'LocationsShowAsync Request Chain');
    var chain = [api.getLocation(match.params)]; // only if item_type is present

    if (match.params.item_type) {
      var itemType = shared/* inflector.classify */.$z.classify(match.params.item_type);

      switch (itemType) {
        case shared.C.item_types.gallery:
          chain.push(api.getGallery(match.params.item_slug));
          break;

        case shared.C.item_types.photo:
          chain.push(api.getPhoto(match.params.item_slug));
          break;

        case shared.C.item_types.report:
          chain.push(api.getReport(match.params.item_slug));
          break;

        default:
          (0,shared/* logg */.IJ)(itemType, 'Cannot get this item type!');
          (0,external_react_toastify_.toast)("Cannot get this item type: ".concat(itemType));
      }
    }

    Promise.all(chain).then(function (rs) {
      (0,shared/* logg */.IJ)(rs, 'LocationsShowAsync ChainResults');
      setLocation(rs[0]); // @TODO: test-drive this. Clicking from a location-gallery back to location, should un-set the showItem. _vp_ 2022-09-11

      setShowItem(rs[1] ? rs[1] : null);
    })["catch"](function (err) {// logg(err, "Could not load Location.")
      // toast("Could not load Location.")
    });
  }, [match.params.item_type, match.params.item_slug, match.params.slug, match.params.newsitems_page]);
  var memoed = external_react_default().useMemo(function () {
    return /*#__PURE__*/external_react_default().createElement(locations_LocationsShow, {
      location: location,
      match: match,
      showItem: showItem
    });
  }, [location]);

  if (!location) {
    return null;
  }

  if (location.is_premium && !location.is_purchased) {
    return /*#__PURE__*/external_react_default().createElement(LocationsRestricted, null);
  }

  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, memoed);
};

LocationsShowAsync.propTypes = {
  match: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const locations_LocationsShowAsync = (LocationsShowAsync);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(272248);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/OBJLoader.js
var loaders_OBJLoader = __webpack_require__(987011);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/MTLLoader.js
var loaders_MTLLoader = __webpack_require__(236023);
;// CONCATENATED MODULE: ./src/components/locations3d/Blocker.jsx
var Blocker_excluded = ["children"];

function Blocker_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Blocker_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Blocker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json





var _Blocker = external_styled_components_default().div.withConfig({
  displayName: "Blocker___Blocker",
  componentId: "sc-1mqnpns-0"
})(["border:2px solid var(--ion-highlight-color);border-radius:var(--ion-border-radius);position:relative;height:100%;#Crosshair{width:50px;height:50px;position:absolute;left:calc(50% - 0px);top:calc(50% - 4px);::before{content:'';position:absolute;border-color:var(--ion-highlight-color);border-style:solid;border-width:0 2px 0 0;height:16px;top:0em;left:0;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:var(--ion-highlight-color);border-style:solid;border-width:0 2px 0 0;height:16px;top:0em;left:0;}}"]);
/**
 * @TODO: is this mobile-only for now? _vp_ 2022-09-14
**/


/* harmony default export */ const locations3d_Blocker = (external_react_default().forwardRef(function (props, ref) {
  var children = props.children,
      _props = Blocker_objectWithoutProperties(props, Blocker_excluded);

  return /*#__PURE__*/external_react_default().createElement(_Blocker, Object.assign({
    ref: ref,
    className: "Blocker"
  }, _props), children);
}));
;// CONCATENATED MODULE: ./src/components/locations3d/Crosshair.jsx


var Crosshair_Crosshair = external_styled_components_default().div.withConfig({
  displayName: "Crosshair",
  componentId: "sc-pqmgvx-0"
})(["width:50px;height:50px;position:absolute;left:50%;top:50%;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 2px 0 0;height:20px;top:-10px;left:-1px;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 2px 0 0;height:20px;top:-10px;left:-1px;}"]);
/* harmony default export */ const locations3d_Crosshair = ((/* unused pure expression or super */ null && (Crosshair_Crosshair)));
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/PointerLockControls.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _euler = new external_three_.Euler(0, 0, 0, 'YXZ');

var _vector = new external_three_.Vector3();

var _changeEvent = {
  type: 'change'
};
var _lockEvent = {
  type: 'lock'
};
var _unlockEvent = {
  type: 'unlock'
};

var _PI_2 = Math.PI / 2;

var PointerLockControls_PointerLockControls = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(PointerLockControls, _EventDispatcher);

  var _super = _createSuper(PointerLockControls);

  function PointerLockControls(camera, domElement) {
    var _this;

    _classCallCheck(this, PointerLockControls);

    _this = _super.call(this);

    if (domElement === undefined) {
      console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.');
      domElement = document.body;
    }

    _this.domElement = domElement;
    _this.isLocked = false; // Set to constrain the pitch of the camera
    // Range is 0 to Math.PI radians

    _this.minPolarAngle = 0; // radians

    _this.maxPolarAngle = Math.PI; // radians

    var scope = _assertThisInitialized(_this);

    function onMouseMove(event) {
      if (scope.isLocked === false) return;
      var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
      var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

      _euler.setFromQuaternion(camera.quaternion);

      _euler.y -= movementX * 0.002;
      _euler.x -= movementY * 0.002;
      _euler.x = Math.max(_PI_2 - scope.maxPolarAngle, Math.min(_PI_2 - scope.minPolarAngle, _euler.x));
      camera.quaternion.setFromEuler(_euler);
      scope.dispatchEvent(_changeEvent);
    }

    function onPointerlockChange() {
      if (scope.domElement.ownerDocument.pointerLockElement === scope.domElement) {
        scope.dispatchEvent(_lockEvent);
        scope.isLocked = true;
      } else {
        scope.dispatchEvent(_unlockEvent);
        scope.isLocked = false;
      }
    }

    function onPointerlockError() {
      console.error('THREE.PointerLockControls: Unable to use Pointer Lock API');
    }

    _this.connect = function () {
      scope.domElement.ownerDocument.addEventListener('mousemove', onMouseMove);
      scope.domElement.ownerDocument.addEventListener('pointerlockchange', onPointerlockChange);
      scope.domElement.ownerDocument.addEventListener('pointerlockerror', onPointerlockError);
    };

    _this.disconnect = function () {
      scope.domElement.ownerDocument.removeEventListener('mousemove', onMouseMove);
      scope.domElement.ownerDocument.removeEventListener('pointerlockchange', onPointerlockChange);
      scope.domElement.ownerDocument.removeEventListener('pointerlockerror', onPointerlockError);
    };

    _this.dispose = function () {
      this.disconnect();
    };

    _this.getObject = function () {
      // retaining this method for backward compatibility
      return camera;
    };

    _this.getDirection = function () {
      var direction = new external_three_.Vector3(0, 0, -1);
      return function (v) {
        return v.copy(direction).applyQuaternion(camera.quaternion);
      };
    }();

    _this.moveForward = function (distance) {
      // move forward parallel to the xz-plane
      // assumes camera.up is y-up
      _vector.setFromMatrixColumn(camera.matrix, 0);

      _vector.crossVectors(camera.up, _vector);

      camera.position.addScaledVector(_vector, distance);
    };

    _this.moveRight = function (distance) {
      _vector.setFromMatrixColumn(camera.matrix, 0);

      camera.position.addScaledVector(_vector, distance);
    };

    _this.lock = function () {
      this.domElement.requestPointerLock();
    };

    _this.unlock = function () {
      scope.domElement.ownerDocument.exitPointerLock();
    };

    _this.connect();

    return _this;
  }

  return _createClass(PointerLockControls);
}(external_three_.EventDispatcher);


var unlockEvent = (/* unused pure expression or super */ null && (_unlockEvent));

;// CONCATENATED MODULE: ./src/components/locations3d/Equirectangular.jsx


 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json







/**
 * Equirectangular
 * _vp_ 2021-11-13
 * It works, it shows the panoramic.
 *
 */

var Equirectangular = function Equirectangular(props) {
  logg(props, 'Equirectangular');
  var map = props.map;
  var history = useHistory();
  var camera,
      controls,
      markerObjects = [],
      markerObjectsIdxs = [],
      raycaster,
      renderer,
      texture,
      scene;
  var blockerRef = useRef(null);
  var instructionsRef = useRef(null);
  useEffect(function () {
    init();
    animate();
  }, []);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new THREE.Vector3();
  var direction = new THREE.Vector3();
  var vertex = new THREE.Vector3();
  var color = new THREE.Color();

  function init() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    camera = new THREE.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      logg('locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      logg('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());
    /*
     * Crosshair
     * From: https://codepen.io/driezis/pen/jOPzjLG?editors=1000
     */

    var pMat = new THREE.ShaderMaterial({
      uniforms: {
        main_color: {
          value: {
            r: 1,
            g: 1,
            b: 1
          }
        },
        border_color: {
          value: {
            r: 0,
            g: 0,
            b: 0.1
          }
        },
        thickness: {
          value: 0.006
        },
        height: {
          value: 0.13
        },
        offset: {
          value: 0.05
        },
        border: {
          value: 0.003
        },
        opacity: {
          value: 1
        },
        center: {
          value: {
            x: 0.5,
            y: 0.5
          }
        },
        rotation: {
          value: 0
        }
      },
      vertexShader: "\n                uniform float rotation;\n                uniform vec2 center;\n                #include <common>\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n                    vec2 scale;\n                    scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n                    scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n                    #ifndef USE_SIZEATTENUATION\n                        bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n                        if ( isPerspective ) scale *= - mvPosition.z;\n                    #endif\n                    vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n                    vec2 rotatedPosition;\n                    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n                    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n                    mvPosition.xy += rotatedPosition;\n                    gl_Position = projectionMatrix * mvPosition;\n                }\n            ",
      fragmentShader: "\n            uniform vec3 main_color;\n            uniform vec3 border_color;\n            uniform float opacity;\n\n            uniform float thickness;\n            uniform float height;\n            uniform float offset;\n            uniform float border;\n\n            varying vec2 vUv;\n            void main() {\n\n                float a = (step(abs(vUv.x - 0.5), thickness)) * step(abs(vUv.y - 0.5), height + offset) * step(offset, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness)) * step(abs(vUv.x - 0.5), height + offset) * step(offset, abs(vUv.x - 0.5));\n                float b = (step(abs(vUv.x - 0.5), thickness - border)) * step(abs(vUv.y - 0.5), height + offset - border) * step(offset + border, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness - border)) * step(abs(vUv.x - 0.5), height + offset - border) * step(offset + border, abs(vUv.x - 0.5));\n                gl_FragColor = vec4( mix(border_color, main_color, b), a * opacity);\n            }\n        ",
      transparent: true
    });
    var sprite = new THREE.Sprite(pMat); // scene.add(sprite);
    // sprite.position.set(0,0,-5);

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    }; // document.addEventListener( 'keydown', onKeyDown )
    // document.addEventListener( 'keyup', onKeyUp )


    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);
    /*
     * Floor
     */
    // // random
    // // @TODO: it's not aligned to parcels the way I want
    // let floorGeometry = new THREE.PlaneGeometry( 460, 680, 100, 100 )
    // floorGeometry.rotateX( - Math.PI / 2 )
    // // vertex displacement
    // let position = floorGeometry.attributes.position
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   vertex.fromBufferAttribute( position, i )
    //   vertex.x += Math.random() * 20 - 10
    //   vertex.y += Math.random() * 2
    //   vertex.z += Math.random() * 20 - 10
    //   position.setXYZ( i, vertex.x, vertex.y, vertex.z )
    // }
    // floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices
    // floorGeometry.x = -200
    // floorGeometry.y = -200
    // floorGeometry.z = -200
    // position = floorGeometry.attributes.position
    // const colorsFloor = []
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
    //   colorsFloor.push( color.r, color.g, color.b )
    // }
    // floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) )
    // const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } )
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments
    // let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    // floorGeometry.rotateX( - Math.PI / 2 )
    // texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`) // moon floor
    // const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )

    /*
     * Model Import
     */
    // const scenesPath = '/assets/scenes/'
    // const objectsPath = '/assets/objects/'
    // let modelName = 'polycity' // 'wasyaco-reception' // 'tiny-house-2'
    // const texturePath = `${modelName}/${modelName}.mtl`
    // const modelPath = `${modelName}/${modelName}.obj`
    // const manager = new THREE.LoadingManager()
    // const onProgress = (xhr) => {
    //   if (xhr.lengthComputable) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }
    // const onError = () => {}
    // const onLoad = (materials) => {
    //   materials.preload()
    //   const objLoader = new OBJLoader( manager )
    //   objLoader.setMaterials( materials )
    //   objLoader.setPath( scenesPath)
    //   objLoader.load( modelPath, ( object ) => {
    //     object.traverse((child) => {
    //       if (child.isMesh) {
    //         child.geometry.scale(0.10, 0.10, 0.10) // @TODO: change?
    //       }
    //     })
    //     object.position.x = Math.random() * 500
    //     object.position.y = 10
    //     object.position.z = Math.random() * 500
    //     logg(object, '1st object')
    //     scene.add( object )
    //     markerObjects.push( object )
    //     markerObjectsIdxs.push({ uuid: object.uuid, name: 'camaro75', slug: 'construct1' }) // @TODO: change!
    //   }, onProgress, onError )
    // }
    // const mtlLoader = new MTLLoader(manager)
    // mtlLoader.setPath(scenesPath)
    // mtlLoader.load(texturePath, onLoad)

    /*
     * Skybox
     */

    var textureLoader = new THREE.TextureLoader();
    var assetPath = map.img_path;
    texture = textureLoader.load(assetPath, function () {
      var rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
    /*
     * and render
     */

    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(700, 350); // aspect ratio 0.5

    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (controls.isLocked === true) {
      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new THREE.Raycaster(camera.position, cameraDirection);
      var intersections = raycaster.intersectObjects(markerObjects, true);

      if (intersections.length) {
        var pickedObject = intersections[0].object; // collision

        if (intersections[0].distance < 5) {
          moveForward = false;
        }
      }

      var onObject = intersections.length > 0;
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/React.createElement(F, null, /*#__PURE__*/React.createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/React.createElement(Blocker, Object.assign({}, S, {
    ref: blockerRef
  }), /*#__PURE__*/React.createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const locations3d_Equirectangular = ((/* unused pure expression or super */ null && (Equirectangular)));
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/RotationPad.jsx



var RotationPad_W0 = external_styled_components_default().div.withConfig({
  displayName: "RotationPad__W0",
  componentId: "sc-py61vh-0"
})(["position:absolute;bottom:10px;right:10px;color:white;font-size:2em;border:1px solid red;"]);
/**
 * RotationPad
 * _vp_ 2022-09-02
**/

var RotationPad = function RotationPad(props) {
  (0,shared/* logg */.IJ)(props, 'RotationPad');
  var container = props.container;
  var mouseDown = false;
  var mouseStopped = false;
  var mouseStopTimeout, eventRepeatTimeout;
  var newLeft, newTop, distance, angle;

  var mouseDownHandler = function mouseDownHandler(event) {
    mouseDown = true;
    self.handle.css("opacity", "1.0");
    update(event.pageX, event.pageY);
  };

  self.regionData = {};
  self.handleData = {}; // self.rotationPad = $('<div class="rotation-pad"></div>')
  // self.region = $('<div class="region"></div>')
  // self.handle = $('<div class="handle"></div>')

  self.rotationPad = /*#__PURE__*/external_react_default().createElement("h1", null, "R");
  self.region = /*#__PURE__*/external_react_default().createElement("h2", {
    onMouseDown: mouseDownHandler
  }, "region");
  self.handle = /*#__PURE__*/external_react_default().createElement("h2", null, "handle"); // self.rotationPad.append(self.region).append(self.handle)
  // self.container.append(self.rotationPad)
  // // Aligning pad:
  // self.rotationPad.css({
  //   // _vp_ 2022-09-02
  //   // top: self.container.find("canvas").height() + self.container.position().top - self.region.outerHeight() - 10,
  //   // left: self.container.find("canvas").width() - self.region.outerWidth() - 20
  //   top: 100,
  //   left: 200,
  // });
  // self.regionData.width = self.region.outerWidth();
  // self.regionData.height = self.region.outerHeight();
  // self.regionData.position = self.region.position();
  // self.regionData.offset = self.region.offset();
  // self.regionData.radius = self.regionData.width / 2;
  // self.regionData.centerX = self.regionData.position.left + self.regionData.radius;
  // self.regionData.centerY = self.regionData.position.top + self.regionData.radius;
  // self.handleData.width = self.handle.outerWidth();
  // self.handleData.height = self.handle.outerHeight();
  // self.handleData.radius = self.handleData.width / 2;
  // self.regionData.radius = self.regionData.width / 2 - self.handleData.radius;
  // Mouse events:
  // $(document).on("mouseup", function () {
  //   mouseDown = false;
  //   self.resetHandlePosition();
  // });
  // $(document).on("mousemove", function(event) {
  //   if (!mouseDown) return;
  //   update(event.pageX, event.pageY);
  // });
  // self.region.on("touchstart", function (event) {
  //   mouseDown = true;
  //   self.handle.css("opacity", "1.0");
  //   update(event.originalEvent.targetTouches[0].pageX, event.originalEvent.targetTouches[0].pageY);
  // });
  // $(document).on("touchend touchcancel", function () {
  //   mouseDown = false;
  //   self.resetHandlePosition();
  // });
  // $(document).on("touchmove", function(event) {
  //   if (!mouseDown) return;
  //   update(event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY);
  // });

  function update(pageX, pageY) {
    newLeft = pageX - self.regionData.offset.left;
    newTop = pageY - self.regionData.offset.top; // If handle reaches the pad boundaries.

    distance = Math.pow(self.regionData.centerX - newLeft, 2) + Math.pow(self.regionData.centerY - newTop, 2);

    if (distance > Math.pow(self.regionData.radius, 2)) {
      angle = Math.atan2(newTop - self.regionData.centerY, newLeft - self.regionData.centerX);
      newLeft = Math.cos(angle) * self.regionData.radius + self.regionData.centerX;
      newTop = Math.sin(angle) * self.regionData.radius + self.regionData.centerY;
    }

    newTop = Math.round(newTop * 10) / 10;
    newLeft = Math.round(newLeft * 10) / 10;
    self.handle.css({
      top: newTop - self.handleData.radius,
      left: newLeft - self.handleData.radius
    }); // console.log(newTop , newLeft);
    // Providing event and data for handling camera movement.

    var deltaX = self.regionData.centerX - parseInt(newLeft);
    var deltaY = self.regionData.centerY - parseInt(newTop); // Normalize x,y between -2 to 2 range.

    deltaX = -2 + (2 + 2) * (deltaX - -self.regionData.radius) / (self.regionData.radius - -self.regionData.radius);
    deltaY = -2 + (2 + 2) * (deltaY - -self.regionData.radius) / (self.regionData.radius - -self.regionData.radius);
    deltaX = -1 * Math.round(deltaX * 10) / 10;
    deltaY = -1 * Math.round(deltaY * 10) / 10; // console.log(deltaX, deltaY);

    sendEvent(deltaX, deltaY);
  }

  function sendEvent(dx, dy) {
    if (!mouseDown) {
      clearTimeout(eventRepeatTimeout);
      return;
    }

    clearTimeout(eventRepeatTimeout);
    eventRepeatTimeout = setTimeout(function () {
      sendEvent(dx, dy);
    }, 5);
    var moveEvent = $.Event("YawPitch", {
      detail: {
        "deltaX": dx,
        "deltaY": dy
      },
      bubbles: false
    });
    $(self).trigger(moveEvent);
  }

  var resetHandlePosition = function resetHandlePosition() {
    (0,shared/* logg */.IJ)('resetting handle position...'); // this.handle.animate({
    //   top: this.regionData.centerY - this.handleData.radius,
    //   left: this.regionData.centerX - this.handleData.radius,
    //   opacity: 0.1
    // }, "fast");
  };

  resetHandlePosition();
  return /*#__PURE__*/external_react_default().createElement(RotationPad_W0, null, "[ Rotate4 ]");
};

/* harmony default export */ const vendor_RotationPad = (RotationPad);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js
var loaders_GLTFLoader = __webpack_require__(901217);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/math/Octree.js
var math_Octree = __webpack_require__(835344);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelMobile.jsx
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || ThreePanelMobile_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ThreePanelMobile_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ThreePanelMobile_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ThreePanelMobile_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ThreePanelMobile_arrayLikeToArray(arr); }

function ThreePanelMobile_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










/**
 * Local Constants
**/

var _C = {
  epsilon: 0.001,
  events: {
    move: 'move',
    stopMove: 'stopMove',
    gotoPosition: 'gotoPosition'
  },
  origin: [0, 10, 0]
};

/**
 * ThreePanelMobile
 *
 * _vp_ 2021-11-14 :: Markers are objects
 * _vp_ 2022-08-13 :: Cont.
 * _vp_ 2022-09-02 :: Cont.
 * _vp_ 2022-09-14 :: local constants,
 *
 *
 */

var Loc = function Loc(props) {
  (0,shared/* logg */.IJ)(props, 'ThreePanelMobile');
  var map = props.map;
  var camera, controls;
  var fpsBody;
  var markerObjects = [],
      markerObjectsIdxs = [];
  var object,
      objects = [];
  var raycaster, renderer;
  var scene;
  var texture; // sky and floor, maybe all textures will share this memory?

  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new external_three_.Vector3();
  var vertex = new external_three_.Vector3();
  var color = new external_three_.Color();
  var loader = new loaders_GLTFLoader/* GLTFLoader */.E();
  var worldOctree = new math_Octree/* Octree */.V();
  var blockerRef = (0,external_react_.useRef)(null);
  var instructionsRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    init();
    animate();
    onWindowResize();
  }, []);

  var onWindowResize = function onWindowResize() {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
  };

  function init() {
    var _camera$position;

    camera = new external_three_.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    (_camera$position = camera.position).set.apply(_camera$position, _toConsumableArray(_C.origin));

    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0xffffff);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750);
    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    var axesHelper = new external_three_.AxesHelper(5);
    scene.add(axesHelper); // Controls

    var options = {
      speedFactor: 0.5,
      delta: 1,
      rotationFactor: 0.002,
      maxPitch: 55,
      hitTest: true,
      hitTestDistance: 40
    }; // controls = new TouchControls(blockerRef.current, camera, options);
    // controls.setPosition(0, 35, 400);
    // controls.addToScene(scene);
    // scene.add( controls.getObject() )
    // blockerRef.current.addEventListener( 'click', function () {
    //   logg('locked controls')
    //   controls.lock()
    // } )

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    var onStopMove = function onStopMove(e) {
      // logg(e, 'onStopMove')
      moveRight = moveLeft = moveForward = moveBackward = false;
    };
    /*
     * The coords of the event.detail are that of the pad:
     * -2..+2 deltaY = backward/forward
     * -2..+2 deltaX = left/right
    **/


    var onMove = function onMove(_ref) {
      var detail = _ref.detail;
      // logg(detail, 'onMove')
      var deltaX = detail.deltaX,
          deltaY = detail.deltaY;
      var v = new external_three_.Vector3(deltaX, 0, -deltaY);
      v.normalize();
      v.multiplyScalar(0.2); // move slower

      velocity.add(v);
    };

    var gotoPosition = function gotoPosition(_ref2) {
      var _camera$position2;

      var detail = _ref2.detail;

      // logg(detail, 'going to position')
      (_camera$position2 = camera.position).set.apply(_camera$position2, _toConsumableArray(detail));
    };

    document.addEventListener(_C.events.move, onMove);
    document.addEventListener(_C.events.stopMove, onStopMove);
    document.addEventListener(_C.events.gotoPosition, gotoPosition);
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
    /*
     * Populate objects
    **/

    if (true) {
      /*
      * Floor
      **/
      // moon floor
      texture = external_three_.ImageUtils.loadTexture("/assets/textures/moon-1.jpg");
      var floorGeometry = new external_three_.CircleGeometry(1000, 32); // radius, segments, thetaStart, thetaLength

      floorGeometry.rotateX(-Math.PI / 2);
      var floorMaterial = new external_three_.MeshBasicMaterial({
        map: texture
      });
      var floor = new external_three_.Mesh(floorGeometry, floorMaterial);
      scene.add(floor);
      map.markers.map(function (marker, idx) {
        loader.load(marker.asset3d_path, function (gltf) {
          scene.add(gltf.scene);
          worldOctree.fromGraphNode(gltf.scene);
          gltf.scene.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;

              if (child.material.map) {
                child.material.map.anisotropy = 4;
              }
            }
          });
        });
      });
      /*
      * Skybox
      **/

      var textureLoader = new external_three_.TextureLoader();
      texture = textureLoader.load("/assets/textures/space-5.jpg", function () {
        var rt = new external_three_.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
        scene.background = rt.texture;
      });
      /*
      * Camera Holder
      **/

      var cameraHolder = new external_three_.Object3D();
      cameraHolder.name = "cameraHolder"; // cameraHolder.add(camera);

      fpsBody = new external_three_.Object3D();
      fpsBody.add(cameraHolder);
    }
    /*
     * Render
    **/


    renderer = new external_three_.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(700, 350); // aspect ratio 0.5

    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  } // @TODO: it's not a camera, the camera must be held by something, to do object collision. _vp_ 2022-09-14
  // @TODO: add collisions, boundary?
  // @TODO: re-implement jumping and gravity, from threejs fps example. _vp_ 2022-09-14


  function animate() {
    requestAnimationFrame(animate);
    var direction = new external_three_.Vector3();
    var time = performance.now();
    var delta = (time - prevTime) / 1000;
    /*
     * Friction
    **/

    if (Math.abs(velocity.x) < _C.epsilon) {
      velocity.x = 0;
    } else {
      velocity.x -= velocity.x * 10.0 * delta;
    }

    if (Math.abs(velocity.y) < _C.epsilon) {
      velocity.y = 0;
    } else {// gravity
      // velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
    }

    if (Math.abs(velocity.z) < _C.epsilon) {
      velocity.z = 0;
    } else {
      velocity.z -= velocity.z * 10.0 * delta;
    } // if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta
    // if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta
    // velocity.z -= direction.z * 400.0 * delta
    // velocity.x -= direction.x * 400.0 * delta


    camera.translateX(velocity.x);
    camera.translateZ(velocity.z);
    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(locations3d_Blocker, {
    ref: blockerRef,
    className: "Blocker"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  }), /*#__PURE__*/external_react_default().createElement(vendor_MovementPad, null)));
};

/* harmony default export */ const ThreePanelMobile = (Loc);
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/MovementPadBg.png
/* harmony default export */ const MovementPadBg = ({"src":"/_next/static/media/MovementPadBg.93d6840e.png","height":200,"width":200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEUACo0AC4z3HtlIAAAAAnRSTlMBISPh7CcAAAAJcEhZcwAALiMAAC4jAXilP3YAAAARSURBVAiZY2DACxgZ0Rk4AAAA2AAFhJR3HAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/aim.svg
/* harmony default export */ const aim = ({"src":"/_next/static/media/aim.74012678.svg","height":504,"width":504});
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/MovementPad.jsx
var MovementPad_excluded = (/* unused pure expression or super */ null && (["children", "ref"])),
    MovementPad_excluded2 = ["children"],
    MovementPad_excluded3 = ["children"];

function MovementPad_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function MovementPad_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MovementPad_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MovementPad_ownKeys(Object(source), !0).forEach(function (key) { MovementPad_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MovementPad_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MovementPad_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MovementPad_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MovementPad_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MovementPad_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var _Region = external_styled_components_default().div.withConfig({
  displayName: "MovementPad___Region",
  componentId: "sc-it6gu4-0"
})(["width:100%;height:100%;background:rgba(126,126,0,.5);"]);

var Region = function Region(_ref) {
  var children = _ref.children,
      ref = _ref.ref,
      props = MovementPad_objectWithoutProperties(_ref, MovementPad_excluded);

  return /*#__PURE__*/React.createElement(_Region, Object.assign({
    innerRef: ref,
    className: "Region"
  }, props), children);
};

var MovementPad_C = MovementPad_objectSpread({
  thresh: 0.2
}, _C);

var MovementPad_Handle = external_styled_components_default().div.withConfig({
  displayName: "MovementPad___Handle",
  componentId: "sc-it6gu4-1"
})([""]);

var vendor_MovementPad_Handle = function Handle(_ref2) {
  var children = _ref2.children,
      props = MovementPad_objectWithoutProperties(_ref2, MovementPad_excluded2);

  return /*#__PURE__*/external_react_default().createElement(MovementPad_Handle, Object.assign({
    className: "Handle"
  }, props), children);
};

var _Pad = external_styled_components_default().div.withConfig({
  displayName: "MovementPad___Pad",
  componentId: "sc-it6gu4-2"
})(["top:50px;right:50px;position:absolute;width:100px;height:100px;border:1px solid cyan;"]);

var Pad = function Pad(_ref3) {
  var children = _ref3.children,
      props = MovementPad_objectWithoutProperties(_ref3, MovementPad_excluded3);

  return /*#__PURE__*/external_react_default().createElement(_Pad, Object.assign({
    className: "MovementPad"
  }, props), children);
};
/**
 * MovementPad
 * _vp_ 2022-09-02 ::
 * _vp_ 2022-09-14 :: Continue, MovementPad helper, axesHelper,
 *
**/


var MovementPad = function MovementPad(props) {
  (0,shared/* logg */.IJ)(props, 'MovementPad');

  MovementPad_objectDestructuringEmpty(props);

  var mouseDown = false;
  var mouseStopped = false;
  var eventStopTimeout, eventRepeatTimeout;
  var newLeft, newTop, distance, angle;
  var regionData = {};
  var regionRef = (0,external_react_.useRef)(null);
  var handleData = {};

  if (regionRef.current) {
    regionData.w = regionRef.current.clientWidth;
    regionData.radius = regionData.w / 2;
    regionData.h = regionRef.current.clientHeight;
    regionData.x = regionRef.current.getBoundingClientRect().x;
    regionData.y = regionRef.current.getBoundingClientRect().y;
    regionData.centerX = regionData.x + regionData.w / 2;
    regionData.centerY = regionData.y + regionData.h / 2; // handleData.width = handle.outerWidth();
    // handleData.height = handle.outerHeight();
    // handleData.radius = handleData.width / 2;
    // regionData.radius = regionData.width / 2 - handleData.radius;
  }

  var onTouchEnd = function onTouchEnd(e) {
    // and touchcancel
    // logg(e, 'onTouchEnd')
    mouseDown = false;
    resetHandlePosition();
    sendEvent();
  };

  var onTouchMove = function onTouchMove(e) {
    // logg(e, 'onTouchMove')
    if (!mouseDown) return;
    update(e.touches[0].pageX, e.touches[0].pageY);
  };

  var onTouchStart = function onTouchStart(e) {
    // logg(e, 'onTouchStart')
    // logg([e.targetTouches[0].pageX, e.targetTouches[0].pageY], 'onTouchStart')
    e.persist();
    mouseDown = true; // handle.css("opacity", "1.0")

    update(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
  };

  var update = function update(pageX, pageY) {
    // logg(regionData, 'regionData')
    newLeft = pageX - regionData.x;
    newTop = pageY - regionData.y; // logg([newLeft, newTop], 'update: newLeft, newTop')
    // logg([ regionData.centerX, regionData.centerY ], 'centerX, centerY')
    // // If handle reaches the pad boundaries.
    // distance = Math.pow(regionData.centerX - newLeft, 2) + Math.pow(regionData.centerY - newTop, 2);
    // if (distance > Math.pow(regionData.radius, 2)) {
    //   angle = Math.atan2((newTop - regionData.centerY), (newLeft - regionData.centerX));
    //   newLeft = (Math.cos(angle) * regionData.radius) + regionData.centerX;
    //   newTop = (Math.sin(angle) * regionData.radius) + regionData.centerY;
    // }
    // newTop = Math.round(newTop * 10) / 10;
    // newLeft = Math.round(newLeft * 10) / 10;
    // handle.css({
    //   top: newTop - handleData.radius,
    //   left: newLeft - handleData.radius
    // });
    // console.log(newTop , newLeft);

    regionData.centerX = 50;
    regionData.centerY = 50; // Providing event and data for handling camera movement.

    var deltaX = regionData.centerX - parseInt(newLeft);
    var deltaY = regionData.centerY - parseInt(newTop); // Normalize x,y between -2 to 2 range.

    deltaX = -2 + (2 + 2) * (deltaX - -regionData.radius) / (regionData.radius - -regionData.radius);
    deltaY = -2 + (2 + 2) * (deltaY - -regionData.radius) / (regionData.radius - -regionData.radius);
    deltaX = Math.round(deltaX * 10) / 10;
    deltaY = Math.round(deltaY * 10) / 10; // touching the center is insensitive

    if (Math.abs(deltaX) < MovementPad_C.thresh && Math.abs(deltaY) < MovementPad_C.thresh) {
      deltaX = 0;
      deltaY = 0;
    } // console.log(deltaX, deltaY);


    sendEvent(-deltaX, deltaY, 0);
  };

  var stopEvent = new CustomEvent("stopMove", {
    bubbles: false
  });

  function sendEvent(dx, dy, middle) {
    if (!mouseDown) {
      clearTimeout(eventRepeatTimeout);
      document.dispatchEvent(stopEvent);
      return;
    } // logg([dx, dy, middle, mouseDown], 'sendEvent')
    // stop moving after 1sec ? _vp_ 2022-09-13


    clearTimeout(eventStopTimeout);
    eventStopTimeout = setTimeout(function () {
      (0,shared/* logg */.IJ)('stopping...');
      document.dispatchEvent(stopEvent);
    }, 0.2 * 1000);
    eventStopTimeout;
    var moveEvent = new CustomEvent(MovementPad_C.events.move, {
      detail: {
        "deltaX": dx,
        "deltaY": dy
      },
      bubbles: false
    });
    document.dispatchEvent(moveEvent);
  }

  var resetPosition = function resetPosition() {
    var ev = new CustomEvent(MovementPad_C.events.gotoPosition, {
      detail: MovementPad_C.origin,
      bubbles: false
    });
    document.dispatchEvent(ev);
  };

  var resetHandlePosition = function resetHandlePosition() {// handle.animate({
    //   top: this.regionData.centerY - this.handleData.radius,
    //   left: this.regionData.centerX - this.handleData.radius,
    //   opacity: 0.1
    // }, "fast");
  }; // resetHandlePosition()


  return /*#__PURE__*/external_react_default().createElement(Pad, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Region",
    style: {
      width: '100px',
      height: '100px',
      background: "center center url(\"".concat(MovementPadBg, "\") rgba(255,0,0,.5)")
    },
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchEnd,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    ref: regionRef
  }, /*#__PURE__*/external_react_default().createElement(vendor_MovementPad_Handle, null)), /*#__PURE__*/external_react_default().createElement("img", {
    style: {
      width: 25,
      height: 25,
      position: 'absolute',
      right: 0,
      top: 125
    },
    src: aim,
    onClick: resetPosition
  }));
};

/* harmony default export */ const vendor_MovementPad = (MovementPad);
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/TouchControls.jsx
function TouchControls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TouchControls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TouchControls_ownKeys(Object(source), !0).forEach(function (key) { TouchControls_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TouchControls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function TouchControls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TouchControls_W0 = external_styled_components_default().div.withConfig({
  displayName: "TouchControls__W0",
  componentId: "sc-dv6ako-0"
})(["position:absolute;bottom:10px;left:10px;border:1px solid red;z-index:2;color:white;font-size:2em;"]);
/**
 * TouchControls
 * _vp_ 2022-09-02
 *
**/

var TouchControls = function TouchControls(props) {
  (0,shared/* logg */.IJ)(props, 'TouchControls');
  var container = props.container,
      camera = props.camera,
      options = props.options;

  if (!(container !== null && container !== void 0 && container.current)) {
    (0,shared/* logg */.IJ)('no current ref in TouchControls!');
    return null;
  }

  var config = TouchControls_objectSpread(TouchControls_objectSpread({}, options), {
    speedFactor: 0.5,
    delta: 1,
    rotationFactor: 0.002,
    maxPitch: 55,
    hitTest: true,
    hitTestDistance: 40
  });

  var isRightMouseDown = false;
  var rotationMatrices = [];
  var hitObjects = [];
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var lockMoveForward = false;
  var lockMoveBackward = false;
  var lockMoveLeft = false;
  var lockMoveRight = false;
  var ztouch = 1,
      xtouch = 1;
  var PI_2 = Math.PI / 2;
  var maxPitch = config.maxPitch * Math.PI / 180;
  var velocity = new external_three_.Vector3(0, 0, 0);
  var cameraHolder = new external_three_.Object3D();
  cameraHolder.name = "cameraHolder";
  cameraHolder.add(camera);
  var scene = null;
  var fpsBody = new external_three_.Object3D();
  fpsBody.add(cameraHolder);
  var enabled = true;
  var mouse = new external_three_.Vector2();
  $(self.rotationPad).on("YawPitch", function (event) {
    var rotation = calculateCameraRotation(event.detail.deltaX, event.detail.deltaY);
    self.setRotation(rotation.rx, rotation.ry);
  }); // // Creating movement pad:
  // self.movementPad = new MovementPad(container);
  // $(self.movementPad).on("move", function(event) {
  //   ztouch = Math.abs(event.detail.deltaY);
  //   xtouch = Math.abs(event.detail.deltaX);
  //   if (event.detail.deltaY == event.detail.middle) {
  //     ztouch = 1;
  //     moveForward = moveBackward = false;
  //   } else {
  //     if (event.detail.deltaY > event.detail.middle) {
  //       moveForward = true;
  //       moveBackward = false;
  //     }
  //     else if (event.detail.deltaY < event.detail.middle) {
  //       moveForward = false;
  //       moveBackward = true;
  //     }
  //   }
  //   if (event.detail.deltaX == event.detail.middle) {
  //     xtouch = 1;
  //     moveRight = moveLeft = false;
  //   } else {
  //     if (event.detail.deltaX < event.detail.middle) {
  //       moveRight = true;
  //       moveLeft = false;
  //     }
  //     else if (event.detail.deltaX > event.detail.middle) {
  //       moveRight = false;
  //       moveLeft = true;
  //     }
  //   }
  // });
  // $(self.movementPad).on("stopMove", function(event) {
  //   ztouch = xtouch = 1;
  //   moveForward = moveBackward = moveLeft = moveRight = false;
  // });
  // container.on("contextmenu", onContextMenu);
  // container.on("mousedown", onMouseDown);
  // container.on("mouseup", onMouseUp);

  container.current.addEventListener('contextmenu', onContextMenu);
  container.current.addEventListener('mousedown', onMouseDown);
  container.current.addEventListener('mouseup', onMouseUp); // $(document).on("keydown", onKeyDown);
  // $(document).on("keyup", onKeyUp);
  // $(document).on("mousemove", onMouseMove);
  // $(document).on("mouseout", onMouseOut);

  container.current.addEventListener('keydown', onKeyDown);
  container.current.addEventListener("keyup", onKeyUp);
  container.current.addEventListener("mousemove", onMouseMove);
  container.current.addEventListener("mouseout", onMouseOut);
  prepareRotationMatrices(); //
  // Events:
  //

  function onContextMenu(event) {
    event.preventDefault();
  }

  ;

  function onMouseDown(event) {
    if (self.enabled && event.button === 2) {
      isRightMouseDown = true;
      event.preventDefault();
      event.stopPropagation();
    }
  }

  ;

  function onMouseUp(event) {
    if (self.enabled && event.button === 2) {
      isRightMouseDown = false;
    }
  }

  ;

  function onMouseMove(event) {
    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    if (!self.enabled || !isRightMouseDown) return;
    var movementX = event.originalEvent.movementX || event.originalEvent.mozMovementX || event.originalEvent.webkitMovementX || 0;
    var movementY = event.originalEvent.movementY || event.originalEvent.mozMovementY || event.originalEvent.webkitMovementY || 0;
    var rotation = calculateCameraRotation(-1 * movementX, -1 * movementY); // console.log(self.mouse, "\n", movementX, rotation);

    self.setRotation(rotation.rx, rotation.ry); // updateNavPad();
  }

  ;

  function onMouseOut(e) {
    isRightMouseDown = false; // self.stopMouseMoving();
  }

  ;

  function onKeyDown(e) {
    if (!self.enabled) return;

    switch (e.keyCode) {
      case 38: // up

      case 87:
        // w
        moveForward = true;
        break;

      case 37: // left

      case 65:
        // a
        moveLeft = true;
        break;

      case 40: // down

      case 83:
        // s
        moveBackward = true;
        break;

      case 39: // right

      case 68:
        // d
        moveRight = true;
        break;
    }
  }

  ;

  function onKeyUp(e) {
    switch (e.keyCode) {
      case 38: // up

      case 87:
        // w
        moveForward = false;
        break;

      case 37: // left

      case 65:
        // a
        moveLeft = false;
        break;

      case 40: // down

      case 83:
        // a
        moveBackward = false;
        break;

      case 39: // right

      case 68:
        // d
        moveRight = false;
        break;
    }
  }

  ; //
  // Private functions:
  //

  function prepareRotationMatrices() {
    var rotationMatrixF = new external_three_.Matrix4();
    rotationMatrixF.makeRotationY(0);
    rotationMatrices.push(rotationMatrixF); // forward direction.

    var rotationMatrixB = new external_three_.Matrix4();
    rotationMatrixB.makeRotationY(180 * Math.PI / 180);
    rotationMatrices.push(rotationMatrixB);
    var rotationMatrixL = new external_three_.Matrix4();
    rotationMatrixL.makeRotationY(90 * Math.PI / 180);
    rotationMatrices.push(rotationMatrixL);
    var rotationMatrixR = new external_three_.Matrix4();
    rotationMatrixR.makeRotationY((360 - 90) * Math.PI / 180);
    rotationMatrices.push(rotationMatrixR);
  }

  ;

  function calculateCameraRotation(dx, dy, factor) {
    var factor = factor ? factor : self.config.rotationFactor;
    var ry = self.fpsBody.rotation.y - dx * factor;
    var rx = cameraHolder.rotation.x - dy * factor;
    rx = Math.max(-maxPitch, Math.min(maxPitch, rx));
    return {
      rx: rx,
      ry: ry
    };
  }

  ;

  function lockDirectionByIndex(index) {
    if (index == 0) self.lockMoveForward(true);else if (index == 1) self.lockMoveBackward(true);else if (index == 2) self.lockMoveLeft(true);else if (index == 3) self.lockMoveRight(true);
  } //
  // Public functions:
  //


  var update = function update() {
    return;
    if (config.hitTest) self.hitTest();
    velocity.x += -1 * velocity.x * 0.75 * self.config.delta;
    velocity.z += -1 * velocity.z * 0.75 * self.config.delta;
    if (moveForward && !lockMoveForward) velocity.z -= ztouch * self.config.speedFactor * self.config.delta;
    if (moveBackward && !lockMoveBackward) velocity.z += ztouch * self.config.speedFactor * self.config.delta;
    if (moveLeft && !lockMoveLeft) velocity.x -= xtouch * self.config.speedFactor * self.config.delta;
    if (moveRight && !lockMoveRight) velocity.x += xtouch * self.config.speedFactor * self.config.delta;
    fpsBody.translateX(velocity.x);
    fpsBody.translateY(velocity.y);
    fpsBody.translateZ(velocity.z);
  };

  var hitTest = function hitTest() {
    return;
    self.unlockAllDirections();
    hitObjects = [];
    var cameraDirection = self.getDirection2(new external_three_.Vector3(0, 0, 0)).clone();

    for (var i = 0; i < 4; i++) {
      // Applying rotation for each direction:
      var direction = cameraDirection.clone();
      direction.applyMatrix4(rotationMatrices[i]);
      var rayCaster = new external_three_.Raycaster(fpsBody.position, direction);
      var intersects = rayCaster.intersectObject(self.scene, true);

      if (intersects.length > 0 && intersects[0].distance < self.config.hitTestDistance) {
        lockDirectionByIndex(i);
        hitObjects.push(intersects[0]); // console.log(intersects[0].object.name, i);
      }
    }

    return hitObjects;
  };

  var getDirection2 = function getDirection2(v) {
    return;
    var self = this;
    var direction = new external_three_.Vector3(0, 0, -1);
    var rotation = new external_three_.Euler(0, 0, 0, "YXZ");
    var rx = fpsBody.getObjectByName("cameraHolder").rotation.x;
    ;
    var ry = fpsBody.rotation.y; // console.log("DIRECTION:", this);

    rotation.set(rx, ry, 0);
    v.copy(direction).applyEuler(rotation); // console.log(v);

    return v;
  };

  var getDirection = function () {
    return;
    var self = this;
    var rx = 0;
    var ry = 0;
    var direction = new external_three_.Vector3(0, 0, -1);
    var rotation = new external_three_.Euler(0, 0, 0, "YXZ"); // console.log("DIRECTION:", this);

    if (self != undefined) {
      rx = fpsBody.getObjectByName("cameraHolder").rotation.x;
      ry = fpsBody.rotation.y;
      console.log(rx, ry);
    } // var camHolder = self.fpsBody.getObjectByName("cameraHolder");


    return function (v) {
      rotation.set(rx, ry, 0);
      v.copy(direction).applyEuler(rotation); // console.log(v);

      return v;
    };
  }(); // const moveLeft = function() {
  //   return moveLeft;
  // };
  // const moveRight = function() {
  //   return moveRight;
  // };
  // const moveForward = function() {
  //   return moveForward;
  // };
  // const moveBackward = function() {
  //   return moveBackward;
  // };
  // const lockMoveForward = function(boolean) {
  //   lockMoveForward = boolean;
  // };
  // const lockMoveBackward = function(boolean) {
  //   lockMoveBackward = boolean;
  // };
  // const lockMoveLeft = function(boolean) {
  //   lockMoveLeft = boolean;
  // };
  // const lockMoveRight = function(boolean) {
  //   lockMoveRight = boolean;
  // };


  var unlockAllDirections = function unlockAllDirections() {
    self.lockMoveForward(false);
    self.lockMoveBackward(false);
    self.lockMoveLeft(false);
    self.lockMoveRight(false);
  };

  var setRotation = function setRotation(x, y) {
    var camHolder = fpsBody.getObjectByName("cameraHolder");
    if (x !== null) camHolder.rotation.x = x;
    if (y !== null) fpsBody.rotation.y = y;
  };

  return /*#__PURE__*/external_react_default().createElement(vendor_RotationPad, null);
  return /*#__PURE__*/external_react_default().createElement(TouchControls_W0, null, "[ Touch4 ]");
};

TouchControls.prototype = {
  addToScene: function addToScene(scene) {
    this.scene = scene;
    scene.add(this.fpsBody);
  },
  setPosition: function setPosition(x, y, z) {
    this.fpsBody.position.set(x, y, z);
  },
  stopMouseMoving: function stopMouseMoving() {
    isRightMouseDown = false;
  },
  getHitObjects: function getHitObjects() {
    return hitObjects;
  }
};
/* harmony default export */ const vendor_TouchControls = (TouchControls);
;// CONCATENATED MODULE: ./src/components/locations3d/Equirectangular4.jsx
/*
 * @TODO: this is just a copy of equirectangular2, discard
 */


 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json









var Equirectangular4_Blocker = external_styled_components_default().div.withConfig({
  displayName: "Equirectangular4__Blocker",
  componentId: "sc-n47vax-0"
})(["border:1px dashed red;position:relative;width:100%;height:100%;#Crosshair{width:50px;height:50px;position:absolute;left:50%;top:50%;color:white;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;}}"]);
var W = external_styled_components_default().div.withConfig({
  displayName: "Equirectangular4__W",
  componentId: "sc-n47vax-1"
})(["border:1px solid blue;height:90vh;"]);
/**
 * Equirectangular2
 * _vp_ 2021-11-15
 * Let's wire in a simple floor and full-window sizing.
 *
 * Threejs units of measure are centimeters (cm).
 *
 */

var Equirectangular2 = function Equirectangular2(props) {
  (0,shared/* logg */.IJ)(props, 'Equirectangular2');
  var map = props.map;
  var history = (0,external_react_router_dom_.useHistory)();
  var camera,
      controls,
      markerObjects = [],
      markerObjectsIdxs = [],
      raycaster,
      renderer,
      texture,
      scene;
  var width, height;
  var viewAngle = 45,
      near = 1,
      far = 10000;
  var aspect;
  var stats;
  var sceneObject, intersected;

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      folded = _useContext.folded,
      setFolded = _useContext.setFolded,
      itemToUnlock = _useContext.itemToUnlock,
      setItemToUnlock = _useContext.setItemToUnlock,
      mapPanelWidth = _useContext.mapPanelWidth,
      setMapPanelWidth = _useContext.setMapPanelWidth,
      mapPanelHeight = _useContext.mapPanelHeight,
      setMapPanelHeight = _useContext.setMapPanelHeight,
      ratedConfirmation = _useContext.ratedConfirmation,
      setRatedConfirmation = _useContext.setRatedConfirmation,
      showItem = _useContext.showItem,
      setShowItem = _useContext.setShowItem,
      showUrl = _useContext.showUrl,
      setShowUrl = _useContext.setShowUrl,
      twofoldPercent = _useContext.twofoldPercent;

  var blockerRef = (0,external_react_.useRef)(null);
  var wContainerRef = (0,external_react_.useRef)(null);
  var instructionsRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    init();
    animate();
  }, []);
  (0,external_react_.useEffect)(function () {
    window.dispatchEvent(new Event('resize'));
  }, [bottomDrawerOpen, folded, twofoldPercent]);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new external_three_.Vector3();
  var direction = new external_three_.Vector3();
  var vertex = new external_three_.Vector3();
  var color = new external_three_.Color();

  function init() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    camera = new external_three_.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0xffffff);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750); // @TODO: what this?

    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75); // @TODO: what this?

    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls_PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      (0,shared/* logg */.IJ)('locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      (0,shared/* logg */.IJ)('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
    /*
     * Origin: axis helper
     */

    var axes = new external_three_.AxisHelper(700);
    scene.add(axes);
    var wContainer = wContainerRef.current;

    function addControls() {
      var options = {
        speedFactor: 0.5,
        delta: 1,
        rotationFactor: 0.002,
        maxPitch: 55,
        hitTest: true,
        hitTestDistance: 40
      };
      controls = new vendor_TouchControls({
        container: wContainer,
        camera: camera,
        options: options,
        RotationPad: rotationPad,
        THREE: external_three_
      });
      controls.setPosition(0, 35, 400);
      controls.addToScene(scene); // controls.setRotation(0.15, -0.15);
    }

    addControls();
    /*
     * Floor
     */

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */

    var floorGeometry = new external_three_.PlaneGeometry(100, 100, 10, 10); // width, height, w segments, h segments
    // let floorGeometry = new THREE.CircleGeometry(100, 32) // radius, segments, thetaStart, thetaLength

    floorGeometry.rotateX(-Math.PI / 2);
    texture = external_three_.ImageUtils.loadTexture("/assets/textures/100x100_lazer-floor.png");
    texture.wrapS = external_three_.RepeatWrapping;
    texture.wrapT = external_three_.RepeatWrapping;
    texture.repeat.set(10, 10);
    var floorMaterial = new external_three_.MeshPhongMaterial({
      map: texture // transparent: true,

    });
    var floor = new external_three_.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);
    /*
     * Model Import
     */
    // const scenesPath = '/assets/scenes/'
    // const objectsPath = '/assets/objects/'
    // let modelName = 'polycity' // 'wasyaco-reception' // 'tiny-house-2'
    // const texturePath = `${modelName}/${modelName}.mtl`
    // const modelPath = `${modelName}/${modelName}.obj`
    // const manager = new THREE.LoadingManager()
    // const onProgress = (xhr) => {
    //   if (xhr.lengthComputable) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }
    // const onError = () => {}
    // const onLoad = (materials) => {
    //   materials.preload()
    //   const objLoader = new OBJLoader( manager )
    //   objLoader.setMaterials( materials )
    //   objLoader.setPath( scenesPath)
    //   objLoader.load( modelPath, ( object ) => {
    //     object.traverse((child) => {
    //       if (child.isMesh) {
    //         child.geometry.scale(0.10, 0.10, 0.10) // @TODO: change?
    //       }
    //     })
    //     object.position.x = Math.random() * 500
    //     object.position.y = 10
    //     object.position.z = Math.random() * 500
    //     logg(object, '1st object')
    //     scene.add( object )
    //     markerObjects.push( object )
    //     markerObjectsIdxs.push({ uuid: object.uuid, name: 'camaro75', slug: 'construct1' }) // @TODO: change!
    //   }, onProgress, onError )
    // }
    // const mtlLoader = new MTLLoader(manager)
    // mtlLoader.setPath(scenesPath)
    // mtlLoader.load(texturePath, onLoad)

    /*
     * Skybox
     */

    var textureLoader = new external_three_.TextureLoader();
    var assetPath = map.img_path;
    texture = textureLoader.load(assetPath, function () {
      var rt = new external_three_.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
    /*
     * and render
     */

    renderer = new external_three_.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }
  /* From: https://threejsfundamentals.org/threejs/lessons/threejs-responsive.html */


  function resizeRendererToDisplaySize() {
    var canvas = renderer.domElement;
    var width = blockerRef.current.clientWidth;
    var height = blockerRef.current.clientHeight;
    var needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height);
    }

    return needResize;
  }

  function onWindowResize() {
    if (resizeRendererToDisplaySize()) {
      var _width = blockerRef.current.clientWidth;
      var _height = blockerRef.current.clientHeight;
      camera.aspect = _width / _height;
      camera.updateProjectionMatrix();
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (controls.isLocked === true) {
      var cameraDirection = controls.getDirection(new external_three_.Vector3(0, 0, 0)).clone();
      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new external_three_.Raycaster(camera.position, cameraDirection);
      var intersections = raycaster.intersectObjects(markerObjects, true);

      if (intersections.length) {
        var pickedObject = intersections[0].object; // collision

        if (intersections[0].distance < 5) {
          moveForward = false;
        }
      }

      var onObject = intersections.length > 0;
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/external_react_default().createElement(W, {
    ref: wContainerRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(Equirectangular4_Blocker, {
    ref: blockerRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  }), /*#__PURE__*/external_react_default().createElement(vendor_RotationPad, null)));
};

/* harmony default export */ const Equirectangular4 = (Equirectangular2);
;// CONCATENATED MODULE: ./src/components/locations3d/TabiversePlanet.jsx


 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json






/**
 * TabiversePlanet
 */

var TabiversePlanet = function TabiversePlanet(props) {
  var camera;
  var geometry;
  var material;
  var planet;
  var renderer;
  var texture;
  var scene;
  var blockerRef = (0,external_react_.useRef)(null);
  var instructionsRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    init();
    animate();
  }, []);

  function init() {
    camera = new external_three_.PerspectiveCamera(75, 2, 0.1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    camera.position.z = -10;
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0x31231f);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750);
    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    /*
     * Floor
     */
    // texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`)
    // let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    // floorGeometry.rotateX( - Math.PI / 2 )
    // const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )

    /*
     * Planet
    **/

    texture = external_three_.ImageUtils.loadTexture("/assets/textures/2k_mercury.jpeg");
    geometry = new external_three_.SphereBufferGeometry(1, 32, 32); // geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    material = new external_three_.MeshBasicMaterial({
      map: texture
    });
    planet = new external_three_.Mesh(geometry, material);
    planet.position.y = 10;
    planet.position.z = -12;
    scene.add(planet);
    /*
     * Render
     */

    renderer = new external_three_.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(700, 350); // aspect ratio 0.5

    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
  }

  function animate() {
    requestAnimationFrame(animate); // camera.rotation.x += 0.01
    // camera.rotation.y += 0.01

    planet.rotation.y += 0.00035;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement(locations3d_Blocker, Object.assign({}, shared.S, {
    ref: blockerRef
  })));
};

/* harmony default export */ const locations3d_TabiversePlanet = (TabiversePlanet);
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/OctreeHelper.js
function OctreeHelper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OctreeHelper_createClass(Constructor, protoProps, staticProps) { if (protoProps) OctreeHelper_defineProperties(Constructor.prototype, protoProps); if (staticProps) OctreeHelper_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function OctreeHelper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OctreeHelper_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) OctreeHelper_setPrototypeOf(subClass, superClass); }

function OctreeHelper_setPrototypeOf(o, p) { OctreeHelper_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OctreeHelper_setPrototypeOf(o, p); }

function OctreeHelper_createSuper(Derived) { var hasNativeReflectConstruct = OctreeHelper_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = OctreeHelper_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = OctreeHelper_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return OctreeHelper_possibleConstructorReturn(this, result); }; }

function OctreeHelper_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return OctreeHelper_assertThisInitialized(self); }

function OctreeHelper_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OctreeHelper_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function OctreeHelper_getPrototypeOf(o) { OctreeHelper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OctreeHelper_getPrototypeOf(o); }



var OctreeHelper = /*#__PURE__*/function (_THREE$LineSegments) {
  OctreeHelper_inherits(OctreeHelper, _THREE$LineSegments);

  var _super = OctreeHelper_createSuper(OctreeHelper);

  function OctreeHelper(octree) {
    var _this;

    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xffff00;

    OctreeHelper_classCallCheck(this, OctreeHelper);

    var vertices = [];

    function traverse(tree) {
      for (var i = 0; i < tree.length; i++) {
        var min = tree[i].box.min;
        var max = tree[i].box.max;
        vertices.push(max.x, max.y, max.z);
        vertices.push(min.x, max.y, max.z); // 0, 1

        vertices.push(min.x, max.y, max.z);
        vertices.push(min.x, min.y, max.z); // 1, 2

        vertices.push(min.x, min.y, max.z);
        vertices.push(max.x, min.y, max.z); // 2, 3

        vertices.push(max.x, min.y, max.z);
        vertices.push(max.x, max.y, max.z); // 3, 0

        vertices.push(max.x, max.y, min.z);
        vertices.push(min.x, max.y, min.z); // 4, 5

        vertices.push(min.x, max.y, min.z);
        vertices.push(min.x, min.y, min.z); // 5, 6

        vertices.push(min.x, min.y, min.z);
        vertices.push(max.x, min.y, min.z); // 6, 7

        vertices.push(max.x, min.y, min.z);
        vertices.push(max.x, max.y, min.z); // 7, 4

        vertices.push(max.x, max.y, max.z);
        vertices.push(max.x, max.y, min.z); // 0, 4

        vertices.push(min.x, max.y, max.z);
        vertices.push(min.x, max.y, min.z); // 1, 5

        vertices.push(min.x, min.y, max.z);
        vertices.push(min.x, min.y, min.z); // 2, 6

        vertices.push(max.x, min.y, max.z);
        vertices.push(max.x, min.y, min.z); // 3, 7

        traverse(tree[i].subTrees);
      }
    }

    traverse(octree.subTrees);
    var geometry = new external_three_.BufferGeometry();
    geometry.setAttribute('position', new external_three_.Float32BufferAttribute(vertices, 3));
    _this = _super.call(this, geometry, new external_three_.LineBasicMaterial({
      color: color,
      toneMapped: false
    }));
    _this.octree = octree;
    _this.color = color;
    _this.type = 'OctreeHelper';
    return _this;
  }

  return OctreeHelper_createClass(OctreeHelper);
}(external_three_.LineSegments); // THREE.OctreeHelper = OctreeHelper;


/* harmony default export */ const vendor_OctreeHelper = (OctreeHelper);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/math/Capsule.js
var math_Capsule = __webpack_require__(942936);
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/CSS2DRenderer.js
function CSS2DRenderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CSS2DRenderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CSS2DRenderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) CSS2DRenderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) CSS2DRenderer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = CSS2DRenderer_getPrototypeOf(object); if (object === null) break; } return object; }

function CSS2DRenderer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) CSS2DRenderer_setPrototypeOf(subClass, superClass); }

function CSS2DRenderer_setPrototypeOf(o, p) { CSS2DRenderer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CSS2DRenderer_setPrototypeOf(o, p); }

function CSS2DRenderer_createSuper(Derived) { var hasNativeReflectConstruct = CSS2DRenderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CSS2DRenderer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CSS2DRenderer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CSS2DRenderer_possibleConstructorReturn(this, result); }; }

function CSS2DRenderer_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return CSS2DRenderer_assertThisInitialized(self); }

function CSS2DRenderer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CSS2DRenderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CSS2DRenderer_getPrototypeOf(o) { CSS2DRenderer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CSS2DRenderer_getPrototypeOf(o); }



var CSS2DObject = /*#__PURE__*/function (_Object3D) {
  CSS2DRenderer_inherits(CSS2DObject, _Object3D);

  var _super = CSS2DRenderer_createSuper(CSS2DObject);

  function CSS2DObject() {
    var _this2;

    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('div');

    CSS2DRenderer_classCallCheck(this, CSS2DObject);

    _this2 = _super.call(this);
    _this2.isCSS2DObject = true;
    _this2.element = element;
    _this2.element.style.position = 'absolute';
    _this2.element.style.userSelect = 'none';

    _this2.element.setAttribute('draggable', false);

    _this2.addEventListener('removed', function () {
      this.traverse(function (object) {
        if (object.element instanceof Element && object.element.parentNode !== null) {
          object.element.parentNode.removeChild(object.element);
        }
      });
    });

    return _this2;
  }

  CSS2DRenderer_createClass(CSS2DObject, [{
    key: "copy",
    value: function copy(source, recursive) {
      _get(CSS2DRenderer_getPrototypeOf(CSS2DObject.prototype), "copy", this).call(this, source, recursive);

      this.element = source.element.cloneNode(true);
      return this;
    }
  }]);

  return CSS2DObject;
}(external_three_.Object3D); //


var CSS2DRenderer_vector = new external_three_.Vector3();

var _viewMatrix = new external_three_.Matrix4();

var _viewProjectionMatrix = new external_three_.Matrix4();

var _a = new external_three_.Vector3();

var _b = new external_three_.Vector3();

var CSS2DRenderer = /*#__PURE__*/(/* unused pure expression or super */ null && (CSS2DRenderer_createClass(function CSS2DRenderer() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  CSS2DRenderer_classCallCheck(this, CSS2DRenderer);

  var _this = this;

  var _width, _height;

  var _widthHalf, _heightHalf;

  var cache = {
    objects: new WeakMap()
  };
  var domElement = parameters.element !== undefined ? parameters.element : document.createElement('div');
  domElement.style.overflow = 'hidden';
  this.domElement = domElement;

  this.getSize = function () {
    return {
      width: _width,
      height: _height
    };
  };

  this.render = function (scene, camera) {
    if (scene.matrixWorldAutoUpdate === true) scene.updateMatrixWorld();
    if (camera.parent === null && camera.matrixWorldAutoUpdate === true) camera.updateMatrixWorld();

    _viewMatrix.copy(camera.matrixWorldInverse);

    _viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, _viewMatrix);

    renderObject(scene, scene, camera);
    zOrder(scene);
  };

  this.setSize = function (width, height) {
    _width = width;
    _height = height;
    _widthHalf = _width / 2;
    _heightHalf = _height / 2;
    domElement.style.width = width + 'px';
    domElement.style.height = height + 'px';
  };

  function renderObject(object, scene, camera) {
    if (object.isCSS2DObject) {
      CSS2DRenderer_vector.setFromMatrixPosition(object.matrixWorld);

      CSS2DRenderer_vector.applyMatrix4(_viewProjectionMatrix);

      var visible = object.visible === true && CSS2DRenderer_vector.z >= -1 && CSS2DRenderer_vector.z <= 1 && object.layers.test(camera.layers) === true;
      object.element.style.display = visible === true ? '' : 'none';

      if (visible === true) {
        object.onBeforeRender(_this, scene, camera);
        var element = object.element;
        element.style.transform = 'translate(-50%,-50%) translate(' + (CSS2DRenderer_vector.x * _widthHalf + _widthHalf) + 'px,' + (-CSS2DRenderer_vector.y * _heightHalf + _heightHalf) + 'px)';

        if (element.parentNode !== domElement) {
          domElement.appendChild(element);
        }

        object.onAfterRender(_this, scene, camera);
      }

      var objectData = {
        distanceToCameraSquared: getDistanceToSquared(camera, object)
      };
      cache.objects.set(object, objectData);
    }

    for (var i = 0, l = object.children.length; i < l; i++) {
      renderObject(object.children[i], scene, camera);
    }
  }

  function getDistanceToSquared(object1, object2) {
    _a.setFromMatrixPosition(object1.matrixWorld);

    _b.setFromMatrixPosition(object2.matrixWorld);

    return _a.distanceToSquared(_b);
  }

  function filterAndFlatten(scene) {
    var result = [];
    scene.traverse(function (object) {
      if (object.isCSS2DObject) result.push(object);
    });
    return result;
  }

  function zOrder(scene) {
    var sorted = filterAndFlatten(scene).sort(function (a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return b.renderOrder - a.renderOrder;
      }

      var distanceA = cache.objects.get(a).distanceToCameraSquared;
      var distanceB = cache.objects.get(b).distanceToCameraSquared;
      return distanceA - distanceB;
    });
    var zMax = sorted.length;

    for (var i = 0, l = sorted.length; i < l; i++) {
      sorted[i].element.style.zIndex = zMax - i;
    }
  }
})));


;// CONCATENATED MODULE: ./src/components/locations3d/vendor/ResourceTracker.jsx
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ResourceTracker_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ResourceTracker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ResourceTracker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ResourceTracker_arrayLikeToArray(o, minLen); }

function ResourceTracker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ResourceTracker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ResourceTracker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ResourceTracker_createClass(Constructor, protoProps, staticProps) { if (protoProps) ResourceTracker_defineProperties(Constructor.prototype, protoProps); if (staticProps) ResourceTracker_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * From: https://r105.threejsfundamentals.org/threejs/lessons/threejs-cleanup.html
**/

var ResourceTracker = /*#__PURE__*/function () {
  function ResourceTracker() {
    ResourceTracker_classCallCheck(this, ResourceTracker);

    this.resources = new Set();
  }

  ResourceTracker_createClass(ResourceTracker, [{
    key: "track",
    value: function track(resource) {
      var _this = this;

      if (!resource) {
        return resource;
      } // handle children and when material is an array of materials or
      // uniform is array of textures


      if (Array.isArray(resource)) {
        resource.forEach(function (resource) {
          return _this.track(resource);
        });
        return resource;
      }

      if (resource.dispose || resource instanceof external_three_.Object3D) {
        this.resources.add(resource);
      }

      if (resource instanceof external_three_.Object3D) {
        this.track(resource.geometry);
        this.track(resource.material);
        this.track(resource.children);
      } else if (resource instanceof external_three_.Material) {
        // We have to check if there are any textures on the material
        for (var _i = 0, _Object$values = Object.values(resource); _i < _Object$values.length; _i++) {
          var value = _Object$values[_i];

          if (value instanceof external_three_.Texture) {
            this.track(value);
          }
        } // We also have to check if any uniforms reference textures or arrays of textures


        if (resource.uniforms) {
          for (var _i2 = 0, _Object$values2 = Object.values(resource.uniforms); _i2 < _Object$values2.length; _i2++) {
            var _value = _Object$values2[_i2];

            if (_value) {
              var uniformValue = _value.value;

              if (uniformValue instanceof external_three_.Texture || Array.isArray(uniformValue)) {
                this.track(uniformValue);
              }
            }
          }
        }
      }

      return resource;
    }
  }, {
    key: "untrack",
    value: function untrack(resource) {
      this.resources["delete"](resource);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator = _createForOfIteratorHelper(this.resources),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resource = _step.value;

          if (resource instanceof external_three_.Object3D) {
            if (resource.parent) {
              resource.parent.remove(resource);
            }
          }

          if (resource.dispose) {
            resource.dispose();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.resources.clear();
    }
  }]);

  return ResourceTracker;
}();

/* harmony default export */ const vendor_ResourceTracker = (ResourceTracker);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelDesktop.jsx














/**
 * Unit converter
 * 1 unit is a centimeter
**/

var U = {
  cm: function cm(inn) {
    return inn;
  },
  m: function m(inn) {
    return inn * 100;
  },
  centimeters: function centimeters(inn) {
    return inn;
  },
  // unit
  meters: function meters(inn) {
    return inn * 100;
  } // e.g. 1 meter is 100cm

};
/**
 * ThreePanelDesktop
 *
 * Units are centimeters
 *
 * Math capsule: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/math/Capsule.js
 *
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-13
 *
**/

var ThreePanelDesktop = function ThreePanelDesktop(props) {
  (0,shared/* logg */.IJ)(props, 'ThreePanelDesktop');
  var map = props.map,
      slug = props.slug;

  var _useContext = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext.useHistory,
      scene = _useContext.scene,
      worldOctree = _useContext.worldOctree,
      setWorldOctree = _useContext.setWorldOctree,
      markers2destinationSlugs = _useContext.markers2destinationSlugs,
      setSarkers2destinationSlugs = _useContext.setSarkers2destinationSlugs,
      tracked = _useContext.tracked;

  var resMgr = new vendor_ResourceTracker();
  var track = resMgr.track.bind(resMgr); // const [ pickingObjects, setPickingObjects ] = useState([])

  var pickingObjects = (0,external_react_.useRef)([]);
  var history = useHistory();
  var camera = new external_three_.PerspectiveCamera(75, 2, U.cm(10), U.m(25)); // fov, aspect, near, far

  var controls;
  var raycaster;
  var keyStates = {};
  var renderer = new external_three_.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(700, 350); // aspect ratio 0.5

  renderer.shadowMap.enabled = true;
  var texture;
  var GRAVITY = U.m(3);
  var playerH = U.m(1); // 1.75 ?

  var playerForce = U.m(8);
  var blockerRef = (0,external_react_.useRef)(null);
  var instructionsRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    resMgr.dispose();
    init();
    animate();
    onWindowResize();
  }, [map.id, slug]);
  var textureLoader = new external_three_.TextureLoader();
  var gltfLoader = new loaders_GLTFLoader/* GLTFLoader */.E();
  var octreeHelper;
  var material;
  var helperMaterial = new external_three_.MeshBasicMaterial({
    color: 0xffff00
  });
  var wireframeMaterial = new external_three_.MeshStandardMaterial();
  wireframeMaterial.wireframe = true;
  var playerCollider = new math_Capsule/* Capsule */.s( // begin, end, radius
  new external_three_.Vector3(0, 0, 0), new external_three_.Vector3(0, playerH, 0), U.m(0.5));
  playerCollider.translate(new external_three_.Vector3(-U.m(2), 0, U.m(3))); // @TODO: make adjustable per-Location

  var playerColliderHelper = new external_three_.Mesh(new external_three_.CylinderBufferGeometry(U.m(0.05), U.m(0.025), U.m(0.15), 5), // radiusTop, radiusBottom, height, radialSegments
  helperMaterial);
  var cameraCollider = new math_Capsule/* Capsule */.s(new external_three_.Vector3(0, 0, 0), new external_three_.Vector3(0, playerH, 0), 6); // begin, end, radius

  var cameraColliderHelper = new external_three_.Mesh(new external_three_.CylinderBufferGeometry(6, 3, playerH, 5), // radiusTop, radiusBottom, height, radialSegments
  helperMaterial);
  var deltaPosition;
  var playerOnObject = false;
  var prevTime = performance.now();
  var playerVelocity = new external_three_.Vector3();
  var playerDirection = new external_three_.Vector3();
  var pickedObject, pickedObjectSavedColor;
  var result; // collisions

  var playerCtlGeometry = new external_three_.SphereGeometry(5, 8, 8); // radius, widthSegments, heightSegments, phiStart, phiEnd, thetaStart, thetaEnd

  var playerCtl;
  window.addEventListener('resize', onWindowResize);

  var dispose = function dispose(resource) {
    if (resource instanceof external_three_.Object3D) {
      if (resource.parent) {
        resource.parent.remove(resource);
      }
    }

    if (resource.dispose) {
      resource.dispose();
    }
  };

  function initLabels() {// const labelRenderer = new CSS2DRenderer()
    // const earthDiv = document.createElement( 'div' )
    // earthDiv.className = 'label'
    // earthDiv.textContent = 'Earth'
    // earthDiv.style.marginTop = '-1em'
    // const earthLabel = new CSS2DObject( earthDiv )
    // earthLabel.position.set( 0, 20, 0 )
    // playerCtl.add( earthLabel )
    // earthLabel.layers.set( 0 )
    // labelRenderer.setSize( window.innerWidth, window.innerHeight )
    // labelRenderer.domElement.style.position = 'absolute'
    // labelRenderer.domElement.style.top = '0px'
    // document.body.appendChild( labelRenderer.domElement )
  }

  var initStudio = function initStudio(c) {
    var _shadowLight$position;

    (0,shared/* logg */.IJ)(null, 'initStudio');
    var light; // // Hemisphere
    // const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 ) // skylight color, ground color, intensity
    // light.position.set( 0.5, 1, 0.75 )
    // scene.add( light )
    // Ambient

    light = new external_three_.AmbientLight(0xFFFFFF, 1.1);
    scene.add(light); // Directional

    light = new external_three_.DirectionalLight(0xFFFFFF, 1);
    light.position.set(50, 100, 0);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target); // Directional Shadow

    light.castShadow = true;
    var shadowLight = light;
    shadowLight.shadow.camera.bottom = -150;
    shadowLight.shadow.camera.top = 150;
    shadowLight.shadow.camera.left = -150;
    shadowLight.shadow.camera.right = 150;
    shadowLight.shadow.camera.near = 10;
    shadowLight.shadow.camera.far = 5000;
    shadowLight.shadow.camera.updateProjectionMatrix();
    var shadowLightPosition = [0, 400, 0];

    (_shadowLight$position = shadowLight.position).set.apply(_shadowLight$position, shadowLightPosition);

    scene.add(shadowLight);
    var helper = new external_three_.CameraHelper(shadowLight.shadow.camera); // scene.add( helper )
    // Point
    // const color = 0xFFFFFF;
    // const intensity = 100;
    // const light = new THREE.PointLight(color, intensity);
    // light.position.set( 0, 250, 0 )
    // scene.add(light);
  };

  var initInteriorStudio = function initInteriorStudio(c) {
    (0,shared/* logg */.IJ)(null, 'initInteriorStudio');
    scene.background = new external_three_.Color(0xffffff);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750);
    {
      /* Lights */
      // // Illuminate everytyhing
      // const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
      // light.position.set( 0.5, 1, 0.75 )
      // scene.add( light )
      // // Shadow
      // const white = 0xffffff
      // const shadowLightIntensity = 2
      // const shadowLightPosition = [ 0*10, 40*10, -10*100 ]
      // const shadowLight = new THREE.DirectionalLight(white, shadowLightIntensity)
      // shadowLight.castShadow = true
      // // shadowLight.shadow.mapSize.width = 512
      // // shadowLight.shadow.mapSize.height = 512
      // shadowLight.shadow.camera.bottom = -150
      // shadowLight.shadow.camera.top = 150
      // shadowLight.shadow.camera.left = -150
      // shadowLight.shadow.camera.right = 150
      // shadowLight.shadow.camera.near = 10
      // shadowLight.shadow.camera.far = 5000
      // shadowLight.shadow.camera.updateProjectionMatrix()
      // shadowLight.position.set( ...shadowLightPosition )
      // scene.add( shadowLight )
      // // const helper = new THREE.DirectionalLightHelper( shadowLight, 5 )
      // const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
      // scene.add( helper )
    } // endLights

    if (c.hasFloor) {
      texture = textureLoader.load("/assets/textures/floor-1.png");
      var textureM = U.meters(1); // the texture is a unit meter

      texture.wrapS = texture.wrapT = external_three_.RepeatWrapping;
      texture.offset.set(0, 0);
      texture.repeat.set(c.studioWidth / textureM, c.studioLength / textureM);
      var floorGeometry = new external_three_.PlaneGeometry(c.studioWidth, c.studioLength); // width, height, widthSegments, heightSegments

      floorGeometry.rotateZ(-Math.PI / 2);
      floorGeometry.rotateX(-Math.PI / 2); // Basic material cannot receive shadow, but standard material can.
      // material = new THREE.MeshStandardMaterial({ color: 0x333333 })

      material = new external_three_.MeshStandardMaterial({
        map: texture,
        side: external_three_.DoubleSide
      });
      var floor = new external_three_.Mesh(floorGeometry, material);
      floor.receiveShadow = true;
      scene.add(floor);
    }
    /* Skybox */


    texture = textureLoader.load("/assets/textures/space.jpg", function () {
      var rt = new external_three_.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
  };

  var initControls = function initControls() {
    controls = new PointerLockControls_PointerLockControls(playerCtl, document.body); // Only rotation, no movement!

    blockerRef.current.addEventListener('click', function () {
      (0,shared/* logg */.IJ)('event #click, locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      (0,shared/* logg */.IJ)('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {
      (0,shared/* logg */.IJ)('event #unlock'); // blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());

    var onClick = function onClick() {
      // There is no event here.
      if (pickedObject && controls.isLocked) {
        (0,shared/* logg */.IJ)(tracked, 'cleaning Up');
        /* cleanup */

        while (tracked.length) {
          var popped = tracked.pop();
          (0,shared/* logg */.IJ)(popped, 'popped');
          scene.remove(popped);
          dispose(popped);
        }

        var TmpWorldOctree = new math_Octree/* Octree */.V();
        setWorldOctree(TmpWorldOctree); // scene.remove(octreeHelper)

        history.push(AppRouter/* appPaths.location */.X.location({
          slug: markers2destinationSlugs[pickedObject.uuid].destination_slug
        }));
      }
    };

    document.addEventListener('keydown', function (event) {
      keyStates[event.code] = true;
    });
    document.addEventListener('keyup', function (event) {
      keyStates[event.code] = false;
    });
    document.addEventListener('click', onClick);
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
  };

  var initModels = function initModels() {
    var outlineMat = new external_three_.MeshLambertMaterial({
      color: 'black',
      side: external_three_.BackSide
    });

    outlineMat.onBeforeCompile = function (shader) {
      var token = '#include <begin_vertex>';
      var customTransform = "\n        vec3 transformed = position + objectNormal*0.06;\n      ";
      shader.vertexShader = shader.vertexShader.replace(token, customTransform);
    };

    var regularMat = new external_three_.MeshPhongMaterial({
      color: 'yellow',
      side: external_three_.FrontSide
    }); // setPickingObjects([])

    pickingObjects.current = [];
    map.markers.map(function (marker, idx) {
      if (marker.asset3d_path) {
        gltfLoader.load(marker.asset3d_path, function (gltf) {
          tracked.push(gltf.scene);
          (0,shared/* logg */.IJ)(tracked, 'adding Tracking');
          gltf.scene.position.x = marker.x;
          gltf.scene.position.y = marker.y;
          gltf.scene.position.z = marker.z;
          gltf.scene.scale.multiplyScalar(110); // @TODO: abstract. _vp_ 2022-10-23

          var clone = gltf.scene.clone(); // clone.scale.multiplyScalar(110)
          // clone.scale.multiplyScalar(1.1)
          // clone.scale.set(112, 112, 112)

          clone.traverse(function (child) {
            child.material = outlineMat;
          });
          scene.add(clone);
          scene.add(gltf.scene);
          /* show the bounding box */
          // let box = new THREE.BoxHelper(gltf.scene, 0xff00ff)
          // scene.add( box )

          /* Collisions */

          worldOctree.fromGraphNode(gltf.scene, scene);
          octreeHelper = new vendor_OctreeHelper(worldOctree);
          octreeHelper.visible = false;
          scene.add(octreeHelper); // @TODO: these need to be multiple, if I'm keeping it

          gltf.scene.traverse(function (child) {
            // shadows enabled?
            if (child.isMesh) {
              if (marker.castShadow) {
                child.castShadow = true;
              }

              if (marker.receiveShadow) {
                child.receiveShadow = true;
              }
            }
          });

          if (marker.destination_slug) {
            // init Picking
            pickingObjects.current.push(gltf.scene);
            gltf.scene.traverse(function (child) {
              if (child.isMesh) {
                child.material.emissive.setHex(0x00FFFF); // // @TODO: remove usage of markers2destinationSlugs

                markers2destinationSlugs[child.uuid] = {
                  destination_slug: marker.destination_slug
                };
              }
            });
          }
        });
      }
    });
  }; // end InitModels


  function init() {
    (0,shared/* logg */.IJ)(scene, 'init Scene');
    var axesHelper = new external_three_.AxesHelper(50); // origin

    scene.add(axesHelper);
    camera.position.y = U.m(0);
    camera.position.z = U.cm(0); // 40cm behind the body

    playerCtl = new external_three_.Mesh(playerCtlGeometry, wireframeMaterial);
    playerCtl.position.y = playerH;
    playerCtl.position.x = -U.m(2); // @TODO: make adjustable per-Location

    playerCtl.position.z = U.m(3);
    playerCtl.add(camera);
    scene.add(playerCtl);
    scene.add(playerColliderHelper);
    initControls();
    initStudio(map.config.studio);
    initModels();
    blockerRef.current.appendChild(renderer.domElement);
  }

  function getForwardVector() {
    playerCtl.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();
    return playerDirection;
  }

  function getSideVector() {
    playerCtl.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();
    playerDirection.cross(camera.up);
    return playerDirection;
  }

  var animateBody = function animateBody(deltaTime) {
    deltaPosition = playerVelocity.clone().multiplyScalar(deltaTime);
    playerCollider.translate(deltaPosition);
    playerCtl.position.copy(playerCollider.end);
    playerColliderHelper.position.copy(playerCollider.end);
    playerCtl.position.y += playerVelocity.y * deltaTime;

    if (playerCtl.position.y < playerH) {
      playerVelocity.y = 0;
      playerCtl.position.y = playerH;
      playerOnObject = true;
    }
  };

  var animateCollisions = function animateCollisions() {
    if (!worldOctree) return; // player body

    result = worldOctree.capsuleIntersect(playerCollider);

    if (result) {
      playerOnObject = result.normal.y > 0;

      if (!playerOnObject) {
        playerVelocity.addScaledVector(result.normal, -result.normal.dot(playerVelocity));
      }

      playerCollider.translate(result.normal.multiplyScalar(result.depth));
    } // result = worldOctree.capsuleIntersect( cameraCollider )
    // if (result) {
    //   logg(result, 'camera Collision') // herehere
    //   // playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
    //   // playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
    // }

  };

  function animateControls(deltaTime) {
    var speedDelta = deltaTime * playerForce;
    if (playerOnObject) speedDelta *= 0.8; // gives a bit of air control

    if (keyStates['KeyW']) {
      playerVelocity.add(getForwardVector().multiplyScalar(-speedDelta));
    }

    if (keyStates['KeyS']) {
      playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
    }

    if (keyStates['KeyA']) {
      playerVelocity.add(getSideVector().multiplyScalar(speedDelta));
    }

    if (keyStates['KeyD']) {
      playerVelocity.add(getSideVector().multiplyScalar(-speedDelta));
    }

    if (playerOnObject) {
      if (keyStates['Space']) {
        playerVelocity.y = U.m(3);
        playerOnObject = false;
      }
    }

    var damping = Math.exp(-4 * deltaTime) - 1;

    if (!playerOnObject) {
      playerVelocity.y -= GRAVITY * deltaTime; // small air resistance

      damping *= 0.1;
    }

    playerVelocity.addScaledVector(playerVelocity, damping);
  }

  var animatePicking = function animatePicking() {
    var cameraPosition = camera.position.clone();
    cameraPosition.applyMatrix4(camera.matrixWorld);
    var cameraDirection = new external_three_.Vector3();
    camera.getWorldDirection(cameraDirection);
    cameraDirection.normalize();
    raycaster = new external_three_.Raycaster(cameraPosition, cameraDirection); // scene.add( new THREE.ArrowHelper( cameraDirection, cameraPosition, 100, 0xff0000 ) )

    var pickingIntersections = raycaster.intersectObjects(pickingObjects.current, true); // logg(pickingObjects, 'animating picking?')

    if (pickedObject) {
      pickedObject.material.emissive.setHex(pickedObjectSavedColor);
      pickedObject = undefined;
    }

    if (pickingIntersections.length) {
      pickedObject = pickingIntersections[0].object;
      pickedObjectSavedColor = pickedObject.material.emissive.getHex();
      pickedObject.material.emissive.setHex(0xFFFF00);
    }
  };

  function animate() {
    var time = performance.now();
    var delta = (time - prevTime) / 1000;

    if (controls.isLocked === true) {
      // camera.updateMatrixWorld()
      // playerCtl.updateMatrixWorld()
      animateControls(delta);
      animateBody(delta);
      animateCollisions();
      animatePicking();
    }

    renderer.render(scene, camera);
    prevTime = time;
    requestAnimationFrame(animate);
  }

  var onWindowResize = function onWindowResize() {
    // logg([blockerRef.current.clientWidth, blockerRef.current.clientHeight], 'ThreePanelDesktop. OnWindowResize')
    // if (!blockerRef.current) { return }
    // if (!camera) { return }
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
  };

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef,
    className: "Instructions empty"
  }), /*#__PURE__*/external_react_default().createElement(locations3d_Blocker, {
    ref: blockerRef,
    className: "Blocker"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const locations3d_ThreePanelDesktop = (ThreePanelDesktop);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelV1.jsx






var ThreePanelV1_Blocker = external_styled_components_default().div.withConfig({
  displayName: "ThreePanelV1__Blocker",
  componentId: "sc-tdhfy-0"
})(["height:calc(100% - ", ");"], function (p) {
  return p.theme.breadcrumbsHeight;
});
/**
 * ThreePanelV1
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 */

var ThreePanelV1_Loc = function Loc(props) {
  logg(props, 'ThreePanelV1');
  var camera,
      controls,
      object,
      objects = [],
      raycaster,
      renderer,
      scene;
  var blockerRef = useRef(null);
  var instructionsRef = useRef(null);
  useEffect(function () {
    init();
    animate();
  }, []);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new THREE.Vector3();
  var direction = new THREE.Vector3();
  var vertex = new THREE.Vector3();
  var color = new THREE.Color();

  function init() {
    /*
    // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
    // fov — Camera frustum vertical field of view.
    // aspect — Camera frustum aspect ratio.
    // near — Camera frustum near plane.
    // far — Camera frustum far plane.
    */
    // camera = new THREE.PerspectiveCamera( 75, 2, 1, 100 )
    camera = new THREE.PerspectiveCamera(75, 2, 1, 300);
    camera.position.y = 10;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      logg('locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      logg('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10); // floor
    // @TODO: it's not aligned to parcels the way I want

    var floorGeometry = new THREE.PlaneGeometry(460, 680, 100, 100);
    floorGeometry.rotateX(-Math.PI / 2); // vertex displacement

    var position = floorGeometry.attributes.position;

    for (var i = 0, l = position.count; i < l; i++) {
      vertex.fromBufferAttribute(position, i);
      vertex.x += Math.random() * 20 - 10;
      vertex.y += Math.random() * 2;
      vertex.z += Math.random() * 20 - 10;
      position.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

    floorGeometry.x = -200;
    floorGeometry.y = -200;
    floorGeometry.z = -200;
    position = floorGeometry.attributes.position;
    var colorsFloor = [];

    for (var _i = 0, _l = position.count; _i < _l; _i++) {
      color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
      colorsFloor.push(color.r, color.g, color.b);
    }

    floorGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colorsFloor, 3));
    var floorMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true
    });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floor); // objects

    /*
    const boxGeometry = new THREE.BoxGeometry( 20, 20, 20 ).toNonIndexed()
    position = boxGeometry.attributes.position
    const colorsBox = []
    for ( let i = 0, l = position.count; i < l; i ++ ) {
      color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
      colorsBox.push( color.r, color.g, color.b )
    }
    boxGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsBox, 3 ) )
    for ( let i = 0; i < 500; i ++ ) {
      const boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: true } )
      boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
       const box = new THREE.Mesh( boxGeometry, boxMaterial )
      box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20
      box.position.y = Math.floor( Math.random() * 20 ) * 20 + 10
      box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20
      scene.add( box )
      objects.push( box )
    }
    */
    // load OBJ
    // manager
    // this is specifically for tiny-house-1

    var loadModel = function loadModel() {
      object.traverse(function (child) {
        if (child.isMesh) {
          child.material.map = texture;
          child.geometry.scale(10, 10, 10);
        }
      });
      object.position.x = 100;
      object.position.y = 10;
      object.position.z = 100;
      scene.add(object);
    };

    var manager = new THREE.LoadingManager(loadModel);

    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    }; // texture


    var textureLoader = new THREE.TextureLoader(manager);
    var texture = textureLoader.load('textures/uv_grid_opengl.jpg'); // model
    // tiny-house-1

    var loader = new OBJLoader(manager);
    loader.load('/assets/scenes/tiny-house-1/tiny-house-1.obj', function (obj) {
      object = obj;
    }, function (xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
      }
    }, function (e) {
      logg(e, 'onError');
    }); // some delimiters for the first 6 parcels!

    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = 5;
    cube.position.z = 0;
    scene.add(cube);
    var items = [{
      color: 0xff0000,
      x: 1,
      y: 0,
      z: 0
    }, {
      color: 0x00ff00,
      x: 0,
      y: 1,
      z: 0
    }, {
      color: 0x0000ff,
      x: 0,
      y: 0,
      z: 1
    }];
    items.map(function (item, idx) {
      logg(item, 'item');
      var color = item.color,
          x = item.x,
          y = item.y,
          z = item.z;
      geometry = new THREE.BoxGeometry(1 + x * 10, 1 + y * 10, 1 + z * 10);
      material = new THREE.MeshBasicMaterial({
        color: color
      });
      cube = new THREE.Mesh(geometry, material);
      cube.position.x = x * 5;
      cube.position.y = 10 + y * 5;
      cube.position.z = z * 5;
      scene.add(cube);
    });
    var parcels = [{
      color: 0xff0000,
      x: 100,
      y: 1,
      z: 100
    }, {
      color: 0x00ff00,
      x: 100,
      y: 1,
      z: 320
    }, {
      color: 0x0000ff,
      x: -120,
      y: 1,
      z: 320
    }, {
      color: 0x660000,
      x: -120,
      y: 1,
      z: 100
    }, {
      color: 0x006600,
      x: -120,
      y: 1,
      z: -120
    }, {
      color: 0x000066,
      x: 100,
      y: 1,
      z: -120
    }];
    parcels.map(function (item, idx) {
      var color = item.color,
          x = item.x,
          y = item.y,
          z = item.z;
      var g = new THREE.BoxGeometry(200, 2, 200);
      var m = new THREE.MeshBasicMaterial({
        color: color
      });
      var p = new THREE.Mesh(g, m);
      p.position.x = x;
      p.position.y = y;
      p.position.z = z;
      scene.add(p);
    }); //

    renderer = new THREE.WebGLRenderer({
      antialias: true
    }); // renderer.setPixelRatio( window.devicePixelRatio )

    renderer.setPixelRatio(1);
    renderer.setSize(800, 400);
    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (controls.isLocked === true) {
      raycaster.ray.origin.copy(controls.getObject().position);
      raycaster.ray.origin.y -= 10;
      var intersections = raycaster.intersectObjects(objects, false);
      var onObject = intersections.length > 0;
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/React.createElement(F, null, /*#__PURE__*/React.createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/React.createElement(ThreePanelV1_Blocker, {
    ref: blockerRef
  }));
};

/* harmony default export */ const ThreePanelV1 = ((/* unused pure expression or super */ null && (ThreePanelV1_Loc)));
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelV2.jsx


 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json






var ThreePanelV2_Blocker = external_styled_components_default().div.withConfig({
  displayName: "ThreePanelV2__Blocker",
  componentId: "sc-123lz9r-0"
})(["border:2px solid red;position:relative;width:700px;height:350px;#Crosshair{width:50px;height:50px;position:absolute;left:50%;top:50%;color:white;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;}}"]);
/**
 * Loc = Location
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 */

var ThreePanelV2_Loc = function Loc(props) {
  // logg(props, 'Loc')
  var history = useHistory();
  var camera,
      controls,
      object,
      objects = [],
      markerObjects = [],
      markerObjectsIdxs = [],
      raycaster,
      renderer,
      texture,
      scene;
  var blockerRef = useRef(null);
  var instructionsRef = useRef(null);
  useEffect(function () {
    init();
    animate();
  }, []);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new THREE.Vector3();
  var direction = new THREE.Vector3();
  var vertex = new THREE.Vector3();
  var color = new THREE.Color();

  function init() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    camera = new THREE.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 0, 750);
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      logg('locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      logg('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());
    /*
     * Crosshair
     * From: https://codepen.io/driezis/pen/jOPzjLG?editors=1000
     */

    var pMat = new THREE.ShaderMaterial({
      uniforms: {
        main_color: {
          value: {
            r: 1,
            g: 1,
            b: 1
          }
        },
        border_color: {
          value: {
            r: 0,
            g: 0,
            b: 0.1
          }
        },
        thickness: {
          value: 0.006
        },
        height: {
          value: 0.13
        },
        offset: {
          value: 0.05
        },
        border: {
          value: 0.003
        },
        opacity: {
          value: 1
        },
        center: {
          value: {
            x: 0.5,
            y: 0.5
          }
        },
        rotation: {
          value: 0
        }
      },
      vertexShader: "\n                uniform float rotation;\n                uniform vec2 center;\n                #include <common>\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n                    vec2 scale;\n                    scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n                    scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n                    #ifndef USE_SIZEATTENUATION\n                        bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n                        if ( isPerspective ) scale *= - mvPosition.z;\n                    #endif\n                    vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n                    vec2 rotatedPosition;\n                    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n                    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n                    mvPosition.xy += rotatedPosition;\n                    gl_Position = projectionMatrix * mvPosition;\n                }\n            ",
      fragmentShader: "\n            uniform vec3 main_color;\n            uniform vec3 border_color;\n            uniform float opacity;\n\n            uniform float thickness;\n            uniform float height;\n            uniform float offset;\n            uniform float border;\n\n            varying vec2 vUv;\n            void main() {\n\n                float a = (step(abs(vUv.x - 0.5), thickness)) * step(abs(vUv.y - 0.5), height + offset) * step(offset, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness)) * step(abs(vUv.x - 0.5), height + offset) * step(offset, abs(vUv.x - 0.5));\n                float b = (step(abs(vUv.x - 0.5), thickness - border)) * step(abs(vUv.y - 0.5), height + offset - border) * step(offset + border, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness - border)) * step(abs(vUv.x - 0.5), height + offset - border) * step(offset + border, abs(vUv.x - 0.5));\n                gl_FragColor = vec4( mix(border_color, main_color, b), a * opacity);\n            }\n        ",
      transparent: true
    });
    var sprite = new THREE.Sprite(pMat); // scene.add(sprite);
    // sprite.position.set(0,0,-5);

    /*
     * Reticle
     */
    // var scale = 3
    // var cursorSize = 500
    // var reticle = new THREE.Mesh(
    //   new THREE.RingBufferGeometry( 0.85 * cursorSize, cursorSize, 32),
    //   new THREE.MeshBasicMaterial({color: 0xffffff, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
    // );
    // reticle.position.z = -100
    // reticle.lookAt(camera.position)
    // camera.add(reticle)

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);
    /*
     * Floor
     */
    // // random
    // // @TODO: it's not aligned to parcels the way I want
    // let floorGeometry = new THREE.PlaneGeometry( 460, 680, 100, 100 )
    // floorGeometry.rotateX( - Math.PI / 2 )
    // // vertex displacement
    // let position = floorGeometry.attributes.position
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   vertex.fromBufferAttribute( position, i )
    //   vertex.x += Math.random() * 20 - 10
    //   vertex.y += Math.random() * 2
    //   vertex.z += Math.random() * 20 - 10
    //   position.setXYZ( i, vertex.x, vertex.y, vertex.z )
    // }
    // floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices
    // floorGeometry.x = -200
    // floorGeometry.y = -200
    // floorGeometry.z = -200
    // position = floorGeometry.attributes.position
    // const colorsFloor = []
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
    //   colorsFloor.push( color.r, color.g, color.b )
    // }
    // floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) )
    // const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } )
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )
    // moon floor

    texture = THREE.ImageUtils.loadTexture("/assets/textures/moon-1.jpg"); // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */

    var floorGeometry = new THREE.CircleGeometry(1000, 32); // radius, segments, thetaStart, thetaLength

    floorGeometry.rotateX(-Math.PI / 2);
    var floorMaterial = new THREE.MeshBasicMaterial({
      map: texture
    });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);
    /*
     * Model Import
     */

    var scenesPath = '/assets/scenes/';
    var objectsPath = '/assets/objects/';
    var modelName = 'polycity'; // 'wasyaco-reception' // 'tiny-house-2'

    var modelName2 = 'girl';
    var texturePath = "".concat(modelName, "/").concat(modelName, ".mtl");
    var modelPath = "".concat(modelName, "/").concat(modelName, ".obj");
    var modelPath2 = "".concat(modelName2, "/").concat(modelName2, ".obj");
    var manager = new THREE.LoadingManager();

    var onProgress = function onProgress(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
      }
    }; // onProgress = function ( item, loaded, total ) {
    //   console.log( item, loaded, total )
    // }


    var onError = function onError() {};

    var onLoad = function onLoad(materials) {
      materials.preload();
      var objLoader = new OBJLoader(manager);
      objLoader.setMaterials(materials);
      objLoader.setPath(scenesPath);
      objLoader.load(modelPath, function (object) {
        object.traverse(function (child) {
          if (child.isMesh) {
            child.geometry.scale(0.10, 0.10, 0.10);
          }
        });
        object.position.x = Math.random() * 500;
        object.position.y = 10;
        object.position.z = Math.random() * 500;
        logg(object, '1st object');
        scene.add(object);
        markerObjects.push(object);
        markerObjectsIdxs.push({
          uuid: object.uuid,
          name: 'camaro75',
          slug: 'construct1'
        });
      }, onProgress, onError);
    };

    var onLoad2 = function onLoad2(materials) {
      // materials.preload()
      var objLoader = new OBJLoader(manager); // objLoader.setMaterials( materials )

      objLoader.setPath(objectsPath);
      objLoader.load(modelPath2, function (object) {
        object.traverse(function (child) {
          if (child.isMesh) {
            child.geometry.scale(10, 10, 10);
          }
        });
        object.position.x = Math.random() * 500;
        object.position.y = 10;
        object.position.z = Math.random() * 500;
        logg(object, '2st object');
        scene.add(object);
        markerObjects.push(object);
        markerObjectsIdxs.push({
          uuid: object.uuid,
          name: 'girl',
          slug: 'demmitv'
        });
      }, onProgress, onError);
    };

    var mtlLoader = new MTLLoader(manager); // mtlLoader.setBaseUrl(scenesPath)

    mtlLoader.setPath(scenesPath);
    mtlLoader.load(texturePath, onLoad);
    mtlLoader.load(texturePath, onLoad2); // /* texture */
    // const textureLoader = new THREE.TextureLoader( manager )
    // const texture = textureLoader.load( 'textures/uv_grid_opengl.jpg' )
    // const loader = new OBJLoader( manager )
    // loader.load( `/assets/scenes/${modelName}/${modelName}.obj`, ( obj ) => {
    //   object = obj
    // }, ( xhr ) => {
    //   if ( xhr.lengthComputable ) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }, (e) => {
    //   logg(e, 'onError')
    // } )

    /*
     * parcels
     */
    // // some delimiters for the first 6 parcels!
    // let geometry = new THREE.BoxGeometry( 10, 10, 10 )
    // let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    // let cube = new THREE.Mesh( geometry, material )
    // cube.position.x = 0
    // cube.position.y = 5
    // cube.position.z = 0
    // // scene.add( cube )
    // const items = [
    //   { color: 0xff0000, x: 1, y: 0, z: 0 },
    //   { color: 0x00ff00, x: 0, y: 1, z: 0 },
    //   { color: 0x0000ff, x: 0, y: 0, z: 1 }
    // ]
    // items.map((item, idx) => {
    //   logg(item, 'item')
    //   const { color, x, y, z } = item
    //   geometry = new THREE.BoxGeometry( 1 + x*10, 1 + y*10, 1 + z*10 )
    //   material = new THREE.MeshBasicMaterial({ color: color })
    //   cube = new THREE.Mesh( geometry, material )
    //   cube.position.x = x*5
    //   cube.position.y = 10+y*5
    //   cube.position.z = z*5
    //   // scene.add( cube )
    // })
    // const parcels = [
    //   { color: 0xff0000, x: 100, y: 1, z: 100 },
    //   { color: 0x00ff00, x: 100, y: 1, z: 320 },
    //   { color: 0x0000ff, x: -120, y: 1, z: 320 },
    //   { color: 0x660000, x: -120, y: 1, z: 100 },
    //   { color: 0x006600, x: -120, y: 1, z: -120 },
    //   { color: 0x000066, x: 100, y: 1, z: -120 },
    // ]
    // parcels.map((item, idx) => {
    //   const { color, x, y, z } = item
    //   const g = new THREE.BoxGeometry( 200, 2, 200 )
    //   const m = new THREE.MeshBasicMaterial({color: color})
    //   const p = new THREE.Mesh( g, m )
    //   p.position.x = x
    //   p.position.y = y
    //   p.position.z = z
    //   // scene.add( p )
    // })

    /*
     * Skybox
     */

    var loader = new THREE.TextureLoader();
    texture = loader.load("/assets/textures/space-5.jpg", function () {
      var rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
    /*
     * and render
     */

    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(700, 350); // aspect ratio 0.5

    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (controls.isLocked === true) {
      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new THREE.Raycaster(camera.position, cameraDirection);
      var intersections = raycaster.intersectObjects(markerObjects, true);

      if (intersections.length) {
        var pickedObject = intersections[0].object; // collision

        if (intersections[0].distance < 5) {
          moveForward = false;
        }
      }

      var onObject = intersections.length > 0;
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/React.createElement(F, null, /*#__PURE__*/React.createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/React.createElement(ThreePanelV2_Blocker, Object.assign({}, S, {
    ref: blockerRef
  }), /*#__PURE__*/React.createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const ThreePanelV2 = ((/* unused pure expression or super */ null && (ThreePanelV2_Loc)));
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js
var stats_module = __webpack_require__(915079);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelV3.jsx
function ThreePanelV3_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ThreePanelV3_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ThreePanelV3_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ThreePanelV3_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ThreePanelV3_arrayLikeToArray(o, minLen); }

function ThreePanelV3_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















var ThreePanelV3_Blocker = external_styled_components_default().div.withConfig({
  displayName: "ThreePanelV3__Blocker",
  componentId: "sc-1x7r1h8-0"
})(["position:relative;width:100%;height:100%;"]);
/**
 * Location
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 *
 * Octree! From: https://threejs.org/examples/games_fps.html
 * @TODO: let's load the map, and collision player on map. _vp_ 202-04-20
 *
**/

var Location = function Location(props) {
  // logg(props, 'Loc')
  var history = useHistory();

  var _useContext = useContext(TwofoldContext),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      folded = _useContext.folded,
      setFolded = _useContext.setFolded,
      itemToUnlock = _useContext.itemToUnlock,
      setItemToUnlock = _useContext.setItemToUnlock,
      mapPanelWidth = _useContext.mapPanelWidth,
      setMapPanelWidth = _useContext.setMapPanelWidth,
      mapPanelHeight = _useContext.mapPanelHeight,
      setMapPanelHeight = _useContext.setMapPanelHeight,
      ratedConfirmation = _useContext.ratedConfirmation,
      setRatedConfirmation = _useContext.setRatedConfirmation,
      showItem = _useContext.showItem,
      setShowItem = _useContext.setShowItem,
      showUrl = _useContext.showUrl,
      setShowUrl = _useContext.setShowUrl,
      twofoldPercent = _useContext.twofoldPercent;

  var camera,
      clock,
      directionalLight,
      fillLight1,
      glow,
      markerObjects = [],
      pickedObject,
      plc,
      raycaster,
      removedObject,
      renderer,
      texture,
      scene;
  var blockerRef = useRef(null);
  var instructionsRef = useRef(null);
  useEffect(function () {
    init();
    animate();
  }, []);
  useEffect(function () {
    window.dispatchEvent(new Event('resize'));
  }, [bottomDrawerOpen, folded, twofoldPercent]);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new THREE.Vector3();
  var direction = new THREE.Vector3();

  function init_old() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    var aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    plc = new PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      plc.lock();
    });
    plc.addEventListener('lock', function () {
      logg('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    plc.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(plc.getObject());

    var onClick = function onClick(event) {
      // logg(event, 'onCLick')
      // logg(pickedObject, 'pickedObject')
      // @TODO: prevent lock-outs!
      if (pickedObject) {// plc.unlock()
        // history.push(`/en/locations/show/${pickedObject.slug}`)
      }
    };

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('click', onClick);
    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);
    /*
     * Floor
     */
    // moon floor

    texture = THREE.ImageUtils.loadTexture("/assets/textures/moon-1.jpg"); // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */

    var floorGeometry = new THREE.CircleGeometry(1000, 32); // radius, segments, thetaStart, thetaLength

    floorGeometry.rotateX(-Math.PI / 2);
    var floorMaterial = new THREE.MeshBasicMaterial({
      map: texture
    });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);
    /*
     * Model Import
     */

    var scenesPath = '/assets/scenes/';
    var objectsPath = '/assets/objects/';
    var manager = new THREE.LoadingManager();
    var importModels = [// { modelName: 'wasyaco-reception-2', slug: 'construct1' },
    {
      modelName: 'camaro75',
      slug: 'construct1'
    }, {
      modelName: 'girl',
      slug: 'demmitv'
    } // { modelName: 'girl-5',     slug: 'demmitv' },
    ];

    var onProgress = function onProgress(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
      }
    };

    var onError = function onError() {};

    var mtlLoader = new MTLLoader(manager);
    mtlLoader.setPath(objectsPath);
    importModels.map(function (_ref) {
      var modelName = _ref.modelName,
          slug = _ref.slug;
      var texturePath = "".concat(modelName, "/").concat(modelName, ".mtl");
      var modelPath = "".concat(modelName, "/").concat(modelName, ".obj");

      var wrappedOnLoad = function wrappedOnLoad(modelPath) {
        return function (materials) {
          materials.preload();
          var objLoader = new OBJLoader(manager);
          objLoader.setMaterials(materials);
          objLoader.setPath(objectsPath);
          objLoader.load(modelPath, function (object) {
            object.traverse(function (child) {
              if (child.isMesh) {
                child.geometry.scale(10, 10, 10);
              }
            });
            object.position.x = Math.random() * 200;
            object.position.y = 10;
            object.position.z = Math.random() * 200;
            scene.add(object);
            markerObjects.push({
              uuid: object.uuid,
              name: 'camaro75',
              object: object,
              slug: 'construct1'
            });
          }, onProgress, onError);
        };
      };

      mtlLoader.load(texturePath, wrappedOnLoad(modelPath));
    });
    /*
     * Skybox
     */

    var loader = new THREE.TextureLoader();
    texture = loader.load("/assets/textures/space-5.jpg", function () {
      var rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
  }

  var GRAVITY = 30;
  var NUM_SPHERES = 100;
  var SPHERE_RADIUS = 0.2;
  var STEPS_PER_FRAME = 5;
  var sphereGeometry = new THREE.IcosahedronGeometry(SPHERE_RADIUS, 5);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xbbbb44
  });
  var spheres = [];
  var sphereIdx = 0;
  var worldOctree = new Octree();
  var playerCollider = new Capsule(new THREE.Vector3(0, 0.35, 0), new THREE.Vector3(0, 1, 0), 0.35);
  var playerVelocity = new THREE.Vector3();
  var playerDirection = new THREE.Vector3();
  var playerOnFloor = false;
  var mouseTime = 0;
  var keyStates = {};
  var vector1 = new THREE.Vector3();
  var vector2 = new THREE.Vector3();
  var vector3 = new THREE.Vector3();

  var init = function init() {
    clock = new THREE.Clock();
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x88ccee);
    scene.fog = new THREE.Fog(0x88ccee, 0, 50);
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.rotation.order = 'YXZ';
    fillLight1 = new THREE.HemisphereLight(0x4488bb, 0x002244, 0.5);
    fillLight1.position.set(2, 1, 1);
    scene.add(fillLight1);
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(-5, 25, -1);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.01;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.left = -30;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.bottom = -30;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.radius = 4;
    directionalLight.shadow.bias = -0.00006;
    scene.add(directionalLight);

    for (var i = 0; i < NUM_SPHERES; i++) {
      var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      scene.add(sphere);
      spheres.push({
        mesh: sphere,
        collider: new THREE.Sphere(new THREE.Vector3(0, -100, 0), SPHERE_RADIUS),
        velocity: new THREE.Vector3()
      });
    }
    /*
     * controls
    **/


    plc = new PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      plc.lock();
    });
    plc.addEventListener('lock', function () {
      logg('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    plc.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(plc.getObject());
    /*
     * Render
    **/

    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
    /*
     * GLFT Loader
    **/

    var loader = new GLTFLoader().setPath('./assets/objects/gltf/');
    loader.load('collision-world.glb', function (gltf) {
      scene.add(gltf.scene);
      worldOctree.fromGraphNode(gltf.scene);
      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          if (child.material.map) {
            child.material.map.anisotropy = 4;
          }
        }
      }); // const helper = new OctreeHelper( worldOctree );
      // helper.visible = false;
      // scene.add( helper );

      animate();
    });
    /*
     * keyboard control, event listeners
    **/

    document.addEventListener('keydown', function (event) {
      keyStates[event.code] = true;
    });
    document.addEventListener('keyup', function (event) {
      keyStates[event.code] = false;
    });
    document.addEventListener('mouseup', function () {
      if (document.pointerLockElement !== null) throwBall();
    }); // document.body.addEventListener( 'mousemove', ( event ) => {
    //   if ( document.pointerLockElement === document.body ) {
    //     camera.rotation.y -= event.movementX / 500;
    //     camera.rotation.x -= event.movementY / 500;
    //   }
    // } );

    document.addEventListener('mousedown', function () {
      document.body.requestPointerLock();
      mouseTime = performance.now();
    });
  };

  function onWindowResize() {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
  }

  function playerCollisions() {
    var result = worldOctree.capsuleIntersect(playerCollider);
    playerOnFloor = false;

    if (result) {
      playerOnFloor = result.normal.y > 0;

      if (!playerOnFloor) {
        playerVelocity.addScaledVector(result.normal, -result.normal.dot(playerVelocity));
      }

      playerCollider.translate(result.normal.multiplyScalar(result.depth));
    }
  }

  function updateSpheres(deltaTime) {
    spheres.forEach(function (sphere) {
      sphere.collider.center.addScaledVector(sphere.velocity, deltaTime);
      var result = worldOctree.sphereIntersect(sphere.collider);

      if (result) {
        sphere.velocity.addScaledVector(result.normal, -result.normal.dot(sphere.velocity) * 1.5);
        sphere.collider.center.add(result.normal.multiplyScalar(result.depth));
      } else {
        sphere.velocity.y -= GRAVITY * deltaTime;
      }

      var damping = Math.exp(-1.5 * deltaTime) - 1;
      sphere.velocity.addScaledVector(sphere.velocity, damping);
      playerSphereCollision(sphere);
    });
    spheresCollisions();

    var _iterator = ThreePanelV3_createForOfIteratorHelper(spheres),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sphere = _step.value;
        sphere.mesh.position.copy(sphere.collider.center);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  function throwBall() {
    var sphere = spheres[sphereIdx];
    camera.getWorldDirection(playerDirection);
    sphere.collider.center.copy(playerCollider.end).addScaledVector(playerDirection, playerCollider.radius * 1.5); // throw the ball with more force if we hold the button longer, and if we move forward

    var impulse = 15 + 30 * (1 - Math.exp((mouseTime - performance.now()) * 0.001));
    sphere.velocity.copy(playerDirection).multiplyScalar(impulse);
    sphere.velocity.addScaledVector(playerVelocity, 2);
    sphereIdx = (sphereIdx + 1) % spheres.length;
  }

  function getForwardVector() {
    camera.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();
    return playerDirection;
  }

  function getSideVector() {
    camera.getWorldDirection(playerDirection);
    playerDirection.y = 0;
    playerDirection.normalize();
    playerDirection.cross(camera.up);
    return playerDirection;
  }

  function updatePlayer(deltaTime) {
    var damping = Math.exp(-4 * deltaTime) - 1;

    if (!playerOnFloor) {
      playerVelocity.y -= GRAVITY * deltaTime; // small air resistance

      damping *= 0.1;
    }

    playerVelocity.addScaledVector(playerVelocity, damping);
    var deltaPosition = playerVelocity.clone().multiplyScalar(deltaTime);
    playerCollider.translate(deltaPosition);
    playerCollisions();
    camera.position.copy(playerCollider.end);
  }

  function spheresCollisions() {
    for (var i = 0, length = spheres.length; i < length; i++) {
      var s1 = spheres[i];

      for (var j = i + 1; j < length; j++) {
        var s2 = spheres[j];
        var d2 = s1.collider.center.distanceToSquared(s2.collider.center);
        var r = s1.collider.radius + s2.collider.radius;
        var r2 = r * r;

        if (d2 < r2) {
          var normal = vector1.subVectors(s1.collider.center, s2.collider.center).normalize();
          var v1 = vector2.copy(normal).multiplyScalar(normal.dot(s1.velocity));
          var v2 = vector3.copy(normal).multiplyScalar(normal.dot(s2.velocity));
          s1.velocity.add(v2).sub(v1);
          s2.velocity.add(v1).sub(v2);
          var d = (r - Math.sqrt(d2)) / 2;
          s1.collider.center.addScaledVector(normal, d);
          s2.collider.center.addScaledVector(normal, -d);
        }
      }
    }
  }

  function playerSphereCollision(sphere) {
    var center = vector1.addVectors(playerCollider.start, playerCollider.end).multiplyScalar(0.5);
    var sphere_center = sphere.collider.center;
    var r = playerCollider.radius + sphere.collider.radius;
    var r2 = r * r; // approximation: player = 3 spheres

    for (var _i = 0, _arr = [playerCollider.start, playerCollider.end, center]; _i < _arr.length; _i++) {
      var point = _arr[_i];
      var d2 = point.distanceToSquared(sphere_center);

      if (d2 < r2) {
        var normal = vector1.subVectors(point, sphere_center).normalize();
        var v1 = vector2.copy(normal).multiplyScalar(normal.dot(playerVelocity));
        var v2 = vector3.copy(normal).multiplyScalar(normal.dot(sphere.velocity));
        playerVelocity.add(v2).sub(v1);
        sphere.velocity.add(v1).sub(v2);
        var d = (r - Math.sqrt(d2)) / 2;
        sphere_center.addScaledVector(normal, -d);
      }
    }
  }

  function teleportPlayerIfOob() {
    if (camera.position.y <= -25) {
      playerCollider.start.set(0, 0.35, 0);
      playerCollider.end.set(0, 1, 0);
      playerCollider.radius = 0.35;
      camera.position.copy(playerCollider.end);
      camera.rotation.set(0, 0, 0);
    }
  }

  function controls(deltaTime) {
    // gives a bit of air control
    var speedDelta = deltaTime * (playerOnFloor ? 25 : 8);

    if (keyStates['KeyW']) {
      playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
    }

    if (keyStates['KeyS']) {
      playerVelocity.add(getForwardVector().multiplyScalar(-speedDelta));
    }

    if (keyStates['KeyA']) {
      playerVelocity.add(getSideVector().multiplyScalar(-speedDelta));
    }

    if (keyStates['KeyD']) {
      playerVelocity.add(getSideVector().multiplyScalar(speedDelta));
    }

    if (playerOnFloor) {
      if (keyStates['Space']) {
        playerVelocity.y = 15;
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (plc.isLocked === true) {
      var deltaTime = Math.min(0.05, clock.getDelta()) / STEPS_PER_FRAME; // we look for collisions in substeps to mitigate the risk of
      // an object traversing another too quickly for detection.

      for (var i = 0; i < STEPS_PER_FRAME; i++) {
        controls(deltaTime);
        updatePlayer(deltaTime);
        updateSpheres(deltaTime);
        teleportPlayerIfOob();
      }
    }

    prevTime = time; // @TODO: add stats
    // @TODO: add OctreeHelper

    renderer.render(scene, camera);
  }

  return /*#__PURE__*/React.createElement(F, null, /*#__PURE__*/React.createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/React.createElement(ThreePanelV3_Blocker, {
    ref: blockerRef
  }, /*#__PURE__*/React.createElement(Crosshair, null)));
};

/* harmony default export */ const ThreePanelV3 = ((/* unused pure expression or super */ null && (Location)));
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelV4.jsx


 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json






var ThreePanelV4_Blocker = external_styled_components_default().div.withConfig({
  displayName: "ThreePanelV4__Blocker",
  componentId: "sc-mpzgez-0"
})(["border:2px solid red;position:relative;width:700px;height:350px;#Crosshair{width:50px;height:50px;position:absolute;left:50%;top:50%;color:white;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;}}"]);
/**
 * ThreePanelV4
 * Markers are obejcts _vp_ 2021-11-14
 *
 */

var ThreePanelV4 = function ThreePanelV4(props) {
  (0,shared/* logg */.IJ)(props, 'ThreePanelV4');
  var map = props.map;
  var history = (0,external_react_router_dom_.useHistory)();
  var camera,
      controls,
      object,
      objects = [],
      markerObjects = [],
      markerObjectsIdxs = [],
      raycaster,
      renderer,
      texture,
      scene;
  var blockerRef = (0,external_react_.useRef)(null);
  var instructionsRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    init();
    animate();
  }, []);
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
  var prevTime = performance.now();
  var velocity = new external_three_.Vector3();
  var direction = new external_three_.Vector3();
  var vertex = new external_three_.Vector3();
  var color = new external_three_.Color();

  function init() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    camera = new external_three_.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0xffffff);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750);
    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    controls = new PointerLockControls_PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      (0,shared/* logg */.IJ)('locked controls');
      controls.lock();
    });
    controls.addEventListener('lock', function () {
      (0,shared/* logg */.IJ)('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    controls.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(controls.getObject());
    /*
     * Crosshair
     * From: https://codepen.io/driezis/pen/jOPzjLG?editors=1000
     */

    var pMat = new external_three_.ShaderMaterial({
      uniforms: {
        main_color: {
          value: {
            r: 1,
            g: 1,
            b: 1
          }
        },
        border_color: {
          value: {
            r: 0,
            g: 0,
            b: 0.1
          }
        },
        thickness: {
          value: 0.006
        },
        height: {
          value: 0.13
        },
        offset: {
          value: 0.05
        },
        border: {
          value: 0.003
        },
        opacity: {
          value: 1
        },
        center: {
          value: {
            x: 0.5,
            y: 0.5
          }
        },
        rotation: {
          value: 0
        }
      },
      vertexShader: "\n                uniform float rotation;\n                uniform vec2 center;\n                #include <common>\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n                    vec2 scale;\n                    scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n                    scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n                    #ifndef USE_SIZEATTENUATION\n                        bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n                        if ( isPerspective ) scale *= - mvPosition.z;\n                    #endif\n                    vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n                    vec2 rotatedPosition;\n                    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n                    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n                    mvPosition.xy += rotatedPosition;\n                    gl_Position = projectionMatrix * mvPosition;\n                }\n            ",
      fragmentShader: "\n            uniform vec3 main_color;\n            uniform vec3 border_color;\n            uniform float opacity;\n\n            uniform float thickness;\n            uniform float height;\n            uniform float offset;\n            uniform float border;\n\n            varying vec2 vUv;\n            void main() {\n\n                float a = (step(abs(vUv.x - 0.5), thickness)) * step(abs(vUv.y - 0.5), height + offset) * step(offset, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness)) * step(abs(vUv.x - 0.5), height + offset) * step(offset, abs(vUv.x - 0.5));\n                float b = (step(abs(vUv.x - 0.5), thickness - border)) * step(abs(vUv.y - 0.5), height + offset - border) * step(offset + border, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness - border)) * step(abs(vUv.x - 0.5), height + offset - border) * step(offset + border, abs(vUv.x - 0.5));\n                gl_FragColor = vec4( mix(border_color, main_color, b), a * opacity);\n            }\n        ",
      transparent: true
    });
    var sprite = new external_three_.Sprite(pMat); // scene.add(sprite);
    // sprite.position.set(0,0,-5);

    /*
     * Reticle
     */
    // var scale = 3
    // var cursorSize = 500
    // var reticle = new THREE.Mesh(
    //   new THREE.RingBufferGeometry( 0.85 * cursorSize, cursorSize, 32),
    //   new THREE.MeshBasicMaterial({color: 0xffffff, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
    // );
    // reticle.position.z = -100
    // reticle.lookAt(camera.position)
    // camera.add(reticle)

    var onKeyDown = function onKeyDown(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;

        case 'Space':
          if (canJump === true) velocity.y += 350;
          canJump = false;
          break;
      }
    };

    var onKeyUp = function onKeyUp(event) {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;

        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;

        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
    /*
     * Floor
     */
    // // random
    // // @TODO: it's not aligned to parcels the way I want
    // let floorGeometry = new THREE.PlaneGeometry( 460, 680, 100, 100 )
    // floorGeometry.rotateX( - Math.PI / 2 )
    // // vertex displacement
    // let position = floorGeometry.attributes.position
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   vertex.fromBufferAttribute( position, i )
    //   vertex.x += Math.random() * 20 - 10
    //   vertex.y += Math.random() * 2
    //   vertex.z += Math.random() * 20 - 10
    //   position.setXYZ( i, vertex.x, vertex.y, vertex.z )
    // }
    // floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices
    // floorGeometry.x = -200
    // floorGeometry.y = -200
    // floorGeometry.z = -200
    // position = floorGeometry.attributes.position
    // const colorsFloor = []
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
    //   colorsFloor.push( color.r, color.g, color.b )
    // }
    // floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) )
    // const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } )
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )
    // moon floor

    texture = external_three_.ImageUtils.loadTexture("/assets/textures/moon-1.jpg"); // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */

    var floorGeometry = new external_three_.CircleGeometry(1000, 32); // radius, segments, thetaStart, thetaLength

    floorGeometry.rotateX(-Math.PI / 2);
    var floorMaterial = new external_three_.MeshBasicMaterial({
      map: texture
    });
    var floor = new external_three_.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);
    /*
     * Model Import
     */

    var scenesPath = '/assets/scenes/';
    var objectsPath = '/assets/objects/';
    var texturesPath = '/assets/textures/';
    var manager = new external_three_.LoadingManager();
    var mtlLoader = new loaders_MTLLoader/* MTLLoader */.v(manager);
    mtlLoader.setPath(texturesPath);

    var onProgress = function onProgress(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
      }
    };

    var onError = function onError() {};

    map.markers.map(function (marker, idx) {
      var modelName = marker.slug;
      var texturePath = "".concat(modelName, "/").concat(modelName, ".mtl");
      var modelPath = "".concat(modelName, "/").concat(modelName, ".obj");

      var wrappedOnLoad = function wrappedOnLoad(modelPath, modelName) {
        return function (materials) {
          materials.preload();
          var objLoader = new loaders_OBJLoader/* OBJLoader */.L(manager);
          objLoader.setMaterials(materials);
          objLoader.setPath(objectsPath);
          objLoader.load(modelPath, function (object) {
            object.traverse(function (child) {
              if (child.isMesh) {
                child.geometry.scale(10, 10, 10); // @TODO change, girl-6 accepts 1,1,1
              }
            });
            object.position.x = Math.random() * 100;
            object.position.y = 10;
            object.position.z = Math.random() * 100; // object.rotateX( - Math.PI / 2 ) // girl-6 only.

            (0,shared/* logg */.IJ)(object, 'loaded obj');
            scene.add(object);
            markerObjects.push(object);
            markerObjectsIdxs.push({
              uuid: object.uuid,
              name: modelName
            });
          }, onProgress, onError);
        };
      };

      mtlLoader.load(texturePath, wrappedOnLoad(modelPath, modelName));
    }); // /* texture */
    // const textureLoader = new THREE.TextureLoader( manager )
    // const texture = textureLoader.load( 'textures/uv_grid_opengl.jpg' )
    // const loader = new OBJLoader( manager )
    // loader.load( `/assets/scenes/${modelName}/${modelName}.obj`, ( obj ) => {
    //   object = obj
    // }, ( xhr ) => {
    //   if ( xhr.lengthComputable ) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }, (e) => {
    //   logg(e, 'onError')
    // } )

    /*
     * parcels
     */
    // // some delimiters for the first 6 parcels!
    // let geometry = new THREE.BoxGeometry( 10, 10, 10 )
    // let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    // let cube = new THREE.Mesh( geometry, material )
    // cube.position.x = 0
    // cube.position.y = 5
    // cube.position.z = 0
    // // scene.add( cube )
    // const items = [
    //   { color: 0xff0000, x: 1, y: 0, z: 0 },
    //   { color: 0x00ff00, x: 0, y: 1, z: 0 },
    //   { color: 0x0000ff, x: 0, y: 0, z: 1 }
    // ]
    // items.map((item, idx) => {
    //   logg(item, 'item')
    //   const { color, x, y, z } = item
    //   geometry = new THREE.BoxGeometry( 1 + x*10, 1 + y*10, 1 + z*10 )
    //   material = new THREE.MeshBasicMaterial({ color: color })
    //   cube = new THREE.Mesh( geometry, material )
    //   cube.position.x = x*5
    //   cube.position.y = 10+y*5
    //   cube.position.z = z*5
    //   // scene.add( cube )
    // })
    // const parcels = [
    //   { color: 0xff0000, x: 100, y: 1, z: 100 },
    //   { color: 0x00ff00, x: 100, y: 1, z: 320 },
    //   { color: 0x0000ff, x: -120, y: 1, z: 320 },
    //   { color: 0x660000, x: -120, y: 1, z: 100 },
    //   { color: 0x006600, x: -120, y: 1, z: -120 },
    //   { color: 0x000066, x: 100, y: 1, z: -120 },
    // ]
    // parcels.map((item, idx) => {
    //   const { color, x, y, z } = item
    //   const g = new THREE.BoxGeometry( 200, 2, 200 )
    //   const m = new THREE.MeshBasicMaterial({color: color})
    //   const p = new THREE.Mesh( g, m )
    //   p.position.x = x
    //   p.position.y = y
    //   p.position.z = z
    //   // scene.add( p )
    // })

    /*
     * Skybox
     */

    var loader = new external_three_.TextureLoader();
    texture = loader.load("/assets/textures/space-5.jpg", function () {
      var rt = new external_three_.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
    /*
     * and render
     */

    renderer = new external_three_.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(700, 350); // aspect ratio 0.5

    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if (controls.isLocked === true) {
      var cameraDirection = controls.getDirection(new external_three_.Vector3(0, 0, 0)).clone();
      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new external_three_.Raycaster(camera.position, cameraDirection);
      var intersections = raycaster.intersectObjects(markerObjects, true);

      if (intersections.length) {
        var pickedObject = intersections[0].object;
        /* collision */
        // if (intersections[0].distance < 5) {
        //   moveForward = false
        // }
      }

      var onObject = intersections.length > 0;
      var delta = (time - prevTime) / 1000;
      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

      if (onObject === true) {
        velocity.y = Math.max(0, velocity.y);
        canJump = true;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);
      controls.getObject().position.y += velocity.y * delta; // new behavior

      if (controls.getObject().position.y < 10) {
        velocity.y = 0;
        controls.getObject().position.y = 10;
        canJump = true;
      }
    }

    prevTime = time;
    renderer.render(scene, camera);
  }

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(ThreePanelV4_Blocker, {
    ref: blockerRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const locations3d_ThreePanelV4 = (ThreePanelV4);
;// CONCATENATED MODULE: ./src/components/locations3d/index.jsx










 // markers are objects _vp_ 2021-11-24
;// CONCATENATED MODULE: ./src/components/locations/LocationsShowMobile3d.jsx









var LocationsShowMobile3d_W = external_styled_components_default().div.withConfig({
  displayName: "LocationsShowMobile3d__W",
  componentId: "sc-1mparkt-0"
})([""]);
/**
 * LocationsShowMobile3d
 * Simplified, full-screen, cannot scroll outside canvas
 * _vp_ 2022-09-02
 *
 */

var LocationsShowMobile3d = function LocationsShowMobile3d(props) {
  (0,shared/* logg */.IJ)(props, 'LocationsShowMobile3d');
  var location = props.location,
      match = props.match;
  var mapPanelRef = (0,external_react_.useRef)(null);
  return /*#__PURE__*/external_react_default().createElement(LocationsShowMobile3d_W, {
    className: "LocationsShowMobile3d"
  }, location && /*#__PURE__*/external_react_default().createElement(ThreePanelMobile, {
    map: location.map || location,
    ref: mapPanelRef,
    slug: match.params.slug
  }));
};

/* harmony default export */ const locations_LocationsShowMobile3d = (LocationsShowMobile3d);
;// CONCATENATED MODULE: ./src/components/locations/MapPanel.jsx
function MapPanel_slicedToArray(arr, i) { return MapPanel_arrayWithHoles(arr) || MapPanel_iterableToArrayLimit(arr, i) || MapPanel_unsupportedIterableToArray(arr, i) || MapPanel_nonIterableRest(); }

function MapPanel_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MapPanel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MapPanel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MapPanel_arrayLikeToArray(o, minLen); }

function MapPanel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MapPanel_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MapPanel_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MapPanel_Actions = external_styled_components_default().div.withConfig({
  displayName: "MapPanel__Actions",
  componentId: "sc-1dfbrdt-0"
})(["border:1px solid red;position:absolute;top:0;right:0;z-index:2;"]); // W

var MapPanel_W0 = external_styled_components_default().div.withConfig({
  displayName: "MapPanel__W0",
  componentId: "sc-1dfbrdt-1"
})(["border:2px solid var(--ion-border-color);border-radius:var(--ion-border-radius);background:", ";height:100%;display:flex;align-items:center;justify-content:center;position:relative;"], function (p) {
  return p.theme.colors.background;
});
var MapPanel_W1 = external_styled_components_default().div.withConfig({
  displayName: "MapPanel__W1",
  componentId: "sc-1dfbrdt-2"
})(["display:flex;align-items:center;justify-content:center;position:relative;height:100%;"]);
/**
 * MapPanel
 *
 * _vp_ 2021-09 @TODO: merge this into MapPanel, have zoom={false} as a prop
 * But I couldn't do it in 10 mins... It's a bit complicated?
 *
 * _vp_ 2021-10-29 But actually this component is getting more work than the zoom one right now...
**/

var MapPanel = function MapPanel(props) {
  // logg(props, 'MapPanel')
  var map = props.map;

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      editorMode = _useContext.editorMode,
      mapPanelWidth = _useContext.mapPanelWidth,
      mapPanelHeight = _useContext.mapPanelHeight,
      zoom = _useContext.zoom,
      setZoom = _useContext.setZoom; // logg(useContext(TwofoldContext), 'MapPanelUsedContext')


  var _useContext2 = (0,external_react_.useContext)(markers_MarkerContext),
      markerModalOpen = _useContext2.markerModalOpen,
      setMarkerModalOpen = _useContext2.setMarkerModalOpen;

  var _useContext3 = (0,external_react_.useContext)(shared/* AppContext */.Il),
      useHistory = _useContext3.useHistory;

  var history = useHistory();

  var _useWindowSize = (0,shared/* useWindowSize */.iP)(),
      _useWindowSize2 = MapPanel_slicedToArray(_useWindowSize, 2),
      windowWidth = _useWindowSize2[0],
      windowHeight = _useWindowSize2[1]; // logg(useWindowSize(), 'usedWindowSize')

  /*
   * Sets the zoom (in panelNoZoom) to full-panel _vp_ 2021-10-29
   * w: 1184 h: 819
   */


  (0,external_react_.useEffect)(function () {
    // logg([windowWidth, windowHeight, map.w, map.h], 'MapPanel setting zoom')
    if (windowWidth === 0) {
      return;
    }

    var nextZoomByWidth = windowWidth / map.w; // .3 mobile // 1.94 desktop

    var nextZoomByHeight = windowHeight / map.h; // .9 mobile // .82 desktop
    // logg4([nextZoomByWidth, nextZoomByHeight], 'nextZoomOptions')

    var nextZoom = Math.min(nextZoomByWidth, nextZoomByHeight);
    var slack = 0.01; // image should not overlap with the border... 1% slack added.

    nextZoom = nextZoom + slack;
    setZoom(nextZoom);
  }, [mapPanelWidth, mapPanelHeight, map.id, windowWidth, windowHeight]);
  var markers = [];
  props.map.markers.map(function (m, idx) {
    // logg(m, '111 - tmpMarker')
    var out = /*#__PURE__*/external_react_default().createElement("div", {
      key: idx,
      onClick: function onClick() {
        return history.push("/en/locations/show/".concat(m.slug));
      },
      style: {
        position: 'absolute',
        top: m.y * zoom,
        left: m.x * zoom,
        zIndex: 2
      }
    }, /*#__PURE__*/external_react_default().createElement("img", {
      src: m.img_path,
      style: {
        display: 'block',
        maxWidth: "".concat(m.w * zoom, "px"),
        maxHeight: "".concat(m.h * zoom, "px"),
        width: 'auto',
        height: 'auto'
      }
    }));
    markers.push(out);
  });
  /*
   * @TODO: need to get the ACL from api, and use it to determine what to display or not.
  **/

  return /*#__PURE__*/external_react_default().createElement(MapPanel_W0, {
    className: "W0 MapPanel"
  }, editorMode && /*#__PURE__*/external_react_default().createElement(MapPanel_Actions, null, /*#__PURE__*/external_react_default().createElement(shared/* Card */.Zb, {
    onClick: function onClick() {
      return setMarkerModalOpen(true);
    }
  }, "+ Marker")), /*#__PURE__*/external_react_default().createElement(MapPanel_W1, {
    className: "W1"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: map.img_path,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      height: 'auto',
      position: 'relative',
      zIndex: 0
    }
  }), markers));
};

/* harmony default export */ const locations_MapPanel = (MapPanel);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
;// CONCATENATED MODULE: ./src/components/locations/WrappedMapPanel.jsx
function WrappedMapPanel_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }








/* W */

var WrappedMapPanel_W0 = external_styled_components_default().div.withConfig({
  displayName: "WrappedMapPanel__W0",
  componentId: "sc-ahks14-0"
})(["overflow:hidden;flex-grow:1;"]); // full-width

var FW = external_styled_components_default().div.withConfig({
  displayName: "WrappedMapPanel__FW",
  componentId: "sc-ahks14-1"
})([""]);
/**
 * Renders either MapPanel (W0 really, a simple wrapper), or ThreePanelV1, etc.
 * @TODO: on on MapPanel2D, markers don't scale well but should. Also, re-review z-index of markers. _vp_ 2022-09-13
 *
**/

var WrappedMapPanel = external_react_default().forwardRef(function (props, ref) {
  (0,shared/* logg */.IJ)(props, 'WrappedMapPanel');

  WrappedMapPanel_objectDestructuringEmpty(props); // // Testing overrides
  // switch (props.slug) {
  //   case 'root':
  //     return <FW ref={ref} ><ThreePanelDesktop {...props} /></FW>
  // }


  switch (props.map.config.map_panel_type) {
    case shared.C.map_panel_types.Equirectangular:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, {
        ref: ref,
        className: "Equirectangular4"
      }, /*#__PURE__*/external_react_default().createElement(Equirectangular4, props));

    case shared.C.map_panel_types.MapPanel:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, {
        ref: ref,
        className: "WrappedMapPanel"
      }, /*#__PURE__*/external_react_default().createElement(locations_MapPanel, Object.assign({
        withZoom: false
      }, props)));

    case shared.C.map_panel_types.ThreePanelV1:
      return /*#__PURE__*/external_react_default().createElement(locations3d_ThreePanelDesktop, props);

    case shared.C.map_panel_types.ThreePanelV1Fullscreen:
      return /*#__PURE__*/external_react_default().createElement(FW, {
        ref: ref,
        className: "FW"
      }, /*#__PURE__*/external_react_default().createElement(locations3d_ThreePanelDesktop, props));

    case shared.C.map_panel_types.TabiversePlanet:
      // markers are objects
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(locations3d_TabiversePlanet, props));

    case shared.C.map_panel_types.ThreePanelV4:
      // markers are objects
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(locations3d_ThreePanelV4, props));

    case shared.C.map_panel_types.GoogleMaps:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(GoogleMaps, props));

    case shared.C.map_panel_types.ConferenceRoom:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(ConferenceRoom_ConferenceRoom, props));

    default:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, {
        ref: ref,
        className: "WrappedMapPanel"
      }, /*#__PURE__*/external_react_default().createElement(locations_MapPanel, props));
  }
});
/* harmony default export */ const locations_WrappedMapPanel = (WrappedMapPanel);
;// CONCATENATED MODULE: ./src/components/locations/ZoomCtrl.jsx







var ZoomCtrl_W = external_styled_components_default().div.withConfig({
  displayName: "ZoomCtrl__W",
  componentId: "sc-xo781b-0"
})(["position:absolute;top:0;right:0;z-index:1;background:white;padding:5px;display:flex;flex-direction:column;"]);
/**
 * ZoomCtrl
 */

var ZoomCtrl = function ZoomCtrl(props) {
  logg(props, 'ZoomCtrl');

  var _useContext = useContext(TwofoldContext),
      zoom = _useContext.zoom,
      setZoom = _useContext.setZoom;

  var zoomIn = function zoomIn() {
    setZoom(zoom / 2);
  };

  var zoomOut = function zoomOut() {
    setZoom(zoom * 2);
  };

  var zoomReset = function zoomReset() {
    setZoom(1);
  };

  return /*#__PURE__*/React.createElement(ZoomCtrl_W, {
    className: "ZoomCtrl"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: zoomIn
  }, "[+]"), /*#__PURE__*/React.createElement("span", {
    onClick: zoomOut
  }, "[-]"), /*#__PURE__*/React.createElement("span", {
    onClick: zoomReset
  }, "[1]"));
};

/* harmony default export */ const locations_ZoomCtrl = ((/* unused pure expression or super */ null && (ZoomCtrl)));
;// CONCATENATED MODULE: ./src/components/locations/index.jsx




 // static







/***/ }),

/***/ 563204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ ReportsForm),
  "X": () => (/* reexport */ reports_ReportsShow)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
;// CONCATENATED MODULE: ./src/components/reports/ReportsForm.jsx




var Actions = external_styled_components_default().div.withConfig({
  displayName: "ReportsForm__Actions",
  componentId: "sc-zt7bri-0"
})([""]);
var W0 = external_styled_components_default().div.withConfig({
  displayName: "ReportsForm__W0",
  componentId: "sc-zt7bri-1"
})([""]);
/**
 * ReportForm
**/

var ReportForm = function ReportForm(props) {
  // logg(props, 'ReportForm')
  var item = props.item;
  return /*#__PURE__*/external_react_default().createElement(W0, null, /*#__PURE__*/external_react_default().createElement("h1", null, "Report Form (@TODO: remove)"), /*#__PURE__*/external_react_default().createElement("form", null, /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "text",
    name: "name"
  }), " name"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, /*#__PURE__*/external_react_default().createElement("textarea", {
    name: "name"
  }), " subhead"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, "item_type: default? longscroll?"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, "@TODO: editable slug, the fucking slug hasn't been solved in 10 years!"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, "@TODO: premium tier"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, "@TODO: tags"), /*#__PURE__*/external_react_default().createElement(dist/* FlexRow */.gq, null, "public?"), /*#__PURE__*/external_react_default().createElement("textarea", null), " description", /*#__PURE__*/external_react_default().createElement(Actions, null, /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit"
  }, "Create"))));
};

ReportForm.propTypes = {};
/* harmony default export */ const ReportsForm = (ReportForm);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
;// CONCATENATED MODULE: ./src/components/reports/ReportsShow.jsx




var ReportsShow_W0 = external_styled_components_default().div.withConfig({
  displayName: "ReportsShow__W0",
  componentId: "sc-1gldjyo-0"
})([""]);
/**
 * ReportsShow
 *
 * @TODO: logged in and no access ?
 * @TODO: logged in and access ?
**/

var ReportsShow = function ReportsShow(props) {
  var _item$raw_json, _item$raw_json$conten;

  (0,shared/* logg */.IJ)(props, "ReportsShow");
  var item = props.item;
  var descr = item.descr;

  if ((_item$raw_json = item.raw_json) !== null && _item$raw_json !== void 0 && (_item$raw_json$conten = _item$raw_json.content) !== null && _item$raw_json$conten !== void 0 && _item$raw_json$conten.rendered) {
    descr = item.raw_json.content.rendered;
  }

  return /*#__PURE__*/external_react_default().createElement(ReportsShow_W0, null, /*#__PURE__*/external_react_default().createElement("h1", null, item.name), /*#__PURE__*/external_react_default().createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: descr
    }
  }));
};

ReportsShow.propTypes = {
  item: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const reports_ReportsShow = (ReportsShow);
;// CONCATENATED MODULE: ./src/components/reports/index.jsx



/***/ }),

/***/ 255502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mR": () => (/* reexport */ users_Account),
  "di": () => (/* binding */ FbLogin),
  "RD": () => (/* binding */ Logout),
  "pu": () => (/* reexport */ users_MyAccountWidget)
});

// UNUSED EXPORTS: FbLogin2

// EXTERNAL MODULE: external "@capacitor/core"
var core_ = __webpack_require__(666444);
// EXTERNAL MODULE: external "@capacitor-community/facebook-login"
var facebook_login_ = __webpack_require__(850187);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var production_ish_config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(production_ish_config);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(38085);
// EXTERNAL MODULE: external "@capacitor/push-notifications"
var push_notifications_ = __webpack_require__(180522);
// EXTERNAL MODULE: external "@capacitor/toast"
var toast_ = __webpack_require__(278531);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(171982);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "@material-ui/core"
var external_material_ui_core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(448308);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
;// CONCATENATED MODULE: ./src/artifacts/contracts/Greeter.sol/Greeter.json
const Greeter_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/artifacts/contracts/Token.sol/Token.json
const Token_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/components/users/Account.jsx
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var isPushNotificationsAvailable = core_.Capacitor.isPluginAvailable('PushNotifications'); // Update with the contract address logged out to the CLI when it was deployed

var greeterAddress = "0x4bE9765Ca063E73E0aaEd227fd6731473508DbE0";
var tokenAddress = "0xffa52d00685aC60e65457922aEae2c2783c0cB0E";
var PasswordLogin = function PasswordLogin() {
  return /*#__PURE__*/external_react_default().createElement("div", null, "PasswordLogin - @TODO: remove");
};
var LoginRow = external_styled_components_default().div.withConfig({
  displayName: "Account__LoginRow",
  componentId: "sc-xdfxzq-0"
})(["display:flex;> *{margin:auto .4em;}"]);

var Account = function Account(props) {
  // logg(props, 'Account')
  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser;

  var _useState = (0,external_react_.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      greeting = _useState2[0],
      setGreetingValue = _useState2[1];

  var _useState3 = (0,external_react_.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      notifications = _useState4[0],
      setNotifications = _useState4[1];

  var _useState5 = (0,external_react_.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      scratchpad = _useState6[0],
      setScratchpad = _useState6[1];

  var saveScratchpad = function saveScratchpad() {}; // push notifications


  var register = function register() {
    // Register with Apple / Google to receive push via APNS/FCM
    push_notifications_.PushNotifications.register(); // On success, we should be able to receive notifications

    push_notifications_.PushNotifications.addListener('registration', function (token) {
      showToast('Push registration success');
    }); // Some issue with our setup and push will not work

    push_notifications_.PushNotifications.addListener('registrationError', function (error) {
      alert('Error on registration: ' + JSON.stringify(error));
    }); // Show us the notification payload if the app is open on our device

    push_notifications_.PushNotifications.addListener('pushNotificationReceived', function (_n) {
      var n = _n;
      setNotifications(function (ns) {
        return [].concat(_toConsumableArray(ns), [_objectSpread(_objectSpread({}, n), {}, {
          type: 'foreground'
        })]);
      });
    }); // Method called when tapping on a notification

    push_notifications_.PushNotifications.addListener('pushNotificationActionPerformed', function (_ref) {
      var n = _ref.nofitication;
      setNotifications(function (ns) {
        return [].concat(_toConsumableArray(ns), [_objectSpread(_objectSpread({}, n), {}, {
          type: 'action'
        })]);
      });
    });
  };

  var showToast = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return toast_.Toast.show({
                text: msg
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function showToast(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // push notifications


  (0,external_react_.useEffect)(function () {
    if (!isPushNotificationsAvailable) {
      return;
    }

    push_notifications_.PushNotifications.checkPermissions().then(function (res) {
      if (res.receive === 'granted') {
        register();
      } else {
        push_notifications_.PushNotifications.requestPermissions().then(function (res) {
          if (res.receive === 'denied') {
            showToast('Push Notification permission denied');
          } else {
            showToast('Push Notification permission granted');
            register();
          }
        });
      }
    });
  }, []); // request access to the user's MetaMask account

  function requestAccount() {
    return _requestAccount.apply(this, arguments);
  } // call the smart contract, read the current greeting value


  function _requestAccount() {
    _requestAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _requestAccount.apply(this, arguments);
  }

  function fetchGreeting() {
    return _fetchGreeting.apply(this, arguments);
  }

  function _fetchGreeting() {
    _fetchGreeting = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var provider, contract, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context3.next = 13;
                break;
              }

              provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
              contract = new external_ethers_.ethers.Contract(greeterAddress, Greeter_namespaceObject.Mt, provider);
              _context3.prev = 3;
              _context3.next = 6;
              return contract.greet();

            case 6:
              data = _context3.sent;
              setGreetingValue(data); // console.log('data: ', data)

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              console.log("Error: ", _context3.t0);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 10]]);
    }));
    return _fetchGreeting.apply(this, arguments);
  }

  function getBalance() {
    return _getBalance.apply(this, arguments);
  } // call the smart contract, send an update


  function _getBalance() {
    _getBalance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _yield$window$ethereu, _yield$window$ethereu2, account, provider, contract, balance;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context4.next = 12;
                break;
              }

              _context4.next = 3;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              _yield$window$ethereu = _context4.sent;
              _yield$window$ethereu2 = _slicedToArray(_yield$window$ethereu, 1);
              account = _yield$window$ethereu2[0];
              provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
              contract = new external_ethers_.ethers.Contract(tokenAddress, Token_namespaceObject.Mt, provider);
              _context4.next = 10;
              return contract.balanceOf(account);

            case 10:
              balance = _context4.sent;
              console.log("Balance: ", balance.toString());

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _getBalance.apply(this, arguments);
  }

  function setGreeting() {
    return _setGreeting.apply(this, arguments);
  }

  function _setGreeting() {
    _setGreeting = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var provider, signer, contract, transaction;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (greeting) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context5.next = 14;
                break;
              }

              _context5.next = 5;
              return requestAccount();

            case 5:
              provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
              signer = provider.getSigner();
              contract = new external_ethers_.ethers.Contract(greeterAddress, Greeter_namespaceObject.Mt, signer);
              _context5.next = 10;
              return contract.setGreeting(greeting);

            case 10:
              transaction = _context5.sent;
              _context5.next = 13;
              return transaction.wait();

            case 13:
              fetchGreeting();

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _setGreeting.apply(this, arguments);
  }

  function sendCoins() {
    return _sendCoins.apply(this, arguments);
  }

  function _sendCoins() {
    _sendCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var provider, signer, contract, transation;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(typeof window.ethereum !== 'undefined')) {
                _context6.next = 12;
                break;
              }

              _context6.next = 3;
              return requestAccount();

            case 3:
              provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
              signer = provider.getSigner();
              contract = new external_ethers_.ethers.Contract(tokenAddress, Token_namespaceObject.Mt, signer);
              _context6.next = 8;
              return contract.transfer(userAccount, amount);

            case 8:
              transation = _context6.sent;
              _context6.next = 11;
              return transation.wait();

            case 11:
              console.log("".concat(amount, " Coins successfully sent to ").concat(userAccount));

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _sendCoins.apply(this, arguments);
  }

  return /*#__PURE__*/external_react_default().createElement(react_.IonPage, null, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    container: true
  }, /*#__PURE__*/external_react_default().createElement(application/* SideMenu */.fv, {
    variant: shared.C.variants.inline
  }), /*#__PURE__*/external_react_default().createElement("h1", null, "Account")), /*#__PURE__*/external_react_default().createElement(react_.IonContent, {
    className: "ion-padding"
  }, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    container: true
  }, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: "/assets/accounts/default-avatar.png",
    alt: "profile pic"
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: fetchGreeting
  }, "Fetch Greeting"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: setGreeting
  }, "Set Greeting"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("input", {
    value: greeting,
    onChange: function onChange(e) {
      return setGreetingValue(e.target.value);
    },
    placeholder: "Set greeting"
  })), /*#__PURE__*/external_react_default().createElement("hr", null), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: getBalance
  }, "Get Balance"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: sendCoins
  }, "Send Coins"), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("input", {
    onChange: function onChange(e) {
      return setUserAccount(e.target.value);
    },
    placeholder: "Account ID"
  }), /*#__PURE__*/external_react_default().createElement("br", null), /*#__PURE__*/external_react_default().createElement("input", {
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "Amount"
  }))), /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    item: true,
    xs: 6
  }, !!currentUser && /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("h4", null, currentUser.email), /*#__PURE__*/external_react_default().createElement("ul", null, /*#__PURE__*/external_react_default().createElement("li", null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Link, {
    to: "/en/account/my/galleries"
  }, "My Galleries")), /*#__PURE__*/external_react_default().createElement("li", null, /*#__PURE__*/external_react_default().createElement("a", {
    onClick: function onClick() {
      return props.history.push("/en/account/my/videos");
    }
  }, "My Videos")), /*#__PURE__*/external_react_default().createElement("li", null, /*#__PURE__*/external_react_default().createElement(Logout, null)))) || /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("h4", null, "Not logged in"), /*#__PURE__*/external_react_default().createElement(LoginRow, null, /*#__PURE__*/external_react_default().createElement(FbLogin, null), /*#__PURE__*/external_react_default().createElement(PasswordLogin, null))))), /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/external_react_default().createElement(external_material_ui_core_.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/external_react_default().createElement("textarea", {
    value: scratchpad,
    onChange: setScratchpad
  }), /*#__PURE__*/external_react_default().createElement("button", {
    type: "submit",
    onClick: saveScratchpad
  }, "Save Scratchpad"))))), /*#__PURE__*/external_react_default().createElement("hr", null), notifications.length && /*#__PURE__*/external_react_default().createElement(react_.IonList, null, notifications.map(function (notif) {
    return /*#__PURE__*/external_react_default().createElement(react_.IonItem, {
      key: notif.id
    }, /*#__PURE__*/external_react_default().createElement(react_.IonLabel, null, /*#__PURE__*/external_react_default().createElement(react_.IonText, null, /*#__PURE__*/external_react_default().createElement("h3", {
      className: "notif-title"
    }, notif.title)), /*#__PURE__*/external_react_default().createElement("p", null, notif.body), notif.type === 'foreground' && /*#__PURE__*/external_react_default().createElement("p", null, "This data was received in foreground"), notif.type === 'action' && /*#__PURE__*/external_react_default().createElement("p", null, "This data was received on tap")));
  })) || 'no notifications so far'), /*#__PURE__*/external_react_default().createElement(react_.IonFooter, null, /*#__PURE__*/external_react_default().createElement(react_.IonToolbar, null, isPushNotificationsAvailable && /*#__PURE__*/external_react_default().createElement(react_.IonButton, {
    color: "success",
    expand: "full",
    onClick: register
  }, "Register for Push") || /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("h1", null, "Push notifications not available")))));
};

/* harmony default export */ const users_Account = (Account);
// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__(56518);
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);
// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__(393365);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "react-toggle"
var external_react_toggle_ = __webpack_require__(787938);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(578519);
// EXTERNAL MODULE: external "@web3-react/core"
var external_web3_react_core_ = __webpack_require__(918054);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(876590);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/AppRouter.jsx
var AppRouter = __webpack_require__(448433);
;// CONCATENATED MODULE: ./src/artifacts/contracts/Body.sol/BodyNFT.json
const BodyNFT_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"awardToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/components/users/MyAccountWidget.jsx
var _excluded = ["children"],
    _excluded2 = ["fill", "w", "h"];

function MyAccountWidget_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ MyAccountWidget_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function MyAccountWidget_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function MyAccountWidget_slicedToArray(arr, i) { return MyAccountWidget_arrayWithHoles(arr) || MyAccountWidget_iterableToArrayLimit(arr, i) || MyAccountWidget_unsupportedIterableToArray(arr, i) || MyAccountWidget_nonIterableRest(); }

function MyAccountWidget_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MyAccountWidget_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MyAccountWidget_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MyAccountWidget_arrayLikeToArray(o, minLen); }

function MyAccountWidget_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MyAccountWidget_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MyAccountWidget_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





















var FlexCol = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__FlexCol",
  componentId: "sc-1lfqp20-0"
})(["display:flex;flex-direction:column;"]);
var FlexRow = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__FlexRow",
  componentId: "sc-1lfqp20-1"
})(["display:flex;flex-wrap:wrap;"]);
/*
 * ropsten, _vp_ 2021-10-26
 * Dana, nude 1 (nude 3)
 */

var bodyAddress = '0x3e1a03a9e1682f4dd95413e0be69e5b7bccaf15d';
var Edit = external_styled_components_default()((Edit_default())).withConfig({
  displayName: "MyAccountWidget__Edit",
  componentId: "sc-1lfqp20-2"
})(["font-size:18px;position:absolute;top:2px;right:2px;cursor:pointer;"]);
/**
 * Avatar PFP
**/

var _Img = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget___Img",
  componentId: "sc-1lfqp20-3"
})(["border:1px solid #333333;border-radius:4px;position:relative;width:90px;height:90px;margin:5px;margin-right:", ";background-image:url('", "');background-size:cover;"], function (p) {
  return p.theme.smallWidth;
}, function (p) {
  return p.src;
});

var Img = function Img(_ref) {
  var src = _ref.src;

  var doEdit = function doEdit() {
    (0,external_react_toastify_.toast)('Editing your avatar is not yet implemented');
  };

  return /*#__PURE__*/external_react_default().createElement(_Img, {
    src: src
  }, /*#__PURE__*/external_react_default().createElement(Edit, {
    onClick: doEdit
  }));
};

var injected = new injected_connector_.InjectedConnector(); // { supportedChainIds: [1, 3, 4, 5, 42], })

var _CoinManager = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget___CoinManager",
  componentId: "sc-1lfqp20-4"
})(["display:flex;"]);

var CoinManager = function CoinManager(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/external_react_default().createElement(_CoinManager, Object.assign({
    className: "CoinManager"
  }, props), children);
};

var W0 = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__W0",
  componentId: "sc-1lfqp20-5"
})(["display:flex;justify-content:flex-start;align-items:center;"]);
var W1 = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__W1",
  componentId: "sc-1lfqp20-6"
})([""]);

var RegisterWithEmailBtn = function RegisterWithEmailBtn(props) {
  return /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, props, "Register with Email");
};

var LoginWithEmailBtn = function LoginWithEmailBtn(props) {
  return /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, props, "Login with Email");
};

var IconLogout = function IconLogout(_ref3) {
  var fill = _ref3.fill,
      w = _ref3.w,
      h = _ref3.h,
      props = _objectWithoutProperties(_ref3, _excluded2);

  // const theme = useTheme()
  w = w ? w : '12px';
  h = h ? h : '12px'; // fill = fill ? fill : theme.colors.text // @TODO: implement theme in ishlibjs

  fill = fill ? fill : '#333333';
  return /*#__PURE__*/external_react_default().createElement("span", props, /*#__PURE__*/external_react_default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: w,
    height: h,
    viewBox: "0 0 96.943 96.943",
    style: {
      enableBackground: 'new 0 0 96.943 96.943'
    }
  }, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("g", null, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"
  }), " ", /*#__PURE__*/external_react_default().createElement("path", {
    d: "M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"
  }), " "), " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null, " "), " ", /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null), /*#__PURE__*/external_react_default().createElement("g", null)));
};
/**
 * MyAccountWidget
**/


var MyAccountWidget = function MyAccountWidget(props) {
  // logg(props, 'MyAccountWidget')
  _objectDestructuringEmpty(props);

  var _useContext = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      loginModalOpen = _useContext.loginModalOpen,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      useApi = _useContext.useApi; // logg(useContext(AuthContext), 'MyAccountWidgetUsedAuthContext')
  // @TODO: does this really belong to TwofoldContext?


  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      editorMode = _useContext2.editorMode,
      setEditorMode = _useContext2.setEditorMode,
      purchaseModalOpen = _useContext2.purchaseModalOpen,
      setPurchaseModalOpen = _useContext2.setPurchaseModalOpen;
  /*
   * @TODO: avatar would be an object s.t. multiple styles/sizes are there,
   * and it should be in a context - shared across threemap, and accountWidget.
   */


  var _useState = (0,external_react_.useState)("https://d15g8hc4183yn4.cloudfront.net/wp-content/uploads/2022/09/05174137/20220904-PFP.jpg"),
      _useState2 = MyAccountWidget_slicedToArray(_useState, 2),
      avatar = _useState2[0],
      setAvatar = _useState2[1];

  var api = useApi();

  var _useWeb3React = (0,external_web3_react_core_.useWeb3React)(),
      active = _useWeb3React.active,
      account = _useWeb3React.account,
      library = _useWeb3React.library,
      connector = _useWeb3React.connector,
      activate = _useWeb3React.activate,
      deactivate = _useWeb3React.deactivate;

  function connect() {
    return _connect.apply(this, arguments);
  }

  function _connect() {
    _connect = MyAccountWidget_asyncToGenerator( /*#__PURE__*/MyAccountWidget_regeneratorRuntime().mark(function _callee4() {
      return MyAccountWidget_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return activate(injected);

            case 3:
              _context4.next = 8;
              break;

            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              (0,shared/* logg */.IJ)(_context4.t0, 'could not connect');

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 5]]);
    }));
    return _connect.apply(this, arguments);
  }

  function disconnect() {
    return _disconnect.apply(this, arguments);
  } // request access to the user's MetaMask account


  function _disconnect() {
    _disconnect = MyAccountWidget_asyncToGenerator( /*#__PURE__*/MyAccountWidget_regeneratorRuntime().mark(function _callee5() {
      return MyAccountWidget_regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              try {
                deactivate();
              } catch (ex) {
                console.log(ex);
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _disconnect.apply(this, arguments);
  }

  var requestAccount = /*#__PURE__*/function () {
    var _ref4 = MyAccountWidget_asyncToGenerator( /*#__PURE__*/MyAccountWidget_regeneratorRuntime().mark(function _callee() {
      return MyAccountWidget_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function requestAccount() {
      return _ref4.apply(this, arguments);
    };
  }();

  var myBodies = /*#__PURE__*/function () {
    var _ref5 = MyAccountWidget_asyncToGenerator( /*#__PURE__*/MyAccountWidget_regeneratorRuntime().mark(function _callee2() {
      var provider, signer, contract, tokensOfOwner, i, result;
      return MyAccountWidget_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!window.ethereum) {
                _context2.next = 15;
                break;
              }

              _context2.next = 3;
              return requestAccount();

            case 3:
              if (!account) {
                _context2.next = 15;
                break;
              }

              provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
              signer = provider.getSigner();
              contract = new external_ethers_.ethers.Contract(bodyAddress, BodyNFT_namespaceObject.Mt, signer);
              _context2.next = 9;
              return contract.tokensOfOwner(account);

            case 9:
              tokensOfOwner = _context2.sent;
              // @TODO: this is only first, I need to support unlimited number of bodies connected to the account.
              i = 0;
              _context2.next = 13;
              return contract.tokenURI(tokensOfOwner[i]);

            case 13:
              result = _context2.sent;
              shared/* request.get */.WY.get(result).then(function (r) {
                return r.data.image;
              }).then(function (r) {
                setAvatar(r);
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function myBodies() {
      return _ref5.apply(this, arguments);
    };
  }();

  (0,external_react_.useEffect)(function () {
    MyAccountWidget_asyncToGenerator( /*#__PURE__*/MyAccountWidget_regeneratorRuntime().mark(function _callee3() {
      return MyAccountWidget_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = setCurrentUser;
              _context3.next = 3;
              return api.getMyAccount();

            case 3:
              _context3.t1 = _context3.sent;
              (0, _context3.t0)(_context3.t1);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }, []);

  var doLogout = function doLogout() {
    setCurrentUser(shared.C.anonUser);
    localStorage.removeItem('jwt_token');
    window.location.reload(false);
  };

  return /*#__PURE__*/external_react_default().createElement(W0, {
    className: "MyAccountWidget"
  }, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) && /*#__PURE__*/external_react_default().createElement(Img, {
    src: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.profile_photo_url) || avatar
  }), /*#__PURE__*/external_react_default().createElement(FlexCol, null, /*#__PURE__*/external_react_default().createElement(FlexRow, null, currentUser.email && /*#__PURE__*/external_react_default().createElement(CoinManager, null, "[\xA0", typeof currentUser.n_unlocks === 'undefined' ? '?' : currentUser.n_unlocks, " coins\xA0", /*#__PURE__*/external_react_default().createElement((AddCircleOutline_default()), {
    onClick: function onClick() {
      return setPurchaseModalOpen(true);
    }
  }), "\xA0]"), currentUser !== null && currentUser !== void 0 && currentUser.email ? /*#__PURE__*/external_react_default().createElement(FlexRow, null, "[\xA0", /*#__PURE__*/external_react_default().createElement("a", {
    href: AppRouter/* appPaths.location */.X.location({
      slug: 'self'
    })
  }, currentUser.email), "\xA0", /*#__PURE__*/external_react_default().createElement(IconLogout, {
    onClick: doLogout
  }), "\xA0]") : /*#__PURE__*/external_react_default().createElement(FlexRow, null, /*#__PURE__*/external_react_default().createElement(RegisterWithEmailBtn, {
    onClick: function onClick() {
      setRegisterModalOpen(true);
    }
  }), /*#__PURE__*/external_react_default().createElement(LoginWithEmailBtn, {
    onClick: function onClick() {
      setLoginModalOpen(true);
    }
  }))), /*#__PURE__*/external_react_default().createElement(FlexRow, null, active && /*#__PURE__*/external_react_default().createElement(W1, null, " [", /*#__PURE__*/external_react_default().createElement("span", null, "Connected with ", /*#__PURE__*/external_react_default().createElement("b", null, account)), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: disconnect
  }, "Disconnect"), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: myBodies
  }, "myBodies"), " ]"), !active && /*#__PURE__*/external_react_default().createElement(W1, null, /*#__PURE__*/external_react_default().createElement("span", null, "Not Connected"), /*#__PURE__*/external_react_default().createElement("button", {
    onClick: connect
  }, "Connect to MetaMask")))), /*#__PURE__*/external_react_default().createElement(application/* PurchaseModal */.to, null));
};

MyAccountWidget.propTypes = {}; // no props
// const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;
// export default WrappedMyAccountWidget

/* harmony default export */ const users_MyAccountWidget = (MyAccountWidget);
;// CONCATENATED MODULE: ./src/components/users/index.jsx
function users_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ users_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function users_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function users_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { users_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { users_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 * components / users / index
 */







/* A */


/* F */
// @deprecated below, use ishlibjs

var FacebookLogin = core_.Plugins.FacebookLogin;
var FACEBOOK_PERMISSIONS = ['email'];
var FbLogin = function FbLogin(props) {
  var api = (0,shared/* useApi */.h_)();

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser;

  var doFbLogin = /*#__PURE__*/function () {
    var _ref = users_asyncToGenerator( /*#__PURE__*/users_regeneratorRuntime().mark(function _callee() {
      var result;
      return users_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return FacebookLogin.login({
                permissions: FACEBOOK_PERMISSIONS
              });

            case 2:
              result = _context.sent;

              if (result.accessToken) {
                shared/* request.post */.WY.post("".concat((config_default()).apiOrigin).concat(api.longTermTokenPath), {
                  accessToken: result.accessToken.token
                }).then(function (resp) {
                  localStorage.setItem(shared.C.jwt_token, resp.data.jwt_token); // localStorage.setItem(C.current_user, JSON.stringify(resp.data) )

                  setCurrentUser(resp.data);
                })["catch"](function (err) {
                  (0,shared/* logg */.IJ)(err, "Could not post request to ".concat((config_default()).apiOrigin).concat(api.longTermTokenPath));
                });
              } else {
                // Canceled by user.
                (0,shared/* logg */.IJ)('canceled');
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function doFbLogin() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    onClick: doFbLogin
  }, "FB Login");
};
var FbLogin2 = function FbLogin2(props) {
  var api = useApi();

  var _useContext2 = useContext(TwofoldContext),
      currentUser = _useContext2.currentUser,
      setCurrentUser = _useContext2.setCurrentUser;

  var doFbLogin = /*#__PURE__*/function () {
    var _ref2 = users_asyncToGenerator( /*#__PURE__*/users_regeneratorRuntime().mark(function _callee2() {
      var result;
      return users_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return FacebookLogin.login({
                permissions: FACEBOOK_PERMISSIONS
              });

            case 2:
              result = _context2.sent;

              if (result.accessToken) {
                request.post("".concat(config.apiOrigin).concat(api.longTermTokenPath), {
                  accessToken: result.accessToken.token
                }).then(function (resp) {
                  localStorage.setItem(C.jwt_token, resp.data.jwt_token); // localStorage.setItem(C.current_user, JSON.stringify(resp.data) )

                  setCurrentUser(resp.data);
                })["catch"](function (err) {
                  logg(err, "Could not post request to ".concat(config.apiOrigin).concat(api.longTermTokenPath));
                });
              } else {
                // Canceled by user.
                logg('canceled');
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function doFbLogin() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(Btn, {
    onClick: doFbLogin
  }, "Login or Register with Facebook");
}; // ^ @deprecated above

/* L */

var BuyBtn = external_styled_components_default().span.withConfig({
  displayName: "users__BuyBtn",
  componentId: "sc-b80luh-0"
})(["border:1px solid ", ";padding:5px;cursor:pointer;"], function (p) {
  return p.theme.colors.text;
});
var Logout = function Logout() {
  var _useContext3 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      currentUser = _useContext3.currentUser,
      setCurrentUser = _useContext3.setCurrentUser;

  var doLogout = function doLogout() {
    localStorage.removeItem(shared.C.jwt_token); // localStorage.removeItem(C.current_user)

    setCurrentUser({});
  };

  return /*#__PURE__*/external_react_default().createElement(BuyBtn, {
    onClick: doLogout
  }, "X");
};

var _W = external_styled_components_default().div.withConfig({
  displayName: "users___W",
  componentId: "sc-b80luh-1"
})(["display:flex;> *{}"]);
/* M */



/* P */

/* R */

/***/ }),

/***/ 38085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* reexport */ AppContext),
  "wI": () => (/* reexport */ shared_AppProvider),
  "a5": () => (/* binding */ BackBtn),
  "un": () => (/* binding */ Btn),
  "C": () => (/* reexport */ shared_C),
  "Zb": () => (/* binding */ Card),
  "s$": () => (/* binding */ ChevronLeft),
  "_Q": () => (/* binding */ ChevronRight),
  "gb": () => (/* binding */ Loading),
  "Oq": () => (/* binding */ MenuIcon),
  "S": () => (/* reexport */ shared_S),
  "Ni": () => (/* reexport */ ThemeContext),
  "f6": () => (/* reexport */ shared_ThemeProvider),
  "xP": () => (/* binding */ WBordered),
  "XO": () => (/* reexport */ AppRouter/* appPaths */.X),
  "$z": () => (/* binding */ inflector),
  "IJ": () => (/* binding */ logg),
  "KW": () => (/* binding */ pp_date),
  "WY": () => (/* reexport */ request),
  "h_": () => (/* reexport */ Api),
  "iP": () => (/* reexport */ shared_useWindowSize)
});

// UNUSED EXPORTS: FlexRow, Root, SsrContext, SsrProvider, ZoomContext, logg_android, logg_v, logga

// EXTERNAL MODULE: external "ionicons/icons"
var icons_ = __webpack_require__(188945);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(40124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@material-ui/icons"
var external_material_ui_icons_ = __webpack_require__(472105);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/shared/C.jsx
/**
 * Constants
 */
var C = {
  // A
  actions: {
    // CRUD
    "new": 'new',
    show: 'show'
  },
  anonUser: {},
  // as opposed to null
  // B
  bottomDrawerOpen: 'bottom-drawer-open',
  // localStorage
  // C
  collapsible: {
    description: "descr-sec",
    extra1: "extra1-sec",
    extra2: "extra2-sec",
    extra3: "extra3-sec",
    newsitems: "newsitems-sec",
    map: "map-sec",
    markers: "markers-sec"
  },
  collapsibles: 'collapsibles',
  // localStorage
  current_user: 'current_user',
  // F
  foldedCenter: 'folded-center',
  foldedLeft: 'folded-left',
  // twofoldContext
  foldedRight: 'folded-right',
  // H
  horizontal: 'horizontal',
  // I
  item_types: {
    gallery: 'Gallery',
    location: '::Gameui::Map',
    report: 'Report',
    photo: 'Photo',
    video: 'Video'
  },
  // J
  jwt_token: 'jwt_token',
  // L
  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
  locations: {
    earth: 'earth'
  },
  // M
  map_panel_types: {
    ConferenceRoom: 'ConferenceRoom',
    Equirectangular: "Equirectangular",
    GoogleMaps: "GoogleMaps",
    MapPanel: "MapPanel",
    MapPanelNoZoom: "MapPanelNoZoom",
    TabiversePlanet: "TabiversePlanet",
    ThreePanelV1: "ThreePanelV1",
    ThreePanelV1Fullscreen: "ThreePanelV1Fullscreen",
    ThreePanelV4: "ThreePanelV4"
  },
  // N
  names: {
    // for localStorage
    editorMode: 'editorMode'
  },
  // R
  rated: {
    nc17: 'nc-17'
  },
  ratedConfirmation: 'rated-confirmation',
  // localStorage
  ref: {
    init: 'init',
    loading: 'loading'
  },
  // T
  theme: 'theme',
  themes: {
    dark: 'dark',
    light: 'light'
  },
  twofoldPercent: 'twofold-percent',
  // localStorage
  // V
  variants: {
    bordered: 'bordered',
    // for Newsitems
    floating: 'floating',
    // for main-menu btn
    inline: 'inline',
    // for main-menu btn
    transparent: 'transparent' // for markers on Right

  },
  vertical: 'vertical',
  vote_values: {
    up: 'up',
    down: 'down'
  }
};
/* harmony default export */ const shared_C = (C);
// EXTERNAL MODULE: external "@capacitor/device"
var device_ = __webpack_require__(617493);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(272248);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/math/Octree.js
var Octree = __webpack_require__(835344);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
;// CONCATENATED MODULE: ./src/shared/AppProvider.jsx
var _excluded = ["children"];

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/**
 * links AuthContext to LoginModal
**/

var WLoginModal = function WLoginModal(props) {
  // logg(props, 'WLoginModal')
  var _useContext = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      setCurrentUser = _useContext.setCurrentUser;

  var onError = function onError(inn) {
    logg(inn, 'cannot login!');
    (0,external_react_toastify_.toast)('cannot login!');
  };

  var onSuccess = function onSuccess(inn) {
    logg('Logged in successfully.');
    setCurrentUser(inn);
  };

  return /*#__PURE__*/external_react_default().createElement(dist/* LoginModal */._A, {
    onError: onError,
    onSuccess: onSuccess
  });
};

var AppContext = external_react_default().createContext({});
/**
 * AppProvider: os, useHistory, theme, AuthContext (current_user, useApi), TwofoldContext, CollapsibleContext
 *
 * @TODO: move ToastContainer in here?
 *
 * @Test: os / mobile detection?
 * @Test: provides theme
 * @Test: provides auth
 * @Test: provides twofold
 * @Test: provides collapsible
 * @Test: has loginModal and WLoginModal ?
 * @Test: has registerModal
 *
**/

var AppProvider = function AppProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // logg(props, 'AppProvider')
  var _props$useHistory = props.useHistory,
      useHistory = _props$useHistory === void 0 ? external_react_router_dom_.useHistory : _props$useHistory; // @TODO: test-drive _vp_ 2022-09-13
  // @TODO: this probably doesn't accommodate next_js, and raises a jest warning. _vp_ 2022-09-23

  var _useState = (0,external_react_.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      os = _useState2[0],
      setOs = _useState2[1];

  var fn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var info;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return device_.Device.getInfo();

            case 2:
              info = _context.sent;
              // info.operatingSystem === 'ios' || 'android'
              setOs(info.operatingSystem);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fn() {
      return _ref2.apply(this, arguments);
    };
  }();

  fn();

  var _useState3 = (0,external_react_.useState)(new external_three_.Scene()),
      _useState4 = _slicedToArray(_useState3, 2),
      scene = _useState4[0],
      setScene = _useState4[1];

  var _useState5 = (0,external_react_.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      tracked = _useState6[0],
      setTracked = _useState6[1];

  var _useState7 = (0,external_react_.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      markers2destinationSlugs = _useState8[0],
      setMarkers2destinationSlugs = _useState8[1];

  var _useState9 = (0,external_react_.useState)(new Octree/* Octree */.V()),
      _useState10 = _slicedToArray(_useState9, 2),
      worldOctree = _useState10[0],
      setWorldOctree = _useState10[1]; // const [ pickingObjects, setPickingObjects ] = useState([])


  var pickingObjects = [];

  var setPickingObjects = function setPickingObjects() {};

  return /*#__PURE__*/external_react_default().createElement(AppContext.Provider, {
    value: {
      os: os,
      useHistory: useHistory,
      scene: scene,
      tracked: tracked,
      setTracked: setTracked,
      worldOctree: worldOctree,
      setWorldOctree: setWorldOctree,
      pickingObjects: pickingObjects,
      setPickingObjects: setPickingObjects,
      markers2destinationSlugs: markers2destinationSlugs,
      setMarkers2destinationSlugs: setMarkers2destinationSlugs
    }
  }, /*#__PURE__*/external_react_default().createElement(shared_ThemeProvider, null, /*#__PURE__*/external_react_default().createElement(dist/* AuthContextProvider */.HD, {
    useApi: Api
  }, /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* TwofoldContextProvider */.AO, null, /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* CollapsibleProvider */.h9, null, children, /*#__PURE__*/external_react_default().createElement(WLoginModal, null), /*#__PURE__*/external_react_default().createElement(dist/* RegisterModal */.Kt, null))))));
};

AppProvider.propTypes = {};
/* harmony default export */ const shared_AppProvider = (AppProvider);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/shared/Api.jsx




var apiPaths = {}; // @TODO: create direct unwrapped access to this. _vp_ 2022-09-10

var useApi = function useApi() {
  var token;

  try {
    token = localStorage.getItem(shared_C.jwt_token);
  } catch (err) {
    logg(err, 'Api cannot access localStorage');
  }

  return {
    deleteNewsitem: function deleteNewsitem(_ref) {
      var id = _ref.id;
      return request["delete"]("".concat((config_default()).apiOrigin, "/api/newsitems/").concat(id, "?jwt_token=").concat(token)).then(function (r) {
        return r.data;
      }).then(function (r) {
        return r;
      });
    },
    doRegister: function doRegister(_ref2) {
      var email = _ref2.email,
          password = _ref2.password;
      return request.post("".concat((config_default()).apiOrigin, "/api/users/register"), {
        user: {
          email: email,
          password: password
        }
      }).then(function (r) {
        return r.data;
      }).then(function (r) {
        logg(r, 'done registered');
        return r;
      });
    },

    /* Returns current user */
    doUnlock: function doUnlock(_ref3) {
      var kind = _ref3.kind,
          id = _ref3.id;
      var jwt_token = localStorage.getItem('jwt_token');
      var path = "/api/payments/unlock?kind=".concat(kind, "&id=").concat(id, "&jwt_token=").concat(jwt_token);
      return request.post("".concat((config_default()).apiOrigin).concat(path)).then(function (r) {
        return r.data;
      });
    },
    getCities: function getCities() {
      return request.get("".concat((config_default()).apiOrigin, "/api/cities")).then(function (r) {
        return r.data;
      });
    },
    getCity: function getCity(slug) {
      return request.get("".concat((config_default()).apiOrigin, "/api/cities/view/").concat(slug));
    },
    getGallery: function getGallery(slug) {
      return request.get("".concat((config_default()).apiOrigin, "/api/galleries/view/").concat(slug, "?jwt_token=").concat(token)).then(function (r) {
        return r.data.gallery;
      });
    },
    getLocation: function getLocation(props) {
      // _vp_ 2022-09-04
      var _npg = props.newsitems_page,
          slug = props.slug;
      return request.get("/api/maps/view/".concat(slug, "?jwt_token=").concat(token, "&newsitems_page=").concat(_npg)).then(function (r) {
        return r.data;
      }).then(function (r) {
        return r.map;
      })["catch"](function (err) {
        return err;
      });
    },
    // @TODO: test: upon 401, return anon user. _vp_ 2022-08-15
    getMyAccount: function getMyAccount() {
      return request.post("/api/my/account", {
        jwt_token: token
      }).then(function (r) {
        return r.data;
      })["catch"](function (err) {
        return shared_C.anonUser;
      });
    },
    getPhoto: function getPhoto(slug) {
      return request.get("".concat((config_default()).apiOrigin, "/api/photos/view/").concat(slug, "?jwt_token=").concat(token)).then(function (r) {
        return r.data.photo;
      });
    },
    getReport: function getReport(slug) {
      return request.get("".concat((config_default()).apiOrigin, "/api/reports/view/").concat(slug, "?jwt_token=").concat(token)).then(function (r) {
        return r.data.report;
      });
    },
    getTag: function getTag(tag) {
      return request.get("".concat((config_default()).apiOrigin, "/api/tags/view/").concat(tag.slug)).then(function (r) {
        return r.data;
      });
    },
    initPayment: function initPayment(p) {
      return request.post("".concat((config_default()).apiOrigin, "/api/payments2"), {
        jwt_token: token,
        amount_cents: p.amountCents
      }).then(function (r) {
        return r.data;
      });
    },
    longTermTokenPath: '/api/users/long_term_token',
    // @TODO: move to config.router _vp_ 2022-09-04
    postLogin: function postLogin(_ref4) {
      var email = _ref4.email,
          password = _ref4.password;
      return request.post("".concat((config_default()).apiOrigin, "/api/users/login.json"), {
        user: {
          email: email,
          password: password
        }
      }).then(function (r) {
        return r.data;
      }).then(function (r) {
        localStorage.setItem(shared_C.jwt_token, r.jwt_token);
        return r;
      });
    },
    myVideosPath: "/api/my/videos",
    // @TODO: remove
    applicationHome: function applicationHome() {
      request.get("".concat((config_default()).apiOrigin, "/api/sites/view/").concat((config_default()).domain), {
        params: {
          jwt_token: token
        }
      }).then(function (r) {
        return r.data;
      });
    },
    vote: function vote(props) {
      var value = props.value,
          voter_id = props.voter_id,
          votee_id = props.votee_id,
          votee_class_name = props.votee_class_name;
      return request.post("".concat((config_default()).apiOrigin, "/api/v1/vote/").concat(votee_class_name, "/").concat(votee_id, "/").concat(voter_id, "/").concat(value), {
        params: {
          jwt_token: token
        }
      }).then(function (r) {
        logg(r, 'voted');
        return r;
      });
    },
    unvote: function unvote() {
      logg('Unvote is not implemented!');
    }
  };
};

/* harmony default export */ const Api = (useApi);
// EXTERNAL MODULE: ./src/AppRouter.jsx
var AppRouter = __webpack_require__(448433);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(752167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/shared/request.jsx


var settings = {
  baseURL: (config_default()).apiOrigin
};
/* harmony default export */ const request = (external_axios_default().create(settings));
;// CONCATENATED MODULE: ./src/shared/S.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Style Constants
 *
 * @TODO: remove this file entirely. _vp_ 2022-09-20
 * @deprecated, use variables.css and css vars
 */
var S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '24px',
  bottomDrawerOpenHeight: '124px',
  breadcrumbsHeight: '30px',
  smallWidth: '10px',
  mediumWidth: '20px',
  thinBorderWidth: '2px'
};

var lightTheme = _objectSpread(_objectSpread({}, S), {}, {
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    border: 'black',
    // removing this...
    blue: '#6aa3e9',
    cardBackground: 'white',
    cyan: "#49bcc6",
    darkGrey: '#605d5d',
    gold: '#ffe100',
    lightGrey: '#988b8b',
    red: 'red'
  }
});

var darkTheme = _objectSpread(_objectSpread({}, S), {}, {
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    border: 'white',
    // removing this...
    blue: '#73b0fa',
    cardBackground: '#1a1a1a',
    cyan: "#49bcc6",
    darkGrey: '#b3afaf',
    gold: '#ffe100',
    lightGrey: '#4a4343',
    red: '#eb83a8'
  }
});

/* harmony default export */ const shared_S = ({
  lightTheme: lightTheme,
  darkTheme: darkTheme
});
;// CONCATENATED MODULE: ./src/shared/SsrProvider.jsx
var SsrProvider_excluded = ["children"];

function SsrProvider_slicedToArray(arr, i) { return SsrProvider_arrayWithHoles(arr) || SsrProvider_iterableToArrayLimit(arr, i) || SsrProvider_unsupportedIterableToArray(arr, i) || SsrProvider_nonIterableRest(); }

function SsrProvider_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SsrProvider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SsrProvider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SsrProvider_arrayLikeToArray(o, minLen); }

function SsrProvider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SsrProvider_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SsrProvider_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SsrProvider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SsrProvider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SsrProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SsrContext = external_react_default().createContext({});
/**
 * SsrProvider
**/

var SsrProvider = function SsrProvider(_ref) {
  var children = _ref.children,
      props = SsrProvider_objectWithoutProperties(_ref, SsrProvider_excluded);

  // logg(props, 'SsrProvider')
  var _location = props.location;

  var _useState = (0,external_react_.useState)(_location),
      _useState2 = SsrProvider_slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  return /*#__PURE__*/external_react_default().createElement(SsrContext.Provider, {
    value: {
      location: location,
      setLocation: setLocation
    }
  }, children);
};

SsrProvider.propTypes = {
  location: (external_prop_types_default()).object
};
/* harmony default export */ const shared_SsrProvider = ((/* unused pure expression or super */ null && (SsrProvider)));
;// CONCATENATED MODULE: ./src/shared/ThemeProvider.jsx
var ThemeProvider_excluded = ["children"];

function ThemeProvider_slicedToArray(arr, i) { return ThemeProvider_arrayWithHoles(arr) || ThemeProvider_iterableToArrayLimit(arr, i) || ThemeProvider_unsupportedIterableToArray(arr, i) || ThemeProvider_nonIterableRest(); }

function ThemeProvider_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ThemeProvider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ThemeProvider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ThemeProvider_arrayLikeToArray(o, minLen); }

function ThemeProvider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ThemeProvider_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ThemeProvider_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ThemeProvider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ThemeProvider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ThemeProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * ThemeProvider - this one is my own.
**/

var ThemeContext = external_react_default().createContext({});

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      props = ThemeProvider_objectWithoutProperties(_ref, ThemeProvider_excluded);

  var defaultTheme =  true ? shared_C.themes.light : 0;

  var _useState = (0,external_react_.useState)(defaultTheme),
      _useState2 = ThemeProvider_slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1]; // set the body class on page load, client only


  (0,external_react_.useEffect)(function () {
    var positive = theme === shared_C.themes.light ? shared_C.themes.light : shared_C.themes.dark;
    var negative = theme === shared_C.themes.light ? shared_C.themes.dark : shared_C.themes.light;
    document.body.classList.remove(negative);
    document.body.classList.add(positive);
  }, []); // used by DayNightToggle

  var toggleTheme = function toggleTheme(e) {
    e.preventDefault();

    if (theme === shared_C.themes.light) {
      window.localStorage.setItem(shared_C.theme, shared_C.themes.dark);
      setTheme(shared_C.themes.dark);
      document.body.classList.remove(shared_C.themes.light);
      document.body.classList.add(shared_C.themes.dark);
    } else {
      window.localStorage.setItem(shared_C.theme, shared_C.themes.light);
      setTheme(shared_C.themes.light);
      document.body.classList.add(shared_C.themes.light);
      document.body.classList.remove(shared_C.themes.dark);
    }
  };

  return /*#__PURE__*/external_react_default().createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme,
      toggleTheme: toggleTheme
    }
  }, /*#__PURE__*/external_react_default().createElement(external_styled_components_.ThemeProvider, {
    theme: theme == shared_C.themes.light ? shared_S.lightTheme : shared_S.darkTheme
  }, children));
};

/* harmony default export */ const shared_ThemeProvider = (ThemeProvider);
;// CONCATENATED MODULE: ./src/shared/useWindowSize.jsx
function useWindowSize_slicedToArray(arr, i) { return useWindowSize_arrayWithHoles(arr) || useWindowSize_iterableToArrayLimit(arr, i) || useWindowSize_unsupportedIterableToArray(arr, i) || useWindowSize_nonIterableRest(); }

function useWindowSize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useWindowSize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useWindowSize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWindowSize_arrayLikeToArray(o, minLen); }

function useWindowSize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useWindowSize_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useWindowSize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * useWindowSize
 */

var useWindowSize = function useWindowSize() {
  var _useState = (0,external_react_.useState)([0, 0]),
      _useState2 = useWindowSize_slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  (0,external_react_.useLayoutEffect)(function () {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return function () {
      return window.removeEventListener('resize', updateSize);
    };
  }, []);
  return size;
};

/* harmony default export */ const shared_useWindowSize = (useWindowSize);
;// CONCATENATED MODULE: ./src/shared/index.jsx
var shared_excluded = ["children"],
    _excluded2 = ["navigateToItem"],
    _excluded3 = ["children"],
    _excluded4 = ["className"];

function shared_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = shared_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function shared_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 *  $shared / index
**/
// alphabetized










/* A */




/* B */

/**
 * Back Button
 */

var BackIcon = external_styled_components_default()(react_.IonIcon).withConfig({
  displayName: "shared__BackIcon",
  componentId: "sc-h0ppel-0"
})(["margin-right:5px;cursor:pointer;"]);
var BackBtn = function BackBtn() {
  var _useContext = (0,external_react_.useContext)(AppContext),
      useHistory = _useContext.useHistory;

  var history = useHistory();

  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      showItem = _useContext2.showItem,
      setShowItem = _useContext2.setShowItem; // logg(useContext(TwofoldContext), 'BackBtn usedContext')


  var onClick = function onClick() {
    setShowItem(null);
    history.goBack();
  };

  return /*#__PURE__*/external_react_default().createElement(BackIcon, {
    className: "BackBtn",
    icon: icons_.arrowBack,
    onClick: onClick
  });
};
/**
 * Just your regular shadowed box. Pointer cursor. TDD
 */

var Btn = external_styled_components_default().div.withConfig({
  displayName: "shared__Btn",
  componentId: "sc-h0ppel-1"
})(["border:1px solid gray;border-radius:5px;padding:.3em 1em;cursor:pointer;"]);
/* C */


var ChevronLeft = external_styled_components_default()(external_material_ui_icons_.ChevronLeft).withConfig({
  displayName: "shared__ChevronLeft",
  componentId: "sc-h0ppel-2"
})(["color:", ""], function (p) {
  return p.theme.colors.text;
});
var ChevronRight = external_styled_components_default()(external_material_ui_icons_.ChevronRight).withConfig({
  displayName: "shared__ChevronRight",
  componentId: "sc-h0ppel-3"
})(["color:", ""], function (p) {
  return p.theme.colors.text;
});
/**
 * A Card
 * @deprecated, use WBordered instead. _vp_ 2022-09-19
 */

var _Card = external_styled_components_default()((Box_default())).withConfig({
  displayName: "shared___Card",
  componentId: "sc-h0ppel-4"
})(["margin-bottom:1em;padding:", ";background:var(--ion-card-background-color);cursor:", ";display:flex;flex-direction:column;"], function (p) {
  return p.theme.smallWidth;
}, function (p) {
  return p.cursor ? p.cursor : 'auto';
});

var Card = function Card(_ref) {
  var children = _ref.children,
      _props = shared_objectWithoutProperties(_ref, shared_excluded);

  // logg(_props, 'Card')
  var navigateToItem = _props.navigateToItem,
      props = shared_objectWithoutProperties(_props, _excluded2);

  return /*#__PURE__*/external_react_default().createElement(_Card, Object.assign({
    className: "Card"
  }, props), children);
};
/* D */

/* F */

var FlexRow = external_styled_components_default().div.withConfig({
  displayName: "shared__FlexRow",
  componentId: "sc-h0ppel-5"
})(["display:flex;> *{margin:auto .4em;}"]);
/* I */

/**
 * Like the rails inflector, has methods:
 * tableize()
 *
 * @TODO: move into appRouter
 */

var inflector = {
  classify: function classify(m) {
    if (m === 'locations') {
      return '::Gameui::Map';
    }

    if (m.slice(-3) === 'ies') {
      m = m.slice(0, -3) + 'y';
    }

    if (m.slice(-1) === 's') {
      m = m.slice(0, -1);
    }

    var ms = m.split('_');

    for (var i = 0; i < ms.length; i++) {
      ms[i] = ms[i].charAt(0).toUpperCase() + ms[i].slice(1);
    }

    return ms.join("");
  },
  tableize: function tableize(m) {
    switch (m) {
      case 'Gallery':
        return 'galleries';

      case '::Gameui::Map':
        return 'locations';

      default:
        // Report, what else?
        return "".concat(m.toLowerCase(), "s");
    }
  }
};
/* L */
// From: https://codepen.io/charlyarg/pen/GByKja

var _Circle = external_styled_components_default().div.withConfig({
  displayName: "shared___Circle",
  componentId: "sc-h0ppel-6"
})(["position:fixed;z-index:999;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0;width:50px;height:50px;"]);

var Loading = function Loading(p) {
  return /*#__PURE__*/external_react_default().createElement(_Circle, null, /*#__PURE__*/external_react_default().createElement(core_.CircularProgress, null));
};
/**
 * Usage: logg(someObject, 'label')
 *
 * This development-grade logger can be used instead of console.log() with some advantages:
 * * It encourages consistent labeling of logs. By labeling each log line, you can have dozens of log lines
 * written per action, and still know which log line comes from where.
 * The recommended label is the component name, or function name.
 * * If the label is present, the logged object is placed in the window, allowing you to inspect it in the console. The
 * label becomes the name of the object (stripped to [0-9a-zA-Z\-_] chars). If you're logging a function, you can execute it.
 * If you log more than one thing, they can interact, allowing you to validate control flow.
 * * the logger can be turned off by making this function simply return.
 */

var logg = function logg(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (true) {
    return;
  }

  c = "string" === typeof c ? c : b.replace(/\W/g, "");

  if (c.length > 0) {
    window[c] = a;
  }

  console.log("+++ ".concat(b, ":"), a); // eslint-disable-line no-console
}; // loggs a non-empty vector


var logg_v = function logg_v(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // threejs
  if ('undefined' !== typeof a) {
    if ('undefined' !== typeof a.z) {
      // it's a vector
      if (a.x + a.y + a.z !== 0) {
        console.log("+++ ".concat(b, ":"), a); // eslint-disable-line no-console
      }

      return;
    }
  }

  logg(a, b, c);
}; // optimized for Android (e.g. it inspects and doesn't use window)


var logg_android = function logg_android(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  console.log("+++ ".concat(b, ":"), a.inspect); // eslint-disable-line no-console
};

var logga = (/* unused pure expression or super */ null && (logg_android));

/* M */

var MenuIcon = external_styled_components_default()(external_material_ui_icons_.Menu).withConfig({
  displayName: "shared__MenuIcon",
  componentId: "sc-h0ppel-7"
})(["color:", ""], function (p) {
  return p.theme.colors.text;
});
/* N */

/* P */

/**
 * pretty print date
 */

var pp_date = function pp_date(d) {
  return (d || "").substring(0, 10);
};
/* R */


var Root = external_styled_components_default().div.withConfig({
  displayName: "shared__Root",
  componentId: "sc-h0ppel-8"
})(["background:", ";height:100vh;overflow:auto;"], function (p) {
  return p.theme.colors.background;
});
/* S */



/* T */


/* U */


/* W */

/**
 * Wrapper Bordered
 *
 * Used in collapsibles and MarkersList
 * prefer this to Card.
 */

var _WBordered = external_styled_components_default().div.withConfig({
  displayName: "shared___WBordered",
  componentId: "sc-h0ppel-9"
})(["border:2px solid var(--ion-border-color);border-radius:var(--ion-border-radius);background:var(--ion-card-background-color);color:var(--ion-color);margin-bottom:1em;padding:.5em;cursor:", ";"], function (p) {
  return p.onClick ? 'pointer' : null;
});

var WBordered = function WBordered(_ref2) {
  var children = _ref2.children,
      _props = shared_objectWithoutProperties(_ref2, _excluded3);

  var _props$className = _props.className,
      className = _props$className === void 0 ? '' : _props$className,
      props = shared_objectWithoutProperties(_props, _excluded4);

  return /*#__PURE__*/external_react_default().createElement(_WBordered, Object.assign({
    className: "".concat(className, " WBordered")
  }, props), children);
};
/* Z */
// @TODO: move this into its own Zoom components, or into MapPanel

var ZoomContext = external_react_default().createContext({});

/***/ }),

/***/ 22675:
/***/ ((module) => {

// Exports
module.exports = {
	"plt-mobile": "ItemModal_plt-mobile__sanTA",
	"ItemModal": "ItemModal_ItemModal__puazB",
	"ItemModalOverlay": "ItemModal_ItemModalOverlay__gP0FW"
};


/***/ }),

/***/ 379155:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "DayNightToggle_container__8uWpP",
	"switch": "DayNightToggle_switch__dShqX",
	"fill": "DayNightToggle_fill__eQQvw",
	"background": "DayNightToggle_background__kRvrg",
	"stars1": "DayNightToggle_stars1__M4CSu",
	"stars2": "DayNightToggle_stars2__f2kRc",
	"sunMoon": "DayNightToggle_sunMoon___7z_j",
	"dots": "DayNightToggle_dots__5_lv_"
};


/***/ }),

/***/ 952560:
/***/ ((module) => {

// Exports
module.exports = {
	"Metaline": "Metaline_Metaline__XHHBl",
	"user": "Metaline_user__gvAz_",
	"city": "Metaline_city__t7Mok",
	"tags": "Metaline_tags__Mk_Xn"
};


/***/ }),

/***/ 768711:
/***/ ((module) => {

// Exports
module.exports = {
	"LoginModal": "PurchaseModal_LoginModal__CBaX9",
	"LoginModalOverlay": "PurchaseModal_LoginModalOverlay__rymkt",
	"Notice": "PurchaseModal_Notice__xw_v2"
};


/***/ }),

/***/ 18033:
/***/ ((module) => {

// Exports
module.exports = {
	"UnlockModal": "UnlockModal_UnlockModal__VXRN4",
	"UnlockModalOverlay": "UnlockModal_UnlockModalOverlay__AVJ1w",
	"Notice": "UnlockModal_Notice__pMSnr"
};


/***/ }),

/***/ 710899:
/***/ ((module) => {

// Exports
module.exports = {
	"GalleriesShow": "Galleries_GalleriesShow__4b4gq",
	"heading": "Galleries_heading__TqfKk",
	"title": "Galleries_title__c2Qkg",
	"narrow": "Galleries_narrow__ZxgG6",
	"thumbs": "Galleries_thumbs__wbY2H",
	"card": "Galleries_card__WEvVy",
	"full_img_section": "Galleries_full_img_section__e4rV_",
	"item": "Galleries_item__8C3Lb"
};


/***/ }),

/***/ 401928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(616689);
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(__webpack_require__(566405));
__webpack_require__(61497);
__webpack_require__(516090);
var _Box = _interopDefault(__webpack_require__(533993));
var icons$1 = __webpack_require__(941343);
var PropTypes = _interopDefault(__webpack_require__(887573));
var reactRouterDom = __webpack_require__(314661);
var styled = _interopDefault(__webpack_require__(857518));
var axios = _interopDefault(__webpack_require__(326458));
var reactToastify = __webpack_require__(1187);
__webpack_require__(898815);
var Modal = _interopDefault(__webpack_require__(813792));
__webpack_require__(412931);
var Drawer = _interopDefault(__webpack_require__(109703));
var Fab = _interopDefault(__webpack_require__(812556));
__webpack_require__(377335);
var List = _interopDefault(__webpack_require__(256633));
var ListItem = _interopDefault(__webpack_require__(423744));
__webpack_require__(474965);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var C = {
  anonUser: {},
  bottomDrawerOpen: 'bottom-drawer-open',
  collapsible: {
    description: "descr-sec",
    extra1: "extra1-sec",
    extra2: "extra2-sec",
    extra3: "extra3-sec",
    map: "map-sec",
    markers: "markers-sec"
  },
  collapsibles: 'collapsibles',
  current_user: 'current_user',
  horizontal: 'horizontal',
  item_types: {
    gallery: 'Gallery',
    report: 'Report',
    video: 'Video'
  },
  jwt_token: 'jwt_token',
  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
  locations: {
    earth: 'earth'
  },
  map_panel_types: {
    Equirectangular: "Equirectangular",
    MapPanel: "MapPanel",
    MapPanelNoZoom: "MapPanelNoZoom",
    ThreePanelV1: "ThreePanelV1",
    ThreePanelV4: "ThreePanelV4"
  },
  names: {
    scratchpad: 'Scratchpad'
  },
  rated: {
    nc17: 'nc-17'
  },
  ratedConfirmation: 'rated-confirmation',
  theme: 'theme',
  themes: {
    dark: 'dark',
    light: 'light'
  },
  twofoldPercent: 'twofold-percent',
  variants: {
    bordered: 'bordered',
    floating: 'floating',
    inline: 'inline',
    transparent: 'transparent'
  },
  vertical: 'vertical'
};

var request = axios.create({});

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children", "onClose"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
var Actions = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"])));
var BackIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n  cursor: pointer;\n"])));
var Btn = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"])));
var ChevronLeft = styled(icons$1.ChevronLeft)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var ChevronRight = styled(icons$1.ChevronRight)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var Card = styled(_Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ", ";\n\n  display: flex;\n  flex-direction: column;\n"])), function (p) {
  return p.cursor ? p.cursor : 'auto';
});
var CloseBtn = function CloseBtn(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React__default.createElement(icons$1.Close, _extends({
    style: _extends({
      cursor: 'pointer'
    }, props.style)
  }, props));
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

var _FlexCol = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"])));

var FlexCol = function FlexCol(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React__default.createElement(_FlexCol, _extends({
    className: "FlexCol"
  }, props), children);
};
var FlexRow = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"])));

var _Circle = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"])));

var logg = function logg(a, b, c) {
  if (b === void 0) {
    b = "";
  }

  if (c === void 0) {
    c = null;
  }

  c = "string" === typeof c ? c : b.replace(/\W/g, "");

  if (c.length > 0 && typeof window !== "undefined") {
    window[c] = a;
  }

  console.log("+++ " + b + ":", a);
};
var MenuIcon = styled(icons$1.Menu)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});

var _Header = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"])));

var ModalHeader = function ModalHeader(_ref3) {
  var children = _ref3.children,
      onClose = _ref3.onClose,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React__default.createElement(FlexRow, null, /*#__PURE__*/React__default.createElement(_Header, null, children), /*#__PURE__*/React__default.createElement(CloseBtn, {
    onClick: onClose
  }));
};
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};
var WBordered = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
});
var WBorderedItem = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});
var Wrapper = styled.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n"])));
var ZoomContext = React__default.createContext({});

var styles = {"LoginModal":"_LoginModal-module__LoginModal__2YolN","LoginModalOverlay":"_LoginModal-module__LoginModalOverlay__3hqvY","Notice":"_LoginModal-module__Notice__2ifwF"};

var LoginModal = function LoginModal(props) {
  var onError = props.onError,
      onSuccess = props.onSuccess;

  var _useContext = React.useContext(AuthContext),
      loginModalOpen = _useContext.loginModalOpen,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen,
      useApi = _useContext.useApi;

  var _useState = React.useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = React.useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var api = useApi();

  var doPasswordLogin = function doPasswordLogin(email, password) {
    try {
      api.postLogin({
        email: email,
        password: password
      }).then(function (r) {
        setLoginModalOpen(false);
        onSuccess(r);
      }).catch(function (err) {
        onError(err);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  Modal.setAppElement('body');
  return /*#__PURE__*/React__default.createElement(Modal, {
    className: "LoginModal " + styles.LoginModal,
    isOpen: !!loginModalOpen,
    overlayClassName: styles.LoginModalOverlay,
    portalClassName: styles.LoginModalPortal
  }, /*#__PURE__*/React__default.createElement(ModalHeader, {
    onClose: function onClose() {
      return setLoginModalOpen(false);
    }
  }, "Login"), 'string' === typeof loginModalOpen && /*#__PURE__*/React__default.createElement(FlexRow, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles.Notice
  }, loginModalOpen)), /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React__default.createElement("input", {
    name: "email",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React__default.createElement("input", {
    name: "password",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        doPasswordLogin(email, password);
      }
    }
  }), /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React__default.createElement(Btn, {
    onClick: function onClick() {
      return doPasswordLogin(email, password);
    }
  }, "Login"))), /*#__PURE__*/React__default.createElement("hr", {
    style: {
      margin: '2rem 0',
      borderWidth: '1px'
    }
  }), /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React__default.createElement("a", {
    onClick: function onClick() {
      setLoginModalOpen(false);
      setRegisterModalOpen(true);
    }
  }, "Register Instead")));
};

LoginModal.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

var RegisterModal = function RegisterModal(props) {
  var _useContext = React.useContext(AuthContext),
      setLoginModalOpen = _useContext.setLoginModalOpen,
      registerModalOpen = _useContext.registerModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen,
      useApi = _useContext.useApi;

  var api = useApi();

  var _useState = React.useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = React.useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = React.useState(''),
      password2 = _useState3[0],
      setPassword2 = _useState3[1];

  var doRegister = function doRegister(email, password, password2) {
    try {
      if (password !== password2) {
        reactToastify.toast('Passwords do not match');
        return Promise.resolve();
      }

      var out = api.doRegister({
        email: email,
        password: password
      });
      out.then(function (r) {
        setRegisterModalOpen(false);
        setLoginModalOpen(r.message);
      }).catch(function (e) {
        reactToastify.toast("Registration failed");
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(Modal, {
    className: "LoginModal " + styles.LoginModal,
    isOpen: registerModalOpen,
    overlayClassName: styles.LoginModalOverlay,
    portalClassName: styles.LoginModalPortal
  }, /*#__PURE__*/React__default.createElement(ModalHeader, {
    onClose: function onClose() {
      return setRegisterModalOpen(false);
    }
  }, "Register"), /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    name: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    name: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password2"
  }, "Confirm Password"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    name: "password2",
    value: password2,
    onChange: function onChange(e) {
      return setPassword2(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React__default.createElement(Btn, {
    className: "Submit",
    onClick: function onClick() {
      return doRegister(email, password, password2);
    }
  }, "Register")), /*#__PURE__*/React__default.createElement("hr", {
    style: {
      margin: '2rem 0',
      borderWidth: '1px'
    }
  }), /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React__default.createElement("a", {
    onClick: function onClick() {
      return setLoginModalOpen(true) || setRegisterModalOpen(false);
    }
  }, "Login Instead"))));
};

RegisterModal.propTypes = {};

var _excluded$1 = ["children"];
var AuthContext = React.createContext({});

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _props$currentUser = props.currentUser,
      _currentUser = _props$currentUser === void 0 ? C.anonUser : _props$currentUser,
      _setCurrentUser = props.setCurrentUser,
      _props$loginModalOpen = props.loginModalOpen,
      _loginModalOpen = _props$loginModalOpen === void 0 ? false : _props$loginModalOpen,
      _setLoginModalOpen = props.setLoginModalOpen,
      _props$registerModalO = props.registerModalOpen,
      _registerModalOpen = _props$registerModalO === void 0 ? false : _props$registerModalO,
      _setRegisterModalOpen = props.setRegisterModalOpen;

  var _useState = React.useState(_currentUser),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  if (_setCurrentUser) {
    currentUser = _currentUser;
    setCurrentUser = _setCurrentUser;
  }

  var _useState2 = React.useState(_loginModalOpen),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  if (_setLoginModalOpen) {
    loginModalOpen = _loginModalOpen;
    setLoginModalOpen = _setLoginModalOpen;
  }

  var _useState3 = React.useState(_registerModalOpen),
      registerModalOpen = _useState3[0],
      setRegisterModalOpen = _useState3[1];

  if (_setRegisterModalOpen) {
    registerModalOpen = _registerModalOpen;
    setRegisterModalOpen = _setRegisterModalOpen;
  }

  var moreProps = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    loginModalOpen: loginModalOpen,
    setLoginModalOpen: setLoginModalOpen,
    registerModalOpen: registerModalOpen,
    setRegisterModalOpen: setRegisterModalOpen
  };
  return /*#__PURE__*/React__default.createElement(AuthContext.Provider, {
    value: _extends({}, props, moreProps)
  }, children);
};

AuthContextProvider.propTypes = {
  useApi: PropTypes.func.isRequired
};

const config = {
  apiOrigin: 'http://localhost:3001'
};
const W0 = styled.div`
  width: 680px;
  border: 1px solid black;
  border-radius: 10px;

  // box-shadow: -12px 12px 2px 1px rgba(0, 0, 255, .2);

  --ish-shadow-size: 3px;
  --ish-card-bg: white;

  box-shadow: var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #b2b8c9, var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #f0f8ff;
  background: var(--ish-card-bg);
  min-height: 50vh;
  margin: 30px auto 130px auto ;
  padding: .5em;
`;

const Card$1 = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default.createElement(W0, null, children);
};

const TestApp = () => {
  const useApi = () => ({
    doRegister: _ref2 => {
      let {
        email,
        password
      } = _ref2;
      return request.post(`${config.apiOrigin}/api/users`, {
        email,
        password
      }).then(r => r.data).then(r => {
        logg(r, 'done registered');
        return r;
      });
    }
  });

  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [registerModalOpen, setRegisterModalOpen] = React.useState(true);
  return /*#__PURE__*/React__default.createElement(AuthContextProvider, {
    loginModalOpen,
    setLoginModalOpen,
    registerModalOpen,
    setRegisterModalOpen,
    useApi
  }, /*#__PURE__*/React__default.createElement(Card$1, null, /*#__PURE__*/React__default.createElement("form", null, /*#__PURE__*/React__default.createElement("label", null, "hello?"), /*#__PURE__*/React__default.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React__default.createElement("button", null, "World")), /*#__PURE__*/React__default.createElement("h1", null, "Hello, world!")), /*#__PURE__*/React__default.createElement(reactToastify.ToastContainer, {
    position: "bottom-left"
  }));
};

const JwtContext = React__default.createContext({});

const LoginWithPassword = () => {};

const JwtContextProvider = _ref => {
  let {
    children,
    ...props
  } = _ref;
  logg(props, 'JwtContextProvider 222');
  const {
    api
  } = props;
  const [currentUser, setCurrentUser] = React.useState({});
  const [loginModalOpen, setLoginModalOpen] = React.useState({});
  React.useEffect(() => {
    logg('setting currentUser...');
    api.getMyAccount().then(resp => {
      logg(resp, 'got this resp');
      setCurrentUser(resp);
    }).catch(e => {
      logg(e, 'e322');
      reactToastify.toast(`Login failed: ${e}`);
      setCurrentUser({});
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(JwtContext.Provider, {
    value: {
      api,
      currentUser,
      setCurrentUser,
      loginModalOpen,
      setLoginModalOpen
    }
  }, children);
};

JwtContextProvider.props = {
  api: PropTypes.object
};
const FlexRow$1 = styled.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`;
const W1 = styled.div`
  border: 1px solid red;
`;
const W2 = styled.div`
  display: flex;
`;
const SimpleJwtRow = () => {
  const {
    api,
    currentUser,
    setCurrentUser,
    loginModalOpen,
    setLoginModalOpen
  } = React.useContext(JwtContext);
  return /*#__PURE__*/React__default.createElement(W1, null, /*#__PURE__*/React__default.createElement(FlexRow$1, null, currentUser.email && /*#__PURE__*/React__default.createElement(W2, null, /*#__PURE__*/React__default.createElement("i", null, currentUser.email), /*#__PURE__*/React__default.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React__default.createElement(LoginWithPassword, null)));
};

const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

const Logout = () => {
  const {
    currentUser,
    setCurrentUser
  } = React.useContext(JwtContext);

  const doLogout = () => {
    localStorage.removeItem('jwt_token');
    setCurrentUser({});
  };

  return /*#__PURE__*/React__default.createElement(Btn, {
    onClick: doLogout
  }, "Logout");
};

var JwtContext$1 = {
  __proto__: null,
  JwtContext: JwtContext,
  JwtContextProvider: JwtContextProvider,
  SimpleJwtRow: SimpleJwtRow,
  Logout: Logout
};

var _templateObject$1;
var W0$1 = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n"])));

var Scratchpad = function Scratchpad(props) {
  var _useContext = React.useContext(AuthContext),
      useApi = _useContext.useApi;

  var api = useApi();

  var _useState = React.useState(localStorage.getItem(C.names.scratchpad) || ''),
      txt = _useState[0],
      setTxt = _useState[1];

  var doSave = function doSave() {
    localStorage.setItem(C.names.scratchpad, txt);
    api.postProfile({
      scratchpad: txt
    }).then(function (data) {}).catch(function (err) {
      logg('Cannot update profile:', err);
    });
  };

  return /*#__PURE__*/React__default.createElement(W0$1, null, /*#__PURE__*/React__default.createElement("textarea", {
    name: "scratchpad",
    rows: "20",
    cols: "40",
    onChange: function onChange(e) {
      return setTxt(e.target.value);
    },
    value: txt
  }), /*#__PURE__*/React__default.createElement(Actions, null, /*#__PURE__*/React__default.createElement(Btn, {
    onClick: doSave
  }, "Save")));
};

Scratchpad.propTypes = {};

var _excluded$2 = ["children"];

var _templateObject$2;
var W0$2 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: space-between;\n"])));

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var listItems = props.listItems;

  var _React$useState = React__default.useState(false),
      drawerOpen = _React$useState[0],
      setDrawerOpen = _React$useState[1];

  var _useState = React.useState(false);

  var history = reactRouterDom.useHistory();
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, props.variant === C.variants.floating ? /*#__PURE__*/React__default.createElement(Fab, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: '.5em',
      zIndex: 1
    },
    "aria-label": "main menu"
  }, /*#__PURE__*/React__default.createElement(MenuIcon, null)) : /*#__PURE__*/React__default.createElement(MenuIcon, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    }
  }), /*#__PURE__*/React__default.createElement(Drawer, {
    anchor: "left",
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    }
  }, /*#__PURE__*/React__default.createElement(W0$2, null, /*#__PURE__*/React__default.createElement(List, null, listItems.map(function (_ref2) {
    var label = _ref2.label,
        key = _ref2.key,
        path = _ref2.path;
    return /*#__PURE__*/React__default.createElement(ListItem, {
      button: true,
      key: key,
      onClick: function onClick() {
        setDrawerOpen(false);
        history.push(path());
      }
    }, label);
  })), children)));
};

SideMenu.propTypes = {
  listItems: PropTypes.array.isRequired,
  variant: PropTypes.string
};

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render( /*#__PURE__*/React__default.createElement(TestApp, null), document.getElementById('root'));
}

__webpack_unused_export__ = Actions;
exports.Vo = AuthContext;
exports.HD = AuthContextProvider;
__webpack_unused_export__ = CloseBtn;
exports.Ht = FlexCol;
exports.gq = FlexRow;
exports._A = LoginModal;
exports.xB = ModalHeader;
exports.Kt = RegisterModal;
__webpack_unused_export__ = Scratchpad;
__webpack_unused_export__ = SideMenu;
__webpack_unused_export__ = JwtContext$1;
exports.IJ = logg;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 593141:
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 593141;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 401711:
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 401711;
module.exports = webpackEmptyAsyncContext;

/***/ })

};
;