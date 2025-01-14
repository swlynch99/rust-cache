require("./package.e19cdf64.js");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getUserAgentString = void 0;
var $45446abdebfd92cf$exports = {};
$45446abdebfd92cf$exports = new URL("package.e19cdf64.js", "file:" + __filename).toString();


/**
 * Ensure that this User Agent String is used in all HTTP calls so that we can monitor telemetry between different versions of this package
 */ function $abadf114cec41413$var$getUserAgentString() {
    return `@actions/cache-${$45446abdebfd92cf$exports.version}`;
}
module.exports.getUserAgentString = $abadf114cec41413$var$getUserAgentString;


