// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The programmatic identifier of the ndJsonPolicy.
 */ const $042e8037944b5473$export$c027970a93d19ddb = "ndJsonPolicy";
function $042e8037944b5473$export$fb7e2fcfb4c00771() {
    return {
        name: $042e8037944b5473$export$c027970a93d19ddb,
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


//# sourceMappingURL=ndJsonPolicy.5bc09f7d.js.map
