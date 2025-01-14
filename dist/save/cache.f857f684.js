require("./service-type.cc2d19e8.js");
require("./message-type-contract.b0c9bb09.js");
require("./message-type.73b358e2.js");
require("./reflection-merge-partial.0b55bbb5.js");
require("./binary-format-contract.cd42ad69.js");
require("./cacheentry.3aaff547.js");
require("./cachemetadata.b8218dd4.js");


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
module.exports.CacheService = module.exports.LookupCacheEntryResponse = module.exports.LookupCacheEntryRequest = module.exports.ListCacheEntriesResponse = module.exports.ListCacheEntriesRequest = module.exports.DeleteCacheEntryResponse = module.exports.DeleteCacheEntryRequest = module.exports.GetCacheEntryDownloadURLResponse = module.exports.GetCacheEntryDownloadURLRequest = module.exports.FinalizeCacheEntryUploadResponse = module.exports.FinalizeCacheEntryUploadRequest = module.exports.CreateCacheEntryResponse = module.exports.CreateCacheEntryRequest = void 0;
var $1f7302a7c222d175$exports = {};
$1f7302a7c222d175$exports = new URL("service-type.cc2d19e8.js", "file:" + __filename).toString();


var $bfa49afdbad1a225$exports = {};
$bfa49afdbad1a225$exports = new URL("message-type-contract.b0c9bb09.js", "file:" + __filename).toString();

var $a9be2ede474bd326$exports = {};
$a9be2ede474bd326$exports = new URL("message-type.73b358e2.js", "file:" + __filename).toString();


var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");

var $aiQ7z = parcelRequire("aiQ7z");
var $8eg75 = parcelRequire("8eg75");
var $0e005ae8c59919d4$exports = {};
$0e005ae8c59919d4$exports = new URL("cacheentry.3aaff547.js", "file:" + __filename).toString();


var $9daae2e0c8b64890$exports = {};
$9daae2e0c8b64890$exports = new URL("cachemetadata.b8218dd4.js", "file:" + __filename).toString();


// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$CreateCacheEntryRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.CreateCacheEntryRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "version",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            version: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* string version */ 3:
                    message.version = reader.string();
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        /* string version = 3; */ if (message.version !== "") writer.tag(3, $8eg75.WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.CreateCacheEntryRequest
 */ module.exports.CreateCacheEntryRequest = new $9b0bd7efdcdb382b$var$CreateCacheEntryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$CreateCacheEntryResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.CreateCacheEntryResponse", [
            {
                no: 1,
                name: "ok",
                kind: "scalar",
                T: 8 /*ScalarType.BOOL*/ 
            },
            {
                no: 2,
                name: "signed_upload_url",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            ok: false,
            signedUploadUrl: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* string signed_upload_url */ 2:
                    message.signedUploadUrl = reader.string();
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
        /* bool ok = 1; */ if (message.ok !== false) writer.tag(1, $8eg75.WireType.Varint).bool(message.ok);
        /* string signed_upload_url = 2; */ if (message.signedUploadUrl !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.signedUploadUrl);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.CreateCacheEntryResponse
 */ module.exports.CreateCacheEntryResponse = new $9b0bd7efdcdb382b$var$CreateCacheEntryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$FinalizeCacheEntryUploadRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.FinalizeCacheEntryUploadRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
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
                name: "version",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            sizeBytes: "0",
            version: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* int64 size_bytes */ 3:
                    message.sizeBytes = reader.int64().toString();
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        /* int64 size_bytes = 3; */ if (message.sizeBytes !== "0") writer.tag(3, $8eg75.WireType.Varint).int64(message.sizeBytes);
        /* string version = 4; */ if (message.version !== "") writer.tag(4, $8eg75.WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadRequest
 */ module.exports.FinalizeCacheEntryUploadRequest = new $9b0bd7efdcdb382b$var$FinalizeCacheEntryUploadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$FinalizeCacheEntryUploadResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.FinalizeCacheEntryUploadResponse", [
            {
                no: 1,
                name: "ok",
                kind: "scalar",
                T: 8 /*ScalarType.BOOL*/ 
            },
            {
                no: 2,
                name: "entry_id",
                kind: "scalar",
                T: 3 /*ScalarType.INT64*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            ok: false,
            entryId: "0"
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* int64 entry_id */ 2:
                    message.entryId = reader.int64().toString();
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
        /* bool ok = 1; */ if (message.ok !== false) writer.tag(1, $8eg75.WireType.Varint).bool(message.ok);
        /* int64 entry_id = 2; */ if (message.entryId !== "0") writer.tag(2, $8eg75.WireType.Varint).int64(message.entryId);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.FinalizeCacheEntryUploadResponse
 */ module.exports.FinalizeCacheEntryUploadResponse = new $9b0bd7efdcdb382b$var$FinalizeCacheEntryUploadResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$GetCacheEntryDownloadURLRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.GetCacheEntryDownloadURLRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "restore_keys",
                kind: "scalar",
                repeat: 2 /*RepeatType.UNPACKED*/ ,
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 4,
                name: "version",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            restoreKeys: [],
            version: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* repeated string restore_keys */ 3:
                    message.restoreKeys.push(reader.string());
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        /* repeated string restore_keys = 3; */ for(let i = 0; i < message.restoreKeys.length; i++)writer.tag(3, $8eg75.WireType.LengthDelimited).string(message.restoreKeys[i]);
        /* string version = 4; */ if (message.version !== "") writer.tag(4, $8eg75.WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLRequest
 */ module.exports.GetCacheEntryDownloadURLRequest = new $9b0bd7efdcdb382b$var$GetCacheEntryDownloadURLRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$GetCacheEntryDownloadURLResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.GetCacheEntryDownloadURLResponse", [
            {
                no: 1,
                name: "ok",
                kind: "scalar",
                T: 8 /*ScalarType.BOOL*/ 
            },
            {
                no: 2,
                name: "signed_download_url",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "matched_key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            ok: false,
            signedDownloadUrl: "",
            matchedKey: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* string signed_download_url */ 2:
                    message.signedDownloadUrl = reader.string();
                    break;
                case /* string matched_key */ 3:
                    message.matchedKey = reader.string();
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
        /* bool ok = 1; */ if (message.ok !== false) writer.tag(1, $8eg75.WireType.Varint).bool(message.ok);
        /* string signed_download_url = 2; */ if (message.signedDownloadUrl !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.signedDownloadUrl);
        /* string matched_key = 3; */ if (message.matchedKey !== "") writer.tag(3, $8eg75.WireType.LengthDelimited).string(message.matchedKey);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.GetCacheEntryDownloadURLResponse
 */ module.exports.GetCacheEntryDownloadURLResponse = new $9b0bd7efdcdb382b$var$GetCacheEntryDownloadURLResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$DeleteCacheEntryRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.DeleteCacheEntryRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.DeleteCacheEntryRequest
 */ module.exports.DeleteCacheEntryRequest = new $9b0bd7efdcdb382b$var$DeleteCacheEntryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$DeleteCacheEntryResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.DeleteCacheEntryResponse", [
            {
                no: 1,
                name: "ok",
                kind: "scalar",
                T: 8 /*ScalarType.BOOL*/ 
            },
            {
                no: 2,
                name: "entry_id",
                kind: "scalar",
                T: 3 /*ScalarType.INT64*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            ok: false,
            entryId: "0"
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* bool ok */ 1:
                    message.ok = reader.bool();
                    break;
                case /* int64 entry_id */ 2:
                    message.entryId = reader.int64().toString();
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
        /* bool ok = 1; */ if (message.ok !== false) writer.tag(1, $8eg75.WireType.Varint).bool(message.ok);
        /* int64 entry_id = 2; */ if (message.entryId !== "0") writer.tag(2, $8eg75.WireType.Varint).int64(message.entryId);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.DeleteCacheEntryResponse
 */ module.exports.DeleteCacheEntryResponse = new $9b0bd7efdcdb382b$var$DeleteCacheEntryResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$ListCacheEntriesRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.ListCacheEntriesRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "restore_keys",
                kind: "scalar",
                repeat: 2 /*RepeatType.UNPACKED*/ ,
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            restoreKeys: []
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* repeated string restore_keys */ 3:
                    message.restoreKeys.push(reader.string());
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        /* repeated string restore_keys = 3; */ for(let i = 0; i < message.restoreKeys.length; i++)writer.tag(3, $8eg75.WireType.LengthDelimited).string(message.restoreKeys[i]);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.ListCacheEntriesRequest
 */ module.exports.ListCacheEntriesRequest = new $9b0bd7efdcdb382b$var$ListCacheEntriesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$ListCacheEntriesResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.ListCacheEntriesResponse", [
            {
                no: 1,
                name: "entries",
                kind: "message",
                repeat: 1 /*RepeatType.PACKED*/ ,
                T: ()=>$0e005ae8c59919d4$exports.CacheEntry
            }
        ]);
    }
    create(value) {
        const message = {
            entries: []
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* repeated github.actions.results.entities.v1.CacheEntry entries */ 1:
                    message.entries.push($0e005ae8c59919d4$exports.CacheEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated github.actions.results.entities.v1.CacheEntry entries = 1; */ for(let i = 0; i < message.entries.length; i++)$0e005ae8c59919d4$exports.CacheEntry.internalBinaryWrite(message.entries[i], writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.ListCacheEntriesResponse
 */ module.exports.ListCacheEntriesResponse = new $9b0bd7efdcdb382b$var$ListCacheEntriesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$LookupCacheEntryRequest$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.LookupCacheEntryRequest", [
            {
                no: 1,
                name: "metadata",
                kind: "message",
                T: ()=>$9daae2e0c8b64890$exports.CacheMetadata
            },
            {
                no: 2,
                name: "key",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 3,
                name: "restore_keys",
                kind: "scalar",
                repeat: 2 /*RepeatType.UNPACKED*/ ,
                T: 9 /*ScalarType.STRING*/ 
            },
            {
                no: 4,
                name: "version",
                kind: "scalar",
                T: 9 /*ScalarType.STRING*/ 
            }
        ]);
    }
    create(value) {
        const message = {
            key: "",
            restoreKeys: [],
            version: ""
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* github.actions.results.entities.v1.CacheMetadata metadata */ 1:
                    message.metadata = $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
                    break;
                case /* repeated string restore_keys */ 3:
                    message.restoreKeys.push(reader.string());
                    break;
                case /* string version */ 4:
                    message.version = reader.string();
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
        /* github.actions.results.entities.v1.CacheMetadata metadata = 1; */ if (message.metadata) $9daae2e0c8b64890$exports.CacheMetadata.internalBinaryWrite(message.metadata, writer.tag(1, $8eg75.WireType.LengthDelimited).fork(), options).join();
        /* string key = 2; */ if (message.key !== "") writer.tag(2, $8eg75.WireType.LengthDelimited).string(message.key);
        /* repeated string restore_keys = 3; */ for(let i = 0; i < message.restoreKeys.length; i++)writer.tag(3, $8eg75.WireType.LengthDelimited).string(message.restoreKeys[i]);
        /* string version = 4; */ if (message.version !== "") writer.tag(4, $8eg75.WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.LookupCacheEntryRequest
 */ module.exports.LookupCacheEntryRequest = new $9b0bd7efdcdb382b$var$LookupCacheEntryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class $9b0bd7efdcdb382b$var$LookupCacheEntryResponse$Type extends $a9be2ede474bd326$exports.MessageType {
    constructor(){
        super("github.actions.results.api.v1.LookupCacheEntryResponse", [
            {
                no: 1,
                name: "exists",
                kind: "scalar",
                T: 8 /*ScalarType.BOOL*/ 
            },
            {
                no: 2,
                name: "entry",
                kind: "message",
                T: ()=>$0e005ae8c59919d4$exports.CacheEntry
            }
        ]);
    }
    create(value) {
        const message = {
            exists: false
        };
        globalThis.Object.defineProperty(message, $bfa49afdbad1a225$exports.MESSAGE_TYPE, {
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
                case /* bool exists */ 1:
                    message.exists = reader.bool();
                    break;
                case /* github.actions.results.entities.v1.CacheEntry entry */ 2:
                    message.entry = $0e005ae8c59919d4$exports.CacheEntry.internalBinaryRead(reader, reader.uint32(), options, message.entry);
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
        /* bool exists = 1; */ if (message.exists !== false) writer.tag(1, $8eg75.WireType.Varint).bool(message.exists);
        /* github.actions.results.entities.v1.CacheEntry entry = 2; */ if (message.entry) $0e005ae8c59919d4$exports.CacheEntry.internalBinaryWrite(message.entry, writer.tag(2, $8eg75.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.api.v1.LookupCacheEntryResponse
 */ module.exports.LookupCacheEntryResponse = new $9b0bd7efdcdb382b$var$LookupCacheEntryResponse$Type();
/**
 * @generated ServiceType for protobuf service github.actions.results.api.v1.CacheService
 */ module.exports.CacheService = new $1f7302a7c222d175$exports.ServiceType("github.actions.results.api.v1.CacheService", [
    {
        name: "CreateCacheEntry",
        options: {},
        I: module.exports.CreateCacheEntryRequest,
        O: module.exports.CreateCacheEntryResponse
    },
    {
        name: "FinalizeCacheEntryUpload",
        options: {},
        I: module.exports.FinalizeCacheEntryUploadRequest,
        O: module.exports.FinalizeCacheEntryUploadResponse
    },
    {
        name: "GetCacheEntryDownloadURL",
        options: {},
        I: module.exports.GetCacheEntryDownloadURLRequest,
        O: module.exports.GetCacheEntryDownloadURLResponse
    },
    {
        name: "DeleteCacheEntry",
        options: {},
        I: module.exports.DeleteCacheEntryRequest,
        O: module.exports.DeleteCacheEntryResponse
    },
    {
        name: "ListCacheEntries",
        options: {},
        I: module.exports.ListCacheEntriesRequest,
        O: module.exports.ListCacheEntriesResponse
    },
    {
        name: "LookupCacheEntry",
        options: {},
        I: module.exports.LookupCacheEntryRequest,
        O: module.exports.LookupCacheEntryResponse
    }
]);


//# sourceMappingURL=cache.f857f684.js.map
