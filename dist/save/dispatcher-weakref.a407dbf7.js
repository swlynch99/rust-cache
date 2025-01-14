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
parcelRegister("htjgV", function(module, exports) {
'use strict';

var $bMqEt = parcelRequire("bMqEt");
var $cb84181a917077af$require$kConnected = $bMqEt.kConnected;
var $cb84181a917077af$require$kSize = $bMqEt.kSize;
class $cb84181a917077af$var$CompatWeakRef {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value[$cb84181a917077af$require$kConnected] === 0 && this.value[$cb84181a917077af$require$kSize] === 0 ? undefined : this.value;
    }
}
class $cb84181a917077af$var$CompatFinalizer {
    constructor(finalizer){
        this.finalizer = finalizer;
    }
    register(dispatcher, key) {
        if (dispatcher.on) dispatcher.on('disconnect', ()=>{
            if (dispatcher[$cb84181a917077af$require$kConnected] === 0 && dispatcher[$cb84181a917077af$require$kSize] === 0) this.finalizer(key);
        });
    }
}
module.exports = function() {
    // FIXME: remove workaround when the Node bug is fixed
    // https://github.com/nodejs/node/issues/49344#issuecomment-1741776308
    if (process.env.NODE_V8_COVERAGE) return {
        WeakRef: $cb84181a917077af$var$CompatWeakRef,
        FinalizationRegistry: $cb84181a917077af$var$CompatFinalizer
    };
    return {
        WeakRef: $parcel$global.WeakRef || $cb84181a917077af$var$CompatWeakRef,
        FinalizationRegistry: $parcel$global.FinalizationRegistry || $cb84181a917077af$var$CompatFinalizer
    };
};

});


//# sourceMappingURL=dispatcher-weakref.a407dbf7.js.map
