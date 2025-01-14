require("./symbols.be9b962d.js");
require("./util.1c38d6ed.js");
require("./webidl.35d389df.js");
require("./dataURL.a565585e.js");
require("./util.26715e80.js");
var $3TKNZ$buffer = require("buffer");
var $3TKNZ$util = require("util");


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
parcelRegister("iEva8", function(module, exports) {
'use strict';

var $d94422a9066636ac$require$Blob = $3TKNZ$buffer.Blob;
var $d94422a9066636ac$require$NativeFile = $3TKNZ$buffer.File;

var $d94422a9066636ac$require$types = $3TKNZ$util.types;

var $gP2yv = parcelRequire("gP2yv");
var $d94422a9066636ac$require$kState = $gP2yv.kState;

var $8S4OX = parcelRequire("8S4OX");
var $d94422a9066636ac$require$isBlobLike = $8S4OX.isBlobLike;

var $5tzhS = parcelRequire("5tzhS");
var $d94422a9066636ac$require$webidl = $5tzhS.webidl;

var $14d6i = parcelRequire("14d6i");
var $d94422a9066636ac$require$parseMIMEType = $14d6i.parseMIMEType;
var $d94422a9066636ac$require$serializeAMimeType = $14d6i.serializeAMimeType;

var $1Z05w = parcelRequire("1Z05w");
var $d94422a9066636ac$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;
const $d94422a9066636ac$var$encoder = new TextEncoder();
class $d94422a9066636ac$var$File extends $d94422a9066636ac$require$Blob {
    constructor(fileBits, fileName, options = {}){
        // The File constructor is invoked with two or three parameters, depending
        // on whether the optional dictionary parameter is used. When the File()
        // constructor is invoked, user agents must run the following steps:
        $d94422a9066636ac$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'File constructor'
        });
        fileBits = $d94422a9066636ac$require$webidl.converters['sequence<BlobPart>'](fileBits);
        fileName = $d94422a9066636ac$require$webidl.converters.USVString(fileName);
        options = $d94422a9066636ac$require$webidl.converters.FilePropertyBag(options);
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
                t = $d94422a9066636ac$require$parseMIMEType(t);
                if (t === 'failure') {
                    t = '';
                    break substep;
                }
                t = $d94422a9066636ac$require$serializeAMimeType(t).toLowerCase();
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
        super($d94422a9066636ac$var$processBlobParts(fileBits, options), {
            type: t
        });
        this[$d94422a9066636ac$require$kState] = {
            name: n,
            lastModified: d,
            type: t
        };
    }
    get name() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$File);
        return this[$d94422a9066636ac$require$kState].name;
    }
    get lastModified() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$File);
        return this[$d94422a9066636ac$require$kState].lastModified;
    }
    get type() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$File);
        return this[$d94422a9066636ac$require$kState].type;
    }
}
class $d94422a9066636ac$var$FileLike {
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
        this[$d94422a9066636ac$require$kState] = {
            blobLike: blobLike,
            name: n,
            type: t,
            lastModified: d
        };
    }
    stream(...args) {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.stream(...args);
    }
    arrayBuffer(...args) {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.arrayBuffer(...args);
    }
    slice(...args) {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.slice(...args);
    }
    text(...args) {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.text(...args);
    }
    get size() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.size;
    }
    get type() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].blobLike.type;
    }
    get name() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].name;
    }
    get lastModified() {
        $d94422a9066636ac$require$webidl.brandCheck(this, $d94422a9066636ac$var$FileLike);
        return this[$d94422a9066636ac$require$kState].lastModified;
    }
    get [Symbol.toStringTag]() {
        return 'File';
    }
}
Object.defineProperties($d94422a9066636ac$var$File.prototype, {
    [Symbol.toStringTag]: {
        value: 'File',
        configurable: true
    },
    name: $d94422a9066636ac$require$kEnumerableProperty,
    lastModified: $d94422a9066636ac$require$kEnumerableProperty
});
$d94422a9066636ac$require$webidl.converters.Blob = $d94422a9066636ac$require$webidl.interfaceConverter($d94422a9066636ac$require$Blob);
$d94422a9066636ac$require$webidl.converters.BlobPart = function(V, opts) {
    if ($d94422a9066636ac$require$webidl.util.Type(V) === 'Object') {
        if ($d94422a9066636ac$require$isBlobLike(V)) return $d94422a9066636ac$require$webidl.converters.Blob(V, {
            strict: false
        });
        if (ArrayBuffer.isView(V) || $d94422a9066636ac$require$types.isAnyArrayBuffer(V)) return $d94422a9066636ac$require$webidl.converters.BufferSource(V, opts);
    }
    return $d94422a9066636ac$require$webidl.converters.USVString(V, opts);
};
$d94422a9066636ac$require$webidl.converters['sequence<BlobPart>'] = $d94422a9066636ac$require$webidl.sequenceConverter($d94422a9066636ac$require$webidl.converters.BlobPart);
// https://www.w3.org/TR/FileAPI/#dfn-FilePropertyBag
$d94422a9066636ac$require$webidl.converters.FilePropertyBag = $d94422a9066636ac$require$webidl.dictionaryConverter([
    {
        key: 'lastModified',
        converter: $d94422a9066636ac$require$webidl.converters['long long'],
        get defaultValue () {
            return Date.now();
        }
    },
    {
        key: 'type',
        converter: $d94422a9066636ac$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'endings',
        converter: (value)=>{
            value = $d94422a9066636ac$require$webidl.converters.DOMString(value);
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
 */ function $d94422a9066636ac$var$processBlobParts(parts, options) {
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
            if (options.endings === 'native') s = $d94422a9066636ac$var$convertLineEndingsNative(s);
            // 3. Append the result of UTF-8 encoding s to bytes.
            bytes.push($d94422a9066636ac$var$encoder.encode(s));
        } else if ($d94422a9066636ac$require$types.isAnyArrayBuffer(element) || $d94422a9066636ac$require$types.isTypedArray(element)) {
            // 2. If element is a BufferSource, get a copy of the
            //    bytes held by the buffer source, and append those
            //    bytes to bytes.
            if (!element.buffer) bytes.push(new Uint8Array(element));
            else bytes.push(new Uint8Array(element.buffer, element.byteOffset, element.byteLength));
        } else if ($d94422a9066636ac$require$isBlobLike(element)) // 3. If element is a Blob, append the bytes it represents
        //    to bytes.
        bytes.push(element);
    }
    // 3. Return bytes.
    return bytes;
}
/**
 * @see https://www.w3.org/TR/FileAPI/#convert-line-endings-to-native
 * @param {string} s
 */ function $d94422a9066636ac$var$convertLineEndingsNative(s) {
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
function $d94422a9066636ac$var$isFileLike(object) {
    return $d94422a9066636ac$require$NativeFile && object instanceof $d94422a9066636ac$require$NativeFile || object instanceof $d94422a9066636ac$var$File || object && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && object[Symbol.toStringTag] === 'File';
}
module.exports = {
    File: $d94422a9066636ac$var$File,
    FileLike: $d94422a9066636ac$var$FileLike,
    isFileLike: $d94422a9066636ac$var$isFileLike
};

});
parcelRegister("5tzhS", function(module, exports) {
module.exports = new URL("webidl.35d389df.js", "file:" + __filename).toString();

});

parcelRegister("14d6i", function(module, exports) {
module.exports = new URL("dataURL.a565585e.js", "file:" + __filename).toString();

});



//# sourceMappingURL=file.7f783dcd.js.map
