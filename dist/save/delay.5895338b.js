require("./createAbortablePromise.34016838.js");
require("./random.e19e66f2.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $2b1987a55c4f4f82$exports = {};
$2b1987a55c4f4f82$exports = new URL("createAbortablePromise.34016838.js", "file:" + __filename).toString();


var $fff82176d416f23f$exports = {};
$fff82176d416f23f$exports = new URL("random.e19e66f2.js", "file:" + __filename).toString();


const $fbe45ca7effd6f80$var$StandardAbortMessage = "The delay was aborted.";
function $fbe45ca7effd6f80$export$1391212d75b2ee65(timeInMs, options) {
    let token;
    const { abortSignal: abortSignal, abortErrorMsg: abortErrorMsg } = options !== null && options !== void 0 ? options : {};
    return (0, $2b1987a55c4f4f82$exports.createAbortablePromise)((resolve)=>{
        token = setTimeout(resolve, timeInMs);
    }, {
        cleanupBeforeAbort: ()=>clearTimeout(token),
        abortSignal: abortSignal,
        abortErrorMsg: abortErrorMsg !== null && abortErrorMsg !== void 0 ? abortErrorMsg : $fbe45ca7effd6f80$var$StandardAbortMessage
    });
}
function $fbe45ca7effd6f80$export$8f49adf3b8bd0a57(retryAttempt, config) {
    // Exponentially increase the delay each time
    const exponentialDelay = config.retryDelayInMs * Math.pow(2, retryAttempt);
    // Don't let the delay exceed the maximum
    const clampedDelay = Math.min(config.maxRetryDelayInMs, exponentialDelay);
    // Allow the final value to have some "jitter" (within 50% of the delay size) so
    // that retries across multiple clients don't occur simultaneously.
    const retryAfterInMs = clampedDelay / 2 + (0, $fff82176d416f23f$exports.getRandomIntegerInclusive)(0, clampedDelay / 2);
    return {
        retryAfterInMs: retryAfterInMs
    };
}


