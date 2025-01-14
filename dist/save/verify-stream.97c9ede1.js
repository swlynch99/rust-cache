require("./safe-buffer.7506ac22.js");
require("./data-stream.164525cd.js");
require("./jwa.f03ddc6b.js");
require("./tostring.e2090371.js");
var $aWnkN$stream = require("stream");
var $aWnkN$util = require("util");


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
/*global module*/ 
var $fERh9 = parcelRequire("fERh9");
var $875f9fe9d92e9b02$require$Buffer = $fERh9.Buffer;

var $a1zbE = parcelRequire("a1zbE");

var $2X19Y = parcelRequire("2X19Y");


var $7PokG = parcelRequire("7PokG");

var $875f9fe9d92e9b02$var$JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function $875f9fe9d92e9b02$var$isObject(thing) {
    return Object.prototype.toString.call(thing) === '[object Object]';
}
function $875f9fe9d92e9b02$var$safeJsonParse(thing) {
    if ($875f9fe9d92e9b02$var$isObject(thing)) return thing;
    try {
        return JSON.parse(thing);
    } catch (e) {
        return undefined;
    }
}
function $875f9fe9d92e9b02$var$headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split('.', 1)[0];
    return $875f9fe9d92e9b02$var$safeJsonParse($875f9fe9d92e9b02$require$Buffer.from(encodedHeader, 'base64').toString('binary'));
}
function $875f9fe9d92e9b02$var$securedInputFromJWS(jwsSig) {
    return jwsSig.split('.', 2).join('.');
}
function $875f9fe9d92e9b02$var$signatureFromJWS(jwsSig) {
    return jwsSig.split('.')[2];
}
function $875f9fe9d92e9b02$var$payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || 'utf8';
    var payload = jwsSig.split('.')[1];
    return $875f9fe9d92e9b02$require$Buffer.from(payload, 'base64').toString(encoding);
}
function $875f9fe9d92e9b02$var$isValidJws(string) {
    return $875f9fe9d92e9b02$var$JWS_REGEX.test(string) && !!$875f9fe9d92e9b02$var$headerFromJWS(string);
}
function $875f9fe9d92e9b02$var$jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
    }
    jwsSig = $7PokG(jwsSig);
    var signature = $875f9fe9d92e9b02$var$signatureFromJWS(jwsSig);
    var securedInput = $875f9fe9d92e9b02$var$securedInputFromJWS(jwsSig);
    var algo = $2X19Y(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
}
function $875f9fe9d92e9b02$var$jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = $7PokG(jwsSig);
    if (!$875f9fe9d92e9b02$var$isValidJws(jwsSig)) return null;
    var header = $875f9fe9d92e9b02$var$headerFromJWS(jwsSig);
    if (!header) return null;
    var payload = $875f9fe9d92e9b02$var$payloadFromJWS(jwsSig);
    if (header.typ === 'JWT' || opts.json) payload = JSON.parse(payload, opts.encoding);
    return {
        header: header,
        payload: payload,
        signature: $875f9fe9d92e9b02$var$signatureFromJWS(jwsSig)
    };
}
function $875f9fe9d92e9b02$var$VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret || opts.publicKey || opts.key;
    var secretStream = new $a1zbE(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new $a1zbE(opts.signature);
    this.secret.once('close', (function() {
        if (!this.signature.writable && this.readable) this.verify();
    }).bind(this));
    this.signature.once('close', (function() {
        if (!this.secret.writable && this.readable) this.verify();
    }).bind(this));
}
$aWnkN$util.inherits($875f9fe9d92e9b02$var$VerifyStream, $aWnkN$stream);
$875f9fe9d92e9b02$var$VerifyStream.prototype.verify = function verify() {
    try {
        var valid = $875f9fe9d92e9b02$var$jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = $875f9fe9d92e9b02$var$jwsDecode(this.signature.buffer, this.encoding);
        this.emit('done', valid, obj);
        this.emit('data', valid);
        this.emit('end');
        this.readable = false;
        return valid;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
$875f9fe9d92e9b02$var$VerifyStream.decode = $875f9fe9d92e9b02$var$jwsDecode;
$875f9fe9d92e9b02$var$VerifyStream.isValid = $875f9fe9d92e9b02$var$isValidJws;
$875f9fe9d92e9b02$var$VerifyStream.verify = $875f9fe9d92e9b02$var$jwsVerify;
module.exports = $875f9fe9d92e9b02$var$VerifyStream;


//# sourceMappingURL=verify-stream.97c9ede1.js.map
