require("./errors.786067ff.js");


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
parcelRegister("JIbeU", function(module, exports) {
module.exports = new URL("errors.786067ff.js", "file:" + __filename).toString();

});

'use strict';

var $894aad6c31c8bd3a$var$ERR_INVALID_OPT_VALUE = (parcelRequire("JIbeU")).codes.ERR_INVALID_OPT_VALUE;
function $894aad6c31c8bd3a$var$highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function $894aad6c31c8bd3a$var$getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = $894aad6c31c8bd3a$var$highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new $894aad6c31c8bd3a$var$ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: $894aad6c31c8bd3a$var$getHighWaterMark
};


//# sourceMappingURL=state.7b72e0e7.js.map
