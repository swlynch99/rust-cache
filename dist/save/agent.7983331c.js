require("./debug.296bf7c3.js");
require("./dist.46936530.js");
require("./parse-proxy-response.452a386d.js");
var $14La7$net = require("net");
var $14La7$tls = require("tls");
var $14La7$url = require("url");
var $14La7$assert = require("assert");


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
parcelRegister("kx59c", function(module, exports) {
"use strict";
var $ef2ae1e552479bde$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $ef2ae1e552479bde$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $ef2ae1e552479bde$var$net_1 = $ef2ae1e552479bde$var$__importDefault($14La7$net);

const $ef2ae1e552479bde$var$tls_1 = $ef2ae1e552479bde$var$__importDefault($14La7$tls);

const $ef2ae1e552479bde$var$url_1 = $ef2ae1e552479bde$var$__importDefault($14La7$url);

const $ef2ae1e552479bde$var$assert_1 = $ef2ae1e552479bde$var$__importDefault($14La7$assert);

const $ef2ae1e552479bde$var$debug_1 = $ef2ae1e552479bde$var$__importDefault((parcelRequire("eVYlJ")));

var $jK7Jk = parcelRequire("jK7Jk");

const $ef2ae1e552479bde$var$parse_proxy_response_1 = $ef2ae1e552479bde$var$__importDefault((parcelRequire("cKBPy")));
const $ef2ae1e552479bde$var$debug = $ef2ae1e552479bde$var$debug_1.default('https-proxy-agent:agent');
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */ class $ef2ae1e552479bde$var$HttpsProxyAgent extends $jK7Jk.Agent {
    constructor(_opts){
        let opts;
        if (typeof _opts === 'string') opts = $ef2ae1e552479bde$var$url_1.default.parse(_opts);
        else opts = _opts;
        if (!opts) throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        $ef2ae1e552479bde$var$debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || $ef2ae1e552479bde$var$isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') proxy.port = parseInt(proxy.port, 10);
        if (!proxy.port && proxy.host) proxy.port = this.secureProxy ? 443 : 80;
        // ALPN is supported by Node.js >= v5.
        // attempt to negotiate http/1.1 for proxy servers that support http/2
        if (this.secureProxy && !('ALPNProtocols' in proxy)) proxy.ALPNProtocols = [
            'http 1.1'
        ];
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */ callback(req, opts) {
        return $ef2ae1e552479bde$var$__awaiter(this, void 0, void 0, function*() {
            const { proxy: proxy, secureProxy: secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                $ef2ae1e552479bde$var$debug('Creating `tls.Socket`: %o', proxy);
                socket = $ef2ae1e552479bde$var$tls_1.default.connect(proxy);
            } else {
                $ef2ae1e552479bde$var$debug('Creating `net.Socket`: %o', proxy);
                socket = $ef2ae1e552479bde$var$net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host: host, port: port, secureEndpoint: secureEndpoint } = opts;
            if (!$ef2ae1e552479bde$var$isDefaultPort(port, secureEndpoint)) host += `:${port}`;
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers))payload += `${name}: ${headers[name]}\r\n`;
            const proxyResponsePromise = $ef2ae1e552479bde$var$parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode: statusCode, buffered: buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', $ef2ae1e552479bde$var$resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    $ef2ae1e552479bde$var$debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return $ef2ae1e552479bde$var$tls_1.default.connect(Object.assign(Object.assign({}, $ef2ae1e552479bde$var$omit(opts, 'host', 'hostname', 'path', 'port')), {
                        socket: socket,
                        servername: servername
                    }));
                }
                return socket;
            }
            // Some other status code that's not 200... need to re-play the HTTP
            // header "data" events onto the socket once the HTTP machinery is
            // attached so that the node core `http` can parse and handle the
            // error status code.
            // Close the original socket, and a new "fake" socket is returned
            // instead, so that the proxy doesn't get the HTTP request
            // written to it (which may contain `Authorization` headers or other
            // sensitive data).
            //
            // See: https://hackerone.com/reports/541502
            socket.destroy();
            const fakeSocket = new $ef2ae1e552479bde$var$net_1.default.Socket({
                writable: false
            });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s)=>{
                $ef2ae1e552479bde$var$debug('replaying proxy buffer for failed request');
                $ef2ae1e552479bde$var$assert_1.default(s.listenerCount('data') > 0);
                // Replay the "buffered" Buffer onto the fake `socket`, since at
                // this point the HTTP module machinery has been hooked up for
                // the user.
                s.push(buffered);
                s.push(null);
            });
            return fakeSocket;
        });
    }
}
module.exports.default = $ef2ae1e552479bde$var$HttpsProxyAgent;
function $ef2ae1e552479bde$var$resume(socket) {
    socket.resume();
}
function $ef2ae1e552479bde$var$isDefaultPort(port, secure) {
    return Boolean(!secure && port === 80 || secure && port === 443);
}
function $ef2ae1e552479bde$var$isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function $ef2ae1e552479bde$var$omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj)if (!keys.includes(key)) ret[key] = obj[key];
    return ret;
}

});
parcelRegister("cKBPy", function(module, exports) {
module.exports = new URL("parse-proxy-response.452a386d.js", "file:" + __filename).toString();

});



