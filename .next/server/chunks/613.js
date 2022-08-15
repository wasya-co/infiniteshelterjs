"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 40877:
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;

function initHeadManager() {
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var tags = {};
      head.forEach(function (h) {
        if ( // If the font tag is loaded only on client navigation
        // it won't be inlined. In this case revert to the original behavior
        h.type === 'link' && h.props['data-optimized-fonts']) {
          if (document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            return;
          } else {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }
        }

        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    }
  };
}

var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    var nonce = newTag.getAttribute('nonce'); // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
    // be stripped if there is no content security policy response header that includes a nonce.

    if (nonce && !oldTag.getAttribute('nonce')) {
      var cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute('nonce', '');
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }

  return oldTag.isEqualNode(newTag);
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
    var ref;

    if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (isEqualNode(oldTag, newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    var ref;
    return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 472189:
/***/ ((module, exports, __webpack_require__) => {



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

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;

var _extends = (__webpack_require__(406495)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(291598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(417273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(616689));

var _headManagerContext = __webpack_require__(492796);

var _headManager = __webpack_require__(40877);

var _requestIdleCallback = __webpack_require__(526286);

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'onReady', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      _props$onReady = props.onReady,
      onReady = _props$onReady === void 0 ? null : _props$onReady,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy,
      onError = props.onError;
  var cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      } // Run onReady for the first time after load event


      if (onReady) {
        onReady();
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  })["catch"](function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (var _i2 = 0, _Object$entries = Object.entries(props); _i2 < _Object$entries.length; _i2++) {
    var _ref3 = _Object$entries[_i2];

    var _ref2 = _slicedToArray(_ref3, 2);

    var k = _ref2[0];
    var value = _ref2[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  if (strategy === 'worker') {
    el.setAttribute('type', 'text/partytown');
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2;

  if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  } else {
    loadScript(props);
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback).requestIdleCallback(function () {
        return loadScript(props);
      });
    });
  }
}

function addBeforeInteractiveToCache() {
  var scripts = [].concat(_toConsumableArray(document.querySelectorAll('[data-nscript="beforeInteractive"]')), _toConsumableArray(document.querySelectorAll('[data-nscript="beforePageRender"]')));
  scripts.forEach(function (script) {
    var cacheKey = script.id || script.getAttribute('src');
    LoadCache.add(cacheKey);
  });
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
  addBeforeInteractiveToCache();
}

function Script(props) {
  var id = props.id,
      _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      _props$onReady2 = props.onReady,
      onReady = _props$onReady2 === void 0 ? null : _props$onReady2,
      _props$strategy3 = props.strategy,
      strategy = _props$strategy3 === void 0 ? 'afterInteractive' : _props$strategy3,
      onError = props.onError,
      restProps = _object_without_properties_loose(props, ["id", "src", "onLoad", "onReady", "strategy", "onError"]); // Context is available only during SSR


  var _useContext = (0, _react).useContext(_headManagerContext.HeadManagerContext),
      updateScripts = _useContext.updateScripts,
      scripts = _useContext.scripts,
      getIsSsr = _useContext.getIsSsr;

  (0, _react).useEffect(function () {
    var cacheKey = id || src; // Run onReady if script has loaded before but component is re-mounted

    if (onReady && cacheKey && LoadCache.has(cacheKey)) {
      onReady();
    }
  }, [onReady, id, src]);
  (0, _react).useEffect(function () {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive' || strategy === 'worker') {
    if (updateScripts) {
      scripts[strategy] = (scripts[strategy] || []).concat([_extends({
        id: id,
        src: src,
        onLoad: onLoad,
        onReady: onReady,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports["default"] = _default;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 318613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _excluded = ["strategy", "children", "dangerouslySetInnerHTML", "src"],
    _excluded2 = ["strategy", "src", "children", "dangerouslySetInnerHTML"],
    _excluded3 = ["strategy"],
    _excluded4 = ["crossOrigin", "nonce"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Html = Html;
exports.Main = Main;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(616689));

var _constants = __webpack_require__(956724);

var _getPageFiles = __webpack_require__(394140);

var _utils = __webpack_require__(776368);

var _htmlescape = __webpack_require__(189716);

var _script = _interopRequireDefault(__webpack_require__(472189));

var _isError = _interopRequireDefault(__webpack_require__(680676));

var _htmlContext = __webpack_require__(318743);

var Document = /*#__PURE__*/function (_react$Component) {
  _inherits(Document, _react$Component);

  var _super = _createSuper(Document);

  function Document() {
    _classCallCheck(this, Document);

    return _super.apply(this, arguments);
  }

  _createClass(Document, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value:
    /**
    * `getInitialProps` hook returns the context object with the addition of `renderPage`.
    * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
    */
    function getInitialProps(ctx) {
      return ctx.defaultGetInitialProps(ctx);
    }
  }]);

  return Document;
}(_react.Component);

exports["default"] = Document;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  var sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, "/_app");
  var pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles: sharedFiles,
    pageFiles: pageFiles,
    allFiles: _toConsumableArray(new Set([].concat(_toConsumableArray(sharedFiles), _toConsumableArray(pageFiles))))
  };
}

function _getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  return buildManifest.polyfillFiles.filter(function (polyfill) {
    return polyfill.endsWith(".js") && !polyfill.endsWith(".module.js");
  }).map(function (polyfill) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: polyfill,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin,
      noModule: true,
      src: "".concat(assetPrefix, "/_next/").concat(polyfill).concat(devOnlyCacheBusterQueryString)
    });
  });
}

function hasComponentProps(child) {
  return !!child && !!child.props;
}

function AmpStyles(_ref) {
  var styles = _ref.styles;
  if (!styles) return null; // try to parse styles from fragment for backwards compat

  var curStyles = Array.isArray(styles) ? styles : [];

  if ( // @ts-ignore Property 'props' does not exist on type ReactElement
  styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
  Array.isArray(styles.props.children)) {
    var hasStyles = function hasStyles(el) {
      var ref, ref1;
      return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;
    }; // @ts-ignore Property 'props' does not exist on type ReactElement


    styles.props.children.forEach(function (child) {
      if (Array.isArray(child)) {
        child.forEach(function (el) {
          return hasStyles(el) && curStyles.push(el);
        });
      } else if (hasStyles(child)) {
        curStyles.push(child);
      }
    });
  }
  /* Add custom styles before AMP styles to prevent accidental overrides */


  return /*#__PURE__*/_react["default"].createElement("style", {
    "amp-custom": "",
    dangerouslySetInnerHTML: {
      __html: curStyles.map(function (style) {
        return style.props.dangerouslySetInnerHTML.__html;
      }).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
    }
  });
}

var Head = /*#__PURE__*/function (_react$Component2) {
  _inherits(Head, _react$Component2);

  var _super2 = _createSuper(Head);

  function Head() {
    _classCallCheck(this, Head);

    return _super2.apply(this, arguments);
  }

  _createClass(Head, [{
    key: "getCssLinks",
    value: function getCssLinks(files) {
      var _this = this;

      var _this$context = this.context,
          assetPrefix = _this$context.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context.devOnlyCacheBusterQueryString,
          dynamicImports = _this$context.dynamicImports,
          crossOrigin = _this$context.crossOrigin,
          optimizeCss = _this$context.optimizeCss,
          optimizeFonts = _this$context.optimizeFonts;
      var cssFiles = files.allFiles.filter(function (f) {
        return f.endsWith(".css");
      });
      var sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
      // webpack runtime (`mini-css-extract-plugin`).

      var unmangedFiles = new Set([]);
      var dynamicCssFiles = Array.from(new Set(dynamicImports.filter(function (file) {
        return file.endsWith(".css");
      })));

      if (dynamicCssFiles.length) {
        var existing = new Set(cssFiles);
        dynamicCssFiles = dynamicCssFiles.filter(function (f) {
          return !(existing.has(f) || sharedFiles.has(f));
        });
        unmangedFiles = new Set(dynamicCssFiles);
        cssFiles.push.apply(cssFiles, _toConsumableArray(dynamicCssFiles));
      }

      var cssLinkElements = [];
      cssFiles.forEach(function (file) {
        var isSharedFile = sharedFiles.has(file);

        if (!optimizeCss) {
          cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
            key: "".concat(file, "-preload"),
            nonce: _this.props.nonce,
            rel: "preload",
            href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
            as: "style",
            crossOrigin: _this.props.crossOrigin || crossOrigin
          }));
        }

        var isUnmanagedFile = unmangedFiles.has(file);
        cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          crossOrigin: _this.props.crossOrigin || crossOrigin,
          "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
          "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
        }));
      });

      if ( true && optimizeFonts) {
        cssLinkElements = this.makeStylesheetInert(cssLinkElements);
      }

      return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this2 = this;

      var _this$context2 = this.context,
          dynamicImports = _this$context2.dynamicImports,
          assetPrefix = _this$context2.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context2.devOnlyCacheBusterQueryString,
          crossOrigin = _this$context2.crossOrigin;
      return dynamicImports.map(function (file) {
        if (!file.endsWith(".js")) {
          return null;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          key: file,
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          nonce: _this2.props.nonce,
          crossOrigin: _this2.props.crossOrigin || crossOrigin
        });
      }) // Filter out nulled scripts
      .filter(Boolean);
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks(files) {
      var _this3 = this;

      var _this$context3 = this.context,
          assetPrefix = _this$context3.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context3.devOnlyCacheBusterQueryString,
          scriptLoader = _this$context3.scriptLoader,
          crossOrigin = _this$context3.crossOrigin;
      var preloadFiles = files.allFiles.filter(function (file) {
        return file.endsWith(".js");
      });
      return [].concat(_toConsumableArray((scriptLoader.beforeInteractive || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file.src,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: file.src,
          as: "script",
          crossOrigin: _this3.props.crossOrigin || crossOrigin
        });
      })), _toConsumableArray(preloadFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          crossOrigin: _this3.props.crossOrigin || crossOrigin
        });
      })));
    }
  }, {
    key: "getBeforeInteractiveInlineScripts",
    value: function getBeforeInteractiveInlineScripts() {
      var scriptLoader = this.context.scriptLoader;
      var _this$props = this.props,
          nonce = _this$props.nonce,
          crossOrigin = _this$props.crossOrigin;
      return (scriptLoader.beforeInteractive || []).filter(function (script) {
        return !script.src && (script.dangerouslySetInnerHTML || script.children);
      }).map(function (file, index) {
        var strategy = file.strategy,
            children = file.children,
            dangerouslySetInnerHTML = file.dangerouslySetInnerHTML,
            src = file.src,
            scriptProps = _objectWithoutProperties(file, _excluded);

        var html = "";

        if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
          html = dangerouslySetInnerHTML.__html;
        } else if (children) {
          html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        }

        return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, scriptProps, {
          dangerouslySetInnerHTML: {
            __html: html
          },
          key: scriptProps.id || index,
          nonce: nonce,
          "data-nscript": "beforeInteractive",
          crossOrigin: crossOrigin || undefined
        }));
      });
    }
  }, {
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "makeStylesheetInert",
    value: function makeStylesheetInert(node) {
      var _this4 = this;

      return _react["default"].Children.map(node, function (c) {
        var ref4, ref2;

        if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (ref4 = c.props) == null ? void 0 : ref4.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(function (_ref2) {
          var url = _ref2.url;
          var ref, ref3;
          return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref3 = ref.href) == null ? void 0 : ref3.startsWith(url);
        })) {
          var newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
            "data-href": c.props.href,
            href: undefined
          });

          return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
        } else if (c == null ? void 0 : (ref2 = c.props) == null ? void 0 : ref2.children) {
          var _newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
            children: _this4.makeStylesheetInert(c.props.children)
          });

          return /*#__PURE__*/_react["default"].cloneElement(c, _newProps);
        }

        return c;
      }).filter(Boolean);
    }
  }, {
    key: "render",
    value: function render() {
      var _react$default;

      var _this$context4 = this.context,
          styles = _this$context4.styles,
          ampPath = _this$context4.ampPath,
          inAmpMode = _this$context4.inAmpMode,
          hybridAmp = _this$context4.hybridAmp,
          canonicalBase = _this$context4.canonicalBase,
          __NEXT_DATA__ = _this$context4.__NEXT_DATA__,
          dangerousAsPath = _this$context4.dangerousAsPath,
          headTags = _this$context4.headTags,
          unstable_runtimeJS = _this$context4.unstable_runtimeJS,
          unstable_JsPreload = _this$context4.unstable_JsPreload,
          disableOptimizedLoading = _this$context4.disableOptimizedLoading,
          optimizeCss = _this$context4.optimizeCss,
          optimizeFonts = _this$context4.optimizeFonts;
      var disableRuntimeJS = unstable_runtimeJS === false;
      var disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
      this.context.docComponentsRendered.Head = true;
      var head = this.context.head;
      var cssPreloads = [];
      var otherHeadElements = [];

      if (head) {
        head.forEach(function (c) {
          if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
            cssPreloads.push(c);
          } else {
            c && otherHeadElements.push(c);
          }
        });
        head = cssPreloads.concat(otherHeadElements);
      }

      var children = _react["default"].Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


      if (false) {}

      if ( true && optimizeFonts && !inAmpMode) {
        children = this.makeStylesheetInert(children);
      }

      var hasAmphtmlRel = false;
      var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

      head = _react["default"].Children.map(head || [], function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;

        if (inAmpMode) {
          var badProp = "";

          if (type === "meta" && props.name === "viewport") {
            badProp = 'name="viewport"';
          } else if (type === "link" && props.rel === "canonical") {
            hasCanonicalRel = true;
          } else if (type === "script") {
            // only block if
            // 1. it has a src and isn't pointing to ampproject's CDN
            // 2. it is using dangerouslySetInnerHTML without a type or
            // a type of text/javascript
            if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
              badProp = "<script";
              Object.keys(props).forEach(function (prop) {
                badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
              });
              badProp += "/>";
            }
          }

          if (badProp) {
            console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, " in ").concat(__NEXT_DATA__.page, ". https://nextjs.org/docs/messages/conflicting-amp-tag"));
            return null;
          }
        } else {
          // non-amp mode
          if (type === "link" && props.rel === "amphtml") {
            hasAmphtmlRel = true;
          }
        }

        return child;
      });
      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

      var _nonce, _nonce1;

      return /*#__PURE__*/_react["default"].createElement("head", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? "true" : undefined,
        dangerouslySetInnerHTML: {
          __html: "body{display:none}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? "true" : undefined
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "body{display:block}"
        }
      }))), head, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "next-head-count",
        content: _react["default"].Children.count(head || []).toString()
      }), children, optimizeFonts && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "next-font-preconnect"
      }), inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), !hasCanonicalRel && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "canonical",
        href: canonicalBase + (0, _utils).cleanAmpPath(dangerousAsPath)
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), /*#__PURE__*/_react["default"].createElement(AmpStyles, {
        styles: styles
      }), /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), /*#__PURE__*/_react["default"].createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "amphtml",
        href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
      }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-n-css": (_nonce = this.props.nonce) != null ? _nonce : ""
      }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-n-css": (_nonce1 = this.props.nonce) != null ? _nonce1 : ""
      }), this.context.isDevelopment && // this element is used to mount development styles so the
      // ordering matches production
      // (by default, style-loader injects at the bottom of <head />)

      /*#__PURE__*/
      _react["default"].createElement("noscript", {
        id: "__next_css__DO_NOT_USE__"
      }), styles || null), /*#__PURE__*/(_react$default = _react["default"]).createElement.apply(_react$default, [_react["default"].Fragment, {}].concat(_toConsumableArray(headTags || []))));
    }
  }]);

  return Head;
}(_react.Component);

Head.contextType = _htmlContext.HtmlContext;
exports.Head = Head;

function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
  var ref, ref6, ref7, ref8;
  if (!props.children) return;
  var scriptLoaderItems = [];
  var children = Array.isArray(props.children) ? props.children : [props.children];
  var headChildren = (ref = children.find(function (child) {
    return child.type === Head;
  })) == null ? void 0 : (ref6 = ref.props) == null ? void 0 : ref6.children;
  var bodyChildren = (ref7 = children.find(function (child) {
    return child.type === "body";
  })) == null ? void 0 : (ref8 = ref7.props) == null ? void 0 : ref8.children; // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed

  var combinedChildren = [].concat(_toConsumableArray(Array.isArray(headChildren) ? headChildren : [headChildren]), _toConsumableArray(Array.isArray(bodyChildren) ? bodyChildren : [bodyChildren]));

  _react["default"].Children.forEach(combinedChildren, function (child) {
    if (!child) return;

    if (child.type === _script["default"]) {
      if (child.props.strategy === "beforeInteractive") {
        scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
        return;
      } else if (["lazyOnload", "afterInteractive", "worker"].includes(child.props.strategy)) {
        scriptLoaderItems.push(child.props);
        return;
      }
    }
  });

  __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}

function getPreNextWorkerScripts(context, props) {
  var assetPrefix = context.assetPrefix,
      scriptLoader = context.scriptLoader,
      crossOrigin = context.crossOrigin,
      nextScriptWorkers = context.nextScriptWorkers; // disable `nextScriptWorkers` in edge runtime

  if (!nextScriptWorkers || "nodejs" === "edge") return null;

  try {
    var _non_webpack_require = require("@builder.io/partytown/integration"),
        partytownSnippet = _non_webpack_require.partytownSnippet;

    var children = Array.isArray(props.children) ? props.children : [props.children]; // Check to see if the user has defined their own Partytown configuration

    var userDefinedConfig = children.find(function (child) {
      var ref, ref9;
      return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref9 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref9.__html.length) && "data-partytown-config" in child.props;
    });
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !userDefinedConfig && /*#__PURE__*/_react["default"].createElement("script", {
      "data-partytown-config": "",
      dangerouslySetInnerHTML: {
        __html: "\n            partytown = {\n              lib: \"".concat(assetPrefix, "/_next/static/~partytown/\"\n            };\n          ")
      }
    }), /*#__PURE__*/_react["default"].createElement("script", {
      "data-partytown": "",
      dangerouslySetInnerHTML: {
        __html: partytownSnippet()
      }
    }), (scriptLoader.worker || []).map(function (file, index) {
      var strategy = file.strategy,
          src = file.src,
          scriptChildren = file.children,
          dangerouslySetInnerHTML = file.dangerouslySetInnerHTML,
          scriptProps = _objectWithoutProperties(file, _excluded2);

      var srcProps = {};

      if (src) {
        // Use external src if provided
        srcProps.src = src;
      } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
        // Embed inline script if provided with dangerouslySetInnerHTML
        srcProps.dangerouslySetInnerHTML = {
          __html: dangerouslySetInnerHTML.__html
        };
      } else if (scriptChildren) {
        // Embed inline script if provided with children
        srcProps.dangerouslySetInnerHTML = {
          __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
        };
      } else {
        throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
      }

      return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, srcProps, scriptProps, {
        type: "text/partytown",
        key: src || index,
        nonce: props.nonce,
        "data-nscript": "worker",
        crossOrigin: props.crossOrigin || crossOrigin
      }));
    }));
  } catch (err) {
    if ((0, _isError)["default"](err) && err.code !== "MODULE_NOT_FOUND") {
      console.warn("Warning: ".concat(err.message));
    }

    return null;
  }
}

function _getPreNextScripts(context, props) {
  var scriptLoader = context.scriptLoader,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  var webWorkerScripts = getPreNextWorkerScripts(context, props);
  var beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter(function (script) {
    return script.src;
  }).map(function (file, index) {
    var strategy = file.strategy,
        scriptProps = _objectWithoutProperties(file, _excluded3);

    var _defer;

    return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: (_defer = scriptProps.defer) != null ? _defer : !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || crossOrigin
    }));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}

function _getDynamicChunks(context, props, files) {
  var dynamicImports = context.dynamicImports,
      assetPrefix = context.assetPrefix,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  return dynamicImports.map(function (file) {
    if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react["default"].createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function _getScripts(context, props, files) {
  var ref;
  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading,
      crossOrigin = context.crossOrigin;
  var normalScripts = files.allFiles.filter(function (file) {
    return file.endsWith(".js");
  });
  var lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter(function (file) {
    return file.endsWith(".js");
  });
  return [].concat(_toConsumableArray(normalScripts), _toConsumableArray(lowPriorityScripts)).map(function (file) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

var NextScript = /*#__PURE__*/function (_react$Component3) {
  _inherits(NextScript, _react$Component3);

  var _super3 = _createSuper(NextScript);

  function NextScript() {
    _classCallCheck(this, NextScript);

    return _super3.apply(this, arguments);
  }

  _createClass(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$context5 = this.context,
          assetPrefix = _this$context5.assetPrefix,
          inAmpMode = _this$context5.inAmpMode,
          buildManifest = _this$context5.buildManifest,
          unstable_runtimeJS = _this$context5.unstable_runtimeJS,
          docComponentsRendered = _this$context5.docComponentsRendered,
          devOnlyCacheBusterQueryString = _this$context5.devOnlyCacheBusterQueryString,
          disableOptimizedLoading = _this$context5.disableOptimizedLoading,
          crossOrigin = _this$context5.crossOrigin;
      var disableRuntimeJS = unstable_runtimeJS === false;
      docComponentsRendered.NextScript = true;

      if (inAmpMode) {
        if (true) {
          return null;
        }

        var ampDevFiles = [].concat(_toConsumableArray(buildManifest.devFiles), _toConsumableArray(buildManifest.polyfillFiles), _toConsumableArray(buildManifest.ampDevFiles));
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || crossOrigin,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context)
          },
          "data-ampdevmode": true
        }), ampDevFiles.map(function (file) {
          return /*#__PURE__*/_react["default"].createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(devOnlyCacheBusterQueryString),
            nonce: _this5.props.nonce,
            crossOrigin: _this5.props.crossOrigin || crossOrigin,
            "data-ampdevmode": true
          });
        }));
      }

      if (false) {}

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this5.props.nonce,
          crossOrigin: _this5.props.crossOrigin || crossOrigin
        });
      }) : null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        }
      }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(context) {
      var __NEXT_DATA__ = context.__NEXT_DATA__,
          largePageDataBytes = context.largePageDataBytes;

      try {
        var data = JSON.stringify(__NEXT_DATA__);
        var bytes =  false ? 0 : Buffer.from(data).byteLength;

        var prettyBytes = (__webpack_require__(495955)/* ["default"] */ .Z);

        if (largePageDataBytes && bytes > largePageDataBytes) {
          console.warn("Warning: data for page \"".concat(__NEXT_DATA__.page, "\"").concat(__NEXT_DATA__.page === context.dangerousAsPath ? "" : " (path \"".concat(context.dangerousAsPath, "\")"), " is ").concat(prettyBytes(bytes), " which exceeds the threshold of ").concat(prettyBytes(largePageDataBytes), ", this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data"));
        }

        return (0, _htmlescape).htmlEscapeJsonString(data);
      } catch (err) {
        if ((0, _isError)["default"](err) && err.message.indexOf("circular structure") !== -1) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://nextjs.org/docs/messages/circular-structure"));
        }

        throw err;
      }
    }
  }]);

  return NextScript;
}(_react.Component);

NextScript.contextType = _htmlContext.HtmlContext;
exports.NextScript = NextScript; // Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.

var InternalFunctionDocument = function InternalFunctionDocument() {
  return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
};

Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument;

function Html(props) {
  var _useContext = (0, _react).useContext(_htmlContext.HtmlContext),
      inAmpMode = _useContext.inAmpMode,
      docComponentsRendered = _useContext.docComponentsRendered,
      locale = _useContext.locale,
      scriptLoader = _useContext.scriptLoader,
      __NEXT_DATA__ = _useContext.__NEXT_DATA__;

  docComponentsRendered.Html = true;
  handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
  return /*#__PURE__*/_react["default"].createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? "" : undefined,
    "data-ampdevmode": inAmpMode && false ? 0 : undefined
  }));
}

function Main() {
  var _useContext2 = (0, _react).useContext(_htmlContext.HtmlContext),
      docComponentsRendered = _useContext2.docComponentsRendered;

  docComponentsRendered.Main = true; // @ts-ignore

  return /*#__PURE__*/_react["default"].createElement("next-js-internal-body-render-target", null);
}

function getAmpPath(ampPath, asPath) {
  return ampPath || "".concat(asPath).concat(asPath.includes("?") ? "&" : "?", "amp=1");
}

function getHeadHTMLProps(props) {
  var crossOrigin = props.crossOrigin,
      nonce = props.nonce,
      restProps = _objectWithoutProperties(props, _excluded4); // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>


  var headProps = restProps;
  return headProps;
}

/***/ }),

/***/ 680676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(278524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 495955:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = prettyBytes;
function prettyBytes(number, options) {
    if (!Number.isFinite(number)) {
        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = Object.assign({}, options);
    if (options.signed && number === 0) {
        return " 0 B";
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
        number = -number;
    }
    if (number < 1) {
        const numberString = toLocaleString(number, options.locale);
        return prefix + numberString + " B";
    }
    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);
    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));
    const numberString = toLocaleString(number, options.locale);
    const unit = UNITS[exponent];
    return prefix + numberString + " " + unit;
}
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ const UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
];
/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/ const toLocaleString = (number, locale)=>{
    let result = number;
    if (typeof locale === "string") {
        result = number.toLocaleString(locale);
    } else if (locale === true) {
        result = number.toLocaleString();
    }
    return result;
};

//# sourceMappingURL=pretty-bytes.js.map

/***/ })

};
;