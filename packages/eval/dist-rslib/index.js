import { __webpack_require__ } from "./runtime.js";
__webpack_require__.add({
    "./src/index.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
            L: ()=>evalFunc
        });
        function evalFunc() {
            return eval("1");
        }
    }
});
const src = __webpack_require__("./src/index.ts");
var L = src.L;
export { L as evalFunc };
