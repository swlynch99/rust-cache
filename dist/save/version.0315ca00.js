require("./validate.681ab9f3.js");


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

var $im3Db = parcelRequire("im3Db");
function $d303aa7d51f98931$var$version(uuid) {
    if (!(0, $im3Db.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.substr(14, 1), 16);
}
var $d303aa7d51f98931$export$2e2bcd8739ae039 = $d303aa7d51f98931$var$version;


//# sourceMappingURL=version.0315ca00.js.map
