require("./constants.0582e50a.js");
require("./global.12b98812.js");
require("./util.26715e80.js");
var $PHsW3$perf_hooks = require("perf_hooks");
var $PHsW3$assert = require("assert");
var $PHsW3$utiltypes = require("util/types");
var $PHsW3$streamweb = require("stream/web");


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
'use strict';
var $f0c2bc08347af6c6$exports = {};
$f0c2bc08347af6c6$exports = new URL("constants.0582e50a.js", "file:" + __filename).toString();


var $67571b2f148a5c63$require$redirectStatusSet = $f0c2bc08347af6c6$exports.redirectStatusSet;
var $67571b2f148a5c63$require$referrerPolicyTokens = $f0c2bc08347af6c6$exports.referrerPolicySet;
var $67571b2f148a5c63$require$badPortsSet = $f0c2bc08347af6c6$exports.badPortsSet;
var $f8658a0537bae7bb$exports = {};
$f8658a0537bae7bb$exports = new URL("global.12b98812.js", "file:" + __filename).toString();


var $67571b2f148a5c63$require$getGlobalOrigin = $f8658a0537bae7bb$exports.getGlobalOrigin;

var $67571b2f148a5c63$require$performance = $PHsW3$perf_hooks.performance;

var $1Z05w = parcelRequire("1Z05w");
var $67571b2f148a5c63$require$isBlobLike = $1Z05w.isBlobLike;
var $67571b2f148a5c63$require$toUSVString = $1Z05w.toUSVString;
var $67571b2f148a5c63$require$ReadableStreamFrom = $1Z05w.ReadableStreamFrom;


var $67571b2f148a5c63$require$isUint8Array = $PHsW3$utiltypes.isUint8Array;
let $67571b2f148a5c63$var$supportedHashes = [];
// https://nodejs.org/api/crypto.html#determining-if-crypto-support-is-unavailable
/** @type {import('crypto')|undefined} */ let $67571b2f148a5c63$var$crypto;

try {
    $67571b2f148a5c63$var$crypto = $67571b2f148a5c63$import$4e46f0aad582585a;
    const possibleRelevantHashes = [
        'sha256',
        'sha384',
        'sha512'
    ];
    $67571b2f148a5c63$var$supportedHashes = $67571b2f148a5c63$var$crypto.getHashes().filter((hash)=>possibleRelevantHashes.includes(hash));
/* c8 ignore next 3 */ } catch  {}
function $67571b2f148a5c63$var$responseURL(response) {
    // https://fetch.spec.whatwg.org/#responses
    // A response has an associated URL. It is a pointer to the last URL
    // in response’s URL list and null if response’s URL list is empty.
    const urlList = response.urlList;
    const length = urlList.length;
    return length === 0 ? null : urlList[length - 1].toString();
}
// https://fetch.spec.whatwg.org/#concept-response-location-url
function $67571b2f148a5c63$var$responseLocationURL(response, requestFragment) {
    // 1. If response’s status is not a redirect status, then return null.
    if (!$67571b2f148a5c63$require$redirectStatusSet.has(response.status)) return null;
    // 2. Let location be the result of extracting header list values given
    // `Location` and response’s header list.
    let location = response.headersList.get('location');
    // 3. If location is a header value, then set location to the result of
    //    parsing location with response’s URL.
    if (location !== null && $67571b2f148a5c63$var$isValidHeaderValue(location)) location = new URL(location, $67571b2f148a5c63$var$responseURL(response));
    // 4. If location is a URL whose fragment is null, then set location’s
    // fragment to requestFragment.
    if (location && !location.hash) location.hash = requestFragment;
    // 5. Return location.
    return location;
}
/** @returns {URL} */ function $67571b2f148a5c63$var$requestCurrentURL(request) {
    return request.urlList[request.urlList.length - 1];
}
function $67571b2f148a5c63$var$requestBadPort(request) {
    // 1. Let url be request’s current URL.
    const url = $67571b2f148a5c63$var$requestCurrentURL(request);
    // 2. If url’s scheme is an HTTP(S) scheme and url’s port is a bad port,
    // then return blocked.
    if ($67571b2f148a5c63$var$urlIsHttpHttpsScheme(url) && $67571b2f148a5c63$require$badPortsSet.has(url.port)) return 'blocked';
    // 3. Return allowed.
    return 'allowed';
}
function $67571b2f148a5c63$var$isErrorLike(object) {
    return object instanceof Error || object?.constructor?.name === 'Error' || object?.constructor?.name === 'DOMException';
}
// Check whether |statusText| is a ByteString and
// matches the Reason-Phrase token production.
// RFC 2616: https://tools.ietf.org/html/rfc2616
// RFC 7230: https://tools.ietf.org/html/rfc7230
// "reason-phrase = *( HTAB / SP / VCHAR / obs-text )"
// https://github.com/chromium/chromium/blob/94.0.4604.1/third_party/blink/renderer/core/fetch/response.cc#L116
function $67571b2f148a5c63$var$isValidReasonPhrase(statusText) {
    for(let i = 0; i < statusText.length; ++i){
        const c = statusText.charCodeAt(i);
        if (!(c === 0x09 || // HTAB
        c >= 0x20 && c <= 0x7e || // SP / VCHAR
        c >= 0x80 && c <= 0xff // obs-text
        )) return false;
    }
    return true;
}
/**
 * @see https://tools.ietf.org/html/rfc7230#section-3.2.6
 * @param {number} c
 */ function $67571b2f148a5c63$var$isTokenCharCode(c) {
    switch(c){
        case 0x22:
        case 0x28:
        case 0x29:
        case 0x2c:
        case 0x2f:
        case 0x3a:
        case 0x3b:
        case 0x3c:
        case 0x3d:
        case 0x3e:
        case 0x3f:
        case 0x40:
        case 0x5b:
        case 0x5c:
        case 0x5d:
        case 0x7b:
        case 0x7d:
            // DQUOTE and "(),/:;<=>?@[\]{}"
            return false;
        default:
            // VCHAR %x21-7E
            return c >= 0x21 && c <= 0x7e;
    }
}
/**
 * @param {string} characters
 */ function $67571b2f148a5c63$var$isValidHTTPToken(characters) {
    if (characters.length === 0) return false;
    for(let i = 0; i < characters.length; ++i){
        if (!$67571b2f148a5c63$var$isTokenCharCode(characters.charCodeAt(i))) return false;
    }
    return true;
}
/**
 * @see https://fetch.spec.whatwg.org/#header-name
 * @param {string} potentialValue
 */ function $67571b2f148a5c63$var$isValidHeaderName(potentialValue) {
    return $67571b2f148a5c63$var$isValidHTTPToken(potentialValue);
}
/**
 * @see https://fetch.spec.whatwg.org/#header-value
 * @param {string} potentialValue
 */ function $67571b2f148a5c63$var$isValidHeaderValue(potentialValue) {
    // - Has no leading or trailing HTTP tab or space bytes.
    // - Contains no 0x00 (NUL) or HTTP newline bytes.
    if (potentialValue.startsWith('\t') || potentialValue.startsWith(' ') || potentialValue.endsWith('\t') || potentialValue.endsWith(' ')) return false;
    if (potentialValue.includes('\0') || potentialValue.includes('\r') || potentialValue.includes('\n')) return false;
    return true;
}
// https://w3c.github.io/webappsec-referrer-policy/#set-requests-referrer-policy-on-redirect
function $67571b2f148a5c63$var$setRequestReferrerPolicyOnRedirect(request, actualResponse) {
    //  Given a request request and a response actualResponse, this algorithm
    //  updates request’s referrer policy according to the Referrer-Policy
    //  header (if any) in actualResponse.
    // 1. Let policy be the result of executing § 8.1 Parse a referrer policy
    // from a Referrer-Policy header on actualResponse.
    // 8.1 Parse a referrer policy from a Referrer-Policy header
    // 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy` and response’s header list.
    const { headersList: headersList } = actualResponse;
    // 2. Let policy be the empty string.
    // 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty string, then set policy to token.
    // 4. Return policy.
    const policyHeader = (headersList.get('referrer-policy') ?? '').split(',');
    // Note: As the referrer-policy can contain multiple policies
    // separated by comma, we need to loop through all of them
    // and pick the first valid one.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#specify_a_fallback_policy
    let policy = '';
    if (policyHeader.length > 0) // The right-most policy takes precedence.
    // The left-most policy is the fallback.
    for(let i = policyHeader.length; i !== 0; i--){
        const token = policyHeader[i - 1].trim();
        if ($67571b2f148a5c63$require$referrerPolicyTokens.has(token)) {
            policy = token;
            break;
        }
    }
    // 2. If policy is not the empty string, then set request’s referrer policy to policy.
    if (policy !== '') request.referrerPolicy = policy;
}
// https://fetch.spec.whatwg.org/#cross-origin-resource-policy-check
function $67571b2f148a5c63$var$crossOriginResourcePolicyCheck() {
    // TODO
    return 'allowed';
}
// https://fetch.spec.whatwg.org/#concept-cors-check
function $67571b2f148a5c63$var$corsCheck() {
    // TODO
    return 'success';
}
// https://fetch.spec.whatwg.org/#concept-tao-check
function $67571b2f148a5c63$var$TAOCheck() {
    // TODO
    return 'success';
}
function $67571b2f148a5c63$var$appendFetchMetadata(httpRequest) {
    //  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-dest-header
    //  TODO
    //  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-mode-header
    //  1. Assert: r’s url is a potentially trustworthy URL.
    //  TODO
    //  2. Let header be a Structured Header whose value is a token.
    let header = null;
    //  3. Set header’s value to r’s mode.
    header = httpRequest.mode;
    //  4. Set a structured field value `Sec-Fetch-Mode`/header in r’s header list.
    httpRequest.headersList.set('sec-fetch-mode', header);
//  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-site-header
//  TODO
//  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-user-header
//  TODO
}
// https://fetch.spec.whatwg.org/#append-a-request-origin-header
function $67571b2f148a5c63$var$appendRequestOriginHeader(request) {
    // 1. Let serializedOrigin be the result of byte-serializing a request origin with request.
    let serializedOrigin = request.origin;
    // 2. If request’s response tainting is "cors" or request’s mode is "websocket", then append (`Origin`, serializedOrigin) to request’s header list.
    if (request.responseTainting === 'cors' || request.mode === 'websocket') {
        if (serializedOrigin) request.headersList.append('origin', serializedOrigin);
    } else if (request.method !== 'GET' && request.method !== 'HEAD') {
        // 1. Switch on request’s referrer policy:
        switch(request.referrerPolicy){
            case 'no-referrer':
                // Set serializedOrigin to `null`.
                serializedOrigin = null;
                break;
            case 'no-referrer-when-downgrade':
            case 'strict-origin':
            case 'strict-origin-when-cross-origin':
                // If request’s origin is a tuple origin, its scheme is "https", and request’s current URL’s scheme is not "https", then set serializedOrigin to `null`.
                if (request.origin && $67571b2f148a5c63$var$urlHasHttpsScheme(request.origin) && !$67571b2f148a5c63$var$urlHasHttpsScheme($67571b2f148a5c63$var$requestCurrentURL(request))) serializedOrigin = null;
                break;
            case 'same-origin':
                // If request’s origin is not same origin with request’s current URL’s origin, then set serializedOrigin to `null`.
                if (!$67571b2f148a5c63$var$sameOrigin(request, $67571b2f148a5c63$var$requestCurrentURL(request))) serializedOrigin = null;
                break;
            default:
        }
        if (serializedOrigin) // 2. Append (`Origin`, serializedOrigin) to request’s header list.
        request.headersList.append('origin', serializedOrigin);
    }
}
function $67571b2f148a5c63$var$coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
    // TODO
    return $67571b2f148a5c63$require$performance.now();
}
// https://fetch.spec.whatwg.org/#create-an-opaque-timing-info
function $67571b2f148a5c63$var$createOpaqueTimingInfo(timingInfo) {
    return {
        startTime: timingInfo.startTime ?? 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: timingInfo.startTime ?? 0,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
    };
}
// https://html.spec.whatwg.org/multipage/origin.html#policy-container
function $67571b2f148a5c63$var$makePolicyContainer() {
    // Note: the fetch spec doesn't make use of embedder policy or CSP list
    return {
        referrerPolicy: 'strict-origin-when-cross-origin'
    };
}
// https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container
function $67571b2f148a5c63$var$clonePolicyContainer(policyContainer) {
    return {
        referrerPolicy: policyContainer.referrerPolicy
    };
}
// https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer
function $67571b2f148a5c63$var$determineRequestsReferrer(request) {
    // 1. Let policy be request's referrer policy.
    const policy = request.referrerPolicy;
    // Note: policy cannot (shouldn't) be null or an empty string.
    $PHsW3$assert(policy);
    // 2. Let environment be request’s client.
    let referrerSource = null;
    // 3. Switch on request’s referrer:
    if (request.referrer === 'client') {
        // Note: node isn't a browser and doesn't implement document/iframes,
        // so we bypass this step and replace it with our own.
        const globalOrigin = $67571b2f148a5c63$require$getGlobalOrigin();
        if (!globalOrigin || globalOrigin.origin === 'null') return 'no-referrer';
        // note: we need to clone it as it's mutated
        referrerSource = new URL(globalOrigin);
    } else if (request.referrer instanceof URL) // Let referrerSource be request’s referrer.
    referrerSource = request.referrer;
    // 4. Let request’s referrerURL be the result of stripping referrerSource for
    //    use as a referrer.
    let referrerURL = $67571b2f148a5c63$var$stripURLForReferrer(referrerSource);
    // 5. Let referrerOrigin be the result of stripping referrerSource for use as
    //    a referrer, with the origin-only flag set to true.
    const referrerOrigin = $67571b2f148a5c63$var$stripURLForReferrer(referrerSource, true);
    // 6. If the result of serializing referrerURL is a string whose length is
    //    greater than 4096, set referrerURL to referrerOrigin.
    if (referrerURL.toString().length > 4096) referrerURL = referrerOrigin;
    const areSameOrigin = $67571b2f148a5c63$var$sameOrigin(request, referrerURL);
    const isNonPotentiallyTrustWorthy = $67571b2f148a5c63$var$isURLPotentiallyTrustworthy(referrerURL) && !$67571b2f148a5c63$var$isURLPotentiallyTrustworthy(request.url);
    // 8. Execute the switch statements corresponding to the value of policy:
    switch(policy){
        case 'origin':
            return referrerOrigin != null ? referrerOrigin : $67571b2f148a5c63$var$stripURLForReferrer(referrerSource, true);
        case 'unsafe-url':
            return referrerURL;
        case 'same-origin':
            return areSameOrigin ? referrerOrigin : 'no-referrer';
        case 'origin-when-cross-origin':
            return areSameOrigin ? referrerURL : referrerOrigin;
        case 'strict-origin-when-cross-origin':
            {
                const currentURL = $67571b2f148a5c63$var$requestCurrentURL(request);
                // 1. If the origin of referrerURL and the origin of request’s current
                //    URL are the same, then return referrerURL.
                if ($67571b2f148a5c63$var$sameOrigin(referrerURL, currentURL)) return referrerURL;
                // 2. If referrerURL is a potentially trustworthy URL and request’s
                //    current URL is not a potentially trustworthy URL, then return no
                //    referrer.
                if ($67571b2f148a5c63$var$isURLPotentiallyTrustworthy(referrerURL) && !$67571b2f148a5c63$var$isURLPotentiallyTrustworthy(currentURL)) return 'no-referrer';
                // 3. Return referrerOrigin.
                return referrerOrigin;
            }
        case 'strict-origin':
        /**
         * 1. If referrerURL is a potentially trustworthy URL and
         * request’s current URL is not a potentially trustworthy URL,
         * then return no referrer.
         * 2. Return referrerOrigin
        */ case 'no-referrer-when-downgrade':
        /**
       * 1. If referrerURL is a potentially trustworthy URL and
       * request’s current URL is not a potentially trustworthy URL,
       * then return no referrer.
       * 2. Return referrerOrigin
      */ default:
            return isNonPotentiallyTrustWorthy ? 'no-referrer' : referrerOrigin;
    }
}
/**
 * @see https://w3c.github.io/webappsec-referrer-policy/#strip-url
 * @param {URL} url
 * @param {boolean|undefined} originOnly
 */ function $67571b2f148a5c63$var$stripURLForReferrer(url, originOnly) {
    // 1. Assert: url is a URL.
    $PHsW3$assert(url instanceof URL);
    // 2. If url’s scheme is a local scheme, then return no referrer.
    if (url.protocol === 'file:' || url.protocol === 'about:' || url.protocol === 'blank:') return 'no-referrer';
    // 3. Set url’s username to the empty string.
    url.username = '';
    // 4. Set url’s password to the empty string.
    url.password = '';
    // 5. Set url’s fragment to null.
    url.hash = '';
    // 6. If the origin-only flag is true, then:
    if (originOnly) {
        // 1. Set url’s path to « the empty string ».
        url.pathname = '';
        // 2. Set url’s query to null.
        url.search = '';
    }
    // 7. Return url.
    return url;
}
function $67571b2f148a5c63$var$isURLPotentiallyTrustworthy(url) {
    if (!(url instanceof URL)) return false;
    // If child of about, return true
    if (url.href === 'about:blank' || url.href === 'about:srcdoc') return true;
    // If scheme is data, return true
    if (url.protocol === 'data:') return true;
    // If file, return true
    if (url.protocol === 'file:') return true;
    return isOriginPotentiallyTrustworthy(url.origin);
    function isOriginPotentiallyTrustworthy(origin) {
        // If origin is explicitly null, return false
        if (origin == null || origin === 'null') return false;
        const originAsURL = new URL(origin);
        // If secure, return true
        if (originAsURL.protocol === 'https:' || originAsURL.protocol === 'wss:') return true;
        // If localhost or variants, return true
        if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(originAsURL.hostname) || originAsURL.hostname === 'localhost' || originAsURL.hostname.includes('localhost.') || originAsURL.hostname.endsWith('.localhost')) return true;
        // If any other, return false
        return false;
    }
}
/**
 * @see https://w3c.github.io/webappsec-subresource-integrity/#does-response-match-metadatalist
 * @param {Uint8Array} bytes
 * @param {string} metadataList
 */ function $67571b2f148a5c63$var$bytesMatch(bytes, metadataList) {
    // If node is not built with OpenSSL support, we cannot check
    // a request's integrity, so allow it by default (the spec will
    // allow requests if an invalid hash is given, as precedence).
    /* istanbul ignore if: only if node is built with --without-ssl */ if ($67571b2f148a5c63$var$crypto === undefined) return true;
    // 1. Let parsedMetadata be the result of parsing metadataList.
    const parsedMetadata = $67571b2f148a5c63$var$parseMetadata(metadataList);
    // 2. If parsedMetadata is no metadata, return true.
    if (parsedMetadata === 'no metadata') return true;
    // 3. If response is not eligible for integrity validation, return false.
    // TODO
    // 4. If parsedMetadata is the empty set, return true.
    if (parsedMetadata.length === 0) return true;
    // 5. Let metadata be the result of getting the strongest
    //    metadata from parsedMetadata.
    const strongest = $67571b2f148a5c63$var$getStrongestMetadata(parsedMetadata);
    const metadata = $67571b2f148a5c63$var$filterMetadataListByAlgorithm(parsedMetadata, strongest);
    // 6. For each item in metadata:
    for (const item of metadata){
        // 1. Let algorithm be the alg component of item.
        const algorithm = item.algo;
        // 2. Let expectedValue be the val component of item.
        const expectedValue = item.hash;
        // See https://github.com/web-platform-tests/wpt/commit/e4c5cc7a5e48093220528dfdd1c4012dc3837a0e
        // "be liberal with padding". This is annoying, and it's not even in the spec.
        // 3. Let actualValue be the result of applying algorithm to bytes.
        let actualValue = $67571b2f148a5c63$var$crypto.createHash(algorithm).update(bytes).digest('base64');
        if (actualValue[actualValue.length - 1] === '=') {
            if (actualValue[actualValue.length - 2] === '=') actualValue = actualValue.slice(0, -2);
            else actualValue = actualValue.slice(0, -1);
        }
        // 4. If actualValue is a case-sensitive match for expectedValue,
        //    return true.
        if ($67571b2f148a5c63$var$compareBase64Mixed(actualValue, expectedValue)) return true;
    }
    // 7. Return false.
    return false;
}
// https://w3c.github.io/webappsec-subresource-integrity/#grammardef-hash-with-options
// https://www.w3.org/TR/CSP2/#source-list-syntax
// https://www.rfc-editor.org/rfc/rfc5234#appendix-B.1
const $67571b2f148a5c63$var$parseHashWithOptions = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
/**
 * @see https://w3c.github.io/webappsec-subresource-integrity/#parse-metadata
 * @param {string} metadata
 */ function $67571b2f148a5c63$var$parseMetadata(metadata) {
    // 1. Let result be the empty set.
    /** @type {{ algo: string, hash: string }[]} */ const result = [];
    // 2. Let empty be equal to true.
    let empty = true;
    // 3. For each token returned by splitting metadata on spaces:
    for (const token of metadata.split(' ')){
        // 1. Set empty to false.
        empty = false;
        // 2. Parse token as a hash-with-options.
        const parsedToken = $67571b2f148a5c63$var$parseHashWithOptions.exec(token);
        // 3. If token does not parse, continue to the next token.
        if (parsedToken === null || parsedToken.groups === undefined || parsedToken.groups.algo === undefined) continue;
        // 4. Let algorithm be the hash-algo component of token.
        const algorithm = parsedToken.groups.algo.toLowerCase();
        // 5. If algorithm is a hash function recognized by the user
        //    agent, add the parsed token to result.
        if ($67571b2f148a5c63$var$supportedHashes.includes(algorithm)) result.push(parsedToken.groups);
    }
    // 4. Return no metadata if empty is true, otherwise return result.
    if (empty === true) return 'no metadata';
    return result;
}
/**
 * @param {{ algo: 'sha256' | 'sha384' | 'sha512' }[]} metadataList
 */ function $67571b2f148a5c63$var$getStrongestMetadata(metadataList) {
    // Let algorithm be the algo component of the first item in metadataList.
    // Can be sha256
    let algorithm = metadataList[0].algo;
    // If the algorithm is sha512, then it is the strongest
    // and we can return immediately
    if (algorithm[3] === '5') return algorithm;
    for(let i = 1; i < metadataList.length; ++i){
        const metadata = metadataList[i];
        // If the algorithm is sha512, then it is the strongest
        // and we can break the loop immediately
        if (metadata.algo[3] === '5') {
            algorithm = 'sha512';
            break;
        // If the algorithm is sha384, then a potential sha256 or sha384 is ignored
        } else if (algorithm[3] === '3') continue;
        else if (metadata.algo[3] === '3') algorithm = 'sha384';
    }
    return algorithm;
}
function $67571b2f148a5c63$var$filterMetadataListByAlgorithm(metadataList, algorithm) {
    if (metadataList.length === 1) return metadataList;
    let pos = 0;
    for(let i = 0; i < metadataList.length; ++i)if (metadataList[i].algo === algorithm) metadataList[pos++] = metadataList[i];
    metadataList.length = pos;
    return metadataList;
}
/**
 * Compares two base64 strings, allowing for base64url
 * in the second string.
 *
* @param {string} actualValue always base64
 * @param {string} expectedValue base64 or base64url
 * @returns {boolean}
 */ function $67571b2f148a5c63$var$compareBase64Mixed(actualValue, expectedValue) {
    if (actualValue.length !== expectedValue.length) return false;
    for(let i = 0; i < actualValue.length; ++i)if (actualValue[i] !== expectedValue[i]) {
        if (actualValue[i] === '+' && expectedValue[i] === '-' || actualValue[i] === '/' && expectedValue[i] === '_') continue;
        return false;
    }
    return true;
}
// https://w3c.github.io/webappsec-upgrade-insecure-requests/#upgrade-request
function $67571b2f148a5c63$var$tryUpgradeRequestToAPotentiallyTrustworthyURL(request) {
// TODO
}
/**
 * @link {https://html.spec.whatwg.org/multipage/origin.html#same-origin}
 * @param {URL} A
 * @param {URL} B
 */ function $67571b2f148a5c63$var$sameOrigin(A, B) {
    // 1. If A and B are the same opaque origin, then return true.
    if (A.origin === B.origin && A.origin === 'null') return true;
    // 2. If A and B are both tuple origins and their schemes,
    //    hosts, and port are identical, then return true.
    if (A.protocol === B.protocol && A.hostname === B.hostname && A.port === B.port) return true;
    // 3. Return false.
    return false;
}
function $67571b2f148a5c63$var$createDeferredPromise() {
    let res;
    let rej;
    const promise = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    return {
        promise: promise,
        resolve: res,
        reject: rej
    };
}
function $67571b2f148a5c63$var$isAborted(fetchParams) {
    return fetchParams.controller.state === 'aborted';
}
function $67571b2f148a5c63$var$isCancelled(fetchParams) {
    return fetchParams.controller.state === 'aborted' || fetchParams.controller.state === 'terminated';
}
const $67571b2f148a5c63$var$normalizeMethodRecord = {
    delete: 'DELETE',
    DELETE: 'DELETE',
    get: 'GET',
    GET: 'GET',
    head: 'HEAD',
    HEAD: 'HEAD',
    options: 'OPTIONS',
    OPTIONS: 'OPTIONS',
    post: 'POST',
    POST: 'POST',
    put: 'PUT',
    PUT: 'PUT'
};
// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf($67571b2f148a5c63$var$normalizeMethodRecord, null);
/**
 * @see https://fetch.spec.whatwg.org/#concept-method-normalize
 * @param {string} method
 */ function $67571b2f148a5c63$var$normalizeMethod(method) {
    return $67571b2f148a5c63$var$normalizeMethodRecord[method.toLowerCase()] ?? method;
}
// https://infra.spec.whatwg.org/#serialize-a-javascript-value-to-a-json-string
function $67571b2f148a5c63$var$serializeJavascriptValueToJSONString(value) {
    // 1. Let result be ? Call(%JSON.stringify%, undefined, « value »).
    const result = JSON.stringify(value);
    // 2. If result is undefined, then throw a TypeError.
    if (result === undefined) throw new TypeError('Value is not JSON serializable');
    // 3. Assert: result is a string.
    $PHsW3$assert(typeof result === 'string');
    // 4. Return result.
    return result;
}
// https://tc39.es/ecma262/#sec-%25iteratorprototype%25-object
const $67571b2f148a5c63$var$esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
/**
 * @see https://webidl.spec.whatwg.org/#dfn-iterator-prototype-object
 * @param {() => unknown[]} iterator
 * @param {string} name name of the instance
 * @param {'key'|'value'|'key+value'} kind
 */ function $67571b2f148a5c63$var$makeIterator(iterator, name, kind) {
    const object = {
        index: 0,
        kind: kind,
        target: iterator
    };
    const i = {
        next () {
            // 1. Let interface be the interface for which the iterator prototype object exists.
            // 2. Let thisValue be the this value.
            // 3. Let object be ? ToObject(thisValue).
            // 4. If object is a platform object, then perform a security
            //    check, passing:
            // 5. If object is not a default iterator object for interface,
            //    then throw a TypeError.
            if (Object.getPrototypeOf(this) !== i) throw new TypeError(`'next' called on an object that does not implement interface ${name} Iterator.`);
            // 6. Let index be object’s index.
            // 7. Let kind be object’s kind.
            // 8. Let values be object’s target's value pairs to iterate over.
            const { index: index, kind: kind, target: target } = object;
            const values = target();
            // 9. Let len be the length of values.
            const len = values.length;
            // 10. If index is greater than or equal to len, then return
            //     CreateIterResultObject(undefined, true).
            if (index >= len) return {
                value: undefined,
                done: true
            };
            // 11. Let pair be the entry in values at index index.
            const pair = values[index];
            // 12. Set object’s index to index + 1.
            object.index = index + 1;
            // 13. Return the iterator result for pair and kind.
            return $67571b2f148a5c63$var$iteratorResult(pair, kind);
        },
        // The class string of an iterator prototype object for a given interface is the
        // result of concatenating the identifier of the interface and the string " Iterator".
        [Symbol.toStringTag]: `${name} Iterator`
    };
    // The [[Prototype]] internal slot of an iterator prototype object must be %IteratorPrototype%.
    Object.setPrototypeOf(i, $67571b2f148a5c63$var$esIteratorPrototype);
    // esIteratorPrototype needs to be the prototype of i
    // which is the prototype of an empty object. Yes, it's confusing.
    return Object.setPrototypeOf({}, i);
}
// https://webidl.spec.whatwg.org/#iterator-result
function $67571b2f148a5c63$var$iteratorResult(pair, kind) {
    let result;
    // 1. Let result be a value determined by the value of kind:
    switch(kind){
        case 'key':
            // 1. Let idlKey be pair’s key.
            // 2. Let key be the result of converting idlKey to an
            //    ECMAScript value.
            // 3. result is key.
            result = pair[0];
            break;
        case 'value':
            // 1. Let idlValue be pair’s value.
            // 2. Let value be the result of converting idlValue to
            //    an ECMAScript value.
            // 3. result is value.
            result = pair[1];
            break;
        case 'key+value':
            // 1. Let idlKey be pair’s key.
            // 2. Let idlValue be pair’s value.
            // 3. Let key be the result of converting idlKey to an
            //    ECMAScript value.
            // 4. Let value be the result of converting idlValue to
            //    an ECMAScript value.
            // 5. Let array be ! ArrayCreate(2).
            // 6. Call ! CreateDataProperty(array, "0", key).
            // 7. Call ! CreateDataProperty(array, "1", value).
            // 8. result is array.
            result = pair;
            break;
    }
    // 2. Return CreateIterResultObject(result, false).
    return {
        value: result,
        done: false
    };
}
/**
 * @see https://fetch.spec.whatwg.org/#body-fully-read
 */ async function $67571b2f148a5c63$var$fullyReadBody(body, processBody, processBodyError) {
    // 1. If taskDestination is null, then set taskDestination to
    //    the result of starting a new parallel queue.
    // 2. Let successSteps given a byte sequence bytes be to queue a
    //    fetch task to run processBody given bytes, with taskDestination.
    const successSteps = processBody;
    // 3. Let errorSteps be to queue a fetch task to run processBodyError,
    //    with taskDestination.
    const errorSteps = processBodyError;
    // 4. Let reader be the result of getting a reader for body’s stream.
    //    If that threw an exception, then run errorSteps with that
    //    exception and return.
    let reader;
    try {
        reader = body.stream.getReader();
    } catch (e) {
        errorSteps(e);
        return;
    }
    // 5. Read all bytes from reader, given successSteps and errorSteps.
    try {
        const result = await $67571b2f148a5c63$var$readAllBytes(reader);
        successSteps(result);
    } catch (e) {
        errorSteps(e);
    }
}
/** @type {ReadableStream} */ let $67571b2f148a5c63$var$ReadableStream = globalThis.ReadableStream;

function $67571b2f148a5c63$var$isReadableStreamLike(stream) {
    if (!$67571b2f148a5c63$var$ReadableStream) $67571b2f148a5c63$var$ReadableStream = $PHsW3$streamweb.ReadableStream;
    return stream instanceof $67571b2f148a5c63$var$ReadableStream || stream[Symbol.toStringTag] === 'ReadableStream' && typeof stream.tee === 'function';
}
const $67571b2f148a5c63$var$MAXIMUM_ARGUMENT_LENGTH = 65535;
/**
 * @see https://infra.spec.whatwg.org/#isomorphic-decode
 * @param {number[]|Uint8Array} input
 */ function $67571b2f148a5c63$var$isomorphicDecode(input) {
    // 1. To isomorphic decode a byte sequence input, return a string whose code point
    //    length is equal to input’s length and whose code points have the same values
    //    as the values of input’s bytes, in the same order.
    if (input.length < $67571b2f148a5c63$var$MAXIMUM_ARGUMENT_LENGTH) return String.fromCharCode(...input);
    return input.reduce((previous, current)=>previous + String.fromCharCode(current), '');
}
/**
 * @param {ReadableStreamController<Uint8Array>} controller
 */ function $67571b2f148a5c63$var$readableStreamClose(controller) {
    try {
        controller.close();
    } catch (err) {
        // TODO: add comment explaining why this error occurs.
        if (!err.message.includes('Controller is already closed')) throw err;
    }
}
/**
 * @see https://infra.spec.whatwg.org/#isomorphic-encode
 * @param {string} input
 */ function $67571b2f148a5c63$var$isomorphicEncode(input) {
    // 1. Assert: input contains no code points greater than U+00FF.
    for(let i = 0; i < input.length; i++)$PHsW3$assert(input.charCodeAt(i) <= 0xFF);
    // 2. Return a byte sequence whose length is equal to input’s code
    //    point length and whose bytes have the same values as the
    //    values of input’s code points, in the same order
    return input;
}
/**
 * @see https://streams.spec.whatwg.org/#readablestreamdefaultreader-read-all-bytes
 * @see https://streams.spec.whatwg.org/#read-loop
 * @param {ReadableStreamDefaultReader} reader
 */ async function $67571b2f148a5c63$var$readAllBytes(reader) {
    const bytes = [];
    let byteLength = 0;
    while(true){
        const { done: done, value: chunk } = await reader.read();
        if (done) // 1. Call successSteps with bytes.
        return Buffer.concat(bytes, byteLength);
        // 1. If chunk is not a Uint8Array object, call failureSteps
        //    with a TypeError and abort these steps.
        if (!$67571b2f148a5c63$require$isUint8Array(chunk)) throw new TypeError('Received non-Uint8Array chunk');
        // 2. Append the bytes represented by chunk to bytes.
        bytes.push(chunk);
        byteLength += chunk.length;
    // 3. Read-loop given reader, bytes, successSteps, and failureSteps.
    }
}
/**
 * @see https://fetch.spec.whatwg.org/#is-local
 * @param {URL} url
 */ function $67571b2f148a5c63$var$urlIsLocal(url) {
    $PHsW3$assert('protocol' in url) // ensure it's a url object
    ;
    const protocol = url.protocol;
    return protocol === 'about:' || protocol === 'blob:' || protocol === 'data:';
}
/**
 * @param {string|URL} url
 */ function $67571b2f148a5c63$var$urlHasHttpsScheme(url) {
    if (typeof url === 'string') return url.startsWith('https:');
    return url.protocol === 'https:';
}
/**
 * @see https://fetch.spec.whatwg.org/#http-scheme
 * @param {URL} url
 */ function $67571b2f148a5c63$var$urlIsHttpHttpsScheme(url) {
    $PHsW3$assert('protocol' in url) // ensure it's a url object
    ;
    const protocol = url.protocol;
    return protocol === 'http:' || protocol === 'https:';
}
/**
 * Fetch supports node >= 16.8.0, but Object.hasOwn was added in v16.9.0.
 */ const $67571b2f148a5c63$var$hasOwn = Object.hasOwn || ((dict, key)=>Object.prototype.hasOwnProperty.call(dict, key));
module.exports = {
    isAborted: $67571b2f148a5c63$var$isAborted,
    isCancelled: $67571b2f148a5c63$var$isCancelled,
    createDeferredPromise: $67571b2f148a5c63$var$createDeferredPromise,
    ReadableStreamFrom: $67571b2f148a5c63$require$ReadableStreamFrom,
    toUSVString: $67571b2f148a5c63$require$toUSVString,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: $67571b2f148a5c63$var$tryUpgradeRequestToAPotentiallyTrustworthyURL,
    coarsenedSharedCurrentTime: $67571b2f148a5c63$var$coarsenedSharedCurrentTime,
    determineRequestsReferrer: $67571b2f148a5c63$var$determineRequestsReferrer,
    makePolicyContainer: $67571b2f148a5c63$var$makePolicyContainer,
    clonePolicyContainer: $67571b2f148a5c63$var$clonePolicyContainer,
    appendFetchMetadata: $67571b2f148a5c63$var$appendFetchMetadata,
    appendRequestOriginHeader: $67571b2f148a5c63$var$appendRequestOriginHeader,
    TAOCheck: $67571b2f148a5c63$var$TAOCheck,
    corsCheck: $67571b2f148a5c63$var$corsCheck,
    crossOriginResourcePolicyCheck: $67571b2f148a5c63$var$crossOriginResourcePolicyCheck,
    createOpaqueTimingInfo: $67571b2f148a5c63$var$createOpaqueTimingInfo,
    setRequestReferrerPolicyOnRedirect: $67571b2f148a5c63$var$setRequestReferrerPolicyOnRedirect,
    isValidHTTPToken: $67571b2f148a5c63$var$isValidHTTPToken,
    requestBadPort: $67571b2f148a5c63$var$requestBadPort,
    requestCurrentURL: $67571b2f148a5c63$var$requestCurrentURL,
    responseURL: $67571b2f148a5c63$var$responseURL,
    responseLocationURL: $67571b2f148a5c63$var$responseLocationURL,
    isBlobLike: $67571b2f148a5c63$require$isBlobLike,
    isURLPotentiallyTrustworthy: $67571b2f148a5c63$var$isURLPotentiallyTrustworthy,
    isValidReasonPhrase: $67571b2f148a5c63$var$isValidReasonPhrase,
    sameOrigin: $67571b2f148a5c63$var$sameOrigin,
    normalizeMethod: $67571b2f148a5c63$var$normalizeMethod,
    serializeJavascriptValueToJSONString: $67571b2f148a5c63$var$serializeJavascriptValueToJSONString,
    makeIterator: $67571b2f148a5c63$var$makeIterator,
    isValidHeaderName: $67571b2f148a5c63$var$isValidHeaderName,
    isValidHeaderValue: $67571b2f148a5c63$var$isValidHeaderValue,
    hasOwn: $67571b2f148a5c63$var$hasOwn,
    isErrorLike: $67571b2f148a5c63$var$isErrorLike,
    fullyReadBody: $67571b2f148a5c63$var$fullyReadBody,
    bytesMatch: $67571b2f148a5c63$var$bytesMatch,
    isReadableStreamLike: $67571b2f148a5c63$var$isReadableStreamLike,
    readableStreamClose: $67571b2f148a5c63$var$readableStreamClose,
    isomorphicEncode: $67571b2f148a5c63$var$isomorphicEncode,
    isomorphicDecode: $67571b2f148a5c63$var$isomorphicDecode,
    urlIsLocal: $67571b2f148a5c63$var$urlIsLocal,
    urlHasHttpsScheme: $67571b2f148a5c63$var$urlHasHttpsScheme,
    urlIsHttpHttpsScheme: $67571b2f148a5c63$var$urlIsHttpHttpsScheme,
    readAllBytes: $67571b2f148a5c63$var$readAllBytes,
    normalizeMethodRecord: $67571b2f148a5c63$var$normalizeMethodRecord,
    parseMetadata: $67571b2f148a5c63$var$parseMetadata
};


//# sourceMappingURL=util.1c38d6ed.js.map
