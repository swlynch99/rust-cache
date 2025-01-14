var $hCcGf$buffer = require("buffer");

/*jshint node:true */ 'use strict';

var $82e9ab2fa25f01cf$require$Buffer = $hCcGf$buffer.Buffer;

var $82e9ab2fa25f01cf$require$SlowBuffer = $hCcGf$buffer.SlowBuffer;
module.exports = $82e9ab2fa25f01cf$var$bufferEq;
function $82e9ab2fa25f01cf$var$bufferEq(a, b) {
    // shortcutting on type is necessary for correctness
    if (!$82e9ab2fa25f01cf$require$Buffer.isBuffer(a) || !$82e9ab2fa25f01cf$require$Buffer.isBuffer(b)) return false;
    // buffer sizes should be well-known information, so despite this
    // shortcutting, it doesn't leak any information about the *contents* of the
    // buffers.
    if (a.length !== b.length) return false;
    var c = 0;
    for(var i = 0; i < a.length; i++)/*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR
    return c === 0;
}
$82e9ab2fa25f01cf$var$bufferEq.install = function() {
    $82e9ab2fa25f01cf$require$Buffer.prototype.equal = $82e9ab2fa25f01cf$require$SlowBuffer.prototype.equal = function equal(that) {
        return $82e9ab2fa25f01cf$var$bufferEq(this, that);
    };
};
var $82e9ab2fa25f01cf$var$origBufEqual = $82e9ab2fa25f01cf$require$Buffer.prototype.equal;
var $82e9ab2fa25f01cf$var$origSlowBufEqual = $82e9ab2fa25f01cf$require$SlowBuffer.prototype.equal;
$82e9ab2fa25f01cf$var$bufferEq.restore = function() {
    $82e9ab2fa25f01cf$require$Buffer.prototype.equal = $82e9ab2fa25f01cf$var$origBufEqual;
    $82e9ab2fa25f01cf$require$SlowBuffer.prototype.equal = $82e9ab2fa25f01cf$var$origSlowBufEqual;
};


//# sourceMappingURL=buffer-equal-constant-time.71f4431b.js.map
