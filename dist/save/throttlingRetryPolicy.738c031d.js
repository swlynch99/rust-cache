require("./throttlingRetryStrategy.7e2d6a19.js");
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

var $dI2EA = parcelRequire("dI2EA");

var $fSamR = parcelRequire("fSamR");

var $l9U3w = parcelRequire("l9U3w");
const $81f54325b70ac436$export$c5e6cfdf5d4c923f = "throttlingRetryPolicy";
function $81f54325b70ac436$export$e497b744d0faff7c(options = {}) {
    var _a;
    return {
        name: $81f54325b70ac436$export$c5e6cfdf5d4c923f,
        sendRequest: (0, $fSamR.retryPolicy)([
            (0, $dI2EA.throttlingRetryStrategy)()
        ], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $l9U3w.DEFAULT_RETRY_POLICY_COUNT)
        }).sendRequest
    };
}


//# sourceMappingURL=throttlingRetryPolicy.738c031d.js.map
