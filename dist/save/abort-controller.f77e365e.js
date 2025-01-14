require("./event-target-shim.f3f24915.js");


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
parcelRegister("kKrD0", function(module, exports) {
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */ 'use strict';
Object.defineProperty(module.exports, '__esModule', {
    value: true
});

var $3Nwy0 = parcelRequire("3Nwy0");
/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */ class $f1ad88df00924cbe$var$AbortSignal extends $3Nwy0.EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */ constructor(){
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */ get aborted() {
        const aborted = $f1ad88df00924cbe$var$abortedFlags.get(this);
        if (typeof aborted !== "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        return aborted;
    }
}
$3Nwy0.defineEventAttribute($f1ad88df00924cbe$var$AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */ function $f1ad88df00924cbe$var$createAbortSignal() {
    const signal = Object.create($f1ad88df00924cbe$var$AbortSignal.prototype);
    $3Nwy0.EventTarget.call(signal);
    $f1ad88df00924cbe$var$abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */ function $f1ad88df00924cbe$var$abortSignal(signal) {
    if ($f1ad88df00924cbe$var$abortedFlags.get(signal) !== false) return;
    $f1ad88df00924cbe$var$abortedFlags.set(signal, true);
    signal.dispatchEvent({
        type: "abort"
    });
}
/**
 * Aborted flag for each instances.
 */ const $f1ad88df00924cbe$var$abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties($f1ad88df00924cbe$var$AbortSignal.prototype, {
    aborted: {
        enumerable: true
    }
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty($f1ad88df00924cbe$var$AbortSignal.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortSignal"
});
/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */ class $f1ad88df00924cbe$var$AbortController {
    /**
     * Initialize this controller.
     */ constructor(){
        $f1ad88df00924cbe$var$signals.set(this, $f1ad88df00924cbe$var$createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */ get signal() {
        return $f1ad88df00924cbe$var$getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */ abort() {
        $f1ad88df00924cbe$var$abortSignal($f1ad88df00924cbe$var$getSignal(this));
    }
}
/**
 * Associated signals.
 */ const $f1ad88df00924cbe$var$signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */ function $f1ad88df00924cbe$var$getSignal(controller) {
    const signal = $f1ad88df00924cbe$var$signals.get(controller);
    if (signal == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    return signal;
}
// Properties should be enumerable.
Object.defineProperties($f1ad88df00924cbe$var$AbortController.prototype, {
    signal: {
        enumerable: true
    },
    abort: {
        enumerable: true
    }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") Object.defineProperty($f1ad88df00924cbe$var$AbortController.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortController"
});
module.exports.AbortController = $f1ad88df00924cbe$var$AbortController;
module.exports.AbortSignal = $f1ad88df00924cbe$var$AbortSignal;
module.exports.default = $f1ad88df00924cbe$var$AbortController;
module.exports = $f1ad88df00924cbe$var$AbortController;
module.exports.AbortController = module.exports["default"] = $f1ad88df00924cbe$var$AbortController;
module.exports.AbortSignal = $f1ad88df00924cbe$var$AbortSignal;

});
parcelRegister("3Nwy0", function(module, exports) {
module.exports = new URL("event-target-shim.f3f24915.js", "file:" + __filename).toString();

});



//# sourceMappingURL=abort-controller.f77e365e.js.map
