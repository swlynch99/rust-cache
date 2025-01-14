module.exports = $a86005119ec9f9ed$var$removeHook;
function $a86005119ec9f9ed$var$removeHook(state, name, method) {
    if (!state.registry[name]) return;
    var index = state.registry[name].map(function(registered) {
        return registered.orig;
    }).indexOf(method);
    if (index === -1) return;
    state.registry[name].splice(index, 1);
}


