require("./errors.621f8b7b.js");


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

var $4V3Kr = parcelRequire("4V3Kr");
var $127a93afbb58e17c$require$UndiciError = $4V3Kr.UndiciError;
class $127a93afbb58e17c$var$MockNotMatchedError extends $127a93afbb58e17c$require$UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, $127a93afbb58e17c$var$MockNotMatchedError);
        this.name = 'MockNotMatchedError';
        this.message = message || 'The request does not match any registered mock dispatches';
        this.code = 'UND_MOCK_ERR_MOCK_NOT_MATCHED';
    }
}
module.exports = {
    MockNotMatchedError: $127a93afbb58e17c$var$MockNotMatchedError
};


//# sourceMappingURL=mock-errors.3465bf79.js.map
