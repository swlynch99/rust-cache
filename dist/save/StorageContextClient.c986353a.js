require("./storageClient.04ddfb3b.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $d6c382e1256f6f5c$exports = {};
$d6c382e1256f6f5c$exports = new URL("storageClient.04ddfb3b.js", "file:" + __filename).toString();


class $d42cce365efe121a$export$b812ca44c7855986 extends (0, $d6c382e1256f6f5c$exports.StorageClient) {
    async sendOperationRequest(operationArguments, operationSpec) {
        const operationSpecToSend = Object.assign({}, operationSpec);
        if (operationSpecToSend.path === "/{containerName}" || operationSpecToSend.path === "/{containerName}/{blob}") operationSpecToSend.path = "";
        return super.sendOperationRequest(operationArguments, operationSpecToSend);
    }
}


//# sourceMappingURL=StorageContextClient.c986353a.js.map
