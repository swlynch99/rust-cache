var $1poAe$buffer = require("buffer");

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ 
var $fcc1b1eab6707314$var$Buffer = $1poAe$buffer.Buffer;
// alternative to using Object.keys for old browsers
function $fcc1b1eab6707314$var$copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if ($fcc1b1eab6707314$var$Buffer.from && $fcc1b1eab6707314$var$Buffer.alloc && $fcc1b1eab6707314$var$Buffer.allocUnsafe && $fcc1b1eab6707314$var$Buffer.allocUnsafeSlow) module.exports = $1poAe$buffer;
else {
    // Copy properties from require('buffer')
    $fcc1b1eab6707314$var$copyProps($1poAe$buffer, module.exports);
    module.exports.Buffer = $fcc1b1eab6707314$var$SafeBuffer;
}
function $fcc1b1eab6707314$var$SafeBuffer(arg, encodingOrOffset, length) {
    return $fcc1b1eab6707314$var$Buffer(arg, encodingOrOffset, length);
}
$fcc1b1eab6707314$var$SafeBuffer.prototype = Object.create($fcc1b1eab6707314$var$Buffer.prototype);
// Copy static methods from Buffer
$fcc1b1eab6707314$var$copyProps($fcc1b1eab6707314$var$Buffer, $fcc1b1eab6707314$var$SafeBuffer);
$fcc1b1eab6707314$var$SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return $fcc1b1eab6707314$var$Buffer(arg, encodingOrOffset, length);
};
$fcc1b1eab6707314$var$SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = $fcc1b1eab6707314$var$Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
$fcc1b1eab6707314$var$SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $fcc1b1eab6707314$var$Buffer(size);
};
$fcc1b1eab6707314$var$SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $1poAe$buffer.SlowBuffer(size);
};


