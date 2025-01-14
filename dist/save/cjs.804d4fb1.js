require("./nodejs-common.868e4b2b.js");
require("./storage.d0b9c38a.js");
require("./bucket.c6139490.js");
require("./crc32c.9e825062.js");
require("./channel.ce6e413e.js");
require("./file.003b58da.js");
require("./hash-stream-validator.03a2fb6a.js");
require("./hmacKey.1386e53a.js");
require("./iam.0a6c869a.js");
require("./notification.8ab07a71.js");
require("./transfer-manager.6330b56c.js");


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
parcelRegister("1Fjnv", function(module, exports) {
module.exports = new URL("transfer-manager.6330b56c.js", "file:" + __filename).toString();

});

"use strict";
// Copyright 2019 Google LLC
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
var $da49b5009fdd6060$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $da49b5009fdd6060$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $da49b5009fdd6060$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Notification = module.exports.Iam = module.exports.HmacKey = module.exports.File = module.exports.Channel = module.exports.Bucket = module.exports.Storage = module.exports.RETRYABLE_ERR_FN_DEFAULT = module.exports.IdempotencyStrategy = module.exports.ApiError = void 0;
var $acaa944bedcf8f69$exports = {};
$acaa944bedcf8f69$exports = new URL("nodejs-common.868e4b2b.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ApiError", {
    enumerable: true,
    get: function() {
        return $acaa944bedcf8f69$exports.ApiError;
    }
});
var $57e1e4e0649b1df2$exports = {};
$57e1e4e0649b1df2$exports = new URL("storage.d0b9c38a.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "IdempotencyStrategy", {
    enumerable: true,
    get: function() {
        return $57e1e4e0649b1df2$exports.IdempotencyStrategy;
    }
});
Object.defineProperty(module.exports, "RETRYABLE_ERR_FN_DEFAULT", {
    enumerable: true,
    get: function() {
        return $57e1e4e0649b1df2$exports.RETRYABLE_ERR_FN_DEFAULT;
    }
});
Object.defineProperty(module.exports, "Storage", {
    enumerable: true,
    get: function() {
        return $57e1e4e0649b1df2$exports.Storage;
    }
});

var $gba7W = parcelRequire("gba7W");
Object.defineProperty(module.exports, "Bucket", {
    enumerable: true,
    get: function() {
        return $gba7W.Bucket;
    }
});

$da49b5009fdd6060$var$__exportStar((parcelRequire("lEAcs")), module.exports);

var $iqa6J = parcelRequire("iqa6J");
Object.defineProperty(module.exports, "Channel", {
    enumerable: true,
    get: function() {
        return $iqa6J.Channel;
    }
});

var $8Lm7l = parcelRequire("8Lm7l");
Object.defineProperty(module.exports, "File", {
    enumerable: true,
    get: function() {
        return $8Lm7l.File;
    }
});

$da49b5009fdd6060$var$__exportStar((parcelRequire("aLgEt")), module.exports);

var $8mQmC = parcelRequire("8mQmC");
Object.defineProperty(module.exports, "HmacKey", {
    enumerable: true,
    get: function() {
        return $8mQmC.HmacKey;
    }
});

var $gHQil = parcelRequire("gHQil");
Object.defineProperty(module.exports, "Iam", {
    enumerable: true,
    get: function() {
        return $gHQil.Iam;
    }
});

var $72agY = parcelRequire("72agY");
Object.defineProperty(module.exports, "Notification", {
    enumerable: true,
    get: function() {
        return $72agY.Notification;
    }
});

$da49b5009fdd6060$var$__exportStar((parcelRequire("1Fjnv")), module.exports);


