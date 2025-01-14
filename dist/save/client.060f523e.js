require("./util.c7a5ec55.js");
require("./timers.d443e450.js");
require("./request.5b14e359.js");
require("./dispatcher-base.350ec1bb.js");
require("./errors.12b0f892.js");
require("./connect.db50106d.js");
require("./symbols.b8a391fa.js");
require("./constants.838f132f.js");
require("./redirectInterceptor.98adf1a5.js");
require("./llhttp-wasm.1a69ca3e.js");
require("./llhttp_simd-wasm.e2a4b8d5.js");
var $fGUYC$assert = require("assert");
var $fGUYC$net = require("net");
var $fGUYC$http = require("http");
var $fGUYC$stream = require("stream");


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
parcelRegister("dM8pR", function(module, exports) {
module.exports = new URL("llhttp-wasm.1a69ca3e.js", "file:" + __filename).toString();

});

parcelRegister("6Wynl", function(module, exports) {
module.exports = new URL("llhttp_simd-wasm.e2a4b8d5.js", "file:" + __filename).toString();

});

// @ts-check
'use strict';




var $c5180d514db3051c$require$pipeline = $fGUYC$stream.pipeline;
var $ab5d1b7bdebc55f8$exports = {};
$ab5d1b7bdebc55f8$exports = new URL("util.c7a5ec55.js", "file:" + __filename).toString();


var $ba7cb4efef22156a$exports = {};
$ba7cb4efef22156a$exports = new URL("timers.d443e450.js", "file:" + __filename).toString();


var $be3feb89804da37f$exports = {};
$be3feb89804da37f$exports = new URL("request.5b14e359.js", "file:" + __filename).toString();


var $03d67773c83b72fa$exports = {};
$03d67773c83b72fa$exports = new URL("dispatcher-base.350ec1bb.js", "file:" + __filename).toString();



var $hA22O = parcelRequire("hA22O");
var $c5180d514db3051c$require$RequestContentLengthMismatchError = $hA22O.RequestContentLengthMismatchError;
var $c5180d514db3051c$require$ResponseContentLengthMismatchError = $hA22O.ResponseContentLengthMismatchError;
var $c5180d514db3051c$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $c5180d514db3051c$require$RequestAbortedError = $hA22O.RequestAbortedError;
var $c5180d514db3051c$require$HeadersTimeoutError = $hA22O.HeadersTimeoutError;
var $c5180d514db3051c$require$HeadersOverflowError = $hA22O.HeadersOverflowError;
var $c5180d514db3051c$require$SocketError = $hA22O.SocketError;
var $c5180d514db3051c$require$InformationalError = $hA22O.InformationalError;
var $c5180d514db3051c$require$BodyTimeoutError = $hA22O.BodyTimeoutError;
var $c5180d514db3051c$require$HTTPParserError = $hA22O.HTTPParserError;
var $c5180d514db3051c$require$ResponseExceededMaxSizeError = $hA22O.ResponseExceededMaxSizeError;
var $c5180d514db3051c$require$ClientDestroyedError = $hA22O.ClientDestroyedError;
var $3a4a7aec4f2eefac$exports = {};
$3a4a7aec4f2eefac$exports = new URL("connect.db50106d.js", "file:" + __filename).toString();



var $dSiuY = parcelRequire("dSiuY");
var $c5180d514db3051c$require$kUrl = $dSiuY.kUrl;
var $c5180d514db3051c$require$kReset = $dSiuY.kReset;
var $c5180d514db3051c$require$kServerName = $dSiuY.kServerName;
var $c5180d514db3051c$require$kClient = $dSiuY.kClient;
var $c5180d514db3051c$require$kBusy = $dSiuY.kBusy;
var $c5180d514db3051c$require$kParser = $dSiuY.kParser;
var $c5180d514db3051c$require$kConnect = $dSiuY.kConnect;
var $c5180d514db3051c$require$kBlocking = $dSiuY.kBlocking;
var $c5180d514db3051c$require$kResuming = $dSiuY.kResuming;
var $c5180d514db3051c$require$kRunning = $dSiuY.kRunning;
var $c5180d514db3051c$require$kPending = $dSiuY.kPending;
var $c5180d514db3051c$require$kSize = $dSiuY.kSize;
var $c5180d514db3051c$require$kWriting = $dSiuY.kWriting;
var $c5180d514db3051c$require$kQueue = $dSiuY.kQueue;
var $c5180d514db3051c$require$kConnected = $dSiuY.kConnected;
var $c5180d514db3051c$require$kConnecting = $dSiuY.kConnecting;
var $c5180d514db3051c$require$kNeedDrain = $dSiuY.kNeedDrain;
var $c5180d514db3051c$require$kNoRef = $dSiuY.kNoRef;
var $c5180d514db3051c$require$kKeepAliveDefaultTimeout = $dSiuY.kKeepAliveDefaultTimeout;
var $c5180d514db3051c$require$kHostHeader = $dSiuY.kHostHeader;
var $c5180d514db3051c$require$kPendingIdx = $dSiuY.kPendingIdx;
var $c5180d514db3051c$require$kRunningIdx = $dSiuY.kRunningIdx;
var $c5180d514db3051c$require$kError = $dSiuY.kError;
var $c5180d514db3051c$require$kPipelining = $dSiuY.kPipelining;
var $c5180d514db3051c$require$kSocket = $dSiuY.kSocket;
var $c5180d514db3051c$require$kKeepAliveTimeoutValue = $dSiuY.kKeepAliveTimeoutValue;
var $c5180d514db3051c$require$kMaxHeadersSize = $dSiuY.kMaxHeadersSize;
var $c5180d514db3051c$require$kKeepAliveMaxTimeout = $dSiuY.kKeepAliveMaxTimeout;
var $c5180d514db3051c$require$kKeepAliveTimeoutThreshold = $dSiuY.kKeepAliveTimeoutThreshold;
var $c5180d514db3051c$require$kHeadersTimeout = $dSiuY.kHeadersTimeout;
var $c5180d514db3051c$require$kBodyTimeout = $dSiuY.kBodyTimeout;
var $c5180d514db3051c$require$kStrictContentLength = $dSiuY.kStrictContentLength;
var $c5180d514db3051c$require$kConnector = $dSiuY.kConnector;
var $c5180d514db3051c$require$kMaxRedirections = $dSiuY.kMaxRedirections;
var $c5180d514db3051c$require$kMaxRequests = $dSiuY.kMaxRequests;
var $c5180d514db3051c$require$kCounter = $dSiuY.kCounter;
var $c5180d514db3051c$require$kClose = $dSiuY.kClose;
var $c5180d514db3051c$require$kDestroy = $dSiuY.kDestroy;
var $c5180d514db3051c$require$kDispatch = $dSiuY.kDispatch;
var $c5180d514db3051c$require$kInterceptors = $dSiuY.kInterceptors;
var $c5180d514db3051c$require$kLocalAddress = $dSiuY.kLocalAddress;
var $c5180d514db3051c$require$kMaxResponseSize = $dSiuY.kMaxResponseSize;
var $c5180d514db3051c$require$kHTTPConnVersion = $dSiuY.kHTTPConnVersion;
var $c5180d514db3051c$require$kHost = $dSiuY.kHost;
var $c5180d514db3051c$require$kHTTP2Session = $dSiuY.kHTTP2Session;
var $c5180d514db3051c$require$kHTTP2SessionState = $dSiuY.kHTTP2SessionState;
var $c5180d514db3051c$require$kHTTP2BuildRequest = $dSiuY.kHTTP2BuildRequest;
var $c5180d514db3051c$require$kHTTP2CopyHeaders = $dSiuY.kHTTP2CopyHeaders;
var $c5180d514db3051c$require$kHTTP1BuildRequest = $dSiuY.kHTTP1BuildRequest;
/** @type {import('http2')} */ let $c5180d514db3051c$var$http2;

try {
    $c5180d514db3051c$var$http2 = $c5180d514db3051c$import$dc5c58500bc5a0ce;
} catch  {
    // @ts-ignore
    $c5180d514db3051c$var$http2 = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY: $c5180d514db3051c$var$HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_METHOD: $c5180d514db3051c$var$HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH: $c5180d514db3051c$var$HTTP2_HEADER_PATH, HTTP2_HEADER_SCHEME: $c5180d514db3051c$var$HTTP2_HEADER_SCHEME, HTTP2_HEADER_CONTENT_LENGTH: $c5180d514db3051c$var$HTTP2_HEADER_CONTENT_LENGTH, HTTP2_HEADER_EXPECT: $c5180d514db3051c$var$HTTP2_HEADER_EXPECT, HTTP2_HEADER_STATUS: $c5180d514db3051c$var$HTTP2_HEADER_STATUS } } = $c5180d514db3051c$var$http2;
// Experimental
let $c5180d514db3051c$var$h2ExperimentalWarned = false;
const $c5180d514db3051c$var$FastBuffer = Buffer[Symbol.species];
const $c5180d514db3051c$var$kClosedResolve = Symbol('kClosedResolve');
const $c5180d514db3051c$var$channels = {};

try {
    const diagnosticsChannel = $c5180d514db3051c$import$448217ca25882f04;
    $c5180d514db3051c$var$channels.sendHeaders = diagnosticsChannel.channel('undici:client:sendHeaders');
    $c5180d514db3051c$var$channels.beforeConnect = diagnosticsChannel.channel('undici:client:beforeConnect');
    $c5180d514db3051c$var$channels.connectError = diagnosticsChannel.channel('undici:client:connectError');
    $c5180d514db3051c$var$channels.connected = diagnosticsChannel.channel('undici:client:connected');
} catch  {
    $c5180d514db3051c$var$channels.sendHeaders = {
        hasSubscribers: false
    };
    $c5180d514db3051c$var$channels.beforeConnect = {
        hasSubscribers: false
    };
    $c5180d514db3051c$var$channels.connectError = {
        hasSubscribers: false
    };
    $c5180d514db3051c$var$channels.connected = {
        hasSubscribers: false
    };
}
/**
 * @type {import('../types/client').default}
 */ class $c5180d514db3051c$var$Client extends $03d67773c83b72fa$exports {
    /**
   *
   * @param {string|URL} url
   * @param {import('../types/client').Client.Options} options
   */ constructor(url, { interceptors: interceptors, maxHeaderSize: maxHeaderSize, headersTimeout: headersTimeout, socketTimeout: socketTimeout, requestTimeout: requestTimeout, connectTimeout: connectTimeout, bodyTimeout: bodyTimeout, idleTimeout: idleTimeout, keepAlive: keepAlive, keepAliveTimeout: keepAliveTimeout, maxKeepAliveTimeout: maxKeepAliveTimeout, keepAliveMaxTimeout: keepAliveMaxTimeout, keepAliveTimeoutThreshold: keepAliveTimeoutThreshold, socketPath: socketPath, pipelining: pipelining, tls: tls, strictContentLength: strictContentLength, maxCachedSessions: maxCachedSessions, maxRedirections: maxRedirections, connect: connect, maxRequestsPerClient: maxRequestsPerClient, localAddress: localAddress, maxResponseSize: maxResponseSize, autoSelectFamily: autoSelectFamily, autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout, allowH2: // h2
    allowH2, maxConcurrentStreams: maxConcurrentStreams } = {}){
        super();
        if (keepAlive !== undefined) throw new $c5180d514db3051c$require$InvalidArgumentError('unsupported keepAlive, use pipelining=0 instead');
        if (socketTimeout !== undefined) throw new $c5180d514db3051c$require$InvalidArgumentError('unsupported socketTimeout, use headersTimeout & bodyTimeout instead');
        if (requestTimeout !== undefined) throw new $c5180d514db3051c$require$InvalidArgumentError('unsupported requestTimeout, use headersTimeout & bodyTimeout instead');
        if (idleTimeout !== undefined) throw new $c5180d514db3051c$require$InvalidArgumentError('unsupported idleTimeout, use keepAliveTimeout instead');
        if (maxKeepAliveTimeout !== undefined) throw new $c5180d514db3051c$require$InvalidArgumentError('unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead');
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) throw new $c5180d514db3051c$require$InvalidArgumentError('invalid maxHeaderSize');
        if (socketPath != null && typeof socketPath !== 'string') throw new $c5180d514db3051c$require$InvalidArgumentError('invalid socketPath');
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('invalid connectTimeout');
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('invalid keepAliveTimeout');
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('invalid keepAliveMaxTimeout');
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) throw new $c5180d514db3051c$require$InvalidArgumentError('invalid keepAliveTimeoutThreshold');
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('headersTimeout must be a positive integer or zero');
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('bodyTimeout must be a positive integer or zero');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $c5180d514db3051c$require$InvalidArgumentError('connect must be a function or an object');
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('maxRedirections must be a positive number');
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('maxRequestsPerClient must be a positive number');
        if (localAddress != null && (typeof localAddress !== 'string' || $fGUYC$net.isIP(localAddress) === 0)) throw new $c5180d514db3051c$require$InvalidArgumentError('localAddress must be valid string IP address');
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) throw new $c5180d514db3051c$require$InvalidArgumentError('maxResponseSize must be a positive number');
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) throw new $c5180d514db3051c$require$InvalidArgumentError('autoSelectFamilyAttemptTimeout must be a positive number');
        // h2
        if (allowH2 != null && typeof allowH2 !== 'boolean') throw new $c5180d514db3051c$require$InvalidArgumentError('allowH2 must be a valid boolean value');
        if (maxConcurrentStreams != null && (typeof maxConcurrentStreams !== 'number' || maxConcurrentStreams < 1)) throw new $c5180d514db3051c$require$InvalidArgumentError('maxConcurrentStreams must be a possitive integer, greater than 0');
        if (typeof connect !== 'function') connect = $3a4a7aec4f2eefac$exports({
            ...tls,
            maxCachedSessions: maxCachedSessions,
            allowH2: allowH2,
            socketPath: socketPath,
            timeout: connectTimeout,
            ...$ab5d1b7bdebc55f8$exports.nodeHasAutoSelectFamily && autoSelectFamily ? {
                autoSelectFamily: autoSelectFamily,
                autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout
            } : undefined,
            ...connect
        });
        this[$c5180d514db3051c$require$kInterceptors] = interceptors && interceptors.Client && Array.isArray(interceptors.Client) ? interceptors.Client : [
            $d6835dd32dc59a4b$exports({
                maxRedirections: maxRedirections
            })
        ];
        this[$c5180d514db3051c$require$kUrl] = $ab5d1b7bdebc55f8$exports.parseOrigin(url);
        this[$c5180d514db3051c$require$kConnector] = connect;
        this[$c5180d514db3051c$require$kSocket] = null;
        this[$c5180d514db3051c$require$kPipelining] = pipelining != null ? pipelining : 1;
        this[$c5180d514db3051c$require$kMaxHeadersSize] = maxHeaderSize || $fGUYC$http.maxHeaderSize;
        this[$c5180d514db3051c$require$kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[$c5180d514db3051c$require$kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 600e3 : keepAliveMaxTimeout;
        this[$c5180d514db3051c$require$kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[$c5180d514db3051c$require$kKeepAliveTimeoutValue] = this[$c5180d514db3051c$require$kKeepAliveDefaultTimeout];
        this[$c5180d514db3051c$require$kServerName] = null;
        this[$c5180d514db3051c$require$kLocalAddress] = localAddress != null ? localAddress : null;
        this[$c5180d514db3051c$require$kResuming] = 0 // 0, idle, 1, scheduled, 2 resuming
        ;
        this[$c5180d514db3051c$require$kNeedDrain] = 0 // 0, idle, 1, scheduled, 2 resuming
        ;
        this[$c5180d514db3051c$require$kHostHeader] = `host: ${this[$c5180d514db3051c$require$kUrl].hostname}${this[$c5180d514db3051c$require$kUrl].port ? `:${this[$c5180d514db3051c$require$kUrl].port}` : ''}\r\n`;
        this[$c5180d514db3051c$require$kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 300e3;
        this[$c5180d514db3051c$require$kHeadersTimeout] = headersTimeout != null ? headersTimeout : 300e3;
        this[$c5180d514db3051c$require$kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[$c5180d514db3051c$require$kMaxRedirections] = maxRedirections;
        this[$c5180d514db3051c$require$kMaxRequests] = maxRequestsPerClient;
        this[$c5180d514db3051c$var$kClosedResolve] = null;
        this[$c5180d514db3051c$require$kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[$c5180d514db3051c$require$kHTTPConnVersion] = 'h1';
        // HTTP/2
        this[$c5180d514db3051c$require$kHTTP2Session] = null;
        this[$c5180d514db3051c$require$kHTTP2SessionState] = !allowH2 ? null : {
            // streams: null, // Fixed queue of streams - For future support of `push`
            openStreams: 0,
            maxConcurrentStreams: maxConcurrentStreams != null ? maxConcurrentStreams : 100 // Max peerConcurrentStreams for a Node h2 server
        };
        this[$c5180d514db3051c$require$kHost] = `${this[$c5180d514db3051c$require$kUrl].hostname}${this[$c5180d514db3051c$require$kUrl].port ? `:${this[$c5180d514db3051c$require$kUrl].port}` : ''}`;
        // kQueue is built up of 3 sections separated by
        // the kRunningIdx and kPendingIdx indices.
        // |   complete   |   running   |   pending   |
        //                ^ kRunningIdx ^ kPendingIdx ^ kQueue.length
        // kRunningIdx points to the first running element.
        // kPendingIdx points to the first pending element.
        // This implements a fast queue with an amortized
        // time of O(1).
        this[$c5180d514db3051c$require$kQueue] = [];
        this[$c5180d514db3051c$require$kRunningIdx] = 0;
        this[$c5180d514db3051c$require$kPendingIdx] = 0;
    }
    get pipelining() {
        return this[$c5180d514db3051c$require$kPipelining];
    }
    set pipelining(value) {
        this[$c5180d514db3051c$require$kPipelining] = value;
        $c5180d514db3051c$var$resume(this, true);
    }
    get [$c5180d514db3051c$require$kPending]() {
        return this[$c5180d514db3051c$require$kQueue].length - this[$c5180d514db3051c$require$kPendingIdx];
    }
    get [$c5180d514db3051c$require$kRunning]() {
        return this[$c5180d514db3051c$require$kPendingIdx] - this[$c5180d514db3051c$require$kRunningIdx];
    }
    get [$c5180d514db3051c$require$kSize]() {
        return this[$c5180d514db3051c$require$kQueue].length - this[$c5180d514db3051c$require$kRunningIdx];
    }
    get [$c5180d514db3051c$require$kConnected]() {
        return !!this[$c5180d514db3051c$require$kSocket] && !this[$c5180d514db3051c$require$kConnecting] && !this[$c5180d514db3051c$require$kSocket].destroyed;
    }
    get [$c5180d514db3051c$require$kBusy]() {
        const socket = this[$c5180d514db3051c$require$kSocket];
        return socket && (socket[$c5180d514db3051c$require$kReset] || socket[$c5180d514db3051c$require$kWriting] || socket[$c5180d514db3051c$require$kBlocking]) || this[$c5180d514db3051c$require$kSize] >= (this[$c5180d514db3051c$require$kPipelining] || 1) || this[$c5180d514db3051c$require$kPending] > 0;
    }
    /* istanbul ignore: only used for test */ [$c5180d514db3051c$require$kConnect](cb) {
        $c5180d514db3051c$var$connect(this);
        this.once('connect', cb);
    }
    [$c5180d514db3051c$require$kDispatch](opts, handler) {
        const origin = opts.origin || this[$c5180d514db3051c$require$kUrl].origin;
        const request = this[$c5180d514db3051c$require$kHTTPConnVersion] === 'h2' ? $be3feb89804da37f$exports[$c5180d514db3051c$require$kHTTP2BuildRequest](origin, opts, handler) : $be3feb89804da37f$exports[$c5180d514db3051c$require$kHTTP1BuildRequest](origin, opts, handler);
        this[$c5180d514db3051c$require$kQueue].push(request);
        if (this[$c5180d514db3051c$require$kResuming]) ;
        else if ($ab5d1b7bdebc55f8$exports.bodyLength(request.body) == null && $ab5d1b7bdebc55f8$exports.isIterable(request.body)) {
            // Wait a tick in case stream/iterator is ended in the same tick.
            this[$c5180d514db3051c$require$kResuming] = 1;
            process.nextTick($c5180d514db3051c$var$resume, this);
        } else $c5180d514db3051c$var$resume(this, true);
        if (this[$c5180d514db3051c$require$kResuming] && this[$c5180d514db3051c$require$kNeedDrain] !== 2 && this[$c5180d514db3051c$require$kBusy]) this[$c5180d514db3051c$require$kNeedDrain] = 2;
        return this[$c5180d514db3051c$require$kNeedDrain] < 2;
    }
    async [$c5180d514db3051c$require$kClose]() {
        // TODO: for H2 we need to gracefully flush the remaining enqueued
        // request and close each stream.
        return new Promise((resolve)=>{
            if (!this[$c5180d514db3051c$require$kSize]) resolve(null);
            else this[$c5180d514db3051c$var$kClosedResolve] = resolve;
        });
    }
    async [$c5180d514db3051c$require$kDestroy](err) {
        return new Promise((resolve)=>{
            const requests = this[$c5180d514db3051c$require$kQueue].splice(this[$c5180d514db3051c$require$kPendingIdx]);
            for(let i = 0; i < requests.length; i++){
                const request = requests[i];
                $c5180d514db3051c$var$errorRequest(this, request, err);
            }
            const callback = ()=>{
                if (this[$c5180d514db3051c$var$kClosedResolve]) {
                    // TODO (fix): Should we error here with ClientDestroyedError?
                    this[$c5180d514db3051c$var$kClosedResolve]();
                    this[$c5180d514db3051c$var$kClosedResolve] = null;
                }
                resolve();
            };
            if (this[$c5180d514db3051c$require$kHTTP2Session] != null) {
                $ab5d1b7bdebc55f8$exports.destroy(this[$c5180d514db3051c$require$kHTTP2Session], err);
                this[$c5180d514db3051c$require$kHTTP2Session] = null;
                this[$c5180d514db3051c$require$kHTTP2SessionState] = null;
            }
            if (!this[$c5180d514db3051c$require$kSocket]) queueMicrotask(callback);
            else $ab5d1b7bdebc55f8$exports.destroy(this[$c5180d514db3051c$require$kSocket].on('close', callback), err);
            $c5180d514db3051c$var$resume(this);
        });
    }
}
function $c5180d514db3051c$var$onHttp2SessionError(err) {
    $fGUYC$assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    this[$c5180d514db3051c$require$kSocket][$c5180d514db3051c$require$kError] = err;
    $c5180d514db3051c$var$onError(this[$c5180d514db3051c$require$kClient], err);
}
function $c5180d514db3051c$var$onHttp2FrameError(type, code, id) {
    const err = new $c5180d514db3051c$require$InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`);
    if (id === 0) {
        this[$c5180d514db3051c$require$kSocket][$c5180d514db3051c$require$kError] = err;
        $c5180d514db3051c$var$onError(this[$c5180d514db3051c$require$kClient], err);
    }
}
function $c5180d514db3051c$var$onHttp2SessionEnd() {
    $ab5d1b7bdebc55f8$exports.destroy(this, new $c5180d514db3051c$require$SocketError('other side closed'));
    $ab5d1b7bdebc55f8$exports.destroy(this[$c5180d514db3051c$require$kSocket], new $c5180d514db3051c$require$SocketError('other side closed'));
}
function $c5180d514db3051c$var$onHTTP2GoAway(code) {
    const client = this[$c5180d514db3051c$require$kClient];
    const err = new $c5180d514db3051c$require$InformationalError(`HTTP/2: "GOAWAY" frame received with code ${code}`);
    client[$c5180d514db3051c$require$kSocket] = null;
    client[$c5180d514db3051c$require$kHTTP2Session] = null;
    if (client.destroyed) {
        $fGUYC$assert(this[$c5180d514db3051c$require$kPending] === 0);
        // Fail entire queue.
        const requests = client[$c5180d514db3051c$require$kQueue].splice(client[$c5180d514db3051c$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $c5180d514db3051c$var$errorRequest(this, request, err);
        }
    } else if (client[$c5180d514db3051c$require$kRunning] > 0) {
        // Fail head of pipeline.
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]++] = null;
        $c5180d514db3051c$var$errorRequest(client, request, err);
    }
    client[$c5180d514db3051c$require$kPendingIdx] = client[$c5180d514db3051c$require$kRunningIdx];
    $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 0);
    client.emit('disconnect', client[$c5180d514db3051c$require$kUrl], [
        client
    ], err);
    $c5180d514db3051c$var$resume(client);
}
var $d9e7c6b8f40f146d$exports = {};
$d9e7c6b8f40f146d$exports = new URL("constants.838f132f.js", "file:" + __filename).toString();


var $d6835dd32dc59a4b$exports = {};
$d6835dd32dc59a4b$exports = new URL("redirectInterceptor.98adf1a5.js", "file:" + __filename).toString();


const $c5180d514db3051c$var$EMPTY_BUF = Buffer.alloc(0);



async function $c5180d514db3051c$var$lazyllhttp() {
    const llhttpWasmData = process.env.JEST_WORKER_ID ? (parcelRequire("dM8pR")) : undefined;
    let mod;
    try {
        mod = await WebAssembly.compile(Buffer.from((parcelRequire("6Wynl")), 'base64'));
    } catch (e) {
        /* istanbul ignore next */ // We could check if the error was caused by the simd option not
        // being enabled, but the occurring of this other error
        // * https://github.com/emscripten-core/emscripten/issues/11495
        // got me to remove that check to avoid breaking Node 12.
        mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || (parcelRequire("dM8pR")), 'base64'));
    }
    return await WebAssembly.instantiate(mod, {
        env: {
            /* eslint-disable camelcase */ wasm_on_url: (p, at, len)=>{
                /* istanbul ignore next */ return 0;
            },
            wasm_on_status: (p, at, len)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                const start = at - $c5180d514db3051c$var$currentBufferPtr + $c5180d514db3051c$var$currentBufferRef.byteOffset;
                return $c5180d514db3051c$var$currentParser.onStatus(new $c5180d514db3051c$var$FastBuffer($c5180d514db3051c$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_begin: (p)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                return $c5180d514db3051c$var$currentParser.onMessageBegin() || 0;
            },
            wasm_on_header_field: (p, at, len)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                const start = at - $c5180d514db3051c$var$currentBufferPtr + $c5180d514db3051c$var$currentBufferRef.byteOffset;
                return $c5180d514db3051c$var$currentParser.onHeaderField(new $c5180d514db3051c$var$FastBuffer($c5180d514db3051c$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_header_value: (p, at, len)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                const start = at - $c5180d514db3051c$var$currentBufferPtr + $c5180d514db3051c$var$currentBufferRef.byteOffset;
                return $c5180d514db3051c$var$currentParser.onHeaderValue(new $c5180d514db3051c$var$FastBuffer($c5180d514db3051c$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_headers_complete: (p, statusCode, upgrade, shouldKeepAlive)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                return $c5180d514db3051c$var$currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
            },
            wasm_on_body: (p, at, len)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                const start = at - $c5180d514db3051c$var$currentBufferPtr + $c5180d514db3051c$var$currentBufferRef.byteOffset;
                return $c5180d514db3051c$var$currentParser.onBody(new $c5180d514db3051c$var$FastBuffer($c5180d514db3051c$var$currentBufferRef.buffer, start, len)) || 0;
            },
            wasm_on_message_complete: (p)=>{
                $fGUYC$assert.strictEqual($c5180d514db3051c$var$currentParser.ptr, p);
                return $c5180d514db3051c$var$currentParser.onMessageComplete() || 0;
            }
        }
    });
}
let $c5180d514db3051c$var$llhttpInstance = null;
let $c5180d514db3051c$var$llhttpPromise = $c5180d514db3051c$var$lazyllhttp();
$c5180d514db3051c$var$llhttpPromise.catch();
let $c5180d514db3051c$var$currentParser = null;
let $c5180d514db3051c$var$currentBufferRef = null;
let $c5180d514db3051c$var$currentBufferSize = 0;
let $c5180d514db3051c$var$currentBufferPtr = null;
const $c5180d514db3051c$var$TIMEOUT_HEADERS = 1;
const $c5180d514db3051c$var$TIMEOUT_BODY = 2;
const $c5180d514db3051c$var$TIMEOUT_IDLE = 3;
class $c5180d514db3051c$var$Parser {
    constructor(client, socket, { exports: exports }){
        $fGUYC$assert(Number.isFinite(client[$c5180d514db3051c$require$kMaxHeadersSize]) && client[$c5180d514db3051c$require$kMaxHeadersSize] > 0);
        this.llhttp = exports;
        this.ptr = this.llhttp.llhttp_alloc($d9e7c6b8f40f146d$exports.TYPE.RESPONSE);
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
        this.headersMaxSize = client[$c5180d514db3051c$require$kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = '';
        this.contentLength = '';
        this.connection = '';
        this.maxResponseSize = client[$c5180d514db3051c$require$kMaxResponseSize];
    }
    setTimeout(value, type) {
        this.timeoutType = type;
        if (value !== this.timeoutValue) {
            $ba7cb4efef22156a$exports.clearTimeout(this.timeout);
            if (value) {
                this.timeout = $ba7cb4efef22156a$exports.setTimeout($c5180d514db3051c$var$onParserTimeout, value, this);
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
        $fGUYC$assert(this.ptr != null);
        $fGUYC$assert($c5180d514db3051c$var$currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        $fGUYC$assert(this.timeoutType === $c5180d514db3051c$var$TIMEOUT_BODY);
        if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        this.paused = false;
        this.execute(this.socket.read() || $c5180d514db3051c$var$EMPTY_BUF) // Flush parser.
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
        $fGUYC$assert(this.ptr != null);
        $fGUYC$assert($c5180d514db3051c$var$currentParser == null);
        $fGUYC$assert(!this.paused);
        const { socket: socket, llhttp: llhttp } = this;
        if (data.length > $c5180d514db3051c$var$currentBufferSize) {
            if ($c5180d514db3051c$var$currentBufferPtr) llhttp.free($c5180d514db3051c$var$currentBufferPtr);
            $c5180d514db3051c$var$currentBufferSize = Math.ceil(data.length / 4096) * 4096;
            $c5180d514db3051c$var$currentBufferPtr = llhttp.malloc($c5180d514db3051c$var$currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, $c5180d514db3051c$var$currentBufferPtr, $c5180d514db3051c$var$currentBufferSize).set(data);
        // Call `execute` on the wasm parser.
        // We pass the `llhttp_parser` pointer address, the pointer address of buffer view data,
        // and finally the length of bytes to parse.
        // The return value is an error code or `constants.ERROR.OK`.
        try {
            let ret;
            try {
                $c5180d514db3051c$var$currentBufferRef = data;
                $c5180d514db3051c$var$currentParser = this;
                ret = llhttp.llhttp_execute(this.ptr, $c5180d514db3051c$var$currentBufferPtr, data.length);
            /* eslint-disable-next-line no-useless-catch */ } catch (err) {
                /* istanbul ignore next: difficult to make a test case for */ throw err;
            } finally{
                $c5180d514db3051c$var$currentParser = null;
                $c5180d514db3051c$var$currentBufferRef = null;
            }
            const offset = llhttp.llhttp_get_error_pos(this.ptr) - $c5180d514db3051c$var$currentBufferPtr;
            if (ret === $d9e7c6b8f40f146d$exports.ERROR.PAUSED_UPGRADE) this.onUpgrade(data.slice(offset));
            else if (ret === $d9e7c6b8f40f146d$exports.ERROR.PAUSED) {
                this.paused = true;
                socket.unshift(data.slice(offset));
            } else if (ret !== $d9e7c6b8f40f146d$exports.ERROR.OK) {
                const ptr = llhttp.llhttp_get_error_reason(this.ptr);
                let message = '';
                /* istanbul ignore else: difficult to make a test case for */ if (ptr) {
                    const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
                    message = 'Response does not match the HTTP/1.1 protocol (' + Buffer.from(llhttp.memory.buffer, ptr, len).toString() + ')';
                }
                throw new $c5180d514db3051c$require$HTTPParserError(message, $d9e7c6b8f40f146d$exports.ERROR[ret], data.slice(offset));
            }
        } catch (err) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, err);
        }
    }
    destroy() {
        $fGUYC$assert(this.ptr != null);
        $fGUYC$assert($c5180d514db3051c$var$currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        $ba7cb4efef22156a$exports.clearTimeout(this.timeout);
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
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
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
        if (this.headersSize >= this.headersMaxSize) $ab5d1b7bdebc55f8$exports.destroy(this.socket, new $c5180d514db3051c$require$HeadersOverflowError());
    }
    onUpgrade(head) {
        const { upgrade: upgrade, client: client, socket: socket, headers: headers, statusCode: statusCode } = this;
        $fGUYC$assert(upgrade);
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        $fGUYC$assert(request);
        $fGUYC$assert(!socket.destroyed);
        $fGUYC$assert(socket === client[$c5180d514db3051c$require$kSocket]);
        $fGUYC$assert(!this.paused);
        $fGUYC$assert(request.upgrade || request.method === 'CONNECT');
        this.statusCode = null;
        this.statusText = '';
        this.shouldKeepAlive = null;
        $fGUYC$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[$c5180d514db3051c$require$kParser].destroy();
        socket[$c5180d514db3051c$require$kParser] = null;
        socket[$c5180d514db3051c$require$kClient] = null;
        socket[$c5180d514db3051c$require$kError] = null;
        socket.removeListener('error', $c5180d514db3051c$var$onSocketError).removeListener('readable', $c5180d514db3051c$var$onSocketReadable).removeListener('end', $c5180d514db3051c$var$onSocketEnd).removeListener('close', $c5180d514db3051c$var$onSocketClose);
        client[$c5180d514db3051c$require$kSocket] = null;
        client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]++] = null;
        client.emit('disconnect', client[$c5180d514db3051c$require$kUrl], [
            client
        ], new $c5180d514db3051c$require$InformationalError('upgrade'));
        try {
            request.onUpgrade(statusCode, headers, socket);
        } catch (err) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, err);
        }
        $c5180d514db3051c$var$resume(client);
    }
    onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client: client, socket: socket, headers: headers, statusText: statusText } = this;
        /* istanbul ignore next: difficult to make a test case for */ if (socket.destroyed) return -1;
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        /* istanbul ignore next: difficult to make a test case for */ if (!request) return -1;
        $fGUYC$assert(!this.upgrade);
        $fGUYC$assert(this.statusCode < 200);
        if (statusCode === 100) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$SocketError('bad response', $ab5d1b7bdebc55f8$exports.getSocketInfo(socket)));
            return -1;
        }
        /* this can only happen if server is misbehaving */ if (upgrade && !request.upgrade) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$SocketError('bad upgrade', $ab5d1b7bdebc55f8$exports.getSocketInfo(socket)));
            return -1;
        }
        $fGUYC$assert.strictEqual(this.timeoutType, $c5180d514db3051c$var$TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive || // Override llhttp value which does not allow keepAlive for HEAD.
        request.method === 'HEAD' && !socket[$c5180d514db3051c$require$kReset] && this.connection.toLowerCase() === 'keep-alive';
        if (this.statusCode >= 200) {
            const bodyTimeout = request.bodyTimeout != null ? request.bodyTimeout : client[$c5180d514db3051c$require$kBodyTimeout];
            this.setTimeout(bodyTimeout, $c5180d514db3051c$var$TIMEOUT_BODY);
        } else if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        if (request.method === 'CONNECT') {
            $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        if (upgrade) {
            $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        $fGUYC$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (this.shouldKeepAlive && client[$c5180d514db3051c$require$kPipelining]) {
            const keepAliveTimeout = this.keepAlive ? $ab5d1b7bdebc55f8$exports.parseKeepAliveTimeout(this.keepAlive) : null;
            if (keepAliveTimeout != null) {
                const timeout = Math.min(keepAliveTimeout - client[$c5180d514db3051c$require$kKeepAliveTimeoutThreshold], client[$c5180d514db3051c$require$kKeepAliveMaxTimeout]);
                if (timeout <= 0) socket[$c5180d514db3051c$require$kReset] = true;
                else client[$c5180d514db3051c$require$kKeepAliveTimeoutValue] = timeout;
            } else client[$c5180d514db3051c$require$kKeepAliveTimeoutValue] = client[$c5180d514db3051c$require$kKeepAliveDefaultTimeout];
        } else // Stop more requests from being dispatched.
        socket[$c5180d514db3051c$require$kReset] = true;
        const pause = request.onHeaders(statusCode, headers, this.resume, statusText) === false;
        if (request.aborted) return -1;
        if (request.method === 'HEAD') return 1;
        if (statusCode < 200) return 1;
        if (socket[$c5180d514db3051c$require$kBlocking]) {
            socket[$c5180d514db3051c$require$kBlocking] = false;
            $c5180d514db3051c$var$resume(client);
        }
        return pause ? $d9e7c6b8f40f146d$exports.ERROR.PAUSED : 0;
    }
    onBody(buf) {
        const { client: client, socket: socket, statusCode: statusCode, maxResponseSize: maxResponseSize } = this;
        if (socket.destroyed) return -1;
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        $fGUYC$assert(request);
        $fGUYC$assert.strictEqual(this.timeoutType, $c5180d514db3051c$var$TIMEOUT_BODY);
        if (this.timeout) // istanbul ignore else: only for jest
        {
            if (this.timeout.refresh) this.timeout.refresh();
        }
        $fGUYC$assert(statusCode >= 200);
        if (maxResponseSize > -1 && this.bytesRead + buf.length > maxResponseSize) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$ResponseExceededMaxSizeError());
            return -1;
        }
        this.bytesRead += buf.length;
        if (request.onData(buf) === false) return $d9e7c6b8f40f146d$exports.ERROR.PAUSED;
    }
    onMessageComplete() {
        const { client: client, socket: socket, statusCode: statusCode, upgrade: upgrade, headers: headers, contentLength: contentLength, bytesRead: bytesRead, shouldKeepAlive: shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) return -1;
        if (upgrade) return;
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        $fGUYC$assert(request);
        $fGUYC$assert(statusCode >= 100);
        this.statusCode = null;
        this.statusText = '';
        this.bytesRead = 0;
        this.contentLength = '';
        this.keepAlive = '';
        this.connection = '';
        $fGUYC$assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) return;
        /* istanbul ignore next: should be handled by llhttp? */ if (request.method !== 'HEAD' && contentLength && bytesRead !== parseInt(contentLength, 10)) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$ResponseContentLengthMismatchError());
            return -1;
        }
        request.onComplete(headers);
        client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]++] = null;
        if (socket[$c5180d514db3051c$require$kWriting]) {
            $fGUYC$assert.strictEqual(client[$c5180d514db3051c$require$kRunning], 0);
            // Response completed before request.
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('reset'));
            return $d9e7c6b8f40f146d$exports.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('reset'));
            return $d9e7c6b8f40f146d$exports.ERROR.PAUSED;
        } else if (socket[$c5180d514db3051c$require$kReset] && client[$c5180d514db3051c$require$kRunning] === 0) {
            // Destroy socket once all requests have completed.
            // The request at the tail of the pipeline is the one
            // that requested reset and no further requests should
            // have been queued since then.
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('reset'));
            return $d9e7c6b8f40f146d$exports.ERROR.PAUSED;
        } else if (client[$c5180d514db3051c$require$kPipelining] === 1) // We must wait a full event loop cycle to reuse this socket to make sure
        // that non-spec compliant servers are not closing the connection even if they
        // said they won't.
        setImmediate($c5180d514db3051c$var$resume, client);
        else $c5180d514db3051c$var$resume(client);
    }
}
function $c5180d514db3051c$var$onParserTimeout(parser) {
    const { socket: socket, timeoutType: timeoutType, client: client } = parser;
    /* istanbul ignore else */ if (timeoutType === $c5180d514db3051c$var$TIMEOUT_HEADERS) {
        if (!socket[$c5180d514db3051c$require$kWriting] || socket.writableNeedDrain || client[$c5180d514db3051c$require$kRunning] > 1) {
            $fGUYC$assert(!parser.paused, 'cannot be paused while waiting for headers');
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$HeadersTimeoutError());
        }
    } else if (timeoutType === $c5180d514db3051c$var$TIMEOUT_BODY) {
        if (!parser.paused) $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$BodyTimeoutError());
    } else if (timeoutType === $c5180d514db3051c$var$TIMEOUT_IDLE) {
        $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 0 && client[$c5180d514db3051c$require$kKeepAliveTimeoutValue]);
        $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('socket idle timeout'));
    }
}
function $c5180d514db3051c$var$onSocketReadable() {
    const { [$c5180d514db3051c$require$kParser]: parser } = this;
    if (parser) parser.readMore();
}
function $c5180d514db3051c$var$onSocketError(err) {
    const { [$c5180d514db3051c$require$kClient]: client, [$c5180d514db3051c$require$kParser]: parser } = this;
    $fGUYC$assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] !== 'h2') // On Mac OS, we get an ECONNRESET even if there is a full body to be forwarded
    // to the user.
    {
        if (err.code === 'ECONNRESET' && parser.statusCode && !parser.shouldKeepAlive) {
            // We treat all incoming data so for as a valid response.
            parser.onMessageComplete();
            return;
        }
    }
    this[$c5180d514db3051c$require$kError] = err;
    $c5180d514db3051c$var$onError(this[$c5180d514db3051c$require$kClient], err);
}
function $c5180d514db3051c$var$onError(client, err) {
    if (client[$c5180d514db3051c$require$kRunning] === 0 && err.code !== 'UND_ERR_INFO' && err.code !== 'UND_ERR_SOCKET') {
        // Error is not caused by running request and not a recoverable
        // socket error.
        $fGUYC$assert(client[$c5180d514db3051c$require$kPendingIdx] === client[$c5180d514db3051c$require$kRunningIdx]);
        const requests = client[$c5180d514db3051c$require$kQueue].splice(client[$c5180d514db3051c$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $c5180d514db3051c$var$errorRequest(client, request, err);
        }
        $fGUYC$assert(client[$c5180d514db3051c$require$kSize] === 0);
    }
}
function $c5180d514db3051c$var$onSocketEnd() {
    const { [$c5180d514db3051c$require$kParser]: parser, [$c5180d514db3051c$require$kClient]: client } = this;
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] !== 'h2') {
        if (parser.statusCode && !parser.shouldKeepAlive) {
            // We treat all incoming data so far as a valid response.
            parser.onMessageComplete();
            return;
        }
    }
    $ab5d1b7bdebc55f8$exports.destroy(this, new $c5180d514db3051c$require$SocketError('other side closed', $ab5d1b7bdebc55f8$exports.getSocketInfo(this)));
}
function $c5180d514db3051c$var$onSocketClose() {
    const { [$c5180d514db3051c$require$kClient]: client, [$c5180d514db3051c$require$kParser]: parser } = this;
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] === 'h1' && parser) {
        if (!this[$c5180d514db3051c$require$kError] && parser.statusCode && !parser.shouldKeepAlive) // We treat all incoming data so far as a valid response.
        parser.onMessageComplete();
        this[$c5180d514db3051c$require$kParser].destroy();
        this[$c5180d514db3051c$require$kParser] = null;
    }
    const err = this[$c5180d514db3051c$require$kError] || new $c5180d514db3051c$require$SocketError('closed', $ab5d1b7bdebc55f8$exports.getSocketInfo(this));
    client[$c5180d514db3051c$require$kSocket] = null;
    if (client.destroyed) {
        $fGUYC$assert(client[$c5180d514db3051c$require$kPending] === 0);
        // Fail entire queue.
        const requests = client[$c5180d514db3051c$require$kQueue].splice(client[$c5180d514db3051c$require$kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            $c5180d514db3051c$var$errorRequest(client, request, err);
        }
    } else if (client[$c5180d514db3051c$require$kRunning] > 0 && err.code !== 'UND_ERR_INFO') {
        // Fail head of pipeline.
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
        client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]++] = null;
        $c5180d514db3051c$var$errorRequest(client, request, err);
    }
    client[$c5180d514db3051c$require$kPendingIdx] = client[$c5180d514db3051c$require$kRunningIdx];
    $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 0);
    client.emit('disconnect', client[$c5180d514db3051c$require$kUrl], [
        client
    ], err);
    $c5180d514db3051c$var$resume(client);
}
async function $c5180d514db3051c$var$connect(client) {
    $fGUYC$assert(!client[$c5180d514db3051c$require$kConnecting]);
    $fGUYC$assert(!client[$c5180d514db3051c$require$kSocket]);
    let { host: host, hostname: hostname, protocol: protocol, port: port } = client[$c5180d514db3051c$require$kUrl];
    // Resolve ipv6
    if (hostname[0] === '[') {
        const idx = hostname.indexOf(']');
        $fGUYC$assert(idx !== -1);
        const ip = hostname.substring(1, idx);
        $fGUYC$assert($fGUYC$net.isIP(ip));
        hostname = ip;
    }
    client[$c5180d514db3051c$require$kConnecting] = true;
    if ($c5180d514db3051c$var$channels.beforeConnect.hasSubscribers) $c5180d514db3051c$var$channels.beforeConnect.publish({
        connectParams: {
            host: host,
            hostname: hostname,
            protocol: protocol,
            port: port,
            servername: client[$c5180d514db3051c$require$kServerName],
            localAddress: client[$c5180d514db3051c$require$kLocalAddress]
        },
        connector: client[$c5180d514db3051c$require$kConnector]
    });
    try {
        const socket = await new Promise((resolve, reject)=>{
            client[$c5180d514db3051c$require$kConnector]({
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$c5180d514db3051c$require$kServerName],
                localAddress: client[$c5180d514db3051c$require$kLocalAddress]
            }, (err, socket)=>{
                if (err) reject(err);
                else resolve(socket);
            });
        });
        if (client.destroyed) {
            $ab5d1b7bdebc55f8$exports.destroy(socket.on('error', ()=>{}), new $c5180d514db3051c$require$ClientDestroyedError());
            return;
        }
        client[$c5180d514db3051c$require$kConnecting] = false;
        $fGUYC$assert(socket);
        const isH2 = socket.alpnProtocol === 'h2';
        if (isH2) {
            if (!$c5180d514db3051c$var$h2ExperimentalWarned) {
                $c5180d514db3051c$var$h2ExperimentalWarned = true;
                process.emitWarning('H2 support is experimental, expect them to change at any time.', {
                    code: 'UNDICI-H2'
                });
            }
            const session = $c5180d514db3051c$var$http2.connect(client[$c5180d514db3051c$require$kUrl], {
                createConnection: ()=>socket,
                peerMaxConcurrentStreams: client[$c5180d514db3051c$require$kHTTP2SessionState].maxConcurrentStreams
            });
            client[$c5180d514db3051c$require$kHTTPConnVersion] = 'h2';
            session[$c5180d514db3051c$require$kClient] = client;
            session[$c5180d514db3051c$require$kSocket] = socket;
            session.on('error', $c5180d514db3051c$var$onHttp2SessionError);
            session.on('frameError', $c5180d514db3051c$var$onHttp2FrameError);
            session.on('end', $c5180d514db3051c$var$onHttp2SessionEnd);
            session.on('goaway', $c5180d514db3051c$var$onHTTP2GoAway);
            session.on('close', $c5180d514db3051c$var$onSocketClose);
            session.unref();
            client[$c5180d514db3051c$require$kHTTP2Session] = session;
            socket[$c5180d514db3051c$require$kHTTP2Session] = session;
        } else {
            if (!$c5180d514db3051c$var$llhttpInstance) {
                $c5180d514db3051c$var$llhttpInstance = await $c5180d514db3051c$var$llhttpPromise;
                $c5180d514db3051c$var$llhttpPromise = null;
            }
            socket[$c5180d514db3051c$require$kNoRef] = false;
            socket[$c5180d514db3051c$require$kWriting] = false;
            socket[$c5180d514db3051c$require$kReset] = false;
            socket[$c5180d514db3051c$require$kBlocking] = false;
            socket[$c5180d514db3051c$require$kParser] = new $c5180d514db3051c$var$Parser(client, socket, $c5180d514db3051c$var$llhttpInstance);
        }
        socket[$c5180d514db3051c$require$kCounter] = 0;
        socket[$c5180d514db3051c$require$kMaxRequests] = client[$c5180d514db3051c$require$kMaxRequests];
        socket[$c5180d514db3051c$require$kClient] = client;
        socket[$c5180d514db3051c$require$kError] = null;
        socket.on('error', $c5180d514db3051c$var$onSocketError).on('readable', $c5180d514db3051c$var$onSocketReadable).on('end', $c5180d514db3051c$var$onSocketEnd).on('close', $c5180d514db3051c$var$onSocketClose);
        client[$c5180d514db3051c$require$kSocket] = socket;
        if ($c5180d514db3051c$var$channels.connected.hasSubscribers) $c5180d514db3051c$var$channels.connected.publish({
            connectParams: {
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$c5180d514db3051c$require$kServerName],
                localAddress: client[$c5180d514db3051c$require$kLocalAddress]
            },
            connector: client[$c5180d514db3051c$require$kConnector],
            socket: socket
        });
        client.emit('connect', client[$c5180d514db3051c$require$kUrl], [
            client
        ]);
    } catch (err) {
        if (client.destroyed) return;
        client[$c5180d514db3051c$require$kConnecting] = false;
        if ($c5180d514db3051c$var$channels.connectError.hasSubscribers) $c5180d514db3051c$var$channels.connectError.publish({
            connectParams: {
                host: host,
                hostname: hostname,
                protocol: protocol,
                port: port,
                servername: client[$c5180d514db3051c$require$kServerName],
                localAddress: client[$c5180d514db3051c$require$kLocalAddress]
            },
            connector: client[$c5180d514db3051c$require$kConnector],
            error: err
        });
        if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
            $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] === 0);
            while(client[$c5180d514db3051c$require$kPending] > 0 && client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kPendingIdx]].servername === client[$c5180d514db3051c$require$kServerName]){
                const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kPendingIdx]++];
                $c5180d514db3051c$var$errorRequest(client, request, err);
            }
        } else $c5180d514db3051c$var$onError(client, err);
        client.emit('connectionError', client[$c5180d514db3051c$require$kUrl], [
            client
        ], err);
    }
    $c5180d514db3051c$var$resume(client);
}
function $c5180d514db3051c$var$emitDrain(client) {
    client[$c5180d514db3051c$require$kNeedDrain] = 0;
    client.emit('drain', client[$c5180d514db3051c$require$kUrl], [
        client
    ]);
}
function $c5180d514db3051c$var$resume(client, sync) {
    if (client[$c5180d514db3051c$require$kResuming] === 2) return;
    client[$c5180d514db3051c$require$kResuming] = 2;
    $c5180d514db3051c$var$_resume(client, sync);
    client[$c5180d514db3051c$require$kResuming] = 0;
    if (client[$c5180d514db3051c$require$kRunningIdx] > 256) {
        client[$c5180d514db3051c$require$kQueue].splice(0, client[$c5180d514db3051c$require$kRunningIdx]);
        client[$c5180d514db3051c$require$kPendingIdx] -= client[$c5180d514db3051c$require$kRunningIdx];
        client[$c5180d514db3051c$require$kRunningIdx] = 0;
    }
}
function $c5180d514db3051c$var$_resume(client, sync) {
    while(true){
        if (client.destroyed) {
            $fGUYC$assert(client[$c5180d514db3051c$require$kPending] === 0);
            return;
        }
        if (client[$c5180d514db3051c$var$kClosedResolve] && !client[$c5180d514db3051c$require$kSize]) {
            client[$c5180d514db3051c$var$kClosedResolve]();
            client[$c5180d514db3051c$var$kClosedResolve] = null;
            return;
        }
        const socket = client[$c5180d514db3051c$require$kSocket];
        if (socket && !socket.destroyed && socket.alpnProtocol !== 'h2') {
            if (client[$c5180d514db3051c$require$kSize] === 0) {
                if (!socket[$c5180d514db3051c$require$kNoRef] && socket.unref) {
                    socket.unref();
                    socket[$c5180d514db3051c$require$kNoRef] = true;
                }
            } else if (socket[$c5180d514db3051c$require$kNoRef] && socket.ref) {
                socket.ref();
                socket[$c5180d514db3051c$require$kNoRef] = false;
            }
            if (client[$c5180d514db3051c$require$kSize] === 0) {
                if (socket[$c5180d514db3051c$require$kParser].timeoutType !== $c5180d514db3051c$var$TIMEOUT_IDLE) socket[$c5180d514db3051c$require$kParser].setTimeout(client[$c5180d514db3051c$require$kKeepAliveTimeoutValue], $c5180d514db3051c$var$TIMEOUT_IDLE);
            } else if (client[$c5180d514db3051c$require$kRunning] > 0 && socket[$c5180d514db3051c$require$kParser].statusCode < 200) {
                if (socket[$c5180d514db3051c$require$kParser].timeoutType !== $c5180d514db3051c$var$TIMEOUT_HEADERS) {
                    const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kRunningIdx]];
                    const headersTimeout = request.headersTimeout != null ? request.headersTimeout : client[$c5180d514db3051c$require$kHeadersTimeout];
                    socket[$c5180d514db3051c$require$kParser].setTimeout(headersTimeout, $c5180d514db3051c$var$TIMEOUT_HEADERS);
                }
            }
        }
        if (client[$c5180d514db3051c$require$kBusy]) client[$c5180d514db3051c$require$kNeedDrain] = 2;
        else if (client[$c5180d514db3051c$require$kNeedDrain] === 2) {
            if (sync) {
                client[$c5180d514db3051c$require$kNeedDrain] = 1;
                process.nextTick($c5180d514db3051c$var$emitDrain, client);
            } else $c5180d514db3051c$var$emitDrain(client);
            continue;
        }
        if (client[$c5180d514db3051c$require$kPending] === 0) return;
        if (client[$c5180d514db3051c$require$kRunning] >= (client[$c5180d514db3051c$require$kPipelining] || 1)) return;
        const request = client[$c5180d514db3051c$require$kQueue][client[$c5180d514db3051c$require$kPendingIdx]];
        if (client[$c5180d514db3051c$require$kUrl].protocol === 'https:' && client[$c5180d514db3051c$require$kServerName] !== request.servername) {
            if (client[$c5180d514db3051c$require$kRunning] > 0) return;
            client[$c5180d514db3051c$require$kServerName] = request.servername;
            if (socket && socket.servername !== request.servername) {
                $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('servername changed'));
                return;
            }
        }
        if (client[$c5180d514db3051c$require$kConnecting]) return;
        if (!socket && !client[$c5180d514db3051c$require$kHTTP2Session]) {
            $c5180d514db3051c$var$connect(client);
            return;
        }
        if (socket.destroyed || socket[$c5180d514db3051c$require$kWriting] || socket[$c5180d514db3051c$require$kReset] || socket[$c5180d514db3051c$require$kBlocking]) return;
        if (client[$c5180d514db3051c$require$kRunning] > 0 && !request.idempotent) // Non-idempotent request cannot be retried.
        // Ensure that no other requests are inflight and
        // could cause failure.
        return;
        if (client[$c5180d514db3051c$require$kRunning] > 0 && (request.upgrade || request.method === 'CONNECT')) // Don't dispatch an upgrade until all preceding requests have completed.
        // A misbehaving server might upgrade the connection before all pipelined
        // request has completed.
        return;
        if (client[$c5180d514db3051c$require$kRunning] > 0 && $ab5d1b7bdebc55f8$exports.bodyLength(request.body) !== 0 && ($ab5d1b7bdebc55f8$exports.isStream(request.body) || $ab5d1b7bdebc55f8$exports.isAsyncIterable(request.body))) // Request with stream or iterator body can error while other requests
        // are inflight and indirectly error those as well.
        // Ensure this doesn't happen by waiting for inflight
        // to complete before dispatching.
        // Request with stream or iterator body cannot be retried.
        // Ensure that no other requests are inflight and
        // could cause failure.
        return;
        if (!request.aborted && $c5180d514db3051c$var$write(client, request)) client[$c5180d514db3051c$require$kPendingIdx]++;
        else client[$c5180d514db3051c$require$kQueue].splice(client[$c5180d514db3051c$require$kPendingIdx], 1);
    }
}
// https://www.rfc-editor.org/rfc/rfc7230#section-3.3.2
function $c5180d514db3051c$var$shouldSendContentLength(method) {
    return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS' && method !== 'TRACE' && method !== 'CONNECT';
}
function $c5180d514db3051c$var$write(client, request) {
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] === 'h2') {
        $c5180d514db3051c$var$writeH2(client, client[$c5180d514db3051c$require$kHTTP2Session], request);
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
    const bodyLength = $ab5d1b7bdebc55f8$exports.bodyLength(body);
    let contentLength = bodyLength;
    if (contentLength === null) contentLength = request.contentLength;
    if (contentLength === 0 && !expectsPayload) // https://tools.ietf.org/html/rfc7230#section-3.3.2
    // A user agent SHOULD NOT send a Content-Length header field when
    // the request message does not contain a payload body and the method
    // semantics do not anticipate such a body.
    contentLength = null;
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if ($c5180d514db3051c$var$shouldSendContentLength(method) && contentLength > 0 && request.contentLength !== null && request.contentLength !== contentLength) {
        if (client[$c5180d514db3051c$require$kStrictContentLength]) {
            $c5180d514db3051c$var$errorRequest(client, request, new $c5180d514db3051c$require$RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new $c5180d514db3051c$require$RequestContentLengthMismatchError());
    }
    const socket = client[$c5180d514db3051c$require$kSocket];
    try {
        request.onConnect((err)=>{
            if (request.aborted || request.completed) return;
            $c5180d514db3051c$var$errorRequest(client, request, err || new $c5180d514db3051c$require$RequestAbortedError());
            $ab5d1b7bdebc55f8$exports.destroy(socket, new $c5180d514db3051c$require$InformationalError('aborted'));
        });
    } catch (err) {
        $c5180d514db3051c$var$errorRequest(client, request, err);
    }
    if (request.aborted) return false;
    if (method === 'HEAD') // https://github.com/mcollina/undici/issues/258
    // Close after a HEAD request to interop with misbehaving servers
    // that may send a body in the response.
    socket[$c5180d514db3051c$require$kReset] = true;
    if (upgrade || method === 'CONNECT') // On CONNECT or upgrade, block pipeline from dispatching further
    // requests on this connection.
    socket[$c5180d514db3051c$require$kReset] = true;
    if (reset != null) socket[$c5180d514db3051c$require$kReset] = reset;
    if (client[$c5180d514db3051c$require$kMaxRequests] && socket[$c5180d514db3051c$require$kCounter]++ >= client[$c5180d514db3051c$require$kMaxRequests]) socket[$c5180d514db3051c$require$kReset] = true;
    if (blocking) socket[$c5180d514db3051c$require$kBlocking] = true;
    let header = `${method} ${path} HTTP/1.1\r\n`;
    if (typeof host === 'string') header += `host: ${host}\r\n`;
    else header += client[$c5180d514db3051c$require$kHostHeader];
    if (upgrade) header += `connection: upgrade\r\nupgrade: ${upgrade}\r\n`;
    else if (client[$c5180d514db3051c$require$kPipelining] && !socket[$c5180d514db3051c$require$kReset]) header += 'connection: keep-alive\r\n';
    else header += 'connection: close\r\n';
    if (headers) header += headers;
    if ($c5180d514db3051c$var$channels.sendHeaders.hasSubscribers) $c5180d514db3051c$var$channels.sendHeaders.publish({
        request: request,
        headers: header,
        socket: socket
    });
    /* istanbul ignore else: assertion */ if (!body || bodyLength === 0) {
        if (contentLength === 0) socket.write(`${header}content-length: 0\r\n\r\n`, 'latin1');
        else {
            $fGUYC$assert(contentLength === null, 'no body must not have content length');
            socket.write(`${header}\r\n`, 'latin1');
        }
        request.onRequestSent();
    } else if ($ab5d1b7bdebc55f8$exports.isBuffer(body)) {
        $fGUYC$assert(contentLength === body.byteLength, 'buffer body must have content length');
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
        socket.write(body);
        socket.uncork();
        request.onBodySent(body);
        request.onRequestSent();
        if (!expectsPayload) socket[$c5180d514db3051c$require$kReset] = true;
    } else if ($ab5d1b7bdebc55f8$exports.isBlobLike(body)) {
        if (typeof body.stream === 'function') $c5180d514db3051c$var$writeIterable({
            body: body.stream(),
            client: client,
            request: request,
            socket: socket,
            contentLength: contentLength,
            header: header,
            expectsPayload: expectsPayload
        });
        else $c5180d514db3051c$var$writeBlob({
            body: body,
            client: client,
            request: request,
            socket: socket,
            contentLength: contentLength,
            header: header,
            expectsPayload: expectsPayload
        });
    } else if ($ab5d1b7bdebc55f8$exports.isStream(body)) $c5180d514db3051c$var$writeStream({
        body: body,
        client: client,
        request: request,
        socket: socket,
        contentLength: contentLength,
        header: header,
        expectsPayload: expectsPayload
    });
    else if ($ab5d1b7bdebc55f8$exports.isIterable(body)) $c5180d514db3051c$var$writeIterable({
        body: body,
        client: client,
        request: request,
        socket: socket,
        contentLength: contentLength,
        header: header,
        expectsPayload: expectsPayload
    });
    else $fGUYC$assert(false);
    return true;
}
function $c5180d514db3051c$var$writeH2(client, session, request) {
    const { body: body, method: method, path: path, host: host, upgrade: upgrade, expectContinue: expectContinue, signal: signal, headers: reqHeaders } = request;
    let headers;
    if (typeof reqHeaders === 'string') headers = $be3feb89804da37f$exports[$c5180d514db3051c$require$kHTTP2CopyHeaders](reqHeaders.trim());
    else headers = reqHeaders;
    if (upgrade) {
        $c5180d514db3051c$var$errorRequest(client, request, new Error('Upgrade not supported for H2'));
        return false;
    }
    try {
        // TODO(HTTP/2): Should we call onConnect immediately or on stream ready event?
        request.onConnect((err)=>{
            if (request.aborted || request.completed) return;
            $c5180d514db3051c$var$errorRequest(client, request, err || new $c5180d514db3051c$require$RequestAbortedError());
        });
    } catch (err) {
        $c5180d514db3051c$var$errorRequest(client, request, err);
    }
    if (request.aborted) return false;
    /** @type {import('node:http2').ClientHttp2Stream} */ let stream;
    const h2State = client[$c5180d514db3051c$require$kHTTP2SessionState];
    headers[$c5180d514db3051c$var$HTTP2_HEADER_AUTHORITY] = host || client[$c5180d514db3051c$require$kHost];
    headers[$c5180d514db3051c$var$HTTP2_HEADER_METHOD] = method;
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
    headers[$c5180d514db3051c$var$HTTP2_HEADER_PATH] = path;
    headers[$c5180d514db3051c$var$HTTP2_HEADER_SCHEME] = 'https';
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
    let contentLength = $ab5d1b7bdebc55f8$exports.bodyLength(body);
    if (contentLength == null) contentLength = request.contentLength;
    if (contentLength === 0 || !expectsPayload) // https://tools.ietf.org/html/rfc7230#section-3.3.2
    // A user agent SHOULD NOT send a Content-Length header field when
    // the request message does not contain a payload body and the method
    // semantics do not anticipate such a body.
    contentLength = null;
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if ($c5180d514db3051c$var$shouldSendContentLength(method) && contentLength > 0 && request.contentLength != null && request.contentLength !== contentLength) {
        if (client[$c5180d514db3051c$require$kStrictContentLength]) {
            $c5180d514db3051c$var$errorRequest(client, request, new $c5180d514db3051c$require$RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new $c5180d514db3051c$require$RequestContentLengthMismatchError());
    }
    if (contentLength != null) {
        $fGUYC$assert(body, 'no body must not have content length');
        headers[$c5180d514db3051c$var$HTTP2_HEADER_CONTENT_LENGTH] = `${contentLength}`;
    }
    session.ref();
    const shouldEndStream = method === 'GET' || method === 'HEAD';
    if (expectContinue) {
        headers[$c5180d514db3051c$var$HTTP2_HEADER_EXPECT] = '100-continue';
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
        const { [$c5180d514db3051c$var$HTTP2_HEADER_STATUS]: statusCode, ...realHeaders } = headers;
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
        if (client[$c5180d514db3051c$require$kHTTP2Session] && !client[$c5180d514db3051c$require$kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            $ab5d1b7bdebc55f8$exports.destroy(stream, err);
        }
    });
    stream.once('frameError', (type, code)=>{
        const err = new $c5180d514db3051c$require$InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`);
        $c5180d514db3051c$var$errorRequest(client, request, err);
        if (client[$c5180d514db3051c$require$kHTTP2Session] && !client[$c5180d514db3051c$require$kHTTP2Session].destroyed && !this.closed && !this.destroyed) {
            h2State.streams -= 1;
            $ab5d1b7bdebc55f8$exports.destroy(stream, err);
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
        else if ($ab5d1b7bdebc55f8$exports.isBuffer(body)) {
            $fGUYC$assert(contentLength === body.byteLength, 'buffer body must have content length');
            stream.cork();
            stream.write(body);
            stream.uncork();
            stream.end();
            request.onBodySent(body);
            request.onRequestSent();
        } else if ($ab5d1b7bdebc55f8$exports.isBlobLike(body)) {
            if (typeof body.stream === 'function') $c5180d514db3051c$var$writeIterable({
                client: client,
                request: request,
                contentLength: contentLength,
                h2stream: stream,
                expectsPayload: expectsPayload,
                body: body.stream(),
                socket: client[$c5180d514db3051c$require$kSocket],
                header: ''
            });
            else $c5180d514db3051c$var$writeBlob({
                body: body,
                client: client,
                request: request,
                contentLength: contentLength,
                expectsPayload: expectsPayload,
                h2stream: stream,
                header: '',
                socket: client[$c5180d514db3051c$require$kSocket]
            });
        } else if ($ab5d1b7bdebc55f8$exports.isStream(body)) $c5180d514db3051c$var$writeStream({
            body: body,
            client: client,
            request: request,
            contentLength: contentLength,
            expectsPayload: expectsPayload,
            socket: client[$c5180d514db3051c$require$kSocket],
            h2stream: stream,
            header: ''
        });
        else if ($ab5d1b7bdebc55f8$exports.isIterable(body)) $c5180d514db3051c$var$writeIterable({
            body: body,
            client: client,
            request: request,
            contentLength: contentLength,
            expectsPayload: expectsPayload,
            header: '',
            h2stream: stream,
            socket: client[$c5180d514db3051c$require$kSocket]
        });
        else $fGUYC$assert(false);
    }
}
function $c5180d514db3051c$var$writeStream({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $fGUYC$assert(contentLength !== 0 || client[$c5180d514db3051c$require$kRunning] === 0, 'stream body cannot be pipelined');
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] === 'h2') {
        // For HTTP/2, is enough to pipe the stream
        const pipe = $c5180d514db3051c$require$pipeline(body, h2stream, (err)=>{
            if (err) {
                $ab5d1b7bdebc55f8$exports.destroy(body, err);
                $ab5d1b7bdebc55f8$exports.destroy(h2stream, err);
            } else request.onRequestSent();
        });
        pipe.on('data', onPipeData);
        pipe.once('end', ()=>{
            pipe.removeListener('data', onPipeData);
            $ab5d1b7bdebc55f8$exports.destroy(pipe);
        });
        function onPipeData(chunk) {
            request.onBodySent(chunk);
        }
        return;
    }
    let finished = false;
    const writer = new $c5180d514db3051c$var$AsyncWriter({
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
            $ab5d1b7bdebc55f8$exports.destroy(this, err);
        }
    };
    const onDrain = function() {
        if (finished) return;
        if (body.resume) body.resume();
    };
    const onAbort = function() {
        if (finished) return;
        const err = new $c5180d514db3051c$require$RequestAbortedError();
        queueMicrotask(()=>onFinished(err));
    };
    const onFinished = function(err) {
        if (finished) return;
        finished = true;
        $fGUYC$assert(socket.destroyed || socket[$c5180d514db3051c$require$kWriting] && client[$c5180d514db3051c$require$kRunning] <= 1);
        socket.off('drain', onDrain).off('error', onFinished);
        body.removeListener('data', onData).removeListener('end', onFinished).removeListener('error', onFinished).removeListener('close', onAbort);
        if (!err) try {
            writer.end();
        } catch (er) {
            err = er;
        }
        writer.destroy(err);
        if (err && (err.code !== 'UND_ERR_INFO' || err.message !== 'reset')) $ab5d1b7bdebc55f8$exports.destroy(body, err);
        else $ab5d1b7bdebc55f8$exports.destroy(body);
    };
    body.on('data', onData).on('end', onFinished).on('error', onFinished).on('close', onAbort);
    if (body.resume) body.resume();
    socket.on('drain', onDrain).on('error', onFinished);
}
async function $c5180d514db3051c$var$writeBlob({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $fGUYC$assert(contentLength === body.size, 'blob body must have content length');
    const isH2 = client[$c5180d514db3051c$require$kHTTPConnVersion] === 'h2';
    try {
        if (contentLength != null && contentLength !== body.size) throw new $c5180d514db3051c$require$RequestContentLengthMismatchError();
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
        if (!expectsPayload) socket[$c5180d514db3051c$require$kReset] = true;
        $c5180d514db3051c$var$resume(client);
    } catch (err) {
        $ab5d1b7bdebc55f8$exports.destroy(isH2 ? h2stream : socket, err);
    }
}
async function $c5180d514db3051c$var$writeIterable({ h2stream: h2stream, body: body, client: client, request: request, socket: socket, contentLength: contentLength, header: header, expectsPayload: expectsPayload }) {
    $fGUYC$assert(contentLength !== 0 || client[$c5180d514db3051c$require$kRunning] === 0, 'iterator body cannot be pipelined');
    let callback = null;
    function onDrain() {
        if (callback) {
            const cb = callback;
            callback = null;
            cb();
        }
    }
    const waitForDrain = ()=>new Promise((resolve, reject)=>{
            $fGUYC$assert(callback === null);
            if (socket[$c5180d514db3051c$require$kError]) reject(socket[$c5180d514db3051c$require$kError]);
            else callback = resolve;
        });
    if (client[$c5180d514db3051c$require$kHTTPConnVersion] === 'h2') {
        h2stream.on('close', onDrain).on('drain', onDrain);
        try {
            // It's up to the user to somehow abort the async iterable.
            for await (const chunk of body){
                if (socket[$c5180d514db3051c$require$kError]) throw socket[$c5180d514db3051c$require$kError];
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
    const writer = new $c5180d514db3051c$var$AsyncWriter({
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
            if (socket[$c5180d514db3051c$require$kError]) throw socket[$c5180d514db3051c$require$kError];
            if (!writer.write(chunk)) await waitForDrain();
        }
        writer.end();
    } catch (err) {
        writer.destroy(err);
    } finally{
        socket.off('close', onDrain).off('drain', onDrain);
    }
}
class $c5180d514db3051c$var$AsyncWriter {
    constructor({ socket: socket, request: request, contentLength: contentLength, client: client, expectsPayload: expectsPayload, header: header }){
        this.socket = socket;
        this.request = request;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[$c5180d514db3051c$require$kWriting] = true;
    }
    write(chunk) {
        const { socket: socket, request: request, contentLength: contentLength, client: client, bytesWritten: bytesWritten, expectsPayload: expectsPayload, header: header } = this;
        if (socket[$c5180d514db3051c$require$kError]) throw socket[$c5180d514db3051c$require$kError];
        if (socket.destroyed) return false;
        const len = Buffer.byteLength(chunk);
        if (!len) return true;
        // We should defer writing chunks.
        if (contentLength !== null && bytesWritten + len > contentLength) {
            if (client[$c5180d514db3051c$require$kStrictContentLength]) throw new $c5180d514db3051c$require$RequestContentLengthMismatchError();
            process.emitWarning(new $c5180d514db3051c$require$RequestContentLengthMismatchError());
        }
        socket.cork();
        if (bytesWritten === 0) {
            if (!expectsPayload) socket[$c5180d514db3051c$require$kReset] = true;
            if (contentLength === null) socket.write(`${header}transfer-encoding: chunked\r\n`, 'latin1');
            else socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
        }
        if (contentLength === null) socket.write(`\r\n${len.toString(16)}\r\n`, 'latin1');
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        socket.uncork();
        request.onBodySent(chunk);
        if (!ret) {
            if (socket[$c5180d514db3051c$require$kParser].timeout && socket[$c5180d514db3051c$require$kParser].timeoutType === $c5180d514db3051c$var$TIMEOUT_HEADERS) // istanbul ignore else: only for jest
            {
                if (socket[$c5180d514db3051c$require$kParser].timeout.refresh) socket[$c5180d514db3051c$require$kParser].timeout.refresh();
            }
        }
        return ret;
    }
    end() {
        const { socket: socket, contentLength: contentLength, client: client, bytesWritten: bytesWritten, expectsPayload: expectsPayload, header: header, request: request } = this;
        request.onRequestSent();
        socket[$c5180d514db3051c$require$kWriting] = false;
        if (socket[$c5180d514db3051c$require$kError]) throw socket[$c5180d514db3051c$require$kError];
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
            if (client[$c5180d514db3051c$require$kStrictContentLength]) throw new $c5180d514db3051c$require$RequestContentLengthMismatchError();
            else process.emitWarning(new $c5180d514db3051c$require$RequestContentLengthMismatchError());
        }
        if (socket[$c5180d514db3051c$require$kParser].timeout && socket[$c5180d514db3051c$require$kParser].timeoutType === $c5180d514db3051c$var$TIMEOUT_HEADERS) // istanbul ignore else: only for jest
        {
            if (socket[$c5180d514db3051c$require$kParser].timeout.refresh) socket[$c5180d514db3051c$require$kParser].timeout.refresh();
        }
        $c5180d514db3051c$var$resume(client);
    }
    destroy(err) {
        const { socket: socket, client: client } = this;
        socket[$c5180d514db3051c$require$kWriting] = false;
        if (err) {
            $fGUYC$assert(client[$c5180d514db3051c$require$kRunning] <= 1, 'pipeline should only contain this request');
            $ab5d1b7bdebc55f8$exports.destroy(socket, err);
        }
    }
}
function $c5180d514db3051c$var$errorRequest(client, request, err) {
    try {
        request.onError(err);
        $fGUYC$assert(request.aborted);
    } catch (err) {
        client.emit('error', err);
    }
}
module.exports = $c5180d514db3051c$var$Client;


