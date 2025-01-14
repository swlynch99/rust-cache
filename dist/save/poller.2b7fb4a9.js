require("./operation.e4c8ae96.js");
require("./poller.20232cd4.js");

"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createHttpPoller = void 0;
var $74fa8122554c724c$exports = {};
$74fa8122554c724c$exports = new URL("operation.e4c8ae96.js", "file:" + __filename).toString();


var $b5ee279e67751cf0$exports = {};
$b5ee279e67751cf0$exports = new URL("poller.20232cd4.js", "file:" + __filename).toString();


/**
 * Creates a poller that can be used to poll a long-running operation.
 * @param lro - Description of the long-running operation
 * @param options - options to configure the poller
 * @returns an initialized poller
 */ async function $7e094ece7855b751$var$createHttpPoller(lro, options) {
    const { resourceLocationConfig: resourceLocationConfig, intervalInMs: intervalInMs, processResult: processResult, restoreFrom: restoreFrom, updateState: updateState, withOperationLocation: withOperationLocation, resolveOnUnsuccessful: resolveOnUnsuccessful = false } = options || {};
    return (0, $b5ee279e67751cf0$exports.buildCreatePoller)({
        getStatusFromInitialResponse: $74fa8122554c724c$exports.getStatusFromInitialResponse,
        getStatusFromPollResponse: $74fa8122554c724c$exports.getOperationStatus,
        isOperationError: $74fa8122554c724c$exports.isOperationError,
        getOperationLocation: $74fa8122554c724c$exports.getOperationLocation,
        getResourceLocation: $74fa8122554c724c$exports.getResourceLocation,
        getPollingInterval: $74fa8122554c724c$exports.parseRetryAfter,
        getError: $74fa8122554c724c$exports.getErrorFromResponse,
        resolveOnUnsuccessful: resolveOnUnsuccessful
    })({
        init: async ()=>{
            const response = await lro.sendInitialRequest();
            const config = (0, $74fa8122554c724c$exports.inferLroMode)({
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
        poll: lro.sendPollRequest
    }, {
        intervalInMs: intervalInMs,
        withOperationLocation: withOperationLocation,
        restoreFrom: restoreFrom,
        updateState: updateState,
        processResult: processResult ? ({ flatResponse: flatResponse }, state)=>processResult(flatResponse, state) : ({ flatResponse: flatResponse })=>flatResponse
    });
}
module.exports.createHttpPoller = $7e094ece7855b751$var$createHttpPoller;


