require("./native.01c5c7d7.js");
require("./rng.2083050d.js");
require("./stringify.0c9afb70.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $c035c2684c74263f$exports = {};
$c035c2684c74263f$exports = new URL("native.01c5c7d7.js", "file:" + __filename).toString();


var $769de6c135a70194$exports = {};
$769de6c135a70194$exports = new URL("rng.2083050d.js", "file:" + __filename).toString();


var $0704a95d61bb7497$exports = {};
$0704a95d61bb7497$exports = new URL("stringify.0c9afb70.js", "file:" + __filename).toString();


function $8c49f25ac948b4a2$var$v4(options, buf, offset) {
    if ((0, (/*@__PURE__*/$parcel$interopDefault($c035c2684c74263f$exports))).randomUUID && !buf && !options) return (0, (/*@__PURE__*/$parcel$interopDefault($c035c2684c74263f$exports))).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, (/*@__PURE__*/$parcel$interopDefault($769de6c135a70194$exports))))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, $0704a95d61bb7497$exports.unsafeStringify)(rnds);
}
var $8c49f25ac948b4a2$export$2e2bcd8739ae039 = $8c49f25ac948b4a2$var$v4;


//# sourceMappingURL=v4.9e1e4df8.js.map
