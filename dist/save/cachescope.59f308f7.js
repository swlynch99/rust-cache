require("./message-type-contract.b8323fb4.js");
require("./message-type.99ebd4d8.js");
require("./reflection-merge-partial.03c0dfe6.js");
require("./binary-format-contract.3251825d.js");


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

var $7wVsZ = parcelRequire("7wVsZ");
var $8iddM = parcelRequire("8iddM");
var $45uoo = parcelRequire("45uoo");
var $6pQ37 = parcelRequire("6pQ37");

var $7wVsZ = parcelRequire("7wVsZ");
var $8iddM = parcelRequire("8iddM");
var $45uoo = parcelRequire("45uoo");
var $6pQ37 = parcelRequire("6pQ37");

var $7wVsZ = parcelRequire("7wVsZ");
var $8iddM = parcelRequire("8iddM");
var $45uoo = parcelRequire("45uoo");
var $6pQ37 = parcelRequire("6pQ37");

var $7wVsZ = parcelRequire("7wVsZ");
var $8iddM = parcelRequire("8iddM");
var $45uoo = parcelRequire("45uoo");
var $6pQ37 = parcelRequire("6pQ37");

var $7wVsZ = parcelRequire("7wVsZ");
var $8iddM = parcelRequire("8iddM");
var $45uoo = parcelRequire("45uoo");
var $6pQ37 = parcelRequire("6pQ37");
// @generated message type with reflection information, may provide speed optimized methods
class $ed243bf9d8a68f92$var$CacheScope$Type extends $8iddM.MessageType {
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
        globalThis.Object.defineProperty(message, $7wVsZ.MESSAGE_TYPE, {
            enumerable: false,
            value: this
        });
        if (value !== undefined) (0, $45uoo.reflectionMergePartial)(this, message, value);
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
                    if (u !== false) (u === true ? $6pQ37.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string scope = 1; */ if (message.scope !== "") writer.tag(1, $6pQ37.WireType.LengthDelimited).string(message.scope);
        /* int64 permission = 2; */ if (message.permission !== "0") writer.tag(2, $6pQ37.WireType.Varint).int64(message.permission);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $6pQ37.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheScope
 */ module.exports.CacheScope = new $ed243bf9d8a68f92$var$CacheScope$Type();


