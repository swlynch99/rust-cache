require("./esm.b9de7281.js");


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
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.HttpHeaders = module.exports.toHttpHeadersLike = module.exports.toWebResourceLike = module.exports.toPipelineRequest = void 0;

var $6W8oz = parcelRequire("6W8oz");
// We use a custom symbol to cache a reference to the original request without
// exposing it on the public interface.
const $ad984a5f42f0e05d$var$originalRequestSymbol = Symbol("Original PipelineRequest");
// Symbol.for() will return the same symbol if it's already been created
// This particular one is used in core-client to handle the case of when a request is
// cloned but we need to retrieve the OperationSpec and OperationArguments from the
// original request.
const $ad984a5f42f0e05d$var$originalClientRequestSymbol = Symbol.for("@azure/core-client original request");
function $ad984a5f42f0e05d$var$toPipelineRequest(webResource, options = {}) {
    const compatWebResource = webResource;
    const request = compatWebResource[$ad984a5f42f0e05d$var$originalRequestSymbol];
    const headers = (0, $6W8oz.createHttpHeaders)(webResource.headers.toJson({
        preserveCase: true
    }));
    if (request) {
        request.headers = headers;
        return request;
    } else {
        const newRequest = (0, $6W8oz.createPipelineRequest)({
            url: webResource.url,
            method: webResource.method,
            headers: headers,
            withCredentials: webResource.withCredentials,
            timeout: webResource.timeout,
            requestId: webResource.requestId,
            abortSignal: webResource.abortSignal,
            body: webResource.body,
            formData: webResource.formData,
            disableKeepAlive: !!webResource.keepAlive,
            onDownloadProgress: webResource.onDownloadProgress,
            onUploadProgress: webResource.onUploadProgress,
            proxySettings: webResource.proxySettings,
            streamResponseStatusCodes: webResource.streamResponseStatusCodes
        });
        if (options.originalRequest) newRequest[$ad984a5f42f0e05d$var$originalClientRequestSymbol] = options.originalRequest;
        return newRequest;
    }
}
module.exports.toPipelineRequest = $ad984a5f42f0e05d$var$toPipelineRequest;
function $ad984a5f42f0e05d$var$toWebResourceLike(request, options) {
    var _a;
    const originalRequest = (_a = options === null || options === void 0 ? void 0 : options.originalRequest) !== null && _a !== void 0 ? _a : request;
    const webResource = {
        url: request.url,
        method: request.method,
        headers: $ad984a5f42f0e05d$var$toHttpHeadersLike(request.headers),
        withCredentials: request.withCredentials,
        timeout: request.timeout,
        requestId: request.headers.get("x-ms-client-request-id") || request.requestId,
        abortSignal: request.abortSignal,
        body: request.body,
        formData: request.formData,
        keepAlive: !!request.disableKeepAlive,
        onDownloadProgress: request.onDownloadProgress,
        onUploadProgress: request.onUploadProgress,
        proxySettings: request.proxySettings,
        streamResponseStatusCodes: request.streamResponseStatusCodes,
        clone () {
            throw new Error("Cannot clone a non-proxied WebResourceLike");
        },
        prepare () {
            throw new Error("WebResourceLike.prepare() is not supported by @azure/core-http-compat");
        },
        validateRequestProperties () {
        /** do nothing */ }
    };
    if (options === null || options === void 0 ? void 0 : options.createProxy) return new Proxy(webResource, {
        get (target, prop, receiver) {
            if (prop === $ad984a5f42f0e05d$var$originalRequestSymbol) return request;
            else if (prop === "clone") return ()=>{
                return $ad984a5f42f0e05d$var$toWebResourceLike($ad984a5f42f0e05d$var$toPipelineRequest(webResource, {
                    originalRequest: originalRequest
                }), {
                    createProxy: true,
                    originalRequest: originalRequest
                });
            };
            return Reflect.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (prop === "keepAlive") request.disableKeepAlive = !value;
            const passThroughProps = [
                "url",
                "method",
                "withCredentials",
                "timeout",
                "requestId",
                "abortSignal",
                "body",
                "formData",
                "onDownloadProgress",
                "onUploadProgress",
                "proxySettings",
                "streamResponseStatusCodes"
            ];
            if (typeof prop === "string" && passThroughProps.includes(prop)) request[prop] = value;
            return Reflect.set(target, prop, value, receiver);
        }
    });
    else return webResource;
}
module.exports.toWebResourceLike = $ad984a5f42f0e05d$var$toWebResourceLike;
/**
 * Converts HttpHeaders from core-rest-pipeline to look like
 * HttpHeaders from core-http.
 * @param headers - HttpHeaders from core-rest-pipeline
 * @returns HttpHeaders as they looked in core-http
 */ function $ad984a5f42f0e05d$var$toHttpHeadersLike(headers) {
    return new $ad984a5f42f0e05d$var$HttpHeaders(headers.toJSON({
        preserveCase: true
    }));
}
module.exports.toHttpHeadersLike = $ad984a5f42f0e05d$var$toHttpHeadersLike;
/**
 * A collection of HttpHeaders that can be sent with a HTTP request.
 */ function $ad984a5f42f0e05d$var$getHeaderKey(headerName) {
    return headerName.toLowerCase();
}
/**
 * A collection of HTTP header key/value pairs.
 */ class $ad984a5f42f0e05d$var$HttpHeaders {
    constructor(rawHeaders){
        this._headersMap = {};
        if (rawHeaders) for(const headerName in rawHeaders)this.set(headerName, rawHeaders[headerName]);
    }
    /**
     * Set a header in this collection with the provided name and value. The name is
     * case-insensitive.
     * @param headerName - The name of the header to set. This value is case-insensitive.
     * @param headerValue - The value of the header to set.
     */ set(headerName, headerValue) {
        this._headersMap[$ad984a5f42f0e05d$var$getHeaderKey(headerName)] = {
            name: headerName,
            value: headerValue.toString()
        };
    }
    /**
     * Get the header value for the provided header name, or undefined if no header exists in this
     * collection with the provided name.
     * @param headerName - The name of the header.
     */ get(headerName) {
        const header = this._headersMap[$ad984a5f42f0e05d$var$getHeaderKey(headerName)];
        return !header ? undefined : header.value;
    }
    /**
     * Get whether or not this header collection contains a header entry for the provided header name.
     */ contains(headerName) {
        return !!this._headersMap[$ad984a5f42f0e05d$var$getHeaderKey(headerName)];
    }
    /**
     * Remove the header with the provided headerName. Return whether or not the header existed and
     * was removed.
     * @param headerName - The name of the header to remove.
     */ remove(headerName) {
        const result = this.contains(headerName);
        delete this._headersMap[$ad984a5f42f0e05d$var$getHeaderKey(headerName)];
        return result;
    }
    /**
     * Get the headers that are contained this collection as an object.
     */ rawHeaders() {
        return this.toJson({
            preserveCase: true
        });
    }
    /**
     * Get the headers that are contained in this collection as an array.
     */ headersArray() {
        const headers = [];
        for(const headerKey in this._headersMap)headers.push(this._headersMap[headerKey]);
        return headers;
    }
    /**
     * Get the header names that are contained in this collection.
     */ headerNames() {
        const headerNames = [];
        const headers = this.headersArray();
        for(let i = 0; i < headers.length; ++i)headerNames.push(headers[i].name);
        return headerNames;
    }
    /**
     * Get the header values that are contained in this collection.
     */ headerValues() {
        const headerValues = [];
        const headers = this.headersArray();
        for(let i = 0; i < headers.length; ++i)headerValues.push(headers[i].value);
        return headerValues;
    }
    /**
     * Get the JSON object representation of this HTTP header collection.
     */ toJson(options = {}) {
        const result = {};
        if (options.preserveCase) for(const headerKey in this._headersMap){
            const header = this._headersMap[headerKey];
            result[header.name] = header.value;
        }
        else for(const headerKey in this._headersMap){
            const header = this._headersMap[headerKey];
            result[$ad984a5f42f0e05d$var$getHeaderKey(header.name)] = header.value;
        }
        return result;
    }
    /**
     * Get the string representation of this HTTP header collection.
     */ toString() {
        return JSON.stringify(this.toJson({
            preserveCase: true
        }));
    }
    /**
     * Create a deep clone/copy of this HttpHeaders collection.
     */ clone() {
        const resultPreservingCasing = {};
        for(const headerKey in this._headersMap){
            const header = this._headersMap[headerKey];
            resultPreservingCasing[header.name] = header.value;
        }
        return new $ad984a5f42f0e05d$var$HttpHeaders(resultPreservingCasing);
    }
}
module.exports.HttpHeaders = $ad984a5f42f0e05d$var$HttpHeaders;


//# sourceMappingURL=util.22b87ff3.js.map
