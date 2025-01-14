"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AbortError = void 0;
/**
 * This error is thrown when an asynchronous operation has been aborted.
 * Check for this error by testing the `name` that the name property of the
 * error matches `"AbortError"`.
 *
 * @example
 * ```ts
 * const controller = new AbortController();
 * controller.abort();
 * try {
 *   doAsyncWork(controller.signal)
 * } catch (e) {
 *   if (e.name === 'AbortError') {
 *     // handle abort error here.
 *   }
 * }
 * ```
 */ class $9ef908061148c072$var$AbortError extends Error {
    constructor(message){
        super(message);
        this.name = "AbortError";
    }
}
module.exports.AbortError = $9ef908061148c072$var$AbortError;


//# sourceMappingURL=AbortError.2e2f0012.js.map
