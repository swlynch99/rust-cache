require("./stubs.54eefea5.js");

'use strict';
var $888f744cdc5725a8$exports = {};
$888f744cdc5725a8$exports = new URL("stubs.54eefea5.js", "file:" + __filename).toString();


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
 */ function $b2dbf8287587e36d$var$StreamEvents(stream) {
    stream = stream || this;
    var cfg = {
        callthrough: true,
        calls: 1
    };
    $888f744cdc5725a8$exports(stream, '_read', cfg, stream.emit.bind(stream, 'reading'));
    $888f744cdc5725a8$exports(stream, '_write', cfg, stream.emit.bind(stream, 'writing'));
    return stream;
}
module.exports = $b2dbf8287587e36d$var$StreamEvents;


