require("./symbols.c5dd8fde.js");


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

var $bMqEt = parcelRequire("bMqEt");
var $7b33be8ec2f4d86c$require$kFree = $bMqEt.kFree;
var $7b33be8ec2f4d86c$require$kConnected = $bMqEt.kConnected;
var $7b33be8ec2f4d86c$require$kPending = $bMqEt.kPending;
var $7b33be8ec2f4d86c$require$kQueued = $bMqEt.kQueued;
var $7b33be8ec2f4d86c$require$kRunning = $bMqEt.kRunning;
var $7b33be8ec2f4d86c$require$kSize = $bMqEt.kSize;
const $7b33be8ec2f4d86c$var$kPool = Symbol('pool');
class $7b33be8ec2f4d86c$var$PoolStats {
    constructor(pool){
        this[$7b33be8ec2f4d86c$var$kPool] = pool;
    }
    get connected() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kConnected];
    }
    get free() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kFree];
    }
    get pending() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kPending];
    }
    get queued() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kQueued];
    }
    get running() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kRunning];
    }
    get size() {
        return this[$7b33be8ec2f4d86c$var$kPool][$7b33be8ec2f4d86c$require$kSize];
    }
}
module.exports = $7b33be8ec2f4d86c$var$PoolStats;


//# sourceMappingURL=pool-stats.c342ad36.js.map
