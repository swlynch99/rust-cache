require("./commonjs.c1a7d614.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $2b429face330aacd$exports = {};
$2b429face330aacd$exports = new URL("commonjs.c1a7d614.js", "file:" + __filename).toString();


const $7e94b2321be0e61b$var$StandardAbortMessage = "The operation was aborted.";
function $7e94b2321be0e61b$export$1391212d75b2ee65(delayInMs, value, options) {
    return new Promise((resolve, reject)=>{
        let timer = undefined;
        let onAborted = undefined;
        const rejectOnAbort = ()=>{
            return reject(new (0, $2b429face330aacd$exports.AbortError)((options === null || options === void 0 ? void 0 : options.abortErrorMsg) ? options === null || options === void 0 ? void 0 : options.abortErrorMsg : $7e94b2321be0e61b$var$StandardAbortMessage));
        };
        const removeListeners = ()=>{
            if ((options === null || options === void 0 ? void 0 : options.abortSignal) && onAborted) options.abortSignal.removeEventListener("abort", onAborted);
        };
        onAborted = ()=>{
            if (timer) clearTimeout(timer);
            removeListeners();
            return rejectOnAbort();
        };
        if ((options === null || options === void 0 ? void 0 : options.abortSignal) && options.abortSignal.aborted) return rejectOnAbort();
        timer = setTimeout(()=>{
            removeListeners();
            resolve(value);
        }, delayInMs);
        if (options === null || options === void 0 ? void 0 : options.abortSignal) options.abortSignal.addEventListener("abort", onAborted);
    });
}
function $7e94b2321be0e61b$export$e72e490e94da6f8f(response, headerName) {
    const value = response.headers.get(headerName);
    if (!value) return;
    const valueAsNum = Number(value);
    if (Number.isNaN(valueAsNum)) return;
    return valueAsNum;
}


//# sourceMappingURL=helpers.5170dd9e.js.map
