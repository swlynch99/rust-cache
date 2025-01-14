// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Name of the TLS Policy
 */ const $0a362b83ec15f6df$export$de2418bd56fd77e7 = "tlsPolicy";
function $0a362b83ec15f6df$export$6f1cb49a51acb2b0(tlsSettings) {
    return {
        name: $0a362b83ec15f6df$export$de2418bd56fd77e7,
        sendRequest: async (req, next)=>{
            // Users may define a request tlsSettings, honor those over the client level one
            if (!req.tlsSettings) req.tlsSettings = tlsSettings;
            return next(req);
        }
    };
}


