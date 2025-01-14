require("./named-references.c7af8710.js");
require("./numeric-unicode-map.85244336.js");
require("./surrogate-pairs.d27add23.js");


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
parcelRegister("jswI3", function(module, exports) {
"use strict";
var $e2aa0144834f5e88$var$__assign = module.exports && module.exports.__assign || function() {
    $e2aa0144834f5e88$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $e2aa0144834f5e88$var$__assign.apply(this, arguments);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $3IvK0 = parcelRequire("3IvK0");

var $gXkUA = parcelRequire("gXkUA");

var $90wHG = parcelRequire("90wHG");
var $e2aa0144834f5e88$var$allNamedReferences = $e2aa0144834f5e88$var$__assign($e2aa0144834f5e88$var$__assign({}, $3IvK0.namedReferences), {
    all: $3IvK0.namedReferences.html5
});
function $e2aa0144834f5e88$var$replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
    macroRegExp.lastIndex = 0;
    var replaceMatch = macroRegExp.exec(macroText);
    var replaceResult;
    if (replaceMatch) {
        replaceResult = "";
        var replaceLastIndex = 0;
        do {
            if (replaceLastIndex !== replaceMatch.index) replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);
            var replaceInput = replaceMatch[0];
            replaceResult += macroReplacer(replaceInput);
            replaceLastIndex = replaceMatch.index + replaceInput.length;
        }while (replaceMatch = macroRegExp.exec(macroText));
        if (replaceLastIndex !== macroText.length) replaceResult += macroText.substring(replaceLastIndex);
    } else replaceResult = macroText;
    return replaceResult;
}
var $e2aa0144834f5e88$var$encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
};
var $e2aa0144834f5e88$var$defaultEncodeOptions = {
    mode: "specialChars",
    level: "all",
    numeric: "decimal"
};
function $e2aa0144834f5e88$var$encode(text, _a) {
    var _b = _a === void 0 ? $e2aa0144834f5e88$var$defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
    if (!text) return "";
    var encodeRegExp = $e2aa0144834f5e88$var$encodeRegExps[mode];
    var references = $e2aa0144834f5e88$var$allNamedReferences[level].characters;
    var isHex = numeric === "hexadecimal";
    return $e2aa0144834f5e88$var$replaceUsingRegExp(text, encodeRegExp, function(input) {
        var result = references[input];
        if (!result) {
            var code = input.length > 1 ? $90wHG.getCodePoint(input, 0) : input.charCodeAt(0);
            result = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
        }
        return result;
    });
}
module.exports.encode = $e2aa0144834f5e88$var$encode;
var $e2aa0144834f5e88$var$defaultDecodeOptions = {
    scope: "body",
    level: "all"
};
var $e2aa0144834f5e88$var$strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var $e2aa0144834f5e88$var$attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var $e2aa0144834f5e88$var$baseDecodeRegExps = {
    xml: {
        strict: $e2aa0144834f5e88$var$strict,
        attribute: $e2aa0144834f5e88$var$attribute,
        body: $3IvK0.bodyRegExps.xml
    },
    html4: {
        strict: $e2aa0144834f5e88$var$strict,
        attribute: $e2aa0144834f5e88$var$attribute,
        body: $3IvK0.bodyRegExps.html4
    },
    html5: {
        strict: $e2aa0144834f5e88$var$strict,
        attribute: $e2aa0144834f5e88$var$attribute,
        body: $3IvK0.bodyRegExps.html5
    }
};
var $e2aa0144834f5e88$var$decodeRegExps = $e2aa0144834f5e88$var$__assign($e2aa0144834f5e88$var$__assign({}, $e2aa0144834f5e88$var$baseDecodeRegExps), {
    all: $e2aa0144834f5e88$var$baseDecodeRegExps.html5
});
var $e2aa0144834f5e88$var$fromCharCode = String.fromCharCode;
var $e2aa0144834f5e88$var$outOfBoundsChar = $e2aa0144834f5e88$var$fromCharCode(65533);
var $e2aa0144834f5e88$var$defaultDecodeEntityOptions = {
    level: "all"
};
function $e2aa0144834f5e88$var$getDecodedEntity(entity, references, isAttribute, isStrict) {
    var decodeResult = entity;
    var decodeEntityLastChar = entity[entity.length - 1];
    if (isAttribute && decodeEntityLastChar === "=") decodeResult = entity;
    else if (isStrict && decodeEntityLastChar !== ";") decodeResult = entity;
    else {
        var decodeResultByReference = references[entity];
        if (decodeResultByReference) decodeResult = decodeResultByReference;
        else if (entity[0] === "&" && entity[1] === "#") {
            var decodeSecondChar = entity[2];
            var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
            decodeResult = decodeCode >= 1114111 ? $e2aa0144834f5e88$var$outOfBoundsChar : decodeCode > 65535 ? $90wHG.fromCodePoint(decodeCode) : $e2aa0144834f5e88$var$fromCharCode($gXkUA.numericUnicodeMap[decodeCode] || decodeCode);
        }
    }
    return decodeResult;
}
function $e2aa0144834f5e88$var$decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? $e2aa0144834f5e88$var$defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
    if (!entity) return "";
    return $e2aa0144834f5e88$var$getDecodedEntity(entity, $e2aa0144834f5e88$var$allNamedReferences[level].entities, false, false);
}
module.exports.decodeEntity = $e2aa0144834f5e88$var$decodeEntity;
function $e2aa0144834f5e88$var$decode(text, _a) {
    var _b = _a === void 0 ? $e2aa0144834f5e88$var$defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
    if (!text) return "";
    var decodeRegExp = $e2aa0144834f5e88$var$decodeRegExps[level][scope];
    var references = $e2aa0144834f5e88$var$allNamedReferences[level].entities;
    var isAttribute = scope === "attribute";
    var isStrict = scope === "strict";
    return $e2aa0144834f5e88$var$replaceUsingRegExp(text, decodeRegExp, function(entity) {
        return $e2aa0144834f5e88$var$getDecodedEntity(entity, references, isAttribute, isStrict);
    });
}
module.exports.decode = $e2aa0144834f5e88$var$decode;

});
parcelRegister("3IvK0", function(module, exports) {
module.exports = new URL("named-references.c7af8710.js", "file:" + __filename).toString();

});

parcelRegister("gXkUA", function(module, exports) {
module.exports = new URL("numeric-unicode-map.85244336.js", "file:" + __filename).toString();

});

parcelRegister("90wHG", function(module, exports) {
module.exports = new URL("surrogate-pairs.d27add23.js", "file:" + __filename).toString();

});



