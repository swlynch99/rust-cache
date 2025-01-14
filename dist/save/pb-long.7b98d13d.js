require("./goog-varint.7bc628fc.js");

var $d0e8757aa66d74f7$exports = {};
$d0e8757aa66d74f7$exports = new URL("goog-varint.7bc628fc.js", "file:" + __filename).toString();


let $53df16fdb50ad67e$var$BI;
function $53df16fdb50ad67e$export$e21a0a1962dae197() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = globalThis.BigInt !== undefined && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function";
    $53df16fdb50ad67e$var$BI = ok ? {
        MIN: BigInt("-9223372036854775808"),
        MAX: BigInt("9223372036854775807"),
        UMIN: BigInt("0"),
        UMAX: BigInt("18446744073709551615"),
        C: BigInt,
        V: dv
    } : undefined;
}
$53df16fdb50ad67e$export$e21a0a1962dae197();
function $53df16fdb50ad67e$var$assertBi(bi) {
    if (!bi) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
}
// used to validate from(string) input (when bigint is unavailable)
const $53df16fdb50ad67e$var$RE_DECIMAL_STR = /^-?[0-9]+$/;
// constants for binary math
const $53df16fdb50ad67e$var$TWO_PWR_32_DBL = 0x100000000;
const $53df16fdb50ad67e$var$HALF_2_PWR_32 = 0x080000000;
// base class for PbLong and PbULong provides shared code
class $53df16fdb50ad67e$var$SharedPbLong {
    /**
     * Create a new instance with the given bits.
     */ constructor(lo, hi){
        this.lo = lo | 0;
        this.hi = hi | 0;
    }
    /**
     * Is this instance equal to 0?
     */ isZero() {
        return this.lo == 0 && this.hi == 0;
    }
    /**
     * Convert to a native number.
     */ toNumber() {
        let result = this.hi * $53df16fdb50ad67e$var$TWO_PWR_32_DBL + (this.lo >>> 0);
        if (!Number.isSafeInteger(result)) throw new Error("cannot convert to safe number");
        return result;
    }
}
class $53df16fdb50ad67e$export$2d16819998fb891c extends $53df16fdb50ad67e$var$SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */ static from(value) {
        if ($53df16fdb50ad67e$var$BI) // noinspection FallThroughInSwitchStatementJS
        switch(typeof value){
            case "string":
                if (value == "0") return this.ZERO;
                if (value == "") throw new Error('string is no integer');
                value = $53df16fdb50ad67e$var$BI.C(value);
            case "number":
                if (value === 0) return this.ZERO;
                value = $53df16fdb50ad67e$var$BI.C(value);
            case "bigint":
                if (!value) return this.ZERO;
                if (value < $53df16fdb50ad67e$var$BI.UMIN) throw new Error('signed value for ulong');
                if (value > $53df16fdb50ad67e$var$BI.UMAX) throw new Error('ulong too large');
                $53df16fdb50ad67e$var$BI.V.setBigUint64(0, value, true);
                return new $53df16fdb50ad67e$export$2d16819998fb891c($53df16fdb50ad67e$var$BI.V.getInt32(0, true), $53df16fdb50ad67e$var$BI.V.getInt32(4, true));
        }
        else switch(typeof value){
            case "string":
                if (value == "0") return this.ZERO;
                value = value.trim();
                if (!$53df16fdb50ad67e$var$RE_DECIMAL_STR.test(value)) throw new Error('string is no integer');
                let [minus, lo, hi] = (0, $d0e8757aa66d74f7$exports.int64fromString)(value);
                if (minus) throw new Error('signed value for ulong');
                return new $53df16fdb50ad67e$export$2d16819998fb891c(lo, hi);
            case "number":
                if (value == 0) return this.ZERO;
                if (!Number.isSafeInteger(value)) throw new Error('number is no integer');
                if (value < 0) throw new Error('signed value for ulong');
                return new $53df16fdb50ad67e$export$2d16819998fb891c(value, value / $53df16fdb50ad67e$var$TWO_PWR_32_DBL);
        }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Convert to decimal string.
     */ toString() {
        return $53df16fdb50ad67e$var$BI ? this.toBigInt().toString() : (0, $d0e8757aa66d74f7$exports.int64toString)(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */ toBigInt() {
        $53df16fdb50ad67e$var$assertBi($53df16fdb50ad67e$var$BI);
        $53df16fdb50ad67e$var$BI.V.setInt32(0, this.lo, true);
        $53df16fdb50ad67e$var$BI.V.setInt32(4, this.hi, true);
        return $53df16fdb50ad67e$var$BI.V.getBigUint64(0, true);
    }
}
/**
 * ulong 0 singleton.
 */ $53df16fdb50ad67e$export$2d16819998fb891c.ZERO = new $53df16fdb50ad67e$export$2d16819998fb891c(0, 0);
class $53df16fdb50ad67e$export$458c11e435f8bbac extends $53df16fdb50ad67e$var$SharedPbLong {
    /**
     * Create instance from a `string`, `number` or `bigint`.
     */ static from(value) {
        if ($53df16fdb50ad67e$var$BI) // noinspection FallThroughInSwitchStatementJS
        switch(typeof value){
            case "string":
                if (value == "0") return this.ZERO;
                if (value == "") throw new Error('string is no integer');
                value = $53df16fdb50ad67e$var$BI.C(value);
            case "number":
                if (value === 0) return this.ZERO;
                value = $53df16fdb50ad67e$var$BI.C(value);
            case "bigint":
                if (!value) return this.ZERO;
                if (value < $53df16fdb50ad67e$var$BI.MIN) throw new Error('signed long too small');
                if (value > $53df16fdb50ad67e$var$BI.MAX) throw new Error('signed long too large');
                $53df16fdb50ad67e$var$BI.V.setBigInt64(0, value, true);
                return new $53df16fdb50ad67e$export$458c11e435f8bbac($53df16fdb50ad67e$var$BI.V.getInt32(0, true), $53df16fdb50ad67e$var$BI.V.getInt32(4, true));
        }
        else switch(typeof value){
            case "string":
                if (value == "0") return this.ZERO;
                value = value.trim();
                if (!$53df16fdb50ad67e$var$RE_DECIMAL_STR.test(value)) throw new Error('string is no integer');
                let [minus, lo, hi] = (0, $d0e8757aa66d74f7$exports.int64fromString)(value);
                if (minus) {
                    if (hi > $53df16fdb50ad67e$var$HALF_2_PWR_32 || hi == $53df16fdb50ad67e$var$HALF_2_PWR_32 && lo != 0) throw new Error('signed long too small');
                } else if (hi >= $53df16fdb50ad67e$var$HALF_2_PWR_32) throw new Error('signed long too large');
                let pbl = new $53df16fdb50ad67e$export$458c11e435f8bbac(lo, hi);
                return minus ? pbl.negate() : pbl;
            case "number":
                if (value == 0) return this.ZERO;
                if (!Number.isSafeInteger(value)) throw new Error('number is no integer');
                return value > 0 ? new $53df16fdb50ad67e$export$458c11e435f8bbac(value, value / $53df16fdb50ad67e$var$TWO_PWR_32_DBL) : new $53df16fdb50ad67e$export$458c11e435f8bbac(-value, -value / $53df16fdb50ad67e$var$TWO_PWR_32_DBL).negate();
        }
        throw new Error('unknown value ' + typeof value);
    }
    /**
     * Do we have a minus sign?
     */ isNegative() {
        return (this.hi & $53df16fdb50ad67e$var$HALF_2_PWR_32) !== 0;
    }
    /**
     * Negate two's complement.
     * Invert all the bits and add one to the result.
     */ negate() {
        let hi = ~this.hi, lo = this.lo;
        if (lo) lo = ~lo + 1;
        else hi += 1;
        return new $53df16fdb50ad67e$export$458c11e435f8bbac(lo, hi);
    }
    /**
     * Convert to decimal string.
     */ toString() {
        if ($53df16fdb50ad67e$var$BI) return this.toBigInt().toString();
        if (this.isNegative()) {
            let n = this.negate();
            return '-' + (0, $d0e8757aa66d74f7$exports.int64toString)(n.lo, n.hi);
        }
        return (0, $d0e8757aa66d74f7$exports.int64toString)(this.lo, this.hi);
    }
    /**
     * Convert to native bigint.
     */ toBigInt() {
        $53df16fdb50ad67e$var$assertBi($53df16fdb50ad67e$var$BI);
        $53df16fdb50ad67e$var$BI.V.setInt32(0, this.lo, true);
        $53df16fdb50ad67e$var$BI.V.setInt32(4, this.hi, true);
        return $53df16fdb50ad67e$var$BI.V.getBigInt64(0, true);
    }
}
/**
 * long 0 singleton.
 */ $53df16fdb50ad67e$export$458c11e435f8bbac.ZERO = new $53df16fdb50ad67e$export$458c11e435f8bbac(0, 0);


//# sourceMappingURL=pb-long.7b98d13d.js.map
