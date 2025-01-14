require("./util.26715e80.js");
require("./timers.064dcd97.js");
require("./request.d1eb1188.js");
require("./dispatcher-base.f09aedf0.js");
require("./errors.621f8b7b.js");
require("./connect.7d5a8838.js");
require("./symbols.c5dd8fde.js");
require("./constants.7719370a.js");
require("./redirectInterceptor.0ad78b0c.js");
require("./llhttp-wasm.4c2ffea3.js");
require("./llhttp_simd-wasm.c8c10efd.js");
var $3esK3$assert = require("assert");
var $3esK3$net = require("net");
var $3esK3$http = require("http");
var $3esK3$stream = require("stream");


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
parcelRegister("DTPVI", function(module, exports) {
module.exports = new URL("llhttp-wasm.4c2ffea3.js", "file:" + __filename).toString();

});

parcelRegister("lWUyD", function(module, exports) {
module.exports = new URL("llhttp_simd-wasm.c8c10efd.js", "file:" + __filename).toString();

});

// @ts-check
'use strict';




var $64ffcb69b21b810e$require$pipeline = $3esK3$stream.pipeline;
var $792c84e8fb672c12$exports = {};
$792c84e8fb672c12$exports = new URL("util.26715e80.js", "file:" + __filename).toString();


var $ed3b63f18afefa8e$exports = {};
$ed3b63f18afefa8e$exports = new URL("timers.064dcd97.js", "file:" + __filename).toString();


var $a3d6e6d914b506e6$exports = {};
$a3d6e6d914b506e6$exports = new URL("request.d1eb1188.js", "file:" + __filename).toString();


var $cb20da84f2b18099$exports = {};
$cb20da84f2b18099$exports = new URL("dispatcher-base.f09aedf0.js", "file:" + __filename).toString();



var $4V3Kr = parcelRequire("4V3Kr");
var $64ffcb69b21b810e$require$RequestContentLengthMismatchError = $4V3Kr.RequestContentLengthMismatchError;
var $64ffcb69b21b810e$require$ResponseContentLengthMismatchError = $4V3Kr.ResponseContentLengthMismatchError;
var $64ffcb69b21b810e$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $64ffcb69b21b810e$require$RequestAbortedError = $4V3Kr.RequestAbortedError;
var $64ffcb69b21b810e$require$HeadersTimeoutError = $4V3Kr.HeadersTimeoutError;
var $64ffcb69b21b810e$require$HeadersOverflowError = $4V3Kr.HeadersOverflowError;
var $64ffcb69b21b810e$require$SocketError = $4V3Kr.SocketError;
var $64ffcb69b21b810e$require$InformationalError = $4V3Kr.InformationalError;
var $64ffcb69b21b810e$require$BodyTimeoutError = $4V3Kr.BodyTimeoutError;
var $64ffcb69b21b810e$require$HTTPParserError = $4V3Kr.HTTPParserError;
var $64ffcb69b21b810e$require$ResponseExceededMaxSizeError = $4V3Kr.ResponseExceededMaxSizeError;
var $64ffcb69b21b810e$require$ClientDestroyedError = $4V3Kr.ClientDestroyedError;
var $63620cfa4ec2e930$exports = {};
$63620cfa4ec2e930$exports = new URL("connect.7d5a8838.js", "file:" + __filename).toString();



var $bMqEt = parcelRequire("bMqEt");
var $64ffcb69b21b810e$require$kUrl = $bMqEt.kUrl;
var $64ffcb69b21b810e$require$kReset = $bMqEt.kReset;
var $64ffcb69b21b810e$require$kServerName = $bMqEt.kServerName;
var $64ffcb69b21b810e$require$kClient = $bMqEt.kClient;
var $64ffcb69b21b810e$require$kBusy = $bMqEt.kBusy;
var $64ffcb69b21b810e$require$kParser = $bMqEt.kParser;
var $64ffcb69b21b810e$require$kConnect = $bMqEt.kConnect;
var $64ffcb69b21b810e$require$kBlocking = $bMqEt.kBlocking;
var $64ffcb69b21b810e$require$kResuming = $bMqEt.kResuming;
var $64ffcb69b21b810e$require$kRunning = $bMqEt.kRunning;
var $64ffcb69b21b810e$require$kPending = $bMqEt.kPending;
var $64ffcb69b21b810e$require$kSize = $bMqEt.kSize;
var $64ffcb69b21b810e$require$kWriting = $bMqEt.kWriting;
var $64ffcb69b21b810e$require$kQueue = $bMqEt.kQueue;
var $64ffcb69b21b810e$require$kConnected = $bMqEt.kConnected;
var $64ffcb69b21b810e$require$kConnecting = $bMqEt.kConnecting;
var $64ffcb69b21b810e$require$kNeedDrain = $bMqEt.kNeedDrain;
var $64ffcb69b21b810e$require$kNoRef = $bMqEt.kNoRef;
var $64ffcb69b21b810e$require$kKeepAliveDefaultTimeout = $bMqEt.kKeepAliveDefaultTimeout;
var $64ffcb69b21b810e$require$kHostHeader = $bMqEt.kHostHeader;
var $64ffcb69b21b810e$require$kPendingIdx = $bMqEt.kPendingIdx;
var $64ffcb69b21b810e$require$kRunningIdx = $bMqEt.kRunningIdx;
var $64ffcb69b21b810e$require$kError = $bMqEt.kError;
var $64ffcb69b21b810e$require$kPipelining = $bMqEt.kPipelining;
var $64ffcb69b21b810e$require$kSocket = $bMqEt.kSocket;
var $64ffcb69b21b810e$require$kKeepAliveTimeoutValue = $bMqEt.kKeepAliveTimeoutValue;
var $64ffcb69b21b810e$require$kMaxHeadersSize = $bMqEt.kMaxHeadersSize;
var $64ffcb69b21b810e$require$kKeepAliveMaxTimeout = $bMqEt.kKeepAliveMaxTimeout;
var $64ffcb69b21b810e$require$kKeepAliveTimeoutThreshold = $bMqEt.kKeepAliveTimeoutThreshold;
var $64ffcb69b21b810e$require$kHeadersTimeout = $bMqEt.kHeadersTimeout;
var $64ffcb69b21b810e$require$kBodyTimeout = $bMqEt.kBodyTimeout;
var $64ffcb69b21b810e$require$kStrictContentLength = $bMqEt.kStrictContentLength;
var $64ffcb69b21b810e$require$kConnector = $bMqEt.kConnector;
var $64ffcb69b21b810e$require$kMaxRedirections = $bMqEt.kMaxRedirections;
var $64ffcb69b21b810e$require$kMaxRequests = $bMqEt.kMaxRequests;
var $64ffcb69b21b810e$require$kCounter = $bMqEt.kCounter;
var $64ffcb69b21b810e$require$kClose = $bMqEt.kClose;
var $64ffcb69b21b810e$require$kDestroy = $bMqEt.kDestroy;
var $64ffcb69b21b810e$require$kDispatch = $bMqEt.kDispatch;
var $64ffcb69b21b810e$require$kInterceptors = $bMqEt.kInterceptors;
var $64ffcb69b21b810e$require$kLocalAddress = $bMqEt.kLocalAddress;
var $64ffcb69b21b810e$require$kMaxResponseSize = $bMqEt.kMaxResponseSize;
var $64ffcb69b21b810e$require$kHTTPConnVersion = $bMqEt.kHTTPConnVersion;
var $64ffcb69b21b810e$require$kHost = $bMqEt.kHost;
var $64ffcb69b21b810e$require$kHTTP2Session = $bMqEt.kHTTP2Session;
var $64ffcb69b21b810e$require$kHTTP2SessionState = $bMqEt.kHTTP2SessionState;
var $64ffcb69b21b810e$require$kHTTP2BuildRequest = $bMqEt.kHTTP2BuildRequest;
var $64ffcb69b21b810e$require$kHTTP2CopyHeaders = $bMqEt.kHTTP2CopyHeaders;
var $64ffcb69b21b810e$require$kHTTP1BuildRequest = $bMqEt.kHTTP1BuildRequest;
/** @type {import('http2')} */ let $64ffcb69b21b810e$var$http2;

try {
    $64ffcb69b21b810e$var$http2 = $64ffcb69b21b810e$import$dc5c58500bc5a0ce;
} catch  {
    // @ts-ignore
    $64ffcb69b21b810e$var$http2 = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: $64ffcb69b21b810e$var$HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_METHOD: $64ffcb69b21b810e$var$HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH: $64ffcb69b21b810e$var$HTTP2_HEADER_PATH, HTTP2_HEADER_SCHEME: $64ffcb69b21b810e$var$HTTP2_HEADER_SCHEME, HTTP2_HEADER_CONTENT_LENGTH: $64ffcb69b21b810e$var$HTTP2_HEADER_CONTENT_LENGTH, HTTP2_HEADER_EXPECT: $64ffcb69b21b810e$var$HTTP2_HEADER_EXPECT, HTTP2_HEADER_STATUS: $64ffcb69b21b810e$var$HTTP2_HEADER_STATUS } } = $64ffcb69b21b810e$var$http2;
// Experimental
let $64ffcb69b21b810e$var$h2ExperimentalWarned = false;
const $64ffcb69b21b810e$var$FastBuffer = Buffer[Symbol.species];
const $64ffcb69b21b810e$var$kClosedResolve = Symbol('kClosedResolve');
const $64ffcb69b21b810e$var$channels = {};

try {
    const diagnosticsChannel = $64ffcb69b21b810e$import$448217ca25882f04;
    $64ffcb69b21b810e$var$channels.sendHeaders = diagnosticsChannel.channel('undici:client:sendHeaders');
    $64ffcb69b21b810e$var$channels.beforeConnect = diagnosticsChannel.channel('undici:client:beforeConnect');
    $64ffcb69b21b810e$var$channels.connectError = diagnosticsChannel.channel('undici:client:connectError');
    $64ffcb69b21b810e$var$channels.connected = diagnosticsChannel.channel('undici:client:connected');
} catch  {
    $64ffcb69b21b810e$var$channels.sendHeaders = {
        hasSubscribers: false
    };
    $64ffcb69b21b810e$var$channels.beforeConnect = {
        hasSubscribers: false
    };
    $64ffcb69b21b810e$var$channels.connectError = {
        hasSubscribers: false
    };
    $64ffcb69b21b810e$var$channels.connected = {
        hasSubscribers: false
    };
}
/**
 * @type {import('../types/client').default}
 */ class $64ffcb69b21b810e$var$Client extends $cb20da84f2b18099$exports {
    /**
   *
   * @param {string|URL} url
   * @param {import('../types/client').Client.Options} options
   */ constructor(url, { interceptors: interceptors, maxHeaderSize: maxHeaderSize, headersTimeout: headersTimeout, socketTimeout: socketTimeout, requestTimeout: requestTimeout, connectTimeout: connectTimeout, bodyTimeout: bodyTimeout, idleTimeout: idleTimeout, keepAlive: keepAlive, keepAliveTimeout: keepAliveTimeout, maxKeepAliveTimeout: maxKeepAliveTimeout, keepAliveMaxTimeout: keepAliveMaxTimeout, keepAliveTimeoutThreshold: keepAliveTimeoutThreshold, socketPath: socketPath, pipelining: pipelining, tls: tls, strictContentLength: strictContentLength, maxCachedSessions: maxCachedSessions, maxRedirections: maxRedirections, connect: connect, maxRequestsPerClient: maxRequestsPerClient, localAddress: localAddress, maxResponseSize: maxResponseSize, autoSelectFamily: autoSelectFamily, autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout, allowH2: // h2
    allowH2, maxConcurrentStreams: maxConcurrentStreams } = {}){
        super();
        if (keepAlive !== undefined) throw new $64ffcb69b21b810e$require$InvalidArgumentError('unsupported keepAlive, use pipelining=0 instead');
        if (socketTimeout !== undefined) throw new $64ffcb69b21b810e$require$InvalidArgumentError('unsupported socketTimeout, use headersTimeout & bodyTimeout instead');
        if (requestTimeout !== undefined) throw new $64ffcb69b21b810e$require$InvalidArgumentError('unsupported requestTimeout, use headersTimeout & bodyTimeout instead');
        if (idleTimeout !== undefined) throw new $64ffcb69b21b810e$require$InvalidArgumentError('unsupported idleTimeout, use keepAliveTimeout instead');
        if (maxKeepAliveTimeout !== undefined) throw new $64ffcb69b21b810e$require$InvalidArgumentError('unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead');
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid maxHeaderSize');
        if (socketPath != null && typeof socketPath !== 'string') throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid socketPath');
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid connectTimeout');
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid keepAliveTimeout');
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid keepAliveMaxTimeout');
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('invalid keepAliveTimeoutThreshold');
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('headersTimeout must be a positive integer or zero');
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('bodyTimeout must be a positive integer or zero');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $64ffcb69b21b810e$require$InvalidArgumentError('connect must be a function or an object');
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('maxRedirections must be a positive number');
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('maxRequestsPerClient must be a positive number');
        if (localAddress != null && (typeof localAddress !== 'string' || $3esK3$net.isIP(localAddress) === 0)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('localAddress must be valid string IP address');
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('maxResponseSize must be a positive number');
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('autoSelectFamilyAttemptTimeout must be a positive number');
        // h2
        if (allowH2 != null && typeof allowH2 !== 'boolean') throw new $64ffcb69b21b810e$require$InvalidArgumentError('allowH2 must be a valid boolean value');
        if (maxConcurrentStreams != null && (typeof maxConcurrentStreams !== 'number' || maxConcurrentStreams < 1)) throw new $64ffcb69b21b810e$require$InvalidArgumentError('maxConcurrentStreams must be a possitive integer, greater than 0');
        if (typeof connect !== 'function') connect = $63620cfa4ec2e930$exports({
            ...tls,
            maxCachedSessions: maxCachedSessions,
            allowH2: allowH2,
            socketPath: socketPath,
            timeout: connectTimeout,
            ...$792c84e8fb672c12$exports.nodeHasAutoSelectFamily && autoSelectFamily ? {
                autoSelectFamily: autoSelectFamily,
                autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout
            } : undefined,
            ...connect
        });
        this[$64ffcb69b21b810e$require$kInterceptors] = interceptors && interceptors.Client && Array.isArray(interceptors.Client) ? interceptors.Client : [
            $b4f999f2cb0e9379$exports({
                maxRedirections: maxRedirections
            })
        ];
        this[$64ffcb69b21b810e$require$kUrl] = $792c84e8fb672c12$exports.parseOrigin(url);
        this[$64ffcb69b21b810e$require$kConnector] = connect;
        this[$64ffcb69b21b810e$require$kSocket] = null;
        this[$64ffcb69b21b810e$require$kPipelining] = pipelining != null ? pipelining : 1;
        this[$64ffcb69b21b810e$require$kMaxHeadersSize] = maxHeaderSize || $3esK3$http.maxHeaderSize;
        this[$64ffcb69b21b810e$require$kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[$64ffcb69b21b810e$require$kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 600e3 : keepAliveMaxTimeout;
        this[$64ffcb69b21b810e$require$kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[$64ffcb69b21b810e$require$kKeepAliveTimeoutValue] = this[$64ffcb69b21b810e$require$kKeepAliveDefaultTimeout];
        this[$64ffcb69b21b810e$require$kServerName] = null;
        this[$64ffcb69b21b810e$require$kLocalAddress] = localAddress != null ? localAddress : null;
        this[$64ffcb69b21b810e$require$kResuming] = 0 // 0, idle, 1, scheduled, 2 resuming
        ;
        this[$64ffcb69b21b810e$require$kNeedDrain] = 0 // 0, idle, 1, scheduled, 2 resuming
        ;
        this[$64ffcb69b21b810e$require$kHostHeader] = `host: ${this[$64ffcb69b21b810e$require$kUrl].hostname}${this[$64ffcb69b21b810e$require$kUrl].port ? `:${this[$64ffcb69b21b810e$require$kUrl].port}` : ''}\r\n`;
        this[$64ffcb69b21b810e$require$kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 300e3;
        this[$64ffcb69b21b810e$require$kHeadersTimeout] = headersTimeout != null ? headersTimeout : 300e3;
        this[$64ffcb69b21b810e$require$kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[$64ffcb69b21b810e$require$kMaxRedirections] = maxRedirections;
        this[$64ffcb69b21b810e$require$kMaxRequests] = maxRequestsPerClient;
        this[$64ffcb69b21b810e$var$kClosedResolve] = null;
        this[$64ffcb69b21b810e$require$kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[$64ffcb69b21b810e$require$kHTTPConnVersion] = 'h1';
        // HTTP/2
        this[$64ffcb69b21b810e$require$kHTTP2Session] = null;
        this[$64ffcb69b21b810e$require$kHTTP2SessionState] = !allowH2 ? null : {
            // streams: null, // Fixed queue of streams - For future support of `push`
            openStreams: 0,
            maxConcurrentStreams: maxConcurrentStreams != null ? maxConcurrentStreams : 100 // Max peerConcurrentStreams for a Node h2 server
        };
        this[$64ffcb69b21b810e$require$kHost] = `${this[$64ffcb69b21b810e$require$kUrl].hostname}${this[$64ffcb69b21b810e$require$kUrl].port ? `:${this[$64ffcb69b21b810e$require$kUrl].port}` : ''}`;
        // kQueue is built up of 3 sections separated by
        // the kRunningIdx and kPendingIdx indices.
        // |   complete   |   running   |   pending   |
        //                ^ kRunningIdx ^ kPendingIdx ^ kQueue.length
        // kRunningIdx points to the first running element.
        // kPendingIdx points to the first pending element.
        // This implements a fast queue with an amortized
        // time of O(1).
        this[$64ffcb69b21b810e$require$kQueue] = [];
        this[$64ffcb69b21b810e$require$kRunningIdx] = 0;
        this[$64ffcb69b21b810e$require$kPendingIdx] = 0;
    }
    get pipelining() {
        return this[$64ffcb69b21b810e$require$kPipelining];
    }
    set pipelining(value) {
        this[$64ffcb69b21b810e$require$kPipelining] = value;
        $64ffcb69b21b810e$var$resume(this, true);
    }
    get [$64ffcb69b21b810e$require$kPending]() {
        return this[$64ffcb69b21b810e$require$kQueue].length - this[$64ffcb69b21b810e$require$kPendingIdx];
    }
    get [$64ffcb69b21b810e$require$kRunning]() {
        return this[$64ffcb69b21b810e$require$kPendingIdx] - this[$64ffcb69b21b810e$require$kRunningIdx];
    }
    get [$64ffcb69b21b810e$require$kSize]() {
        return this[$64ffcb69b21b810e$require$kQueue].length - this[$64ffcb69b21b810e$require$kRunningIdx];
    }
    get [$64ffcb69b21b810e$require$kConnected]() {
        return !!this[$64ffcb69b21b810e$require$kSocket] && !this[$64ffcb69b21b810e$require$kConnecting] && !this[$64ffcb69b21b810e$require$kSocket].destroyed;
    }
    get [$64ffcb69b21b810e$require$kBusy]() {
        const socket = this[$64ffcb69b21b810e$require$kSocket];
        return socket && (socket[$64ffcb69b21b810e$require$kReset] || socket[$64ffcb69b21b810e$require$kWriting] || socket[$64ffcb69b21b810e$require$kBlocking]) || this[$64ffcb69b21b810e$require$kSize] >= (this[$64ffcb69b21b810e$require$kPipelining] || 1) || this[$64ffcb69b21b810e$require$kPending] > 0;
    }
    /* istanbul ignore: only used for test */ [$64ffcb69b21b810e$require$kConnect](cb) {
        $64ffcb69b21b810e$var$connect(this);
        this.once('connect', cb);
    }
    [$64ffcb69b21b810e$require$kDispatch](opts, handler) {
        const origin = opts.origin || this[$64ffcb69b21b810e$require$kUrl].origin;
        const request = this[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h2' ? $a3d6e6d914b506e6$exports[$64ffcb69b21b810e$require$kHTTP2BuildRequest](origin, opts, handler) : $a3d6e6d914b506e6$exports[$64ffcb69b21b810e$require$kHTTP1BuildRequest](origin, opts, handler);
        this[$64ffcb69b21b810e$require$kQueue].push(request);
        if (this[$64ffcb69b21b810e$require$kResuming]) ;
        else if ($792c84e8fb672c12$exports.bodyLength(request.body) == null && $792c84e8fb672c12$exports.isIterable(request.body)) {
            // Wait a tick in case stream/iterator is ended in the same tick.
            this[$64ffcb69b21b810e$require$kResuming] = 1;
            process.nextTick($64ffcb69b21b810e$var$resume, this);
        } else $64ffcb69b21b810e$var$resume(this, true);
        if (this[$64ffcb69b21b810e$require$kResuming] && this[$64ffcb69b21b810e$require$kNeedDrain] !== 2 && this[$64ffcb69b21b810e$require$kBusy]) this[$64ffcb69b21b810e$require$kNeedDrain] = 2;
        return this[$64ffcb69b21b810e$require$kNeedDrain] < 2;
    }
    async [$64ffcb69b21b810e$require$kClose]() {
        // TODO: for H2 we need to gracefully flush the remaining enqueued
        // request and close each stream.
        return new Promise((resolve)=>{
            if (!this[$64ffcb69b21b810e$require$kSize]) resolve(null);
            else this[$64ffcb69b21b810e$var$kClosedResolve] = resolve;
        });
    }
    async [$64ffcb69b21b810e$require$kDestroy](err) {
        return new Promise((resolve)=>{
            const requests = this[$64ffcb69b21b810e$require$kQueue].splice(this[$64ffcb69b21b810e$require$kPendingIdx]);
            for(let i = 0; i < requests.length; i++){
                const request = requests[i];
                $64ffcb69b21b810e$var$errorRequest(this, request, err);
            }
            const callback = ()=>{
                if (this[$64ffcb69b21b810e$var$kClosedResolve]) {
                    // TODO (fix): Should we error here with ClientDestroyedError?
                    this[$64ffcb69b21b810e$var$kClosedResolve]();
                    this[$64ffcb69b21b810e$var$kClosedResolve] = null;
                }
                resolve();
            };
            if (this[$64ffcb69b21b810e$require$kHTTP2Session] != null) {
                $792c84e8fb672c12$exports.destroy(this[$64ffcb69b21b810e$require$kHTTP2Session], err);
                this[$64ffcb69b21b810e$require$kHTTP2Session] = null;
                this[$64ffcb69b21b810e$require$kHTTP2SessionState] = null;
            }
            if (!this[$64ffcb69b21b810e$require$kSocket]) queueMicrotask(callback);
            else $792c84e8fb672c12$exports.destroy(this[$64ffcb69b21b810e$require$kSocket].on('close', callback), err);
            $64ffcb69b21b810e$var$resume(this);
        });
    }
}
function $64ffcb69b21b810e$var$onHttp2SessionError(err) {
    $3esK3$assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    this[$64ffcb69b21b810e$require$kSocket][$64ffcb69b21b810e$require$kError] = err;
    $64ffcb69b21b810e$var$onError(this[$64ffcb69b21b810e$require$kClient], err);
}
function $64ffcb69b21b810e$var$onHttp2FrameError(type, code, id) {
    const err = new $64ffcb69b21b810e$require$InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`);
    if (id === 0) {
        this[$64ffcb69b21b810e$require$kSocket][$64ffcb69b21b810e$require$kError] = err;
        $64ffcb69b21b810e$var$onError(this[$64ffcb69b21b810e$require$kClient], err);
    }
}
function $64ffcb69b21b810e$var$onHttp2SessionEnd() {
    $792c84e8fb672c12$exports.destroy(this, new $64ffcb69b21b810e$require$SocketError('other side closed'));
    $792c84e8fb672c12$exports.destroy(this[$64ffcb69b21b810e$require$kSocket], new $64ffcb69b21b810e$require$SocketError('other side closed'));
}
function $64ffcb69b21b810e$var$onHTTP2GoAway(code) {
    const client = this[$64ffcb69b21b810e$require$kClient];
    const err = new $64ffcb69b21b810e$require$InformationalError(`HTTP/2: "GOAWAY" frame received with code ${code}`);
    client[$64ffcb69b21b810e$require$kSocket] = null;
    client[$64ffcb69b21b810e$require$kHTTP2Session] = null;
    if (client.destroyed) {
        $3esK3$assert(this[$64ffcb69b21b810e$require$kPending] === 0);
        // Fail entire queue.
        const requests = client[$64ffcb69b21b810e$require$kQueue].splice(client[$64ffcb69b21b810e$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $64ffcb69b21b810e$var$errorRequest(this, request, err);
        }
    } else if (client[$64ffcb69b21b810e$require$kRunning] > 0) {
        // Fail head of pipeline.
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]++] = null;
        $64ffcb69b21b810e$var$errorRequest(client, request, err);
    }
    client[$64ffcb69b21b810e$require$kPendingIdx] = client[$64ffcb69b21b810e$require$kRunningIdx];
    $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 0);
    client.emit('disconnect', client[$64ffcb69b21b810e$require$kUrl], [
        client
    ], err);
    $64ffcb69b21b810e$var$resume(client);
}
var $6debc438e8741b15$exports = {};
$6debc438e8741b15$exports = new URL("constants.7719370a.js", "file:" + __filename).toString();


var $b4f999f2cb0e9379$exports = {};
$b4f999f2cb0e9379$exports = new URL("redirectInterceptor.0ad78b0c.js", "file:" + __filename).toString();


const $64ffcb69b21b810e$var$EMPTY_BUF = Buffer.alloc(0);



async function $64ffcb69b21b810e$var$lazyllhttp() {
    const llhttpWasmData = process.env.JEST_WORKER_ID ? (parcelRequire("DTPVI")) : undefined;
    let mod;
    try {
        mod = await WebAssembly.compile(Buffer.from((parcelRequire("lWUyD")), 'base64'));
    } catch (e) {
        /* istanbul ignore next */ // We could check if the error was caused by the simd option not
        // being enabled, but the occurring of this other error
        // * https://github.com/emscripten-core/emscripten/issues/11495
        // got me to remove that check to avoid breaking Node 12.
        mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || (parcelRequire("DTPVI")), 'base64'));
    }
    return await WebAssembly.instantiate(mod, {
        env: {
            /* eslint-disable camelcase */ wasm_on_url: (p, at, len)=>{
                /* istanbul ignore next */ return 0;
            },
            wasm_on_status: (p, at, len)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                const start = at - $64ffcb69b21b810e$var$currentBufferPtr + $64ffcb69b21b810e$var$currentBufferRef.byteOffset;
                return $64ffcb69b21b810e$var$currentParser.onStatus(new $64ffcb69b21b810e$var$FastBuffer($64ffcb69b21b810e$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_begin: (p)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                return $64ffcb69b21b810e$var$currentParser.onMessageBegin() || 0;
            },
            wasm_on_header_field: (p, at, len)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                const start = at - $64ffcb69b21b810e$var$currentBufferPtr + $64ffcb69b21b810e$var$currentBufferRef.byteOffset;
                return $64ffcb69b21b810e$var$currentParser.onHeaderField(new $64ffcb69b21b810e$var$FastBuffer($64ffcb69b21b810e$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_header_value: (p, at, len)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                const start = at - $64ffcb69b21b810e$var$currentBufferPtr + $64ffcb69b21b810e$var$currentBufferRef.byteOffset;
                return $64ffcb69b21b810e$var$currentParser.onHeaderValue(new $64ffcb69b21b810e$var$FastBuffer($64ffcb69b21b810e$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_headers_complete: (p, statusCode, upgrade, shouldKeepAlive)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                return $64ffcb69b21b810e$var$currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
            },
            wasm_on_body: (p, at, len)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                const start = at - $64ffcb69b21b810e$var$currentBufferPtr + $64ffcb69b21b810e$var$currentBufferRef.byteOffset;
                return $64ffcb69b21b810e$var$currentParser.onBody(new $64ffcb69b21b810e$var$FastBuffer($64ffcb69b21b810e$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_complete: (p)=>{
                $3esK3$assert.strictEqual($64ffcb69b21b810e$var$currentParser.ptr, p);
                return $64ffcb69b21b810e$var$currentParser.onMessageComplete() || 0;
            }
        }
    });
}
let $64ffcb69b21b810e$var$llhttpInstance = null;
let $64ffcb69b21b810e$var$llhttpPromise = $64ffcb69b21b810e$var$lazyllhttp();
$64ffcb69b21b810e$var$llhttpPromise.catch();
let $64ffcb69b21b810e$var$currentParser = null;
let $64ffcb69b21b810e$var$currentBufferRef = null;
let $64ffcb69b21b810e$var$currentBufferSize = 0;
let $64ffcb69b21b810e$var$currentBufferPtr = null;
const $64ffcb69b21b810e$var$TIMEOUT_HEADERS = 1;
const $64ffcb69b21b810e$var$TIMEOUT_BODY = 2;
const $64ffcb69b21b810e$var$TIMEOUT_IDLE = 3;
class $64ffcb69b21b810e$var$Parser {
    constructor(client, socket, { exports: exports }){
        $3esK3$assert(Number.isFinite(client[$64ffcb69b21b810e$require$kMaxHeadersSize]) && client[$64ffcb69b21b810e$require$kMaxHeadersSize] > 0);
        this.llhttp = exports;
        this.ptr = this.llhttp.llhttp_alloc($6debc438e8741b15$exports.TYPE.RESPONSE);
        this.client = client;
        this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = null;
        this.statusText = '';
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client[$64ffcb69b21b810e$require$kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = '';
        this.contentLength = '';
        this.connection = '';
        this.maxResponseSize = client[$64ffcb69b21b810e$require$kMaxResponseSize];
    }
    setTimeout(value, type) {
        this.timeoutType = type;
        if (value !== this.timeoutValue) {
            $ed3b63f18afefa8e$exports.clearTimeout(this.timeout);
            if (value) {
                this.timeout = $ed3b63f18afefa8e$exports.setTimeout($64ffcb69b21b810e$var$onParserTimeout, value, this);
                // istanbul ignore else: only for jest
                if (this.timeout.unref) this.timeout.unref();
            } else this.timeout = null;
            this.timeoutValue = value;
        } else if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
    }
    resume() {
        if (this.socket.destroyed || !this.paused) return;
        $3esK3$assert(this.ptr != null);
        $3esK3$assert($64ffcb69b21b810e$var$currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        $3esK3$assert(this.timeoutType === $64ffcb69b21b810e$var$TIMEOUT_BODY);
        if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        this.paused = false;
        this.execute(this.socket.read() || $64ffcb69b21b810e$var$EMPTY_BUF) // Flush parser.
        ;
        this.readMore();
    }
    readMore() {
        while(!this.paused && this.ptr){
            const chunk = this.socket.read();
            if (chunk === null) break;
            this.execute(chunk);
        }
    }
    execute(data) {
        $3esK3$assert(this.ptr != null);
        $3esK3$assert($64ffcb69b21b810e$var$currentParser == null);
        $3esK3$assert(!this.paused);
        const { socket: socket, llhttp: llhttp } = this;
        if (data.length > $64ffcb69b21b810e$var$currentBufferSize) {
            if ($64ffcb69b21b810e$var$currentBufferPtr) llhttp.free($64ffcb69b21b810e$var$currentBufferPtr);
            $64ffcb69b21b810e$var$currentBufferSize = Math.ceil(data.length / 4096) * 4096;
            $64ffcb69b21b810e$var$currentBufferPtr = llhttp.malloc($64ffcb69b21b810e$var$currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, $64ffcb69b21b810e$var$currentBufferPtr, $64ffcb69b21b810e$var$currentBufferSize).set(data);
        // Call `execute` on the wasm parser.
        // We pass the `llhttp_parser` pointer address, the pointer address of buffer view data,
        // and finally the length of bytes to parse.
        // The return value is an error code or `constants.ERROR.OK`.
        try {
            let ret;
            try {
                $64ffcb69b21b810e$var$currentBufferRef = data;
                $64ffcb69b21b810e$var$currentParser = this;
                ret = llhttp.llhttp_execute(this.ptr, $64ffcb69b21b810e$var$currentBufferPtr, data.length);
            /* eslint-disable-next-line no-useless-catch */ } catch (err) {
                /* istanbul ignore next: difficult to make a test case for */ throw err;
            } finally{
                $64ffcb69b21b810e$var$currentParser = null;
                $64ffcb69b21b810e$var$currentBufferRef = null;
            }
            const offset = llhttp.llhttp_get_error_pos(this.ptr) - $64ffcb69b21b810e$var$currentBufferPtr;
            if (ret === $6debc438e8741b15$exports.ERROR.PAUSED_UPGRADE) this.onUpgrade(data.slice(offset));
            else if (ret === $6debc438e8741b15$exports.ERROR.PAUSED) {
                this.paused = true;
                socket.unshift(data.slice(offset));
            } else if (ret !== $6debc438e8741b15$exports.ERROR.OK) {
                const ptr = llhttp.llhttp_get_error_reason(this.ptr);
                let message = '';
                /* istanbul ignore else: difficult to make a test case for */ if (ptr) {
                    const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
                    message = 'Response does not match the HTTP/1.1 protocol (' + Buffer.from(llhttp.memory.buffer, ptr, len).toString() + ')';
                }
                throw new $64ffcb69b21b810e$require$HTTPParserError(message, $6debc438e8741b15$exports.ERROR[ret], data.slice(offset));
            }
        } catch (err) {
            $792c84e8fb672c12$exports.destroy(socket, err);
        }
    }
    destroy() {
        $3esK3$assert(this.ptr != null);
        $3esK3$assert($64ffcb69b21b810e$var$currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        $ed3b63f18afefa8e$exports.clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
    }
    onStatus(buf) {
        this.statusText = buf.toString();
    }
    onMessageBegin() {
        const { socket: socket, client: client } = this;
        /* istanbul ignore next: difficult to make a test case for */ if (socket.destroyed) return -1;
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        if (!request) return -1;
    }
    onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) this.headers.push(buf);
        else this.headers[len - 1] = Buffer.concat([
            this.headers[len - 1],
            buf
        ]);
        this.trackHeader(buf.length);
    }
    onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
            this.headers.push(buf);
            len += 1;
        } else this.headers[len - 1] = Buffer.concat([
            this.headers[len - 1],
            buf
        ]);
        const key = this.headers[len - 2];
        if (key.length === 10 && key.toString().toLowerCase() === 'keep-alive') this.keepAlive += buf.toString();
        else if (key.length === 10 && key.toString().toLowerCase() === 'connection') this.connection += buf.toString();
        else if (key.length === 14 && key.toString().toLowerCase() === 'content-length') this.contentLength += buf.toString();
        this.trackHeader(buf.length);
    }
    trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) $792c84e8fb672c12$exports.destroy(this.socket, new $64ffcb69b21b810e$require$HeadersOverflowError());
    }
    onUpgrade(head) {
        const { upgrade: upgrade, client: client, socket: socket, headers: headers, statusCode: statusCode } = this;
        $3esK3$assert(upgrade);
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        $3esK3$assert(request);
        $3esK3$assert(!socket.destroyed);
        $3esK3$assert(socket === client[$64ffcb69b21b810e$require$kSocket]);
        $3esK3$assert(!this.paused);
        $3esK3$assert(request.upgrade || request.method === 'CONNECT');
        this.statusCode = null;
        this.statusText = '';
        this.shouldKeepAlive = null;
        $3esK3$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[$64ffcb69b21b810e$require$kParser].destroy();
        socket[$64ffcb69b21b810e$require$kParser] = null;
        socket[$64ffcb69b21b810e$require$kClient] = null;
        socket[$64ffcb69b21b810e$require$kError] = null;
        socket.removeListener('error', $64ffcb69b21b810e$var$onSocketError).removeListener('readable', $64ffcb69b21b810e$var$onSocketReadable).removeListener('end', $64ffcb69b21b810e$var$onSocketEnd).removeListener('close', $64ffcb69b21b810e$var$onSocketClose);
        client[$64ffcb69b21b810e$require$kSocket] = null;
        client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]++] = null;
        client.emit('disconnect', client[$64ffcb69b21b810e$require$kUrl], [
            client
        ], new $64ffcb69b21b810e$require$InformationalError('upgrade'));
        try {
            request.onUpgrade(statusCode, headers, socket);
        } catch (err) {
            $792c84e8fb672c12$exports.destroy(socket, err);
        }
        $64ffcb69b21b810e$var$resume(client);
    }
    onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client: client, socket: socket, headers: headers, statusText: statusText } = this;
        /* istanbul ignore next: difficult to make a test case for */ if (socket.destroyed) return -1;
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        /* istanbul ignore next: difficult to make a test case for */ if (!request) return -1;
        $3esK3$assert(!this.upgrade);
        $3esK3$assert(this.statusCode < 200);
        if (statusCode === 100) {
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$SocketError('bad response', $792c84e8fb672c12$exports.getSocketInfo(socket)));
            return -1;
        }
        /* this can only happen if server is misbehaving */ if (upgrade && !request.upgrade) {
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$SocketError('bad upgrade', $792c84e8fb672c12$exports.getSocketInfo(socket)));
            return -1;
        }
        $3esK3$assert.strictEqual(this.timeoutType, $64ffcb69b21b810e$var$TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive || // Override llhttp value which does not allow keepAlive for HEAD.
        request.method === 'HEAD' && !socket[$64ffcb69b21b810e$require$kReset] && this.connection.toLowerCase() === 'keep-alive';
        if (this.statusCode >= 200) {
            const bodyTimeout = request.bodyTimeout != null ? request.bodyTimeout : client[$64ffcb69b21b810e$require$kBodyTimeout];
            this.setTimeout(bodyTimeout, $64ffcb69b21b810e$var$TIMEOUT_BODY);
        } else if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        if (request.method === 'CONNECT') {
            $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        if (upgrade) {
            $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        $3esK3$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (this.shouldKeepAlive && client[$64ffcb69b21b810e$require$kPipelining]) {
            const keepAliveTimeout = this.keepAlive ? $792c84e8fb672c12$exports.parseKeepAliveTimeout(this.keepAlive) : null;
            if (keepAliveTimeout != null) {
                const timeout = Math.min(keepAliveTimeout - client[$64ffcb69b21b810e$require$kKeepAliveTimeoutThreshold], client[$64ffcb69b21b810e$require$kKeepAliveMaxTimeout]);
                if (timeout <= 0) socket[$64ffcb69b21b810e$require$kReset] = true;
                else client[$64ffcb69b21b810e$require$kKeepAliveTimeoutValue] = timeout;
            } else client[$64ffcb69b21b810e$require$kKeepAliveTimeoutValue] = client[$64ffcb69b21b810e$require$kKeepAliveDefaultTimeout];
        } else // Stop more requests from being dispatched.
        socket[$64ffcb69b21b810e$require$kReset] = true;
        const pause = request.onHeaders(statusCode, headers, this.resume, statusText) === false;
        if (request.aborted) return -1;
        if (request.method === 'HEAD') return 1;
        if (statusCode < 200) return 1;
        if (socket[$64ffcb69b21b810e$require$kBlocking]) {
            socket[$64ffcb69b21b810e$require$kBlocking] = false;
            $64ffcb69b21b810e$var$resume(client);
        }
        return pause ? $6debc438e8741b15$exports.ERROR.PAUSED : 0;
    }
    onBody(buf) {
        const { client: client, socket: socket, statusCode: statusCode, maxResponseSize: maxResponseSize } = this;
        if (socket.destroyed) return -1;
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        $3esK3$assert(request);
        $3esK3$assert.strictEqual(this.timeoutType, $64ffcb69b21b810e$var$TIMEOUT_BODY);
        if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        $3esK3$assert(statusCode >= 200);
        if (maxResponseSize > -1 && this.bytesRead + buf.length > maxResponseSize) {
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$ResponseExceededMaxSizeError());
            return -1;
        }
        this.bytesRead += buf.length;
        if (request.onData(buf) === false) return $6debc438e8741b15$exports.ERROR.PAUSED;
    }
    onMessageComplete() {
        const { client: client, socket: socket, statusCode: statusCode, upgrade: upgrade, headers: headers, contentLength: contentLength, bytesRead: bytesRead, shouldKeepAlive: shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) return -1;
        if (upgrade) return;
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        $3esK3$assert(request);
        $3esK3$assert(statusCode >= 100);
        this.statusCode = null;
        this.statusText = '';
        this.bytesRead = 0;
        this.contentLength = '';
        this.keepAlive = '';
        this.connection = '';
        $3esK3$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) return;
        /* istanbul ignore next: should be handled by llhttp? */ if (request.method !== 'HEAD' && contentLength && bytesRead !== parseInt(contentLength, 10)) {
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$ResponseContentLengthMismatchError());
            return -1;
        }
        request.onComplete(headers);
        client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]++] = null;
        if (socket[$64ffcb69b21b810e$require$kWriting]) {
            $3esK3$assert.strictEqual(client[$64ffcb69b21b810e$require$kRunning], 0);
            // Response completed before request.
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('reset'));
            return $6debc438e8741b15$exports.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('reset'));
            return $6debc438e8741b15$exports.ERROR.PAUSED;
        } else if (socket[$64ffcb69b21b810e$require$kReset] && client[$64ffcb69b21b810e$require$kRunning] === 0) {
            // Destroy socket once all requests have completed.
            // The request at the tail of the pipeline is the one
            // that requested reset and no further requests should
            // have been queued since then.
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('reset'));
            return $6debc438e8741b15$exports.ERROR.PAUSED;
        } else if (client[$64ffcb69b21b810e$require$kPipelining] === 1) // We must wait a full event loop cycle to reuse this socket to make sure
        // that non-spec compliant servers are not closing the connection even if they
        // said they won't.
        setImmediate($64ffcb69b21b810e$var$resume, client);
        else $64ffcb69b21b810e$var$resume(client);
    }
}
function $64ffcb69b21b810e$var$onParserTimeout(parser) {
    const { socket: socket, timeoutType: timeoutType, client: client } = parser;
    /* istanbul ignore else */ if (timeoutType === $64ffcb69b21b810e$var$TIMEOUT_HEADERS) {
        if (!socket[$64ffcb69b21b810e$require$kWriting] || socket.writableNeedDrain || client[$64ffcb69b21b810e$require$kRunning] > 1) {
            $3esK3$assert(!parser.paused, 'cannot be paused while waiting for headers');
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$HeadersTimeoutError());
        }
    } else if (timeoutType === $64ffcb69b21b810e$var$TIMEOUT_BODY) {
        if (!parser.paused) $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$BodyTimeoutError());
    } else if (timeoutType === $64ffcb69b21b810e$var$TIMEOUT_IDLE) {
        $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 0 && client[$64ffcb69b21b810e$require$kKeepAliveTimeoutValue]);
        $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('socket idle timeout'));
    }
}
function $64ffcb69b21b810e$var$onSocketReadable() {
    const { [$64ffcb69b21b810e$require$kParser]: parser } = this;
    if (parser) parser.readMore();
}
function $64ffcb69b21b810e$var$onSocketError(err) {
    const { [$64ffcb69b21b810e$require$kClient]: client, [$64ffcb69b21b810e$require$kParser]: parser } = this;
    $3esK3$assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] !== 'h2') // On Mac OS, we get an ECONNRESET even if there is a full body to be forwarded
    // to the user.
    {
        if (err.code === 'ECONNRESET' && parser.statusCode && !parser.shouldKeepAlive) {
            // We treat all incoming data so for as a valid response.
            parser.onMessageComplete();
            return;
        }
    }
    this[$64ffcb69b21b810e$require$kError] = err;
    $64ffcb69b21b810e$var$onError(this[$64ffcb69b21b810e$require$kClient], err);
}
function $64ffcb69b21b810e$var$onError(client, err) {
    if (client[$64ffcb69b21b810e$require$kRunning] === 0 && err.code !== 'UND_ERR_INFO' && err.code !== 'UND_ERR_SOCKET') {
        // Error is not caused by running request and not a recoverable
        // socket error.
        $3esK3$assert(client[$64ffcb69b21b810e$require$kPendingIdx] === client[$64ffcb69b21b810e$require$kRunningIdx]);
        const requests = client[$64ffcb69b21b810e$require$kQueue].splice(client[$64ffcb69b21b810e$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $64ffcb69b21b810e$var$errorRequest(client, request, err);
        }
        $3esK3$assert(client[$64ffcb69b21b810e$require$kSize] === 0);
    }
}
function $64ffcb69b21b810e$var$onSocketEnd() {
    const { [$64ffcb69b21b810e$require$kParser]: parser, [$64ffcb69b21b810e$require$kClient]: client } = this;
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] !== 'h2') {
        if (parser.statusCode && !parser.shouldKeepAlive) {
            // We treat all incoming data so far as a valid response.
            parser.onMessageComplete();
            return;
        }
    }
    $792c84e8fb672c12$exports.destroy(this, new $64ffcb69b21b810e$require$SocketError('other side closed', $792c84e8fb672c12$exports.getSocketInfo(this)));
}
function $64ffcb69b21b810e$var$onSocketClose() {
    const { [$64ffcb69b21b810e$require$kClient]: client, [$64ffcb69b21b810e$require$kParser]: parser } = this;
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h1' && parser) {
        if (!this[$64ffcb69b21b810e$require$kError] && parser.statusCode && !parser.shouldKeepAlive) // We treat all incoming data so far as a valid response.
        parser.onMessageComplete();
        this[$64ffcb69b21b810e$require$kParser].destroy();
        this[$64ffcb69b21b810e$require$kParser] = null;
    }
    const err = this[$64ffcb69b21b810e$require$kError] || new $64ffcb69b21b810e$require$SocketError('closed', $792c84e8fb672c12$exports.getSocketInfo(this));
    client[$64ffcb69b21b810e$require$kSocket] = null;
    if (client.destroyed) {
        $3esK3$assert(client[$64ffcb69b21b810e$require$kPending] === 0);
        // Fail entire queue.
        const requests = client[$64ffcb69b21b810e$require$kQueue].splice(client[$64ffcb69b21b810e$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $64ffcb69b21b810e$var$errorRequest(client, request, err);
        }
    } else if (client[$64ffcb69b21b810e$require$kRunning] > 0 && err.code !== 'UND_ERR_INFO') {
        // Fail head of pipeline.
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
        client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]++] = null;
        $64ffcb69b21b810e$var$errorRequest(client, request, err);
    }
    client[$64ffcb69b21b810e$require$kPendingIdx] = client[$64ffcb69b21b810e$require$kRunningIdx];
    $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 0);
    client.emit('disconnect', client[$64ffcb69b21b810e$require$kUrl], [
        client
    ], err);
    $64ffcb69b21b810e$var$resume(client);
}
async function $64ffcb69b21b810e$var$connect(client) {
    $3esK3$assert(!client[$64ffcb69b21b810e$require$kConnecting]);
    $3esK3$assert(!client[$64ffcb69b21b810e$require$kSocket]);
    let { host: host, hostname: hostname, protocol: protocol, port: port } = client[$64ffcb69b21b810e$require$kUrl];
    // Resolve ipv6
    if (hostname[0] === '[') {
        const idx = hostname.indexOf(']');
        $3esK3$assert(idx !== -1);
        const ip = hostname.substring(1, idx);
        $3esK3$assert($3esK3$net.isIP(ip));
        hostname = ip;
    }
    client[$64ffcb69b21b810e$require$kConnecting] = true;
    if ($64ffcb69b21b810e$var$channels.beforeConnect.hasSubscribers) $64ffcb69b21b810e$var$channels.beforeConnect.publish({
        connectParams: {
            host: host,
            hostname: hostname,
            protocol: protocol,
            port: port,
            servername: client[$64ffcb69b21b810e$require$kServerName],
            localAddress: client[$64ffcb69b21b810e$require$kLocalAddress]
        },
        connector: client[$64ffcb69b21b810e$require$kConnector]
    });
    try {
        const socket = await new Promise((resolve, reject)=>{
            client[$64ffcb69b21b810e$require$kConnector]({
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$64ffcb69b21b810e$require$kServerName],
                localAddress: client[$64ffcb69b21b810e$require$kLocalAddress]
            }, (err, socket)=>{
                if (err) reject(err);
                else resolve(socket);
            });
        });
        if (client.destroyed) {
            $792c84e8fb672c12$exports.destroy(socket.on('error', ()=>{}), new $64ffcb69b21b810e$require$ClientDestroyedError());
            return;
        }
        client[$64ffcb69b21b810e$require$kConnecting] = false;
        $3esK3$assert(socket);
        const isH2 = socket.alpnProtocol === 'h2';
        if (isH2) {
            if (!$64ffcb69b21b810e$var$h2ExperimentalWarned) {
                $64ffcb69b21b810e$var$h2ExperimentalWarned = true;
                process.emitWarning('H2 support is experimental, expect them to change at any time.', {
                    code: 'UNDICI-H2'
                });
            }
            const session = $64ffcb69b21b810e$var$http2.connect(client[$64ffcb69b21b810e$require$kUrl], {
                createConnection: ()=>socket,
                peerMaxConcurrentStreams: client[$64ffcb69b21b810e$require$kHTTP2SessionState].maxConcurrentStreams
            });
            client[$64ffcb69b21b810e$require$kHTTPConnVersion] = 'h2';
            session[$64ffcb69b21b810e$require$kClient] = client;
            session[$64ffcb69b21b810e$require$kSocket] = socket;
            session.on('error', $64ffcb69b21b810e$var$onHttp2SessionError);
            session.on('frameError', $64ffcb69b21b810e$var$onHttp2FrameError);
            session.on('end', $64ffcb69b21b810e$var$onHttp2SessionEnd);
            session.on('goaway', $64ffcb69b21b810e$var$onHTTP2GoAway);
            session.on('close', $64ffcb69b21b810e$var$onSocketClose);
            session.unref();
            client[$64ffcb69b21b810e$require$kHTTP2Session] = session;
            socket[$64ffcb69b21b810e$require$kHTTP2Session] = session;
        } else {
            if (!$64ffcb69b21b810e$var$llhttpInstance) {
                $64ffcb69b21b810e$var$llhttpInstance = await $64ffcb69b21b810e$var$llhttpPromise;
                $64ffcb69b21b810e$var$llhttpPromise = null;
            }
            socket[$64ffcb69b21b810e$require$kNoRef] = false;
            socket[$64ffcb69b21b810e$require$kWriting] = false;
            socket[$64ffcb69b21b810e$require$kReset] = false;
            socket[$64ffcb69b21b810e$require$kBlocking] = false;
            socket[$64ffcb69b21b810e$require$kParser] = new $64ffcb69b21b810e$var$Parser(client, socket, $64ffcb69b21b810e$var$llhttpInstance);
        }
        socket[$64ffcb69b21b810e$require$kCounter] = 0;
        socket[$64ffcb69b21b810e$require$kMaxRequests] = client[$64ffcb69b21b810e$require$kMaxRequests];
        socket[$64ffcb69b21b810e$require$kClient] = client;
        socket[$64ffcb69b21b810e$require$kError] = null;
        socket.on('error', $64ffcb69b21b810e$var$onSocketError).on('readable', $64ffcb69b21b810e$var$onSocketReadable).on('end', $64ffcb69b21b810e$var$onSocketEnd).on('close', $64ffcb69b21b810e$var$onSocketClose);
        client[$64ffcb69b21b810e$require$kSocket] = socket;
        if ($64ffcb69b21b810e$var$channels.connected.hasSubscribers) $64ffcb69b21b810e$var$channels.connected.publish({
            connectParams: {
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$64ffcb69b21b810e$require$kServerName],
                localAddress: client[$64ffcb69b21b810e$require$kLocalAddress]
            },
            connector: client[$64ffcb69b21b810e$require$kConnector],
            socket: socket
        });
        client.emit('connect', client[$64ffcb69b21b810e$require$kUrl], [
            client
        ]);
    } catch (err) {
        if (client.destroyed) return;
        client[$64ffcb69b21b810e$require$kConnecting] = false;
        if ($64ffcb69b21b810e$var$channels.connectError.hasSubscribers) $64ffcb69b21b810e$var$channels.connectError.publish({
            connectParams: {
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$64ffcb69b21b810e$require$kServerName],
                localAddress: client[$64ffcb69b21b810e$require$kLocalAddress]
            },
            connector: client[$64ffcb69b21b810e$require$kConnector],
            error: err
        });
        if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
            $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] === 0);
            while(client[$64ffcb69b21b810e$require$kPending] > 0 && client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kPendingIdx]].servername === client[$64ffcb69b21b810e$require$kServerName]){
                const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kPendingIdx]++];
                $64ffcb69b21b810e$var$errorRequest(client, request, err);
            }
        } else $64ffcb69b21b810e$var$onError(client, err);
        client.emit('connectionError', client[$64ffcb69b21b810e$require$kUrl], [
            client
        ], err);
    }
    $64ffcb69b21b810e$var$resume(client);
}
function $64ffcb69b21b810e$var$emitDrain(client) {
    client[$64ffcb69b21b810e$require$kNeedDrain] = 0;
    client.emit('drain', client[$64ffcb69b21b810e$require$kUrl], [
        client
    ]);
}
function $64ffcb69b21b810e$var$resume(client, sync) {
    if (client[$64ffcb69b21b810e$require$kResuming] === 2) return;
    client[$64ffcb69b21b810e$require$kResuming] = 2;
    $64ffcb69b21b810e$var$_resume(client, sync);
    client[$64ffcb69b21b810e$require$kResuming] = 0;
    if (client[$64ffcb69b21b810e$require$kRunningIdx] > 256) {
        client[$64ffcb69b21b810e$require$kQueue].splice(0, client[$64ffcb69b21b810e$require$kRunningIdx]);
        client[$64ffcb69b21b810e$require$kPendingIdx] -= client[$64ffcb69b21b810e$require$kRunningIdx];
        client[$64ffcb69b21b810e$require$kRunningIdx] = 0;
    }
}
function $64ffcb69b21b810e$var$_resume(client, sync) {
    while(true){
        if (client.destroyed) {
            $3esK3$assert(client[$64ffcb69b21b810e$require$kPending] === 0);
            return;
        }
        if (client[$64ffcb69b21b810e$var$kClosedResolve] && !client[$64ffcb69b21b810e$require$kSize]) {
            client[$64ffcb69b21b810e$var$kClosedResolve]();
            client[$64ffcb69b21b810e$var$kClosedResolve] = null;
            return;
        }
        const socket = client[$64ffcb69b21b810e$require$kSocket];
        if (socket && !socket.destroyed && socket.alpnProtocol !== 'h2') {
            if (client[$64ffcb69b21b810e$require$kSize] === 0) {
                if (!socket[$64ffcb69b21b810e$require$kNoRef] && socket.unref) {
                    socket.unref();
                    socket[$64ffcb69b21b810e$require$kNoRef] = true;
                }
            } else if (socket[$64ffcb69b21b810e$require$kNoRef] && socket.ref) {
                socket.ref();
                socket[$64ffcb69b21b810e$require$kNoRef] = false;
            }
            if (client[$64ffcb69b21b810e$require$kSize] === 0) {
                if (socket[$64ffcb69b21b810e$require$kParser].timeoutType !== $64ffcb69b21b810e$var$TIMEOUT_IDLE) socket[$64ffcb69b21b810e$require$kParser].setTimeout(client[$64ffcb69b21b810e$require$kKeepAliveTimeoutValue], $64ffcb69b21b810e$var$TIMEOUT_IDLE);
            } else if (client[$64ffcb69b21b810e$require$kRunning] > 0 && socket[$64ffcb69b21b810e$require$kParser].statusCode < 200) {
                if (socket[$64ffcb69b21b810e$require$kParser].timeoutType !== $64ffcb69b21b810e$var$TIMEOUT_HEADERS) {
                    const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kRunningIdx]];
                    const headersTimeout = request.headersTimeout != null ? request.headersTimeout : client[$64ffcb69b21b810e$require$kHeadersTimeout];
                    socket[$64ffcb69b21b810e$require$kParser].setTimeout(headersTimeout, $64ffcb69b21b810e$var$TIMEOUT_HEADERS);
                }
            }
        }
        if (client[$64ffcb69b21b810e$require$kBusy]) client[$64ffcb69b21b810e$require$kNeedDrain] = 2;
        else if (client[$64ffcb69b21b810e$require$kNeedDrain] === 2) {
            if (sync) {
                client[$64ffcb69b21b810e$require$kNeedDrain] = 1;
                process.nextTick($64ffcb69b21b810e$var$emitDrain, client);
            } else $64ffcb69b21b810e$var$emitDrain(client);
            continue;
        }
        if (client[$64ffcb69b21b810e$require$kPending] === 0) return;
        if (client[$64ffcb69b21b810e$require$kRunning] >= (client[$64ffcb69b21b810e$require$kPipelining] || 1)) return;
        const request = client[$64ffcb69b21b810e$require$kQueue][client[$64ffcb69b21b810e$require$kPendingIdx]];
        if (client[$64ffcb69b21b810e$require$kUrl].protocol === 'https:' && client[$64ffcb69b21b810e$require$kServerName] !== request.servername) {
            if (client[$64ffcb69b21b810e$require$kRunning] > 0) return;
            client[$64ffcb69b21b810e$require$kServerName] = request.servername;
            if (socket && socket.servername !== request.servername) {
                $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('servername changed'));
                return;
            }
        }
        if (client[$64ffcb69b21b810e$require$kConnecting]) return;
        if (!socket && !client[$64ffcb69b21b810e$require$kHTTP2Session]) {
            $64ffcb69b21b810e$var$connect(client);
            return;
        }
        if (socket.destroyed || socket[$64ffcb69b21b810e$require$kWriting] || socket[$64ffcb69b21b810e$require$kReset] || socket[$64ffcb69b21b810e$require$kBlocking]) return;
        if (client[$64ffcb69b21b810e$require$kRunning] > 0 && !request.idempotent) // Non-idempotent request cannot be retried.
        // Ensure that no other requests are inflight and
        // could cause failure.
        return;
        if (client[$64ffcb69b21b810e$require$kRunning] > 0 && (request.upgrade || request.method === 'CONNECT')) // Don't dispatch an upgrade until all preceding requests have completed.
        // A misbehaving server might upgrade the connection before all pipelined
        // request has completed.
        return;
        if (client[$64ffcb69b21b810e$require$kRunning] > 0 && $792c84e8fb672c12$exports.bodyLength(request.body) !== 0 && ($792c84e8fb672c12$exports.isStream(request.body) || $792c84e8fb672c12$exports.isAsyncIterable(request.body))) // Request with stream or iterator body can error while other requests
        // are inflight and indirectly error those as well.
        // Ensure this doesn't happen by waiting for inflight
        // to complete before dispatching.
        // Request with stream or iterator body cannot be retried.
        // Ensure that no other requests are inflight and
        // could cause failure.
        return;
        if (!request.aborted && $64ffcb69b21b810e$var$write(client, request)) client[$64ffcb69b21b810e$require$kPendingIdx]++;
        else client[$64ffcb69b21b810e$require$kQueue].splice(client[$64ffcb69b21b810e$require$kPendingIdx], 1);
    }
}
// https://www.rfc-editor.org/rfc/rfc7230#section-3.3.2
function $64ffcb69b21b810e$var$shouldSendContentLength(method) {
    return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS' && method !== 'TRACE' && method !== 'CONNECT';
}
function $64ffcb69b21b810e$var$write(client, request) {
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h2') {
        $64ffcb69b21b810e$var$writeH2(client, client[$64ffcb69b21b810e$require$kHTTP2Session], request);
        return;
    }
    const { body: body, method: method, path: path, host: host, upgrade: upgrade, headers: headers, blocking: blocking, reset: reset } = request;
    // https://tools.ietf.org/html/rfc7231#section-4.3.1
    // https://tools.ietf.org/html/rfc7231#section-4.3.2
    // https://tools.ietf.org/html/rfc7231#section-4.3.5
    // Sending a payload body on a request that does not
    // expect it can cause undefined behavior on some
    // servers and corrupt connection state. Do not
    // re-use the connection for further requests.
    const expectsPayload = method === 'PUT' || method === 'POST' || method === 'PATCH';
    if (body && typeof body.read === 'function') // Try to read EOF in order to get length.
    body.read(0);
    const bodyLength = $792c84e8fb672c12$exports.bodyLength(body);
    let contentLength = bodyLength;
    if (contentLength === null) contentLength = request.contentLength;
    if (contentLength === 0 && !expectsPayload) // https://tools.ietf.org/html/rfc7230#section-3.3.2
    // A user agent SHOULD NOT send a Content-Length header field when
    // the request message does not contain a payload body and the method
    // semantics do not anticipate such a body.
    contentLength = null;
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if ($64ffcb69b21b810e$var$shouldSendContentLength(method) && contentLength > 0 && request.contentLength !== null && request.contentLength !== contentLength) {
        if (client[$64ffcb69b21b810e$require$kStrictContentLength]) {
            $64ffcb69b21b810e$var$errorRequest(client, request, new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
    }
    const socket = client[$64ffcb69b21b810e$require$kSocket];
    try {
        request.onConnect((err)=>{
            if (request.aborted || request.completed) return;
            $64ffcb69b21b810e$var$errorRequest(client, request, err || new $64ffcb69b21b810e$require$RequestAbortedError());
            $792c84e8fb672c12$exports.destroy(socket, new $64ffcb69b21b810e$require$InformationalError('aborted'));
        });
    } catch (err) {
        $64ffcb69b21b810e$var$errorRequest(client, request, err);
    }
    if (request.aborted) return false;
    if (method === 'HEAD') // https://github.com/mcollina/undici/issues/258
    // Close after a HEAD request to interop with misbehaving servers
    // that may send a body in the response.
    socket[$64ffcb69b21b810e$require$kReset] = true;
    if (upgrade || method === 'CONNECT') // On CONNECT or upgrade, block pipeline from dispatching further
    // requests on this connection.
    socket[$64ffcb69b21b810e$require$kReset] = true;
    if (reset != null) socket[$64ffcb69b21b810e$require$kReset] = reset;
    if (client[$64ffcb69b21b810e$require$kMaxRequests] && socket[$64ffcb69b21b810e$require$kCounter]++ >= client[$64ffcb69b21b810e$require$kMaxRequests]) socket[$64ffcb69b21b810e$require$kReset] = true;
    if (blocking) socket[$64ffcb69b21b810e$require$kBlocking] = true;
    let header = `${method} ${path} HTTP/1.1\r\n`;
    if (typeof host === 'string') header += `host: ${host}\r\n`;
    else header += client[$64ffcb69b21b810e$require$kHostHeader];
    if (upgrade) header += `connection: upgrade\r\nupgrade: ${upgrade}\r\n`;
    else if (client[$64ffcb69b21b810e$require$kPipelining] && !socket[$64ffcb69b21b810e$require$kReset]) header += 'connection: keep-alive\r\n';
    else header += 'connection: close\r\n';
    if (headers) header += headers;
    if ($64ffcb69b21b810e$var$channels.sendHeaders.hasSubscribers) $64ffcb69b21b810e$var$channels.sendHeaders.publish({
        request: request,
        headers: header,
        socket: socket
    });
    /* istanbul ignore else: assertion */ if (!body || bodyLength === 0) {
        if (contentLength === 0) socket.write(`${header}content-length: 0\r\n\r\n`, 'latin1');
        else {
            $3esK3$assert(contentLength === null, 'no body must not have content length');
            socket.write(`${header}\r\n`, 'latin1');
        }
        request.onRequestSent();
    } else if ($792c84e8fb672c12$exports.isBuffer(body)) {
        $3esK3$assert(contentLength === body.byteLength, 'buffer body must have content length');
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
        socket.write(body);
        socket.uncork();
        request.onBodySent(body);
        request.onRequestSent();
        if (!expectsPayload) socket[$64ffcb69b21b810e$require$kReset] = true;
    } else if ($792c84e8fb672c12$exports.isBlobLike(body)) {
        if (typeof body.stream === 'function') $64ffcb69b21b810e$var$writeIterable({
            body: body.stream(),
            client: client,
            request: request,
            socket: socket,
            contentLength: contentLength,
            header: header,
            expectsPayload: expectsPayload
        });
        else $64ffcb69b21b810e$var$writeBlob({
            body: body,
            client: client,
            request: request,
            socket: socket,
            contentLength: contentLength,
            header: header,
            expectsPayload: expectsPayload
        });
    } else if ($792c84e8fb672c12$exports.isStream(body)) $64ffcb69b21b810e$var$writeStream({
        body: body,
        client: client,
        request: request,
        socket: socket,
        contentLength: contentLength,
        header: header,
        expectsPayload: expectsPayload
    });
    else if ($792c84e8fb672c12$exports.isIterable(body)) $64ffcb69b21b810e$var$writeIterable({
        body: body,
        client: client,
        request: request,
        socket: socket,
        contentLength: contentLength,
        header: header,
        expectsPayload: expectsPayload
    });
    else $3esK3$assert(false);
    return true;
}
function $64ffcb69b21b810e$var$writeH2(client, session, request) {
    const { body: body, method: method, path: path, host: host, upgrade: upgrade, expectContinue: expectContinue, signal: signal, headers: reqHeaders } = request;
    let headers;
    if (typeof reqHeaders === 'string') headers = $a3d6e6d914b506e6$exports[$64ffcb69b21b810e$require$kHTTP2CopyHeaders](reqHeaders.trim());
    else headers = reqHeaders;
    if (upgrade) {
        $64ffcb69b21b810e$var$errorRequest(client, request, new Error('Upgrade not supported for H2'));
        return false;
    }
    try {
        // TODO(HTTP/2): Should we call onConnect immediately or on stream ready event?
        request.onConnect((err)=>{
            if (request.aborted || request.completed) return;
            $64ffcb69b21b810e$var$errorRequest(client, request, err || new $64ffcb69b21b810e$require$RequestAbortedError());
        });
    } catch (err) {
        $64ffcb69b21b810e$var$errorRequest(client, request, err);
    }
    if (request.aborted) return false;
    /** @type {import('node:http2').ClientHttp2Stream} */ let stream;
    const h2State = client[$64ffcb69b21b810e$require$kHTTP2SessionState];
    headers[$64ffcb69b21b810e$var$HTTP2_HEADER_AUTHORITY] = host || client[$64ffcb69b21b810e$require$kHost];
    headers[$64ffcb69b21b810e$var$HTTP2_HEADER_METHOD] = method;
    if (method === 'CONNECT') {
        session.ref();
        // we are already connected, streams are pending, first request
        // will create a new stream. We trigger a request to create the stream and wait until
        // `ready` event is triggered
        // We disabled endStream to allow the user to write to the stream
        stream = session.request(headers, {
            endStream: false,
            signal: signal
        });
        if (stream.id && !stream.pending) {
            request.onUpgrade(null, null, stream);
            ++h2State.openStreams;
        } else stream.once('ready', ()=>{
            request.onUpgrade(null, null, stream);
            ++h2State.openStreams;
        });
        stream.once('close', ()=>{
            h2State.openStreams -= 1;
            // TODO(HTTP/2): unref only if current streams count is 0
            if (h2State.openStreams === 0) session.unref();
        });
        return true;
    }
    // https://tools.ietf.org/html/rfc7540#section-8.3
    // :path and :scheme headers must be omited when sending CONNECT
    headers[$64ffcb69b21b810e$var$HTTP2_HEADER_PATH] = path;
    headers[$64ffcb69b21b810e$var$HTTP2_HEADER_SCHEME] = 'https';
    // https://tools.ietf.org/html/rfc7231#section-4.3.1
    // https://tools.ietf.org/html/rfc7231#section-4.3.2
    // https://tools.ietf.org/html/rfc7231#section-4.3.5
    // Sending a payload body on a request that does not
    // expect it can cause undefined behavior on some
    // servers and corrupt connection state. Do not
    // re-use the connection for further requests.
    const expectsPayload = method === 'PUT' || method === 'POST' || method === 'PATCH';
    if (body && typeof body.read === 'function') // Try to read EOF in order to get length.
    body.read(0);
    let contentLength = $792c84e8fb672c12$exports.bodyLength(body);
    if (contentLength == null) contentLength = request.contentLength;
    if (contentLength === 0 || !expectsPayload) // https://tools.ietf.org/html/rfc7230#section-3.3.2
    // A user agent SHOULD NOT send a Content-Length header field when
    // the request message does not contain a payload body and the method
    // semantics do not anticipate such a body.
    contentLength = null;
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if ($64ffcb69b21b810e$var$shouldSendContentLength(method) && contentLength > 0 && request.contentLength != null && request.contentLength !== contentLength) {
        if (client[$64ffcb69b21b810e$require$kStrictContentLength]) {
            $64ffcb69b21b810e$var$errorRequest(client, request, new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
    }
    if (contentLength != null) {
        $3esK3$assert(body, 'no body must not have content length');
        headers[$64ffcb69b21b810e$var$HTTP2_HEADER_CONTENT_LENGTH] = `${contentLength}`;
    }
    session.ref();
    const shouldEndStream = method === 'GET' || method === 'HEAD';
    if (expectContinue) {
        headers[$64ffcb69b21b810e$var$HTTP2_HEADER_EXPECT] = '100-continue';
        stream = session.request(headers, {
            endStream: shouldEndStream,
            signal: signal
        });
        stream.once('continue', writeBodyH2);
    } else {
        stream = session.request(headers, {
            endStream: shouldEndStream,
            signal: signal
        });
        writeBodyH2();
    }
    // Increment counter as we have new several streams open
    ++h2State.openStreams;
    stream.once('response', (headers)=>{
        const { [$64ffcb69b21b810e$var$HTTP2_HEADER_STATUS]: statusCode, ...realHeaders } = headers;
        if (request.onHeaders(Number(statusCode), realHeaders, stream.resume.bind(stream), '') === false) stream.pause();
    });
    stream.once('end', ()=>{
        request.onComplete([]);
    });
    stream.on('data', (chunk)=>{
        if (request.onData(chunk) === false) stream.pause();
    });
    stream.once('close', ()=>{
        h2State.openStreams -= 1;
        // TODO(HTTP/2): unref only if current streams count is 0
        if (h2State.openStreams === 0) session.unref();
    });
    stream.once('error', function(err) {
        if (client[$64ffcb69b21b810e$require$kHTTP2Session] && !client[$64ffcb69b21b810e$require$kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            $792c84e8fb672c12$exports.destroy(stream, err);
        }
    });
    stream.once('frameError', (type, code)=>{
        const err = new $64ffcb69b21b810e$require$InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`);
        $64ffcb69b21b810e$var$errorRequest(client, request, err);
        if (client[$64ffcb69b21b810e$require$kHTTP2Session] && !client[$64ffcb69b21b810e$require$kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            $792c84e8fb672c12$exports.destroy(stream, err);
        }
    });
    // stream.on('aborted', () => {
    //   // TODO(HTTP/2): Support aborted
    // })
    // stream.on('timeout', () => {
    //   // TODO(HTTP/2): Support timeout
    // })
    // stream.on('push', headers => {
    //   // TODO(HTTP/2): Suppor push
    // })
    // stream.on('trailers', headers => {
    //   // TODO(HTTP/2): Support trailers
    // })
    return true;
    function writeBodyH2() {
        /* istanbul ignore else: assertion */ if (!body) request.onRequestSent();
        else if ($792c84e8fb672c12$exports.isBuffer(body)) {
            $3esK3$assert(contentLength === body.byteLength, 'buffer body must have content length');
            stream.cork();
            stream.write(body);
            stream.uncork();
            stream.end();
            request.onBodySent(body);
            request.onRequestSent();
        } else if ($792c84e8fb672c12$exports.isBlobLike(body)) {
            if (typeof body.stream === 'function') $64ffcb69b21b810e$var$writeIterable({
                client: client,
                request: request,
                contentLength: contentLength,
                h2stream: stream,
                expectsPayload: expectsPayload,
                body: body.stream(),
                socket: client[$64ffcb69b21b810e$require$kSocket],
                header: ''
            });
            else $64ffcb69b21b810e$var$writeBlob({
                body: body,
                client: client,
                request: request,
                contentLength: contentLength,
                expectsPayload: expectsPayload,
                h2stream: stream,
                header: '',
                socket: client[$64ffcb69b21b810e$require$kSocket]
            });
        } else if ($792c84e8fb672c12$exports.isStream(body)) $64ffcb69b21b810e$var$writeStream({
            body: body,
            client: client,
            request: request,
            contentLength: contentLength,
            expectsPayload: expectsPayload,
            socket: client[$64ffcb69b21b810e$require$kSocket],
            h2stream: stream,
            header: ''
        });
        else if ($792c84e8fb672c12$exports.isIterable(body)) $64ffcb69b21b810e$var$writeIterable({
            body: body,
            client: client,
            request: request,
            contentLength: contentLength,
            expectsPayload: expectsPayload,
            header: '',
            h2stream: stream,
            socket: client[$64ffcb69b21b810e$require$kSocket]
        });
        else $3esK3$assert(false);
    }
}
function $64ffcb69b21b810e$var$writeStream({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $3esK3$assert(contentLength !== 0 || client[$64ffcb69b21b810e$require$kRunning] === 0, 'stream body cannot be pipelined');
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h2') {
        // For HTTP/2, is enough to pipe the stream
        const pipe = $64ffcb69b21b810e$require$pipeline(body, h2stream, (err)=>{
            if (err) {
                $792c84e8fb672c12$exports.destroy(body, err);
                $792c84e8fb672c12$exports.destroy(h2stream, err);
            } else request.onRequestSent();
        });
        pipe.on('data', onPipeData);
        pipe.once('end', ()=>{
            pipe.removeListener('data', onPipeData);
            $792c84e8fb672c12$exports.destroy(pipe);
        });
        function onPipeData(chunk) {
            request.onBodySent(chunk);
        }
        return;
    }
    let finished = false;
    const writer = new $64ffcb69b21b810e$var$AsyncWriter({
        socket: socket,
        request: request,
        contentLength: contentLength,
        client: client,
        expectsPayload: expectsPayload,
        header: header
    });
    const onData = function(chunk) {
        if (finished) return;
        try {
            if (!writer.write(chunk) && this.pause) this.pause();
        } catch (err) {
            $792c84e8fb672c12$exports.destroy(this, err);
        }
    };
    const onDrain = function() {
        if (finished) return;
        if (body.resume) body.resume();
    };
    const onAbort = function() {
        if (finished) return;
        const err = new $64ffcb69b21b810e$require$RequestAbortedError();
        queueMicrotask(()=>onFinished(err));
    };
    const onFinished = function(err) {
        if (finished) return;
        finished = true;
        $3esK3$assert(socket.destroyed || socket[$64ffcb69b21b810e$require$kWriting] && client[$64ffcb69b21b810e$require$kRunning] <= 1);
        socket.off('drain', onDrain).off('error', onFinished);
        body.removeListener('data', onData).removeListener('end', onFinished).removeListener('error', onFinished).removeListener('close', onAbort);
        if (!err) try {
            writer.end();
        } catch (er) {
            err = er;
        }
        writer.destroy(err);
        if (err && (err.code !== 'UND_ERR_INFO' || err.message !== 'reset')) $792c84e8fb672c12$exports.destroy(body, err);
        else $792c84e8fb672c12$exports.destroy(body);
    };
    body.on('data', onData).on('end', onFinished).on('error', onFinished).on('close', onAbort);
    if (body.resume) body.resume();
    socket.on('drain', onDrain).on('error', onFinished);
}
async function $64ffcb69b21b810e$var$writeBlob({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $3esK3$assert(contentLength === body.size, 'blob body must have content length');
    const isH2 = client[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h2';
    try {
        if (contentLength != null && contentLength !== body.size) throw new $64ffcb69b21b810e$require$RequestContentLengthMismatchError();
        const buffer = Buffer.from(await body.arrayBuffer());
        if (isH2) {
            h2stream.cork();
            h2stream.write(buffer);
            h2stream.uncork();
        } else {
            socket.cork();
            socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
            socket.write(buffer);
            socket.uncork();
        }
        request.onBodySent(buffer);
        request.onRequestSent();
        if (!expectsPayload) socket[$64ffcb69b21b810e$require$kReset] = true;
        $64ffcb69b21b810e$var$resume(client);
    } catch (err) {
        $792c84e8fb672c12$exports.destroy(isH2 ? h2stream : socket, err);
    }
}
async function $64ffcb69b21b810e$var$writeIterable({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $3esK3$assert(contentLength !== 0 || client[$64ffcb69b21b810e$require$kRunning] === 0, 'iterator body cannot be pipelined');
    let callback = null;
    function onDrain() {
        if (callback) {
            const cb = callback;
            callback = null;
            cb();
        }
    }
    const waitForDrain = ()=>new Promise((resolve, reject)=>{
            $3esK3$assert(callback === null);
            if (socket[$64ffcb69b21b810e$require$kError]) reject(socket[$64ffcb69b21b810e$require$kError]);
            else callback = resolve;
        });
    if (client[$64ffcb69b21b810e$require$kHTTPConnVersion] === 'h2') {
        h2stream.on('close', onDrain).on('drain', onDrain);
        try {
            // It's up to the user to somehow abort the async iterable.
            for await (const chunk of body){
                if (socket[$64ffcb69b21b810e$require$kError]) throw socket[$64ffcb69b21b810e$require$kError];
                const res = h2stream.write(chunk);
                request.onBodySent(chunk);
                if (!res) await waitForDrain();
            }
        } catch (err) {
            h2stream.destroy(err);
        } finally{
            request.onRequestSent();
            h2stream.end();
            h2stream.off('close', onDrain).off('drain', onDrain);
        }
        return;
    }
    socket.on('close', onDrain).on('drain', onDrain);
    const writer = new $64ffcb69b21b810e$var$AsyncWriter({
        socket: socket,
        request: request,
        contentLength: contentLength,
        client: client,
        expectsPayload: expectsPayload,
        header: header
    });
    try {
        // It's up to the user to somehow abort the async iterable.
        for await (const chunk of body){
            if (socket[$64ffcb69b21b810e$require$kError]) throw socket[$64ffcb69b21b810e$require$kError];
            if (!writer.write(chunk)) await waitForDrain();
        }
        writer.end();
    } catch (err) {
        writer.destroy(err);
    } finally{
        socket.off('close', onDrain).off('drain', onDrain);
    }
}
class $64ffcb69b21b810e$var$AsyncWriter {
    constructor({ socket: socket, request: request, contentLength: contentLength, client: client, expectsPayload: expectsPayload, header: header }){
        this.socket = socket;
        this.request = request;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[$64ffcb69b21b810e$require$kWriting] = true;
    }
    write(chunk) {
        const { socket: socket, request: request, contentLength: contentLength, client: client, bytesWritten: bytesWritten, expectsPayload: expectsPayload, header: header } = this;
        if (socket[$64ffcb69b21b810e$require$kError]) throw socket[$64ffcb69b21b810e$require$kError];
        if (socket.destroyed) return false;
        const len = Buffer.byteLength(chunk);
        if (!len) return true;
        // We should defer writing chunks.
        if (contentLength !== null && bytesWritten + len > contentLength) {
            if (client[$64ffcb69b21b810e$require$kStrictContentLength]) throw new $64ffcb69b21b810e$require$RequestContentLengthMismatchError();
            process.emitWarning(new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
        }
        socket.cork();
        if (bytesWritten === 0) {
            if (!expectsPayload) socket[$64ffcb69b21b810e$require$kReset] = true;
            if (contentLength === null) socket.write(`${header}transfer-encoding: chunked\r\n`, 'latin1');
            else socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
        }
        if (contentLength === null) socket.write(`\r\n${len.toString(16)}\r\n`, 'latin1');
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        socket.uncork();
        request.onBodySent(chunk);
        if (!ret) {
            if (socket[$64ffcb69b21b810e$require$kParser].timeout && socket[$64ffcb69b21b810e$require$kParser].timeoutType === $64ffcb69b21b810e$var$TIMEOUT_HEADERS) // istanbul ignore else: only for jest
            {
                if (socket[$64ffcb69b21b810e$require$kParser].timeout.refresh) socket[$64ffcb69b21b810e$require$kParser].timeout.refresh();
            }
        }
        return ret;
    }
    end() {
        const { socket: socket, contentLength: contentLength, client: client, bytesWritten: bytesWritten, expectsPayload: expectsPayload, header: header, request: request } = this;
        request.onRequestSent();
        socket[$64ffcb69b21b810e$require$kWriting] = false;
        if (socket[$64ffcb69b21b810e$require$kError]) throw socket[$64ffcb69b21b810e$require$kError];
        if (socket.destroyed) return;
        if (bytesWritten === 0) {
            if (expectsPayload) // https://tools.ietf.org/html/rfc7230#section-3.3.2
            // A user agent SHOULD send a Content-Length in a request message when
            // no Transfer-Encoding is sent and the request method defines a meaning
            // for an enclosed payload body.
            socket.write(`${header}content-length: 0\r\n\r\n`, 'latin1');
            else socket.write(`${header}\r\n`, 'latin1');
        } else if (contentLength === null) socket.write('\r\n0\r\n\r\n', 'latin1');
        if (contentLength !== null && bytesWritten !== contentLength) {
            if (client[$64ffcb69b21b810e$require$kStrictContentLength]) throw new $64ffcb69b21b810e$require$RequestContentLengthMismatchError();
            else process.emitWarning(new $64ffcb69b21b810e$require$RequestContentLengthMismatchError());
        }
        if (socket[$64ffcb69b21b810e$require$kParser].timeout && socket[$64ffcb69b21b810e$require$kParser].timeoutType === $64ffcb69b21b810e$var$TIMEOUT_HEADERS) // istanbul ignore else: only for jest
        {
            if (socket[$64ffcb69b21b810e$require$kParser].timeout.refresh) socket[$64ffcb69b21b810e$require$kParser].timeout.refresh();
        }
        $64ffcb69b21b810e$var$resume(client);
    }
    destroy(err) {
        const { socket: socket, client: client } = this;
        socket[$64ffcb69b21b810e$require$kWriting] = false;
        if (err) {
            $3esK3$assert(client[$64ffcb69b21b810e$require$kRunning] <= 1, 'pipeline should only contain this request');
            $792c84e8fb672c12$exports.destroy(socket, err);
        }
    }
}
function $64ffcb69b21b810e$var$errorRequest(client, request, err) {
    try {
        request.onError(err);
        $3esK3$assert(request.aborted);
    } catch (err) {
        client.emit('error', err);
    }
}
module.exports = $64ffcb69b21b810e$var$Client;


//# sourceMappingURL=client.a6515ab6.js.map
