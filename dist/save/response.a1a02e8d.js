require("./headers.f20c41e6.js");
require("./body.617da059.js");
require("./util.c7a5ec55.js");
require("./util.2100f7c8.js");
require("./constants.8e3661dd.js");
require("./symbols.71ce8940.js");
require("./webidl.107e124b.js");
require("./formdata.b4f5d8f5.js");
require("./global.d3d2cc7c.js");
require("./dataURL.134f460a.js");
require("./symbols.b8a391fa.js");
var $h0H6P$assert = require("assert");
var $h0H6P$util = require("util");
var $h0H6P$streamweb = require("stream/web");


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
parcelRegister("e5BYI", function(module, exports) {
'use strict';

var $6rDjV = parcelRequire("6rDjV");
var $a41efe05aebd43cb$require$Headers = $6rDjV.Headers;
var $a41efe05aebd43cb$require$HeadersList = $6rDjV.HeadersList;
var $a41efe05aebd43cb$require$fill = $6rDjV.fill;

var $hLZGr = parcelRequire("hLZGr");
var $a41efe05aebd43cb$require$extractBody = $hLZGr.extractBody;
var $a41efe05aebd43cb$require$cloneBody = $hLZGr.cloneBody;
var $a41efe05aebd43cb$require$mixinBody = $hLZGr.mixinBody;

var $iiSZx = parcelRequire("iiSZx");
const { kEnumerableProperty: $a41efe05aebd43cb$var$kEnumerableProperty } = $iiSZx;

var $eXsCL = parcelRequire("eXsCL");
var $a41efe05aebd43cb$require$isValidReasonPhrase = $eXsCL.isValidReasonPhrase;
var $a41efe05aebd43cb$require$isCancelled = $eXsCL.isCancelled;
var $a41efe05aebd43cb$require$isAborted = $eXsCL.isAborted;
var $a41efe05aebd43cb$require$isBlobLike = $eXsCL.isBlobLike;
var $a41efe05aebd43cb$require$serializeJavascriptValueToJSONString = $eXsCL.serializeJavascriptValueToJSONString;
var $a41efe05aebd43cb$require$isErrorLike = $eXsCL.isErrorLike;
var $a41efe05aebd43cb$require$isomorphicEncode = $eXsCL.isomorphicEncode;

var $5aYxL = parcelRequire("5aYxL");
var $a41efe05aebd43cb$require$redirectStatusSet = $5aYxL.redirectStatusSet;
var $a41efe05aebd43cb$require$nullBodyStatus = $5aYxL.nullBodyStatus;
var $a41efe05aebd43cb$require$DOMException = $5aYxL.DOMException;

var $3isYS = parcelRequire("3isYS");
var $a41efe05aebd43cb$require$kState = $3isYS.kState;
var $a41efe05aebd43cb$require$kHeaders = $3isYS.kHeaders;
var $a41efe05aebd43cb$require$kGuard = $3isYS.kGuard;
var $a41efe05aebd43cb$require$kRealm = $3isYS.kRealm;

var $cpX4f = parcelRequire("cpX4f");
var $a41efe05aebd43cb$require$webidl = $cpX4f.webidl;

var $3vA63 = parcelRequire("3vA63");
var $a41efe05aebd43cb$require$FormData = $3vA63.FormData;

var $39VSP = parcelRequire("39VSP");
var $a41efe05aebd43cb$require$getGlobalOrigin = $39VSP.getGlobalOrigin;

var $4o5iY = parcelRequire("4o5iY");
var $a41efe05aebd43cb$require$URLSerializer = $4o5iY.URLSerializer;

var $dSiuY = parcelRequire("dSiuY");
var $a41efe05aebd43cb$require$kHeadersList = $dSiuY.kHeadersList;
var $a41efe05aebd43cb$require$kConstruct = $dSiuY.kConstruct;


var $a41efe05aebd43cb$require$types = $h0H6P$util.types;

const $a41efe05aebd43cb$var$ReadableStream = globalThis.ReadableStream || $h0H6P$streamweb.ReadableStream;
const $a41efe05aebd43cb$var$textEncoder = new TextEncoder('utf-8');
// https://fetch.spec.whatwg.org/#response-class
class $a41efe05aebd43cb$var$Response {
    // Creates network error Response.
    static error() {
        // TODO
        const relevantRealm = {
            settingsObject: {}
        };
        // The static error() method steps are to return the result of creating a
        // Response object, given a new network error, "immutable", and this’s
        // relevant Realm.
        const responseObject = new $a41efe05aebd43cb$var$Response();
        responseObject[$a41efe05aebd43cb$require$kState] = $a41efe05aebd43cb$var$makeNetworkError();
        responseObject[$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kHeadersList] = responseObject[$a41efe05aebd43cb$require$kState].headersList;
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard] = 'immutable';
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(data, init = {}) {
        $a41efe05aebd43cb$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Response.json'
        });
        if (init !== null) init = $a41efe05aebd43cb$require$webidl.converters.ResponseInit(init);
        // 1. Let bytes the result of running serialize a JavaScript value to JSON bytes on data.
        const bytes = $a41efe05aebd43cb$var$textEncoder.encode($a41efe05aebd43cb$require$serializeJavascriptValueToJSONString(data));
        // 2. Let body be the result of extracting bytes.
        const body = $a41efe05aebd43cb$require$extractBody(bytes);
        // 3. Let responseObject be the result of creating a Response object, given a new response,
        //    "response", and this’s relevant Realm.
        const relevantRealm = {
            settingsObject: {}
        };
        const responseObject = new $a41efe05aebd43cb$var$Response();
        responseObject[$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard] = 'response';
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        // 4. Perform initialize a response given responseObject, init, and (body, "application/json").
        $a41efe05aebd43cb$var$initializeResponse(responseObject, init, {
            body: body[0],
            type: 'application/json'
        });
        // 5. Return responseObject.
        return responseObject;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(url, status = 302) {
        const relevantRealm = {
            settingsObject: {}
        };
        $a41efe05aebd43cb$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Response.redirect'
        });
        url = $a41efe05aebd43cb$require$webidl.converters.USVString(url);
        status = $a41efe05aebd43cb$require$webidl.converters['unsigned short'](status);
        // 1. Let parsedURL be the result of parsing url with current settings
        // object’s API base URL.
        // 2. If parsedURL is failure, then throw a TypeError.
        // TODO: base-URL?
        let parsedURL;
        try {
            parsedURL = new URL(url, $a41efe05aebd43cb$require$getGlobalOrigin());
        } catch (err) {
            throw Object.assign(new TypeError('Failed to parse URL from ' + url), {
                cause: err
            });
        }
        // 3. If status is not a redirect status, then throw a RangeError.
        if (!$a41efe05aebd43cb$require$redirectStatusSet.has(status)) throw new RangeError('Invalid status code ' + status);
        // 4. Let responseObject be the result of creating a Response object,
        // given a new response, "immutable", and this’s relevant Realm.
        const responseObject = new $a41efe05aebd43cb$var$Response();
        responseObject[$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard] = 'immutable';
        responseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm] = relevantRealm;
        // 5. Set responseObject’s response’s status to status.
        responseObject[$a41efe05aebd43cb$require$kState].status = status;
        // 6. Let value be parsedURL, serialized and isomorphic encoded.
        const value = $a41efe05aebd43cb$require$isomorphicEncode($a41efe05aebd43cb$require$URLSerializer(parsedURL));
        // 7. Append `Location`/value to responseObject’s response’s header list.
        responseObject[$a41efe05aebd43cb$require$kState].headersList.append('location', value);
        // 8. Return responseObject.
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(body = null, init = {}){
        if (body !== null) body = $a41efe05aebd43cb$require$webidl.converters.BodyInit(body);
        init = $a41efe05aebd43cb$require$webidl.converters.ResponseInit(init);
        // TODO
        this[$a41efe05aebd43cb$require$kRealm] = {
            settingsObject: {}
        };
        // 1. Set this’s response to a new response.
        this[$a41efe05aebd43cb$require$kState] = $a41efe05aebd43cb$var$makeResponse({});
        // 2. Set this’s headers to a new Headers object with this’s relevant
        // Realm, whose header list is this’s response’s header list and guard
        // is "response".
        this[$a41efe05aebd43cb$require$kHeaders] = new $a41efe05aebd43cb$require$Headers($a41efe05aebd43cb$require$kConstruct);
        this[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard] = 'response';
        this[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kHeadersList] = this[$a41efe05aebd43cb$require$kState].headersList;
        this[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm] = this[$a41efe05aebd43cb$require$kRealm];
        // 3. Let bodyWithType be null.
        let bodyWithType = null;
        // 4. If body is non-null, then set bodyWithType to the result of extracting body.
        if (body != null) {
            const [extractedBody, type] = $a41efe05aebd43cb$require$extractBody(body);
            bodyWithType = {
                body: extractedBody,
                type: type
            };
        }
        // 5. Perform initialize a response given this, init, and bodyWithType.
        $a41efe05aebd43cb$var$initializeResponse(this, init, bodyWithType);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The type getter steps are to return this’s response’s type.
        return this[$a41efe05aebd43cb$require$kState].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        const urlList = this[$a41efe05aebd43cb$require$kState].urlList;
        // The url getter steps are to return the empty string if this’s
        // response’s URL is null; otherwise this’s response’s URL,
        // serialized with exclude fragment set to true.
        const url = urlList[urlList.length - 1] ?? null;
        if (url === null) return '';
        return $a41efe05aebd43cb$require$URLSerializer(url, true);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The redirected getter steps are to return true if this’s response’s URL
        // list has more than one item; otherwise false.
        return this[$a41efe05aebd43cb$require$kState].urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The status getter steps are to return this’s response’s status.
        return this[$a41efe05aebd43cb$require$kState].status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The ok getter steps are to return true if this’s response’s status is an
        // ok status; otherwise false.
        return this[$a41efe05aebd43cb$require$kState].status >= 200 && this[$a41efe05aebd43cb$require$kState].status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The statusText getter steps are to return this’s response’s status
        // message.
        return this[$a41efe05aebd43cb$require$kState].statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // The headers getter steps are to return this’s headers.
        return this[$a41efe05aebd43cb$require$kHeaders];
    }
    get body() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        return this[$a41efe05aebd43cb$require$kState].body ? this[$a41efe05aebd43cb$require$kState].body.stream : null;
    }
    get bodyUsed() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        return !!this[$a41efe05aebd43cb$require$kState].body && $iiSZx.isDisturbed(this[$a41efe05aebd43cb$require$kState].body.stream);
    }
    // Returns a clone of response.
    clone() {
        $a41efe05aebd43cb$require$webidl.brandCheck(this, $a41efe05aebd43cb$var$Response);
        // 1. If this is unusable, then throw a TypeError.
        if (this.bodyUsed || this.body && this.body.locked) throw $a41efe05aebd43cb$require$webidl.errors.exception({
            header: 'Response.clone',
            message: 'Body has already been consumed.'
        });
        // 2. Let clonedResponse be the result of cloning this’s response.
        const clonedResponse = $a41efe05aebd43cb$var$cloneResponse(this[$a41efe05aebd43cb$require$kState]);
        // 3. Return the result of creating a Response object, given
        // clonedResponse, this’s headers’s guard, and this’s relevant Realm.
        const clonedResponseObject = new $a41efe05aebd43cb$var$Response();
        clonedResponseObject[$a41efe05aebd43cb$require$kState] = clonedResponse;
        clonedResponseObject[$a41efe05aebd43cb$require$kRealm] = this[$a41efe05aebd43cb$require$kRealm];
        clonedResponseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kHeadersList] = clonedResponse.headersList;
        clonedResponseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard] = this[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kGuard];
        clonedResponseObject[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm] = this[$a41efe05aebd43cb$require$kHeaders][$a41efe05aebd43cb$require$kRealm];
        return clonedResponseObject;
    }
}
$a41efe05aebd43cb$require$mixinBody($a41efe05aebd43cb$var$Response);
Object.defineProperties($a41efe05aebd43cb$var$Response.prototype, {
    type: $a41efe05aebd43cb$var$kEnumerableProperty,
    url: $a41efe05aebd43cb$var$kEnumerableProperty,
    status: $a41efe05aebd43cb$var$kEnumerableProperty,
    ok: $a41efe05aebd43cb$var$kEnumerableProperty,
    redirected: $a41efe05aebd43cb$var$kEnumerableProperty,
    statusText: $a41efe05aebd43cb$var$kEnumerableProperty,
    headers: $a41efe05aebd43cb$var$kEnumerableProperty,
    clone: $a41efe05aebd43cb$var$kEnumerableProperty,
    body: $a41efe05aebd43cb$var$kEnumerableProperty,
    bodyUsed: $a41efe05aebd43cb$var$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Response',
        configurable: true
    }
});
Object.defineProperties($a41efe05aebd43cb$var$Response, {
    json: $a41efe05aebd43cb$var$kEnumerableProperty,
    redirect: $a41efe05aebd43cb$var$kEnumerableProperty,
    error: $a41efe05aebd43cb$var$kEnumerableProperty
});
// https://fetch.spec.whatwg.org/#concept-response-clone
function $a41efe05aebd43cb$var$cloneResponse(response) {
    // To clone a response response, run these steps:
    // 1. If response is a filtered response, then return a new identical
    // filtered response whose internal response is a clone of response’s
    // internal response.
    if (response.internalResponse) return $a41efe05aebd43cb$var$filterResponse($a41efe05aebd43cb$var$cloneResponse(response.internalResponse), response.type);
    // 2. Let newResponse be a copy of response, except for its body.
    const newResponse = $a41efe05aebd43cb$var$makeResponse({
        ...response,
        body: null
    });
    // 3. If response’s body is non-null, then set newResponse’s body to the
    // result of cloning response’s body.
    if (response.body != null) newResponse.body = $a41efe05aebd43cb$require$cloneBody(response.body);
    // 4. Return newResponse.
    return newResponse;
}
function $a41efe05aebd43cb$var$makeResponse(init) {
    return {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: false,
        requestIncludesCredentials: false,
        type: 'default',
        status: 200,
        timingInfo: null,
        cacheState: '',
        statusText: '',
        ...init,
        headersList: init.headersList ? new $a41efe05aebd43cb$require$HeadersList(init.headersList) : new $a41efe05aebd43cb$require$HeadersList(),
        urlList: init.urlList ? [
            ...init.urlList
        ] : []
    };
}
function $a41efe05aebd43cb$var$makeNetworkError(reason) {
    const isError = $a41efe05aebd43cb$require$isErrorLike(reason);
    return $a41efe05aebd43cb$var$makeResponse({
        type: 'error',
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason),
        aborted: reason && reason.name === 'AbortError'
    });
}
function $a41efe05aebd43cb$var$makeFilteredResponse(response, state) {
    state = {
        internalResponse: response,
        ...state
    };
    return new Proxy(response, {
        get (target, p) {
            return p in state ? state[p] : target[p];
        },
        set (target, p, value) {
            $h0H6P$assert(!(p in state));
            target[p] = value;
            return true;
        }
    });
}
// https://fetch.spec.whatwg.org/#concept-filtered-response
function $a41efe05aebd43cb$var$filterResponse(response, type) {
    // Set response to the following filtered response with response as its
    // internal response, depending on request’s response tainting:
    if (type === 'basic') // A basic filtered response is a filtered response whose type is "basic"
    // and header list excludes any headers in internal response’s header list
    // whose name is a forbidden response-header name.
    // Note: undici does not implement forbidden response-header names
    return $a41efe05aebd43cb$var$makeFilteredResponse(response, {
        type: 'basic',
        headersList: response.headersList
    });
    else if (type === 'cors') // A CORS filtered response is a filtered response whose type is "cors"
    // and header list excludes any headers in internal response’s header
    // list whose name is not a CORS-safelisted response-header name, given
    // internal response’s CORS-exposed header-name list.
    // Note: undici does not implement CORS-safelisted response-header names
    return $a41efe05aebd43cb$var$makeFilteredResponse(response, {
        type: 'cors',
        headersList: response.headersList
    });
    else if (type === 'opaque') // An opaque filtered response is a filtered response whose type is
    // "opaque", URL list is the empty list, status is 0, status message
    // is the empty byte sequence, header list is empty, and body is null.
    return $a41efe05aebd43cb$var$makeFilteredResponse(response, {
        type: 'opaque',
        urlList: Object.freeze([]),
        status: 0,
        statusText: '',
        body: null
    });
    else if (type === 'opaqueredirect') // An opaque-redirect filtered response is a filtered response whose type
    // is "opaqueredirect", status is 0, status message is the empty byte
    // sequence, header list is empty, and body is null.
    return $a41efe05aebd43cb$var$makeFilteredResponse(response, {
        type: 'opaqueredirect',
        status: 0,
        statusText: '',
        headersList: [],
        body: null
    });
    else $h0H6P$assert(false);
}
// https://fetch.spec.whatwg.org/#appropriate-network-error
function $a41efe05aebd43cb$var$makeAppropriateNetworkError(fetchParams, err = null) {
    // 1. Assert: fetchParams is canceled.
    $h0H6P$assert($a41efe05aebd43cb$require$isCancelled(fetchParams));
    // 2. Return an aborted network error if fetchParams is aborted;
    // otherwise return a network error.
    return $a41efe05aebd43cb$require$isAborted(fetchParams) ? $a41efe05aebd43cb$var$makeNetworkError(Object.assign(new $a41efe05aebd43cb$require$DOMException('The operation was aborted.', 'AbortError'), {
        cause: err
    })) : $a41efe05aebd43cb$var$makeNetworkError(Object.assign(new $a41efe05aebd43cb$require$DOMException('Request was cancelled.'), {
        cause: err
    }));
}
// https://whatpr.org/fetch/1392.html#initialize-a-response
function $a41efe05aebd43cb$var$initializeResponse(response, init, body) {
    // 1. If init["status"] is not in the range 200 to 599, inclusive, then
    //    throw a RangeError.
    if (init.status !== null && (init.status < 200 || init.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    // 2. If init["statusText"] does not match the reason-phrase token production,
    //    then throw a TypeError.
    if ('statusText' in init && init.statusText != null) {
        // See, https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.2:
        //   reason-phrase  = *( HTAB / SP / VCHAR / obs-text )
        if (!$a41efe05aebd43cb$require$isValidReasonPhrase(String(init.statusText))) throw new TypeError('Invalid statusText');
    }
    // 3. Set response’s response’s status to init["status"].
    if ('status' in init && init.status != null) response[$a41efe05aebd43cb$require$kState].status = init.status;
    // 4. Set response’s response’s status message to init["statusText"].
    if ('statusText' in init && init.statusText != null) response[$a41efe05aebd43cb$require$kState].statusText = init.statusText;
    // 5. If init["headers"] exists, then fill response’s headers with init["headers"].
    if ('headers' in init && init.headers != null) $a41efe05aebd43cb$require$fill(response[$a41efe05aebd43cb$require$kHeaders], init.headers);
    // 6. If body was given, then:
    if (body) {
        // 1. If response's status is a null body status, then throw a TypeError.
        if ($a41efe05aebd43cb$require$nullBodyStatus.includes(response.status)) throw $a41efe05aebd43cb$require$webidl.errors.exception({
            header: 'Response constructor',
            message: 'Invalid response status code ' + response.status
        });
        // 2. Set response's body to body's body.
        response[$a41efe05aebd43cb$require$kState].body = body.body;
        // 3. If body's type is non-null and response's header list does not contain
        //    `Content-Type`, then append (`Content-Type`, body's type) to response's header list.
        if (body.type != null && !response[$a41efe05aebd43cb$require$kState].headersList.contains('Content-Type')) response[$a41efe05aebd43cb$require$kState].headersList.append('content-type', body.type);
    }
}
$a41efe05aebd43cb$require$webidl.converters.ReadableStream = $a41efe05aebd43cb$require$webidl.interfaceConverter($a41efe05aebd43cb$var$ReadableStream);
$a41efe05aebd43cb$require$webidl.converters.FormData = $a41efe05aebd43cb$require$webidl.interfaceConverter($a41efe05aebd43cb$require$FormData);
$a41efe05aebd43cb$require$webidl.converters.URLSearchParams = $a41efe05aebd43cb$require$webidl.interfaceConverter(URLSearchParams);
// https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit
$a41efe05aebd43cb$require$webidl.converters.XMLHttpRequestBodyInit = function(V) {
    if (typeof V === 'string') return $a41efe05aebd43cb$require$webidl.converters.USVString(V);
    if ($a41efe05aebd43cb$require$isBlobLike(V)) return $a41efe05aebd43cb$require$webidl.converters.Blob(V, {
        strict: false
    });
    if ($a41efe05aebd43cb$require$types.isArrayBuffer(V) || $a41efe05aebd43cb$require$types.isTypedArray(V) || $a41efe05aebd43cb$require$types.isDataView(V)) return $a41efe05aebd43cb$require$webidl.converters.BufferSource(V);
    if ($iiSZx.isFormDataLike(V)) return $a41efe05aebd43cb$require$webidl.converters.FormData(V, {
        strict: false
    });
    if (V instanceof URLSearchParams) return $a41efe05aebd43cb$require$webidl.converters.URLSearchParams(V);
    return $a41efe05aebd43cb$require$webidl.converters.DOMString(V);
};
// https://fetch.spec.whatwg.org/#bodyinit
$a41efe05aebd43cb$require$webidl.converters.BodyInit = function(V) {
    if (V instanceof $a41efe05aebd43cb$var$ReadableStream) return $a41efe05aebd43cb$require$webidl.converters.ReadableStream(V);
    // Note: the spec doesn't include async iterables,
    // this is an undici extension.
    if (V?.[Symbol.asyncIterator]) return V;
    return $a41efe05aebd43cb$require$webidl.converters.XMLHttpRequestBodyInit(V);
};
$a41efe05aebd43cb$require$webidl.converters.ResponseInit = $a41efe05aebd43cb$require$webidl.dictionaryConverter([
    {
        key: 'status',
        converter: $a41efe05aebd43cb$require$webidl.converters['unsigned short'],
        defaultValue: 200
    },
    {
        key: 'statusText',
        converter: $a41efe05aebd43cb$require$webidl.converters.ByteString,
        defaultValue: ''
    },
    {
        key: 'headers',
        converter: $a41efe05aebd43cb$require$webidl.converters.HeadersInit
    }
]);
module.exports = {
    makeNetworkError: $a41efe05aebd43cb$var$makeNetworkError,
    makeResponse: $a41efe05aebd43cb$var$makeResponse,
    makeAppropriateNetworkError: $a41efe05aebd43cb$var$makeAppropriateNetworkError,
    filterResponse: $a41efe05aebd43cb$var$filterResponse,
    Response: $a41efe05aebd43cb$var$Response,
    cloneResponse: $a41efe05aebd43cb$var$cloneResponse
};

});
parcelRegister("6rDjV", function(module, exports) {
module.exports = new URL("headers.f20c41e6.js", "file:" + __filename).toString();

});



