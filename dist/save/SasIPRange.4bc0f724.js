// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Generate SasIPRange format string. For example:
 *
 * "8.8.8.8" or "1.1.1.1-255.255.255.255"
 *
 * @param ipRange -
 */ function $def7f5fca03f944a$export$201686abbba23d6(ipRange) {
    return ipRange.end ? `${ipRange.start}-${ipRange.end}` : ipRange.start;
}


//# sourceMappingURL=SasIPRange.4bc0f724.js.map
