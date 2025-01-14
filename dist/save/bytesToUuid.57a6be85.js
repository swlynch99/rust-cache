/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var $6b58db972d9c34c4$var$byteToHex = [];
for(var $6b58db972d9c34c4$var$i = 0; $6b58db972d9c34c4$var$i < 256; ++$6b58db972d9c34c4$var$i)$6b58db972d9c34c4$var$byteToHex[$6b58db972d9c34c4$var$i] = ($6b58db972d9c34c4$var$i + 0x100).toString(16).substr(1);
function $6b58db972d9c34c4$var$bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = $6b58db972d9c34c4$var$byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return [
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]]
    ].join('');
}
module.exports = $6b58db972d9c34c4$var$bytesToUuid;


//# sourceMappingURL=bytesToUuid.57a6be85.js.map
