require("./log.7103fd4e.js");
require("./sanitizer.0fc85cab.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $b6ea740f998a8e7e$exports = {};
$b6ea740f998a8e7e$exports = new URL("log.7103fd4e.js", "file:" + __filename).toString();


var $5385c26a2081c55d$exports = {};
$5385c26a2081c55d$exports = new URL("sanitizer.0fc85cab.js", "file:" + __filename).toString();


const $7de7d2f4c54f0704$export$162cd7b3c39e4c57 = "logPolicy";
function $7de7d2f4c54f0704$export$c96ba9e66d66ee29(options = {}) {
    var _a;
    const logger = (_a = options.logger) !== null && _a !== void 0 ? _a : (0, $b6ea740f998a8e7e$exports.logger).info;
    const sanitizer = new (0, $5385c26a2081c55d$exports.Sanitizer)({
        additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
    });
    return {
        name: $7de7d2f4c54f0704$export$162cd7b3c39e4c57,
        async sendRequest (request, next) {
            if (!logger.enabled) return next(request);
            logger(`Request: ${sanitizer.sanitize(request)}`);
            const response = await next(request);
            logger(`Response status code: ${response.status}`);
            logger(`Headers: ${sanitizer.sanitize(response.headers)}`);
            return response;
        }
    };
}


