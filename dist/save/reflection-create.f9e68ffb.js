require("./reflection-scalar-default.d946a505.js");
require("./message-type-contract.b8323fb4.js");


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

var $2AYN5 = parcelRequire("2AYN5");

var $7wVsZ = parcelRequire("7wVsZ");
function $14b8e65aa2492bda$export$190e272bed773d84(type) {
    /**
     * This ternary can be removed in the next major version.
     * The `Object.create()` code path utilizes a new `messagePrototype`
     * property on the `IMessageType` which has this same `MESSAGE_TYPE`
     * non-enumerable property on it. Doing it this way means that we only
     * pay the cost of `Object.defineProperty()` once per `IMessageType`
     * class of once per "instance". The falsy code path is only provided
     * for backwards compatibility in cases where the runtime library is
     * updated without also updating the generated code.
     */ const msg = type.messagePrototype ? Object.create(type.messagePrototype) : Object.defineProperty({}, (0, $7wVsZ.MESSAGE_TYPE), {
        value: type
    });
    for (let field of type.fields){
        let name = field.localName;
        if (field.opt) continue;
        if (field.oneof) msg[field.oneof] = {
            oneofKind: undefined
        };
        else if (field.repeat) msg[name] = [];
        else switch(field.kind){
            case "scalar":
                msg[name] = (0, $2AYN5.reflectionScalarDefault)(field.T, field.L);
                break;
            case "enum":
                // we require 0 to be default value for all enums
                msg[name] = 0;
                break;
            case "map":
                msg[name] = {};
                break;
        }
    }
    return msg;
}


