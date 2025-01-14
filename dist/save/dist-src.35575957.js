require("./dist-src.9a3ef460.js");
require("./dist-web.3deca2d5.js");
require("./version.a4900905.js");
require("./with-defaults.c9021d93.js");


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
var $7624458a6086732a$exports = {};
$7624458a6086732a$exports = new URL("dist-src.9a3ef460.js", "file:" + __filename).toString();



var $g1AJM = parcelRequire("g1AJM");
var $51764a2071592ea7$exports = {};
$51764a2071592ea7$exports = new URL("version.a4900905.js", "file:" + __filename).toString();


var $1b1ca78e70a2805c$exports = {};
$1b1ca78e70a2805c$exports = new URL("with-defaults.c9021d93.js", "file:" + __filename).toString();


const $b288b148fa452ce5$export$b5fe3f66a567bec0 = (0, (/*@__PURE__*/$parcel$interopDefault($1b1ca78e70a2805c$exports)))((0, $7624458a6086732a$exports.endpoint), {
    headers: {
        "user-agent": `octokit-request.js/${(0, $51764a2071592ea7$exports.VERSION)} ${(0, $g1AJM.getUserAgent)()}`
    }
});


