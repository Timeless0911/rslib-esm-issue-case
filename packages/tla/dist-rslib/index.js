var __webpack_modules__ = {
    "./src/foo.ts": function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, {
            R: ()=>foo
        });
        const foo = "1";
    },
    "./src/index.ts": function(module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.a(module, async function(__webpack_handle_async_dependencies__, __webpack_async_result__) {
            try {
                __webpack_require__.r(__webpack_exports__);
                __webpack_require__.d(__webpack_exports__, {
                    foo: ()=>_foo__WEBPACK_IMPORTED_MODULE_0__.R
                });
                var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/foo.ts");
                await f();
                __webpack_async_result__();
            } catch (e) {
                __webpack_async_result__(e);
            }
        }, 1);
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
(()=>{
    var webpackQueues = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__";
    var webpackExports = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__";
    var webpackError = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__";
    var resolveQueue = (queue)=>{
        if (queue && queue.d < 1) {
            queue.d = 1;
            queue.forEach((fn)=>fn.r--);
            queue.forEach((fn)=>fn.r-- ? fn.r++ : fn());
        }
    };
    var wrapDeps = (deps)=>deps.map((dep)=>{
            if (null !== dep && "object" == typeof dep) {
                if (dep[webpackQueues]) return dep;
                if (dep.then) {
                    var queue = [];
                    queue.d = 0;
                    dep.then((r)=>{
                        obj[webpackExports] = r;
                        resolveQueue(queue);
                    }, (e)=>{
                        obj[webpackError] = e;
                        resolveQueue(queue);
                    });
                    var obj = {};
                    obj[webpackQueues] = (fn)=>fn(queue);
                    return obj;
                }
            }
            var ret = {};
            ret[webpackQueues] = function() {};
            ret[webpackExports] = dep;
            return ret;
        });
    __webpack_require__.a = (module, body, hasAwait)=>{
        var queue;
        hasAwait && ((queue = []).d = -1);
        var depQueues = new Set();
        var exports = module.exports;
        var currentDeps;
        var outerResolve;
        var reject;
        var promise = new Promise((resolve, rej)=>{
            reject = rej;
            outerResolve = resolve;
        });
        promise[webpackExports] = exports;
        promise[webpackQueues] = (fn)=>{
            queue && fn(queue), depQueues.forEach(fn), promise["catch"](function() {});
        };
        module.exports = promise;
        body((deps)=>{
            currentDeps = wrapDeps(deps);
            var fn;
            var getResult = ()=>currentDeps.map((d)=>{
                    if (d[webpackError]) throw d[webpackError];
                    return d[webpackExports];
                });
            var promise = new Promise((resolve)=>{
                fn = ()=>resolve(getResult);
                fn.r = 0;
                var fnQueue = (q)=>q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)));
                currentDeps.map((dep)=>dep[webpackQueues](fnQueue));
            });
            return fn.r ? promise : getResult();
        }, (err)=>(err ? reject(promise[webpackError] = err) : outerResolve(exports), resolveQueue(queue)));
        queue && queue.d < 0 && (queue.d = 0);
    };
})();
(()=>{
    __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
})();
__webpack_require__("./src/index.ts");
