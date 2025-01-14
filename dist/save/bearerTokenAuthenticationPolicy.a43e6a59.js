require("./tokenCycler.996d4a00.js");
require("./log.38c924ec.js");
require("./restError.027e27ea.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $00cf0abfc07e2e0b$exports = {};
$00cf0abfc07e2e0b$exports = new URL("tokenCycler.996d4a00.js", "file:" + __filename).toString();



var $1A2DQ = parcelRequire("1A2DQ");

var $cl8q3 = parcelRequire("cl8q3");
const $b584e5b02c9ab386$export$2f6555b1e4373019 = "bearerTokenAuthenticationPolicy";
/**
 * Try to send the given request.
 *
 * When a response is received, returns a tuple of the response received and, if the response was received
 * inside a thrown RestError, the RestError that was thrown.
 *
 * Otherwise, if an error was thrown while sending the request that did not provide an underlying response, it
 * will be rethrown.
 */ async function $b584e5b02c9ab386$var$trySendRequest(request, next) {
    try {
        return [
            await next(request),
            undefined
        ];
    } catch (e) {
        if ((0, $cl8q3.isRestError)(e) && e.response) return [
            e.response,
            e
        ];
        else throw e;
    }
}
/**
 * Default authorize request handler
 */ async function $b584e5b02c9ab386$var$defaultAuthorizeRequest(options) {
    const { scopes: scopes, getAccessToken: getAccessToken, request: request } = options;
    // Enable CAE true by default
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
        enableCae: true
    };
    const accessToken = await getAccessToken(scopes, getTokenOptions);
    if (accessToken) options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
}
/**
 * We will retrieve the challenge only if the response status code was 401,
 * and if the response contained the header "WWW-Authenticate" with a non-empty value.
 */ function $b584e5b02c9ab386$var$isChallengeResponse(response) {
    return response.status === 401 && response.headers.has("WWW-Authenticate");
}
/**
 * Re-authorize the request for CAE challenge.
 * The response containing the challenge is `options.response`.
 * If this method returns true, the underlying request will be sent once again.
 */ async function $b584e5b02c9ab386$var$authorizeRequestOnCaeChallenge(onChallengeOptions, caeClaims) {
    var _a;
    const { scopes: scopes } = onChallengeOptions;
    const accessToken = await onChallengeOptions.getAccessToken(scopes, {
        enableCae: true,
        claims: caeClaims
    });
    if (!accessToken) return false;
    onChallengeOptions.request.headers.set("Authorization", `${(_a = accessToken.tokenType) !== null && _a !== void 0 ? _a : "Bearer"} ${accessToken.token}`);
    return true;
}
function $b584e5b02c9ab386$export$e5acbbd47d7d0b35(options) {
    var _a, _b, _c;
    const { credential: credential, scopes: scopes, challengeCallbacks: challengeCallbacks } = options;
    const logger = options.logger || (0, $1A2DQ.logger);
    const callbacks = {
        authorizeRequest: (_b = (_a = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequest) === null || _a === void 0 ? void 0 : _a.bind(challengeCallbacks)) !== null && _b !== void 0 ? _b : $b584e5b02c9ab386$var$defaultAuthorizeRequest,
        authorizeRequestOnChallenge: (_c = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequestOnChallenge) === null || _c === void 0 ? void 0 : _c.bind(challengeCallbacks)
    };
    // This function encapsulates the entire process of reliably retrieving the token
    // The options are left out of the public API until there's demand to configure this.
    // Remember to extend `BearerTokenAuthenticationPolicyOptions` with `TokenCyclerOptions`
    // in order to pass through the `options` object.
    const getAccessToken = credential ? (0, $00cf0abfc07e2e0b$exports.createTokenCycler)(credential /* , options */ ) : ()=>Promise.resolve(null);
    return {
        name: $b584e5b02c9ab386$export$2f6555b1e4373019,
        /**
         * If there's no challenge parameter:
         * - It will try to retrieve the token using the cache, or the credential's getToken.
         * - Then it will try the next policy with or without the retrieved token.
         *
         * It uses the challenge parameters to:
         * - Skip a first attempt to get the token from the credential if there's no cached token,
         *   since it expects the token to be retrievable only after the challenge.
         * - Prepare the outgoing request if the `prepareRequest` method has been provided.
         * - Send an initial request to receive the challenge if it fails.
         * - Process a challenge if the response contains it.
         * - Retrieve a token with the challenge information, then re-send the request.
         */ async sendRequest (request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            await callbacks.authorizeRequest({
                scopes: Array.isArray(scopes) ? scopes : [
                    scopes
                ],
                request: request,
                getAccessToken: getAccessToken,
                logger: logger
            });
            let response;
            let error;
            let shouldSendRequest;
            [response, error] = await $b584e5b02c9ab386$var$trySendRequest(request, next);
            if ($b584e5b02c9ab386$var$isChallengeResponse(response)) {
                let claims = $b584e5b02c9ab386$var$getCaeChallengeClaims(response.headers.get("WWW-Authenticate"));
                // Handle CAE by default when receive CAE claim
                if (claims) {
                    let parsedClaim;
                    // Return the response immediately if claims is not a valid base64 encoded string
                    try {
                        parsedClaim = atob(claims);
                    } catch (e) {
                        logger.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
                        return response;
                    }
                    shouldSendRequest = await $b584e5b02c9ab386$var$authorizeRequestOnCaeChallenge({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        response: response,
                        request: request,
                        getAccessToken: getAccessToken,
                        logger: logger
                    }, parsedClaim);
                    // Send updated request and handle response for RestError
                    if (shouldSendRequest) [response, error] = await $b584e5b02c9ab386$var$trySendRequest(request, next);
                } else if (callbacks.authorizeRequestOnChallenge) {
                    // Handle custom challenges when client provides custom callback
                    shouldSendRequest = await callbacks.authorizeRequestOnChallenge({
                        scopes: Array.isArray(scopes) ? scopes : [
                            scopes
                        ],
                        request: request,
                        response: response,
                        getAccessToken: getAccessToken,
                        logger: logger
                    });
                    // Send updated request and handle response for RestError
                    if (shouldSendRequest) [response, error] = await $b584e5b02c9ab386$var$trySendRequest(request, next);
                    // If we get another CAE Claim, we will handle it by default and return whatever value we receive for this
                    if ($b584e5b02c9ab386$var$isChallengeResponse(response)) {
                        claims = $b584e5b02c9ab386$var$getCaeChallengeClaims(response.headers.get("WWW-Authenticate"));
                        if (claims) {
                            let parsedClaim;
                            try {
                                parsedClaim = atob(claims);
                            } catch (e) {
                                logger.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${claims}`);
                                return response;
                            }
                            shouldSendRequest = await $b584e5b02c9ab386$var$authorizeRequestOnCaeChallenge({
                                scopes: Array.isArray(scopes) ? scopes : [
                                    scopes
                                ],
                                response: response,
                                request: request,
                                getAccessToken: getAccessToken,
                                logger: logger
                            }, parsedClaim);
                            // Send updated request and handle response for RestError
                            if (shouldSendRequest) [response, error] = await $b584e5b02c9ab386$var$trySendRequest(request, next);
                        }
                    }
                }
            }
            if (error) throw error;
            else return response;
        }
    };
}
function $b584e5b02c9ab386$export$196b61f4919b632(challenges) {
    // Challenge regex seperates the string to individual challenges with different schemes in the format `Scheme a="b", c=d`
    // The challenge regex captures parameteres with either quotes values or unquoted values
    const challengeRegex = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g;
    // Parameter regex captures the claims group removed from the scheme in the format `a="b"` and `c="d"`
    // CAE challenge always have quoted parameters. For more reference, https://learn.microsoft.com/entra/identity-platform/claims-challenge
    const paramRegex = /(\w+)="([^"]*)"/g;
    const parsedChallenges = [];
    let match;
    // Iterate over each challenge match
    while((match = challengeRegex.exec(challenges)) !== null){
        const scheme = match[1];
        const paramsString = match[2];
        const params = {};
        let paramMatch;
        // Iterate over each parameter match
        while((paramMatch = paramRegex.exec(paramsString)) !== null)params[paramMatch[1]] = paramMatch[2];
        parsedChallenges.push({
            scheme: scheme,
            params: params
        });
    }
    return parsedChallenges;
}
/**
 * Parse a pipeline response and look for a CAE challenge with "Bearer" scheme
 * Return the value in the header without parsing the challenge
 * @internal
 */ function $b584e5b02c9ab386$var$getCaeChallengeClaims(challenges) {
    var _a;
    if (!challenges) return;
    // Find all challenges present in the header
    const parsedChallenges = $b584e5b02c9ab386$export$196b61f4919b632(challenges);
    return (_a = parsedChallenges.find((x)=>x.scheme === "Bearer" && x.params.claims && x.params.error === "insufficient_claims")) === null || _a === void 0 ? void 0 : _a.params.claims;
}


//# sourceMappingURL=bearerTokenAuthenticationPolicy.a43e6a59.js.map
