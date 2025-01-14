var $aXLFA$buffer = require("buffer");

/*jshint node:true */ 'use strict';

var $dc9a4a0c795e27a1$require$Buffer = $aXLFA$buffer.Buffer;

var $dc9a4a0c795e27a1$require$SlowBuffer = $aXLFA$buffer.SlowBuffer;
module.exports = $dc9a4a0c795e27a1$var$bufferEq;
function $dc9a4a0c795e27a1$var$bufferEq(a, b) {
    // shortcutting on type is necessary for correctness
    if (!$dc9a4a0c795e27a1$require$Buffer.isBuffer(a) || !$dc9a4a0c795e27a1$require$Buffer.isBuffer(b)) return false;
    // buffer sizes should be well-known information, so despite this
    // shortcutting, it doesn't leak any information about the *contents* of the
    // buffers.
    if (a.length !== b.length) return false;
    var c = 0;
    for(var i = 0; i < a.length; i++)/*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR
    return c === 0;
}
$dc9a4a0c795e27a1$var$bufferEq.install = function() {
    $dc9a4a0c795e27a1$require$Buffer.prototype.equal = $dc9a4a0c795e27a1$require$SlowBuffer.prototype.equal = function equal(that) {
        return $dc9a4a0c795e27a1$var$bufferEq(this, that);
    };
};
var $dc9a4a0c795e27a1$var$origBufEqual = $dc9a4a0c795e27a1$require$Buffer.prototype.equal;
var $dc9a4a0c795e27a1$var$origSlowBufEqual = $dc9a4a0c795e27a1$require$SlowBuffer.prototype.equal;
$dc9a4a0c795e27a1$var$bufferEq.restore = function() {
    $dc9a4a0c795e27a1$require$Buffer.prototype.equal = $dc9a4a0c795e27a1$var$origBufEqual;
    $dc9a4a0c795e27a1$require$SlowBuffer.prototype.equal = $dc9a4a0c795e27a1$var$origSlowBufEqual;
};


