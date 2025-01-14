require("./browser.f059d661.js");
require("./node.71a39727.js");


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
parcelRegister("6AkNx", function(module, exports) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ 

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) module.exports = (parcelRequire("3hSIz"));
else module.exports = (parcelRequire("jLGhz"));

});
parcelRegister("3hSIz", function(module, exports) {
module.exports = new URL("browser.f059d661.js", "file:" + __filename).toString();

});

parcelRegister("jLGhz", function(module, exports) {
module.exports = new URL("node.71a39727.js", "file:" + __filename).toString();

});



//# sourceMappingURL=debug.b437d059.js.map
