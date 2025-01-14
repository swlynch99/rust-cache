require("./stringify.e6e60702.js");
require("./parse.d5ed2990.js");

var $60afcdbeb0379fe6$exports = {};
$60afcdbeb0379fe6$exports = new URL("stringify.e6e60702.js", "file:" + __filename).toString();


var $e7688b9738f81b49$require$json_stringify = $60afcdbeb0379fe6$exports.stringify;
var $33f09198042adeeb$exports = {};
$33f09198042adeeb$exports = new URL("parse.d5ed2990.js", "file:" + __filename).toString();


module.exports = function(options) {
    return {
        parse: $33f09198042adeeb$exports(options),
        stringify: $e7688b9738f81b49$require$json_stringify
    };
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = $33f09198042adeeb$exports();
module.exports.stringify = $e7688b9738f81b49$require$json_stringify;


