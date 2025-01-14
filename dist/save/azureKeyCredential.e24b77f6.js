// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * A static-key-based credential that supports updating
 * the underlying key value.
 */ class $865699b0dbfce596$export$e7599249a400e127 {
    /**
     * The value of the key to be used in authentication
     */ get key() {
        return this._key;
    }
    /**
     * Create an instance of an AzureKeyCredential for use
     * with a service client.
     *
     * @param key - The initial value of the key to use in authentication
     */ constructor(key){
        if (!key) throw new Error("key must be a non-empty string");
        this._key = key;
    }
    /**
     * Change the value of the key.
     *
     * Updates will take effect upon the next request after
     * updating the key value.
     *
     * @param newKey - The new key value to be used
     */ update(newKey) {
        this._key = newKey;
    }
}


//# sourceMappingURL=azureKeyCredential.e24b77f6.js.map
