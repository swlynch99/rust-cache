require("./base64.afc82674.js");
require("./pb-long.eb7021d9.js");
require("./reflection-info.dc91bb50.js");
require("./assert.a6d94dff.js");


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

var $iJkiY = parcelRequire("iJkiY");

var $eCO4F = parcelRequire("eCO4F");

var $7KezH = parcelRequire("7KezH");

var $9mntI = parcelRequire("9mntI");
class $a65d24ad8c92592d$export$b2626b487dec7942 {
    constructor(info){
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Converts the message to a JSON object, based on the field descriptors.
     */ write(message, options) {
        const json = {}, source = message;
        for (const field of this.fields){
            // field is not part of a oneof, simply write as is
            if (!field.oneof) {
                let jsonValue = this.field(field, source[field.localName], options);
                if (jsonValue !== undefined) json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
                continue;
            }
            // field is part of a oneof
            const group = source[field.oneof];
            if (group.oneofKind !== field.localName) continue; // not selected, skip
            const opt = field.kind == 'scalar' || field.kind == 'enum' ? Object.assign(Object.assign({}, options), {
                emitDefaultValues: true
            }) : options;
            let jsonValue = this.field(field, group[field.localName], opt);
            (0, $9mntI.assert)(jsonValue !== undefined);
            json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
        }
        return json;
    }
    field(field, value, options) {
        let jsonValue = undefined;
        if (field.kind == 'map') {
            (0, $9mntI.assert)(typeof value == "object" && value !== null);
            const jsonObj = {};
            switch(field.V.kind){
                case "scalar":
                    for (const [entryKey, entryValue] of Object.entries(value)){
                        const val = this.scalar(field.V.T, entryValue, field.name, false, true);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "message":
                    const messageType = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)){
                        const val = this.message(messageType, entryValue, field.name, options);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
                case "enum":
                    const enumInfo = field.V.T();
                    for (const [entryKey, entryValue] of Object.entries(value)){
                        (0, $9mntI.assert)(entryValue === undefined || typeof entryValue == 'number');
                        const val = this.enum(enumInfo, entryValue, field.name, false, true, options.enumAsInteger);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                    }
                    break;
            }
            if (options.emitDefaultValues || Object.keys(jsonObj).length > 0) jsonValue = jsonObj;
        } else if (field.repeat) {
            (0, $9mntI.assert)(Array.isArray(value));
            const jsonArr = [];
            switch(field.kind){
                case "scalar":
                    for(let i = 0; i < value.length; i++){
                        const val = this.scalar(field.T, value[i], field.name, field.opt, true);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "enum":
                    const enumInfo = field.T();
                    for(let i = 0; i < value.length; i++){
                        (0, $9mntI.assert)(value[i] === undefined || typeof value[i] == 'number');
                        const val = this.enum(enumInfo, value[i], field.name, field.opt, true, options.enumAsInteger);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
                case "message":
                    const messageType = field.T();
                    for(let i = 0; i < value.length; i++){
                        const val = this.message(messageType, value[i], field.name, options);
                        (0, $9mntI.assert)(val !== undefined);
                        jsonArr.push(val);
                    }
                    break;
            }
            // add converted array to json output
            if (options.emitDefaultValues || jsonArr.length > 0 || options.emitDefaultValues) jsonValue = jsonArr;
        } else switch(field.kind){
            case "scalar":
                jsonValue = this.scalar(field.T, value, field.name, field.opt, options.emitDefaultValues);
                break;
            case "enum":
                jsonValue = this.enum(field.T(), value, field.name, field.opt, options.emitDefaultValues, options.enumAsInteger);
                break;
            case "message":
                jsonValue = this.message(field.T(), value, field.name, options);
                break;
        }
        return jsonValue;
    }
    /**
     * Returns `null` as the default for google.protobuf.NullValue.
     */ enum(type, value, fieldName, optional, emitDefaultValues, enumAsInteger) {
        if (type[0] == 'google.protobuf.NullValue') return !emitDefaultValues && !optional ? undefined : null;
        if (value === undefined) {
            (0, $9mntI.assert)(optional);
            return undefined;
        }
        if (value === 0 && !emitDefaultValues && !optional) // we require 0 to be default value for all enums
        return undefined;
        (0, $9mntI.assert)(typeof value == 'number');
        (0, $9mntI.assert)(Number.isInteger(value));
        if (enumAsInteger || !type[1].hasOwnProperty(value)) // if we don't now the enum value, just return the number
        return value;
        if (type[2]) // restore the dropped prefix
        return type[2] + type[1][value];
        return type[1][value];
    }
    message(type, value, fieldName, options) {
        if (value === undefined) return options.emitDefaultValues ? null : undefined;
        return type.internalJsonWrite(value, options);
    }
    scalar(type, value, fieldName, optional, emitDefaultValues) {
        if (value === undefined) {
            (0, $9mntI.assert)(optional);
            return undefined;
        }
        const ed = emitDefaultValues || optional;
        // noinspection FallThroughInSwitchStatementJS
        switch(type){
            // int32, fixed32, uint32: JSON value will be a decimal number. Either numbers or strings are accepted.
            case (0, $7KezH.ScalarType).INT32:
            case (0, $7KezH.ScalarType).SFIXED32:
            case (0, $7KezH.ScalarType).SINT32:
                if (value === 0) return ed ? 0 : undefined;
                (0, $9mntI.assertInt32)(value);
                return value;
            case (0, $7KezH.ScalarType).FIXED32:
            case (0, $7KezH.ScalarType).UINT32:
                if (value === 0) return ed ? 0 : undefined;
                (0, $9mntI.assertUInt32)(value);
                return value;
            // float, double: JSON value will be a number or one of the special string values "NaN", "Infinity", and "-Infinity".
            // Either numbers or strings are accepted. Exponent notation is also accepted.
            case (0, $7KezH.ScalarType).FLOAT:
                (0, $9mntI.assertFloat32)(value);
            case (0, $7KezH.ScalarType).DOUBLE:
                if (value === 0) return ed ? 0 : undefined;
                (0, $9mntI.assert)(typeof value == 'number');
                if (Number.isNaN(value)) return 'NaN';
                if (value === Number.POSITIVE_INFINITY) return 'Infinity';
                if (value === Number.NEGATIVE_INFINITY) return '-Infinity';
                return value;
            // string:
            case (0, $7KezH.ScalarType).STRING:
                if (value === "") return ed ? '' : undefined;
                (0, $9mntI.assert)(typeof value == 'string');
                return value;
            // bool:
            case (0, $7KezH.ScalarType).BOOL:
                if (value === false) return ed ? false : undefined;
                (0, $9mntI.assert)(typeof value == 'boolean');
                return value;
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case (0, $7KezH.ScalarType).UINT64:
            case (0, $7KezH.ScalarType).FIXED64:
                (0, $9mntI.assert)(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let ulong = (0, $eCO4F.PbULong).from(value);
                if (ulong.isZero() && !ed) return undefined;
                return ulong.toString();
            // JSON value will be a decimal string. Either numbers or strings are accepted.
            case (0, $7KezH.ScalarType).INT64:
            case (0, $7KezH.ScalarType).SFIXED64:
            case (0, $7KezH.ScalarType).SINT64:
                (0, $9mntI.assert)(typeof value == 'number' || typeof value == 'string' || typeof value == 'bigint');
                let long = (0, $eCO4F.PbLong).from(value);
                if (long.isZero() && !ed) return undefined;
                return long.toString();
            // bytes: JSON value will be the data encoded as a string using standard base64 encoding with paddings.
            // Either standard or URL-safe base64 encoding with/without paddings are accepted.
            case (0, $7KezH.ScalarType).BYTES:
                (0, $9mntI.assert)(value instanceof Uint8Array);
                if (!value.byteLength) return ed ? "" : undefined;
                return (0, $iJkiY.base64encode)(value);
        }
    }
}


