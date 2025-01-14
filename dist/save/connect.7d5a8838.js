require("./util.26715e80.js");
require("./errors.621f8b7b.js");
var $kxSCv$net = require("net");
var $kxSCv$assert = require("assert");
var $kxSCv$tls = require("tls");


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



var $1Z05w = parcelRequire("1Z05w");

var $4V3Kr = parcelRequire("4V3Kr");
var $8383f5102a3e065a$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $8383f5102a3e065a$require$ConnectTimeoutError = $4V3Kr.ConnectTimeoutError;
let $8383f5102a3e065a$var$tls // include tls conditionally since it is not always available
;
// TODO: session re-use does not wait for the first
// connection to resolve the session and might therefore
// resolve the same servername multiple times even when
// re-use is enabled.
let $8383f5102a3e065a$var$SessionCache;
// FIXME: remove workaround when the Node bug is fixed
// https://github.com/nodejs/node/issues/49344#issuecomment-1741776308
if ($parcel$global.FinalizationRegistry && !process.env.NODE_V8_COVERAGE) $8383f5102a3e065a$var$SessionCache = class WeakSessionCache {
    constructor(maxCachedSessions){
        this._maxCachedSessions = maxCachedSessions;
        this._sessionCache = new Map();
        this._sessionRegistry = new $parcel$global.FinalizationRegistry((key)=>{
            if (this._sessionCache.size < this._maxCachedSessions) return;
            const ref = this._sessionCache.get(key);
            if (ref !== undefined && ref.deref() === undefined) this._sessionCache.delete(key);
        });
    }
    get(sessionKey) {
        const ref = this._sessionCache.get(sessionKey);
        return ref ? ref.deref() : null;
    }
    set(sessionKey, session) {
        if (this._maxCachedSessions === 0) return;
        this._sessionCache.set(sessionKey, new WeakRef(session));
        this._sessionRegistry.register(session, sessionKey);
    }
};
else $8383f5102a3e065a$var$SessionCache = class SimpleSessionCache {
    constructor(maxCachedSessions){
        this._maxCachedSessions = maxCachedSessions;
        this._sessionCache = new Map();
    }
    get(sessionKey) {
        return this._sessionCache.get(sessionKey);
    }
    set(sessionKey, session) {
        if (this._maxCachedSessions === 0) return;
        if (this._sessionCache.size >= this._maxCachedSessions) {
            // remove the oldest session
            const { value: oldestKey } = this._sessionCache.keys().next();
            this._sessionCache.delete(oldestKey);
        }
        this._sessionCache.set(sessionKey, session);
    }
};

function $8383f5102a3e065a$var$buildConnector({ allowH2: allowH2, maxCachedSessions: maxCachedSessions, socketPath: socketPath, timeout: timeout, ...opts }) {
    if (maxCachedSessions != null && (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)) throw new $8383f5102a3e065a$require$InvalidArgumentError('maxCachedSessions must be a positive integer or zero');
    const options = {
        path: socketPath,
        ...opts
    };
    const sessionCache = new $8383f5102a3e065a$var$SessionCache(maxCachedSessions == null ? 100 : maxCachedSessions);
    timeout = timeout == null ? 10e3 : timeout;
    allowH2 = allowH2 != null ? allowH2 : false;
    return function connect({ hostname: hostname, host: host, protocol: protocol, port: port, servername: servername, localAddress: localAddress, httpSocket: httpSocket }, callback) {
        let socket;
        if (protocol === 'https:') {
            if (!$8383f5102a3e065a$var$tls) $8383f5102a3e065a$var$tls = $kxSCv$tls;
            servername = servername || options.servername || $1Z05w.getServerName(host) || null;
            const sessionKey = servername || hostname;
            const session = sessionCache.get(sessionKey) || null;
            $kxSCv$assert(sessionKey);
            socket = $8383f5102a3e065a$var$tls.connect({
                highWaterMark: 16384,
                ...options,
                servername: servername,
                session: session,
                localAddress: localAddress,
                // TODO(HTTP/2): Add support for h2c
                ALPNProtocols: allowH2 ? [
                    'http/1.1',
                    'h2'
                ] : [
                    'http/1.1'
                ],
                socket: httpSocket,
                port: port || 443,
                host: hostname
            });
            socket.on('session', function(session) {
                // TODO (fix): Can a session become invalid once established? Don't think so?
                sessionCache.set(sessionKey, session);
            });
        } else {
            $kxSCv$assert(!httpSocket, 'httpSocket can only be sent on TLS update');
            socket = $kxSCv$net.connect({
                highWaterMark: 65536,
                ...options,
                localAddress: localAddress,
                port: port || 80,
                host: hostname
            });
        }
        // Set TCP keep alive options on the socket here instead of in connect() for the case of assigning the socket
        if (options.keepAlive == null || options.keepAlive) {
            const keepAliveInitialDelay = options.keepAliveInitialDelay === undefined ? 60e3 : options.keepAliveInitialDelay;
            socket.setKeepAlive(true, keepAliveInitialDelay);
        }
        const cancelTimeout = $8383f5102a3e065a$var$setupTimeout(()=>$8383f5102a3e065a$var$onConnectTimeout(socket), timeout);
        socket.setNoDelay(true).once(protocol === 'https:' ? 'secureConnect' : 'connect', function() {
            cancelTimeout();
            if (callback) {
                const cb = callback;
                callback = null;
                cb(null, this);
            }
        }).on('error', function(err) {
            cancelTimeout();
            if (callback) {
                const cb = callback;
                callback = null;
                cb(err);
            }
        });
        return socket;
    };
}
function $8383f5102a3e065a$var$setupTimeout(onConnectTimeout, timeout) {
    if (!timeout) return ()=>{};
    let s1 = null;
    let s2 = null;
    const timeoutId = setTimeout(()=>{
        // setImmediate is added to make sure that we priotorise socket error events over timeouts
        s1 = setImmediate(()=>{
            if (process.platform === 'win32') // Windows needs an extra setImmediate probably due to implementation differences in the socket logic
            s2 = setImmediate(()=>onConnectTimeout());
            else onConnectTimeout();
        });
    }, timeout);
    return ()=>{
        clearTimeout(timeoutId);
        clearImmediate(s1);
        clearImmediate(s2);
    };
}
function $8383f5102a3e065a$var$onConnectTimeout(socket) {
    $1Z05w.destroy(socket, new $8383f5102a3e065a$require$ConnectTimeoutError());
}
module.exports = $8383f5102a3e065a$var$buildConnector;


//# sourceMappingURL=connect.7d5a8838.js.map
