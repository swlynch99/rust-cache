var $9SsZe$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $0bf575a1f8793677$var$sha1(bytes) {
    if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
    else if (typeof bytes === 'string') bytes = Buffer.from(bytes, 'utf8');
    return (0, ($parcel$interopDefault($9SsZe$crypto))).createHash('sha1').update(bytes).digest();
}
var $0bf575a1f8793677$export$2e2bcd8739ae039 = $0bf575a1f8793677$var$sha1;


