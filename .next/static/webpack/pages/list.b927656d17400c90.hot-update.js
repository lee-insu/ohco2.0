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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ListNav.module.css */ \"./styles/ListNav.module.css\");\n/* harmony import */ var _styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ListNav = function(param) {\n    var season = param.season, weather = param.weather, theme = param.theme, sex = param.sex, styles = param.styles;\n    var _this1 = _this;\n    _s();\n    var filterList = [\n        season,\n        weather,\n        theme,\n        sex,\n        styles\n    ];\n    var aa = [\n        \"aa\",\n        \"bb\",\n        \"cc\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(aa), bb = ref[0], sbb = ref[1];\n    console.log(bb);\n    var deleteFilter = function(list) {\n        filterList.filter(function(item) {\n            return item != list;\n        });\n    };\n    console.log(filterList);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        __source: {\n            fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: filterList.map(function(list, i) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: function() {\n                    return deleteFilter(list);\n                },\n                className: (_styles_ListNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().li),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/components/ListNav.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: list ? list : null\n            }, i);\n        })\n    }));\n};\n_s(ListNav, \"IafeH5u5xr2uOe3ep2Yxt/ApZsk=\");\n_c = ListNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListNav);\nvar _c;\n$RefreshReg$(_c, \"ListNav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3ROYXYuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ0Y7OztBQUVoRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUFRLFFBQXFDLENBQUM7UUFBM0NDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07OztJQUNwRCxHQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDTDtRQUFBQSxNQUFNO1FBQUVDLE9BQU87UUFBRUMsS0FBSztRQUFFQyxHQUFHO1FBQUVDLE1BQU07SUFBQSxDQUFDO0lBRXhELEdBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQUM7UUFBQSxDQUFJO1FBQUUsQ0FBSTtRQUFFLENBQUk7SUFBQSxDQUFDO0lBQzdCLEdBQUssQ0FBYVQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDUyxFQUFFLEdBQXRCQyxFQUFFLEdBQVNWLEdBQVksS0FBbkJXLEdBQUcsR0FBSVgsR0FBWTtJQUU5QlksT0FBTyxDQUFDQyxHQUFHLENBQUNILEVBQUU7SUFFZCxHQUFLLENBQUNJLFlBQVksR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzlCUCxVQUFVLENBQUNRLE1BQU0sQ0FBQyxRQUFRLENBQVBDLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLElBQUlGLElBQUk7O0lBQzFDLENBQUM7SUFFREgsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFVBQVU7SUFFdEIsTUFBTSxzRUFDSFUsQ0FBRztRQUFDQyxTQUFTLEVBQUVsQiw2RUFBZTs7Ozs7OztrQkFDNUJPLFVBQVUsQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUE4sSUFBSSxFQUFFTyxDQUFDOzBCQUN0QixNQUFNLHdEQUFMSixDQUFHO2dCQUFTSyxPQUFPLEVBQUUsUUFBUTtvQkFBRlQsTUFBTSxDQUFOQSxZQUFZLENBQUNDLElBQUk7O2dCQUFHSSxTQUFTLEVBQUVsQixzRUFBUTs7Ozs7OzswQkFDaEVjLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUk7ZUFEWE8sQ0FBQzs7O0FBTW5CLENBQUM7R0F2QktwQixPQUFPO0tBQVBBLE9BQU87QUF5QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpc3ROYXYuanM/YzcwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTGlzdE5hdi5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IExpc3ROYXYgPSAoeyBzZWFzb24sIHdlYXRoZXIsIHRoZW1lLCBzZXgsIHN0eWxlcyB9KSA9PiB7XG4gIGNvbnN0IGZpbHRlckxpc3QgPSBbc2Vhc29uLCB3ZWF0aGVyLCB0aGVtZSwgc2V4LCBzdHlsZXNdO1xuXG4gIGNvbnN0IGFhID0gW1wiYWFcIiwgXCJiYlwiLCBcImNjXCJdO1xuICBjb25zdCBbYmIsIHNiYl0gPSB1c2VTdGF0ZShhYSk7XG5cbiAgY29uc29sZS5sb2coYmIpO1xuXG4gIGNvbnN0IGRlbGV0ZUZpbHRlciA9IChsaXN0KSA9PiB7XG4gICAgZmlsdGVyTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT0gbGlzdCk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coZmlsdGVyTGlzdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIHtmaWx0ZXJMaXN0Lm1hcCgobGlzdCwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gb25DbGljaz17KCkgPT4gZGVsZXRlRmlsdGVyKGxpc3QpfSBjbGFzc05hbWU9e3N0eWxlLmxpfT5cbiAgICAgICAgICB7bGlzdCA/IGxpc3QgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJMaXN0TmF2Iiwic2Vhc29uIiwid2VhdGhlciIsInRoZW1lIiwic2V4Iiwic3R5bGVzIiwiZmlsdGVyTGlzdCIsImFhIiwiYmIiLCJzYmIiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlRmlsdGVyIiwibGlzdCIsImZpbHRlciIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYXAiLCJpIiwib25DbGljayIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListNav.js\n");

/***/ })

});