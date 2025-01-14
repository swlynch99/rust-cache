require("./util.2100f7c8.js");
require("./symbols.71ce8940.js");
require("./file.19f8e03c.js");
require("./webidl.107e124b.js");
var $j7pYA$buffer = require("buffer");


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
parcelRegister("3vA63", function(module, exports) {
'use strict';

var $eXsCL = parcelRequire("eXsCL");
var $28e044672cefb76f$require$isBlobLike = $eXsCL.isBlobLike;
var $28e044672cefb76f$require$toUSVString = $eXsCL.toUSVString;
var $28e044672cefb76f$require$makeIterator = $eXsCL.makeIterator;

var $kYcuw = parcelRequire("kYcuw");
var $28e044672cefb76f$require$kState = $kYcuw.kState;

var $gT9hf = parcelRequire("gT9hf");
var $28e044672cefb76f$require$UndiciFile = $gT9hf.File;
var $28e044672cefb76f$require$FileLike = $gT9hf.FileLike;
var $28e044672cefb76f$require$isFileLike = $gT9hf.isFileLike;

var $cpX4f = parcelRequire("cpX4f");
var $28e044672cefb76f$require$webidl = $cpX4f.webidl;

var $28e044672cefb76f$require$Blob = $j7pYA$buffer.Blob;
var $28e044672cefb76f$require$NativeFile = $j7pYA$buffer.File;
/** @type {globalThis['File']} */ const $28e044672cefb76f$var$File = $28e044672cefb76f$require$NativeFile ?? $28e044672cefb76f$require$UndiciFile;
// https://xhr.spec.whatwg.org/#formdata
class $28e044672cefb76f$var$FormData {
    constructor(form){
        if (form !== undefined) throw $28e044672cefb76f$require$webidl.errors.conversionFailed({
            prefix: 'FormData constructor',
            argument: 'Argument 1',
            types: [
                'undefined'
            ]
        });
        this[$28e044672cefb76f$require$kState] = [];
    }
    append(name, value, filename) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'FormData.append'
        });
        if (arguments.length === 3 && !$28e044672cefb76f$require$isBlobLike(value)) throw new TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
        // 1. Let value be value if given; otherwise blobValue.
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        value = $28e044672cefb76f$require$isBlobLike(value) ? $28e044672cefb76f$require$webidl.converters.Blob(value, {
            strict: false
        }) : $28e044672cefb76f$require$webidl.converters.USVString(value);
        filename = arguments.length === 3 ? $28e044672cefb76f$require$webidl.converters.USVString(filename) : undefined;
        // 2. Let entry be the result of creating an entry with
        // name, value, and filename if given.
        const entry = $28e044672cefb76f$var$makeEntry(name, value, filename);
        // 3. Append entry to this’s entry list.
        this[$28e044672cefb76f$require$kState].push(entry);
    }
    delete(name) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.delete'
        });
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        // The delete(name) method steps are to remove all entries whose name
        // is name from this’s entry list.
        this[$28e044672cefb76f$require$kState] = this[$28e044672cefb76f$require$kState].filter((entry)=>entry.name !== name);
    }
    get(name) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.get'
        });
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return null.
        const idx = this[$28e044672cefb76f$require$kState].findIndex((entry)=>entry.name === name);
        if (idx === -1) return null;
        // 2. Return the value of the first entry whose name is name from
        // this’s entry list.
        return this[$28e044672cefb76f$require$kState][idx].value;
    }
    getAll(name) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.getAll'
        });
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return the empty list.
        // 2. Return the values of all entries whose name is name, in order,
        // from this’s entry list.
        return this[$28e044672cefb76f$require$kState].filter((entry)=>entry.name === name).map((entry)=>entry.value);
    }
    has(name) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FormData.has'
        });
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        // The has(name) method steps are to return true if there is an entry
        // whose name is name in this’s entry list; otherwise false.
        return this[$28e044672cefb76f$require$kState].findIndex((entry)=>entry.name === name) !== -1;
    }
    set(name, value, filename) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'FormData.set'
        });
        if (arguments.length === 3 && !$28e044672cefb76f$require$isBlobLike(value)) throw new TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
        // The set(name, value) and set(name, blobValue, filename) method steps
        // are:
        // 1. Let value be value if given; otherwise blobValue.
        name = $28e044672cefb76f$require$webidl.converters.USVString(name);
        value = $28e044672cefb76f$require$isBlobLike(value) ? $28e044672cefb76f$require$webidl.converters.Blob(value, {
            strict: false
        }) : $28e044672cefb76f$require$webidl.converters.USVString(value);
        filename = arguments.length === 3 ? $28e044672cefb76f$require$toUSVString(filename) : undefined;
        // 2. Let entry be the result of creating an entry with name, value, and
        // filename if given.
        const entry = $28e044672cefb76f$var$makeEntry(name, value, filename);
        // 3. If there are entries in this’s entry list whose name is name, then
        // replace the first such entry with entry and remove the others.
        const idx = this[$28e044672cefb76f$require$kState].findIndex((entry)=>entry.name === name);
        if (idx !== -1) this[$28e044672cefb76f$require$kState] = [
            ...this[$28e044672cefb76f$require$kState].slice(0, idx),
            entry,
            ...this[$28e044672cefb76f$require$kState].slice(idx + 1).filter((entry)=>entry.name !== name)
        ];
        else // 4. Otherwise, append entry to this’s entry list.
        this[$28e044672cefb76f$require$kState].push(entry);
    }
    entries() {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        return $28e044672cefb76f$require$makeIterator(()=>this[$28e044672cefb76f$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'key+value');
    }
    keys() {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        return $28e044672cefb76f$require$makeIterator(()=>this[$28e044672cefb76f$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'key');
    }
    values() {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        return $28e044672cefb76f$require$makeIterator(()=>this[$28e044672cefb76f$require$kState].map((pair)=>[
                    pair.name,
                    pair.value
                ]), 'FormData', 'value');
    }
    /**
   * @param {(value: string, key: string, self: FormData) => void} callbackFn
   * @param {unknown} thisArg
   */ forEach(callbackFn, thisArg = globalThis) {
        $28e044672cefb76f$require$webidl.brandCheck(this, $28e044672cefb76f$var$FormData);
        $28e044672cefb76f$require$webidl.argumentLengthCheck(arguments, 1, {
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
$28e044672cefb76f$var$FormData.prototype[Symbol.iterator] = $28e044672cefb76f$var$FormData.prototype.entries;
Object.defineProperties($28e044672cefb76f$var$FormData.prototype, {
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
 */ function $28e044672cefb76f$var$makeEntry(name, value, filename) {
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
        if (!$28e044672cefb76f$require$isFileLike(value)) value = value instanceof $28e044672cefb76f$require$Blob ? new $28e044672cefb76f$var$File([
            value
        ], 'blob', {
            type: value.type
        }) : new $28e044672cefb76f$require$FileLike(value, 'blob', {
            type: value.type
        });
        // 2. If filename is given, then set value to a new File object,
        //    representing the same bytes, whose name attribute is filename.
        if (filename !== undefined) {
            /** @type {FilePropertyBag} */ const options = {
                type: value.type,
                lastModified: value.lastModified
            };
            value = $28e044672cefb76f$require$NativeFile && value instanceof $28e044672cefb76f$require$NativeFile || value instanceof $28e044672cefb76f$require$UndiciFile ? new $28e044672cefb76f$var$File([
                value
            ], filename, options) : new $28e044672cefb76f$require$FileLike(value, filename, options);
        }
    }
    // 4. Return an entry whose name is name and whose value is value.
    return {
        name: name,
        value: value
    };
}
module.exports = {
    FormData: $28e044672cefb76f$var$FormData
};

});
parcelRegister("kYcuw", function(module, exports) {
module.exports = new URL("symbols.71ce8940.js", "file:" + __filename).toString();

});

parcelRegister("gT9hf", function(module, exports) {
module.exports = new URL("file.19f8e03c.js", "file:" + __filename).toString();

});



