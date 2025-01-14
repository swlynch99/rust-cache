require("./tr46.024edea7.js");
var $16ESu$punycode = require("punycode");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("5DZF9", function(module, exports) {

$parcel$export(module.exports, "serializeURL", () => $41c06d315c3484e2$export$22c26650625a03dd, (v) => $41c06d315c3484e2$export$22c26650625a03dd = v);
$parcel$export(module.exports, "serializeURLOrigin", () => $41c06d315c3484e2$export$2e7f7e38cf280175, (v) => $41c06d315c3484e2$export$2e7f7e38cf280175 = v);
$parcel$export(module.exports, "parseURL", () => $41c06d315c3484e2$export$4b3d9a5bae55976, (v) => $41c06d315c3484e2$export$4b3d9a5bae55976 = v);
$parcel$export(module.exports, "basicURLParse", () => $41c06d315c3484e2$export$49426ae341001e98, (v) => $41c06d315c3484e2$export$49426ae341001e98 = v);
$parcel$export(module.exports, "setTheUsername", () => $41c06d315c3484e2$export$9f0084801ea6f73, (v) => $41c06d315c3484e2$export$9f0084801ea6f73 = v);
$parcel$export(module.exports, "setThePassword", () => $41c06d315c3484e2$export$179ff9102702017e, (v) => $41c06d315c3484e2$export$179ff9102702017e = v);
$parcel$export(module.exports, "serializeHost", () => $41c06d315c3484e2$export$5a72d4202df05eaf, (v) => $41c06d315c3484e2$export$5a72d4202df05eaf = v);
$parcel$export(module.exports, "cannotHaveAUsernamePasswordPort", () => $41c06d315c3484e2$export$4b8e25854c155c7c, (v) => $41c06d315c3484e2$export$4b8e25854c155c7c = v);
$parcel$export(module.exports, "serializeInteger", () => $41c06d315c3484e2$export$694507dc48e0aff6, (v) => $41c06d315c3484e2$export$694507dc48e0aff6 = v);
var $41c06d315c3484e2$export$22c26650625a03dd;
var $41c06d315c3484e2$export$2e7f7e38cf280175;
var $41c06d315c3484e2$export$49426ae341001e98;
var $41c06d315c3484e2$export$9f0084801ea6f73;
var $41c06d315c3484e2$export$179ff9102702017e;
var $41c06d315c3484e2$export$5a72d4202df05eaf;
var $41c06d315c3484e2$export$4b8e25854c155c7c;
var $41c06d315c3484e2$export$694507dc48e0aff6;
var $41c06d315c3484e2$export$4b3d9a5bae55976;
"use strict";


var $3f91o = parcelRequire("3f91o");
const $41c06d315c3484e2$var$specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const $41c06d315c3484e2$var$failure = Symbol("failure");
function $41c06d315c3484e2$var$countSymbols(str) {
    return $16ESu$punycode.ucs2.decode(str).length;
}
function $41c06d315c3484e2$var$at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function $41c06d315c3484e2$var$isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function $41c06d315c3484e2$var$isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function $41c06d315c3484e2$var$isASCIIAlphanumeric(c) {
    return $41c06d315c3484e2$var$isASCIIAlpha(c) || $41c06d315c3484e2$var$isASCIIDigit(c);
}
function $41c06d315c3484e2$var$isASCIIHex(c) {
    return $41c06d315c3484e2$var$isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function $41c06d315c3484e2$var$isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function $41c06d315c3484e2$var$isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function $41c06d315c3484e2$var$isWindowsDriveLetterCodePoints(cp1, cp2) {
    return $41c06d315c3484e2$var$isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function $41c06d315c3484e2$var$isWindowsDriveLetterString(string) {
    return string.length === 2 && $41c06d315c3484e2$var$isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function $41c06d315c3484e2$var$isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && $41c06d315c3484e2$var$isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function $41c06d315c3484e2$var$containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function $41c06d315c3484e2$var$containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function $41c06d315c3484e2$var$isSpecialScheme(scheme) {
    return $41c06d315c3484e2$var$specialSchemes[scheme] !== undefined;
}
function $41c06d315c3484e2$var$isSpecial(url) {
    return $41c06d315c3484e2$var$isSpecialScheme(url.scheme);
}
function $41c06d315c3484e2$var$defaultPort(scheme) {
    return $41c06d315c3484e2$var$specialSchemes[scheme];
}
function $41c06d315c3484e2$var$percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) hex = "0" + hex;
    return "%" + hex;
}
function $41c06d315c3484e2$var$utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i)str += $41c06d315c3484e2$var$percentEncode(buf[i]);
    return str;
}
function $41c06d315c3484e2$var$utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) output.push(input[i]);
        else if (input[i] === 37 && $41c06d315c3484e2$var$isASCIIHex(input[i + 1]) && $41c06d315c3484e2$var$isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else output.push(input[i]);
    }
    return new Buffer(output).toString();
}
function $41c06d315c3484e2$var$isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const $41c06d315c3484e2$var$extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function $41c06d315c3484e2$var$isPathPercentEncode(c) {
    return $41c06d315c3484e2$var$isC0ControlPercentEncode(c) || $41c06d315c3484e2$var$extraPathPercentEncodeSet.has(c);
}
const $41c06d315c3484e2$var$extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function $41c06d315c3484e2$var$isUserinfoPercentEncode(c) {
    return $41c06d315c3484e2$var$isPathPercentEncode(c) || $41c06d315c3484e2$var$extraUserinfoPercentEncodeSet.has(c);
}
function $41c06d315c3484e2$var$percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) return $41c06d315c3484e2$var$utf8PercentEncode(cStr);
    return cStr;
}
function $41c06d315c3484e2$var$parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") return 0;
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) return $41c06d315c3484e2$var$failure;
    return parseInt(input, R);
}
function $41c06d315c3484e2$var$parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) parts.pop();
    }
    if (parts.length > 4) return input;
    const numbers = [];
    for (const part of parts){
        if (part === "") return input;
        const n = $41c06d315c3484e2$var$parseIPv4Number(part);
        if (n === $41c06d315c3484e2$var$failure) return input;
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) return $41c06d315c3484e2$var$failure;
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) return $41c06d315c3484e2$var$failure;
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function $41c06d315c3484e2$var$serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) output = "." + output;
        n = Math.floor(n / 256);
    }
    return output;
}
function $41c06d315c3484e2$var$parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = $16ESu$punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) return $41c06d315c3484e2$var$failure;
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) return $41c06d315c3484e2$var$failure;
        if (input[pointer] === 58) {
            if (compress !== null) return $41c06d315c3484e2$var$failure;
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && $41c06d315c3484e2$var$isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt($41c06d315c3484e2$var$at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) return $41c06d315c3484e2$var$failure;
            pointer -= length;
            if (pieceIndex > 6) return $41c06d315c3484e2$var$failure;
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) ++pointer;
                    else return $41c06d315c3484e2$var$failure;
                }
                if (!$41c06d315c3484e2$var$isASCIIDigit(input[pointer])) return $41c06d315c3484e2$var$failure;
                while($41c06d315c3484e2$var$isASCIIDigit(input[pointer])){
                    const number = parseInt($41c06d315c3484e2$var$at(input, pointer));
                    if (ipv4Piece === null) ipv4Piece = number;
                    else if (ipv4Piece === 0) return $41c06d315c3484e2$var$failure;
                    else ipv4Piece = ipv4Piece * 10 + number;
                    if (ipv4Piece > 255) return $41c06d315c3484e2$var$failure;
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) ++pieceIndex;
            }
            if (numbersSeen !== 4) return $41c06d315c3484e2$var$failure;
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) return $41c06d315c3484e2$var$failure;
        } else if (input[pointer] !== undefined) return $41c06d315c3484e2$var$failure;
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) return $41c06d315c3484e2$var$failure;
    return address;
}
function $41c06d315c3484e2$var$serializeIPv6(address) {
    let output = "";
    const seqResult = $41c06d315c3484e2$var$findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) continue;
        else if (ignore0) ignore0 = false;
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) output += ":";
    }
    return output;
}
function $41c06d315c3484e2$var$parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") return $41c06d315c3484e2$var$failure;
        return $41c06d315c3484e2$var$parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) return $41c06d315c3484e2$var$parseOpaqueHost(input);
    const domain = $41c06d315c3484e2$var$utf8PercentDecode(input);
    const asciiDomain = $3f91o.toASCII(domain, false, $3f91o.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) return $41c06d315c3484e2$var$failure;
    if ($41c06d315c3484e2$var$containsForbiddenHostCodePoint(asciiDomain)) return $41c06d315c3484e2$var$failure;
    const ipv4Host = $41c06d315c3484e2$var$parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === $41c06d315c3484e2$var$failure) return ipv4Host;
    return asciiDomain;
}
function $41c06d315c3484e2$var$parseOpaqueHost(input) {
    if ($41c06d315c3484e2$var$containsForbiddenHostCodePointExcludingPercent(input)) return $41c06d315c3484e2$var$failure;
    let output = "";
    const decoded = $16ESu$punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i)output += $41c06d315c3484e2$var$percentEncodeChar(decoded[i], $41c06d315c3484e2$var$isC0ControlPercentEncode);
    return output;
}
function $41c06d315c3484e2$var$findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i)if (arr[i] !== 0) {
        if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
        }
        currStart = null;
        currLen = 0;
    } else {
        if (currStart === null) currStart = i;
        ++currLen;
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function $41c06d315c3484e2$var$serializeHost(host) {
    if (typeof host === "number") return $41c06d315c3484e2$var$serializeIPv4(host);
    // IPv6 serializer
    if (host instanceof Array) return "[" + $41c06d315c3484e2$var$serializeIPv6(host) + "]";
    return host;
}
function $41c06d315c3484e2$var$trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function $41c06d315c3484e2$var$trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function $41c06d315c3484e2$var$shortenPath(url) {
    const path = url.path;
    if (path.length === 0) return;
    if (url.scheme === "file" && path.length === 1 && $41c06d315c3484e2$var$isNormalizedWindowsDriveLetter(path[0])) return;
    path.pop();
}
function $41c06d315c3484e2$var$includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function $41c06d315c3484e2$var$cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function $41c06d315c3484e2$var$isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function $41c06d315c3484e2$var$URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = $41c06d315c3484e2$var$trimControlChars(this.input);
        if (res !== this.input) this.parseError = true;
        this.input = res;
    }
    const res = $41c06d315c3484e2$var$trimTabAndNewline(this.input);
    if (res !== this.input) this.parseError = true;
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = $16ESu$punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) break; // terminate algorithm
        else if (ret === $41c06d315c3484e2$var$failure) {
            this.failure = true;
            break;
        }
    }
}
$41c06d315c3484e2$var$URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if ($41c06d315c3484e2$var$isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return $41c06d315c3484e2$var$failure;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if ($41c06d315c3484e2$var$isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) this.buffer += cStr.toLowerCase();
    else if (c === 58) {
        if (this.stateOverride) {
            if ($41c06d315c3484e2$var$isSpecial(this.url) && !$41c06d315c3484e2$var$isSpecialScheme(this.buffer)) return false;
            if (!$41c06d315c3484e2$var$isSpecial(this.url) && $41c06d315c3484e2$var$isSpecialScheme(this.buffer)) return false;
            if (($41c06d315c3484e2$var$includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") return false;
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) return false;
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) return false;
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) this.parseError = true;
            this.state = "file";
        } else if ($41c06d315c3484e2$var$isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) this.state = "special relative or authority";
        else if ($41c06d315c3484e2$var$isSpecial(this.url)) this.state = "special authority slashes";
        else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return $41c06d315c3484e2$var$failure;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) return $41c06d315c3484e2$var$failure;
    else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) this.state = "authority";
    else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) this.state = "relative slash";
    else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if ($41c06d315c3484e2$var$isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if ($41c06d315c3484e2$var$isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) this.parseError = true;
        this.state = "special authority ignore slashes";
    } else if (c === 47) this.state = "authority";
    else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else this.parseError = true;
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) this.buffer = "%40" + this.buffer;
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = $41c06d315c3484e2$var$countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = $41c06d315c3484e2$var$percentEncodeChar(codePoint, $41c06d315c3484e2$var$isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) this.url.password += encodedCodePoints;
            else this.url.username += encodedCodePoints;
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || $41c06d315c3484e2$var$isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return $41c06d315c3484e2$var$failure;
        }
        this.pointer -= $41c06d315c3484e2$var$countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else this.buffer += cStr;
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse hostname"] = $41c06d315c3484e2$var$URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return $41c06d315c3484e2$var$failure;
        }
        const host = $41c06d315c3484e2$var$parseHost(this.buffer, $41c06d315c3484e2$var$isSpecial(this.url));
        if (host === $41c06d315c3484e2$var$failure) return $41c06d315c3484e2$var$failure;
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") return false;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || $41c06d315c3484e2$var$isSpecial(this.url) && c === 92) {
        --this.pointer;
        if ($41c06d315c3484e2$var$isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return $41c06d315c3484e2$var$failure;
        } else if (this.stateOverride && this.buffer === "" && ($41c06d315c3484e2$var$includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = $41c06d315c3484e2$var$parseHost(this.buffer, $41c06d315c3484e2$var$isSpecial(this.url));
        if (host === $41c06d315c3484e2$var$failure) return $41c06d315c3484e2$var$failure;
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) return false;
    } else {
        if (c === 91) this.arrFlag = true;
        else if (c === 93) this.arrFlag = false;
        this.buffer += cStr;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if ($41c06d315c3484e2$var$isASCIIDigit(c)) this.buffer += cStr;
    else if (isNaN(c) || c === 47 || c === 63 || c === 35 || $41c06d315c3484e2$var$isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return $41c06d315c3484e2$var$failure;
            }
            this.url.port = port === $41c06d315c3484e2$var$defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) return false;
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return $41c06d315c3484e2$var$failure;
    }
    return true;
};
const $41c06d315c3484e2$var$fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
$41c06d315c3484e2$var$URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) this.parseError = true;
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !$41c06d315c3484e2$var$isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !$41c06d315c3484e2$var$fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                $41c06d315c3484e2$var$shortenPath(this.url);
            } else this.parseError = true;
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) this.parseError = true;
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if ($41c06d315c3484e2$var$isNormalizedWindowsDriveLetterString(this.base.path[0])) this.url.path.push(this.base.path[0]);
            else this.url.host = this.base.host;
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && $41c06d315c3484e2$var$isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) return false;
            this.state = "path start";
        } else {
            let host = $41c06d315c3484e2$var$parseHost(this.buffer, $41c06d315c3484e2$var$isSpecial(this.url));
            if (host === $41c06d315c3484e2$var$failure) return $41c06d315c3484e2$var$failure;
            if (host === "localhost") host = "";
            this.url.host = host;
            if (this.stateOverride) return false;
            this.buffer = "";
            this.state = "path start";
        }
    } else this.buffer += cStr;
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if ($41c06d315c3484e2$var$isSpecial(this.url)) {
        if (c === 92) this.parseError = true;
        this.state = "path";
        if (c !== 47 && c !== 92) --this.pointer;
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) --this.pointer;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || $41c06d315c3484e2$var$isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if ($41c06d315c3484e2$var$isSpecial(this.url) && c === 92) this.parseError = true;
        if ($41c06d315c3484e2$var$isDoubleDot(this.buffer)) {
            $41c06d315c3484e2$var$shortenPath(this.url);
            if (c !== 47 && !($41c06d315c3484e2$var$isSpecial(this.url) && c === 92)) this.url.path.push("");
        } else if ($41c06d315c3484e2$var$isSingleDot(this.buffer) && c !== 47 && !($41c06d315c3484e2$var$isSpecial(this.url) && c === 92)) this.url.path.push("");
        else if (!$41c06d315c3484e2$var$isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && $41c06d315c3484e2$var$isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) while(this.url.path.length > 1 && this.url.path[0] === ""){
            this.parseError = true;
            this.url.path.shift();
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 1]) || !$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 2]))) this.parseError = true;
        this.buffer += $41c06d315c3484e2$var$percentEncodeChar(c, $41c06d315c3484e2$var$isPathPercentEncode);
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) this.parseError = true;
        if (c === 37 && (!$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 1]) || !$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 2]))) this.parseError = true;
        if (!isNaN(c)) this.url.path[0] = this.url.path[0] + $41c06d315c3484e2$var$percentEncodeChar(c, $41c06d315c3484e2$var$isC0ControlPercentEncode);
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!$41c06d315c3484e2$var$isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") this.encodingOverride = "utf-8";
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i)if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) this.url.query += $41c06d315c3484e2$var$percentEncode(buffer[i]);
        else this.url.query += String.fromCodePoint(buffer[i]);
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 1]) || !$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 2]))) this.parseError = true;
        this.buffer += cStr;
    }
    return true;
};
$41c06d315c3484e2$var$URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) ;
    else if (c === 0x0) this.parseError = true;
    else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 1]) || !$41c06d315c3484e2$var$isASCIIHex(this.input[this.pointer + 2]))) this.parseError = true;
        this.url.fragment += $41c06d315c3484e2$var$percentEncodeChar(c, $41c06d315c3484e2$var$isC0ControlPercentEncode);
    }
    return true;
};
function $41c06d315c3484e2$var$serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") output += ":" + url.password;
            output += "@";
        }
        output += $41c06d315c3484e2$var$serializeHost(url.host);
        if (url.port !== null) output += ":" + url.port;
    } else if (url.host === null && url.scheme === "file") output += "//";
    if (url.cannotBeABaseURL) output += url.path[0];
    else for (const string of url.path)output += "/" + string;
    if (url.query !== null) output += "?" + url.query;
    if (!excludeFragment && url.fragment !== null) output += "#" + url.fragment;
    return output;
}
function $41c06d315c3484e2$var$serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += $41c06d315c3484e2$var$serializeHost(tuple.host);
    if (tuple.port !== null) result += ":" + tuple.port;
    return result;
}
$41c06d315c3484e2$export$22c26650625a03dd = $41c06d315c3484e2$var$serializeURL;
$41c06d315c3484e2$export$2e7f7e38cf280175 = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return $41c06d315c3484e2$export$2e7f7e38cf280175($41c06d315c3484e2$export$4b3d9a5bae55976(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return $41c06d315c3484e2$var$serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
$41c06d315c3484e2$export$49426ae341001e98 = function(input, options) {
    if (options === undefined) options = {};
    const usm = new $41c06d315c3484e2$var$URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) return "failure";
    return usm.url;
};
$41c06d315c3484e2$export$9f0084801ea6f73 = function(url, username) {
    url.username = "";
    const decoded = $16ESu$punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i)url.username += $41c06d315c3484e2$var$percentEncodeChar(decoded[i], $41c06d315c3484e2$var$isUserinfoPercentEncode);
};
$41c06d315c3484e2$export$179ff9102702017e = function(url, password) {
    url.password = "";
    const decoded = $16ESu$punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i)url.password += $41c06d315c3484e2$var$percentEncodeChar(decoded[i], $41c06d315c3484e2$var$isUserinfoPercentEncode);
};
$41c06d315c3484e2$export$5a72d4202df05eaf = $41c06d315c3484e2$var$serializeHost;
$41c06d315c3484e2$export$4b8e25854c155c7c = $41c06d315c3484e2$var$cannotHaveAUsernamePasswordPort;
$41c06d315c3484e2$export$694507dc48e0aff6 = function(integer) {
    return String(integer);
};
$41c06d315c3484e2$export$4b3d9a5bae55976 = function(input, options) {
    if (options === undefined) options = {};
    // We don't handle blobs, so this just delegates:
    return $41c06d315c3484e2$export$49426ae341001e98(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};

});
parcelRegister("3f91o", function(module, exports) {
module.exports = new URL("tr46.024edea7.js", "file:" + __filename).toString();

});



//# sourceMappingURL=url-state-machine.521448a0.js.map
