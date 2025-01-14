require("./errors.621f8b7b.js");
require("./agent.886e033b.js");


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
const $86b23a44efcbe1c6$var$globalDispatcher = Symbol.for('undici.globalDispatcher.1');

var $4V3Kr = parcelRequire("4V3Kr");
var $86b23a44efcbe1c6$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;

var $hEZxa = parcelRequire("hEZxa");
if ($86b23a44efcbe1c6$var$getGlobalDispatcher() === undefined) $86b23a44efcbe1c6$var$setGlobalDispatcher(new $hEZxa());
function $86b23a44efcbe1c6$var$setGlobalDispatcher(agent) {
    if (!agent || typeof agent.dispatch !== 'function') throw new $86b23a44efcbe1c6$require$InvalidArgumentError('Argument agent must implement Agent');
    Object.defineProperty(globalThis, $86b23a44efcbe1c6$var$globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
function $86b23a44efcbe1c6$var$getGlobalDispatcher() {
    return globalThis[$86b23a44efcbe1c6$var$globalDispatcher];
}
module.exports = {
    setGlobalDispatcher: $86b23a44efcbe1c6$var$setGlobalDispatcher,
    getGlobalDispatcher: $86b23a44efcbe1c6$var$getGlobalDispatcher
};


//# sourceMappingURL=global.206e7c2a.js.map
