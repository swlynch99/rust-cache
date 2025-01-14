// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Helper TypeGuard that checks if something is defined or not.
 * @param thing - Anything
 */ function $dfdc3f70d0eb00d1$export$4e62c701997796c1(thing) {
    return typeof thing !== "undefined" && thing !== null;
}
function $dfdc3f70d0eb00d1$export$44aa3a8a1abdb9b6(thing, properties) {
    if (!$dfdc3f70d0eb00d1$export$4e62c701997796c1(thing) || typeof thing !== "object") return false;
    for (const property of properties){
        if (!$dfdc3f70d0eb00d1$export$48d753fb7585d4bb(thing, property)) return false;
    }
    return true;
}
function $dfdc3f70d0eb00d1$export$48d753fb7585d4bb(thing, property) {
    return $dfdc3f70d0eb00d1$export$4e62c701997796c1(thing) && typeof thing === "object" && property in thing;
}


