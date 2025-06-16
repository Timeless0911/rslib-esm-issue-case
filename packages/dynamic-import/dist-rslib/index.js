import * as __WEBPACK_EXTERNAL_MODULE_node_path_c5b9b54f__ from "node:path";
var __webpack_modules__ = {
    "node:path": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_node_path_c5b9b54f__;
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
__webpack_require__.m = __webpack_modules__;
(()=>{
    __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.f = {};
    __webpack_require__.e = (chunkId)=>Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key)=>{
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }, []));
})();
(()=>{
    __webpack_require__.u = (chunkId)=>"" + chunkId + ".js";
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    var installedChunks = {
        980: 0
    };
    var installChunk = (data)=>{
        var __webpack_ids__ = data.__webpack_ids__;
        var __webpack_modules__ = data.__webpack_modules__;
        var __webpack_runtime__ = data.__webpack_runtime__;
        var moduleId, chunkId, i = 0;
        for(moduleId in __webpack_modules__)if (__webpack_require__.o(__webpack_modules__, moduleId)) __webpack_require__.m[moduleId] = __webpack_modules__[moduleId];
        if (__webpack_runtime__) __webpack_runtime__(__webpack_require__);
        for(; i < __webpack_ids__.length; i++){
            chunkId = __webpack_ids__[i];
            if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
            installedChunks[__webpack_ids__[i]] = 0;
        }
    };
    __webpack_require__.f.j = function(chunkId, promises) {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
        if (0 !== installedChunkData) if (installedChunkData) promises.push(installedChunkData[1]);
        else {
            var promise = import("./" + __webpack_require__.u(chunkId)).then(installChunk, (e)=>{
                if (0 !== installedChunks[chunkId]) installedChunks[chunkId] = void 0;
                throw e;
            });
            var promise = Promise.race([
                promise,
                new Promise((resolve)=>{
                    installedChunkData = installedChunks[chunkId] = [
                        resolve
                    ];
                })
            ]);
            promises.push(installedChunkData[1] = promise);
        }
    };
})();
async function main() {
    const { concat } = await __webpack_require__.e("437").then(__webpack_require__.bind(__webpack_require__, "./src/foo.ts"));
    concat("hello", "world");
}
export { main };
