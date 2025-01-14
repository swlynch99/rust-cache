require("./endpoint-with-defaults.e259831e.js");
require("./merge.1a4c572a.js");
require("./parse.6554f13d.js");


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
var $8c0b2b065bc213f5$exports = {};
$8c0b2b065bc213f5$exports = new URL("endpoint-with-defaults.e259831e.js", "file:" + __filename).toString();



var $4tNCv = parcelRequire("4tNCv");

var $53PYg = parcelRequire("53PYg");
function $00d2cb3e3383dd59$export$4df9c0969a9e0160(oldDefaults, newDefaults) {
    const DEFAULTS = (0, $4tNCv.merge)(oldDefaults, newDefaults);
    const endpoint = (0, $8c0b2b065bc213f5$exports.endpointWithDefaults).bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS: DEFAULTS,
        defaults: $00d2cb3e3383dd59$export$4df9c0969a9e0160.bind(null, DEFAULTS),
        merge: (0, $4tNCv.merge).bind(null, DEFAULTS),
        parse: $53PYg.parse
    });
}


