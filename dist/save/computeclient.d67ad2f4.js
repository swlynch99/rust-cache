require("./build.da41aa52.js");
require("./build.570a4f39.js");
require("./oauth2client.9b56ad56.js");


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
module.exports.Compute = void 0;

var $47hCt = parcelRequire("47hCt");

var $6PJJI = parcelRequire("6PJJI");
var $a26b75223ff2d60b$exports = {};
$a26b75223ff2d60b$exports = new URL("oauth2client.9b56ad56.js", "file:" + __filename).toString();


class $50d7ea78e7cdec48$var$Compute extends $a26b75223ff2d60b$exports.OAuth2Client {
    /**
     * Google Compute Engine service account credentials.
     *
     * Retrieve access token from the metadata server.
     * See: https://cloud.google.com/compute/docs/access/authenticate-workloads#applications
     */ constructor(options = {}){
        super(options);
        // Start with an expired refresh token, which will automatically be
        // refreshed before the first API call is made.
        this.credentials = {
            expiry_date: 1,
            refresh_token: 'compute-placeholder'
        };
        this.serviceAccountEmail = options.serviceAccountEmail || 'default';
        this.scopes = Array.isArray(options.scopes) ? options.scopes : options.scopes ? [
            options.scopes
        ] : [];
    }
    /**
     * Refreshes the access token.
     * @param refreshToken Unused parameter
     */ async refreshTokenNoCache(// eslint-disable-next-line @typescript-eslint/no-unused-vars
    refreshToken) {
        const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
        let data;
        try {
            const instanceOptions = {
                property: tokenPath
            };
            if (this.scopes.length > 0) instanceOptions.params = {
                scopes: this.scopes.join(',')
            };
            data = await $6PJJI.instance(instanceOptions);
        } catch (e) {
            if (e instanceof $47hCt.GaxiosError) {
                e.message = `Could not refresh access token: ${e.message}`;
                this.wrapError(e);
            }
            throw e;
        }
        const tokens = data;
        if (data && data.expires_in) {
            tokens.expiry_date = new Date().getTime() + data.expires_in * 1000;
            delete tokens.expires_in;
        }
        this.emit('tokens', tokens);
        return {
            tokens: tokens,
            res: null
        };
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */ async fetchIdToken(targetAudience) {
        const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity` + `?format=full&audience=${targetAudience}`;
        let idToken;
        try {
            const instanceOptions = {
                property: idTokenPath
            };
            idToken = await $6PJJI.instance(instanceOptions);
        } catch (e) {
            if (e instanceof Error) e.message = `Could not fetch ID token: ${e.message}`;
            throw e;
        }
        return idToken;
    }
    wrapError(e) {
        const res = e.response;
        if (res && res.status) {
            e.status = res.status;
            if (res.status === 403) e.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + e.message;
            else if (res.status === 404) e.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + e.message;
        }
    }
}
module.exports.Compute = $50d7ea78e7cdec48$var$Compute;


//# sourceMappingURL=computeclient.d67ad2f4.js.map
