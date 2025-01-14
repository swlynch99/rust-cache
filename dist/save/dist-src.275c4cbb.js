require("./dist-web.adcbd3ad.js");
require("./once.79eafaa9.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $9d2ce8b766620ed8$exports = {};
$9d2ce8b766620ed8$exports = new URL("dist-web.adcbd3ad.js", "file:" + __filename).toString();


var $b223c6afa02aba10$exports = {};
$b223c6afa02aba10$exports = new URL("once.79eafaa9.js", "file:" + __filename).toString();


const $ed22a16108775522$var$logOnceCode = (0, (/*@__PURE__*/$parcel$interopDefault($b223c6afa02aba10$exports)))((deprecation)=>console.warn(deprecation));
const $ed22a16108775522$var$logOnceHeaders = (0, (/*@__PURE__*/$parcel$interopDefault($b223c6afa02aba10$exports)))((deprecation)=>console.warn(deprecation));
class $ed22a16108775522$export$43ee7d0e4f429743 extends Error {
    constructor(message, statusCode, options){
        super(message);
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        this.name = "HttpError";
        this.status = statusCode;
        let headers;
        if ("headers" in options && typeof options.headers !== "undefined") headers = options.headers;
        if ("response" in options) {
            this.response = options.response;
            headers = options.response.headers;
        }
        const requestCopy = Object.assign({}, options.request);
        if (options.request.headers.authorization) requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
        });
        requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = requestCopy;
        Object.defineProperty(this, "code", {
            get () {
                $ed22a16108775522$var$logOnceCode(new (0, $9d2ce8b766620ed8$exports.Deprecation)("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            }
        });
        Object.defineProperty(this, "headers", {
            get () {
                $ed22a16108775522$var$logOnceHeaders(new (0, $9d2ce8b766620ed8$exports.Deprecation)("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
                return headers || {};
            }
        });
    }
}


//# sourceMappingURL=dist-src.275c4cbb.js.map
