require("./named-references.486c29b2.js");
require("./numeric-unicode-map.f0f3efbb.js");
require("./surrogate-pairs.da9befe2.js");


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
parcelRegister("a5vog", function(module, exports) {
"use strict";
var $7582b87e2bc7c50c$var$__assign = module.exports && module.exports.__assign || function() {
    $7582b87e2bc7c50c$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $7582b87e2bc7c50c$var$__assign.apply(this, arguments);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $bAAsj = parcelRequire("bAAsj");

var $8oi2j = parcelRequire("8oi2j");

var $bMmMO = parcelRequire("bMmMO");
var $7582b87e2bc7c50c$var$allNamedReferences = $7582b87e2bc7c50c$var$__assign($7582b87e2bc7c50c$var$__assign({}, $bAAsj.namedReferences), {
    all: $bAAsj.namedReferences.html5
});
function $7582b87e2bc7c50c$var$replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
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
var $7582b87e2bc7c50c$var$encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
    extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
};
var $7582b87e2bc7c50c$var$defaultEncodeOptions = {
    mode: "specialChars",
    level: "all",
    numeric: "decimal"
};
function $7582b87e2bc7c50c$var$encode(text, _a) {
    var _b = _a === void 0 ? $7582b87e2bc7c50c$var$defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
    if (!text) return "";
    var encodeRegExp = $7582b87e2bc7c50c$var$encodeRegExps[mode];
    var references = $7582b87e2bc7c50c$var$allNamedReferences[level].characters;
    var isHex = numeric === "hexadecimal";
    return $7582b87e2bc7c50c$var$replaceUsingRegExp(text, encodeRegExp, function(input) {
        var result = references[input];
        if (!result) {
            var code = input.length > 1 ? $bMmMO.getCodePoint(input, 0) : input.charCodeAt(0);
            result = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
        }
        return result;
    });
}
module.exports.encode = $7582b87e2bc7c50c$var$encode;
var $7582b87e2bc7c50c$var$defaultDecodeOptions = {
    scope: "body",
    level: "all"
};
var $7582b87e2bc7c50c$var$strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var $7582b87e2bc7c50c$var$attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var $7582b87e2bc7c50c$var$baseDecodeRegExps = {
    xml: {
        strict: $7582b87e2bc7c50c$var$strict,
        attribute: $7582b87e2bc7c50c$var$attribute,
        body: $bAAsj.bodyRegExps.xml
    },
    html4: {
        strict: $7582b87e2bc7c50c$var$strict,
        attribute: $7582b87e2bc7c50c$var$attribute,
        body: $bAAsj.bodyRegExps.html4
    },
    html5: {
        strict: $7582b87e2bc7c50c$var$strict,
        attribute: $7582b87e2bc7c50c$var$attribute,
        body: $bAAsj.bodyRegExps.html5
    }
};
var $7582b87e2bc7c50c$var$decodeRegExps = $7582b87e2bc7c50c$var$__assign($7582b87e2bc7c50c$var$__assign({}, $7582b87e2bc7c50c$var$baseDecodeRegExps), {
    all: $7582b87e2bc7c50c$var$baseDecodeRegExps.html5
});
var $7582b87e2bc7c50c$var$fromCharCode = String.fromCharCode;
var $7582b87e2bc7c50c$var$outOfBoundsChar = $7582b87e2bc7c50c$var$fromCharCode(65533);
var $7582b87e2bc7c50c$var$defaultDecodeEntityOptions = {
    level: "all"
};
function $7582b87e2bc7c50c$var$getDecodedEntity(entity, references, isAttribute, isStrict) {
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
            decodeResult = decodeCode >= 1114111 ? $7582b87e2bc7c50c$var$outOfBoundsChar : decodeCode > 65535 ? $bMmMO.fromCodePoint(decodeCode) : $7582b87e2bc7c50c$var$fromCharCode($8oi2j.numericUnicodeMap[decodeCode] || decodeCode);
        }
    }
    return decodeResult;
}
function $7582b87e2bc7c50c$var$decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? $7582b87e2bc7c50c$var$defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
    if (!entity) return "";
    return $7582b87e2bc7c50c$var$getDecodedEntity(entity, $7582b87e2bc7c50c$var$allNamedReferences[level].entities, false, false);
}
module.exports.decodeEntity = $7582b87e2bc7c50c$var$decodeEntity;
function $7582b87e2bc7c50c$var$decode(text, _a) {
    var _b = _a === void 0 ? $7582b87e2bc7c50c$var$defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
    if (!text) return "";
    var decodeRegExp = $7582b87e2bc7c50c$var$decodeRegExps[level][scope];
    var references = $7582b87e2bc7c50c$var$allNamedReferences[level].entities;
    var isAttribute = scope === "attribute";
    var isStrict = scope === "strict";
    return $7582b87e2bc7c50c$var$replaceUsingRegExp(text, decodeRegExp, function(entity) {
        return $7582b87e2bc7c50c$var$getDecodedEntity(entity, references, isAttribute, isStrict);
    });
}
module.exports.decode = $7582b87e2bc7c50c$var$decode;

});
parcelRegister("bAAsj", function(module, exports) {
module.exports = new URL("named-references.486c29b2.js", "file:" + __filename).toString();

});

parcelRegister("8oi2j", function(module, exports) {
module.exports = new URL("numeric-unicode-map.f0f3efbb.js", "file:" + __filename).toString();

});

parcelRegister("bMmMO", function(module, exports) {
module.exports = new URL("surrogate-pairs.da9befe2.js", "file:" + __filename).toString();

});



//# sourceMappingURL=html-entities.e584490c.js.map
