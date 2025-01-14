require("./lower-camel-case.b0cd8840.js");


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

var $l2ly9 = parcelRequire("l2ly9");
var $dfacd05db7ef0358$export$d40a369a25702af0;
(function(ScalarType) {
    // 0 is reserved for errors.
    // Order is weird for historical reasons.
    ScalarType[ScalarType["DOUBLE"] = 1] = "DOUBLE";
    ScalarType[ScalarType["FLOAT"] = 2] = "FLOAT";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    ScalarType[ScalarType["INT64"] = 3] = "INT64";
    ScalarType[ScalarType["UINT64"] = 4] = "UINT64";
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    ScalarType[ScalarType["INT32"] = 5] = "INT32";
    ScalarType[ScalarType["FIXED64"] = 6] = "FIXED64";
    ScalarType[ScalarType["FIXED32"] = 7] = "FIXED32";
    ScalarType[ScalarType["BOOL"] = 8] = "BOOL";
    ScalarType[ScalarType["STRING"] = 9] = "STRING";
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.
    // New in version 2.
    ScalarType[ScalarType["BYTES"] = 12] = "BYTES";
    ScalarType[ScalarType["UINT32"] = 13] = "UINT32";
    // TYPE_ENUM = 14,
    ScalarType[ScalarType["SFIXED32"] = 15] = "SFIXED32";
    ScalarType[ScalarType["SFIXED64"] = 16] = "SFIXED64";
    ScalarType[ScalarType["SINT32"] = 17] = "SINT32";
    ScalarType[ScalarType["SINT64"] = 18] = "SINT64";
})($dfacd05db7ef0358$export$d40a369a25702af0 || ($dfacd05db7ef0358$export$d40a369a25702af0 = {}));
var $dfacd05db7ef0358$export$a3fb1069ae3b8bb4;
(function(LongType) {
    /**
     * Use JavaScript `bigint`.
     *
     * Field option `[jstype = JS_NORMAL]`.
     */ LongType[LongType["BIGINT"] = 0] = "BIGINT";
    /**
     * Use JavaScript `string`.
     *
     * Field option `[jstype = JS_STRING]`.
     */ LongType[LongType["STRING"] = 1] = "STRING";
    /**
     * Use JavaScript `number`.
     *
     * Large values will loose precision.
     *
     * Field option `[jstype = JS_NUMBER]`.
     */ LongType[LongType["NUMBER"] = 2] = "NUMBER";
})($dfacd05db7ef0358$export$a3fb1069ae3b8bb4 || ($dfacd05db7ef0358$export$a3fb1069ae3b8bb4 = {}));
var $dfacd05db7ef0358$export$3c05d9da25cb7a9;
(function(RepeatType) {
    /**
     * The field is not repeated.
     */ RepeatType[RepeatType["NO"] = 0] = "NO";
    /**
     * The field is repeated and should be packed.
     * Invalid for `bytes` and `string`, they cannot be packed.
     */ RepeatType[RepeatType["PACKED"] = 1] = "PACKED";
    /**
     * The field is repeated but should not be packed.
     * The only valid repeat type for repeated `bytes` and `string`.
     */ RepeatType[RepeatType["UNPACKED"] = 2] = "UNPACKED";
})($dfacd05db7ef0358$export$3c05d9da25cb7a9 || ($dfacd05db7ef0358$export$3c05d9da25cb7a9 = {}));
function $dfacd05db7ef0358$export$447fc6430fb31fd6(field) {
    var _a, _b, _c, _d;
    field.localName = (_a = field.localName) !== null && _a !== void 0 ? _a : (0, $l2ly9.lowerCamelCase)(field.name);
    field.jsonName = (_b = field.jsonName) !== null && _b !== void 0 ? _b : (0, $l2ly9.lowerCamelCase)(field.name);
    field.repeat = (_c = field.repeat) !== null && _c !== void 0 ? _c : $dfacd05db7ef0358$export$3c05d9da25cb7a9.NO;
    field.opt = (_d = field.opt) !== null && _d !== void 0 ? _d : field.repeat ? false : field.oneof ? false : field.kind == "message";
    return field;
}
function $dfacd05db7ef0358$export$9912926324fefcb(messageType, fieldName, extensionName, extensionType) {
    var _a;
    const options = (_a = messageType.fields.find((m, i)=>m.localName == fieldName || i == fieldName)) === null || _a === void 0 ? void 0 : _a.options;
    return options && options[extensionName] ? extensionType.fromJson(options[extensionName]) : undefined;
}
function $dfacd05db7ef0358$export$d043a97b27c6a8b(messageType, fieldName, extensionName, extensionType) {
    var _a;
    const options = (_a = messageType.fields.find((m, i)=>m.localName == fieldName || i == fieldName)) === null || _a === void 0 ? void 0 : _a.options;
    if (!options) return undefined;
    const optionVal = options[extensionName];
    if (optionVal === undefined) return optionVal;
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}
function $dfacd05db7ef0358$export$ab424c63a2206e68(messageType, extensionName, extensionType) {
    const options = messageType.options;
    const optionVal = options[extensionName];
    if (optionVal === undefined) return optionVal;
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}


//# sourceMappingURL=reflection-info.7dce837c.js.map
