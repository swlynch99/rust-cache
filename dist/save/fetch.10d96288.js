require("./response.a1a02e8d.js");
require("./headers.f20c41e6.js");
require("./request.496a0aac.js");
require("./util.2100f7c8.js");
require("./symbols.71ce8940.js");
require("./body.617da059.js");
require("./constants.8e3661dd.js");
require("./symbols.b8a391fa.js");
require("./util.c7a5ec55.js");
require("./dataURL.134f460a.js");
require("./global.7bda9dcb.js");
require("./webidl.107e124b.js");
var $7rHIN$zlib = require("zlib");
var $7rHIN$assert = require("assert");
var $7rHIN$events = require("events");
var $7rHIN$stream = require("stream");
var $7rHIN$streamweb = require("stream/web");
var $7rHIN$http = require("http");
var $7rHIN$buffer = require("buffer");


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
parcelRegister("2dWFm", function(module, exports) {
// https://github.com/Ethan-Arrowood/undici-fetch
'use strict';

var $g8vdd = parcelRequire("g8vdd");
var $19ea4d8ca1472521$require$Response = $g8vdd.Response;
var $19ea4d8ca1472521$require$makeNetworkError = $g8vdd.makeNetworkError;
var $19ea4d8ca1472521$require$makeAppropriateNetworkError = $g8vdd.makeAppropriateNetworkError;
var $19ea4d8ca1472521$require$filterResponse = $g8vdd.filterResponse;
var $19ea4d8ca1472521$require$makeResponse = $g8vdd.makeResponse;

var $3FPVg = parcelRequire("3FPVg");
var $19ea4d8ca1472521$require$Headers = $3FPVg.Headers;

var $4Z2eT = parcelRequire("4Z2eT");
var $19ea4d8ca1472521$require$Request = $4Z2eT.Request;
var $19ea4d8ca1472521$require$makeRequest = $4Z2eT.makeRequest;


var $eXsCL = parcelRequire("eXsCL");
var $19ea4d8ca1472521$require$bytesMatch = $eXsCL.bytesMatch;
var $19ea4d8ca1472521$require$makePolicyContainer = $eXsCL.makePolicyContainer;
var $19ea4d8ca1472521$require$clonePolicyContainer = $eXsCL.clonePolicyContainer;
var $19ea4d8ca1472521$require$requestBadPort = $eXsCL.requestBadPort;
var $19ea4d8ca1472521$require$TAOCheck = $eXsCL.TAOCheck;
var $19ea4d8ca1472521$require$appendRequestOriginHeader = $eXsCL.appendRequestOriginHeader;
var $19ea4d8ca1472521$require$responseLocationURL = $eXsCL.responseLocationURL;
var $19ea4d8ca1472521$require$requestCurrentURL = $eXsCL.requestCurrentURL;
var $19ea4d8ca1472521$require$setRequestReferrerPolicyOnRedirect = $eXsCL.setRequestReferrerPolicyOnRedirect;
var $19ea4d8ca1472521$require$tryUpgradeRequestToAPotentiallyTrustworthyURL = $eXsCL.tryUpgradeRequestToAPotentiallyTrustworthyURL;
var $19ea4d8ca1472521$require$createOpaqueTimingInfo = $eXsCL.createOpaqueTimingInfo;
var $19ea4d8ca1472521$require$appendFetchMetadata = $eXsCL.appendFetchMetadata;
var $19ea4d8ca1472521$require$corsCheck = $eXsCL.corsCheck;
var $19ea4d8ca1472521$require$crossOriginResourcePolicyCheck = $eXsCL.crossOriginResourcePolicyCheck;
var $19ea4d8ca1472521$require$determineRequestsReferrer = $eXsCL.determineRequestsReferrer;
var $19ea4d8ca1472521$require$coarsenedSharedCurrentTime = $eXsCL.coarsenedSharedCurrentTime;
var $19ea4d8ca1472521$require$createDeferredPromise = $eXsCL.createDeferredPromise;
var $19ea4d8ca1472521$require$isBlobLike = $eXsCL.isBlobLike;
var $19ea4d8ca1472521$require$sameOrigin = $eXsCL.sameOrigin;
var $19ea4d8ca1472521$require$isCancelled = $eXsCL.isCancelled;
var $19ea4d8ca1472521$require$isAborted = $eXsCL.isAborted;
var $19ea4d8ca1472521$require$isErrorLike = $eXsCL.isErrorLike;
var $19ea4d8ca1472521$require$fullyReadBody = $eXsCL.fullyReadBody;
var $19ea4d8ca1472521$require$readableStreamClose = $eXsCL.readableStreamClose;
var $19ea4d8ca1472521$require$isomorphicEncode = $eXsCL.isomorphicEncode;
var $19ea4d8ca1472521$require$urlIsLocal = $eXsCL.urlIsLocal;
var $19ea4d8ca1472521$require$urlIsHttpHttpsScheme = $eXsCL.urlIsHttpHttpsScheme;
var $19ea4d8ca1472521$require$urlHasHttpsScheme = $eXsCL.urlHasHttpsScheme;

var $3isYS = parcelRequire("3isYS");
var $19ea4d8ca1472521$require$kState = $3isYS.kState;
var $19ea4d8ca1472521$require$kHeaders = $3isYS.kHeaders;
var $19ea4d8ca1472521$require$kGuard = $3isYS.kGuard;
var $19ea4d8ca1472521$require$kRealm = $3isYS.kRealm;


var $hLZGr = parcelRequire("hLZGr");
var $19ea4d8ca1472521$require$safelyExtractBody = $hLZGr.safelyExtractBody;

var $5aYxL = parcelRequire("5aYxL");
var $19ea4d8ca1472521$require$redirectStatusSet = $5aYxL.redirectStatusSet;
var $19ea4d8ca1472521$require$nullBodyStatus = $5aYxL.nullBodyStatus;
var $19ea4d8ca1472521$require$safeMethodsSet = $5aYxL.safeMethodsSet;
var $19ea4d8ca1472521$require$requestBodyHeader = $5aYxL.requestBodyHeader;
var $19ea4d8ca1472521$require$subresourceSet = $5aYxL.subresourceSet;
var $19ea4d8ca1472521$require$DOMException = $5aYxL.DOMException;

var $dSiuY = parcelRequire("dSiuY");
var $19ea4d8ca1472521$require$kHeadersList = $dSiuY.kHeadersList;


var $19ea4d8ca1472521$require$Readable = $7rHIN$stream.Readable;
var $19ea4d8ca1472521$require$pipeline = $7rHIN$stream.pipeline;

var $iiSZx = parcelRequire("iiSZx");
var $19ea4d8ca1472521$require$addAbortListener = $iiSZx.addAbortListener;
var $19ea4d8ca1472521$require$isErrored = $iiSZx.isErrored;
var $19ea4d8ca1472521$require$isReadable = $iiSZx.isReadable;
var $19ea4d8ca1472521$require$nodeMajor = $iiSZx.nodeMajor;
var $19ea4d8ca1472521$require$nodeMinor = $iiSZx.nodeMinor;

var $4o5iY = parcelRequire("4o5iY");
var $19ea4d8ca1472521$require$dataURLProcessor = $4o5iY.dataURLProcessor;
var $19ea4d8ca1472521$require$serializeAMimeType = $4o5iY.serializeAMimeType;

var $19ea4d8ca1472521$require$TransformStream = $7rHIN$streamweb.TransformStream;

var $aUXHw = parcelRequire("aUXHw");
var $19ea4d8ca1472521$require$getGlobalDispatcher = $aUXHw.getGlobalDispatcher;

var $cpX4f = parcelRequire("cpX4f");
var $19ea4d8ca1472521$require$webidl = $cpX4f.webidl;

var $19ea4d8ca1472521$require$STATUS_CODES = $7rHIN$http.STATUS_CODES;
const $19ea4d8ca1472521$var$GET_OR_HEAD = [
    'GET',
    'HEAD'
];
/** @type {import('buffer').resolveObjectURL} */ let $19ea4d8ca1472521$var$resolveObjectURL;
let $19ea4d8ca1472521$var$ReadableStream = globalThis.ReadableStream;
class $19ea4d8ca1472521$var$Fetch extends $7rHIN$events {
    constructor(dispatcher){
        super();
        this.dispatcher = dispatcher;
        this.connection = null;
        this.dump = false;
        this.state = 'ongoing';
        // 2 terminated listeners get added per request,
        // but only 1 gets removed. If there are 20 redirects,
        // 21 listeners will be added.
        // See https://github.com/nodejs/undici/issues/1711
        // TODO (fix): Find and fix root cause for leaked listener.
        this.setMaxListeners(21);
    }
    terminate(reason) {
        if (this.state !== 'ongoing') return;
        this.state = 'terminated';
        this.connection?.destroy(reason);
        this.emit('terminated', reason);
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort(error) {
        if (this.state !== 'ongoing') return;
        // 1. Set controller’s state to "aborted".
        this.state = 'aborted';
        // 2. Let fallbackError be an "AbortError" DOMException.
        // 3. Set error to fallbackError if it is not given.
        if (!error) error = new $19ea4d8ca1472521$require$DOMException('The operation was aborted.', 'AbortError');
        // 4. Let serializedError be StructuredSerialize(error).
        //    If that threw an exception, catch it, and let
        //    serializedError be StructuredSerialize(fallbackError).
        // 5. Set controller’s serialized abort reason to serializedError.
        this.serializedAbortReason = error;
        this.connection?.destroy(error);
        this.emit('terminated', error);
    }
}
// https://fetch.spec.whatwg.org/#fetch-method
function $19ea4d8ca1472521$var$fetch(input, init = {}) {
    $19ea4d8ca1472521$require$webidl.argumentLengthCheck(arguments, 1, {
        header: 'globalThis.fetch'
    });
    // 1. Let p be a new promise.
    const p = $19ea4d8ca1472521$require$createDeferredPromise();
    // 2. Let requestObject be the result of invoking the initial value of
    // Request as constructor with input and init as arguments. If this throws
    // an exception, reject p with it and return p.
    let requestObject;
    try {
        requestObject = new $19ea4d8ca1472521$require$Request(input, init);
    } catch (e) {
        p.reject(e);
        return p.promise;
    }
    // 3. Let request be requestObject’s request.
    const request = requestObject[$19ea4d8ca1472521$require$kState];
    // 4. If requestObject’s signal’s aborted flag is set, then:
    if (requestObject.signal.aborted) {
        // 1. Abort the fetch() call with p, request, null, and
        //    requestObject’s signal’s abort reason.
        $19ea4d8ca1472521$var$abortFetch(p, request, null, requestObject.signal.reason);
        // 2. Return p.
        return p.promise;
    }
    // 5. Let globalObject be request’s client’s global object.
    const globalObject = request.client.globalObject;
    // 6. If globalObject is a ServiceWorkerGlobalScope object, then set
    // request’s service-workers mode to "none".
    if (globalObject?.constructor?.name === 'ServiceWorkerGlobalScope') request.serviceWorkers = 'none';
    // 7. Let responseObject be null.
    let responseObject = null;
    // 8. Let relevantRealm be this’s relevant Realm.
    const relevantRealm = null;
    // 9. Let locallyAborted be false.
    let locallyAborted = false;
    // 10. Let controller be null.
    let controller = null;
    // 11. Add the following abort steps to requestObject’s signal:
    $19ea4d8ca1472521$require$addAbortListener(requestObject.signal, ()=>{
        // 1. Set locallyAborted to true.
        locallyAborted = true;
        // 2. Assert: controller is non-null.
        $7rHIN$assert(controller != null);
        // 3. Abort controller with requestObject’s signal’s abort reason.
        controller.abort(requestObject.signal.reason);
        // 4. Abort the fetch() call with p, request, responseObject,
        //    and requestObject’s signal’s abort reason.
        $19ea4d8ca1472521$var$abortFetch(p, request, responseObject, requestObject.signal.reason);
    });
    // 12. Let handleFetchDone given response response be to finalize and
    // report timing with response, globalObject, and "fetch".
    const handleFetchDone = (response)=>$19ea4d8ca1472521$var$finalizeAndReportTiming(response, 'fetch');
    // 13. Set controller to the result of calling fetch given request,
    // with processResponseEndOfBody set to handleFetchDone, and processResponse
    // given response being these substeps:
    const processResponse = (response)=>{
        // 1. If locallyAborted is true, terminate these substeps.
        if (locallyAborted) return Promise.resolve();
        // 2. If response’s aborted flag is set, then:
        if (response.aborted) {
            // 1. Let deserializedError be the result of deserialize a serialized
            //    abort reason given controller’s serialized abort reason and
            //    relevantRealm.
            // 2. Abort the fetch() call with p, request, responseObject, and
            //    deserializedError.
            $19ea4d8ca1472521$var$abortFetch(p, request, responseObject, controller.serializedAbortReason);
            return Promise.resolve();
        }
        // 3. If response is a network error, then reject p with a TypeError
        // and terminate these substeps.
        if (response.type === 'error') {
            p.reject(Object.assign(new TypeError('fetch failed'), {
                cause: response.error
            }));
            return Promise.resolve();
        }
        // 4. Set responseObject to the result of creating a Response object,
        // given response, "immutable", and relevantRealm.
        responseObject = new $19ea4d8ca1472521$require$Response();
        responseObject[$19ea4d8ca1472521$require$kState] = response;
        responseObject[$19ea4d8ca1472521$require$kRealm] = relevantRealm;
        responseObject[$19ea4d8ca1472521$require$kHeaders][$19ea4d8ca1472521$require$kHeadersList] = response.headersList;
        responseObject[$19ea4d8ca1472521$require$kHeaders][$19ea4d8ca1472521$require$kGuard] = 'immutable';
        responseObject[$19ea4d8ca1472521$require$kHeaders][$19ea4d8ca1472521$require$kRealm] = relevantRealm;
        // 5. Resolve p with responseObject.
        p.resolve(responseObject);
    };
    controller = $19ea4d8ca1472521$var$fetching({
        request: request,
        processResponseEndOfBody: handleFetchDone,
        processResponse: processResponse,
        dispatcher: init.dispatcher ?? $19ea4d8ca1472521$require$getGlobalDispatcher() // undici
    });
    // 14. Return p.
    return p.promise;
}
// https://fetch.spec.whatwg.org/#finalize-and-report-timing
function $19ea4d8ca1472521$var$finalizeAndReportTiming(response, initiatorType = 'other') {
    // 1. If response is an aborted network error, then return.
    if (response.type === 'error' && response.aborted) return;
    // 2. If response’s URL list is null or empty, then return.
    if (!response.urlList?.length) return;
    // 3. Let originalURL be response’s URL list[0].
    const originalURL = response.urlList[0];
    // 4. Let timingInfo be response’s timing info.
    let timingInfo = response.timingInfo;
    // 5. Let cacheState be response’s cache state.
    let cacheState = response.cacheState;
    // 6. If originalURL’s scheme is not an HTTP(S) scheme, then return.
    if (!$19ea4d8ca1472521$require$urlIsHttpHttpsScheme(originalURL)) return;
    // 7. If timingInfo is null, then return.
    if (timingInfo === null) return;
    // 8. If response’s timing allow passed flag is not set, then:
    if (!response.timingAllowPassed) {
        //  1. Set timingInfo to a the result of creating an opaque timing info for timingInfo.
        timingInfo = $19ea4d8ca1472521$require$createOpaqueTimingInfo({
            startTime: timingInfo.startTime
        });
        //  2. Set cacheState to the empty string.
        cacheState = '';
    }
    // 9. Set timingInfo’s end time to the coarsened shared current time
    // given global’s relevant settings object’s cross-origin isolated
    // capability.
    // TODO: given global’s relevant settings object’s cross-origin isolated
    // capability?
    timingInfo.endTime = $19ea4d8ca1472521$require$coarsenedSharedCurrentTime();
    // 10. Set response’s timing info to timingInfo.
    response.timingInfo = timingInfo;
    // 11. Mark resource timing for timingInfo, originalURL, initiatorType,
    // global, and cacheState.
    $19ea4d8ca1472521$var$markResourceTiming(timingInfo, originalURL, initiatorType, globalThis, cacheState);
}
// https://w3c.github.io/resource-timing/#dfn-mark-resource-timing
function $19ea4d8ca1472521$var$markResourceTiming(timingInfo, originalURL, initiatorType, globalThis1, cacheState) {
    if ($19ea4d8ca1472521$require$nodeMajor > 18 || $19ea4d8ca1472521$require$nodeMajor === 18 && $19ea4d8ca1472521$require$nodeMinor >= 2) performance.markResourceTiming(timingInfo, originalURL.href, initiatorType, globalThis1, cacheState);
}
// https://fetch.spec.whatwg.org/#abort-fetch
function $19ea4d8ca1472521$var$abortFetch(p, request, responseObject, error) {
    // Note: AbortSignal.reason was added in node v17.2.0
    // which would give us an undefined error to reject with.
    // Remove this once node v16 is no longer supported.
    if (!error) error = new $19ea4d8ca1472521$require$DOMException('The operation was aborted.', 'AbortError');
    // 1. Reject promise with error.
    p.reject(error);
    // 2. If request’s body is not null and is readable, then cancel request’s
    // body with error.
    if (request.body != null && $19ea4d8ca1472521$require$isReadable(request.body?.stream)) request.body.stream.cancel(error).catch((err)=>{
        if (err.code === 'ERR_INVALID_STATE') // Node bug?
        return;
        throw err;
    });
    // 3. If responseObject is null, then return.
    if (responseObject == null) return;
    // 4. Let response be responseObject’s response.
    const response = responseObject[$19ea4d8ca1472521$require$kState];
    // 5. If response’s body is not null and is readable, then error response’s
    // body with error.
    if (response.body != null && $19ea4d8ca1472521$require$isReadable(response.body?.stream)) response.body.stream.cancel(error).catch((err)=>{
        if (err.code === 'ERR_INVALID_STATE') // Node bug?
        return;
        throw err;
    });
}
// https://fetch.spec.whatwg.org/#fetching
function $19ea4d8ca1472521$var$fetching({ request: request, processRequestBodyChunkLength: processRequestBodyChunkLength, processRequestEndOfBody: processRequestEndOfBody, processResponse: processResponse, processResponseEndOfBody: processResponseEndOfBody, processResponseConsumeBody: processResponseConsumeBody, useParallelQueue: useParallelQueue = false, dispatcher: dispatcher // undici
 }) {
    // 1. Let taskDestination be null.
    let taskDestination = null;
    // 2. Let crossOriginIsolatedCapability be false.
    let crossOriginIsolatedCapability = false;
    // 3. If request’s client is non-null, then:
    if (request.client != null) {
        // 1. Set taskDestination to request’s client’s global object.
        taskDestination = request.client.globalObject;
        // 2. Set crossOriginIsolatedCapability to request’s client’s cross-origin
        // isolated capability.
        crossOriginIsolatedCapability = request.client.crossOriginIsolatedCapability;
    }
    // 4. If useParallelQueue is true, then set taskDestination to the result of
    // starting a new parallel queue.
    // TODO
    // 5. Let timingInfo be a new fetch timing info whose start time and
    // post-redirect start time are the coarsened shared current time given
    // crossOriginIsolatedCapability.
    const currenTime = $19ea4d8ca1472521$require$coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
    const timingInfo = $19ea4d8ca1472521$require$createOpaqueTimingInfo({
        startTime: currenTime
    });
    // 6. Let fetchParams be a new fetch params whose
    // request is request,
    // timing info is timingInfo,
    // process request body chunk length is processRequestBodyChunkLength,
    // process request end-of-body is processRequestEndOfBody,
    // process response is processResponse,
    // process response consume body is processResponseConsumeBody,
    // process response end-of-body is processResponseEndOfBody,
    // task destination is taskDestination,
    // and cross-origin isolated capability is crossOriginIsolatedCapability.
    const fetchParams = {
        controller: new $19ea4d8ca1472521$var$Fetch(dispatcher),
        request: request,
        timingInfo: timingInfo,
        processRequestBodyChunkLength: processRequestBodyChunkLength,
        processRequestEndOfBody: processRequestEndOfBody,
        processResponse: processResponse,
        processResponseConsumeBody: processResponseConsumeBody,
        processResponseEndOfBody: processResponseEndOfBody,
        taskDestination: taskDestination,
        crossOriginIsolatedCapability: crossOriginIsolatedCapability
    };
    // 7. If request’s body is a byte sequence, then set request’s body to
    //    request’s body as a body.
    // NOTE: Since fetching is only called from fetch, body should already be
    // extracted.
    $7rHIN$assert(!request.body || request.body.stream);
    // 8. If request’s window is "client", then set request’s window to request’s
    // client, if request’s client’s global object is a Window object; otherwise
    // "no-window".
    if (request.window === 'client') // TODO: What if request.client is null?
    request.window = request.client?.globalObject?.constructor?.name === 'Window' ? request.client : 'no-window';
    // 9. If request’s origin is "client", then set request’s origin to request’s
    // client’s origin.
    if (request.origin === 'client') // TODO: What if request.client is null?
    request.origin = request.client?.origin;
    // 10. If all of the following conditions are true:
    // TODO
    // 11. If request’s policy container is "client", then:
    if (request.policyContainer === 'client') {
        // 1. If request’s client is non-null, then set request’s policy
        // container to a clone of request’s client’s policy container. [HTML]
        if (request.client != null) request.policyContainer = $19ea4d8ca1472521$require$clonePolicyContainer(request.client.policyContainer);
        else // 2. Otherwise, set request’s policy container to a new policy
        // container.
        request.policyContainer = $19ea4d8ca1472521$require$makePolicyContainer();
    }
    // 12. If request’s header list does not contain `Accept`, then:
    if (!request.headersList.contains('accept')) {
        // 1. Let value be `*/*`.
        const value = '*/*';
        // 2. A user agent should set value to the first matching statement, if
        // any, switching on request’s destination:
        // "document"
        // "frame"
        // "iframe"
        // `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
        // "image"
        // `image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`
        // "style"
        // `text/css,*/*;q=0.1`
        // TODO
        // 3. Append `Accept`/value to request’s header list.
        request.headersList.append('accept', value);
    }
    // 13. If request’s header list does not contain `Accept-Language`, then
    // user agents should append `Accept-Language`/an appropriate value to
    // request’s header list.
    if (!request.headersList.contains('accept-language')) request.headersList.append('accept-language', '*');
    // 14. If request’s priority is null, then use request’s initiator and
    // destination appropriately in setting request’s priority to a
    // user-agent-defined object.
    request.priority;
    // 15. If request is a subresource request, then:
    $19ea4d8ca1472521$require$subresourceSet.has(request.destination);
    // 16. Run main fetch given fetchParams.
    $19ea4d8ca1472521$var$mainFetch(fetchParams).catch((err)=>{
        fetchParams.controller.terminate(err);
    });
    // 17. Return fetchParam's controller
    return fetchParams.controller;
}
// https://fetch.spec.whatwg.org/#concept-main-fetch
async function $19ea4d8ca1472521$var$mainFetch(fetchParams, recursive = false) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let response be null.
    let response = null;
    // 3. If request’s local-URLs-only flag is set and request’s current URL is
    // not local, then set response to a network error.
    if (request.localURLsOnly && !$19ea4d8ca1472521$require$urlIsLocal($19ea4d8ca1472521$require$requestCurrentURL(request))) response = $19ea4d8ca1472521$require$makeNetworkError('local URLs only');
    // 4. Run report Content Security Policy violations for request.
    // TODO
    // 5. Upgrade request to a potentially trustworthy URL, if appropriate.
    $19ea4d8ca1472521$require$tryUpgradeRequestToAPotentiallyTrustworthyURL(request);
    // 6. If should request be blocked due to a bad port, should fetching request
    // be blocked as mixed content, or should request be blocked by Content
    // Security Policy returns blocked, then set response to a network error.
    if ($19ea4d8ca1472521$require$requestBadPort(request) === 'blocked') response = $19ea4d8ca1472521$require$makeNetworkError('bad port');
    // TODO: should fetching request be blocked as mixed content?
    // TODO: should request be blocked by Content Security Policy?
    // 7. If request’s referrer policy is the empty string, then set request’s
    // referrer policy to request’s policy container’s referrer policy.
    if (request.referrerPolicy === '') request.referrerPolicy = request.policyContainer.referrerPolicy;
    // 8. If request’s referrer is not "no-referrer", then set request’s
    // referrer to the result of invoking determine request’s referrer.
    if (request.referrer !== 'no-referrer') request.referrer = $19ea4d8ca1472521$require$determineRequestsReferrer(request);
    // 9. Set request’s current URL’s scheme to "https" if all of the following
    // conditions are true:
    // - request’s current URL’s scheme is "http"
    // - request’s current URL’s host is a domain
    // - Matching request’s current URL’s host per Known HSTS Host Domain Name
    //   Matching results in either a superdomain match with an asserted
    //   includeSubDomains directive or a congruent match (with or without an
    //   asserted includeSubDomains directive). [HSTS]
    // TODO
    // 10. If recursive is false, then run the remaining steps in parallel.
    // TODO
    // 11. If response is null, then set response to the result of running
    // the steps corresponding to the first matching statement:
    if (response === null) response = await (async ()=>{
        const currentURL = $19ea4d8ca1472521$require$requestCurrentURL(request);
        if (// - request’s current URL’s origin is same origin with request’s origin,
        //   and request’s response tainting is "basic"
        $19ea4d8ca1472521$require$sameOrigin(currentURL, request.url) && request.responseTainting === 'basic' || // request’s current URL’s scheme is "data"
        currentURL.protocol === 'data:' || // - request’s mode is "navigate" or "websocket"
        request.mode === 'navigate' || request.mode === 'websocket') {
            // 1. Set request’s response tainting to "basic".
            request.responseTainting = 'basic';
            // 2. Return the result of running scheme fetch given fetchParams.
            return await $19ea4d8ca1472521$var$schemeFetch(fetchParams);
        }
        // request’s mode is "same-origin"
        if (request.mode === 'same-origin') // 1. Return a network error.
        return $19ea4d8ca1472521$require$makeNetworkError('request mode cannot be "same-origin"');
        // request’s mode is "no-cors"
        if (request.mode === 'no-cors') {
            // 1. If request’s redirect mode is not "follow", then return a network
            // error.
            if (request.redirect !== 'follow') return $19ea4d8ca1472521$require$makeNetworkError('redirect mode cannot be "follow" for "no-cors" request');
            // 2. Set request’s response tainting to "opaque".
            request.responseTainting = 'opaque';
            // 3. Return the result of running scheme fetch given fetchParams.
            return await $19ea4d8ca1472521$var$schemeFetch(fetchParams);
        }
        // request’s current URL’s scheme is not an HTTP(S) scheme
        if (!$19ea4d8ca1472521$require$urlIsHttpHttpsScheme($19ea4d8ca1472521$require$requestCurrentURL(request))) // Return a network error.
        return $19ea4d8ca1472521$require$makeNetworkError('URL scheme must be a HTTP(S) scheme');
        // - request’s use-CORS-preflight flag is set
        // - request’s unsafe-request flag is set and either request’s method is
        //   not a CORS-safelisted method or CORS-unsafe request-header names with
        //   request’s header list is not empty
        //    1. Set request’s response tainting to "cors".
        //    2. Let corsWithPreflightResponse be the result of running HTTP fetch
        //    given fetchParams and true.
        //    3. If corsWithPreflightResponse is a network error, then clear cache
        //    entries using request.
        //    4. Return corsWithPreflightResponse.
        // TODO
        // Otherwise
        //    1. Set request’s response tainting to "cors".
        request.responseTainting = 'cors';
        //    2. Return the result of running HTTP fetch given fetchParams.
        return await $19ea4d8ca1472521$var$httpFetch(fetchParams);
    })();
    // 12. If recursive is true, then return response.
    if (recursive) return response;
    // 13. If response is not a network error and response is not a filtered
    // response, then:
    if (response.status !== 0 && !response.internalResponse) {
        // If request’s response tainting is "cors", then:
        request.responseTainting;
        // Set response to the following filtered response with response as its
        // internal response, depending on request’s response tainting:
        if (request.responseTainting === 'basic') response = $19ea4d8ca1472521$require$filterResponse(response, 'basic');
        else if (request.responseTainting === 'cors') response = $19ea4d8ca1472521$require$filterResponse(response, 'cors');
        else if (request.responseTainting === 'opaque') response = $19ea4d8ca1472521$require$filterResponse(response, 'opaque');
        else $7rHIN$assert(false);
    }
    // 14. Let internalResponse be response, if response is a network error,
    // and response’s internal response otherwise.
    let internalResponse = response.status === 0 ? response : response.internalResponse;
    // 15. If internalResponse’s URL list is empty, then set it to a clone of
    // request’s URL list.
    if (internalResponse.urlList.length === 0) internalResponse.urlList.push(...request.urlList);
    // 16. If request’s timing allow failed flag is unset, then set
    // internalResponse’s timing allow passed flag.
    if (!request.timingAllowFailed) response.timingAllowPassed = true;
    // 17. If response is not a network error and any of the following returns
    // blocked
    // - should internalResponse to request be blocked as mixed content
    // - should internalResponse to request be blocked by Content Security Policy
    // - should internalResponse to request be blocked due to its MIME type
    // - should internalResponse to request be blocked due to nosniff
    // TODO
    // 18. If response’s type is "opaque", internalResponse’s status is 206,
    // internalResponse’s range-requested flag is set, and request’s header
    // list does not contain `Range`, then set response and internalResponse
    // to a network error.
    if (response.type === 'opaque' && internalResponse.status === 206 && internalResponse.rangeRequested && !request.headers.contains('range')) response = internalResponse = $19ea4d8ca1472521$require$makeNetworkError();
    // 19. If response is not a network error and either request’s method is
    // `HEAD` or `CONNECT`, or internalResponse’s status is a null body status,
    // set internalResponse’s body to null and disregard any enqueuing toward
    // it (if any).
    if (response.status !== 0 && (request.method === 'HEAD' || request.method === 'CONNECT' || $19ea4d8ca1472521$require$nullBodyStatus.includes(internalResponse.status))) {
        internalResponse.body = null;
        fetchParams.controller.dump = true;
    }
    // 20. If request’s integrity metadata is not the empty string, then:
    if (request.integrity) {
        // 1. Let processBodyError be this step: run fetch finale given fetchParams
        // and a network error.
        const processBodyError = (reason)=>$19ea4d8ca1472521$var$fetchFinale(fetchParams, $19ea4d8ca1472521$require$makeNetworkError(reason));
        // 2. If request’s response tainting is "opaque", or response’s body is null,
        // then run processBodyError and abort these steps.
        if (request.responseTainting === 'opaque' || response.body == null) {
            processBodyError(response.error);
            return;
        }
        // 3. Let processBody given bytes be these steps:
        const processBody = (bytes)=>{
            // 1. If bytes do not match request’s integrity metadata,
            // then run processBodyError and abort these steps. [SRI]
            if (!$19ea4d8ca1472521$require$bytesMatch(bytes, request.integrity)) {
                processBodyError('integrity mismatch');
                return;
            }
            // 2. Set response’s body to bytes as a body.
            response.body = $19ea4d8ca1472521$require$safelyExtractBody(bytes)[0];
            // 3. Run fetch finale given fetchParams and response.
            $19ea4d8ca1472521$var$fetchFinale(fetchParams, response);
        };
        // 4. Fully read response’s body given processBody and processBodyError.
        await $19ea4d8ca1472521$require$fullyReadBody(response.body, processBody, processBodyError);
    } else // 21. Otherwise, run fetch finale given fetchParams and response.
    $19ea4d8ca1472521$var$fetchFinale(fetchParams, response);
}

// https://fetch.spec.whatwg.org/#concept-scheme-fetch
// given a fetch params fetchParams
function $19ea4d8ca1472521$var$schemeFetch(fetchParams) {
    // Note: since the connection is destroyed on redirect, which sets fetchParams to a
    // cancelled state, we do not want this condition to trigger *unless* there have been
    // no redirects. See https://github.com/nodejs/undici/issues/1776
    // 1. If fetchParams is canceled, then return the appropriate network error for fetchParams.
    if ($19ea4d8ca1472521$require$isCancelled(fetchParams) && fetchParams.request.redirectCount === 0) return Promise.resolve($19ea4d8ca1472521$require$makeAppropriateNetworkError(fetchParams));
    // 2. Let request be fetchParams’s request.
    const { request: request } = fetchParams;
    const { protocol: scheme } = $19ea4d8ca1472521$require$requestCurrentURL(request);
    // 3. Switch on request’s current URL’s scheme and run the associated steps:
    switch(scheme){
        case 'about:':
            // If request’s current URL’s path is the string "blank", then return a new response
            // whose status message is `OK`, header list is « (`Content-Type`, `text/html;charset=utf-8`) »,
            // and body is the empty byte sequence as a body.
            // Otherwise, return a network error.
            return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('about scheme is not supported'));
        case 'blob:':
            {
                if (!$19ea4d8ca1472521$var$resolveObjectURL) $19ea4d8ca1472521$var$resolveObjectURL = $7rHIN$buffer.resolveObjectURL;
                // 1. Let blobURLEntry be request’s current URL’s blob URL entry.
                const blobURLEntry = $19ea4d8ca1472521$require$requestCurrentURL(request);
                // https://github.com/web-platform-tests/wpt/blob/7b0ebaccc62b566a1965396e5be7bb2bc06f841f/FileAPI/url/resources/fetch-tests.js#L52-L56
                // Buffer.resolveObjectURL does not ignore URL queries.
                if (blobURLEntry.search.length !== 0) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('NetworkError when attempting to fetch resource.'));
                const blobURLEntryObject = $19ea4d8ca1472521$var$resolveObjectURL(blobURLEntry.toString());
                // 2. If request’s method is not `GET`, blobURLEntry is null, or blobURLEntry’s
                //    object is not a Blob object, then return a network error.
                if (request.method !== 'GET' || !$19ea4d8ca1472521$require$isBlobLike(blobURLEntryObject)) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('invalid method'));
                // 3. Let bodyWithType be the result of safely extracting blobURLEntry’s object.
                const bodyWithType = $19ea4d8ca1472521$require$safelyExtractBody(blobURLEntryObject);
                // 4. Let body be bodyWithType’s body.
                const body = bodyWithType[0];
                // 5. Let length be body’s length, serialized and isomorphic encoded.
                const length = $19ea4d8ca1472521$require$isomorphicEncode(`${body.length}`);
                // 6. Let type be bodyWithType’s type if it is non-null; otherwise the empty byte sequence.
                const type = bodyWithType[1] ?? '';
                // 7. Return a new response whose status message is `OK`, header list is
                //    « (`Content-Length`, length), (`Content-Type`, type) », and body is body.
                const response = $19ea4d8ca1472521$require$makeResponse({
                    statusText: 'OK',
                    headersList: [
                        [
                            'content-length',
                            {
                                name: 'Content-Length',
                                value: length
                            }
                        ],
                        [
                            'content-type',
                            {
                                name: 'Content-Type',
                                value: type
                            }
                        ]
                    ]
                });
                response.body = body;
                return Promise.resolve(response);
            }
        case 'data:':
            {
                // 1. Let dataURLStruct be the result of running the
                //    data: URL processor on request’s current URL.
                const currentURL = $19ea4d8ca1472521$require$requestCurrentURL(request);
                const dataURLStruct = $19ea4d8ca1472521$require$dataURLProcessor(currentURL);
                // 2. If dataURLStruct is failure, then return a
                //    network error.
                if (dataURLStruct === 'failure') return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('failed to fetch the data URL'));
                // 3. Let mimeType be dataURLStruct’s MIME type, serialized.
                const mimeType = $19ea4d8ca1472521$require$serializeAMimeType(dataURLStruct.mimeType);
                // 4. Return a response whose status message is `OK`,
                //    header list is « (`Content-Type`, mimeType) »,
                //    and body is dataURLStruct’s body as a body.
                return Promise.resolve($19ea4d8ca1472521$require$makeResponse({
                    statusText: 'OK',
                    headersList: [
                        [
                            'content-type',
                            {
                                name: 'Content-Type',
                                value: mimeType
                            }
                        ]
                    ],
                    body: $19ea4d8ca1472521$require$safelyExtractBody(dataURLStruct.body)[0]
                }));
            }
        case 'file:':
            // For now, unfortunate as it is, file URLs are left as an exercise for the reader.
            // When in doubt, return a network error.
            return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('not implemented... yet...'));
        case 'http:':
        case 'https:':
            // Return the result of running HTTP fetch given fetchParams.
            return $19ea4d8ca1472521$var$httpFetch(fetchParams).catch((err)=>$19ea4d8ca1472521$require$makeNetworkError(err));
        default:
            return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('unknown scheme'));
    }
}
// https://fetch.spec.whatwg.org/#finalize-response
function $19ea4d8ca1472521$var$finalizeResponse(fetchParams, response) {
    // 1. Set fetchParams’s request’s done flag.
    fetchParams.request.done = true;
    // 2, If fetchParams’s process response done is not null, then queue a fetch
    // task to run fetchParams’s process response done given response, with
    // fetchParams’s task destination.
    if (fetchParams.processResponseDone != null) queueMicrotask(()=>fetchParams.processResponseDone(response));
}
// https://fetch.spec.whatwg.org/#fetch-finale
function $19ea4d8ca1472521$var$fetchFinale(fetchParams, response) {
    // 1. If response is a network error, then:
    if (response.type === 'error') {
        // 1. Set response’s URL list to « fetchParams’s request’s URL list[0] ».
        response.urlList = [
            fetchParams.request.urlList[0]
        ];
        // 2. Set response’s timing info to the result of creating an opaque timing
        // info for fetchParams’s timing info.
        response.timingInfo = $19ea4d8ca1472521$require$createOpaqueTimingInfo({
            startTime: fetchParams.timingInfo.startTime
        });
    }
    // 2. Let processResponseEndOfBody be the following steps:
    const processResponseEndOfBody = ()=>{
        // 1. Set fetchParams’s request’s done flag.
        fetchParams.request.done = true;
        // If fetchParams’s process response end-of-body is not null,
        // then queue a fetch task to run fetchParams’s process response
        // end-of-body given response with fetchParams’s task destination.
        if (fetchParams.processResponseEndOfBody != null) queueMicrotask(()=>fetchParams.processResponseEndOfBody(response));
    };
    // 3. If fetchParams’s process response is non-null, then queue a fetch task
    // to run fetchParams’s process response given response, with fetchParams’s
    // task destination.
    if (fetchParams.processResponse != null) queueMicrotask(()=>fetchParams.processResponse(response));
    // 4. If response’s body is null, then run processResponseEndOfBody.
    if (response.body == null) processResponseEndOfBody();
    else {
        // 5. Otherwise:
        // 1. Let transformStream be a new a TransformStream.
        // 2. Let identityTransformAlgorithm be an algorithm which, given chunk,
        // enqueues chunk in transformStream.
        const identityTransformAlgorithm = (chunk, controller)=>{
            controller.enqueue(chunk);
        };
        // 3. Set up transformStream with transformAlgorithm set to identityTransformAlgorithm
        // and flushAlgorithm set to processResponseEndOfBody.
        const transformStream = new $19ea4d8ca1472521$require$TransformStream({
            start () {},
            transform: identityTransformAlgorithm,
            flush: processResponseEndOfBody
        }, {
            size () {
                return 1;
            }
        }, {
            size () {
                return 1;
            }
        });
        // 4. Set response’s body to the result of piping response’s body through transformStream.
        response.body = {
            stream: response.body.stream.pipeThrough(transformStream)
        };
    }
    // 6. If fetchParams’s process response consume body is non-null, then:
    if (fetchParams.processResponseConsumeBody != null) {
        // 1. Let processBody given nullOrBytes be this step: run fetchParams’s
        // process response consume body given response and nullOrBytes.
        const processBody = (nullOrBytes)=>fetchParams.processResponseConsumeBody(response, nullOrBytes);
        // 2. Let processBodyError be this step: run fetchParams’s process
        // response consume body given response and failure.
        const processBodyError = (failure)=>fetchParams.processResponseConsumeBody(response, failure);
        // 3. If response’s body is null, then queue a fetch task to run processBody
        // given null, with fetchParams’s task destination.
        if (response.body == null) queueMicrotask(()=>processBody(null));
        else // 4. Otherwise, fully read response’s body given processBody, processBodyError,
        // and fetchParams’s task destination.
        return $19ea4d8ca1472521$require$fullyReadBody(response.body, processBody, processBodyError);
        return Promise.resolve();
    }
}
// https://fetch.spec.whatwg.org/#http-fetch
async function $19ea4d8ca1472521$var$httpFetch(fetchParams) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let response be null.
    let response = null;
    // 3. Let actualResponse be null.
    let actualResponse = null;
    // 4. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 5. If request’s service-workers mode is "all", then:
    request.serviceWorkers;
    // 6. If response is null, then:
    if (response === null) {
        // 1. If makeCORSPreflight is true and one of these conditions is true:
        // TODO
        // 2. If request’s redirect mode is "follow", then set request’s
        // service-workers mode to "none".
        if (request.redirect === 'follow') request.serviceWorkers = 'none';
        // 3. Set response and actualResponse to the result of running
        // HTTP-network-or-cache fetch given fetchParams.
        actualResponse = response = await $19ea4d8ca1472521$var$httpNetworkOrCacheFetch(fetchParams);
        // 4. If request’s response tainting is "cors" and a CORS check
        // for request and response returns failure, then return a network error.
        if (request.responseTainting === 'cors' && $19ea4d8ca1472521$require$corsCheck(request, response) === 'failure') return $19ea4d8ca1472521$require$makeNetworkError('cors failure');
        // 5. If the TAO check for request and response returns failure, then set
        // request’s timing allow failed flag.
        if ($19ea4d8ca1472521$require$TAOCheck(request, response) === 'failure') request.timingAllowFailed = true;
    }
    // 7. If either request’s response tainting or response’s type
    // is "opaque", and the cross-origin resource policy check with
    // request’s origin, request’s client, request’s destination,
    // and actualResponse returns blocked, then return a network error.
    if ((request.responseTainting === 'opaque' || response.type === 'opaque') && $19ea4d8ca1472521$require$crossOriginResourcePolicyCheck(request.origin, request.client, request.destination, actualResponse) === 'blocked') return $19ea4d8ca1472521$require$makeNetworkError('blocked');
    // 8. If actualResponse’s status is a redirect status, then:
    if ($19ea4d8ca1472521$require$redirectStatusSet.has(actualResponse.status)) {
        // 1. If actualResponse’s status is not 303, request’s body is not null,
        // and the connection uses HTTP/2, then user agents may, and are even
        // encouraged to, transmit an RST_STREAM frame.
        // See, https://github.com/whatwg/fetch/issues/1288
        if (request.redirect !== 'manual') fetchParams.controller.connection.destroy();
        // 2. Switch on request’s redirect mode:
        if (request.redirect === 'error') // Set response to a network error.
        response = $19ea4d8ca1472521$require$makeNetworkError('unexpected redirect');
        else if (request.redirect === 'manual') // Set response to an opaque-redirect filtered response whose internal
        // response is actualResponse.
        // NOTE(spec): On the web this would return an `opaqueredirect` response,
        // but that doesn't make sense server side.
        // See https://github.com/nodejs/undici/issues/1193.
        response = actualResponse;
        else if (request.redirect === 'follow') // Set response to the result of running HTTP-redirect fetch given
        // fetchParams and response.
        response = await $19ea4d8ca1472521$var$httpRedirectFetch(fetchParams, response);
        else $7rHIN$assert(false);
    }
    // 9. Set response’s timing info to timingInfo.
    response.timingInfo = timingInfo;
    // 10. Return response.
    return response;
}
// https://fetch.spec.whatwg.org/#http-redirect-fetch
function $19ea4d8ca1472521$var$httpRedirectFetch(fetchParams, response) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let actualResponse be response, if response is not a filtered response,
    // and response’s internal response otherwise.
    const actualResponse = response.internalResponse ? response.internalResponse : response;
    // 3. Let locationURL be actualResponse’s location URL given request’s current
    // URL’s fragment.
    let locationURL;
    try {
        locationURL = $19ea4d8ca1472521$require$responseLocationURL(actualResponse, $19ea4d8ca1472521$require$requestCurrentURL(request).hash);
        // 4. If locationURL is null, then return response.
        if (locationURL == null) return response;
    } catch (err) {
        // 5. If locationURL is failure, then return a network error.
        return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError(err));
    }
    // 6. If locationURL’s scheme is not an HTTP(S) scheme, then return a network
    // error.
    if (!$19ea4d8ca1472521$require$urlIsHttpHttpsScheme(locationURL)) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('URL scheme must be a HTTP(S) scheme'));
    // 7. If request’s redirect count is 20, then return a network error.
    if (request.redirectCount === 20) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('redirect count exceeded'));
    // 8. Increase request’s redirect count by 1.
    request.redirectCount += 1;
    // 9. If request’s mode is "cors", locationURL includes credentials, and
    // request’s origin is not same origin with locationURL’s origin, then return
    //  a network error.
    if (request.mode === 'cors' && (locationURL.username || locationURL.password) && !$19ea4d8ca1472521$require$sameOrigin(request, locationURL)) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('cross origin not allowed for request mode "cors"'));
    // 10. If request’s response tainting is "cors" and locationURL includes
    // credentials, then return a network error.
    if (request.responseTainting === 'cors' && (locationURL.username || locationURL.password)) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError('URL cannot contain credentials for request mode "cors"'));
    // 11. If actualResponse’s status is not 303, request’s body is non-null,
    // and request’s body’s source is null, then return a network error.
    if (actualResponse.status !== 303 && request.body != null && request.body.source == null) return Promise.resolve($19ea4d8ca1472521$require$makeNetworkError());
    // 12. If one of the following is true
    // - actualResponse’s status is 301 or 302 and request’s method is `POST`
    // - actualResponse’s status is 303 and request’s method is not `GET` or `HEAD`
    if ([
        301,
        302
    ].includes(actualResponse.status) && request.method === 'POST' || actualResponse.status === 303 && !$19ea4d8ca1472521$var$GET_OR_HEAD.includes(request.method)) {
        // then:
        // 1. Set request’s method to `GET` and request’s body to null.
        request.method = 'GET';
        request.body = null;
        // 2. For each headerName of request-body-header name, delete headerName from
        // request’s header list.
        for (const headerName of $19ea4d8ca1472521$require$requestBodyHeader)request.headersList.delete(headerName);
    }
    // 13. If request’s current URL’s origin is not same origin with locationURL’s
    //     origin, then for each headerName of CORS non-wildcard request-header name,
    //     delete headerName from request’s header list.
    if (!$19ea4d8ca1472521$require$sameOrigin($19ea4d8ca1472521$require$requestCurrentURL(request), locationURL)) {
        // https://fetch.spec.whatwg.org/#cors-non-wildcard-request-header-name
        request.headersList.delete('authorization');
        // https://fetch.spec.whatwg.org/#authentication-entries
        request.headersList.delete('proxy-authorization', true);
        // "Cookie" and "Host" are forbidden request-headers, which undici doesn't implement.
        request.headersList.delete('cookie');
        request.headersList.delete('host');
    }
    // 14. If request’s body is non-null, then set request’s body to the first return
    // value of safely extracting request’s body’s source.
    if (request.body != null) {
        $7rHIN$assert(request.body.source != null);
        request.body = $19ea4d8ca1472521$require$safelyExtractBody(request.body.source)[0];
    }
    // 15. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 16. Set timingInfo’s redirect end time and post-redirect start time to the
    // coarsened shared current time given fetchParams’s cross-origin isolated
    // capability.
    timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = $19ea4d8ca1472521$require$coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
    // 17. If timingInfo’s redirect start time is 0, then set timingInfo’s
    //  redirect start time to timingInfo’s start time.
    if (timingInfo.redirectStartTime === 0) timingInfo.redirectStartTime = timingInfo.startTime;
    // 18. Append locationURL to request’s URL list.
    request.urlList.push(locationURL);
    // 19. Invoke set request’s referrer policy on redirect on request and
    // actualResponse.
    $19ea4d8ca1472521$require$setRequestReferrerPolicyOnRedirect(request, actualResponse);
    // 20. Return the result of running main fetch given fetchParams and true.
    return $19ea4d8ca1472521$var$mainFetch(fetchParams, true);
}
// https://fetch.spec.whatwg.org/#http-network-or-cache-fetch
async function $19ea4d8ca1472521$var$httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch = false, isNewConnectionFetch = false) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let httpFetchParams be null.
    let httpFetchParams = null;
    // 3. Let httpRequest be null.
    let httpRequest = null;
    // 4. Let response be null.
    let response = null;
    // 5. Let storedResponse be null.
    // TODO: cache
    // 6. Let httpCache be null.
    const httpCache = null;
    // 7. Let the revalidatingFlag be unset.
    const revalidatingFlag = false;
    // 8. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. If request’s window is "no-window" and request’s redirect mode is
    //    "error", then set httpFetchParams to fetchParams and httpRequest to
    //    request.
    if (request.window === 'no-window' && request.redirect === 'error') {
        httpFetchParams = fetchParams;
        httpRequest = request;
    } else {
        // Otherwise:
        // 1. Set httpRequest to a clone of request.
        httpRequest = $19ea4d8ca1472521$require$makeRequest(request);
        // 2. Set httpFetchParams to a copy of fetchParams.
        httpFetchParams = {
            ...fetchParams
        };
        // 3. Set httpFetchParams’s request to httpRequest.
        httpFetchParams.request = httpRequest;
    }
    //    3. Let includeCredentials be true if one of
    const includeCredentials = request.credentials === 'include' || request.credentials === 'same-origin' && request.responseTainting === 'basic';
    //    4. Let contentLength be httpRequest’s body’s length, if httpRequest’s
    //    body is non-null; otherwise null.
    const contentLength = httpRequest.body ? httpRequest.body.length : null;
    //    5. Let contentLengthHeaderValue be null.
    let contentLengthHeaderValue = null;
    //    6. If httpRequest’s body is null and httpRequest’s method is `POST` or
    //    `PUT`, then set contentLengthHeaderValue to `0`.
    if (httpRequest.body == null && [
        'POST',
        'PUT'
    ].includes(httpRequest.method)) contentLengthHeaderValue = '0';
    //    7. If contentLength is non-null, then set contentLengthHeaderValue to
    //    contentLength, serialized and isomorphic encoded.
    if (contentLength != null) contentLengthHeaderValue = $19ea4d8ca1472521$require$isomorphicEncode(`${contentLength}`);
    //    8. If contentLengthHeaderValue is non-null, then append
    //    `Content-Length`/contentLengthHeaderValue to httpRequest’s header
    //    list.
    if (contentLengthHeaderValue != null) httpRequest.headersList.append('content-length', contentLengthHeaderValue);
    //    9. If contentLengthHeaderValue is non-null, then append (`Content-Length`,
    //    contentLengthHeaderValue) to httpRequest’s header list.
    //    10. If contentLength is non-null and httpRequest’s keepalive is true,
    //    then:
    contentLength != null && httpRequest.keepalive;
    //    11. If httpRequest’s referrer is a URL, then append
    //    `Referer`/httpRequest’s referrer, serialized and isomorphic encoded,
    //     to httpRequest’s header list.
    if (httpRequest.referrer instanceof URL) httpRequest.headersList.append('referer', $19ea4d8ca1472521$require$isomorphicEncode(httpRequest.referrer.href));
    //    12. Append a request `Origin` header for httpRequest.
    $19ea4d8ca1472521$require$appendRequestOriginHeader(httpRequest);
    //    13. Append the Fetch metadata headers for httpRequest. [FETCH-METADATA]
    $19ea4d8ca1472521$require$appendFetchMetadata(httpRequest);
    //    14. If httpRequest’s header list does not contain `User-Agent`, then
    //    user agents should append `User-Agent`/default `User-Agent` value to
    //    httpRequest’s header list.
    if (!httpRequest.headersList.contains('user-agent')) httpRequest.headersList.append('user-agent', typeof esbuildDetection === 'undefined' ? 'undici' : 'node');
    //    15. If httpRequest’s cache mode is "default" and httpRequest’s header
    //    list contains `If-Modified-Since`, `If-None-Match`,
    //    `If-Unmodified-Since`, `If-Match`, or `If-Range`, then set
    //    httpRequest’s cache mode to "no-store".
    if (httpRequest.cache === 'default' && (httpRequest.headersList.contains('if-modified-since') || httpRequest.headersList.contains('if-none-match') || httpRequest.headersList.contains('if-unmodified-since') || httpRequest.headersList.contains('if-match') || httpRequest.headersList.contains('if-range'))) httpRequest.cache = 'no-store';
    //    16. If httpRequest’s cache mode is "no-cache", httpRequest’s prevent
    //    no-cache cache-control header modification flag is unset, and
    //    httpRequest’s header list does not contain `Cache-Control`, then append
    //    `Cache-Control`/`max-age=0` to httpRequest’s header list.
    if (httpRequest.cache === 'no-cache' && !httpRequest.preventNoCacheCacheControlHeaderModification && !httpRequest.headersList.contains('cache-control')) httpRequest.headersList.append('cache-control', 'max-age=0');
    //    17. If httpRequest’s cache mode is "no-store" or "reload", then:
    if (httpRequest.cache === 'no-store' || httpRequest.cache === 'reload') {
        // 1. If httpRequest’s header list does not contain `Pragma`, then append
        // `Pragma`/`no-cache` to httpRequest’s header list.
        if (!httpRequest.headersList.contains('pragma')) httpRequest.headersList.append('pragma', 'no-cache');
        // 2. If httpRequest’s header list does not contain `Cache-Control`,
        // then append `Cache-Control`/`no-cache` to httpRequest’s header list.
        if (!httpRequest.headersList.contains('cache-control')) httpRequest.headersList.append('cache-control', 'no-cache');
    }
    //    18. If httpRequest’s header list contains `Range`, then append
    //    `Accept-Encoding`/`identity` to httpRequest’s header list.
    if (httpRequest.headersList.contains('range')) httpRequest.headersList.append('accept-encoding', 'identity');
    //    19. Modify httpRequest’s header list per HTTP. Do not append a given
    //    header if httpRequest’s header list contains that header’s name.
    //    TODO: https://github.com/whatwg/fetch/issues/1285#issuecomment-896560129
    if (!httpRequest.headersList.contains('accept-encoding')) {
        if ($19ea4d8ca1472521$require$urlHasHttpsScheme($19ea4d8ca1472521$require$requestCurrentURL(httpRequest))) httpRequest.headersList.append('accept-encoding', 'br, gzip, deflate');
        else httpRequest.headersList.append('accept-encoding', 'gzip, deflate');
    }
    httpRequest.headersList.delete('host');
    //    20. If includeCredentials is true, then:
    includeCredentials;
    //    21. If there’s a proxy-authentication entry, use it as appropriate.
    //    TODO: proxy-authentication
    //    22. Set httpCache to the result of determining the HTTP cache
    //    partition, given httpRequest.
    //    TODO: cache
    //    23. If httpCache is null, then set httpRequest’s cache mode to
    //    "no-store".
    if (httpCache == null) httpRequest.cache = 'no-store';
    //    24. If httpRequest’s cache mode is neither "no-store" nor "reload",
    //    then:
    httpRequest.mode !== 'no-store' && httpRequest.mode;
    // 9. If aborted, then return the appropriate network error for fetchParams.
    // TODO
    // 10. If response is null, then:
    if (response == null) {
        // 1. If httpRequest’s cache mode is "only-if-cached", then return a
        // network error.
        if (httpRequest.mode === 'only-if-cached') return $19ea4d8ca1472521$require$makeNetworkError('only if cached');
        // 2. Let forwardResponse be the result of running HTTP-network fetch
        // given httpFetchParams, includeCredentials, and isNewConnectionFetch.
        const forwardResponse = await $19ea4d8ca1472521$var$httpNetworkFetch(httpFetchParams, includeCredentials, isNewConnectionFetch);
        // 3. If httpRequest’s method is unsafe and forwardResponse’s status is
        // in the range 200 to 399, inclusive, invalidate appropriate stored
        // responses in httpCache, as per the "Invalidation" chapter of HTTP
        // Caching, and set storedResponse to null. [HTTP-CACHING]
        !$19ea4d8ca1472521$require$safeMethodsSet.has(httpRequest.method) && forwardResponse.status >= 200 && forwardResponse.status;
        // 4. If the revalidatingFlag is set and forwardResponse’s status is 304,
        // then:
        revalidatingFlag && forwardResponse.status;
        // 5. If response is null, then:
        if (response == null) // 1. Set response to forwardResponse.
        response = forwardResponse;
    }
    // 11. Set response’s URL list to a clone of httpRequest’s URL list.
    response.urlList = [
        ...httpRequest.urlList
    ];
    // 12. If httpRequest’s header list contains `Range`, then set response’s
    // range-requested flag.
    if (httpRequest.headersList.contains('range')) response.rangeRequested = true;
    // 13. Set response’s request-includes-credentials to includeCredentials.
    response.requestIncludesCredentials = includeCredentials;
    // 14. If response’s status is 401, httpRequest’s response tainting is not
    // "cors", includeCredentials is true, and request’s window is an environment
    // settings object, then:
    // TODO
    // 15. If response’s status is 407, then:
    if (response.status === 407) {
        // 1. If request’s window is "no-window", then return a network error.
        if (request.window === 'no-window') return $19ea4d8ca1472521$require$makeNetworkError();
        // 2. ???
        // 3. If fetchParams is canceled, then return the appropriate network error for fetchParams.
        if ($19ea4d8ca1472521$require$isCancelled(fetchParams)) return $19ea4d8ca1472521$require$makeAppropriateNetworkError(fetchParams);
        // 4. Prompt the end user as appropriate in request’s window and store
        // the result as a proxy-authentication entry. [HTTP-AUTH]
        // TODO: Invoke some kind of callback?
        // 5. Set response to the result of running HTTP-network-or-cache fetch given
        // fetchParams.
        // TODO
        return $19ea4d8ca1472521$require$makeNetworkError('proxy authentication required');
    }
    // 16. If all of the following are true
    if (// response’s status is 421
    response.status === 421 && // isNewConnectionFetch is false
    !isNewConnectionFetch && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
    (request.body == null || request.body.source != null)) {
        // then:
        // 1. If fetchParams is canceled, then return the appropriate network error for fetchParams.
        if ($19ea4d8ca1472521$require$isCancelled(fetchParams)) return $19ea4d8ca1472521$require$makeAppropriateNetworkError(fetchParams);
        // 2. Set response to the result of running HTTP-network-or-cache
        // fetch given fetchParams, isAuthenticationFetch, and true.
        // TODO (spec): The spec doesn't specify this but we need to cancel
        // the active response before we can start a new one.
        // https://github.com/whatwg/fetch/issues/1293
        fetchParams.controller.connection.destroy();
        response = await $19ea4d8ca1472521$var$httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch, true);
    }
    // 17. If isAuthenticationFetch is true, then create an authentication entry
    isAuthenticationFetch;
    // 18. Return response.
    return response;
}

// https://fetch.spec.whatwg.org/#http-network-fetch
async function $19ea4d8ca1472521$var$httpNetworkFetch(fetchParams, includeCredentials = false, forceNewConnection = false) {
    $7rHIN$assert(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
    fetchParams.controller.connection = {
        abort: null,
        destroyed: false,
        destroy (err) {
            if (!this.destroyed) {
                this.destroyed = true;
                this.abort?.(err ?? new $19ea4d8ca1472521$require$DOMException('The operation was aborted.', 'AbortError'));
            }
        }
    };
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let response be null.
    let response = null;
    // 3. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 4. Let httpCache be the result of determining the HTTP cache partition,
    // given request.
    // TODO: cache
    const httpCache = null;
    // 5. If httpCache is null, then set request’s cache mode to "no-store".
    if (httpCache == null) request.cache = 'no-store';
    // 6. Let networkPartitionKey be the result of determining the network
    // partition key given request.
    // TODO
    // 7. Let newConnection be "yes" if forceNewConnection is true; otherwise
    // "no".
    const newConnection = forceNewConnection ? 'yes' : 'no' // eslint-disable-line no-unused-vars
    ;
    // 8. Switch on request’s mode:
    request.mode;
    // 9. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. If connection is failure, then return a network error.
    //    2. Set timingInfo’s final connection timing info to the result of
    //    calling clamp and coarsen connection timing info with connection’s
    //    timing info, timingInfo’s post-redirect start time, and fetchParams’s
    //    cross-origin isolated capability.
    //    3. If connection is not an HTTP/2 connection, request’s body is non-null,
    //    and request’s body’s source is null, then append (`Transfer-Encoding`,
    //    `chunked`) to request’s header list.
    //    4. Set timingInfo’s final network-request start time to the coarsened
    //    shared current time given fetchParams’s cross-origin isolated
    //    capability.
    //    5. Set response to the result of making an HTTP request over connection
    //    using request with the following caveats:
    //        - Follow the relevant requirements from HTTP. [HTTP] [HTTP-SEMANTICS]
    //        [HTTP-COND] [HTTP-CACHING] [HTTP-AUTH]
    //        - If request’s body is non-null, and request’s body’s source is null,
    //        then the user agent may have a buffer of up to 64 kibibytes and store
    //        a part of request’s body in that buffer. If the user agent reads from
    //        request’s body beyond that buffer’s size and the user agent needs to
    //        resend request, then instead return a network error.
    //        - Set timingInfo’s final network-response start time to the coarsened
    //        shared current time given fetchParams’s cross-origin isolated capability,
    //        immediately after the user agent’s HTTP parser receives the first byte
    //        of the response (e.g., frame header bytes for HTTP/2 or response status
    //        line for HTTP/1.x).
    //        - Wait until all the headers are transmitted.
    //        - Any responses whose status is in the range 100 to 199, inclusive,
    //        and is not 101, are to be ignored, except for the purposes of setting
    //        timingInfo’s final network-response start time above.
    //    - If request’s header list contains `Transfer-Encoding`/`chunked` and
    //    response is transferred via HTTP/1.0 or older, then return a network
    //    error.
    //    - If the HTTP request results in a TLS client certificate dialog, then:
    //        1. If request’s window is an environment settings object, make the
    //        dialog available in request’s window.
    //        2. Otherwise, return a network error.
    // To transmit request’s body body, run these steps:
    let requestBody = null;
    // 1. If body is null and fetchParams’s process request end-of-body is
    // non-null, then queue a fetch task given fetchParams’s process request
    // end-of-body and fetchParams’s task destination.
    if (request.body == null && fetchParams.processRequestEndOfBody) queueMicrotask(()=>fetchParams.processRequestEndOfBody());
    else if (request.body != null) {
        // 2. Otherwise, if body is non-null:
        //    1. Let processBodyChunk given bytes be these steps:
        const processBodyChunk = async function*(bytes) {
            // 1. If the ongoing fetch is terminated, then abort these steps.
            if ($19ea4d8ca1472521$require$isCancelled(fetchParams)) return;
            // 2. Run this step in parallel: transmit bytes.
            yield bytes;
            // 3. If fetchParams’s process request body is non-null, then run
            // fetchParams’s process request body given bytes’s length.
            fetchParams.processRequestBodyChunkLength?.(bytes.byteLength);
        };
        // 2. Let processEndOfBody be these steps:
        const processEndOfBody = ()=>{
            // 1. If fetchParams is canceled, then abort these steps.
            if ($19ea4d8ca1472521$require$isCancelled(fetchParams)) return;
            // 2. If fetchParams’s process request end-of-body is non-null,
            // then run fetchParams’s process request end-of-body.
            if (fetchParams.processRequestEndOfBody) fetchParams.processRequestEndOfBody();
        };
        // 3. Let processBodyError given e be these steps:
        const processBodyError = (e)=>{
            // 1. If fetchParams is canceled, then abort these steps.
            if ($19ea4d8ca1472521$require$isCancelled(fetchParams)) return;
            // 2. If e is an "AbortError" DOMException, then abort fetchParams’s controller.
            if (e.name === 'AbortError') fetchParams.controller.abort();
            else fetchParams.controller.terminate(e);
        };
        // 4. Incrementally read request’s body given processBodyChunk, processEndOfBody,
        // processBodyError, and fetchParams’s task destination.
        requestBody = async function*() {
            try {
                for await (const bytes of request.body.stream)yield* processBodyChunk(bytes);
                processEndOfBody();
            } catch (err) {
                processBodyError(err);
            }
        }();
    }
    try {
        // socket is only provided for websockets
        const { body: body, status: status, statusText: statusText, headersList: headersList, socket: socket } = await dispatch({
            body: requestBody
        });
        if (socket) response = $19ea4d8ca1472521$require$makeResponse({
            status: status,
            statusText: statusText,
            headersList: headersList,
            socket: socket
        });
        else {
            const iterator = body[Symbol.asyncIterator]();
            fetchParams.controller.next = ()=>iterator.next();
            response = $19ea4d8ca1472521$require$makeResponse({
                status: status,
                statusText: statusText,
                headersList: headersList
            });
        }
    } catch (err) {
        // 10. If aborted, then:
        if (err.name === 'AbortError') {
            // 1. If connection uses HTTP/2, then transmit an RST_STREAM frame.
            fetchParams.controller.connection.destroy();
            // 2. Return the appropriate network error for fetchParams.
            return $19ea4d8ca1472521$require$makeAppropriateNetworkError(fetchParams, err);
        }
        return $19ea4d8ca1472521$require$makeNetworkError(err);
    }
    // 11. Let pullAlgorithm be an action that resumes the ongoing fetch
    // if it is suspended.
    const pullAlgorithm = ()=>{
        fetchParams.controller.resume();
    };
    // 12. Let cancelAlgorithm be an algorithm that aborts fetchParams’s
    // controller with reason, given reason.
    const cancelAlgorithm = (reason)=>{
        fetchParams.controller.abort(reason);
    };
    // 13. Let highWaterMark be a non-negative, non-NaN number, chosen by
    // the user agent.
    // TODO
    // 14. Let sizeAlgorithm be an algorithm that accepts a chunk object
    // and returns a non-negative, non-NaN, non-infinite number, chosen by the user agent.
    // TODO
    // 15. Let stream be a new ReadableStream.
    // 16. Set up stream with pullAlgorithm set to pullAlgorithm,
    // cancelAlgorithm set to cancelAlgorithm, highWaterMark set to
    // highWaterMark, and sizeAlgorithm set to sizeAlgorithm.
    if (!$19ea4d8ca1472521$var$ReadableStream) $19ea4d8ca1472521$var$ReadableStream = $7rHIN$streamweb.ReadableStream;
    const stream = new $19ea4d8ca1472521$var$ReadableStream({
        async start (controller) {
            fetchParams.controller.controller = controller;
        },
        async pull (controller) {
            await pullAlgorithm(controller);
        },
        async cancel (reason) {
            await cancelAlgorithm(reason);
        }
    }, {
        highWaterMark: 0,
        size () {
            return 1;
        }
    });
    // 17. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. Set response’s body to a new body whose stream is stream.
    response.body = {
        stream: stream
    };
    //    2. If response is not a network error and request’s cache mode is
    //    not "no-store", then update response in httpCache for request.
    //    TODO
    //    3. If includeCredentials is true and the user agent is not configured
    //    to block cookies for request (see section 7 of [COOKIES]), then run the
    //    "set-cookie-string" parsing algorithm (see section 5.2 of [COOKIES]) on
    //    the value of each header whose name is a byte-case-insensitive match for
    //    `Set-Cookie` in response’s header list, if any, and request’s current URL.
    //    TODO
    // 18. If aborted, then:
    // TODO
    // 19. Run these steps in parallel:
    //    1. Run these steps, but abort when fetchParams is canceled:
    fetchParams.controller.on('terminated', onAborted);
    fetchParams.controller.resume = async ()=>{
        // 1. While true
        while(true){
            // 1-3. See onData...
            // 4. Set bytes to the result of handling content codings given
            // codings and bytes.
            let bytes;
            let isFailure;
            try {
                const { done: done, value: value } = await fetchParams.controller.next();
                if ($19ea4d8ca1472521$require$isAborted(fetchParams)) break;
                bytes = done ? undefined : value;
            } catch (err) {
                if (fetchParams.controller.ended && !timingInfo.encodedBodySize) // zlib doesn't like empty streams.
                bytes = undefined;
                else {
                    bytes = err;
                    // err may be propagated from the result of calling readablestream.cancel,
                    // which might not be an error. https://github.com/nodejs/undici/issues/2009
                    isFailure = true;
                }
            }
            if (bytes === undefined) {
                // 2. Otherwise, if the bytes transmission for response’s message
                // body is done normally and stream is readable, then close
                // stream, finalize response for fetchParams and response, and
                // abort these in-parallel steps.
                $19ea4d8ca1472521$require$readableStreamClose(fetchParams.controller.controller);
                $19ea4d8ca1472521$var$finalizeResponse(fetchParams, response);
                return;
            }
            // 5. Increase timingInfo’s decoded body size by bytes’s length.
            timingInfo.decodedBodySize += bytes?.byteLength ?? 0;
            // 6. If bytes is failure, then terminate fetchParams’s controller.
            if (isFailure) {
                fetchParams.controller.terminate(bytes);
                return;
            }
            // 7. Enqueue a Uint8Array wrapping an ArrayBuffer containing bytes
            // into stream.
            fetchParams.controller.controller.enqueue(new Uint8Array(bytes));
            // 8. If stream is errored, then terminate the ongoing fetch.
            if ($19ea4d8ca1472521$require$isErrored(stream)) {
                fetchParams.controller.terminate();
                return;
            }
            // 9. If stream doesn’t need more data ask the user agent to suspend
            // the ongoing fetch.
            if (!fetchParams.controller.controller.desiredSize) return;
        }
    };
    //    2. If aborted, then:
    function onAborted(reason) {
        // 2. If fetchParams is aborted, then:
        if ($19ea4d8ca1472521$require$isAborted(fetchParams)) {
            // 1. Set response’s aborted flag.
            response.aborted = true;
            // 2. If stream is readable, then error stream with the result of
            //    deserialize a serialized abort reason given fetchParams’s
            //    controller’s serialized abort reason and an
            //    implementation-defined realm.
            if ($19ea4d8ca1472521$require$isReadable(stream)) fetchParams.controller.controller.error(fetchParams.controller.serializedAbortReason);
        } else // 3. Otherwise, if stream is readable, error stream with a TypeError.
        if ($19ea4d8ca1472521$require$isReadable(stream)) fetchParams.controller.controller.error(new TypeError('terminated', {
            cause: $19ea4d8ca1472521$require$isErrorLike(reason) ? reason : undefined
        }));
        // 4. If connection uses HTTP/2, then transmit an RST_STREAM frame.
        // 5. Otherwise, the user agent should close connection unless it would be bad for performance to do so.
        fetchParams.controller.connection.destroy();
    }
    // 20. Return response.
    return response;
    async function dispatch({ body: body }) {
        const url = $19ea4d8ca1472521$require$requestCurrentURL(request);
        /** @type {import('../..').Agent} */ const agent = fetchParams.controller.dispatcher;
        return new Promise((resolve, reject)=>agent.dispatch({
                path: url.pathname + url.search,
                origin: url.origin,
                method: request.method,
                body: fetchParams.controller.dispatcher.isMockActive ? request.body && (request.body.source || request.body.stream) : body,
                headers: request.headersList.entries,
                maxRedirections: 0,
                upgrade: request.mode === 'websocket' ? 'websocket' : undefined
            }, {
                body: null,
                abort: null,
                onConnect (abort) {
                    // TODO (fix): Do we need connection here?
                    const { connection: connection } = fetchParams.controller;
                    if (connection.destroyed) abort(new $19ea4d8ca1472521$require$DOMException('The operation was aborted.', 'AbortError'));
                    else {
                        fetchParams.controller.on('terminated', abort);
                        this.abort = connection.abort = abort;
                    }
                },
                onHeaders (status, headersList, resume, statusText) {
                    if (status < 200) return;
                    let codings = [];
                    let location = '';
                    const headers = new $19ea4d8ca1472521$require$Headers();
                    // For H2, the headers are a plain JS object
                    // We distinguish between them and iterate accordingly
                    if (Array.isArray(headersList)) for(let n = 0; n < headersList.length; n += 2){
                        const key = headersList[n + 0].toString('latin1');
                        const val = headersList[n + 1].toString('latin1');
                        if (key.toLowerCase() === 'content-encoding') // https://www.rfc-editor.org/rfc/rfc7231#section-3.1.2.1
                        // "All content-coding values are case-insensitive..."
                        codings = val.toLowerCase().split(',').map((x)=>x.trim());
                        else if (key.toLowerCase() === 'location') location = val;
                        headers[$19ea4d8ca1472521$require$kHeadersList].append(key, val);
                    }
                    else {
                        const keys = Object.keys(headersList);
                        for (const key of keys){
                            const val = headersList[key];
                            if (key.toLowerCase() === 'content-encoding') // https://www.rfc-editor.org/rfc/rfc7231#section-3.1.2.1
                            // "All content-coding values are case-insensitive..."
                            codings = val.toLowerCase().split(',').map((x)=>x.trim()).reverse();
                            else if (key.toLowerCase() === 'location') location = val;
                            headers[$19ea4d8ca1472521$require$kHeadersList].append(key, val);
                        }
                    }
                    this.body = new $19ea4d8ca1472521$require$Readable({
                        read: resume
                    });
                    const decoders = [];
                    const willFollow = request.redirect === 'follow' && location && $19ea4d8ca1472521$require$redirectStatusSet.has(status);
                    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
                    if (request.method !== 'HEAD' && request.method !== 'CONNECT' && !$19ea4d8ca1472521$require$nullBodyStatus.includes(status) && !willFollow) for (const coding of codings){
                        // https://www.rfc-editor.org/rfc/rfc9112.html#section-7.2
                        if (coding === 'x-gzip' || coding === 'gzip') decoders.push($7rHIN$zlib.createGunzip({
                            // Be less strict when decoding compressed responses, since sometimes
                            // servers send slightly invalid responses that are still accepted
                            // by common browsers.
                            // Always using Z_SYNC_FLUSH is what cURL does.
                            flush: $7rHIN$zlib.constants.Z_SYNC_FLUSH,
                            finishFlush: $7rHIN$zlib.constants.Z_SYNC_FLUSH
                        }));
                        else if (coding === 'deflate') decoders.push($7rHIN$zlib.createInflate());
                        else if (coding === 'br') decoders.push($7rHIN$zlib.createBrotliDecompress());
                        else {
                            decoders.length = 0;
                            break;
                        }
                    }
                    resolve({
                        status: status,
                        statusText: statusText,
                        headersList: headers[$19ea4d8ca1472521$require$kHeadersList],
                        body: decoders.length ? $19ea4d8ca1472521$require$pipeline(this.body, ...decoders, ()=>{}) : this.body.on('error', ()=>{})
                    });
                    return true;
                },
                onData (chunk) {
                    if (fetchParams.controller.dump) return;
                    // 1. If one or more bytes have been transmitted from response’s
                    // message body, then:
                    //  1. Let bytes be the transmitted bytes.
                    const bytes = chunk;
                    //  2. Let codings be the result of extracting header list values
                    //  given `Content-Encoding` and response’s header list.
                    //  See pullAlgorithm.
                    //  3. Increase timingInfo’s encoded body size by bytes’s length.
                    timingInfo.encodedBodySize += bytes.byteLength;
                    //  4. See pullAlgorithm...
                    return this.body.push(bytes);
                },
                onComplete () {
                    if (this.abort) fetchParams.controller.off('terminated', this.abort);
                    fetchParams.controller.ended = true;
                    this.body.push(null);
                },
                onError (error) {
                    if (this.abort) fetchParams.controller.off('terminated', this.abort);
                    this.body?.destroy(error);
                    fetchParams.controller.terminate(error);
                    reject(error);
                },
                onUpgrade (status, headersList, socket) {
                    if (status !== 101) return;
                    const headers = new $19ea4d8ca1472521$require$Headers();
                    for(let n = 0; n < headersList.length; n += 2){
                        const key = headersList[n + 0].toString('latin1');
                        const val = headersList[n + 1].toString('latin1');
                        headers[$19ea4d8ca1472521$require$kHeadersList].append(key, val);
                    }
                    resolve({
                        status: status,
                        statusText: $19ea4d8ca1472521$require$STATUS_CODES[status],
                        headersList: headers[$19ea4d8ca1472521$require$kHeadersList],
                        socket: socket
                    });
                    return true;
                }
            }));
    }
}
module.exports = {
    fetch: $19ea4d8ca1472521$var$fetch,
    Fetch: $19ea4d8ca1472521$var$Fetch,
    fetching: $19ea4d8ca1472521$var$fetching,
    finalizeAndReportTiming: $19ea4d8ca1472521$var$finalizeAndReportTiming
};

});
parcelRegister("g8vdd", function(module, exports) {
module.exports = new URL("response.a1a02e8d.js", "file:" + __filename).toString();

});

parcelRegister("4Z2eT", function(module, exports) {
module.exports = new URL("request.496a0aac.js", "file:" + __filename).toString();

});



