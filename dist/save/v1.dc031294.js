require("./rng.82f5f284.js");
require("./bytesToUuid.57a6be85.js");

var $cf8b5526660892f2$exports = {};
$cf8b5526660892f2$exports = new URL("rng.82f5f284.js", "file:" + __filename).toString();


var $43d35e5dd2460b89$exports = {};
$43d35e5dd2460b89$exports = new URL("bytesToUuid.57a6be85.js", "file:" + __filename).toString();


// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var $4aded17541e36958$var$_nodeId;
var $4aded17541e36958$var$_clockseq;
// Previous uuid creation time
var $4aded17541e36958$var$_lastMSecs = 0;
var $4aded17541e36958$var$_lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function $4aded17541e36958$var$v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {};
    var node = options.node || $4aded17541e36958$var$_nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : $4aded17541e36958$var$_clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = $cf8b5526660892f2$exports();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = $4aded17541e36958$var$_nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = $4aded17541e36958$var$_clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : $4aded17541e36958$var$_lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - $4aded17541e36958$var$_lastMSecs + (nsecs - $4aded17541e36958$var$_lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > $4aded17541e36958$var$_lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    $4aded17541e36958$var$_lastMSecs = msecs;
    $4aded17541e36958$var$_lastNSecs = nsecs;
    $4aded17541e36958$var$_clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf ? buf : $43d35e5dd2460b89$exports(b);
}
module.exports = $4aded17541e36958$var$v1;


//# sourceMappingURL=v1.dc031294.js.map
