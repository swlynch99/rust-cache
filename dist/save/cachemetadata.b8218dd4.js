require("./message-type-contract.b0c9bb09.js");
require("./message-type.73b358e2.js");
require("./reflection-merge-partial.0b55bbb5.js");
require("./binary-format-contract.cd42ad69.js");
require("./cachescope.89ca0b30.js");


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
module.exports.CacheMetadata = void 0;

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
var $926b2d2eb94b7c9b$exports = {};
$926b2d2eb94b7c9b$exports = new URL("cachescope.89ca0b30.js", "file:" + __filename).toString();


// @generated message type with reflection information, may provide speed optimized methods
class $2ee3127fcc8951a9$var$CacheMetadata$Type extends $977Xk.MessageType {
    constructor(){
        super("github.actions.results.entities.v1.CacheMetadata", [
            {
                no: 1,
                name: "repository_id",
                kind: "scalar",
                T: 3 /*ScalarType.INT64*/ 
            },
            {
                no: 2,
                name: "scope",
                kind: "message",
                repeat: 1 /*RepeatType.PACKED*/ ,
                T: ()=>$926b2d2eb94b7c9b$exports.CacheScope
            }
        ]);
    }
    create(value) {
        const message = {
            repositoryId: "0",
            scope: []
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
                case /* int64 repository_id */ 1:
                    message.repositoryId = reader.int64().toString();
                    break;
                case /* repeated github.actions.results.entities.v1.CacheScope scope */ 2:
                    message.scope.push($926b2d2eb94b7c9b$exports.CacheScope.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int64 repository_id = 1; */ if (message.repositoryId !== "0") writer.tag(1, $8eg75.WireType.Varint).int64(message.repositoryId);
        /* repeated github.actions.results.entities.v1.CacheScope scope = 2; */ for(let i = 0; i < message.scope.length; i++)$926b2d2eb94b7c9b$exports.CacheScope.internalBinaryWrite(message.scope[i], writer.tag(2, $8eg75.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false) (u == true ? $8eg75.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message github.actions.results.entities.v1.CacheMetadata
 */ module.exports.CacheMetadata = new $2ee3127fcc8951a9$var$CacheMetadata$Type();


//# sourceMappingURL=cachemetadata.b8218dd4.js.map
