require("./extend.9dc12576.js");
require("./node-fetch.ae1b181d.js");
require("./is-stream.92f19a68.js");
require("./common.4786667e.js");
require("./retry.70670e6b.js");
require("./v4.a423fd46.js");
require("./interceptor.0c15a240.js");
require("./dist.e0d52dd0.js");
var $04Dq8$https = require("https");
var $04Dq8$querystring = require("querystring");
var $04Dq8$url = require("url");
var $04Dq8$stream = require("stream");


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
parcelRegister("5wqsy", function(module, exports) {
module.exports = new URL("extend.9dc12576.js", "file:" + __filename).toString();

});

parcelRegister("4tNKO", function(module, exports) {
module.exports = new URL("node-fetch.ae1b181d.js", "file:" + __filename).toString();

});

parcelRegister("7nH2B", function(module, exports) {
module.exports = new URL("is-stream.92f19a68.js", "file:" + __filename).toString();

});

"use strict";
// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $6ed78294fe5d8da9$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $6ed78294fe5d8da9$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $6ed78294fe5d8da9$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $6ed78294fe5d8da9$var$__createBinding(result, mod, k);
    }
    $6ed78294fe5d8da9$var$__setModuleDefault(result, mod);
    return result;
};
var $6ed78294fe5d8da9$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $6ed78294fe5d8da9$var$__classPrivateFieldSet = module.exports && module.exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var $6ed78294fe5d8da9$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var $6ed78294fe5d8da9$var$_Gaxios_instances, $6ed78294fe5d8da9$var$_a, $6ed78294fe5d8da9$var$_Gaxios_urlMayUseProxy, $6ed78294fe5d8da9$var$_Gaxios_applyRequestInterceptors, $6ed78294fe5d8da9$var$_Gaxios_applyResponseInterceptors, $6ed78294fe5d8da9$var$_Gaxios_prepareRequest, $6ed78294fe5d8da9$var$_Gaxios_proxyAgent, $6ed78294fe5d8da9$var$_Gaxios_getProxyAgent;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Gaxios = void 0;

const $6ed78294fe5d8da9$var$extend_1 = $6ed78294fe5d8da9$var$__importDefault((parcelRequire("5wqsy")));


const $6ed78294fe5d8da9$var$node_fetch_1 = $6ed78294fe5d8da9$var$__importDefault((parcelRequire("4tNKO")));

const $6ed78294fe5d8da9$var$querystring_1 = $6ed78294fe5d8da9$var$__importDefault($04Dq8$querystring);

const $6ed78294fe5d8da9$var$is_stream_1 = $6ed78294fe5d8da9$var$__importDefault((parcelRequire("7nH2B")));

var $de1a3d49fe8c8198$exports = {};
$de1a3d49fe8c8198$exports = new URL("common.4786667e.js", "file:" + __filename).toString();


var $ab451bb0eedfeedb$exports = {};
$ab451bb0eedfeedb$exports = new URL("retry.70670e6b.js", "file:" + __filename).toString();



var $1b8b6dd551370ecb$exports = {};
$1b8b6dd551370ecb$exports = new URL("v4.a423fd46.js", "file:" + __filename).toString();


var $1ea8872596b39b0a$exports = {};
$1ea8872596b39b0a$exports = new URL("interceptor.0c15a240.js", "file:" + __filename).toString();


/* eslint-disable @typescript-eslint/no-explicit-any */ const $6ed78294fe5d8da9$var$fetch = $6ed78294fe5d8da9$var$hasFetch() ? window.fetch : $6ed78294fe5d8da9$var$node_fetch_1.default;
function $6ed78294fe5d8da9$var$hasWindow() {
    return typeof window !== 'undefined' && !!window;
}
function $6ed78294fe5d8da9$var$hasFetch() {
    return $6ed78294fe5d8da9$var$hasWindow() && !!window.fetch;
}
function $6ed78294fe5d8da9$var$hasBuffer() {
    return typeof Buffer !== 'undefined';
}
function $6ed78294fe5d8da9$var$hasHeader(options, header) {
    return !!$6ed78294fe5d8da9$var$getHeader(options, header);
}
function $6ed78294fe5d8da9$var$getHeader(options, header) {
    header = header.toLowerCase();
    for (const key of Object.keys((options === null || options === void 0 ? void 0 : options.headers) || {})){
        if (header === key.toLowerCase()) return options.headers[key];
    }
    return undefined;
}
class $6ed78294fe5d8da9$var$Gaxios {
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */ constructor(defaults){
        $6ed78294fe5d8da9$var$_Gaxios_instances.add(this);
        this.agentCache = new Map();
        this.defaults = defaults || {};
        this.interceptors = {
            request: new $1ea8872596b39b0a$exports.GaxiosInterceptorManager(),
            response: new $1ea8872596b39b0a$exports.GaxiosInterceptorManager()
        };
    }
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */ async request(opts = {}) {
        opts = await $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_Gaxios_instances, "m", $6ed78294fe5d8da9$var$_Gaxios_prepareRequest).call(this, opts);
        opts = await $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_Gaxios_instances, "m", $6ed78294fe5d8da9$var$_Gaxios_applyRequestInterceptors).call(this, opts);
        return $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_Gaxios_instances, "m", $6ed78294fe5d8da9$var$_Gaxios_applyResponseInterceptors).call(this, this._request(opts));
    }
    async _defaultAdapter(opts) {
        const fetchImpl = opts.fetchImplementation || $6ed78294fe5d8da9$var$fetch;
        const res = await fetchImpl(opts.url, opts);
        const data = await this.getResponseData(opts, res);
        return this.translateResponse(opts, res, data);
    }
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */ async _request(opts = {}) {
        var _b;
        try {
            let translatedResponse;
            if (opts.adapter) translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
            else translatedResponse = await this._defaultAdapter(opts);
            if (!opts.validateStatus(translatedResponse.status)) {
                if (opts.responseType === 'stream') {
                    let response = '';
                    await new Promise((resolve)=>{
                        (translatedResponse === null || translatedResponse === void 0 ? void 0 : translatedResponse.data).on('data', (chunk)=>{
                            response += chunk;
                        });
                        (translatedResponse === null || translatedResponse === void 0 ? void 0 : translatedResponse.data).on('end', resolve);
                    });
                    translatedResponse.data = response;
                }
                throw new $de1a3d49fe8c8198$exports.GaxiosError(`Request failed with status code ${translatedResponse.status}`, opts, translatedResponse);
            }
            return translatedResponse;
        } catch (e) {
            const err = e instanceof $de1a3d49fe8c8198$exports.GaxiosError ? e : new $de1a3d49fe8c8198$exports.GaxiosError(e.message, opts, undefined, e);
            const { shouldRetry: shouldRetry, config: config } = await (0, $ab451bb0eedfeedb$exports.getRetryConfig)(err);
            if (shouldRetry && config) {
                err.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
                // The error's config could be redacted - therefore we only want to
                // copy the retry state over to the existing config
                opts.retryConfig = (_b = err.config) === null || _b === void 0 ? void 0 : _b.retryConfig;
                return this._request(opts);
            }
            throw err;
        }
    }
    async getResponseData(opts, res) {
        switch(opts.responseType){
            case 'stream':
                return res.body;
            case 'json':
                {
                    let data = await res.text();
                    try {
                        data = JSON.parse(data);
                    } catch (_b) {
                    // continue
                    }
                    return data;
                }
            case 'arraybuffer':
                return res.arrayBuffer();
            case 'blob':
                return res.blob();
            case 'text':
                return res.text();
            default:
                return this.getResponseDataFromContentType(res);
        }
    }
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */ validateStatus(status) {
        return status >= 200 && status < 300;
    }
    /**
     * Encode a set of key/value pars into a querystring format (?foo=bar&baz=boo)
     * @param params key value pars to encode
     */ paramsSerializer(params) {
        return $6ed78294fe5d8da9$var$querystring_1.default.stringify(params);
    }
    translateResponse(opts, res, data) {
        // headers need to be converted from a map to an obj
        const headers = {};
        res.headers.forEach((value, key)=>{
            headers[key] = value;
        });
        return {
            config: opts,
            data: data,
            headers: headers,
            status: res.status,
            statusText: res.statusText,
            // XMLHttpRequestLike
            request: {
                responseURL: res.url
            }
        };
    }
    /**
     * Attempts to parse a response by looking at the Content-Type header.
     * @param {FetchResponse} response the HTTP response.
     * @returns {Promise<any>} a promise that resolves to the response data.
     */ async getResponseDataFromContentType(response) {
        let contentType = response.headers.get('Content-Type');
        if (contentType === null) // Maintain existing functionality by calling text()
        return response.text();
        contentType = contentType.toLowerCase();
        if (contentType.includes('application/json')) {
            let data = await response.text();
            try {
                data = JSON.parse(data);
            } catch (_b) {
            // continue
            }
            return data;
        } else if (contentType.match(/^text\//)) return response.text();
        else // If the content type is something not easily handled, just return the raw data (blob)
        return response.blob();
    }
    /**
     * Creates an async generator that yields the pieces of a multipart/related request body.
     * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
     * multipart/related requests are not currently supported.
     *
     * @param {GaxioMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
     * @param {string} boundary the boundary string to be placed between each part.
     */ async *getMultipartRequest(multipartOptions, boundary) {
        const finale = `--${boundary}--`;
        for (const currentPart of multipartOptions){
            const partContentType = currentPart.headers['Content-Type'] || 'application/octet-stream';
            const preamble = `--${boundary}\r\nContent-Type: ${partContentType}\r\n\r\n`;
            yield preamble;
            if (typeof currentPart.content === 'string') yield currentPart.content;
            else yield* currentPart.content;
            yield '\r\n';
        }
        yield finale;
    }
}
module.exports.Gaxios = $6ed78294fe5d8da9$var$Gaxios;

$6ed78294fe5d8da9$var$_a = $6ed78294fe5d8da9$var$Gaxios, $6ed78294fe5d8da9$var$_Gaxios_instances = new WeakSet(), $6ed78294fe5d8da9$var$_Gaxios_urlMayUseProxy = function _Gaxios_urlMayUseProxy(url, noProxy = []) {
    var _b, _c;
    const candidate = new $04Dq8$url.URL(url);
    const noProxyList = [
        ...noProxy
    ];
    const noProxyEnvList = ((_c = (_b = process.env.NO_PROXY) !== null && _b !== void 0 ? _b : process.env.no_proxy) === null || _c === void 0 ? void 0 : _c.split(',')) || [];
    for (const rule of noProxyEnvList)noProxyList.push(rule.trim());
    for (const rule of noProxyList){
        // Match regex
        if (rule instanceof RegExp) {
            if (rule.test(candidate.toString())) return false;
        } else if (rule instanceof $04Dq8$url.URL) {
            if (rule.origin === candidate.origin) return false;
        } else if (rule.startsWith('*.') || rule.startsWith('.')) {
            const cleanedRule = rule.replace(/^\*\./, '.');
            if (candidate.hostname.endsWith(cleanedRule)) return false;
        } else if (rule === candidate.origin || rule === candidate.hostname || rule === candidate.href) return false;
    }
    return true;
}, $6ed78294fe5d8da9$var$_Gaxios_applyRequestInterceptors = /**
 * Applies the request interceptors. The request interceptors are applied after the
 * call to prepareRequest is completed.
 *
 * @param {GaxiosOptions} options The current set of options.
 *
 * @returns {Promise<GaxiosOptions>} Promise that resolves to the set of options or response after interceptors are applied.
 */ async function _Gaxios_applyRequestInterceptors(options) {
    let promiseChain = Promise.resolve(options);
    for (const interceptor of this.interceptors.request.values())if (interceptor) promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
    return promiseChain;
}, $6ed78294fe5d8da9$var$_Gaxios_applyResponseInterceptors = /**
 * Applies the response interceptors. The response interceptors are applied after the
 * call to request is made.
 *
 * @param {GaxiosOptions} options The current set of options.
 *
 * @returns {Promise<GaxiosOptions>} Promise that resolves to the set of options or response after interceptors are applied.
 */ async function _Gaxios_applyResponseInterceptors(response) {
    let promiseChain = Promise.resolve(response);
    for (const interceptor of this.interceptors.response.values())if (interceptor) promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
    return promiseChain;
}, $6ed78294fe5d8da9$var$_Gaxios_prepareRequest = /**
 * Validates the options, merges them with defaults, and prepare request.
 *
 * @param options The original options passed from the client.
 * @returns Prepared options, ready to make a request
 */ async function _Gaxios_prepareRequest(options) {
    var _b, _c, _d, _e;
    const opts = (0, $6ed78294fe5d8da9$var$extend_1.default)(true, {}, this.defaults, options);
    if (!opts.url) throw new Error('URL is required.');
    // baseUrl has been deprecated, remove in 2.0
    const baseUrl = opts.baseUrl || opts.baseURL;
    if (baseUrl) opts.url = baseUrl.toString() + opts.url;
    opts.paramsSerializer = opts.paramsSerializer || this.paramsSerializer;
    if (opts.params && Object.keys(opts.params).length > 0) {
        let additionalQueryParams = opts.paramsSerializer(opts.params);
        if (additionalQueryParams.startsWith('?')) additionalQueryParams = additionalQueryParams.slice(1);
        const prefix = opts.url.toString().includes('?') ? '&' : '?';
        opts.url = opts.url + prefix + additionalQueryParams;
    }
    if (typeof options.maxContentLength === 'number') opts.size = options.maxContentLength;
    if (typeof options.maxRedirects === 'number') opts.follow = options.maxRedirects;
    opts.headers = opts.headers || {};
    if (opts.multipart === undefined && opts.data) {
        const isFormData = typeof FormData === 'undefined' ? false : (opts === null || opts === void 0 ? void 0 : opts.data) instanceof FormData;
        if ($6ed78294fe5d8da9$var$is_stream_1.default.readable(opts.data)) opts.body = opts.data;
        else if ($6ed78294fe5d8da9$var$hasBuffer() && Buffer.isBuffer(opts.data)) {
            // Do not attempt to JSON.stringify() a Buffer:
            opts.body = opts.data;
            if (!$6ed78294fe5d8da9$var$hasHeader(opts, 'Content-Type')) opts.headers['Content-Type'] = 'application/json';
        } else if (typeof opts.data === 'object') // If www-form-urlencoded content type has been set, but data is
        // provided as an object, serialize the content using querystring:
        {
            if (!isFormData) {
                if ($6ed78294fe5d8da9$var$getHeader(opts, 'content-type') === 'application/x-www-form-urlencoded') opts.body = opts.paramsSerializer(opts.data);
                else {
                    // } else if (!(opts.data instanceof FormData)) {
                    if (!$6ed78294fe5d8da9$var$hasHeader(opts, 'Content-Type')) opts.headers['Content-Type'] = 'application/json';
                    opts.body = JSON.stringify(opts.data);
                }
            }
        } else opts.body = opts.data;
    } else if (opts.multipart && opts.multipart.length > 0) {
        // note: once the minimum version reaches Node 16,
        // this can be replaced with randomUUID() function from crypto
        // and the dependency on UUID removed
        const boundary = (0, $1b8b6dd551370ecb$exports.default)();
        opts.headers['Content-Type'] = `multipart/related; boundary=${boundary}`;
        const bodyStream = new $04Dq8$stream.PassThrough();
        opts.body = bodyStream;
        (0, $04Dq8$stream.pipeline)(this.getMultipartRequest(opts.multipart, boundary), bodyStream, ()=>{});
    }
    opts.validateStatus = opts.validateStatus || this.validateStatus;
    opts.responseType = opts.responseType || 'unknown';
    if (!opts.headers['Accept'] && opts.responseType === 'json') opts.headers['Accept'] = 'application/json';
    opts.method = opts.method || 'GET';
    const proxy = opts.proxy || ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.HTTPS_PROXY) || ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.https_proxy) || ((_d = process === null || process === void 0 ? void 0 : process.env) === null || _d === void 0 ? void 0 : _d.HTTP_PROXY) || ((_e = process === null || process === void 0 ? void 0 : process.env) === null || _e === void 0 ? void 0 : _e.http_proxy);
    const urlMayUseProxy = $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_Gaxios_instances, "m", $6ed78294fe5d8da9$var$_Gaxios_urlMayUseProxy).call(this, opts.url, opts.noProxy);
    if (opts.agent) ;
    else if (proxy && urlMayUseProxy) {
        const HttpsProxyAgent = await $6ed78294fe5d8da9$var$__classPrivateFieldGet($6ed78294fe5d8da9$var$_a, $6ed78294fe5d8da9$var$_a, "m", $6ed78294fe5d8da9$var$_Gaxios_getProxyAgent).call($6ed78294fe5d8da9$var$_a);
        if (this.agentCache.has(proxy)) opts.agent = this.agentCache.get(proxy);
        else {
            opts.agent = new HttpsProxyAgent(proxy, {
                cert: opts.cert,
                key: opts.key
            });
            this.agentCache.set(proxy, opts.agent);
        }
    } else if (opts.cert && opts.key) {
        // Configure client for mTLS
        if (this.agentCache.has(opts.key)) opts.agent = this.agentCache.get(opts.key);
        else {
            opts.agent = new $04Dq8$https.Agent({
                cert: opts.cert,
                key: opts.key
            });
            this.agentCache.set(opts.key, opts.agent);
        }
    }
    if (typeof opts.errorRedactor !== 'function' && opts.errorRedactor !== false) opts.errorRedactor = $de1a3d49fe8c8198$exports.defaultErrorRedactor;
    return opts;
}, $6ed78294fe5d8da9$var$_Gaxios_getProxyAgent = async function _Gaxios_getProxyAgent() {
    $6ed78294fe5d8da9$var$__classPrivateFieldSet(this, $6ed78294fe5d8da9$var$_a, $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_a, "f", $6ed78294fe5d8da9$var$_Gaxios_proxyAgent) || (await Promise.resolve().then(function() {
        return (parcelRequire("03aqf"));
    }).then((res)=>$6ed78294fe5d8da9$var$__importStar(res))).HttpsProxyAgent, "f", $6ed78294fe5d8da9$var$_Gaxios_proxyAgent);
    return $6ed78294fe5d8da9$var$__classPrivateFieldGet(this, $6ed78294fe5d8da9$var$_a, "f", $6ed78294fe5d8da9$var$_Gaxios_proxyAgent);
};
/**
 * A cache for the lazily-loaded proxy agent.
 *
 * Should use {@link Gaxios[#getProxyAgent]} to retrieve.
 */ // using `import` to dynamically import the types here
$6ed78294fe5d8da9$var$_Gaxios_proxyAgent = {
    value: void 0
};


