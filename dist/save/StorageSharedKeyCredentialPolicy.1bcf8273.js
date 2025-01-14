require("./constants.425d5fc4.js");
require("./utils.common.1056282c.js");
require("./CredentialPolicy.af9b6715.js");
require("./SharedKeyComparator.3f1f3032.js");


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
var $ad5507738f04a039$exports = {};
$ad5507738f04a039$exports = new URL("constants.425d5fc4.js", "file:" + __filename).toString();


var $4a07833f7dee8214$exports = {};
$4a07833f7dee8214$exports = new URL("utils.common.1056282c.js", "file:" + __filename).toString();



var $1m4j5 = parcelRequire("1m4j5");
var $33639f7f7c81e636$exports = {};
$33639f7f7c81e636$exports = new URL("SharedKeyComparator.3f1f3032.js", "file:" + __filename).toString();


class $10e3263a7a76f8fc$export$d5c8a90658192f87 extends (0, $1m4j5.CredentialPolicy) {
    /**
     * Creates an instance of StorageSharedKeyCredentialPolicy.
     * @param nextPolicy -
     * @param options -
     * @param factory -
     */ constructor(nextPolicy, options, factory){
        super(nextPolicy, options);
        this.factory = factory;
    }
    /**
     * Signs request.
     *
     * @param request -
     */ signRequest(request) {
        request.headers.set((0, $ad5507738f04a039$exports.HeaderConstants).X_MS_DATE, new Date().toUTCString());
        if (request.body && (typeof request.body === "string" || request.body !== undefined) && request.body.length > 0) request.headers.set((0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_LENGTH, Buffer.byteLength(request.body));
        const stringToSign = [
            request.method.toUpperCase(),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_LANGUAGE),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_ENCODING),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_LENGTH),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_MD5),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_TYPE),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).DATE),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).IF_MODIFIED_SINCE),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).IF_MATCH),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).IF_NONE_MATCH),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).IF_UNMODIFIED_SINCE),
            this.getHeaderValueToSign(request, (0, $ad5507738f04a039$exports.HeaderConstants).RANGE)
        ].join("\n") + "\n" + this.getCanonicalizedHeadersString(request) + this.getCanonicalizedResourceString(request);
        const signature = this.factory.computeHMACSHA256(stringToSign);
        request.headers.set((0, $ad5507738f04a039$exports.HeaderConstants).AUTHORIZATION, `SharedKey ${this.factory.accountName}:${signature}`);
        // console.log(`[URL]:${request.url}`);
        // console.log(`[HEADERS]:${request.headers.toString()}`);
        // console.log(`[STRING TO SIGN]:${JSON.stringify(stringToSign)}`);
        // console.log(`[KEY]: ${request.headers.get(HeaderConstants.AUTHORIZATION)}`);
        return request;
    }
    /**
     * Retrieve header value according to shared key sign rules.
     * @see https://docs.microsoft.com/en-us/rest/api/storageservices/authenticate-with-shared-key
     *
     * @param request -
     * @param headerName -
     */ getHeaderValueToSign(request, headerName) {
        const value = request.headers.get(headerName);
        if (!value) return "";
        // When using version 2015-02-21 or later, if Content-Length is zero, then
        // set the Content-Length part of the StringToSign to an empty string.
        // https://docs.microsoft.com/en-us/rest/api/storageservices/authenticate-with-shared-key
        if (headerName === (0, $ad5507738f04a039$exports.HeaderConstants).CONTENT_LENGTH && value === "0") return "";
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
     * @param request -
     */ getCanonicalizedHeadersString(request) {
        let headersArray = request.headers.headersArray().filter((value)=>{
            return value.name.toLowerCase().startsWith((0, $ad5507738f04a039$exports.HeaderConstants).PREFIX_FOR_STORAGE);
        });
        headersArray.sort((a, b)=>{
            return (0, $33639f7f7c81e636$exports.compareHeader)(a.name.toLowerCase(), b.name.toLowerCase());
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
    /**
     * Retrieves the webResource canonicalized resource string.
     *
     * @param request -
     */ getCanonicalizedResourceString(request) {
        const path = (0, $4a07833f7dee8214$exports.getURLPath)(request.url) || "/";
        let canonicalizedResourceString = "";
        canonicalizedResourceString += `/${this.factory.accountName}${path}`;
        const queries = (0, $4a07833f7dee8214$exports.getURLQueries)(request.url);
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
}


//# sourceMappingURL=StorageSharedKeyCredentialPolicy.1bcf8273.js.map
