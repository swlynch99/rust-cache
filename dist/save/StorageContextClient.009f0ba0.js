require("./storageClient.60495d47.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $243004207915b8bc$exports = {};
$243004207915b8bc$exports = new URL("storageClient.60495d47.js", "file:" + __filename).toString();


class $cadeb91a69213a7f$export$b812ca44c7855986 extends (0, $243004207915b8bc$exports.StorageClient) {
    async sendOperationRequest(operationArguments, operationSpec) {
        const operationSpecToSend = Object.assign({}, operationSpec);
        if (operationSpecToSend.path === "/{containerName}" || operationSpecToSend.path === "/{containerName}/{blob}") operationSpecToSend.path = "";
        return super.sendOperationRequest(operationArguments, operationSpecToSend);
    }
}


