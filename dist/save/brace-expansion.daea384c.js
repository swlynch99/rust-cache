require("./concat-map.fc497e58.js");
require("./balanced-match.5ef4f997.js");

var $47ee6cc699fffe72$exports = {};
$47ee6cc699fffe72$exports = new URL("concat-map.fc497e58.js", "file:" + __filename).toString();


var $e35a0d0e12c43884$exports = {};
$e35a0d0e12c43884$exports = new URL("balanced-match.5ef4f997.js", "file:" + __filename).toString();


module.exports = $68c0fecbeb15a2cd$var$expandTop;
var $68c0fecbeb15a2cd$var$escSlash = '\0SLASH' + Math.random() + '\0';
var $68c0fecbeb15a2cd$var$escOpen = '\0OPEN' + Math.random() + '\0';
var $68c0fecbeb15a2cd$var$escClose = '\0CLOSE' + Math.random() + '\0';
var $68c0fecbeb15a2cd$var$escComma = '\0COMMA' + Math.random() + '\0';
var $68c0fecbeb15a2cd$var$escPeriod = '\0PERIOD' + Math.random() + '\0';
function $68c0fecbeb15a2cd$var$numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function $68c0fecbeb15a2cd$var$escapeBraces(str) {
    return str.split('\\\\').join($68c0fecbeb15a2cd$var$escSlash).split('\\{').join($68c0fecbeb15a2cd$var$escOpen).split('\\}').join($68c0fecbeb15a2cd$var$escClose).split('\\,').join($68c0fecbeb15a2cd$var$escComma).split('\\.').join($68c0fecbeb15a2cd$var$escPeriod);
}
function $68c0fecbeb15a2cd$var$unescapeBraces(str) {
    return str.split($68c0fecbeb15a2cd$var$escSlash).join('\\').split($68c0fecbeb15a2cd$var$escOpen).join('{').split($68c0fecbeb15a2cd$var$escClose).join('}').split($68c0fecbeb15a2cd$var$escComma).join(',').split($68c0fecbeb15a2cd$var$escPeriod).join('.');
}
// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function $68c0fecbeb15a2cd$var$parseCommaParts(str) {
    if (!str) return [
        ''
    ];
    var parts = [];
    var m = $e35a0d0e12c43884$exports('{', '}', str);
    if (!m) return str.split(',');
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(',');
    p[p.length - 1] += '{' + body + '}';
    var postParts = $68c0fecbeb15a2cd$var$parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}
function $68c0fecbeb15a2cd$var$expandTop(str) {
    if (!str) return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === '{}') str = '\\{\\}' + str.substr(2);
    return $68c0fecbeb15a2cd$var$expand($68c0fecbeb15a2cd$var$escapeBraces(str), true).map($68c0fecbeb15a2cd$var$unescapeBraces);
}
function $68c0fecbeb15a2cd$var$identity(e) {
    return e;
}
function $68c0fecbeb15a2cd$var$embrace(str) {
    return '{' + str + '}';
}
function $68c0fecbeb15a2cd$var$isPadded(el) {
    return /^-?0\d/.test(el);
}
function $68c0fecbeb15a2cd$var$lte(i, y) {
    return i <= y;
}
function $68c0fecbeb15a2cd$var$gte(i, y) {
    return i >= y;
}
function $68c0fecbeb15a2cd$var$expand(str, isTop) {
    var expansions = [];
    var m = $e35a0d0e12c43884$exports('{', '}', str);
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
            str = m.pre + '{' + m.body + $68c0fecbeb15a2cd$var$escClose + m.post;
            return $68c0fecbeb15a2cd$var$expand(str);
        }
        return [
            str
        ];
    }
    var n;
    if (isSequence) n = m.body.split(/\.\./);
    else {
        n = $68c0fecbeb15a2cd$var$parseCommaParts(m.body);
        if (n.length === 1) {
            // x{{a,b}}y ==> x{a}y x{b}y
            n = $68c0fecbeb15a2cd$var$expand(n[0], false).map($68c0fecbeb15a2cd$var$embrace);
            if (n.length === 1) {
                var post = m.post.length ? $68c0fecbeb15a2cd$var$expand(m.post, false) : [
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
    var post = m.post.length ? $68c0fecbeb15a2cd$var$expand(m.post, false) : [
        ''
    ];
    var N;
    if (isSequence) {
        var x = $68c0fecbeb15a2cd$var$numeric(n[0]);
        var y = $68c0fecbeb15a2cd$var$numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs($68c0fecbeb15a2cd$var$numeric(n[2])) : 1;
        var test = $68c0fecbeb15a2cd$var$lte;
        var reverse = y < x;
        if (reverse) {
            incr *= -1;
            test = $68c0fecbeb15a2cd$var$gte;
        }
        var pad = n.some($68c0fecbeb15a2cd$var$isPadded);
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
    } else N = $47ee6cc699fffe72$exports(n, function(el) {
        return $68c0fecbeb15a2cd$var$expand(el, false);
    });
    for(var j = 0; j < N.length; j++)for(var k = 0; k < post.length; k++){
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion) expansions.push(expansion);
    }
    return expansions;
}


