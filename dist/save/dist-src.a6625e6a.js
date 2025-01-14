require("./auth.45f74162.js");
require("./hook.a48f93d5.js");

var $4c93eb336c7d225d$exports = {};
$4c93eb336c7d225d$exports = new URL("auth.45f74162.js", "file:" + __filename).toString();


var $aa67d4fa2c8bc819$exports = {};
$aa67d4fa2c8bc819$exports = new URL("hook.a48f93d5.js", "file:" + __filename).toString();


const $02f18ed4652df20e$export$acf0006d85231cb6 = function createTokenAuth2(token) {
    if (!token) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    if (typeof token !== "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    token = token.replace(/^(token|bearer) +/i, "");
    return Object.assign((0, $4c93eb336c7d225d$exports.auth).bind(null, token), {
        hook: (0, $aa67d4fa2c8bc819$exports.hook).bind(null, token)
    });
};


//# sourceMappingURL=dist-src.a6625e6a.js.map
