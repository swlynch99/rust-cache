require("./symbols.71ce8940.js");
require("./util.2100f7c8.js");
require("./webidl.107e124b.js");
require("./dataURL.134f460a.js");
require("./util.c7a5ec55.js");
var $95eMo$buffer = require("buffer");
var $95eMo$util = require("util");


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
parcelRegister("eH7kt", function(module, exports) {
'use strict';

var $ab2ac4440b293f64$require$Blob = $95eMo$buffer.Blob;
var $ab2ac4440b293f64$require$NativeFile = $95eMo$buffer.File;

var $ab2ac4440b293f64$require$types = $95eMo$util.types;

var $3isYS = parcelRequire("3isYS");
var $ab2ac4440b293f64$require$kState = $3isYS.kState;

var $eXsCL = parcelRequire("eXsCL");
var $ab2ac4440b293f64$require$isBlobLike = $eXsCL.isBlobLike;

var $ahzbf = parcelRequire("ahzbf");
var $ab2ac4440b293f64$require$webidl = $ahzbf.webidl;

var $fgYMM = parcelRequire("fgYMM");
var $ab2ac4440b293f64$require$parseMIMEType = $fgYMM.parseMIMEType;
var $ab2ac4440b293f64$require$serializeAMimeType = $fgYMM.serializeAMimeType;

var $iiSZx = parcelRequire("iiSZx");
var $ab2ac4440b293f64$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;
const $ab2ac4440b293f64$var$encoder = new TextEncoder();
class $ab2ac4440b293f64$var$File extends $ab2ac4440b293f64$require$Blob {
    constructor(fileBits, fileName, options = {}){
        // The File constructor is invoked with two or three parameters, depending
        // on whether the optional dictionary parameter is used. When the File()
        // constructor is invoked, user agents must run the following steps:
        $ab2ac4440b293f64$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'File constructor'
        });
        fileBits = $ab2ac4440b293f64$require$webidl.converters['sequence<BlobPart>'](fileBits);
        fileName = $ab2ac4440b293f64$require$webidl.converters.USVString(fileName);
        options = $ab2ac4440b293f64$require$webidl.converters.FilePropertyBag(options);
        // 1. Let bytes be the result of processing blob parts given fileBits and
        // options.
        // Note: Blob handles this for us
        // 2. Let n be the fileName argument to the constructor.
        const n = fileName;
        // 3. Process FilePropertyBag dictionary argument by running the following
        // substeps:
        //    1. If the type member is provided and is not the empty string, let t
        //    be set to the type dictionary member. If t contains any characters
        //    outside the range U+0020 to U+007E, then set t to the empty string
        //    and return from these substeps.
        //    2. Convert every character in t to ASCII lowercase.
        let t = options.type;
        let d;
        // eslint-disable-next-line no-labels
        substep: {
            if (t) {
                t = $ab2ac4440b293f64$require$parseMIMEType(t);
                if (t === 'failure') {
                    t = '';
                    break substep;
                }
                t = $ab2ac4440b293f64$require$serializeAMimeType(t).toLowerCase();
            }
            //    3. If the lastModified member is provided, let d be set to the
            //    lastModified dictionary member. If it is not provided, set d to the
            //    current date and time represented as the number of milliseconds since
            //    the Unix Epoch (which is the equivalent of Date.now() [ECMA-262]).
            d = options.lastModified;
        }
        // 4. Return a new File object F such that:
        // F refers to the bytes byte sequence.
        // F.size is set to the number of total bytes in bytes.
        // F.name is set to n.
        // F.type is set to t.
        // F.lastModified is set to d.
        super($ab2ac4440b293f64$var$processBlobParts(fileBits, options), {
            type: t
        });
        this[$ab2ac4440b293f64$require$kState] = {
            name: n,
            lastModified: d,
            type: t
        };
    }
    get name() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$File);
        return this[$ab2ac4440b293f64$require$kState].name;
    }
    get lastModified() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$File);
        return this[$ab2ac4440b293f64$require$kState].lastModified;
    }
    get type() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$File);
        return this[$ab2ac4440b293f64$require$kState].type;
    }
}
class $ab2ac4440b293f64$var$FileLike {
    constructor(blobLike, fileName, options = {}){
        // TODO: argument idl type check
        // The File constructor is invoked with two or three parameters, depending
        // on whether the optional dictionary parameter is used. When the File()
        // constructor is invoked, user agents must run the following steps:
        // 1. Let bytes be the result of processing blob parts given fileBits and
        // options.
        // 2. Let n be the fileName argument to the constructor.
        const n = fileName;
        // 3. Process FilePropertyBag dictionary argument by running the following
        // substeps:
        //    1. If the type member is provided and is not the empty string, let t
        //    be set to the type dictionary member. If t contains any characters
        //    outside the range U+0020 to U+007E, then set t to the empty string
        //    and return from these substeps.
        //    TODO
        const t = options.type;
        //    2. Convert every character in t to ASCII lowercase.
        //    TODO
        //    3. If the lastModified member is provided, let d be set to the
        //    lastModified dictionary member. If it is not provided, set d to the
        //    current date and time represented as the number of milliseconds since
        //    the Unix Epoch (which is the equivalent of Date.now() [ECMA-262]).
        const d = options.lastModified ?? Date.now();
        // 4. Return a new File object F such that:
        // F refers to the bytes byte sequence.
        // F.size is set to the number of total bytes in bytes.
        // F.name is set to n.
        // F.type is set to t.
        // F.lastModified is set to d.
        this[$ab2ac4440b293f64$require$kState] = {
            blobLike: blobLike,
            name: n,
            type: t,
            lastModified: d
        };
    }
    stream(...args) {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.stream(...args);
    }
    arrayBuffer(...args) {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.arrayBuffer(...args);
    }
    slice(...args) {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.slice(...args);
    }
    text(...args) {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.text(...args);
    }
    get size() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.size;
    }
    get type() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].blobLike.type;
    }
    get name() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].name;
    }
    get lastModified() {
        $ab2ac4440b293f64$require$webidl.brandCheck(this, $ab2ac4440b293f64$var$FileLike);
        return this[$ab2ac4440b293f64$require$kState].lastModified;
    }
    get [Symbol.toStringTag]() {
        return 'File';
    }
}
Object.defineProperties($ab2ac4440b293f64$var$File.prototype, {
    [Symbol.toStringTag]: {
        value: 'File',
        configurable: true
    },
    name: $ab2ac4440b293f64$require$kEnumerableProperty,
    lastModified: $ab2ac4440b293f64$require$kEnumerableProperty
});
$ab2ac4440b293f64$require$webidl.converters.Blob = $ab2ac4440b293f64$require$webidl.interfaceConverter($ab2ac4440b293f64$require$Blob);
$ab2ac4440b293f64$require$webidl.converters.BlobPart = function(V, opts) {
    if ($ab2ac4440b293f64$require$webidl.util.Type(V) === 'Object') {
        if ($ab2ac4440b293f64$require$isBlobLike(V)) return $ab2ac4440b293f64$require$webidl.converters.Blob(V, {
            strict: false
        });
        if (ArrayBuffer.isView(V) || $ab2ac4440b293f64$require$types.isAnyArrayBuffer(V)) return $ab2ac4440b293f64$require$webidl.converters.BufferSource(V, opts);
    }
    return $ab2ac4440b293f64$require$webidl.converters.USVString(V, opts);
};
$ab2ac4440b293f64$require$webidl.converters['sequence<BlobPart>'] = $ab2ac4440b293f64$require$webidl.sequenceConverter($ab2ac4440b293f64$require$webidl.converters.BlobPart);
// https://www.w3.org/TR/FileAPI/#dfn-FilePropertyBag
$ab2ac4440b293f64$require$webidl.converters.FilePropertyBag = $ab2ac4440b293f64$require$webidl.dictionaryConverter([
    {
        key: 'lastModified',
        converter: $ab2ac4440b293f64$require$webidl.converters['long long'],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: 'type',
        converter: $ab2ac4440b293f64$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'endings',
        converter: (value)=>{
            value = $ab2ac4440b293f64$require$webidl.converters.DOMString(value);
            value = value.toLowerCase();
            if (value !== 'native') value = 'transparent';
            return value;
        },
        defaultValue: 'transparent'
    }
]);
/**
 * @see https://www.w3.org/TR/FileAPI/#process-blob-parts
 * @param {(NodeJS.TypedArray|Blob|string)[]} parts
 * @param {{ type: string, endings: string }} options
 */ function $ab2ac4440b293f64$var$processBlobParts(parts, options) {
    // 1. Let bytes be an empty sequence of bytes.
    /** @type {NodeJS.TypedArray[]} */ const bytes = [];
    // 2. For each element in parts:
    for (const element of parts){
        // 1. If element is a USVString, run the following substeps:
        if (typeof element === 'string') {
            // 1. Let s be element.
            let s = element;
            // 2. If the endings member of options is "native", set s
            //    to the result of converting line endings to native
            //    of element.
            if (options.endings === 'native') s = $ab2ac4440b293f64$var$convertLineEndingsNative(s);
            // 3. Append the result of UTF-8 encoding s to bytes.
            bytes.push($ab2ac4440b293f64$var$encoder.encode(s));
        } else if ($ab2ac4440b293f64$require$types.isAnyArrayBuffer(element) || $ab2ac4440b293f64$require$types.isTypedArray(element)) {
            // 2. If element is a BufferSource, get a copy of the
            //    bytes held by the buffer source, and append those
            //    bytes to bytes.
            if (!element.buffer) bytes.push(new Uint8Array(element));
            else bytes.push(new Uint8Array(element.buffer, element.byteOffset, element.byteLength));
        } else if ($ab2ac4440b293f64$require$isBlobLike(element)) // 3. If element is a Blob, append the bytes it represents
        //    to bytes.
        bytes.push(element);
    }
    // 3. Return bytes.
    return bytes;
}
/**
 * @see https://www.w3.org/TR/FileAPI/#convert-line-endings-to-native
 * @param {string} s
 */ function $ab2ac4440b293f64$var$convertLineEndingsNative(s) {
    // 1. Let native line ending be be the code point U+000A LF.
    let nativeLineEnding = '\n';
    // 2. If the underlying platform’s conventions are to
    //    represent newlines as a carriage return and line feed
    //    sequence, set native line ending to the code point
    //    U+000D CR followed by the code point U+000A LF.
    if (process.platform === 'win32') nativeLineEnding = '\r\n';
    return s.replace(/\r?\n/g, nativeLineEnding);
}
// If this function is moved to ./util.js, some tools (such as
// rollup) will warn about circular dependencies. See:
// https://github.com/nodejs/undici/issues/1629
function $ab2ac4440b293f64$var$isFileLike(object) {
    return $ab2ac4440b293f64$require$NativeFile && object instanceof $ab2ac4440b293f64$require$NativeFile || object instanceof $ab2ac4440b293f64$var$File || object && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && object[Symbol.toStringTag] === 'File';
}
module.exports = {
    File: $ab2ac4440b293f64$var$File,
    FileLike: $ab2ac4440b293f64$var$FileLike,
    isFileLike: $ab2ac4440b293f64$var$isFileLike
};

});
parcelRegister("ahzbf", function(module, exports) {
module.exports = new URL("webidl.107e124b.js", "file:" + __filename).toString();

});

parcelRegister("fgYMM", function(module, exports) {
module.exports = new URL("dataURL.134f460a.js", "file:" + __filename).toString();

});



