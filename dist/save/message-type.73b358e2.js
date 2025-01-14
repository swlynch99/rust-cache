require("./message-type-contract.b0c9bb09.js");
require("./reflection-info.7dce837c.js");
require("./reflection-type-check.cd8ae068.js");
require("./reflection-json-reader.5ef9af6c.js");
require("./reflection-json-writer.c8995de7.js");
require("./reflection-binary-reader.ec7f8b64.js");
require("./reflection-binary-writer.39530b32.js");
require("./reflection-create.919a2ec7.js");
require("./reflection-merge-partial.0b55bbb5.js");
require("./json-typings.5e393a94.js");
require("./json-format-contract.00226e95.js");
require("./reflection-equals.ee771535.js");
require("./binary-writer.7375b436.js");
require("./binary-reader.3434b242.js");


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

var $jz89V = parcelRequire("jz89V");
var $6d6824d4b8660df9$exports = {};
$6d6824d4b8660df9$exports = new URL("reflection-info.7dce837c.js", "file:" + __filename).toString();


var $46caca20abb91e9d$exports = {};
$46caca20abb91e9d$exports = new URL("reflection-type-check.cd8ae068.js", "file:" + __filename).toString();


var $8e90fc9ad3cd9f3d$exports = {};
$8e90fc9ad3cd9f3d$exports = new URL("reflection-json-reader.5ef9af6c.js", "file:" + __filename).toString();


var $9d491d1ea6f6114e$exports = {};
$9d491d1ea6f6114e$exports = new URL("reflection-json-writer.c8995de7.js", "file:" + __filename).toString();


var $4933de43f787923c$exports = {};
$4933de43f787923c$exports = new URL("reflection-binary-reader.ec7f8b64.js", "file:" + __filename).toString();


var $a6815eff2de9133b$exports = {};
$a6815eff2de9133b$exports = new URL("reflection-binary-writer.39530b32.js", "file:" + __filename).toString();


var $1f86fe1d9f7e63c5$exports = {};
$1f86fe1d9f7e63c5$exports = new URL("reflection-create.919a2ec7.js", "file:" + __filename).toString();


var $6811789986f5e0dd$exports = {};
$6811789986f5e0dd$exports = new URL("reflection-merge-partial.0b55bbb5.js", "file:" + __filename).toString();



var $fU9hW = parcelRequire("fU9hW");
var $38a69f25e8de7aee$exports = {};
$38a69f25e8de7aee$exports = new URL("json-format-contract.00226e95.js", "file:" + __filename).toString();


var $66cfcb834587ad38$exports = {};
$66cfcb834587ad38$exports = new URL("reflection-equals.ee771535.js", "file:" + __filename).toString();


var $5ccdc8efc82f03d5$exports = {};
$5ccdc8efc82f03d5$exports = new URL("binary-writer.7375b436.js", "file:" + __filename).toString();


var $4537b8b0b27e7329$exports = {};
$4537b8b0b27e7329$exports = new URL("binary-reader.3434b242.js", "file:" + __filename).toString();


const $6a2af066adc13e84$var$baseDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({}));
class $6a2af066adc13e84$export$80edbf15fa61a4db {
    constructor(name, fields, options){
        this.defaultCheckDepth = 16;
        this.typeName = name;
        this.fields = fields.map((0, $6d6824d4b8660df9$exports.normalizeFieldInfo));
        this.options = options !== null && options !== void 0 ? options : {};
        this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, $6a2af066adc13e84$var$baseDescriptors), {
            [(0, $jz89V.MESSAGE_TYPE)]: {
                value: this
            }
        }));
        this.refTypeCheck = new (0, $46caca20abb91e9d$exports.ReflectionTypeCheck)(this);
        this.refJsonReader = new (0, $8e90fc9ad3cd9f3d$exports.ReflectionJsonReader)(this);
        this.refJsonWriter = new (0, $9d491d1ea6f6114e$exports.ReflectionJsonWriter)(this);
        this.refBinReader = new (0, $4933de43f787923c$exports.ReflectionBinaryReader)(this);
        this.refBinWriter = new (0, $a6815eff2de9133b$exports.ReflectionBinaryWriter)(this);
    }
    create(value) {
        let message = (0, $1f86fe1d9f7e63c5$exports.reflectionCreate)(this);
        if (value !== undefined) (0, $6811789986f5e0dd$exports.reflectionMergePartial)(this, message, value);
        return message;
    }
    /**
     * Clone the message.
     *
     * Unknown fields are discarded.
     */ clone(message) {
        let copy = this.create();
        (0, $6811789986f5e0dd$exports.reflectionMergePartial)(this, copy, message);
        return copy;
    }
    /**
     * Determines whether two message of the same type have the same field values.
     * Checks for deep equality, traversing repeated fields, oneof groups, maps
     * and messages recursively.
     * Will also return true if both messages are `undefined`.
     */ equals(a, b) {
        return (0, $66cfcb834587ad38$exports.reflectionEquals)(this, a, b);
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
        (0, $6811789986f5e0dd$exports.reflectionMergePartial)(this, target, source);
    }
    /**
     * Create a new message from binary format.
     */ fromBinary(data, options) {
        let opt = (0, $4537b8b0b27e7329$exports.binaryReadOptions)(options);
        return this.internalBinaryRead(opt.readerFactory(data), data.byteLength, opt);
    }
    /**
     * Read a new message from a JSON value.
     */ fromJson(json, options) {
        return this.internalJsonRead(json, (0, $38a69f25e8de7aee$exports.jsonReadOptions)(options));
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
        return this.internalJsonWrite(message, (0, $38a69f25e8de7aee$exports.jsonWriteOptions)(options));
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
        let opt = (0, $5ccdc8efc82f03d5$exports.binaryWriteOptions)(options);
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
        throw new Error(`Unable to parse message ${this.typeName} from JSON ${(0, $fU9hW.typeofJsonValue)(json)}.`);
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


//# sourceMappingURL=message-type.73b358e2.js.map
