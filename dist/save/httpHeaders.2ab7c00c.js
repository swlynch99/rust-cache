// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
function $6a050607713edb70$var$normalizeName(name) {
    return name.toLowerCase();
}
function* $6a050607713edb70$var$headerIterator(map) {
    for (const entry of map.values())yield [
        entry.name,
        entry.value
    ];
}
class $6a050607713edb70$var$HttpHeadersImpl {
    constructor(rawHeaders){
        this._headersMap = new Map();
        if (rawHeaders) for (const headerName of Object.keys(rawHeaders))this.set(headerName, rawHeaders[headerName]);
    }
    /**
     * Set a header in this collection with the provided name and value. The name is
     * case-insensitive.
     * @param name - The name of the header to set. This value is case-insensitive.
     * @param value - The value of the header to set.
     */ set(name, value) {
        this._headersMap.set($6a050607713edb70$var$normalizeName(name), {
            name: name,
            value: String(value).trim()
        });
    }
    /**
     * Get the header value for the provided header name, or undefined if no header exists in this
     * collection with the provided name.
     * @param name - The name of the header. This value is case-insensitive.
     */ get(name) {
        var _a;
        return (_a = this._headersMap.get($6a050607713edb70$var$normalizeName(name))) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Get whether or not this header collection contains a header entry for the provided header name.
     * @param name - The name of the header to set. This value is case-insensitive.
     */ has(name) {
        return this._headersMap.has($6a050607713edb70$var$normalizeName(name));
    }
    /**
     * Remove the header with the provided headerName.
     * @param name - The name of the header to remove.
     */ delete(name) {
        this._headersMap.delete($6a050607713edb70$var$normalizeName(name));
    }
    /**
     * Get the JSON object representation of this HTTP header collection.
     */ toJSON(options = {}) {
        const result = {};
        if (options.preserveCase) for (const entry of this._headersMap.values())result[entry.name] = entry.value;
        else for (const [normalizedName, entry] of this._headersMap)result[normalizedName] = entry.value;
        return result;
    }
    /**
     * Get the string representation of this HTTP header collection.
     */ toString() {
        return JSON.stringify(this.toJSON({
            preserveCase: true
        }));
    }
    /**
     * Iterate over tuples of header [name, value] pairs.
     */ [Symbol.iterator]() {
        return $6a050607713edb70$var$headerIterator(this._headersMap);
    }
}
function $6a050607713edb70$export$4c8e967a76f3c947(rawHeaders) {
    return new $6a050607713edb70$var$HttpHeadersImpl(rawHeaders);
}


//# sourceMappingURL=httpHeaders.2ab7c00c.js.map
