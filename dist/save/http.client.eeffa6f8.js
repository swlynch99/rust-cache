require("./errors.2ac23834.js");
var $4H08e$http = require("http");
var $4H08e$https = require("https");
var $4H08e$url = require("url");


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
parcelRegister("jTm1k", function(module, exports) {
"use strict";
var $e7b43c2f32e6dcce$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $e7b43c2f32e6dcce$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e7b43c2f32e6dcce$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e7b43c2f32e6dcce$var$__createBinding(result, mod, k);
    }
    $e7b43c2f32e6dcce$var$__setModuleDefault(result, mod);
    return result;
};
var $e7b43c2f32e6dcce$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.FetchRPC = module.exports.wrapErrorResponseToTwirpError = module.exports.NodeHttpRPC = void 0;

const $e7b43c2f32e6dcce$var$http = $e7b43c2f32e6dcce$var$__importStar($4H08e$http);

const $e7b43c2f32e6dcce$var$https = $e7b43c2f32e6dcce$var$__importStar($4H08e$https);


var $gQxCu = parcelRequire("gQxCu");
/**
 * a node HTTP RPC implementation
 * @param options
 * @constructor
 */ const $e7b43c2f32e6dcce$var$NodeHttpRPC = (options)=>({
        request (service, method, contentType, data) {
            let client;
            return new Promise((resolve, rejected)=>{
                const responseChunks = [];
                const requestData = contentType === "application/protobuf" ? Buffer.from(data) : JSON.stringify(data);
                const url = new $4H08e$url.URL(options.baseUrl);
                const isHttps = url.protocol === "https:";
                if (isHttps) client = $e7b43c2f32e6dcce$var$https;
                else client = $e7b43c2f32e6dcce$var$http;
                const prefix = url.pathname !== "/" ? url.pathname : "";
                const req = client.request(Object.assign(Object.assign({}, options ? options : {}), {
                    method: "POST",
                    protocol: url.protocol,
                    host: url.hostname,
                    port: url.port ? url.port : isHttps ? 443 : 80,
                    path: `${prefix}/${service}/${method}`,
                    headers: Object.assign(Object.assign({}, options.headers ? options.headers : {}), {
                        "Content-Type": contentType,
                        "Content-Length": contentType === "application/protobuf" ? Buffer.byteLength(requestData) : Buffer.from(requestData).byteLength
                    })
                }), (res)=>{
                    res.on("data", (chunk)=>responseChunks.push(chunk));
                    res.on("end", ()=>{
                        const data = Buffer.concat(responseChunks);
                        if (res.statusCode != 200) rejected($e7b43c2f32e6dcce$var$wrapErrorResponseToTwirpError(data.toString()));
                        else if (contentType === "application/json") resolve(JSON.parse(data.toString()));
                        else resolve(data);
                    });
                    res.on("error", (err)=>{
                        rejected(err);
                    });
                }).on("error", (err)=>{
                    rejected(err);
                });
                req.end(requestData);
            });
        }
    });
module.exports.NodeHttpRPC = $e7b43c2f32e6dcce$var$NodeHttpRPC;
function $e7b43c2f32e6dcce$var$wrapErrorResponseToTwirpError(errorResponse) {
    return $gQxCu.TwirpError.fromObject(JSON.parse(errorResponse));
}
module.exports.wrapErrorResponseToTwirpError = $e7b43c2f32e6dcce$var$wrapErrorResponseToTwirpError;
/**
 * a browser fetch RPC implementation
 */ const $e7b43c2f32e6dcce$var$FetchRPC = (options)=>({
        request (service, method, contentType, data) {
            return $e7b43c2f32e6dcce$var$__awaiter(this, void 0, void 0, function*() {
                const headers = new Headers(options.headers);
                headers.set("content-type", contentType);
                const response = yield fetch(`${options.baseUrl}/${service}/${method}`, Object.assign(Object.assign({}, options), {
                    method: "POST",
                    headers: headers,
                    body: data instanceof Uint8Array ? data : JSON.stringify(data)
                }));
                if (response.status === 200) {
                    if (contentType === "application/json") return yield response.json();
                    return new Uint8Array((yield response.arrayBuffer()));
                }
                throw $gQxCu.TwirpError.fromObject((yield response.json()));
            });
        }
    });
module.exports.FetchRPC = $e7b43c2f32e6dcce$var$FetchRPC;

});


