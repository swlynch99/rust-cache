var $6tLVR$nodeutil = require("node:util");
var $6tLVR$nodestream = require("node:stream");

'use strict';

var $e6cd37bbc276a1c4$require$inherits = $6tLVR$nodeutil.inherits;

var $e6cd37bbc276a1c4$require$ReadableStream = $6tLVR$nodestream.Readable;
function $e6cd37bbc276a1c4$var$PartStream(opts) {
    $e6cd37bbc276a1c4$require$ReadableStream.call(this, opts);
}
$e6cd37bbc276a1c4$require$inherits($e6cd37bbc276a1c4$var$PartStream, $e6cd37bbc276a1c4$require$ReadableStream);
$e6cd37bbc276a1c4$var$PartStream.prototype._read = function(n) {};
module.exports = $e6cd37bbc276a1c4$var$PartStream;


//# sourceMappingURL=PartStream.38a8539c.js.map
