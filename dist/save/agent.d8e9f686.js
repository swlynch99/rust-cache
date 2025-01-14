require("./debug.296bf7c3.js");
require("./dist.4fbf0fab.js");
require("./dist.46936530.js");
var $91Ale$net = require("net");
var $91Ale$tls = require("tls");
var $91Ale$url = require("url");


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
parcelRegister("agKU8", function(module, exports) {
"use strict";
var $779fc843775d0057$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $779fc843775d0057$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

const $779fc843775d0057$var$net_1 = $779fc843775d0057$var$__importDefault($91Ale$net);

const $779fc843775d0057$var$tls_1 = $779fc843775d0057$var$__importDefault($91Ale$tls);

const $779fc843775d0057$var$url_1 = $779fc843775d0057$var$__importDefault($91Ale$url);

const $779fc843775d0057$var$debug_1 = $779fc843775d0057$var$__importDefault((parcelRequire("eVYlJ")));

const $779fc843775d0057$var$once_1 = $779fc843775d0057$var$__importDefault((parcelRequire("keQ4A")));

var $NzogG = parcelRequire("NzogG");
const $779fc843775d0057$var$debug = (0, $779fc843775d0057$var$debug_1.default)('http-proxy-agent');
function $779fc843775d0057$var$isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects
 * to the specified "HTTP proxy server" in order to proxy HTTP requests.
 *
 * @api public
 */ class $779fc843775d0057$var$HttpProxyAgent extends $NzogG.Agent {
    constructor(_opts){
        let opts;
        if (typeof _opts === 'string') opts = $779fc843775d0057$var$url_1.default.parse(_opts);
        else opts = _opts;
        if (!opts) throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        $779fc843775d0057$var$debug('Creating new HttpProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || $779fc843775d0057$var$isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') proxy.port = parseInt(proxy.port, 10);
        if (!proxy.port && proxy.host) proxy.port = this.secureProxy ? 443 : 80;
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
        return $779fc843775d0057$var$__awaiter(this, void 0, void 0, function*() {
            const { proxy: proxy, secureProxy: secureProxy } = this;
            const parsed = $779fc843775d0057$var$url_1.default.parse(req.path);
            if (!parsed.protocol) parsed.protocol = 'http:';
            if (!parsed.hostname) parsed.hostname = opts.hostname || opts.host || null;
            if (parsed.port == null && typeof opts.port) parsed.port = String(opts.port);
            if (parsed.port === '80') // if port is 80, then we can remove the port so that the
            // ":80" portion is not on the produced URL
            parsed.port = '';
            // Change the `http.ClientRequest` instance's "path" field
            // to the absolute path of the URL that will be requested.
            req.path = $779fc843775d0057$var$url_1.default.format(parsed);
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) req.setHeader('Proxy-Authorization', `Basic ${Buffer.from(proxy.auth).toString('base64')}`);
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                $779fc843775d0057$var$debug('Creating `tls.Socket`: %o', proxy);
                socket = $779fc843775d0057$var$tls_1.default.connect(proxy);
            } else {
                $779fc843775d0057$var$debug('Creating `net.Socket`: %o', proxy);
                socket = $779fc843775d0057$var$net_1.default.connect(proxy);
            }
            // At this point, the http ClientRequest's internal `_header` field
            // might have already been set. If this is the case then we'll need
            // to re-generate the string since we just changed the `req.path`.
            if (req._header) {
                let first;
                let endOfHeaders;
                $779fc843775d0057$var$debug('Regenerating stored HTTP header string for request');
                req._header = null;
                req._implicitHeader();
                if (req.output && req.output.length > 0) {
                    // Node < 12
                    $779fc843775d0057$var$debug('Patching connection write() output buffer with updated header');
                    first = req.output[0];
                    endOfHeaders = first.indexOf('\r\n\r\n') + 4;
                    req.output[0] = req._header + first.substring(endOfHeaders);
                    $779fc843775d0057$var$debug('Output buffer: %o', req.output);
                } else if (req.outputData && req.outputData.length > 0) {
                    // Node >= 12
                    $779fc843775d0057$var$debug('Patching connection write() output buffer with updated header');
                    first = req.outputData[0].data;
                    endOfHeaders = first.indexOf('\r\n\r\n') + 4;
                    req.outputData[0].data = req._header + first.substring(endOfHeaders);
                    $779fc843775d0057$var$debug('Output buffer: %o', req.outputData[0].data);
                }
            }
            // Wait for the socket's `connect` event, so that this `callback()`
            // function throws instead of the `http` request machinery. This is
            // important for i.e. `PacProxyAgent` which determines a failed proxy
            // connection via the `callback()` function throwing.
            yield (0, $779fc843775d0057$var$once_1.default)(socket, 'connect');
            return socket;
        });
    }
}
module.exports.default = $779fc843775d0057$var$HttpProxyAgent;

});
parcelRegister("keQ4A", function(module, exports) {
module.exports = new URL("dist.4fbf0fab.js", "file:" + __filename).toString();

});

parcelRegister("NzogG", function(module, exports) {
module.exports = new URL("dist.46936530.js", "file:" + __filename).toString();

});



