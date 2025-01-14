module.exports = function(xs, fn) {
    var res = [];
    for(var i = 0; i < xs.length; i++){
        var x = fn(xs[i], i);
        if ($fd1b42744bb2deef$var$isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};
var $fd1b42744bb2deef$var$isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


