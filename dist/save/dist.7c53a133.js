require("./debug.b437d059.js");
require("./dist.6e82d4c8.js");
require("./parse-proxy-response.7a9288ce.js");
var $dTwlQ$net = require("net");
var $dTwlQ$tls = require("tls");
var $dTwlQ$assert = require("assert");
var $dTwlQ$url = require("url");


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
parcelRegister("b4ySZ", function(module, exports) {
"use strict";
var $80fb21068e5840b6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $80fb21068e5840b6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $80fb21068e5840b6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $80fb21068e5840b6$var$__createBinding(result, mod, k);
    }
    $80fb21068e5840b6$var$__setModuleDefault(result, mod);
    return result;
};
var $80fb21068e5840b6$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HttpsProxyAgent = void 0;

const $80fb21068e5840b6$var$net = $80fb21068e5840b6$var$__importStar($dTwlQ$net);

const $80fb21068e5840b6$var$tls = $80fb21068e5840b6$var$__importStar($dTwlQ$tls);

const $80fb21068e5840b6$var$assert_1 = $80fb21068e5840b6$var$__importDefault($dTwlQ$assert);

const $80fb21068e5840b6$var$debug_1 = $80fb21068e5840b6$var$__importDefault((parcelRequire("3E5mK")));

var $eukWG = parcelRequire("eukWG");


var $evMOr = parcelRequire("evMOr");
const $80fb21068e5840b6$var$debug = (0, $80fb21068e5840b6$var$debug_1.default)('https-proxy-agent');
const $80fb21068e5840b6$var$setServernameFromNonIpHost = (options)=>{
    if (options.servername === undefined && options.host && !$80fb21068e5840b6$var$net.isIP(options.host)) return {
        ...options,
        servername: options.host
    };
    return options;
};
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
 */ class $80fb21068e5840b6$var$HttpsProxyAgent extends $eukWG.Agent {
    constructor(proxy, opts){
        super(opts);
        this.options = {
            path: undefined
        };
        this.proxy = typeof proxy === 'string' ? new $dTwlQ$url.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        $80fb21068e5840b6$var$debug('Creating new HttpsProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            // Attempt to negotiate http/1.1 for proxy servers that support http/2
            ALPNProtocols: [
                'http/1.1'
            ],
            ...opts ? $80fb21068e5840b6$var$omit(opts, 'headers') : null,
            host: host,
            port: port
        };
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     */ async connect(req, opts) {
        const { proxy: proxy } = this;
        if (!opts.host) throw new TypeError('No "host" provided');
        // Create a socket connection to the proxy server.
        let socket;
        if (proxy.protocol === 'https:') {
            $80fb21068e5840b6$var$debug('Creating `tls.Socket`: %o', this.connectOpts);
            socket = $80fb21068e5840b6$var$tls.connect($80fb21068e5840b6$var$setServernameFromNonIpHost(this.connectOpts));
        } else {
            $80fb21068e5840b6$var$debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = $80fb21068e5840b6$var$net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        const host = $80fb21068e5840b6$var$net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r\n`;
        // Inject the `Proxy-Authorization` header if necessary.
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers['Proxy-Connection']) headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        for (const name of Object.keys(headers))payload += `${name}: ${headers[name]}\r\n`;
        const proxyResponsePromise = (0, $evMOr.parseProxyResponse)(socket);
        socket.write(`${payload}\r\n`);
        const { connect: connect, buffered: buffered } = await proxyResponsePromise;
        req.emit('proxyConnect', connect);
        this.emit('proxyConnect', connect, req);
        if (connect.statusCode === 200) {
            req.once('socket', $80fb21068e5840b6$var$resume);
            if (opts.secureEndpoint) {
                // The proxy is connecting to a TLS server, so upgrade
                // this socket connection to a TLS connection.
                $80fb21068e5840b6$var$debug('Upgrading socket connection to TLS');
                return $80fb21068e5840b6$var$tls.connect({
                    ...$80fb21068e5840b6$var$omit($80fb21068e5840b6$var$setServernameFromNonIpHost(opts), 'host', 'path', 'port'),
                    socket: socket
                });
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
        const fakeSocket = new $80fb21068e5840b6$var$net.Socket({
            writable: false
        });
        fakeSocket.readable = true;
        // Need to wait for the "socket" event to re-play the "data" events.
        req.once('socket', (s)=>{
            $80fb21068e5840b6$var$debug('Replaying proxy buffer for failed request');
            (0, $80fb21068e5840b6$var$assert_1.default)(s.listenerCount('data') > 0);
            // Replay the "buffered" Buffer onto the fake `socket`, since at
            // this point the HTTP module machinery has been hooked up for
            // the user.
            s.push(buffered);
            s.push(null);
        });
        return fakeSocket;
    }
}
$80fb21068e5840b6$var$HttpsProxyAgent.protocols = [
    'http',
    'https'
];
module.exports.HttpsProxyAgent = $80fb21068e5840b6$var$HttpsProxyAgent;
function $80fb21068e5840b6$var$resume(socket) {
    socket.resume();
}
function $80fb21068e5840b6$var$omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj)if (!keys.includes(key)) ret[key] = obj[key];
    return ret;
}

});
parcelRegister("3E5mK", function(module, exports) {
module.exports = new URL("debug.b437d059.js", "file:" + __filename).toString();

});

parcelRegister("eukWG", function(module, exports) {
module.exports = new URL("dist.6e82d4c8.js", "file:" + __filename).toString();

});

parcelRegister("evMOr", function(module, exports) {
module.exports = new URL("parse-proxy-response.7a9288ce.js", "file:" + __filename).toString();

});



//# sourceMappingURL=dist.7c53a133.js.map
