require("./safe-buffer.7506ac22.js");
require("./param-bytes-for-alg.c8f5d509.js");

'use strict';
var $33458548f80ec441$exports = {};
$33458548f80ec441$exports = new URL("safe-buffer.7506ac22.js", "file:" + __filename).toString();


var $05798835ade65954$require$Buffer = $33458548f80ec441$exports.Buffer;
var $77c51a1a78da4117$exports = {};
$77c51a1a78da4117$exports = new URL("param-bytes-for-alg.c8f5d509.js", "file:" + __filename).toString();


var $05798835ade65954$var$MAX_OCTET = 0x80, $05798835ade65954$var$CLASS_UNIVERSAL = 0, $05798835ade65954$var$PRIMITIVE_BIT = 0x20, $05798835ade65954$var$TAG_SEQ = 0x10, $05798835ade65954$var$TAG_INT = 0x02, $05798835ade65954$var$ENCODED_TAG_SEQ = $05798835ade65954$var$TAG_SEQ | $05798835ade65954$var$PRIMITIVE_BIT | $05798835ade65954$var$CLASS_UNIVERSAL << 6, $05798835ade65954$var$ENCODED_TAG_INT = $05798835ade65954$var$TAG_INT | $05798835ade65954$var$CLASS_UNIVERSAL << 6;
function $05798835ade65954$var$base64Url(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $05798835ade65954$var$signatureAsBuffer(signature) {
    if ($05798835ade65954$require$Buffer.isBuffer(signature)) return signature;
    else if ('string' === typeof signature) return $05798835ade65954$require$Buffer.from(signature, 'base64');
    throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function $05798835ade65954$var$derToJose(signature, alg) {
    signature = $05798835ade65954$var$signatureAsBuffer(signature);
    var paramBytes = $77c51a1a78da4117$exports(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== $05798835ade65954$var$ENCODED_TAG_SEQ) throw new Error('Could not find expected "seq"');
    var seqLength = signature[offset++];
    if (seqLength === ($05798835ade65954$var$MAX_OCTET | 1)) seqLength = signature[offset++];
    if (inputLength - offset < seqLength) throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    if (signature[offset++] !== $05798835ade65954$var$ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "r"');
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    if (maxEncodedParamLength < rLength) throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== $05798835ade65954$var$ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "s"');
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    if (maxEncodedParamLength < sLength) throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = $05798835ade65954$require$Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset)dst[offset] = 0;
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for(var o = offset; offset < o + sPadding; ++offset)dst[offset] = 0;
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString('base64');
    dst = $05798835ade65954$var$base64Url(dst);
    return dst;
}
function $05798835ade65954$var$countPadding(buf, start, stop) {
    var padding = 0;
    while(start + padding < stop && buf[start + padding] === 0)++padding;
    var needsSign = buf[start + padding] >= $05798835ade65954$var$MAX_OCTET;
    if (needsSign) --padding;
    return padding;
}
function $05798835ade65954$var$joseToDer(signature, alg) {
    signature = $05798835ade65954$var$signatureAsBuffer(signature);
    var paramBytes = $77c51a1a78da4117$exports(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    var rPadding = $05798835ade65954$var$countPadding(signature, 0, paramBytes);
    var sPadding = $05798835ade65954$var$countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 2 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < $05798835ade65954$var$MAX_OCTET;
    var dst = $05798835ade65954$require$Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = $05798835ade65954$var$ENCODED_TAG_SEQ;
    if (shortLength) // Bit 8 has value "0"
    // bits 7-1 give the length.
    dst[offset++] = rsBytes;
    else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = $05798835ade65954$var$MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = $05798835ade65954$var$ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
    } else offset += signature.copy(dst, offset, rPadding, paramBytes);
    dst[offset++] = $05798835ade65954$var$ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
    } else signature.copy(dst, offset, paramBytes + sPadding);
    return dst;
}
module.exports = {
    derToJose: $05798835ade65954$var$derToJose,
    joseToDer: $05798835ade65954$var$joseToDer
};


//# sourceMappingURL=ecdsa-sig-formatter.1acc6ad0.js.map
