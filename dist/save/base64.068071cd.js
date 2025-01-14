
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
parcelRegister("h7HVX", function(module, exports) {
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.decodeStringToString = module.exports.decodeString = module.exports.encodeByteArray = module.exports.encodeString = void 0;
/**
 * Encodes a string in base64 format.
 * @param value - the string to encode
 * @internal
 */ function $c7752b73e4e6c871$var$encodeString(value) {
    return Buffer.from(value).toString("base64");
}
module.exports.encodeString = $c7752b73e4e6c871$var$encodeString;
/**
 * Encodes a byte array in base64 format.
 * @param value - the Uint8Aray to encode
 * @internal
 */ function $c7752b73e4e6c871$var$encodeByteArray(value) {
    const bufferValue = value instanceof Buffer ? value : Buffer.from(value.buffer);
    return bufferValue.toString("base64");
}
module.exports.encodeByteArray = $c7752b73e4e6c871$var$encodeByteArray;
/**
 * Decodes a base64 string into a byte array.
 * @param value - the base64 string to decode
 * @internal
 */ function $c7752b73e4e6c871$var$decodeString(value) {
    return Buffer.from(value, "base64");
}
module.exports.decodeString = $c7752b73e4e6c871$var$decodeString;
/**
 * Decodes a base64 string into a string.
 * @param value - the base64 string to decode
 * @internal
 */ function $c7752b73e4e6c871$var$decodeStringToString(value) {
    return Buffer.from(value, "base64").toString();
}
module.exports.decodeStringToString = $c7752b73e4e6c871$var$decodeStringToString;

});


