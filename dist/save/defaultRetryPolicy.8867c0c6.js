require("./exponentialRetryStrategy.7606a9bd.js");
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
var $259a96821afa8801$exports = {};
$259a96821afa8801$exports = new URL("exponentialRetryStrategy.7606a9bd.js", "file:" + __filename).toString();



var $eKlFE = parcelRequire("eKlFE");
var $93e447f95832b6ac$exports = {};
$93e447f95832b6ac$exports = new URL("retryPolicy.a03e4af1.js", "file:" + __filename).toString();



var $NpdWD = parcelRequire("NpdWD");
const $362711c88d2d3e0e$export$8e84dd420dfc05b3 = "defaultRetryPolicy";
function $362711c88d2d3e0e$export$2797ac0c742a895c(options = {}) {
    var _a;
    return {
        name: $362711c88d2d3e0e$export$8e84dd420dfc05b3,
        sendRequest: (0, $93e447f95832b6ac$exports.retryPolicy)([
            (0, $eKlFE.throttlingRetryStrategy)(),
            (0, $259a96821afa8801$exports.exponentialRetryStrategy)(options)
        ], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $NpdWD.DEFAULT_RETRY_POLICY_COUNT)
        }).sendRequest
    };
}


