"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// pages/api/checkout_sessions.js\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const session = await stripe.checkout.sessions.create({\n                payment_method_types: [\n                    \"card\"\n                ],\n                line_items: [\n                    {\n                        price: req.body.priceId,\n                        quantity: 1\n                    }\n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/cancel`\n            });\n            res.status(200).json({\n                url: session.url\n            });\n        } catch (err) {\n            res.status(err.statusCode || 500).json({\n                error: err.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQztBQUNqQyxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyx3QkFBVUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFFL0MsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxVQUFVLE1BQU1ULE9BQU9VLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7Z0JBQ3BEQyxzQkFBc0I7b0JBQUM7aUJBQU87Z0JBQzlCQyxZQUFZO29CQUFDO3dCQUFFQyxPQUFPVCxJQUFJVSxJQUFJLENBQUNDLE9BQU87d0JBQUVDLFVBQVU7b0JBQUU7aUJBQUU7Z0JBQ3REQyxNQUFNO2dCQUNOQyxhQUFhLENBQUMsRUFBRWQsSUFBSWUsT0FBTyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUM1Q0MsWUFBWSxDQUFDLEVBQUVqQixJQUFJZSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDNUM7WUFFQWYsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUtqQixRQUFRaUIsR0FBRztZQUFDO1FBQzFDLEVBQUUsT0FBT0MsS0FBSztZQUNacEIsSUFBSWlCLE1BQU0sQ0FBQ0csSUFBSUMsVUFBVSxJQUFJLEtBQUtILElBQUksQ0FBQztnQkFBRUksT0FBT0YsSUFBSUcsT0FBTztZQUFDO1FBQzlEO0lBQ0YsT0FBTztRQUNMdkIsSUFBSXdCLFNBQVMsQ0FBQyxTQUFTO1FBQ3ZCeEIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLUSxHQUFHLENBQUM7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25hLWNvbGxlY3RpdmUtc3RhcnRlci8uL3BhZ2VzL2FwaS9jaGVja291dF9zZXNzaW9ucy5qcz8wNzlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9jaGVja291dF9zZXNzaW9ucy5qc1xuY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiByZXEuYm9keS5wcmljZUlkLCBxdWFudGl0eTogMSB9XSxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9jYW5jZWxgXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImxpbmVfaXRlbXMiLCJwcmljZSIsImJvZHkiLCJwcmljZUlkIiwicXVhbnRpdHkiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInN0YXR1cyIsImpzb24iLCJ1cmwiLCJlcnIiLCJzdGF0dXNDb2RlIiwiZXJyb3IiLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();