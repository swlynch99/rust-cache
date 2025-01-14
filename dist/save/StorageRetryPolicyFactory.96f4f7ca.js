require("./StorageRetryPolicy.a0dec2ae.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $2827101b79ab56a2$exports = {};
$2827101b79ab56a2$exports = new URL("StorageRetryPolicy.a0dec2ae.js", "file:" + __filename).toString();


class $bd54eb6a80699c6a$export$601a2b779c2eee87 {
    /**
     * Creates an instance of StorageRetryPolicyFactory.
     * @param retryOptions -
     */ constructor(retryOptions){
        this.retryOptions = retryOptions;
    }
    /**
     * Creates a StorageRetryPolicy object.
     *
     * @param nextPolicy -
     * @param options -
     */ create(nextPolicy, options) {
        return new (0, $2827101b79ab56a2$exports.StorageRetryPolicy)(nextPolicy, options, this.retryOptions);
    }
}


//# sourceMappingURL=StorageRetryPolicyFactory.96f4f7ca.js.map
