var $6GMzl$nodeutil = require("node:util");
var $6GMzl$nodestream = require("node:stream");

'use strict';

var $ebadd3ae25a49cb2$require$inherits = $6GMzl$nodeutil.inherits;

var $ebadd3ae25a49cb2$require$ReadableStream = $6GMzl$nodestream.Readable;
function $ebadd3ae25a49cb2$var$PartStream(opts) {
    $ebadd3ae25a49cb2$require$ReadableStream.call(this, opts);
}
$ebadd3ae25a49cb2$require$inherits($ebadd3ae25a49cb2$var$PartStream, $ebadd3ae25a49cb2$require$ReadableStream);
$ebadd3ae25a49cb2$var$PartStream.prototype._read = function(n) {};
module.exports = $ebadd3ae25a49cb2$var$PartStream;


