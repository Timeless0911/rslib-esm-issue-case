import * as __WEBPACK_EXTERNAL_MODULE__value_index_js_adebcbdb__ from "./value/index.js";
var __webpack_modules__ = {
    "../src/value": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__value_index_js_adebcbdb__;
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
__webpack_require__("../src/value");
