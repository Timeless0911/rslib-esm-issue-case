import * as __WEBPACK_EXTERNAL_MODULE_timers__ from "timers";
import * as __WEBPACK_EXTERNAL_MODULE_timers_promises_da6d1ba4__ from "timers/promises";
import * as __WEBPACK_EXTERNAL_MODULE_util__ from "util";
import { __webpack_require__ } from "./runtime.js";
__webpack_require__.add({
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/called-in-order.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var every = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/array.js").every;
        function hasCallsLeft(callMap, spy) {
            if (void 0 === callMap[spy.id]) callMap[spy.id] = 0;
            return callMap[spy.id] < spy.callCount;
        }
        function checkAdjacentCalls(callMap, spy, index, spies) {
            var calledBeforeNext = true;
            if (index !== spies.length - 1) calledBeforeNext = spy.calledBefore(spies[index + 1]);
            if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
                callMap[spy.id] += 1;
                return true;
            }
            return false;
        }
        function calledInOrder(spies) {
            var callMap = {};
            var _spies = arguments.length > 1 ? arguments : spies;
            return every(_spies, checkAdjacentCalls.bind(null, callMap));
        }
        module.exports = calledInOrder;
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/class-name.js": function(module) {
        function className(value) {
            const name = value.constructor && value.constructor.name;
            return name || null;
        }
        module.exports = className;
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/deprecated.js": function(__unused_webpack_module, exports) {
        exports.wrap = function(func, msg) {
            var wrapped = function() {
                exports.printWarning(msg);
                return func.apply(this, arguments);
            };
            if (func.prototype) wrapped.prototype = func.prototype;
            return wrapped;
        };
        exports.defaultMsg = function(packageName, funcName) {
            return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
        };
        exports.printWarning = function(msg) {
            if ("object" == typeof process && process.emitWarning) process.emitWarning(msg);
            else if (console.info) console.info(msg);
            else console.log(msg);
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/every.js": function(module) {
        module.exports = function(obj, fn) {
            var pass = true;
            try {
                obj.forEach(function() {
                    if (!fn.apply(this, arguments)) throw new Error();
                });
            } catch (e) {
                pass = false;
            }
            return pass;
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/function-name.js": function(module) {
        module.exports = function(func) {
            if (!func) return "";
            try {
                return func.displayName || func.name || (String(func).match(/function ([^\s(]+)/) || [])[1];
            } catch (e) {
                return "";
            }
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/global.js": function(module) {
        var globalObject;
        globalObject = "undefined" != typeof global ? global : "undefined" != typeof window ? window : self;
        module.exports = globalObject;
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/index.js": function(module, __unused_webpack_exports, __webpack_require__) {
        module.exports = {
            global: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/global.js"),
            calledInOrder: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/called-in-order.js"),
            className: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/class-name.js"),
            deprecated: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/deprecated.js"),
            every: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/every.js"),
            functionName: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/function-name.js"),
            orderByFirstCall: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/order-by-first-call.js"),
            prototypes: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/index.js"),
            typeOf: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/type-of.js"),
            valueToString: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/value-to-string.js")
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/order-by-first-call.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var sort = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/array.js").sort;
        var slice = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/array.js").slice;
        function comparator(a, b) {
            var aCall = a.getCall(0);
            var bCall = b.getCall(0);
            var aId = aCall && aCall.callId || -1;
            var bId = bCall && bCall.callId || -1;
            return aId < bId ? -1 : 1;
        }
        function orderByFirstCall(spies) {
            return sort(slice(spies), comparator);
        }
        module.exports = orderByFirstCall;
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/array.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(Array.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var call = Function.call;
        var throwsOnProto = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/throws-on-proto.js");
        var disallowedProperties = [
            "size",
            "caller",
            "callee",
            "arguments"
        ];
        if (throwsOnProto) disallowedProperties.push("__proto__");
        module.exports = function(prototype) {
            return Object.getOwnPropertyNames(prototype).reduce(function(result, name) {
                if (disallowedProperties.includes(name)) return result;
                if ("function" != typeof prototype[name]) return result;
                result[name] = call.bind(prototype[name]);
                return result;
            }, Object.create(null));
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/function.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(Function.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/index.js": function(module, __unused_webpack_exports, __webpack_require__) {
        module.exports = {
            array: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/array.js"),
            function: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/function.js"),
            map: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/map.js"),
            object: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/object.js"),
            set: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/set.js"),
            string: __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/string.js")
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/map.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(Map.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/object.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(Object.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/set.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(Set.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/string.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var copyPrototype = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/copy-prototype-methods.js");
        module.exports = copyPrototype(String.prototype);
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/prototypes/throws-on-proto.js": function(module) {
        let throwsOnProto;
        try {
            const object = {};
            object.__proto__;
            throwsOnProto = false;
        } catch (_) {
            throwsOnProto = true;
        }
        module.exports = throwsOnProto;
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/type-of.js": function(module, __unused_webpack_exports, __webpack_require__) {
        var type = __webpack_require__("../../node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js");
        module.exports = function(value) {
            return type(value).toLowerCase();
        };
    },
    "../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/value-to-string.js": function(module) {
        function valueToString(value) {
            if (value && value.toString) return value.toString();
            return String(value);
        }
        module.exports = valueToString;
    },
    "../../node_modules/.pnpm/@sinonjs+fake-timers@14.0.0/node_modules/@sinonjs/fake-timers/src/fake-timers-src.js": function(__unused_webpack_module, exports, __webpack_require__) {
        const globalObject = __webpack_require__("../../node_modules/.pnpm/@sinonjs+commons@3.0.1/node_modules/@sinonjs/commons/lib/index.js").global;
        let timersModule, timersPromisesModule;
        try {
            timersModule = __webpack_require__("timers");
        } catch (e) {}
        try {
            timersPromisesModule = __webpack_require__("timers/promises");
        } catch (e) {}
        function withGlobal(_global) {
            const maxTimeout = Math.pow(2, 31) - 1;
            const idCounterStart = 1e12;
            const NOOP = function() {};
            const NOOP_ARRAY = function() {
                return [];
            };
            const isPresent = {};
            let timeoutResult, addTimerReturnsObject = false;
            if (_global.setTimeout) {
                isPresent.setTimeout = true;
                timeoutResult = _global.setTimeout(NOOP, 0);
                addTimerReturnsObject = "object" == typeof timeoutResult;
            }
            isPresent.clearTimeout = Boolean(_global.clearTimeout);
            isPresent.setInterval = Boolean(_global.setInterval);
            isPresent.clearInterval = Boolean(_global.clearInterval);
            isPresent.hrtime = _global.process && "function" == typeof _global.process.hrtime;
            isPresent.hrtimeBigint = isPresent.hrtime && "function" == typeof _global.process.hrtime.bigint;
            isPresent.nextTick = _global.process && "function" == typeof _global.process.nextTick;
            const utilPromisify = _global.process && __webpack_require__("util").promisify;
            isPresent.performance = _global.performance && "function" == typeof _global.performance.now;
            const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
            const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
            isPresent.queueMicrotask = _global.hasOwnProperty("queueMicrotask");
            isPresent.requestAnimationFrame = _global.requestAnimationFrame && "function" == typeof _global.requestAnimationFrame;
            isPresent.cancelAnimationFrame = _global.cancelAnimationFrame && "function" == typeof _global.cancelAnimationFrame;
            isPresent.requestIdleCallback = _global.requestIdleCallback && "function" == typeof _global.requestIdleCallback;
            isPresent.cancelIdleCallbackPresent = _global.cancelIdleCallback && "function" == typeof _global.cancelIdleCallback;
            isPresent.setImmediate = _global.setImmediate && "function" == typeof _global.setImmediate;
            isPresent.clearImmediate = _global.clearImmediate && "function" == typeof _global.clearImmediate;
            isPresent.Intl = _global.Intl && "object" == typeof _global.Intl;
            if (_global.clearTimeout) _global.clearTimeout(timeoutResult);
            const NativeDate = _global.Date;
            const NativeIntl = isPresent.Intl ? Object.defineProperties(Object.create(null), Object.getOwnPropertyDescriptors(_global.Intl)) : void 0;
            let uniqueTimerId = idCounterStart;
            if (void 0 === NativeDate) throw new Error("The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)");
            isPresent.Date = true;
            class FakePerformanceEntry {
                constructor(name, entryType, startTime, duration){
                    this.name = name;
                    this.entryType = entryType;
                    this.startTime = startTime;
                    this.duration = duration;
                }
                toJSON() {
                    return JSON.stringify({
                        ...this
                    });
                }
            }
            function isNumberFinite(num) {
                if (Number.isFinite) return Number.isFinite(num);
                return isFinite(num);
            }
            let isNearInfiniteLimit = false;
            function checkIsNearInfiniteLimit(clock, i) {
                if (clock.loopLimit && i === clock.loopLimit - 1) isNearInfiniteLimit = true;
            }
            function resetIsNearInfiniteLimit() {
                isNearInfiniteLimit = false;
            }
            function parseTime(str) {
                if (!str) return 0;
                const strings = str.split(":");
                const l = strings.length;
                let i = l;
                let ms = 0;
                let parsed;
                if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) throw new Error("tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits");
                while(i--){
                    parsed = parseInt(strings[i], 10);
                    if (parsed >= 60) throw new Error(`Invalid time ${str}`);
                    ms += parsed * Math.pow(60, l - i - 1);
                }
                return 1000 * ms;
            }
            function nanoRemainder(msFloat) {
                const modulo = 1e6;
                const remainder = 1e6 * msFloat % modulo;
                const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
                return Math.floor(positiveRemainder);
            }
            function getEpoch(epoch) {
                if (!epoch) return 0;
                if ("function" == typeof epoch.getTime) return epoch.getTime();
                if ("number" == typeof epoch) return epoch;
                throw new TypeError("now should be milliseconds since UNIX epoch");
            }
            function inRange(from, to, timer) {
                return timer && timer.callAt >= from && timer.callAt <= to;
            }
            function getInfiniteLoopError(clock, job) {
                const infiniteLoopError = new Error(`Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`);
                if (!job.error) return infiniteLoopError;
                const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
                let clockMethodPattern = new RegExp(String(Object.keys(clock).join("|")));
                if (addTimerReturnsObject) clockMethodPattern = new RegExp(`\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`);
                let matchedLineIndex = -1;
                job.error.stack.split("\n").some(function(line, i) {
                    const matchedComputedTarget = line.match(computedTargetPattern);
                    if (matchedComputedTarget) {
                        matchedLineIndex = i;
                        return true;
                    }
                    const matchedClockMethod = line.match(clockMethodPattern);
                    if (matchedClockMethod) {
                        matchedLineIndex = i;
                        return false;
                    }
                    return matchedLineIndex >= 0;
                });
                const stack = `${infiniteLoopError}\n${job.type || "Microtask"} - ${job.func.name || "anonymous"}\n${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
                try {
                    Object.defineProperty(infiniteLoopError, "stack", {
                        value: stack
                    });
                } catch (e) {}
                return infiniteLoopError;
            }
            function createDate() {
                class ClockDate extends NativeDate {
                    constructor(year, month, date, hour, minute, second, ms){
                        if (0 === arguments.length) super(ClockDate.clock.now);
                        else super(...arguments);
                        Object.defineProperty(this, "constructor", {
                            value: NativeDate,
                            enumerable: false
                        });
                    }
                    static [Symbol.hasInstance](instance) {
                        return instance instanceof NativeDate;
                    }
                }
                ClockDate.isFake = true;
                if (NativeDate.now) ClockDate.now = function() {
                    return ClockDate.clock.now;
                };
                if (NativeDate.toSource) ClockDate.toSource = function() {
                    return NativeDate.toSource();
                };
                ClockDate.toString = function() {
                    return NativeDate.toString();
                };
                const ClockDateProxy = new Proxy(ClockDate, {
                    apply () {
                        if (this instanceof ClockDate) throw new TypeError("A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic.");
                        return new NativeDate(ClockDate.clock.now).toString();
                    }
                });
                return ClockDateProxy;
            }
            function createIntl() {
                const ClockIntl = {};
                Object.getOwnPropertyNames(NativeIntl).forEach((property)=>ClockIntl[property] = NativeIntl[property]);
                ClockIntl.DateTimeFormat = function(...args) {
                    const realFormatter = new NativeIntl.DateTimeFormat(...args);
                    const formatter = {};
                    [
                        "formatRange",
                        "formatRangeToParts",
                        "resolvedOptions"
                    ].forEach((method)=>{
                        formatter[method] = realFormatter[method].bind(realFormatter);
                    });
                    [
                        "format",
                        "formatToParts"
                    ].forEach((method)=>{
                        formatter[method] = function(date) {
                            return realFormatter[method](date || ClockIntl.clock.now);
                        };
                    });
                    return formatter;
                };
                ClockIntl.DateTimeFormat.prototype = Object.create(NativeIntl.DateTimeFormat.prototype);
                ClockIntl.DateTimeFormat.supportedLocalesOf = NativeIntl.DateTimeFormat.supportedLocalesOf;
                return ClockIntl;
            }
            function enqueueJob(clock, job) {
                if (!clock.jobs) clock.jobs = [];
                clock.jobs.push(job);
            }
            function runJobs(clock) {
                if (!clock.jobs) return;
                for(let i = 0; i < clock.jobs.length; i++){
                    const job = clock.jobs[i];
                    job.func.apply(null, job.args);
                    checkIsNearInfiniteLimit(clock, i);
                    if (clock.loopLimit && i > clock.loopLimit) throw getInfiniteLoopError(clock, job);
                }
                resetIsNearInfiniteLimit();
                clock.jobs = [];
            }
            function addTimer(clock, timer) {
                if (void 0 === timer.func) throw new Error("Callback must be provided to timer calls");
                if (addTimerReturnsObject) {
                    if ("function" != typeof timer.func) throw new TypeError(`[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`);
                }
                if (isNearInfiniteLimit) timer.error = new Error();
                timer.type = timer.immediate ? "Immediate" : "Timeout";
                if (timer.hasOwnProperty("delay")) {
                    if ("number" != typeof timer.delay) timer.delay = parseInt(timer.delay, 10);
                    if (!isNumberFinite(timer.delay)) timer.delay = 0;
                    timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
                    timer.delay = Math.max(0, timer.delay);
                }
                if (timer.hasOwnProperty("interval")) {
                    timer.type = "Interval";
                    timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
                }
                if (timer.hasOwnProperty("animation")) {
                    timer.type = "AnimationFrame";
                    timer.animation = true;
                }
                if (timer.hasOwnProperty("idleCallback")) {
                    timer.type = "IdleCallback";
                    timer.idleCallback = true;
                }
                if (!clock.timers) clock.timers = {};
                timer.id = uniqueTimerId++;
                timer.createdAt = clock.now;
                timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
                clock.timers[timer.id] = timer;
                if (addTimerReturnsObject) {
                    const res = {
                        refed: true,
                        ref: function() {
                            this.refed = true;
                            return res;
                        },
                        unref: function() {
                            this.refed = false;
                            return res;
                        },
                        hasRef: function() {
                            return this.refed;
                        },
                        refresh: function() {
                            timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
                            clock.timers[timer.id] = timer;
                            return res;
                        },
                        [Symbol.toPrimitive]: function() {
                            return timer.id;
                        }
                    };
                    return res;
                }
                return timer.id;
            }
            function compareTimers(a, b) {
                if (a.callAt < b.callAt) return -1;
                if (a.callAt > b.callAt) return 1;
                if (a.immediate && !b.immediate) return -1;
                if (!a.immediate && b.immediate) return 1;
                if (a.createdAt < b.createdAt) return -1;
                if (a.createdAt > b.createdAt) return 1;
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
            }
            function firstTimerInRange(clock, from, to) {
                const timers = clock.timers;
                let timer = null;
                let id, isInRange;
                for(id in timers)if (timers.hasOwnProperty(id)) {
                    isInRange = inRange(from, to, timers[id]);
                    if (isInRange && (!timer || 1 === compareTimers(timer, timers[id]))) timer = timers[id];
                }
                return timer;
            }
            function firstTimer(clock) {
                const timers = clock.timers;
                let timer = null;
                let id;
                for(id in timers)if (timers.hasOwnProperty(id)) {
                    if (!timer || 1 === compareTimers(timer, timers[id])) timer = timers[id];
                }
                return timer;
            }
            function lastTimer(clock) {
                const timers = clock.timers;
                let timer = null;
                let id;
                for(id in timers)if (timers.hasOwnProperty(id)) {
                    if (!timer || -1 === compareTimers(timer, timers[id])) timer = timers[id];
                }
                return timer;
            }
            function callTimer(clock, timer) {
                if ("number" == typeof timer.interval) clock.timers[timer.id].callAt += timer.interval;
                else delete clock.timers[timer.id];
                if ("function" == typeof timer.func) timer.func.apply(null, timer.args);
                else {
                    const eval2 = eval;
                    (function() {
                        eval2(timer.func);
                    })();
                }
            }
            function getClearHandler(ttype) {
                if ("IdleCallback" === ttype || "AnimationFrame" === ttype) return `cancel${ttype}`;
                return `clear${ttype}`;
            }
            function getScheduleHandler(ttype) {
                if ("IdleCallback" === ttype || "AnimationFrame" === ttype) return `request${ttype}`;
                return `set${ttype}`;
            }
            function createWarnOnce() {
                let calls = 0;
                return function(msg) {
                    calls++ || console.warn(msg);
                };
            }
            const warnOnce = createWarnOnce();
            function clearTimer(clock, timerId, ttype) {
                if (!timerId) return;
                if (!clock.timers) clock.timers = {};
                const id = Number(timerId);
                if (Number.isNaN(id) || id < idCounterStart) {
                    const handlerName = getClearHandler(ttype);
                    if (true === clock.shouldClearNativeTimers) {
                        const nativeHandler = clock[`_${handlerName}`];
                        return "function" == typeof nativeHandler ? nativeHandler(timerId) : void 0;
                    }
                    warnOnce(`FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.\nTo automatically clean-up native timers, use \`shouldClearNativeTimers\`.`);
                }
                if (clock.timers.hasOwnProperty(id)) {
                    const timer = clock.timers[id];
                    if (timer.type === ttype || "Timeout" === timer.type && "Interval" === ttype || "Interval" === timer.type && "Timeout" === ttype) delete clock.timers[id];
                    else {
                        const clear = getClearHandler(ttype);
                        const schedule = getScheduleHandler(timer.type);
                        throw new Error(`Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`);
                    }
                }
            }
            function uninstall(clock, config) {
                let method, i, l;
                const installedHrTime = "_hrtime";
                const installedNextTick = "_nextTick";
                for(i = 0, l = clock.methods.length; i < l; i++){
                    method = clock.methods[i];
                    if ("hrtime" === method && _global.process) _global.process.hrtime = clock[installedHrTime];
                    else if ("nextTick" === method && _global.process) _global.process.nextTick = clock[installedNextTick];
                    else if ("performance" === method) {
                        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(clock, `_${method}`);
                        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) Object.defineProperty(_global, method, originalPerfDescriptor);
                        else if (originalPerfDescriptor.configurable) _global[method] = clock[`_${method}`];
                    } else if (_global[method] && _global[method].hadOwnProperty) _global[method] = clock[`_${method}`];
                    else try {
                        delete _global[method];
                    } catch (ignore) {}
                    if (void 0 !== clock.timersModuleMethods) for(let j = 0; j < clock.timersModuleMethods.length; j++){
                        const entry = clock.timersModuleMethods[j];
                        timersModule[entry.methodName] = entry.original;
                    }
                    if (void 0 !== clock.timersPromisesModuleMethods) for(let j = 0; j < clock.timersPromisesModuleMethods.length; j++){
                        const entry = clock.timersPromisesModuleMethods[j];
                        timersPromisesModule[entry.methodName] = entry.original;
                    }
                }
                if (true === config.shouldAdvanceTime) _global.clearInterval(clock.attachedInterval);
                clock.methods = [];
                for (const [listener, signal] of clock.abortListenerMap.entries()){
                    signal.removeEventListener("abort", listener);
                    clock.abortListenerMap.delete(listener);
                }
                if (!clock.timers) return [];
                return Object.keys(clock.timers).map(function(key) {
                    return clock.timers[key];
                });
            }
            function hijackMethod(target, method, clock) {
                clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(target, method);
                clock[`_${method}`] = target[method];
                if ("Date" === method) target[method] = clock[method];
                else if ("Intl" === method) target[method] = clock[method];
                else if ("performance" === method) {
                    const originalPerfDescriptor = Object.getOwnPropertyDescriptor(target, method);
                    if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
                        Object.defineProperty(clock, `_${method}`, originalPerfDescriptor);
                        const perfDescriptor = Object.getOwnPropertyDescriptor(clock, method);
                        Object.defineProperty(target, method, perfDescriptor);
                    } else target[method] = clock[method];
                } else {
                    target[method] = function() {
                        return clock[method].apply(clock, arguments);
                    };
                    Object.defineProperties(target[method], Object.getOwnPropertyDescriptors(clock[method]));
                }
                target[method].clock = clock;
            }
            function doIntervalTick(clock, advanceTimeDelta) {
                clock.tick(advanceTimeDelta);
            }
            const timers = {
                setTimeout: _global.setTimeout,
                clearTimeout: _global.clearTimeout,
                setInterval: _global.setInterval,
                clearInterval: _global.clearInterval,
                Date: _global.Date
            };
            if (isPresent.setImmediate) timers.setImmediate = _global.setImmediate;
            if (isPresent.clearImmediate) timers.clearImmediate = _global.clearImmediate;
            if (isPresent.hrtime) timers.hrtime = _global.process.hrtime;
            if (isPresent.nextTick) timers.nextTick = _global.process.nextTick;
            if (isPresent.performance) timers.performance = _global.performance;
            if (isPresent.requestAnimationFrame) timers.requestAnimationFrame = _global.requestAnimationFrame;
            if (isPresent.queueMicrotask) timers.queueMicrotask = _global.queueMicrotask;
            if (isPresent.cancelAnimationFrame) timers.cancelAnimationFrame = _global.cancelAnimationFrame;
            if (isPresent.requestIdleCallback) timers.requestIdleCallback = _global.requestIdleCallback;
            if (isPresent.cancelIdleCallback) timers.cancelIdleCallback = _global.cancelIdleCallback;
            if (isPresent.Intl) timers.Intl = NativeIntl;
            const originalSetTimeout = _global.setImmediate || _global.setTimeout;
            function createClock(start, loopLimit) {
                start = Math.floor(getEpoch(start));
                loopLimit = loopLimit || 1000;
                let nanos = 0;
                const adjustedSystemTime = [
                    0,
                    0
                ];
                const clock = {
                    now: start,
                    Date: createDate(),
                    loopLimit: loopLimit
                };
                clock.Date.clock = clock;
                function getTimeToNextFrame() {
                    return 16 - (clock.now - start) % 16;
                }
                function hrtime(prev) {
                    const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
                    const secsSinceStart = Math.floor(millisSinceStart / 1000);
                    const remainderInNanos = (millisSinceStart - 1e3 * secsSinceStart) * 1e6 + nanos - adjustedSystemTime[1];
                    if (Array.isArray(prev)) {
                        if (prev[1] > 1e9) throw new TypeError("Number of nanoseconds can't exceed a billion");
                        const oldSecs = prev[0];
                        let nanoDiff = remainderInNanos - prev[1];
                        let secDiff = secsSinceStart - oldSecs;
                        if (nanoDiff < 0) {
                            nanoDiff += 1e9;
                            secDiff -= 1;
                        }
                        return [
                            secDiff,
                            nanoDiff
                        ];
                    }
                    return [
                        secsSinceStart,
                        remainderInNanos
                    ];
                }
                function fakePerformanceNow() {
                    const hrt = hrtime();
                    const millis = 1000 * hrt[0] + hrt[1] / 1e6;
                    return millis;
                }
                if (isPresent.hrtimeBigint) hrtime.bigint = function() {
                    const parts = hrtime();
                    return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
                };
                if (isPresent.Intl) {
                    clock.Intl = createIntl();
                    clock.Intl.clock = clock;
                }
                clock.requestIdleCallback = function(func, timeout) {
                    let timeToNextIdlePeriod = 0;
                    if (clock.countTimers() > 0) timeToNextIdlePeriod = 50;
                    const result = addTimer(clock, {
                        func: func,
                        args: Array.prototype.slice.call(arguments, 2),
                        delay: void 0 === timeout ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
                        idleCallback: true
                    });
                    return Number(result);
                };
                clock.cancelIdleCallback = function(timerId) {
                    return clearTimer(clock, timerId, "IdleCallback");
                };
                clock.setTimeout = function(func, timeout) {
                    return addTimer(clock, {
                        func: func,
                        args: Array.prototype.slice.call(arguments, 2),
                        delay: timeout
                    });
                };
                if (void 0 !== _global.Promise && utilPromisify) clock.setTimeout[utilPromisify.custom] = function(timeout, arg) {
                    return new _global.Promise(function(resolve) {
                        addTimer(clock, {
                            func: resolve,
                            args: [
                                arg
                            ],
                            delay: timeout
                        });
                    });
                };
                clock.clearTimeout = function(timerId) {
                    return clearTimer(clock, timerId, "Timeout");
                };
                clock.nextTick = function(func) {
                    return enqueueJob(clock, {
                        func: func,
                        args: Array.prototype.slice.call(arguments, 1),
                        error: isNearInfiniteLimit ? new Error() : null
                    });
                };
                clock.queueMicrotask = function(func) {
                    return clock.nextTick(func);
                };
                clock.setInterval = function(func, timeout) {
                    timeout = parseInt(timeout, 10);
                    return addTimer(clock, {
                        func: func,
                        args: Array.prototype.slice.call(arguments, 2),
                        delay: timeout,
                        interval: timeout
                    });
                };
                clock.clearInterval = function(timerId) {
                    return clearTimer(clock, timerId, "Interval");
                };
                if (isPresent.setImmediate) {
                    clock.setImmediate = function(func) {
                        return addTimer(clock, {
                            func: func,
                            args: Array.prototype.slice.call(arguments, 1),
                            immediate: true
                        });
                    };
                    if (void 0 !== _global.Promise && utilPromisify) clock.setImmediate[utilPromisify.custom] = function(arg) {
                        return new _global.Promise(function(resolve) {
                            addTimer(clock, {
                                func: resolve,
                                args: [
                                    arg
                                ],
                                immediate: true
                            });
                        });
                    };
                    clock.clearImmediate = function(timerId) {
                        return clearTimer(clock, timerId, "Immediate");
                    };
                }
                clock.countTimers = function() {
                    return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
                };
                clock.requestAnimationFrame = function(func) {
                    const result = addTimer(clock, {
                        func: func,
                        delay: getTimeToNextFrame(),
                        get args () {
                            return [
                                fakePerformanceNow()
                            ];
                        },
                        animation: true
                    });
                    return Number(result);
                };
                clock.cancelAnimationFrame = function(timerId) {
                    return clearTimer(clock, timerId, "AnimationFrame");
                };
                clock.runMicrotasks = function() {
                    runJobs(clock);
                };
                function doTick(tickValue, isAsync, resolve, reject) {
                    const msFloat = "number" == typeof tickValue ? tickValue : parseTime(tickValue);
                    const ms = Math.floor(msFloat);
                    const remainder = nanoRemainder(msFloat);
                    let nanosTotal = nanos + remainder;
                    let tickTo = clock.now + ms;
                    if (msFloat < 0) throw new TypeError("Negative ticks are not supported");
                    if (nanosTotal >= 1e6) {
                        tickTo += 1;
                        nanosTotal -= 1e6;
                    }
                    nanos = nanosTotal;
                    let tickFrom = clock.now;
                    let previous = clock.now;
                    let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
                    clock.duringTick = true;
                    oldNow = clock.now;
                    runJobs(clock);
                    if (oldNow !== clock.now) {
                        tickFrom += clock.now - oldNow;
                        tickTo += clock.now - oldNow;
                    }
                    function doTickInner() {
                        timer = firstTimerInRange(clock, tickFrom, tickTo);
                        while(timer && tickFrom <= tickTo){
                            if (clock.timers[timer.id]) {
                                tickFrom = timer.callAt;
                                clock.now = timer.callAt;
                                oldNow = clock.now;
                                try {
                                    runJobs(clock);
                                    callTimer(clock, timer);
                                } catch (e) {
                                    firstException = firstException || e;
                                }
                                if (isAsync) return void originalSetTimeout(nextPromiseTick);
                                compensationCheck();
                            }
                            postTimerCall();
                        }
                        oldNow = clock.now;
                        runJobs(clock);
                        if (oldNow !== clock.now) {
                            tickFrom += clock.now - oldNow;
                            tickTo += clock.now - oldNow;
                        }
                        clock.duringTick = false;
                        timer = firstTimerInRange(clock, tickFrom, tickTo);
                        if (timer) try {
                            clock.tick(tickTo - clock.now);
                        } catch (e) {
                            firstException = firstException || e;
                        }
                        else {
                            clock.now = tickTo;
                            nanos = nanosTotal;
                        }
                        if (firstException) throw firstException;
                        if (!isAsync) return clock.now;
                        resolve(clock.now);
                    }
                    nextPromiseTick = isAsync && function() {
                        try {
                            compensationCheck();
                            postTimerCall();
                            doTickInner();
                        } catch (e) {
                            reject(e);
                        }
                    };
                    compensationCheck = function() {
                        if (oldNow !== clock.now) {
                            tickFrom += clock.now - oldNow;
                            tickTo += clock.now - oldNow;
                            previous += clock.now - oldNow;
                        }
                    };
                    postTimerCall = function() {
                        timer = firstTimerInRange(clock, previous, tickTo);
                        previous = tickFrom;
                    };
                    return doTickInner();
                }
                clock.tick = function(tickValue) {
                    return doTick(tickValue, false);
                };
                if (void 0 !== _global.Promise) clock.tickAsync = function(tickValue) {
                    return new _global.Promise(function(resolve, reject) {
                        originalSetTimeout(function() {
                            try {
                                doTick(tickValue, true, resolve, reject);
                            } catch (e) {
                                reject(e);
                            }
                        });
                    });
                };
                clock.next = function() {
                    runJobs(clock);
                    const timer = firstTimer(clock);
                    if (!timer) return clock.now;
                    clock.duringTick = true;
                    try {
                        clock.now = timer.callAt;
                        callTimer(clock, timer);
                        runJobs(clock);
                        return clock.now;
                    } finally{
                        clock.duringTick = false;
                    }
                };
                if (void 0 !== _global.Promise) clock.nextAsync = function() {
                    return new _global.Promise(function(resolve, reject) {
                        originalSetTimeout(function() {
                            try {
                                const timer = firstTimer(clock);
                                if (!timer) return void resolve(clock.now);
                                let err;
                                clock.duringTick = true;
                                clock.now = timer.callAt;
                                try {
                                    callTimer(clock, timer);
                                } catch (e) {
                                    err = e;
                                }
                                clock.duringTick = false;
                                originalSetTimeout(function() {
                                    if (err) reject(err);
                                    else resolve(clock.now);
                                });
                            } catch (e) {
                                reject(e);
                            }
                        });
                    });
                };
                clock.runAll = function() {
                    let numTimers, i;
                    runJobs(clock);
                    for(i = 0; i < clock.loopLimit; i++){
                        if (!clock.timers) {
                            resetIsNearInfiniteLimit();
                            return clock.now;
                        }
                        numTimers = Object.keys(clock.timers).length;
                        if (0 === numTimers) {
                            resetIsNearInfiniteLimit();
                            return clock.now;
                        }
                        clock.next();
                        checkIsNearInfiniteLimit(clock, i);
                    }
                    const excessJob = firstTimer(clock);
                    throw getInfiniteLoopError(clock, excessJob);
                };
                clock.runToFrame = function() {
                    return clock.tick(getTimeToNextFrame());
                };
                if (void 0 !== _global.Promise) clock.runAllAsync = function() {
                    return new _global.Promise(function(resolve, reject) {
                        let i = 0;
                        function doRun() {
                            originalSetTimeout(function() {
                                try {
                                    runJobs(clock);
                                    let numTimers;
                                    if (i < clock.loopLimit) {
                                        if (!clock.timers) {
                                            resetIsNearInfiniteLimit();
                                            resolve(clock.now);
                                            return;
                                        }
                                        numTimers = Object.keys(clock.timers).length;
                                        if (0 === numTimers) {
                                            resetIsNearInfiniteLimit();
                                            resolve(clock.now);
                                            return;
                                        }
                                        clock.next();
                                        i++;
                                        doRun();
                                        checkIsNearInfiniteLimit(clock, i);
                                        return;
                                    }
                                    const excessJob = firstTimer(clock);
                                    reject(getInfiniteLoopError(clock, excessJob));
                                } catch (e) {
                                    reject(e);
                                }
                            });
                        }
                        doRun();
                    });
                };
                clock.runToLast = function() {
                    const timer = lastTimer(clock);
                    if (!timer) {
                        runJobs(clock);
                        return clock.now;
                    }
                    return clock.tick(timer.callAt - clock.now);
                };
                if (void 0 !== _global.Promise) clock.runToLastAsync = function() {
                    return new _global.Promise(function(resolve, reject) {
                        originalSetTimeout(function() {
                            try {
                                const timer = lastTimer(clock);
                                if (!timer) {
                                    runJobs(clock);
                                    resolve(clock.now);
                                }
                                resolve(clock.tickAsync(timer.callAt - clock.now));
                            } catch (e) {
                                reject(e);
                            }
                        });
                    });
                };
                clock.reset = function() {
                    nanos = 0;
                    clock.timers = {};
                    clock.jobs = [];
                    clock.now = start;
                };
                clock.setSystemTime = function(systemTime) {
                    const newNow = getEpoch(systemTime);
                    const difference = newNow - clock.now;
                    let id, timer;
                    adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
                    adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
                    clock.now = newNow;
                    nanos = 0;
                    for(id in clock.timers)if (clock.timers.hasOwnProperty(id)) {
                        timer = clock.timers[id];
                        timer.createdAt += difference;
                        timer.callAt += difference;
                    }
                };
                clock.jump = function(tickValue) {
                    const msFloat = "number" == typeof tickValue ? tickValue : parseTime(tickValue);
                    const ms = Math.floor(msFloat);
                    for (const timer of Object.values(clock.timers))if (clock.now + ms > timer.callAt) timer.callAt = clock.now + ms;
                    clock.tick(ms);
                };
                if (isPresent.performance) {
                    clock.performance = Object.create(null);
                    clock.performance.now = fakePerformanceNow;
                }
                if (isPresent.hrtime) clock.hrtime = hrtime;
                return clock;
            }
            function install(config) {
                if (arguments.length > 1 || config instanceof Date || Array.isArray(config) || "number" == typeof config) throw new TypeError(`FakeTimers.install called with ${String(config)} install requires an object parameter`);
                if (true === _global.Date.isFake) throw new TypeError("Can't install fake timers twice on the same global object.");
                config = void 0 !== config ? config : {};
                config.shouldAdvanceTime = config.shouldAdvanceTime || false;
                config.advanceTimeDelta = config.advanceTimeDelta || 20;
                config.shouldClearNativeTimers = config.shouldClearNativeTimers || false;
                if (config.target) throw new TypeError("config.target is no longer supported. Use `withGlobal(target)` instead.");
                function handleMissingTimer(timer) {
                    if (config.ignoreMissingTimers) return;
                    throw new ReferenceError(`non-existent timers and/or objects cannot be faked: '${timer}'`);
                }
                let i, l;
                const clock = createClock(config.now, config.loopLimit);
                clock.shouldClearNativeTimers = config.shouldClearNativeTimers;
                clock.uninstall = function() {
                    return uninstall(clock, config);
                };
                clock.abortListenerMap = new Map();
                clock.methods = config.toFake || [];
                if (0 === clock.methods.length) clock.methods = Object.keys(timers);
                if (true === config.shouldAdvanceTime) {
                    const intervalTick = doIntervalTick.bind(null, clock, config.advanceTimeDelta);
                    const intervalId = _global.setInterval(intervalTick, config.advanceTimeDelta);
                    clock.attachedInterval = intervalId;
                }
                if (clock.methods.includes("performance")) {
                    const proto = (()=>{
                        if (hasPerformanceConstructorPrototype) return _global.performance.constructor.prototype;
                        if (hasPerformancePrototype) return _global.Performance.prototype;
                    })();
                    if (proto) {
                        Object.getOwnPropertyNames(proto).forEach(function(name) {
                            if ("now" !== name) clock.performance[name] = 0 === name.indexOf("getEntries") ? NOOP_ARRAY : NOOP;
                        });
                        clock.performance.mark = (name)=>new FakePerformanceEntry(name, "mark", 0, 0);
                        clock.performance.measure = (name)=>new FakePerformanceEntry(name, "measure", 0, 100);
                        clock.performance.timeOrigin = getEpoch(config.now);
                    } else if ((config.toFake || []).includes("performance")) return handleMissingTimer("performance");
                }
                if (_global === globalObject && timersModule) clock.timersModuleMethods = [];
                if (_global === globalObject && timersPromisesModule) clock.timersPromisesModuleMethods = [];
                for(i = 0, l = clock.methods.length; i < l; i++){
                    const nameOfMethodToReplace = clock.methods[i];
                    if (!isPresent[nameOfMethodToReplace]) {
                        handleMissingTimer(nameOfMethodToReplace);
                        continue;
                    }
                    if ("hrtime" === nameOfMethodToReplace) {
                        if (_global.process && "function" == typeof _global.process.hrtime) hijackMethod(_global.process, nameOfMethodToReplace, clock);
                    } else if ("nextTick" === nameOfMethodToReplace) {
                        if (_global.process && "function" == typeof _global.process.nextTick) hijackMethod(_global.process, nameOfMethodToReplace, clock);
                    } else hijackMethod(_global, nameOfMethodToReplace, clock);
                    if (void 0 !== clock.timersModuleMethods && timersModule[nameOfMethodToReplace]) {
                        const original = timersModule[nameOfMethodToReplace];
                        clock.timersModuleMethods.push({
                            methodName: nameOfMethodToReplace,
                            original: original
                        });
                        timersModule[nameOfMethodToReplace] = _global[nameOfMethodToReplace];
                    }
                    if (void 0 !== clock.timersPromisesModuleMethods) {
                        if ("setTimeout" === nameOfMethodToReplace) {
                            clock.timersPromisesModuleMethods.push({
                                methodName: "setTimeout",
                                original: timersPromisesModule.setTimeout
                            });
                            timersPromisesModule.setTimeout = (delay, value, options = {})=>new Promise((resolve, reject)=>{
                                    const abort = ()=>{
                                        options.signal.removeEventListener("abort", abort);
                                        clock.abortListenerMap.delete(abort);
                                        clock.clearTimeout(handle);
                                        reject(options.signal.reason);
                                    };
                                    const handle = clock.setTimeout(()=>{
                                        if (options.signal) {
                                            options.signal.removeEventListener("abort", abort);
                                            clock.abortListenerMap.delete(abort);
                                        }
                                        resolve(value);
                                    }, delay);
                                    if (options.signal) if (options.signal.aborted) abort();
                                    else {
                                        options.signal.addEventListener("abort", abort);
                                        clock.abortListenerMap.set(abort, options.signal);
                                    }
                                });
                        } else if ("setImmediate" === nameOfMethodToReplace) {
                            clock.timersPromisesModuleMethods.push({
                                methodName: "setImmediate",
                                original: timersPromisesModule.setImmediate
                            });
                            timersPromisesModule.setImmediate = (value, options = {})=>new Promise((resolve, reject)=>{
                                    const abort = ()=>{
                                        options.signal.removeEventListener("abort", abort);
                                        clock.abortListenerMap.delete(abort);
                                        clock.clearImmediate(handle);
                                        reject(options.signal.reason);
                                    };
                                    const handle = clock.setImmediate(()=>{
                                        if (options.signal) {
                                            options.signal.removeEventListener("abort", abort);
                                            clock.abortListenerMap.delete(abort);
                                        }
                                        resolve(value);
                                    });
                                    if (options.signal) if (options.signal.aborted) abort();
                                    else {
                                        options.signal.addEventListener("abort", abort);
                                        clock.abortListenerMap.set(abort, options.signal);
                                    }
                                });
                        } else if ("setInterval" === nameOfMethodToReplace) {
                            clock.timersPromisesModuleMethods.push({
                                methodName: "setInterval",
                                original: timersPromisesModule.setInterval
                            });
                            timersPromisesModule.setInterval = (delay, value, options = {})=>({
                                    [Symbol.asyncIterator]: ()=>{
                                        const createResolvable = ()=>{
                                            let resolve, reject;
                                            const promise = new Promise((res, rej)=>{
                                                resolve = res;
                                                reject = rej;
                                            });
                                            promise.resolve = resolve;
                                            promise.reject = reject;
                                            return promise;
                                        };
                                        let done = false;
                                        let hasThrown = false;
                                        let returnCall;
                                        let nextAvailable = 0;
                                        const nextQueue = [];
                                        const handle = clock.setInterval(()=>{
                                            if (nextQueue.length > 0) nextQueue.shift().resolve();
                                            else nextAvailable++;
                                        }, delay);
                                        const abort = ()=>{
                                            options.signal.removeEventListener("abort", abort);
                                            clock.abortListenerMap.delete(abort);
                                            clock.clearInterval(handle);
                                            done = true;
                                            for (const resolvable of nextQueue)resolvable.resolve();
                                        };
                                        if (options.signal) if (options.signal.aborted) done = true;
                                        else {
                                            options.signal.addEventListener("abort", abort);
                                            clock.abortListenerMap.set(abort, options.signal);
                                        }
                                        return {
                                            next: async ()=>{
                                                if (options.signal?.aborted && !hasThrown) {
                                                    hasThrown = true;
                                                    throw options.signal.reason;
                                                }
                                                if (done) return {
                                                    done: true,
                                                    value: void 0
                                                };
                                                if (nextAvailable > 0) {
                                                    nextAvailable--;
                                                    return {
                                                        done: false,
                                                        value: value
                                                    };
                                                }
                                                const resolvable = createResolvable();
                                                nextQueue.push(resolvable);
                                                await resolvable;
                                                if (returnCall && 0 === nextQueue.length) returnCall.resolve();
                                                if (options.signal?.aborted && !hasThrown) {
                                                    hasThrown = true;
                                                    throw options.signal.reason;
                                                }
                                                if (done) return {
                                                    done: true,
                                                    value: void 0
                                                };
                                                return {
                                                    done: false,
                                                    value: value
                                                };
                                            },
                                            return: async ()=>{
                                                if (done) return {
                                                    done: true,
                                                    value: void 0
                                                };
                                                if (nextQueue.length > 0) {
                                                    returnCall = createResolvable();
                                                    await returnCall;
                                                }
                                                clock.clearInterval(handle);
                                                done = true;
                                                if (options.signal) {
                                                    options.signal.removeEventListener("abort", abort);
                                                    clock.abortListenerMap.delete(abort);
                                                }
                                                return {
                                                    done: true,
                                                    value: void 0
                                                };
                                            }
                                        };
                                    }
                                });
                        }
                    }
                }
                return clock;
            }
            return {
                timers: timers,
                createClock: createClock,
                install: install,
                withGlobal: withGlobal
            };
        }
        const defaultImplementation = withGlobal(globalObject);
        defaultImplementation.timers;
        defaultImplementation.createClock;
        defaultImplementation.install;
        exports.withGlobal = withGlobal;
    },
    "../../node_modules/.pnpm/type-detect@4.0.8/node_modules/type-detect/type-detect.js": function(module) {
        (function(global1, factory) {
            module.exports = factory();
        })(0, function() {
            'use strict';
            var promiseExists = 'function' == typeof Promise;
            var globalObject = 'object' == typeof self ? self : global;
            var symbolExists = 'undefined' != typeof Symbol;
            var mapExists = 'undefined' != typeof Map;
            var setExists = 'undefined' != typeof Set;
            var weakMapExists = 'undefined' != typeof WeakMap;
            var weakSetExists = 'undefined' != typeof WeakSet;
            var dataViewExists = 'undefined' != typeof DataView;
            var symbolIteratorExists = symbolExists && void 0 !== Symbol.iterator;
            var symbolToStringTagExists = symbolExists && void 0 !== Symbol.toStringTag;
            var setEntriesExists = setExists && 'function' == typeof Set.prototype.entries;
            var mapEntriesExists = mapExists && 'function' == typeof Map.prototype.entries;
            var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
            var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
            var arrayIteratorExists = symbolIteratorExists && 'function' == typeof Array.prototype[Symbol.iterator];
            var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
            var stringIteratorExists = symbolIteratorExists && 'function' == typeof String.prototype[Symbol.iterator];
            var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
            var toStringLeftSliceLength = 8;
            var toStringRightSliceLength = -1;
            function typeDetect(obj) {
                var typeofObj = typeof obj;
                if ('object' !== typeofObj) return typeofObj;
                if (null === obj) return 'null';
                if (obj === globalObject) return 'global';
                if (Array.isArray(obj) && (false === symbolToStringTagExists || !(Symbol.toStringTag in obj))) return 'Array';
                if ('object' == typeof window && null !== window) {
                    if ('object' == typeof window.location && obj === window.location) return 'Location';
                    if ('object' == typeof window.document && obj === window.document) return 'Document';
                    if ('object' == typeof window.navigator) {
                        if ('object' == typeof window.navigator.mimeTypes && obj === window.navigator.mimeTypes) return 'MimeTypeArray';
                        if ('object' == typeof window.navigator.plugins && obj === window.navigator.plugins) return 'PluginArray';
                    }
                    if (('function' == typeof window.HTMLElement || 'object' == typeof window.HTMLElement) && obj instanceof window.HTMLElement) {
                        if ('BLOCKQUOTE' === obj.tagName) return 'HTMLQuoteElement';
                        if ('TD' === obj.tagName) return 'HTMLTableDataCellElement';
                        if ('TH' === obj.tagName) return 'HTMLTableHeaderCellElement';
                    }
                }
                var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
                if ('string' == typeof stringTag) return stringTag;
                var objPrototype = Object.getPrototypeOf(obj);
                if (objPrototype === RegExp.prototype) return 'RegExp';
                if (objPrototype === Date.prototype) return 'Date';
                if (promiseExists && objPrototype === Promise.prototype) return 'Promise';
                if (setExists && objPrototype === Set.prototype) return 'Set';
                if (mapExists && objPrototype === Map.prototype) return 'Map';
                if (weakSetExists && objPrototype === WeakSet.prototype) return 'WeakSet';
                if (weakMapExists && objPrototype === WeakMap.prototype) return 'WeakMap';
                if (dataViewExists && objPrototype === DataView.prototype) return 'DataView';
                if (mapExists && objPrototype === mapIteratorPrototype) return 'Map Iterator';
                if (setExists && objPrototype === setIteratorPrototype) return 'Set Iterator';
                if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) return 'Array Iterator';
                if (stringIteratorExists && objPrototype === stringIteratorPrototype) return 'String Iterator';
                if (null === objPrototype) return 'Object';
                return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
            }
            return typeDetect;
        });
    },
    timers: function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_timers__;
    },
    "timers/promises": function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_timers_promises_da6d1ba4__;
    },
    util: function(module) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_util__;
    }
});
const fake_timers_src = __webpack_require__("../../node_modules/.pnpm/@sinonjs+fake-timers@14.0.0/node_modules/@sinonjs/fake-timers/src/fake-timers-src.js");
async function main() {
    console.log(fake_timers_src.withGlobal);
}
export { main };
