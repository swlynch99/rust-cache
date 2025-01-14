require("./exponentialRetryStrategy.2aad8a17.js");
require("./retryPolicy.f061ccd1.js");
require("./constants.5683eabb.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $i51KT = parcelRequire("i51KT");

var $fSamR = parcelRequire("fSamR");

var $l9U3w = parcelRequire("l9U3w");
const $a3c7859f8752b8c8$export$e7b54b771a3962d4 = "exponentialRetryPolicy";
function $a3c7859f8752b8c8$export$ea4ad9056bda1d5f(options = {}) {
    var _a;
    return (0, $fSamR.retryPolicy)([
        (0, $i51KT.exponentialRetryStrategy)(Object.assign(Object.assign({}, options), {
            ignoreSystemErrors: true
        }))
    ], {
        maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $l9U3w.DEFAULT_RETRY_POLICY_COUNT)
    });
}


//# sourceMappingURL=exponentialRetryPolicy.914e771a.js.map
