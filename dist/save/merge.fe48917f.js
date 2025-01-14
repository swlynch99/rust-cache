require("./lowercase-keys.e60b524e.js");
require("./merge-deep.e2e4387c.js");
require("./remove-undefined-properties.6bc3f09b.js");

var $0aee54296f79d45b$exports = {};
$0aee54296f79d45b$exports = new URL("lowercase-keys.e60b524e.js", "file:" + __filename).toString();


var $c6bb5bb2d276f103$exports = {};
$c6bb5bb2d276f103$exports = new URL("merge-deep.e2e4387c.js", "file:" + __filename).toString();


var $19179a7ce7cdf7a4$exports = {};
$19179a7ce7cdf7a4$exports = new URL("remove-undefined-properties.6bc3f09b.js", "file:" + __filename).toString();


function $09b7d44815944029$export$4950aa0f605343fb(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? {
            method: method,
            url: url
        } : {
            url: method
        }, options);
    } else options = Object.assign({}, route);
    options.headers = (0, $0aee54296f79d45b$exports.lowercaseKeys)(options.headers);
    (0, $19179a7ce7cdf7a4$exports.removeUndefinedProperties)(options);
    (0, $19179a7ce7cdf7a4$exports.removeUndefinedProperties)(options.headers);
    const mergedOptions = (0, $c6bb5bb2d276f103$exports.mergeDeep)(defaults || {}, options);
    if (options.url === "/graphql") {
        if (defaults && defaults.mediaType.previews?.length) mergedOptions.mediaType.previews = defaults.mediaType.previews.filter((preview)=>!mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
        mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview)=>preview.replace(/-preview/, ""));
    }
    return mergedOptions;
}


//# sourceMappingURL=merge.fe48917f.js.map
