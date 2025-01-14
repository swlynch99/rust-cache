require("./agent.954be89b.js");


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
parcelRegister("hJyS0", function(module, exports) {
"use strict";
var $ce91b016a03ca303$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};

const $ce91b016a03ca303$var$agent_1 = $ce91b016a03ca303$var$__importDefault((parcelRequire("2KW6q")));
function $ce91b016a03ca303$var$createHttpProxyAgent(opts) {
    return new $ce91b016a03ca303$var$agent_1.default(opts);
}
(function(createHttpProxyAgent) {
    createHttpProxyAgent.HttpProxyAgent = $ce91b016a03ca303$var$agent_1.default;
    createHttpProxyAgent.prototype = $ce91b016a03ca303$var$agent_1.default.prototype;
})($ce91b016a03ca303$var$createHttpProxyAgent || ($ce91b016a03ca303$var$createHttpProxyAgent = {}));
module.exports = $ce91b016a03ca303$var$createHttpProxyAgent;

});
parcelRegister("2KW6q", function(module, exports) {
module.exports = new URL("agent.954be89b.js", "file:" + __filename).toString();

});



//# sourceMappingURL=dist.7c33beff.js.map
