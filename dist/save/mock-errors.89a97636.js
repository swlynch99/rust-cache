require("./errors.12b0f892.js");


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
'use strict';

var $hA22O = parcelRequire("hA22O");
var $820c8bd1336a4135$require$UndiciError = $hA22O.UndiciError;
class $820c8bd1336a4135$var$MockNotMatchedError extends $820c8bd1336a4135$require$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $820c8bd1336a4135$var$MockNotMatchedError);
        this.name = 'MockNotMatchedError';
        this.message = message || 'The request does not match any registered mock dispatches';
        this.code = 'UND_MOCK_ERR_MOCK_NOT_MATCHED';
    }
}
module.exports = {
    MockNotMatchedError: $820c8bd1336a4135$var$MockNotMatchedError
};


