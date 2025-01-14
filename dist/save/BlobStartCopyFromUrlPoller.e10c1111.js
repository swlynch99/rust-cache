require("./esm.9590f010.js");
require("./commonjs.81a38577.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $hACYf = parcelRequire("hACYf");
var $b8dbf714fe39eb0f$exports = {};
$b8dbf714fe39eb0f$exports = new URL("commonjs.81a38577.js", "file:" + __filename).toString();


class $e817b8ea23d0994d$export$a22a4d19bf4a9509 extends (0, $b8dbf714fe39eb0f$exports.Poller) {
    constructor(options){
        const { blobClient: blobClient, copySource: copySource, intervalInMs: intervalInMs = 15000, onProgress: onProgress, resumeFrom: resumeFrom, startCopyFromURLOptions: startCopyFromURLOptions } = options;
        let state;
        if (resumeFrom) state = JSON.parse(resumeFrom).state;
        const operation = $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(Object.assign(Object.assign({}, state), {
            blobClient: blobClient,
            copySource: copySource,
            startCopyFromURLOptions: startCopyFromURLOptions
        }));
        super(operation);
        if (typeof onProgress === "function") this.onProgress(onProgress);
        this.intervalInMs = intervalInMs;
    }
    delay() {
        return (0, $hACYf.delay)(this.intervalInMs);
    }
}
/**
 * Note: Intentionally using function expression over arrow function expression
 * so that the function can be invoked with a different context.
 * This affects what `this` refers to.
 * @hidden
 */ const $e817b8ea23d0994d$var$cancel = async function cancel(options = {}) {
    const state = this.state;
    const { copyId: copyId } = state;
    if (state.isCompleted) return $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(state);
    if (!copyId) {
        state.isCancelled = true;
        return $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(state);
    }
    // if abortCopyFromURL throws, it will bubble up to user's poller.cancelOperation call
    await state.blobClient.abortCopyFromURL(copyId, {
        abortSignal: options.abortSignal
    });
    state.isCancelled = true;
    return $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(state);
};
/**
 * Note: Intentionally using function expression over arrow function expression
 * so that the function can be invoked with a different context.
 * This affects what `this` refers to.
 * @hidden
 */ const $e817b8ea23d0994d$var$update = async function update(options = {}) {
    const state = this.state;
    const { blobClient: blobClient, copySource: copySource, startCopyFromURLOptions: startCopyFromURLOptions } = state;
    if (!state.isStarted) {
        state.isStarted = true;
        const result = await blobClient.startCopyFromURL(copySource, startCopyFromURLOptions);
        // copyId is needed to abort
        state.copyId = result.copyId;
        if (result.copyStatus === "success") {
            state.result = result;
            state.isCompleted = true;
        }
    } else if (!state.isCompleted) try {
        const result = await state.blobClient.getProperties({
            abortSignal: options.abortSignal
        });
        const { copyStatus: copyStatus, copyProgress: copyProgress } = result;
        const prevCopyProgress = state.copyProgress;
        if (copyProgress) state.copyProgress = copyProgress;
        if (copyStatus === "pending" && copyProgress !== prevCopyProgress && typeof options.fireProgress === "function") // trigger in setTimeout, or swallow error?
        options.fireProgress(state);
        else if (copyStatus === "success") {
            state.result = result;
            state.isCompleted = true;
        } else if (copyStatus === "failed") {
            state.error = new Error(`Blob copy failed with reason: "${result.copyStatusDescription || "unknown"}"`);
            state.isCompleted = true;
        }
    } catch (err) {
        state.error = err;
        state.isCompleted = true;
    }
    return $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(state);
};
/**
 * Note: Intentionally using function expression over arrow function expression
 * so that the function can be invoked with a different context.
 * This affects what `this` refers to.
 * @hidden
 */ const $e817b8ea23d0994d$var$toString = function toString() {
    return JSON.stringify({
        state: this.state
    }, (key, value)=>{
        // remove blobClient from serialized state since a client can't be hydrated from this info.
        if (key === "blobClient") return undefined;
        return value;
    });
};
/**
 * Creates a poll operation given the provided state.
 * @hidden
 */ function $e817b8ea23d0994d$var$makeBlobBeginCopyFromURLPollOperation(state) {
    return {
        state: Object.assign({}, state),
        cancel: $e817b8ea23d0994d$var$cancel,
        toString: $e817b8ea23d0994d$var$toString,
        update: $e817b8ea23d0994d$var$update
    };
}


//# sourceMappingURL=BlobStartCopyFromUrlPoller.e10c1111.js.map
