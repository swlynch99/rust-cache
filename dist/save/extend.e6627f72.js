
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
parcelRegister("ehr3Q", function(module, exports) {
'use strict';
var $a657a4f9aa542528$var$hasOwn = Object.prototype.hasOwnProperty;
var $a657a4f9aa542528$var$toStr = Object.prototype.toString;
var $a657a4f9aa542528$var$defineProperty = Object.defineProperty;
var $a657a4f9aa542528$var$gOPD = Object.getOwnPropertyDescriptor;
var $a657a4f9aa542528$var$isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') return Array.isArray(arr);
    return $a657a4f9aa542528$var$toStr.call(arr) === '[object Array]';
};
var $a657a4f9aa542528$var$isPlainObject = function isPlainObject(obj) {
    if (!obj || $a657a4f9aa542528$var$toStr.call(obj) !== '[object Object]') return false;
    var hasOwnConstructor = $a657a4f9aa542528$var$hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && $a657a4f9aa542528$var$hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === 'undefined' || $a657a4f9aa542528$var$hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var $a657a4f9aa542528$var$setProperty = function setProperty(target, options) {
    if ($a657a4f9aa542528$var$defineProperty && options.name === '__proto__') $a657a4f9aa542528$var$defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var $a657a4f9aa542528$var$getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!$a657a4f9aa542528$var$hasOwn.call(obj, name)) return void 0;
        else if ($a657a4f9aa542528$var$gOPD) // In early versions of node, obj['__proto__'] is buggy when obj has
        // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
        return $a657a4f9aa542528$var$gOPD(obj, name).value;
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
            src = $a657a4f9aa542528$var$getProperty(target, name);
            copy = $a657a4f9aa542528$var$getProperty(options, name);
            // Prevent never-ending loop
            if (target !== copy) {
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ($a657a4f9aa542528$var$isPlainObject(copy) || (copyIsArray = $a657a4f9aa542528$var$isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && $a657a4f9aa542528$var$isArray(src) ? src : [];
                    } else clone = src && $a657a4f9aa542528$var$isPlainObject(src) ? src : {};
                    // Never move original objects, clone them
                    $a657a4f9aa542528$var$setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== 'undefined') $a657a4f9aa542528$var$setProperty(target, {
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


//# sourceMappingURL=extend.e6627f72.js.map
