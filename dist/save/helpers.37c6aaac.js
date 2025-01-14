require("./commonjs.747dd214.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $21bf72eedef24465$exports = {};
$21bf72eedef24465$exports = new URL("commonjs.747dd214.js", "file:" + __filename).toString();


const $2eaf584112efc9b5$var$StandardAbortMessage = "The operation was aborted.";
function $2eaf584112efc9b5$export$1391212d75b2ee65(delayInMs, value, options) {
    return new Promise((resolve, reject)=>{
        let timer = undefined;
        let onAborted = undefined;
        const rejectOnAbort = ()=>{
            return reject(new (0, $21bf72eedef24465$exports.AbortError)((options === null || options === void 0 ? void 0 : options.abortErrorMsg) ? options === null || options === void 0 ? void 0 : options.abortErrorMsg : $2eaf584112efc9b5$var$StandardAbortMessage));
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
function $2eaf584112efc9b5$export$e72e490e94da6f8f(response, headerName) {
    const value = response.headers.get(headerName);
    if (!value) return;
    const valueAsNum = Number(value);
    if (Number.isNaN(valueAsNum)) return;
    return valueAsNum;
}


