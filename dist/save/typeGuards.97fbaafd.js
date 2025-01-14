// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
function $8e0bc98aa303aceb$export$530196473208426f(x) {
    return Boolean(x && typeof x["pipe"] === "function");
}
function $8e0bc98aa303aceb$export$bc95ddda6357be26(x) {
    return Boolean(x && typeof x.getReader === "function" && typeof x.tee === "function");
}
function $8e0bc98aa303aceb$export$ac613ff475b69d05(x) {
    return $8e0bc98aa303aceb$export$530196473208426f(x) || $8e0bc98aa303aceb$export$bc95ddda6357be26(x);
}
function $8e0bc98aa303aceb$export$5bcd6e94ed871c88(x) {
    return typeof x.stream === "function";
}


