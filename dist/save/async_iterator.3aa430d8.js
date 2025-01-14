require("./end-of-stream.eb2fc5e1.js");


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
parcelRegister("9hubD", function(module, exports) {
'use strict';
var $6c1d1e04eafaba69$var$_Object$setPrototypeO;
function $6c1d1e04eafaba69$var$_defineProperty(obj, key, value) {
    key = $6c1d1e04eafaba69$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $6c1d1e04eafaba69$var$_toPropertyKey(arg) {
    var key = $6c1d1e04eafaba69$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $6c1d1e04eafaba69$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}

var $1GsUA = parcelRequire("1GsUA");
var $6c1d1e04eafaba69$var$kLastResolve = Symbol('lastResolve');
var $6c1d1e04eafaba69$var$kLastReject = Symbol('lastReject');
var $6c1d1e04eafaba69$var$kError = Symbol('error');
var $6c1d1e04eafaba69$var$kEnded = Symbol('ended');
var $6c1d1e04eafaba69$var$kLastPromise = Symbol('lastPromise');
var $6c1d1e04eafaba69$var$kHandlePromise = Symbol('handlePromise');
var $6c1d1e04eafaba69$var$kStream = Symbol('stream');
function $6c1d1e04eafaba69$var$createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function $6c1d1e04eafaba69$var$readAndResolve(iter) {
    var resolve = iter[$6c1d1e04eafaba69$var$kLastResolve];
    if (resolve !== null) {
        var data = iter[$6c1d1e04eafaba69$var$kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[$6c1d1e04eafaba69$var$kLastPromise] = null;
            iter[$6c1d1e04eafaba69$var$kLastResolve] = null;
            iter[$6c1d1e04eafaba69$var$kLastReject] = null;
            resolve($6c1d1e04eafaba69$var$createIterResult(data, false));
        }
    }
}
function $6c1d1e04eafaba69$var$onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick($6c1d1e04eafaba69$var$readAndResolve, iter);
}
function $6c1d1e04eafaba69$var$wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[$6c1d1e04eafaba69$var$kEnded]) {
                resolve($6c1d1e04eafaba69$var$createIterResult(undefined, true));
                return;
            }
            iter[$6c1d1e04eafaba69$var$kHandlePromise](resolve, reject);
        }, reject);
    };
}
var $6c1d1e04eafaba69$var$AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var $6c1d1e04eafaba69$var$ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(($6c1d1e04eafaba69$var$_Object$setPrototypeO = {
    get stream () {
        return this[$6c1d1e04eafaba69$var$kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[$6c1d1e04eafaba69$var$kError];
        if (error !== null) return Promise.reject(error);
        if (this[$6c1d1e04eafaba69$var$kEnded]) return Promise.resolve($6c1d1e04eafaba69$var$createIterResult(undefined, true));
        if (this[$6c1d1e04eafaba69$var$kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[$6c1d1e04eafaba69$var$kError]) reject(_this[$6c1d1e04eafaba69$var$kError]);
                else resolve($6c1d1e04eafaba69$var$createIterResult(undefined, true));
            });
        });
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[$6c1d1e04eafaba69$var$kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise($6c1d1e04eafaba69$var$wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[$6c1d1e04eafaba69$var$kStream].read();
            if (data !== null) return Promise.resolve($6c1d1e04eafaba69$var$createIterResult(data, false));
            promise = new Promise(this[$6c1d1e04eafaba69$var$kHandlePromise]);
        }
        this[$6c1d1e04eafaba69$var$kLastPromise] = promise;
        return promise;
    }
}, $6c1d1e04eafaba69$var$_defineProperty($6c1d1e04eafaba69$var$_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), $6c1d1e04eafaba69$var$_defineProperty($6c1d1e04eafaba69$var$_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[$6c1d1e04eafaba69$var$kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve($6c1d1e04eafaba69$var$createIterResult(undefined, true));
        });
    });
}), $6c1d1e04eafaba69$var$_Object$setPrototypeO), $6c1d1e04eafaba69$var$AsyncIteratorPrototype);
var $6c1d1e04eafaba69$var$createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create($6c1d1e04eafaba69$var$ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kStream, {
        value: stream,
        writable: true
    }), $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kLastResolve, {
        value: null,
        writable: true
    }), $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kLastReject, {
        value: null,
        writable: true
    }), $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kError, {
        value: null,
        writable: true
    }), $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), $6c1d1e04eafaba69$var$_defineProperty(_Object$create, $6c1d1e04eafaba69$var$kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[$6c1d1e04eafaba69$var$kStream].read();
            if (data) {
                iterator[$6c1d1e04eafaba69$var$kLastPromise] = null;
                iterator[$6c1d1e04eafaba69$var$kLastResolve] = null;
                iterator[$6c1d1e04eafaba69$var$kLastReject] = null;
                resolve($6c1d1e04eafaba69$var$createIterResult(data, false));
            } else {
                iterator[$6c1d1e04eafaba69$var$kLastResolve] = resolve;
                iterator[$6c1d1e04eafaba69$var$kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[$6c1d1e04eafaba69$var$kLastPromise] = null;
    $1GsUA(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[$6c1d1e04eafaba69$var$kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[$6c1d1e04eafaba69$var$kLastPromise] = null;
                iterator[$6c1d1e04eafaba69$var$kLastResolve] = null;
                iterator[$6c1d1e04eafaba69$var$kLastReject] = null;
                reject(err);
            }
            iterator[$6c1d1e04eafaba69$var$kError] = err;
            return;
        }
        var resolve = iterator[$6c1d1e04eafaba69$var$kLastResolve];
        if (resolve !== null) {
            iterator[$6c1d1e04eafaba69$var$kLastPromise] = null;
            iterator[$6c1d1e04eafaba69$var$kLastResolve] = null;
            iterator[$6c1d1e04eafaba69$var$kLastReject] = null;
            resolve($6c1d1e04eafaba69$var$createIterResult(undefined, true));
        }
        iterator[$6c1d1e04eafaba69$var$kEnded] = true;
    });
    stream.on('readable', $6c1d1e04eafaba69$var$onReadable.bind(null, iterator));
    return iterator;
};
module.exports = $6c1d1e04eafaba69$var$createReadableStreamAsyncIterator;

});
parcelRegister("1GsUA", function(module, exports) {
module.exports = new URL("end-of-stream.eb2fc5e1.js", "file:" + __filename).toString();

});



//# sourceMappingURL=async_iterator.3aa430d8.js.map
