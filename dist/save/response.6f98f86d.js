require("./esm.b9de7281.js");
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
module.exports.toPipelineResponse = module.exports.toCompatResponse = void 0;

var $6W8oz = parcelRequire("6W8oz");
var $aeb023ed6c8a897c$exports = {};
$aeb023ed6c8a897c$exports = new URL("util.22b87ff3.js", "file:" + __filename).toString();


const $acbad86da68bc76f$var$originalResponse = Symbol("Original FullOperationResponse");
/**
 * A helper to convert response objects from the new pipeline back to the old one.
 * @param response - A response object from core-client.
 * @returns A response compatible with `HttpOperationResponse` from core-http.
 */ function $acbad86da68bc76f$var$toCompatResponse(response, options) {
    let request = (0, $aeb023ed6c8a897c$exports.toWebResourceLike)(response.request);
    let headers = (0, $aeb023ed6c8a897c$exports.toHttpHeadersLike)(response.headers);
    if (options === null || options === void 0 ? void 0 : options.createProxy) return new Proxy(response, {
        get (target, prop, receiver) {
            if (prop === "headers") return headers;
            else if (prop === "request") return request;
            else if (prop === $acbad86da68bc76f$var$originalResponse) return response;
            return Reflect.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (prop === "headers") headers = value;
            else if (prop === "request") request = value;
            return Reflect.set(target, prop, value, receiver);
        }
    });
    else return Object.assign(Object.assign({}, response), {
        request: request,
        headers: headers
    });
}
module.exports.toCompatResponse = $acbad86da68bc76f$var$toCompatResponse;
/**
 * A helper to convert back to a PipelineResponse
 * @param compatResponse - A response compatible with `HttpOperationResponse` from core-http.
 */ function $acbad86da68bc76f$var$toPipelineResponse(compatResponse) {
    const extendedCompatResponse = compatResponse;
    const response = extendedCompatResponse[$acbad86da68bc76f$var$originalResponse];
    const headers = (0, $6W8oz.createHttpHeaders)(compatResponse.headers.toJson({
        preserveCase: true
    }));
    if (response) {
        response.headers = headers;
        return response;
    } else return Object.assign(Object.assign({}, compatResponse), {
        headers: headers,
        request: (0, $aeb023ed6c8a897c$exports.toPipelineRequest)(compatResponse.request)
    });
}
module.exports.toPipelineResponse = $acbad86da68bc76f$var$toPipelineResponse;


//# sourceMappingURL=response.6f98f86d.js.map
