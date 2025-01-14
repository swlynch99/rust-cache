require("./validate.5f8c92ef.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $b9bb4fc89c3ffae7$exports = {};
$b9bb4fc89c3ffae7$exports = new URL("validate.5f8c92ef.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $98c2e6783cc19341$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$98c2e6783cc19341$var$byteToHex.push((i + 0x100).toString(16).slice(1));
function $98c2e6783cc19341$export$8fb373d660548968(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return $98c2e6783cc19341$var$byteToHex[arr[offset + 0]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 1]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 2]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 3]] + '-' + $98c2e6783cc19341$var$byteToHex[arr[offset + 4]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 5]] + '-' + $98c2e6783cc19341$var$byteToHex[arr[offset + 6]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 7]] + '-' + $98c2e6783cc19341$var$byteToHex[arr[offset + 8]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 9]] + '-' + $98c2e6783cc19341$var$byteToHex[arr[offset + 10]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 11]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 12]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 13]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 14]] + $98c2e6783cc19341$var$byteToHex[arr[offset + 15]];
}
function $98c2e6783cc19341$var$stringify(arr, offset = 0) {
    const uuid = $98c2e6783cc19341$export$8fb373d660548968(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($b9bb4fc89c3ffae7$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $98c2e6783cc19341$export$2e2bcd8739ae039 = $98c2e6783cc19341$var$stringify;


//# sourceMappingURL=stringify.f5b4146f.js.map
