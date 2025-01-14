var $f1Zrw$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $0a063ba41c474972$var$sha1(bytes) {
    if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
    else if (typeof bytes === 'string') bytes = Buffer.from(bytes, 'utf8');
    return (0, ($parcel$interopDefault($f1Zrw$crypto))).createHash('sha1').update(bytes).digest();
}
var $0a063ba41c474972$export$2e2bcd8739ae039 = $0a063ba41c474972$var$sha1;


//# sourceMappingURL=sha1.e21d5d84.js.map
