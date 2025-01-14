'use strict';
const $50dabe0cce762bc6$var$RE_PLUS = /\+/g;
const $50dabe0cce762bc6$var$HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function $50dabe0cce762bc6$var$Decoder() {
    this.buffer = undefined;
}
$50dabe0cce762bc6$var$Decoder.prototype.write = function(str) {
    // Replace '+' with ' ' before decoding
    str = str.replace($50dabe0cce762bc6$var$RE_PLUS, ' ');
    let res = '';
    let i = 0;
    let p = 0;
    const len = str.length;
    for(; i < len; ++i){
        if (this.buffer !== undefined) {
            if (!$50dabe0cce762bc6$var$HEX[str.charCodeAt(i)]) {
                res += '%' + this.buffer;
                this.buffer = undefined;
                --i // retry character
                ;
            } else {
                this.buffer += str[i];
                ++p;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = undefined;
                }
            }
        } else if (str[i] === '%') {
            if (i > p) {
                res += str.substring(p, i);
                p = i;
            }
            this.buffer = '';
            ++p;
        }
    }
    if (p < len && this.buffer === undefined) res += str.substring(p);
    return res;
};
$50dabe0cce762bc6$var$Decoder.prototype.reset = function() {
    this.buffer = undefined;
};
module.exports = $50dabe0cce762bc6$var$Decoder;


//# sourceMappingURL=Decoder.151c3e28.js.map
