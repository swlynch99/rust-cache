require("./version.41c9c9f7.js");
require("./endpoints-to-methods.6ffd1e80.js");

var $c13447a90c687510$exports = {};
$c13447a90c687510$exports = new URL("version.41c9c9f7.js", "file:" + __filename).toString();


var $46c37765fbf4ec66$exports = {};
$46c37765fbf4ec66$exports = new URL("endpoints-to-methods.6ffd1e80.js", "file:" + __filename).toString();


function $804bd6974d4acd4a$export$a1fe24cc78039d62(octokit) {
    const api = (0, $46c37765fbf4ec66$exports.endpointsToMethods)(octokit);
    return {
        rest: api
    };
}
$804bd6974d4acd4a$export$a1fe24cc78039d62.VERSION = (0, $c13447a90c687510$exports.VERSION);
function $804bd6974d4acd4a$export$fb02754b3672af31(octokit) {
    const api = (0, $46c37765fbf4ec66$exports.endpointsToMethods)(octokit);
    return {
        ...api,
        rest: api
    };
}
$804bd6974d4acd4a$export$fb02754b3672af31.VERSION = (0, $c13447a90c687510$exports.VERSION);


//# sourceMappingURL=dist-src.8fdd5d24.js.map
