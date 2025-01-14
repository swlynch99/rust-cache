var $6BVY5$crypto = require("crypto");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $2ac140712cc982bb$var$_a;
// NOTE: This is a workaround until we can use `globalThis.crypto.randomUUID` in Node.js 19+.
const $2ac140712cc982bb$var$uuidFunction = typeof (($2ac140712cc982bb$var$_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || $2ac140712cc982bb$var$_a === void 0 ? void 0 : $2ac140712cc982bb$var$_a.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : (0, $6BVY5$crypto.randomUUID);
function $2ac140712cc982bb$export$f15387b9ab8915bf() {
    return $2ac140712cc982bb$var$uuidFunction();
}


