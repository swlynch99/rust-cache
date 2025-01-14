require("./validate.30e97e6c.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $9947f849bddb52b5$exports = {};
$9947f849bddb52b5$exports = new URL("validate.30e97e6c.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $6d1996fe3dc48fc2$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$6d1996fe3dc48fc2$var$byteToHex.push((i + 0x100).toString(16).substr(1));
function $6d1996fe3dc48fc2$var$stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = ($6d1996fe3dc48fc2$var$byteToHex[arr[offset + 0]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 1]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 2]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 3]] + '-' + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 4]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 5]] + '-' + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 6]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 7]] + '-' + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 8]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 9]] + '-' + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 10]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 11]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 12]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 13]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 14]] + $6d1996fe3dc48fc2$var$byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($9947f849bddb52b5$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $6d1996fe3dc48fc2$export$2e2bcd8739ae039 = $6d1996fe3dc48fc2$var$stringify;


