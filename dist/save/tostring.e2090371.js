var $cJcE8$buffer = require("buffer");

/*global module*/ 
var $5b302bc864d31007$require$Buffer = $cJcE8$buffer.Buffer;
module.exports = function toString(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number' || $5b302bc864d31007$require$Buffer.isBuffer(obj)) return obj.toString();
    return JSON.stringify(obj);
};


//# sourceMappingURL=tostring.e2090371.js.map
