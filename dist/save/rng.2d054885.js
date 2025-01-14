var $53Yxu$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $49b3b6b8721bcffd$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $49b3b6b8721bcffd$var$poolPtr = $49b3b6b8721bcffd$var$rnds8Pool.length;
function $49b3b6b8721bcffd$export$2e2bcd8739ae039() {
    if ($49b3b6b8721bcffd$var$poolPtr > $49b3b6b8721bcffd$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($53Yxu$crypto))).randomFillSync($49b3b6b8721bcffd$var$rnds8Pool);
        $49b3b6b8721bcffd$var$poolPtr = 0;
    }
    return $49b3b6b8721bcffd$var$rnds8Pool.slice($49b3b6b8721bcffd$var$poolPtr, $49b3b6b8721bcffd$var$poolPtr += 16);
}


