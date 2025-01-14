require("./primitive.4b4cac2a.js");
require("./struct.8d8bf486.js");
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
 */ 
var $2PIZy = parcelRequire("2PIZy");

var $jVwLq = parcelRequire("jVwLq");

var $4f6N3 = parcelRequire("4f6N3");

var $4gRrl = parcelRequire("4gRrl");
function $e51472c2dd65eac1$var$sliceAndTrimEndOf(str, startPtr, endPtr, allowNewLines) {
    let value = str.slice(startPtr, endPtr);
    let commentIdx = value.indexOf('#');
    if (commentIdx > -1) {
        // The call to skipComment allows to "validate" the comment
        // (absence of control characters)
        (0, $4f6N3.skipComment)(str, commentIdx);
        value = value.slice(0, commentIdx);
    }
    let trimmed = value.trimEnd();
    if (!allowNewLines) {
        let newlineIdx = value.indexOf('\n', trimmed.length);
        if (newlineIdx > -1) throw new (0, $4gRrl.TomlError)('newlines are not allowed in inline tables', {
            toml: str,
            ptr: startPtr + newlineIdx
        });
    }
    return [
        trimmed,
        commentIdx
    ];
}
function $e51472c2dd65eac1$export$e66823f955487935(str, ptr, end, depth) {
    if (depth === 0) throw new (0, $4gRrl.TomlError)('document contains excessively nested structures. aborting.', {
        toml: str,
        ptr: ptr
    });
    let c = str[ptr];
    if (c === '[' || c === '{') {
        let [value, endPtr] = c === '[' ? (0, $jVwLq.parseArray)(str, ptr, depth) : (0, $jVwLq.parseInlineTable)(str, ptr, depth);
        let newPtr = (0, $4f6N3.skipUntil)(str, endPtr, ',', end);
        if (end === '}') {
            let nextNewLine = (0, $4f6N3.indexOfNewline)(str, endPtr, newPtr);
            if (nextNewLine > -1) throw new (0, $4gRrl.TomlError)('newlines are not allowed in inline tables', {
                toml: str,
                ptr: nextNewLine
            });
        }
        return [
            value,
            newPtr
        ];
    }
    let endPtr;
    if (c === '"' || c === "'") {
        endPtr = (0, $4f6N3.getStringEnd)(str, ptr);
        let parsed = (0, $2PIZy.parseString)(str, ptr, endPtr);
        if (end) {
            endPtr = (0, $4f6N3.skipVoid)(str, endPtr, end !== ']');
            if (str[endPtr] && str[endPtr] !== ',' && str[endPtr] !== end && str[endPtr] !== '\n' && str[endPtr] !== '\r') throw new (0, $4gRrl.TomlError)('unexpected character encountered', {
                toml: str,
                ptr: endPtr
            });
            endPtr += +(str[endPtr] === ',');
        }
        return [
            parsed,
            endPtr
        ];
    }
    endPtr = (0, $4f6N3.skipUntil)(str, ptr, ',', end);
    let slice = $e51472c2dd65eac1$var$sliceAndTrimEndOf(str, ptr, endPtr - +(str[endPtr - 1] === ','), end === ']');
    if (!slice[0]) throw new (0, $4gRrl.TomlError)('incomplete key-value declaration: no value specified', {
        toml: str,
        ptr: ptr
    });
    if (end && slice[1] > -1) {
        endPtr = (0, $4f6N3.skipVoid)(str, ptr + slice[1]);
        endPtr += +(str[endPtr] === ',');
    }
    return [
        (0, $2PIZy.parseValue)(slice[0], str, ptr),
        endPtr
    ];
}


//# sourceMappingURL=extract.65d87124.js.map
