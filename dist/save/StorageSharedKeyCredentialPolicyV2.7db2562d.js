require("./constants.425d5fc4.js");
require("./utils.common.1056282c.js");
require("./SharedKeyComparator.3f1f3032.js");
var $aaoui$crypto = require("crypto");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.


var $daWVB = parcelRequire("daWVB");

var $aiu2u = parcelRequire("aiu2u");

var $iKnwC = parcelRequire("iKnwC");
const $db09423c561f6309$export$a4efc4c9a2c25b4 = "storageSharedKeyCredentialPolicy";
function $db09423c561f6309$export$629de83a9f9d3283(options) {
    function signRequest(request) {
        request.headers.set((0, $daWVB.HeaderConstants).X_MS_DATE, new Date().toUTCString());
        if (request.body && (typeof request.body === "string" || Buffer.isBuffer(request.body)) && request.body.length > 0) request.headers.set((0, $daWVB.HeaderConstants).CONTENT_LENGTH, Buffer.byteLength(request.body));
        const stringToSign = [
            request.method.toUpperCase(),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).CONTENT_LANGUAGE),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).CONTENT_ENCODING),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).CONTENT_LENGTH),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).CONTENT_MD5),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).CONTENT_TYPE),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).DATE),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).IF_MODIFIED_SINCE),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).IF_MATCH),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).IF_NONE_MATCH),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).IF_UNMODIFIED_SINCE),
            getHeaderValueToSign(request, (0, $daWVB.HeaderConstants).RANGE)
        ].join("\n") + "\n" + getCanonicalizedHeadersString(request) + getCanonicalizedResourceString(request);
        const signature = (0, $aaoui$crypto.createHmac)("sha256", options.accountKey).update(stringToSign, "utf8").digest("base64");
        request.headers.set((0, $daWVB.HeaderConstants).AUTHORIZATION, `SharedKey ${options.accountName}:${signature}`);
    // console.log(`[URL]:${request.url}`);
    // console.log(`[HEADERS]:${request.headers.toString()}`);
    // console.log(`[STRING TO SIGN]:${JSON.stringify(stringToSign)}`);
    // console.log(`[KEY]: ${request.headers.get(HeaderConstants.AUTHORIZATION)}`);
    }
    /**
     * Retrieve header value according to shared key sign rules.
     * @see https://docs.microsoft.com/en-us/rest/api/storageservices/authenticate-with-shared-key
     */ function getHeaderValueToSign(request, headerName) {
        const value = request.headers.get(headerName);
        if (!value) return "";
        // When using version 2015-02-21 or later, if Content-Length is zero, then
        // set the Content-Length part of the StringToSign to an empty string.
        // https://docs.microsoft.com/en-us/rest/api/storageservices/authenticate-with-shared-key
        if (headerName === (0, $daWVB.HeaderConstants).CONTENT_LENGTH && value === "0") return "";
        return value;
    }
    /**
     * To construct the CanonicalizedHeaders portion of the signature string, follow these steps:
     * 1. Retrieve all headers for the resource that begin with x-ms-, including the x-ms-date header.
     * 2. Convert each HTTP header name to lowercase.
     * 3. Sort the headers lexicographically by header name, in ascending order.
     *    Each header may appear only once in the string.
     * 4. Replace any linear whitespace in the header value with a single space.
     * 5. Trim any whitespace around the colon in the header.
     * 6. Finally, append a new-line character to each canonicalized header in the resulting list.
     *    Construct the CanonicalizedHeaders string by concatenating all headers in this list into a single string.
     *
     */ function getCanonicalizedHeadersString(request) {
        let headersArray = [];
        for (const [name, value] of request.headers)if (name.toLowerCase().startsWith((0, $daWVB.HeaderConstants).PREFIX_FOR_STORAGE)) headersArray.push({
            name: name,
            value: value
        });
        headersArray.sort((a, b)=>{
            return (0, $iKnwC.compareHeader)(a.name.toLowerCase(), b.name.toLowerCase());
        });
        // Remove duplicate headers
        headersArray = headersArray.filter((value, index, array)=>{
            if (index > 0 && value.name.toLowerCase() === array[index - 1].name.toLowerCase()) return false;
            return true;
        });
        let canonicalizedHeadersStringToSign = "";
        headersArray.forEach((header)=>{
            canonicalizedHeadersStringToSign += `${header.name.toLowerCase().trimRight()}:${header.value.trimLeft()}\n`;
        });
        return canonicalizedHeadersStringToSign;
    }
    function getCanonicalizedResourceString(request) {
        const path = (0, $aiu2u.getURLPath)(request.url) || "/";
        let canonicalizedResourceString = "";
        canonicalizedResourceString += `/${options.accountName}${path}`;
        const queries = (0, $aiu2u.getURLQueries)(request.url);
        const lowercaseQueries = {};
        if (queries) {
            const queryKeys = [];
            for(const key in queries)if (Object.prototype.hasOwnProperty.call(queries, key)) {
                const lowercaseKey = key.toLowerCase();
                lowercaseQueries[lowercaseKey] = queries[key];
                queryKeys.push(lowercaseKey);
            }
            queryKeys.sort();
            for (const key of queryKeys)canonicalizedResourceString += `\n${key}:${decodeURIComponent(lowercaseQueries[key])}`;
        }
        return canonicalizedResourceString;
    }
    return {
        name: $db09423c561f6309$export$a4efc4c9a2c25b4,
        async sendRequest (request, next) {
            signRequest(request);
            return next(request);
        }
    };
}


//# sourceMappingURL=StorageSharedKeyCredentialPolicyV2.7db2562d.js.map
