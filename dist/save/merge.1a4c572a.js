require("./lowercase-keys.4fbcc575.js");
require("./merge-deep.ba6af587.js");
require("./remove-undefined-properties.7e4b851c.js");

var $6eef36a71d6e4b89$exports = {};
$6eef36a71d6e4b89$exports = new URL("lowercase-keys.4fbcc575.js", "file:" + __filename).toString();


var $fc76e4c82f0efd79$exports = {};
$fc76e4c82f0efd79$exports = new URL("merge-deep.ba6af587.js", "file:" + __filename).toString();


var $6986f06ad8c70fe2$exports = {};
$6986f06ad8c70fe2$exports = new URL("remove-undefined-properties.7e4b851c.js", "file:" + __filename).toString();


function $34305c636b1e3543$export$4950aa0f605343fb(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? {
            method: method,
            url: url
        } : {
            url: method
        }, options);
    } else options = Object.assign({}, route);
    options.headers = (0, $6eef36a71d6e4b89$exports.lowercaseKeys)(options.headers);
    (0, $6986f06ad8c70fe2$exports.removeUndefinedProperties)(options);
    (0, $6986f06ad8c70fe2$exports.removeUndefinedProperties)(options.headers);
    const mergedOptions = (0, $fc76e4c82f0efd79$exports.mergeDeep)(defaults || {}, options);
    if (options.url === "/graphql") {
        if (defaults && defaults.mediaType.previews?.length) mergedOptions.mediaType.previews = defaults.mediaType.previews.filter((preview)=>!mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
        mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview)=>preview.replace(/-preview/, ""));
    }
    return mergedOptions;
}


