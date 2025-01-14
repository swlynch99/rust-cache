require("./authclient.c802c873.js");
require("./stscredentials.fada1595.js");
var $eytfJ$stream = require("stream");


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
module.exports.DownscopedClient = module.exports.EXPIRATION_TIME_OFFSET = module.exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;


var $4luEl = parcelRequire("4luEl");

var $11W2v = parcelRequire("11W2v");
/**
 * The required token exchange grant_type: rfc8693#section-2.1
 */ const $6b78b4c8b6886928$var$STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
/**
 * The requested token exchange requested_token_type: rfc8693#section-2.1
 */ const $6b78b4c8b6886928$var$STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/**
 * The requested token exchange subject_token_type: rfc8693#section-2.1
 */ const $6b78b4c8b6886928$var$STS_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/**
 * The maximum number of access boundary rules a Credential Access Boundary
 * can contain.
 */ module.exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
/**
 * Offset to take into account network delays and server clock skews.
 */ module.exports.EXPIRATION_TIME_OFFSET = 300000;
/**
 * Defines a set of Google credentials that are downscoped from an existing set
 * of Google OAuth2 credentials. This is useful to restrict the Identity and
 * Access Management (IAM) permissions that a short-lived credential can use.
 * The common pattern of usage is to have a token broker with elevated access
 * generate these downscoped credentials from higher access source credentials
 * and pass the downscoped short-lived access tokens to a token consumer via
 * some secure authenticated channel for limited access to Google Cloud Storage
 * resources.
 */ class $6b78b4c8b6886928$var$DownscopedClient extends $4luEl.AuthClient {
    /**
     * Instantiates a downscoped client object using the provided source
     * AuthClient and credential access boundary rules.
     * To downscope permissions of a source AuthClient, a Credential Access
     * Boundary that specifies which resources the new credential can access, as
     * well as an upper bound on the permissions that are available on each
     * resource, has to be defined. A downscoped client can then be instantiated
     * using the source AuthClient and the Credential Access Boundary.
     * @param authClient The source AuthClient to be downscoped based on the
     *   provided Credential Access Boundary rules.
     * @param credentialAccessBoundary The Credential Access Boundary which
     *   contains a list of access boundary rules. Each rule contains information
     *   on the resource that the rule applies to, the upper bound of the
     *   permissions that are available on that resource and an optional
     *   condition to further restrict permissions.
     * @param additionalOptions **DEPRECATED, set this in the provided `authClient`.**
     *   Optional additional behavior customization options.
     * @param quotaProjectId **DEPRECATED, set this in the provided `authClient`.**
     *   Optional quota project id for setting up in the x-goog-user-project header.
     */ constructor(authClient, credentialAccessBoundary, additionalOptions, quotaProjectId){
        super({
            ...additionalOptions,
            quotaProjectId: quotaProjectId
        });
        this.authClient = authClient;
        this.credentialAccessBoundary = credentialAccessBoundary;
        // Check 1-10 Access Boundary Rules are defined within Credential Access
        // Boundary.
        if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) throw new Error('At least one access boundary rule needs to be defined.');
        else if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > module.exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw new Error('The provided access boundary has more than ' + `${module.exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
        // Check at least one permission should be defined in each Access Boundary
        // Rule.
        for (const rule of credentialAccessBoundary.accessBoundary.accessBoundaryRules){
            if (rule.availablePermissions.length === 0) throw new Error('At least one permission should be defined in access boundary rules.');
        }
        this.stsCredential = new $11W2v.StsCredentials(`https://sts.${this.universeDomain}/v1/token`);
        this.cachedDownscopedAccessToken = null;
    }
    /**
     * Provides a mechanism to inject Downscoped access tokens directly.
     * The expiry_date field is required to facilitate determination of the token
     * expiration which would make it easier for the token consumer to handle.
     * @param credentials The Credentials object to set on the current client.
     */ setCredentials(credentials) {
        if (!credentials.expiry_date) throw new Error("The access token expiry_date field is missing in the provided credentials.");
        super.setCredentials(credentials);
        this.cachedDownscopedAccessToken = credentials;
    }
    async getAccessToken() {
        // If the cached access token is unavailable or expired, force refresh.
        // The Downscoped access token will be returned in
        // DownscopedAccessTokenResponse format.
        if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
        // Return Downscoped access token in DownscopedAccessTokenResponse format.
        return {
            token: this.cachedDownscopedAccessToken.access_token,
            expirationTime: this.cachedDownscopedAccessToken.expiry_date,
            res: this.cachedDownscopedAccessToken.res
        };
    }
    /**
     * The main authentication interface. It takes an optional url which when
     * present is the endpoint being accessed, and returns a Promise which
     * resolves with authorization header fields.
     *
     * The result has the form:
     * { Authorization: 'Bearer <access_token_value>' }
     */ async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessTokenResponse.token}`
        };
        return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
        if (callback) this.requestAsync(opts).then((r)=>callback(null, r), (e)=>{
            return callback(e, e.response);
        });
        else return this.requestAsync(opts);
    }
    /**
     * Authenticates the provided HTTP request, processes it and resolves with the
     * returned response.
     * @param opts The HTTP request options.
     * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure
     * @return A promise that resolves with the successful response.
     */ async requestAsync(opts, reAuthRetried = false) {
        let response;
        try {
            const requestHeaders = await this.getRequestHeaders();
            opts.headers = opts.headers || {};
            if (requestHeaders && requestHeaders['x-goog-user-project']) opts.headers['x-goog-user-project'] = requestHeaders['x-goog-user-project'];
            if (requestHeaders && requestHeaders.Authorization) opts.headers.Authorization = requestHeaders.Authorization;
            response = await this.transporter.request(opts);
        } catch (e) {
            const res = e.response;
            if (res) {
                const statusCode = res.status;
                // Retry the request for metadata if the following criteria are true:
                // - We haven't already retried.  It only makes sense to retry once.
                // - The response was a 401 or a 403
                // - The request didn't send a readableStream
                // - forceRefreshOnFailure is true
                const isReadableStream = res.config.data instanceof $eytfJ$stream.Readable;
                const isAuthErr = statusCode === 401 || statusCode === 403;
                if (!reAuthRetried && isAuthErr && !isReadableStream && this.forceRefreshOnFailure) {
                    await this.refreshAccessTokenAsync();
                    return await this.requestAsync(opts, true);
                }
            }
            throw e;
        }
        return response;
    }
    /**
     * Forces token refresh, even if unexpired tokens are currently cached.
     * GCP access tokens are retrieved from authclient object/source credential.
     * Then GCP access tokens are exchanged for downscoped access tokens via the
     * token exchange endpoint.
     * @return A promise that resolves with the fresh downscoped access token.
     */ async refreshAccessTokenAsync() {
        var _a;
        // Retrieve GCP access token from source credential.
        const subjectToken = (await this.authClient.getAccessToken()).token;
        // Construct the STS credentials options.
        const stsCredentialsOptions = {
            grantType: $6b78b4c8b6886928$var$STS_GRANT_TYPE,
            requestedTokenType: $6b78b4c8b6886928$var$STS_REQUEST_TOKEN_TYPE,
            subjectToken: subjectToken,
            subjectTokenType: $6b78b4c8b6886928$var$STS_SUBJECT_TOKEN_TYPE
        };
        // Exchange the source AuthClient access token for a Downscoped access
        // token.
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, undefined, this.credentialAccessBoundary);
        /**
         * The STS endpoint will only return the expiration time for the downscoped
         * access token if the original access token represents a service account.
         * The downscoped token's expiration time will always match the source
         * credential expiration. When no expires_in is returned, we can copy the
         * source credential's expiration time.
         */ const sourceCredExpireDate = ((_a = this.authClient.credentials) === null || _a === void 0 ? void 0 : _a.expiry_date) || null;
        const expiryDate = stsResponse.expires_in ? new Date().getTime() + stsResponse.expires_in * 1000 : sourceCredExpireDate;
        // Save response in cached access token.
        this.cachedDownscopedAccessToken = {
            access_token: stsResponse.access_token,
            expiry_date: expiryDate,
            res: stsResponse.res
        };
        // Save credentials.
        this.credentials = {};
        Object.assign(this.credentials, this.cachedDownscopedAccessToken);
        delete this.credentials.res;
        // Trigger tokens event to notify external listeners.
        this.emit('tokens', {
            refresh_token: null,
            expiry_date: this.cachedDownscopedAccessToken.expiry_date,
            access_token: this.cachedDownscopedAccessToken.access_token,
            token_type: 'Bearer',
            id_token: null
        });
        // Return the cached access token.
        return this.cachedDownscopedAccessToken;
    }
    /**
     * Returns whether the provided credentials are expired or not.
     * If there is no expiry time, assumes the token is not expired or expiring.
     * @param downscopedAccessToken The credentials to check for expiration.
     * @return Whether the credentials are expired or not.
     */ isExpired(downscopedAccessToken) {
        const now = new Date().getTime();
        return downscopedAccessToken.expiry_date ? now >= downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis : false;
    }
}
module.exports.DownscopedClient = $6b78b4c8b6886928$var$DownscopedClient;


//# sourceMappingURL=downscopedclient.422eba98.js.map
