/**
 * Get the type of a JSON value.
 * Distinguishes between array, null and object.
 */ function $56028498bb1e20e4$export$664ede5272d59144(value) {
    let t = typeof value;
    if (t == "object") {
        if (Array.isArray(value)) return "array";
        if (value === null) return "null";
    }
    return t;
}
function $56028498bb1e20e4$export$98727920b98c3cdb(value) {
    return value !== null && typeof value == "object" && !Array.isArray(value);
}


