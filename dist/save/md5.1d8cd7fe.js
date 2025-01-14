var $bS3EZ$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $635760c503f3e51c$var$md5(bytes) {
    if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
    else if (typeof bytes === 'string') bytes = Buffer.from(bytes, 'utf8');
    return (0, ($parcel$interopDefault($bS3EZ$crypto))).createHash('md5').update(bytes).digest();
}
var $635760c503f3e51c$export$2e2bcd8739ae039 = $635760c503f3e51c$var$md5;


