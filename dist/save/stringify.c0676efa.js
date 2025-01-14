require("./validate.820525cd.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $ef93de5da5f4fb86$exports = {};
$ef93de5da5f4fb86$exports = new URL("validate.820525cd.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $ea5365da8bf2e6dc$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$ea5365da8bf2e6dc$var$byteToHex.push((i + 0x100).toString(16).slice(1));
function $ea5365da8bf2e6dc$export$8fb373d660548968(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 0]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 1]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 2]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 3]] + '-' + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 4]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 5]] + '-' + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 6]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 7]] + '-' + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 8]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 9]] + '-' + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 10]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 11]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 12]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 13]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 14]] + $ea5365da8bf2e6dc$var$byteToHex[arr[offset + 15]];
}
function $ea5365da8bf2e6dc$var$stringify(arr, offset = 0) {
    const uuid = $ea5365da8bf2e6dc$export$8fb373d660548968(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($ef93de5da5f4fb86$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $ea5365da8bf2e6dc$export$2e2bcd8739ae039 = $ea5365da8bf2e6dc$var$stringify;


