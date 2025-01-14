require("./end-of-stream.6c3b7c21.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("eh9zz", function(module, exports) {
'use strict';
var $a64a142ec93be28e$var$_Object$setPrototypeO;
function $a64a142ec93be28e$var$_defineProperty(obj, key, value) {
    key = $a64a142ec93be28e$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $a64a142ec93be28e$var$_toPropertyKey(arg) {
    var key = $a64a142ec93be28e$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $a64a142ec93be28e$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}

var $hytP5 = parcelRequire("hytP5");
var $a64a142ec93be28e$var$kLastResolve = Symbol('lastResolve');
var $a64a142ec93be28e$var$kLastReject = Symbol('lastReject');
var $a64a142ec93be28e$var$kError = Symbol('error');
var $a64a142ec93be28e$var$kEnded = Symbol('ended');
var $a64a142ec93be28e$var$kLastPromise = Symbol('lastPromise');
var $a64a142ec93be28e$var$kHandlePromise = Symbol('handlePromise');
var $a64a142ec93be28e$var$kStream = Symbol('stream');
function $a64a142ec93be28e$var$createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function $a64a142ec93be28e$var$readAndResolve(iter) {
    var resolve = iter[$a64a142ec93be28e$var$kLastResolve];
    if (resolve !== null) {
        var data = iter[$a64a142ec93be28e$var$kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[$a64a142ec93be28e$var$kLastPromise] = null;
            iter[$a64a142ec93be28e$var$kLastResolve] = null;
            iter[$a64a142ec93be28e$var$kLastReject] = null;
            resolve($a64a142ec93be28e$var$createIterResult(data, false));
        }
    }
}
function $a64a142ec93be28e$var$onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick($a64a142ec93be28e$var$readAndResolve, iter);
}
function $a64a142ec93be28e$var$wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[$a64a142ec93be28e$var$kEnded]) {
                resolve($a64a142ec93be28e$var$createIterResult(undefined, true));
                return;
            }
            iter[$a64a142ec93be28e$var$kHandlePromise](resolve, reject);
        }, reject);
    };
}
var $a64a142ec93be28e$var$AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var $a64a142ec93be28e$var$ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(($a64a142ec93be28e$var$_Object$setPrototypeO = {
    get stream () {
        return this[$a64a142ec93be28e$var$kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[$a64a142ec93be28e$var$kError];
        if (error !== null) return Promise.reject(error);
        if (this[$a64a142ec93be28e$var$kEnded]) return Promise.resolve($a64a142ec93be28e$var$createIterResult(undefined, true));
        if (this[$a64a142ec93be28e$var$kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[$a64a142ec93be28e$var$kError]) reject(_this[$a64a142ec93be28e$var$kError]);
                else resolve($a64a142ec93be28e$var$createIterResult(undefined, true));
            });
        });
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[$a64a142ec93be28e$var$kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise($a64a142ec93be28e$var$wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[$a64a142ec93be28e$var$kStream].read();
            if (data !== null) return Promise.resolve($a64a142ec93be28e$var$createIterResult(data, false));
            promise = new Promise(this[$a64a142ec93be28e$var$kHandlePromise]);
        }
        this[$a64a142ec93be28e$var$kLastPromise] = promise;
        return promise;
    }
}, $a64a142ec93be28e$var$_defineProperty($a64a142ec93be28e$var$_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), $a64a142ec93be28e$var$_defineProperty($a64a142ec93be28e$var$_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[$a64a142ec93be28e$var$kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve($a64a142ec93be28e$var$createIterResult(undefined, true));
        });
    });
}), $a64a142ec93be28e$var$_Object$setPrototypeO), $a64a142ec93be28e$var$AsyncIteratorPrototype);
var $a64a142ec93be28e$var$createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create($a64a142ec93be28e$var$ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kStream, {
        value: stream,
        writable: true
    }), $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kLastResolve, {
        value: null,
        writable: true
    }), $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kLastReject, {
        value: null,
        writable: true
    }), $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kError, {
        value: null,
        writable: true
    }), $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), $a64a142ec93be28e$var$_defineProperty(_Object$create, $a64a142ec93be28e$var$kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[$a64a142ec93be28e$var$kStream].read();
            if (data) {
                iterator[$a64a142ec93be28e$var$kLastPromise] = null;
                iterator[$a64a142ec93be28e$var$kLastResolve] = null;
                iterator[$a64a142ec93be28e$var$kLastReject] = null;
                resolve($a64a142ec93be28e$var$createIterResult(data, false));
            } else {
                iterator[$a64a142ec93be28e$var$kLastResolve] = resolve;
                iterator[$a64a142ec93be28e$var$kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[$a64a142ec93be28e$var$kLastPromise] = null;
    $hytP5(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[$a64a142ec93be28e$var$kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[$a64a142ec93be28e$var$kLastPromise] = null;
                iterator[$a64a142ec93be28e$var$kLastResolve] = null;
                iterator[$a64a142ec93be28e$var$kLastReject] = null;
                reject(err);
            }
            iterator[$a64a142ec93be28e$var$kError] = err;
            return;
        }
        var resolve = iterator[$a64a142ec93be28e$var$kLastResolve];
        if (resolve !== null) {
            iterator[$a64a142ec93be28e$var$kLastPromise] = null;
            iterator[$a64a142ec93be28e$var$kLastResolve] = null;
            iterator[$a64a142ec93be28e$var$kLastReject] = null;
            resolve($a64a142ec93be28e$var$createIterResult(undefined, true));
        }
        iterator[$a64a142ec93be28e$var$kEnded] = true;
    });
    stream.on('readable', $a64a142ec93be28e$var$onReadable.bind(null, iterator));
    return iterator;
};
module.exports = $a64a142ec93be28e$var$createReadableStreamAsyncIterator;

});
parcelRegister("hytP5", function(module, exports) {
module.exports = new URL("end-of-stream.6c3b7c21.js", "file:" + __filename).toString();

});



