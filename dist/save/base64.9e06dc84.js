// lookup table from base64 character to byte
let $70b297e72084dc32$var$encTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
// lookup table from base64 character *code* to byte because lookup by number is fast
let $70b297e72084dc32$var$decTable = [];
for(let i = 0; i < $70b297e72084dc32$var$encTable.length; i++)$70b297e72084dc32$var$decTable[$70b297e72084dc32$var$encTable[i].charCodeAt(0)] = i;
// support base64url variants
$70b297e72084dc32$var$decTable["-".charCodeAt(0)] = $70b297e72084dc32$var$encTable.indexOf("+");
$70b297e72084dc32$var$decTable["_".charCodeAt(0)] = $70b297e72084dc32$var$encTable.indexOf("/");
function $70b297e72084dc32$export$afb15ede80c42aab(base64Str) {
    // estimate byte size, not accounting for inner padding and whitespace
    let es = base64Str.length * 3 / 4;
    // if (es % 3 !== 0)
    // throw new Error('invalid base64 string');
    if (base64Str[base64Str.length - 2] == '=') es -= 2;
    else if (base64Str[base64Str.length - 1] == '=') es -= 1;
    let bytes = new Uint8Array(es), bytePos = 0, groupPos = 0, b, p = 0 // previous byte
    ;
    for(let i = 0; i < base64Str.length; i++){
        b = $70b297e72084dc32$var$decTable[base64Str.charCodeAt(i)];
        if (b === undefined) // noinspection FallThroughInSwitchStatementJS
        switch(base64Str[i]){
            case '=':
                groupPos = 0; // reset state when padding found
            case '\n':
            case '\r':
            case '\t':
            case ' ':
                continue; // skip white-space, and padding
            default:
                throw Error(`invalid base64 string.`);
        }
        switch(groupPos){
            case 0:
                p = b;
                groupPos = 1;
                break;
            case 1:
                bytes[bytePos++] = p << 2 | (b & 48) >> 4;
                p = b;
                groupPos = 2;
                break;
            case 2:
                bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
                p = b;
                groupPos = 3;
                break;
            case 3:
                bytes[bytePos++] = (p & 3) << 6 | b;
                groupPos = 0;
                break;
        }
    }
    if (groupPos == 1) throw Error(`invalid base64 string.`);
    return bytes.subarray(0, bytePos);
}
function $70b297e72084dc32$export$4e633de97d65d1c8(bytes) {
    let base64 = '', groupPos = 0, b, p = 0; // carry over from previous byte
    for(let i = 0; i < bytes.length; i++){
        b = bytes[i];
        switch(groupPos){
            case 0:
                base64 += $70b297e72084dc32$var$encTable[b >> 2];
                p = (b & 3) << 4;
                groupPos = 1;
                break;
            case 1:
                base64 += $70b297e72084dc32$var$encTable[p | b >> 4];
                p = (b & 15) << 2;
                groupPos = 2;
                break;
            case 2:
                base64 += $70b297e72084dc32$var$encTable[p | b >> 6];
                base64 += $70b297e72084dc32$var$encTable[b & 63];
                groupPos = 0;
                break;
        }
    }
    // padding required?
    if (groupPos) {
        base64 += $70b297e72084dc32$var$encTable[p];
        base64 += '=';
        if (groupPos == 1) base64 += '=';
    }
    return base64;
}


//# sourceMappingURL=base64.9e06dc84.js.map
