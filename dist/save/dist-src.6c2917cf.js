require("./version.8664332b.js");
require("./endpoints-to-methods.1d95db50.js");

var $5fe5610a0f95ba1d$exports = {};
$5fe5610a0f95ba1d$exports = new URL("version.8664332b.js", "file:" + __filename).toString();


var $c323c8296ad99b95$exports = {};
$c323c8296ad99b95$exports = new URL("endpoints-to-methods.1d95db50.js", "file:" + __filename).toString();


function $d8b6ffd44fb09d6b$export$a1fe24cc78039d62(octokit) {
    const api = (0, $c323c8296ad99b95$exports.endpointsToMethods)(octokit);
    return {
        rest: api
    };
}
$d8b6ffd44fb09d6b$export$a1fe24cc78039d62.VERSION = (0, $5fe5610a0f95ba1d$exports.VERSION);
function $d8b6ffd44fb09d6b$export$fb02754b3672af31(octokit) {
    const api = (0, $c323c8296ad99b95$exports.endpointsToMethods)(octokit);
    return {
        ...api,
        rest: api
    };
}
$d8b6ffd44fb09d6b$export$fb02754b3672af31.VERSION = (0, $5fe5610a0f95ba1d$exports.VERSION);


