const $7354b8c657282273$var$urlVariableRegex = /\{[^}]+\}/g;
function $7354b8c657282273$var$removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function $7354b8c657282273$export$7ac48c959809d49(url) {
    const matches = url.match($7354b8c657282273$var$urlVariableRegex);
    if (!matches) return [];
    return matches.map($7354b8c657282273$var$removeNonChars).reduce((a, b)=>a.concat(b), []);
}


//# sourceMappingURL=extract-url-variable-names.be83f536.js.map
