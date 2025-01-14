"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
    return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
module.exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
    return input.codePointAt(position);
} : function(input, position) {
    return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
};
module.exports.highSurrogateFrom = 55296;
module.exports.highSurrogateTo = 56319;


