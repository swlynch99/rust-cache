require("./errors.12b0f892.js");
require("./agent.7a15b627.js");


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
// We include a version number for the Dispatcher API. In case of breaking changes,
// this version number must be increased to avoid conflicts.
const $7f2d71b339cd21f2$var$globalDispatcher = Symbol.for('undici.globalDispatcher.1');

var $hA22O = parcelRequire("hA22O");
var $7f2d71b339cd21f2$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $gzNqH = parcelRequire("gzNqH");
if ($7f2d71b339cd21f2$var$getGlobalDispatcher() === undefined) $7f2d71b339cd21f2$var$setGlobalDispatcher(new $gzNqH());
function $7f2d71b339cd21f2$var$setGlobalDispatcher(agent) {
    if (!agent || typeof agent.dispatch !== 'function') throw new $7f2d71b339cd21f2$require$InvalidArgumentError('Argument agent must implement Agent');
    Object.defineProperty(globalThis, $7f2d71b339cd21f2$var$globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
function $7f2d71b339cd21f2$var$getGlobalDispatcher() {
    return globalThis[$7f2d71b339cd21f2$var$globalDispatcher];
}
module.exports = {
    setGlobalDispatcher: $7f2d71b339cd21f2$var$setGlobalDispatcher,
    getGlobalDispatcher: $7f2d71b339cd21f2$var$getGlobalDispatcher
};


