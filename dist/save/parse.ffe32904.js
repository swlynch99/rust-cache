require("./add-query-parameters.3a350412.js");
require("./extract-url-variable-names.be83f536.js");
require("./omit.a86d1de8.js");
require("./url-template.3a2d3375.js");

var $0029efae4ffeac56$exports = {};
$0029efae4ffeac56$exports = new URL("add-query-parameters.3a350412.js", "file:" + __filename).toString();


var $19215397c863023f$exports = {};
$19215397c863023f$exports = new URL("extract-url-variable-names.be83f536.js", "file:" + __filename).toString();


var $0a37dec9fc6dcedb$exports = {};
$0a37dec9fc6dcedb$exports = new URL("omit.a86d1de8.js", "file:" + __filename).toString();


var $a24f1f82c8ffd48a$exports = {};
$a24f1f82c8ffd48a$exports = new URL("url-template.3a2d3375.js", "file:" + __filename).toString();


function $1c8eb56919e6f39c$export$98e6a39c04603d36(options) {
    let method = options.method.toUpperCase();
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = (0, $0a37dec9fc6dcedb$exports.omit)(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType"
    ]);
    const urlVariableNames = (0, $19215397c863023f$exports.extractUrlVariableNames)(url);
    url = (0, $a24f1f82c8ffd48a$exports.parseUrl)(url).expand(parameters);
    if (!/^http/.test(url)) url = options.baseUrl + url;
    const omittedParameters = Object.keys(options).filter((option)=>urlVariableNames.includes(option)).concat("baseUrl");
    const remainingParameters = (0, $0a37dec9fc6dcedb$exports.omit)(parameters, omittedParameters);
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
    ].includes(method)) url = (0, $0029efae4ffeac56$exports.addQueryParameters)(url, remainingParameters);
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


//# sourceMappingURL=parse.ffe32904.js.map
