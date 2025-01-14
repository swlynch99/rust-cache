// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
function $146be20c06b6e788$export$530196473208426f(x) {
    return Boolean(x && typeof x["pipe"] === "function");
}
function $146be20c06b6e788$export$bc95ddda6357be26(x) {
    return Boolean(x && typeof x.getReader === "function" && typeof x.tee === "function");
}
function $146be20c06b6e788$export$ac613ff475b69d05(x) {
    return $146be20c06b6e788$export$530196473208426f(x) || $146be20c06b6e788$export$bc95ddda6357be26(x);
}
function $146be20c06b6e788$export$5bcd6e94ed871c88(x) {
    return typeof x.stream === "function";
}


//# sourceMappingURL=typeGuards.9f181394.js.map
