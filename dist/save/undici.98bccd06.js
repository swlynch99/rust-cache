require("./client.060f523e.js");
require("./dispatcher.c6f1a8de.js");
require("./errors.12b0f892.js");
require("./pool.0c09492a.js");
require("./balanced-pool.6cb84bba.js");
require("./agent.7a15b627.js");
require("./util.c7a5ec55.js");
require("./api.c65a4f3d.js");
require("./connect.db50106d.js");
require("./mock-client.28fd70e5.js");
require("./mock-agent.690f0959.js");
require("./mock-pool.6271ea2d.js");
require("./mock-errors.89a97636.js");
require("./proxy-agent.8fe61986.js");
require("./RetryHandler.a4235d10.js");
require("./global.7bda9dcb.js");
require("./DecoratorHandler.505b0703.js");
require("./RedirectHandler.2c1dd810.js");
require("./redirectInterceptor.98adf1a5.js");
require("./fetch.10d96288.js");
require("./headers.f20c41e6.js");
require("./response.a1a02e8d.js");
require("./request.496a0aac.js");
require("./formdata.b4f5d8f5.js");
require("./file.19f8e03c.js");
require("./filereader.26a0a0f5.js");
require("./global.d3d2cc7c.js");
require("./cachestorage.894791dd.js");
require("./symbols.fbc21de4.js");
require("./cookies.75308b74.js");
require("./dataURL.134f460a.js");
require("./websocket.50e4d463.js");


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
parcelRegister("9nOLo", function(module, exports) {
module.exports = new URL("fetch.10d96288.js", "file:" + __filename).toString();

});

parcelRegister("67z85", function(module, exports) {
module.exports = new URL("filereader.26a0a0f5.js", "file:" + __filename).toString();

});

parcelRegister("ivRKZ", function(module, exports) {
module.exports = new URL("cachestorage.894791dd.js", "file:" + __filename).toString();

});

parcelRegister("5sYzf", function(module, exports) {
module.exports = new URL("cookies.75308b74.js", "file:" + __filename).toString();

});

parcelRegister("3MUiu", function(module, exports) {
module.exports = new URL("websocket.50e4d463.js", "file:" + __filename).toString();

});

var $60103395bc831502$export$ab054a1ef92eeb01;
var $60103395bc831502$export$1f2bb630327ac4b6;
var $60103395bc831502$export$14963ee5c8637e11;
var $60103395bc831502$export$3ea9790e91014eeb;
var $60103395bc831502$export$f05c48a4001d5356;
var $60103395bc831502$export$6f9e642c23f9615d;
var $60103395bc831502$export$cfbc337f7857f27a;
var $60103395bc831502$export$c3def51f5c0b7771;
var $60103395bc831502$export$9af91951fcedc08c;
var $60103395bc831502$export$e56ca57b32a6e9c7;
var $60103395bc831502$export$ebbe0f536b18196e;
var $60103395bc831502$export$30f3b02011db23c0;
var $60103395bc831502$export$ea76ac48857e9378;
var $60103395bc831502$export$6f0c702cbe7d6ed8;
var $60103395bc831502$export$e7aa7bc5c1b3cfb3;
var $60103395bc831502$export$79b704688b15c0f4;
var $60103395bc831502$export$9f633d56d7ec90d3;
var $60103395bc831502$export$7fa6c5b6f8193917;
var $60103395bc831502$export$3963aa24c930693c;
var $60103395bc831502$export$b6afa8811b7e644e;
var $60103395bc831502$export$3c8f13373e08d457;
var $60103395bc831502$export$79f8e34925aa870f;
var $60103395bc831502$export$4b73629724933f6e;
// Cache & CacheStorage are tightly coupled with fetch. Even if it may run
// in an older version of Node, it doesn't have any use without fetch.
var $60103395bc831502$export$50ac77867c9f1e40;
var $60103395bc831502$export$b43e45590305ffaa;
var $60103395bc831502$export$f3eb5caaef7b2b34;
var $60103395bc831502$export$14dd963aa71ac36d;
var $60103395bc831502$export$110700823644f4a6;
var $60103395bc831502$export$85e6adb445fa3ef0;
var $60103395bc831502$export$b00e4516a48bbc61;
var $60103395bc831502$export$3909fb301d3dc8c9;
var $60103395bc831502$export$b5fe3f66a567bec0;
var $60103395bc831502$export$4938110305e6185f;
var $60103395bc831502$export$43f28b24e1eb8181;
var $60103395bc831502$export$64605811ab45167f;
var $60103395bc831502$export$ba387509dbaf942e;
var $60103395bc831502$export$8ff68bc3613e0197;
var $60103395bc831502$export$e3431e6e5e89c327;
var $60103395bc831502$export$44e9728040f17046;
var $60103395bc831502$export$7219863409fc71b7;
'use strict';
var $a9e7b4140745f946$exports = {};
$a9e7b4140745f946$exports = new URL("client.060f523e.js", "file:" + __filename).toString();



var $4A6EU = parcelRequire("4A6EU");

var $hA22O = parcelRequire("hA22O");
var $a175d5c551c35735$exports = {};
$a175d5c551c35735$exports = new URL("pool.0c09492a.js", "file:" + __filename).toString();


var $fb6e2cdd0b40cb25$exports = {};
$fb6e2cdd0b40cb25$exports = new URL("balanced-pool.6cb84bba.js", "file:" + __filename).toString();


var $38fe2f038a61bff8$exports = {};
$38fe2f038a61bff8$exports = new URL("agent.7a15b627.js", "file:" + __filename).toString();



var $iiSZx = parcelRequire("iiSZx");
const { InvalidArgumentError: $60103395bc831502$var$InvalidArgumentError } = $hA22O;
var $aad5ae0ec61640c4$exports = {};
$aad5ae0ec61640c4$exports = new URL("api.c65a4f3d.js", "file:" + __filename).toString();



var $eroPN = parcelRequire("eroPN");
var $dccf607fe6b538bc$exports = {};
$dccf607fe6b538bc$exports = new URL("mock-client.28fd70e5.js", "file:" + __filename).toString();


var $3a84dad2cd237704$exports = {};
$3a84dad2cd237704$exports = new URL("mock-agent.690f0959.js", "file:" + __filename).toString();



var $c8lrb = parcelRequire("c8lrb");

var $bafmC = parcelRequire("bafmC");
var $7062fee30e7bc059$exports = {};
$7062fee30e7bc059$exports = new URL("proxy-agent.8fe61986.js", "file:" + __filename).toString();


var $d297e032e826dd49$exports = {};
$d297e032e826dd49$exports = new URL("RetryHandler.a4235d10.js", "file:" + __filename).toString();


var $0d1ecb35ae7bf27c$exports = {};
$0d1ecb35ae7bf27c$exports = new URL("global.7bda9dcb.js", "file:" + __filename).toString();


var $60103395bc831502$require$getGlobalDispatcher = $0d1ecb35ae7bf27c$exports.getGlobalDispatcher;
var $60103395bc831502$require$setGlobalDispatcher = $0d1ecb35ae7bf27c$exports.setGlobalDispatcher;
var $1dc392dc988e50a3$exports = {};
$1dc392dc988e50a3$exports = new URL("DecoratorHandler.505b0703.js", "file:" + __filename).toString();



var $85LTi = parcelRequire("85LTi");

var $gOOBQ = parcelRequire("gOOBQ");
let $60103395bc831502$var$hasCrypto;

try {
    $60103395bc831502$import$ddd3d8d4c32dbb7f;
    $60103395bc831502$var$hasCrypto = true;
} catch  {
    $60103395bc831502$var$hasCrypto = false;
}
Object.assign($4A6EU.prototype, $aad5ae0ec61640c4$exports);
$60103395bc831502$export$ab054a1ef92eeb01 = $4A6EU;
$60103395bc831502$export$1f2bb630327ac4b6 = $a9e7b4140745f946$exports;
$60103395bc831502$export$14963ee5c8637e11 = $a175d5c551c35735$exports;
$60103395bc831502$export$3ea9790e91014eeb = $fb6e2cdd0b40cb25$exports;
$60103395bc831502$export$f05c48a4001d5356 = $38fe2f038a61bff8$exports;
$60103395bc831502$export$6f9e642c23f9615d = $7062fee30e7bc059$exports;
$60103395bc831502$export$cfbc337f7857f27a = $d297e032e826dd49$exports;
$60103395bc831502$export$c3def51f5c0b7771 = $1dc392dc988e50a3$exports;
$60103395bc831502$export$9af91951fcedc08c = $85LTi;
$60103395bc831502$export$e56ca57b32a6e9c7 = $gOOBQ;
$60103395bc831502$export$ebbe0f536b18196e = $eroPN;
$60103395bc831502$export$30f3b02011db23c0 = $hA22O;
function $60103395bc831502$var$makeDispatcher(fn) {
    return (url, opts, handler)=>{
        if (typeof opts === 'function') {
            handler = opts;
            opts = null;
        }
        if (!url || typeof url !== 'string' && typeof url !== 'object' && !(url instanceof URL)) throw new $60103395bc831502$var$InvalidArgumentError('invalid url');
        if (opts != null && typeof opts !== 'object') throw new $60103395bc831502$var$InvalidArgumentError('invalid opts');
        if (opts && opts.path != null) {
            if (typeof opts.path !== 'string') throw new $60103395bc831502$var$InvalidArgumentError('invalid opts.path');
            let path = opts.path;
            if (!opts.path.startsWith('/')) path = `/${path}`;
            url = new URL($iiSZx.parseOrigin(url).origin + path);
        } else {
            if (!opts) opts = typeof url === 'object' ? url : {};
            url = $iiSZx.parseURL(url);
        }
        const { agent: agent, dispatcher: dispatcher = $60103395bc831502$require$getGlobalDispatcher() } = opts;
        if (agent) throw new $60103395bc831502$var$InvalidArgumentError('unsupported opts.agent. Did you mean opts.client?');
        return fn.call(dispatcher, {
            ...opts,
            origin: url.origin,
            path: url.search ? `${url.pathname}${url.search}` : url.pathname,
            method: opts.method || (opts.body ? 'PUT' : 'GET')
        }, handler);
    };
}
$60103395bc831502$export$ea76ac48857e9378 = $60103395bc831502$require$setGlobalDispatcher;
$60103395bc831502$export$6f0c702cbe7d6ed8 = $60103395bc831502$require$getGlobalDispatcher;










if ($iiSZx.nodeMajor > 16 || $iiSZx.nodeMajor === 16 && $iiSZx.nodeMinor >= 8) {
    let fetchImpl = null;
    $60103395bc831502$export$e7aa7bc5c1b3cfb3 = async function fetch(resource) {
        if (!fetchImpl) fetchImpl = (parcelRequire("9nOLo")).fetch;
        try {
            return await fetchImpl(...arguments);
        } catch (err) {
            if (typeof err === 'object') Error.captureStackTrace(err, this);
            throw err;
        }
    };
    $60103395bc831502$export$79b704688b15c0f4 = (parcelRequire("3FPVg")).Headers;
    $60103395bc831502$export$9f633d56d7ec90d3 = (parcelRequire("e5BYI")).Response;
    $60103395bc831502$export$7fa6c5b6f8193917 = (parcelRequire("8QOzY")).Request;
    $60103395bc831502$export$3963aa24c930693c = (parcelRequire("3vA63")).FormData;
    $60103395bc831502$export$b6afa8811b7e644e = (parcelRequire("eH7kt")).File;
    $60103395bc831502$export$3c8f13373e08d457 = (parcelRequire("67z85")).FileReader;
    const { setGlobalOrigin: setGlobalOrigin, getGlobalOrigin: getGlobalOrigin } = (parcelRequire("39VSP"));
    $60103395bc831502$export$79f8e34925aa870f = setGlobalOrigin;
    $60103395bc831502$export$4b73629724933f6e = getGlobalOrigin;
    const { CacheStorage: CacheStorage } = (parcelRequire("ivRKZ"));
    const { kConstruct: kConstruct } = (parcelRequire("aXKk6"));
    $60103395bc831502$export$50ac77867c9f1e40 = new CacheStorage(kConstruct);
}


if ($iiSZx.nodeMajor >= 16) {
    const { deleteCookie: deleteCookie, getCookies: getCookies, getSetCookies: getSetCookies, setCookie: setCookie } = (parcelRequire("5sYzf"));
    $60103395bc831502$export$b43e45590305ffaa = deleteCookie;
    $60103395bc831502$export$f3eb5caaef7b2b34 = getCookies;
    $60103395bc831502$export$14dd963aa71ac36d = getSetCookies;
    $60103395bc831502$export$110700823644f4a6 = setCookie;
    const { parseMIMEType: parseMIMEType, serializeAMimeType: serializeAMimeType } = (parcelRequire("4o5iY"));
    $60103395bc831502$export$85e6adb445fa3ef0 = parseMIMEType;
    $60103395bc831502$export$b00e4516a48bbc61 = serializeAMimeType;
}

if ($iiSZx.nodeMajor >= 18 && $60103395bc831502$var$hasCrypto) {
    const { WebSocket: WebSocket } = (parcelRequire("3MUiu"));
    $60103395bc831502$export$3909fb301d3dc8c9 = WebSocket;
}
$60103395bc831502$export$b5fe3f66a567bec0 = $60103395bc831502$var$makeDispatcher($aad5ae0ec61640c4$exports.request);
$60103395bc831502$export$4938110305e6185f = $60103395bc831502$var$makeDispatcher($aad5ae0ec61640c4$exports.stream);
$60103395bc831502$export$43f28b24e1eb8181 = $60103395bc831502$var$makeDispatcher($aad5ae0ec61640c4$exports.pipeline);
$60103395bc831502$export$64605811ab45167f = $60103395bc831502$var$makeDispatcher($aad5ae0ec61640c4$exports.connect);
$60103395bc831502$export$ba387509dbaf942e = $60103395bc831502$var$makeDispatcher($aad5ae0ec61640c4$exports.upgrade);
$60103395bc831502$export$8ff68bc3613e0197 = $dccf607fe6b538bc$exports;
$60103395bc831502$export$e3431e6e5e89c327 = $c8lrb;
$60103395bc831502$export$44e9728040f17046 = $3a84dad2cd237704$exports;
$60103395bc831502$export$7219863409fc71b7 = $bafmC;


