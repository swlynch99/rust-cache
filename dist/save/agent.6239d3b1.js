require("./debug.b437d059.js");
require("./dist.e0d50cc2.js");
require("./parse-proxy-response.f288cb6d.js");
var $7GtVL$net = require("net");
var $7GtVL$tls = require("tls");
var $7GtVL$url = require("url");
var $7GtVL$assert = require("assert");


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
parcelRegister("c5zpX", function(module, exports) {
"use strict";
var $8cd16ce4ddf513ce$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $8cd16ce4ddf513ce$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $8cd16ce4ddf513ce$var$net_1 = $8cd16ce4ddf513ce$var$__importDefault($7GtVL$net);

const $8cd16ce4ddf513ce$var$tls_1 = $8cd16ce4ddf513ce$var$__importDefault($7GtVL$tls);

const $8cd16ce4ddf513ce$var$url_1 = $8cd16ce4ddf513ce$var$__importDefault($7GtVL$url);

const $8cd16ce4ddf513ce$var$assert_1 = $8cd16ce4ddf513ce$var$__importDefault($7GtVL$assert);

const $8cd16ce4ddf513ce$var$debug_1 = $8cd16ce4ddf513ce$var$__importDefault((parcelRequire("6AkNx")));

var $lLSI7 = parcelRequire("lLSI7");

const $8cd16ce4ddf513ce$var$parse_proxy_response_1 = $8cd16ce4ddf513ce$var$__importDefault((parcelRequire("bEv4W")));
const $8cd16ce4ddf513ce$var$debug = $8cd16ce4ddf513ce$var$debug_1.default('https-proxy-agent:agent');
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
 */ class $8cd16ce4ddf513ce$var$HttpsProxyAgent extends $lLSI7.Agent {
    constructor(_opts){
        let opts;
        if (typeof _opts === 'string') opts = $8cd16ce4ddf513ce$var$url_1.default.parse(_opts);
        else opts = _opts;
        if (!opts) throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        $8cd16ce4ddf513ce$var$debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || $8cd16ce4ddf513ce$var$isHTTPS(proxy.protocol);
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
        return $8cd16ce4ddf513ce$var$__awaiter(this, void 0, void 0, function*() {
            const { proxy: proxy, secureProxy: secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                $8cd16ce4ddf513ce$var$debug('Creating `tls.Socket`: %o', proxy);
                socket = $8cd16ce4ddf513ce$var$tls_1.default.connect(proxy);
            } else {
                $8cd16ce4ddf513ce$var$debug('Creating `net.Socket`: %o', proxy);
                socket = $8cd16ce4ddf513ce$var$net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host: host, port: port, secureEndpoint: secureEndpoint } = opts;
            if (!$8cd16ce4ddf513ce$var$isDefaultPort(port, secureEndpoint)) host += `:${port}`;
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers))payload += `${name}: ${headers[name]}\r\n`;
            const proxyResponsePromise = $8cd16ce4ddf513ce$var$parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode: statusCode, buffered: buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', $8cd16ce4ddf513ce$var$resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    $8cd16ce4ddf513ce$var$debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return $8cd16ce4ddf513ce$var$tls_1.default.connect(Object.assign(Object.assign({}, $8cd16ce4ddf513ce$var$omit(opts, 'host', 'hostname', 'path', 'port')), {
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
            const fakeSocket = new $8cd16ce4ddf513ce$var$net_1.default.Socket({
                writable: false
            });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s)=>{
                $8cd16ce4ddf513ce$var$debug('replaying proxy buffer for failed request');
                $8cd16ce4ddf513ce$var$assert_1.default(s.listenerCount('data') > 0);
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
module.exports.default = $8cd16ce4ddf513ce$var$HttpsProxyAgent;
function $8cd16ce4ddf513ce$var$resume(socket) {
    socket.resume();
}
function $8cd16ce4ddf513ce$var$isDefaultPort(port, secure) {
    return Boolean(!secure && port === 80 || secure && port === 443);
}
function $8cd16ce4ddf513ce$var$isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function $8cd16ce4ddf513ce$var$omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj)if (!keys.includes(key)) ret[key] = obj[key];
    return ret;
}

});
parcelRegister("bEv4W", function(module, exports) {
module.exports = new URL("parse-proxy-response.f288cb6d.js", "file:" + __filename).toString();

});



//# sourceMappingURL=agent.6239d3b1.js.map
