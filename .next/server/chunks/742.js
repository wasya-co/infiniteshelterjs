"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 630742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startStatusTap": () => (/* binding */ startStatusTap)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92826);
/* harmony import */ var _index8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616823);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358155);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .readTask */ .wj)(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = (0,_index8_js__WEBPACK_IMPORTED_MODULE_1__.a)(el);
      if (contentEl) {
        new Promise((resolve) => (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.c)(contentEl, resolve)).then(() => {
          (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__/* .writeTask */ .Iu)(async () => {
            /**
             * If scrolling and user taps status bar,
             * only calling scrollToTop is not enough
             * as engines like WebKit will jump the
             * scroll position back down and complete
             * any in-progress momentum scrolling.
             */
            contentEl.style.setProperty('--overflow', 'hidden');
            await (0,_index8_js__WEBPACK_IMPORTED_MODULE_1__.s)(contentEl, 300);
            contentEl.style.removeProperty('--overflow');
          });
        });
      }
    });
  });
};




/***/ })

};
;