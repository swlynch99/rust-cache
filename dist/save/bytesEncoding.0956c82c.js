// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * The helper that transforms bytes with specific character encoding into string
 * @param bytes - the uint8array bytes
 * @param format - the format we use to encode the byte
 * @returns a string of the encoded string
 */ function $f59464f6b3689af1$export$f3924c82a04770ee(bytes, format) {
    return Buffer.from(bytes).toString(format);
}
function $f59464f6b3689af1$export$a098e7b533f96db3(value, format) {
    return Buffer.from(value, format);
}


