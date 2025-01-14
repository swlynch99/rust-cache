require("./RequestPolicy.3a123c03.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $38bb5339d670f442$exports = {};
$38bb5339d670f442$exports = new URL("RequestPolicy.3a123c03.js", "file:" + __filename).toString();


class $eac84baa4bf9f3bf$export$d79d4d59a0aace81 extends (0, $38bb5339d670f442$exports.BaseRequestPolicy) {
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


