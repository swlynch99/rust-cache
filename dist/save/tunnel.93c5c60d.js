require("net");
var $1Bq5K$tls = require("tls");
var $1Bq5K$http = require("http");
var $1Bq5K$https = require("https");
var $1Bq5K$events = require("events");
require("assert");
var $1Bq5K$util = require("util");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("1Argi", function(module, exports) {

$parcel$export(module.exports, "httpOverHttp", () => $127e4cdc5ad7c2e5$export$25cbd437c61a3835, (v) => $127e4cdc5ad7c2e5$export$25cbd437c61a3835 = v);
$parcel$export(module.exports, "httpsOverHttp", () => $127e4cdc5ad7c2e5$export$c06e3df7111bae43, (v) => $127e4cdc5ad7c2e5$export$c06e3df7111bae43 = v);
$parcel$export(module.exports, "httpOverHttps", () => $127e4cdc5ad7c2e5$export$5d50e36ef656139f, (v) => $127e4cdc5ad7c2e5$export$5d50e36ef656139f = v);
$parcel$export(module.exports, "httpsOverHttps", () => $127e4cdc5ad7c2e5$export$212d6605025321cc, (v) => $127e4cdc5ad7c2e5$export$212d6605025321cc = v);
$parcel$export(module.exports, "debug", () => $127e4cdc5ad7c2e5$export$1c9f709888824e05, (v) => $127e4cdc5ad7c2e5$export$1c9f709888824e05 = v);
var $127e4cdc5ad7c2e5$export$25cbd437c61a3835;
var $127e4cdc5ad7c2e5$export$c06e3df7111bae43;
var $127e4cdc5ad7c2e5$export$5d50e36ef656139f;
var $127e4cdc5ad7c2e5$export$212d6605025321cc;
var $127e4cdc5ad7c2e5$export$1c9f709888824e05;
'use strict';







$127e4cdc5ad7c2e5$export$25cbd437c61a3835 = $127e4cdc5ad7c2e5$var$httpOverHttp;
$127e4cdc5ad7c2e5$export$c06e3df7111bae43 = $127e4cdc5ad7c2e5$var$httpsOverHttp;
$127e4cdc5ad7c2e5$export$5d50e36ef656139f = $127e4cdc5ad7c2e5$var$httpOverHttps;
$127e4cdc5ad7c2e5$export$212d6605025321cc = $127e4cdc5ad7c2e5$var$httpsOverHttps;
function $127e4cdc5ad7c2e5$var$httpOverHttp(options) {
    var agent = new $127e4cdc5ad7c2e5$var$TunnelingAgent(options);
    agent.request = $1Bq5K$http.request;
    return agent;
}
function $127e4cdc5ad7c2e5$var$httpsOverHttp(options) {
    var agent = new $127e4cdc5ad7c2e5$var$TunnelingAgent(options);
    agent.request = $1Bq5K$http.request;
    agent.createSocket = $127e4cdc5ad7c2e5$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $127e4cdc5ad7c2e5$var$httpOverHttps(options) {
    var agent = new $127e4cdc5ad7c2e5$var$TunnelingAgent(options);
    agent.request = $1Bq5K$https.request;
    return agent;
}
function $127e4cdc5ad7c2e5$var$httpsOverHttps(options) {
    var agent = new $127e4cdc5ad7c2e5$var$TunnelingAgent(options);
    agent.request = $1Bq5K$https.request;
    agent.createSocket = $127e4cdc5ad7c2e5$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $127e4cdc5ad7c2e5$var$TunnelingAgent(options) {
    var self = this;
    self.options = options || {};
    self.proxyOptions = self.options.proxy || {};
    self.maxSockets = self.options.maxSockets || $1Bq5K$http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on('free', function onFree(socket, host, port, localAddress) {
        var options = $127e4cdc5ad7c2e5$var$toOptions(host, port, localAddress);
        for(var i = 0, len = self.requests.length; i < len; ++i){
            var pending = self.requests[i];
            if (pending.host === options.host && pending.port === options.port) {
                // Detect the request to connect same origin server,
                // reuse the connection.
                self.requests.splice(i, 1);
                pending.request.onSocket(socket);
                return;
            }
        }
        socket.destroy();
        self.removeSocket(socket);
    });
}
$1Bq5K$util.inherits($127e4cdc5ad7c2e5$var$TunnelingAgent, $1Bq5K$events.EventEmitter);
$127e4cdc5ad7c2e5$var$TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = $127e4cdc5ad7c2e5$var$mergeOptions({
        request: req
    }, self.options, $127e4cdc5ad7c2e5$var$toOptions(host, port, localAddress));
    if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options);
        return;
    }
    // If we are under maxSockets create a new one.
    self.createSocket(options, function(socket) {
        socket.on('free', onFree);
        socket.on('close', onCloseOrRemove);
        socket.on('agentRemove', onCloseOrRemove);
        req.onSocket(socket);
        function onFree() {
            self.emit('free', socket, options);
        }
        function onCloseOrRemove(err) {
            self.removeSocket(socket);
            socket.removeListener('free', onFree);
            socket.removeListener('close', onCloseOrRemove);
            socket.removeListener('agentRemove', onCloseOrRemove);
        }
    });
};
$127e4cdc5ad7c2e5$var$TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {};
    self.sockets.push(placeholder);
    var connectOptions = $127e4cdc5ad7c2e5$var$mergeOptions({}, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
            host: options.host + ':' + options.port
        }
    });
    if (options.localAddress) connectOptions.localAddress = options.localAddress;
    if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
    }
    $127e4cdc5ad7c2e5$var$debug('making CONNECT request');
    var connectReq = self.request(connectOptions);
    connectReq.useChunkedEncodingByDefault = false; // for v0.6
    connectReq.once('response', onResponse); // for v0.6
    connectReq.once('upgrade', onUpgrade); // for v0.6
    connectReq.once('connect', onConnect); // for v0.7 or later
    connectReq.once('error', onError);
    connectReq.end();
    function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true;
    }
    function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function() {
            onConnect(res, socket, head);
        });
    }
    function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode !== 200) {
            $127e4cdc5ad7c2e5$var$debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
            socket.destroy();
            var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        if (head.length > 0) {
            $127e4cdc5ad7c2e5$var$debug('got illegal response body from proxy');
            socket.destroy();
            var error = new Error('got illegal response body from proxy');
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        $127e4cdc5ad7c2e5$var$debug('tunneling connection has established');
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        $127e4cdc5ad7c2e5$var$debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
    }
};
$127e4cdc5ad7c2e5$var$TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
    var pos = this.sockets.indexOf(socket);
    if (pos === -1) return;
    this.sockets.splice(pos, 1);
    var pending = this.requests.shift();
    if (pending) // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
        pending.request.onSocket(socket);
    });
};
function $127e4cdc5ad7c2e5$var$createSecureSocket(options, cb) {
    var self = this;
    $127e4cdc5ad7c2e5$var$TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader('host');
        var tlsOptions = $127e4cdc5ad7c2e5$var$mergeOptions({}, self.options, {
            socket: socket,
            servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
        });
        // 0 is dummy port for v0.6
        var secureSocket = $1Bq5K$tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function $127e4cdc5ad7c2e5$var$toOptions(host, port, localAddress) {
    if (typeof host === 'string') return {
        host: host,
        port: port,
        localAddress: localAddress
    };
    return host; // for v0.11 or later
}
function $127e4cdc5ad7c2e5$var$mergeOptions(target) {
    for(var i = 1, len = arguments.length; i < len; ++i){
        var overrides = arguments[i];
        if (typeof overrides === 'object') {
            var keys = Object.keys(overrides);
            for(var j = 0, keyLen = keys.length; j < keyLen; ++j){
                var k = keys[j];
                if (overrides[k] !== undefined) target[k] = overrides[k];
            }
        }
    }
    return target;
}
var $127e4cdc5ad7c2e5$var$debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) $127e4cdc5ad7c2e5$var$debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') args[0] = 'TUNNEL: ' + args[0];
    else args.unshift('TUNNEL:');
    console.error.apply(console, args);
};
else $127e4cdc5ad7c2e5$var$debug = function() {};
$127e4cdc5ad7c2e5$export$1c9f709888824e05 = $127e4cdc5ad7c2e5$var$debug; // for test

});


