require("./commonjs.9b09ed10.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $ce64a3c4ba270d6c$exports = {};
$ce64a3c4ba270d6c$exports = new URL("commonjs.9b09ed10.js", "file:" + __filename).toString();


function $efdb57d4954e86ac$export$53e76b8cf0bad4c1(buildPromise, options) {
    const { cleanupBeforeAbort: cleanupBeforeAbort, abortSignal: abortSignal, abortErrorMsg: abortErrorMsg } = options !== null && options !== void 0 ? options : {};
    return new Promise((resolve, reject)=>{
        function rejectOnAbort() {
            reject(new (0, $ce64a3c4ba270d6c$exports.AbortError)(abortErrorMsg !== null && abortErrorMsg !== void 0 ? abortErrorMsg : "The operation was aborted."));
        }
        function removeListeners() {
            abortSignal === null || abortSignal === void 0 || abortSignal.removeEventListener("abort", onAbort);
        }
        function onAbort() {
            cleanupBeforeAbort === null || cleanupBeforeAbort === void 0 || cleanupBeforeAbort();
            removeListeners();
            rejectOnAbort();
        }
        if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) return rejectOnAbort();
        try {
            buildPromise((x)=>{
                removeListeners();
                resolve(x);
            }, (x)=>{
                removeListeners();
                reject(x);
            });
        } catch (err) {
            reject(err);
        }
        abortSignal === null || abortSignal === void 0 || abortSignal.addEventListener("abort", onAbort);
    });
}


//# sourceMappingURL=createAbortablePromise.829ee412.js.map
