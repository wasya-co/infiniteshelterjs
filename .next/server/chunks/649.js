exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 423414:
/***/ ((module) => {

"use strict";


module.exports = {
  appIndexPath: "src/index",
  // used in webpack
  apiOrigin: "",
  domain: "",
  // required! 2021-08-31
  debug: false,
  // homePath: "",
  requireLogin: true,
  siteTitle: 'Infinite Shelter Location Discovery Guide',
  stripePublicKey: '',
  // This router isn't used. _vp_ 2022-09-04
  router: {
    locationPath: function locationPath(a) {
      return "/en/locations/show/".concat(a);
    },
    // @TODO: remove this ugliness. _vp_ 2022-09-04
    longTermTokenPath: '/api/users/long_term_token',
    loginPath: '/api/users/login'
  }
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
  APP_ENV: 'development_web',
  homePath: "/en/locations/show/root",
  requireLogin: false,
  stripePublicKey: 'pk_live_xQX97vdZNe11A3HBVZc1GX6H'
};

var defaultSettings = __webpack_require__(423414);

module.exports = _objectSpread(_objectSpread({}, defaultSettings), settings);

/***/ }),

/***/ 524495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ appPaths),
  "Z": () => (/* binding */ src_AppRouter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "ionicons/icons"
var icons_ = __webpack_require__(188945);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(865432);
;// CONCATENATED MODULE: ./src/components/cities/CitiesList.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Counts = external_styled_components_default().div.withConfig({
  displayName: "CitiesList__Counts",
  componentId: "sc-3078fd-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;margin:1em 0px;"]);
var Count = external_styled_components_default().div.withConfig({
  displayName: "CitiesList__Count",
  componentId: "sc-3078fd-1"
})(["display:flex;justify-content:center;width:50%;text-align:center;position:relative;padding:0.1em;"]);
var IonIcon = external_styled_components_default()(react_.IonIcon).withConfig({
  displayName: "CitiesList__IonIcon",
  componentId: "sc-3078fd-2"
})(["font-size:2em;color:", ";"], function (p) {
  return p.theme.darkGrey;
});
var CitiesList_Number = external_styled_components_default().div.withConfig({
  displayName: "CitiesList__Number",
  componentId: "sc-3078fd-3"
})(["padding:0.5em;color:", ";font-size:0.9em;font-weight:600;"], function (p) {
  return p.theme.lightGrey;
});
var W0 = external_styled_components_default().div.withConfig({
  displayName: "CitiesList__W0",
  componentId: "sc-3078fd-4"
})(["height:100vh;"]);
/**
 * CitiesList
 *
 * @TODO: IonLoading can be much more HOC _vp_ 2022-09-10
**/

var CitiesList = function CitiesList(props) {
  (0,shared/* logg */.IJ)(props, 'CitiesList');

  var _useState = (0,external_react_.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cities = _useState2[0],
      setCities = _useState2[1];

  var _useState3 = (0,external_react_.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredCities = _useState4[0],
      setFilteredCities = _useState4[1];

  var _useState5 = (0,external_react_.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showLoading = _useState6[0],
      setShowLoading = _useState6[1];

  var api = (0,shared/* useApi */.h_)();
  var history = (0,external_react_router_dom_.useHistory)();
  (0,external_react_.useEffect)(function () {
    setShowLoading(true);
    api.getCities().then(function (res) {
      setShowLoading(false);
      setFilteredCities(res);
      setCities(res);
    });
  }, []);

  var filterHandler = function filterHandler(ev) {
    var filteredCities = cities.filter(function (city) {
      return city.name.toLowerCase().indexOf(ev.target.value.trim().toLowerCase()) > -1;
    });
    setFilteredCities(filteredCities);
  };

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement(W0, {
    className: "cities"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "heading"
  }, "Cities"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "filter-section"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    className: "filter-input",
    onChange: filterHandler
  }), /*#__PURE__*/external_react_default().createElement(IonIcon, {
    className: "filter-icon",
    icon: icons_.funnel
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container"
  }, filteredCities.map(function (city, i) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: i,
      className: "cities"
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "img-section"
    }, /*#__PURE__*/external_react_default().createElement("span", {
      className: "bookmark"
    }, /*#__PURE__*/external_react_default().createElement(IonIcon, {
      className: "bookmark-icon",
      icon: icons_.bookmark
    })), /*#__PURE__*/external_react_default().createElement("img", {
      className: "city-img",
      src: city.photo
    }), /*#__PURE__*/external_react_default().createElement("span", {
      className: "city-title"
    }, city.name)), /*#__PURE__*/external_react_default().createElement(Counts, null, /*#__PURE__*/external_react_default().createElement(Count, null, /*#__PURE__*/external_react_default().createElement(CitiesList_Number, null, city.n_reports), /*#__PURE__*/external_react_default().createElement(IonIcon, {
      icon: icons_.newspaperOutline
    })), /*#__PURE__*/external_react_default().createElement(Count, null, /*#__PURE__*/external_react_default().createElement(CitiesList_Number, null, city.n_galleries), /*#__PURE__*/external_react_default().createElement(IonIcon, {
      icon: icons_.image
    })), /*#__PURE__*/external_react_default().createElement(Count, null, /*#__PURE__*/external_react_default().createElement(CitiesList_Number, null, city.n_videos), /*#__PURE__*/external_react_default().createElement(IonIcon, {
      icon: icons_.videocam
    }))));
  })), "\xA0"), /*#__PURE__*/external_react_default().createElement(react_.IonLoading, {
    isOpen: showLoading,
    onDidDismiss: function onDidDismiss() {
      return setShowLoading(false);
    },
    message: 'Please wait...',
    duration: 5000
  }));
};

/* harmony default export */ const cities_CitiesList = (CitiesList);
// EXTERNAL MODULE: ./src/components/newsitems/index.js + 9 modules
var newsitems = __webpack_require__(608045);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/venues/Rating.jsx
function Rating_slicedToArray(arr, i) { return Rating_arrayWithHoles(arr) || Rating_iterableToArrayLimit(arr, i) || Rating_unsupportedIterableToArray(arr, i) || Rating_nonIterableRest(); }

function Rating_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Rating_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Rating_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Rating_arrayLikeToArray(o, minLen); }

function Rating_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Rating_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Rating_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // import "./Application.module.scss"

var Rating = function Rating(props) {
  var rate = props.rate;

  var _useState = (0,external_react_.useState)([]),
      _useState2 = Rating_slicedToArray(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var iconMapping = {
    0: icons_.starOutline,
    1: icons_.starHalf,
    2: icons_.star
  };
  (0,external_react_.useEffect)(function () {
    var rating = new Array(5).fill(0);
    var i = 0;

    while (rate > 0) {
      if (rate < 1) {
        rating[i] = 1;
      } else {
        rating[i] = 2;
      }

      rate--;
      i++;
    }

    setRating(rating);
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "rating"
  }, rating.map(function (r, i) {
    return /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
      key: i,
      className: "stars",
      icon: iconMapping[r]
    });
  }));
};

/* harmony default export */ const venues_Rating = (Rating);
;// CONCATENATED MODULE: ./src/components/venues/Venues.jsx
function Venues_slicedToArray(arr, i) { return Venues_arrayWithHoles(arr) || Venues_iterableToArrayLimit(arr, i) || Venues_unsupportedIterableToArray(arr, i) || Venues_nonIterableRest(); }

function Venues_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Venues_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Venues_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Venues_arrayLikeToArray(o, minLen); }

function Venues_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Venues_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Venues_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Address = external_styled_components_default().p.withConfig({
  displayName: "Venues__Address",
  componentId: "sc-x9y5g-0"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";font-size:14px;"], function (p) {
  return p.theme.darkGrey;
});
var Col = external_styled_components_default().div.withConfig({
  displayName: "Venues__Col",
  componentId: "sc-x9y5g-1"
})([""]); // right arrow container

var _Ra = external_styled_components_default().div.withConfig({
  displayName: "Venues___Ra",
  componentId: "sc-x9y5g-2"
})(["display:flex;flex-direction:column;justify-content:center;"]);

var RightArrow = function RightArrow() {
  return /*#__PURE__*/external_react_default().createElement(_Ra, null, /*#__PURE__*/external_react_default().createElement("img", {
    className: "forward-arrow",
    src: "/assets/16x16/arrow-right.png"
  }));
};

var Row = external_styled_components_default().div.withConfig({
  displayName: "Venues__Row",
  componentId: "sc-x9y5g-3"
})(["display:flex;"]);
var Title = external_styled_components_default().div.withConfig({
  displayName: "Venues__Title",
  componentId: "sc-x9y5g-4"
})(["font-size:1.5em;"]);
var Venue = external_styled_components_default().div.withConfig({
  displayName: "Venues__Venue",
  componentId: "sc-x9y5g-5"
})(["width:100vw;padding:1em;margin-bottom:0.5em;border-bottom:1px solid #e3d3d3;box-shadow:0px 1px 5px 1px #b3aeae;background-color:white;position:relative;display:flex;justify-content:space-between;img.thumb{border-radius:10px;}> div{}"]);

var Venues = function Venues(props) {
  (0,shared/* logg */.IJ)(props, 'Venues');
  var defaultRating = 3.5;

  var _useState = (0,external_react_.useState)(props.venues),
      _useState2 = Venues_slicedToArray(_useState, 2),
      filteredVenues = _useState2[0],
      setFilteredVenues = _useState2[1];

  function filterHandler(ev) {
    var venues = props.venues.filter(function (venue) {
      return venue.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });
    setFilteredVenues(venues);
  }

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "venues-section"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "filter-section"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    className: "filter-input",
    onChange: filterHandler
  }), /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
    className: "filter-icon",
    icon: icons_.funnel
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container"
  }, filteredVenues.map(function (venue, idx) {
    return /*#__PURE__*/external_react_default().createElement(Venue, {
      key: idx
    }, /*#__PURE__*/external_react_default().createElement(Row, null, /*#__PURE__*/external_react_default().createElement(Col, null, /*#__PURE__*/external_react_default().createElement("img", {
      style: {
        paddingRight: '1em'
      },
      className: "thumb",
      src: venue.photo
    })), /*#__PURE__*/external_react_default().createElement(Col, null, /*#__PURE__*/external_react_default().createElement(Title, null, venue.name), /*#__PURE__*/external_react_default().createElement("div", {
      className: "rating-section"
    }, /*#__PURE__*/external_react_default().createElement(venues_Rating, {
      rate: defaultRating
    }), /*#__PURE__*/external_react_default().createElement("span", {
      className: "reviews"
    }, "5 reviews")), /*#__PURE__*/external_react_default().createElement("div", {
      className: "tags-section"
    }, venue.tags.map(function (tag, idx) {
      return /*#__PURE__*/external_react_default().createElement("span", {
        key: idx,
        className: "tags"
      }, tag.name);
    })), /*#__PURE__*/external_react_default().createElement("p", {
      className: "description",
      dangerouslySetInnerHTML: {
        __html: venue.subhead
      }
    }), venue.address && /*#__PURE__*/external_react_default().createElement(Address, null, venue.address))), /*#__PURE__*/external_react_default().createElement(RightArrow, null));
  })));
};

Venues.propTypes = {
  venues: (external_prop_types_default()).array.isRequired
};
/* harmony default export */ const venues_Venues = (Venues);
;// CONCATENATED MODULE: ./src/components/venues/index.js

;// CONCATENATED MODULE: ./src/components/cities/CitiesShow.jsx
function CitiesShow_slicedToArray(arr, i) { return CitiesShow_arrayWithHoles(arr) || CitiesShow_iterableToArrayLimit(arr, i) || CitiesShow_unsupportedIterableToArray(arr, i) || CitiesShow_nonIterableRest(); }

function CitiesShow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CitiesShow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CitiesShow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CitiesShow_arrayLikeToArray(o, minLen); }

function CitiesShow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CitiesShow_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CitiesShow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var CitiesShow_W0 = external_styled_components_default().div.withConfig({
  displayName: "CitiesShow__W0",
  componentId: "sc-yemn3-0"
})(["height:100vh;"]);
/**
 * CitiesShow
 * @TODO: this won't work with next_js, so a rewrite is in order.
**/

var CitiesShow = function CitiesShow(props) {
  // logg(props, 'CitiesShow')
  var match = props.match;
  var api = (0,shared/* useApi */.h_)();
  var history = (0,external_react_router_dom_.useHistory)();
  var thisPath = appPaths.cityPath(match.params.name);
  var location = (0,external_react_router_dom_.useLocation)();

  var _useState = (0,external_react_.useState)(null),
      _useState2 = CitiesShow_slicedToArray(_useState, 2),
      city = _useState2[0],
      setCity = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = CitiesShow_slicedToArray(_useState3, 2),
      showLoading = _useState4[0],
      setShowLoading = _useState4[1];

  var mountedRef = (0,external_react_.useRef)('init');
  (0,external_react_.useEffect)(function () {
    setShowLoading(true);
    api.getCity(match.params.name).then(function (res) {
      if (mountedRef.current) {
        setCity(res.data.city);
        setShowLoading(false);
      }
    });
    return function () {
      return mountedRef.current = false;
    };
  }, [match.params.name]);
  return /*#__PURE__*/external_react_default().createElement(CitiesShow_W0, null, city && /*#__PURE__*/external_react_default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "city-show"
  }, /*#__PURE__*/external_react_default().createElement("header", {
    style: {
      backgroundImage: "url(".concat(city.hero_img, "}"),
      backgroundSize: "contain"
    }
  }), /*#__PURE__*/external_react_default().createElement("section", {
    className: "section-one"
  }, /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
    icon: icons_.pin,
    className: "location"
  }), /*#__PURE__*/external_react_default().createElement("h1", {
    className: "city-name"
  }, city.name), /*#__PURE__*/external_react_default().createElement("div", {
    className: "status"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "status-grid"
  }, /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
    className: "info-icon",
    icon: icons_.newspaperOutline
  }), /*#__PURE__*/external_react_default().createElement("span", {
    className: "numbers"
  }, city.n_reports)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "status-grid"
  }, /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
    className: "info-icon",
    icon: icons_.image
  }), /*#__PURE__*/external_react_default().createElement("span", {
    className: "numbers"
  }, city.n_galleries)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "status-grid mid"
  }, /*#__PURE__*/external_react_default().createElement(react_.IonIcon, {
    className: "info-icon",
    icon: icons_.videocam
  }), /*#__PURE__*/external_react_default().createElement("span", {
    className: "numbers "
  }, city.n_videos)))), /*#__PURE__*/external_react_default().createElement("section", {
    className: "section-three"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "menu-option",
    onClick: function onClick() {
      return history.push(appPaths.cityPath(match.params.name));
    }
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: "/assets/newsfeed-icon.svg",
    alt: "Newsfeed"
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "".concat(location.pathname == thisPath ? "selected" : "", " menu-item")
  }, "Newsfeed")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "menu-option",
    onClick: function onClick() {
      return history.push(appPaths.cityVenuesPath(match.params.name));
    }
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: "/assets/venue-icon.svg",
    alt: "Venues"
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "".concat(location.pathname.includes("venues") ? "selected" : "", " menu-item")
  }, "Venues"))), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Switch, null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "".concat(match.url, "/venues"),
    render: function render() {
      return /*#__PURE__*/external_react_default().createElement(venues_Venues, {
        venues: city.venues
      });
    }
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: match.url,
    render: function render() {
      return /*#__PURE__*/external_react_default().createElement(newsitems/* Newsitems */.bX, {
        newsitems: city.newsitems
      });
    }
  })))), /*#__PURE__*/external_react_default().createElement(react_.IonLoading, {
    isOpen: showLoading,
    onDidDismiss: function onDidDismiss() {
      return setShowLoading(false);
    },
    message: 'Please wait...',
    duration: 5000
  }));
};

/* harmony default export */ const cities_CitiesShow = (CitiesShow);
;// CONCATENATED MODULE: ./src/components/cities/index.js


// EXTERNAL MODULE: ./src/components/galleries/index.js + 1 modules
var galleries = __webpack_require__(878935);
// EXTERNAL MODULE: ./src/components/locations/index.jsx + 29 modules
var locations = __webpack_require__(33117);
// EXTERNAL MODULE: ./src/components/reports/index.jsx + 2 modules
var reports = __webpack_require__(563204);
// EXTERNAL MODULE: ./src/components/users/index.jsx + 5 modules
var users = __webpack_require__(255502);
;// CONCATENATED MODULE: ./src/AppRouter.jsx










/**
 * appPaths
 *
 * names should not end in "path", that's cruft.
 *
 * @TODO: test-drive: (1) when providing location_slug, (2) when providing location, (3) when neither. _vp_ 2022-09-12
 *
**/

var appPaths = {
  cityVenuesPath: function cityVenuesPath(slug) {
    return "/en/cities/travel-to/".concat(slug, "/venues");
  },
  cityPath: function cityPath(slug) {
    return "/en/cities/travel-to/".concat(slug);
  },
  viewGallery: function viewGallery(_ref) {
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
  viewItem: function viewItem(_ref2) {
    var location = _ref2.location,
        item = _ref2.item;
    var item_type = item.item_type,
        slug = item.slug;

    if (location) {
      return "/en/locations/show/".concat(location.slug, "/").concat(shared/* inflector.tableize */.$z.tableize(item_type), "/show/").concat(slug);
    } else {
      return "/en/".concat(shared/* inflector.tableize */.$z.tableize(item_type), "/show/").concat(slug);
    }
  },
  locationPath: function locationPath(slug) {
    return "/en/locations/show/".concat(slug);
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
  (0,shared/* logg */.IJ)(props, 'AppRouter');
  return /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.BrowserRouter, null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Switch, {
    main: true
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Redirect, {
    exact: true,
    from: "/",
    to: (config_default()).homePath
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/account",
    component: users/* Account */.mR
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/cities",
    component: cities_CitiesList
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    path: "/en/cities/travel-to/:name",
    component: cities_CitiesShow
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/galleries/show/:slug",
    component: galleries/* GalleriesShow */.q
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/locations/show/:slug",
    component: locations/* LocationsShowAsync */.qm,
    layout: shared.C.layout_mapui
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/locations/show/:slug/:item_type/show/:item_slug",
    component: locations/* LocationsShowAsync */.qm,
    layout: shared.C.layout_mapui
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/locations/show2/:slug",
    component: locations/* LocationsShowAsync */.qm,
    layout: shared.C.layout_mapui
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/locations/show3d/:slug",
    component: locations/* LocationsShowMobile3d */.HZ,
    layout: shared.C.layout_mapui
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_.Route, {
    exact: true,
    path: "/en/reports/show/:slug",
    component: reports/* ReportsShow */.X
  })));
};

/* harmony default export */ const src_AppRouter = (AppRouter);

/***/ }),

/***/ 598541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T1": () => (/* binding */ WLoginModal),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fC": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617493);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capacitor_device__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(857518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ishlibjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401928);
/* harmony import */ var $components_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(660179);
/* harmony import */ var $components_TwofoldLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(852947);
/* harmony import */ var $shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(865432);
/* harmony import */ var $src_AppRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(524495);
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }










 // I'm using this. _vp_ 2022-09-10










 // @TODO: stop exporting

var Root = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "AppWrapper2__Root",
  componentId: "sc-15sk6j6-0"
})(["padding:10px;"]);
/**
 * links AuthContext to LoginModal
 * @TODO: stop exporting this.
**/

var WLoginModal = function WLoginModal(props) {
  // logg(props, 'WLoginModal')
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ishlibjs__WEBPACK_IMPORTED_MODULE_5__/* .AuthContext */ .Vo),
      setCurrentUser = _useContext.setCurrentUser;

  var onError = function onError(inn) {
    (0,$shared__WEBPACK_IMPORTED_MODULE_8__/* .logg */ .IJ)(inn, 'cannot login!');
    (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)('cannot login!');
  };

  var onSuccess = function onSuccess(inn) {
    (0,$shared__WEBPACK_IMPORTED_MODULE_8__/* .logg */ .IJ)('Logged in successfully.');
    setCurrentUser(inn);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ishlibjs__WEBPACK_IMPORTED_MODULE_5__/* .LoginModal */ ._A, {
    onError: onError,
    onSuccess: onSuccess
  });
};
/**
 * AppWrapper2
 * _vp_ 2022-09-09
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js
 *
 *
 * @TODO: test: has toast container
 *
 * @TODO: test: provides theme
 * @TODO: test: provides auth
 * @TODO: test: provides twofold
 * @TODO: test: provides collapsible
 *
 * @TODO: test: has bottomDrawer
 * @TODO: test: has loginModal
 * @TODO: test: has registerModal
 *
 * @DONE: unlockModal cannot be here, it must be inside react-router.
 *
**/

var AppWrapper2 = function AppWrapper2(props) {
  // logg(props, 'AppWrapper2')
  _objectDestructuringEmpty(props);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement($shared__WEBPACK_IMPORTED_MODULE_8__/* .ThemeProvider */ .f6, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ishlibjs__WEBPACK_IMPORTED_MODULE_5__/* .AuthContextProvider */ .HD, {
    useApi: $shared__WEBPACK_IMPORTED_MODULE_8__/* .useApi */ .h_
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement($components_TwofoldLayout__WEBPACK_IMPORTED_MODULE_7__/* .TwofoldContextProvider */ .AO, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement($components_TwofoldLayout__WEBPACK_IMPORTED_MODULE_7__/* .CollapsibleProvider */ .h9, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Root, {
    className: "Root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement($src_AppRouter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
    position: "bottom-left"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WLoginModal, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ishlibjs__WEBPACK_IMPORTED_MODULE_5__/* .RegisterModal */ .Kt, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement($components_application__WEBPACK_IMPORTED_MODULE_6__/* .BottomDrawer */ .lY, null)))));
};

AppWrapper2.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object) // from next_js, @TODO: add showItem. _vp_ 2022-09-11

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWrapper2);

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
var shared = __webpack_require__(865432);
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

var CollapsibleContext = /*#__PURE__*/external_react_default().createContext({});
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
})(["background:", ";padding:0 .5em .5em .5em;"], function (p) {
  return p.theme.colors.background;
});

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
})(["border:", ";border-radius:", ";flex-grow:1;width:", ";height:", ";padding:2px;background:", ";"], function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
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
// EXTERNAL MODULE: external "ionicons/icons"
var icons_ = __webpack_require__(188945);
// EXTERNAL MODULE: external "@ionic/react"
var react_ = __webpack_require__(790733);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(40124);
// EXTERNAL MODULE: external "@material-ui/icons"
var external_material_ui_icons_ = __webpack_require__(472105);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
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











/**
 * ishjs has an older version of this - discard it. _vp_ 2022-03-05, 2022-09-12
*/

var TwofoldContext = /*#__PURE__*/external_react_default().createContext({});

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
      theme = props.theme,
      toggleTheme = props.toggleTheme,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? 1 : _props$zoom,
      setZoom = props.setZoom;
  var api = (0,shared/* useApi */.h_)();
  /* B */
  // bottomDrawerOpen, localStorage OK

  var _bdo;

  var _useState = (0,external_react_.useState)(_bdo),
      _useState2 = TwofoldContext_slicedToArray(_useState, 2),
      bottomDrawerOpen = _useState2[0],
      _setBottomDrawerOpen = _useState2[1];

  try {
    _bro = JSON.parse(localStorage.getItem(shared.C.bottomDrawerOpen));
  } catch (e) {} // no window


  var setBottomDrawerOpen = function setBottomDrawerOpen(m) {
    try {
      localStorage.setItem(shared.C.bottomDrawerOpen, JSON.stringify(m));
    } catch (e) {}

    _setBottomDrawerOpen(m);
  }; // let [ currentUser, setCurrentUser ] = useState(C.anonUser)
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
      setRatedConfirmation = _useState16[1]; // const [ registerModalOpen, setRegisterModalOpen ] = useState(false)

  /* S */


  var _useState17 = (0,external_react_.useState)(false),
      _useState18 = TwofoldContext_slicedToArray(_useState17, 2),
      showItem = _useState18[0],
      setShowItem = _useState18[1];

  if (!!_setShowItem) {
    setShowItem = _setShowItem;
  }

  if (!!_showItem) {
    showItem = _showItem;
  }

  var _useState19 = (0,external_react_.useState)(false),
      _useState20 = TwofoldContext_slicedToArray(_useState19, 2),
      showUrl = _useState20[0],
      setShowUrl = _useState20[1];
  /* T */
  // twofoldPercent
  // @TODO: fix, this makes no sense. _vp_ 2022-09-12


  var _tfp;

  try {
    _tfp = JSON.parse(localStorage.getItem(shared.C.twofoldPercent));
  } catch (e) {}

  (0,shared/* logg */.IJ)(_tfp, '_tfp');

  var _useState21 = (0,external_react_.useState)(_tfp || 0.5),
      _useState22 = TwofoldContext_slicedToArray(_useState21, 2),
      twofoldPercent = _useState22[0],
      _setTwofoldPercent = _useState22[1];

  var setTwofoldPercent = function setTwofoldPercent(p) {
    try {
      localStorage.setItem(shared.C.twofoldPercent, JSON.stringify(p));
    } catch (e) {}

    _setTwofoldPercent(p);
  };
  /* Z */


  var _useState23 = (0,external_react_.useState)(1),
      _useState24 = TwofoldContext_slicedToArray(_useState23, 2),
      _zoom = _useState24[0],
      _setZoom = _useState24[1];

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
      showItem: showItem,
      setShowItem: setShowItem,
      showUrl: showUrl,
      setShowUrl: setShowUrl,
      twofoldPercent: twofoldPercent,
      setTwofoldPercent: setTwofoldPercent,
      zoom: zoom,
      setZoom: setZoom,
      theme: theme,
      toggleTheme: toggleTheme
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
var shared = __webpack_require__(865432);
;// CONCATENATED MODULE: ./src/components/application/BottomDrawer.jsx












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
})(["border:", ";border-radius:", ";background:", ";height:calc(", " + 1*", ");margin:", ";flex-grow:1;"], function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.background;
}, function (p) {
  return p.theme.bottomDrawerOpenHeight;
}, function (p) {
  return p.theme.borderHeight;
}, function (p) {
  return p.theme.borderWidth;
}); // TODO: I may not need this

var Inner2 = external_styled_components_default().div.withConfig({
  displayName: "BottomDrawer__Inner2",
  componentId: "sc-1cfcaai-3"
})(["background:", ";height:100px;display:flex;"], function (p) {
  return p.theme.colors.cardBackground;
});
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
  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      layout = _useContext.layout,
      setBottomDrawerOpen = _useContext.setBottomDrawerOpen; // @TODO: move the component to layout_onecol then


  if (layout === shared.C.layout_onecol) {
    return null;
  }

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
    open: bottomDrawerOpen,
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
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/application/Breadcrumbs.jsx








 // One breadcrumb

var B0 = external_styled_components_default().div.withConfig({
  displayName: "Breadcrumbs__B0",
  componentId: "sc-1yfagtc-0"
})(["color:", ";"], function (p) {
  return p.theme.colors.text;
}); // The divider

var B1 = external_styled_components_default().div.withConfig({
  displayName: "Breadcrumbs__B1",
  componentId: "sc-1yfagtc-1"
})(["padding:0.5em;color:", ";"], function (p) {
  return p.theme.colors.text;
});
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

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      layout = _useContext.layout,
      toggleTheme = _useContext.toggleTheme,
      theme = _useContext.theme;

  var history = (0,external_react_router_dom_.useHistory)();
  var out = [];
  breadcrumbs.map(function (b, idx) {
    if (idx + 1 === props.breadcrumbs.length) {
      // last one
      out.push( /*#__PURE__*/external_react_default().createElement(B0, {
        key: idx
      }, b.name));
    } else {
      out.push( /*#__PURE__*/external_react_default().createElement(B0, {
        key: idx,
        style: {
          textDecoration: 'underline',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return history.push("/en/locations/show/".concat(b.slug));
        }
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
  }, out), /*#__PURE__*/external_react_default().createElement(application_DayNightToggle, {
    toggleTheme: toggleTheme,
    theme: theme
  }));
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




/**
 * DayNightToggle
 * From: https://codepen.io/fagnanm/pen/RpWNyb
 * From: https://devbeep.com/css-day-night-toggle-switch/
 *
 * @TODO: test-drive. toggling *once* changes the theme *once*
**/

var DayNightToggle = function DayNightToggle(props) {
  // logg(props, 'DayNightToggle')
  // const {} = props
  var _useContext = (0,external_react_.useContext)(shared/* ThemeContext */.Ni),
      theme = _useContext.theme,
      toggleTheme = _useContext.toggleTheme;

  (0,shared/* logg */.IJ)((0,external_react_.useContext)(shared/* ThemeContext */.Ni), 'DayNightToggle Used ThemeContext');
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(887757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(event) {
      var client_secret, result, handle;
      return regenerator_default().wrap(function _callee2$(_context2) {
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
                  handle = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
                    var response;
                    return regenerator_default().wrap(function _callee$(_context) {
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
  var _React$useState = external_react_default().useState(false),
      _React$useState2 = SideMenu_slicedToArray(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var _useState = (0,external_react_.useState)(false),
      _useState2 = SideMenu_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var history = (0,external_react_router_dom_.useHistory)();

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser;

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
  }))))));
};

SideMenu.propTypes = {
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const application_SideMenu = (SideMenu);
;// CONCATENATED MODULE: ./src/components/application/UnlockModal.jsx


function UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function UnlockModal_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { UnlockModal_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var BtnRow = external_styled_components_default().div.withConfig({
  displayName: "UnlockModal__BtnRow",
  componentId: "sc-wbtxk-0"
})(["display:flex;justify-content:space-around;"]);
/**
 * UnlockModal
 */

var UnlockModal = function UnlockModal(props) {
  // logg(props, 'UnlockModal')
  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext.itemToUnlock,
      setItemToUnlock = _useContext.setItemToUnlock,
      location = _useContext.location,
      setLocation = _useContext.setLocation,
      loginModalOpen = _useContext.loginModalOpen,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      purchaseModalOpen = _useContext.purchaseModalOpen,
      setPurchaseModalOpen = _useContext.setPurchaseModalOpen,
      ratedConfirmation = _useContext.ratedConfirmation,
      setRatedConfirmation = _useContext.setRatedConfirmation; // logg(useContext(TwofoldContext), 'unlockModalUsedTwofoldContext')


  var _useContext2 = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext2.currentUser,
      setCurrentUser = _useContext2.setCurrentUser,
      useApi = _useContext2.useApi; // logg(useContext(AuthContext), 'unlockModalUsedAuthContext')


  var api = useApi();
  var history = (0,external_react_router_dom_.useHistory)();

  var doUnlock = /*#__PURE__*/function () {
    var _ref = UnlockModal_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.doUnlock({
                kind: itemToUnlock.item_type,
                id: itemToUnlock.id
              }).then(function (r) {
                // @TODO: Change this to null if possible. Test-drive this change. _vp_ 2022-09-04
                setItemToUnlock({});
                setCurrentUser(r); // @TODO: move, copy-pasted from LocationsShowDesktop

                api.getLocation({
                  slug: itemToUnlock.location_slug
                }).then(function (r) {
                  setLocation(r);

                  if (r.rated === shared.C.rated.nc17 && !ratedConfirmation) {
                    // @TODO: not test-driven, bad!
                    setRatedConfirmation(false);
                  }
                });
                var resource_name = shared/* inflector.tableize */.$z.tableize(itemToUnlock.item_type);
                history.push("/en/locations/show/".concat(itemToUnlock.location_slug, "/").concat(resource_name, "/show/").concat(itemToUnlock.slug));
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
    isOpen: !!itemToUnlock.id
  }, /*#__PURE__*/external_react_default().createElement(dist/* ModalHeader */.xB, {
    onClose: function onClose() {
      return closable && setItemToUnlock(false);
    }
  }, "Unlock this item?"), /*#__PURE__*/external_react_default().createElement("p", null, "To access this content, please unlock it first. It costs ", cost, " coin(s) to unlock."), currentUser && /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You have ", /*#__PURE__*/external_react_default().createElement("b", null, currentUser.n_unlocks), " unlocks."), currentUser.n_unlocks >= cost && /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    className: "doUnlock",
    onClick: doUnlock
  }, "Unlock"), currentUser.n_unlocks < cost && /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You don't have enough unlocks."), /*#__PURE__*/external_react_default().createElement(shared/* Btn */.un, {
    onClick: function onClick() {
      setPurchaseModalOpen(true);
      setItemToUnlock(false);
    }
  }, "Purchase more."))), !currentUser && /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("p", null, "You have to be logged in to unlock content. ", /*#__PURE__*/external_react_default().createElement("a", {
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
var shared = __webpack_require__(865432);
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

/***/ 33117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* reexport */ locations_ItemModal),
  "LZ": () => (/* reexport */ LocationContext),
  "vR": () => (/* reexport */ locations_LocationProvider),
  "N2": () => (/* reexport */ locations_LocationsShow),
  "qm": () => (/* reexport */ locations_LocationsShowAsync),
  "HZ": () => (/* reexport */ locations_LocationsShowMobile3d),
  "I8": () => (/* reexport */ locations_MapPanel),
  "fg": () => (/* reexport */ locations_WrappedMapPanel)
});

// UNUSED EXPORTS: GoogleMaps, ZoomCtrl

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(566405);
// EXTERNAL MODULE: external "@googlemaps/react-wrapper"
var react_wrapper_ = __webpack_require__(376943);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(865432);
;// CONCATENATED MODULE: ./src/components/locations/GoogleMaps.jsx
var _excluded = ["onClick", "onIdle", "children", "style"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var API_KEY; // API_KEY = 'AIzaSyDTM7RYKAlUS84jN1pCmydwEKxUTAMAn6c'

API_KEY = 'AIzaSyB8kkxbSgjmUpGmpigro-N7uXKiQmpBoyE';
/**
 * App
**/

var App = function App(props) {
  // logg(props, 'GoogleMaps2')
  var map = props.map;

  var _React$useState = external_react_.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      clicks = _React$useState2[0],
      setClicks = _React$useState2[1];

  var _React$useState3 = external_react_.useState(12),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      zoom = _React$useState4[0],
      setZoom = _React$useState4[1]; // initial zoom


  var _React$useState5 = external_react_.useState({
    lat: map.x,
    lng: map.y
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
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
    apiKey: API_KEY
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
      _React$useState8 = _slicedToArray(_React$useState7, 2),
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
    if ( /*#__PURE__*/external_react_.isValidElement(child)) {
      // set the map prop on the child component
      return /*#__PURE__*/external_react_.cloneElement(child, {
        map: map
      });
    }
  }));
};

var Marker = function Marker(options) {
  var _React$useState9 = external_react_.useState(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
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
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(219931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./src/components/galleries/index.js + 1 modules
var galleries = __webpack_require__(878935);
// EXTERNAL MODULE: ./src/components/reports/index.jsx + 2 modules
var reports = __webpack_require__(563204);
// EXTERNAL MODULE: ./src/components/locations/ItemModal.module.scss
var ItemModal_module = __webpack_require__(943294);
var ItemModal_module_default = /*#__PURE__*/__webpack_require__.n(ItemModal_module);
;// CONCATENATED MODULE: ./src/components/locations/ItemModal.jsx











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
    history.push(config_default().router.locationPath(params.slug));
    setShowItem(null);
  };

  if (!item) {
    return;
  }

  if (!item.action) {
    item.action = shared.C.actions.show;
  } // set default


  external_react_modal_default().setAppElement('body');
  return /*#__PURE__*/external_react_default().createElement((external_react_modal_default()), {
    className: "ItemModal ".concat((ItemModal_module_default()).ItemModal),
    isOpen: !!item // overlayClassName={styles.LoginModalOverlay}
    // portalClassName={styles.LoginModalPortal}

  }, /*#__PURE__*/external_react_default().createElement(dist/* Actions */.eX, null, /*#__PURE__*/external_react_default().createElement(dist/* CloseBtn */.dg, {
    onClick: onClose
  })), item.item_type === shared.C.item_types.report && item.action === shared.C.actions.show && /*#__PURE__*/external_react_default().createElement(reports/* ReportsShow */.X, {
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

/* harmony default export */ const locations_ItemModal = (ItemModal);
;// CONCATENATED MODULE: ./src/components/locations/LocationProvider.jsx
var LocationProvider_excluded = ["children"];

function LocationProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocationProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocationProvider_ownKeys(Object(source), !0).forEach(function (key) { LocationProvider_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocationProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LocationProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LocationProvider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LocationProvider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LocationProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var LocationContext = /*#__PURE__*/external_react_default().createContext({});
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
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
// EXTERNAL MODULE: ./src/components/newsitems/index.js + 9 modules
var newsitems = __webpack_require__(608045);
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

// EXTERNAL MODULE: ./src/AppRouter.jsx + 6 modules
var AppRouter = __webpack_require__(524495);
;// CONCATENATED MODULE: ./src/components/markers/MarkersList.jsx
var MarkersList_excluded = ["children"],
    _excluded2 = ["className"],
    _excluded3 = ["children"],
    _excluded4 = ["children", "variant"];

function MarkersList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MarkersList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MarkersList_ownKeys(Object(source), !0).forEach(function (key) { MarkersList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MarkersList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MarkersList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MarkersList_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MarkersList_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MarkersList_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * Wrapper Bordered Item. It is padded, margined.
**/

var _WBorderedItem = external_styled_components_default().a.withConfig({
  displayName: "MarkersList___WBorderedItem",
  componentId: "sc-i7mf08-0"
})(["border:", ";border-radius:", ";background:", ";color:", ";display:block;text-decoration:none;margin:0 .5em .5em 0;padding:.5em;text-align:center;width:18%;max-width:140px;min-width:120px;&:empty{height:0;border:none;padding:0;};"], function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});

var WBorderedItem = function WBorderedItem(_ref) {
  var children = _ref.children,
      _props = MarkersList_objectWithoutProperties(_ref, MarkersList_excluded);

  var className = _props.className,
      props = MarkersList_objectWithoutProperties(_props, _excluded2);

  return /*#__PURE__*/external_react_default().createElement(_WBorderedItem, Object.assign({
    className: "WBorderedItem ".concat(className)
  }, props), children);
};
/**
 * Marker
**/


var _Marker = external_styled_components_default().div.withConfig({
  displayName: "MarkersList___Marker",
  componentId: "sc-i7mf08-1"
})(["color:", ";margin:0 auto 10px auto;width:120px;text-align:center;"], function (p) {
  return p.theme.colors.text;
});

var MarkersList_Marker = function Marker(_ref2) {
  var children = _ref2.children,
      props = MarkersList_objectWithoutProperties(_ref2, _excluded3);

  // logg(props, 'Marker')
  var marker = props.marker;

  var _useContext = (0,external_react_.useContext)(shared/* NavigationContext */.kH),
      useHistory = _useContext.useHistory;

  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext2.itemToUnlock,
      setItemToUnlock = _useContext2.setItemToUnlock,
      showUrl = _useContext2.showUrl,
      setShowUrl = _useContext2.setShowUrl;

  var history = useHistory();

  var _goto = function _goto(e) {
    e.preventDefault();

    if (marker.premium_tier && !marker.is_purchased) {
      setItemToUnlock(marker);
    } else {
      if (marker.url) {
        setShowUrl(marker.url); // @TODO: this should be encoded in the (server-side) router eventually. _vp_ 2022-09-11
      } else {
        history.push("/en/locations/show/".concat(marker.slug));
      }
    }
  };

  return /*#__PURE__*/external_react_default().createElement(WBorderedItem, Object.assign({
    onClick: _goto
  }, MarkersList_objectSpread({
    href: AppRouter/* appPaths.locationPath */.X.locationPath(marker.slug)
  }, props)), children);
};

MarkersList_Marker.propTypes = {
  marker: (external_prop_types_default()).object.isRequired
};
/* W */

var _W0 = external_styled_components_default().div.withConfig({
  displayName: "MarkersList___W0",
  componentId: "sc-i7mf08-2"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]);

var W0 = function W0(_ref3) {
  var children = _ref3.children,
      variant = _ref3.variant,
      props = MarkersList_objectWithoutProperties(_ref3, _excluded4);

  if (variant === shared.C.variants.bordered) {
    return /*#__PURE__*/external_react_default().createElement(shared/* WBordered */.xP, props, children);
  } else {
    return /*#__PURE__*/external_react_default().createElement(_W0, props, children);
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

  var markers = props.markers.map(function (m, idx) {
    return /*#__PURE__*/external_react_default().createElement(MarkersList_Marker, {
      key: idx,
      marker: m
    }, /*#__PURE__*/external_react_default().createElement("img", {
      src: m.title_img_path
    }), /*#__PURE__*/external_react_default().createElement("br", null), m.is_purchased && /*#__PURE__*/external_react_default().createElement(shared/* PurchasedIcon */.Xw, null), m.name);
  }); // Zero-height placeholders for the last row.

  var times = 12 - markers.length % 12;

  for (var i = 0; i < times; i++) {
    markers.push( /*#__PURE__*/external_react_default().createElement(MarkersList_Marker, {
      key: "padded-".concat(i),
      marker: {}
    }));
  }

  return /*#__PURE__*/external_react_default().createElement(W0, {
    className: "MarkersList"
  }, markers);
};

MarkersList.propTypes = {
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



var markers_MarkerContext = /*#__PURE__*/external_react_default().createContext({});

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
var LocationsShow_excluded = ["children"],
    LocationsShow_excluded2 = ["children"];

function LocationsShow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function LocationsShow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LocationsShow_ownKeys(Object(source), !0).forEach(function (key) { LocationsShow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LocationsShow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function LocationsShow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LocationsShow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LocationsShow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LocationsShow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LocationsShow_slicedToArray(arr, i) { return LocationsShow_arrayWithHoles(arr) || LocationsShow_iterableToArrayLimit(arr, i) || LocationsShow_unsupportedIterableToArray(arr, i) || LocationsShow_nonIterableRest(); }

function LocationsShow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LocationsShow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LocationsShow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LocationsShow_arrayLikeToArray(o, minLen); }

function LocationsShow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LocationsShow_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LocationsShow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











 // @TODO: move Description into shared ?

var _D = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___D",
  componentId: "sc-j8biii-0"
})([""]);

var Description = function Description(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === void 0 ? {} : _ref$item;

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

var _Handle = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___Handle",
  componentId: "sc-j8biii-1"
})(["position:fixed;top:5px;left:", ";display:flex;flex-direction:column;align-items:center;width:30px;height:95%;"], function (p) {
  return p.foldedLeft ? '10px' : p.foldedRight ? '98%' : "calc(".concat(p.twofoldPercent * 100, "% - 0.5ex)");
});

var Handle = function Handle(props) {
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

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      folded = _useContext.folded,
      setFolded = _useContext.setFolded,
      twofoldPercent = _useContext.twofoldPercent,
      setTwofoldPercent = _useContext.setTwofoldPercent;

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
  };

  var foldedLeft = folded === shared.C.foldedLeft;
  var foldedRight = folded === shared.C.foldedRight; // draggable="true"

  return /*#__PURE__*/external_react_default().createElement(_Handle, {
    className: "Handle",
    foldedLeft: foldedLeft,
    foldedRight: foldedRight,
    twofoldPercent: twofoldPercent,
    onMouseMove: onMouseMove,
    onMouseDown: onMouseDown,
    onMouseLeave: onMouseUp,
    onMouseUp: onMouseUp,
    style: {
      pointer: 'cursor'
    }
  }, /*#__PURE__*/external_react_default().createElement(shared/* ChevronLeft */.s$, {
    onClick: foldLeft
  }), /*#__PURE__*/external_react_default().createElement(shared/* ChevronRight */._Q, {
    onClick: foldRight
  }), [shared.C.foldedRight, shared.C.foldedLeft].indexOf(folded) !== -1 && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* LongLine */.LW, {
    orientation: shared.C.vertical
  }));
};

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
})(["background:", ";flex:", ";overflow:hidden;display:flex;flex-direction:column;height:calc(100vh - ", " - ", ");"], function (p) {
  return p.theme.colors.background;
}, function (p) {
  return p.foldedRight ? '99%' : "".concat(p.twofoldPercent * 100, "%");
}, function (p) {
  return "calc(2*".concat(p.theme.borderWidth, ")");
}, function (p) {
  return p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight;
});

var Left = function Left(_ref2) {
  var children = _ref2.children,
      props = LocationsShow_objectWithoutProperties(_ref2, LocationsShow_excluded);

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

var _Right = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow___Right",
  componentId: "sc-j8biii-3"
})(["background:", ";position:relative;padding:0 0 0 1em;flex:", ";overflow-x:hidden;height:calc(100vh - ", " - ", ");"], function (p) {
  return p.theme.colors.background;
}, function (p) {
  return p.foldedRight ? '2%' : "".concat((1 - p.twofoldPercent) * 100, "%");
}, function (p) {
  return "calc(2*".concat(p.theme.borderWidth, ")");
}, function (p) {
  return p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight;
});

var Right = function Right(_ref3) {
  var children = _ref3.children,
      props = LocationsShow_objectWithoutProperties(_ref3, LocationsShow_excluded2);

  var _useContext4 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext4.bottomDrawerOpen,
      folded = _useContext4.folded,
      foldedLeft = _useContext4.foldedLeft,
      foldedRight = _useContext4.foldedRight,
      twofoldPercent = _useContext4.twofoldPercent;

  return /*#__PURE__*/external_react_default().createElement(_Right, {
    className: "Right",
    bottomDrawerOpen: bottomDrawerOpen,
    foldedRight: foldedRight,
    twofoldPercent: twofoldPercent
  }, /*#__PURE__*/external_react_default().createElement(Handle, null), children);
};

var Row = external_styled_components_default().div.withConfig({
  displayName: "LocationsShow__Row",
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
      currentUser = _useContext5.currentUser;

  var _useContext6 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext6.bottomDrawerOpen,
      editorMode = _useContext6.editorMode,
      folded = _useContext6.folded,
      setFolded = _useContext6.setFolded,
      foldedLeft = _useContext6.foldedLeft,
      foldedRight = _useContext6.foldedRight,
      itemToUnlock = _useContext6.itemToUnlock,
      setItemToUnlock = _useContext6.setItemToUnlock,
      mapPanelWidth = _useContext6.mapPanelWidth,
      setMapPanelWidth = _useContext6.setMapPanelWidth,
      mapPanelHeight = _useContext6.mapPanelHeight,
      setMapPanelHeight = _useContext6.setMapPanelHeight,
      ratedConfirmation = _useContext6.ratedConfirmation,
      setRatedConfirmation = _useContext6.setRatedConfirmation,
      showUrl = _useContext6.showUrl,
      setShowUrl = _useContext6.setShowUrl,
      twofoldPercent = _useContext6.twofoldPercent;

  (0,shared/* logg */.IJ)((0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd), 'LocationsShowUsedTwofoldContext'); // const api = useApi()

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
        item_type: 'Location'
      }, location));
    }
  }, [location]); // Set mapPanel sizes

  (0,external_react_.useEffect)(function () {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth);
      setMapPanelHeight(mapPanelRef.current.offsetHeight);
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight]);
  return /*#__PURE__*/external_react_default().createElement(Row, null, /*#__PURE__*/external_react_default().createElement(locations_LocationProvider, location, /*#__PURE__*/external_react_default().createElement(Left, null, /*#__PURE__*/external_react_default().createElement(application/* Breadcrumbs */.Oo, location), /*#__PURE__*/external_react_default().createElement(locations_WrappedMapPanel, {
    map: location.map ? location.map : location,
    ref: mapPanelRef,
    slug: match.params.slug
  })), /*#__PURE__*/external_react_default().createElement(Right, null, location.markers.length && /*#__PURE__*/external_react_default().createElement(TwofoldLayout/* Collapsible */.zF, {
    config: {
      collapsible: false
    },
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
  })) || null, location.newsitems.length && /*#__PURE__*/external_react_default().createElement(newsitems/* Newsitems */.bX, {
    newsitems: location.newsitems,
    variant: shared.C.variants.bordered
  }) || null), showUrl && /*#__PURE__*/external_react_default().createElement(IframeModal, {
    src: showUrl
  }), showItem && /*#__PURE__*/external_react_default().createElement(locations_ItemModal, {
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
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./src/components/locations/LocationsShowAsync.jsx
function LocationsShowAsync_slicedToArray(arr, i) { return LocationsShowAsync_arrayWithHoles(arr) || LocationsShowAsync_iterableToArrayLimit(arr, i) || LocationsShowAsync_unsupportedIterableToArray(arr, i) || LocationsShowAsync_nonIterableRest(); }

function LocationsShowAsync_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LocationsShowAsync_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LocationsShowAsync_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LocationsShowAsync_arrayLikeToArray(o, minLen); }

function LocationsShowAsync_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LocationsShowAsync_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LocationsShowAsync_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * LocationsShowAsync
 *
 * useEffect with react-router, delegate to LocationsShow
 *
**/

var LocationsShowAsync = function LocationsShowAsync(props) {
  (0,shared/* logg */.IJ)(props, 'LocationsShowAsync');
  var match = props.match; // @TODO: this is elegantly LocationProvider _vp_ 2022-09-12

  var _useState = (0,external_react_.useState)(),
      _useState2 = LocationsShowAsync_slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = (0,external_react_.useState)(),
      _useState4 = LocationsShowAsync_slicedToArray(_useState3, 2),
      showItem = _useState4[0],
      setShowItem = _useState4[1];

  var api = (0,shared/* useApi */.h_)();
  (0,external_react_.useEffect)(function () {
    var chain = [api.getLocation({
      slug: match.params.slug
    })];

    if (match.params.item_type) {
      var itemType = shared/* inflector.classify */.$z.classify(match.params.item_type);

      switch (itemType) {
        case shared.C.item_types.gallery:
          chain.push(api.getGallery(match.params.item_slug));
          break;

        case shared.C.item_types.report:
          chain.push(api.getReport(match.params.item_slug));
          break;

        default:
          (0,shared/* logg */.IJ)(itemType, 'Cannot get this item type!');
          (0,external_react_toastify_.toast)('Cannot get this item type!');
      }
    }

    Promise.all(chain).then(function (rs) {
      (0,shared/* logg */.IJ)(rs, 'LocationsShowAsync.chainResults');
      setLocation(rs[0]); // @TODO: test-drive this. Clicking from a location-gallery back to location, should un-set the showItem. _vp_ 2022-09-11

      rs[1] ? setShowItem(rs[1]) : setShowItem(null);
    })["catch"](function (err) {// logg(err, "Could not load Location.")
      // toast("Could not load Location.")
    });
  }, [match.params.item_type, match.params.item_slug, match.params.slug]);

  if (!location) {
    return null;
  }

  return /*#__PURE__*/external_react_default().createElement(locations_LocationsShow, {
    location: location,
    match: match,
    showItem: showItem
  });
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
var OBJLoader = __webpack_require__(987011);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/MTLLoader.js
var MTLLoader = __webpack_require__(236023);
;// CONCATENATED MODULE: ./src/components/locations3d/Blocker.jsx
var Blocker_excluded = (/* unused pure expression or super */ null && (["children"]));

function Blocker_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Blocker_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Blocker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json





var _Blocker = external_styled_components_default().div.withConfig({
  displayName: "Blocker___Blocker",
  componentId: "sc-1mqnpns-0"
})(["border:2px solid red;position:relative;width:700px;height:350px;#Crosshair{width:50px;height:50px;position:absolute;left:50%;top:50%;color:white;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;}}"]);

var Blocker_Blocker = function Blocker(_ref) {
  var children = _ref.children,
      props = Blocker_objectWithoutProperties(_ref, Blocker_excluded);

  return /*#__PURE__*/React.createElement(_Blocker, Object.assign({
    className: "Blocker"
  }, props), children);
};

/* harmony default export */ const locations3d_Blocker = (_Blocker);
;// CONCATENATED MODULE: ./src/components/locations3d/Crosshair.jsx


var Crosshair = external_styled_components_default().div.withConfig({
  displayName: "Crosshair",
  componentId: "sc-pqmgvx-0"
})(["width:50px;height:50px;position:absolute;left:50%;top:50%;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 2px 0 0;height:20px;top:-10px;left:-1px;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 2px 0 0;height:20px;top:-10px;left:-1px;}"]);
/* harmony default export */ const locations3d_Crosshair = (Crosshair);
;// CONCATENATED MODULE: ./src/components/locations3d/PointerLockControls.js
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

  return PointerLockControls;
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
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/RotationPad.js



var RotationPad_W0 = external_styled_components_default().div.withConfig({
  displayName: "RotationPad__W0",
  componentId: "sc-15yrgg-0"
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
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/MovementPad.js
var MovementPad_excluded = (/* unused pure expression or super */ null && (["children", "ref"])),
    MovementPad_excluded2 = ["children"],
    MovementPad_excluded3 = ["children"];

function MovementPad_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MovementPad_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MovementPad_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var _Region = external_styled_components_default().div.withConfig({
  displayName: "MovementPad___Region",
  componentId: "sc-12uyjf0-0"
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

var MovementPad_Handle = external_styled_components_default().div.withConfig({
  displayName: "MovementPad___Handle",
  componentId: "sc-12uyjf0-1"
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
  componentId: "sc-12uyjf0-2"
})(["top:20px;right:20px;position:absolute;width:100px;height:100px;border:1px solid cyan;"]);

var Pad = function Pad(_ref3) {
  var children = _ref3.children,
      props = MovementPad_objectWithoutProperties(_ref3, MovementPad_excluded3);

  return /*#__PURE__*/external_react_default().createElement(_Pad, Object.assign({
    className: "MovementPad"
  }, props), children);
};
/**
 * MovementPad
 * _vp_ 2022-09-02
**/


var MovementPad = function MovementPad(props) {
  (0,shared/* logg */.IJ)(props, 'MovementPad');
  var container = props.container;
  var mouseDown = false;
  var mouseStopped = false;
  var mouseStopTimeout, eventRepeatTimeout;
  var newLeft, newTop, distance, angle;
  var regionData = {};
  var regionRef = (0,external_react_.useRef)(null);
  var handleData = {};

  if (regionRef.current) {
    (0,shared/* logg */.IJ)(regionRef.current, 'setting regionData');
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

    (0,shared/* logg */.IJ)(regionData, 'set RegionData1');
  }

  var onMouseDown = function onMouseDown(e) {
    (0,shared/* logg */.IJ)(e, 'mouseDown'); // mouseDown = true;
    // handle.css("opacity", "1.0");
    // update(event.pageX, event.pageY);
  };

  var onMouseUp = function onMouseUp(e) {// mouseDown = false;
    // resetHandlePosition();
  };

  var onMouseMove = function onMouseMove(e) {// if (!mouseDown) return;
    // update(event.pageX, event.pageY);
  };

  var onTouchEnd = function onTouchEnd(e) {// and touchcancel
    // mouseDown = false;
    // resetHandlePosition();
  };

  var onTouchMove = function onTouchMove(e) {// if (!mouseDown) return;
    // update(event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY);
  };

  var onTouchStart = function onTouchStart(e) {
    e.persist();
    (0,shared/* logg */.IJ)([e.targetTouches[0].pageX, e.targetTouches[0].pageY], 'onTouchStart');
    mouseDown = true; // handle.css("opacity", "1.0")

    update(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
  };

  var update = function update(pageX, pageY) {
    // logg(regionData, 'regionData')
    newLeft = pageX - regionData.x;
    newTop = pageY - regionData.y;
    (0,shared/* logg */.IJ)([newLeft, newTop], 'update'); // // If handle reaches the pad boundaries.
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
    // Providing event and data for handling camera movement.

    var deltaX = regionData.centerX - parseInt(newLeft);
    var deltaY = regionData.centerY - parseInt(newTop); // Normalize x,y between -2 to 2 range.

    deltaX = -2 + (2 + 2) * (deltaX - -regionData.radius) / (regionData.radius - -regionData.radius);
    deltaY = -2 + (2 + 2) * (deltaY - -regionData.radius) / (regionData.radius - -regionData.radius);
    deltaX = Math.round(deltaX * 10) / 10;
    deltaY = Math.round(deltaY * 10) / 10; // console.log(deltaX, deltaY);

    sendEvent(deltaX, deltaY, 0);
  };

  function sendEvent(dx, dy, middle) {
    (0,shared/* logg */.IJ)([dx, dy, middle, mouseDown], 'sendEvent');

    if (!mouseDown) {
      clearTimeout(eventRepeatTimeout);
      var stopEvent = $.Event("stopMove", {
        bubbles: false
      });
      $(self).trigger(stopEvent);
      return;
    }

    clearTimeout(eventRepeatTimeout);
    eventRepeatTimeout = setTimeout(function () {
      sendEvent(dx, dy, middle);
    }, 5 * 1000);
    var moveEvent = new CustomEvent("move", {
      detail: {
        "deltaX": dx,
        "deltaY": dy,
        "middle": middle
      },
      bubbles: false
    }); // regionRef.current.dispatchEvent(moveEvent)

    document.dispatchEvent(moveEvent);
  } // const resetHandlePosition = () => {
  //   // handle.animate({
  //   //   top: this.regionData.centerY - this.handleData.radius,
  //   //   left: this.regionData.centerX - this.handleData.radius,
  //   //   opacity: 0.1
  //   // }, "fast");
  // }
  // resetHandlePosition()


  return /*#__PURE__*/external_react_default().createElement(Pad, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "Region",
    style: {
      width: '100px',
      height: '100px',
      background: 'rgba(255,0,0,.5)'
    },
    onTouchStart: onTouchStart,
    ref: regionRef
  }, /*#__PURE__*/external_react_default().createElement(vendor_MovementPad_Handle, null)));
};

/* harmony default export */ const vendor_MovementPad = (MovementPad);
;// CONCATENATED MODULE: ./src/components/locations3d/vendor/TouchControls.js
function TouchControls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TouchControls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TouchControls_ownKeys(Object(source), !0).forEach(function (key) { TouchControls_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TouchControls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function TouchControls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TouchControls_W0 = external_styled_components_default().div.withConfig({
  displayName: "TouchControls__W0",
  componentId: "sc-p1p5f5-0"
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
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js
var GLTFLoader = __webpack_require__(901217);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/math/Octree.js
var Octree = __webpack_require__(835344);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelDesktop.jsx







 // @TODO: make its own component. _vp_ 2022-08-13

var ThreePanelDesktop_Blocker = external_styled_components_default().div.withConfig({
  displayName: "ThreePanelDesktop__Blocker",
  componentId: "sc-jke4gv-0"
})(["border:2px solid red;position:relative;width:700px;height:350px;#Crosshair{width:50px;height:50px;position:absolute;left:50%;top:50%;color:white;::before{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;transform:rotate(90deg);}::after{content:'';position:absolute;border-color:white;border-style:solid;border-width:0 0.1em 0 0;height:1em;top:0em;left:0.3em;}}"]);
/**
 * ThreePanelDesktop
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 *
 *
 */

var Loc = function Loc(props) {
  // logg(props, 'ThreePanelDesktop')
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
  var loader = new GLTFLoader/* GLTFLoader */.E();
  var worldOctree = new Octree/* Octree */.V();

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
    // moon floor

    texture = external_three_.ImageUtils.loadTexture("/assets/textures/moon-1.jpg");
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
    // const scenesPath = '/assets/scenes/'
    // const objectsPath = '/assets/objects/'
    // const texturesPath = '/assets/textures/'
    // const manager = new THREE.LoadingManager()
    // const mtlLoader = new MTLLoader(manager)
    // mtlLoader.setPath(texturesPath)
    // const onProgress = (xhr) => {
    //   if (xhr.lengthComputable) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }
    // const onError = () => {}

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
  }), /*#__PURE__*/external_react_default().createElement(ThreePanelDesktop_Blocker, {
    ref: blockerRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const ThreePanelDesktop = (Loc);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelMobile.jsx










/**
 * ThreePanelMobile
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-02
 *
 *
 */

var ThreePanelMobile_Loc = function Loc(props) {
  (0,shared/* logg */.IJ)(props, 'ThreePanelMobile');
  var map = props.map;
  var history = (0,external_react_router_dom_.useHistory)();
  var camera,
      controls,
      fpsBody,
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
    document.title = "InfiniteShelter - ThreePanelMobile :: test";
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
  var loader = new GLTFLoader/* GLTFLoader */.E();
  var worldOctree = new Octree/* Octree */.V();

  function init() {
    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    **/
    camera = new external_three_.PerspectiveCamera(75, 2, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0xffffff);
    scene.fog = new external_three_.Fog(0xffffff, 0, 750);
    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light); // Controls

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

    var onMove = function onMove(event) {
      (0,shared/* logg */.IJ)(event, 'onMove');
      var ztouch = Math.abs(event.detail.deltaY);
      var xtouch = Math.abs(event.detail.deltaX);

      if (event.detail.deltaY == event.detail.middle) {
        ztouch = 1;
        moveForward = moveBackward = false;
      } else {
        if (event.detail.deltaY > event.detail.middle) {
          moveForward = true;
          moveBackward = false;
        } else if (event.detail.deltaY < event.detail.middle) {
          moveForward = false;
          moveBackward = true;
        }
      }

      if (event.detail.deltaX == event.detail.middle) {
        xtouch = 1;
        moveRight = moveLeft = false;
      } else {
        if (event.detail.deltaX < event.detail.middle) {
          moveRight = true;
          moveLeft = false;
        } else if (event.detail.deltaX > event.detail.middle) {
          moveRight = false;
          moveLeft = true;
        }
      }
    };

    document.addEventListener('move', onMove);
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
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
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    var time = performance.now();

    if ((controls === null || controls === void 0 ? void 0 : controls.isLocked) === true) {
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
    } // onMove


    if (true) {
      var _delta = (time - prevTime) / 1000;

      velocity.x -= velocity.x * 10.0 * _delta;
      velocity.z -= velocity.z * 10.0 * _delta;
      velocity.y -= 9.8 * 100.0 * _delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * _delta;
      if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * _delta;
    }

    camera.translateX(velocity.x); // camera.translateY(velocity.y);
    // camera.translateZ(velocity.z);
    // camera.translateX(velocity.x);
    // camera.translateY(velocity.y);
    // camera.translateZ(velocity.z);

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

/* harmony default export */ const ThreePanelMobile = (ThreePanelMobile_Loc); // /**
//  * What is blocker? the entire canvas?
//  *
//  * @TODO: make its own component. _vp_ 2022-08-13
// **/
// const Blocker = styled.div`
//   border: 2px solid red;
//   position: relative;
//   width: 700px;
//   height: 350px;
//   #Crosshair {
//     // border: 1px solid yellow;
//     width: 50px;
//     height: 50px;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     color: white;
//     ::before {
//       content: '';
//       position: absolute;
//       border-color: white;
//       border-style: solid;
//       border-width: 0 0.1em 0 0;
//       height: 1em;
//       top: 0em;
//       left: 0.3em;
//       // margin-top: -1em;
//       transform: rotate(90deg);
//       // width: 0.5em;
//     }
//     ::after {
//       content: '';
//       position: absolute;
//       border-color: white;
//       border-style: solid;
//       border-width: 0 0.1em 0 0;
//       height: 1em;
//       top: 0em;
//       left: 0.3em;
//       // margin-top: -1em;
//       // width: 0.5em;
//     }
//   }
// `;
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
  (0,shared/* logg */.IJ)(props, 'ThreePanelV1');
  var camera,
      controls,
      object,
      objects = [],
      raycaster,
      renderer,
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
    /*
    // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
    // fov — Camera frustum vertical field of view.
    // aspect — Camera frustum aspect ratio.
    // near — Camera frustum near plane.
    // far — Camera frustum far plane.
    */
    // camera = new THREE.PerspectiveCamera( 75, 2, 1, 100 )
    camera = new external_three_.PerspectiveCamera(75, 2, 1, 300);
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
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10); // floor
    // @TODO: it's not aligned to parcels the way I want

    var floorGeometry = new external_three_.PlaneGeometry(460, 680, 100, 100);
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

    floorGeometry.setAttribute('color', new external_three_.Float32BufferAttribute(colorsFloor, 3));
    var floorMaterial = new external_three_.MeshBasicMaterial({
      vertexColors: true
    });
    var floor = new external_three_.Mesh(floorGeometry, floorMaterial);
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

    var manager = new external_three_.LoadingManager(loadModel);

    manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
    }; // texture


    var textureLoader = new external_three_.TextureLoader(manager);
    var texture = textureLoader.load('textures/uv_grid_opengl.jpg'); // model
    // tiny-house-1

    var loader = new OBJLoader/* OBJLoader */.L(manager);
    loader.load('/assets/scenes/tiny-house-1/tiny-house-1.obj', function (obj) {
      object = obj;
    }, function (xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
      }
    }, function (e) {
      (0,shared/* logg */.IJ)(e, 'onError');
    }); // some delimiters for the first 6 parcels!

    var geometry = new external_three_.BoxGeometry(10, 10, 10);
    var material = new external_three_.MeshBasicMaterial({
      color: 0x00ff00
    });
    var cube = new external_three_.Mesh(geometry, material);
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
      (0,shared/* logg */.IJ)(item, 'item');
      var color = item.color,
          x = item.x,
          y = item.y,
          z = item.z;
      geometry = new external_three_.BoxGeometry(1 + x * 10, 1 + y * 10, 1 + z * 10);
      material = new external_three_.MeshBasicMaterial({
        color: color
      });
      cube = new external_three_.Mesh(geometry, material);
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
      var g = new external_three_.BoxGeometry(200, 2, 200);
      var m = new external_three_.MeshBasicMaterial({
        color: color
      });
      var p = new external_three_.Mesh(g, m);
      p.position.x = x;
      p.position.y = y;
      p.position.z = z;
      scene.add(p);
    }); //

    renderer = new external_three_.WebGLRenderer({
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

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(ThreePanelV1_Blocker, {
    ref: blockerRef
  }));
};

/* harmony default export */ const ThreePanelV1 = (ThreePanelV1_Loc);
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
    var modelName = 'polycity'; // 'wasyaco-reception' // 'tiny-house-2'

    var modelName2 = 'girl';
    var texturePath = "".concat(modelName, "/").concat(modelName, ".mtl");
    var modelPath = "".concat(modelName, "/").concat(modelName, ".obj");
    var modelPath2 = "".concat(modelName2, "/").concat(modelName2, ".obj");
    var manager = new external_three_.LoadingManager();

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
      var objLoader = new OBJLoader/* OBJLoader */.L(manager);
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
        (0,shared/* logg */.IJ)(object, '1st object');
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
      var objLoader = new OBJLoader/* OBJLoader */.L(manager); // objLoader.setMaterials( materials )

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
        (0,shared/* logg */.IJ)(object, '2st object');
        scene.add(object);
        markerObjects.push(object);
        markerObjectsIdxs.push({
          uuid: object.uuid,
          name: 'girl',
          slug: 'demmitv'
        });
      }, onProgress, onError);
    };

    var mtlLoader = new MTLLoader/* MTLLoader */.v(manager); // mtlLoader.setBaseUrl(scenesPath)

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

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(ThreePanelV2_Blocker, Object.assign({}, shared.S, {
    ref: blockerRef
  }), /*#__PURE__*/external_react_default().createElement("div", {
    id: "Crosshair"
  })));
};

/* harmony default export */ const ThreePanelV2 = (ThreePanelV2_Loc);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js
var stats_module = __webpack_require__(915079);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/math/Capsule.js
var Capsule = __webpack_require__(942936);
;// CONCATENATED MODULE: ./src/components/locations3d/ThreePanelV3.jsx
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ThreePanelV3_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
  var history = (0,external_react_router_dom_.useHistory)();

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
  var blockerRef = (0,external_react_.useRef)(null);
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
    camera = new external_three_.PerspectiveCamera(75, aspect, 1, 1000); // fov, aspect, near, far

    camera.position.y = 10;
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0xffffff); // scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    var light = new external_three_.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    plc = new PointerLockControls_PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      plc.lock();
    });
    plc.addEventListener('lock', function () {
      (0,shared/* logg */.IJ)('event #lock'); // instructions.style.display = 'none'
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
    raycaster = new external_three_.Raycaster(new external_three_.Vector3(), new external_three_.Vector3(0, -1, 0), 0, 10);
    /*
     * Floor
     */
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
    var manager = new external_three_.LoadingManager();
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

    var mtlLoader = new MTLLoader/* MTLLoader */.v(manager);
    mtlLoader.setPath(objectsPath);
    importModels.map(function (_ref) {
      var modelName = _ref.modelName,
          slug = _ref.slug;
      var texturePath = "".concat(modelName, "/").concat(modelName, ".mtl");
      var modelPath = "".concat(modelName, "/").concat(modelName, ".obj");

      var wrappedOnLoad = function wrappedOnLoad(modelPath) {
        return function (materials) {
          materials.preload();
          var objLoader = new OBJLoader/* OBJLoader */.L(manager);
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

    var loader = new external_three_.TextureLoader();
    texture = loader.load("/assets/textures/space-5.jpg", function () {
      var rt = new external_three_.WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(renderer, texture);
      scene.background = rt.texture;
    });
  }

  var GRAVITY = 30;
  var NUM_SPHERES = 100;
  var SPHERE_RADIUS = 0.2;
  var STEPS_PER_FRAME = 5;
  var sphereGeometry = new external_three_.IcosahedronGeometry(SPHERE_RADIUS, 5);
  var sphereMaterial = new external_three_.MeshLambertMaterial({
    color: 0xbbbb44
  });
  var spheres = [];
  var sphereIdx = 0;
  var worldOctree = new Octree/* Octree */.V();
  var playerCollider = new Capsule/* Capsule */.s(new external_three_.Vector3(0, 0.35, 0), new external_three_.Vector3(0, 1, 0), 0.35);
  var playerVelocity = new external_three_.Vector3();
  var playerDirection = new external_three_.Vector3();
  var playerOnFloor = false;
  var mouseTime = 0;
  var keyStates = {};
  var vector1 = new external_three_.Vector3();
  var vector2 = new external_three_.Vector3();
  var vector3 = new external_three_.Vector3();

  var init = function init() {
    clock = new external_three_.Clock();
    scene = new external_three_.Scene();
    scene.background = new external_three_.Color(0x88ccee);
    scene.fog = new external_three_.Fog(0x88ccee, 0, 50);
    camera = new external_three_.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.rotation.order = 'YXZ';
    fillLight1 = new external_three_.HemisphereLight(0x4488bb, 0x002244, 0.5);
    fillLight1.position.set(2, 1, 1);
    scene.add(fillLight1);
    directionalLight = new external_three_.DirectionalLight(0xffffff, 0.8);
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
      var sphere = new external_three_.Mesh(sphereGeometry, sphereMaterial);
      sphere.castShadow = true;
      sphere.receiveShadow = true;
      scene.add(sphere);
      spheres.push({
        mesh: sphere,
        collider: new external_three_.Sphere(new external_three_.Vector3(0, -100, 0), SPHERE_RADIUS),
        velocity: new external_three_.Vector3()
      });
    }
    /*
     * controls
    **/


    plc = new PointerLockControls_PointerLockControls(camera, document.body);
    blockerRef.current.addEventListener('click', function () {
      plc.lock();
    });
    plc.addEventListener('lock', function () {
      (0,shared/* logg */.IJ)('event #lock'); // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    });
    plc.addEventListener('unlock', function () {// blocker.style.display = 'block'
      // instructions.style.display = ''
    });
    scene.add(plc.getObject());
    /*
     * Render
    **/

    renderer = new external_three_.WebGLRenderer({
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(blockerRef.current.clientWidth, blockerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = external_three_.VSMShadowMap;
    renderer.outputEncoding = external_three_.sRGBEncoding;
    renderer.toneMapping = external_three_.ACESFilmicToneMapping;
    blockerRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize);
    /*
     * GLFT Loader
    **/

    var loader = new GLTFLoader/* GLTFLoader */.E().setPath('./assets/objects/gltf/');
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

    var _iterator = _createForOfIteratorHelper(spheres),
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

  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    ref: instructionsRef
  }), /*#__PURE__*/external_react_default().createElement(ThreePanelV3_Blocker, {
    ref: blockerRef
  }, /*#__PURE__*/external_react_default().createElement(locations3d_Crosshair, null)));
};

/* harmony default export */ const ThreePanelV3 = (Location);
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
    var mtlLoader = new MTLLoader/* MTLLoader */.v(manager);
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
          var objLoader = new OBJLoader/* OBJLoader */.L(manager);
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
function LocationsShowMobile3d_slicedToArray(arr, i) { return LocationsShowMobile3d_arrayWithHoles(arr) || LocationsShowMobile3d_iterableToArrayLimit(arr, i) || LocationsShowMobile3d_unsupportedIterableToArray(arr, i) || LocationsShowMobile3d_nonIterableRest(); }

function LocationsShowMobile3d_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function LocationsShowMobile3d_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LocationsShowMobile3d_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LocationsShowMobile3d_arrayLikeToArray(o, minLen); }

function LocationsShowMobile3d_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function LocationsShowMobile3d_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function LocationsShowMobile3d_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var _Description = external_styled_components_default().div.withConfig({
  displayName: "LocationsShowMobile3d___Description",
  componentId: "sc-1mparkt-0"
})(["padding:10px;"]);

var LocationsShowMobile3d_Description = function Description(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/React.createElement(_Description, {
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  });
};

var LocationsShowMobile3d_W = external_styled_components_default().div.withConfig({
  displayName: "LocationsShowMobile3d__W",
  componentId: "sc-1mparkt-1"
})([""]);
/**
 * LocationsShowMobile3d
 * Simplified, full-screen, cannot scroll outside canvas
 * _vp_ 2022-09-02
 *
 */

var LocationsShowMobile3d = function LocationsShowMobile3d(props) {
  (0,shared/* logg */.IJ)(props, 'LocationsShowMobile3d');
  var match = props.match;

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      bottomDrawerOpen = _useContext.bottomDrawerOpen,
      folded = _useContext.folded,
      setFolded = _useContext.setFolded,
      location = _useContext.location,
      setLocation = _useContext.setLocation,
      mapPanelWidth = _useContext.mapPanelWidth,
      setMapPanelWidth = _useContext.setMapPanelWidth,
      mapPanelHeight = _useContext.mapPanelHeight,
      setMapPanelHeight = _useContext.setMapPanelHeight,
      showItem = _useContext.showItem,
      setShowItem = _useContext.setShowItem,
      showUrl = _useContext.showUrl,
      setShowUrl = _useContext.setShowUrl,
      twofoldPercent = _useContext.twofoldPercent;

  var _useWindowSize = (0,shared/* useWindowSize */.iP)(),
      _useWindowSize2 = LocationsShowMobile3d_slicedToArray(_useWindowSize, 2),
      windowWidth = _useWindowSize2[0],
      windowHeight = _useWindowSize2[1];

  var _useState = (0,external_react_.useState)(false),
      _useState2 = LocationsShowMobile3d_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var api = (0,shared/* useApi */.h_)();
  var mountedRef = (0,external_react_.useRef)('init');
  var mapPanelRef = (0,external_react_.useRef)(null);
  var history = (0,external_react_router_dom_.useHistory)(); // Get the location data

  (0,external_react_.useEffect)(function () {
    setLoading(true);
    var token = localStorage.getItem("jwt_token");
    shared/* request.get */.WY.get("/api/maps/view/".concat(match.params.slug), {
      params: {
        jwt_token: token
      }
    }).then(function (res) {
      if (mountedRef.current === match.params.slug) return null;

      if (!res.data.map) {
        setLoading(false);
        showToast('could not get Location');
        return null;
      }

      setLocation(res.data.map);
      setLoading(false);
    })["catch"](function (e) {
      (0,shared/* logg */.IJ)(e, 'e13');
      history.push('/');
    })["finally"](function () {});
    return function () {
      mountedRef.current = match.params.slug;
    };
  }, [match.params.slug]); // set mapPanel sizes

  (0,external_react_.useEffect)(function () {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth);
      setMapPanelHeight(mapPanelRef.current.offsetHeight);
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight]);
  return /*#__PURE__*/external_react_default().createElement(LocationsShowMobile3d_W, {
    className: "LocationsShowMobile3d"
  }, location && /*#__PURE__*/external_react_default().createElement(ThreePanelMobile, {
    map: location.map || location,
    ref: mapPanelRef,
    slug: match.params.slug
  }), loading && /*#__PURE__*/external_react_default().createElement(shared/* Loading */.gb, null));
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
})(["border:", ";border-radius:", ";background:", ";height:100%;display:flex;align-items:center;justify-content:center;position:relative;"], function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.background;
});
var W1 = external_styled_components_default().div.withConfig({
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
      setZoom = _useContext.setZoom;

  (0,shared/* logg */.IJ)((0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd), 'MapPanelUsedContext');

  var _useContext2 = (0,external_react_.useContext)(markers_MarkerContext),
      markerModalOpen = _useContext2.markerModalOpen,
      setMarkerModalOpen = _useContext2.setMarkerModalOpen;

  var _useContext3 = (0,external_react_.useContext)(shared/* NavigationContext */.kH),
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
  }, "+ Marker")), /*#__PURE__*/external_react_default().createElement(W1, {
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







/* W */

var WrappedMapPanel_W0 = external_styled_components_default().div.withConfig({
  displayName: "WrappedMapPanel__W0",
  componentId: "sc-ahks14-0"
})(["overflow:hidden;flex-grow:1;"]);
/**
 * Renders either MapPanel (W0 really, a simple wrapper), MapPanel, or ThreePanelV1
 * or some other MapPanel.
 *
**/

var WrappedMapPanel = /*#__PURE__*/external_react_default().forwardRef(function (props, ref) {
  (0,shared/* logg */.IJ)(props, 'WrappedMapPanel'); // const { map } = props

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
      switch (props.slug) {
        // legacy, remove all three: _vp_ 2022-08-13
        case 'threev1':
          return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(ThreePanelV1, props));

        case 'threev2':
          return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(ThreePanelV2, props));

        case 'threev3':
          return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(ThreePanelV3, props));

        default:
          return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(ThreePanelDesktop, props));
      }

    case shared.C.map_panel_types.TabiversePlanet:
      // markers are objects
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(locations3d_TabiversePlanet, props));

    case shared.C.map_panel_types.ThreePanelV4:
      // markers are objects
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(locations3d_ThreePanelV4, props));

    case shared.C.map_panel_types.GoogleMaps:
      return /*#__PURE__*/external_react_default().createElement(WrappedMapPanel_W0, null, /*#__PURE__*/external_react_default().createElement(GoogleMaps, props));

    default:
      (0,shared/* logg */.IJ)(null, "This map_panel_type is not implemented! ".concat(props.map.config.map_panel_type));
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

/***/ 608045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BU": () => (/* binding */ GenericNewsitem),
  "S5": () => (/* reexport */ newsitems_ItemIcon),
  "YT": () => (/* reexport */ newsitems_NewsitemContainer),
  "bX": () => (/* reexport */ newsitems_Newsitems)
});

// UNUSED EXPORTS: ICONS, NewsitemGallery, NewsitemPhoto, NewsitemReport

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(616689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(857518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/shared/index.jsx + 8 modules
var shared = __webpack_require__(865432);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/locations/index.jsx + 29 modules
var locations = __webpack_require__(33117);
// EXTERNAL MODULE: ./src/AppRouter.jsx + 6 modules
var AppRouter = __webpack_require__(524495);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemGallery.jsx
var _excluded = ["children", "src"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









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
      props = _objectWithoutProperties(_ref, _excluded);

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

  var _useContext = (0,external_react_.useContext)(locations/* LocationContext */.LZ),
      location_slug = _useContext.slug;

  var _useContext2 = (0,external_react_.useContext)(shared/* NavigationContext */.kH),
      useHistory = _useContext2.useHistory;

  var history = useHistory();
  var href = AppRouter/* appPaths.viewGallery */.X.viewGallery({
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
// EXTERNAL MODULE: ./src/components/application/index.js + 8 modules
var application = __webpack_require__(660179);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemPhoto.jsx







var ImageLarge = external_styled_components_default().img.withConfig({
  displayName: "NewsitemPhoto__ImageLarge",
  componentId: "sc-2jnpzp-0"
})(["max-width:100%;"]);
var W = external_styled_components_default().div.withConfig({
  displayName: "NewsitemPhoto__W",
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
  }, /*#__PURE__*/external_react_default().createElement(W, null, item.photos[0] && /*#__PURE__*/external_react_default().createElement(ImageLarge, {
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
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemReport.jsx









var NewsitemReport = function NewsitemReport(props) {
  // logg(props, "NewsitemReport");
  var item = props.item,
      variant = props.variant;
  return /*#__PURE__*/external_react_default().createElement(newsitems_NewsitemContainer, {
    item: item,
    variant: variant
  });
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
    src: "https://www.youtube.com/embed/".concat(item.youtube_id),
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
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
;// CONCATENATED MODULE: ./src/components/newsitems/Newsitems.jsx
var Newsitems_excluded = ["children"];

function Newsitems_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Newsitems_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Newsitems_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
};
var W0 = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__W0",
  componentId: "sc-16s1m55-0"
})([""]);
var W1 = external_styled_components_default().div.withConfig({
  displayName: "Newsitems__W1",
  componentId: "sc-16s1m55-1"
})(["position:relative;"]);

var _EditModeActions = external_styled_components_default().div.withConfig({
  displayName: "Newsitems___EditModeActions",
  componentId: "sc-16s1m55-2"
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

  return /*#__PURE__*/external_react_default().createElement(W0, {
    className: "Newsitems",
    variant: variant
  }, newsitems.map(function (newsitem, idx) {
    var premium_tier = newsitem.premium_tier || 0;
    var icon = ICONS[premium_tier];
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

    return /*#__PURE__*/external_react_default().createElement(W1, {
      key: idx,
      className: "premium-".concat(premium_tier)
    }, /*#__PURE__*/external_react_default().createElement(EditModeActions, {
      item: newsitem
    }), item);
  }));
};

Newsitems.propTypes = {
  newsitems: (external_prop_types_default()).array.isRequired,
  variant: (external_prop_types_default()).string
};
/* harmony default export */ const newsitems_Newsitems = (Newsitems);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
;// CONCATENATED MODULE: ./src/components/Votable/Votable.jsx
var Votable_excluded = ["fill"],
    _excluded2 = ["fill"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Votable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Votable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Votable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







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
  componentId: "sc-19mp3xk-0"
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
  componentId: "sc-19mp3xk-1"
})(["cursor:pointer;"]);
var WCount = external_styled_components_default().div.withConfig({
  displayName: "Votable__WCount",
  componentId: "sc-19mp3xk-2"
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
      _useState2 = _slicedToArray(_useState, 2),
      votesScore = _useState2[0],
      setVotesScore = _useState2[1];

  var _useState3 = (0,external_react_.useState)("#cecece"),
      _useState4 = _slicedToArray(_useState3, 2),
      upFill = _useState4[0],
      setUpFill = _useState4[1];

  var _useState5 = (0,external_react_.useState)("#cecece"),
      _useState6 = _slicedToArray(_useState5, 2),
      downFill = _useState6[0],
      setDownFill = _useState6[1];

  var _useState7 = (0,external_react_.useState)(item.current_user_vote_value),
      _useState8 = _slicedToArray(_useState7, 2),
      currentUserVoteValue = _useState8[0],
      setCurrentUserVoteValue = _useState8[1];

  (0,external_react_.useEffect)(function () {
    // logg(currentUserVoteValue, 'currentUserVoteValue')
    // logg(C.vote_values.up, 'one?')
    // logg(C.vote_values.down, 'two?')
    // logg(currentUserVoteValue === C.vote_values.up, 'three?')
    // logg(currentUserVoteValue === C.vote_values.down, 'four?')
    if (currentUserVoteValue === shared.C.vote_values.up) {
      setUpFill('#cc3333');
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

  return /*#__PURE__*/external_react_default().createElement(dist/* FlexCol */.Ht, null, /*#__PURE__*/external_react_default().createElement(IconUp, {
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

Votable.propTypes = {};
/* harmony default export */ const Votable_Votable = (Votable);
;// CONCATENATED MODULE: ./src/components/Votable/index.jsx

/* harmony default export */ const components_Votable = (Votable_Votable);
;// CONCATENATED MODULE: ./src/components/newsitems/NewsitemContainer.jsx
var NewsitemContainer_excluded = ["children"],
    NewsitemContainer_excluded2 = ["children"];

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
var Title = external_styled_components_default().a.withConfig({
  displayName: "NewsitemContainer__Title",
  componentId: "sc-11t8rkk-3"
})(["margin-top:0;margin-bottom:0;color:", ";cursor:pointer;font-size:2em;"], function (p) {
  return p.theme.colors.text;
}); // @TODO: better management of variant, for ParagonAustin and such _vp_ 2022-09-12

var NewsitemContainer_W0 = function W0(props) {
  // logg(props, 'W0')
  var children = props.children,
      variant = props.variant;

  switch (variant) {
    case shared.C.variants.bordered:
      return /*#__PURE__*/external_react_default().createElement(shared/* WidgetContainer */.Hl, Object.assign({}, props, {
        cursor: "pointer"
      }), children);

    default:
      return /*#__PURE__*/external_react_default().createElement(shared/* Card */.Zb, Object.assign({
        boxShadow: 2
      }, props, {
        cursor: "pointer"
      }));
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


var NewsitemContainer = function NewsitemContainer(_ref2) {
  var children = _ref2.children,
      props = NewsitemContainer_objectWithoutProperties(_ref2, NewsitemContainer_excluded2);

  // logg(props, 'NewsitemContainer')
  var className = props.className,
      item = props.item,
      variant = props.variant;
  var item_type = item.item_type,
      slug = item.slug;

  var _useContext = (0,external_react_.useContext)(locations/* LocationContext */.LZ),
      location = _useContext.location;

  var _useContext2 = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      itemToUnlock = _useContext2.itemToUnlock,
      setItemToUnlock = _useContext2.setItemToUnlock,
      layout = _useContext2.layout,
      showItem = _useContext2.showItem,
      setShowItem = _useContext2.setShowItem; // logg(useContext(TwofoldContext), 'NewsitemContainerUsedContext')


  var history = (0,external_react_router_dom_.useHistory)(); // @TODO: move this elsewhere - make generic, remember there are two routers, internal and external. _vp_ 2022-09-12
  // move this to internal router?
  // @TODO: for Photo, navigateToItem can show full-screen pic. _vp_ 2022-04-17

  var href = AppRouter/* appPaths.viewItem */.X.viewItem({
    location: location,
    item: item
  });

  var navigateToItem = function navigateToItem() {
    if (item.is_premium && !item.is_purchased) {
      setItemToUnlock(item);
    } else {
      history.push(href);
    }
  };

  if (item.item_type === shared.C.item_types.photo) {
    return /*#__PURE__*/external_react_default().createElement(NewsitemContainer_W0, {
      className: className,
      variant: variant
    }, /*#__PURE__*/external_react_default().createElement(Col, null, /*#__PURE__*/external_react_default().createElement(Title, null, item.name), /*#__PURE__*/external_react_default().createElement(application/* Metaline */._I, item)), children);
  } else {
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
    }, /*#__PURE__*/external_react_default().createElement(RowInline, null, /*#__PURE__*/external_react_default().createElement(newsitems_ItemIcon, item), /*#__PURE__*/external_react_default().createElement(Title, {
      href: href,
      onClick: navigateToItem
    }, item.name)), /*#__PURE__*/external_react_default().createElement(application/* Metaline */._I, item))), item.subhead && item.subhead.length && /*#__PURE__*/external_react_default().createElement("p", {
      className: "subhead",
      dangerouslySetInnerHTML: {
        __html: item.subhead
      }
    }));
  }
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
    _excluded3 = ["fill", "w", "h"],
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
      props = ItemIcon_objectWithoutProperties(_ref3, _excluded3);

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

    default:
      out.push( /*#__PURE__*/external_react_default().createElement("span", {
        key: "unknown-kind"
      }, "[\xA0?\xA0]"));
  }

  return /*#__PURE__*/external_react_default().createElement(ItemIcon_W0, null, out);
};
ItemIcon.propTypes = {
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
  return /*#__PURE__*/external_react_default().createElement(external_react_.Fragment, null, "generic newsitem", /*#__PURE__*/external_react_default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  }));
};
/* N */






/* I */

var newsitems_ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
};

/* V */

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
var shared = __webpack_require__(865432);
;// CONCATENATED MODULE: ./src/components/reports/ReportsShow.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ReportsShow_W0 = external_styled_components_default().div.withConfig({
  displayName: "ReportsShow__W0",
  componentId: "sc-1gldjyo-0"
})([""]);
/**
 * ReportsShow
**/

var ReportsShow = function ReportsShow(props) {
  // logg(props, "ReportsShow")
  var _useState = (0,external_react_.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  var api = (0,shared/* useApi */.h_)();
  (0,external_react_.useEffect)(function () {
    api.getReport(props.match.params.slug).then(function (data) {
      setItem(data);
    })["catch"](function (err) {
      (0,shared/* logg */.IJ)(err, 'cannot getReport');
    });
  }, []); // @TODO: logged in and no access
  // @TODO: logged in and access

  return /*#__PURE__*/external_react_default().createElement(ReportsShow_W0, null, /*#__PURE__*/external_react_default().createElement("h1", null, item.name), /*#__PURE__*/external_react_default().createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  }));
};

ReportsShow.propTypes = {// none?
}; // @TODO: wrap in login HOC

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(887757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
var shared = __webpack_require__(865432);
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(msg) {
      return regenerator_default().wrap(function _callee$(_context) {
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
    _requestAccount = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
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
    _fetchGreeting = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var provider, contract, data;
      return regenerator_default().wrap(function _callee3$(_context3) {
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
    _getBalance = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var _yield$window$ethereu, _yield$window$ethereu2, account, provider, contract, balance;

      return regenerator_default().wrap(function _callee4$(_context4) {
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
    _setGreeting = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var provider, signer, contract, transaction;
      return regenerator_default().wrap(function _callee5$(_context5) {
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
    _sendCoins = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
      var provider, signer, contract, transation;
      return regenerator_default().wrap(function _callee6$(_context6) {
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
;// CONCATENATED MODULE: ./src/artifacts/contracts/Body.sol/BodyNFT.json
const BodyNFT_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"awardToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_idx","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"ownerTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/components/users/MyAccountWidget.jsx
var _excluded = ["children"];


function MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function MyAccountWidget_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { MyAccountWidget_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function MyAccountWidget_slicedToArray(arr, i) { return MyAccountWidget_arrayWithHoles(arr) || MyAccountWidget_iterableToArrayLimit(arr, i) || MyAccountWidget_unsupportedIterableToArray(arr, i) || MyAccountWidget_nonIterableRest(); }

function MyAccountWidget_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MyAccountWidget_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MyAccountWidget_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MyAccountWidget_arrayLikeToArray(o, minLen); }

function MyAccountWidget_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MyAccountWidget_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MyAccountWidget_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















var FlexRow = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__FlexRow",
  componentId: "sc-1lfqp20-0"
})(["display:flex;flex-wrap:wrap;"]);
/*
 * ropsten, _vp_ 2021-10-26
 * Dana, nude 1 (nude 3)
 */

var bodyAddress = '0x3e1a03a9e1682f4dd95413e0be69e5b7bccaf15d';
var Cell = external_styled_components_default().div.withConfig({
  displayName: "MyAccountWidget__Cell",
  componentId: "sc-1lfqp20-1"
})(["margin-right:", ";"], function (p) {
  return p.theme.smallWidth;
});
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
/**
 * MyAccountWidget
**/

var MyAccountWidget = function MyAccountWidget(props) {
  // logg(props, 'MyAccountWidget')
  var _useContext = (0,external_react_.useContext)(dist/* AuthContext */.Vo),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
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
    _connect = MyAccountWidget_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      return regenerator_default().wrap(function _callee4$(_context4) {
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
    _disconnect = MyAccountWidget_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      return regenerator_default().wrap(function _callee5$(_context5) {
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
    var _ref3 = MyAccountWidget_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
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
      return _ref3.apply(this, arguments);
    };
  }();

  var myBodies = /*#__PURE__*/function () {
    var _ref4 = MyAccountWidget_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var provider, signer, contract, tokensOfOwner, i, result;
      return regenerator_default().wrap(function _callee2$(_context2) {
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
      return _ref4.apply(this, arguments);
    };
  }();

  (0,external_react_.useEffect)(function () {
    MyAccountWidget_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
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
  return /*#__PURE__*/external_react_default().createElement(W0, {
    className: "MyAccountWidget"
  }, (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) && /*#__PURE__*/external_react_default().createElement(Img, {
    src: (currentUser === null || currentUser === void 0 ? void 0 : currentUser.profile_photo_url) || avatar
  }), /*#__PURE__*/external_react_default().createElement(FlexRow, null, currentUser.email && /*#__PURE__*/external_react_default().createElement(CoinManager, null, "[\xA0", typeof currentUser.n_unlocks === 'undefined' ? '?' : currentUser.n_unlocks, " coins\xA0", /*#__PURE__*/external_react_default().createElement((AddCircleOutline_default()), {
    onClick: function onClick() {
      return setPurchaseModalOpen(true);
    }
  }), "\xA0]"), /*#__PURE__*/external_react_default().createElement(dist/* AuthWidget */.BE, null)), /*#__PURE__*/external_react_default().createElement(application/* PurchaseModal */.to, null));
};

MyAccountWidget.propTypes = {// no props
}; // const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;
// export default WrappedMyAccountWidget

/* harmony default export */ const users_MyAccountWidget = (MyAccountWidget); // { active && <W1> [
//   <span>Connected with <b>{account}</b></span>
//   <button onClick={disconnect} >Disconnect</button>
//   <button onClick={myBodies} >myBodies</button> ]</W1> }
// { !active && <W1>
// <span>Not Connected</span>
// <button onClick={connect} >Connect to MetaMask</button>
// </W1> }
;// CONCATENATED MODULE: ./src/components/users/index.jsx


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
    var _ref = users_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var result;
      return regenerator_default().wrap(function _callee$(_context) {
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
    var _ref2 = users_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var result;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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

/***/ 865432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a5": () => (/* binding */ BackBtn),
  "un": () => (/* binding */ Btn),
  "C": () => (/* reexport */ shared_C),
  "Zb": () => (/* binding */ Card),
  "s$": () => (/* binding */ ChevronLeft),
  "_Q": () => (/* binding */ ChevronRight),
  "gb": () => (/* binding */ Loading),
  "Oq": () => (/* binding */ MenuIcon),
  "kH": () => (/* reexport */ NavigationContext),
  "KQ": () => (/* reexport */ shared_NavigationProvider),
  "Xw": () => (/* binding */ PurchasedIcon),
  "S": () => (/* reexport */ shared_S),
  "Ni": () => (/* reexport */ ThemeContext),
  "f6": () => (/* reexport */ shared_ThemeProvider),
  "xP": () => (/* binding */ WBordered),
  "Hl": () => (/* binding */ WidgetContainer),
  "$z": () => (/* binding */ inflector),
  "IJ": () => (/* binding */ logg),
  "KW": () => (/* binding */ pp_date),
  "WY": () => (/* reexport */ request),
  "h_": () => (/* reexport */ Api),
  "iP": () => (/* reexport */ shared_useWindowSize)
});

// UNUSED EXPORTS: FlexRow, Root, SsrContext, SsrProvider, ZoomContext, logg_android, logga

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
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(314661);
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
    Equirectangular: "Equirectangular",
    GoogleMaps: "GoogleMaps",
    MapPanel: "MapPanel",
    MapPanelNoZoom: "MapPanelNoZoom",
    TabiversePlanet: "TabiversePlanet",
    ThreePanelV1: "ThreePanelV1",
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
// EXTERNAL MODULE: ./src/components/TwofoldLayout/index.jsx + 3 modules
var TwofoldLayout = __webpack_require__(852947);
// EXTERNAL MODULE: ./config/environments/production_ish/config.js
var config = __webpack_require__(585553);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ../ishlibjs/dist/index.js
var dist = __webpack_require__(401928);
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
      // logg(props, 'Api.getLocation()')
      var slug = props.slug;
      return request.get("/api/maps/view/".concat(slug, "?jwt_token=").concat(token)).then(function (r) {
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
        // logg(err, 'Cannot #getMyAccount')
        return shared_C.anonUser;
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
;// CONCATENATED MODULE: ./src/shared/NavigationProvider.jsx
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var NavigationContext = /*#__PURE__*/external_react_default().createContext({});
/**
 * NavigationProvider
**/

var NavigationProvider = function NavigationProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  // logg(props, 'NavigationProvider')
  var useHistory = props.useHistory; // const history = useHistory()

  return /*#__PURE__*/external_react_default().createElement(NavigationContext.Provider, {
    value: {
      // history,
      useHistory: useHistory
    }
  }, children);
};

/* harmony default export */ const shared_NavigationProvider = (NavigationProvider);
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
 * @deprecated, use variables.css and css vars
 */
var S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',
  smallWidth: '10px',
  mediumWidth: '20px',
  thinBorderWidth: '2px',
  thinBorderRadius: '5px'
};

var lightTheme = _objectSpread(_objectSpread({}, S), {}, {
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    border: 'black',
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
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/shared/SsrProvider.jsx
var SsrProvider_excluded = ["children"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SsrProvider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SsrProvider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SsrProvider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var SsrContext = /*#__PURE__*/external_react_default().createContext({});
/**
 * SsrProvider
**/

var SsrProvider = function SsrProvider(_ref) {
  var children = _ref.children,
      props = SsrProvider_objectWithoutProperties(_ref, SsrProvider_excluded);

  // logg(props, 'SsrProvider')
  var _location = props.location;

  var _useState = (0,external_react_.useState)(_location),
      _useState2 = _slicedToArray(_useState, 2),
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

var ThemeContext = /*#__PURE__*/external_react_default().createContext({});

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
    _excluded4 = ["children"],
    _excluded5 = ["className"];

function shared_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = shared_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function shared_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 *  $shared / index
 */
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
  var history = (0,external_react_router_dom_.useHistory)();

  var _useContext = (0,external_react_.useContext)(TwofoldLayout/* TwofoldContext */.Nd),
      showItem = _useContext.showItem,
      setShowItem = _useContext.setShowItem; // logg(useContext(TwofoldContext), 'BackBtn usedContext')


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
 */

var _Card = external_styled_components_default()((Box_default())).withConfig({
  displayName: "shared___Card",
  componentId: "sc-h0ppel-4"
})(["margin-bottom:1em;padding:", ";background:", ";cursor:", ";display:flex;flex-direction:column;"], function (p) {
  return p.theme.smallWidth;
}, function (p) {
  return p.theme.colors.cardBackground;
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
 */

var inflector = {
  classify: function classify(m) {
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

var PurchasedIcon = function PurchasedIcon() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "PurchasedIcon"
  }, "[purchased]");
};
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
 * Wrapper Bordered.
 * Used in collapsibles and MarkersList
 *
 * This expects a list? _vp_ 2021-11-02
 */

var _WBordered = external_styled_components_default().div.withConfig({
  displayName: "shared___WBordered",
  componentId: "sc-h0ppel-9"
})(["border:", ";border-radius:", ";background:", ";margin-bottom:1em;padding:.5em;cursor:", ";"], function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.onClick ? 'pointer' : null;
});

var WBordered = function WBordered(_ref2) {
  var children = _ref2.children,
      props = shared_objectWithoutProperties(_ref2, _excluded3);

  return /*#__PURE__*/external_react_default().createElement(_WBordered, props, children);
};
var WidgetContainer = function WidgetContainer(_ref3) {
  var children = _ref3.children,
      _props = shared_objectWithoutProperties(_ref3, _excluded4);

  var _props$className = _props.className,
      className = _props$className === void 0 ? '' : _props$className,
      props = shared_objectWithoutProperties(_props, _excluded5);

  return /*#__PURE__*/external_react_default().createElement(WBordered, Object.assign({
    className: "".concat(className, " WidgetContainer")
  }, props), children);
};
/* Z */
// @TODO: move this into its own Zoom components, or into MapPanel

var ZoomContext = /*#__PURE__*/external_react_default().createContext({});

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

/***/ 943294:
/***/ ((module) => {

// Exports
module.exports = {
	"ItemModal": "ItemModal_ItemModal__xamYB",
	"plt-mobile": "ItemModal_plt-mobile__4Cu1k"
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
  foldedCenter: 'folded-center',
  foldedLeft: 'folded-left',
  foldedRight: 'folded-right',
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

var S = {
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',
  thinBorderWidth: '2px',
  thinBorderRadius: '5px'
};

var lightTheme = _extends({}, S, {
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
    border: 'black',
    cardBackground: 'white'
  }
});

var darkTheme = _extends({}, S, {
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    blue: '#73b0fa',
    darkGrey: '#b3afaf',
    lightGrey: '#4a4343',
    red: '#eb83a8',
    border: 'white',
    cardBackground: '#1a1a1a'
  }
});

var TwofoldContext = React__default.createContext({});

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

var _excluded$1 = ["fill", "w", "h"];

var RegisterWithEmailBtn = function RegisterWithEmailBtn(props) {
  return /*#__PURE__*/React__default.createElement(Btn, props, "Register with Email");
};

var LoginWithEmailBtn = function LoginWithEmailBtn(props) {
  return /*#__PURE__*/React__default.createElement(Btn, props, "Login with Email");
};

var IconLogout = function IconLogout(_ref) {
  var w = _ref.w,
      h = _ref.h,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  w = w ? w : '12px';
  h = h ? h : '12px';
  return /*#__PURE__*/React__default.createElement("span", props, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: w,
    height: h,
    viewBox: "0 0 96.943 96.943",
    style: {
      enableBackground: 'new 0 0 96.943 96.943'
    }
  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"
  }), " ", /*#__PURE__*/React__default.createElement("path", {
    d: "M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"
  }), " "), " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null, " "), " ", /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null), /*#__PURE__*/React__default.createElement("g", null)));
};

var AuthWidget = function AuthWidget(props) {
  var _useContext = React.useContext(AuthContext),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen;

  var doLogout = function doLogout() {
    setCurrentUser(C.anonUser);
    localStorage.removeItem('jwt_token');
    window.location.reload(false);
  };

  var onError = function onError(inn) {
    logg(inn, 'cannot login!');
    toast('cannot login!');
  };

  var onSuccess = function onSuccess(inn) {
    logg('Logged in successfully.');
    setCurrentUser(inn);
  };

  if (currentUser !== null && currentUser !== void 0 && currentUser.email) {
    return /*#__PURE__*/React__default.createElement(FlexRow, null, "[\xA0", currentUser.email, "\xA0", /*#__PURE__*/React__default.createElement(IconLogout, {
      onClick: doLogout
    }, "Logout"), "\xA0]");
  }

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement(RegisterWithEmailBtn, {
    onClick: function onClick() {
      setRegisterModalOpen(true);
    }
  }), /*#__PURE__*/React__default.createElement(LoginWithEmailBtn, {
    onClick: function onClick() {
      setLoginModalOpen(true);
    }
  })), /*#__PURE__*/React__default.createElement(RegisterModal, null), /*#__PURE__*/React__default.createElement(LoginModal, {
    onError: onError,
    onSuccess: onSuccess
  }));
};

AuthWidget.propTypes = {};

var styles = {"LoginModal":"_2YolN","LoginModalOverlay":"_3hqvY","Notice":"_2ifwF"};

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
        logg(err, 'e323 - cannot postLogin()');
        reactToastify.toast("Could not login.");
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
      return setLoginModalOpen(false) || setRegisterModalOpen(true);
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

var _excluded$2 = ["children"];
var AuthContext = React.createContext({});

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

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

var config = {
  apiOrigin: 'http://localhost:3001'
};

var TestApp = function TestApp() {
  var useApi = function useApi() {
    return {
      doRegister: function doRegister(_ref) {
        var email = _ref.email,
            password = _ref.password;
        return request.post(config.apiOrigin + "/api/users", {
          email: email,
          password: password
        }).then(function (r) {
          return r.data;
        }).then(function (r) {
          logg(r, 'done registered');
          return r;
        });
      }
    };
  };

  var _useState = React.useState(false),
      loginModalOpen = _useState[0],
      setLoginModalOpen = _useState[1];

  var _useState2 = React.useState(true),
      registerModalOpen = _useState2[0],
      setRegisterModalOpen = _useState2[1];

  return /*#__PURE__*/React__default.createElement(AuthContextProvider, {
    loginModalOpen: loginModalOpen,
    setLoginModalOpen: setLoginModalOpen,
    registerModalOpen: registerModalOpen,
    setRegisterModalOpen: setRegisterModalOpen,
    useApi: useApi
  }, /*#__PURE__*/React__default.createElement(AuthWidget, null), /*#__PURE__*/React__default.createElement(reactToastify.ToastContainer, {
    position: "bottom-left"
  }));
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var _excluded$3 = ["children"];
var JwtContext = React__default.createContext({});

var JwtContextProvider = function JwtContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  logg(props, 'JwtContextProvider 222');
  var api = props.api;

  var _useState = React.useState(C.anonUser),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = React.useState({}),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  React.useEffect(function () {
    logg('setting currentUser...');
    api.getMyAccount().then(function (resp) {
      logg(resp, 'got this resp');
      setCurrentUser(resp);
    }).catch(function (e) {
      logg(e, 'e322');
      reactToastify.toast("Login failed: " + e);
      setCurrentUser(C.anonUser);
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(JwtContext.Provider, {
    value: {
      api: api,
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      loginModalOpen: loginModalOpen,
      setLoginModalOpen: setLoginModalOpen
    }
  }, children);
};

JwtContextProvider.props = {
  api: PropTypes.object
};
var FlexRow$1 = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    margin: auto .4em;\n  }\n"])));
var W1 = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  border: 1px solid red;\n"])));
var W2 = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n"])));
var SimpleJwtRow = function SimpleJwtRow() {
  var _useContext = React.useContext(JwtContext),
      currentUser = _useContext.currentUser;

  return /*#__PURE__*/React__default.createElement(W1, null, /*#__PURE__*/React__default.createElement(FlexRow$1, null, currentUser.email && /*#__PURE__*/React__default.createElement(W2, null, /*#__PURE__*/React__default.createElement("i", null, currentUser.email), /*#__PURE__*/React__default.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React__default.createElement(LoginWithPassword, null)));
};

var _W = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var Logout = function Logout() {
  var _useContext2 = React.useContext(JwtContext),
      setCurrentUser = _useContext2.setCurrentUser;

  var doLogout = function doLogout() {
    localStorage.removeItem(C.jwt_token);
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

var _templateObject$2;
var W0 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n"])));

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

  return /*#__PURE__*/React__default.createElement(W0, null, /*#__PURE__*/React__default.createElement("textarea", {
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

var _excluded$4 = ["children"];

var _templateObject$3;
var W0$1 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: space-between;\n"])));

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

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
  }, /*#__PURE__*/React__default.createElement(W0$1, null, /*#__PURE__*/React__default.createElement(List, null, listItems.map(function (_ref2) {
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

exports.eX = Actions;
exports.Vo = AuthContext;
exports.HD = AuthContextProvider;
exports.BE = AuthWidget;
exports.dg = CloseBtn;
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