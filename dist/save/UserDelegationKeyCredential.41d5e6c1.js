var $kjtxs$crypto = require("crypto");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

class $33d056273bdcdb3e$export$416573695ac24b52 {
    /**
     * Creates an instance of UserDelegationKeyCredential.
     * @param accountName -
     * @param userDelegationKey -
     */ constructor(accountName, userDelegationKey){
        this.accountName = accountName;
        this.userDelegationKey = userDelegationKey;
        this.key = Buffer.from(userDelegationKey.value, "base64");
    }
    /**
     * Generates a hash signature for an HTTP request or for a SAS.
     *
     * @param stringToSign -
     */ computeHMACSHA256(stringToSign) {
        // console.log(`stringToSign: ${JSON.stringify(stringToSign)}`);
        return (0, $kjtxs$crypto.createHmac)("sha256", this.key).update(stringToSign, "utf8").digest("base64");
    }
}


//# sourceMappingURL=UserDelegationKeyCredential.41d5e6c1.js.map
