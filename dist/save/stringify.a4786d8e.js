require("./validate.b44fb1d1.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $0128bf770847fd4a$exports = {};
$0128bf770847fd4a$exports = new URL("validate.b44fb1d1.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $9bca3d42a7792783$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$9bca3d42a7792783$var$byteToHex.push((i + 0x100).toString(16).slice(1));
function $9bca3d42a7792783$export$8fb373d660548968(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return $9bca3d42a7792783$var$byteToHex[arr[offset + 0]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 1]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 2]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 3]] + '-' + $9bca3d42a7792783$var$byteToHex[arr[offset + 4]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 5]] + '-' + $9bca3d42a7792783$var$byteToHex[arr[offset + 6]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 7]] + '-' + $9bca3d42a7792783$var$byteToHex[arr[offset + 8]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 9]] + '-' + $9bca3d42a7792783$var$byteToHex[arr[offset + 10]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 11]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 12]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 13]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 14]] + $9bca3d42a7792783$var$byteToHex[arr[offset + 15]];
}
function $9bca3d42a7792783$var$stringify(arr, offset = 0) {
    const uuid = $9bca3d42a7792783$export$8fb373d660548968(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($0128bf770847fd4a$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $9bca3d42a7792783$export$2e2bcd8739ae039 = $9bca3d42a7792783$var$stringify;


