require("./reflection-info.dc91bb50.js");
require("./reflection-long-convert.5b93f1d0.js");
require("./pb-long.eb7021d9.js");


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

var $7KezH = parcelRequire("7KezH");

var $cbG8F = parcelRequire("cbG8F");

var $eCO4F = parcelRequire("eCO4F");
function $1e3e195972a63de0$export$7e70a6dbbc0779b1(type, longType = (0, $7KezH.LongType).STRING) {
    switch(type){
        case (0, $7KezH.ScalarType).BOOL:
            return false;
        case (0, $7KezH.ScalarType).UINT64:
        case (0, $7KezH.ScalarType).FIXED64:
            return (0, $cbG8F.reflectionLongConvert)((0, $eCO4F.PbULong).ZERO, longType);
        case (0, $7KezH.ScalarType).INT64:
        case (0, $7KezH.ScalarType).SFIXED64:
        case (0, $7KezH.ScalarType).SINT64:
            return (0, $cbG8F.reflectionLongConvert)((0, $eCO4F.PbLong).ZERO, longType);
        case (0, $7KezH.ScalarType).DOUBLE:
        case (0, $7KezH.ScalarType).FLOAT:
            return 0.0;
        case (0, $7KezH.ScalarType).BYTES:
            return new Uint8Array(0);
        case (0, $7KezH.ScalarType).STRING:
            return "";
        default:
            // case ScalarType.INT32:
            // case ScalarType.UINT32:
            // case ScalarType.SINT32:
            // case ScalarType.FIXED32:
            // case ScalarType.SFIXED32:
            return 0;
    }
}


