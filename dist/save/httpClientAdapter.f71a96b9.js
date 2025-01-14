require("./response.bc1fca6d.js");
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
module.exports.convertHttpClient = void 0;

var $tmX7T = parcelRequire("tmX7T");

var $6vssM = parcelRequire("6vssM");
/**
 * Converts a RequestPolicy based HttpClient to a PipelineRequest based HttpClient.
 * @param requestPolicyClient - A HttpClient compatible with core-http
 * @returns A HttpClient compatible with core-rest-pipeline
 */ function $ef24327b968cfc1f$var$convertHttpClient(requestPolicyClient) {
    return {
        sendRequest: async (request)=>{
            const response = await requestPolicyClient.sendRequest((0, $6vssM.toWebResourceLike)(request, {
                createProxy: true
            }));
            return (0, $tmX7T.toPipelineResponse)(response);
        }
    };
}
module.exports.convertHttpClient = $ef24327b968cfc1f$var$convertHttpClient;


