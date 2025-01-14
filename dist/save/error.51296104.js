require("./object.830e77a1.js");


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

var $hrrVp = parcelRequire("hrrVp");
function $161f615dd727bcfc$export$e6127cc7fe7395c3(e) {
    if ((0, $hrrVp.isObject)(e)) {
        const hasName = typeof e.name === "string";
        const hasMessage = typeof e.message === "string";
        return hasName && hasMessage;
    }
    return false;
}
function $161f615dd727bcfc$export$82f46aa4e6535a45(e) {
    if ($161f615dd727bcfc$export$e6127cc7fe7395c3(e)) return e.message;
    else {
        let stringified;
        try {
            if (typeof e === "object" && e) stringified = JSON.stringify(e);
            else stringified = String(e);
        } catch (err) {
            stringified = "[unable to stringify input]";
        }
        return `Unknown error ${stringified}`;
    }
}


//# sourceMappingURL=error.51296104.js.map
