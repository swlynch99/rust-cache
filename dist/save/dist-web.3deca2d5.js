
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("g1AJM", function(module, exports) {

$parcel$export(module.exports, "getUserAgent", () => $baa93c9e3ce9d447$export$7935961ef7719cb0);
function $baa93c9e3ce9d447$export$7935961ef7719cb0() {
    if (typeof navigator === "object" && "userAgent" in navigator) return navigator.userAgent;
    if (typeof process === "object" && process.version !== undefined) return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    return "<environment undetectable>";
}

});


