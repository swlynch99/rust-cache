require("./operation.909a11a3.js");
require("./constants.94590164.js");
require("./esm.f174e5c8.js");


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
module.exports.buildCreatePoller = void 0;

var $f9oNC = parcelRequire("f9oNC");

var $enhiB = parcelRequire("enhiB");

var $3lAwb = parcelRequire("3lAwb");
const $1685177265d26195$var$createStateProxy = ()=>({
        /**
     * The state at this point is created to be of type OperationState<TResult>.
     * It will be updated later to be of type TState when the
     * customer-provided callback, `updateState`, is called during polling.
     */ initState: (config)=>({
                status: "running",
                config: config
            }),
        setCanceled: (state)=>state.status = "canceled",
        setError: (state, error)=>state.error = error,
        setResult: (state, result)=>state.result = result,
        setRunning: (state)=>state.status = "running",
        setSucceeded: (state)=>state.status = "succeeded",
        setFailed: (state)=>state.status = "failed",
        getError: (state)=>state.error,
        getResult: (state)=>state.result,
        isCanceled: (state)=>state.status === "canceled",
        isFailed: (state)=>state.status === "failed",
        isRunning: (state)=>state.status === "running",
        isSucceeded: (state)=>state.status === "succeeded"
    });
/**
 * Returns a poller factory.
 */ function $1685177265d26195$var$buildCreatePoller(inputs) {
    const { getOperationLocation: getOperationLocation, getStatusFromInitialResponse: getStatusFromInitialResponse, getStatusFromPollResponse: getStatusFromPollResponse, isOperationError: isOperationError, getResourceLocation: getResourceLocation, getPollingInterval: getPollingInterval, getError: getError, resolveOnUnsuccessful: resolveOnUnsuccessful } = inputs;
    return async ({ init: init, poll: poll }, options)=>{
        const { processResult: processResult, updateState: updateState, withOperationLocation: withOperationLocationCallback, intervalInMs: intervalInMs = $enhiB.POLL_INTERVAL_IN_MS, restoreFrom: restoreFrom } = options || {};
        const stateProxy = $1685177265d26195$var$createStateProxy();
        const withOperationLocation = withOperationLocationCallback ? (()=>{
            let called = false;
            return (operationLocation, isUpdated)=>{
                if (isUpdated) withOperationLocationCallback(operationLocation);
                else if (!called) withOperationLocationCallback(operationLocation);
                called = true;
            };
        })() : undefined;
        const state = restoreFrom ? (0, $f9oNC.deserializeState)(restoreFrom) : await (0, $f9oNC.initOperation)({
            init: init,
            stateProxy: stateProxy,
            processResult: processResult,
            getOperationStatus: getStatusFromInitialResponse,
            withOperationLocation: withOperationLocation,
            setErrorAsResult: !resolveOnUnsuccessful
        });
        let resultPromise;
        const abortController = new AbortController();
        const handlers = new Map();
        const handleProgressEvents = async ()=>handlers.forEach((h)=>h(state));
        const cancelErrMsg = "Operation was canceled";
        let currentPollIntervalInMs = intervalInMs;
        const poller = {
            getOperationState: ()=>state,
            getResult: ()=>state.result,
            isDone: ()=>[
                    "succeeded",
                    "failed",
                    "canceled"
                ].includes(state.status),
            isStopped: ()=>resultPromise === undefined,
            stopPolling: ()=>{
                abortController.abort();
            },
            toString: ()=>JSON.stringify({
                    state: state
                }),
            onProgress: (callback)=>{
                const s = Symbol();
                handlers.set(s, callback);
                return ()=>handlers.delete(s);
            },
            pollUntilDone: (pollOptions)=>resultPromise !== null && resultPromise !== void 0 ? resultPromise : resultPromise = (async ()=>{
                    const { abortSignal: inputAbortSignal } = pollOptions || {};
                    // In the future we can use AbortSignal.any() instead
                    function abortListener() {
                        abortController.abort();
                    }
                    const abortSignal = abortController.signal;
                    if (inputAbortSignal === null || inputAbortSignal === void 0 ? void 0 : inputAbortSignal.aborted) abortController.abort();
                    else if (!abortSignal.aborted) inputAbortSignal === null || inputAbortSignal === void 0 || inputAbortSignal.addEventListener("abort", abortListener, {
                        once: true
                    });
                    try {
                        if (!poller.isDone()) {
                            await poller.poll({
                                abortSignal: abortSignal
                            });
                            while(!poller.isDone()){
                                await (0, $3lAwb.delay)(currentPollIntervalInMs, {
                                    abortSignal: abortSignal
                                });
                                await poller.poll({
                                    abortSignal: abortSignal
                                });
                            }
                        }
                    } finally{
                        inputAbortSignal === null || inputAbortSignal === void 0 || inputAbortSignal.removeEventListener("abort", abortListener);
                    }
                    if (resolveOnUnsuccessful) return poller.getResult();
                    else switch(state.status){
                        case "succeeded":
                            return poller.getResult();
                        case "canceled":
                            throw new Error(cancelErrMsg);
                        case "failed":
                            throw state.error;
                        case "notStarted":
                        case "running":
                            throw new Error(`Polling completed without succeeding or failing`);
                    }
                })().finally(()=>{
                    resultPromise = undefined;
                }),
            async poll (pollOptions) {
                if (resolveOnUnsuccessful) {
                    if (poller.isDone()) return;
                } else switch(state.status){
                    case "succeeded":
                        return;
                    case "canceled":
                        throw new Error(cancelErrMsg);
                    case "failed":
                        throw state.error;
                }
                await (0, $f9oNC.pollOperation)({
                    poll: poll,
                    state: state,
                    stateProxy: stateProxy,
                    getOperationLocation: getOperationLocation,
                    isOperationError: isOperationError,
                    withOperationLocation: withOperationLocation,
                    getPollingInterval: getPollingInterval,
                    getOperationStatus: getStatusFromPollResponse,
                    getResourceLocation: getResourceLocation,
                    processResult: processResult,
                    getError: getError,
                    updateState: updateState,
                    options: pollOptions,
                    setDelay: (pollIntervalInMs)=>{
                        currentPollIntervalInMs = pollIntervalInMs;
                    },
                    setErrorAsResult: !resolveOnUnsuccessful
                });
                await handleProgressEvents();
                if (!resolveOnUnsuccessful) switch(state.status){
                    case "canceled":
                        throw new Error(cancelErrMsg);
                    case "failed":
                        throw state.error;
                }
            }
        };
        return poller;
    };
}
module.exports.buildCreatePoller = $1685177265d26195$var$buildCreatePoller;


