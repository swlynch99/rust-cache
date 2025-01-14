require("./stubs.36ad7dcd.js");

'use strict';
var $98c504fbec53802b$exports = {};
$98c504fbec53802b$exports = new URL("stubs.36ad7dcd.js", "file:" + __filename).toString();


/*
 * StreamEvents can be used 2 ways:
 *
 * 1:
 * function MyStream() {
 *   require('stream-events').call(this)
 * }
 *
 * 2:
 * require('stream-events')(myStream)
 */ function $f02c9423f5e12123$var$StreamEvents(stream) {
    stream = stream || this;
    var cfg = {
        callthrough: true,
        calls: 1
    };
    $98c504fbec53802b$exports(stream, '_read', cfg, stream.emit.bind(stream, 'reading'));
    $98c504fbec53802b$exports(stream, '_write', cfg, stream.emit.bind(stream, 'writing'));
    return stream;
}
module.exports = $f02c9423f5e12123$var$StreamEvents;


//# sourceMappingURL=stream-events.782cbdf7.js.map
