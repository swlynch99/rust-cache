require("./gaxios.5623b3ec.js");
require("./common.4786667e.js");
require("./interceptor.0c15a240.js");


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
parcelRegister("XskYs", function(module, exports) {
"use strict";
// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $0b2b7dffa64deba6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0b2b7dffa64deba6$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $0b2b7dffa64deba6$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.instance = module.exports.Gaxios = module.exports.GaxiosError = void 0;
module.exports.request = $0b2b7dffa64deba6$var$request;

var $eKzJ7 = parcelRequire("eKzJ7");
Object.defineProperty(module.exports, "Gaxios", {
    enumerable: true,
    get: function() {
        return $eKzJ7.Gaxios;
    }
});

var $1jQna = parcelRequire("1jQna");
Object.defineProperty(module.exports, "GaxiosError", {
    enumerable: true,
    get: function() {
        return $1jQna.GaxiosError;
    }
});

$0b2b7dffa64deba6$var$__exportStar((parcelRequire("bREP5")), module.exports);
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */ module.exports.instance = new $eKzJ7.Gaxios();
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */ async function $0b2b7dffa64deba6$var$request(opts) {
    return module.exports.instance.request(opts);
}

});
parcelRegister("eKzJ7", function(module, exports) {
module.exports = new URL("gaxios.5623b3ec.js", "file:" + __filename).toString();

});



