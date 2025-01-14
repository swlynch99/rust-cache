require("./createAbortablePromise.829ee412.js");
require("./random.a1aba9ba.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $db4dadbade536416$exports = {};
$db4dadbade536416$exports = new URL("createAbortablePromise.829ee412.js", "file:" + __filename).toString();


var $46426f298229e0b9$exports = {};
$46426f298229e0b9$exports = new URL("random.a1aba9ba.js", "file:" + __filename).toString();


const $f4a8fc5b440a190e$var$StandardAbortMessage = "The delay was aborted.";
function $f4a8fc5b440a190e$export$1391212d75b2ee65(timeInMs, options) {
    let token;
    const { abortSignal: abortSignal, abortErrorMsg: abortErrorMsg } = options !== null && options !== void 0 ? options : {};
    return (0, $db4dadbade536416$exports.createAbortablePromise)((resolve)=>{
        token = setTimeout(resolve, timeInMs);
    }, {
        cleanupBeforeAbort: ()=>clearTimeout(token),
        abortSignal: abortSignal,
        abortErrorMsg: abortErrorMsg !== null && abortErrorMsg !== void 0 ? abortErrorMsg : $f4a8fc5b440a190e$var$StandardAbortMessage
    });
}
function $f4a8fc5b440a190e$export$8f49adf3b8bd0a57(retryAttempt, config) {
    // Exponentially increase the delay each time
    const exponentialDelay = config.retryDelayInMs * Math.pow(2, retryAttempt);
    // Don't let the delay exceed the maximum
    const clampedDelay = Math.min(config.maxRetryDelayInMs, exponentialDelay);
    // Allow the final value to have some "jitter" (within 50% of the delay size) so
    // that retries across multiple clients don't occur simultaneously.
    const retryAfterInMs = clampedDelay / 2 + (0, $46426f298229e0b9$exports.getRandomIntegerInclusive)(0, clampedDelay / 2);
    return {
        retryAfterInMs: retryAfterInMs
    };
}


//# sourceMappingURL=delay.bea6ef87.js.map
