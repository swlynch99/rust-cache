var $cunD2$buffer = require("buffer");

/*global module*/ 
var $941e07a761e8f1bc$require$Buffer = $cunD2$buffer.Buffer;
module.exports = function toString(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number' || $941e07a761e8f1bc$require$Buffer.isBuffer(obj)) return obj.toString();
    return JSON.stringify(obj);
};


