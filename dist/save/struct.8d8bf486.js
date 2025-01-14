require("./primitive.4b4cac2a.js");
require("./extract.65d87124.js");
require("./util.ddf28a03.js");
require("./error.3f719f74.js");


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
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var $3c2ef7258540fefb$exports = {};
$3c2ef7258540fefb$exports = new URL("primitive.4b4cac2a.js", "file:" + __filename).toString();


var $3b116bee45f6016f$exports = {};
$3b116bee45f6016f$exports = new URL("extract.65d87124.js", "file:" + __filename).toString();



var $4f6N3 = parcelRequire("4f6N3");

var $4gRrl = parcelRequire("4gRrl");
let $e81cc170f9237dfc$var$KEY_PART_RE = /^[a-zA-Z0-9-_]+[ \t]*$/;
function $e81cc170f9237dfc$export$94243d401ffea539(str, ptr, end = '=') {
    let dot = ptr - 1;
    let parsed = [];
    let endPtr = str.indexOf(end, ptr);
    if (endPtr < 0) throw new (0, $4gRrl.TomlError)('incomplete key-value: cannot find end of key', {
        toml: str,
        ptr: ptr
    });
    do {
        let c = str[ptr = ++dot];
        // If it's whitespace, ignore
        if (c !== ' ' && c !== '\t') {
            // If it's a string
            if (c === '"' || c === "'") {
                if (c === str[ptr + 1] && c === str[ptr + 2]) throw new (0, $4gRrl.TomlError)('multiline strings are not allowed in keys', {
                    toml: str,
                    ptr: ptr
                });
                let eos = (0, $4f6N3.getStringEnd)(str, ptr);
                if (eos < 0) throw new (0, $4gRrl.TomlError)('unfinished string encountered', {
                    toml: str,
                    ptr: ptr
                });
                dot = str.indexOf('.', eos);
                let strEnd = str.slice(eos, dot < 0 || dot > endPtr ? endPtr : dot);
                let newLine = (0, $4f6N3.indexOfNewline)(strEnd);
                if (newLine > -1) throw new (0, $4gRrl.TomlError)('newlines are not allowed in keys', {
                    toml: str,
                    ptr: ptr + dot + newLine
                });
                if (strEnd.trimStart()) throw new (0, $4gRrl.TomlError)('found extra tokens after the string part', {
                    toml: str,
                    ptr: eos
                });
                if (endPtr < eos) {
                    endPtr = str.indexOf(end, eos);
                    if (endPtr < 0) throw new (0, $4gRrl.TomlError)('incomplete key-value: cannot find end of key', {
                        toml: str,
                        ptr: ptr
                    });
                }
                parsed.push((0, $3c2ef7258540fefb$exports.parseString)(str, ptr, eos));
            } else {
                // Normal raw key part consumption and validation
                dot = str.indexOf('.', ptr);
                let part = str.slice(ptr, dot < 0 || dot > endPtr ? endPtr : dot);
                if (!$e81cc170f9237dfc$var$KEY_PART_RE.test(part)) throw new (0, $4gRrl.TomlError)('only letter, numbers, dashes and underscores are allowed in keys', {
                    toml: str,
                    ptr: ptr
                });
                parsed.push(part.trimEnd());
            }
        }
    // Until there's no more dot
    }while (dot + 1 && dot < endPtr);
    return [
        parsed,
        (0, $4f6N3.skipVoid)(str, endPtr + 1, true, true)
    ];
}
function $e81cc170f9237dfc$export$d524ae3b56a992be(str, ptr, depth) {
    let res = {};
    let seen = new Set();
    let c;
    let comma = 0;
    ptr++;
    while((c = str[ptr++]) !== '}' && c){
        if (c === '\n') throw new (0, $4gRrl.TomlError)('newlines are not allowed in inline tables', {
            toml: str,
            ptr: ptr - 1
        });
        else if (c === '#') throw new (0, $4gRrl.TomlError)('inline tables cannot contain comments', {
            toml: str,
            ptr: ptr - 1
        });
        else if (c === ',') throw new (0, $4gRrl.TomlError)('expected key-value, found comma', {
            toml: str,
            ptr: ptr - 1
        });
        else if (c !== ' ' && c !== '\t') {
            let k;
            let t = res;
            let hasOwn = false;
            let [key, keyEndPtr] = $e81cc170f9237dfc$export$94243d401ffea539(str, ptr - 1);
            for(let i = 0; i < key.length; i++){
                if (i) t = hasOwn ? t[k] : t[k] = {};
                k = key[i];
                if ((hasOwn = Object.hasOwn(t, k)) && (typeof t[k] !== 'object' || seen.has(t[k]))) throw new (0, $4gRrl.TomlError)('trying to redefine an already defined value', {
                    toml: str,
                    ptr: ptr
                });
                if (!hasOwn && k === '__proto__') Object.defineProperty(t, k, {
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            }
            if (hasOwn) throw new (0, $4gRrl.TomlError)('trying to redefine an already defined value', {
                toml: str,
                ptr: ptr
            });
            let [value, valueEndPtr] = (0, $3b116bee45f6016f$exports.extractValue)(str, keyEndPtr, '}', depth - 1);
            seen.add(value);
            t[k] = value;
            ptr = valueEndPtr;
            comma = str[ptr - 1] === ',' ? ptr - 1 : 0;
        }
    }
    if (comma) throw new (0, $4gRrl.TomlError)('trailing commas are not allowed in inline tables', {
        toml: str,
        ptr: comma
    });
    if (!c) throw new (0, $4gRrl.TomlError)('unfinished table encountered', {
        toml: str,
        ptr: ptr
    });
    return [
        res,
        ptr
    ];
}
function $e81cc170f9237dfc$export$fa1ad5554fc069ac(str, ptr, depth) {
    let res = [];
    let c;
    ptr++;
    while((c = str[ptr++]) !== ']' && c){
        if (c === ',') throw new (0, $4gRrl.TomlError)('expected value, found comma', {
            toml: str,
            ptr: ptr - 1
        });
        else if (c === '#') ptr = (0, $4f6N3.skipComment)(str, ptr);
        else if (c !== ' ' && c !== '\t' && c !== '\n' && c !== '\r') {
            let e = (0, $3b116bee45f6016f$exports.extractValue)(str, ptr - 1, ']', depth - 1);
            res.push(e[0]);
            ptr = e[1];
        }
    }
    if (!c) throw new (0, $4gRrl.TomlError)('unfinished array encountered', {
        toml: str,
        ptr: ptr
    });
    return [
        res,
        ptr
    ];
}


//# sourceMappingURL=struct.8d8bf486.js.map
