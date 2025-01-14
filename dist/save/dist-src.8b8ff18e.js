require("./dist-src.fef9d28d.js");
require("./dist-web.c5e3c3ab.js");
require("./version.f4f0199e.js");
require("./with-defaults.0991fd11.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
var $58884c517f3a8d9c$exports = {};
$58884c517f3a8d9c$exports = new URL("dist-src.fef9d28d.js", "file:" + __filename).toString();



var $ie4is = parcelRequire("ie4is");
var $72a7106aeb9e670f$exports = {};
$72a7106aeb9e670f$exports = new URL("version.f4f0199e.js", "file:" + __filename).toString();


var $f8c54522d598b743$exports = {};
$f8c54522d598b743$exports = new URL("with-defaults.0991fd11.js", "file:" + __filename).toString();


const $062665729ade6efd$export$b5fe3f66a567bec0 = (0, (/*@__PURE__*/$parcel$interopDefault($f8c54522d598b743$exports)))((0, $58884c517f3a8d9c$exports.endpoint), {
    headers: {
        "user-agent": `octokit-request.js/${(0, $72a7106aeb9e670f$exports.VERSION)} ${(0, $ie4is.getUserAgent)()}`
    }
});


//# sourceMappingURL=dist-src.8b8ff18e.js.map
