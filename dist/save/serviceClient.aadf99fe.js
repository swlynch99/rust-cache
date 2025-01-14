require("./esm.346084e9.js");
require("./pipeline.52edc7ba.js");
require("./utils.7d46fd23.js");
require("./httpClientCache.0a111466.js");
require("./operationHelpers.90300366.js");
require("./urlHelpers.2e83a61f.js");
require("./interfaceHelpers.0958a5a8.js");
require("./log.409148a7.js");


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
module.exports.ServiceClient = void 0;

var $huk7e = parcelRequire("huk7e");
var $b4507dbcedbb37da$exports = {};
$b4507dbcedbb37da$exports = new URL("pipeline.52edc7ba.js", "file:" + __filename).toString();



var $5kWOl = parcelRequire("5kWOl");
var $16d12e795f97b67d$exports = {};
$16d12e795f97b67d$exports = new URL("httpClientCache.0a111466.js", "file:" + __filename).toString();



var $dxQDb = parcelRequire("dxQDb");
var $75d06e437722bae7$exports = {};
$75d06e437722bae7$exports = new URL("urlHelpers.2e83a61f.js", "file:" + __filename).toString();



var $8P4HU = parcelRequire("8P4HU");
var $10fdc6e865a7f06f$exports = {};
$10fdc6e865a7f06f$exports = new URL("log.409148a7.js", "file:" + __filename).toString();


/**
 * Initializes a new instance of the ServiceClient.
 */ class $a110d41c4e32f81f$var$ServiceClient {
    /**
     * The ServiceClient constructor
     * @param credential - The credentials used for authentication with the service.
     * @param options - The service client options that govern the behavior of the client.
     */ constructor(options = {}){
        var _a, _b;
        this._requestContentType = options.requestContentType;
        this._endpoint = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri;
        if (options.baseUri) $10fdc6e865a7f06f$exports.logger.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
        this._allowInsecureConnection = options.allowInsecureConnection;
        this._httpClient = options.httpClient || (0, $16d12e795f97b67d$exports.getCachedDefaultHttpClient)();
        this.pipeline = options.pipeline || $a110d41c4e32f81f$var$createDefaultPipeline(options);
        if ((_b = options.additionalPolicies) === null || _b === void 0 ? void 0 : _b.length) for (const { policy: policy, position: position } of options.additionalPolicies){
            // Sign happens after Retry and is commonly needed to occur
            // before policies that intercept post-retry.
            const afterPhase = position === "perRetry" ? "Sign" : undefined;
            this.pipeline.addPolicy(policy, {
                afterPhase: afterPhase
            });
        }
    }
    /**
     * Send the provided httpRequest.
     */ async sendRequest(request) {
        return this.pipeline.sendRequest(this._httpClient, request);
    }
    /**
     * Send an HTTP request that is populated using the provided OperationSpec.
     * @typeParam T - The typed result of the request, based on the OperationSpec.
     * @param operationArguments - The arguments that the HTTP request's templated values will be populated from.
     * @param operationSpec - The OperationSpec to use to populate the httpRequest.
     */ async sendOperationRequest(operationArguments, operationSpec) {
        const endpoint = operationSpec.baseUrl || this._endpoint;
        if (!endpoint) throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
        // Templatized URLs sometimes reference properties on the ServiceClient child class,
        // so we have to pass `this` below in order to search these properties if they're
        // not part of OperationArguments
        const url = (0, $75d06e437722bae7$exports.getRequestUrl)(endpoint, operationSpec, operationArguments, this);
        const request = (0, $huk7e.createPipelineRequest)({
            url: url
        });
        request.method = operationSpec.httpMethod;
        const operationInfo = (0, $dxQDb.getOperationRequestInfo)(request);
        operationInfo.operationSpec = operationSpec;
        operationInfo.operationArguments = operationArguments;
        const contentType = operationSpec.contentType || this._requestContentType;
        if (contentType && operationSpec.requestBody) request.headers.set("Content-Type", contentType);
        const options = operationArguments.options;
        if (options) {
            const requestOptions = options.requestOptions;
            if (requestOptions) {
                if (requestOptions.timeout) request.timeout = requestOptions.timeout;
                if (requestOptions.onUploadProgress) request.onUploadProgress = requestOptions.onUploadProgress;
                if (requestOptions.onDownloadProgress) request.onDownloadProgress = requestOptions.onDownloadProgress;
                if (requestOptions.shouldDeserialize !== undefined) operationInfo.shouldDeserialize = requestOptions.shouldDeserialize;
                if (requestOptions.allowInsecureConnection) request.allowInsecureConnection = true;
            }
            if (options.abortSignal) request.abortSignal = options.abortSignal;
            if (options.tracingOptions) request.tracingOptions = options.tracingOptions;
        }
        if (this._allowInsecureConnection) request.allowInsecureConnection = true;
        if (request.streamResponseStatusCodes === undefined) request.streamResponseStatusCodes = (0, $8P4HU.getStreamingResponseStatusCodes)(operationSpec);
        try {
            const rawResponse = await this.sendRequest(request);
            const flatResponse = (0, $5kWOl.flattenResponse)(rawResponse, operationSpec.responses[rawResponse.status]);
            if (options === null || options === void 0 ? void 0 : options.onResponse) options.onResponse(rawResponse, flatResponse);
            return flatResponse;
        } catch (error) {
            if (typeof error === "object" && (error === null || error === void 0 ? void 0 : error.response)) {
                const rawResponse = error.response;
                const flatResponse = (0, $5kWOl.flattenResponse)(rawResponse, operationSpec.responses[error.statusCode] || operationSpec.responses["default"]);
                error.details = flatResponse;
                if (options === null || options === void 0 ? void 0 : options.onResponse) options.onResponse(rawResponse, flatResponse, error);
            }
            throw error;
        }
    }
}
module.exports.ServiceClient = $a110d41c4e32f81f$var$ServiceClient;
function $a110d41c4e32f81f$var$createDefaultPipeline(options) {
    const credentialScopes = $a110d41c4e32f81f$var$getCredentialScopes(options);
    const credentialOptions = options.credential && credentialScopes ? {
        credentialScopes: credentialScopes,
        credential: options.credential
    } : undefined;
    return (0, $b4507dbcedbb37da$exports.createClientPipeline)(Object.assign(Object.assign({}, options), {
        credentialOptions: credentialOptions
    }));
}
function $a110d41c4e32f81f$var$getCredentialScopes(options) {
    if (options.credentialScopes) return options.credentialScopes;
    if (options.endpoint) return `${options.endpoint}/.default`;
    if (options.baseUri) return `${options.baseUri}/.default`;
    if (options.credential && !options.credentialScopes) throw new Error(`When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy`);
    return undefined;
}


