require("./native.355f7b66.js");
require("./rng.e2da7d70.js");
require("./stringify.c0676efa.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $285362e45514a193$exports = {};
$285362e45514a193$exports = new URL("native.355f7b66.js", "file:" + __filename).toString();


var $d355f18087e84a35$exports = {};
$d355f18087e84a35$exports = new URL("rng.e2da7d70.js", "file:" + __filename).toString();


var $75243d47cb79d8a5$exports = {};
$75243d47cb79d8a5$exports = new URL("stringify.c0676efa.js", "file:" + __filename).toString();


function $5d49099aff9b7f8e$var$v4(options, buf, offset) {
    if ((0, (/*@__PURE__*/$parcel$interopDefault($285362e45514a193$exports))).randomUUID && !buf && !options) return (0, (/*@__PURE__*/$parcel$interopDefault($285362e45514a193$exports))).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, (/*@__PURE__*/$parcel$interopDefault($d355f18087e84a35$exports))))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, $75243d47cb79d8a5$exports.unsafeStringify)(rnds);
}
var $5d49099aff9b7f8e$export$2e2bcd8739ae039 = $5d49099aff9b7f8e$var$v4;


