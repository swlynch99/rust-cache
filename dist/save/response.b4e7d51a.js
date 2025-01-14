require("./headers.e172861b.js");
require("./body.a98ea671.js");
require("./util.26715e80.js");
require("./util.1c38d6ed.js");
require("./constants.0582e50a.js");
require("./symbols.be9b962d.js");
require("./webidl.35d389df.js");
require("./formdata.1236317b.js");
require("./global.12b98812.js");
require("./dataURL.a565585e.js");
require("./symbols.c5dd8fde.js");
var $lTxNI$assert = require("assert");
var $lTxNI$util = require("util");
var $lTxNI$streamweb = require("stream/web");


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
parcelRegister("kwlGk", function(module, exports) {
'use strict';

var $HrhFg = parcelRequire("HrhFg");
var $ef079d51d1b4e7d5$require$Headers = $HrhFg.Headers;
var $ef079d51d1b4e7d5$require$HeadersList = $HrhFg.HeadersList;
var $ef079d51d1b4e7d5$require$fill = $HrhFg.fill;

var $eh3oC = parcelRequire("eh3oC");
var $ef079d51d1b4e7d5$require$extractBody = $eh3oC.extractBody;
var $ef079d51d1b4e7d5$require$cloneBody = $eh3oC.cloneBody;
var $ef079d51d1b4e7d5$require$mixinBody = $eh3oC.mixinBody;

var $1Z05w = parcelRequire("1Z05w");
const { kEnumerableProperty: $ef079d51d1b4e7d5$var$kEnumerableProperty } = $1Z05w;

var $8S4OX = parcelRequire("8S4OX");
var $ef079d51d1b4e7d5$require$isValidReasonPhrase = $8S4OX.isValidReasonPhrase;
var $ef079d51d1b4e7d5$require$isCancelled = $8S4OX.isCancelled;
var $ef079d51d1b4e7d5$require$isAborted = $8S4OX.isAborted;
var $ef079d51d1b4e7d5$require$isBlobLike = $8S4OX.isBlobLike;
var $ef079d51d1b4e7d5$require$serializeJavascriptValueToJSONString = $8S4OX.serializeJavascriptValueToJSONString;
var $ef079d51d1b4e7d5$require$isErrorLike = $8S4OX.isErrorLike;
var $ef079d51d1b4e7d5$require$isomorphicEncode = $8S4OX.isomorphicEncode;

var $bCI0k = parcelRequire("bCI0k");
var $ef079d51d1b4e7d5$require$redirectStatusSet = $bCI0k.redirectStatusSet;
var $ef079d51d1b4e7d5$require$nullBodyStatus = $bCI0k.nullBodyStatus;
var $ef079d51d1b4e7d5$require$DOMException = $bCI0k.DOMException;

var $gP2yv = parcelRequire("gP2yv");
var $ef079d51d1b4e7d5$require$kState = $gP2yv.kState;
var $ef079d51d1b4e7d5$require$kHeaders = $gP2yv.kHeaders;
var $ef079d51d1b4e7d5$require$kGuard = $gP2yv.kGuard;
var $ef079d51d1b4e7d5$require$kRealm = $gP2yv.kRealm;

var $iPB2Q = parcelRequire("iPB2Q");
var $ef079d51d1b4e7d5$require$webidl = $iPB2Q.webidl;

var $7F5Ft = parcelRequire("7F5Ft");
var $ef079d51d1b4e7d5$require$FormData = $7F5Ft.FormData;

var $7GOAF = parcelRequire("7GOAF");
var $ef079d51d1b4e7d5$require$getGlobalOrigin = $7GOAF.getGlobalOrigin;

var $iRsiv = parcelRequire("iRsiv");
var $ef079d51d1b4e7d5$require$URLSerializer = $iRsiv.URLSerializer;

var $bMqEt = parcelRequire("bMqEt");
var $ef079d51d1b4e7d5$require$kHeadersList = $bMqEt.kHeadersList;
var $ef079d51d1b4e7d5$require$kConstruct = $bMqEt.kConstruct;


var $ef079d51d1b4e7d5$require$types = $lTxNI$util.types;

const $ef079d51d1b4e7d5$var$ReadableStream = globalThis.ReadableStream || $lTxNI$streamweb.ReadableStream;
const $ef079d51d1b4e7d5$var$textEncoder = new TextEncoder('utf-8');
// https://fetch.spec.whatwg.org/#response-class
class $ef079d51d1b4e7d5$var$Response {
    // Creates network error Response.
    static error() {
        // TODO
        const relevantRealm = {
            settingsObject: {}
        };
        // The static error() method steps are to return the result of creating a
        // Response object, given a new network error, "immutable", and this’s
        // relevant Realm.
        const responseObject = new $ef079d51d1b4e7d5$var$Response();
        responseObject[$ef079d51d1b4e7d5$require$kState] = $ef079d51d1b4e7d5$var$makeNetworkError();
        responseObject[$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kHeadersList] = responseObject[$ef079d51d1b4e7d5$require$kState].headersList;
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard] = 'immutable';
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(data, init = {}) {
        $ef079d51d1b4e7d5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Response.json'
        });
        if (init !== null) init = $ef079d51d1b4e7d5$require$webidl.converters.ResponseInit(init);
        // 1. Let bytes the result of running serialize a JavaScript value to JSON bytes on data.
        const bytes = $ef079d51d1b4e7d5$var$textEncoder.encode($ef079d51d1b4e7d5$require$serializeJavascriptValueToJSONString(data));
        // 2. Let body be the result of extracting bytes.
        const body = $ef079d51d1b4e7d5$require$extractBody(bytes);
        // 3. Let responseObject be the result of creating a Response object, given a new response,
        //    "response", and this’s relevant Realm.
        const relevantRealm = {
            settingsObject: {}
        };
        const responseObject = new $ef079d51d1b4e7d5$var$Response();
        responseObject[$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard] = 'response';
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        // 4. Perform initialize a response given responseObject, init, and (body, "application/json").
        $ef079d51d1b4e7d5$var$initializeResponse(responseObject, init, {
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
        $ef079d51d1b4e7d5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Response.redirect'
        });
        url = $ef079d51d1b4e7d5$require$webidl.converters.USVString(url);
        status = $ef079d51d1b4e7d5$require$webidl.converters['unsigned short'](status);
        // 1. Let parsedURL be the result of parsing url with current settings
        // object’s API base URL.
        // 2. If parsedURL is failure, then throw a TypeError.
        // TODO: base-URL?
        let parsedURL;
        try {
            parsedURL = new URL(url, $ef079d51d1b4e7d5$require$getGlobalOrigin());
        } catch (err) {
            throw Object.assign(new TypeError('Failed to parse URL from ' + url), {
                cause: err
            });
        }
        // 3. If status is not a redirect status, then throw a RangeError.
        if (!$ef079d51d1b4e7d5$require$redirectStatusSet.has(status)) throw new RangeError('Invalid status code ' + status);
        // 4. Let responseObject be the result of creating a Response object,
        // given a new response, "immutable", and this’s relevant Realm.
        const responseObject = new $ef079d51d1b4e7d5$var$Response();
        responseObject[$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard] = 'immutable';
        responseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm] = relevantRealm;
        // 5. Set responseObject’s response’s status to status.
        responseObject[$ef079d51d1b4e7d5$require$kState].status = status;
        // 6. Let value be parsedURL, serialized and isomorphic encoded.
        const value = $ef079d51d1b4e7d5$require$isomorphicEncode($ef079d51d1b4e7d5$require$URLSerializer(parsedURL));
        // 7. Append `Location`/value to responseObject’s response’s header list.
        responseObject[$ef079d51d1b4e7d5$require$kState].headersList.append('location', value);
        // 8. Return responseObject.
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(body = null, init = {}){
        if (body !== null) body = $ef079d51d1b4e7d5$require$webidl.converters.BodyInit(body);
        init = $ef079d51d1b4e7d5$require$webidl.converters.ResponseInit(init);
        // TODO
        this[$ef079d51d1b4e7d5$require$kRealm] = {
            settingsObject: {}
        };
        // 1. Set this’s response to a new response.
        this[$ef079d51d1b4e7d5$require$kState] = $ef079d51d1b4e7d5$var$makeResponse({});
        // 2. Set this’s headers to a new Headers object with this’s relevant
        // Realm, whose header list is this’s response’s header list and guard
        // is "response".
        this[$ef079d51d1b4e7d5$require$kHeaders] = new $ef079d51d1b4e7d5$require$Headers($ef079d51d1b4e7d5$require$kConstruct);
        this[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard] = 'response';
        this[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kHeadersList] = this[$ef079d51d1b4e7d5$require$kState].headersList;
        this[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm] = this[$ef079d51d1b4e7d5$require$kRealm];
        // 3. Let bodyWithType be null.
        let bodyWithType = null;
        // 4. If body is non-null, then set bodyWithType to the result of extracting body.
        if (body != null) {
            const [extractedBody, type] = $ef079d51d1b4e7d5$require$extractBody(body);
            bodyWithType = {
                body: extractedBody,
                type: type
            };
        }
        // 5. Perform initialize a response given this, init, and bodyWithType.
        $ef079d51d1b4e7d5$var$initializeResponse(this, init, bodyWithType);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The type getter steps are to return this’s response’s type.
        return this[$ef079d51d1b4e7d5$require$kState].type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        const urlList = this[$ef079d51d1b4e7d5$require$kState].urlList;
        // The url getter steps are to return the empty string if this’s
        // response’s URL is null; otherwise this’s response’s URL,
        // serialized with exclude fragment set to true.
        const url = urlList[urlList.length - 1] ?? null;
        if (url === null) return '';
        return $ef079d51d1b4e7d5$require$URLSerializer(url, true);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The redirected getter steps are to return true if this’s response’s URL
        // list has more than one item; otherwise false.
        return this[$ef079d51d1b4e7d5$require$kState].urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The status getter steps are to return this’s response’s status.
        return this[$ef079d51d1b4e7d5$require$kState].status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The ok getter steps are to return true if this’s response’s status is an
        // ok status; otherwise false.
        return this[$ef079d51d1b4e7d5$require$kState].status >= 200 && this[$ef079d51d1b4e7d5$require$kState].status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The statusText getter steps are to return this’s response’s status
        // message.
        return this[$ef079d51d1b4e7d5$require$kState].statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // The headers getter steps are to return this’s headers.
        return this[$ef079d51d1b4e7d5$require$kHeaders];
    }
    get body() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        return this[$ef079d51d1b4e7d5$require$kState].body ? this[$ef079d51d1b4e7d5$require$kState].body.stream : null;
    }
    get bodyUsed() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        return !!this[$ef079d51d1b4e7d5$require$kState].body && $1Z05w.isDisturbed(this[$ef079d51d1b4e7d5$require$kState].body.stream);
    }
    // Returns a clone of response.
    clone() {
        $ef079d51d1b4e7d5$require$webidl.brandCheck(this, $ef079d51d1b4e7d5$var$Response);
        // 1. If this is unusable, then throw a TypeError.
        if (this.bodyUsed || this.body && this.body.locked) throw $ef079d51d1b4e7d5$require$webidl.errors.exception({
            header: 'Response.clone',
            message: 'Body has already been consumed.'
        });
        // 2. Let clonedResponse be the result of cloning this’s response.
        const clonedResponse = $ef079d51d1b4e7d5$var$cloneResponse(this[$ef079d51d1b4e7d5$require$kState]);
        // 3. Return the result of creating a Response object, given
        // clonedResponse, this’s headers’s guard, and this’s relevant Realm.
        const clonedResponseObject = new $ef079d51d1b4e7d5$var$Response();
        clonedResponseObject[$ef079d51d1b4e7d5$require$kState] = clonedResponse;
        clonedResponseObject[$ef079d51d1b4e7d5$require$kRealm] = this[$ef079d51d1b4e7d5$require$kRealm];
        clonedResponseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kHeadersList] = clonedResponse.headersList;
        clonedResponseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard] = this[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kGuard];
        clonedResponseObject[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm] = this[$ef079d51d1b4e7d5$require$kHeaders][$ef079d51d1b4e7d5$require$kRealm];
        return clonedResponseObject;
    }
}
$ef079d51d1b4e7d5$require$mixinBody($ef079d51d1b4e7d5$var$Response);
Object.defineProperties($ef079d51d1b4e7d5$var$Response.prototype, {
    type: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    url: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    status: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    ok: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    redirected: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    statusText: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    headers: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    clone: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    body: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    bodyUsed: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Response',
        configurable: true
    }
});
Object.defineProperties($ef079d51d1b4e7d5$var$Response, {
    json: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    redirect: $ef079d51d1b4e7d5$var$kEnumerableProperty,
    error: $ef079d51d1b4e7d5$var$kEnumerableProperty
});
// https://fetch.spec.whatwg.org/#concept-response-clone
function $ef079d51d1b4e7d5$var$cloneResponse(response) {
    // To clone a response response, run these steps:
    // 1. If response is a filtered response, then return a new identical
    // filtered response whose internal response is a clone of response’s
    // internal response.
    if (response.internalResponse) return $ef079d51d1b4e7d5$var$filterResponse($ef079d51d1b4e7d5$var$cloneResponse(response.internalResponse), response.type);
    // 2. Let newResponse be a copy of response, except for its body.
    const newResponse = $ef079d51d1b4e7d5$var$makeResponse({
        ...response,
        body: null
    });
    // 3. If response’s body is non-null, then set newResponse’s body to the
    // result of cloning response’s body.
    if (response.body != null) newResponse.body = $ef079d51d1b4e7d5$require$cloneBody(response.body);
    // 4. Return newResponse.
    return newResponse;
}
function $ef079d51d1b4e7d5$var$makeResponse(init) {
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
        headersList: init.headersList ? new $ef079d51d1b4e7d5$require$HeadersList(init.headersList) : new $ef079d51d1b4e7d5$require$HeadersList(),
        urlList: init.urlList ? [
            ...init.urlList
        ] : []
    };
}
function $ef079d51d1b4e7d5$var$makeNetworkError(reason) {
    const isError = $ef079d51d1b4e7d5$require$isErrorLike(reason);
    return $ef079d51d1b4e7d5$var$makeResponse({
        type: 'error',
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason),
        aborted: reason && reason.name === 'AbortError'
    });
}
function $ef079d51d1b4e7d5$var$makeFilteredResponse(response, state) {
    state = {
        internalResponse: response,
        ...state
    };
    return new Proxy(response, {
        get (target, p) {
            return p in state ? state[p] : target[p];
        },
        set (target, p, value) {
            $lTxNI$assert(!(p in state));
            target[p] = value;
            return true;
        }
    });
}
// https://fetch.spec.whatwg.org/#concept-filtered-response
function $ef079d51d1b4e7d5$var$filterResponse(response, type) {
    // Set response to the following filtered response with response as its
    // internal response, depending on request’s response tainting:
    if (type === 'basic') // A basic filtered response is a filtered response whose type is "basic"
    // and header list excludes any headers in internal response’s header list
    // whose name is a forbidden response-header name.
    // Note: undici does not implement forbidden response-header names
    return $ef079d51d1b4e7d5$var$makeFilteredResponse(response, {
        type: 'basic',
        headersList: response.headersList
    });
    else if (type === 'cors') // A CORS filtered response is a filtered response whose type is "cors"
    // and header list excludes any headers in internal response’s header
    // list whose name is not a CORS-safelisted response-header name, given
    // internal response’s CORS-exposed header-name list.
    // Note: undici does not implement CORS-safelisted response-header names
    return $ef079d51d1b4e7d5$var$makeFilteredResponse(response, {
        type: 'cors',
        headersList: response.headersList
    });
    else if (type === 'opaque') // An opaque filtered response is a filtered response whose type is
    // "opaque", URL list is the empty list, status is 0, status message
    // is the empty byte sequence, header list is empty, and body is null.
    return $ef079d51d1b4e7d5$var$makeFilteredResponse(response, {
        type: 'opaque',
        urlList: Object.freeze([]),
        status: 0,
        statusText: '',
        body: null
    });
    else if (type === 'opaqueredirect') // An opaque-redirect filtered response is a filtered response whose type
    // is "opaqueredirect", status is 0, status message is the empty byte
    // sequence, header list is empty, and body is null.
    return $ef079d51d1b4e7d5$var$makeFilteredResponse(response, {
        type: 'opaqueredirect',
        status: 0,
        statusText: '',
        headersList: [],
        body: null
    });
    else $lTxNI$assert(false);
}
// https://fetch.spec.whatwg.org/#appropriate-network-error
function $ef079d51d1b4e7d5$var$makeAppropriateNetworkError(fetchParams, err = null) {
    // 1. Assert: fetchParams is canceled.
    $lTxNI$assert($ef079d51d1b4e7d5$require$isCancelled(fetchParams));
    // 2. Return an aborted network error if fetchParams is aborted;
    // otherwise return a network error.
    return $ef079d51d1b4e7d5$require$isAborted(fetchParams) ? $ef079d51d1b4e7d5$var$makeNetworkError(Object.assign(new $ef079d51d1b4e7d5$require$DOMException('The operation was aborted.', 'AbortError'), {
        cause: err
    })) : $ef079d51d1b4e7d5$var$makeNetworkError(Object.assign(new $ef079d51d1b4e7d5$require$DOMException('Request was cancelled.'), {
        cause: err
    }));
}
// https://whatpr.org/fetch/1392.html#initialize-a-response
function $ef079d51d1b4e7d5$var$initializeResponse(response, init, body) {
    // 1. If init["status"] is not in the range 200 to 599, inclusive, then
    //    throw a RangeError.
    if (init.status !== null && (init.status < 200 || init.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    // 2. If init["statusText"] does not match the reason-phrase token production,
    //    then throw a TypeError.
    if ('statusText' in init && init.statusText != null) {
        // See, https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.2:
        //   reason-phrase  = *( HTAB / SP / VCHAR / obs-text )
        if (!$ef079d51d1b4e7d5$require$isValidReasonPhrase(String(init.statusText))) throw new TypeError('Invalid statusText');
    }
    // 3. Set response’s response’s status to init["status"].
    if ('status' in init && init.status != null) response[$ef079d51d1b4e7d5$require$kState].status = init.status;
    // 4. Set response’s response’s status message to init["statusText"].
    if ('statusText' in init && init.statusText != null) response[$ef079d51d1b4e7d5$require$kState].statusText = init.statusText;
    // 5. If init["headers"] exists, then fill response’s headers with init["headers"].
    if ('headers' in init && init.headers != null) $ef079d51d1b4e7d5$require$fill(response[$ef079d51d1b4e7d5$require$kHeaders], init.headers);
    // 6. If body was given, then:
    if (body) {
        // 1. If response's status is a null body status, then throw a TypeError.
        if ($ef079d51d1b4e7d5$require$nullBodyStatus.includes(response.status)) throw $ef079d51d1b4e7d5$require$webidl.errors.exception({
            header: 'Response constructor',
            message: 'Invalid response status code ' + response.status
        });
        // 2. Set response's body to body's body.
        response[$ef079d51d1b4e7d5$require$kState].body = body.body;
        // 3. If body's type is non-null and response's header list does not contain
        //    `Content-Type`, then append (`Content-Type`, body's type) to response's header list.
        if (body.type != null && !response[$ef079d51d1b4e7d5$require$kState].headersList.contains('Content-Type')) response[$ef079d51d1b4e7d5$require$kState].headersList.append('content-type', body.type);
    }
}
$ef079d51d1b4e7d5$require$webidl.converters.ReadableStream = $ef079d51d1b4e7d5$require$webidl.interfaceConverter($ef079d51d1b4e7d5$var$ReadableStream);
$ef079d51d1b4e7d5$require$webidl.converters.FormData = $ef079d51d1b4e7d5$require$webidl.interfaceConverter($ef079d51d1b4e7d5$require$FormData);
$ef079d51d1b4e7d5$require$webidl.converters.URLSearchParams = $ef079d51d1b4e7d5$require$webidl.interfaceConverter(URLSearchParams);
// https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit
$ef079d51d1b4e7d5$require$webidl.converters.XMLHttpRequestBodyInit = function(V) {
    if (typeof V === 'string') return $ef079d51d1b4e7d5$require$webidl.converters.USVString(V);
    if ($ef079d51d1b4e7d5$require$isBlobLike(V)) return $ef079d51d1b4e7d5$require$webidl.converters.Blob(V, {
        strict: false
    });
    if ($ef079d51d1b4e7d5$require$types.isArrayBuffer(V) || $ef079d51d1b4e7d5$require$types.isTypedArray(V) || $ef079d51d1b4e7d5$require$types.isDataView(V)) return $ef079d51d1b4e7d5$require$webidl.converters.BufferSource(V);
    if ($1Z05w.isFormDataLike(V)) return $ef079d51d1b4e7d5$require$webidl.converters.FormData(V, {
        strict: false
    });
    if (V instanceof URLSearchParams) return $ef079d51d1b4e7d5$require$webidl.converters.URLSearchParams(V);
    return $ef079d51d1b4e7d5$require$webidl.converters.DOMString(V);
};
// https://fetch.spec.whatwg.org/#bodyinit
$ef079d51d1b4e7d5$require$webidl.converters.BodyInit = function(V) {
    if (V instanceof $ef079d51d1b4e7d5$var$ReadableStream) return $ef079d51d1b4e7d5$require$webidl.converters.ReadableStream(V);
    // Note: the spec doesn't include async iterables,
    // this is an undici extension.
    if (V?.[Symbol.asyncIterator]) return V;
    return $ef079d51d1b4e7d5$require$webidl.converters.XMLHttpRequestBodyInit(V);
};
$ef079d51d1b4e7d5$require$webidl.converters.ResponseInit = $ef079d51d1b4e7d5$require$webidl.dictionaryConverter([
    {
        key: 'status',
        converter: $ef079d51d1b4e7d5$require$webidl.converters['unsigned short'],
        defaultValue: 200
    },
    {
        key: 'statusText',
        converter: $ef079d51d1b4e7d5$require$webidl.converters.ByteString,
        defaultValue: ''
    },
    {
        key: 'headers',
        converter: $ef079d51d1b4e7d5$require$webidl.converters.HeadersInit
    }
]);
module.exports = {
    makeNetworkError: $ef079d51d1b4e7d5$var$makeNetworkError,
    makeResponse: $ef079d51d1b4e7d5$var$makeResponse,
    makeAppropriateNetworkError: $ef079d51d1b4e7d5$var$makeAppropriateNetworkError,
    filterResponse: $ef079d51d1b4e7d5$var$filterResponse,
    Response: $ef079d51d1b4e7d5$var$Response,
    cloneResponse: $ef079d51d1b4e7d5$var$cloneResponse
};

});
parcelRegister("HrhFg", function(module, exports) {
module.exports = new URL("headers.e172861b.js", "file:" + __filename).toString();

});



//# sourceMappingURL=response.b4e7d51a.js.map
