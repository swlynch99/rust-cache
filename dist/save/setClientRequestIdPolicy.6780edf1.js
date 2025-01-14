// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the setClientRequestIdPolicy.
 */ const $2e53b7e9f2dd0ce3$export$b96f0a399433e783 = "setClientRequestIdPolicy";
function $2e53b7e9f2dd0ce3$export$89a9abde4287c015(requestIdHeaderName = "x-ms-client-request-id") {
    return {
        name: $2e53b7e9f2dd0ce3$export$b96f0a399433e783,
        async sendRequest (request, next) {
            if (!request.headers.has(requestIdHeaderName)) request.headers.set(requestIdHeaderName, request.requestId);
            return next(request);
        }
    };
}


