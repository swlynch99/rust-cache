require("./package.f3908d95.js");

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getUserAgentString = void 0;
var $4ba26f9f8d594891$exports = {};
$4ba26f9f8d594891$exports = new URL("package.f3908d95.js", "file:" + __filename).toString();


/**
 * Ensure that this User Agent String is used in all HTTP calls so that we can monitor telemetry between different versions of this package
 */ function $de6f043a47d4e407$var$getUserAgentString() {
    return `@actions/cache-${$4ba26f9f8d594891$exports.version}`;
}
module.exports.getUserAgentString = $de6f043a47d4e407$var$getUserAgentString;


//# sourceMappingURL=user-agent.8d090254.js.map
