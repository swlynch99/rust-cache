require("./util.ddf28a03.js");
require("./date.fd3d264d.js");
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
 */ var $fa56f5d72ac6bef3$exports = {};
$fa56f5d72ac6bef3$exports = new URL("util.ddf28a03.js", "file:" + __filename).toString();


var $c8259a594c7ff5b1$exports = {};
$c8259a594c7ff5b1$exports = new URL("date.fd3d264d.js", "file:" + __filename).toString();



var $4gRrl = parcelRequire("4gRrl");
let $21033e9b103d1065$var$INT_REGEX = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
let $21033e9b103d1065$var$FLOAT_REGEX = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
let $21033e9b103d1065$var$LEADING_ZERO = /^[+-]?0[0-9_]/;
let $21033e9b103d1065$var$ESCAPE_REGEX = /^[0-9a-f]{4,8}$/i;
let $21033e9b103d1065$var$ESC_MAP = {
    b: '\b',
    t: '\t',
    n: '\n',
    f: '\f',
    r: '\r',
    '"': '"',
    '\\': '\\'
};
function $21033e9b103d1065$export$960addfb9e5a0cde(str, ptr = 0, endPtr = str.length) {
    let isLiteral = str[ptr] === "'";
    let isMultiline = str[ptr++] === str[ptr] && str[ptr] === str[ptr + 1];
    if (isMultiline) {
        endPtr -= 2;
        if (str[ptr += 2] === '\r') ptr++;
        if (str[ptr] === '\n') ptr++;
    }
    let tmp = 0;
    let isEscape;
    let parsed = '';
    let sliceStart = ptr;
    while(ptr < endPtr - 1){
        let c = str[ptr++];
        if (c === '\n' || c === '\r' && str[ptr] === '\n') {
            if (!isMultiline) throw new (0, $4gRrl.TomlError)('newlines are not allowed in strings', {
                toml: str,
                ptr: ptr - 1
            });
        } else if (c < '\x20' && c !== '\t' || c === '\x7f') throw new (0, $4gRrl.TomlError)('control characters are not allowed in strings', {
            toml: str,
            ptr: ptr - 1
        });
        if (isEscape) {
            isEscape = false;
            if (c === 'u' || c === 'U') {
                // Unicode escape
                let code = str.slice(ptr, ptr += c === 'u' ? 4 : 8);
                if (!$21033e9b103d1065$var$ESCAPE_REGEX.test(code)) throw new (0, $4gRrl.TomlError)('invalid unicode escape', {
                    toml: str,
                    ptr: tmp
                });
                try {
                    parsed += String.fromCodePoint(parseInt(code, 16));
                } catch  {
                    throw new (0, $4gRrl.TomlError)('invalid unicode escape', {
                        toml: str,
                        ptr: tmp
                    });
                }
            } else if (isMultiline && (c === '\n' || c === ' ' || c === '\t' || c === '\r')) {
                // Multiline escape
                ptr = (0, $fa56f5d72ac6bef3$exports.skipVoid)(str, ptr - 1, true);
                if (str[ptr] !== '\n' && str[ptr] !== '\r') throw new (0, $4gRrl.TomlError)('invalid escape: only line-ending whitespace may be escaped', {
                    toml: str,
                    ptr: tmp
                });
                ptr = (0, $fa56f5d72ac6bef3$exports.skipVoid)(str, ptr);
            } else if (c in $21033e9b103d1065$var$ESC_MAP) // Classic escape
            parsed += $21033e9b103d1065$var$ESC_MAP[c];
            else throw new (0, $4gRrl.TomlError)('unrecognized escape sequence', {
                toml: str,
                ptr: tmp
            });
            sliceStart = ptr;
        } else if (!isLiteral && c === '\\') {
            tmp = ptr - 1;
            isEscape = true;
            parsed += str.slice(sliceStart, tmp);
        }
    }
    return parsed + str.slice(sliceStart, endPtr - 1);
}
function $21033e9b103d1065$export$5303528d1070ff6f(value, toml, ptr) {
    // Constant values
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === '-inf') return -Infinity;
    if (value === 'inf' || value === '+inf') return Infinity;
    if (value === 'nan' || value === '+nan' || value === '-nan') return NaN;
    if (value === '-0') return 0; // Avoid FP representation of -0
    // Numbers
    let isInt;
    if ((isInt = $21033e9b103d1065$var$INT_REGEX.test(value)) || $21033e9b103d1065$var$FLOAT_REGEX.test(value)) {
        if ($21033e9b103d1065$var$LEADING_ZERO.test(value)) throw new (0, $4gRrl.TomlError)('leading zeroes are not allowed', {
            toml: toml,
            ptr: ptr
        });
        let numeric = +value.replace(/_/g, '');
        if (isNaN(numeric)) throw new (0, $4gRrl.TomlError)('invalid number', {
            toml: toml,
            ptr: ptr
        });
        if (isInt && !Number.isSafeInteger(numeric)) throw new (0, $4gRrl.TomlError)('integer value cannot be represented losslessly', {
            toml: toml,
            ptr: ptr
        });
        return numeric;
    }
    let date = new (0, $c8259a594c7ff5b1$exports.TomlDate)(value);
    if (!date.isValid()) throw new (0, $4gRrl.TomlError)('invalid value', {
        toml: toml,
        ptr: ptr
    });
    return date;
}


//# sourceMappingURL=primitive.4b4cac2a.js.map
