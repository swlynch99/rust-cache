require("./agent.7983331c.js");


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
parcelRegister("9WJnU", function(module, exports) {
"use strict";
var $73dcbc4355652b64$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};

const $73dcbc4355652b64$var$agent_1 = $73dcbc4355652b64$var$__importDefault((parcelRequire("ao8vB")));
function $73dcbc4355652b64$var$createHttpsProxyAgent(opts) {
    return new $73dcbc4355652b64$var$agent_1.default(opts);
}
(function(createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = $73dcbc4355652b64$var$agent_1.default;
    createHttpsProxyAgent.prototype = $73dcbc4355652b64$var$agent_1.default.prototype;
})($73dcbc4355652b64$var$createHttpsProxyAgent || ($73dcbc4355652b64$var$createHttpsProxyAgent = {}));
module.exports = $73dcbc4355652b64$var$createHttpsProxyAgent;

});
parcelRegister("ao8vB", function(module, exports) {
module.exports = new URL("agent.7983331c.js", "file:" + __filename).toString();

});



