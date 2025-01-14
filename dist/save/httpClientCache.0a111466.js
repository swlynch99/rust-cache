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
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCachedDefaultHttpClient = void 0;

var $huk7e = parcelRequire("huk7e");
let $0f9c75261ab3b7aa$var$cachedHttpClient;
function $0f9c75261ab3b7aa$var$getCachedDefaultHttpClient() {
    if (!$0f9c75261ab3b7aa$var$cachedHttpClient) $0f9c75261ab3b7aa$var$cachedHttpClient = (0, $huk7e.createDefaultHttpClient)();
    return $0f9c75261ab3b7aa$var$cachedHttpClient;
}
module.exports.getCachedDefaultHttpClient = $0f9c75261ab3b7aa$var$getCachedDefaultHttpClient;


