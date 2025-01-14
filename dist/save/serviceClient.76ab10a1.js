require("./esm.b9de7281.js");
require("./pipeline.444e4c80.js");
require("./utils.29a29b51.js");
require("./httpClientCache.f5d504c6.js");
require("./operationHelpers.49efe402.js");
require("./urlHelpers.2cc968fa.js");
require("./interfaceHelpers.5692f472.js");
require("./log.3b8fcc39.js");


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

var $6W8oz = parcelRequire("6W8oz");
var $663c58ced31e258f$exports = {};
$663c58ced31e258f$exports = new URL("pipeline.444e4c80.js", "file:" + __filename).toString();



var $EEl3o = parcelRequire("EEl3o");
var $91262ff2ea7e3598$exports = {};
$91262ff2ea7e3598$exports = new URL("httpClientCache.f5d504c6.js", "file:" + __filename).toString();



var $bdQPg = parcelRequire("bdQPg");
var $b7800bcd3608fe06$exports = {};
$b7800bcd3608fe06$exports = new URL("urlHelpers.2cc968fa.js", "file:" + __filename).toString();



var $kddm6 = parcelRequire("kddm6");
var $28001a68d9971d81$exports = {};
$28001a68d9971d81$exports = new URL("log.3b8fcc39.js", "file:" + __filename).toString();


/**
 * Initializes a new instance of the ServiceClient.
 */ class $c0c1d192d37d417a$var$ServiceClient {
    /**
     * The ServiceClient constructor
     * @param credential - The credentials used for authentication with the service.
     * @param options - The service client options that govern the behavior of the client.
     */ constructor(options = {}){
        var _a, _b;
        this._requestContentType = options.requestContentType;
        this._endpoint = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri;
        if (options.baseUri) $28001a68d9971d81$exports.logger.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
        this._allowInsecureConnection = options.allowInsecureConnection;
        this._httpClient = options.httpClient || (0, $91262ff2ea7e3598$exports.getCachedDefaultHttpClient)();
        this.pipeline = options.pipeline || $c0c1d192d37d417a$var$createDefaultPipeline(options);
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
        const url = (0, $b7800bcd3608fe06$exports.getRequestUrl)(endpoint, operationSpec, operationArguments, this);
        const request = (0, $6W8oz.createPipelineRequest)({
            url: url
        });
        request.method = operationSpec.httpMethod;
        const operationInfo = (0, $bdQPg.getOperationRequestInfo)(request);
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
        if (request.streamResponseStatusCodes === undefined) request.streamResponseStatusCodes = (0, $kddm6.getStreamingResponseStatusCodes)(operationSpec);
        try {
            const rawResponse = await this.sendRequest(request);
            const flatResponse = (0, $EEl3o.flattenResponse)(rawResponse, operationSpec.responses[rawResponse.status]);
            if (options === null || options === void 0 ? void 0 : options.onResponse) options.onResponse(rawResponse, flatResponse);
            return flatResponse;
        } catch (error) {
            if (typeof error === "object" && (error === null || error === void 0 ? void 0 : error.response)) {
                const rawResponse = error.response;
                const flatResponse = (0, $EEl3o.flattenResponse)(rawResponse, operationSpec.responses[error.statusCode] || operationSpec.responses["default"]);
                error.details = flatResponse;
                if (options === null || options === void 0 ? void 0 : options.onResponse) options.onResponse(rawResponse, flatResponse, error);
            }
            throw error;
        }
    }
}
module.exports.ServiceClient = $c0c1d192d37d417a$var$ServiceClient;
function $c0c1d192d37d417a$var$createDefaultPipeline(options) {
    const credentialScopes = $c0c1d192d37d417a$var$getCredentialScopes(options);
    const credentialOptions = options.credential && credentialScopes ? {
        credentialScopes: credentialScopes,
        credential: options.credential
    } : undefined;
    return (0, $663c58ced31e258f$exports.createClientPipeline)(Object.assign(Object.assign({}, options), {
        credentialOptions: credentialOptions
    }));
}
function $c0c1d192d37d417a$var$getCredentialScopes(options) {
    if (options.credentialScopes) return options.credentialScopes;
    if (options.endpoint) return `${options.endpoint}/.default`;
    if (options.baseUri) return `${options.baseUri}/.default`;
    if (options.credential && !options.credentialScopes) throw new Error(`When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy`);
    return undefined;
}


//# sourceMappingURL=serviceClient.76ab10a1.js.map
