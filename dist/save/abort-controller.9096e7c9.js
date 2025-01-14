require("./event-target-shim.74b15d50.js");


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
parcelRegister("3oOp8", function(module, exports) {
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */ 'use strict';
Object.defineProperty(module.exports, '__esModule', {
    value: true
});

var $yjrKL = parcelRequire("yjrKL");
/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */ class $279ab63d6b51a540$var$AbortSignal extends $yjrKL.EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */ constructor(){
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */ get aborted() {
        const aborted = $279ab63d6b51a540$var$abortedFlags.get(this);
        if (typeof aborted !== "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        return aborted;
    }
}
$yjrKL.defineEventAttribute($279ab63d6b51a540$var$AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */ function $279ab63d6b51a540$var$createAbortSignal() {
    const signal = Object.create($279ab63d6b51a540$var$AbortSignal.prototype);
    $yjrKL.EventTarget.call(signal);
    $279ab63d6b51a540$var$abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */ function $279ab63d6b51a540$var$abortSignal(signal) {
    if ($279ab63d6b51a540$var$abortedFlags.get(signal) !== false) return;
    $279ab63d6b51a540$var$abortedFlags.set(signal, true);
    signal.dispatchEvent({
        type: "abort"
    });
}
/**
 * Aborted flag for each instances.
 */ const $279ab63d6b51a540$var$abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties($279ab63d6b51a540$var$AbortSignal.prototype, {
    aborted: {
        enumerable: true
    }
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty($279ab63d6b51a540$var$AbortSignal.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortSignal"
});
/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */ class $279ab63d6b51a540$var$AbortController {
    /**
     * Initialize this controller.
     */ constructor(){
        $279ab63d6b51a540$var$signals.set(this, $279ab63d6b51a540$var$createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */ get signal() {
        return $279ab63d6b51a540$var$getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */ abort() {
        $279ab63d6b51a540$var$abortSignal($279ab63d6b51a540$var$getSignal(this));
    }
}
/**
 * Associated signals.
 */ const $279ab63d6b51a540$var$signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */ function $279ab63d6b51a540$var$getSignal(controller) {
    const signal = $279ab63d6b51a540$var$signals.get(controller);
    if (signal == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    return signal;
}
// Properties should be enumerable.
Object.defineProperties($279ab63d6b51a540$var$AbortController.prototype, {
    signal: {
        enumerable: true
    },
    abort: {
        enumerable: true
    }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty($279ab63d6b51a540$var$AbortController.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortController"
});
module.exports.AbortController = $279ab63d6b51a540$var$AbortController;
module.exports.AbortSignal = $279ab63d6b51a540$var$AbortSignal;
module.exports.default = $279ab63d6b51a540$var$AbortController;
module.exports = $279ab63d6b51a540$var$AbortController;
module.exports.AbortController = module.exports["default"] = $279ab63d6b51a540$var$AbortController;
module.exports.AbortSignal = $279ab63d6b51a540$var$AbortSignal;

});
parcelRegister("yjrKL", function(module, exports) {
module.exports = new URL("event-target-shim.74b15d50.js", "file:" + __filename).toString();

});



