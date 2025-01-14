require("./binary-format-contract.cd42ad69.js");
require("./reflection-info.7dce837c.js");
require("./reflection-long-convert.61cc117e.js");
require("./reflection-scalar-default.6091c760.js");


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
var $391e6b20556f2582$exports = {};
$391e6b20556f2582$exports = new URL("binary-format-contract.cd42ad69.js", "file:" + __filename).toString();



var $jcCg0 = parcelRequire("jcCg0");

var $4ulp8 = parcelRequire("4ulp8");
var $59aa9f2b9f424adf$exports = {};
$59aa9f2b9f424adf$exports = new URL("reflection-scalar-default.6091c760.js", "file:" + __filename).toString();


class $1e3bcdb0fca2dcb3$export$95f9a0270cc163dd {
    constructor(info){
        this.info = info;
    }
    prepare() {
        var _a;
        if (!this.fieldNoToField) {
            const fieldsInput = (_a = this.info.fields) !== null && _a !== void 0 ? _a : [];
            this.fieldNoToField = new Map(fieldsInput.map((field)=>[
                    field.no,
                    field
                ]));
        }
    }
    /**
     * Reads a message from binary format into the target message.
     *
     * Repeated fields are appended. Map entries are added, overwriting
     * existing keys.
     *
     * If a message field is already present, it will be merged with the
     * new data.
     */ read(reader, message, options, length) {
        this.prepare();
        const end = length === undefined ? reader.len : reader.pos + length;
        while(reader.pos < end){
            // read the tag and find the field
            const [fieldNo, wireType] = reader.tag(), field = this.fieldNoToField.get(fieldNo);
            if (!field) {
                let u = options.readUnknownField;
                if (u == "throw") throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.info.typeName}`);
                let d = reader.skip(wireType);
                if (u !== false) (u === true ? (0, $391e6b20556f2582$exports.UnknownFieldHandler).onRead : u)(this.info.typeName, message, fieldNo, wireType, d);
                continue;
            }
            // target object for the field we are reading
            let target = message, repeated = field.repeat, localName = field.localName;
            // if field is member of oneof ADT, use ADT as target
            if (field.oneof) {
                target = target[field.oneof];
                // if other oneof member selected, set new ADT
                if (target.oneofKind !== localName) target = message[field.oneof] = {
                    oneofKind: localName
                };
            }
            // we have handled oneof above, we just have read the value into `target[localName]`
            switch(field.kind){
                case "scalar":
                case "enum":
                    let T = field.kind == "enum" ? (0, $jcCg0.ScalarType).INT32 : field.T;
                    let L = field.kind == "scalar" ? field.L : undefined;
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        if (wireType == (0, $391e6b20556f2582$exports.WireType).LengthDelimited && T != (0, $jcCg0.ScalarType).STRING && T != (0, $jcCg0.ScalarType).BYTES) {
                            let e = reader.uint32() + reader.pos;
                            while(reader.pos < e)arr.push(this.scalar(reader, T, L));
                        } else arr.push(this.scalar(reader, T, L));
                    } else target[localName] = this.scalar(reader, T, L);
                    break;
                case "message":
                    if (repeated) {
                        let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                        let msg = field.T().internalBinaryRead(reader, reader.uint32(), options);
                        arr.push(msg);
                    } else target[localName] = field.T().internalBinaryRead(reader, reader.uint32(), options, target[localName]);
                    break;
                case "map":
                    let [mapKey, mapVal] = this.mapEntry(field, reader, options);
                    // safe to assume presence of map object, oneof cannot contain repeated values
                    target[localName][mapKey] = mapVal;
                    break;
            }
        }
    }
    /**
     * Read a map field, expecting key field = 1, value field = 2
     */ mapEntry(field, reader, options) {
        let length = reader.uint32();
        let end = reader.pos + length;
        let key = undefined; // javascript only allows number or string for object properties
        let val = undefined;
        while(reader.pos < end){
            let [fieldNo, wireType] = reader.tag();
            switch(fieldNo){
                case 1:
                    if (field.K == (0, $jcCg0.ScalarType).BOOL) key = reader.bool().toString();
                    else // long types are read as string, number types are okay as number
                    key = this.scalar(reader, field.K, (0, $jcCg0.LongType).STRING);
                    break;
                case 2:
                    switch(field.V.kind){
                        case "scalar":
                            val = this.scalar(reader, field.V.T, field.V.L);
                            break;
                        case "enum":
                            val = reader.int32();
                            break;
                        case "message":
                            val = field.V.T().internalBinaryRead(reader, reader.uint32(), options);
                            break;
                    }
                    break;
                default:
                    throw new Error(`Unknown field ${fieldNo} (wire type ${wireType}) in map entry for ${this.info.typeName}#${field.name}`);
            }
        }
        if (key === undefined) {
            let keyRaw = (0, $59aa9f2b9f424adf$exports.reflectionScalarDefault)(field.K);
            key = field.K == (0, $jcCg0.ScalarType).BOOL ? keyRaw.toString() : keyRaw;
        }
        if (val === undefined) switch(field.V.kind){
            case "scalar":
                val = (0, $59aa9f2b9f424adf$exports.reflectionScalarDefault)(field.V.T, field.V.L);
                break;
            case "enum":
                val = 0;
                break;
            case "message":
                val = field.V.T().create();
                break;
        }
        return [
            key,
            val
        ];
    }
    scalar(reader, type, longType) {
        switch(type){
            case (0, $jcCg0.ScalarType).INT32:
                return reader.int32();
            case (0, $jcCg0.ScalarType).STRING:
                return reader.string();
            case (0, $jcCg0.ScalarType).BOOL:
                return reader.bool();
            case (0, $jcCg0.ScalarType).DOUBLE:
                return reader.double();
            case (0, $jcCg0.ScalarType).FLOAT:
                return reader.float();
            case (0, $jcCg0.ScalarType).INT64:
                return (0, $4ulp8.reflectionLongConvert)(reader.int64(), longType);
            case (0, $jcCg0.ScalarType).UINT64:
                return (0, $4ulp8.reflectionLongConvert)(reader.uint64(), longType);
            case (0, $jcCg0.ScalarType).FIXED64:
                return (0, $4ulp8.reflectionLongConvert)(reader.fixed64(), longType);
            case (0, $jcCg0.ScalarType).FIXED32:
                return reader.fixed32();
            case (0, $jcCg0.ScalarType).BYTES:
                return reader.bytes();
            case (0, $jcCg0.ScalarType).UINT32:
                return reader.uint32();
            case (0, $jcCg0.ScalarType).SFIXED32:
                return reader.sfixed32();
            case (0, $jcCg0.ScalarType).SFIXED64:
                return (0, $4ulp8.reflectionLongConvert)(reader.sfixed64(), longType);
            case (0, $jcCg0.ScalarType).SINT32:
                return reader.sint32();
            case (0, $jcCg0.ScalarType).SINT64:
                return (0, $4ulp8.reflectionLongConvert)(reader.sint64(), longType);
        }
    }
}


//# sourceMappingURL=reflection-binary-reader.ec7f8b64.js.map
