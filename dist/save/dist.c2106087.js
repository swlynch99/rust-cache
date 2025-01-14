
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
parcelRegister("jQOIn", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
function $e73a3690ffecf049$var$once(emitter, name, { signal: signal } = {}) {
    return new Promise((resolve, reject)=>{
        function cleanup() {
            signal === null || signal === void 0 || signal.removeEventListener('abort', cleanup);
            emitter.removeListener(name, onEvent);
            emitter.removeListener('error', onError);
        }
        function onEvent(...args) {
            cleanup();
            resolve(args);
        }
        function onError(err) {
            cleanup();
            reject(err);
        }
        signal === null || signal === void 0 || signal.addEventListener('abort', cleanup);
        emitter.on(name, onEvent);
        emitter.on('error', onError);
    });
}
module.exports.default = $e73a3690ffecf049$var$once;

});


//# sourceMappingURL=dist.c2106087.js.map
