module.exports = $b14388fe0a16048d$var$removeHook;
function $b14388fe0a16048d$var$removeHook(state, name, method) {
    if (!state.registry[name]) return;
    var index = state.registry[name].map(function(registered) {
        return registered.orig;
    }).indexOf(method);
    if (index === -1) return;
    state.registry[name].splice(index, 1);
}


//# sourceMappingURL=remove.733609e5.js.map
