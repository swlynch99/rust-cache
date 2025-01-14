require("./operation.942954b8.js");
require("./logger.b70f4b6c.js");


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
module.exports.GenericPollOperation = void 0;

var $7stFo = parcelRequire("7stFo");

var $lDnhk = parcelRequire("lDnhk");
const $eea27e2954e8ec63$var$createStateProxy = ()=>({
        initState: (config)=>({
                config: config,
                isStarted: true
            }),
        setCanceled: (state)=>state.isCancelled = true,
        setError: (state, error)=>state.error = error,
        setResult: (state, result)=>state.result = result,
        setRunning: (state)=>state.isStarted = true,
        setSucceeded: (state)=>state.isCompleted = true,
        setFailed: ()=>{
        /** empty body */ },
        getError: (state)=>state.error,
        getResult: (state)=>state.result,
        isCanceled: (state)=>!!state.isCancelled,
        isFailed: (state)=>!!state.error,
        isRunning: (state)=>!!state.isStarted,
        isSucceeded: (state)=>Boolean(state.isCompleted && !state.isCancelled && !state.error)
    });
class $eea27e2954e8ec63$var$GenericPollOperation {
    constructor(state, lro, setErrorAsResult, lroResourceLocationConfig, processResult, updateState, isDone){
        this.state = state;
        this.lro = lro;
        this.setErrorAsResult = setErrorAsResult;
        this.lroResourceLocationConfig = lroResourceLocationConfig;
        this.processResult = processResult;
        this.updateState = updateState;
        this.isDone = isDone;
    }
    setPollerConfig(pollerConfig) {
        this.pollerConfig = pollerConfig;
    }
    async update(options) {
        var _a;
        const stateProxy = $eea27e2954e8ec63$var$createStateProxy();
        if (!this.state.isStarted) this.state = Object.assign(Object.assign({}, this.state), await (0, $7stFo.initHttpOperation)({
            lro: this.lro,
            stateProxy: stateProxy,
            resourceLocationConfig: this.lroResourceLocationConfig,
            processResult: this.processResult,
            setErrorAsResult: this.setErrorAsResult
        }));
        const updateState = this.updateState;
        const isDone = this.isDone;
        if (!this.state.isCompleted && this.state.error === undefined) await (0, $7stFo.pollHttpOperation)({
            lro: this.lro,
            state: this.state,
            stateProxy: stateProxy,
            processResult: this.processResult,
            updateState: updateState ? (state, { rawResponse: rawResponse })=>updateState(state, rawResponse) : undefined,
            isDone: isDone ? ({ flatResponse: flatResponse }, state)=>isDone(flatResponse, state) : undefined,
            options: options,
            setDelay: (intervalInMs)=>{
                this.pollerConfig.intervalInMs = intervalInMs;
            },
            setErrorAsResult: this.setErrorAsResult
        });
        (_a = options === null || options === void 0 ? void 0 : options.fireProgress) === null || _a === void 0 || _a.call(options, this.state);
        return this;
    }
    async cancel() {
        $lDnhk.logger.error("`cancelOperation` is deprecated because it wasn't implemented");
        return this;
    }
    /**
     * Serializes the Poller operation.
     */ toString() {
        return JSON.stringify({
            state: this.state
        });
    }
}
module.exports.GenericPollOperation = $eea27e2954e8ec63$var$GenericPollOperation;


//# sourceMappingURL=operation.b48e817f.js.map
