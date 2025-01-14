require("./dist.e0d52dd0.js");
require("./dist.e00451aa.js");
require("./log.7103fd4e.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $3438f8b2d046489d$exports = {};
$3438f8b2d046489d$exports = new URL("dist.e0d52dd0.js", "file:" + __filename).toString();


var $2376789199039aa3$exports = {};
$2376789199039aa3$exports = new URL("dist.e00451aa.js", "file:" + __filename).toString();



var $53OzH = parcelRequire("53OzH");
const $b786da625064e360$var$HTTPS_PROXY = "HTTPS_PROXY";
const $b786da625064e360$var$HTTP_PROXY = "HTTP_PROXY";
const $b786da625064e360$var$ALL_PROXY = "ALL_PROXY";
const $b786da625064e360$var$NO_PROXY = "NO_PROXY";
const $b786da625064e360$export$da40def3840f10fb = "proxyPolicy";
const $b786da625064e360$export$99daa5bb825aae16 = [];
let $b786da625064e360$var$noProxyListLoaded = false;
/** A cache of whether a host should bypass the proxy. */ const $b786da625064e360$var$globalBypassedMap = new Map();
function $b786da625064e360$var$getEnvironmentValue(name) {
    if (process.env[name]) return process.env[name];
    else if (process.env[name.toLowerCase()]) return process.env[name.toLowerCase()];
    return undefined;
}
function $b786da625064e360$var$loadEnvironmentProxyValue() {
    if (!process) return undefined;
    const httpsProxy = $b786da625064e360$var$getEnvironmentValue($b786da625064e360$var$HTTPS_PROXY);
    const allProxy = $b786da625064e360$var$getEnvironmentValue($b786da625064e360$var$ALL_PROXY);
    const httpProxy = $b786da625064e360$var$getEnvironmentValue($b786da625064e360$var$HTTP_PROXY);
    return httpsProxy || allProxy || httpProxy;
}
/**
 * Check whether the host of a given `uri` matches any pattern in the no proxy list.
 * If there's a match, any request sent to the same host shouldn't have the proxy settings set.
 * This implementation is a port of https://github.com/Azure/azure-sdk-for-net/blob/8cca811371159e527159c7eb65602477898683e2/sdk/core/Azure.Core/src/Pipeline/Internal/HttpEnvironmentProxy.cs#L210
 */ function $b786da625064e360$var$isBypassed(uri, noProxyList, bypassedMap) {
    if (noProxyList.length === 0) return false;
    const host = new URL(uri).hostname;
    if (bypassedMap === null || bypassedMap === void 0 ? void 0 : bypassedMap.has(host)) return bypassedMap.get(host);
    let isBypassedFlag = false;
    for (const pattern of noProxyList){
        if (pattern[0] === ".") {
            // This should match either domain it self or any subdomain or host
            // .foo.com will match foo.com it self or *.foo.com
            if (host.endsWith(pattern)) isBypassedFlag = true;
            else if (host.length === pattern.length - 1 && host === pattern.slice(1)) isBypassedFlag = true;
        } else if (host === pattern) isBypassedFlag = true;
    }
    bypassedMap === null || bypassedMap === void 0 || bypassedMap.set(host, isBypassedFlag);
    return isBypassedFlag;
}
function $b786da625064e360$export$83a60172d4a8686f() {
    const noProxy = $b786da625064e360$var$getEnvironmentValue($b786da625064e360$var$NO_PROXY);
    $b786da625064e360$var$noProxyListLoaded = true;
    if (noProxy) return noProxy.split(",").map((item)=>item.trim()).filter((item)=>item.length);
    return [];
}
function $b786da625064e360$export$a59f045a6868232f(proxyUrl) {
    if (!proxyUrl) {
        proxyUrl = $b786da625064e360$var$loadEnvironmentProxyValue();
        if (!proxyUrl) return undefined;
    }
    const parsedUrl = new URL(proxyUrl);
    const schema = parsedUrl.protocol ? parsedUrl.protocol + "//" : "";
    return {
        host: schema + parsedUrl.hostname,
        port: Number.parseInt(parsedUrl.port || "80"),
        username: parsedUrl.username,
        password: parsedUrl.password
    };
}
/**
 * This method attempts to parse a proxy URL from the environment
 * variables `HTTPS_PROXY` or `HTTP_PROXY`.
 */ function $b786da625064e360$var$getDefaultProxySettingsInternal() {
    const envProxy = $b786da625064e360$var$loadEnvironmentProxyValue();
    return envProxy ? new URL(envProxy) : undefined;
}
function $b786da625064e360$var$getUrlFromProxySettings(settings) {
    let parsedProxyUrl;
    try {
        parsedProxyUrl = new URL(settings.host);
    } catch (_a) {
        throw new Error(`Expecting a valid host string in proxy settings, but found "${settings.host}".`);
    }
    parsedProxyUrl.port = String(settings.port);
    if (settings.username) parsedProxyUrl.username = settings.username;
    if (settings.password) parsedProxyUrl.password = settings.password;
    return parsedProxyUrl;
}
function $b786da625064e360$var$setProxyAgentOnRequest(request, cachedAgents, proxyUrl) {
    // Custom Agent should take precedence so if one is present
    // we should skip to avoid overwriting it.
    if (request.agent) return;
    const url = new URL(request.url);
    const isInsecure = url.protocol !== "https:";
    if (request.tlsSettings) (0, $53OzH.logger).warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
    const headers = request.headers.toJSON();
    if (isInsecure) {
        if (!cachedAgents.httpProxyAgent) cachedAgents.httpProxyAgent = new (0, $2376789199039aa3$exports.HttpProxyAgent)(proxyUrl, {
            headers: headers
        });
        request.agent = cachedAgents.httpProxyAgent;
    } else {
        if (!cachedAgents.httpsProxyAgent) cachedAgents.httpsProxyAgent = new (0, $3438f8b2d046489d$exports.HttpsProxyAgent)(proxyUrl, {
            headers: headers
        });
        request.agent = cachedAgents.httpsProxyAgent;
    }
}
function $b786da625064e360$export$c8ba111c8b5cde39(proxySettings, options) {
    if (!$b786da625064e360$var$noProxyListLoaded) $b786da625064e360$export$99daa5bb825aae16.push(...$b786da625064e360$export$83a60172d4a8686f());
    const defaultProxy = proxySettings ? $b786da625064e360$var$getUrlFromProxySettings(proxySettings) : $b786da625064e360$var$getDefaultProxySettingsInternal();
    const cachedAgents = {};
    return {
        name: $b786da625064e360$export$da40def3840f10fb,
        async sendRequest (request, next) {
            var _a;
            if (!request.proxySettings && defaultProxy && !$b786da625064e360$var$isBypassed(request.url, (_a = options === null || options === void 0 ? void 0 : options.customNoProxyList) !== null && _a !== void 0 ? _a : $b786da625064e360$export$99daa5bb825aae16, (options === null || options === void 0 ? void 0 : options.customNoProxyList) ? undefined : $b786da625064e360$var$globalBypassedMap)) $b786da625064e360$var$setProxyAgentOnRequest(request, cachedAgents, defaultProxy);
            else if (request.proxySettings) $b786da625064e360$var$setProxyAgentOnRequest(request, cachedAgents, $b786da625064e360$var$getUrlFromProxySettings(request.proxySettings));
            return next(request);
        }
    };
}


