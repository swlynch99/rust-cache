require("./binary-format-contract.3251825d.js");
require("./reflection-info.dc91bb50.js");
require("./assert.a6d94dff.js");
require("./pb-long.eb7021d9.js");


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

var $6pQ37 = parcelRequire("6pQ37");

var $7KezH = parcelRequire("7KezH");

var $9mntI = parcelRequire("9mntI");

var $eCO4F = parcelRequire("eCO4F");
class $3cb3fab27358d8f2$export$6d3debc51ae57d55 {
    constructor(info){
        this.info = info;
    }
    prepare() {
        if (!this.fields) {
            const fieldsInput = this.info.fields ? this.info.fields.concat() : [];
            this.fields = fieldsInput.sort((a, b)=>a.no - b.no);
        }
    }
    /**
     * Writes the message to binary format.
     */ write(message, writer, options) {
        this.prepare();
        for (const field of this.fields){
            let value, emitDefault, repeated = field.repeat, localName = field.localName;
            // handle oneof ADT
            if (field.oneof) {
                const group = message[field.oneof];
                if (group.oneofKind !== localName) continue; // if field is not selected, skip
                value = group[localName];
                emitDefault = true;
            } else {
                value = message[localName];
                emitDefault = false;
            }
            // we have handled oneof above. we just have to honor `emitDefault`.
            switch(field.kind){
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? (0, $7KezH.ScalarType).INT32 : field.T;
                    if (repeated) {
                        (0, $9mntI.assert)(Array.isArray(value));
                        if (repeated == (0, $7KezH.RepeatType).PACKED) this.packed(writer, T, field.no, value);
                        else for (const item of value)this.scalar(writer, T, field.no, item, true);
                    } else if (value === undefined) (0, $9mntI.assert)(field.opt);
                    else this.scalar(writer, T, field.no, value, emitDefault || field.opt);
                    break;
                case "message":
                    if (repeated) {
                        (0, $9mntI.assert)(Array.isArray(value));
                        for (const item of value)this.message(writer, options, field.T(), field.no, item);
                    } else this.message(writer, options, field.T(), field.no, value);
                    break;
                case "map":
                    (0, $9mntI.assert)(typeof value == 'object' && value !== null);
                    for (const [key, val] of Object.entries(value))this.mapEntry(writer, options, field, key, val);
                    break;
            }
        }
        let u = options.writeUnknownFields;
        if (u !== false) (u === true ? (0, $6pQ37.UnknownFieldHandler).onWrite : u)(this.info.typeName, message, writer);
    }
    mapEntry(writer, options, field, key, value) {
        writer.tag(field.no, (0, $6pQ37.WireType).LengthDelimited);
        writer.fork();
        // javascript only allows number or string for object properties
        // we convert from our representation to the protobuf type
        let keyValue = key;
        switch(field.K){
            case (0, $7KezH.ScalarType).INT32:
            case (0, $7KezH.ScalarType).FIXED32:
            case (0, $7KezH.ScalarType).UINT32:
            case (0, $7KezH.ScalarType).SFIXED32:
            case (0, $7KezH.ScalarType).SINT32:
                keyValue = Number.parseInt(key);
                break;
            case (0, $7KezH.ScalarType).BOOL:
                (0, $9mntI.assert)(key == 'true' || key == 'false');
                keyValue = key == 'true';
                break;
        }
        // write key, expecting key field number = 1
        this.scalar(writer, field.K, 1, keyValue, true);
        // write value, expecting value field number = 2
        switch(field.V.kind){
            case 'scalar':
                this.scalar(writer, field.V.T, 2, value, true);
                break;
            case 'enum':
                this.scalar(writer, (0, $7KezH.ScalarType).INT32, 2, value, true);
                break;
            case 'message':
                this.message(writer, options, field.V.T(), 2, value);
                break;
        }
        writer.join();
    }
    message(writer, options, handler, fieldNo, value) {
        if (value === undefined) return;
        handler.internalBinaryWrite(value, writer.tag(fieldNo, (0, $6pQ37.WireType).LengthDelimited).fork(), options);
        writer.join();
    }
    /**
     * Write a single scalar value.
     */ scalar(writer, type, fieldNo, value, emitDefault) {
        let [wireType, method, isDefault] = this.scalarInfo(type, value);
        if (!isDefault || emitDefault) {
            writer.tag(fieldNo, wireType);
            writer[method](value);
        }
    }
    /**
     * Write an array of scalar values in packed format.
     */ packed(writer, type, fieldNo, value) {
        if (!value.length) return;
        (0, $9mntI.assert)(type !== (0, $7KezH.ScalarType).BYTES && type !== (0, $7KezH.ScalarType).STRING);
        // write tag
        writer.tag(fieldNo, (0, $6pQ37.WireType).LengthDelimited);
        // begin length-delimited
        writer.fork();
        // write values without tags
        let [, method] = this.scalarInfo(type);
        for(let i = 0; i < value.length; i++)writer[method](value[i]);
        // end length delimited
        writer.join();
    }
    /**
     * Get information for writing a scalar value.
     *
     * Returns tuple:
     * [0]: appropriate WireType
     * [1]: name of the appropriate method of IBinaryWriter
     * [2]: whether the given value is a default value
     *
     * If argument `value` is omitted, [2] is always false.
     */ scalarInfo(type, value) {
        let t = (0, $6pQ37.WireType).Varint;
        let m;
        let i = value === undefined;
        let d = value === 0;
        switch(type){
            case (0, $7KezH.ScalarType).INT32:
                m = "int32";
                break;
            case (0, $7KezH.ScalarType).STRING:
                d = i || !value.length;
                t = (0, $6pQ37.WireType).LengthDelimited;
                m = "string";
                break;
            case (0, $7KezH.ScalarType).BOOL:
                d = value === false;
                m = "bool";
                break;
            case (0, $7KezH.ScalarType).UINT32:
                m = "uint32";
                break;
            case (0, $7KezH.ScalarType).DOUBLE:
                t = (0, $6pQ37.WireType).Bit64;
                m = "double";
                break;
            case (0, $7KezH.ScalarType).FLOAT:
                t = (0, $6pQ37.WireType).Bit32;
                m = "float";
                break;
            case (0, $7KezH.ScalarType).INT64:
                d = i || (0, $eCO4F.PbLong).from(value).isZero();
                m = "int64";
                break;
            case (0, $7KezH.ScalarType).UINT64:
                d = i || (0, $eCO4F.PbULong).from(value).isZero();
                m = "uint64";
                break;
            case (0, $7KezH.ScalarType).FIXED64:
                d = i || (0, $eCO4F.PbULong).from(value).isZero();
                t = (0, $6pQ37.WireType).Bit64;
                m = "fixed64";
                break;
            case (0, $7KezH.ScalarType).BYTES:
                d = i || !value.byteLength;
                t = (0, $6pQ37.WireType).LengthDelimited;
                m = "bytes";
                break;
            case (0, $7KezH.ScalarType).FIXED32:
                t = (0, $6pQ37.WireType).Bit32;
                m = "fixed32";
                break;
            case (0, $7KezH.ScalarType).SFIXED32:
                t = (0, $6pQ37.WireType).Bit32;
                m = "sfixed32";
                break;
            case (0, $7KezH.ScalarType).SFIXED64:
                d = i || (0, $eCO4F.PbLong).from(value).isZero();
                t = (0, $6pQ37.WireType).Bit64;
                m = "sfixed64";
                break;
            case (0, $7KezH.ScalarType).SINT32:
                m = "sint32";
                break;
            case (0, $7KezH.ScalarType).SINT64:
                d = i || (0, $eCO4F.PbLong).from(value).isZero();
                m = "sint64";
                break;
        }
        return [
            t,
            m,
            i || d
        ];
    }
}


