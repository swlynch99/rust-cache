require("./reflection-info.dc91bb50.js");


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
function $fe7ec541af8c6f0c$export$3c5f0d0c49971ab2(info, a, b) {
    if (a === b) return true;
    if (!a || !b) return false;
    for (let field of info.fields){
        let localName = field.localName;
        let val_a = field.oneof ? a[field.oneof][localName] : a[localName];
        let val_b = field.oneof ? b[field.oneof][localName] : b[localName];
        switch(field.kind){
            case "enum":
            case "scalar":
                let t = field.kind == "enum" ? (0, $7KezH.ScalarType).INT32 : field.T;
                if (!(field.repeat ? $fe7ec541af8c6f0c$var$repeatedPrimitiveEq(t, val_a, val_b) : $fe7ec541af8c6f0c$var$primitiveEq(t, val_a, val_b))) return false;
                break;
            case "map":
                if (!(field.V.kind == "message" ? $fe7ec541af8c6f0c$var$repeatedMsgEq(field.V.T(), $fe7ec541af8c6f0c$var$objectValues(val_a), $fe7ec541af8c6f0c$var$objectValues(val_b)) : $fe7ec541af8c6f0c$var$repeatedPrimitiveEq(field.V.kind == "enum" ? (0, $7KezH.ScalarType).INT32 : field.V.T, $fe7ec541af8c6f0c$var$objectValues(val_a), $fe7ec541af8c6f0c$var$objectValues(val_b)))) return false;
                break;
            case "message":
                let T = field.T();
                if (!(field.repeat ? $fe7ec541af8c6f0c$var$repeatedMsgEq(T, val_a, val_b) : T.equals(val_a, val_b))) return false;
                break;
        }
    }
    return true;
}
const $fe7ec541af8c6f0c$var$objectValues = Object.values;
function $fe7ec541af8c6f0c$var$primitiveEq(type, a, b) {
    if (a === b) return true;
    if (type !== (0, $7KezH.ScalarType).BYTES) return false;
    let ba = a;
    let bb = b;
    if (ba.length !== bb.length) return false;
    for(let i = 0; i < ba.length; i++)if (ba[i] != bb[i]) return false;
    return true;
}
function $fe7ec541af8c6f0c$var$repeatedPrimitiveEq(type, a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++)if (!$fe7ec541af8c6f0c$var$primitiveEq(type, a[i], b[i])) return false;
    return true;
}
function $fe7ec541af8c6f0c$var$repeatedMsgEq(type, a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++)if (!type.equals(a[i], b[i])) return false;
    return true;
}


