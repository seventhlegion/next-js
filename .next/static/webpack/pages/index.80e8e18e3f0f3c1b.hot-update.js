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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/Chart.style */ \"./Components/Styles/Chart.style.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\n/*const data = {\r\n    data: {\r\n        labels: [],\r\n        datasets: [{\r\n            label: 'Population',\r\n            data: [],\r\n            backgroundColor: [\r\n                \r\n            ],\r\n            borderWidth: 3,\r\n        }],\r\n    },\r\n}*/ var BarChart = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [\n            \"New York\",\n            \"Los Angeles\",\n            \"Chicago\",\n            \"Houston\",\n            \"Phoenix\",\n            \"Philadelphia\",\n            \"San Antonio\",\n            \"San Diego\",\n            \"Dallas\",\n            \"San Jose\"\n        ],\n        datasets: [\n            {\n                label: \"test label\",\n                data: [\n                    8622000,\n                    4085000,\n                    2670000,\n                    2378000,\n                    1743000,\n                    1599000,\n                    1579000,\n                    1469000,\n                    1400000,\n                    1036000\n                ],\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\", \n                ],\n                borderWidth: 3\n            }\n        ]\n    }), barData = ref[0], setBarData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        options: {\n            scales: {\n                yAxes: [\n                    {\n                        ticks: {\n                            beginAtZero: true\n                        }\n                    }\n                ]\n            },\n            title: {\n                display: true,\n                text: \"Data Orgranized In Bars\"\n            },\n            legend: {\n                display: true,\n                position: \"top\"\n            }\n        }\n    }), barOptions = ref1[0], setBarOptions = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__.StyledChart, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            className: \"bar\",\n            data: barData,\n            options: barOptions\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, _this);\n};\n_s(BarChart, \"GjijKJ+o1VvioOvfM2oMGhjaa1I=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Y7QUFDYTtBQUM0Qjs7QUFDL0VJLG9EQUFjLENBQUNDLG1EQUFhLEVBQUVDLGlEQUFXLEVBQUVDLGdEQUFVLEVBQUVDLDRDQUFNLENBQUMsQ0FBQztBQUUvRDs7SUFnQkksSUFBOEJQLEdBb0I1QixHQXBCNEJBO1FBQzFCVSxNQUFNLEVBQUU7WUFBQyxVQUFVO1lBQUU7WUFBZSxTQUFTO1lBQUU7WUFBVztZQUFXLGNBQWM7WUFBRTs7WUFBNEIsUUFBUTs7U0FBYTtRQUN0SUMsUUFBUTtZQUNKO2dCQUNJQyxLQUFLLEVBQUU7Z0JBQ1BDLElBQUksRUFBRTtBQUFDO0FBQVM7QUFBUywyQkFBTztBQUFFO0FBQVM7QUFBUztBQUFTO0FBQVM7QUFBUztBQUFTO2lCQUFRO2dCQUNoR0M7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0M7Z0JBQ0RDO2FBQ0g7U0FDSjtLQUNKLENBQUMsRUFwQktDLE9BQU8sR0FBZ0JoQixHQW9CNUIsR0FwQlksRUFBRWlCLFVBQVUsR0FBSWpCLEdBb0I1QixHQXBCd0I7SUFzQjFCLElBQW9DQSxJQW9CbEMsR0FwQmtDQSxRQUFRLENBQUM7UUFDekNrQixPQUFPLEVBQUU7WUFDTEMsTUFBTSxFQUFFO2dCQUNKQyxLQUFLLEVBQUU7b0JBQ0g7d0JBQ0lDLEtBQUssRUFBRTs0QkFDSEMsV0FBVyxFQUFFLElBQUk7O3FCQUV4Qjs7O1lBR1RDLEtBQUssRUFBRTs4REFDSSxFQUFFO2dCQUNURTthQUNIO1lBQ0RDLE1BQU0sRUFBRTtnQkFDSkY7Z0JBQ0FHLFFBQVEsRUFBRSxLQUFLO2FBQ2xCO1NBQ0o7S0FDSixDQUFDLEVBcEJLQyxVQUFVLEdBQW1CNUI7SUFxQnBDOztZQUVhOEI7WUFBZ0JqQixJQUFJLEVBQUVHLE9BQU87WUFBRUUsT0FBTyxFQUFFVSxVQUFVOzs7Ozs7Ozs7O2FBQzdDLENBQ2pCO0NBQ0o7R0FqREtuQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtRGQsZUFBZUEsUUFBUSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQ2hhcnQuanM/ZmIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IFN0eWxlZENoYXJ0IH0gZnJvbSAnLi9TdHlsZXMvQ2hhcnQuc3R5bGUnO1xyXG5pbXBvcnQge0NoYXJ0LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgTGVnZW5kfSBmcm9tICdjaGFydC5qcyc7IFxyXG5DaGFydC5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgTGVnZW5kKTtcclxuXHJcbi8qY29uc3QgZGF0YSA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IFtdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ1BvcHVsYXRpb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgfV0sXHJcbiAgICB9LFxyXG59Ki9cclxuXHJcblxyXG5jb25zdCBCYXJDaGFydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtiYXJEYXRhLCBzZXRCYXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsYWJlbHM6IFsnTmV3IFlvcmsnLCAnTG9zIEFuZ2VsZXMnLCAnQ2hpY2FnbycsICdIb3VzdG9uJywgJ1Bob2VuaXgnLCAnUGhpbGFkZWxwaGlhJywgJ1NhbiBBbnRvbmlvJywgJ1NhbiBEaWVnbycsICdEYWxsYXMnLCAnU2FuIEpvc2UnXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ3Rlc3QgbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzg2MjIwMDAsIDQwODUwMDAsIDI2NzAwMDAsIDIzNzgwMDAsIDE3NDMwMDAsIDE1OTkwMDAsIDE1NzkwMDAsIDE0NjkwMDAsIDE0MDAwMDAsIDEwMzYwMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbYmFyT3B0aW9ucywgc2V0QmFyT3B0aW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0YSBPcmdyYW5pemVkIEluIEJhcnMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkQ2hhcnQ+XHJcbiAgICAgICAgICAgIDxCYXIgY2xhc3NOYW1lPSdiYXInIGRhdGE9e2JhckRhdGF9IG9wdGlvbnM9e2Jhck9wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRDaGFydD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCYXIiLCJTdHlsZWRDaGFydCIsIkNoYXJ0IiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwiQmFyQ2hhcnQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwiYmFyRGF0YSIsInNldEJhckRhdGEiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYmFyT3B0aW9ucyIsInNldEJhck9wdGlvbnMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Chart.js\n"));

/***/ })

});