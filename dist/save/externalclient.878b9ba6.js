require("./baseexternalclient.eb7653ba.js");
require("./identitypoolclient.138c4bd2.js");
require("./awsclient.bf357161.js");
require("./pluggable-auth-client.fac9f80b.js");

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
var $339e99a7b3e3ff0a$exports = {};
$339e99a7b3e3ff0a$exports = new URL("baseexternalclient.eb7653ba.js", "file:" + __filename).toString();


var $716b65b2674e7333$exports = {};
$716b65b2674e7333$exports = new URL("identitypoolclient.138c4bd2.js", "file:" + __filename).toString();


var $09dec985e529efd4$exports = {};
$09dec985e529efd4$exports = new URL("awsclient.bf357161.js", "file:" + __filename).toString();


var $d805d4e45d855807$exports = {};
$d805d4e45d855807$exports = new URL("pluggable-auth-client.fac9f80b.js", "file:" + __filename).toString();


/**
 * Dummy class with no constructor. Developers are expected to use fromJSON.
 */ class $ea29419d953d4d18$var$ExternalAccountClient {
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
        if (options && options.type === $339e99a7b3e3ff0a$exports.EXTERNAL_ACCOUNT_TYPE) {
            if ((_a = options.credential_source) === null || _a === void 0 ? void 0 : _a.environment_id) return new $09dec985e529efd4$exports.AwsClient(options, additionalOptions);
            else if ((_b = options.credential_source) === null || _b === void 0 ? void 0 : _b.executable) return new $d805d4e45d855807$exports.PluggableAuthClient(options, additionalOptions);
            else return new $716b65b2674e7333$exports.IdentityPoolClient(options, additionalOptions);
        } else return null;
    }
}
module.exports.ExternalAccountClient = $ea29419d953d4d18$var$ExternalAccountClient;


