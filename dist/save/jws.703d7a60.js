require("./sign-stream.186ea72b.js");
require("./verify-stream.3d3c96b6.js");

/*global exports*/ var $4099143d1900801a$export$6f6fa4628974a579;
var $4099143d1900801a$export$c5552dfdbc7cec71;
var $4099143d1900801a$export$532244b5b8b0b4b6;
var $4099143d1900801a$export$2f872c0f2117be69;
var $4099143d1900801a$export$1ea939691cdc45b8;
var $4099143d1900801a$export$45df7cae684751af;
var $4099143d1900801a$export$6f65485f87568e37;
var $74c7418dbe4729a9$exports = {};
$74c7418dbe4729a9$exports = new URL("sign-stream.186ea72b.js", "file:" + __filename).toString();


var $ab411b3e99561f34$exports = {};
$ab411b3e99561f34$exports = new URL("verify-stream.3d3c96b6.js", "file:" + __filename).toString();


var $4099143d1900801a$var$ALGORITHMS = [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'PS256',
    'PS384',
    'PS512',
    'ES256',
    'ES384',
    'ES512'
];
$4099143d1900801a$export$6f6fa4628974a579 = $4099143d1900801a$var$ALGORITHMS;
$4099143d1900801a$export$c5552dfdbc7cec71 = $74c7418dbe4729a9$exports.sign;
$4099143d1900801a$export$532244b5b8b0b4b6 = $ab411b3e99561f34$exports.verify;
$4099143d1900801a$export$2f872c0f2117be69 = $ab411b3e99561f34$exports.decode;
$4099143d1900801a$export$1ea939691cdc45b8 = $ab411b3e99561f34$exports.isValid;
$4099143d1900801a$export$45df7cae684751af = function createSign(opts) {
    return new $74c7418dbe4729a9$exports(opts);
};
$4099143d1900801a$export$6f65485f87568e37 = function createVerify(opts) {
    return new $ab411b3e99561f34$exports(opts);
};


