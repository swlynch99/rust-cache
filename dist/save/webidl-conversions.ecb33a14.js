"use strict";
var $a585be7f4d595ced$var$conversions = {};
module.exports = $a585be7f4d595ced$var$conversions;
function $a585be7f4d595ced$var$sign(x) {
    return x < 0 ? -1 : 1;
}
function $a585be7f4d595ced$var$evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) return Math.floor(x);
    else return Math.round(x);
}
function $a585be7f4d595ced$var$createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) --bitLength;
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) throw new TypeError("Argument is not a finite number");
            x = $a585be7f4d595ced$var$sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) throw new TypeError("Argument is not in byte range");
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = $a585be7f4d595ced$var$evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) return 0;
        x = $a585be7f4d595ced$var$sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) return x - moduloVal;
        else if (typeOpts.unsigned) {
            if (x < 0) x += moduloVal;
            else if (x === -0) return 0;
        }
        return x;
    };
}
$a585be7f4d595ced$var$conversions["void"] = function() {
    return undefined;
};
$a585be7f4d595ced$var$conversions["boolean"] = function(val) {
    return !!val;
};
$a585be7f4d595ced$var$conversions["byte"] = $a585be7f4d595ced$var$createNumberConversion(8, {
    unsigned: false
});
$a585be7f4d595ced$var$conversions["octet"] = $a585be7f4d595ced$var$createNumberConversion(8, {
    unsigned: true
});
$a585be7f4d595ced$var$conversions["short"] = $a585be7f4d595ced$var$createNumberConversion(16, {
    unsigned: false
});
$a585be7f4d595ced$var$conversions["unsigned short"] = $a585be7f4d595ced$var$createNumberConversion(16, {
    unsigned: true
});
$a585be7f4d595ced$var$conversions["long"] = $a585be7f4d595ced$var$createNumberConversion(32, {
    unsigned: false
});
$a585be7f4d595ced$var$conversions["unsigned long"] = $a585be7f4d595ced$var$createNumberConversion(32, {
    unsigned: true
});
$a585be7f4d595ced$var$conversions["long long"] = $a585be7f4d595ced$var$createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
$a585be7f4d595ced$var$conversions["unsigned long long"] = $a585be7f4d595ced$var$createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
$a585be7f4d595ced$var$conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) throw new TypeError("Argument is not a finite floating-point value");
    return x;
};
$a585be7f4d595ced$var$conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) throw new TypeError("Argument is NaN");
    return x;
};
// not quite valid, but good enough for JS
$a585be7f4d595ced$var$conversions["float"] = $a585be7f4d595ced$var$conversions["double"];
$a585be7f4d595ced$var$conversions["unrestricted float"] = $a585be7f4d595ced$var$conversions["unrestricted double"];
$a585be7f4d595ced$var$conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) return "";
    return String(V);
};
$a585be7f4d595ced$var$conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) throw new TypeError("Argument is not a valid bytestring");
    }
    return x;
};
$a585be7f4d595ced$var$conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) U.push(String.fromCodePoint(c));
        else if (0xDC00 <= c && c <= 0xDFFF) U.push(String.fromCodePoint(0xFFFD));
        else if (i === n - 1) U.push(String.fromCodePoint(0xFFFD));
        else {
            const d = S.charCodeAt(i + 1);
            if (0xDC00 <= d && d <= 0xDFFF) {
                const a = c & 0x3FF;
                const b = d & 0x3FF;
                U.push(String.fromCodePoint(65536 + 1024 * a + b));
                ++i;
            } else U.push(String.fromCodePoint(0xFFFD));
        }
    }
    return U.join('');
};
$a585be7f4d595ced$var$conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) throw new TypeError("Argument is not a Date object");
    if (isNaN(V)) return undefined;
    return V;
};
$a585be7f4d595ced$var$conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) V = new RegExp(V);
    return V;
};


//# sourceMappingURL=webidl-conversions.ecb33a14.js.map
