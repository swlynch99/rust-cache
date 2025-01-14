require("./nodejs-common.0bbf052b.js");
require("./storage.0f1f4d5d.js");
require("./bucket.192ef05d.js");
require("./crc32c.ee191616.js");
require("./channel.005bed05.js");
require("./file.253e2c46.js");
require("./hash-stream-validator.8ed0277b.js");
require("./hmacKey.0bf705b9.js");
require("./iam.5a6b7327.js");
require("./notification.d63b210c.js");
require("./transfer-manager.6021ad2c.js");


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
parcelRegister("8AX8J", function(module, exports) {
module.exports = new URL("transfer-manager.6021ad2c.js", "file:" + __filename).toString();

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
var $6d51002252eed986$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $6d51002252eed986$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $6d51002252eed986$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Notification = module.exports.Iam = module.exports.HmacKey = module.exports.File = module.exports.Channel = module.exports.Bucket = module.exports.Storage = module.exports.RETRYABLE_ERR_FN_DEFAULT = module.exports.IdempotencyStrategy = module.exports.ApiError = void 0;
var $a55b3b5f8991eb5c$exports = {};
$a55b3b5f8991eb5c$exports = new URL("nodejs-common.0bbf052b.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ApiError", {
    enumerable: true,
    get: function() {
        return $a55b3b5f8991eb5c$exports.ApiError;
    }
});
var $e9855038680bc779$exports = {};
$e9855038680bc779$exports = new URL("storage.0f1f4d5d.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "IdempotencyStrategy", {
    enumerable: true,
    get: function() {
        return $e9855038680bc779$exports.IdempotencyStrategy;
    }
});
Object.defineProperty(module.exports, "RETRYABLE_ERR_FN_DEFAULT", {
    enumerable: true,
    get: function() {
        return $e9855038680bc779$exports.RETRYABLE_ERR_FN_DEFAULT;
    }
});
Object.defineProperty(module.exports, "Storage", {
    enumerable: true,
    get: function() {
        return $e9855038680bc779$exports.Storage;
    }
});

var $uE4AQ = parcelRequire("uE4AQ");
Object.defineProperty(module.exports, "Bucket", {
    enumerable: true,
    get: function() {
        return $uE4AQ.Bucket;
    }
});

$6d51002252eed986$var$__exportStar((parcelRequire("jL9jF")), module.exports);

var $h3yDR = parcelRequire("h3yDR");
Object.defineProperty(module.exports, "Channel", {
    enumerable: true,
    get: function() {
        return $h3yDR.Channel;
    }
});

var $lJUcF = parcelRequire("lJUcF");
Object.defineProperty(module.exports, "File", {
    enumerable: true,
    get: function() {
        return $lJUcF.File;
    }
});

$6d51002252eed986$var$__exportStar((parcelRequire("fT82p")), module.exports);

var $01EOA = parcelRequire("01EOA");
Object.defineProperty(module.exports, "HmacKey", {
    enumerable: true,
    get: function() {
        return $01EOA.HmacKey;
    }
});

var $kvXpq = parcelRequire("kvXpq");
Object.defineProperty(module.exports, "Iam", {
    enumerable: true,
    get: function() {
        return $kvXpq.Iam;
    }
});

var $9bpZl = parcelRequire("9bpZl");
Object.defineProperty(module.exports, "Notification", {
    enumerable: true,
    get: function() {
        return $9bpZl.Notification;
    }
});

$6d51002252eed986$var$__exportStar((parcelRequire("8AX8J")), module.exports);


//# sourceMappingURL=cjs.5d9594b0.js.map
