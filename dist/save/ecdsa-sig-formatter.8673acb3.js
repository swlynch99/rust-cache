require("./safe-buffer.6230cde1.js");
require("./param-bytes-for-alg.f075ae1f.js");

'use strict';
var $c39f0d838c20d3f6$exports = {};
$c39f0d838c20d3f6$exports = new URL("safe-buffer.6230cde1.js", "file:" + __filename).toString();


var $08eeef5ba0f02a5a$require$Buffer = $c39f0d838c20d3f6$exports.Buffer;
var $4d988642a6a983c2$exports = {};
$4d988642a6a983c2$exports = new URL("param-bytes-for-alg.f075ae1f.js", "file:" + __filename).toString();


var $08eeef5ba0f02a5a$var$MAX_OCTET = 0x80, $08eeef5ba0f02a5a$var$CLASS_UNIVERSAL = 0, $08eeef5ba0f02a5a$var$PRIMITIVE_BIT = 0x20, $08eeef5ba0f02a5a$var$TAG_SEQ = 0x10, $08eeef5ba0f02a5a$var$TAG_INT = 0x02, $08eeef5ba0f02a5a$var$ENCODED_TAG_SEQ = $08eeef5ba0f02a5a$var$TAG_SEQ | $08eeef5ba0f02a5a$var$PRIMITIVE_BIT | $08eeef5ba0f02a5a$var$CLASS_UNIVERSAL << 6, $08eeef5ba0f02a5a$var$ENCODED_TAG_INT = $08eeef5ba0f02a5a$var$TAG_INT | $08eeef5ba0f02a5a$var$CLASS_UNIVERSAL << 6;
function $08eeef5ba0f02a5a$var$base64Url(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $08eeef5ba0f02a5a$var$signatureAsBuffer(signature) {
    if ($08eeef5ba0f02a5a$require$Buffer.isBuffer(signature)) return signature;
    else if ('string' === typeof signature) return $08eeef5ba0f02a5a$require$Buffer.from(signature, 'base64');
    throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function $08eeef5ba0f02a5a$var$derToJose(signature, alg) {
    signature = $08eeef5ba0f02a5a$var$signatureAsBuffer(signature);
    var paramBytes = $4d988642a6a983c2$exports(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== $08eeef5ba0f02a5a$var$ENCODED_TAG_SEQ) throw new Error('Could not find expected "seq"');
    var seqLength = signature[offset++];
    if (seqLength === ($08eeef5ba0f02a5a$var$MAX_OCTET | 1)) seqLength = signature[offset++];
    if (inputLength - offset < seqLength) throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    if (signature[offset++] !== $08eeef5ba0f02a5a$var$ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "r"');
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    if (maxEncodedParamLength < rLength) throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== $08eeef5ba0f02a5a$var$ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "s"');
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    if (maxEncodedParamLength < sLength) throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = $08eeef5ba0f02a5a$require$Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset)dst[offset] = 0;
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for(var o = offset; offset < o + sPadding; ++offset)dst[offset] = 0;
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString('base64');
    dst = $08eeef5ba0f02a5a$var$base64Url(dst);
    return dst;
}
function $08eeef5ba0f02a5a$var$countPadding(buf, start, stop) {
    var padding = 0;
    while(start + padding < stop && buf[start + padding] === 0)++padding;
    var needsSign = buf[start + padding] >= $08eeef5ba0f02a5a$var$MAX_OCTET;
    if (needsSign) --padding;
    return padding;
}
function $08eeef5ba0f02a5a$var$joseToDer(signature, alg) {
    signature = $08eeef5ba0f02a5a$var$signatureAsBuffer(signature);
    var paramBytes = $4d988642a6a983c2$exports(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    var rPadding = $08eeef5ba0f02a5a$var$countPadding(signature, 0, paramBytes);
    var sPadding = $08eeef5ba0f02a5a$var$countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 2 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < $08eeef5ba0f02a5a$var$MAX_OCTET;
    var dst = $08eeef5ba0f02a5a$require$Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = $08eeef5ba0f02a5a$var$ENCODED_TAG_SEQ;
    if (shortLength) // Bit 8 has value "0"
    // bits 7-1 give the length.
    dst[offset++] = rsBytes;
    else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = $08eeef5ba0f02a5a$var$MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = $08eeef5ba0f02a5a$var$ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
    } else offset += signature.copy(dst, offset, rPadding, paramBytes);
    dst[offset++] = $08eeef5ba0f02a5a$var$ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
    } else signature.copy(dst, offset, paramBytes + sPadding);
    return dst;
}
module.exports = {
    derToJose: $08eeef5ba0f02a5a$var$derToJose,
    joseToDer: $08eeef5ba0f02a5a$var$joseToDer
};


