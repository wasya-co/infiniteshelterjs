exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 592648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 578566:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Image;

var _extends = (__webpack_require__(406495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(592648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(291598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(417273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(616689));

var _head = _interop_require_default(__webpack_require__(294957));

var _imageConfig = __webpack_require__(435843);

var _useIntersection = __webpack_require__(190639);

var _imageConfigContext = __webpack_require__(450744);

var _utils = __webpack_require__(359232);

var _normalizeTrailingSlash = __webpack_require__(224969);

function Image(_param) {
  var _linkProps;

  var src = _param.src,
      sizes = _param.sizes,
      _param$unoptimized = _param.unoptimized,
      unoptimized = _param$unoptimized === void 0 ? false : _param$unoptimized,
      _param$priority = _param.priority,
      priority = _param$priority === void 0 ? false : _param$priority,
      loading = _param.loading,
      _param$lazyRoot = _param.lazyRoot,
      lazyRoot = _param$lazyRoot === void 0 ? null : _param$lazyRoot,
      lazyBoundary = _param.lazyBoundary,
      className = _param.className,
      quality = _param.quality,
      width = _param.width,
      height = _param.height,
      style = _param.style,
      objectFit = _param.objectFit,
      objectPosition = _param.objectPosition,
      onLoadingComplete = _param.onLoadingComplete,
      _param$placeholder = _param.placeholder,
      placeholder = _param$placeholder === void 0 ? 'empty' : _param$placeholder,
      blurDataURL = _param.blurDataURL,
      all = _object_without_properties_loose(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]);

  var configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
  var config = (0, _react).useMemo(function () {
    var c = configEnv || configContext || _imageConfig.imageConfigDefault;
    var allSizes = [].concat(_toConsumableArray(c.deviceSizes), _toConsumableArray(c.imageSizes)).sort(function (a, b) {
      return a - b;
    });
    var deviceSizes = c.deviceSizes.sort(function (a, b) {
      return a - b;
    });
    return _extends({}, c, {
      allSizes: allSizes,
      deviceSizes: deviceSizes
    });
  }, [configContext]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread on <img>:

    delete rest.layout;
  }

  var loader = defaultImageLoader;

  if ('loader' in rest) {
    if (rest.loader) {
      var customImageLoader = rest.loader;

      var _tmp;

      _tmp = function _tmp(obj) {
        var _ = obj.config,
            opts = _object_without_properties_loose(obj, ["config"]); // The config object is internal only so we must
        // not pass it to the user-defined loader()


        return customImageLoader(opts);
      }, loader = _tmp, _tmp;
    } // Remove property so it's not spread on <img>


    delete rest.loader;
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (experimentalUnoptimized) {
    unoptimized = true;
  }

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      blurComplete = _useState2[0],
      setBlurComplete = _useState2[1];

  var _useIntersection2 = (0, _useIntersection).useIntersection({
    rootRef: lazyRoot,
    rootMargin: lazyBoundary || '200px',
    disabled: !isLazy
  }),
      _useIntersection3 = _slicedToArray(_useIntersection2, 3),
      setIntersection = _useIntersection3[0],
      isIntersected = _useIntersection3[1],
      resetIntersected = _useIntersection3[2];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle = {
    boxSizing: 'border-box',
    display: 'block',
    overflow: 'hidden',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: 0,
    margin: 0,
    padding: 0
  };
  var sizerStyle = {
    boxSizing: 'border-box',
    display: 'block',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: 0,
    margin: 0,
    padding: 0
  };
  var hasSizer = false;
  var sizerSvgUrl;
  var layoutStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  };
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);

  if (false) { var overwrittenStyles, url, urlStr, VALID_BLUR_EXT; }

  var imgStyle = Object.assign({}, style, layoutStyle);
  var blurStyle = placeholder === 'blur' && !blurComplete ? {
    backgroundSize: objectFit || 'cover',
    backgroundPosition: objectPosition || '0% 0%',
    filter: 'blur(20px)',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle.display = 'block';
    wrapperStyle.position = 'absolute';
    wrapperStyle.top = 0;
    wrapperStyle.left = 0;
    wrapperStyle.bottom = 0;
    wrapperStyle.right = 0;
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle.display = 'block';
      wrapperStyle.position = 'relative';
      hasSizer = true;
      sizerStyle.paddingTop = paddingTop;
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle.display = 'inline-block';
      wrapperStyle.position = 'relative';
      wrapperStyle.maxWidth = '100%';
      hasSizer = true;
      sizerStyle.maxWidth = '100%';
      sizerSvgUrl = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(widthInt, "%27%20height=%27").concat(heightInt, "%27/%3e");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle.display = 'inline-block';
      wrapperStyle.position = 'relative';
      wrapperStyle.width = widthInt;
      wrapperStyle.height = heightInt;
    }
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  var imgAttributes = {
    src: emptyDataURL,
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      config: config,
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  var srcString = src;

  if (false) { var fullUrl; }

  var imageSrcSetPropName = 'imagesrcset';
  var imageSizesPropName = 'imagesizes';

  if (false) {}

  var linkProps = (_linkProps = {}, _defineProperty(_linkProps, imageSrcSetPropName, imgAttributes.srcSet), _defineProperty(_linkProps, imageSizesPropName, imgAttributes.sizes), _linkProps);
  var useLayoutEffect =  true ? _react["default"].useEffect : 0;
  var onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
  var previousImageSrc = (0, _react).useRef(src);
  (0, _react).useEffect(function () {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);
  useLayoutEffect(function () {
    if (previousImageSrc.current !== src) {
      resetIntersected();
      previousImageSrc.current = src;
    }
  }, [resetIntersected, src]);

  var imgElementArgs = _extends({
    isLazy: isLazy,
    imgAttributes: imgAttributes,
    heightInt: heightInt,
    widthInt: widthInt,
    qualityInt: qualityInt,
    layout: layout,
    className: className,
    imgStyle: imgStyle,
    blurStyle: blurStyle,
    loading: loading,
    config: config,
    unoptimized: unoptimized,
    placeholder: placeholder,
    loader: loader,
    srcString: srcString,
    onLoadingCompleteRef: onLoadingCompleteRef,
    setBlurComplete: setBlurComplete,
    setIntersection: setIntersection,
    isVisible: isVisible,
    noscriptSizes: sizes
  }, rest);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    style: wrapperStyle
  }, hasSizer ? /*#__PURE__*/_react["default"].createElement("span", {
    style: sizerStyle
  }, sizerSvgUrl ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      display: 'block',
      maxWidth: '100%',
      width: 'initial',
      height: 'initial',
      background: 'none',
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: sizerSvgUrl
  }) : null) : null, /*#__PURE__*/_react["default"].createElement(ImageElement, Object.assign({}, imgElementArgs))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", Object.assign({
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src
  }, linkProps))) : null);
}

var _ref = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false} || {},
    _ref$experimentalRemo = _ref.experimentalRemotePatterns,
    experimentalRemotePatterns = _ref$experimentalRemo === void 0 ? [] : _ref$experimentalRemo,
    experimentalUnoptimized = _ref.experimentalUnoptimized;

var configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false};
var loadedImageURLs = new Set();
var allImgs = new Map();
var perfObserver;
var emptyDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

var VALID_LOADING_VALUES = (/* unused pure expression or super */ null && (['lazy', 'eager', undefined]));
var loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
var VALID_LAYOUT_VALUES = (/* unused pure expression or super */ null && (['fill', 'fixed', 'intrinsic', 'responsive', undefined]));

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

function getWidths(_ref2, width, layout, sizes) {
  var deviceSizes = _ref2.deviceSizes,
      allSizes = _ref2.allSizes;

  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= deviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: deviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var config = _ref3.config,
      src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(config, width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        config: config,
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      config: config,
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var ref;
  var loaderKey = ((ref = loaderProps.config) == null ? void 0 : ref.loader) || 'default';
  var load = loaders.get(loaderKey);

  if (load) {
    return load(loaderProps);
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(loaderKey));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingCompleteRef, setBlurComplete) {
  if (!img || img.src === emptyDataURL || img['data-loaded-src'] === src) {
    return;
  }

  img['data-loaded-src'] = src;
  var p = 'decode' in img ? img.decode() : Promise.resolve();
  p["catch"](function () {}).then(function () {
    if (!img.parentNode) {
      // Exit early in case of race condition:
      // - onload() is called
      // - decode() is called but incomplete
      // - unmount is called
      // - decode() completes
      return;
    }

    loadedImageURLs.add(src);

    if (placeholder === 'blur') {
      setBlurComplete(true);
    }

    if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
      var naturalWidth = img.naturalWidth,
          naturalHeight = img.naturalHeight; // Pass back read-only primitive values but not the
      // underlying DOM element because it could be misused.

      onLoadingCompleteRef.current({
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight
      });
    }

    if (false) { var parent, ref; }
  });
}

var ImageElement = function ImageElement(_param) {
  var imgAttributes = _param.imgAttributes,
      heightInt = _param.heightInt,
      widthInt = _param.widthInt,
      qualityInt = _param.qualityInt,
      layout = _param.layout,
      className = _param.className,
      imgStyle = _param.imgStyle,
      blurStyle = _param.blurStyle,
      isLazy = _param.isLazy,
      placeholder = _param.placeholder,
      loading = _param.loading,
      srcString = _param.srcString,
      config = _param.config,
      unoptimized = _param.unoptimized,
      loader = _param.loader,
      onLoadingCompleteRef = _param.onLoadingCompleteRef,
      setBlurComplete = _param.setBlurComplete,
      setIntersection = _param.setIntersection,
      _onLoad = _param.onLoad,
      _onError = _param.onError,
      isVisible = _param.isVisible,
      noscriptSizes = _param.noscriptSizes,
      rest = _object_without_properties_loose(_param, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);

  loading = isLazy ? 'lazy' : loading;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    style: _extends({}, imgStyle, blurStyle),
    ref: (0, _react).useCallback(function (img) {
      if (false) {}

      setIntersection(img);

      if (img == null ? void 0 : img.complete) {
        handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);
      }
    }, [setIntersection, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete]),
    onLoad: function onLoad(event) {
      var img = event.currentTarget;
      handleLoading(img, srcString, layout, placeholder, onLoadingCompleteRef, setBlurComplete);

      if (_onLoad) {
        _onLoad(event);
      }
    },
    onError: function onError(event) {
      if (placeholder === 'blur') {
        // If the real image fails to load, this will still remove the placeholder.
        setBlurComplete(true);
      }

      if (_onError) {
        _onError(event);
      }
    }
  })), (isLazy || placeholder === 'blur') && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    config: config,
    src: srcString,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: noscriptSizes,
    loader: loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    // @ts-ignore - TODO: upgrade to `@types/react@17`
    loading: loading
  }))));
};

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref4) {
  var config = _ref4.config,
      src = _ref4.src,
      width = _ref4.width,
      quality = _ref4.quality;
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  var url = new URL("".concat(config.path).concat(normalizeSrc(src)));
  var params = url.searchParams; // auto params can be combined with comma separation, or reiteration

  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader(_ref5) {
  var config = _ref5.config,
      src = _ref5.src,
      width = _ref5.width;
  return "".concat(config.path).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref6) {
  var config = _ref6.config,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(config.path).concat(paramsString).concat(normalizeSrc(src));
}

function customLoader(_ref7) {
  var src = _ref7.src;
  throw new Error("Image with src \"".concat(src, "\" is missing \"loader\" prop.") + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
}

function defaultLoader(_ref8) {
  var config = _ref8.config,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;

  if (false) { var _require, hasMatch, parsedSrc, missingValues; }

  if (src.endsWith('.svg') && !config.dangerouslyAllowSVG) {
    // Special case to make svg serve as-is to avoid proxying
    // through the built-in Image Optimization API.
    return src;
  }

  return "".concat((0, _normalizeTrailingSlash).normalizePathTrailingSlash(config.path), "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 224969:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathTrailingSlash = void 0;

var _removeTrailingSlash = __webpack_require__(393297);

var _parsePath = __webpack_require__(528854);

var normalizePathTrailingSlash = function normalizePathTrailingSlash(path) {
  if (!path.startsWith('/')) {
    return path;
  }

  var _parsePath2 = (0, _parsePath).parsePath(path),
      pathname = _parsePath2.pathname,
      query = _parsePath2.query,
      hash = _parsePath2.hash;

  if (false) {}

  return "".concat((0, _removeTrailingSlash).removeTrailingSlash(pathname)).concat(query).concat(hash);
};

exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 190639:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(616689);

var _requestIdleCallback = __webpack_require__(526286);

var hasIntersectionObserver = typeof IntersectionObserver === 'function';

function useIntersection(_ref) {
  var rootRef = _ref.rootRef,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react).useRef();

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react).useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      element = _useState4[0],
      setElement = _useState4[1];

  (0, _react).useEffect(function () {
    if (hasIntersectionObserver) {
      if (unobserve.current) {
        unobserve.current();
        unobserve.current = undefined;
      }

      if (isDisabled || visible) return;

      if (element && element.tagName) {
        unobserve.current = observe(element, function (isVisible) {
          return isVisible && setVisible(isVisible);
        }, {
          root: rootRef == null ? void 0 : rootRef.current,
          rootMargin: rootMargin
        });
      }

      return function () {
        unobserve.current == null ? void 0 : unobserve.current();
        unobserve.current = undefined;
      };
    } else {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
        };
      }
    }
  }, [element, isDisabled, rootMargin, rootRef, visible]);
  var resetVisible = (0, _react).useCallback(function () {
    setVisible(false);
  }, []);
  return [setElement, visible, resetVisible];
}

var observers = new Map();
var idList = [];

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
      var index = idList.findIndex(function (obj) {
        return obj.root === id.root && obj.margin === id.margin;
      });

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

function createObserver(options) {
  var id = {
    root: options.root || null,
    margin: options.rootMargin || ''
  };
  var existing = idList.find(function (obj) {
    return obj.root === id.root && obj.margin === id.margin;
  });
  var instance;

  if (existing) {
    instance = observers.get(existing);

    if (instance) {
      return instance;
    }
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  instance = {
    id: id,
    observer: observer,
    elements: elements
  };
  idList.push(id);
  observers.set(id, instance);
  return instance;
}

if ((typeof exports["default"] === 'function' || typeof exports["default"] === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 425675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(578566)


/***/ })

};
;