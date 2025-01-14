require("./RequestPolicy.3ec6657c.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $418244da4074ba8a$exports = {};
$418244da4074ba8a$exports = new URL("RequestPolicy.3ec6657c.js", "file:" + __filename).toString();


class $0fcb2fc0233635cd$export$d79d4d59a0aace81 extends (0, $418244da4074ba8a$exports.BaseRequestPolicy) {
    /**
     * Sends out request.
     *
     * @param request -
     */ sendRequest(request) {
        return this._nextPolicy.sendRequest(this.signRequest(request));
    }
    /**
     * Child classes must implement this method with request signing. This method
     * will be executed in {@link sendRequest}.
     *
     * @param request -
     */ signRequest(request) {
        // Child classes must override this method with request signing. This method
        // will be executed in sendRequest().
        return request;
    }
}


//# sourceMappingURL=CredentialPolicy.af9b6715.js.map
