require("./validate.681ab9f3.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $e3c86a1095457403$exports = {};
$e3c86a1095457403$exports = new URL("validate.681ab9f3.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $8156112c357c0b13$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$8156112c357c0b13$var$byteToHex.push((i + 0x100).toString(16).substr(1));
function $8156112c357c0b13$var$stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = ($8156112c357c0b13$var$byteToHex[arr[offset + 0]] + $8156112c357c0b13$var$byteToHex[arr[offset + 1]] + $8156112c357c0b13$var$byteToHex[arr[offset + 2]] + $8156112c357c0b13$var$byteToHex[arr[offset + 3]] + '-' + $8156112c357c0b13$var$byteToHex[arr[offset + 4]] + $8156112c357c0b13$var$byteToHex[arr[offset + 5]] + '-' + $8156112c357c0b13$var$byteToHex[arr[offset + 6]] + $8156112c357c0b13$var$byteToHex[arr[offset + 7]] + '-' + $8156112c357c0b13$var$byteToHex[arr[offset + 8]] + $8156112c357c0b13$var$byteToHex[arr[offset + 9]] + '-' + $8156112c357c0b13$var$byteToHex[arr[offset + 10]] + $8156112c357c0b13$var$byteToHex[arr[offset + 11]] + $8156112c357c0b13$var$byteToHex[arr[offset + 12]] + $8156112c357c0b13$var$byteToHex[arr[offset + 13]] + $8156112c357c0b13$var$byteToHex[arr[offset + 14]] + $8156112c357c0b13$var$byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($e3c86a1095457403$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $8156112c357c0b13$export$2e2bcd8739ae039 = $8156112c357c0b13$var$stringify;


//# sourceMappingURL=stringify.124d8bf0.js.map
