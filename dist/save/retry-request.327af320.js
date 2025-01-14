require("./extend.9dc12576.js");
var $1AGFc$stream = require("stream");


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
parcelRegister("1cQIk", function(module, exports) {
'use strict';

var $0e0fcd5936436270$require$PassThrough = $1AGFc$stream.PassThrough;

var $bvFBs = parcelRequire("bvFBs");
let $0e0fcd5936436270$var$debug = ()=>{};
if (typeof process !== 'undefined' && 'env' in process && typeof process.env === 'object' && process.env.DEBUG === 'retry-request') $0e0fcd5936436270$var$debug = (message)=>{
    console.log('retry-request:', message);
};
const $0e0fcd5936436270$var$DEFAULTS = {
    objectMode: false,
    retries: 2,
    /*
    The maximum time to delay in seconds. If retryDelayMultiplier results in a
    delay greater than maxRetryDelay, retries should delay by maxRetryDelay
    seconds instead.
  */ maxRetryDelay: 64,
    /*
    The multiplier by which to increase the delay time between the completion of
    failed requests, and the initiation of the subsequent retrying request.
  */ retryDelayMultiplier: 2,
    /*
    The length of time to keep retrying in seconds. The last sleep period will
    be shortened as necessary, so that the last retry runs at deadline (and not
    considerably beyond it).  The total time starting from when the initial
    request is sent, after which an error will be returned, regardless of the
    retrying attempts made meanwhile.
   */ totalTimeout: 600,
    noResponseRetries: 2,
    currentRetryAttempt: 0,
    shouldRetryFn: function(response) {
        const retryRanges = [
            // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
            // 1xx - Retry (Informational, request still processing)
            // 2xx - Do not retry (Success)
            // 3xx - Do not retry (Redirect)
            // 4xx - Do not retry (Client errors)
            // 429 - Retry ("Too Many Requests")
            // 5xx - Retry (Server errors)
            [
                100,
                199
            ],
            [
                429,
                429
            ],
            [
                500,
                599
            ]
        ];
        const statusCode = response.statusCode;
        $0e0fcd5936436270$var$debug(`Response status: ${statusCode}`);
        let range;
        while(range = retryRanges.shift()){
            if (statusCode >= range[0] && statusCode <= range[1]) // Not a successful status or redirect.
            return true;
        }
    }
};
function $0e0fcd5936436270$var$retryRequest(requestOpts, opts, callback) {
    if (typeof requestOpts === 'string') requestOpts = {
        url: requestOpts
    };
    const streamMode = typeof arguments[arguments.length - 1] !== 'function';
    if (typeof opts === 'function') callback = opts;
    const manualCurrentRetryAttemptWasSet = opts && typeof opts.currentRetryAttempt === 'number';
    opts = $bvFBs({}, $0e0fcd5936436270$var$DEFAULTS, opts);
    if (typeof opts.request === 'undefined') throw new Error('A request library must be provided to retry-request.');
    let currentRetryAttempt = opts.currentRetryAttempt;
    let numNoResponseAttempts = 0;
    let streamResponseHandled = false;
    let retryStream;
    let requestStream;
    let delayStream;
    let activeRequest;
    const retryRequest = {
        abort: function() {
            if (activeRequest && activeRequest.abort) activeRequest.abort();
        }
    };
    if (streamMode) {
        retryStream = new $0e0fcd5936436270$require$PassThrough({
            objectMode: opts.objectMode
        });
        retryStream.abort = resetStreams;
    }
    const timeOfFirstRequest = Date.now();
    if (currentRetryAttempt > 0) retryAfterDelay(currentRetryAttempt);
    else makeRequest();
    if (streamMode) return retryStream;
    else return retryRequest;
    function resetStreams() {
        delayStream = null;
        if (requestStream) {
            requestStream.abort && requestStream.abort();
            requestStream.cancel && requestStream.cancel();
            if (requestStream.destroy) requestStream.destroy();
            else if (requestStream.end) requestStream.end();
        }
    }
    function makeRequest() {
        let finishHandled = false;
        currentRetryAttempt++;
        $0e0fcd5936436270$var$debug(`Current retry attempt: ${currentRetryAttempt}`);
        function handleFinish(args = []) {
            if (!finishHandled) {
                finishHandled = true;
                retryStream.emit('complete', ...args);
            }
        }
        if (streamMode) {
            streamResponseHandled = false;
            delayStream = new $0e0fcd5936436270$require$PassThrough({
                objectMode: opts.objectMode
            });
            requestStream = opts.request(requestOpts);
            setImmediate(()=>{
                retryStream.emit('request');
            });
            requestStream// gRPC via google-cloud-node can emit an `error` as well as a `response`
            // Whichever it emits, we run with-- we can't run with both. That's what
            // is up with the `streamResponseHandled` tracking.
            .on('error', (err)=>{
                if (streamResponseHandled) return;
                streamResponseHandled = true;
                onResponse(err);
            }).on('response', (resp, body)=>{
                if (streamResponseHandled) return;
                streamResponseHandled = true;
                onResponse(null, resp, body);
            }).on('complete', (...params)=>handleFinish(params)).on('finish', (...params)=>handleFinish(params));
            requestStream.pipe(delayStream);
        } else activeRequest = opts.request(requestOpts, onResponse);
    }
    function retryAfterDelay(currentRetryAttempt) {
        if (streamMode) resetStreams();
        const nextRetryDelay = $0e0fcd5936436270$var$getNextRetryDelay({
            maxRetryDelay: opts.maxRetryDelay,
            retryDelayMultiplier: opts.retryDelayMultiplier,
            retryNumber: currentRetryAttempt,
            timeOfFirstRequest: timeOfFirstRequest,
            totalTimeout: opts.totalTimeout
        });
        $0e0fcd5936436270$var$debug(`Next retry delay: ${nextRetryDelay}`);
        if (nextRetryDelay <= 0) {
            numNoResponseAttempts = opts.noResponseRetries + 1;
            return;
        }
        setTimeout(makeRequest, nextRetryDelay);
    }
    function onResponse(err, response, body) {
        // An error such as DNS resolution.
        if (err) {
            numNoResponseAttempts++;
            if (numNoResponseAttempts <= opts.noResponseRetries) retryAfterDelay(numNoResponseAttempts);
            else if (streamMode) {
                retryStream.emit('error', err);
                retryStream.end();
            } else callback(err, response, body);
            return;
        }
        // Send the response to see if we should try again.
        // NOTE: "currentRetryAttempt" isn't accurate by default, as it counts
        // the very first request sent as the first "retry". It is only accurate
        // when a user provides their own "currentRetryAttempt" option at
        // instantiation.
        const adjustedCurrentRetryAttempt = manualCurrentRetryAttemptWasSet ? currentRetryAttempt : currentRetryAttempt - 1;
        if (adjustedCurrentRetryAttempt < opts.retries && opts.shouldRetryFn(response)) {
            retryAfterDelay(currentRetryAttempt);
            return;
        }
        // No more attempts need to be made, just continue on.
        if (streamMode) {
            retryStream.emit('response', response);
            delayStream.pipe(retryStream);
            requestStream.on('error', (err)=>{
                retryStream.destroy(err);
            });
        } else callback(err, response, body);
    }
}
module.exports = $0e0fcd5936436270$var$retryRequest;
function $0e0fcd5936436270$var$getNextRetryDelay(config) {
    const { maxRetryDelay: maxRetryDelay, retryDelayMultiplier: retryDelayMultiplier, retryNumber: retryNumber, timeOfFirstRequest: timeOfFirstRequest, totalTimeout: totalTimeout } = config;
    const maxRetryDelayMs = maxRetryDelay * 1000;
    const totalTimeoutMs = totalTimeout * 1000;
    const jitter = Math.floor(Math.random() * 1000);
    const calculatedNextRetryDelay = Math.pow(retryDelayMultiplier, retryNumber) * 1000 + jitter;
    const maxAllowableDelayMs = totalTimeoutMs - (Date.now() - timeOfFirstRequest);
    return Math.min(calculatedNextRetryDelay, maxAllowableDelayMs, maxRetryDelayMs);
}
module.exports.defaults = $0e0fcd5936436270$var$DEFAULTS;
module.exports.getNextRetryDelay = $0e0fcd5936436270$var$getNextRetryDelay;

});


