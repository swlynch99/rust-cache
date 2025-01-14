require("./util.f2864549.js");
require("./response.bc1fca6d.js");


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

var $6vssM = parcelRequire("6vssM");

var $tmX7T = parcelRequire("tmX7T");
/**
 * An enum for compatibility with RequestPolicy
 */ var $0881e7a9666d840e$var$HttpPipelineLogLevel;
(function(HttpPipelineLogLevel) {
    HttpPipelineLogLevel[HttpPipelineLogLevel["ERROR"] = 1] = "ERROR";
    HttpPipelineLogLevel[HttpPipelineLogLevel["INFO"] = 3] = "INFO";
    HttpPipelineLogLevel[HttpPipelineLogLevel["OFF"] = 0] = "OFF";
    HttpPipelineLogLevel[HttpPipelineLogLevel["WARNING"] = 2] = "WARNING";
})($0881e7a9666d840e$var$HttpPipelineLogLevel || (module.exports.HttpPipelineLogLevel = $0881e7a9666d840e$var$HttpPipelineLogLevel = {}));
const $0881e7a9666d840e$var$mockRequestPolicyOptions = {
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
 */ function $0881e7a9666d840e$var$createRequestPolicyFactoryPolicy(factories) {
    const orderedFactories = factories.slice().reverse();
    return {
        name: module.exports.requestPolicyFactoryPolicyName,
        async sendRequest (request, next) {
            let httpPipeline = {
                async sendRequest (httpRequest) {
                    const response = await next((0, $6vssM.toPipelineRequest)(httpRequest));
                    return (0, $tmX7T.toCompatResponse)(response, {
                        createProxy: true
                    });
                }
            };
            for (const factory of orderedFactories)httpPipeline = factory.create(httpPipeline, $0881e7a9666d840e$var$mockRequestPolicyOptions);
            const webResourceLike = (0, $6vssM.toWebResourceLike)(request, {
                createProxy: true
            });
            const response = await httpPipeline.sendRequest(webResourceLike);
            return (0, $tmX7T.toPipelineResponse)(response);
        }
    };
}
module.exports.createRequestPolicyFactoryPolicy = $0881e7a9666d840e$var$createRequestPolicyFactoryPolicy;


