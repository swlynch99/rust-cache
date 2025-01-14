require("./esm.b9de7281.js");


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

var $6W8oz = parcelRequire("6W8oz");
let $19cd15f34b69d762$var$_defaultHttpClient;
function $19cd15f34b69d762$export$d93b5f299dd18102() {
    if (!$19cd15f34b69d762$var$_defaultHttpClient) $19cd15f34b69d762$var$_defaultHttpClient = (0, $6W8oz.createDefaultHttpClient)();
    return $19cd15f34b69d762$var$_defaultHttpClient;
}


//# sourceMappingURL=cache.64828807.js.map
