require("./message-type-contract.b8323fb4.js");
require("./reflection-info.dc91bb50.js");
require("./reflection-type-check.0ccf8643.js");
require("./reflection-json-reader.1a22c3b3.js");
require("./reflection-json-writer.a653f52b.js");
require("./reflection-binary-reader.55aabecf.js");
require("./reflection-binary-writer.4df97518.js");
require("./reflection-create.f9e68ffb.js");
require("./reflection-merge-partial.03c0dfe6.js");
require("./json-typings.9b3d3aea.js");
require("./json-format-contract.c78fed1e.js");
require("./reflection-equals.7b6cff4e.js");
require("./binary-writer.d34e75a5.js");
require("./binary-reader.ee75cefc.js");


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

var $7wVsZ = parcelRequire("7wVsZ");
var $4f38a1bd2915992d$exports = {};
$4f38a1bd2915992d$exports = new URL("reflection-info.dc91bb50.js", "file:" + __filename).toString();


var $65cef15d82702de1$exports = {};
$65cef15d82702de1$exports = new URL("reflection-type-check.0ccf8643.js", "file:" + __filename).toString();


var $3050d2202d105190$exports = {};
$3050d2202d105190$exports = new URL("reflection-json-reader.1a22c3b3.js", "file:" + __filename).toString();


var $8d22decc0da3107b$exports = {};
$8d22decc0da3107b$exports = new URL("reflection-json-writer.a653f52b.js", "file:" + __filename).toString();


var $1d3f6abcd2076957$exports = {};
$1d3f6abcd2076957$exports = new URL("reflection-binary-reader.55aabecf.js", "file:" + __filename).toString();


var $69065a8eace04256$exports = {};
$69065a8eace04256$exports = new URL("reflection-binary-writer.4df97518.js", "file:" + __filename).toString();


var $153033e5f359faa9$exports = {};
$153033e5f359faa9$exports = new URL("reflection-create.f9e68ffb.js", "file:" + __filename).toString();


var $2923c4c4954d79aa$exports = {};
$2923c4c4954d79aa$exports = new URL("reflection-merge-partial.03c0dfe6.js", "file:" + __filename).toString();



var $7nPm8 = parcelRequire("7nPm8");
var $ee82e2b28d987460$exports = {};
$ee82e2b28d987460$exports = new URL("json-format-contract.c78fed1e.js", "file:" + __filename).toString();


var $ac1a276f062dd3b8$exports = {};
$ac1a276f062dd3b8$exports = new URL("reflection-equals.7b6cff4e.js", "file:" + __filename).toString();


var $7936d09300f0e5ff$exports = {};
$7936d09300f0e5ff$exports = new URL("binary-writer.d34e75a5.js", "file:" + __filename).toString();


var $c4f25d2779dc074b$exports = {};
$c4f25d2779dc074b$exports = new URL("binary-reader.ee75cefc.js", "file:" + __filename).toString();


const $609a429eb5283bf0$var$baseDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({}));
class $609a429eb5283bf0$export$80edbf15fa61a4db {
    constructor(name, fields, options){
        this.defaultCheckDepth = 16;
        this.typeName = name;
        this.fields = fields.map((0, $4f38a1bd2915992d$exports.normalizeFieldInfo));
        this.options = options !== null && options !== void 0 ? options : {};
        this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, $609a429eb5283bf0$var$baseDescriptors), {
            [(0, $7wVsZ.MESSAGE_TYPE)]: {
                value: this
            }
        }));
        this.refTypeCheck = new (0, $65cef15d82702de1$exports.ReflectionTypeCheck)(this);
        this.refJsonReader = new (0, $3050d2202d105190$exports.ReflectionJsonReader)(this);
        this.refJsonWriter = new (0, $8d22decc0da3107b$exports.ReflectionJsonWriter)(this);
        this.refBinReader = new (0, $1d3f6abcd2076957$exports.ReflectionBinaryReader)(this);
        this.refBinWriter = new (0, $69065a8eace04256$exports.ReflectionBinaryWriter)(this);
    }
    create(value) {
        let message = (0, $153033e5f359faa9$exports.reflectionCreate)(this);
        if (value !== undefined) (0, $2923c4c4954d79aa$exports.reflectionMergePartial)(this, message, value);
        return message;
    }
    /**
     * Clone the message.
     *
     * Unknown fields are discarded.
     */ clone(message) {
        let copy = this.create();
        (0, $2923c4c4954d79aa$exports.reflectionMergePartial)(this, copy, message);
        return copy;
    }
    /**
     * Determines whether two message of the same type have the same field values.
     * Checks for deep equality, traversing repeated fields, oneof groups, maps
     * and messages recursively.
     * Will also return true if both messages are `undefined`.
     */ equals(a, b) {
        return (0, $ac1a276f062dd3b8$exports.reflectionEquals)(this, a, b);
    }
    /**
     * Is the given value assignable to our message type
     * and contains no [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */ is(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, false);
    }
    /**
     * Is the given value assignable to our message type,
     * regardless of [excess properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)?
     */ isAssignable(arg, depth = this.defaultCheckDepth) {
        return this.refTypeCheck.is(arg, depth, true);
    }
    /**
     * Copy partial data into the target message.
     */ mergePartial(target, source) {
        (0, $2923c4c4954d79aa$exports.reflectionMergePartial)(this, target, source);
    }
    /**
     * Create a new message from binary format.
     */ fromBinary(data, options) {
        let opt = (0, $c4f25d2779dc074b$exports.binaryReadOptions)(options);
        return this.internalBinaryRead(opt.readerFactory(data), data.byteLength, opt);
    }
    /**
     * Read a new message from a JSON value.
     */ fromJson(json, options) {
        return this.internalJsonRead(json, (0, $ee82e2b28d987460$exports.jsonReadOptions)(options));
    }
    /**
     * Read a new message from a JSON string.
     * This is equivalent to `T.fromJson(JSON.parse(json))`.
     */ fromJsonString(json, options) {
        let value = JSON.parse(json);
        return this.fromJson(value, options);
    }
    /**
     * Write the message to canonical JSON value.
     */ toJson(message, options) {
        return this.internalJsonWrite(message, (0, $ee82e2b28d987460$exports.jsonWriteOptions)(options));
    }
    /**
     * Convert the message to canonical JSON string.
     * This is equivalent to `JSON.stringify(T.toJson(t))`
     */ toJsonString(message, options) {
        var _a;
        let value = this.toJson(message, options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Write the message to binary format.
     */ toBinary(message, options) {
        let opt = (0, $7936d09300f0e5ff$exports.binaryWriteOptions)(options);
        return this.internalBinaryWrite(message, opt.writerFactory(), opt).finish();
    }
    /**
     * This is an internal method. If you just want to read a message from
     * JSON, use `fromJson()` or `fromJsonString()`.
     *
     * Reads JSON value and merges the fields into the target
     * according to protobuf rules. If the target is omitted,
     * a new instance is created first.
     */ internalJsonRead(json, options, target) {
        if (json !== null && typeof json == "object" && !Array.isArray(json)) {
            let message = target !== null && target !== void 0 ? target : this.create();
            this.refJsonReader.read(json, message, options);
            return message;
        }
        throw new Error(`Unable to parse message ${this.typeName} from JSON ${(0, $7nPm8.typeofJsonValue)(json)}.`);
    }
    /**
     * This is an internal method. If you just want to write a message
     * to JSON, use `toJson()` or `toJsonString().
     *
     * Writes JSON value and returns it.
     */ internalJsonWrite(message, options) {
        return this.refJsonWriter.write(message, options);
    }
    /**
     * This is an internal method. If you just want to write a message
     * in binary format, use `toBinary()`.
     *
     * Serializes the message in binary format and appends it to the given
     * writer. Returns passed writer.
     */ internalBinaryWrite(message, writer, options) {
        this.refBinWriter.write(message, writer, options);
        return writer;
    }
    /**
     * This is an internal method. If you just want to read a message from
     * binary data, use `fromBinary()`.
     *
     * Reads data from binary format and merges the fields into
     * the target according to protobuf rules. If the target is
     * omitted, a new instance is created first.
     */ internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create();
        this.refBinReader.read(reader, message, options, length);
        return message;
    }
}


