require("./exponentialRetryStrategy.2aad8a17.js");
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
var $99aa1ea4580fa43c$exports = {};
$99aa1ea4580fa43c$exports = new URL("exponentialRetryStrategy.2aad8a17.js", "file:" + __filename).toString();



var $dI2EA = parcelRequire("dI2EA");
var $cc2bb07c796e7b38$exports = {};
$cc2bb07c796e7b38$exports = new URL("retryPolicy.f061ccd1.js", "file:" + __filename).toString();



var $l9U3w = parcelRequire("l9U3w");
const $037f02e41820efee$export$8e84dd420dfc05b3 = "defaultRetryPolicy";
function $037f02e41820efee$export$2797ac0c742a895c(options = {}) {
    var _a;
    return {
        name: $037f02e41820efee$export$8e84dd420dfc05b3,
        sendRequest: (0, $cc2bb07c796e7b38$exports.retryPolicy)([
            (0, $dI2EA.throttlingRetryStrategy)(),
            (0, $99aa1ea4580fa43c$exports.exponentialRetryStrategy)(options)
        ], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $l9U3w.DEFAULT_RETRY_POLICY_COUNT)
        }).sendRequest
    };
}


//# sourceMappingURL=defaultRetryPolicy.58077bca.js.map
