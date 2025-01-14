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
const $384d904a208b1847$export$ac4948ec3d0d15be = "systemErrorRetryPolicy";
function $384d904a208b1847$export$e41bcf10d1f4d64(options = {}) {
    var _a;
    return {
        name: $384d904a208b1847$export$ac4948ec3d0d15be,
        sendRequest: (0, $fSamR.retryPolicy)([
            (0, $i51KT.exponentialRetryStrategy)(Object.assign(Object.assign({}, options), {
                ignoreHttpStatusCodes: true
            }))
        ], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : (0, $l9U3w.DEFAULT_RETRY_POLICY_COUNT)
        }).sendRequest
    };
}


//# sourceMappingURL=systemErrorRetryPolicy.3093ad71.js.map
