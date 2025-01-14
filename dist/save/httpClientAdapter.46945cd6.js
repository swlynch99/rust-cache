require("./response.6f98f86d.js");
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
module.exports.convertHttpClient = void 0;

var $ePr5T = parcelRequire("ePr5T");

var $eU2zw = parcelRequire("eU2zw");
/**
 * Converts a RequestPolicy based HttpClient to a PipelineRequest based HttpClient.
 * @param requestPolicyClient - A HttpClient compatible with core-http
 * @returns A HttpClient compatible with core-rest-pipeline
 */ function $bdf7648e3dd1ca04$var$convertHttpClient(requestPolicyClient) {
    return {
        sendRequest: async (request)=>{
            const response = await requestPolicyClient.sendRequest((0, $eU2zw.toWebResourceLike)(request, {
                createProxy: true
            }));
            return (0, $ePr5T.toPipelineResponse)(response);
        }
    };
}
module.exports.convertHttpClient = $bdf7648e3dd1ca04$var$convertHttpClient;


//# sourceMappingURL=httpClientAdapter.46945cd6.js.map
