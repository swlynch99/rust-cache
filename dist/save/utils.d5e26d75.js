require("./http-client.a6473211.js");
require("./undici.98bccd06.js");


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
parcelRegister("gsJNG", function(module, exports) {
"use strict";
var $bfc2c9e1f2e5c3a7$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $bfc2c9e1f2e5c3a7$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $bfc2c9e1f2e5c3a7$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $bfc2c9e1f2e5c3a7$var$__createBinding(result, mod, k);
    }
    $bfc2c9e1f2e5c3a7$var$__setModuleDefault(result, mod);
    return result;
};
var $bfc2c9e1f2e5c3a7$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $bfc2c9e1f2e5c3a7$var$httpClient = $bfc2c9e1f2e5c3a7$var$__importStar((parcelRequire("jmQwl")));

var $8flf2 = parcelRequire("8flf2");
function $bfc2c9e1f2e5c3a7$var$getAuthString(token, options) {
    if (!token && !options.auth) throw new Error('Parameter token or opts.auth is required');
    else if (token && options.auth) throw new Error('Parameters token and opts.auth may not both be specified');
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
module.exports.getAuthString = $bfc2c9e1f2e5c3a7$var$getAuthString;
function $bfc2c9e1f2e5c3a7$var$getProxyAgent(destinationUrl) {
    const hc = new $bfc2c9e1f2e5c3a7$var$httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
module.exports.getProxyAgent = $bfc2c9e1f2e5c3a7$var$getProxyAgent;
function $bfc2c9e1f2e5c3a7$var$getProxyAgentDispatcher(destinationUrl) {
    const hc = new $bfc2c9e1f2e5c3a7$var$httpClient.HttpClient();
    return hc.getAgentDispatcher(destinationUrl);
}
module.exports.getProxyAgentDispatcher = $bfc2c9e1f2e5c3a7$var$getProxyAgentDispatcher;
function $bfc2c9e1f2e5c3a7$var$getProxyFetch(destinationUrl) {
    const httpDispatcher = $bfc2c9e1f2e5c3a7$var$getProxyAgentDispatcher(destinationUrl);
    const proxyFetch = (url, opts)=>$bfc2c9e1f2e5c3a7$var$__awaiter(this, void 0, void 0, function*() {
            return (0, $8flf2.fetch)(url, Object.assign(Object.assign({}, opts), {
                dispatcher: httpDispatcher
            }));
        });
    return proxyFetch;
}
module.exports.getProxyFetch = $bfc2c9e1f2e5c3a7$var$getProxyFetch;
function $bfc2c9e1f2e5c3a7$var$getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
module.exports.getApiBaseUrl = $bfc2c9e1f2e5c3a7$var$getApiBaseUrl;

});


