require("./util.22b87ff3.js");
require("./response.6f98f86d.js");


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
module.exports.createRequestPolicyFactoryPolicy = module.exports.requestPolicyFactoryPolicyName = module.exports.HttpPipelineLogLevel = void 0;

var $eU2zw = parcelRequire("eU2zw");

var $ePr5T = parcelRequire("ePr5T");
/**
 * An enum for compatibility with RequestPolicy
 */ var $0b0613ae9862d867$var$HttpPipelineLogLevel;
(function(HttpPipelineLogLevel) {
    HttpPipelineLogLevel[HttpPipelineLogLevel["ERROR"] = 1] = "ERROR";
    HttpPipelineLogLevel[HttpPipelineLogLevel["INFO"] = 3] = "INFO";
    HttpPipelineLogLevel[HttpPipelineLogLevel["OFF"] = 0] = "OFF";
    HttpPipelineLogLevel[HttpPipelineLogLevel["WARNING"] = 2] = "WARNING";
})($0b0613ae9862d867$var$HttpPipelineLogLevel || (module.exports.HttpPipelineLogLevel = $0b0613ae9862d867$var$HttpPipelineLogLevel = {}));
const $0b0613ae9862d867$var$mockRequestPolicyOptions = {
    log (_logLevel, _message) {
    /* do nothing */ },
    shouldLog (_logLevel) {
        return false;
    }
};
/**
 * The name of the RequestPolicyFactoryPolicy
 */ module.exports.requestPolicyFactoryPolicyName = "RequestPolicyFactoryPolicy";
/**
 * A policy that wraps policies written for core-http.
 * @param factories - An array of `RequestPolicyFactory` objects from a core-http pipeline
 */ function $0b0613ae9862d867$var$createRequestPolicyFactoryPolicy(factories) {
    const orderedFactories = factories.slice().reverse();
    return {
        name: module.exports.requestPolicyFactoryPolicyName,
        async sendRequest (request, next) {
            let httpPipeline = {
                async sendRequest (httpRequest) {
                    const response = await next((0, $eU2zw.toPipelineRequest)(httpRequest));
                    return (0, $ePr5T.toCompatResponse)(response, {
                        createProxy: true
                    });
                }
            };
            for (const factory of orderedFactories)httpPipeline = factory.create(httpPipeline, $0b0613ae9862d867$var$mockRequestPolicyOptions);
            const webResourceLike = (0, $eU2zw.toWebResourceLike)(request, {
                createProxy: true
            });
            const response = await httpPipeline.sendRequest(webResourceLike);
            return (0, $ePr5T.toPipelineResponse)(response);
        }
    };
}
module.exports.createRequestPolicyFactoryPolicy = $0b0613ae9862d867$var$createRequestPolicyFactoryPolicy;


//# sourceMappingURL=requestPolicyFactoryPolicy.5b3e0309.js.map
