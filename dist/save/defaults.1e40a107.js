
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
parcelRegister("bsypi", function(module, exports) {

$parcel$export(module.exports, "DEFAULTS", () => $857cffbb1acb292e$export$f484e977a69c6ba6);

var $ie4is = parcelRequire("ie4is");

var $6PDQs = parcelRequire("6PDQs");
const $857cffbb1acb292e$var$userAgent = `octokit-endpoint.js/${(0, $6PDQs.VERSION)} ${(0, $ie4is.getUserAgent)()}`;
const $857cffbb1acb292e$export$f484e977a69c6ba6 = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": $857cffbb1acb292e$var$userAgent
    },
    mediaType: {
        format: ""
    }
};

});
parcelRegister("6PDQs", function(module, exports) {
module.exports = new URL("version.af9da71e.js", "file:" + __filename).toString();

});



//# sourceMappingURL=defaults.1e40a107.js.map
