require("./http-client.469d5c68.js");
require("./undici.8b355dd9.js");


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
parcelRegister("gIU5N", function(module, exports) {
"use strict";
var $c2cc4430122f917f$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $c2cc4430122f917f$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $c2cc4430122f917f$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $c2cc4430122f917f$var$__createBinding(result, mod, k);
    }
    $c2cc4430122f917f$var$__setModuleDefault(result, mod);
    return result;
};
var $c2cc4430122f917f$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getApiBaseUrl = module.exports.getProxyFetch = module.exports.getProxyAgentDispatcher = module.exports.getProxyAgent = module.exports.getAuthString = void 0;

const $c2cc4430122f917f$var$httpClient = $c2cc4430122f917f$var$__importStar((parcelRequire("14jHk")));

var $eX2cs = parcelRequire("eX2cs");
function $c2cc4430122f917f$var$getAuthString(token, options) {
    if (!token && !options.auth) throw new Error('Parameter token or opts.auth is required');
    else if (token && options.auth) throw new Error('Parameters token and opts.auth may not both be specified');
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
module.exports.getAuthString = $c2cc4430122f917f$var$getAuthString;
function $c2cc4430122f917f$var$getProxyAgent(destinationUrl) {
    const hc = new $c2cc4430122f917f$var$httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
module.exports.getProxyAgent = $c2cc4430122f917f$var$getProxyAgent;
function $c2cc4430122f917f$var$getProxyAgentDispatcher(destinationUrl) {
    const hc = new $c2cc4430122f917f$var$httpClient.HttpClient();
    return hc.getAgentDispatcher(destinationUrl);
}
module.exports.getProxyAgentDispatcher = $c2cc4430122f917f$var$getProxyAgentDispatcher;
function $c2cc4430122f917f$var$getProxyFetch(destinationUrl) {
    const httpDispatcher = $c2cc4430122f917f$var$getProxyAgentDispatcher(destinationUrl);
    const proxyFetch = (url, opts)=>$c2cc4430122f917f$var$__awaiter(this, void 0, void 0, function*() {
            return (0, $eX2cs.fetch)(url, Object.assign(Object.assign({}, opts), {
                dispatcher: httpDispatcher
            }));
        });
    return proxyFetch;
}
module.exports.getProxyFetch = $c2cc4430122f917f$var$getProxyFetch;
function $c2cc4430122f917f$var$getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
module.exports.getApiBaseUrl = $c2cc4430122f917f$var$getApiBaseUrl;

});


//# sourceMappingURL=utils.3713a2a2.js.map
