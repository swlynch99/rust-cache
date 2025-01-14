require("./deserializationPolicy.fa2d3d5a.js");
require("./esm.346084e9.js");
require("./serializationPolicy.60ef005a.js");


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
module.exports.createClientPipeline = void 0;
var $c5780013e1a181be$exports = {};
$c5780013e1a181be$exports = new URL("deserializationPolicy.fa2d3d5a.js", "file:" + __filename).toString();



var $huk7e = parcelRequire("huk7e");
var $55553e44f682c7e9$exports = {};
$55553e44f682c7e9$exports = new URL("serializationPolicy.60ef005a.js", "file:" + __filename).toString();


/**
 * Creates a new Pipeline for use with a Service Client.
 * Adds in deserializationPolicy by default.
 * Also adds in bearerTokenAuthenticationPolicy if passed a TokenCredential.
 * @param options - Options to customize the created pipeline.
 */ function $e8c5bc309ae05f77$var$createClientPipeline(options = {}) {
    const pipeline = (0, $huk7e.createPipelineFromOptions)(options !== null && options !== void 0 ? options : {});
    if (options.credentialOptions) pipeline.addPolicy((0, $huk7e.bearerTokenAuthenticationPolicy)({
        credential: options.credentialOptions.credential,
        scopes: options.credentialOptions.credentialScopes
    }));
    pipeline.addPolicy((0, $55553e44f682c7e9$exports.serializationPolicy)(options.serializationOptions), {
        phase: "Serialize"
    });
    pipeline.addPolicy((0, $c5780013e1a181be$exports.deserializationPolicy)(options.deserializationOptions), {
        phase: "Deserialize"
    });
    return pipeline;
}
module.exports.createClientPipeline = $e8c5bc309ae05f77$var$createClientPipeline;


