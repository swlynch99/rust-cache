
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
parcelRegister("39VSP", function(module, exports) {
'use strict';
// In case of breaking changes, increase the version
// number to avoid conflicts.
const $24cf1cccc9c1a296$var$globalOrigin = Symbol.for('undici.globalOrigin.1');
function $24cf1cccc9c1a296$var$getGlobalOrigin() {
    return globalThis[$24cf1cccc9c1a296$var$globalOrigin];
}
function $24cf1cccc9c1a296$var$setGlobalOrigin(newOrigin) {
    if (newOrigin === undefined) {
        Object.defineProperty(globalThis, $24cf1cccc9c1a296$var$globalOrigin, {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        });
        return;
    }
    const parsedURL = new URL(newOrigin);
    if (parsedURL.protocol !== 'http:' && parsedURL.protocol !== 'https:') throw new TypeError(`Only http & https urls are allowed, received ${parsedURL.protocol}`);
    Object.defineProperty(globalThis, $24cf1cccc9c1a296$var$globalOrigin, {
        value: parsedURL,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
module.exports = {
    getGlobalOrigin: $24cf1cccc9c1a296$var$getGlobalOrigin,
    setGlobalOrigin: $24cf1cccc9c1a296$var$setGlobalOrigin
};

});


