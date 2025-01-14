module.exports = function(xs, fn) {
    var res = [];
    for(var i = 0; i < xs.length; i++){
        var x = fn(xs[i], i);
        if ($59f13be1a3b6b127$var$isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};
var $59f13be1a3b6b127$var$isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


//# sourceMappingURL=concat-map.dbf516af.js.map
