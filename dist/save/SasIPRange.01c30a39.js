// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Generate SasIPRange format string. For example:
 *
 * "8.8.8.8" or "1.1.1.1-255.255.255.255"
 *
 * @param ipRange -
 */ function $12e89a751c95c1f4$export$201686abbba23d6(ipRange) {
    return ipRange.end ? `${ipRange.start}-${ipRange.end}` : ipRange.start;
}


