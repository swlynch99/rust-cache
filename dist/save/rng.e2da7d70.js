var $6ndFA$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $a2130b23cc5013b7$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $a2130b23cc5013b7$var$poolPtr = $a2130b23cc5013b7$var$rnds8Pool.length;
function $a2130b23cc5013b7$export$2e2bcd8739ae039() {
    if ($a2130b23cc5013b7$var$poolPtr > $a2130b23cc5013b7$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($6ndFA$crypto))).randomFillSync($a2130b23cc5013b7$var$rnds8Pool);
        $a2130b23cc5013b7$var$poolPtr = 0;
    }
    return $a2130b23cc5013b7$var$rnds8Pool.slice($a2130b23cc5013b7$var$poolPtr, $a2130b23cc5013b7$var$poolPtr += 16);
}


