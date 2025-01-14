require("./stringify.09e50ae1.js");
require("./parse.9ad3f2b4.js");

var $5f1431c0db2cab87$exports = {};
$5f1431c0db2cab87$exports = new URL("stringify.09e50ae1.js", "file:" + __filename).toString();


var $9dfbdda78764c7ba$require$json_stringify = $5f1431c0db2cab87$exports.stringify;
var $977ead6c9e201cc8$exports = {};
$977ead6c9e201cc8$exports = new URL("parse.9ad3f2b4.js", "file:" + __filename).toString();


module.exports = function(options) {
    return {
        parse: $977ead6c9e201cc8$exports(options),
        stringify: $9dfbdda78764c7ba$require$json_stringify
    };
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = $977ead6c9e201cc8$exports();
module.exports.stringify = $9dfbdda78764c7ba$require$json_stringify;


//# sourceMappingURL=json-bigint.9fccc518.js.map
