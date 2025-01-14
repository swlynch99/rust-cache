require("./context.f9f37402.js");
require("./utils.3713a2a2.js");
require("./dist-web.e7757bbb.js");
require("./dist-src.8fdd5d24.js");
require("./dist-web.f4df0d58.js");


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
parcelRegister("jL6iL", function(module, exports) {
module.exports = new URL("utils.3713a2a2.js", "file:" + __filename).toString();

});

"use strict";
var $526a600632e21e84$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $526a600632e21e84$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $526a600632e21e84$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $526a600632e21e84$var$__createBinding(result, mod, k);
    }
    $526a600632e21e84$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getOctokitOptions = module.exports.GitHub = module.exports.defaults = module.exports.context = void 0;

const $526a600632e21e84$var$Context = $526a600632e21e84$var$__importStar((parcelRequire("fBD3t")));

const $526a600632e21e84$var$Utils = $526a600632e21e84$var$__importStar((parcelRequire("jL6iL")));
var $f021ccef264bc282$exports = {};
$f021ccef264bc282$exports = new URL("dist-web.e7757bbb.js", "file:" + __filename).toString();


var $dbb3bf2afd72ae51$exports = {};
$dbb3bf2afd72ae51$exports = new URL("dist-src.8fdd5d24.js", "file:" + __filename).toString();


var $7638538858dbc448$exports = {};
$7638538858dbc448$exports = new URL("dist-web.f4df0d58.js", "file:" + __filename).toString();


module.exports.context = new $526a600632e21e84$var$Context.Context();
const $526a600632e21e84$var$baseUrl = $526a600632e21e84$var$Utils.getApiBaseUrl();
module.exports.defaults = {
    baseUrl: $526a600632e21e84$var$baseUrl,
    request: {
        agent: $526a600632e21e84$var$Utils.getProxyAgent($526a600632e21e84$var$baseUrl),
        fetch: $526a600632e21e84$var$Utils.getProxyFetch($526a600632e21e84$var$baseUrl)
    }
};
module.exports.GitHub = $f021ccef264bc282$exports.Octokit.plugin($dbb3bf2afd72ae51$exports.restEndpointMethods, $7638538858dbc448$exports.paginateRest).defaults(module.exports.defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */ function $526a600632e21e84$var$getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = $526a600632e21e84$var$Utils.getAuthString(token, opts);
    if (auth) opts.auth = auth;
    return opts;
}
module.exports.getOctokitOptions = $526a600632e21e84$var$getOctokitOptions;


//# sourceMappingURL=utils.019b9346.js.map
