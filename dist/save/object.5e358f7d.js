// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Helper to determine when an input is a generic JS object.
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */ function $83b8728565ddfe9b$export$a6cdc56e425d0d0a(input) {
    return typeof input === "object" && input !== null && !Array.isArray(input) && !(input instanceof RegExp) && !(input instanceof Date);
}


