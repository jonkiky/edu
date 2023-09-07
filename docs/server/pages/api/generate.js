"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 2079:
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ 9722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2079);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);
openai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const openai = new openai__WEBPACK_IMPORTED_MODULE_0__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const prompt = req.body.user || req.body.system || "";
    if (prompt.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid query"
            }
        });
        return;
    }
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": req.body.system
                },
                {
                    "role": "user",
                    "content": req.body.user
                }
            ],
            temperature: 0,
            max_tokens: 3007,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        res.status(200).json({
            result: response
        });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: "An error occurred during your request."
                }
            });
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9722));
module.exports = __webpack_exports__;

})();