// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the redirectPolicy.
 */ const $c1fa116555bf86aa$export$2bb09fba19b91286 = "redirectPolicy";
/**
 * Methods that are allowed to follow redirects 301 and 302
 */ const $c1fa116555bf86aa$var$allowedRedirect = [
    "GET",
    "HEAD"
];
function $c1fa116555bf86aa$export$aec739cfb985bd48(options = {}) {
    const { maxRetries: maxRetries = 20 } = options;
    return {
        name: $c1fa116555bf86aa$export$2bb09fba19b91286,
        async sendRequest (request, next) {
            const response = await next(request);
            return $c1fa116555bf86aa$var$handleRedirect(next, response, maxRetries);
        }
    };
}
async function $c1fa116555bf86aa$var$handleRedirect(next, response, maxRetries, currentRetries = 0) {
    const { request: request, status: status, headers: headers } = response;
    const locationHeader = headers.get("location");
    if (locationHeader && (status === 300 || status === 301 && $c1fa116555bf86aa$var$allowedRedirect.includes(request.method) || status === 302 && $c1fa116555bf86aa$var$allowedRedirect.includes(request.method) || status === 303 && request.method === "POST" || status === 307) && currentRetries < maxRetries) {
        const url = new URL(locationHeader, request.url);
        request.url = url.toString();
        // POST request with Status code 303 should be converted into a
        // redirected GET request if the redirect url is present in the location header
        if (status === 303) {
            request.method = "GET";
            request.headers.delete("Content-Length");
            delete request.body;
        }
        request.headers.delete("Authorization");
        const res = await next(request);
        return $c1fa116555bf86aa$var$handleRedirect(next, res, maxRetries, currentRetries + 1);
    }
    return response;
}


