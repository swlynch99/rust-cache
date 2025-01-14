// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the decompressResponsePolicy.
 */ const $d7e9c8daabfb8a57$export$71b15ae52e40e9b9 = "decompressResponsePolicy";
function $d7e9c8daabfb8a57$export$a07d3565d8e03af5() {
    return {
        name: $d7e9c8daabfb8a57$export$71b15ae52e40e9b9,
        async sendRequest (request, next) {
            // HEAD requests have no body
            if (request.method !== "HEAD") request.headers.set("Accept-Encoding", "gzip,deflate");
            return next(request);
        }
    };
}


