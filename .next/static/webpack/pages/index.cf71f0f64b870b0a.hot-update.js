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

/***/ "./Components/Chart.js":
/*!*****************************!*\
  !*** ./Components/Chart.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/Chart.style */ \"./Components/Styles/Chart.style.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement);\n/*const data = {\r\n    data: {\r\n        labels: [],\r\n        datasets: [{\r\n            label: 'Population',\r\n            data: [],\r\n            backgroundColor: [\r\n                \r\n            ],\r\n            borderWidth: 3,\r\n        }],\r\n    },\r\n}*/ var BarChart = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [\n            \"New York\",\n            \"Los Angeles\",\n            \"Chicago\",\n            \"Houston\",\n            \"Phoenix\",\n            \"Philadelphia\",\n            \"San Antonio\",\n            \"San Diego\",\n            \"Dallas\",\n            \"San Jose\"\n        ],\n        datasets: [\n            {\n                label: \"test label\",\n                data: [\n                    8622000,\n                    4085000,\n                    2670000,\n                    2378000,\n                    1743000,\n                    1599000,\n                    1579000,\n                    1469000,\n                    1400000,\n                    1036000\n                ],\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\", \n                ],\n                borderWidth: 3\n            }\n        ]\n    }), barData = ref[0], setBarData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        options: {\n            scales: {\n                yAxes: [\n                    {\n                        ticks: {\n                            beginAtZero: true\n                        }\n                    }\n                ]\n            },\n            title: {\n                display: true,\n                text: \"Data Orgranized In Bars\",\n                fontSize: 25\n            },\n            legend: {\n                display: true,\n                position: \"\"\n            }\n        }\n    }), barOptions = ref1[0], setBarOptions = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__.StyledChart, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            className: \"bar\",\n            data: barData,\n            options: barOptions\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this);\n};\n_s(BarChart, \"W+uXh389zhr4pL8yv2DHWko9zPo=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Y7QUFDYTtBQUNvQjs7QUFDdkVJLG9EQUFjLENBQUNDLG1EQUFhLEVBQUVDLGlEQUFXLEVBQUVDLGdEQUFVLENBQUMsQ0FBQztBQUV2RDs7SUFnQkksSUFBOEJOLEdBb0I1QixHQXBCNEJBO1FBQzFCUyxNQUFNLEVBQUU7WUFBQyxVQUFVO1lBQUU7WUFBZSxTQUFTO1lBQUU7WUFBVztZQUFXLGNBQWM7WUFBRTs7WUFBNEIsUUFBUTs7U0FBYTtRQUN0SUMsUUFBUTtZQUNKO2dCQUNJQyxLQUFLLEVBQUU7Z0JBQ1BDLElBQUksRUFBRTtBQUFDO0FBQVM7QUFBUywyQkFBTztBQUFFO0FBQVM7QUFBUztBQUFTO0FBQVM7QUFBUztBQUFTO2lCQUFRO2dCQUNoR0M7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0M7Z0JBQ0RDO2FBQ0g7U0FDSjtLQUNKLENBQUMsRUFwQktDLE9BQU8sR0FBZ0JmLEdBb0I1QixHQXBCWSxFQUFFZ0IsVUFBVSxHQUFJaEIsR0FvQjVCLEdBcEJ3QjtJQXNCMUIsSUFBb0NBLElBcUJsQyxHQXJCa0NBLFFBQVEsQ0FBQztRQUN6Q2lCLE9BQU8sRUFBRTtZQUNMQyxNQUFNLEVBQUU7Z0JBQ0pDLEtBQUssRUFBRTtvQkFDSDt3QkFDSUMsS0FBSyxFQUFFOzRCQUNIQyxXQUFXLEVBQUUsSUFBSTs7cUJBRXhCOzs7WUFHVEMsS0FBSyxFQUFFOzhEQUNJLEVBQUU7Z0JBQ1RFO2dCQUNBQzthQUNIO1lBQ0RDLE1BQU0sRUFBRTtnQkFDSkgsT0FBTyxFQUFFLElBQUk7Z0JBQ2JJLFFBQVEsRUFBRSxFQUFFO2FBQ2Y7U0FDSjtLQUNKLENBQUMsRUFyQktDO0lBc0JQO2tCQUVRO1lBQUtFLFNBQVMsRUFBQyxLQUFLO1lBQUNsQixJQUFJLEVBQUVHLE9BQU87WUFBRUUsT0FBTyxFQUFFVzs7Ozs7Ozs7OzthQUNuQyxDQUNqQjtDQUNKO0dBbERLcEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBb0RkLGVBQWVBLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NoYXJ0LmpzP2ZiMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBTdHlsZWRDaGFydCB9IGZyb20gJy4vU3R5bGVzL0NoYXJ0LnN0eWxlJztcclxuaW1wb3J0IHtDaGFydCwgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnR9IGZyb20gJ2NoYXJ0LmpzJzsgXHJcbkNoYXJ0LnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50KTtcclxuXHJcbi8qY29uc3QgZGF0YSA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IFtdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ1BvcHVsYXRpb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgfV0sXHJcbiAgICB9LFxyXG59Ki9cclxuXHJcblxyXG5jb25zdCBCYXJDaGFydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtiYXJEYXRhLCBzZXRCYXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsYWJlbHM6IFsnTmV3IFlvcmsnLCAnTG9zIEFuZ2VsZXMnLCAnQ2hpY2FnbycsICdIb3VzdG9uJywgJ1Bob2VuaXgnLCAnUGhpbGFkZWxwaGlhJywgJ1NhbiBBbnRvbmlvJywgJ1NhbiBEaWVnbycsICdEYWxsYXMnLCAnU2FuIEpvc2UnXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ3Rlc3QgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzg2MjIwMDAsIDQwODUwMDAsIDI2NzAwMDAsIDIzNzgwMDAsIDE3NDMwMDAsIDE1OTkwMDAsIDE1NzkwMDAsIDE0NjkwMDAsIDE0MDAwMDAsIDEwMzYwMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbYmFyT3B0aW9ucywgc2V0QmFyT3B0aW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0YSBPcmdyYW5pemVkIEluIEJhcnMnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDI1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRDaGFydD5cclxuICAgICAgICAgICAgPEJhciBjbGFzc05hbWU9J2JhcicgZGF0YT17YmFyRGF0YX0gb3B0aW9ucz17YmFyT3B0aW9uc30gLz5cclxuICAgICAgICA8L1N0eWxlZENoYXJ0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJhciIsIlN0eWxlZENoYXJ0IiwiQ2hhcnQiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwicmVnaXN0ZXIiLCJCYXJDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYXJEYXRhIiwic2V0QmFyRGF0YSIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImJhck9wdGlvbnMiLCJzZXRCYXJPcHRpb25zIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Chart.js\n"));

/***/ })

});