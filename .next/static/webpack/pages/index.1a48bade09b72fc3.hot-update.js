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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/banner */ \"./components/banner.js\");\n/* harmony import */ var _components_Temperature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Temperature */ \"./components/Temperature.js\");\n/* harmony import */ var _components_CodyList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CodyList */ \"./components/CodyList.js\");\n/* harmony import */ var _service_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/location */ \"./service/location.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_SubList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SubList */ \"./components/SubList.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphQL_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphQL/schema */ \"./graphQL/schema.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), area = ref[0], getArea = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), temp = ref1[0], getTemp = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), weather = ref2[0], getWeather = ref2[1];\n    var ref3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(_graphQL_schema__WEBPACK_IMPORTED_MODULE_10__.GET_MUSIC_ARRAY), loading = ref3.loading, music_data = ref3.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleGeo = function handleGeo(position) {\n            try {\n                (0,_service_location__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(position).then(axios__WEBPACK_IMPORTED_MODULE_8___default().spread(function(res1, res2) {\n                    getArea(res1.data.documents[0].region_2depth_name);\n                    getTemp(Math.round(res2.data.main.temp) - 273);\n                    getWeather(res2.data.weather[0].main);\n                }));\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        navigator.geolocation.getCurrentPosition(handleGeo);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().container),\n        __source: {\n            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().banner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().today_list),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().inner),\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().title),\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().style_title),\n                                    __source: {\n                                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"today style\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().location),\n                                    __source: {\n                                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Temperature__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        temp: temp,\n                                        weather: weather,\n                                        area: area,\n                                        __source: {\n                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        },\n                                        __self: this\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CodyList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            temp: temp,\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().sub_banner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                data: !loading ? music_data.musicarray : false,\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(Home, \"dIuQdXVfv51vjVzAgAEIiJ1XYlM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7Ozs7Ozs7OztBQUc3RCxDQUFDO0dBN0N1QnJDLElBQUk7O1FBS1lGLHFEQUFROzs7S0FMeEJFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9iYW5uZXJcIjtcbmltcG9ydCBUZW1wZXJhdHVyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZW1wZXJhdHVyZVwiO1xuaW1wb3J0IENvZHlMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvZHlMaXN0XCI7XG5pbXBvcnQgaGFuZGxlR2VvU3VjY2VzcyBmcm9tIFwiLi4vc2VydmljZS9sb2NhdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFN1Ykxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3ViTGlzdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdFVF9NVVNJQ19BUlJBWSB9IGZyb20gXCIuLi9ncmFwaFFML3NjaGVtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYXJlYSwgZ2V0QXJlYV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RlbXAsIGdldFRlbXBdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt3ZWF0aGVyLCBnZXRXZWF0aGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZGF0YTogbXVzaWNfZGF0YSB9ID0gdXNlUXVlcnkoR0VUX01VU0lDX0FSUkFZKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlR2VvKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUdlbyhwb3NpdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlR2VvU3VjY2Vzcyhwb3NpdGlvbikudGhlbihcbiAgICAgICAgICBheGlvcy5zcHJlYWQoKHJlczEsIHJlczIpID0+IHtcbiAgICAgICAgICAgIGdldEFyZWEocmVzMS5kYXRhLmRvY3VtZW50c1swXS5yZWdpb25fMmRlcHRoX25hbWUpO1xuICAgICAgICAgICAgZ2V0VGVtcChNYXRoLnJvdW5kKHJlczIuZGF0YS5tYWluLnRlbXApIC0gMjczKTtcbiAgICAgICAgICAgIGdldFdlYXRoZXIocmVzMi5kYXRhLndlYXRoZXJbMF0ubWFpbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJhbm5lcn0+XG4gICAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvZGF5X2xpc3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5uZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3R5bGVfdGl0bGV9PnRvZGF5IHN0eWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9jYXRpb259PlxuICAgICAgICAgICAgICA8VGVtcGVyYXR1cmUgdGVtcD17dGVtcH0gd2VhdGhlcj17d2VhdGhlcn0gYXJlYT17YXJlYX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb2R5TGlzdCB0ZW1wPXt0ZW1wfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1Yl9iYW5uZXJ9PjwvZGl2PlxuICAgICAgPFN1Ykxpc3QgZGF0YT17IWxvYWRpbmcgPyBtdXNpY19kYXRhLm11c2ljYXJyYXkgOiBmYWxzZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFubmVyIiwiVGVtcGVyYXR1cmUiLCJDb2R5TGlzdCIsImhhbmRsZUdlb1N1Y2Nlc3MiLCJheGlvcyIsIlN1Ykxpc3QiLCJ1c2VRdWVyeSIsIkdFVF9NVVNJQ19BUlJBWSIsIkhvbWUiLCJhcmVhIiwiZ2V0QXJlYSIsInRlbXAiLCJnZXRUZW1wIiwid2VhdGhlciIsImdldFdlYXRoZXIiLCJsb2FkaW5nIiwibXVzaWNfZGF0YSIsImRhdGEiLCJoYW5kbGVHZW8iLCJwb3NpdGlvbiIsInRoZW4iLCJzcHJlYWQiLCJyZXMxIiwicmVzMiIsImRvY3VtZW50cyIsInJlZ2lvbl8yZGVwdGhfbmFtZSIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJhbm5lciIsInRvZGF5X2xpc3QiLCJpbm5lciIsInRpdGxlIiwic3R5bGVfdGl0bGUiLCJsb2NhdGlvbiIsInN1Yl9iYW5uZXIiLCJtdXNpY2FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});