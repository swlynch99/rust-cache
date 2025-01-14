require("./debug.b437d059.js");
require("./dist.6e82d4c8.js");
var $1Cn5f$net = require("net");
var $1Cn5f$tls = require("tls");
var $1Cn5f$events = require("events");
var $1Cn5f$url = require("url");


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
"use strict";
var $b77bdcdb16c5f121$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $b77bdcdb16c5f121$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b77bdcdb16c5f121$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $b77bdcdb16c5f121$var$__createBinding(result, mod, k);
    }
    $b77bdcdb16c5f121$var$__setModuleDefault(result, mod);
    return result;
};
var $b77bdcdb16c5f121$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HttpProxyAgent = void 0;

const $b77bdcdb16c5f121$var$net = $b77bdcdb16c5f121$var$__importStar($1Cn5f$net);

const $b77bdcdb16c5f121$var$tls = $b77bdcdb16c5f121$var$__importStar($1Cn5f$tls);

const $b77bdcdb16c5f121$var$debug_1 = $b77bdcdb16c5f121$var$__importDefault((parcelRequire("6AkNx")));


var $b7BT2 = parcelRequire("b7BT2");

const $b77bdcdb16c5f121$var$debug = (0, $b77bdcdb16c5f121$var$debug_1.default)('http-proxy-agent');
/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects
 * to the specified "HTTP proxy server" in order to proxy HTTP requests.
 */ class $b77bdcdb16c5f121$var$HttpProxyAgent extends $b7BT2.Agent {
    constructor(proxy, opts){
        super(opts);
        this.proxy = typeof proxy === 'string' ? new $1Cn5f$url.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        $b77bdcdb16c5f121$var$debug('Creating new HttpProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            ...opts ? $b77bdcdb16c5f121$var$omit(opts, 'headers') : null,
            host: host,
            port: port
        };
    }
    addRequest(req, opts) {
        req._header = null;
        this.setRequestProps(req, opts);
        // @ts-expect-error `addRequest()` isn't defined in `@types/node`
        super.addRequest(req, opts);
    }
    setRequestProps(req, opts) {
        const { proxy: proxy } = this;
        const protocol = opts.secureEndpoint ? 'https:' : 'http:';
        const hostname = req.getHeader('host') || 'localhost';
        const base = `${protocol}//${hostname}`;
        const url = new $1Cn5f$url.URL(req.path, base);
        if (opts.port !== 80) url.port = String(opts.port);
        // Change the `http.ClientRequest` instance's "path" field
        // to the absolute path of the URL that will be requested.
        req.path = String(url);
        // Inject the `Proxy-Authorization` header if necessary.
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${Buffer.from(auth).toString('base64')}`;
        }
        if (!headers['Proxy-Connection']) headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        for (const name of Object.keys(headers)){
            const value = headers[name];
            if (value) req.setHeader(name, value);
        }
    }
    async connect(req, opts) {
        req._header = null;
        if (!req.path.includes('://')) this.setRequestProps(req, opts);
        // At this point, the http ClientRequest's internal `_header` field
        // might have already been set. If this is the case then we'll need
        // to re-generate the string since we just changed the `req.path`.
        let first;
        let endOfHeaders;
        $b77bdcdb16c5f121$var$debug('Regenerating stored HTTP header string for request');
        req._implicitHeader();
        if (req.outputData && req.outputData.length > 0) {
            $b77bdcdb16c5f121$var$debug('Patching connection write() output buffer with updated header');
            first = req.outputData[0].data;
            endOfHeaders = first.indexOf('\r\n\r\n') + 4;
            req.outputData[0].data = req._header + first.substring(endOfHeaders);
            $b77bdcdb16c5f121$var$debug('Output buffer: %o', req.outputData[0].data);
        }
        // Create a socket connection to the proxy server.
        let socket;
        if (this.proxy.protocol === 'https:') {
            $b77bdcdb16c5f121$var$debug('Creating `tls.Socket`: %o', this.connectOpts);
            socket = $b77bdcdb16c5f121$var$tls.connect(this.connectOpts);
        } else {
            $b77bdcdb16c5f121$var$debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = $b77bdcdb16c5f121$var$net.connect(this.connectOpts);
        }
        // Wait for the socket's `connect` event, so that this `callback()`
        // function throws instead of the `http` request machinery. This is
        // important for i.e. `PacProxyAgent` which determines a failed proxy
        // connection via the `callback()` function throwing.
        await (0, $1Cn5f$events.once)(socket, 'connect');
        return socket;
    }
}
$b77bdcdb16c5f121$var$HttpProxyAgent.protocols = [
    'http',
    'https'
];
module.exports.HttpProxyAgent = $b77bdcdb16c5f121$var$HttpProxyAgent;
function $b77bdcdb16c5f121$var$omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj)if (!keys.includes(key)) ret[key] = obj[key];
    return ret;
}


//# sourceMappingURL=dist.2c6b404d.js.map
