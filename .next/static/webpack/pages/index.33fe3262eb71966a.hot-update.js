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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/Chart.style */ \"./Components/Styles/Chart.style.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title);\n/*const data = {\r\n    data: {\r\n        labels: [],\r\n        datasets: [{\r\n            label: 'Population',\r\n            data: [],\r\n            backgroundColor: [\r\n                \r\n            ],\r\n            borderWidth: 3,\r\n        }],\r\n    },\r\n}*/ var BarChart = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [\n            \"New York\",\n            \"Los Angeles\",\n            \"Chicago\",\n            \"Houston\",\n            \"Phoenix\",\n            \"Philadelphia\",\n            \"San Antonio\",\n            \"San Diego\",\n            \"Dallas\",\n            \"San Jose\"\n        ],\n        datasets: [\n            {\n                label: \"Population\",\n                data: [\n                    8622000,\n                    4085000,\n                    2670000,\n                    2378000,\n                    1743000,\n                    1599000,\n                    1579000,\n                    1469000,\n                    1400000,\n                    1036000\n                ],\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\", \n                ],\n                borderWidth: 0\n            }\n        ]\n    }), barData = ref[0], setBarData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        options: {\n            animations: {\n                tension: {\n                    duration: 5000,\n                    easing: \"linear\"\n                }\n            },\n            scales: {\n                yAxes: [\n                    {\n                        ticks: {\n                            beginAtZero: true\n                        }\n                    }\n                ]\n            },\n            title: {\n                display: true,\n                text: \"Data Orgranized In Bars\",\n                fontSize: 25\n            },\n            legend: {\n                display: true,\n                position: \"top\"\n            }\n        }\n    }), barOptions = ref1[0], setBarOptions = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__.StyledChart, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            className: \"bar\",\n            data: barData,\n            options: barOptions\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n            lineNumber: 75,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, _this);\n};\n_s(BarChart, \"js31mjGElUmV1TMcdqIg+lxeTl8=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Y7QUFDYTtBQUNtQzs7QUFDdEZJLG9EQUFjLENBQUNDLG1EQUFhLEVBQUVDLGlEQUFXLEVBQUVDLGdEQUFVLEVBQUVDLDRDQUFNLEVBQUVDLDJDQUFLLENBQUMsQ0FBQztBQUV0RTs7SUFnQkksSUFBOEJSLEdBb0I1QixHQXBCNEJBO1FBQzFCVyxNQUFNLEVBQUU7WUFBQyxVQUFVO1lBQUU7WUFBZSxTQUFTO1lBQUU7WUFBVztZQUFXLGNBQWM7WUFBRTs7WUFBNEIsUUFBUTs7U0FBYTtRQUN0SUMsUUFBUTtZQUNKO2dCQUNJQyxLQUFLLEVBQUU7Z0JBQ1BDLElBQUksRUFBRTtBQUFDO0FBQVM7QUFBUywyQkFBTztBQUFFO0FBQVM7QUFBUztBQUFTO0FBQVM7QUFBUztBQUFTO2lCQUFRO2dCQUNoR0M7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0M7Z0JBQ0RDO2FBQ0g7U0FDSjtLQUNKLENBQUMsRUFwQktDLE9BQU8sR0FBZ0JqQixHQW9CNUIsR0FwQlksRUFBRWtCLFVBQVUsR0FBSWxCLEdBb0I1QixHQXBCd0I7SUFzQjFCLElBQW9DQSxJQTJCbEMsR0EzQmtDQSxRQUFRLENBQUM7UUFDekNtQixPQUFPLEVBQUU7WUFDTEMsVUFBVSxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7b0JBQ0xDLFFBQVEsRUFBRSxJQUFJO29CQUNkQyxNQUFNLEVBQUUsUUFBUTtpQkFDbkI7YUFDSjtZQUNEQyxNQUFNLEVBQUU7Ozt3QkFHSUUsS0FBSyxFQUFFOzs7cUJBR1Y7aUJBQ0o7YUFDSjtZQUNERSxLQUFLLEVBQUU7Z0JBQ0hDOztnQkFFQUU7YUFDSDtZQUNEQyxNQUFNLEVBQUU7Z0JBQ0pILE9BQU8sRUFBRSxJQUFJO2dCQUNiSSxRQUFRLEVBQUUsS0FBSzthQUNsQjtTQUNKO0tBQ0osQ0FBQyxFQTNCS0M7SUE0QlA7a0JBRVE7WUFBS0UsU0FBUyxFQUFDLEtBQUs7WUFBQ3RCLElBQUksRUFBRUcsT0FBTztZQUFFRSxPQUFPLEVBQUVlOzs7Ozs7Ozs7O2FBQ25DLENBQ2pCO0NBQ0o7R0F4REt4QixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUEwRGQsZUFBZUEsUUFBUSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQ2hhcnQuanM/ZmIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IFN0eWxlZENoYXJ0IH0gZnJvbSAnLi9TdHlsZXMvQ2hhcnQuc3R5bGUnO1xyXG5pbXBvcnQge0NoYXJ0LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgTGVnZW5kLCBUaXRsZX0gZnJvbSAnY2hhcnQuanMnOyBcclxuQ2hhcnQucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIExlZ2VuZCwgVGl0bGUpO1xyXG5cclxuLypjb25zdCBkYXRhID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW10sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUG9wdWxhdGlvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMyxcclxuICAgICAgICB9XSxcclxuICAgIH0sXHJcbn0qL1xyXG5cclxuXHJcbmNvbnN0IEJhckNoYXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2JhckRhdGEsIHNldEJhckRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGxhYmVsczogWydOZXcgWW9yaycsICdMb3MgQW5nZWxlcycsICdDaGljYWdvJywgJ0hvdXN0b24nLCAnUGhvZW5peCcsICdQaGlsYWRlbHBoaWEnLCAnU2FuIEFudG9uaW8nLCAnU2FuIERpZWdvJywgJ0RhbGxhcycsICdTYW4gSm9zZSddLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9wdWxhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbODYyMjAwMCwgNDA4NTAwMCwgMjY3MDAwMCwgMjM3ODAwMCwgMTc0MzAwMCwgMTU5OTAwMCwgMTU3OTAwMCwgMTQ2OTAwMCwgMTQwMDAwMCwgMTAzNjAwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtiYXJPcHRpb25zLCBzZXRCYXJPcHRpb25zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHRlbnNpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0RhdGEgT3JncmFuaXplZCBJbiBCYXJzJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkQ2hhcnQ+XHJcbiAgICAgICAgICAgIDxCYXIgY2xhc3NOYW1lPSdiYXInIGRhdGE9e2JhckRhdGF9IG9wdGlvbnM9e2Jhck9wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRDaGFydD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCYXIiLCJTdHlsZWRDaGFydCIsIkNoYXJ0IiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIkxlZ2VuZCIsIlRpdGxlIiwicmVnaXN0ZXIiLCJCYXJDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYXJEYXRhIiwic2V0QmFyRGF0YSIsIm9wdGlvbnMiLCJhbmltYXRpb25zIiwidGVuc2lvbiIsImR1cmF0aW9uIiwiZWFzaW5nIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImZvbnRTaXplIiwibGVnZW5kIiwicG9zaXRpb24iLCJiYXJPcHRpb25zIiwic2V0QmFyT3B0aW9ucyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Chart.js\n"));

/***/ })

});