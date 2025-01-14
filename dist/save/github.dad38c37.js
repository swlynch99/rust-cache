require("./context.0a90c546.js");
require("./utils.63c2697f.js");


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
parcelRegister("ddNiM", function(module, exports) {
module.exports = new URL("context.0a90c546.js", "file:" + __filename).toString();

});

"use strict";
var $db27d21da0e6e1db$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $db27d21da0e6e1db$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $db27d21da0e6e1db$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $db27d21da0e6e1db$var$__createBinding(result, mod, k);
    }
    $db27d21da0e6e1db$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getOctokit = module.exports.context = void 0;

const $db27d21da0e6e1db$var$Context = $db27d21da0e6e1db$var$__importStar((parcelRequire("ddNiM")));
var $aca8734f065f3011$exports = {};
$aca8734f065f3011$exports = new URL("utils.63c2697f.js", "file:" + __filename).toString();


module.exports.context = new $db27d21da0e6e1db$var$Context.Context();
/**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */ function $db27d21da0e6e1db$var$getOctokit(token, options, ...additionalPlugins) {
    const GitHubWithPlugins = $aca8734f065f3011$exports.GitHub.plugin(...additionalPlugins);
    return new GitHubWithPlugins((0, $aca8734f065f3011$exports.getOctokitOptions)(token, options));
}
module.exports.getOctokit = $db27d21da0e6e1db$var$getOctokit;


