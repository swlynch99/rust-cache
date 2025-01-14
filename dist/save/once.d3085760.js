require("./wrappy.d68d825c.js");

var $bcdd7fbc012c5ad8$exports = {};
$bcdd7fbc012c5ad8$exports = new URL("wrappy.d68d825c.js", "file:" + __filename).toString();


module.exports = $bcdd7fbc012c5ad8$exports($df0694c6e8990e96$var$once);
module.exports.strict = $bcdd7fbc012c5ad8$exports($df0694c6e8990e96$var$onceStrict);
$df0694c6e8990e96$var$once.proto = $df0694c6e8990e96$var$once(function() {
    Object.defineProperty(Function.prototype, 'once', {
        value: function() {
            return $df0694c6e8990e96$var$once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
            return $df0694c6e8990e96$var$onceStrict(this);
        },
        configurable: true
    });
});
function $df0694c6e8990e96$var$once(fn) {
    var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}
function $df0694c6e8990e96$var$onceStrict(fn) {
    var f = function() {
        if (f.called) throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || 'Function wrapped with `once`';
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
}


