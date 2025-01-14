require("./client.a6515ab6.js");
require("./dispatcher.1061760d.js");
require("./errors.621f8b7b.js");
require("./pool.5e3fe8ea.js");
require("./balanced-pool.cbc80253.js");
require("./agent.886e033b.js");
require("./util.26715e80.js");
require("./api.ab97ffe2.js");
require("./connect.7d5a8838.js");
require("./mock-client.41ce9dc9.js");
require("./mock-agent.7956c1fd.js");
require("./mock-pool.ae9e0f3a.js");
require("./mock-errors.3465bf79.js");
require("./proxy-agent.95acd85b.js");
require("./RetryHandler.ab25dfe6.js");
require("./global.206e7c2a.js");
require("./DecoratorHandler.e14ac990.js");
require("./RedirectHandler.ae412ec5.js");
require("./redirectInterceptor.0ad78b0c.js");
require("./fetch.058a13c7.js");
require("./headers.e172861b.js");
require("./response.b4e7d51a.js");
require("./request.5e9cadd2.js");
require("./formdata.1236317b.js");
require("./file.7f783dcd.js");
require("./filereader.25ebfa20.js");
require("./global.12b98812.js");
require("./cachestorage.1945f819.js");
require("./symbols.063ce0fc.js");
require("./cookies.fc857b9d.js");
require("./dataURL.a565585e.js");
require("./websocket.075b181e.js");


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
parcelRegister("9tSFF", function(module, exports) {
module.exports = new URL("fetch.058a13c7.js", "file:" + __filename).toString();

});

parcelRegister("1v8ik", function(module, exports) {
module.exports = new URL("filereader.25ebfa20.js", "file:" + __filename).toString();

});

parcelRegister("3gVI0", function(module, exports) {
module.exports = new URL("cachestorage.1945f819.js", "file:" + __filename).toString();

});

parcelRegister("1GxCc", function(module, exports) {
module.exports = new URL("cookies.fc857b9d.js", "file:" + __filename).toString();

});

parcelRegister("doEKk", function(module, exports) {
module.exports = new URL("websocket.075b181e.js", "file:" + __filename).toString();

});

var $ae28483e1af2f46b$export$ab054a1ef92eeb01;
var $ae28483e1af2f46b$export$1f2bb630327ac4b6;
var $ae28483e1af2f46b$export$14963ee5c8637e11;
var $ae28483e1af2f46b$export$3ea9790e91014eeb;
var $ae28483e1af2f46b$export$f05c48a4001d5356;
var $ae28483e1af2f46b$export$6f9e642c23f9615d;
var $ae28483e1af2f46b$export$cfbc337f7857f27a;
var $ae28483e1af2f46b$export$c3def51f5c0b7771;
var $ae28483e1af2f46b$export$9af91951fcedc08c;
var $ae28483e1af2f46b$export$e56ca57b32a6e9c7;
var $ae28483e1af2f46b$export$ebbe0f536b18196e;
var $ae28483e1af2f46b$export$30f3b02011db23c0;
var $ae28483e1af2f46b$export$ea76ac48857e9378;
var $ae28483e1af2f46b$export$6f0c702cbe7d6ed8;
var $ae28483e1af2f46b$export$e7aa7bc5c1b3cfb3;
var $ae28483e1af2f46b$export$79b704688b15c0f4;
var $ae28483e1af2f46b$export$9f633d56d7ec90d3;
var $ae28483e1af2f46b$export$7fa6c5b6f8193917;
var $ae28483e1af2f46b$export$3963aa24c930693c;
var $ae28483e1af2f46b$export$b6afa8811b7e644e;
var $ae28483e1af2f46b$export$3c8f13373e08d457;
var $ae28483e1af2f46b$export$79f8e34925aa870f;
var $ae28483e1af2f46b$export$4b73629724933f6e;
// Cache & CacheStorage are tightly coupled with fetch. Even if it may run
// in an older version of Node, it doesn't have any use without fetch.
var $ae28483e1af2f46b$export$50ac77867c9f1e40;
var $ae28483e1af2f46b$export$b43e45590305ffaa;
var $ae28483e1af2f46b$export$f3eb5caaef7b2b34;
var $ae28483e1af2f46b$export$14dd963aa71ac36d;
var $ae28483e1af2f46b$export$110700823644f4a6;
var $ae28483e1af2f46b$export$85e6adb445fa3ef0;
var $ae28483e1af2f46b$export$b00e4516a48bbc61;
var $ae28483e1af2f46b$export$3909fb301d3dc8c9;
var $ae28483e1af2f46b$export$b5fe3f66a567bec0;
var $ae28483e1af2f46b$export$4938110305e6185f;
var $ae28483e1af2f46b$export$43f28b24e1eb8181;
var $ae28483e1af2f46b$export$64605811ab45167f;
var $ae28483e1af2f46b$export$ba387509dbaf942e;
var $ae28483e1af2f46b$export$8ff68bc3613e0197;
var $ae28483e1af2f46b$export$e3431e6e5e89c327;
var $ae28483e1af2f46b$export$44e9728040f17046;
var $ae28483e1af2f46b$export$7219863409fc71b7;
'use strict';
var $a19bd9e24e15654f$exports = {};
$a19bd9e24e15654f$exports = new URL("client.a6515ab6.js", "file:" + __filename).toString();



var $l9JHF = parcelRequire("l9JHF");

var $4V3Kr = parcelRequire("4V3Kr");
var $54d1c787388acf5a$exports = {};
$54d1c787388acf5a$exports = new URL("pool.5e3fe8ea.js", "file:" + __filename).toString();


var $6aa468a7369b76b9$exports = {};
$6aa468a7369b76b9$exports = new URL("balanced-pool.cbc80253.js", "file:" + __filename).toString();


var $b1c38c7301f0a80f$exports = {};
$b1c38c7301f0a80f$exports = new URL("agent.886e033b.js", "file:" + __filename).toString();



var $1Z05w = parcelRequire("1Z05w");
const { InvalidArgumentError: $ae28483e1af2f46b$var$InvalidArgumentError } = $4V3Kr;
var $c2abc21538860750$exports = {};
$c2abc21538860750$exports = new URL("api.ab97ffe2.js", "file:" + __filename).toString();



var $bi3kp = parcelRequire("bi3kp");
var $163c17fbd52b34ee$exports = {};
$163c17fbd52b34ee$exports = new URL("mock-client.41ce9dc9.js", "file:" + __filename).toString();


var $fc4da8421f1b8631$exports = {};
$fc4da8421f1b8631$exports = new URL("mock-agent.7956c1fd.js", "file:" + __filename).toString();



var $KADN9 = parcelRequire("KADN9");

var $1AmsH = parcelRequire("1AmsH");
var $a5987a109059b922$exports = {};
$a5987a109059b922$exports = new URL("proxy-agent.95acd85b.js", "file:" + __filename).toString();


var $3df4fe28a9a47e1c$exports = {};
$3df4fe28a9a47e1c$exports = new URL("RetryHandler.ab25dfe6.js", "file:" + __filename).toString();


var $899973e407c09ce5$exports = {};
$899973e407c09ce5$exports = new URL("global.206e7c2a.js", "file:" + __filename).toString();


var $ae28483e1af2f46b$require$getGlobalDispatcher = $899973e407c09ce5$exports.getGlobalDispatcher;
var $ae28483e1af2f46b$require$setGlobalDispatcher = $899973e407c09ce5$exports.setGlobalDispatcher;
var $3833b00209c40020$exports = {};
$3833b00209c40020$exports = new URL("DecoratorHandler.e14ac990.js", "file:" + __filename).toString();



var $46mQE = parcelRequire("46mQE");

var $c4cEr = parcelRequire("c4cEr");
let $ae28483e1af2f46b$var$hasCrypto;

try {
    $ae28483e1af2f46b$import$ddd3d8d4c32dbb7f;
    $ae28483e1af2f46b$var$hasCrypto = true;
} catch  {
    $ae28483e1af2f46b$var$hasCrypto = false;
}
Object.assign($l9JHF.prototype, $c2abc21538860750$exports);
$ae28483e1af2f46b$export$ab054a1ef92eeb01 = $l9JHF;
$ae28483e1af2f46b$export$1f2bb630327ac4b6 = $a19bd9e24e15654f$exports;
$ae28483e1af2f46b$export$14963ee5c8637e11 = $54d1c787388acf5a$exports;
$ae28483e1af2f46b$export$3ea9790e91014eeb = $6aa468a7369b76b9$exports;
$ae28483e1af2f46b$export$f05c48a4001d5356 = $b1c38c7301f0a80f$exports;
$ae28483e1af2f46b$export$6f9e642c23f9615d = $a5987a109059b922$exports;
$ae28483e1af2f46b$export$cfbc337f7857f27a = $3df4fe28a9a47e1c$exports;
$ae28483e1af2f46b$export$c3def51f5c0b7771 = $3833b00209c40020$exports;
$ae28483e1af2f46b$export$9af91951fcedc08c = $46mQE;
$ae28483e1af2f46b$export$e56ca57b32a6e9c7 = $c4cEr;
$ae28483e1af2f46b$export$ebbe0f536b18196e = $bi3kp;
$ae28483e1af2f46b$export$30f3b02011db23c0 = $4V3Kr;
function $ae28483e1af2f46b$var$makeDispatcher(fn) {
    return (url, opts, handler)=>{
        if (typeof opts === 'function') {
            handler = opts;
            opts = null;
        }
        if (!url || typeof url !== 'string' && typeof url !== 'object' && !(url instanceof URL)) throw new $ae28483e1af2f46b$var$InvalidArgumentError('invalid url');
        if (opts != null && typeof opts !== 'object') throw new $ae28483e1af2f46b$var$InvalidArgumentError('invalid opts');
        if (opts && opts.path != null) {
            if (typeof opts.path !== 'string') throw new $ae28483e1af2f46b$var$InvalidArgumentError('invalid opts.path');
            let path = opts.path;
            if (!opts.path.startsWith('/')) path = `/${path}`;
            url = new URL($1Z05w.parseOrigin(url).origin + path);
        } else {
            if (!opts) opts = typeof url === 'object' ? url : {};
            url = $1Z05w.parseURL(url);
        }
        const { agent: agent, dispatcher: dispatcher = $ae28483e1af2f46b$require$getGlobalDispatcher() } = opts;
        if (agent) throw new $ae28483e1af2f46b$var$InvalidArgumentError('unsupported opts.agent. Did you mean opts.client?');
        return fn.call(dispatcher, {
            ...opts,
            origin: url.origin,
            path: url.search ? `${url.pathname}${url.search}` : url.pathname,
            method: opts.method || (opts.body ? 'PUT' : 'GET')
        }, handler);
    };
}
$ae28483e1af2f46b$export$ea76ac48857e9378 = $ae28483e1af2f46b$require$setGlobalDispatcher;
$ae28483e1af2f46b$export$6f0c702cbe7d6ed8 = $ae28483e1af2f46b$require$getGlobalDispatcher;










if ($1Z05w.nodeMajor > 16 || $1Z05w.nodeMajor === 16 && $1Z05w.nodeMinor >= 8) {
    let fetchImpl = null;
    $ae28483e1af2f46b$export$e7aa7bc5c1b3cfb3 = async function fetch(resource) {
        if (!fetchImpl) fetchImpl = (parcelRequire("9tSFF")).fetch;
        try {
            return await fetchImpl(...arguments);
        } catch (err) {
            if (typeof err === 'object') Error.captureStackTrace(err, this);
            throw err;
        }
    };
    $ae28483e1af2f46b$export$79b704688b15c0f4 = (parcelRequire("3wPNm")).Headers;
    $ae28483e1af2f46b$export$9f633d56d7ec90d3 = (parcelRequire("kwlGk")).Response;
    $ae28483e1af2f46b$export$7fa6c5b6f8193917 = (parcelRequire("84pCF")).Request;
    $ae28483e1af2f46b$export$3963aa24c930693c = (parcelRequire("7F5Ft")).FormData;
    $ae28483e1af2f46b$export$b6afa8811b7e644e = (parcelRequire("iEva8")).File;
    $ae28483e1af2f46b$export$3c8f13373e08d457 = (parcelRequire("1v8ik")).FileReader;
    const { setGlobalOrigin: setGlobalOrigin, getGlobalOrigin: getGlobalOrigin } = (parcelRequire("7GOAF"));
    $ae28483e1af2f46b$export$79f8e34925aa870f = setGlobalOrigin;
    $ae28483e1af2f46b$export$4b73629724933f6e = getGlobalOrigin;
    const { CacheStorage: CacheStorage } = (parcelRequire("3gVI0"));
    const { kConstruct: kConstruct } = (parcelRequire("eII0k"));
    $ae28483e1af2f46b$export$50ac77867c9f1e40 = new CacheStorage(kConstruct);
}


if ($1Z05w.nodeMajor >= 16) {
    const { deleteCookie: deleteCookie, getCookies: getCookies, getSetCookies: getSetCookies, setCookie: setCookie } = (parcelRequire("1GxCc"));
    $ae28483e1af2f46b$export$b43e45590305ffaa = deleteCookie;
    $ae28483e1af2f46b$export$f3eb5caaef7b2b34 = getCookies;
    $ae28483e1af2f46b$export$14dd963aa71ac36d = getSetCookies;
    $ae28483e1af2f46b$export$110700823644f4a6 = setCookie;
    const { parseMIMEType: parseMIMEType, serializeAMimeType: serializeAMimeType } = (parcelRequire("iRsiv"));
    $ae28483e1af2f46b$export$85e6adb445fa3ef0 = parseMIMEType;
    $ae28483e1af2f46b$export$b00e4516a48bbc61 = serializeAMimeType;
}

if ($1Z05w.nodeMajor >= 18 && $ae28483e1af2f46b$var$hasCrypto) {
    const { WebSocket: WebSocket } = (parcelRequire("doEKk"));
    $ae28483e1af2f46b$export$3909fb301d3dc8c9 = WebSocket;
}
$ae28483e1af2f46b$export$b5fe3f66a567bec0 = $ae28483e1af2f46b$var$makeDispatcher($c2abc21538860750$exports.request);
$ae28483e1af2f46b$export$4938110305e6185f = $ae28483e1af2f46b$var$makeDispatcher($c2abc21538860750$exports.stream);
$ae28483e1af2f46b$export$43f28b24e1eb8181 = $ae28483e1af2f46b$var$makeDispatcher($c2abc21538860750$exports.pipeline);
$ae28483e1af2f46b$export$64605811ab45167f = $ae28483e1af2f46b$var$makeDispatcher($c2abc21538860750$exports.connect);
$ae28483e1af2f46b$export$ba387509dbaf942e = $ae28483e1af2f46b$var$makeDispatcher($c2abc21538860750$exports.upgrade);
$ae28483e1af2f46b$export$8ff68bc3613e0197 = $163c17fbd52b34ee$exports;
$ae28483e1af2f46b$export$e3431e6e5e89c327 = $KADN9;
$ae28483e1af2f46b$export$44e9728040f17046 = $fc4da8421f1b8631$exports;
$ae28483e1af2f46b$export$7219863409fc71b7 = $1AmsH;


//# sourceMappingURL=undici.8b355dd9.js.map
