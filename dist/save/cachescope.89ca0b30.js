require("./message-type-contract.b0c9bb09.js");
require("./message-type.73b358e2.js");
require("./reflection-merge-partial.0b55bbb5.js");
require("./binary-format-contract.cd42ad69.js");


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
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CacheScope = void 0;

var $jz89V = parcelRequire("jz89V");
var $977Xk = parcelRequire("977Xk");
var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $jz89V = parcelRequire("jz89V");
var $977Xk = parcelRequire("977Xk");
var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $jz89V = parcelRequire("jz89V");
var $977Xk = parcelRequire("977Xk");
var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $jz89V = parcelRequire("jz89V");
var $977Xk = parcelRequire("977Xk");
var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $jz89V = parcelRequire("jz89V");
var $977Xk = parcelRequire("977Xk");
var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");
// @generated message type with reflection information, may provide speed optimized methods
class $02b5a4942eb2efc7$var$CacheScope$Type extends $977Xk.MessageType {
    constructor(){
        super("github.actions.results.entities.v1.CacheScope", [
            {
                no: 1,
                name: "scope",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 2,
                name: "permission",
                kind: "scalar",
                T: 3 /*ScalarType.INT64*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            scope: "",
            permission: "0"
        };
        globalThis.Object.defineProperty(message, $jz89V.MESSAGE_TYPE, {
            enumerable: false,
            value: this
        });
        if (value !== undefined) (0, $aiQ7z.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while(reader.pos < end){
            let [fieldNo, wireType] = reader.tag();
            switch(fieldNo){
                case /* string scope */ 1:
                    message.scope = reader.string();
                    break;
                case /* int64 permission */ 2:
                    message.permission = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw") throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false) (u === true ? $8eg75.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string scope = 1; */ if (message.scope !== "") writer.tag(1, $8eg75.WireType.LengthDelimited).string(message.scope);
        /* int64 permission = 2; */ if (message.permission !== "0") writer.tag(2, $8eg75.WireType.Varint).int64(message.permission);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheScope
 */ module.exports.CacheScope = new $02b5a4942eb2efc7$var$CacheScope$Type();


//# sourceMappingURL=cachescope.89ca0b30.js.map
