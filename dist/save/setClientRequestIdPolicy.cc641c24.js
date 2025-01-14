// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the setClientRequestIdPolicy.
 */ const $0061d5302979e576$export$b96f0a399433e783 = "setClientRequestIdPolicy";
function $0061d5302979e576$export$89a9abde4287c015(requestIdHeaderName = "x-ms-client-request-id") {
    return {
        name: $0061d5302979e576$export$b96f0a399433e783,
        async sendRequest (request, next) {
            if (!request.headers.has(requestIdHeaderName)) request.headers.set(requestIdHeaderName, request.requestId);
            return next(request);
        }
    };
}


//# sourceMappingURL=setClientRequestIdPolicy.cc641c24.js.map
