require("./browser.320994d4.js");
require("./node.3628971c.js");


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
parcelRegister("eVYlJ", function(module, exports) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ 

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) module.exports = (parcelRequire("3nIKe"));
else module.exports = (parcelRequire("9mHfo"));

});
parcelRegister("3nIKe", function(module, exports) {
module.exports = new URL("browser.320994d4.js", "file:" + __filename).toString();

});

parcelRegister("9mHfo", function(module, exports) {
module.exports = new URL("node.3628971c.js", "file:" + __filename).toString();

});



