webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkFlow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ \"./src/assets/patternBG.png\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ \"./src/assets/arrowOdd.svg\");\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ \"./src/assets/arrowEven.svg\");\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/home/ethan/blockchain/start_laning/Startup-Landing/src/sections/workflow.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  title: \"Go to Chrome Web Store Extensions Section and Install MetaMask\",\n  text: \"Install MetaMask extenstion on your browser\"\n}, {\n  id: 2,\n  title: \"Make your account\",\n  text: \"If this is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.\"\n}, {\n  id: 3,\n  title: \"Depoit ETH\",\n  text: \"Buy or Send Ethereum on your wallet\"\n}, {\n  id: 4,\n  title: \"Buy NFT Fund on the Marketplace\",\n  text: \"buy nft that what you want. there are listed nft on the marketplace.\"\n}];\nfunction WorkFlow() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.workflow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"WHAT IS THE FUNCTION\",\n    title: \"Meet the feature of our product\",\n    isWhite: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.card,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.iconBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, \"0\".concat(item.id)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.wrapper,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      sx: styles.wrapper.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      sx: styles.wrapper.subTitle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }, item.text)));\n  }))));\n}\n_c = WorkFlow;\nvar styles = {\n  workflow: {\n    backgroundColor: \"primary\",\n    backgroundImage: \"url(\".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: \"center center\",\n    backgroundSize: \"cover\",\n    position: \"relative\",\n    py: [8, null, 9, null, null, 10]\n  },\n  grid: {\n    mb: -1,\n    pt: 0,\n    gridGap: [\"35px 0\", null, \"45px 30px\", null, \"50px 25px\", null, null, \"50px 65px\"],\n    gridTemplateColumns: [\"repeat(1,1fr)\", null, \"repeat(2,1fr)\", null, \"repeat(4,1fr)\"]\n  },\n  card: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    position: \"relative\",\n    textAlign: [\"center\", null, \"left\"],\n    width: [\"100%\", \"80%\", \"100%\"],\n    mx: [\"auto\"],\n    px: [4, null, null, 0],\n    \"&::before\": {\n      position: \"absolute\",\n      content: '\"\"',\n      top: 0,\n      left: [0, null, null, null, null, 72, null, 90],\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: \"center center\",\n      width: 215,\n      height: 60,\n      \"@media screen and (max-width:1220px)\": {\n        display: \"none\"\n      }\n    },\n    \"&:nth-of-type(2n-1)::before\": {\n      backgroundImage: \"url(\".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n    },\n    \"&:nth-of-type(2n)::before\": {\n      backgroundImage: \"url(\".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, \")\"),\n      top: 17\n    },\n    \"&:last-child::before\": {\n      display: \"none\"\n    }\n  },\n  iconBox: {\n    width: [\"50px\", null, \"60px\", null, null, \"70px\"],\n    height: [\"50px\", null, \"60px\", null, null, \"70px\"],\n    flexShrink: 0,\n    borderRadius: [15, null, 23, null, null, 30],\n    backgroundColor: \"white\",\n    display: \"flex\",\n    alignItems: \"center\",\n    mb: [5, null, null, null, null, 6],\n    mx: [\"auto\", null, 0],\n    fontSize: [6, null, 7, null, null, \"30px\"],\n    fontWeight: 700,\n    justifyContent: \"center\",\n    color: \"#234582\"\n  },\n  wrapper: {\n    width: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    mt: \"-5px\",\n    title: {\n      fontSize: [3, null, 4, null, null, 5],\n      color: \"white\",\n      lineHeight: [1.4, null, null, null, null, 1.55],\n      pr: [0, null, null, null, null, 2],\n      mb: [2, 3]\n    },\n    subTitle: {\n      fontSize: 1,\n      fontWeight: 400,\n      lineHeight: [1.85, null, null, 1.9, 2],\n      color: \"white\",\n      opacity: 0.75,\n      pr: [0, null, null, null, null, 5]\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkFlow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzPzM2MzkiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiV29ya0Zsb3ciLCJzdHlsZXMiLCJ3b3JrZmxvdyIsImdyaWQiLCJtYXAiLCJpdGVtIiwiY2FyZCIsImljb25Cb3giLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsInB5IiwibWIiLCJwdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibXQiLCJsaW5lSGVpZ2h0IiwicHIiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtFQUNFQyxFQUFFLEVBQUUsQ0FETjtFQUVFQyxLQUFLLEVBQUUsZ0VBRlQ7RUFHRUMsSUFBSSxFQUFFO0FBSFIsQ0FEVyxFQU1YO0VBQ0VGLEVBQUUsRUFBRSxDQUROO0VBRUVDLEtBQUssRUFBRSxtQkFGVDtFQUdFQyxJQUFJLEVBQUU7QUFIUixDQU5XLEVBV1g7RUFDRUYsRUFBRSxFQUFFLENBRE47RUFFRUMsS0FBSyxFQUFFLFlBRlQ7RUFHRUMsSUFBSSxFQUFFO0FBSFIsQ0FY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YSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBSEo7TUFJUkYsS0FBSyxFQUFFLE9BSkM7TUFLUkksT0FBTyxFQUFFLElBTEQ7TUFNUkQsRUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCO0lBTkk7RUFiSDtBQS9FSSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xuXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xuaW1wb3J0IEFycm93T2RkIGZyb20gXCJhc3NldHMvYXJyb3dPZGQuc3ZnXCI7XG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gXCJhc3NldHMvYXJyb3dFdmVuLnN2Z1wiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiR28gdG8gQ2hyb21lIFdlYiBTdG9yZSBFeHRlbnNpb25zIFNlY3Rpb24gYW5kIEluc3RhbGwgTWV0YU1hc2tcIixcbiAgICB0ZXh0OiBcIkluc3RhbGwgTWV0YU1hc2sgZXh0ZW5zdGlvbiBvbiB5b3VyIGJyb3dzZXJcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIk1ha2UgeW91ciBhY2NvdW50XCIsXG4gICAgdGV4dDogXCJJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGNyZWF0aW5nIGEgd2FsbGV0LCBzbyBjbGljayB0aGUgQ3JlYXRlIGEgV2FsbGV0IGJ1dHRvbi4gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHdhbGxldCB0aGVuIGltcG9ydCB0aGUgYWxyZWFkeSBjcmVhdGVkIHVzaW5nIHRoZSBJbXBvcnQgV2FsbGV0IGJ1dHRvbi5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkRlcG9pdCBFVEhcIixcbiAgICB0ZXh0OiBcIkJ1eSBvciBTZW5kIEV0aGVyZXVtIG9uIHlvdXIgd2FsbGV0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJCdXkgTkZUIEZ1bmQgb24gdGhlIE1hcmtldHBsYWNlXCIsXG4gICAgdGV4dDogXCJidXkgbmZ0IHRoYXQgd2hhdCB5b3Ugd2FudC4gdGhlcmUgYXJlIGxpc3RlZCBuZnQgb24gdGhlIG1hcmtldHBsYWNlLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIldIQVQgSVMgVEhFIEZVTkNUSU9OXCJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgdGhlIGZlYXR1cmUgb2Ygb3VyIHByb2R1Y3RcIlxuICAgICAgICAgIGlzV2hpdGU9e3RydWV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntpdGVtLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd29ya2Zsb3c6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIG1iOiAtMSxcbiAgICBwdDogMCxcbiAgICBncmlkR2FwOiBbXG4gICAgICBcIjM1cHggMFwiLFxuICAgICAgbnVsbCxcbiAgICAgIFwiNDVweCAzMHB4XCIsXG4gICAgICBudWxsLFxuICAgICAgXCI1MHB4IDI1cHhcIixcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgXCI1MHB4IDY1cHhcIixcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgIFwicmVwZWF0KDEsMWZyKVwiLFxuICAgICAgbnVsbCxcbiAgICAgIFwicmVwZWF0KDIsMWZyKVwiLFxuICAgICAgbnVsbCxcbiAgICAgIFwicmVwZWF0KDQsMWZyKVwiLFxuICAgIF0sXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdGV4dEFsaWduOiBbXCJjZW50ZXJcIiwgbnVsbCwgXCJsZWZ0XCJdLFxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiODAlXCIsIFwiMTAwJVwiXSxcbiAgICBteDogW1wiYXV0b1wiXSxcbiAgICBweDogWzQsIG51bGwsIG51bGwsIDBdLFxuICAgIFwiJjo6YmVmb3JlXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNzIsIG51bGwsIDkwXSxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcbiAgICAgIHdpZHRoOiAyMTUsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweClcIjoge1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZSgybik6OmJlZm9yZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4gICAgICB0b3A6IDE3LFxuICAgIH0sXG4gICAgXCImOmxhc3QtY2hpbGQ6OmJlZm9yZVwiOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9LFxuXG4gIGljb25Cb3g6IHtcbiAgICB3aWR0aDogW1wiNTBweFwiLCBudWxsLCBcIjYwcHhcIiwgbnVsbCwgbnVsbCwgXCI3MHB4XCJdLFxuICAgIGhlaWdodDogW1wiNTBweFwiLCBudWxsLCBcIjYwcHhcIiwgbnVsbCwgbnVsbCwgXCI3MHB4XCJdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxuICAgIG14OiBbXCJhdXRvXCIsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgXCIzMHB4XCJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjMjM0NTgyXCIsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtdDogXCItNXB4XCIsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbWI6IFsyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/workflow.js\n");

/***/ })

})