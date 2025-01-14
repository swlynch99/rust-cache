require("./wrappy.f377dd1a.js");

var $85e3672ea7eb75e1$exports = {};
$85e3672ea7eb75e1$exports = new URL("wrappy.f377dd1a.js", "file:" + __filename).toString();


module.exports = $85e3672ea7eb75e1$exports($d210a89c33619390$var$once);
module.exports.strict = $85e3672ea7eb75e1$exports($d210a89c33619390$var$onceStrict);
$d210a89c33619390$var$once.proto = $d210a89c33619390$var$once(function() {
    Object.defineProperty(Function.prototype, 'once', {
        value: function() {
            return $d210a89c33619390$var$once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function() {
            return $d210a89c33619390$var$onceStrict(this);
        },
        configurable: true
    });
});
function $d210a89c33619390$var$once(fn) {
    var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}
function $d210a89c33619390$var$onceStrict(fn) {
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


//# sourceMappingURL=once.79eafaa9.js.map
