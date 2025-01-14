require("./AnonymousCredentialPolicy.8d3cbc34.js");
require("./Credential.16815cc3.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $4a848546c6706e43$exports = {};
$4a848546c6706e43$exports = new URL("AnonymousCredentialPolicy.8d3cbc34.js", "file:" + __filename).toString();


var $c822e8542441f35b$exports = {};
$c822e8542441f35b$exports = new URL("Credential.16815cc3.js", "file:" + __filename).toString();


class $f8ed2c88c40aa53b$export$618ade69ca0baa94 extends (0, $c822e8542441f35b$exports.Credential) {
    /**
     * Creates an {@link AnonymousCredentialPolicy} object.
     *
     * @param nextPolicy -
     * @param options -
     */ create(nextPolicy, options) {
        return new (0, $4a848546c6706e43$exports.AnonymousCredentialPolicy)(nextPolicy, options);
    }
}


