"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./components/ListNav.js":
/*!*******************************!*\
  !*** ./components/ListNav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ListNav.module.css */ \"./styles/ListNav.module.css\");\n/* harmony import */ var _styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ListNav = function(param) {\n    var season = param.season, weather = param.weather, theme = param.theme, sex = param.sex, styles = param.styles;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], getData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (season || weather || theme || sex || styles) {\n            getData([\n                season,\n                weather,\n                theme,\n                sex,\n                styles\n            ]);\n            season = \"\", weather = \"\", theme = \"\", sex = \"\", styles = \"\";\n            getData(function(prevState) {\n                return prevState.filter(function(item) {\n                    return item != \"\";\n                });\n            });\n        }\n    }, [\n        season,\n        weather,\n        theme,\n        sex,\n        styles\n    ]);\n    var deleteFilter = function(list) {\n        getData(function(prevState) {\n            return prevState.filter(function(item) {\n                return item != list;\n            });\n        });\n    };\n    console.log(data, season, weather, theme, sex, styles);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        __source: {\n            fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav),\n            __source: {\n                fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"filter\"\n                }),\n                data.map(function(list, i) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        onClick: function() {\n                            return deleteFilter(list);\n                        },\n                        className: (_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().li),\n                        __source: {\n                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: list ? list : null\n                    }, i);\n                })\n            ]\n        })\n    }));\n};\n_s(ListNav, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ListNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListNav);\nvar _c;\n$RefreshReg$(_c, \"ListNav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3ROYXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ0Y7OztBQUVoRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLFFBQXFDLENBQUM7UUFBM0NDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07OztJQUNwRCxHQUFLLENBQW1CUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTVCUSxJQUFJLEdBQWFSLEdBQVksS0FBdkJTLE9BQU8sR0FBSVQsR0FBWTtJQUVwQ0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVJLE1BQU0sSUFBSUMsT0FBTyxJQUFJQyxLQUFLLElBQUlDLEdBQUcsSUFBSUMsTUFBTSxFQUFFLENBQUM7WUFDaERFLE9BQU8sQ0FBQyxDQUFDTjtnQkFBQUEsTUFBTTtnQkFBRUMsT0FBTztnQkFBRUMsS0FBSztnQkFBRUMsR0FBRztnQkFBRUMsTUFBTTtZQUFBLENBQUM7WUFDNUNKLE1BQU0sR0FBRyxDQUFFLEdBQUlDLE9BQU8sR0FBRyxDQUFFLEdBQUlDLEtBQUssR0FBRyxDQUFFLEdBQUlDLEdBQUcsR0FBRyxDQUFFLEdBQUlDLE1BQU0sR0FBRyxDQUFFO1lBQ3JFRSxPQUFPLENBQUMsUUFBUSxDQUFQQyxTQUFTO2dCQUFLQSxNQUFNLENBQU5BLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtvQkFBS0EsTUFBTSxDQUFOQSxJQUFJLElBQUksQ0FBRTs7O1FBQzlELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ1Q7UUFBQUEsTUFBTTtRQUFFQyxPQUFPO1FBQUVDLEtBQUs7UUFBRUMsR0FBRztRQUFFQyxNQUFNO0lBQUEsQ0FBQztJQUV4QyxHQUFLLENBQUNNLFlBQVksR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzlCTCxPQUFPLENBQUMsUUFBUSxDQUFQQyxTQUFTO1lBQUtBLE1BQU0sQ0FBTkEsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQQyxJQUFJO2dCQUFLQSxNQUFNLENBQU5BLElBQUksSUFBSUUsSUFBSTs7O0lBQ2hFLENBQUM7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksRUFBRUwsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxNQUFNO0lBQ3JELE1BQU0sc0VBQ0hVLENBQUc7UUFBQ0MsU0FBUyxFQUFFakIsNkVBQWU7Ozs7Ozs7d0ZBQzVCZ0IsQ0FBRztZQUFDQyxTQUFTLEVBQUVqQix1RUFBUzs7Ozs7Ozs7cUZBQ3RCZ0IsQ0FBRzs7Ozs7Ozs4QkFBQyxDQUFNOztnQkFDVlQsSUFBSSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFQUCxJQUFJLEVBQUVRLENBQUM7a0NBQ2hCLE1BQU0sd0RBQUxMLENBQUc7d0JBQVNNLE9BQU8sRUFBRSxRQUFROzRCQUFGVixNQUFNLENBQU5BLFlBQVksQ0FBQ0MsSUFBSTs7d0JBQUdJLFNBQVMsRUFBRWpCLHNFQUFROzs7Ozs7O2tDQUNoRWEsSUFBSSxHQUFHQSxJQUFJLEdBQUcsSUFBSTt1QkFEWFEsQ0FBQzs7Ozs7QUFPckIsQ0FBQztHQTVCS3BCLE9BQU87S0FBUEEsT0FBTztBQThCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlzdE5hdi5qcz9jNzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9MaXN0TmF2Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgTGlzdE5hdiA9ICh7IHNlYXNvbiwgd2VhdGhlciwgdGhlbWUsIHNleCwgc3R5bGVzIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIGdldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXNvbiB8fCB3ZWF0aGVyIHx8IHRoZW1lIHx8IHNleCB8fCBzdHlsZXMpIHtcbiAgICAgIGdldERhdGEoW3NlYXNvbiwgd2VhdGhlciwgdGhlbWUsIHNleCwgc3R5bGVzXSk7XG4gICAgICAoc2Vhc29uID0gXCJcIiksICh3ZWF0aGVyID0gXCJcIiksICh0aGVtZSA9IFwiXCIpLCAoc2V4ID0gXCJcIiksIChzdHlsZXMgPSBcIlwiKTtcbiAgICAgIGdldERhdGEoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPSBcIlwiKSk7XG4gICAgfVxuICB9LCBbc2Vhc29uLCB3ZWF0aGVyLCB0aGVtZSwgc2V4LCBzdHlsZXNdKTtcblxuICBjb25zdCBkZWxldGVGaWx0ZXIgPSAobGlzdCkgPT4ge1xuICAgIGdldERhdGEoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPSBsaXN0KSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZGF0YSwgc2Vhc29uLCB3ZWF0aGVyLCB0aGVtZSwgc2V4LCBzdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgIDxkaXY+ZmlsdGVyPC9kaXY+XG4gICAgICAgIHtkYXRhLm1hcCgobGlzdCwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWx0ZXIobGlzdCl9IGNsYXNzTmFtZT17c3R5bGUubGl9PlxuICAgICAgICAgICAge2xpc3QgPyBsaXN0IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3ROYXY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiTGlzdE5hdiIsInNlYXNvbiIsIndlYXRoZXIiLCJ0aGVtZSIsInNleCIsInN0eWxlcyIsImRhdGEiLCJnZXREYXRhIiwicHJldlN0YXRlIiwiZmlsdGVyIiwiaXRlbSIsImRlbGV0ZUZpbHRlciIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibmF2IiwibWFwIiwiaSIsIm9uQ2xpY2siLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ListNav.js\n");

/***/ })

});