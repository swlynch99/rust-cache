
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
parcelRegister("3PI93", function(module, exports) {
'use strict';
const $2ca860d35fc6e7bb$var$isStream = (stream)=>stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
$2ca860d35fc6e7bb$var$isStream.writable = (stream)=>$2ca860d35fc6e7bb$var$isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
$2ca860d35fc6e7bb$var$isStream.readable = (stream)=>$2ca860d35fc6e7bb$var$isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
$2ca860d35fc6e7bb$var$isStream.duplex = (stream)=>$2ca860d35fc6e7bb$var$isStream.writable(stream) && $2ca860d35fc6e7bb$var$isStream.readable(stream);
$2ca860d35fc6e7bb$var$isStream.transform = (stream)=>$2ca860d35fc6e7bb$var$isStream.duplex(stream) && typeof stream._transform === 'function';
module.exports = $2ca860d35fc6e7bb$var$isStream;

});


//# sourceMappingURL=is-stream.ff23634f.js.map
