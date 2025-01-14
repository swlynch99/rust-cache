require("./add-query-parameters.60619f06.js");
require("./extract-url-variable-names.7910c20f.js");
require("./omit.39eb9555.js");
require("./url-template.8ceb1277.js");

var $6d61e87794abe572$exports = {};
$6d61e87794abe572$exports = new URL("add-query-parameters.60619f06.js", "file:" + __filename).toString();


var $3f4fe8400043cba7$exports = {};
$3f4fe8400043cba7$exports = new URL("extract-url-variable-names.7910c20f.js", "file:" + __filename).toString();


var $c390c9b355c80d23$exports = {};
$c390c9b355c80d23$exports = new URL("omit.39eb9555.js", "file:" + __filename).toString();


var $d7a175a29a11710d$exports = {};
$d7a175a29a11710d$exports = new URL("url-template.8ceb1277.js", "file:" + __filename).toString();


function $3af58be69d143db0$export$98e6a39c04603d36(options) {
    let method = options.method.toUpperCase();
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = (0, $c390c9b355c80d23$exports.omit)(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType"
    ]);
    const urlVariableNames = (0, $3f4fe8400043cba7$exports.extractUrlVariableNames)(url);
    url = (0, $d7a175a29a11710d$exports.parseUrl)(url).expand(parameters);
    if (!/^http/.test(url)) url = options.baseUrl + url;
    const omittedParameters = Object.keys(options).filter((option)=>urlVariableNames.includes(option)).concat("baseUrl");
    const remainingParameters = (0, $c390c9b355c80d23$exports.omit)(parameters, omittedParameters);
    const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequest) {
        if (options.mediaType.format) headers.accept = headers.accept.split(/,/).map((format)=>format.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
        if (url.endsWith("/graphql")) {
            if (options.mediaType.previews?.length) {
                const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
                headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview)=>{
                    const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
                    return `application/vnd.github.${preview}-preview${format}`;
                }).join(",");
            }
        }
    }
    if ([
        "GET",
        "HEAD"
    ].includes(method)) url = (0, $6d61e87794abe572$exports.addQueryParameters)(url, remainingParameters);
    else {
        if ("data" in remainingParameters) body = remainingParameters.data;
        else if (Object.keys(remainingParameters).length) body = remainingParameters;
    }
    if (!headers["content-type"] && typeof body !== "undefined") headers["content-type"] = "application/json; charset=utf-8";
    if ([
        "PATCH",
        "PUT"
    ].includes(method) && typeof body === "undefined") body = "";
    return Object.assign({
        method: method,
        url: url,
        headers: headers
    }, typeof body !== "undefined" ? {
        body: body
    } : null, options.request ? {
        request: options.request
    } : null);
}


