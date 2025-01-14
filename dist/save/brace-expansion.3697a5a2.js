require("./concat-map.dbf516af.js");
require("./balanced-match.8dfbf66e.js");

var $71066929017ef8e0$exports = {};
$71066929017ef8e0$exports = new URL("concat-map.dbf516af.js", "file:" + __filename).toString();


var $cd76eb641a5a684d$exports = {};
$cd76eb641a5a684d$exports = new URL("balanced-match.8dfbf66e.js", "file:" + __filename).toString();


module.exports = $a8d108fb57ad05fa$var$expandTop;
var $a8d108fb57ad05fa$var$escSlash = '\0SLASH' + Math.random() + '\0';
var $a8d108fb57ad05fa$var$escOpen = '\0OPEN' + Math.random() + '\0';
var $a8d108fb57ad05fa$var$escClose = '\0CLOSE' + Math.random() + '\0';
var $a8d108fb57ad05fa$var$escComma = '\0COMMA' + Math.random() + '\0';
var $a8d108fb57ad05fa$var$escPeriod = '\0PERIOD' + Math.random() + '\0';
function $a8d108fb57ad05fa$var$numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function $a8d108fb57ad05fa$var$escapeBraces(str) {
    return str.split('\\\\').join($a8d108fb57ad05fa$var$escSlash).split('\\{').join($a8d108fb57ad05fa$var$escOpen).split('\\}').join($a8d108fb57ad05fa$var$escClose).split('\\,').join($a8d108fb57ad05fa$var$escComma).split('\\.').join($a8d108fb57ad05fa$var$escPeriod);
}
function $a8d108fb57ad05fa$var$unescapeBraces(str) {
    return str.split($a8d108fb57ad05fa$var$escSlash).join('\\').split($a8d108fb57ad05fa$var$escOpen).join('{').split($a8d108fb57ad05fa$var$escClose).join('}').split($a8d108fb57ad05fa$var$escComma).join(',').split($a8d108fb57ad05fa$var$escPeriod).join('.');
}
// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function $a8d108fb57ad05fa$var$parseCommaParts(str) {
    if (!str) return [
        ''
    ];
    var parts = [];
    var m = $cd76eb641a5a684d$exports('{', '}', str);
    if (!m) return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = $a8d108fb57ad05fa$var$parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}
function $a8d108fb57ad05fa$var$expandTop(str) {
    if (!str) return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === '{}') str = '\\{\\}' + str.substr(2);
    return $a8d108fb57ad05fa$var$expand($a8d108fb57ad05fa$var$escapeBraces(str), true).map($a8d108fb57ad05fa$var$unescapeBraces);
}
function $a8d108fb57ad05fa$var$identity(e) {
    return e;
}
function $a8d108fb57ad05fa$var$embrace(str) {
    return '{' + str + '}';
}
function $a8d108fb57ad05fa$var$isPadded(el) {
    return /^-?0\d/.test(el);
}
function $a8d108fb57ad05fa$var$lte(i, y) {
    return i <= y;
}
function $a8d108fb57ad05fa$var$gte(i, y) {
    return i >= y;
}
function $a8d108fb57ad05fa$var$expand(str, isTop) {
    var expansions = [];
    var m = $cd76eb641a5a684d$exports('{', '}', str);
    if (!m || /\$$/.test(m.pre)) return [
        str
    ];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(',') >= 0;
    if (!isSequence && !isOptions) {
        // {a},b}
        if (m.post.match(/,.*\}/)) {
            str = m.pre + '{' + m.body + $a8d108fb57ad05fa$var$escClose + m.post;
            return $a8d108fb57ad05fa$var$expand(str);
        }
        return [
            str
        ];
    }
    var n;
    if (isSequence) n = m.body.split(/\.\./);
    else {
        n = $a8d108fb57ad05fa$var$parseCommaParts(m.body);
        if (n.length === 1) {
            // x{{a,b}}y ==> x{a}y x{b}y
            n = $a8d108fb57ad05fa$var$expand(n[0], false).map($a8d108fb57ad05fa$var$embrace);
            if (n.length === 1) {
                var post = m.post.length ? $a8d108fb57ad05fa$var$expand(m.post, false) : [
                    ''
                ];
                return post.map(function(p) {
                    return m.pre + n[0] + p;
                });
            }
        }
    }
    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;
    var post = m.post.length ? $a8d108fb57ad05fa$var$expand(m.post, false) : [
        ''
    ];
    var N;
    if (isSequence) {
        var x = $a8d108fb57ad05fa$var$numeric(n[0]);
        var y = $a8d108fb57ad05fa$var$numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs($a8d108fb57ad05fa$var$numeric(n[2])) : 1;
        var test = $a8d108fb57ad05fa$var$lte;
        var reverse = y < x;
        if (reverse) {
            incr *= -1;
            test = $a8d108fb57ad05fa$var$gte;
        }
        var pad = n.some($a8d108fb57ad05fa$var$isPadded);
        N = [];
        for(var i = x; test(i, y); i += incr){
            var c;
            if (isAlphaSequence) {
                c = String.fromCharCode(i);
                if (c === '\\') c = '';
            } else {
                c = String(i);
                if (pad) {
                    var need = width - c.length;
                    if (need > 0) {
                        var z = new Array(need + 1).join('0');
                        if (i < 0) c = '-' + z + c.slice(1);
                        else c = z + c;
                    }
                }
            }
            N.push(c);
        }
    } else N = $71066929017ef8e0$exports(n, function(el) {
        return $a8d108fb57ad05fa$var$expand(el, false);
    });
    for(var j = 0; j < N.length; j++)for(var k = 0; k < post.length; k++){
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion) expansions.push(expansion);
    }
    return expansions;
}


//# sourceMappingURL=brace-expansion.3697a5a2.js.map
