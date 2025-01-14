require("./esm.f174e5c8.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $a0052948bc6d12ee$exports = {};
$a0052948bc6d12ee$exports = new URL("esm.f174e5c8.js", "file:" + __filename).toString();


const $09b8f49d0c44a1b2$var$RedactedString = "REDACTED";
// Make sure this list is up-to-date with the one under core/logger/Readme#Keyconcepts
const $09b8f49d0c44a1b2$var$defaultAllowedHeaderNames = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Accept-Encoding",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent",
    "WWW-Authenticate"
];
const $09b8f49d0c44a1b2$var$defaultAllowedQueryParameters = [
    "api-version"
];
class $09b8f49d0c44a1b2$export$a6cec3dfaf45e6ac {
    constructor({ additionalAllowedHeaderNames: allowedHeaderNames = [], additionalAllowedQueryParameters: allowedQueryParameters = [] } = {}){
        allowedHeaderNames = $09b8f49d0c44a1b2$var$defaultAllowedHeaderNames.concat(allowedHeaderNames);
        allowedQueryParameters = $09b8f49d0c44a1b2$var$defaultAllowedQueryParameters.concat(allowedQueryParameters);
        this.allowedHeaderNames = new Set(allowedHeaderNames.map((n)=>n.toLowerCase()));
        this.allowedQueryParameters = new Set(allowedQueryParameters.map((p)=>p.toLowerCase()));
    }
    sanitize(obj) {
        const seen = new Set();
        return JSON.stringify(obj, (key, value)=>{
            // Ensure Errors include their interesting non-enumerable members
            if (value instanceof Error) return Object.assign(Object.assign({}, value), {
                name: value.name,
                message: value.message
            });
            if (key === "headers") return this.sanitizeHeaders(value);
            else if (key === "url") return this.sanitizeUrl(value);
            else if (key === "query") return this.sanitizeQuery(value);
            else if (key === "body") // Don't log the request body
            return undefined;
            else if (key === "response") // Don't log response again
            return undefined;
            else if (key === "operationSpec") // When using sendOperationRequest, the request carries a massive
            // field with the autorest spec. No need to log it.
            return undefined;
            else if (Array.isArray(value) || (0, $a0052948bc6d12ee$exports.isObject)(value)) {
                if (seen.has(value)) return "[Circular]";
                seen.add(value);
            }
            return value;
        }, 2);
    }
    sanitizeUrl(value) {
        if (typeof value !== "string" || value === null || value === "") return value;
        const url = new URL(value);
        if (!url.search) return value;
        for (const [key] of url.searchParams)if (!this.allowedQueryParameters.has(key.toLowerCase())) url.searchParams.set(key, $09b8f49d0c44a1b2$var$RedactedString);
        return url.toString();
    }
    sanitizeHeaders(obj) {
        const sanitized = {};
        for (const key of Object.keys(obj))if (this.allowedHeaderNames.has(key.toLowerCase())) sanitized[key] = obj[key];
        else sanitized[key] = $09b8f49d0c44a1b2$var$RedactedString;
        return sanitized;
    }
    sanitizeQuery(value) {
        if (typeof value !== "object" || value === null) return value;
        const sanitized = {};
        for (const k of Object.keys(value))if (this.allowedQueryParameters.has(k.toLowerCase())) sanitized[k] = value[k];
        else sanitized[k] = $09b8f49d0c44a1b2$var$RedactedString;
        return sanitized;
    }
}


