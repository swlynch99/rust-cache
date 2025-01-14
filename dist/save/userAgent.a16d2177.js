require("./userAgentPlatform.d3f6f6fc.js");
require("./constants.ccb0eb27.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $b7e40251e91c5e52$exports = {};
$b7e40251e91c5e52$exports = new URL("userAgentPlatform.d3f6f6fc.js", "file:" + __filename).toString();


var $df60a8fad72c6f4c$exports = {};
$df60a8fad72c6f4c$exports = new URL("constants.ccb0eb27.js", "file:" + __filename).toString();


function $efc4b24887c9984f$var$getUserAgentString(telemetryInfo) {
    const parts = [];
    for (const [key, value] of telemetryInfo){
        const token = value ? `${key}/${value}` : key;
        parts.push(token);
    }
    return parts.join(" ");
}
function $efc4b24887c9984f$export$f9841484781380f9() {
    return (0, $b7e40251e91c5e52$exports.getHeaderName)();
}
async function $efc4b24887c9984f$export$221b71a1214c5f7a(prefix) {
    const runtimeInfo = new Map();
    runtimeInfo.set("core-rest-pipeline", (0, $df60a8fad72c6f4c$exports.SDK_VERSION));
    await (0, $b7e40251e91c5e52$exports.setPlatformSpecificData)(runtimeInfo);
    const defaultAgent = $efc4b24887c9984f$var$getUserAgentString(runtimeInfo);
    const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
    return userAgentValue;
}


