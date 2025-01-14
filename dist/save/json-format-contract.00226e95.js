const $77db0a6c3651303f$var$defaultsWrite = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
}, $77db0a6c3651303f$var$defaultsRead = {
    ignoreUnknownFields: false
};
function $77db0a6c3651303f$export$e2108da0709719eb(options) {
    return options ? Object.assign(Object.assign({}, $77db0a6c3651303f$var$defaultsRead), options) : $77db0a6c3651303f$var$defaultsRead;
}
function $77db0a6c3651303f$export$d0f2f49f029d6c38(options) {
    return options ? Object.assign(Object.assign({}, $77db0a6c3651303f$var$defaultsWrite), options) : $77db0a6c3651303f$var$defaultsWrite;
}
function $77db0a6c3651303f$export$77bed8bb514232ab(a, b) {
    var _a, _b;
    let c = Object.assign(Object.assign({}, a), b);
    c.typeRegistry = [
        ...(_a = a === null || a === void 0 ? void 0 : a.typeRegistry) !== null && _a !== void 0 ? _a : [],
        ...(_b = b === null || b === void 0 ? void 0 : b.typeRegistry) !== null && _b !== void 0 ? _b : []
    ];
    return c;
}


//# sourceMappingURL=json-format-contract.00226e95.js.map
