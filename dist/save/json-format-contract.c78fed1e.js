const $44733ec6b7d4cfc6$var$defaultsWrite = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
}, $44733ec6b7d4cfc6$var$defaultsRead = {
    ignoreUnknownFields: false
};
function $44733ec6b7d4cfc6$export$e2108da0709719eb(options) {
    return options ? Object.assign(Object.assign({}, $44733ec6b7d4cfc6$var$defaultsRead), options) : $44733ec6b7d4cfc6$var$defaultsRead;
}
function $44733ec6b7d4cfc6$export$d0f2f49f029d6c38(options) {
    return options ? Object.assign(Object.assign({}, $44733ec6b7d4cfc6$var$defaultsWrite), options) : $44733ec6b7d4cfc6$var$defaultsWrite;
}
function $44733ec6b7d4cfc6$export$77bed8bb514232ab(a, b) {
    var _a, _b;
    let c = Object.assign(Object.assign({}, a), b);
    c.typeRegistry = [
        ...(_a = a === null || a === void 0 ? void 0 : a.typeRegistry) !== null && _a !== void 0 ? _a : [],
        ...(_b = b === null || b === void 0 ? void 0 : b.typeRegistry) !== null && _b !== void 0 ? _b : []
    ];
    return c;
}


