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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/Chart.style */ \"./Components/Styles/Chart.style.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement);\n/*const data = {\r\n    data: {\r\n        labels: [],\r\n        datasets: [{\r\n            label: 'Population',\r\n            data: [8622000, 4085000, 2670000, 2378000, 1743000, 1599000, 157900, 1469000, 1400000, 1036000],\r\n            backgroundColor: [\r\n                'rgba(255, 99, 132, 0.6)',\r\n                'rgba(54, 162, 235, 0.6)',\r\n                'rgba(255, 206, 86, 0.6)',\r\n                'rgba(75, 192, 192, 0.6)',\r\n                'rgba(255, 99, 132, 0.6)',\r\n                'rgba(54, 162, 235, 0.6)',\r\n                'rgba(255, 206, 86, 0.6)',\r\n                'rgba(75, 192, 192, 0.6)',\r\n                'rgba(255, 99, 132, 0.6)',\r\n            ],\r\n            borderWidth: 3,\r\n        }],\r\n    },\r\n}*/ var BarChart = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [\n            \"New York\",\n            \"Los Angeles\",\n            \"Chicago\",\n            \"Houston\",\n            \"Phoenix\",\n            \"Philadelphia\",\n            \"San Antonio\",\n            \"San Diego\",\n            \"Dallas\",\n            \"San Jose\"\n        ],\n        datasets: [\n            {\n                label: \"test label\",\n                data: [\n                    48,\n                    35,\n                    73,\n                    82\n                ],\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\"\n                ],\n                borderWidth: 3\n            }\n        ]\n    }), barData = ref[0], setBarData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        options: {\n            scales: {\n                yAxes: [\n                    {\n                        ticks: {\n                            beginAtZero: true\n                        }\n                    }\n                ]\n            },\n            title: {\n                display: true,\n                text: \"Data Orgranized In Bars\",\n                fontSize: 25\n            },\n            legend: {\n                display: true,\n                position: \"top\"\n            }\n        }\n    }), barOptions = ref1[0], setBarOptions = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__.StyledChart, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            className: \"bar\",\n            data: barData,\n            options: barOptions\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, _this);\n};\n_s(BarChart, \"D1IqLaEFlqP51UDI3jXrULqfGRc=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Y7QUFDYTtBQUNvQjs7QUFDdkVJLG9EQUFjLENBQUNDLG1EQUFhLEVBQUVDLGlEQUFXLEVBQUVDLGdEQUFVLENBQUMsQ0FBQztBQUV2RDs7SUF3QkksSUFBOEJOLEdBb0I1QixHQXBCNEJBO1FBQzFCUyxNQUFNLEVBQUU7WUFBQyxVQUFVO1lBQUUsYUFBYTtZQUFFLFNBQVM7WUFBRSxTQUFTO1lBQUUsU0FBUztZQUFFLGNBQWM7WUFBRSxhQUFhO1lBQUUsV0FBVztZQUFFLFFBQVE7WUFBRSxVQUFVO1NBQUM7UUFDdElDLFFBQVEsRUFBRTtZQUNOO2dCQUNJQyxLQUFLLEVBQUU7O0FBRUg7QUFDQSxzQkFBRTtBQUNGO0FBQ0EsNkRBQUU7aUJBQ0w7Z0JBQ0RFO29CQUNJO29CQUNBO29CQUNBO29CQUNBO2lCQUNIO2dCQUNEQzthQUNIO1NBQ0o7S0FDSixDQUFDLEVBcEJLQyxPQUFPLEdBQWdCZixHQW9CNUI7SUFFRixJQUFvQ0E7UUFDaENpQixPQUFPLEVBQUU7WUFDTEM7Z0JBQ0lDLEtBQUssRUFBRTtvQkFDSDs7OztxQkFJQztpQkFDSjthQUNKO1lBQ0RHLEtBQUssRUFBRTtnQkFDSEMsT0FBTyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRTtnQkFDTkMsUUFBUSxFQUFFLEVBQUU7YUFDZjtZQUNEQyxNQUFNLEVBQUU7OzthQUdQO1NBQ0o7S0FDSixDQUFDLEVBckJLRSxVQUFVO0lBc0JqQjtrQkFFUTtZQUFLRSxTQUFTO1lBQU9sQixJQUFJLEVBQUVHLE9BQU87WUFBRUUsT0FBTyxFQUFFVyxVQUFVOzs7OztpQkFBSTs7Ozs7YUFDakQsQ0FDakI7Q0FDSjtHQWxES3BCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQW9EZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NoYXJ0LmpzP2ZiMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgeyBTdHlsZWRDaGFydCB9IGZyb20gJy4vU3R5bGVzL0NoYXJ0LnN0eWxlJztcclxuaW1wb3J0IHtDaGFydCwgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnR9IGZyb20gJ2NoYXJ0LmpzJzsgXHJcbkNoYXJ0LnJlZ2lzdGVyKENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50KTtcclxuXHJcbi8qY29uc3QgZGF0YSA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IFtdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ1BvcHVsYXRpb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBbODYyMjAwMCwgNDA4NTAwMCwgMjY3MDAwMCwgMjM3ODAwMCwgMTc0MzAwMCwgMTU5OTAwMCwgMTU3OTAwLCAxNDY5MDAwLCAxNDAwMDAwLCAxMDM2MDAwXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSxcclxufSovXHJcblxyXG5cclxuY29uc3QgQmFyQ2hhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYmFyRGF0YSwgc2V0QmFyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbGFiZWxzOiBbJ05ldyBZb3JrJywgJ0xvcyBBbmdlbGVzJywgJ0NoaWNhZ28nLCAnSG91c3RvbicsICdQaG9lbml4JywgJ1BoaWxhZGVscGhpYScsICdTYW4gQW50b25pbycsICdTYW4gRGllZ28nLCAnRGFsbGFzJywgJ1NhbiBKb3NlJ10sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICd0ZXN0IGxhYmVsJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICA0OCxcclxuICAgICAgICAgICAgICAgICAgICAzNSxcclxuICAgICAgICAgICAgICAgICAgICA3MyxcclxuICAgICAgICAgICAgICAgICAgICA4MlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC42KSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtiYXJPcHRpb25zLCBzZXRCYXJPcHRpb25zXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdEYXRhIE9yZ3Jhbml6ZWQgSW4gQmFycycsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZENoYXJ0PlxyXG4gICAgICAgICAgICA8QmFyIGNsYXNzTmFtZT0nYmFyJyBkYXRhPXtiYXJEYXRhfSBvcHRpb25zPXtiYXJPcHRpb25zfSAvPlxyXG4gICAgICAgIDwvU3R5bGVkQ2hhcnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQmFyIiwiU3R5bGVkQ2hhcnQiLCJDaGFydCIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJyZWdpc3RlciIsIkJhckNoYXJ0IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsImJhckRhdGEiLCJzZXRCYXJEYXRhIiwib3B0aW9ucyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYmFyT3B0aW9ucyIsInNldEJhck9wdGlvbnMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Chart.js\n"));

/***/ })

});