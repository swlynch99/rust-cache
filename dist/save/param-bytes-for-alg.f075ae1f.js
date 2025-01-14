'use strict';
function $7598d7d7f24f25bd$var$getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
}
var $7598d7d7f24f25bd$var$paramBytesForAlg = {
    ES256: $7598d7d7f24f25bd$var$getParamSize(256),
    ES384: $7598d7d7f24f25bd$var$getParamSize(384),
    ES512: $7598d7d7f24f25bd$var$getParamSize(521)
};
function $7598d7d7f24f25bd$var$getParamBytesForAlg(alg) {
    var paramBytes = $7598d7d7f24f25bd$var$paramBytesForAlg[alg];
    if (paramBytes) return paramBytes;
    throw new Error('Unknown algorithm "' + alg + '"');
}
module.exports = $7598d7d7f24f25bd$var$getParamBytesForAlg;


