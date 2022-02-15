"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Product.module.css */ \"./styles/Product.module.css\");\n/* harmony import */ var _styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphQL_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphQL/schema */ \"./graphQL/schema.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var item = param.item;\n    _s();\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_graphQL_schema__WEBPACK_IMPORTED_MODULE_3__.GET_PRODUCT, {\n        variables: {\n            id: item\n        }\n    }), loading = ref.loading, data = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), product = ref1[0], getProduct = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            getProduct(data.product);\n        }\n    }, []);\n    console.log(product);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        __source: {\n            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().banner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().inner),\n                __source: {\n                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                    type: \"flex\",\n                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().info_container),\n                    __source: {\n                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            xs: 6,\n                            sm: 6,\n                            md: 12,\n                            lg: 12,\n                            xl: 12,\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().img_container),\n                                __source: {\n                                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),\n                                    __source: {\n                                        fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            xs: 6,\n                            sm: 6,\n                            md: 12,\n                            lg: 12,\n                            xl: 12,\n                            __source: {\n                                fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().detail_container),\n                                __source: {\n                                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                                        __source: {\n                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: \"제품 이름\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().ul),\n                                        __source: {\n                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().question),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 38,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"제품\"\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().answer),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"대딥\"\n                                                    })\n                                                ]\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().question),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 42,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"브랜드\"\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().answer),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 43,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"대딥\"\n                                                    })\n                                                ]\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().question),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 46,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"가격\"\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().answer),\n                                                        __source: {\n                                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: \"대딥\"\n                                                    })\n                                                ]\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_styles_Product_module_css__WEBPACK_IMPORTED_MODULE_5___default().shop_link),\n                                        __source: {\n                                            fileName: \"/Users/insu/Desktop/coding/ohco2.0/pages/product/[id].js\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: \"구매하러 가기\"\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Product, \"72JAXPVTcI7ufbWpRzFjqZG56CY=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Product;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQUUsQ0FBTzs7Ozs7Ozs7OztBQU90RCxDQUFDO0dBakRLSyxPQUFPOztRQUNlRCxvREFBUTs7O0tBRDlCQyxPQUFPOztBQW1EYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcz9mNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qcm9kdWN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IHsgR0VUX1BST0RVQ1QgfSBmcm9tIFwiLi4vLi4vZ3JhcGhRTC9zY2hlbWFcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IFByb2R1Y3QgPSAoeyBpdGVtIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVCwge1xuICAgIHZhcmlhYmxlczogeyBpZDogaXRlbSB9LFxuICB9KTtcblxuICBjb25zdCBbcHJvZHVjdCwgZ2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZ2V0UHJvZHVjdChkYXRhLnByb2R1Y3QpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmFubmVyfT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lcn0+XG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBjbGFzc05hbWU9e3N0eWxlLmluZm9fY29udGFpbmVyfT5cbiAgICAgICAgICA8Q29sIHhzPXs2fSBzbT17Nn0gbWQ9ezEyfSBsZz17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWd9PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0gc209ezZ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRldGFpbF9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PuygnO2SiCDsnbTrpoQ8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGUudWx9PlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5xdWVzdGlvbn0+7KCc7ZKIPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5zd2VyfT7rjIDrlKU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5xdWVzdGlvbn0+67iM656c65OcPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5zd2VyfT7rjIDrlKU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5xdWVzdGlvbn0+6rCA6rKpPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5zd2VyfT7rjIDrlKU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2hvcF9saW5rfT7qtazrp6TtlZjrn6wg6rCA6riwPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW06IGlkLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiQ29sIiwiUm93IiwiR0VUX1BST0RVQ1QiLCJ1c2VRdWVyeSIsIlByb2R1Y3QiLCJpdGVtIiwidmFyaWFibGVzIiwiaWQiLCJsb2FkaW5nIiwiZGF0YSIsInByb2R1Y3QiLCJnZXRQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImJhbm5lciIsImlubmVyIiwidHlwZSIsImluZm9fY29udGFpbmVyIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsImltZ19jb250YWluZXIiLCJpbWciLCJkZXRhaWxfY29udGFpbmVyIiwidGl0bGUiLCJ1bCIsImxpIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJzaG9wX2xpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ })

});