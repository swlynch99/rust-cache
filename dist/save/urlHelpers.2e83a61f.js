require("./operationHelpers.90300366.js");
require("./interfaceHelpers.0958a5a8.js");


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
module.exports.appendQueryParams = module.exports.getRequestUrl = void 0;

var $dxQDb = parcelRequire("dxQDb");

var $8P4HU = parcelRequire("8P4HU");
const $6cc7613b86cc5f35$var$CollectionFormatToDelimiterMap = {
    CSV: ",",
    SSV: " ",
    Multi: "Multi",
    TSV: "\t",
    Pipes: "|"
};
function $6cc7613b86cc5f35$var$getRequestUrl(baseUri, operationSpec, operationArguments, fallbackObject) {
    const urlReplacements = $6cc7613b86cc5f35$var$calculateUrlReplacements(operationSpec, operationArguments, fallbackObject);
    let isAbsolutePath = false;
    let requestUrl = $6cc7613b86cc5f35$var$replaceAll(baseUri, urlReplacements);
    if (operationSpec.path) {
        let path = $6cc7613b86cc5f35$var$replaceAll(operationSpec.path, urlReplacements);
        // QUIRK: sometimes we get a path component like /{nextLink}
        // which may be a fully formed URL with a leading /. In that case, we should
        // remove the leading /
        if (operationSpec.path === "/{nextLink}" && path.startsWith("/")) path = path.substring(1);
        // QUIRK: sometimes we get a path component like {nextLink}
        // which may be a fully formed URL. In that case, we should
        // ignore the baseUri.
        if ($6cc7613b86cc5f35$var$isAbsoluteUrl(path)) {
            requestUrl = path;
            isAbsolutePath = true;
        } else requestUrl = $6cc7613b86cc5f35$var$appendPath(requestUrl, path);
    }
    const { queryParams: queryParams, sequenceParams: sequenceParams } = $6cc7613b86cc5f35$var$calculateQueryParameters(operationSpec, operationArguments, fallbackObject);
    /**
     * Notice that this call sets the `noOverwrite` parameter to true if the `requestUrl`
     * is an absolute path. This ensures that existing query parameter values in `requestUrl`
     * do not get overwritten. On the other hand when `requestUrl` is not absolute path, it
     * is still being built so there is nothing to overwrite.
     */ requestUrl = $6cc7613b86cc5f35$var$appendQueryParams(requestUrl, queryParams, sequenceParams, isAbsolutePath);
    return requestUrl;
}
module.exports.getRequestUrl = $6cc7613b86cc5f35$var$getRequestUrl;
function $6cc7613b86cc5f35$var$replaceAll(input, replacements) {
    let result = input;
    for (const [searchValue, replaceValue] of replacements)result = result.split(searchValue).join(replaceValue);
    return result;
}
function $6cc7613b86cc5f35$var$calculateUrlReplacements(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    if ((_a = operationSpec.urlParameters) === null || _a === void 0 ? void 0 : _a.length) for (const urlParameter of operationSpec.urlParameters){
        let urlParameterValue = (0, $dxQDb.getOperationArgumentValueFromParameter)(operationArguments, urlParameter, fallbackObject);
        const parameterPathString = (0, $8P4HU.getPathStringFromParameter)(urlParameter);
        urlParameterValue = operationSpec.serializer.serialize(urlParameter.mapper, urlParameterValue, parameterPathString);
        if (!urlParameter.skipEncoding) urlParameterValue = encodeURIComponent(urlParameterValue);
        result.set(`{${urlParameter.mapper.serializedName || parameterPathString}}`, urlParameterValue);
    }
    return result;
}
function $6cc7613b86cc5f35$var$isAbsoluteUrl(url) {
    return url.includes("://");
}
function $6cc7613b86cc5f35$var$appendPath(url, pathToAppend) {
    if (!pathToAppend) return url;
    const parsedUrl = new URL(url);
    let newPath = parsedUrl.pathname;
    if (!newPath.endsWith("/")) newPath = `${newPath}/`;
    if (pathToAppend.startsWith("/")) pathToAppend = pathToAppend.substring(1);
    const searchStart = pathToAppend.indexOf("?");
    if (searchStart !== -1) {
        const path = pathToAppend.substring(0, searchStart);
        const search = pathToAppend.substring(searchStart + 1);
        newPath = newPath + path;
        if (search) parsedUrl.search = parsedUrl.search ? `${parsedUrl.search}&${search}` : search;
    } else newPath = newPath + pathToAppend;
    parsedUrl.pathname = newPath;
    return parsedUrl.toString();
}
function $6cc7613b86cc5f35$var$calculateQueryParameters(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    const sequenceParams = new Set();
    if ((_a = operationSpec.queryParameters) === null || _a === void 0 ? void 0 : _a.length) for (const queryParameter of operationSpec.queryParameters){
        if (queryParameter.mapper.type.name === "Sequence" && queryParameter.mapper.serializedName) sequenceParams.add(queryParameter.mapper.serializedName);
        let queryParameterValue = (0, $dxQDb.getOperationArgumentValueFromParameter)(operationArguments, queryParameter, fallbackObject);
        if (queryParameterValue !== undefined && queryParameterValue !== null || queryParameter.mapper.required) {
            queryParameterValue = operationSpec.serializer.serialize(queryParameter.mapper, queryParameterValue, (0, $8P4HU.getPathStringFromParameter)(queryParameter));
            const delimiter = queryParameter.collectionFormat ? $6cc7613b86cc5f35$var$CollectionFormatToDelimiterMap[queryParameter.collectionFormat] : "";
            if (Array.isArray(queryParameterValue)) // replace null and undefined
            queryParameterValue = queryParameterValue.map((item)=>{
                if (item === null || item === undefined) return "";
                return item;
            });
            if (queryParameter.collectionFormat === "Multi" && queryParameterValue.length === 0) continue;
            else if (Array.isArray(queryParameterValue) && (queryParameter.collectionFormat === "SSV" || queryParameter.collectionFormat === "TSV")) queryParameterValue = queryParameterValue.join(delimiter);
            if (!queryParameter.skipEncoding) {
                if (Array.isArray(queryParameterValue)) queryParameterValue = queryParameterValue.map((item)=>{
                    return encodeURIComponent(item);
                });
                else queryParameterValue = encodeURIComponent(queryParameterValue);
            }
            // Join pipes and CSV *after* encoding, or the server will be upset.
            if (Array.isArray(queryParameterValue) && (queryParameter.collectionFormat === "CSV" || queryParameter.collectionFormat === "Pipes")) queryParameterValue = queryParameterValue.join(delimiter);
            result.set(queryParameter.mapper.serializedName || (0, $8P4HU.getPathStringFromParameter)(queryParameter), queryParameterValue);
        }
    }
    return {
        queryParams: result,
        sequenceParams: sequenceParams
    };
}
function $6cc7613b86cc5f35$var$simpleParseQueryParams(queryString) {
    const result = new Map();
    if (!queryString || queryString[0] !== "?") return result;
    // remove the leading ?
    queryString = queryString.slice(1);
    const pairs = queryString.split("&");
    for (const pair of pairs){
        const [name, value] = pair.split("=", 2);
        const existingValue = result.get(name);
        if (existingValue) {
            if (Array.isArray(existingValue)) existingValue.push(value);
            else result.set(name, [
                existingValue,
                value
            ]);
        } else result.set(name, value);
    }
    return result;
}
/** @internal */ function $6cc7613b86cc5f35$var$appendQueryParams(url, queryParams, sequenceParams, noOverwrite = false) {
    if (queryParams.size === 0) return url;
    const parsedUrl = new URL(url);
    // QUIRK: parsedUrl.searchParams will have their name/value pairs decoded, which
    // can change their meaning to the server, such as in the case of a SAS signature.
    // To avoid accidentally un-encoding a query param, we parse the key/values ourselves
    const combinedParams = $6cc7613b86cc5f35$var$simpleParseQueryParams(parsedUrl.search);
    for (const [name, value] of queryParams){
        const existingValue = combinedParams.get(name);
        if (Array.isArray(existingValue)) {
            if (Array.isArray(value)) {
                existingValue.push(...value);
                const valueSet = new Set(existingValue);
                combinedParams.set(name, Array.from(valueSet));
            } else existingValue.push(value);
        } else if (existingValue) {
            if (Array.isArray(value)) value.unshift(existingValue);
            else if (sequenceParams.has(name)) combinedParams.set(name, [
                existingValue,
                value
            ]);
            if (!noOverwrite) combinedParams.set(name, value);
        } else combinedParams.set(name, value);
    }
    const searchPieces = [];
    for (const [name, value] of combinedParams){
        if (typeof value === "string") searchPieces.push(`${name}=${value}`);
        else if (Array.isArray(value)) // QUIRK: If we get an array of values, include multiple key/value pairs
        for (const subValue of value)searchPieces.push(`${name}=${subValue}`);
        else searchPieces.push(`${name}=${value}`);
    }
    // QUIRK: we have to set search manually as searchParams will encode comma when it shouldn't.
    parsedUrl.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
    return parsedUrl.toString();
}
module.exports.appendQueryParams = $6cc7613b86cc5f35$var$appendQueryParams;


