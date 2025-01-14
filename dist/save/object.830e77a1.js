// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Helper to determine when an input is a generic JS object.
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */ function $cb2a9e9d0b2c77e6$export$a6cdc56e425d0d0a(input) {
    return typeof input === "object" && input !== null && !Array.isArray(input) && !(input instanceof RegExp) && !(input instanceof Date);
}


//# sourceMappingURL=object.830e77a1.js.map
