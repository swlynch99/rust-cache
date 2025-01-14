var $93XCm$crypto = require("crypto");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $0294ed2c1260c64e$var$rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let $0294ed2c1260c64e$var$poolPtr = $0294ed2c1260c64e$var$rnds8Pool.length;
function $0294ed2c1260c64e$export$2e2bcd8739ae039() {
    if ($0294ed2c1260c64e$var$poolPtr > $0294ed2c1260c64e$var$rnds8Pool.length - 16) {
        (0, ($parcel$interopDefault($93XCm$crypto))).randomFillSync($0294ed2c1260c64e$var$rnds8Pool);
        $0294ed2c1260c64e$var$poolPtr = 0;
    }
    return $0294ed2c1260c64e$var$rnds8Pool.slice($0294ed2c1260c64e$var$poolPtr, $0294ed2c1260c64e$var$poolPtr += 16);
}


