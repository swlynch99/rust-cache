var $dRRm8$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $ea973b92537492e6$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $ea973b92537492e6$var$poolPtr = $ea973b92537492e6$var$rnds8Pool.length;
function $ea973b92537492e6$export$2e2bcd8739ae039() {
    if ($ea973b92537492e6$var$poolPtr > $ea973b92537492e6$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($dRRm8$crypto))).randomFillSync($ea973b92537492e6$var$rnds8Pool);
        $ea973b92537492e6$var$poolPtr = 0;
    }
    return $ea973b92537492e6$var$rnds8Pool.slice($ea973b92537492e6$var$poolPtr, $ea973b92537492e6$var$poolPtr += 16);
}


//# sourceMappingURL=rng.2083050d.js.map
