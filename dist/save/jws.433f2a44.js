require("./sign-stream.4105c672.js");
require("./verify-stream.97c9ede1.js");

/*global exports*/ var $e5b24d0febfa1d41$export$6f6fa4628974a579;
var $e5b24d0febfa1d41$export$c5552dfdbc7cec71;
var $e5b24d0febfa1d41$export$532244b5b8b0b4b6;
var $e5b24d0febfa1d41$export$2f872c0f2117be69;
var $e5b24d0febfa1d41$export$1ea939691cdc45b8;
var $e5b24d0febfa1d41$export$45df7cae684751af;
var $e5b24d0febfa1d41$export$6f65485f87568e37;
var $5b7229dc7d11d1f1$exports = {};
$5b7229dc7d11d1f1$exports = new URL("sign-stream.4105c672.js", "file:" + __filename).toString();


var $340e8df7468d31ad$exports = {};
$340e8df7468d31ad$exports = new URL("verify-stream.97c9ede1.js", "file:" + __filename).toString();


var $e5b24d0febfa1d41$var$ALGORITHMS = [
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
$e5b24d0febfa1d41$export$6f6fa4628974a579 = $e5b24d0febfa1d41$var$ALGORITHMS;
$e5b24d0febfa1d41$export$c5552dfdbc7cec71 = $5b7229dc7d11d1f1$exports.sign;
$e5b24d0febfa1d41$export$532244b5b8b0b4b6 = $340e8df7468d31ad$exports.verify;
$e5b24d0febfa1d41$export$2f872c0f2117be69 = $340e8df7468d31ad$exports.decode;
$e5b24d0febfa1d41$export$1ea939691cdc45b8 = $340e8df7468d31ad$exports.isValid;
$e5b24d0febfa1d41$export$45df7cae684751af = function createSign(opts) {
    return new $5b7229dc7d11d1f1$exports(opts);
};
$e5b24d0febfa1d41$export$6f65485f87568e37 = function createVerify(opts) {
    return new $340e8df7468d31ad$exports(opts);
};


//# sourceMappingURL=jws.433f2a44.js.map
