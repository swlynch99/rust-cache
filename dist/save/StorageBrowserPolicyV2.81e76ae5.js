require("./esm.f174e5c8.js");
require("./constants.40d31e64.js");
require("./utils.common.e0a90969.js");


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

var $3lAwb = parcelRequire("3lAwb");

var $3UluS = parcelRequire("3UluS");

var $esTXG = parcelRequire("esTXG");
const $2f4ea6cd1ee19ce7$export$30b59775c2c90380 = "storageBrowserPolicy";
function $2f4ea6cd1ee19ce7$export$4e10389526952926() {
    return {
        name: $2f4ea6cd1ee19ce7$export$30b59775c2c90380,
        async sendRequest (request, next) {
            if (0, $3lAwb.isNode) return next(request);
            if (request.method === "GET" || request.method === "HEAD") request.url = (0, $esTXG.setURLParameter)(request.url, (0, $3UluS.URLConstants).Parameters.FORCE_BROWSER_NO_CACHE, new Date().getTime().toString());
            request.headers.delete((0, $3UluS.HeaderConstants).COOKIE);
            // According to XHR standards, content-length should be fully controlled by browsers
            request.headers.delete((0, $3UluS.HeaderConstants).CONTENT_LENGTH);
            return next(request);
        }
    };
}


