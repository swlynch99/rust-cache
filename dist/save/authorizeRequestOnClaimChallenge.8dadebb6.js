require("./log.409148a7.js");
require("./base64.068071cd.js");


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
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.authorizeRequestOnClaimChallenge = module.exports.parseCAEChallenge = void 0;

var $Yn0W6 = parcelRequire("Yn0W6");

var $h7HVX = parcelRequire("h7HVX");
/**
 * Converts: `Bearer a="b", c="d", Bearer d="e", f="g"`.
 * Into: `[ { a: 'b', c: 'd' }, { d: 'e', f: 'g' } ]`.
 *
 * @internal
 */ function $9c1dfc359629cab5$var$parseCAEChallenge(challenges) {
    const bearerChallenges = `, ${challenges.trim()}`.split(", Bearer ").filter((x)=>x);
    return bearerChallenges.map((challenge)=>{
        const challengeParts = `${challenge.trim()}, `.split('", ').filter((x)=>x);
        const keyValuePairs = challengeParts.map((keyValue)=>(([key, value])=>({
                    [key]: value
                }))(keyValue.trim().split('="')));
        // Key-value pairs to plain object:
        return keyValuePairs.reduce((a, b)=>Object.assign(Object.assign({}, a), b), {});
    });
}
module.exports.parseCAEChallenge = $9c1dfc359629cab5$var$parseCAEChallenge;
/**
 * This function can be used as a callback for the `bearerTokenAuthenticationPolicy` of `@azure/core-rest-pipeline`, to support CAE challenges:
 * [Continuous Access Evaluation](https://docs.microsoft.com/azure/active-directory/conditional-access/concept-continuous-access-evaluation).
 *
 * Call the `bearerTokenAuthenticationPolicy` with the following options:
 *
 * ```ts
 * import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
 * import { authorizeRequestOnClaimChallenge } from "@azure/core-client";
 *
 * const bearerTokenAuthenticationPolicy = bearerTokenAuthenticationPolicy({
 *   authorizeRequestOnChallenge: authorizeRequestOnClaimChallenge
 * });
 * ```
 *
 * Once provided, the `bearerTokenAuthenticationPolicy` policy will internally handle Continuous Access Evaluation (CAE) challenges.
 * When it can't complete a challenge it will return the 401 (unauthorized) response from ARM.
 *
 * Example challenge with claims:
 *
 * ```
 * Bearer authorization_uri="https://login.windows-ppe.net/", error="invalid_token",
 * error_description="User session has been revoked",
 * claims="eyJhY2Nlc3NfdG9rZW4iOnsibmJmIjp7ImVzc2VudGlhbCI6dHJ1ZSwgInZhbHVlIjoiMTYwMzc0MjgwMCJ9fX0="
 * ```
 */ async function $9c1dfc359629cab5$var$authorizeRequestOnClaimChallenge(onChallengeOptions) {
    const { scopes: scopes, response: response } = onChallengeOptions;
    const logger = onChallengeOptions.logger || $Yn0W6.logger;
    const challenge = response.headers.get("WWW-Authenticate");
    if (!challenge) {
        logger.info(`The WWW-Authenticate header was missing. Failed to perform the Continuous Access Evaluation authentication flow.`);
        return false;
    }
    const challenges = $9c1dfc359629cab5$var$parseCAEChallenge(challenge) || [];
    const parsedChallenge = challenges.find((x)=>x.claims);
    if (!parsedChallenge) {
        logger.info(`The WWW-Authenticate header was missing the necessary "claims" to perform the Continuous Access Evaluation authentication flow.`);
        return false;
    }
    const accessToken = await onChallengeOptions.getAccessToken(parsedChallenge.scope ? [
        parsedChallenge.scope
    ] : scopes, {
        claims: (0, $h7HVX.decodeStringToString)(parsedChallenge.claims)
    });
    if (!accessToken) return false;
    onChallengeOptions.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
    return true;
}
module.exports.authorizeRequestOnClaimChallenge = $9c1dfc359629cab5$var$authorizeRequestOnClaimChallenge;


