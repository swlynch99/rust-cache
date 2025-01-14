require("./deserializationPolicy.a2fb488b.js");
require("./esm.b9de7281.js");
require("./serializationPolicy.c203cf52.js");


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
var $2ff26f1524841838$exports = {};
$2ff26f1524841838$exports = new URL("deserializationPolicy.a2fb488b.js", "file:" + __filename).toString();



var $6W8oz = parcelRequire("6W8oz");
var $2f1ebd763147ba5c$exports = {};
$2f1ebd763147ba5c$exports = new URL("serializationPolicy.c203cf52.js", "file:" + __filename).toString();


/**
 * Creates a new Pipeline for use with a Service Client.
 * Adds in deserializationPolicy by default.
 * Also adds in bearerTokenAuthenticationPolicy if passed a TokenCredential.
 * @param options - Options to customize the created pipeline.
 */ function $fcfe13f74a3f4427$var$createClientPipeline(options = {}) {
    const pipeline = (0, $6W8oz.createPipelineFromOptions)(options !== null && options !== void 0 ? options : {});
    if (options.credentialOptions) pipeline.addPolicy((0, $6W8oz.bearerTokenAuthenticationPolicy)({
        credential: options.credentialOptions.credential,
        scopes: options.credentialOptions.credentialScopes
    }));
    pipeline.addPolicy((0, $2f1ebd763147ba5c$exports.serializationPolicy)(options.serializationOptions), {
        phase: "Serialize"
    });
    pipeline.addPolicy((0, $2ff26f1524841838$exports.deserializationPolicy)(options.deserializationOptions), {
        phase: "Deserialize"
    });
    return pipeline;
}
module.exports.createClientPipeline = $fcfe13f74a3f4427$var$createClientPipeline;


//# sourceMappingURL=pipeline.444e4c80.js.map
