const $e2079f831998d638$var$urlVariableRegex = /\{[^}]+\}/g;
function $e2079f831998d638$var$removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function $e2079f831998d638$export$7ac48c959809d49(url) {
    const matches = url.match($e2079f831998d638$var$urlVariableRegex);
    if (!matches) return [];
    return matches.map($e2079f831998d638$var$removeNonChars).reduce((a, b)=>a.concat(b), []);
}


