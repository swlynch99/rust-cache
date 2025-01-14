
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
parcelRegister("6fIWJ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.checkBypass = module.exports.getProxyUrl = void 0;
function $48d7022ff44e820a$var$getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if ($48d7022ff44e820a$var$checkBypass(reqUrl)) return undefined;
    const proxyVar = (()=>{
        if (usingSsl) return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        else return process.env['http_proxy'] || process.env['HTTP_PROXY'];
    })();
    if (proxyVar) try {
        return new $48d7022ff44e820a$var$DecodedURL(proxyVar);
    } catch (_a) {
        if (!proxyVar.startsWith('http://') && !proxyVar.startsWith('https://')) return new $48d7022ff44e820a$var$DecodedURL(`http://${proxyVar}`);
    }
    else return undefined;
}
module.exports.getProxyUrl = $48d7022ff44e820a$var$getProxyUrl;
function $48d7022ff44e820a$var$checkBypass(reqUrl) {
    if (!reqUrl.hostname) return false;
    const reqHost = reqUrl.hostname;
    if ($48d7022ff44e820a$var$isLoopbackAddress(reqHost)) return true;
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) return false;
    // Determine the request port
    let reqPort;
    if (reqUrl.port) reqPort = Number(reqUrl.port);
    else if (reqUrl.protocol === 'http:') reqPort = 80;
    else if (reqUrl.protocol === 'https:') reqPort = 443;
    // Format the request hostname and hostname with port
    const upperReqHosts = [
        reqUrl.hostname.toUpperCase()
    ];
    if (typeof reqPort === 'number') upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy.split(',').map((x)=>x.trim().toUpperCase()).filter((x)=>x)){
        if (upperNoProxyItem === '*' || upperReqHosts.some((x)=>x === upperNoProxyItem || x.endsWith(`.${upperNoProxyItem}`) || upperNoProxyItem.startsWith('.') && x.endsWith(`${upperNoProxyItem}`))) return true;
    }
    return false;
}
module.exports.checkBypass = $48d7022ff44e820a$var$checkBypass;
function $48d7022ff44e820a$var$isLoopbackAddress(host) {
    const hostLower = host.toLowerCase();
    return hostLower === 'localhost' || hostLower.startsWith('127.') || hostLower.startsWith('[::1]') || hostLower.startsWith('[0:0:0:0:0:0:0:1]');
}
class $48d7022ff44e820a$var$DecodedURL extends URL {
    constructor(url, base){
        super(url, base);
        this._decodedUsername = decodeURIComponent(super.username);
        this._decodedPassword = decodeURIComponent(super.password);
    }
    get username() {
        return this._decodedUsername;
    }
    get password() {
        return this._decodedPassword;
    }
}

});


