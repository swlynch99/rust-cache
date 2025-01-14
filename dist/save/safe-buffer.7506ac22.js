var $bRUal$buffer = require("buffer");

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ 
var $b663ead9d6ce88bc$var$Buffer = $bRUal$buffer.Buffer;
// alternative to using Object.keys for old browsers
function $b663ead9d6ce88bc$var$copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if ($b663ead9d6ce88bc$var$Buffer.from && $b663ead9d6ce88bc$var$Buffer.alloc && $b663ead9d6ce88bc$var$Buffer.allocUnsafe && $b663ead9d6ce88bc$var$Buffer.allocUnsafeSlow) module.exports = $bRUal$buffer;
else {
    // Copy properties from require('buffer')
    $b663ead9d6ce88bc$var$copyProps($bRUal$buffer, module.exports);
    module.exports.Buffer = $b663ead9d6ce88bc$var$SafeBuffer;
}
function $b663ead9d6ce88bc$var$SafeBuffer(arg, encodingOrOffset, length) {
    return $b663ead9d6ce88bc$var$Buffer(arg, encodingOrOffset, length);
}
$b663ead9d6ce88bc$var$SafeBuffer.prototype = Object.create($b663ead9d6ce88bc$var$Buffer.prototype);
// Copy static methods from Buffer
$b663ead9d6ce88bc$var$copyProps($b663ead9d6ce88bc$var$Buffer, $b663ead9d6ce88bc$var$SafeBuffer);
$b663ead9d6ce88bc$var$SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return $b663ead9d6ce88bc$var$Buffer(arg, encodingOrOffset, length);
};
$b663ead9d6ce88bc$var$SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = $b663ead9d6ce88bc$var$Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
$b663ead9d6ce88bc$var$SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $b663ead9d6ce88bc$var$Buffer(size);
};
$b663ead9d6ce88bc$var$SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return $bRUal$buffer.SlowBuffer(size);
};


//# sourceMappingURL=safe-buffer.7506ac22.js.map
