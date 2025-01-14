require("./util.1c38d6ed.js");
require("./symbols.be9b962d.js");
require("./file.7f783dcd.js");
require("./webidl.35d389df.js");
var $lwqM2$buffer = require("buffer");


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
parcelRegister("7F5Ft", function(module, exports) {
'use strict';

var $8S4OX = parcelRequire("8S4OX");
var $5940c248688e6248$require$isBlobLike = $8S4OX.isBlobLike;
var $5940c248688e6248$require$toUSVString = $8S4OX.toUSVString;
var $5940c248688e6248$require$makeIterator = $8S4OX.makeIterator;

var $jgO9I = parcelRequire("jgO9I");
var $5940c248688e6248$require$kState = $jgO9I.kState;

var $338fD = parcelRequire("338fD");
var $5940c248688e6248$require$UndiciFile = $338fD.File;
var $5940c248688e6248$require$FileLike = $338fD.FileLike;
var $5940c248688e6248$require$isFileLike = $338fD.isFileLike;

var $iPB2Q = parcelRequire("iPB2Q");
var $5940c248688e6248$require$webidl = $iPB2Q.webidl;

var $5940c248688e6248$require$Blob = $lwqM2$buffer.Blob;
var $5940c248688e6248$require$NativeFile = $lwqM2$buffer.File;
/** @type {globalThis['File']} */ const $5940c248688e6248$var$File = $5940c248688e6248$require$NativeFile ?? $5940c248688e6248$require$UndiciFile;
// https://xhr.spec.whatwg.org/#formdata
class $5940c248688e6248$var$FormData {
    constructor(form){
        if (form !== undefined) throw $5940c248688e6248$require$webidl.errors.conversionFailed({
            prefix: 'FormData constructor',
            argument: 'Argument 1',
            types: [
                'undefined'
            ]
        });
        this[$5940c248688e6248$require$kState] = [];
    }
    append(name, value, filename) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'FormData.append'
        });
        if (arguments.length === 3 && !$5940c248688e6248$require$isBlobLike(value)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        // 1. Let value be value if given; otherwise blobValue.
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        value = $5940c248688e6248$require$isBlobLike(value) ? $5940c248688e6248$require$webidl.converters.Blob(value, {
            strict: false
        }) : $5940c248688e6248$require$webidl.converters.USVString(value);
        filename = arguments.length === 3 ? $5940c248688e6248$require$webidl.converters.USVString(filename) : undefined;
        // 2. Let entry be the result of creating an entry with
        // name, value, and filename if given.
        const entry = $5940c248688e6248$var$makeEntry(name, value, filename);
        // 3. Append entry to this’s entry list.
        this[$5940c248688e6248$require$kState].push(entry);
    }
    delete(name) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.delete'
        });
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        // The delete(name) method steps are to remove all entries whose name
        // is name from this’s entry list.
        this[$5940c248688e6248$require$kState] = this[$5940c248688e6248$require$kState].filter((entry)=>entry.name !== name);
    }
    get(name) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.get'
        });
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return null.
        const idx = this[$5940c248688e6248$require$kState].findIndex((entry)=>entry.name === name);
        if (idx === -1) return null;
        // 2. Return the value of the first entry whose name is name from
        // this’s entry list.
        return this[$5940c248688e6248$require$kState][idx].value;
    }
    getAll(name) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.getAll'
        });
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return the empty list.
        // 2. Return the values of all entries whose name is name, in order,
        // from this’s entry list.
        return this[$5940c248688e6248$require$kState].filter((entry)=>entry.name === name).map((entry)=>entry.value);
    }
    has(name) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.has'
        });
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        // The has(name) method steps are to return true if there is an entry
        // whose name is name in this’s entry list; otherwise false.
        return this[$5940c248688e6248$require$kState].findIndex((entry)=>entry.name === name) !== -1;
    }
    set(name, value, filename) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'FormData.set'
        });
        if (arguments.length === 3 && !$5940c248688e6248$require$isBlobLike(value)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        // The set(name, value) and set(name, blobValue, filename) method steps
        // are:
        // 1. Let value be value if given; otherwise blobValue.
        name = $5940c248688e6248$require$webidl.converters.USVString(name);
        value = $5940c248688e6248$require$isBlobLike(value) ? $5940c248688e6248$require$webidl.converters.Blob(value, {
            strict: false
        }) : $5940c248688e6248$require$webidl.converters.USVString(value);
        filename = arguments.length === 3 ? $5940c248688e6248$require$toUSVString(filename) : undefined;
        // 2. Let entry be the result of creating an entry with name, value, and
        // filename if given.
        const entry = $5940c248688e6248$var$makeEntry(name, value, filename);
        // 3. If there are entries in this’s entry list whose name is name, then
        // replace the first such entry with entry and remove the others.
        const idx = this[$5940c248688e6248$require$kState].findIndex((entry)=>entry.name === name);
        if (idx !== -1) this[$5940c248688e6248$require$kState] = [
            ...this[$5940c248688e6248$require$kState].slice(0, idx),
            entry,
            ...this[$5940c248688e6248$require$kState].slice(idx + 1).filter((entry)=>entry.name !== name)
        ];
        else // 4. Otherwise, append entry to this’s entry list.
        this[$5940c248688e6248$require$kState].push(entry);
    }
    entries() {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        return $5940c248688e6248$require$makeIterator(()=>this[$5940c248688e6248$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'key+value');
    }
    keys() {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        return $5940c248688e6248$require$makeIterator(()=>this[$5940c248688e6248$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'key');
    }
    values() {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        return $5940c248688e6248$require$makeIterator(()=>this[$5940c248688e6248$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'value');
    }
    /**
   * @param {(value: string, key: string, self: FormData) => void} callbackFn
   * @param {unknown} thisArg
   */ forEach(callbackFn, thisArg = globalThis) {
        $5940c248688e6248$require$webidl.brandCheck(this, $5940c248688e6248$var$FormData);
        $5940c248688e6248$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.forEach'
        });
        if (typeof callbackFn !== 'function') throw new TypeError("Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'.");
        for (const [key, value] of this)callbackFn.apply(thisArg, [
            value,
            key,
            this
        ]);
    }
}
$5940c248688e6248$var$FormData.prototype[Symbol.iterator] = $5940c248688e6248$var$FormData.prototype.entries;
Object.defineProperties($5940c248688e6248$var$FormData.prototype, {
    [Symbol.toStringTag]: {
        value: 'FormData',
        configurable: true
    }
});
/**
 * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#create-an-entry
 * @param {string} name
 * @param {string|Blob} value
 * @param {?string} filename
 * @returns
 */ function $5940c248688e6248$var$makeEntry(name, value, filename) {
    // 1. Set name to the result of converting name into a scalar value string.
    // "To convert a string into a scalar value string, replace any surrogates
    //  with U+FFFD."
    // see: https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html#buftostringencoding-start-end
    name = Buffer.from(name).toString('utf8');
    // 2. If value is a string, then set value to the result of converting
    //    value into a scalar value string.
    if (typeof value === 'string') value = Buffer.from(value).toString('utf8');
    else {
        // 3. Otherwise:
        // 1. If value is not a File object, then set value to a new File object,
        //    representing the same bytes, whose name attribute value is "blob"
        if (!$5940c248688e6248$require$isFileLike(value)) value = value instanceof $5940c248688e6248$require$Blob ? new $5940c248688e6248$var$File([
            value
        ], 'blob', {
            type: value.type
        }) : new $5940c248688e6248$require$FileLike(value, 'blob', {
            type: value.type
        });
        // 2. If filename is given, then set value to a new File object,
        //    representing the same bytes, whose name attribute is filename.
        if (filename !== undefined) {
            /** @type {FilePropertyBag} */ const options = {
                type: value.type,
                lastModified: value.lastModified
            };
            value = $5940c248688e6248$require$NativeFile && value instanceof $5940c248688e6248$require$NativeFile || value instanceof $5940c248688e6248$require$UndiciFile ? new $5940c248688e6248$var$File([
                value
            ], filename, options) : new $5940c248688e6248$require$FileLike(value, filename, options);
        }
    }
    // 4. Return an entry whose name is name and whose value is value.
    return {
        name: name,
        value: value
    };
}
module.exports = {
    FormData: $5940c248688e6248$var$FormData
};

});
parcelRegister("jgO9I", function(module, exports) {
module.exports = new URL("symbols.be9b962d.js", "file:" + __filename).toString();

});

parcelRegister("338fD", function(module, exports) {
module.exports = new URL("file.7f783dcd.js", "file:" + __filename).toString();

});



//# sourceMappingURL=formdata.1236317b.js.map
