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
parcelRegister("4Bu0J", function(module, exports) {
'use strict';

var $dSiuY = parcelRequire("dSiuY");
var $35a1e5a5d970d826$require$kConnected = $dSiuY.kConnected;
var $35a1e5a5d970d826$require$kSize = $dSiuY.kSize;
class $35a1e5a5d970d826$var$CompatWeakRef {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value[$35a1e5a5d970d826$require$kConnected] === 0 && this.value[$35a1e5a5d970d826$require$kSize] === 0 ? undefined : this.value;
    }
}
class $35a1e5a5d970d826$var$CompatFinalizer {
    constructor(finalizer){
        this.finalizer = finalizer;
    }
    register(dispatcher, key) {
        if (dispatcher.on) dispatcher.on('disconnect', ()=>{
            if (dispatcher[$35a1e5a5d970d826$require$kConnected] === 0 && dispatcher[$35a1e5a5d970d826$require$kSize] === 0) this.finalizer(key);
        });
    }
}
module.exports = function() {
    // FIXME: remove workaround when the Node bug is fixed
    // https://github.com/nodejs/node/issues/49344#issuecomment-1741776308
    if (process.env.NODE_V8_COVERAGE) return {
        WeakRef: $35a1e5a5d970d826$var$CompatWeakRef,
        FinalizationRegistry: $35a1e5a5d970d826$var$CompatFinalizer
    };
    return {
        WeakRef: $parcel$global.WeakRef || $35a1e5a5d970d826$var$CompatWeakRef,
        FinalizationRegistry: $parcel$global.FinalizationRegistry || $35a1e5a5d970d826$var$CompatFinalizer
    };
};

});


