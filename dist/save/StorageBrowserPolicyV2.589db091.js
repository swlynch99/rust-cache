require("./esm.9590f010.js");
require("./constants.425d5fc4.js");
require("./utils.common.1056282c.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $hACYf = parcelRequire("hACYf");

var $daWVB = parcelRequire("daWVB");

var $aiu2u = parcelRequire("aiu2u");
const $288cb95b027af938$export$30b59775c2c90380 = "storageBrowserPolicy";
function $288cb95b027af938$export$4e10389526952926() {
    return {
        name: $288cb95b027af938$export$30b59775c2c90380,
        async sendRequest (request, next) {
            if (0, $hACYf.isNode) return next(request);
            if (request.method === "GET" || request.method === "HEAD") request.url = (0, $aiu2u.setURLParameter)(request.url, (0, $daWVB.URLConstants).Parameters.FORCE_BROWSER_NO_CACHE, new Date().getTime().toString());
            request.headers.delete((0, $daWVB.HeaderConstants).COOKIE);
            // According to XHR standards, content-length should be fully controlled by browsers
            request.headers.delete((0, $daWVB.HeaderConstants).CONTENT_LENGTH);
            return next(request);
        }
    };
}


//# sourceMappingURL=StorageBrowserPolicyV2.589db091.js.map
