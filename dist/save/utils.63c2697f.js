require("./context.0a90c546.js");
require("./utils.d5e26d75.js");
require("./dist-web.75c2e34a.js");
require("./dist-src.6c2917cf.js");
require("./dist-web.9b2063f1.js");


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
parcelRegister("aL7M8", function(module, exports) {
module.exports = new URL("utils.d5e26d75.js", "file:" + __filename).toString();

});

"use strict";
var $4a08496df018388e$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $4a08496df018388e$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $4a08496df018388e$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $4a08496df018388e$var$__createBinding(result, mod, k);
    }
    $4a08496df018388e$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getOctokitOptions = module.exports.GitHub = module.exports.defaults = module.exports.context = void 0;

const $4a08496df018388e$var$Context = $4a08496df018388e$var$__importStar((parcelRequire("6C5Vy")));

const $4a08496df018388e$var$Utils = $4a08496df018388e$var$__importStar((parcelRequire("aL7M8")));
var $5c3b3c70e1caeb80$exports = {};
$5c3b3c70e1caeb80$exports = new URL("dist-web.75c2e34a.js", "file:" + __filename).toString();


var $cdeb2a2572c91718$exports = {};
$cdeb2a2572c91718$exports = new URL("dist-src.6c2917cf.js", "file:" + __filename).toString();


var $b3a39d906bcbc170$exports = {};
$b3a39d906bcbc170$exports = new URL("dist-web.9b2063f1.js", "file:" + __filename).toString();


module.exports.context = new $4a08496df018388e$var$Context.Context();
const $4a08496df018388e$var$baseUrl = $4a08496df018388e$var$Utils.getApiBaseUrl();
module.exports.defaults = {
    baseUrl: $4a08496df018388e$var$baseUrl,
    request: {
        agent: $4a08496df018388e$var$Utils.getProxyAgent($4a08496df018388e$var$baseUrl),
        fetch: $4a08496df018388e$var$Utils.getProxyFetch($4a08496df018388e$var$baseUrl)
    }
};
module.exports.GitHub = $5c3b3c70e1caeb80$exports.Octokit.plugin($cdeb2a2572c91718$exports.restEndpointMethods, $b3a39d906bcbc170$exports.paginateRest).defaults(module.exports.defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */ function $4a08496df018388e$var$getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = $4a08496df018388e$var$Utils.getAuthString(token, opts);
    if (auth) opts.auth = auth;
    return opts;
}
module.exports.getOctokitOptions = $4a08496df018388e$var$getOctokitOptions;


