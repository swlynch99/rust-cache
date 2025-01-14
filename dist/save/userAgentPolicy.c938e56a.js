require("./userAgent.a16d2177.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $12be7e3f35f4e584$exports = {};
$12be7e3f35f4e584$exports = new URL("userAgent.a16d2177.js", "file:" + __filename).toString();


const $4622642b00c8f5ac$var$UserAgentHeaderName = (0, $12be7e3f35f4e584$exports.getUserAgentHeaderName)();
const $4622642b00c8f5ac$export$5bf0c6ccddee0872 = "userAgentPolicy";
function $4622642b00c8f5ac$export$df2ab2ef63bad35a(options = {}) {
    const userAgentValue = (0, $12be7e3f35f4e584$exports.getUserAgentValue)(options.userAgentPrefix);
    return {
        name: $4622642b00c8f5ac$export$5bf0c6ccddee0872,
        async sendRequest (request, next) {
            if (!request.headers.has($4622642b00c8f5ac$var$UserAgentHeaderName)) request.headers.set($4622642b00c8f5ac$var$UserAgentHeaderName, await userAgentValue);
            return next(request);
        }
    };
}


