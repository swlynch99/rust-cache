// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
function $f8f69f7cfe77081f$export$234180f8206db11b(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; ++i){
        if (a[i] !== b[i]) return false;
    }
    return true;
}


