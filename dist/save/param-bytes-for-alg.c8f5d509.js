'use strict';
function $9502e75596aaf5b4$var$getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
}
var $9502e75596aaf5b4$var$paramBytesForAlg = {
    ES256: $9502e75596aaf5b4$var$getParamSize(256),
    ES384: $9502e75596aaf5b4$var$getParamSize(384),
    ES512: $9502e75596aaf5b4$var$getParamSize(521)
};
function $9502e75596aaf5b4$var$getParamBytesForAlg(alg) {
    var paramBytes = $9502e75596aaf5b4$var$paramBytesForAlg[alg];
    if (paramBytes) return paramBytes;
    throw new Error('Unknown algorithm "' + alg + '"');
}
module.exports = $9502e75596aaf5b4$var$getParamBytesForAlg;


//# sourceMappingURL=param-bytes-for-alg.c8f5d509.js.map
