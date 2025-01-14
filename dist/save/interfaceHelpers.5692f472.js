require("./serializer.147d377a.js");


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
module.exports.getPathStringFromParameter = module.exports.getStreamingResponseStatusCodes = void 0;

var $frSrN = parcelRequire("frSrN");
/**
 * Gets the list of status codes for streaming responses.
 * @internal
 */ function $eb6f61b14f44e8ca$var$getStreamingResponseStatusCodes(operationSpec) {
    const result = new Set();
    for(const statusCode in operationSpec.responses){
        const operationResponse = operationSpec.responses[statusCode];
        if (operationResponse.bodyMapper && operationResponse.bodyMapper.type.name === $frSrN.MapperTypeNames.Stream) result.add(Number(statusCode));
    }
    return result;
}
module.exports.getStreamingResponseStatusCodes = $eb6f61b14f44e8ca$var$getStreamingResponseStatusCodes;
/**
 * Get the path to this parameter's value as a dotted string (a.b.c).
 * @param parameter - The parameter to get the path string for.
 * @returns The path to this parameter's value as a dotted string.
 * @internal
 */ function $eb6f61b14f44e8ca$var$getPathStringFromParameter(parameter) {
    const { parameterPath: parameterPath, mapper: mapper } = parameter;
    let result;
    if (typeof parameterPath === "string") result = parameterPath;
    else if (Array.isArray(parameterPath)) result = parameterPath.join(".");
    else result = mapper.serializedName;
    return result;
}
module.exports.getPathStringFromParameter = $eb6f61b14f44e8ca$var$getPathStringFromParameter;


//# sourceMappingURL=interfaceHelpers.5692f472.js.map
