/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var $a8190588b382423c$var$byteToHex = [];
for(var $a8190588b382423c$var$i = 0; $a8190588b382423c$var$i < 256; ++$a8190588b382423c$var$i)$a8190588b382423c$var$byteToHex[$a8190588b382423c$var$i] = ($a8190588b382423c$var$i + 0x100).toString(16).substr(1);
function $a8190588b382423c$var$bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = $a8190588b382423c$var$byteToHex;
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
module.exports = $a8190588b382423c$var$bytesToUuid;


