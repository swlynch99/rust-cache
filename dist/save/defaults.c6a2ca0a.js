
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
parcelRegister("hiInj", function(module, exports) {

$parcel$export(module.exports, "DEFAULTS", () => $c9868a0f19e6ce05$export$f484e977a69c6ba6);

var $g1AJM = parcelRequire("g1AJM");

var $fstSd = parcelRequire("fstSd");
const $c9868a0f19e6ce05$var$userAgent = `octokit-endpoint.js/${(0, $fstSd.VERSION)} ${(0, $g1AJM.getUserAgent)()}`;
const $c9868a0f19e6ce05$export$f484e977a69c6ba6 = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": $c9868a0f19e6ce05$var$userAgent
    },
    mediaType: {
        format: ""
    }
};

});
parcelRegister("fstSd", function(module, exports) {
module.exports = new URL("version.4a21f7cd.js", "file:" + __filename).toString();

});



