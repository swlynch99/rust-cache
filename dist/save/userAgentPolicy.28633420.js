require("./userAgent.69569523.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $ca3a67a7ac285291$exports = {};
$ca3a67a7ac285291$exports = new URL("userAgent.69569523.js", "file:" + __filename).toString();


const $8aa92f973df445f9$var$UserAgentHeaderName = (0, $ca3a67a7ac285291$exports.getUserAgentHeaderName)();
const $8aa92f973df445f9$export$5bf0c6ccddee0872 = "userAgentPolicy";
function $8aa92f973df445f9$export$df2ab2ef63bad35a(options = {}) {
    const userAgentValue = (0, $ca3a67a7ac285291$exports.getUserAgentValue)(options.userAgentPrefix);
    return {
        name: $8aa92f973df445f9$export$5bf0c6ccddee0872,
        async sendRequest (request, next) {
            if (!request.headers.has($8aa92f973df445f9$var$UserAgentHeaderName)) request.headers.set($8aa92f973df445f9$var$UserAgentHeaderName, await userAgentValue);
            return next(request);
        }
    };
}


//# sourceMappingURL=userAgentPolicy.28633420.js.map
