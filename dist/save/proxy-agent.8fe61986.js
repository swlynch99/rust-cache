require("./symbols.b8a391fa.js");
require("./agent.7a15b627.js");
require("./pool.0c09492a.js");
require("./dispatcher-base.350ec1bb.js");
require("./errors.12b0f892.js");
require("./connect.db50106d.js");
var $MBtcK$url = require("url");


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

var $dSiuY = parcelRequire("dSiuY");
var $2b9e95bfea3b7f8c$require$kProxy = $dSiuY.kProxy;
var $2b9e95bfea3b7f8c$require$kClose = $dSiuY.kClose;
var $2b9e95bfea3b7f8c$require$kDestroy = $dSiuY.kDestroy;
var $2b9e95bfea3b7f8c$require$kInterceptors = $dSiuY.kInterceptors;

var $2b9e95bfea3b7f8c$require$URL = $MBtcK$url.URL;

var $gzNqH = parcelRequire("gzNqH");

var $hZ9i0 = parcelRequire("hZ9i0");

var $jgblb = parcelRequire("jgblb");

var $hA22O = parcelRequire("hA22O");
var $2b9e95bfea3b7f8c$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $2b9e95bfea3b7f8c$require$RequestAbortedError = $hA22O.RequestAbortedError;

var $eroPN = parcelRequire("eroPN");
const $2b9e95bfea3b7f8c$var$kAgent = Symbol('proxy agent');
const $2b9e95bfea3b7f8c$var$kClient = Symbol('proxy client');
const $2b9e95bfea3b7f8c$var$kProxyHeaders = Symbol('proxy headers');
const $2b9e95bfea3b7f8c$var$kRequestTls = Symbol('request tls settings');
const $2b9e95bfea3b7f8c$var$kProxyTls = Symbol('proxy tls settings');
const $2b9e95bfea3b7f8c$var$kConnectEndpoint = Symbol('connect endpoint function');
function $2b9e95bfea3b7f8c$var$defaultProtocolPort(protocol) {
    return protocol === 'https:' ? 443 : 80;
}
function $2b9e95bfea3b7f8c$var$buildProxyOptions(opts) {
    if (typeof opts === 'string') opts = {
        uri: opts
    };
    if (!opts || !opts.uri) throw new $2b9e95bfea3b7f8c$require$InvalidArgumentError('Proxy opts.uri is mandatory');
    return {
        uri: opts.uri,
        protocol: opts.protocol || 'https'
    };
}
function $2b9e95bfea3b7f8c$var$defaultFactory(origin, opts) {
    return new $hZ9i0(origin, opts);
}
class $2b9e95bfea3b7f8c$var$ProxyAgent extends $jgblb {
    constructor(opts){
        super(opts);
        this[$2b9e95bfea3b7f8c$require$kProxy] = $2b9e95bfea3b7f8c$var$buildProxyOptions(opts);
        this[$2b9e95bfea3b7f8c$var$kAgent] = new $gzNqH(opts);
        this[$2b9e95bfea3b7f8c$require$kInterceptors] = opts.interceptors && opts.interceptors.ProxyAgent && Array.isArray(opts.interceptors.ProxyAgent) ? opts.interceptors.ProxyAgent : [];
        if (typeof opts === 'string') opts = {
            uri: opts
        };
        if (!opts || !opts.uri) throw new $2b9e95bfea3b7f8c$require$InvalidArgumentError('Proxy opts.uri is mandatory');
        const { clientFactory: clientFactory = $2b9e95bfea3b7f8c$var$defaultFactory } = opts;
        if (typeof clientFactory !== 'function') throw new $2b9e95bfea3b7f8c$require$InvalidArgumentError('Proxy opts.clientFactory must be a function.');
        this[$2b9e95bfea3b7f8c$var$kRequestTls] = opts.requestTls;
        this[$2b9e95bfea3b7f8c$var$kProxyTls] = opts.proxyTls;
        this[$2b9e95bfea3b7f8c$var$kProxyHeaders] = opts.headers || {};
        const resolvedUrl = new $2b9e95bfea3b7f8c$require$URL(opts.uri);
        const { origin: origin, port: port, host: host, username: username, password: password } = resolvedUrl;
        if (opts.auth && opts.token) throw new $2b9e95bfea3b7f8c$require$InvalidArgumentError('opts.auth cannot be used in combination with opts.token');
        else if (opts.auth) /* @deprecated in favour of opts.token */ this[$2b9e95bfea3b7f8c$var$kProxyHeaders]['proxy-authorization'] = `Basic ${opts.auth}`;
        else if (opts.token) this[$2b9e95bfea3b7f8c$var$kProxyHeaders]['proxy-authorization'] = opts.token;
        else if (username && password) this[$2b9e95bfea3b7f8c$var$kProxyHeaders]['proxy-authorization'] = `Basic ${Buffer.from(`${decodeURIComponent(username)}:${decodeURIComponent(password)}`).toString('base64')}`;
        const connect = $eroPN({
            ...opts.proxyTls
        });
        this[$2b9e95bfea3b7f8c$var$kConnectEndpoint] = $eroPN({
            ...opts.requestTls
        });
        this[$2b9e95bfea3b7f8c$var$kClient] = clientFactory(resolvedUrl, {
            connect: connect
        });
        this[$2b9e95bfea3b7f8c$var$kAgent] = new $gzNqH({
            ...opts,
            connect: async (opts, callback)=>{
                let requestedHost = opts.host;
                if (!opts.port) requestedHost += `:${$2b9e95bfea3b7f8c$var$defaultProtocolPort(opts.protocol)}`;
                try {
                    const { socket: socket, statusCode: statusCode } = await this[$2b9e95bfea3b7f8c$var$kClient].connect({
                        origin: origin,
                        port: port,
                        path: requestedHost,
                        signal: opts.signal,
                        headers: {
                            ...this[$2b9e95bfea3b7f8c$var$kProxyHeaders],
                            host: host
                        }
                    });
                    if (statusCode !== 200) {
                        socket.on('error', ()=>{}).destroy();
                        callback(new $2b9e95bfea3b7f8c$require$RequestAbortedError(`Proxy response (${statusCode}) !== 200 when HTTP Tunneling`));
                    }
                    if (opts.protocol !== 'https:') {
                        callback(null, socket);
                        return;
                    }
                    let servername;
                    if (this[$2b9e95bfea3b7f8c$var$kRequestTls]) servername = this[$2b9e95bfea3b7f8c$var$kRequestTls].servername;
                    else servername = opts.servername;
                    this[$2b9e95bfea3b7f8c$var$kConnectEndpoint]({
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
        const { host: host } = new $2b9e95bfea3b7f8c$require$URL(opts.origin);
        const headers = $2b9e95bfea3b7f8c$var$buildHeaders(opts.headers);
        $2b9e95bfea3b7f8c$var$throwIfProxyAuthIsSent(headers);
        return this[$2b9e95bfea3b7f8c$var$kAgent].dispatch({
            ...opts,
            headers: {
                ...headers,
                host: host
            }
        }, handler);
    }
    async [$2b9e95bfea3b7f8c$require$kClose]() {
        await this[$2b9e95bfea3b7f8c$var$kAgent].close();
        await this[$2b9e95bfea3b7f8c$var$kClient].close();
    }
    async [$2b9e95bfea3b7f8c$require$kDestroy]() {
        await this[$2b9e95bfea3b7f8c$var$kAgent].destroy();
        await this[$2b9e95bfea3b7f8c$var$kClient].destroy();
    }
}
/**
 * @param {string[] | Record<string, string>} headers
 * @returns {Record<string, string>}
 */ function $2b9e95bfea3b7f8c$var$buildHeaders(headers) {
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
 */ function $2b9e95bfea3b7f8c$var$throwIfProxyAuthIsSent(headers) {
    const existProxyAuth = headers && Object.keys(headers).find((key)=>key.toLowerCase() === 'proxy-authorization');
    if (existProxyAuth) throw new $2b9e95bfea3b7f8c$require$InvalidArgumentError('Proxy-Authorization should be sent in ProxyAgent constructor');
}
module.exports = $2b9e95bfea3b7f8c$var$ProxyAgent;


