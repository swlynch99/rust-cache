'use strict';
// Node has always utf-8
const $a8ee5ce8a742f8d6$var$utf8Decoder = new TextDecoder('utf-8');
const $a8ee5ce8a742f8d6$var$textDecoders = new Map([
    [
        'utf-8',
        $a8ee5ce8a742f8d6$var$utf8Decoder
    ],
    [
        'utf8',
        $a8ee5ce8a742f8d6$var$utf8Decoder
    ]
]);
function $a8ee5ce8a742f8d6$var$getDecoder(charset) {
    let lc;
    while(true)switch(charset){
        case 'utf-8':
        case 'utf8':
            return $a8ee5ce8a742f8d6$var$decoders.utf8;
        case 'latin1':
        case 'ascii':
        case 'us-ascii':
        case 'iso-8859-1':
        case 'iso8859-1':
        case 'iso88591':
        case 'iso_8859-1':
        case 'windows-1252':
        case 'iso_8859-1:1987':
        case 'cp1252':
        case 'x-cp1252':
            return $a8ee5ce8a742f8d6$var$decoders.latin1;
        case 'utf16le':
        case 'utf-16le':
        case 'ucs2':
        case 'ucs-2':
            return $a8ee5ce8a742f8d6$var$decoders.utf16le;
        case 'base64':
            return $a8ee5ce8a742f8d6$var$decoders.base64;
        default:
            if (lc === undefined) {
                lc = true;
                charset = charset.toLowerCase();
                continue;
            }
            return $a8ee5ce8a742f8d6$var$decoders.other.bind(charset);
    }
}
const $a8ee5ce8a742f8d6$var$decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, sourceEncoding);
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') return data;
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, sourceEncoding);
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, sourceEncoding);
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, sourceEncoding);
        if ($a8ee5ce8a742f8d6$var$textDecoders.has(module.exports.toString())) try {
            return $a8ee5ce8a742f8d6$var$textDecoders.get(module.exports).decode(data);
        } catch  {}
        return typeof data === 'string' ? data : data.toString();
    }
};
function $a8ee5ce8a742f8d6$var$decodeText(text, sourceEncoding, destEncoding) {
    if (text) return $a8ee5ce8a742f8d6$var$getDecoder(destEncoding)(text, sourceEncoding);
    return text;
}
module.exports = $a8ee5ce8a742f8d6$var$decodeText;


//# sourceMappingURL=decodeText.502945c9.js.map
