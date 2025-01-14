require("./debug.296bf7c3.js");
require("./promisify.9af3da9e.js");
var $jujzs$events = require("events");


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
parcelRegister("kfnE0", function(module, exports) {
module.exports = new URL("promisify.9af3da9e.js", "file:" + __filename).toString();

});

"use strict";
var $e5f84f3b5a91af26$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};


const $e5f84f3b5a91af26$var$debug_1 = $e5f84f3b5a91af26$var$__importDefault((parcelRequire("eVYlJ")));

const $e5f84f3b5a91af26$var$promisify_1 = $e5f84f3b5a91af26$var$__importDefault((parcelRequire("kfnE0")));
const $e5f84f3b5a91af26$var$debug = $e5f84f3b5a91af26$var$debug_1.default('agent-base');
function $e5f84f3b5a91af26$var$isAgent(v) {
    return Boolean(v) && typeof v.addRequest === 'function';
}
function $e5f84f3b5a91af26$var$isSecureEndpoint() {
    const { stack: stack } = new Error();
    if (typeof stack !== 'string') return false;
    return stack.split('\n').some((l)=>l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
}
function $e5f84f3b5a91af26$var$createAgent(callback, opts) {
    return new $e5f84f3b5a91af26$var$createAgent.Agent(callback, opts);
}
(function(createAgent) {
    /**
     * Base `http.Agent` implementation.
     * No pooling/keep-alive is implemented by default.
     *
     * @param {Function} callback
     * @api public
     */ class Agent extends $jujzs$events.EventEmitter {
        constructor(callback, _opts){
            super();
            let opts = _opts;
            if (typeof callback === 'function') this.callback = callback;
            else if (callback) opts = callback;
            // Timeout for the socket to be returned from the callback
            this.timeout = null;
            if (opts && typeof opts.timeout === 'number') this.timeout = opts.timeout;
            // These aren't actually used by `agent-base`, but are required
            // for the TypeScript definition files in `@types/node` :/
            this.maxFreeSockets = 1;
            this.maxSockets = 1;
            this.maxTotalSockets = Infinity;
            this.sockets = {};
            this.freeSockets = {};
            this.requests = {};
            this.options = {};
        }
        get defaultPort() {
            if (typeof this.explicitDefaultPort === 'number') return this.explicitDefaultPort;
            return $e5f84f3b5a91af26$var$isSecureEndpoint() ? 443 : 80;
        }
        set defaultPort(v) {
            this.explicitDefaultPort = v;
        }
        get protocol() {
            if (typeof this.explicitProtocol === 'string') return this.explicitProtocol;
            return $e5f84f3b5a91af26$var$isSecureEndpoint() ? 'https:' : 'http:';
        }
        set protocol(v) {
            this.explicitProtocol = v;
        }
        callback(req, opts, fn) {
            throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
        }
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */ addRequest(req, _opts) {
            const opts = Object.assign({}, _opts);
            if (typeof opts.secureEndpoint !== 'boolean') opts.secureEndpoint = $e5f84f3b5a91af26$var$isSecureEndpoint();
            if (opts.host == null) opts.host = 'localhost';
            if (opts.port == null) opts.port = opts.secureEndpoint ? 443 : 80;
            if (opts.protocol == null) opts.protocol = opts.secureEndpoint ? 'https:' : 'http:';
            if (opts.host && opts.path) // If both a `host` and `path` are specified then it's most
            // likely the result of a `url.parse()` call... we need to
            // remove the `path` portion so that `net.connect()` doesn't
            // attempt to open that as a unix socket file.
            delete opts.path;
            delete opts.agent;
            delete opts.hostname;
            delete opts._defaultAgent;
            delete opts.defaultPort;
            delete opts.createConnection;
            // Hint to use "Connection: close"
            // XXX: non-documented `http` module API :(
            req._last = true;
            req.shouldKeepAlive = false;
            let timedOut = false;
            let timeoutId = null;
            const timeoutMs = opts.timeout || this.timeout;
            const onerror = (err)=>{
                if (req._hadError) return;
                req.emit('error', err);
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req._hadError = true;
            };
            const ontimeout = ()=>{
                timeoutId = null;
                timedOut = true;
                const err = new Error(`A "socket" was not created for HTTP request before ${timeoutMs}ms`);
                err.code = 'ETIMEOUT';
                onerror(err);
            };
            const callbackError = (err)=>{
                if (timedOut) return;
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                onerror(err);
            };
            const onsocket = (socket)=>{
                if (timedOut) return;
                if (timeoutId != null) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                if ($e5f84f3b5a91af26$var$isAgent(socket)) {
                    // `socket` is actually an `http.Agent` instance, so
                    // relinquish responsibility for this `req` to the Agent
                    // from here on
                    $e5f84f3b5a91af26$var$debug('Callback returned another Agent instance %o', socket.constructor.name);
                    socket.addRequest(req, opts);
                    return;
                }
                if (socket) {
                    socket.once('free', ()=>{
                        this.freeSocket(socket, opts);
                    });
                    req.onSocket(socket);
                    return;
                }
                const err = new Error(`no Duplex stream was returned to agent-base for \`${req.method} ${req.path}\``);
                onerror(err);
            };
            if (typeof this.callback !== 'function') {
                onerror(new Error('`callback` is not defined'));
                return;
            }
            if (!this.promisifiedCallback) {
                if (this.callback.length >= 3) {
                    $e5f84f3b5a91af26$var$debug('Converting legacy callback function to promise');
                    this.promisifiedCallback = $e5f84f3b5a91af26$var$promisify_1.default(this.callback);
                } else this.promisifiedCallback = this.callback;
            }
            if (typeof timeoutMs === 'number' && timeoutMs > 0) timeoutId = setTimeout(ontimeout, timeoutMs);
            if ('port' in opts && typeof opts.port !== 'number') opts.port = Number(opts.port);
            try {
                $e5f84f3b5a91af26$var$debug('Resolving socket for %o request: %o', opts.protocol, `${req.method} ${req.path}`);
                Promise.resolve(this.promisifiedCallback(req, opts)).then(onsocket, callbackError);
            } catch (err) {
                Promise.reject(err).catch(callbackError);
            }
        }
        freeSocket(socket, opts) {
            $e5f84f3b5a91af26$var$debug('Freeing socket %o %o', socket.constructor.name, opts);
            socket.destroy();
        }
        destroy() {
            $e5f84f3b5a91af26$var$debug('Destroying agent %o', this.constructor.name);
        }
    }
    createAgent.Agent = Agent;
    // So that `instanceof` works correctly
    createAgent.prototype = createAgent.Agent.prototype;
})($e5f84f3b5a91af26$var$createAgent || ($e5f84f3b5a91af26$var$createAgent = {}));
module.exports = $e5f84f3b5a91af26$var$createAgent;


