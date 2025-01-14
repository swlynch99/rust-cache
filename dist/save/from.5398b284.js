require("./errors.786067ff.js");


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
parcelRegister("gjXM0", function(module, exports) {
'use strict';
function $be1cc96858d075c2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $be1cc96858d075c2$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $be1cc96858d075c2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $be1cc96858d075c2$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $be1cc96858d075c2$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $be1cc96858d075c2$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $be1cc96858d075c2$var$ownKeys(Object(source), !0).forEach(function(key) {
            $be1cc96858d075c2$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $be1cc96858d075c2$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $be1cc96858d075c2$var$_defineProperty(obj, key, value) {
    key = $be1cc96858d075c2$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $be1cc96858d075c2$var$_toPropertyKey(arg) {
    var key = $be1cc96858d075c2$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $be1cc96858d075c2$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}

var $be1cc96858d075c2$var$ERR_INVALID_ARG_TYPE = (parcelRequire("2M35Y")).codes.ERR_INVALID_ARG_TYPE;
function $be1cc96858d075c2$var$from(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === 'function') iterator = iterable;
    else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
    else throw new $be1cc96858d075c2$var$ERR_INVALID_ARG_TYPE('iterable', [
        'Iterable'
    ], iterable);
    var readable = new Readable($be1cc96858d075c2$var$_objectSpread({
        objectMode: true
    }, opts));
    // Reading boolean to protect against _read
    // being called before last iteration completion.
    var reading = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    function next() {
        return _next2.apply(this, arguments);
    }
    function _next2() {
        _next2 = $be1cc96858d075c2$var$_asyncToGenerator(function*() {
            try {
                var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
                if (done) readable.push(null);
                else if (readable.push((yield value))) next();
                else reading = false;
            } catch (err) {
                readable.destroy(err);
            }
        });
        return _next2.apply(this, arguments);
    }
    return readable;
}
module.exports = $be1cc96858d075c2$var$from;

});


//# sourceMappingURL=from.5398b284.js.map
