require("./userAgentPlatform.bb3ff862.js");
require("./constants.5683eabb.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $852af252433306d0$exports = {};
$852af252433306d0$exports = new URL("userAgentPlatform.bb3ff862.js", "file:" + __filename).toString();


var $2eebac9ad2c1690c$exports = {};
$2eebac9ad2c1690c$exports = new URL("constants.5683eabb.js", "file:" + __filename).toString();


function $a254ff60fb8ec667$var$getUserAgentString(telemetryInfo) {
    const parts = [];
    for (const [key, value] of telemetryInfo){
        const token = value ? `${key}/${value}` : key;
        parts.push(token);
    }
    return parts.join(" ");
}
function $a254ff60fb8ec667$export$f9841484781380f9() {
    return (0, $852af252433306d0$exports.getHeaderName)();
}
async function $a254ff60fb8ec667$export$221b71a1214c5f7a(prefix) {
    const runtimeInfo = new Map();
    runtimeInfo.set("core-rest-pipeline", (0, $2eebac9ad2c1690c$exports.SDK_VERSION));
    await (0, $852af252433306d0$exports.setPlatformSpecificData)(runtimeInfo);
    const defaultAgent = $a254ff60fb8ec667$var$getUserAgentString(runtimeInfo);
    const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
    return userAgentValue;
}


//# sourceMappingURL=userAgent.69569523.js.map
