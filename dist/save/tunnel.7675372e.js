require("net");
var $lzOrr$tls = require("tls");
var $lzOrr$http = require("http");
var $lzOrr$https = require("https");
var $lzOrr$events = require("events");
require("assert");
var $lzOrr$util = require("util");


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
parcelRegister("kqczf", function(module, exports) {

$parcel$export(module.exports, "httpOverHttp", () => $eddffbfde4863f0d$export$25cbd437c61a3835, (v) => $eddffbfde4863f0d$export$25cbd437c61a3835 = v);
$parcel$export(module.exports, "httpsOverHttp", () => $eddffbfde4863f0d$export$c06e3df7111bae43, (v) => $eddffbfde4863f0d$export$c06e3df7111bae43 = v);
$parcel$export(module.exports, "httpOverHttps", () => $eddffbfde4863f0d$export$5d50e36ef656139f, (v) => $eddffbfde4863f0d$export$5d50e36ef656139f = v);
$parcel$export(module.exports, "httpsOverHttps", () => $eddffbfde4863f0d$export$212d6605025321cc, (v) => $eddffbfde4863f0d$export$212d6605025321cc = v);
$parcel$export(module.exports, "debug", () => $eddffbfde4863f0d$export$1c9f709888824e05, (v) => $eddffbfde4863f0d$export$1c9f709888824e05 = v);
var $eddffbfde4863f0d$export$25cbd437c61a3835;
var $eddffbfde4863f0d$export$c06e3df7111bae43;
var $eddffbfde4863f0d$export$5d50e36ef656139f;
var $eddffbfde4863f0d$export$212d6605025321cc;
var $eddffbfde4863f0d$export$1c9f709888824e05;
'use strict';







$eddffbfde4863f0d$export$25cbd437c61a3835 = $eddffbfde4863f0d$var$httpOverHttp;
$eddffbfde4863f0d$export$c06e3df7111bae43 = $eddffbfde4863f0d$var$httpsOverHttp;
$eddffbfde4863f0d$export$5d50e36ef656139f = $eddffbfde4863f0d$var$httpOverHttps;
$eddffbfde4863f0d$export$212d6605025321cc = $eddffbfde4863f0d$var$httpsOverHttps;
function $eddffbfde4863f0d$var$httpOverHttp(options) {
    var agent = new $eddffbfde4863f0d$var$TunnelingAgent(options);
    agent.request = $lzOrr$http.request;
    return agent;
}
function $eddffbfde4863f0d$var$httpsOverHttp(options) {
    var agent = new $eddffbfde4863f0d$var$TunnelingAgent(options);
    agent.request = $lzOrr$http.request;
    agent.createSocket = $eddffbfde4863f0d$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $eddffbfde4863f0d$var$httpOverHttps(options) {
    var agent = new $eddffbfde4863f0d$var$TunnelingAgent(options);
    agent.request = $lzOrr$https.request;
    return agent;
}
function $eddffbfde4863f0d$var$httpsOverHttps(options) {
    var agent = new $eddffbfde4863f0d$var$TunnelingAgent(options);
    agent.request = $lzOrr$https.request;
    agent.createSocket = $eddffbfde4863f0d$var$createSecureSocket;
    agent.defaultPort = 443;
    return agent;
}
function $eddffbfde4863f0d$var$TunnelingAgent(options) {
    var self = this;
    self.options = options || {};
    self.proxyOptions = self.options.proxy || {};
    self.maxSockets = self.options.maxSockets || $lzOrr$http.Agent.defaultMaxSockets;
    self.requests = [];
    self.sockets = [];
    self.on('free', function onFree(socket, host, port, localAddress) {
        var options = $eddffbfde4863f0d$var$toOptions(host, port, localAddress);
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
$lzOrr$util.inherits($eddffbfde4863f0d$var$TunnelingAgent, $lzOrr$events.EventEmitter);
$eddffbfde4863f0d$var$TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
    var self = this;
    var options = $eddffbfde4863f0d$var$mergeOptions({
        request: req
    }, self.options, $eddffbfde4863f0d$var$toOptions(host, port, localAddress));
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
$eddffbfde4863f0d$var$TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
    var self = this;
    var placeholder = {};
    self.sockets.push(placeholder);
    var connectOptions = $eddffbfde4863f0d$var$mergeOptions({}, self.proxyOptions, {
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
    $eddffbfde4863f0d$var$debug('making CONNECT request');
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
            $eddffbfde4863f0d$var$debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
            socket.destroy();
            var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        if (head.length > 0) {
            $eddffbfde4863f0d$var$debug('got illegal response body from proxy');
            socket.destroy();
            var error = new Error('got illegal response body from proxy');
            error.code = 'ECONNRESET';
            options.request.emit('error', error);
            self.removeSocket(placeholder);
            return;
        }
        $eddffbfde4863f0d$var$debug('tunneling connection has established');
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
    }
    function onError(cause) {
        connectReq.removeAllListeners();
        $eddffbfde4863f0d$var$debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = 'ECONNRESET';
        options.request.emit('error', error);
        self.removeSocket(placeholder);
    }
};
$eddffbfde4863f0d$var$TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
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
function $eddffbfde4863f0d$var$createSecureSocket(options, cb) {
    var self = this;
    $eddffbfde4863f0d$var$TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader('host');
        var tlsOptions = $eddffbfde4863f0d$var$mergeOptions({}, self.options, {
            socket: socket,
            servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
        });
        // 0 is dummy port for v0.6
        var secureSocket = $lzOrr$tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
    });
}
function $eddffbfde4863f0d$var$toOptions(host, port, localAddress) {
    if (typeof host === 'string') return {
        host: host,
        port: port,
        localAddress: localAddress
    };
    return host; // for v0.11 or later
}
function $eddffbfde4863f0d$var$mergeOptions(target) {
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
var $eddffbfde4863f0d$var$debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) $eddffbfde4863f0d$var$debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') args[0] = 'TUNNEL: ' + args[0];
    else args.unshift('TUNNEL:');
    console.error.apply(console, args);
};
else $eddffbfde4863f0d$var$debug = function() {};
$eddffbfde4863f0d$export$1c9f709888824e05 = $eddffbfde4863f0d$var$debug; // for test

});


//# sourceMappingURL=tunnel.7675372e.js.map
