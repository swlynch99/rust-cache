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

var $3UluS = parcelRequire("3UluS");
const $420ec6ae95156a19$export$8f97aec26024f8fd = "StorageCorrectContentLengthPolicy";
function $420ec6ae95156a19$export$1ac81fa6d3f1a181() {
    function correctContentLength(request) {
        if (request.body && (typeof request.body === "string" || Buffer.isBuffer(request.body)) && request.body.length > 0) request.headers.set((0, $3UluS.HeaderConstants).CONTENT_LENGTH, Buffer.byteLength(request.body));
    }
    return {
        name: $420ec6ae95156a19$export$8f97aec26024f8fd,
        async sendRequest (request, next) {
            correctContentLength(request);
            return next(request);
        }
    };
}


