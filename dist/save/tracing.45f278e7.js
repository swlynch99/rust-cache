require("./esm.009e7b5c.js");
require("./constants.425d5fc4.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $j6nzo = parcelRequire("j6nzo");

var $daWVB = parcelRequire("daWVB");
const $e9e87bce6e1d4c8f$export$fd8e54df9573b5e4 = (0, $j6nzo.createTracingClient)({
    packageName: "@azure/storage-blob",
    packageVersion: (0, $daWVB.SDK_VERSION),
    namespace: "Microsoft.Storage"
});


//# sourceMappingURL=tracing.45f278e7.js.map
