require("./operation.942954b8.js");
require("./poller.32afc7e3.js");

"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createHttpPoller = void 0;
var $51f5a2791d1afb6b$exports = {};
$51f5a2791d1afb6b$exports = new URL("operation.942954b8.js", "file:" + __filename).toString();


var $48170ad9a3ae623a$exports = {};
$48170ad9a3ae623a$exports = new URL("poller.32afc7e3.js", "file:" + __filename).toString();


/**
 * Creates a poller that can be used to poll a long-running operation.
 * @param lro - Description of the long-running operation
 * @param options - options to configure the poller
 * @returns an initialized poller
 */ async function $5046d2f78159213e$var$createHttpPoller(lro, options) {
    const { resourceLocationConfig: resourceLocationConfig, intervalInMs: intervalInMs, processResult: processResult, restoreFrom: restoreFrom, updateState: updateState, withOperationLocation: withOperationLocation, resolveOnUnsuccessful: resolveOnUnsuccessful = false } = options || {};
    return (0, $48170ad9a3ae623a$exports.buildCreatePoller)({
        getStatusFromInitialResponse: $51f5a2791d1afb6b$exports.getStatusFromInitialResponse,
        getStatusFromPollResponse: $51f5a2791d1afb6b$exports.getOperationStatus,
        isOperationError: $51f5a2791d1afb6b$exports.isOperationError,
        getOperationLocation: $51f5a2791d1afb6b$exports.getOperationLocation,
        getResourceLocation: $51f5a2791d1afb6b$exports.getResourceLocation,
        getPollingInterval: $51f5a2791d1afb6b$exports.parseRetryAfter,
        getError: $51f5a2791d1afb6b$exports.getErrorFromResponse,
        resolveOnUnsuccessful: resolveOnUnsuccessful
    })({
        init: async ()=>{
            const response = await lro.sendInitialRequest();
            const config = (0, $51f5a2791d1afb6b$exports.inferLroMode)({
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
module.exports.createHttpPoller = $5046d2f78159213e$var$createHttpPoller;


//# sourceMappingURL=poller.d80a72a8.js.map
