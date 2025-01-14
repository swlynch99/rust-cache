require("./baseexternalclient.9405bd8a.js");
require("./identitypoolclient.ffa15c42.js");
require("./awsclient.73b5e8c9.js");
require("./pluggable-auth-client.47f1fd47.js");

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
module.exports.ExternalAccountClient = void 0;
var $ef437dc52251d324$exports = {};
$ef437dc52251d324$exports = new URL("baseexternalclient.9405bd8a.js", "file:" + __filename).toString();


var $f5b834dbd003ddf6$exports = {};
$f5b834dbd003ddf6$exports = new URL("identitypoolclient.ffa15c42.js", "file:" + __filename).toString();


var $ff4b7c0960c3a088$exports = {};
$ff4b7c0960c3a088$exports = new URL("awsclient.73b5e8c9.js", "file:" + __filename).toString();


var $f189d204f11af423$exports = {};
$f189d204f11af423$exports = new URL("pluggable-auth-client.47f1fd47.js", "file:" + __filename).toString();


/**
 * Dummy class with no constructor. Developers are expected to use fromJSON.
 */ class $e6732891bc50104d$var$ExternalAccountClient {
    constructor(){
        throw new Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    /**
     * This static method will instantiate the
     * corresponding type of external account credential depending on the
     * underlying credential source.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @param additionalOptions **DEPRECATED, all options are available in the
     *   `options` parameter.** Optional additional behavior customization options.
     *   These currently customize expiration threshold time and whether to retry
     *   on 401/403 API request errors.
     * @return A BaseExternalAccountClient instance or null if the options
     *   provided do not correspond to an external account credential.
     */ static fromJSON(options, additionalOptions) {
        var _a, _b;
        if (options && options.type === $ef437dc52251d324$exports.EXTERNAL_ACCOUNT_TYPE) {
            if ((_a = options.credential_source) === null || _a === void 0 ? void 0 : _a.environment_id) return new $ff4b7c0960c3a088$exports.AwsClient(options, additionalOptions);
            else if ((_b = options.credential_source) === null || _b === void 0 ? void 0 : _b.executable) return new $f189d204f11af423$exports.PluggableAuthClient(options, additionalOptions);
            else return new $f5b834dbd003ddf6$exports.IdentityPoolClient(options, additionalOptions);
        } else return null;
    }
}
module.exports.ExternalAccountClient = $e6732891bc50104d$var$ExternalAccountClient;


//# sourceMappingURL=externalclient.7c65287f.js.map
