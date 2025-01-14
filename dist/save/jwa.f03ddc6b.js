require("./buffer-equal-constant-time.71f4431b.js");
require("./safe-buffer.7506ac22.js");
require("./ecdsa-sig-formatter.1acc6ad0.js");
var $5oen5$crypto = require("crypto");
var $5oen5$util = require("util");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
var $1001c0a08a45cba9$exports = {};
$1001c0a08a45cba9$exports = new URL("buffer-equal-constant-time.71f4431b.js", "file:" + __filename).toString();



var $fERh9 = parcelRequire("fERh9");
var $2261fdc5949173ec$require$Buffer = $fERh9.Buffer;


var $t8NoW = parcelRequire("t8NoW");

var $2261fdc5949173ec$var$MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var $2261fdc5949173ec$var$MSG_INVALID_SECRET = 'secret must be a string or buffer';
var $2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var $2261fdc5949173ec$var$MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';
var $2261fdc5949173ec$var$supportsKeyObjects = typeof $5oen5$crypto.createPublicKey === 'function';
if ($2261fdc5949173ec$var$supportsKeyObjects) {
    $2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
    $2261fdc5949173ec$var$MSG_INVALID_SECRET += 'or a KeyObject';
}
function $2261fdc5949173ec$var$checkIsPublicKey(key) {
    if ($2261fdc5949173ec$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return;
    if (!$2261fdc5949173ec$var$supportsKeyObjects) throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key !== 'object') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.type !== 'string') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.asymmetricKeyType !== 'string') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.export !== 'function') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_VERIFIER_KEY);
}
function $2261fdc5949173ec$var$checkIsPrivateKey(key) {
    if ($2261fdc5949173ec$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return;
    if (typeof key === 'object') return;
    throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_SIGNER_KEY);
}
function $2261fdc5949173ec$var$checkIsSecretKey(key) {
    if ($2261fdc5949173ec$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return key;
    if (!$2261fdc5949173ec$var$supportsKeyObjects) throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_SECRET);
    if (typeof key !== 'object') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_SECRET);
    if (key.type !== 'secret') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_SECRET);
    if (typeof key.export !== 'function') throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_SECRET);
}
function $2261fdc5949173ec$var$fromBase64(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $2261fdc5949173ec$var$toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) for(var i = 0; i < padding; ++i)base64url += '=';
    return base64url.replace(/\-/g, '+').replace(/_/g, '/');
}
function $2261fdc5949173ec$var$typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = $5oen5$util.format.bind($5oen5$util, template).apply(null, args);
    return new TypeError(errMsg);
}
function $2261fdc5949173ec$var$bufferOrString(obj) {
    return $2261fdc5949173ec$require$Buffer.isBuffer(obj) || typeof obj === 'string';
}
function $2261fdc5949173ec$var$normalizeInput(thing) {
    if (!$2261fdc5949173ec$var$bufferOrString(thing)) thing = JSON.stringify(thing);
    return thing;
}
function $2261fdc5949173ec$var$createHmacSigner(bits) {
    return function sign(thing, secret) {
        $2261fdc5949173ec$var$checkIsSecretKey(secret);
        thing = $2261fdc5949173ec$var$normalizeInput(thing);
        var hmac = $5oen5$crypto.createHmac('sha' + bits, secret);
        var sig = (hmac.update(thing), hmac.digest('base64'));
        return $2261fdc5949173ec$var$fromBase64(sig);
    };
}
function $2261fdc5949173ec$var$createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
        var computedSig = $2261fdc5949173ec$var$createHmacSigner(bits)(thing, secret);
        return $1001c0a08a45cba9$exports($2261fdc5949173ec$require$Buffer.from(signature), $2261fdc5949173ec$require$Buffer.from(computedSig));
    };
}
function $2261fdc5949173ec$var$createKeySigner(bits) {
    return function sign(thing, privateKey) {
        $2261fdc5949173ec$var$checkIsPrivateKey(privateKey);
        thing = $2261fdc5949173ec$var$normalizeInput(thing);
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = $5oen5$crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
        return $2261fdc5949173ec$var$fromBase64(sig);
    };
}
function $2261fdc5949173ec$var$createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        $2261fdc5949173ec$var$checkIsPublicKey(publicKey);
        thing = $2261fdc5949173ec$var$normalizeInput(thing);
        signature = $2261fdc5949173ec$var$toBase64(signature);
        var verifier = $5oen5$crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, 'base64');
    };
}
function $2261fdc5949173ec$var$createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
        $2261fdc5949173ec$var$checkIsPrivateKey(privateKey);
        thing = $2261fdc5949173ec$var$normalizeInput(thing);
        var signer = $5oen5$crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: $5oen5$crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: $5oen5$crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, 'base64'));
        return $2261fdc5949173ec$var$fromBase64(sig);
    };
}
function $2261fdc5949173ec$var$createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        $2261fdc5949173ec$var$checkIsPublicKey(publicKey);
        thing = $2261fdc5949173ec$var$normalizeInput(thing);
        signature = $2261fdc5949173ec$var$toBase64(signature);
        var verifier = $5oen5$crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify({
            key: publicKey,
            padding: $5oen5$crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: $5oen5$crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, 'base64');
    };
}
function $2261fdc5949173ec$var$createECDSASigner(bits) {
    var inner = $2261fdc5949173ec$var$createKeySigner(bits);
    return function sign() {
        var signature = inner.apply(null, arguments);
        signature = $t8NoW.derToJose(signature, 'ES' + bits);
        return signature;
    };
}
function $2261fdc5949173ec$var$createECDSAVerifer(bits) {
    var inner = $2261fdc5949173ec$var$createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
        signature = $t8NoW.joseToDer(signature, 'ES' + bits).toString('base64');
        var result = inner(thing, signature, publicKey);
        return result;
    };
}
function $2261fdc5949173ec$var$createNoneSigner() {
    return function sign() {
        return '';
    };
}
function $2261fdc5949173ec$var$createNoneVerifier() {
    return function verify(thing, signature) {
        return signature === '';
    };
}
module.exports = function jwa(algorithm) {
    var signerFactories = {
        hs: $2261fdc5949173ec$var$createHmacSigner,
        rs: $2261fdc5949173ec$var$createKeySigner,
        ps: $2261fdc5949173ec$var$createPSSKeySigner,
        es: $2261fdc5949173ec$var$createECDSASigner,
        none: $2261fdc5949173ec$var$createNoneSigner
    };
    var verifierFactories = {
        hs: $2261fdc5949173ec$var$createHmacVerifier,
        rs: $2261fdc5949173ec$var$createKeyVerifier,
        ps: $2261fdc5949173ec$var$createPSSKeyVerifier,
        es: $2261fdc5949173ec$var$createECDSAVerifer,
        none: $2261fdc5949173ec$var$createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!match) throw $2261fdc5949173ec$var$typeError($2261fdc5949173ec$var$MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
    };
};


//# sourceMappingURL=jwa.f03ddc6b.js.map
