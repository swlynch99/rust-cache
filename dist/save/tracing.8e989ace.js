require("./esm.2cb8a1a8.js");
require("./constants.40d31e64.js");


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

var $42JX2 = parcelRequire("42JX2");

var $3UluS = parcelRequire("3UluS");
const $b88355e1088f3d4a$export$fd8e54df9573b5e4 = (0, $42JX2.createTracingClient)({
    packageName: "@azure/storage-blob",
    packageVersion: (0, $3UluS.SDK_VERSION),
    namespace: "Microsoft.Storage"
});


