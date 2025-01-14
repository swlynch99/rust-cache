require("./endpoint-with-defaults.ffc86a93.js");
require("./merge.fe48917f.js");
require("./parse.ffe32904.js");


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
var $a008586ed326e482$exports = {};
$a008586ed326e482$exports = new URL("endpoint-with-defaults.ffc86a93.js", "file:" + __filename).toString();



var $PJcLr = parcelRequire("PJcLr");

var $2s0F0 = parcelRequire("2s0F0");
function $ecb07404e095d9ec$export$4df9c0969a9e0160(oldDefaults, newDefaults) {
    const DEFAULTS = (0, $PJcLr.merge)(oldDefaults, newDefaults);
    const endpoint = (0, $a008586ed326e482$exports.endpointWithDefaults).bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS: DEFAULTS,
        defaults: $ecb07404e095d9ec$export$4df9c0969a9e0160.bind(null, DEFAULTS),
        merge: (0, $PJcLr.merge).bind(null, DEFAULTS),
        parse: $2s0F0.parse
    });
}


//# sourceMappingURL=with-defaults.4295d622.js.map
