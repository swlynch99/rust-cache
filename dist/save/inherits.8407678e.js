require("./inherits_browser.4c4ada4d.js");


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
parcelRegister("cOBaW", function(module, exports) {


try {
    var $9546fdcf218602d3$var$util = $9546fdcf218602d3$import$57f6e86051212e1;
    /* istanbul ignore next */ if (typeof $9546fdcf218602d3$var$util.inherits !== 'function') throw '';
    module.exports = $9546fdcf218602d3$var$util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = (parcelRequire("cVBkZ"));
}

});
parcelRegister("cVBkZ", function(module, exports) {
module.exports = new URL("inherits_browser.4c4ada4d.js", "file:" + __filename).toString();

});



