require("./register.de306a27.js");
require("./add.8e90c838.js");
require("./remove.733609e5.js");

var $6432006650397d13$exports = {};
$6432006650397d13$exports = new URL("register.de306a27.js", "file:" + __filename).toString();


var $72df5ec5665d2ce7$exports = {};
$72df5ec5665d2ce7$exports = new URL("add.8e90c838.js", "file:" + __filename).toString();


var $ac5b9eebe9438901$exports = {};
$ac5b9eebe9438901$exports = new URL("remove.733609e5.js", "file:" + __filename).toString();


// bind with array of arguments: https://stackoverflow.com/a/21792913
var $e714817c4f97e31e$var$bind = Function.bind;
var $e714817c4f97e31e$var$bindable = $e714817c4f97e31e$var$bind.bind($e714817c4f97e31e$var$bind);
function $e714817c4f97e31e$var$bindApi(hook, state, name) {
    var removeHookRef = $e714817c4f97e31e$var$bindable($ac5b9eebe9438901$exports, null).apply(null, name ? [
        state,
        name
    ] : [
        state
    ]);
    hook.api = {
        remove: removeHookRef
    };
    hook.remove = removeHookRef;
    [
        "before",
        "error",
        "after",
        "wrap"
    ].forEach(function(kind) {
        var args = name ? [
            state,
            kind,
            name
        ] : [
            state,
            kind
        ];
        hook[kind] = hook.api[kind] = $e714817c4f97e31e$var$bindable($72df5ec5665d2ce7$exports, null).apply(null, args);
    });
}
function $e714817c4f97e31e$var$HookSingular() {
    var singularHookName = "h";
    var singularHookState = {
        registry: {}
    };
    var singularHook = $6432006650397d13$exports.bind(null, singularHookState, singularHookName);
    $e714817c4f97e31e$var$bindApi(singularHook, singularHookState, singularHookName);
    return singularHook;
}
function $e714817c4f97e31e$var$HookCollection() {
    var state = {
        registry: {}
    };
    var hook = $6432006650397d13$exports.bind(null, state);
    $e714817c4f97e31e$var$bindApi(hook, state);
    return hook;
}
var $e714817c4f97e31e$var$collectionHookDeprecationMessageDisplayed = false;
function $e714817c4f97e31e$var$Hook() {
    if (!$e714817c4f97e31e$var$collectionHookDeprecationMessageDisplayed) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        $e714817c4f97e31e$var$collectionHookDeprecationMessageDisplayed = true;
    }
    return $e714817c4f97e31e$var$HookCollection();
}
$e714817c4f97e31e$var$Hook.Singular = $e714817c4f97e31e$var$HookSingular.bind();
$e714817c4f97e31e$var$Hook.Collection = $e714817c4f97e31e$var$HookCollection.bind();
module.exports = $e714817c4f97e31e$var$Hook;
// expose constructors as a named property for TypeScript
module.exports.Hook = $e714817c4f97e31e$var$Hook;
module.exports.Singular = $e714817c4f97e31e$var$Hook.Singular;
module.exports.Collection = $e714817c4f97e31e$var$Hook.Collection;


//# sourceMappingURL=before-after-hook.b74f9f56.js.map
