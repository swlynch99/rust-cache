require("./auth.f69aea1e.js");
require("./hook.6c74997d.js");

var $2c2256840b9aced2$exports = {};
$2c2256840b9aced2$exports = new URL("auth.f69aea1e.js", "file:" + __filename).toString();


var $1d9a84aaba4108b4$exports = {};
$1d9a84aaba4108b4$exports = new URL("hook.6c74997d.js", "file:" + __filename).toString();


const $0610789f6fcc0c79$export$acf0006d85231cb6 = function createTokenAuth2(token) {
    if (!token) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    if (typeof token !== "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    token = token.replace(/^(token|bearer) +/i, "");
    return Object.assign((0, $2c2256840b9aced2$exports.auth).bind(null, token), {
        hook: (0, $1d9a84aaba4108b4$exports.hook).bind(null, token)
    });
};


