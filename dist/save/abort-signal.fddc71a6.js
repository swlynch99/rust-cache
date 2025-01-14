require("./util.26715e80.js");
require("./errors.621f8b7b.js");


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

var $1Z05w = parcelRequire("1Z05w");
var $89dcfdca932c257a$require$addAbortListener = $1Z05w.addAbortListener;

var $4V3Kr = parcelRequire("4V3Kr");
var $89dcfdca932c257a$require$RequestAbortedError = $4V3Kr.RequestAbortedError;
const $89dcfdca932c257a$var$kListener = Symbol('kListener');
const $89dcfdca932c257a$var$kSignal = Symbol('kSignal');
function $89dcfdca932c257a$var$abort(self) {
    if (self.abort) self.abort();
    else self.onError(new $89dcfdca932c257a$require$RequestAbortedError());
}
function $89dcfdca932c257a$var$addSignal(self, signal) {
    self[$89dcfdca932c257a$var$kSignal] = null;
    self[$89dcfdca932c257a$var$kListener] = null;
    if (!signal) return;
    if (signal.aborted) {
        $89dcfdca932c257a$var$abort(self);
        return;
    }
    self[$89dcfdca932c257a$var$kSignal] = signal;
    self[$89dcfdca932c257a$var$kListener] = ()=>{
        $89dcfdca932c257a$var$abort(self);
    };
    $89dcfdca932c257a$require$addAbortListener(self[$89dcfdca932c257a$var$kSignal], self[$89dcfdca932c257a$var$kListener]);
}
function $89dcfdca932c257a$var$removeSignal(self) {
    if (!self[$89dcfdca932c257a$var$kSignal]) return;
    if ('removeEventListener' in self[$89dcfdca932c257a$var$kSignal]) self[$89dcfdca932c257a$var$kSignal].removeEventListener('abort', self[$89dcfdca932c257a$var$kListener]);
    else self[$89dcfdca932c257a$var$kSignal].removeListener('abort', self[$89dcfdca932c257a$var$kListener]);
    self[$89dcfdca932c257a$var$kSignal] = null;
    self[$89dcfdca932c257a$var$kListener] = null;
}
module.exports = {
    addSignal: $89dcfdca932c257a$var$addSignal,
    removeSignal: $89dcfdca932c257a$var$removeSignal
};


//# sourceMappingURL=abort-signal.fddc71a6.js.map
