var $cvSUX$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $e1a8eb4384daa4ae$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $e1a8eb4384daa4ae$var$poolPtr = $e1a8eb4384daa4ae$var$rnds8Pool.length;
function $e1a8eb4384daa4ae$export$2e2bcd8739ae039() {
    if ($e1a8eb4384daa4ae$var$poolPtr > $e1a8eb4384daa4ae$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($cvSUX$crypto))).randomFillSync($e1a8eb4384daa4ae$var$rnds8Pool);
        $e1a8eb4384daa4ae$var$poolPtr = 0;
    }
    return $e1a8eb4384daa4ae$var$rnds8Pool.slice($e1a8eb4384daa4ae$var$poolPtr, $e1a8eb4384daa4ae$var$poolPtr += 16);
}


//# sourceMappingURL=rng.31aedf6c.js.map
