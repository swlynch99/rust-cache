// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Name of the TLS Policy
 */ const $ae3d84432ae94551$export$de2418bd56fd77e7 = "tlsPolicy";
function $ae3d84432ae94551$export$6f1cb49a51acb2b0(tlsSettings) {
    return {
        name: $ae3d84432ae94551$export$de2418bd56fd77e7,
        sendRequest: async (req, next)=>{
            // Users may define a request tlsSettings, honor those over the client level one
            if (!req.tlsSettings) req.tlsSettings = tlsSettings;
            return next(req);
        }
    };
}


//# sourceMappingURL=tlsPolicy.df002629.js.map
