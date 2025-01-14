require("./agent.d8e9f686.js");


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
parcelRegister("6Int4", function(module, exports) {
"use strict";
var $4e390e62f98cd89a$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};

const $4e390e62f98cd89a$var$agent_1 = $4e390e62f98cd89a$var$__importDefault((parcelRequire("23Tkp")));
function $4e390e62f98cd89a$var$createHttpProxyAgent(opts) {
    return new $4e390e62f98cd89a$var$agent_1.default(opts);
}
(function(createHttpProxyAgent) {
    createHttpProxyAgent.HttpProxyAgent = $4e390e62f98cd89a$var$agent_1.default;
    createHttpProxyAgent.prototype = $4e390e62f98cd89a$var$agent_1.default.prototype;
})($4e390e62f98cd89a$var$createHttpProxyAgent || ($4e390e62f98cd89a$var$createHttpProxyAgent = {}));
module.exports = $4e390e62f98cd89a$var$createHttpProxyAgent;

});
parcelRegister("23Tkp", function(module, exports) {
module.exports = new URL("agent.d8e9f686.js", "file:" + __filename).toString();

});



