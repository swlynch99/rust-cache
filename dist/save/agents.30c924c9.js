require("./dist.8e7de4a3.js");
require("./dist.6aa32224.js");
var $a53yj$http = require("http");
var $a53yj$https = require("https");
var $a53yj$url = require("url");


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
parcelRegister("f19av", function(module, exports) {
module.exports = new URL("dist.8e7de4a3.js", "file:" + __filename).toString();

});

parcelRegister("gsuc9", function(module, exports) {
module.exports = new URL("dist.6aa32224.js", "file:" + __filename).toString();

});

"use strict";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getAgent = module.exports.pool = void 0;



module.exports.pool = new Map();
/**
 * Determines if a proxy should be considered based on the environment.
 *
 * @param uri The request uri
 * @returns {boolean}
 */ function $c926dc1c0241ec71$var$shouldUseProxyForURI(uri) {
    const noProxyEnv = process.env.NO_PROXY || process.env.no_proxy;
    if (!noProxyEnv) return true;
    const givenURI = new URL(uri);
    for (const noProxyRaw of noProxyEnv.split(',')){
        const noProxy = noProxyRaw.trim();
        if (noProxy === givenURI.origin || noProxy === givenURI.hostname) return false;
        else if (noProxy.startsWith('*.') || noProxy.startsWith('.')) {
            const noProxyWildcard = noProxy.replace(/^\*\./, '.');
            if (givenURI.hostname.endsWith(noProxyWildcard)) return false;
        }
    }
    return true;
}


/**
 * Returns a custom request Agent if one is found, otherwise returns undefined
 * which will result in the global http(s) Agent being used.
 * @private
 * @param {string} uri The request uri
 * @param {Options} reqOpts The request options
 * @returns {HttpAnyAgent|undefined}
 */ function $c926dc1c0241ec71$var$getAgent(uri, reqOpts) {
    const isHttp = uri.startsWith('http://');
    const proxy = reqOpts.proxy || process.env.HTTP_PROXY || process.env.http_proxy || process.env.HTTPS_PROXY || process.env.https_proxy;
    const poolOptions = Object.assign({}, reqOpts.pool);
    const manuallyProvidedProxy = !!reqOpts.proxy;
    const shouldUseProxy = manuallyProvidedProxy || $c926dc1c0241ec71$var$shouldUseProxyForURI(uri);
    if (proxy && shouldUseProxy) {
        // tslint:disable-next-line variable-name
        const Agent = isHttp ? (parcelRequire("f19av")) : (parcelRequire("gsuc9"));
        const proxyOpts = {
            ...(0, $a53yj$url.parse)(proxy),
            ...poolOptions
        };
        return new Agent(proxyOpts);
    }
    let key = isHttp ? 'http' : 'https';
    if (reqOpts.forever) {
        key += ':forever';
        if (!module.exports.pool.has(key)) {
            // tslint:disable-next-line variable-name
            const Agent = isHttp ? $a53yj$http.Agent : $a53yj$https.Agent;
            module.exports.pool.set(key, new Agent({
                ...poolOptions,
                keepAlive: true
            }));
        }
    }
    return module.exports.pool.get(key);
}
module.exports.getAgent = $c926dc1c0241ec71$var$getAgent;


