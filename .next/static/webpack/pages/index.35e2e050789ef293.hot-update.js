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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles/Chart.style */ \"./Components/Styles/Chart.style.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title);\n/*const data = {\r\n    data: {\r\n        labels: [],\r\n        datasets: [{\r\n            label: 'Population',\r\n            data: [],\r\n            backgroundColor: [\r\n                \r\n            ],\r\n            borderWidth: 3,\r\n        }],\r\n    },\r\n}*/ var BarChart = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [\n            \"New York\",\n            \"Los Angeles\",\n            \"Chicago\",\n            \"Houston\",\n            \"Phoenix\",\n            \"Philadelphia\",\n            \"San Antonio\",\n            \"San Diego\",\n            \"Dallas\",\n            \"San Jose\"\n        ],\n        datasets: [\n            {\n                label: \"Population\",\n                data: [\n                    8622000,\n                    4085000,\n                    2670000,\n                    2378000,\n                    1743000,\n                    1599000,\n                    1579000,\n                    1469000,\n                    1400000,\n                    1036000\n                ],\n                backgroundColor: [\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\",\n                    \"rgba(54, 162, 235, 0.6)\",\n                    \"rgba(255, 206, 86, 0.6)\",\n                    \"rgba(75, 192, 192, 0.6)\",\n                    \"rgba(255, 99, 132, 0.6)\", \n                ],\n                borderWidth: 0\n            }\n        ]\n    }), barData = ref[0], setBarData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        options: {\n            animations: {\n                te: te\n            },\n            scales: {\n                yAxes: [\n                    {\n                        ticks: {\n                            beginAtZero: true\n                        }\n                    }\n                ]\n            },\n            title: {\n                display: true,\n                text: \"Data Orgranized In Bars\",\n                fontSize: 25\n            },\n            legend: {\n                display: true,\n                position: \"top\"\n            }\n        }\n    }), barOptions = ref1[0], setBarOptions = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Styles_Chart_style__WEBPACK_IMPORTED_MODULE_2__.StyledChart, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            className: \"bar\",\n            data: barData,\n            options: barOptions\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\7th_legion\\\\Desktop\\\\next.js\\\\Components\\\\Chart.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, _this);\n};\n_s(BarChart, \"Z39EeS7/H45NAm57DRfvazQvcvc=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Y7QUFDYTtBQUNtQzs7QUFDdEZJLG9EQUFjLENBQUNDLG1EQUFhLEVBQUVDLGlEQUFXLEVBQUVDLGdEQUFVLEVBQUVDLDRDQUFNLEVBQUVDLDJDQUFLLENBQUMsQ0FBQztBQUV0RTs7SUFnQkksSUFBOEJSLEdBb0I1QixHQXBCNEJBO1FBQzFCVyxNQUFNLEVBQUU7WUFBQyxVQUFVO1lBQUU7WUFBZSxTQUFTO1lBQUU7WUFBVztZQUFXLGNBQWM7WUFBRTs7WUFBNEIsUUFBUTs7U0FBYTtRQUN0SUMsUUFBUTtZQUNKO2dCQUNJQyxLQUFLLEVBQUU7Z0JBQ1BDLElBQUksRUFBRTtBQUFDO0FBQVM7QUFBUywyQkFBTztBQUFFO0FBQVM7QUFBUztBQUFTO0FBQVM7QUFBUztBQUFTO2lCQUFRO2dCQUNoR0M7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0M7Z0JBQ0RDO2FBQ0g7U0FDSjtLQUNKLENBQUMsRUFwQktDLE9BQU8sR0FBZ0JqQixHQW9CNUIsR0FwQlksRUFBRWtCLFVBQVUsR0FBSWxCLEdBb0I1QixHQXBCd0I7SUFzQjFCLElBQW9DQSxJQXdCbEMsR0F4QmtDQSxRQUFRLENBQUM7UUFDekNtQixPQUFPLEVBQUU7WUFDTEMsVUFBVSxFQUFFO2dCQUNSQyxFQUFFLEVBQUZBLEVBQUU7YUFDTDtZQUNEQyxNQUFNLEVBQUU7Z0JBQ0pDLEtBQUssRUFBRTs7d0JBRUNDLEtBQUs7OztxQkFHUjs4REFDSjthQUNKO1lBQ0RFLEtBQUssRUFBRTtnQkFDSEM7O2dCQUVBRTthQUNIO1lBQ0RDLE1BQU0sRUFBRTtnQkFDSkgsT0FBTyxFQUFFLElBQUk7Z0JBQ2JJLFFBQVEsRUFBRSxLQUFLO2FBQ2xCO1NBQ0o7S0FDSixDQUFDLEVBeEJLQztJQXlCUDtrQkFFUTtZQUFLRSxTQUFTLEVBQUMsS0FBSztZQUFDcEIsSUFBSSxFQUFFRyxPQUFPO1lBQUVFLE9BQU8sRUFBRWE7Ozs7Ozs7Ozs7YUFDbkMsQ0FDakI7Q0FDSjtHQXJES3RCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXVEZCxlQUFlQSxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DaGFydC5qcz9mYjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IHsgU3R5bGVkQ2hhcnQgfSBmcm9tICcuL1N0eWxlcy9DaGFydC5zdHlsZSc7XHJcbmltcG9ydCB7Q2hhcnQsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBMZWdlbmQsIFRpdGxlfSBmcm9tICdjaGFydC5qcyc7IFxyXG5DaGFydC5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgTGVnZW5kLCBUaXRsZSk7XHJcblxyXG4vKmNvbnN0IGRhdGEgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBbXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdQb3B1bGF0aW9uJyxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSxcclxufSovXHJcblxyXG5cclxuY29uc3QgQmFyQ2hhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYmFyRGF0YSwgc2V0QmFyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbGFiZWxzOiBbJ05ldyBZb3JrJywgJ0xvcyBBbmdlbGVzJywgJ0NoaWNhZ28nLCAnSG91c3RvbicsICdQaG9lbml4JywgJ1BoaWxhZGVscGhpYScsICdTYW4gQW50b25pbycsICdTYW4gRGllZ28nLCAnRGFsbGFzJywgJ1NhbiBKb3NlJ10sXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQb3B1bGF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs4NjIyMDAwLCA0MDg1MDAwLCAyNjcwMDAwLCAyMzc4MDAwLCAxNzQzMDAwLCAxNTk5MDAwLCAxNTc5MDAwLCAxNDY5MDAwLCAxNDAwMDAwLCAxMDM2MDAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAwLjYpJyxcclxuICAgICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC42KScsXHJcbiAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNiknLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgW2Jhck9wdGlvbnMsIHNldEJhck9wdGlvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0RhdGEgT3JncmFuaXplZCBJbiBCYXJzJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkQ2hhcnQ+XHJcbiAgICAgICAgICAgIDxCYXIgY2xhc3NOYW1lPSdiYXInIGRhdGE9e2JhckRhdGF9IG9wdGlvbnM9e2Jhck9wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRDaGFydD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCYXIiLCJTdHlsZWRDaGFydCIsIkNoYXJ0IiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIkxlZ2VuZCIsIlRpdGxlIiwicmVnaXN0ZXIiLCJCYXJDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYXJEYXRhIiwic2V0QmFyRGF0YSIsIm9wdGlvbnMiLCJhbmltYXRpb25zIiwidGUiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImJhck9wdGlvbnMiLCJzZXRCYXJPcHRpb25zIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Chart.js\n"));

/***/ })

});