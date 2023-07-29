"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/id-tailwindcss-best-practices",{

/***/ "./src/hooks/useInsight.ts":
/*!*********************************!*\
  !*** ./src/hooks/useInsight.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useInsight; }\n/* harmony export */ });\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ \"../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"../../node_modules/.pnpm/swr@2.0.0_react@18.2.0/node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/fetcher */ \"./src/utils/fetcher.ts\");\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/api */ \"./src/helpers/api.ts\");\n\n\n\n\n\nconst INITIAL_VALUE = {\n    meta: {\n        views: 0,\n        shares: 0,\n        reactions: 0,\n        reactionsDetail: {\n            CLAPPING: 0,\n            THINKING: 0,\n            AMAZED: 0\n        }\n    },\n    metaUser: {\n        reactionsDetail: {\n            CLAPPING: 0,\n            THINKING: 0,\n            AMAZED: 0\n        }\n    },\n    metaSection: {}\n};\nfunction useInsight(param) {\n    let { slug , contentType , contentTitle , countView =true  } = param;\n    // #region handle for batch click\n    const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        CLAPPING: null,\n        THINKING: null,\n        AMAZED: null\n    });\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        CLAPPING: 0,\n        THINKING: 0,\n        AMAZED: 0\n    });\n    // #endregion\n    const { isLoading , data , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/content/\".concat(slug), _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        fallbackData: INITIAL_VALUE\n    });\n    // post view count\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (countView) {\n            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.postView)({\n                slug,\n                contentType,\n                contentTitle\n            });\n        }\n    }, [\n        slug,\n        contentType,\n        contentTitle,\n        countView\n    ]);\n    const addShare = (param)=>{\n        let { type  } = param;\n        // optimistic update\n        mutate(lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {\n            meta: {\n                shares: data.meta.shares + 1\n            }\n        }), false);\n        (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.postShare)({\n            slug,\n            contentType,\n            contentTitle,\n            type\n        });\n    };\n    const addReaction = (param)=>{\n        let { type , section =undefined  } = param;\n        // optimistic update\n        mutate(lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {\n            meta: {\n                reactions: data.meta.reactions + 1,\n                reactionsDetail: {\n                    [type]: data.meta.reactionsDetail[type] + 1\n                }\n            },\n            metaUser: {\n                reactionsDetail: {\n                    [type]: data.metaUser.reactionsDetail[type] + 1\n                }\n            }\n        }), false);\n        // increment the current batch click count\n        count.current[type] += 1;\n        // debounce the batch click for sending the reaction data\n        clearTimeout(timer.current[type]);\n        timer.current[type] = setTimeout(()=>{\n            (0,_helpers_api__WEBPACK_IMPORTED_MODULE_4__.postReaction)({\n                slug,\n                contentType,\n                contentTitle,\n                type,\n                count: count.current[type],\n                section\n            }).finally(()=>{\n                // reset the batch click count to zero for the next batch\n                count.current[type] = 0;\n            });\n        }, 500);\n    };\n    return {\n        isLoading,\n        data,\n        addShare,\n        addReaction\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDQUM7UUFDQUc7UUFDQUU7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUluc2lnaHQudHM/YjVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50VHlwZSwgUmVhY3Rpb25UeXBlLCBTaGFyZVR5cGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAL3V0aWxzL2ZldGNoZXInO1xuaW1wb3J0IHsgcG9zdFJlYWN0aW9uLCBwb3N0U2hhcmUsIHBvc3RWaWV3IH0gZnJvbSAnQC9oZWxwZXJzL2FwaSc7XG5cbmltcG9ydCB0eXBlIHsgVENvbnRlbnRNZXRhRGV0YWlsIH0gZnJvbSAnQC90eXBlcyc7XG5cbmNvbnN0IElOSVRJQUxfVkFMVUU6IFRDb250ZW50TWV0YURldGFpbCA9IHtcbiAgbWV0YToge1xuICAgIHZpZXdzOiAwLFxuICAgIHNoYXJlczogMCxcbiAgICByZWFjdGlvbnM6IDAsXG4gICAgcmVhY3Rpb25zRGV0YWlsOiB7XG4gICAgICBDTEFQUElORzogMCxcbiAgICAgIFRISU5LSU5HOiAwLFxuICAgICAgQU1BWkVEOiAwLFxuICAgIH0sXG4gIH0sXG4gIG1ldGFVc2VyOiB7XG4gICAgcmVhY3Rpb25zRGV0YWlsOiB7XG4gICAgICBDTEFQUElORzogMCxcbiAgICAgIFRISU5LSU5HOiAwLFxuICAgICAgQU1BWkVEOiAwLFxuICAgIH0sXG4gIH0sXG4gIG1ldGFTZWN0aW9uOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUluc2lnaHQoe1xuICBzbHVnLFxuICBjb250ZW50VHlwZSxcbiAgY29udGVudFRpdGxlLFxuICBjb3VudFZpZXcgPSB0cnVlLFxufToge1xuICBzbHVnOiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlOiBDb250ZW50VHlwZTtcbiAgY29udGVudFRpdGxlOiBzdHJpbmc7XG4gIGNvdW50Vmlldz86IGJvb2xlYW47XG59KSB7XG4gIC8vICNyZWdpb24gaGFuZGxlIGZvciBiYXRjaCBjbGlja1xuICBjb25zdCB0aW1lciA9IHVzZVJlZjxSZWNvcmQ8UmVhY3Rpb25UeXBlLCBOb2RlSlMuVGltZW91dD4+KHtcbiAgICBDTEFQUElORzogbnVsbCxcbiAgICBUSElOS0lORzogbnVsbCxcbiAgICBBTUFaRUQ6IG51bGwsXG4gIH0pO1xuICBjb25zdCBjb3VudCA9IHVzZVJlZjxSZWNvcmQ8UmVhY3Rpb25UeXBlLCBudW1iZXI+Pih7XG4gICAgQ0xBUFBJTkc6IDAsXG4gICAgVEhJTktJTkc6IDAsXG4gICAgQU1BWkVEOiAwLFxuICB9KTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUjxUQ29udGVudE1ldGFEZXRhaWw+KFxuICAgIGAvYXBpL2NvbnRlbnQvJHtzbHVnfWAsXG4gICAgZmV0Y2hlcixcbiAgICB7XG4gICAgICBmYWxsYmFja0RhdGE6IElOSVRJQUxfVkFMVUUsXG4gICAgfVxuICApO1xuXG4gIC8vIHBvc3QgdmlldyBjb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3VudFZpZXcpIHtcbiAgICAgIHBvc3RWaWV3KHsgc2x1ZywgY29udGVudFR5cGUsIGNvbnRlbnRUaXRsZSB9KTtcbiAgICB9XG4gIH0sIFtzbHVnLCBjb250ZW50VHlwZSwgY29udGVudFRpdGxlLCBjb3VudFZpZXddKTtcblxuICBjb25zdCBhZGRTaGFyZSA9ICh7IHR5cGUgfTogeyB0eXBlOiBTaGFyZVR5cGUgfSkgPT4ge1xuICAgIC8vIG9wdGltaXN0aWMgdXBkYXRlXG4gICAgbXV0YXRlKFxuICAgICAgbWVyZ2Uoe30sIGRhdGEsIHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHNoYXJlczogZGF0YS5tZXRhLnNoYXJlcyArIDEsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHBvc3RTaGFyZSh7XG4gICAgICBzbHVnLFxuICAgICAgY29udGVudFR5cGUsXG4gICAgICBjb250ZW50VGl0bGUsXG4gICAgICB0eXBlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFJlYWN0aW9uID0gKHtcbiAgICB0eXBlLFxuICAgIHNlY3Rpb24gPSB1bmRlZmluZWQsXG4gIH06IHtcbiAgICB0eXBlOiBSZWFjdGlvblR5cGU7XG4gICAgc2VjdGlvbj86IHN0cmluZztcbiAgfSkgPT4ge1xuICAgIC8vIG9wdGltaXN0aWMgdXBkYXRlXG4gICAgbXV0YXRlKFxuICAgICAgbWVyZ2Uoe30sIGRhdGEsIHtcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHJlYWN0aW9uczogZGF0YS5tZXRhLnJlYWN0aW9ucyArIDEsXG4gICAgICAgICAgcmVhY3Rpb25zRGV0YWlsOiB7XG4gICAgICAgICAgICBbdHlwZV06IGRhdGEubWV0YS5yZWFjdGlvbnNEZXRhaWxbdHlwZV0gKyAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGFVc2VyOiB7XG4gICAgICAgICAgcmVhY3Rpb25zRGV0YWlsOiB7XG4gICAgICAgICAgICBbdHlwZV06IGRhdGEubWV0YVVzZXIucmVhY3Rpb25zRGV0YWlsW3R5cGVdICsgMSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGN1cnJlbnQgYmF0Y2ggY2xpY2sgY291bnRcbiAgICBjb3VudC5jdXJyZW50W3R5cGVdICs9IDE7XG5cbiAgICAvLyBkZWJvdW5jZSB0aGUgYmF0Y2ggY2xpY2sgZm9yIHNlbmRpbmcgdGhlIHJlYWN0aW9uIGRhdGFcbiAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudFt0eXBlXSk7XG4gICAgdGltZXIuY3VycmVudFt0eXBlXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcG9zdFJlYWN0aW9uKHtcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIGNvbnRlbnRUaXRsZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY291bnQ6IGNvdW50LmN1cnJlbnRbdHlwZV0sXG4gICAgICAgIHNlY3Rpb24sXG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIGJhdGNoIGNsaWNrIGNvdW50IHRvIHplcm8gZm9yIHRoZSBuZXh0IGJhdGNoXG4gICAgICAgIGNvdW50LmN1cnJlbnRbdHlwZV0gPSAwO1xuICAgICAgfSk7XG4gICAgfSwgNTAwKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZyxcbiAgICBkYXRhLFxuICAgIGFkZFNoYXJlLFxuICAgIGFkZFJlYWN0aW9uLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIm1lcmdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU1dSIiwiZmV0Y2hlciIsInBvc3RSZWFjdGlvbiIsInBvc3RTaGFyZSIsInBvc3RWaWV3IiwiSU5JVElBTF9WQUxVRSIsIm1ldGEiLCJ2aWV3cyIsInNoYXJlcyIsInJlYWN0aW9ucyIsInJlYWN0aW9uc0RldGFpbCIsIkNMQVBQSU5HIiwiVEhJTktJTkciLCJBTUFaRUQiLCJtZXRhVXNlciIsIm1ldGFTZWN0aW9uIiwidXNlSW5zaWdodCIsInNsdWciLCJjb250ZW50VHlwZSIsImNvbnRlbnRUaXRsZSIsImNvdW50VmlldyIsInRpbWVyIiwiY291bnQiLCJpc0xvYWRpbmciLCJkYXRhIiwibXV0YXRlIiwiZmFsbGJhY2tEYXRhIiwiYWRkU2hhcmUiLCJ0eXBlIiwiYWRkUmVhY3Rpb24iLCJzZWN0aW9uIiwidW5kZWZpbmVkIiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJmaW5hbGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useInsight.ts\n"));

/***/ })

});