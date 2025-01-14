require("./buffer-equal-constant-time.075330dc.js");
require("./safe-buffer.6230cde1.js");
require("./ecdsa-sig-formatter.8673acb3.js");
var $hdGhs$crypto = require("crypto");
var $hdGhs$util = require("util");


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
var $eb90ee173771ccda$exports = {};
$eb90ee173771ccda$exports = new URL("buffer-equal-constant-time.075330dc.js", "file:" + __filename).toString();



var $lHpT6 = parcelRequire("lHpT6");
var $1107e1eb410205f4$require$Buffer = $lHpT6.Buffer;


var $LydJ5 = parcelRequire("LydJ5");

var $1107e1eb410205f4$var$MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var $1107e1eb410205f4$var$MSG_INVALID_SECRET = 'secret must be a string or buffer';
var $1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var $1107e1eb410205f4$var$MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';
var $1107e1eb410205f4$var$supportsKeyObjects = typeof $hdGhs$crypto.createPublicKey === 'function';
if ($1107e1eb410205f4$var$supportsKeyObjects) {
    $1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
    $1107e1eb410205f4$var$MSG_INVALID_SECRET += 'or a KeyObject';
}
function $1107e1eb410205f4$var$checkIsPublicKey(key) {
    if ($1107e1eb410205f4$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return;
    if (!$1107e1eb410205f4$var$supportsKeyObjects) throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key !== 'object') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.type !== 'string') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.asymmetricKeyType !== 'string') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY);
    if (typeof key.export !== 'function') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_VERIFIER_KEY);
}
function $1107e1eb410205f4$var$checkIsPrivateKey(key) {
    if ($1107e1eb410205f4$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return;
    if (typeof key === 'object') return;
    throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_SIGNER_KEY);
}
function $1107e1eb410205f4$var$checkIsSecretKey(key) {
    if ($1107e1eb410205f4$require$Buffer.isBuffer(key)) return;
    if (typeof key === 'string') return key;
    if (!$1107e1eb410205f4$var$supportsKeyObjects) throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_SECRET);
    if (typeof key !== 'object') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_SECRET);
    if (key.type !== 'secret') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_SECRET);
    if (typeof key.export !== 'function') throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_SECRET);
}
function $1107e1eb410205f4$var$fromBase64(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $1107e1eb410205f4$var$toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) for(var i = 0; i < padding; ++i)base64url += '=';
    return base64url.replace(/\-/g, '+').replace(/_/g, '/');
}
function $1107e1eb410205f4$var$typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = $hdGhs$util.format.bind($hdGhs$util, template).apply(null, args);
    return new TypeError(errMsg);
}
function $1107e1eb410205f4$var$bufferOrString(obj) {
    return $1107e1eb410205f4$require$Buffer.isBuffer(obj) || typeof obj === 'string';
}
function $1107e1eb410205f4$var$normalizeInput(thing) {
    if (!$1107e1eb410205f4$var$bufferOrString(thing)) thing = JSON.stringify(thing);
    return thing;
}
function $1107e1eb410205f4$var$createHmacSigner(bits) {
    return function sign(thing, secret) {
        $1107e1eb410205f4$var$checkIsSecretKey(secret);
        thing = $1107e1eb410205f4$var$normalizeInput(thing);
        var hmac = $hdGhs$crypto.createHmac('sha' + bits, secret);
        var sig = (hmac.update(thing), hmac.digest('base64'));
        return $1107e1eb410205f4$var$fromBase64(sig);
    };
}
function $1107e1eb410205f4$var$createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
        var computedSig = $1107e1eb410205f4$var$createHmacSigner(bits)(thing, secret);
        return $eb90ee173771ccda$exports($1107e1eb410205f4$require$Buffer.from(signature), $1107e1eb410205f4$require$Buffer.from(computedSig));
    };
}
function $1107e1eb410205f4$var$createKeySigner(bits) {
    return function sign(thing, privateKey) {
        $1107e1eb410205f4$var$checkIsPrivateKey(privateKey);
        thing = $1107e1eb410205f4$var$normalizeInput(thing);
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = $hdGhs$crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
        return $1107e1eb410205f4$var$fromBase64(sig);
    };
}
function $1107e1eb410205f4$var$createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        $1107e1eb410205f4$var$checkIsPublicKey(publicKey);
        thing = $1107e1eb410205f4$var$normalizeInput(thing);
        signature = $1107e1eb410205f4$var$toBase64(signature);
        var verifier = $hdGhs$crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, 'base64');
    };
}
function $1107e1eb410205f4$var$createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
        $1107e1eb410205f4$var$checkIsPrivateKey(privateKey);
        thing = $1107e1eb410205f4$var$normalizeInput(thing);
        var signer = $hdGhs$crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: $hdGhs$crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: $hdGhs$crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, 'base64'));
        return $1107e1eb410205f4$var$fromBase64(sig);
    };
}
function $1107e1eb410205f4$var$createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        $1107e1eb410205f4$var$checkIsPublicKey(publicKey);
        thing = $1107e1eb410205f4$var$normalizeInput(thing);
        signature = $1107e1eb410205f4$var$toBase64(signature);
        var verifier = $hdGhs$crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify({
            key: publicKey,
            padding: $hdGhs$crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: $hdGhs$crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, 'base64');
    };
}
function $1107e1eb410205f4$var$createECDSASigner(bits) {
    var inner = $1107e1eb410205f4$var$createKeySigner(bits);
    return function sign() {
        var signature = inner.apply(null, arguments);
        signature = $LydJ5.derToJose(signature, 'ES' + bits);
        return signature;
    };
}
function $1107e1eb410205f4$var$createECDSAVerifer(bits) {
    var inner = $1107e1eb410205f4$var$createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
        signature = $LydJ5.joseToDer(signature, 'ES' + bits).toString('base64');
        var result = inner(thing, signature, publicKey);
        return result;
    };
}
function $1107e1eb410205f4$var$createNoneSigner() {
    return function sign() {
        return '';
    };
}
function $1107e1eb410205f4$var$createNoneVerifier() {
    return function verify(thing, signature) {
        return signature === '';
    };
}
module.exports = function jwa(algorithm) {
    var signerFactories = {
        hs: $1107e1eb410205f4$var$createHmacSigner,
        rs: $1107e1eb410205f4$var$createKeySigner,
        ps: $1107e1eb410205f4$var$createPSSKeySigner,
        es: $1107e1eb410205f4$var$createECDSASigner,
        none: $1107e1eb410205f4$var$createNoneSigner
    };
    var verifierFactories = {
        hs: $1107e1eb410205f4$var$createHmacVerifier,
        rs: $1107e1eb410205f4$var$createKeyVerifier,
        ps: $1107e1eb410205f4$var$createPSSKeyVerifier,
        es: $1107e1eb410205f4$var$createECDSAVerifer,
        none: $1107e1eb410205f4$var$createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!match) throw $1107e1eb410205f4$var$typeError($1107e1eb410205f4$var$MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
    };
};


