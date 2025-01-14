require("./body.617da059.js");
require("./headers.f20c41e6.js");
require("./dispatcher-weakref.e1d10064.js");
require("./util.c7a5ec55.js");
require("./util.2100f7c8.js");
require("./constants.8e3661dd.js");
require("./symbols.71ce8940.js");
require("./webidl.107e124b.js");
require("./global.d3d2cc7c.js");
require("./dataURL.134f460a.js");
require("./symbols.b8a391fa.js");
var $2DnWh$assert = require("assert");
var $2DnWh$events = require("events");
var $2DnWh$streamweb = require("stream/web");


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
parcelRegister("8QOzY", function(module, exports) {
/* globals AbortController */ 'use strict';

var $hLZGr = parcelRequire("hLZGr");
var $671a6a0c64574dd2$require$extractBody = $hLZGr.extractBody;
var $671a6a0c64574dd2$require$mixinBody = $hLZGr.mixinBody;
var $671a6a0c64574dd2$require$cloneBody = $hLZGr.cloneBody;

var $3FPVg = parcelRequire("3FPVg");
var $671a6a0c64574dd2$require$Headers = $3FPVg.Headers;
var $671a6a0c64574dd2$require$fillHeaders = $3FPVg.fill;
var $671a6a0c64574dd2$require$HeadersList = $3FPVg.HeadersList;

const { FinalizationRegistry: $671a6a0c64574dd2$var$FinalizationRegistry } = (parcelRequire("4Bu0J"))();

var $iiSZx = parcelRequire("iiSZx");

var $eXsCL = parcelRequire("eXsCL");
var $671a6a0c64574dd2$require$isValidHTTPToken = $eXsCL.isValidHTTPToken;
var $671a6a0c64574dd2$require$sameOrigin = $eXsCL.sameOrigin;
var $671a6a0c64574dd2$require$normalizeMethod = $eXsCL.normalizeMethod;
var $671a6a0c64574dd2$require$makePolicyContainer = $eXsCL.makePolicyContainer;
var $671a6a0c64574dd2$require$normalizeMethodRecord = $eXsCL.normalizeMethodRecord;

var $5aYxL = parcelRequire("5aYxL");
var $671a6a0c64574dd2$require$forbiddenMethodsSet = $5aYxL.forbiddenMethodsSet;
var $671a6a0c64574dd2$require$corsSafeListedMethodsSet = $5aYxL.corsSafeListedMethodsSet;
var $671a6a0c64574dd2$require$referrerPolicy = $5aYxL.referrerPolicy;
var $671a6a0c64574dd2$require$requestRedirect = $5aYxL.requestRedirect;
var $671a6a0c64574dd2$require$requestMode = $5aYxL.requestMode;
var $671a6a0c64574dd2$require$requestCredentials = $5aYxL.requestCredentials;
var $671a6a0c64574dd2$require$requestCache = $5aYxL.requestCache;
var $671a6a0c64574dd2$require$requestDuplex = $5aYxL.requestDuplex;
const { kEnumerableProperty: $671a6a0c64574dd2$var$kEnumerableProperty } = $iiSZx;

var $3isYS = parcelRequire("3isYS");
var $671a6a0c64574dd2$require$kHeaders = $3isYS.kHeaders;
var $671a6a0c64574dd2$require$kSignal = $3isYS.kSignal;
var $671a6a0c64574dd2$require$kState = $3isYS.kState;
var $671a6a0c64574dd2$require$kGuard = $3isYS.kGuard;
var $671a6a0c64574dd2$require$kRealm = $3isYS.kRealm;

var $cpX4f = parcelRequire("cpX4f");
var $671a6a0c64574dd2$require$webidl = $cpX4f.webidl;

var $39VSP = parcelRequire("39VSP");
var $671a6a0c64574dd2$require$getGlobalOrigin = $39VSP.getGlobalOrigin;

var $4o5iY = parcelRequire("4o5iY");
var $671a6a0c64574dd2$require$URLSerializer = $4o5iY.URLSerializer;

var $dSiuY = parcelRequire("dSiuY");
var $671a6a0c64574dd2$require$kHeadersList = $dSiuY.kHeadersList;
var $671a6a0c64574dd2$require$kConstruct = $dSiuY.kConstruct;


var $671a6a0c64574dd2$require$getMaxListeners = $2DnWh$events.getMaxListeners;
var $671a6a0c64574dd2$require$setMaxListeners = $2DnWh$events.setMaxListeners;
var $671a6a0c64574dd2$require$getEventListeners = $2DnWh$events.getEventListeners;
var $671a6a0c64574dd2$require$defaultMaxListeners = $2DnWh$events.defaultMaxListeners;
let $671a6a0c64574dd2$var$TransformStream = globalThis.TransformStream;
const $671a6a0c64574dd2$var$kAbortController = Symbol('abortController');
const $671a6a0c64574dd2$var$requestFinalizer = new $671a6a0c64574dd2$var$FinalizationRegistry(({ signal: signal, abort: abort })=>{
    signal.removeEventListener('abort', abort);
});

// https://fetch.spec.whatwg.org/#request-class
class $671a6a0c64574dd2$var$Request {
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(input, init = {}){
        if (input === $671a6a0c64574dd2$require$kConstruct) return;
        $671a6a0c64574dd2$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Request constructor'
        });
        input = $671a6a0c64574dd2$require$webidl.converters.RequestInfo(input);
        init = $671a6a0c64574dd2$require$webidl.converters.RequestInit(init);
        // https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object
        this[$671a6a0c64574dd2$require$kRealm] = {
            settingsObject: {
                baseUrl: $671a6a0c64574dd2$require$getGlobalOrigin(),
                get origin () {
                    return this.baseUrl?.origin;
                },
                policyContainer: $671a6a0c64574dd2$require$makePolicyContainer()
            }
        };
        // 1. Let request be null.
        let request = null;
        // 2. Let fallbackMode be null.
        let fallbackMode = null;
        // 3. Let baseURL be this’s relevant settings object’s API base URL.
        const baseUrl = this[$671a6a0c64574dd2$require$kRealm].settingsObject.baseUrl;
        // 4. Let signal be null.
        let signal = null;
        // 5. If input is a string, then:
        if (typeof input === 'string') {
            // 1. Let parsedURL be the result of parsing input with baseURL.
            // 2. If parsedURL is failure, then throw a TypeError.
            let parsedURL;
            try {
                parsedURL = new URL(input, baseUrl);
            } catch (err) {
                throw new TypeError('Failed to parse URL from ' + input, {
                    cause: err
                });
            }
            // 3. If parsedURL includes credentials, then throw a TypeError.
            if (parsedURL.username || parsedURL.password) throw new TypeError('Request cannot be constructed from a URL that includes credentials: ' + input);
            // 4. Set request to a new request whose URL is parsedURL.
            request = $671a6a0c64574dd2$var$makeRequest({
                urlList: [
                    parsedURL
                ]
            });
            // 5. Set fallbackMode to "cors".
            fallbackMode = 'cors';
        } else {
            // 6. Otherwise:
            // 7. Assert: input is a Request object.
            $2DnWh$assert(input instanceof $671a6a0c64574dd2$var$Request);
            // 8. Set request to input’s request.
            request = input[$671a6a0c64574dd2$require$kState];
            // 9. Set signal to input’s signal.
            signal = input[$671a6a0c64574dd2$require$kSignal];
        }
        // 7. Let origin be this’s relevant settings object’s origin.
        const origin = this[$671a6a0c64574dd2$require$kRealm].settingsObject.origin;
        // 8. Let window be "client".
        let window = 'client';
        // 9. If request’s window is an environment settings object and its origin
        // is same origin with origin, then set window to request’s window.
        if (request.window?.constructor?.name === 'EnvironmentSettingsObject' && $671a6a0c64574dd2$require$sameOrigin(request.window, origin)) window = request.window;
        // 10. If init["window"] exists and is non-null, then throw a TypeError.
        if (init.window != null) throw new TypeError(`'window' option '${window}' must be null`);
        // 11. If init["window"] exists, then set window to "no-window".
        if ('window' in init) window = 'no-window';
        // 12. Set request to a new request with the following properties:
        request = $671a6a0c64574dd2$var$makeRequest({
            // URL request’s URL.
            // undici implementation note: this is set as the first item in request's urlList in makeRequest
            // method request’s method.
            method: request.method,
            // header list A copy of request’s header list.
            // undici implementation note: headersList is cloned in makeRequest
            headersList: request.headersList,
            // unsafe-request flag Set.
            unsafeRequest: request.unsafeRequest,
            // client This’s relevant settings object.
            client: this[$671a6a0c64574dd2$require$kRealm].settingsObject,
            window: // window window.
            window,
            // priority request’s priority.
            priority: request.priority,
            // origin request’s origin. The propagation of the origin is only significant for navigation requests
            // being handled by a service worker. In this scenario a request can have an origin that is different
            // from the current client.
            origin: request.origin,
            // referrer request’s referrer.
            referrer: request.referrer,
            // referrer policy request’s referrer policy.
            referrerPolicy: request.referrerPolicy,
            // mode request’s mode.
            mode: request.mode,
            // credentials mode request’s credentials mode.
            credentials: request.credentials,
            // cache mode request’s cache mode.
            cache: request.cache,
            // redirect mode request’s redirect mode.
            redirect: request.redirect,
            // integrity metadata request’s integrity metadata.
            integrity: request.integrity,
            // keepalive request’s keepalive.
            keepalive: request.keepalive,
            // reload-navigation flag request’s reload-navigation flag.
            reloadNavigation: request.reloadNavigation,
            // history-navigation flag request’s history-navigation flag.
            historyNavigation: request.historyNavigation,
            // URL list A clone of request’s URL list.
            urlList: [
                ...request.urlList
            ]
        });
        const initHasKey = Object.keys(init).length !== 0;
        // 13. If init is not empty, then:
        if (initHasKey) {
            // 1. If request’s mode is "navigate", then set it to "same-origin".
            if (request.mode === 'navigate') request.mode = 'same-origin';
            // 2. Unset request’s reload-navigation flag.
            request.reloadNavigation = false;
            // 3. Unset request’s history-navigation flag.
            request.historyNavigation = false;
            // 4. Set request’s origin to "client".
            request.origin = 'client';
            // 5. Set request’s referrer to "client"
            request.referrer = 'client';
            // 6. Set request’s referrer policy to the empty string.
            request.referrerPolicy = '';
            // 7. Set request’s URL to request’s current URL.
            request.url = request.urlList[request.urlList.length - 1];
            // 8. Set request’s URL list to « request’s URL ».
            request.urlList = [
                request.url
            ];
        }
        // 14. If init["referrer"] exists, then:
        if (init.referrer !== undefined) {
            // 1. Let referrer be init["referrer"].
            const referrer = init.referrer;
            // 2. If referrer is the empty string, then set request’s referrer to "no-referrer".
            if (referrer === '') request.referrer = 'no-referrer';
            else {
                // 1. Let parsedReferrer be the result of parsing referrer with
                // baseURL.
                // 2. If parsedReferrer is failure, then throw a TypeError.
                let parsedReferrer;
                try {
                    parsedReferrer = new URL(referrer, baseUrl);
                } catch (err) {
                    throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, {
                        cause: err
                    });
                }
                // 3. If one of the following is true
                // - parsedReferrer’s scheme is "about" and path is the string "client"
                // - parsedReferrer’s origin is not same origin with origin
                // then set request’s referrer to "client".
                if (parsedReferrer.protocol === 'about:' && parsedReferrer.hostname === 'client' || origin && !$671a6a0c64574dd2$require$sameOrigin(parsedReferrer, this[$671a6a0c64574dd2$require$kRealm].settingsObject.baseUrl)) request.referrer = 'client';
                else // 4. Otherwise, set request’s referrer to parsedReferrer.
                request.referrer = parsedReferrer;
            }
        }
        // 15. If init["referrerPolicy"] exists, then set request’s referrer policy
        // to it.
        if (init.referrerPolicy !== undefined) request.referrerPolicy = init.referrerPolicy;
        // 16. Let mode be init["mode"] if it exists, and fallbackMode otherwise.
        let mode;
        if (init.mode !== undefined) mode = init.mode;
        else mode = fallbackMode;
        // 17. If mode is "navigate", then throw a TypeError.
        if (mode === 'navigate') throw $671a6a0c64574dd2$require$webidl.errors.exception({
            header: 'Request constructor',
            message: 'invalid request mode navigate.'
        });
        // 18. If mode is non-null, set request’s mode to mode.
        if (mode != null) request.mode = mode;
        // 19. If init["credentials"] exists, then set request’s credentials mode
        // to it.
        if (init.credentials !== undefined) request.credentials = init.credentials;
        // 18. If init["cache"] exists, then set request’s cache mode to it.
        if (init.cache !== undefined) request.cache = init.cache;
        // 21. If request’s cache mode is "only-if-cached" and request’s mode is
        // not "same-origin", then throw a TypeError.
        if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        // 22. If init["redirect"] exists, then set request’s redirect mode to it.
        if (init.redirect !== undefined) request.redirect = init.redirect;
        // 23. If init["integrity"] exists, then set request’s integrity metadata to it.
        if (init.integrity != null) request.integrity = String(init.integrity);
        // 24. If init["keepalive"] exists, then set request’s keepalive to it.
        if (init.keepalive !== undefined) request.keepalive = Boolean(init.keepalive);
        // 25. If init["method"] exists, then:
        if (init.method !== undefined) {
            // 1. Let method be init["method"].
            let method = init.method;
            // 2. If method is not a method or method is a forbidden method, then
            // throw a TypeError.
            if (!$671a6a0c64574dd2$require$isValidHTTPToken(method)) throw new TypeError(`'${method}' is not a valid HTTP method.`);
            if ($671a6a0c64574dd2$require$forbiddenMethodsSet.has(method.toUpperCase())) throw new TypeError(`'${method}' HTTP method is unsupported.`);
            // 3. Normalize method.
            method = $671a6a0c64574dd2$require$normalizeMethodRecord[method] ?? $671a6a0c64574dd2$require$normalizeMethod(method);
            // 4. Set request’s method to method.
            request.method = method;
        }
        // 26. If init["signal"] exists, then set signal to it.
        if (init.signal !== undefined) signal = init.signal;
        // 27. Set this’s request to request.
        this[$671a6a0c64574dd2$require$kState] = request;
        // 28. Set this’s signal to a new AbortSignal object with this’s relevant
        // Realm.
        // TODO: could this be simplified with AbortSignal.any
        // (https://dom.spec.whatwg.org/#dom-abortsignal-any)
        const ac = new AbortController();
        this[$671a6a0c64574dd2$require$kSignal] = ac.signal;
        this[$671a6a0c64574dd2$require$kSignal][$671a6a0c64574dd2$require$kRealm] = this[$671a6a0c64574dd2$require$kRealm];
        // 29. If signal is not null, then make this’s signal follow signal.
        if (signal != null) {
            if (!signal || typeof signal.aborted !== 'boolean' || typeof signal.addEventListener !== 'function') throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
            if (signal.aborted) ac.abort(signal.reason);
            else {
                // Keep a strong ref to ac while request object
                // is alive. This is needed to prevent AbortController
                // from being prematurely garbage collected.
                // See, https://github.com/nodejs/undici/issues/1926.
                this[$671a6a0c64574dd2$var$kAbortController] = ac;
                const acRef = new WeakRef(ac);
                const abort = function() {
                    const ac = acRef.deref();
                    if (ac !== undefined) ac.abort(this.reason);
                };
                // Third-party AbortControllers may not work with these.
                // See, https://github.com/nodejs/undici/pull/1910#issuecomment-1464495619.
                try {
                    // If the max amount of listeners is equal to the default, increase it
                    // This is only available in node >= v19.9.0
                    if (typeof $671a6a0c64574dd2$require$getMaxListeners === 'function' && $671a6a0c64574dd2$require$getMaxListeners(signal) === $671a6a0c64574dd2$require$defaultMaxListeners) $671a6a0c64574dd2$require$setMaxListeners(100, signal);
                    else if ($671a6a0c64574dd2$require$getEventListeners(signal, 'abort').length >= $671a6a0c64574dd2$require$defaultMaxListeners) $671a6a0c64574dd2$require$setMaxListeners(100, signal);
                } catch  {}
                $iiSZx.addAbortListener(signal, abort);
                $671a6a0c64574dd2$var$requestFinalizer.register(ac, {
                    signal: signal,
                    abort: abort
                });
            }
        }
        // 30. Set this’s headers to a new Headers object with this’s relevant
        // Realm, whose header list is request’s header list and guard is
        // "request".
        this[$671a6a0c64574dd2$require$kHeaders] = new $671a6a0c64574dd2$require$Headers($671a6a0c64574dd2$require$kConstruct);
        this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kHeadersList] = request.headersList;
        this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kGuard] = 'request';
        this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kRealm] = this[$671a6a0c64574dd2$require$kRealm];
        // 31. If this’s request’s mode is "no-cors", then:
        if (mode === 'no-cors') {
            // 1. If this’s request’s method is not a CORS-safelisted method,
            // then throw a TypeError.
            if (!$671a6a0c64574dd2$require$corsSafeListedMethodsSet.has(request.method)) throw new TypeError(`'${request.method} is unsupported in no-cors mode.`);
            // 2. Set this’s headers’s guard to "request-no-cors".
            this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kGuard] = 'request-no-cors';
        }
        // 32. If init is not empty, then:
        if (initHasKey) {
            /** @type {HeadersList} */ const headersList = this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kHeadersList];
            // 1. Let headers be a copy of this’s headers and its associated header
            // list.
            // 2. If init["headers"] exists, then set headers to init["headers"].
            const headers = init.headers !== undefined ? init.headers : new $671a6a0c64574dd2$require$HeadersList(headersList);
            // 3. Empty this’s headers’s header list.
            headersList.clear();
            // 4. If headers is a Headers object, then for each header in its header
            // list, append header’s name/header’s value to this’s headers.
            if (headers instanceof $671a6a0c64574dd2$require$HeadersList) {
                for (const [key, val] of headers)headersList.append(key, val);
                // Note: Copy the `set-cookie` meta-data.
                headersList.cookies = headers.cookies;
            } else // 5. Otherwise, fill this’s headers with headers.
            $671a6a0c64574dd2$require$fillHeaders(this[$671a6a0c64574dd2$require$kHeaders], headers);
        }
        // 33. Let inputBody be input’s request’s body if input is a Request
        // object; otherwise null.
        const inputBody = input instanceof $671a6a0c64574dd2$var$Request ? input[$671a6a0c64574dd2$require$kState].body : null;
        // 34. If either init["body"] exists and is non-null or inputBody is
        // non-null, and request’s method is `GET` or `HEAD`, then throw a
        // TypeError.
        if ((init.body != null || inputBody != null) && (request.method === 'GET' || request.method === 'HEAD')) throw new TypeError('Request with GET/HEAD method cannot have body.');
        // 35. Let initBody be null.
        let initBody = null;
        // 36. If init["body"] exists and is non-null, then:
        if (init.body != null) {
            // 1. Let Content-Type be null.
            // 2. Set initBody and Content-Type to the result of extracting
            // init["body"], with keepalive set to request’s keepalive.
            const [extractedBody, contentType] = $671a6a0c64574dd2$require$extractBody(init.body, request.keepalive);
            initBody = extractedBody;
            // 3, If Content-Type is non-null and this’s headers’s header list does
            // not contain `Content-Type`, then append `Content-Type`/Content-Type to
            // this’s headers.
            if (contentType && !this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kHeadersList].contains('content-type')) this[$671a6a0c64574dd2$require$kHeaders].append('content-type', contentType);
        }
        // 37. Let inputOrInitBody be initBody if it is non-null; otherwise
        // inputBody.
        const inputOrInitBody = initBody ?? inputBody;
        // 38. If inputOrInitBody is non-null and inputOrInitBody’s source is
        // null, then:
        if (inputOrInitBody != null && inputOrInitBody.source == null) {
            // 1. If initBody is non-null and init["duplex"] does not exist,
            //    then throw a TypeError.
            if (initBody != null && init.duplex == null) throw new TypeError('RequestInit: duplex option is required when sending a body.');
            // 2. If this’s request’s mode is neither "same-origin" nor "cors",
            // then throw a TypeError.
            if (request.mode !== 'same-origin' && request.mode !== 'cors') throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            // 3. Set this’s request’s use-CORS-preflight flag.
            request.useCORSPreflightFlag = true;
        }
        // 39. Let finalBody be inputOrInitBody.
        let finalBody = inputOrInitBody;
        // 40. If initBody is null and inputBody is non-null, then:
        if (initBody == null && inputBody != null) {
            // 1. If input is unusable, then throw a TypeError.
            if ($iiSZx.isDisturbed(inputBody.stream) || inputBody.stream.locked) throw new TypeError('Cannot construct a Request with a Request object that has already been used.');
            // 2. Set finalBody to the result of creating a proxy for inputBody.
            if (!$671a6a0c64574dd2$var$TransformStream) $671a6a0c64574dd2$var$TransformStream = $2DnWh$streamweb.TransformStream;
            // https://streams.spec.whatwg.org/#readablestream-create-a-proxy
            const identityTransform = new $671a6a0c64574dd2$var$TransformStream();
            inputBody.stream.pipeThrough(identityTransform);
            finalBody = {
                source: inputBody.source,
                length: inputBody.length,
                stream: identityTransform.readable
            };
        }
        // 41. Set this’s request’s body to finalBody.
        this[$671a6a0c64574dd2$require$kState].body = finalBody;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The method getter steps are to return this’s request’s method.
        return this[$671a6a0c64574dd2$require$kState].method;
    }
    // Returns the URL of request as a string.
    get url() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The url getter steps are to return this’s request’s URL, serialized.
        return $671a6a0c64574dd2$require$URLSerializer(this[$671a6a0c64574dd2$require$kState].url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The headers getter steps are to return this’s headers.
        return this[$671a6a0c64574dd2$require$kHeaders];
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The destination getter are to return this’s request’s destination.
        return this[$671a6a0c64574dd2$require$kState].destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // 1. If this’s request’s referrer is "no-referrer", then return the
        // empty string.
        if (this[$671a6a0c64574dd2$require$kState].referrer === 'no-referrer') return '';
        // 2. If this’s request’s referrer is "client", then return
        // "about:client".
        if (this[$671a6a0c64574dd2$require$kState].referrer === 'client') return 'about:client';
        // Return this’s request’s referrer, serialized.
        return this[$671a6a0c64574dd2$require$kState].referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The referrerPolicy getter steps are to return this’s request’s referrer policy.
        return this[$671a6a0c64574dd2$require$kState].referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The mode getter steps are to return this’s request’s mode.
        return this[$671a6a0c64574dd2$require$kState].mode;
    }
    // Returns the credentials mode associated with request,
    // which is a string indicating whether credentials will be sent with the
    // request always, never, or only when sent to a same-origin URL.
    get credentials() {
        // The credentials getter steps are to return this’s request’s credentials mode.
        return this[$671a6a0c64574dd2$require$kState].credentials;
    }
    // Returns the cache mode associated with request,
    // which is a string indicating how the request will
    // interact with the browser’s cache when fetching.
    get cache() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The cache getter steps are to return this’s request’s cache mode.
        return this[$671a6a0c64574dd2$require$kState].cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The redirect getter steps are to return this’s request’s redirect mode.
        return this[$671a6a0c64574dd2$require$kState].redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The integrity getter steps are to return this’s request’s integrity
        // metadata.
        return this[$671a6a0c64574dd2$require$kState].integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The keepalive getter steps are to return this’s request’s keepalive.
        return this[$671a6a0c64574dd2$require$kState].keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The isReloadNavigation getter steps are to return true if this’s
        // request’s reload-navigation flag is set; otherwise false.
        return this[$671a6a0c64574dd2$require$kState].reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-foward navigation).
    get isHistoryNavigation() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The isHistoryNavigation getter steps are to return true if this’s request’s
        // history-navigation flag is set; otherwise false.
        return this[$671a6a0c64574dd2$require$kState].historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // The signal getter steps are to return this’s signal.
        return this[$671a6a0c64574dd2$require$kSignal];
    }
    get body() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        return this[$671a6a0c64574dd2$require$kState].body ? this[$671a6a0c64574dd2$require$kState].body.stream : null;
    }
    get bodyUsed() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        return !!this[$671a6a0c64574dd2$require$kState].body && $iiSZx.isDisturbed(this[$671a6a0c64574dd2$require$kState].body.stream);
    }
    get duplex() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        return 'half';
    }
    // Returns a clone of request.
    clone() {
        $671a6a0c64574dd2$require$webidl.brandCheck(this, $671a6a0c64574dd2$var$Request);
        // 1. If this is unusable, then throw a TypeError.
        if (this.bodyUsed || this.body?.locked) throw new TypeError('unusable');
        // 2. Let clonedRequest be the result of cloning this’s request.
        const clonedRequest = $671a6a0c64574dd2$var$cloneRequest(this[$671a6a0c64574dd2$require$kState]);
        // 3. Let clonedRequestObject be the result of creating a Request object,
        // given clonedRequest, this’s headers’s guard, and this’s relevant Realm.
        const clonedRequestObject = new $671a6a0c64574dd2$var$Request($671a6a0c64574dd2$require$kConstruct);
        clonedRequestObject[$671a6a0c64574dd2$require$kState] = clonedRequest;
        clonedRequestObject[$671a6a0c64574dd2$require$kRealm] = this[$671a6a0c64574dd2$require$kRealm];
        clonedRequestObject[$671a6a0c64574dd2$require$kHeaders] = new $671a6a0c64574dd2$require$Headers($671a6a0c64574dd2$require$kConstruct);
        clonedRequestObject[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kHeadersList] = clonedRequest.headersList;
        clonedRequestObject[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kGuard] = this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kGuard];
        clonedRequestObject[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kRealm] = this[$671a6a0c64574dd2$require$kHeaders][$671a6a0c64574dd2$require$kRealm];
        // 4. Make clonedRequestObject’s signal follow this’s signal.
        const ac = new AbortController();
        if (this.signal.aborted) ac.abort(this.signal.reason);
        else $iiSZx.addAbortListener(this.signal, ()=>{
            ac.abort(this.signal.reason);
        });
        clonedRequestObject[$671a6a0c64574dd2$require$kSignal] = ac.signal;
        // 4. Return clonedRequestObject.
        return clonedRequestObject;
    }
}
$671a6a0c64574dd2$require$mixinBody($671a6a0c64574dd2$var$Request);
function $671a6a0c64574dd2$var$makeRequest(init) {
    // https://fetch.spec.whatwg.org/#requests
    const request = {
        method: 'GET',
        localURLsOnly: false,
        unsafeRequest: false,
        body: null,
        client: null,
        reservedClient: null,
        replacesClientId: '',
        window: 'client',
        keepalive: false,
        serviceWorkers: 'all',
        initiator: '',
        destination: '',
        priority: null,
        origin: 'client',
        policyContainer: 'client',
        referrer: 'client',
        referrerPolicy: '',
        mode: 'no-cors',
        useCORSPreflightFlag: false,
        credentials: 'same-origin',
        useCredentials: false,
        cache: 'default',
        redirect: 'follow',
        integrity: '',
        cryptoGraphicsNonceMetadata: '',
        parserMetadata: '',
        reloadNavigation: false,
        historyNavigation: false,
        userActivation: false,
        taintedOrigin: false,
        redirectCount: 0,
        responseTainting: 'basic',
        preventNoCacheCacheControlHeaderModification: false,
        done: false,
        timingAllowFailed: false,
        ...init,
        headersList: init.headersList ? new $671a6a0c64574dd2$require$HeadersList(init.headersList) : new $671a6a0c64574dd2$require$HeadersList()
    };
    request.url = request.urlList[0];
    return request;
}
// https://fetch.spec.whatwg.org/#concept-request-clone
function $671a6a0c64574dd2$var$cloneRequest(request) {
    // To clone a request request, run these steps:
    // 1. Let newRequest be a copy of request, except for its body.
    const newRequest = $671a6a0c64574dd2$var$makeRequest({
        ...request,
        body: null
    });
    // 2. If request’s body is non-null, set newRequest’s body to the
    // result of cloning request’s body.
    if (request.body != null) newRequest.body = $671a6a0c64574dd2$require$cloneBody(request.body);
    // 3. Return newRequest.
    return newRequest;
}
Object.defineProperties($671a6a0c64574dd2$var$Request.prototype, {
    method: $671a6a0c64574dd2$var$kEnumerableProperty,
    url: $671a6a0c64574dd2$var$kEnumerableProperty,
    headers: $671a6a0c64574dd2$var$kEnumerableProperty,
    redirect: $671a6a0c64574dd2$var$kEnumerableProperty,
    clone: $671a6a0c64574dd2$var$kEnumerableProperty,
    signal: $671a6a0c64574dd2$var$kEnumerableProperty,
    duplex: $671a6a0c64574dd2$var$kEnumerableProperty,
    destination: $671a6a0c64574dd2$var$kEnumerableProperty,
    body: $671a6a0c64574dd2$var$kEnumerableProperty,
    bodyUsed: $671a6a0c64574dd2$var$kEnumerableProperty,
    isHistoryNavigation: $671a6a0c64574dd2$var$kEnumerableProperty,
    isReloadNavigation: $671a6a0c64574dd2$var$kEnumerableProperty,
    keepalive: $671a6a0c64574dd2$var$kEnumerableProperty,
    integrity: $671a6a0c64574dd2$var$kEnumerableProperty,
    cache: $671a6a0c64574dd2$var$kEnumerableProperty,
    credentials: $671a6a0c64574dd2$var$kEnumerableProperty,
    attribute: $671a6a0c64574dd2$var$kEnumerableProperty,
    referrerPolicy: $671a6a0c64574dd2$var$kEnumerableProperty,
    referrer: $671a6a0c64574dd2$var$kEnumerableProperty,
    mode: $671a6a0c64574dd2$var$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Request',
        configurable: true
    }
});
$671a6a0c64574dd2$require$webidl.converters.Request = $671a6a0c64574dd2$require$webidl.interfaceConverter($671a6a0c64574dd2$var$Request);
// https://fetch.spec.whatwg.org/#requestinfo
$671a6a0c64574dd2$require$webidl.converters.RequestInfo = function(V) {
    if (typeof V === 'string') return $671a6a0c64574dd2$require$webidl.converters.USVString(V);
    if (V instanceof $671a6a0c64574dd2$var$Request) return $671a6a0c64574dd2$require$webidl.converters.Request(V);
    return $671a6a0c64574dd2$require$webidl.converters.USVString(V);
};
$671a6a0c64574dd2$require$webidl.converters.AbortSignal = $671a6a0c64574dd2$require$webidl.interfaceConverter(AbortSignal);
// https://fetch.spec.whatwg.org/#requestinit
$671a6a0c64574dd2$require$webidl.converters.RequestInit = $671a6a0c64574dd2$require$webidl.dictionaryConverter([
    {
        key: 'method',
        converter: $671a6a0c64574dd2$require$webidl.converters.ByteString
    },
    {
        key: 'headers',
        converter: $671a6a0c64574dd2$require$webidl.converters.HeadersInit
    },
    {
        key: 'body',
        converter: $671a6a0c64574dd2$require$webidl.nullableConverter($671a6a0c64574dd2$require$webidl.converters.BodyInit)
    },
    {
        key: 'referrer',
        converter: $671a6a0c64574dd2$require$webidl.converters.USVString
    },
    {
        key: 'referrerPolicy',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
        allowedValues: $671a6a0c64574dd2$require$referrerPolicy
    },
    {
        key: 'mode',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#concept-request-mode
        allowedValues: $671a6a0c64574dd2$require$requestMode
    },
    {
        key: 'credentials',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcredentials
        allowedValues: $671a6a0c64574dd2$require$requestCredentials
    },
    {
        key: 'cache',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcache
        allowedValues: $671a6a0c64574dd2$require$requestCache
    },
    {
        key: 'redirect',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestredirect
        allowedValues: $671a6a0c64574dd2$require$requestRedirect
    },
    {
        key: 'integrity',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString
    },
    {
        key: 'keepalive',
        converter: $671a6a0c64574dd2$require$webidl.converters.boolean
    },
    {
        key: 'signal',
        converter: $671a6a0c64574dd2$require$webidl.nullableConverter((signal)=>$671a6a0c64574dd2$require$webidl.converters.AbortSignal(signal, {
                strict: false
            }))
    },
    {
        key: 'window',
        converter: $671a6a0c64574dd2$require$webidl.converters.any
    },
    {
        key: 'duplex',
        converter: $671a6a0c64574dd2$require$webidl.converters.DOMString,
        allowedValues: $671a6a0c64574dd2$require$requestDuplex
    }
]);
module.exports = {
    Request: $671a6a0c64574dd2$var$Request,
    makeRequest: $671a6a0c64574dd2$var$makeRequest
};

});


