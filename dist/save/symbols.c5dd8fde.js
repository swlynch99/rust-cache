
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
parcelRegister("bMqEt", function(module, exports) {
module.exports = {
    kClose: Symbol('close'),
    kDestroy: Symbol('destroy'),
    kDispatch: Symbol('dispatch'),
    kUrl: Symbol('url'),
    kWriting: Symbol('writing'),
    kResuming: Symbol('resuming'),
    kQueue: Symbol('queue'),
    kConnect: Symbol('connect'),
    kConnecting: Symbol('connecting'),
    kHeadersList: Symbol('headers list'),
    kKeepAliveDefaultTimeout: Symbol('default keep alive timeout'),
    kKeepAliveMaxTimeout: Symbol('max keep alive timeout'),
    kKeepAliveTimeoutThreshold: Symbol('keep alive timeout threshold'),
    kKeepAliveTimeoutValue: Symbol('keep alive timeout'),
    kKeepAlive: Symbol('keep alive'),
    kHeadersTimeout: Symbol('headers timeout'),
    kBodyTimeout: Symbol('body timeout'),
    kServerName: Symbol('server name'),
    kLocalAddress: Symbol('local address'),
    kHost: Symbol('host'),
    kNoRef: Symbol('no ref'),
    kBodyUsed: Symbol('used'),
    kRunning: Symbol('running'),
    kBlocking: Symbol('blocking'),
    kPending: Symbol('pending'),
    kSize: Symbol('size'),
    kBusy: Symbol('busy'),
    kQueued: Symbol('queued'),
    kFree: Symbol('free'),
    kConnected: Symbol('connected'),
    kClosed: Symbol('closed'),
    kNeedDrain: Symbol('need drain'),
    kReset: Symbol('reset'),
    kDestroyed: Symbol.for('nodejs.stream.destroyed'),
    kMaxHeadersSize: Symbol('max headers size'),
    kRunningIdx: Symbol('running index'),
    kPendingIdx: Symbol('pending index'),
    kError: Symbol('error'),
    kClients: Symbol('clients'),
    kClient: Symbol('client'),
    kParser: Symbol('parser'),
    kOnDestroyed: Symbol('destroy callbacks'),
    kPipelining: Symbol('pipelining'),
    kSocket: Symbol('socket'),
    kHostHeader: Symbol('host header'),
    kConnector: Symbol('connector'),
    kStrictContentLength: Symbol('strict content length'),
    kMaxRedirections: Symbol('maxRedirections'),
    kMaxRequests: Symbol('maxRequestsPerClient'),
    kProxy: Symbol('proxy agent options'),
    kCounter: Symbol('socket request counter'),
    kInterceptors: Symbol('dispatch interceptors'),
    kMaxResponseSize: Symbol('max response size'),
    kHTTP2Session: Symbol('http2Session'),
    kHTTP2SessionState: Symbol('http2Session state'),
    kHTTP2BuildRequest: Symbol('http2 build request'),
    kHTTP1BuildRequest: Symbol('http1 build request'),
    kHTTP2CopyHeaders: Symbol('http2 copy headers'),
    kHTTPConnVersion: Symbol('http connection version'),
    kRetryHandlerDefaultRetry: Symbol('retry agent default retry'),
    kConstruct: Symbol('constructable')
};

});


//# sourceMappingURL=symbols.c5dd8fde.js.map
