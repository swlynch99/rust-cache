require("./operation.909a11a3.js");
require("./logger.d8789bc8.js");


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
module.exports.pollHttpOperation = module.exports.isOperationError = module.exports.getResourceLocation = module.exports.getOperationStatus = module.exports.getOperationLocation = module.exports.initHttpOperation = module.exports.getStatusFromInitialResponse = module.exports.getErrorFromResponse = module.exports.parseRetryAfter = module.exports.inferLroMode = void 0;
var $e8323aa2719b8401$exports = {};
$e8323aa2719b8401$exports = new URL("operation.909a11a3.js", "file:" + __filename).toString();



var $eev1l = parcelRequire("eev1l");
function $ef01c2a8c9ef01f2$var$getOperationLocationPollingUrl(inputs) {
    const { azureAsyncOperation: azureAsyncOperation, operationLocation: operationLocation } = inputs;
    return operationLocation !== null && operationLocation !== void 0 ? operationLocation : azureAsyncOperation;
}
function $ef01c2a8c9ef01f2$var$getLocationHeader(rawResponse) {
    return rawResponse.headers["location"];
}
function $ef01c2a8c9ef01f2$var$getOperationLocationHeader(rawResponse) {
    return rawResponse.headers["operation-location"];
}
function $ef01c2a8c9ef01f2$var$getAzureAsyncOperationHeader(rawResponse) {
    return rawResponse.headers["azure-asyncoperation"];
}
function $ef01c2a8c9ef01f2$var$findResourceLocation(inputs) {
    var _a;
    const { location: location, requestMethod: requestMethod, requestPath: requestPath, resourceLocationConfig: resourceLocationConfig } = inputs;
    switch(requestMethod){
        case "PUT":
            return requestPath;
        case "DELETE":
            return undefined;
        case "PATCH":
            return (_a = getDefault()) !== null && _a !== void 0 ? _a : requestPath;
        default:
            return getDefault();
    }
    function getDefault() {
        switch(resourceLocationConfig){
            case "azure-async-operation":
                return undefined;
            case "original-uri":
                return requestPath;
            case "location":
            default:
                return location;
        }
    }
}
function $ef01c2a8c9ef01f2$var$inferLroMode(inputs) {
    const { rawResponse: rawResponse, requestMethod: requestMethod, requestPath: requestPath, resourceLocationConfig: resourceLocationConfig } = inputs;
    const operationLocation = $ef01c2a8c9ef01f2$var$getOperationLocationHeader(rawResponse);
    const azureAsyncOperation = $ef01c2a8c9ef01f2$var$getAzureAsyncOperationHeader(rawResponse);
    const pollingUrl = $ef01c2a8c9ef01f2$var$getOperationLocationPollingUrl({
        operationLocation: operationLocation,
        azureAsyncOperation: azureAsyncOperation
    });
    const location = $ef01c2a8c9ef01f2$var$getLocationHeader(rawResponse);
    const normalizedRequestMethod = requestMethod === null || requestMethod === void 0 ? void 0 : requestMethod.toLocaleUpperCase();
    if (pollingUrl !== undefined) return {
        mode: "OperationLocation",
        operationLocation: pollingUrl,
        resourceLocation: $ef01c2a8c9ef01f2$var$findResourceLocation({
            requestMethod: normalizedRequestMethod,
            location: location,
            requestPath: requestPath,
            resourceLocationConfig: resourceLocationConfig
        })
    };
    else if (location !== undefined) return {
        mode: "ResourceLocation",
        operationLocation: location
    };
    else if (normalizedRequestMethod === "PUT" && requestPath) return {
        mode: "Body",
        operationLocation: requestPath
    };
    else return undefined;
}
module.exports.inferLroMode = $ef01c2a8c9ef01f2$var$inferLroMode;
function $ef01c2a8c9ef01f2$var$transformStatus(inputs) {
    const { status: status, statusCode: statusCode } = inputs;
    if (typeof status !== "string" && status !== undefined) throw new Error(`Polling was unsuccessful. Expected status to have a string value or no value but it has instead: ${status}. This doesn't necessarily indicate the operation has failed. Check your Azure subscription or resource status for more information.`);
    switch(status === null || status === void 0 ? void 0 : status.toLocaleLowerCase()){
        case undefined:
            return $ef01c2a8c9ef01f2$var$toOperationStatus(statusCode);
        case "succeeded":
            return "succeeded";
        case "failed":
            return "failed";
        case "running":
        case "accepted":
        case "started":
        case "canceling":
        case "cancelling":
            return "running";
        case "canceled":
        case "cancelled":
            return "canceled";
        default:
            $eev1l.logger.verbose(`LRO: unrecognized operation status: ${status}`);
            return status;
    }
}
function $ef01c2a8c9ef01f2$var$getStatus(rawResponse) {
    var _a;
    const { status: status } = (_a = rawResponse.body) !== null && _a !== void 0 ? _a : {};
    return $ef01c2a8c9ef01f2$var$transformStatus({
        status: status,
        statusCode: rawResponse.statusCode
    });
}
function $ef01c2a8c9ef01f2$var$getProvisioningState(rawResponse) {
    var _a, _b;
    const { properties: properties, provisioningState: provisioningState } = (_a = rawResponse.body) !== null && _a !== void 0 ? _a : {};
    const status = (_b = properties === null || properties === void 0 ? void 0 : properties.provisioningState) !== null && _b !== void 0 ? _b : provisioningState;
    return $ef01c2a8c9ef01f2$var$transformStatus({
        status: status,
        statusCode: rawResponse.statusCode
    });
}
function $ef01c2a8c9ef01f2$var$toOperationStatus(statusCode) {
    if (statusCode === 202) return "running";
    else if (statusCode < 300) return "succeeded";
    else return "failed";
}
function $ef01c2a8c9ef01f2$var$parseRetryAfter({ rawResponse: rawResponse }) {
    const retryAfter = rawResponse.headers["retry-after"];
    if (retryAfter !== undefined) {
        // Retry-After header value is either in HTTP date format, or in seconds
        const retryAfterInSeconds = parseInt(retryAfter);
        return isNaN(retryAfterInSeconds) ? $ef01c2a8c9ef01f2$var$calculatePollingIntervalFromDate(new Date(retryAfter)) : retryAfterInSeconds * 1000;
    }
    return undefined;
}
module.exports.parseRetryAfter = $ef01c2a8c9ef01f2$var$parseRetryAfter;
function $ef01c2a8c9ef01f2$var$getErrorFromResponse(response) {
    const error = $ef01c2a8c9ef01f2$var$accessBodyProperty(response, "error");
    if (!error) {
        $eev1l.logger.warning(`The long-running operation failed but there is no error property in the response's body`);
        return;
    }
    if (!error.code || !error.message) {
        $eev1l.logger.warning(`The long-running operation failed but the error property in the response's body doesn't contain code or message`);
        return;
    }
    return error;
}
module.exports.getErrorFromResponse = $ef01c2a8c9ef01f2$var$getErrorFromResponse;
function $ef01c2a8c9ef01f2$var$calculatePollingIntervalFromDate(retryAfterDate) {
    const timeNow = Math.floor(new Date().getTime());
    const retryAfterTime = retryAfterDate.getTime();
    if (timeNow < retryAfterTime) return retryAfterTime - timeNow;
    return undefined;
}
function $ef01c2a8c9ef01f2$var$getStatusFromInitialResponse(inputs) {
    const { response: response, state: state, operationLocation: operationLocation } = inputs;
    function helper() {
        var _a;
        const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
        switch(mode){
            case undefined:
                return $ef01c2a8c9ef01f2$var$toOperationStatus(response.rawResponse.statusCode);
            case "Body":
                return $ef01c2a8c9ef01f2$var$getOperationStatus(response, state);
            default:
                return "running";
        }
    }
    const status = helper();
    return status === "running" && operationLocation === undefined ? "succeeded" : status;
}
module.exports.getStatusFromInitialResponse = $ef01c2a8c9ef01f2$var$getStatusFromInitialResponse;
/**
 * Initiates the long-running operation.
 */ async function $ef01c2a8c9ef01f2$var$initHttpOperation(inputs) {
    const { stateProxy: stateProxy, resourceLocationConfig: resourceLocationConfig, processResult: processResult, lro: lro, setErrorAsResult: setErrorAsResult } = inputs;
    return (0, $e8323aa2719b8401$exports.initOperation)({
        init: async ()=>{
            const response = await lro.sendInitialRequest();
            const config = $ef01c2a8c9ef01f2$var$inferLroMode({
                rawResponse: response.rawResponse,
                requestPath: lro.requestPath,
                requestMethod: lro.requestMethod,
                resourceLocationConfig: resourceLocationConfig
            });
            return Object.assign({
                response: response,
                operationLocation: config === null || config === void 0 ? void 0 : config.operationLocation,
                resourceLocation: config === null || config === void 0 ? void 0 : config.resourceLocation
            }, (config === null || config === void 0 ? void 0 : config.mode) ? {
                metadata: {
                    mode: config.mode
                }
            } : {});
        },
        stateProxy: stateProxy,
        processResult: processResult ? ({ flatResponse: flatResponse }, state)=>processResult(flatResponse, state) : ({ flatResponse: flatResponse })=>flatResponse,
        getOperationStatus: $ef01c2a8c9ef01f2$var$getStatusFromInitialResponse,
        setErrorAsResult: setErrorAsResult
    });
}
module.exports.initHttpOperation = $ef01c2a8c9ef01f2$var$initHttpOperation;
function $ef01c2a8c9ef01f2$var$getOperationLocation({ rawResponse: rawResponse }, state) {
    var _a;
    const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
    switch(mode){
        case "OperationLocation":
            return $ef01c2a8c9ef01f2$var$getOperationLocationPollingUrl({
                operationLocation: $ef01c2a8c9ef01f2$var$getOperationLocationHeader(rawResponse),
                azureAsyncOperation: $ef01c2a8c9ef01f2$var$getAzureAsyncOperationHeader(rawResponse)
            });
        case "ResourceLocation":
            return $ef01c2a8c9ef01f2$var$getLocationHeader(rawResponse);
        case "Body":
        default:
            return undefined;
    }
}
module.exports.getOperationLocation = $ef01c2a8c9ef01f2$var$getOperationLocation;
function $ef01c2a8c9ef01f2$var$getOperationStatus({ rawResponse: rawResponse }, state) {
    var _a;
    const mode = (_a = state.config.metadata) === null || _a === void 0 ? void 0 : _a["mode"];
    switch(mode){
        case "OperationLocation":
            return $ef01c2a8c9ef01f2$var$getStatus(rawResponse);
        case "ResourceLocation":
            return $ef01c2a8c9ef01f2$var$toOperationStatus(rawResponse.statusCode);
        case "Body":
            return $ef01c2a8c9ef01f2$var$getProvisioningState(rawResponse);
        default:
            throw new Error(`Internal error: Unexpected operation mode: ${mode}`);
    }
}
module.exports.getOperationStatus = $ef01c2a8c9ef01f2$var$getOperationStatus;
function $ef01c2a8c9ef01f2$var$accessBodyProperty({ flatResponse: flatResponse, rawResponse: rawResponse }, prop) {
    var _a, _b;
    return (_a = flatResponse === null || flatResponse === void 0 ? void 0 : flatResponse[prop]) !== null && _a !== void 0 ? _a : (_b = rawResponse.body) === null || _b === void 0 ? void 0 : _b[prop];
}
function $ef01c2a8c9ef01f2$var$getResourceLocation(res, state) {
    const loc = $ef01c2a8c9ef01f2$var$accessBodyProperty(res, "resourceLocation");
    if (loc && typeof loc === "string") state.config.resourceLocation = loc;
    return state.config.resourceLocation;
}
module.exports.getResourceLocation = $ef01c2a8c9ef01f2$var$getResourceLocation;
function $ef01c2a8c9ef01f2$var$isOperationError(e) {
    return e.name === "RestError";
}
module.exports.isOperationError = $ef01c2a8c9ef01f2$var$isOperationError;
/** Polls the long-running operation. */ async function $ef01c2a8c9ef01f2$var$pollHttpOperation(inputs) {
    const { lro: lro, stateProxy: stateProxy, options: options, processResult: processResult, updateState: updateState, setDelay: setDelay, state: state, setErrorAsResult: setErrorAsResult } = inputs;
    return (0, $e8323aa2719b8401$exports.pollOperation)({
        state: state,
        stateProxy: stateProxy,
        setDelay: setDelay,
        processResult: processResult ? ({ flatResponse: flatResponse }, inputState)=>processResult(flatResponse, inputState) : ({ flatResponse: flatResponse })=>flatResponse,
        getError: $ef01c2a8c9ef01f2$var$getErrorFromResponse,
        updateState: updateState,
        getPollingInterval: $ef01c2a8c9ef01f2$var$parseRetryAfter,
        getOperationLocation: $ef01c2a8c9ef01f2$var$getOperationLocation,
        getOperationStatus: $ef01c2a8c9ef01f2$var$getOperationStatus,
        isOperationError: $ef01c2a8c9ef01f2$var$isOperationError,
        getResourceLocation: $ef01c2a8c9ef01f2$var$getResourceLocation,
        options: options,
        /**
         * The expansion here is intentional because `lro` could be an object that
         * references an inner this, so we need to preserve a reference to it.
         */ poll: async (location, inputOptions)=>lro.sendPollRequest(location, inputOptions),
        setErrorAsResult: setErrorAsResult
    });
}
module.exports.pollHttpOperation = $ef01c2a8c9ef01f2$var$pollHttpOperation;


