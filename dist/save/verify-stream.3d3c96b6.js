require("./safe-buffer.6230cde1.js");
require("./data-stream.21d00c2b.js");
require("./jwa.e3644d49.js");
require("./tostring.52ec2710.js");
var $lQHDK$stream = require("stream");
var $lQHDK$util = require("util");


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
var $lHpT6 = parcelRequire("lHpT6");
var $84a458be08379f6c$require$Buffer = $lHpT6.Buffer;

var $kd3L7 = parcelRequire("kd3L7");

var $1sEzT = parcelRequire("1sEzT");


var $cIqlr = parcelRequire("cIqlr");

var $84a458be08379f6c$var$JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function $84a458be08379f6c$var$isObject(thing) {
    return Object.prototype.toString.call(thing) === '[object Object]';
}
function $84a458be08379f6c$var$safeJsonParse(thing) {
    if ($84a458be08379f6c$var$isObject(thing)) return thing;
    try {
        return JSON.parse(thing);
    } catch (e) {
        return undefined;
    }
}
function $84a458be08379f6c$var$headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split('.', 1)[0];
    return $84a458be08379f6c$var$safeJsonParse($84a458be08379f6c$require$Buffer.from(encodedHeader, 'base64').toString('binary'));
}
function $84a458be08379f6c$var$securedInputFromJWS(jwsSig) {
    return jwsSig.split('.', 2).join('.');
}
function $84a458be08379f6c$var$signatureFromJWS(jwsSig) {
    return jwsSig.split('.')[2];
}
function $84a458be08379f6c$var$payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || 'utf8';
    var payload = jwsSig.split('.')[1];
    return $84a458be08379f6c$require$Buffer.from(payload, 'base64').toString(encoding);
}
function $84a458be08379f6c$var$isValidJws(string) {
    return $84a458be08379f6c$var$JWS_REGEX.test(string) && !!$84a458be08379f6c$var$headerFromJWS(string);
}
function $84a458be08379f6c$var$jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
    }
    jwsSig = $cIqlr(jwsSig);
    var signature = $84a458be08379f6c$var$signatureFromJWS(jwsSig);
    var securedInput = $84a458be08379f6c$var$securedInputFromJWS(jwsSig);
    var algo = $1sEzT(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
}
function $84a458be08379f6c$var$jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = $cIqlr(jwsSig);
    if (!$84a458be08379f6c$var$isValidJws(jwsSig)) return null;
    var header = $84a458be08379f6c$var$headerFromJWS(jwsSig);
    if (!header) return null;
    var payload = $84a458be08379f6c$var$payloadFromJWS(jwsSig);
    if (header.typ === 'JWT' || opts.json) payload = JSON.parse(payload, opts.encoding);
    return {
        header: header,
        payload: payload,
        signature: $84a458be08379f6c$var$signatureFromJWS(jwsSig)
    };
}
function $84a458be08379f6c$var$VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret || opts.publicKey || opts.key;
    var secretStream = new $kd3L7(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new $kd3L7(opts.signature);
    this.secret.once('close', (function() {
        if (!this.signature.writable && this.readable) this.verify();
    }).bind(this));
    this.signature.once('close', (function() {
        if (!this.secret.writable && this.readable) this.verify();
    }).bind(this));
}
$lQHDK$util.inherits($84a458be08379f6c$var$VerifyStream, $lQHDK$stream);
$84a458be08379f6c$var$VerifyStream.prototype.verify = function verify() {
    try {
        var valid = $84a458be08379f6c$var$jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = $84a458be08379f6c$var$jwsDecode(this.signature.buffer, this.encoding);
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
$84a458be08379f6c$var$VerifyStream.decode = $84a458be08379f6c$var$jwsDecode;
$84a458be08379f6c$var$VerifyStream.isValid = $84a458be08379f6c$var$isValidJws;
$84a458be08379f6c$var$VerifyStream.verify = $84a458be08379f6c$var$jwsVerify;
module.exports = $84a458be08379f6c$var$VerifyStream;


