// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the ndJsonPolicy.
 */ const $3c9e5fe754bd22c9$export$c027970a93d19ddb = "ndJsonPolicy";
function $3c9e5fe754bd22c9$export$fb7e2fcfb4c00771() {
    return {
        name: $3c9e5fe754bd22c9$export$c027970a93d19ddb,
        async sendRequest (request, next) {
            // There currently isn't a good way to bypass the serializer
            if (typeof request.body === "string" && request.body.startsWith("[")) {
                const body = JSON.parse(request.body);
                if (Array.isArray(body)) request.body = body.map((item)=>JSON.stringify(item) + "\n").join("");
            }
            return next(request);
        }
    };
}


