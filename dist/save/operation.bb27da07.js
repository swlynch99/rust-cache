require("./logger.b70f4b6c.js");
require("./constants.94d162dd.js");

"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.pollOperation = module.exports.initOperation = module.exports.deserializeState = void 0;
var $d3bed651ac17ef57$exports = {};
$d3bed651ac17ef57$exports = new URL("logger.b70f4b6c.js", "file:" + __filename).toString();


var $5a4c3ff13fdd4cda$exports = {};
$5a4c3ff13fdd4cda$exports = new URL("constants.94d162dd.js", "file:" + __filename).toString();


/**
 * Deserializes the state
 */ function $1c72c0059f3a3187$var$deserializeState(serializedState) {
    try {
        return JSON.parse(serializedState).state;
    } catch (e) {
        throw new Error(`Unable to deserialize input state: ${serializedState}`);
    }
}
module.exports.deserializeState = $1c72c0059f3a3187$var$deserializeState;
function $1c72c0059f3a3187$var$setStateError(inputs) {
    const { state: state, stateProxy: stateProxy, isOperationError: isOperationError } = inputs;
    return (error)=>{
        if (isOperationError(error)) {
            stateProxy.setError(state, error);
            stateProxy.setFailed(state);
        }
        throw error;
    };
}
function $1c72c0059f3a3187$var$appendReadableErrorMessage(currentMessage, innerMessage) {
    let message = currentMessage;
    if (message.slice(-1) !== ".") message = message + ".";
    return message + " " + innerMessage;
}
function $1c72c0059f3a3187$var$simplifyError(err) {
    let message = err.message;
    let code = err.code;
    let curErr = err;
    while(curErr.innererror){
        curErr = curErr.innererror;
        code = curErr.code;
        message = $1c72c0059f3a3187$var$appendReadableErrorMessage(message, curErr.message);
    }
    return {
        code: code,
        message: message
    };
}
function $1c72c0059f3a3187$var$processOperationStatus(result) {
    const { state: state, stateProxy: stateProxy, status: status, isDone: isDone, processResult: processResult, getError: getError, response: response, setErrorAsResult: setErrorAsResult } = result;
    switch(status){
        case "succeeded":
            stateProxy.setSucceeded(state);
            break;
        case "failed":
            {
                const err = getError === null || getError === void 0 ? void 0 : getError(response);
                let postfix = "";
                if (err) {
                    const { code: code, message: message } = $1c72c0059f3a3187$var$simplifyError(err);
                    postfix = `. ${code}. ${message}`;
                }
                const errStr = `The long-running operation has failed${postfix}`;
                stateProxy.setError(state, new Error(errStr));
                stateProxy.setFailed(state);
                $d3bed651ac17ef57$exports.logger.warning(errStr);
                break;
            }
        case "canceled":
            stateProxy.setCanceled(state);
            break;
    }
    if ((isDone === null || isDone === void 0 ? void 0 : isDone(response, state)) || isDone === undefined && [
        "succeeded",
        "canceled"
    ].concat(setErrorAsResult ? [] : [
        "failed"
    ]).includes(status)) stateProxy.setResult(state, $1c72c0059f3a3187$var$buildResult({
        response: response,
        state: state,
        processResult: processResult
    }));
}
function $1c72c0059f3a3187$var$buildResult(inputs) {
    const { processResult: processResult, response: response, state: state } = inputs;
    return processResult ? processResult(response, state) : response;
}
/**
 * Initiates the long-running operation.
 */ async function $1c72c0059f3a3187$var$initOperation(inputs) {
    const { init: init, stateProxy: stateProxy, processResult: processResult, getOperationStatus: getOperationStatus, withOperationLocation: withOperationLocation, setErrorAsResult: setErrorAsResult } = inputs;
    const { operationLocation: operationLocation, resourceLocation: resourceLocation, metadata: metadata, response: response } = await init();
    if (operationLocation) withOperationLocation === null || withOperationLocation === void 0 || withOperationLocation(operationLocation, false);
    const config = {
        metadata: metadata,
        operationLocation: operationLocation,
        resourceLocation: resourceLocation
    };
    $d3bed651ac17ef57$exports.logger.verbose(`LRO: Operation description:`, config);
    const state = stateProxy.initState(config);
    const status = getOperationStatus({
        response: response,
        state: state,
        operationLocation: operationLocation
    });
    $1c72c0059f3a3187$var$processOperationStatus({
        state: state,
        status: status,
        stateProxy: stateProxy,
        response: response,
        setErrorAsResult: setErrorAsResult,
        processResult: processResult
    });
    return state;
}
module.exports.initOperation = $1c72c0059f3a3187$var$initOperation;
async function $1c72c0059f3a3187$var$pollOperationHelper(inputs) {
    const { poll: poll, state: state, stateProxy: stateProxy, operationLocation: operationLocation, getOperationStatus: getOperationStatus, getResourceLocation: getResourceLocation, isOperationError: isOperationError, options: options } = inputs;
    const response = await poll(operationLocation, options).catch($1c72c0059f3a3187$var$setStateError({
        state: state,
        stateProxy: stateProxy,
        isOperationError: isOperationError
    }));
    const status = getOperationStatus(response, state);
    $d3bed651ac17ef57$exports.logger.verbose(`LRO: Status:\n\tPolling from: ${state.config.operationLocation}\n\tOperation status: ${status}\n\tPolling status: ${$5a4c3ff13fdd4cda$exports.terminalStates.includes(status) ? "Stopped" : "Running"}`);
    if (status === "succeeded") {
        const resourceLocation = getResourceLocation(response, state);
        if (resourceLocation !== undefined) return {
            response: await poll(resourceLocation).catch($1c72c0059f3a3187$var$setStateError({
                state: state,
                stateProxy: stateProxy,
                isOperationError: isOperationError
            })),
            status: status
        };
    }
    return {
        response: response,
        status: status
    };
}
/** Polls the long-running operation. */ async function $1c72c0059f3a3187$var$pollOperation(inputs) {
    const { poll: poll, state: state, stateProxy: stateProxy, options: options, getOperationStatus: getOperationStatus, getResourceLocation: getResourceLocation, getOperationLocation: getOperationLocation, isOperationError: isOperationError, withOperationLocation: withOperationLocation, getPollingInterval: getPollingInterval, processResult: processResult, getError: getError, updateState: updateState, setDelay: setDelay, isDone: isDone, setErrorAsResult: setErrorAsResult } = inputs;
    const { operationLocation: operationLocation } = state.config;
    if (operationLocation !== undefined) {
        const { response: response, status: status } = await $1c72c0059f3a3187$var$pollOperationHelper({
            poll: poll,
            getOperationStatus: getOperationStatus,
            state: state,
            stateProxy: stateProxy,
            operationLocation: operationLocation,
            getResourceLocation: getResourceLocation,
            isOperationError: isOperationError,
            options: options
        });
        $1c72c0059f3a3187$var$processOperationStatus({
            status: status,
            response: response,
            state: state,
            stateProxy: stateProxy,
            isDone: isDone,
            processResult: processResult,
            getError: getError,
            setErrorAsResult: setErrorAsResult
        });
        if (!$5a4c3ff13fdd4cda$exports.terminalStates.includes(status)) {
            const intervalInMs = getPollingInterval === null || getPollingInterval === void 0 ? void 0 : getPollingInterval(response);
            if (intervalInMs) setDelay(intervalInMs);
            const location = getOperationLocation === null || getOperationLocation === void 0 ? void 0 : getOperationLocation(response, state);
            if (location !== undefined) {
                const isUpdated = operationLocation !== location;
                state.config.operationLocation = location;
                withOperationLocation === null || withOperationLocation === void 0 || withOperationLocation(location, isUpdated);
            } else withOperationLocation === null || withOperationLocation === void 0 || withOperationLocation(operationLocation, false);
        }
        updateState === null || updateState === void 0 || updateState(state, response);
    }
}
module.exports.pollOperation = $1c72c0059f3a3187$var$pollOperation;


//# sourceMappingURL=operation.bb27da07.js.map
