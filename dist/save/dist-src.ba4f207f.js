require("./dist-web.30ce1f28.js");
require("./once.d3085760.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $cfa12df071d7e68a$exports = {};
$cfa12df071d7e68a$exports = new URL("dist-web.30ce1f28.js", "file:" + __filename).toString();


var $384b0b548b0bc736$exports = {};
$384b0b548b0bc736$exports = new URL("once.d3085760.js", "file:" + __filename).toString();


const $c8bc173ec6c57ace$var$logOnceCode = (0, (/*@__PURE__*/$parcel$interopDefault($384b0b548b0bc736$exports)))((deprecation)=>console.warn(deprecation));
const $c8bc173ec6c57ace$var$logOnceHeaders = (0, (/*@__PURE__*/$parcel$interopDefault($384b0b548b0bc736$exports)))((deprecation)=>console.warn(deprecation));
class $c8bc173ec6c57ace$export$43ee7d0e4f429743 extends Error {
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
                $c8bc173ec6c57ace$var$logOnceCode(new (0, $cfa12df071d7e68a$exports.Deprecation)("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            }
        });
        Object.defineProperty(this, "headers", {
            get () {
                $c8bc173ec6c57ace$var$logOnceHeaders(new (0, $cfa12df071d7e68a$exports.Deprecation)("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
                return headers || {};
            }
        });
    }
}


