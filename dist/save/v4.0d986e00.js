require("./native.53195813.js");
require("./rng.31aedf6c.js");
require("./stringify.f5b4146f.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $b48aa05d515ebf77$exports = {};
$b48aa05d515ebf77$exports = new URL("native.53195813.js", "file:" + __filename).toString();


var $14fdc42f24dc8218$exports = {};
$14fdc42f24dc8218$exports = new URL("rng.31aedf6c.js", "file:" + __filename).toString();


var $92016640868032d6$exports = {};
$92016640868032d6$exports = new URL("stringify.f5b4146f.js", "file:" + __filename).toString();


function $40f68e14568d4dc2$var$v4(options, buf, offset) {
    if ((0, (/*@__PURE__*/$parcel$interopDefault($b48aa05d515ebf77$exports))).randomUUID && !buf && !options) return (0, (/*@__PURE__*/$parcel$interopDefault($b48aa05d515ebf77$exports))).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, (/*@__PURE__*/$parcel$interopDefault($14fdc42f24dc8218$exports))))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, $92016640868032d6$exports.unsafeStringify)(rnds);
}
var $40f68e14568d4dc2$export$2e2bcd8739ae039 = $40f68e14568d4dc2$var$v4;


//# sourceMappingURL=v4.0d986e00.js.map
