var $6OZtC$crypto = require("crypto");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

async function $fb4c48f20c5e38d0$export$abf7af97e0119290(key, stringToSign, encoding) {
    const decodedKey = Buffer.from(key, "base64");
    return (0, $6OZtC$crypto.createHmac)("sha256", decodedKey).update(stringToSign).digest(encoding);
}
async function $fb4c48f20c5e38d0$export$21b3334e594a00dc(content, encoding) {
    return (0, $6OZtC$crypto.createHash)("sha256").update(content).digest(encoding);
}


