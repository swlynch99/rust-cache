var $2Nose$http = require("http");
var $2Nose$https = require("https");


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
parcelRegister("lePnO", function(module, exports) {
"use strict";
var $f762c361c71e9753$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $f762c361c71e9753$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f762c361c71e9753$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $f762c361c71e9753$var$__createBinding(result, mod, k);
    }
    $f762c361c71e9753$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.req = module.exports.json = module.exports.toBuffer = void 0;

const $f762c361c71e9753$var$http = $f762c361c71e9753$var$__importStar($2Nose$http);

const $f762c361c71e9753$var$https = $f762c361c71e9753$var$__importStar($2Nose$https);
async function $f762c361c71e9753$var$toBuffer(stream) {
    let length = 0;
    const chunks = [];
    for await (const chunk of stream){
        length += chunk.length;
        chunks.push(chunk);
    }
    return Buffer.concat(chunks, length);
}
module.exports.toBuffer = $f762c361c71e9753$var$toBuffer;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function $f762c361c71e9753$var$json(stream) {
    const buf = await $f762c361c71e9753$var$toBuffer(stream);
    const str = buf.toString('utf8');
    try {
        return JSON.parse(str);
    } catch (_err) {
        const err = _err;
        err.message += ` (input: ${str})`;
        throw err;
    }
}
module.exports.json = $f762c361c71e9753$var$json;
function $f762c361c71e9753$var$req(url, opts = {}) {
    const href = typeof url === 'string' ? url : url.href;
    const req1 = (href.startsWith('https:') ? $f762c361c71e9753$var$https : $f762c361c71e9753$var$http).request(url, opts);
    const promise = new Promise((resolve, reject)=>{
        req1.once('response', resolve).once('error', reject).end();
    });
    req1.then = promise.then.bind(promise);
    return req1;
}
module.exports.req = $f762c361c71e9753$var$req;

});


//# sourceMappingURL=helpers.74070165.js.map
