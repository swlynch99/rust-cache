require("./extendedClient.c3b78838.js");
require("./requestPolicyFactoryPolicy.5b3e0309.js");
require("./disableKeepAlivePolicy.bf9a0875.js");
require("./httpClientAdapter.46945cd6.js");
require("./util.22b87ff3.js");


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
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.toHttpHeadersLike = module.exports.convertHttpClient = module.exports.disableKeepAlivePolicyName = module.exports.HttpPipelineLogLevel = module.exports.createRequestPolicyFactoryPolicy = module.exports.requestPolicyFactoryPolicyName = module.exports.ExtendedServiceClient = void 0;
var $8c3c3ef47b2ee8d4$exports = {};
$8c3c3ef47b2ee8d4$exports = new URL("extendedClient.c3b78838.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ExtendedServiceClient", {
    enumerable: true,
    get: function() {
        return $8c3c3ef47b2ee8d4$exports.ExtendedServiceClient;
    }
});
var $106232987bce72f3$exports = {};
$106232987bce72f3$exports = new URL("requestPolicyFactoryPolicy.5b3e0309.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "requestPolicyFactoryPolicyName", {
    enumerable: true,
    get: function() {
        return $106232987bce72f3$exports.requestPolicyFactoryPolicyName;
    }
});
Object.defineProperty(module.exports, "createRequestPolicyFactoryPolicy", {
    enumerable: true,
    get: function() {
        return $106232987bce72f3$exports.createRequestPolicyFactoryPolicy;
    }
});
Object.defineProperty(module.exports, "HttpPipelineLogLevel", {
    enumerable: true,
    get: function() {
        return $106232987bce72f3$exports.HttpPipelineLogLevel;
    }
});

var $g1FoC = parcelRequire("g1FoC");
Object.defineProperty(module.exports, "disableKeepAlivePolicyName", {
    enumerable: true,
    get: function() {
        return $g1FoC.disableKeepAlivePolicyName;
    }
});
var $8ba53a74f4b4471d$exports = {};
$8ba53a74f4b4471d$exports = new URL("httpClientAdapter.46945cd6.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "convertHttpClient", {
    enumerable: true,
    get: function() {
        return $8ba53a74f4b4471d$exports.convertHttpClient;
    }
});

var $eU2zw = parcelRequire("eU2zw");
Object.defineProperty(module.exports, "toHttpHeadersLike", {
    enumerable: true,
    get: function() {
        return $eU2zw.toHttpHeadersLike;
    }
});


//# sourceMappingURL=commonjs.92e91766.js.map
