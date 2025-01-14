var $3b69e3079df5e0b3$export$a48f0734ac7c2329;
var $3b69e3079df5e0b3$export$d622b2ad8d90c771;
var $3b69e3079df5e0b3$export$6100ba28696e12de;
'use strict';
$3b69e3079df5e0b3$export$a48f0734ac7c2329 = $3b69e3079df5e0b3$var$byteLength;
$3b69e3079df5e0b3$export$d622b2ad8d90c771 = $3b69e3079df5e0b3$var$toByteArray;
$3b69e3079df5e0b3$export$6100ba28696e12de = $3b69e3079df5e0b3$var$fromByteArray;
var $3b69e3079df5e0b3$var$lookup = [];
var $3b69e3079df5e0b3$var$revLookup = [];
var $3b69e3079df5e0b3$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $3b69e3079df5e0b3$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $3b69e3079df5e0b3$var$i = 0, $3b69e3079df5e0b3$var$len = $3b69e3079df5e0b3$var$code.length; $3b69e3079df5e0b3$var$i < $3b69e3079df5e0b3$var$len; ++$3b69e3079df5e0b3$var$i){
    $3b69e3079df5e0b3$var$lookup[$3b69e3079df5e0b3$var$i] = $3b69e3079df5e0b3$var$code[$3b69e3079df5e0b3$var$i];
    $3b69e3079df5e0b3$var$revLookup[$3b69e3079df5e0b3$var$code.charCodeAt($3b69e3079df5e0b3$var$i)] = $3b69e3079df5e0b3$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$3b69e3079df5e0b3$var$revLookup['-'.charCodeAt(0)] = 62;
$3b69e3079df5e0b3$var$revLookup['_'.charCodeAt(0)] = 63;
function $3b69e3079df5e0b3$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $3b69e3079df5e0b3$var$byteLength(b64) {
    var lens = $3b69e3079df5e0b3$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $3b69e3079df5e0b3$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $3b69e3079df5e0b3$var$toByteArray(b64) {
    var tmp;
    var lens = $3b69e3079df5e0b3$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $3b69e3079df5e0b3$var$Arr($3b69e3079df5e0b3$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i)] << 18 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i)] << 2 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i)] << 10 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $3b69e3079df5e0b3$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function $3b69e3079df5e0b3$var$tripletToBase64(num) {
    return $3b69e3079df5e0b3$var$lookup[num >> 18 & 0x3F] + $3b69e3079df5e0b3$var$lookup[num >> 12 & 0x3F] + $3b69e3079df5e0b3$var$lookup[num >> 6 & 0x3F] + $3b69e3079df5e0b3$var$lookup[num & 0x3F];
}
function $3b69e3079df5e0b3$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push($3b69e3079df5e0b3$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $3b69e3079df5e0b3$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($3b69e3079df5e0b3$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($3b69e3079df5e0b3$var$lookup[tmp >> 2] + $3b69e3079df5e0b3$var$lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($3b69e3079df5e0b3$var$lookup[tmp >> 10] + $3b69e3079df5e0b3$var$lookup[tmp >> 4 & 0x3F] + $3b69e3079df5e0b3$var$lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}


//# sourceMappingURL=base64-js.d5ee3164.js.map
