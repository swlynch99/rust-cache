require("./error.2f577e2a.js");


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

var $hSd9V = parcelRequire("hSd9V");
function $b033562dd6d2c69c$var$getCommonOptions(base) {
    const options = base || {};
    if (options.bucket === undefined) {
        const value = process.env["ACTIONS_GCS_CACHE_BUCKET"];
        if (!value) throw new (0, $hSd9V.ConfigUnsetError)("Config Error: no bucket value provided and ACTIONS_GCS_CACHE_BUCKET environment variable is unset");
        options.bucket = value;
    }
    return options;
}
function $b033562dd6d2c69c$export$70894e51559431b6(base) {
    return $b033562dd6d2c69c$var$getCommonOptions(base);
}
function $b033562dd6d2c69c$export$2ab81ce8dd69240c(base) {
    const options = $b033562dd6d2c69c$var$getCommonOptions(base);
    if (options.lookupOnly === undefined) options.lookupOnly = false;
    return options;
}


