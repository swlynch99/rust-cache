require("./symbols.c5dd8fde.js");
require("./agent.886e033b.js");
require("./pool.5e3fe8ea.js");
require("./dispatcher-base.f09aedf0.js");
require("./errors.621f8b7b.js");
require("./connect.7d5a8838.js");
var $uQdNU$url = require("url");


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
'use strict';

var $bMqEt = parcelRequire("bMqEt");
var $95a3f70c459ceb02$require$kProxy = $bMqEt.kProxy;
var $95a3f70c459ceb02$require$kClose = $bMqEt.kClose;
var $95a3f70c459ceb02$require$kDestroy = $bMqEt.kDestroy;
var $95a3f70c459ceb02$require$kInterceptors = $bMqEt.kInterceptors;

var $95a3f70c459ceb02$require$URL = $uQdNU$url.URL;

var $hEZxa = parcelRequire("hEZxa");

var $ihqOT = parcelRequire("ihqOT");

var $gyaJT = parcelRequire("gyaJT");

var $4V3Kr = parcelRequire("4V3Kr");
var $95a3f70c459ceb02$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $95a3f70c459ceb02$require$RequestAbortedError = $4V3Kr.RequestAbortedError;

var $bi3kp = parcelRequire("bi3kp");
const $95a3f70c459ceb02$var$kAgent = Symbol('proxy agent');
const $95a3f70c459ceb02$var$kClient = Symbol('proxy client');
const $95a3f70c459ceb02$var$kProxyHeaders = Symbol('proxy headers');
const $95a3f70c459ceb02$var$kRequestTls = Symbol('request tls settings');
const $95a3f70c459ceb02$var$kProxyTls = Symbol('proxy tls settings');
const $95a3f70c459ceb02$var$kConnectEndpoint = Symbol('connect endpoint function');
function $95a3f70c459ceb02$var$defaultProtocolPort(protocol) {
    return protocol === 'https:' ? 443 : 80;
}
function $95a3f70c459ceb02$var$buildProxyOptions(opts) {
    if (typeof opts === 'string') opts = {
        uri: opts
    };
    if (!opts || !opts.uri) throw new $95a3f70c459ceb02$require$InvalidArgumentError('Proxy opts.uri is mandatory');
    return {
        uri: opts.uri,
        protocol: opts.protocol || 'https'
    };
}
function $95a3f70c459ceb02$var$defaultFactory(origin, opts) {
    return new $ihqOT(origin, opts);
}
class $95a3f70c459ceb02$var$ProxyAgent extends $gyaJT {
    constructor(opts){
        super(opts);
        this[$95a3f70c459ceb02$require$kProxy] = $95a3f70c459ceb02$var$buildProxyOptions(opts);
        this[$95a3f70c459ceb02$var$kAgent] = new $hEZxa(opts);
        this[$95a3f70c459ceb02$require$kInterceptors] = opts.interceptors && opts.interceptors.ProxyAgent && Array.isArray(opts.interceptors.ProxyAgent) ? opts.interceptors.ProxyAgent : [];
        if (typeof opts === 'string') opts = {
            uri: opts
        };
        if (!opts || !opts.uri) throw new $95a3f70c459ceb02$require$InvalidArgumentError('Proxy opts.uri is mandatory');
        const { clientFactory: clientFactory = $95a3f70c459ceb02$var$defaultFactory } = opts;
        if (typeof clientFactory !== 'function') throw new $95a3f70c459ceb02$require$InvalidArgumentError('Proxy opts.clientFactory must be a function.');
        this[$95a3f70c459ceb02$var$kRequestTls] = opts.requestTls;
        this[$95a3f70c459ceb02$var$kProxyTls] = opts.proxyTls;
        this[$95a3f70c459ceb02$var$kProxyHeaders] = opts.headers || {};
        const resolvedUrl = new $95a3f70c459ceb02$require$URL(opts.uri);
        const { origin: origin, port: port, host: host, username: username, password: password } = resolvedUrl;
        if (opts.auth && opts.token) throw new $95a3f70c459ceb02$require$InvalidArgumentError('opts.auth cannot be used in combination with opts.token');
        else if (opts.auth) /* @deprecated in favour of opts.token */ this[$95a3f70c459ceb02$var$kProxyHeaders]['proxy-authorization'] = `Basic ${opts.auth}`;
        else if (opts.token) this[$95a3f70c459ceb02$var$kProxyHeaders]['proxy-authorization'] = opts.token;
        else if (username && password) this[$95a3f70c459ceb02$var$kProxyHeaders]['proxy-authorization'] = `Basic ${Buffer.from(`${decodeURIComponent(username)}:${decodeURIComponent(password)}`).toString('base64')}`;
        const connect = $bi3kp({
            ...opts.proxyTls
        });
        this[$95a3f70c459ceb02$var$kConnectEndpoint] = $bi3kp({
            ...opts.requestTls
        });
        this[$95a3f70c459ceb02$var$kClient] = clientFactory(resolvedUrl, {
            connect: connect
        });
        this[$95a3f70c459ceb02$var$kAgent] = new $hEZxa({
            ...opts,
            connect: async (opts, callback)=>{
                let requestedHost = opts.host;
                if (!opts.port) requestedHost += `:${$95a3f70c459ceb02$var$defaultProtocolPort(opts.protocol)}`;
                try {
                    const { socket: socket, statusCode: statusCode } = await this[$95a3f70c459ceb02$var$kClient].connect({
                        origin: origin,
                        port: port,
                        path: requestedHost,
                        signal: opts.signal,
                        headers: {
                            ...this[$95a3f70c459ceb02$var$kProxyHeaders],
                            host: host
                        }
                    });
                    if (statusCode !== 200) {
                        socket.on('error', ()=>{}).destroy();
                        callback(new $95a3f70c459ceb02$require$RequestAbortedError(`Proxy response (${statusCode}) !== 200 when HTTP Tunneling`));
                    }
                    if (opts.protocol !== 'https:') {
                        callback(null, socket);
                        return;
                    }
                    let servername;
                    if (this[$95a3f70c459ceb02$var$kRequestTls]) servername = this[$95a3f70c459ceb02$var$kRequestTls].servername;
                    else servername = opts.servername;
                    this[$95a3f70c459ceb02$var$kConnectEndpoint]({
                        ...opts,
                        servername: servername,
                        httpSocket: socket
                    }, callback);
                } catch (err) {
                    callback(err);
                }
            }
        });
    }
    dispatch(opts, handler) {
        const { host: host } = new $95a3f70c459ceb02$require$URL(opts.origin);
        const headers = $95a3f70c459ceb02$var$buildHeaders(opts.headers);
        $95a3f70c459ceb02$var$throwIfProxyAuthIsSent(headers);
        return this[$95a3f70c459ceb02$var$kAgent].dispatch({
            ...opts,
            headers: {
                ...headers,
                host: host
            }
        }, handler);
    }
    async [$95a3f70c459ceb02$require$kClose]() {
        await this[$95a3f70c459ceb02$var$kAgent].close();
        await this[$95a3f70c459ceb02$var$kClient].close();
    }
    async [$95a3f70c459ceb02$require$kDestroy]() {
        await this[$95a3f70c459ceb02$var$kAgent].destroy();
        await this[$95a3f70c459ceb02$var$kClient].destroy();
    }
}
/**
 * @param {string[] | Record<string, string>} headers
 * @returns {Record<string, string>}
 */ function $95a3f70c459ceb02$var$buildHeaders(headers) {
    // When using undici.fetch, the headers list is stored
    // as an array.
    if (Array.isArray(headers)) {
        /** @type {Record<string, string>} */ const headersPair = {};
        for(let i = 0; i < headers.length; i += 2)headersPair[headers[i]] = headers[i + 1];
        return headersPair;
    }
    return headers;
}
/**
 * @param {Record<string, string>} headers
 *
 * Previous versions of ProxyAgent suggests the Proxy-Authorization in request headers
 * Nevertheless, it was changed and to avoid a security vulnerability by end users
 * this check was created.
 * It should be removed in the next major version for performance reasons
 */ function $95a3f70c459ceb02$var$throwIfProxyAuthIsSent(headers) {
    const existProxyAuth = headers && Object.keys(headers).find((key)=>key.toLowerCase() === 'proxy-authorization');
    if (existProxyAuth) throw new $95a3f70c459ceb02$require$InvalidArgumentError('Proxy-Authorization should be sent in ProxyAgent constructor');
}
module.exports = $95a3f70c459ceb02$var$ProxyAgent;


//# sourceMappingURL=proxy-agent.95acd85b.js.map
