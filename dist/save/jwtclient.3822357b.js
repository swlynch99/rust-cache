require("./build.1d676ec8.js");
require("./jwtaccess.67ba0346.js");
require("./oauth2client.de126385.js");
require("./authclient.6e6a5fff.js");


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
// Copyright 2013 Google LLC
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
module.exports.JWT = void 0;
var $d2a071afaa58a576$exports = {};
$d2a071afaa58a576$exports = new URL("build.1d676ec8.js", "file:" + __filename).toString();


var $3b151751b048599c$exports = {};
$3b151751b048599c$exports = new URL("jwtaccess.67ba0346.js", "file:" + __filename).toString();



var $flpnV = parcelRequire("flpnV");

var $fbhxX = parcelRequire("fbhxX");
class $cb7b098cf24f4a3c$var$JWT extends $flpnV.OAuth2Client {
    constructor(optionsOrEmail, keyFile, key, scopes, subject, keyId){
        const opts = optionsOrEmail && typeof optionsOrEmail === 'object' ? optionsOrEmail : {
            email: optionsOrEmail,
            keyFile: keyFile,
            key: key,
            keyId: keyId,
            scopes: scopes,
            subject: subject
        };
        super(opts);
        this.email = opts.email;
        this.keyFile = opts.keyFile;
        this.key = opts.key;
        this.keyId = opts.keyId;
        this.scopes = opts.scopes;
        this.subject = opts.subject;
        this.additionalClaims = opts.additionalClaims;
        // Start with an expired refresh token, which will automatically be
        // refreshed before the first API call is made.
        this.credentials = {
            refresh_token: 'jwt-placeholder',
            expiry_date: 1
        };
    }
    /**
     * Creates a copy of the credential with the specified scopes.
     * @param scopes List of requested scopes or a single scope.
     * @return The cloned instance.
     */ createScoped(scopes) {
        const jwt = new $cb7b098cf24f4a3c$var$JWT(this);
        jwt.scopes = scopes;
        return jwt;
    }
    /**
     * Obtains the metadata to be sent with the request.
     *
     * @param url the URI being authorized.
     */ async getRequestMetadataAsync(url) {
        url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
        const useSelfSignedJWT = !this.hasUserScopes() && url || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== $fbhxX.DEFAULT_UNIVERSE;
        if (this.subject && this.universeDomain !== $fbhxX.DEFAULT_UNIVERSE) throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${$fbhxX.DEFAULT_UNIVERSE}`);
        if (!this.apiKey && useSelfSignedJWT) {
            if (this.additionalClaims && this.additionalClaims.target_audience) {
                const { tokens: tokens } = await this.refreshToken();
                return {
                    headers: this.addSharedMetadataHeaders({
                        Authorization: `Bearer ${tokens.id_token}`
                    })
                };
            } else {
                // no scopes have been set, but a uri has been provided. Use JWTAccess
                // credentials.
                if (!this.access) this.access = new $3b151751b048599c$exports.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
                let scopes;
                if (this.hasUserScopes()) scopes = this.scopes;
                else if (!url) scopes = this.defaultScopes;
                const useScopes = this.useJWTAccessWithScope || this.universeDomain !== $fbhxX.DEFAULT_UNIVERSE;
                const headers = await this.access.getRequestHeaders(url !== null && url !== void 0 ? url : undefined, this.additionalClaims, // Scopes take precedent over audience for signing,
                // so we only provide them if `useJWTAccessWithScope` is on or
                // if we are in a non-default universe
                useScopes ? scopes : undefined);
                return {
                    headers: this.addSharedMetadataHeaders(headers)
                };
            }
        } else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(url);
        else // If no audience, apiKey, or scopes are provided, we should not attempt
        // to populate any headers:
        return {
            headers: {}
        };
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */ async fetchIdToken(targetAudience) {
        // Create a new gToken for fetching an ID token
        const gtoken = new $d2a071afaa58a576$exports.GoogleToken({
            iss: this.email,
            sub: this.subject,
            scope: this.scopes || this.defaultScopes,
            keyFile: this.keyFile,
            key: this.key,
            additionalClaims: {
                target_audience: targetAudience
            },
            transporter: this.transporter
        });
        await gtoken.getToken({
            forceRefresh: true
        });
        if (!gtoken.idToken) throw new Error('Unknown error: Failed to fetch ID token');
        return gtoken.idToken;
    }
    /**
     * Determine if there are currently scopes available.
     */ hasUserScopes() {
        if (!this.scopes) return false;
        return this.scopes.length > 0;
    }
    /**
     * Are there any default or user scopes defined.
     */ hasAnyScopes() {
        if (this.scopes && this.scopes.length > 0) return true;
        if (this.defaultScopes && this.defaultScopes.length > 0) return true;
        return false;
    }
    authorize(callback) {
        if (callback) this.authorizeAsync().then((r)=>callback(null, r), callback);
        else return this.authorizeAsync();
    }
    async authorizeAsync() {
        const result = await this.refreshToken();
        if (!result) throw new Error('No result returned');
        this.credentials = result.tokens;
        this.credentials.refresh_token = 'jwt-placeholder';
        this.key = this.gtoken.key;
        this.email = this.gtoken.iss;
        return result.tokens;
    }
    /**
     * Refreshes the access token.
     * @param refreshToken ignored
     * @private
     */ async refreshTokenNoCache(// eslint-disable-next-line @typescript-eslint/no-unused-vars
    refreshToken) {
        const gtoken = this.createGToken();
        const token = await gtoken.getToken({
            forceRefresh: this.isTokenExpiring()
        });
        const tokens = {
            access_token: token.access_token,
            token_type: 'Bearer',
            expiry_date: gtoken.expiresAt,
            id_token: gtoken.idToken
        };
        this.emit('tokens', tokens);
        return {
            res: null,
            tokens: tokens
        };
    }
    /**
     * Create a gToken if it doesn't already exist.
     */ createGToken() {
        if (!this.gtoken) this.gtoken = new $d2a071afaa58a576$exports.GoogleToken({
            iss: this.email,
            sub: this.subject,
            scope: this.scopes || this.defaultScopes,
            keyFile: this.keyFile,
            key: this.key,
            additionalClaims: this.additionalClaims,
            transporter: this.transporter
        });
        return this.gtoken;
    }
    /**
     * Create a JWT credentials instance using the given input options.
     * @param json The input object.
     */ fromJSON(json) {
        if (!json) throw new Error('Must pass in a JSON object containing the service account auth settings.');
        if (!json.client_email) throw new Error('The incoming JSON object does not contain a client_email field');
        if (!json.private_key) throw new Error('The incoming JSON object does not contain a private_key field');
        // Extract the relevant information from the json key file.
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
        this.quotaProjectId = json.quota_project_id;
        this.universeDomain = json.universe_domain || this.universeDomain;
    }
    fromStream(inputStream, callback) {
        if (callback) this.fromStreamAsync(inputStream).then(()=>callback(), callback);
        else return this.fromStreamAsync(inputStream);
    }
    fromStreamAsync(inputStream) {
        return new Promise((resolve, reject)=>{
            if (!inputStream) throw new Error('Must pass in a stream containing the service account auth settings.');
            let s = '';
            inputStream.setEncoding('utf8').on('error', reject).on('data', (chunk)=>s += chunk).on('end', ()=>{
                try {
                    const data = JSON.parse(s);
                    this.fromJSON(data);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
    /**
     * Creates a JWT credentials instance using an API Key for authentication.
     * @param apiKey The API Key in string form.
     */ fromAPIKey(apiKey) {
        if (typeof apiKey !== 'string') throw new Error('Must provide an API Key string.');
        this.apiKey = apiKey;
    }
    /**
     * Using the key or keyFile on the JWT client, obtain an object that contains
     * the key and the client email.
     */ async getCredentials() {
        if (this.key) return {
            private_key: this.key,
            client_email: this.email
        };
        else if (this.keyFile) {
            const gtoken = this.createGToken();
            const creds = await gtoken.getCredentials(this.keyFile);
            return {
                private_key: creds.privateKey,
                client_email: creds.clientEmail
            };
        }
        throw new Error('A key or a keyFile must be provided to getCredentials.');
    }
}
module.exports.JWT = $cb7b098cf24f4a3c$var$JWT;


