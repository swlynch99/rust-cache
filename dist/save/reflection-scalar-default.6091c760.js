require("./reflection-info.7dce837c.js");
require("./reflection-long-convert.61cc117e.js");
require("./pb-long.7b98d13d.js");


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

var $jcCg0 = parcelRequire("jcCg0");

var $4ulp8 = parcelRequire("4ulp8");

var $7crDo = parcelRequire("7crDo");
function $c134b7da524c3bf4$export$7e70a6dbbc0779b1(type, longType = (0, $jcCg0.LongType).STRING) {
    switch(type){
        case (0, $jcCg0.ScalarType).BOOL:
            return false;
        case (0, $jcCg0.ScalarType).UINT64:
        case (0, $jcCg0.ScalarType).FIXED64:
            return (0, $4ulp8.reflectionLongConvert)((0, $7crDo.PbULong).ZERO, longType);
        case (0, $jcCg0.ScalarType).INT64:
        case (0, $jcCg0.ScalarType).SFIXED64:
        case (0, $jcCg0.ScalarType).SINT64:
            return (0, $4ulp8.reflectionLongConvert)((0, $7crDo.PbLong).ZERO, longType);
        case (0, $jcCg0.ScalarType).DOUBLE:
        case (0, $jcCg0.ScalarType).FLOAT:
            return 0.0;
        case (0, $jcCg0.ScalarType).BYTES:
            return new Uint8Array(0);
        case (0, $jcCg0.ScalarType).STRING:
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


//# sourceMappingURL=reflection-scalar-default.6091c760.js.map
