require("./message-type-contract.b8323fb4.js");
require("./message-type.99ebd4d8.js");
require("./reflection-merge-partial.03c0dfe6.js");
require("./binary-format-contract.3251825d.js");
require("./timestamp.dee53060.js");


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
module.exports.CacheEntry = void 0;

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
var $be33caaa6988d464$exports = {};
$be33caaa6988d464$exports = new URL("timestamp.dee53060.js", "file:" + __filename).toString();


// @generated message type with reflection information, may provide speed optimized methods
class $db1a2c3bdff8c47e$var$CacheEntry$Type extends $8iddM.MessageType {
    constructor(){
        super("github.actions.results.entities.v1.CacheEntry", [
            {
                no: 1,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 2,
                name: "hash",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "size_bytes",
                kind: "scalar",
                T: 3 /*ScalarType.INT64*/ 
            },
            {
                no: 4,
                name: "scope",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 5,
                name: "version",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 6,
                name: "created_at",
                kind: "message",
                T: ()=>$be33caaa6988d464$exports.Timestamp
            },
            {
                no: 7,
                name: "last_accessed_at",
                kind: "message",
                T: ()=>$be33caaa6988d464$exports.Timestamp
            },
            {
                no: 8,
                name: "expires_at",
                kind: "message",
                T: ()=>$be33caaa6988d464$exports.Timestamp
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            hash: "",
            sizeBytes: "0",
            scope: "",
            version: ""
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
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string hash */ 2:
                    message.hash = reader.string();
                    break;
                case /* int64 size_bytes */ 3:
                    message.sizeBytes = reader.int64().toString();
                    break;
                case /* string scope */ 4:
                    message.scope = reader.string();
                    break;
                case /* string version */ 5:
                    message.version = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 6:
                    message.createdAt = $be33caaa6988d464$exports.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp last_accessed_at */ 7:
                    message.lastAccessedAt = $be33caaa6988d464$exports.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastAccessedAt);
                    break;
                case /* google.protobuf.Timestamp expires_at */ 8:
                    message.expiresAt = $be33caaa6988d464$exports.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiresAt);
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
        /* string key = 1; */ if (message.key !== "") writer.tag(1, $6pQ37.WireType.LengthDelimited).string(message.key);
        /* string hash = 2; */ if (message.hash !== "") writer.tag(2, $6pQ37.WireType.LengthDelimited).string(message.hash);
        /* int64 size_bytes = 3; */ if (message.sizeBytes !== "0") writer.tag(3, $6pQ37.WireType.Varint).int64(message.sizeBytes);
        /* string scope = 4; */ if (message.scope !== "") writer.tag(4, $6pQ37.WireType.LengthDelimited).string(message.scope);
        /* string version = 5; */ if (message.version !== "") writer.tag(5, $6pQ37.WireType.LengthDelimited).string(message.version);
        /* google.protobuf.Timestamp created_at = 6; */ if (message.createdAt) $be33caaa6988d464$exports.Timestamp.internalBinaryWrite(message.createdAt, writer.tag(6, $6pQ37.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp last_accessed_at = 7; */ if (message.lastAccessedAt) $be33caaa6988d464$exports.Timestamp.internalBinaryWrite(message.lastAccessedAt, writer.tag(7, $6pQ37.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp expires_at = 8; */ if (message.expiresAt) $be33caaa6988d464$exports.Timestamp.internalBinaryWrite(message.expiresAt, writer.tag(8, $6pQ37.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $6pQ37.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheEntry
 */ module.exports.CacheEntry = new $db1a2c3bdff8c47e$var$CacheEntry$Type();


