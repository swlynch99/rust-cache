require("./util.c7a5ec55.js");
require("./errors.12b0f892.js");


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

var $iiSZx = parcelRequire("iiSZx");
var $6a93b66db5a32d8c$require$addAbortListener = $iiSZx.addAbortListener;

var $hA22O = parcelRequire("hA22O");
var $6a93b66db5a32d8c$require$RequestAbortedError = $hA22O.RequestAbortedError;
const $6a93b66db5a32d8c$var$kListener = Symbol('kListener');
const $6a93b66db5a32d8c$var$kSignal = Symbol('kSignal');
function $6a93b66db5a32d8c$var$abort(self) {
    if (self.abort) self.abort();
    else self.onError(new $6a93b66db5a32d8c$require$RequestAbortedError());
}
function $6a93b66db5a32d8c$var$addSignal(self, signal) {
    self[$6a93b66db5a32d8c$var$kSignal] = null;
    self[$6a93b66db5a32d8c$var$kListener] = null;
    if (!signal) return;
    if (signal.aborted) {
        $6a93b66db5a32d8c$var$abort(self);
        return;
    }
    self[$6a93b66db5a32d8c$var$kSignal] = signal;
    self[$6a93b66db5a32d8c$var$kListener] = ()=>{
        $6a93b66db5a32d8c$var$abort(self);
    };
    $6a93b66db5a32d8c$require$addAbortListener(self[$6a93b66db5a32d8c$var$kSignal], self[$6a93b66db5a32d8c$var$kListener]);
}
function $6a93b66db5a32d8c$var$removeSignal(self) {
    if (!self[$6a93b66db5a32d8c$var$kSignal]) return;
    if ('removeEventListener' in self[$6a93b66db5a32d8c$var$kSignal]) self[$6a93b66db5a32d8c$var$kSignal].removeEventListener('abort', self[$6a93b66db5a32d8c$var$kListener]);
    else self[$6a93b66db5a32d8c$var$kSignal].removeListener('abort', self[$6a93b66db5a32d8c$var$kListener]);
    self[$6a93b66db5a32d8c$var$kSignal] = null;
    self[$6a93b66db5a32d8c$var$kListener] = null;
}
module.exports = {
    addSignal: $6a93b66db5a32d8c$var$addSignal,
    removeSignal: $6a93b66db5a32d8c$var$removeSignal
};


