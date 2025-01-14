require("./register.afdbec1d.js");
require("./add.167365ea.js");
require("./remove.df4b3314.js");

var $5ba47a1baab36b55$exports = {};
$5ba47a1baab36b55$exports = new URL("register.afdbec1d.js", "file:" + __filename).toString();


var $7db7f863ce3dcc7d$exports = {};
$7db7f863ce3dcc7d$exports = new URL("add.167365ea.js", "file:" + __filename).toString();


var $83d2adb780b02b7f$exports = {};
$83d2adb780b02b7f$exports = new URL("remove.df4b3314.js", "file:" + __filename).toString();


// bind with array of arguments: https://stackoverflow.com/a/21792913
var $66c586e4930dbf5f$var$bind = Function.bind;
var $66c586e4930dbf5f$var$bindable = $66c586e4930dbf5f$var$bind.bind($66c586e4930dbf5f$var$bind);
function $66c586e4930dbf5f$var$bindApi(hook, state, name) {
    var removeHookRef = $66c586e4930dbf5f$var$bindable($83d2adb780b02b7f$exports, null).apply(null, name ? [
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
        hook[kind] = hook.api[kind] = $66c586e4930dbf5f$var$bindable($7db7f863ce3dcc7d$exports, null).apply(null, args);
    });
}
function $66c586e4930dbf5f$var$HookSingular() {
    var singularHookName = "h";
    var singularHookState = {
        registry: {}
    };
    var singularHook = $5ba47a1baab36b55$exports.bind(null, singularHookState, singularHookName);
    $66c586e4930dbf5f$var$bindApi(singularHook, singularHookState, singularHookName);
    return singularHook;
}
function $66c586e4930dbf5f$var$HookCollection() {
    var state = {
        registry: {}
    };
    var hook = $5ba47a1baab36b55$exports.bind(null, state);
    $66c586e4930dbf5f$var$bindApi(hook, state);
    return hook;
}
var $66c586e4930dbf5f$var$collectionHookDeprecationMessageDisplayed = false;
function $66c586e4930dbf5f$var$Hook() {
    if (!$66c586e4930dbf5f$var$collectionHookDeprecationMessageDisplayed) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        $66c586e4930dbf5f$var$collectionHookDeprecationMessageDisplayed = true;
    }
    return $66c586e4930dbf5f$var$HookCollection();
}
$66c586e4930dbf5f$var$Hook.Singular = $66c586e4930dbf5f$var$HookSingular.bind();
$66c586e4930dbf5f$var$Hook.Collection = $66c586e4930dbf5f$var$HookCollection.bind();
module.exports = $66c586e4930dbf5f$var$Hook;
// expose constructors as a named property for TypeScript
module.exports.Hook = $66c586e4930dbf5f$var$Hook;
module.exports.Singular = $66c586e4930dbf5f$var$Hook.Singular;
module.exports.Collection = $66c586e4930dbf5f$var$Hook.Collection;


