"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/banner */ \"./components/banner.js\");\n/* harmony import */ var _components_Temperature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Temperature */ \"./components/Temperature.js\");\n/* harmony import */ var _components_CodyList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CodyList */ \"./components/CodyList.js\");\n/* harmony import */ var _service_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/location */ \"./service/location.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_SubList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SubList */ \"./components/SubList.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphQL_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphQL/schema */ \"./graphQL/schema.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), area = ref[0], getArea = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), temp = ref1[0], getTemp = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), weather = ref2[0], getWeather = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), music = ref3[0], getMusic = ref3[1];\n    var ref4 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(_graphQL_schema__WEBPACK_IMPORTED_MODULE_10__.GET_MUSIC_ARRAY), music_data = ref4.data;\n    // useEffect(() => {\n    //   if (music_data) {\n    //     getMusic(music_data.musicarray);\n    //   }\n    // }, []);\n    console.log(music_data);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleGeo = function handleGeo(position) {\n            try {\n                (0,_service_location__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(position).then(axios__WEBPACK_IMPORTED_MODULE_8___default().spread(function(res1, res2) {\n                    getArea(res1.data.documents[0].region_2depth_name);\n                    getTemp(Math.round(res2.data.main.temp) - 273);\n                    getWeather(res2.data.weather[0].main);\n                }));\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        navigator.geolocation.getCurrentPosition(handleGeo);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),\n        __source: {\n            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n            lineNumber: 48,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().banner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().today_list),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().inner),\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().title),\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().style_title),\n                                    __source: {\n                                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"today style\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().location),\n                                    __source: {\n                                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Temperature__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        temp: temp,\n                                        weather: weather,\n                                        area: area,\n                                        __source: {\n                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        },\n                                        __self: this\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CodyList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            temp: temp,\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().sub_banner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(Home, \"BD0jSNj3TtqZcYzkvkk3OGTlJPc=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTs0QkFBQ1MsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7OztpRkFHdkJ5QixDQUFHO2dCQUFDQyxTQUFTLEVBQUV4Qyw0RUFBZ0I7Ozs7Ozs7O2lGQUMvQlEsMkRBQU87Ozs7Ozs7Ozs7QUFHZCxDQUFDO0dBckR1QkcsSUFBSTs7UUFNR0YscURBQVE7OztLQU5mRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFubmVyXCI7XG5pbXBvcnQgVGVtcGVyYXR1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVcIjtcbmltcG9ydCBDb2R5TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2R5TGlzdFwiO1xuaW1wb3J0IGhhbmRsZUdlb1N1Y2Nlc3MgZnJvbSBcIi4uL3NlcnZpY2UvbG9jYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTdWJMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1N1Ykxpc3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBHRVRfTVVTSUNfQVJSQVkgfSBmcm9tIFwiLi4vZ3JhcGhRTC9zY2hlbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FyZWEsIGdldEFyZWFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0ZW1wLCBnZXRUZW1wXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbd2VhdGhlciwgZ2V0V2VhdGhlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW211c2ljLCBnZXRNdXNpY10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB7IGRhdGE6IG11c2ljX2RhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9NVVNJQ19BUlJBWSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKG11c2ljX2RhdGEpIHtcbiAgLy8gICAgIGdldE11c2ljKG11c2ljX2RhdGEubXVzaWNhcnJheSk7XG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2cobXVzaWNfZGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZUdlbyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVHZW8ocG9zaXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGhhbmRsZUdlb1N1Y2Nlc3MocG9zaXRpb24pLnRoZW4oXG4gICAgICAgICAgYXhpb3Muc3ByZWFkKChyZXMxLCByZXMyKSA9PiB7XG4gICAgICAgICAgICBnZXRBcmVhKHJlczEuZGF0YS5kb2N1bWVudHNbMF0ucmVnaW9uXzJkZXB0aF9uYW1lKTtcbiAgICAgICAgICAgIGdldFRlbXAoTWF0aC5yb3VuZChyZXMyLmRhdGEubWFpbi50ZW1wKSAtIDI3Myk7XG4gICAgICAgICAgICBnZXRXZWF0aGVyKHJlczIuZGF0YS53ZWF0aGVyWzBdLm1haW4pO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5iYW5uZXJ9PlxuICAgICAgICA8QmFubmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50b2RheV9saXN0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlubmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0eWxlX3RpdGxlfT50b2RheSBzdHlsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvY2F0aW9ufT5cbiAgICAgICAgICAgICAgPFRlbXBlcmF0dXJlIHRlbXA9e3RlbXB9IHdlYXRoZXI9e3dlYXRoZXJ9IGFyZWE9e2FyZWF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q29keUxpc3QgdGVtcD17dGVtcH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJfYmFubmVyfT48L2Rpdj5cbiAgICAgIDxTdWJMaXN0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhbm5lciIsIlRlbXBlcmF0dXJlIiwiQ29keUxpc3QiLCJoYW5kbGVHZW9TdWNjZXNzIiwiYXhpb3MiLCJTdWJMaXN0IiwidXNlUXVlcnkiLCJHRVRfTVVTSUNfQVJSQVkiLCJIb21lIiwiYXJlYSIsImdldEFyZWEiLCJ0ZW1wIiwiZ2V0VGVtcCIsIndlYXRoZXIiLCJnZXRXZWF0aGVyIiwibXVzaWMiLCJnZXRNdXNpYyIsIm11c2ljX2RhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUdlbyIsInBvc2l0aW9uIiwidGhlbiIsInNwcmVhZCIsInJlczEiLCJyZXMyIiwiZG9jdW1lbnRzIiwicmVnaW9uXzJkZXB0aF9uYW1lIiwiTWF0aCIsInJvdW5kIiwibWFpbiIsImVycm9yIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJiYW5uZXIiLCJ0b2RheV9saXN0IiwiaW5uZXIiLCJ0aXRsZSIsInN0eWxlX3RpdGxlIiwibG9jYXRpb24iLCJzdWJfYmFubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});