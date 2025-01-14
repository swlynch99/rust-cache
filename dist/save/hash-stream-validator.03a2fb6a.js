require("./crc32c.9e825062.js");
require("./file.003b58da.js");
var $7IyKT$crypto = require("crypto");
var $7IyKT$stream = require("stream");


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
parcelRegister("aLgEt", function(module, exports) {
"use strict";
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $7d5b35e3e3cfa618$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $7d5b35e3e3cfa618$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Digest;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HashStreamValidator = void 0;



var $lEAcs = parcelRequire("lEAcs");

var $8Lm7l = parcelRequire("8Lm7l");
class $7d5b35e3e3cfa618$var$HashStreamValidator extends $7IyKT$stream.Transform {
    constructor(options = {}){
        super();
        this.updateHashesOnly = false;
        $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash.set(this, undefined);
        $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash.set(this, undefined);
        $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Digest.set(this, '');
        this.crc32cEnabled = !!options.crc32c;
        this.md5Enabled = !!options.md5;
        this.updateHashesOnly = !!options.updateHashesOnly;
        this.crc32cExpected = options.crc32cExpected;
        this.md5Expected = options.md5Expected;
        if (this.crc32cEnabled) {
            if (options.crc32cInstance) $7d5b35e3e3cfa618$var$__classPrivateFieldSet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, options.crc32cInstance, "f");
            else {
                const crc32cGenerator = options.crc32cGenerator || $lEAcs.CRC32C_DEFAULT_VALIDATOR_GENERATOR;
                $7d5b35e3e3cfa618$var$__classPrivateFieldSet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, crc32cGenerator(), "f");
            }
        }
        if (this.md5Enabled) $7d5b35e3e3cfa618$var$__classPrivateFieldSet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, (0, $7IyKT$crypto.createHash)('md5'), "f");
    }
    /**
     * Return the current CRC32C value, if available.
     */ get crc32c() {
        var _a;
        return (_a = $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, "f")) === null || _a === void 0 ? void 0 : _a.toString();
    }
    _flush(callback) {
        if ($7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, "f")) $7d5b35e3e3cfa618$var$__classPrivateFieldSet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Digest, $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, "f").digest('base64'), "f");
        if (this.updateHashesOnly) {
            callback();
            return;
        }
        // If we're doing validation, assume the worst-- a data integrity
        // mismatch. If not, these tests won't be performed, and we can assume
        // the best.
        // We must check if the server decompressed the data on serve because hash
        // validation is not possible in this case.
        let failed = this.crc32cEnabled || this.md5Enabled;
        if (this.crc32cEnabled && this.crc32cExpected) failed = !this.test('crc32c', this.crc32cExpected);
        if (this.md5Enabled && this.md5Expected) failed = !this.test('md5', this.md5Expected);
        if (failed) {
            const mismatchError = new $8Lm7l.RequestError($8Lm7l.FileExceptionMessages.DOWNLOAD_MISMATCH);
            mismatchError.code = 'CONTENT_DOWNLOAD_MISMATCH';
            callback(mismatchError);
        } else callback();
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk, encoding);
        try {
            if ($7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, "f")) $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, "f").update(chunk);
            if ($7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, "f")) $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, "f").update(chunk);
            callback();
        } catch (e) {
            callback(e);
        }
    }
    test(hash, sum) {
        const check = Buffer.isBuffer(sum) ? sum.toString('base64') : sum;
        if (hash === 'crc32c' && $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, "f")) return $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash, "f").validate(check);
        if (hash === 'md5' && $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash, "f")) return $7d5b35e3e3cfa618$var$__classPrivateFieldGet(this, $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Digest, "f") === check;
        return false;
    }
}
module.exports.HashStreamValidator = $7d5b35e3e3cfa618$var$HashStreamValidator;
$7d5b35e3e3cfa618$var$_HashStreamValidator_crc32cHash = new WeakMap(), $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Hash = new WeakMap(), $7d5b35e3e3cfa618$var$_HashStreamValidator_md5Digest = new WeakMap();

});


