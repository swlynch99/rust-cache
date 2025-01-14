'use strict';
module.exports = $a6e17db393d948fc$var$balanced;
function $a6e17db393d948fc$var$balanced(a, b, str) {
    if (a instanceof RegExp) a = $a6e17db393d948fc$var$maybeMatch(a, str);
    if (b instanceof RegExp) b = $a6e17db393d948fc$var$maybeMatch(b, str);
    var r = $a6e17db393d948fc$var$range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}
function $a6e17db393d948fc$var$maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}
$a6e17db393d948fc$var$balanced.range = $a6e17db393d948fc$var$range;
function $a6e17db393d948fc$var$range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        if (a === b) return [
            ai,
            bi
        ];
        begs = [];
        left = str.length;
        while(i >= 0 && !result){
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) result = [
                begs.pop(),
                bi
            ];
            else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) result = [
            left,
            right
        ];
    }
    return result;
}


//# sourceMappingURL=balanced-match.8dfbf66e.js.map
