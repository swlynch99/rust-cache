var $9ifhn$crypto = require("crypto");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

async function $ba3990f8f90b09f8$export$abf7af97e0119290(key, stringToSign, encoding) {
    const decodedKey = Buffer.from(key, "base64");
    return (0, $9ifhn$crypto.createHmac)("sha256", decodedKey).update(stringToSign).digest(encoding);
}
async function $ba3990f8f90b09f8$export$21b3334e594a00dc(content, encoding) {
    return (0, $9ifhn$crypto.createHash)("sha256").update(content).digest(encoding);
}


//# sourceMappingURL=sha256.ce2cedc9.js.map
