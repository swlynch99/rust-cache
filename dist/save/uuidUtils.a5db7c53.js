var $6tZMp$crypto = require("crypto");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $f82a49526425e048$var$_a;
// NOTE: This is a workaround until we can use `globalThis.crypto.randomUUID` in Node.js 19+.
const $f82a49526425e048$var$uuidFunction = typeof (($f82a49526425e048$var$_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || $f82a49526425e048$var$_a === void 0 ? void 0 : $f82a49526425e048$var$_a.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : (0, $6tZMp$crypto.randomUUID);
function $f82a49526425e048$export$f15387b9ab8915bf() {
    return $f82a49526425e048$var$uuidFunction();
}


//# sourceMappingURL=uuidUtils.a5db7c53.js.map
