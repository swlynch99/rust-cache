// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Helper TypeGuard that checks if something is defined or not.
 * @param thing - Anything
 */ function $681d0d585b8cbdbb$export$4e62c701997796c1(thing) {
    return typeof thing !== "undefined" && thing !== null;
}
function $681d0d585b8cbdbb$export$44aa3a8a1abdb9b6(thing, properties) {
    if (!$681d0d585b8cbdbb$export$4e62c701997796c1(thing) || typeof thing !== "object") return false;
    for (const property of properties){
        if (!$681d0d585b8cbdbb$export$48d753fb7585d4bb(thing, property)) return false;
    }
    return true;
}
function $681d0d585b8cbdbb$export$48d753fb7585d4bb(thing, property) {
    return $681d0d585b8cbdbb$export$4e62c701997796c1(thing) && typeof thing === "object" && property in thing;
}


//# sourceMappingURL=typeGuards.7d9f4f87.js.map
