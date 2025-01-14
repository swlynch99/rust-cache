require("./gaxios.6d00d97e.js");
require("./common.1f9f2e20.js");
require("./interceptor.b69fdbe5.js");


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
parcelRegister("47hCt", function(module, exports) {
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
var $2ff57bba73414546$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $2ff57bba73414546$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $2ff57bba73414546$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.instance = module.exports.Gaxios = module.exports.GaxiosError = void 0;
module.exports.request = $2ff57bba73414546$var$request;

var $5H24i = parcelRequire("5H24i");
Object.defineProperty(module.exports, "Gaxios", {
    enumerable: true,
    get: function() {
        return $5H24i.Gaxios;
    }
});

var $9Lb2i = parcelRequire("9Lb2i");
Object.defineProperty(module.exports, "GaxiosError", {
    enumerable: true,
    get: function() {
        return $9Lb2i.GaxiosError;
    }
});

$2ff57bba73414546$var$__exportStar((parcelRequire("48Nme")), module.exports);
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */ module.exports.instance = new $5H24i.Gaxios();
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */ async function $2ff57bba73414546$var$request(opts) {
    return module.exports.instance.request(opts);
}

});
parcelRegister("5H24i", function(module, exports) {
module.exports = new URL("gaxios.6d00d97e.js", "file:" + __filename).toString();

});



//# sourceMappingURL=build.da41aa52.js.map
