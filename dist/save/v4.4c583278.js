require("./native.48e3a0b9.js");
require("./rng.24be3dc6.js");
require("./stringify.a4786d8e.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $34a6cc34d3402270$exports = {};
$34a6cc34d3402270$exports = new URL("native.48e3a0b9.js", "file:" + __filename).toString();


var $fa1b4521628ffd6d$exports = {};
$fa1b4521628ffd6d$exports = new URL("rng.24be3dc6.js", "file:" + __filename).toString();


var $d9b2e304e69c4a04$exports = {};
$d9b2e304e69c4a04$exports = new URL("stringify.a4786d8e.js", "file:" + __filename).toString();


function $04e02f1c85f6eb51$var$v4(options, buf, offset) {
    if ((0, (/*@__PURE__*/$parcel$interopDefault($34a6cc34d3402270$exports))).randomUUID && !buf && !options) return (0, (/*@__PURE__*/$parcel$interopDefault($34a6cc34d3402270$exports))).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, (/*@__PURE__*/$parcel$interopDefault($fa1b4521628ffd6d$exports))))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, $d9b2e304e69c4a04$exports.unsafeStringify)(rnds);
}
var $04e02f1c85f6eb51$export$2e2bcd8739ae039 = $04e02f1c85f6eb51$var$v4;


