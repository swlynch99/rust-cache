require("./validate.aeed857c.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $cbda3b2088698233$exports = {};
$cbda3b2088698233$exports = new URL("validate.aeed857c.js", "file:" + __filename).toString();


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const $63c5a8ecb56356cc$var$byteToHex = [];
for(let i = 0; i < 256; ++i)$63c5a8ecb56356cc$var$byteToHex.push((i + 0x100).toString(16).slice(1));
function $63c5a8ecb56356cc$export$8fb373d660548968(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return $63c5a8ecb56356cc$var$byteToHex[arr[offset + 0]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 1]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 2]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 3]] + '-' + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 4]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 5]] + '-' + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 6]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 7]] + '-' + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 8]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 9]] + '-' + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 10]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 11]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 12]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 13]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 14]] + $63c5a8ecb56356cc$var$byteToHex[arr[offset + 15]];
}
function $63c5a8ecb56356cc$var$stringify(arr, offset = 0) {
    const uuid = $63c5a8ecb56356cc$export$8fb373d660548968(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, (/*@__PURE__*/$parcel$interopDefault($cbda3b2088698233$exports)))(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $63c5a8ecb56356cc$export$2e2bcd8739ae039 = $63c5a8ecb56356cc$var$stringify;


//# sourceMappingURL=stringify.0c9afb70.js.map
