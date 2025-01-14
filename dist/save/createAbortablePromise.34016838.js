require("./commonjs.a2a67def.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $b7f35b2da0d8af61$exports = {};
$b7f35b2da0d8af61$exports = new URL("commonjs.a2a67def.js", "file:" + __filename).toString();


function $d527d66fa9ffb18b$export$53e76b8cf0bad4c1(buildPromise, options) {
    const { cleanupBeforeAbort: cleanupBeforeAbort, abortSignal: abortSignal, abortErrorMsg: abortErrorMsg } = options !== null && options !== void 0 ? options : {};
    return new Promise((resolve, reject)=>{
        function rejectOnAbort() {
            reject(new (0, $b7f35b2da0d8af61$exports.AbortError)(abortErrorMsg !== null && abortErrorMsg !== void 0 ? abortErrorMsg : "The operation was aborted."));
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


