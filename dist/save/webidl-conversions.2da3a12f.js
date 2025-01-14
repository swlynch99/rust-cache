"use strict";
var $b92088ffc24dc60f$var$conversions = {};
module.exports = $b92088ffc24dc60f$var$conversions;
function $b92088ffc24dc60f$var$sign(x) {
    return x < 0 ? -1 : 1;
}
function $b92088ffc24dc60f$var$evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) return Math.floor(x);
    else return Math.round(x);
}
function $b92088ffc24dc60f$var$createNumberConversion(bitLength, typeOpts) {
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
            x = $b92088ffc24dc60f$var$sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) throw new TypeError("Argument is not in byte range");
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = $b92088ffc24dc60f$var$evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) return 0;
        x = $b92088ffc24dc60f$var$sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) return x - moduloVal;
        else if (typeOpts.unsigned) {
            if (x < 0) x += moduloVal;
            else if (x === -0) return 0;
        }
        return x;
    };
}
$b92088ffc24dc60f$var$conversions["void"] = function() {
    return undefined;
};
$b92088ffc24dc60f$var$conversions["boolean"] = function(val) {
    return !!val;
};
$b92088ffc24dc60f$var$conversions["byte"] = $b92088ffc24dc60f$var$createNumberConversion(8, {
    unsigned: false
});
$b92088ffc24dc60f$var$conversions["octet"] = $b92088ffc24dc60f$var$createNumberConversion(8, {
    unsigned: true
});
$b92088ffc24dc60f$var$conversions["short"] = $b92088ffc24dc60f$var$createNumberConversion(16, {
    unsigned: false
});
$b92088ffc24dc60f$var$conversions["unsigned short"] = $b92088ffc24dc60f$var$createNumberConversion(16, {
    unsigned: true
});
$b92088ffc24dc60f$var$conversions["long"] = $b92088ffc24dc60f$var$createNumberConversion(32, {
    unsigned: false
});
$b92088ffc24dc60f$var$conversions["unsigned long"] = $b92088ffc24dc60f$var$createNumberConversion(32, {
    unsigned: true
});
$b92088ffc24dc60f$var$conversions["long long"] = $b92088ffc24dc60f$var$createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
$b92088ffc24dc60f$var$conversions["unsigned long long"] = $b92088ffc24dc60f$var$createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
$b92088ffc24dc60f$var$conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) throw new TypeError("Argument is not a finite floating-point value");
    return x;
};
$b92088ffc24dc60f$var$conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) throw new TypeError("Argument is NaN");
    return x;
};
// not quite valid, but good enough for JS
$b92088ffc24dc60f$var$conversions["float"] = $b92088ffc24dc60f$var$conversions["double"];
$b92088ffc24dc60f$var$conversions["unrestricted float"] = $b92088ffc24dc60f$var$conversions["unrestricted double"];
$b92088ffc24dc60f$var$conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) return "";
    return String(V);
};
$b92088ffc24dc60f$var$conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) throw new TypeError("Argument is not a valid bytestring");
    }
    return x;
};
$b92088ffc24dc60f$var$conversions["USVString"] = function(V) {
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
$b92088ffc24dc60f$var$conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) throw new TypeError("Argument is not a Date object");
    if (isNaN(V)) return undefined;
    return V;
};
$b92088ffc24dc60f$var$conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) V = new RegExp(V);
    return V;
};


