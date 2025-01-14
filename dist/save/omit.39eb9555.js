function $bafa43f726cd00c9$export$30a06c8d3562193f(object, keysToOmit) {
    const result = {
        __proto__: null
    };
    for (const key of Object.keys(object))if (keysToOmit.indexOf(key) === -1) result[key] = object[key];
    return result;
}


