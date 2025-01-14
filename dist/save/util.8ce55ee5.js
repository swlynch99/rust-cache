require("./dataURL.a565585e.js");
require("./util.1c38d6ed.js");
var $5Tak8$assert = require("assert");


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
'use strict';


var $iRsiv = parcelRequire("iRsiv");
var $012267af599fd5e2$require$URLSerializer = $iRsiv.URLSerializer;

var $8S4OX = parcelRequire("8S4OX");
var $012267af599fd5e2$require$isValidHeaderName = $8S4OX.isValidHeaderName;
/**
 * @see https://url.spec.whatwg.org/#concept-url-equals
 * @param {URL} A
 * @param {URL} B
 * @param {boolean | undefined} excludeFragment
 * @returns {boolean}
 */ function $012267af599fd5e2$var$urlEquals(A, B, excludeFragment = false) {
    const serializedA = $012267af599fd5e2$require$URLSerializer(A, excludeFragment);
    const serializedB = $012267af599fd5e2$require$URLSerializer(B, excludeFragment);
    return serializedA === serializedB;
}
/**
 * @see https://github.com/chromium/chromium/blob/694d20d134cb553d8d89e5500b9148012b1ba299/content/browser/cache_storage/cache_storage_cache.cc#L260-L262
 * @param {string} header
 */ function $012267af599fd5e2$var$fieldValues(header) {
    $5Tak8$assert(header !== null);
    const values = [];
    for (let value of header.split(',')){
        value = value.trim();
        if (!value.length) continue;
        else if (!$012267af599fd5e2$require$isValidHeaderName(value)) continue;
        values.push(value);
    }
    return values;
}
module.exports = {
    urlEquals: $012267af599fd5e2$var$urlEquals,
    fieldValues: $012267af599fd5e2$var$fieldValues
};


//# sourceMappingURL=util.8ce55ee5.js.map
