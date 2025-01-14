require("./agent.6239d3b1.js");


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
parcelRegister("7oywA", function(module, exports) {
"use strict";
var $56258e25d77f66c3$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};

const $56258e25d77f66c3$var$agent_1 = $56258e25d77f66c3$var$__importDefault((parcelRequire("7S5Np")));
function $56258e25d77f66c3$var$createHttpsProxyAgent(opts) {
    return new $56258e25d77f66c3$var$agent_1.default(opts);
}
(function(createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = $56258e25d77f66c3$var$agent_1.default;
    createHttpsProxyAgent.prototype = $56258e25d77f66c3$var$agent_1.default.prototype;
})($56258e25d77f66c3$var$createHttpsProxyAgent || ($56258e25d77f66c3$var$createHttpsProxyAgent = {}));
module.exports = $56258e25d77f66c3$var$createHttpsProxyAgent;

});
parcelRegister("7S5Np", function(module, exports) {
module.exports = new URL("agent.6239d3b1.js", "file:" + __filename).toString();

});



//# sourceMappingURL=dist.c0f1a485.js.map
