// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * promise.race() wrapper that aborts rest of promises as soon as the first promise settles.
 */ async function $8749c0c4f9b0c691$export$43b8f4db166dd96(abortablePromiseBuilders, options) {
    var _a, _b;
    const aborter = new AbortController();
    function abortHandler() {
        aborter.abort();
    }
    (_a = options === null || options === void 0 ? void 0 : options.abortSignal) === null || _a === void 0 || _a.addEventListener("abort", abortHandler);
    try {
        return await Promise.race(abortablePromiseBuilders.map((p)=>p({
                abortSignal: aborter.signal
            })));
    } finally{
        aborter.abort();
        (_b = options === null || options === void 0 ? void 0 : options.abortSignal) === null || _b === void 0 || _b.removeEventListener("abort", abortHandler);
    }
}


//# sourceMappingURL=aborterUtils.a74e3985.js.map
