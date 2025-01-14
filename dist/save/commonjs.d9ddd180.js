require("./extendedClient.31bd083b.js");
require("./requestPolicyFactoryPolicy.390999e2.js");
require("./disableKeepAlivePolicy.62298614.js");
require("./httpClientAdapter.f71a96b9.js");
require("./util.f2864549.js");


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
var $ae07f90e64ccd002$exports = {};
$ae07f90e64ccd002$exports = new URL("extendedClient.31bd083b.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ExtendedServiceClient", {
    enumerable: true,
    get: function() {
        return $ae07f90e64ccd002$exports.ExtendedServiceClient;
    }
});
var $9a3261462a00705f$exports = {};
$9a3261462a00705f$exports = new URL("requestPolicyFactoryPolicy.390999e2.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "requestPolicyFactoryPolicyName", {
    enumerable: true,
    get: function() {
        return $9a3261462a00705f$exports.requestPolicyFactoryPolicyName;
    }
});
Object.defineProperty(module.exports, "createRequestPolicyFactoryPolicy", {
    enumerable: true,
    get: function() {
        return $9a3261462a00705f$exports.createRequestPolicyFactoryPolicy;
    }
});
Object.defineProperty(module.exports, "HttpPipelineLogLevel", {
    enumerable: true,
    get: function() {
        return $9a3261462a00705f$exports.HttpPipelineLogLevel;
    }
});

var $lJYmZ = parcelRequire("lJYmZ");
Object.defineProperty(module.exports, "disableKeepAlivePolicyName", {
    enumerable: true,
    get: function() {
        return $lJYmZ.disableKeepAlivePolicyName;
    }
});
var $0cbfa34be6e6e501$exports = {};
$0cbfa34be6e6e501$exports = new URL("httpClientAdapter.f71a96b9.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "convertHttpClient", {
    enumerable: true,
    get: function() {
        return $0cbfa34be6e6e501$exports.convertHttpClient;
    }
});

var $6vssM = parcelRequire("6vssM");
Object.defineProperty(module.exports, "toHttpHeadersLike", {
    enumerable: true,
    get: function() {
        return $6vssM.toHttpHeadersLike;
    }
});


