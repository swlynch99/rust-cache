require("./crypto.98f0135a.js");
require("./crypto.566be813.js");

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
module.exports.createCrypto = $41b97d983dcedb3c$var$createCrypto;
module.exports.hasBrowserCrypto = $41b97d983dcedb3c$var$hasBrowserCrypto;
module.exports.fromArrayBufferToHex = $41b97d983dcedb3c$var$fromArrayBufferToHex;
var $70f098521931c045$exports = {};
$70f098521931c045$exports = new URL("crypto.98f0135a.js", "file:" + __filename).toString();


var $8b7f96aea7bebbc8$exports = {};
$8b7f96aea7bebbc8$exports = new URL("crypto.566be813.js", "file:" + __filename).toString();


function $41b97d983dcedb3c$var$createCrypto() {
    if ($41b97d983dcedb3c$var$hasBrowserCrypto()) return new $70f098521931c045$exports.BrowserCrypto();
    return new $8b7f96aea7bebbc8$exports.NodeCrypto();
}
function $41b97d983dcedb3c$var$hasBrowserCrypto() {
    return typeof window !== 'undefined' && typeof window.crypto !== 'undefined' && typeof window.crypto.subtle !== 'undefined';
}
/**
 * Converts an ArrayBuffer to a hexadecimal string.
 * @param arrayBuffer The ArrayBuffer to convert to hexadecimal string.
 * @return The hexadecimal encoding of the ArrayBuffer.
 */ function $41b97d983dcedb3c$var$fromArrayBufferToHex(arrayBuffer) {
    // Convert buffer to byte array.
    const byteArray = Array.from(new Uint8Array(arrayBuffer));
    // Convert bytes to hex string.
    return byteArray.map((byte)=>{
        return byte.toString(16).padStart(2, '0');
    }).join('');
}


