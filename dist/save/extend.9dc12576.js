
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
parcelRegister("bvFBs", function(module, exports) {
'use strict';
var $8612dc7d3c12cdf0$var$hasOwn = Object.prototype.hasOwnProperty;
var $8612dc7d3c12cdf0$var$toStr = Object.prototype.toString;
var $8612dc7d3c12cdf0$var$defineProperty = Object.defineProperty;
var $8612dc7d3c12cdf0$var$gOPD = Object.getOwnPropertyDescriptor;
var $8612dc7d3c12cdf0$var$isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') return Array.isArray(arr);
    return $8612dc7d3c12cdf0$var$toStr.call(arr) === '[object Array]';
};
var $8612dc7d3c12cdf0$var$isPlainObject = function isPlainObject(obj) {
    if (!obj || $8612dc7d3c12cdf0$var$toStr.call(obj) !== '[object Object]') return false;
    var hasOwnConstructor = $8612dc7d3c12cdf0$var$hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $8612dc7d3c12cdf0$var$hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === 'undefined' || $8612dc7d3c12cdf0$var$hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var $8612dc7d3c12cdf0$var$setProperty = function setProperty(target, options) {
    if ($8612dc7d3c12cdf0$var$defineProperty && options.name === '__proto__') $8612dc7d3c12cdf0$var$defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var $8612dc7d3c12cdf0$var$getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!$8612dc7d3c12cdf0$var$hasOwn.call(obj, name)) return void 0;
        else if ($8612dc7d3c12cdf0$var$gOPD) // In early versions of node, obj['__proto__'] is buggy when obj has
        // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
        return $8612dc7d3c12cdf0$var$gOPD(obj, name).value;
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') target = {};
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) // Extend the base object
        for(name in options){
            src = $8612dc7d3c12cdf0$var$getProperty(target, name);
            copy = $8612dc7d3c12cdf0$var$getProperty(options, name);
            // Prevent never-ending loop
            if (target !== copy) {
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ($8612dc7d3c12cdf0$var$isPlainObject(copy) || (copyIsArray = $8612dc7d3c12cdf0$var$isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && $8612dc7d3c12cdf0$var$isArray(src) ? src : [];
                    } else clone = src && $8612dc7d3c12cdf0$var$isPlainObject(src) ? src : {};
                    // Never move original objects, clone them
                    $8612dc7d3c12cdf0$var$setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== 'undefined') $8612dc7d3c12cdf0$var$setProperty(target, {
                    name: name,
                    newValue: copy
                });
            }
        }
    }
    // Return the modified object
    return target;
};

});


