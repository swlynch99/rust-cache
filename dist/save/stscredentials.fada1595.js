require("./build.da41aa52.js");
require("./transporters.b3566606.js");
require("./oauth2common.26fc712c.js");
var $9E3lD$querystring = require("querystring");


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
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.StsCredentials = void 0;

var $47hCt = parcelRequire("47hCt");


var $1icVl = parcelRequire("1icVl");
var $a596192311c29935$exports = {};
$a596192311c29935$exports = new URL("oauth2common.26fc712c.js", "file:" + __filename).toString();


/**
 * Implements the OAuth 2.0 token exchange based on
 * https://tools.ietf.org/html/rfc8693
 */ class $0c02e7dac7c2f850$var$StsCredentials extends $a596192311c29935$exports.OAuthClientAuthHandler {
    /**
     * Initializes an STS credentials instance.
     * @param tokenExchangeEndpoint The token exchange endpoint.
     * @param clientAuthentication The client authentication credentials if
     *   available.
     */ constructor(tokenExchangeEndpoint, clientAuthentication){
        super(clientAuthentication);
        this.tokenExchangeEndpoint = tokenExchangeEndpoint;
        this.transporter = new $1icVl.DefaultTransporter();
    }
    /**
     * Exchanges the provided token for another type of token based on the
     * rfc8693 spec.
     * @param stsCredentialsOptions The token exchange options used to populate
     *   the token exchange request.
     * @param additionalHeaders Optional additional headers to pass along the
     *   request.
     * @param options Optional additional GCP-specific non-spec defined options
     *   to send with the request.
     *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
     * @return A promise that resolves with the token exchange response containing
     *   the requested token and its expiration time.
     */ async exchangeToken(stsCredentialsOptions, additionalHeaders, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options) {
        var _a, _b, _c;
        const values = {
            grant_type: stsCredentialsOptions.grantType,
            resource: stsCredentialsOptions.resource,
            audience: stsCredentialsOptions.audience,
            scope: (_a = stsCredentialsOptions.scope) === null || _a === void 0 ? void 0 : _a.join(' '),
            requested_token_type: stsCredentialsOptions.requestedTokenType,
            subject_token: stsCredentialsOptions.subjectToken,
            subject_token_type: stsCredentialsOptions.subjectTokenType,
            actor_token: (_b = stsCredentialsOptions.actingParty) === null || _b === void 0 ? void 0 : _b.actorToken,
            actor_token_type: (_c = stsCredentialsOptions.actingParty) === null || _c === void 0 ? void 0 : _c.actorTokenType,
            // Non-standard GCP-specific options.
            options: options && JSON.stringify(options)
        };
        // Remove undefined fields.
        Object.keys(values).forEach((key)=>{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof values[key] === 'undefined') // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete values[key];
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        // Inject additional STS headers if available.
        Object.assign(headers, additionalHeaders || {});
        const opts = {
            ...$0c02e7dac7c2f850$var$StsCredentials.RETRY_CONFIG,
            url: this.tokenExchangeEndpoint.toString(),
            method: 'POST',
            headers: headers,
            data: $9E3lD$querystring.stringify(values),
            responseType: 'json'
        };
        // Apply OAuth client authentication.
        this.applyClientAuthenticationOptions(opts);
        try {
            const response = await this.transporter.request(opts);
            // Successful response.
            const stsSuccessfulResponse = response.data;
            stsSuccessfulResponse.res = response;
            return stsSuccessfulResponse;
        } catch (error) {
            // Translate error to OAuthError.
            if (error instanceof $47hCt.GaxiosError && error.response) throw (0, $a596192311c29935$exports.getErrorFromOAuthErrorResponse)(error.response.data, // Preserve other fields from the original error.
            error);
            // Request could fail before the server responds.
            throw error;
        }
    }
}
module.exports.StsCredentials = $0c02e7dac7c2f850$var$StsCredentials;


//# sourceMappingURL=stscredentials.fada1595.js.map
