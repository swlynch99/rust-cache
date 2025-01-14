require("./symbols.b8a391fa.js");


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

var $dSiuY = parcelRequire("dSiuY");
var $4c4fbb7e3ae09b74$require$kFree = $dSiuY.kFree;
var $4c4fbb7e3ae09b74$require$kConnected = $dSiuY.kConnected;
var $4c4fbb7e3ae09b74$require$kPending = $dSiuY.kPending;
var $4c4fbb7e3ae09b74$require$kQueued = $dSiuY.kQueued;
var $4c4fbb7e3ae09b74$require$kRunning = $dSiuY.kRunning;
var $4c4fbb7e3ae09b74$require$kSize = $dSiuY.kSize;
const $4c4fbb7e3ae09b74$var$kPool = Symbol('pool');
class $4c4fbb7e3ae09b74$var$PoolStats {
    constructor(pool){
        this[$4c4fbb7e3ae09b74$var$kPool] = pool;
    }
    get connected() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kConnected];
    }
    get free() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kFree];
    }
    get pending() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kPending];
    }
    get queued() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kQueued];
    }
    get running() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kRunning];
    }
    get size() {
        return this[$4c4fbb7e3ae09b74$var$kPool][$4c4fbb7e3ae09b74$require$kSize];
    }
}
module.exports = $4c4fbb7e3ae09b74$var$PoolStats;


