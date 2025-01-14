require("./StorageRetryPolicy.3c37e6cb.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $bfcfcc1886223d56$exports = {};
$bfcfcc1886223d56$exports = new URL("StorageRetryPolicy.3c37e6cb.js", "file:" + __filename).toString();


class $2ef101562d550238$export$601a2b779c2eee87 {
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
        return new (0, $bfcfcc1886223d56$exports.StorageRetryPolicy)(nextPolicy, options, this.retryOptions);
    }
}


