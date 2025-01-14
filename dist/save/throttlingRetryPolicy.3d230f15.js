require("./throttlingRetryStrategy.9fdd1d06.js");
require("./retryPolicy.a03e4af1.js");
require("./constants.ccb0eb27.js");


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

var $eKlFE = parcelRequire("eKlFE");

var $gjd3R = parcelRequire("gjd3R");

var $NpdWD = parcelRequire("NpdWD");
const $37563fefaa8f124e$export$c5e6cfdf5d4c923f = "throttlingRetryPolicy";
function $37563fefaa8f124e$export$e497b744d0faff7c(options = {}) {
    var _a;
    return {
        name: $37563fefaa8f124e$export$c5e6cfdf5d4c923f,
        sendRequest: (0, $gjd3R.retryPolicy)([
            (0, $eKlFE.throttlingRetryStrategy)()
        ], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $NpdWD.DEFAULT_RETRY_POLICY_COUNT)
        }).sendRequest
    };
}


