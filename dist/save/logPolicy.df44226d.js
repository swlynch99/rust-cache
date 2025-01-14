require("./log.38c924ec.js");
require("./sanitizer.1a683bd1.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $a511b24e99ac5c58$exports = {};
$a511b24e99ac5c58$exports = new URL("log.38c924ec.js", "file:" + __filename).toString();


var $3643bb2b9defc7a2$exports = {};
$3643bb2b9defc7a2$exports = new URL("sanitizer.1a683bd1.js", "file:" + __filename).toString();


const $519caeb422aa0892$export$162cd7b3c39e4c57 = "logPolicy";
function $519caeb422aa0892$export$c96ba9e66d66ee29(options = {}) {
    var _a;
    const logger = (_a = options.logger) !== null && _a !== void 0 ? _a : (0, $a511b24e99ac5c58$exports.logger).info;
    const sanitizer = new (0, $3643bb2b9defc7a2$exports.Sanitizer)({
        additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
    });
    return {
        name: $519caeb422aa0892$export$162cd7b3c39e4c57,
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


//# sourceMappingURL=logPolicy.df44226d.js.map
