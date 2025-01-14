require("./crypto.e2f96794.js");
require("./crypto.5e2ccdea.js");

"use strict";
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* global window */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createCrypto = $e8171fa0fe572475$var$createCrypto;
module.exports.hasBrowserCrypto = $e8171fa0fe572475$var$hasBrowserCrypto;
module.exports.fromArrayBufferToHex = $e8171fa0fe572475$var$fromArrayBufferToHex;
var $527b994b2205d53e$exports = {};
$527b994b2205d53e$exports = new URL("crypto.e2f96794.js", "file:" + __filename).toString();


var $6969729ceb4620f1$exports = {};
$6969729ceb4620f1$exports = new URL("crypto.5e2ccdea.js", "file:" + __filename).toString();


function $e8171fa0fe572475$var$createCrypto() {
    if ($e8171fa0fe572475$var$hasBrowserCrypto()) return new $527b994b2205d53e$exports.BrowserCrypto();
    return new $6969729ceb4620f1$exports.NodeCrypto();
}
function $e8171fa0fe572475$var$hasBrowserCrypto() {
    return typeof window !== 'undefined' && typeof window.crypto !== 'undefined' && typeof window.crypto.subtle !== 'undefined';
}
/**
 * Converts an ArrayBuffer to a hexadecimal string.
 * @param arrayBuffer The ArrayBuffer to convert to hexadecimal string.
 * @return The hexadecimal encoding of the ArrayBuffer.
 */ function $e8171fa0fe572475$var$fromArrayBufferToHex(arrayBuffer) {
    // Convert buffer to byte array.
    const byteArray = Array.from(new Uint8Array(arrayBuffer));
    // Convert bytes to hex string.
    return byteArray.map((byte)=>{
        return byte.toString(16).padStart(2, '0');
    }).join('');
}


//# sourceMappingURL=crypto.d1f27c38.js.map
