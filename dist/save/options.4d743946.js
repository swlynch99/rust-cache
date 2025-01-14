require("./error.b227620c.js");


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

var $fiXsH = parcelRequire("fiXsH");
function $cacc5aade7c4679d$var$getCommonOptions(base) {
    const options = base || {};
    if (options.bucket === undefined) {
        const value = process.env["ACTIONS_GCS_CACHE_BUCKET"];
        if (!value) throw new (0, $fiXsH.ConfigUnsetError)("Config Error: no bucket value provided and ACTIONS_GCS_CACHE_BUCKET environment variable is unset");
        options.bucket = value;
    }
    return options;
}
function $cacc5aade7c4679d$export$70894e51559431b6(base) {
    return $cacc5aade7c4679d$var$getCommonOptions(base);
}
function $cacc5aade7c4679d$export$2ab81ce8dd69240c(base) {
    const options = $cacc5aade7c4679d$var$getCommonOptions(base);
    if (options.lookupOnly === undefined) options.lookupOnly = false;
    return options;
}


//# sourceMappingURL=options.4d743946.js.map
