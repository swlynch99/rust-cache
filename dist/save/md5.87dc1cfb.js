var $birRo$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $1cdee554584b3445$var$md5(bytes) {
    if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
    else if (typeof bytes === 'string') bytes = Buffer.from(bytes, 'utf8');
    return (0, ($parcel$interopDefault($birRo$crypto))).createHash('md5').update(bytes).digest();
}
var $1cdee554584b3445$export$2e2bcd8739ae039 = $1cdee554584b3445$var$md5;


//# sourceMappingURL=md5.87dc1cfb.js.map
