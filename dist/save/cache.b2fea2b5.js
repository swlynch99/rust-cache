require("./esm.346084e9.js");


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

var $huk7e = parcelRequire("huk7e");
let $8ef8229de867a348$var$_defaultHttpClient;
function $8ef8229de867a348$export$d93b5f299dd18102() {
    if (!$8ef8229de867a348$var$_defaultHttpClient) $8ef8229de867a348$var$_defaultHttpClient = (0, $huk7e.createDefaultHttpClient)();
    return $8ef8229de867a348$var$_defaultHttpClient;
}


