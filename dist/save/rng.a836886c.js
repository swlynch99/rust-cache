var $8DYHe$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $19c4d4e0de09a169$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $19c4d4e0de09a169$var$poolPtr = $19c4d4e0de09a169$var$rnds8Pool.length;
function $19c4d4e0de09a169$export$2e2bcd8739ae039() {
    if ($19c4d4e0de09a169$var$poolPtr > $19c4d4e0de09a169$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($8DYHe$crypto))).randomFillSync($19c4d4e0de09a169$var$rnds8Pool);
        $19c4d4e0de09a169$var$poolPtr = 0;
    }
    return $19c4d4e0de09a169$var$rnds8Pool.slice($19c4d4e0de09a169$var$poolPtr, $19c4d4e0de09a169$var$poolPtr += 16);
}


//# sourceMappingURL=rng.a836886c.js.map
