require("./safe-buffer.7506ac22.js");
require("./data-stream.164525cd.js");
require("./jwa.f03ddc6b.js");
require("./tostring.e2090371.js");
var $2GXeJ$stream = require("stream");
var $2GXeJ$util = require("util");


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
var $f12367d2eb568f1f$require$Buffer = $fERh9.Buffer;
var $bc8bb26b6a71586f$exports = {};
$bc8bb26b6a71586f$exports = new URL("data-stream.164525cd.js", "file:" + __filename).toString();


var $d3c781e6457c8052$exports = {};
$d3c781e6457c8052$exports = new URL("jwa.f03ddc6b.js", "file:" + __filename).toString();



var $db9c99c3e40b04ad$exports = {};
$db9c99c3e40b04ad$exports = new URL("tostring.e2090371.js", "file:" + __filename).toString();



function $f12367d2eb568f1f$var$base64url(string, encoding) {
    return $f12367d2eb568f1f$require$Buffer.from(string, encoding).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $f12367d2eb568f1f$var$jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || 'utf8';
    var encodedHeader = $f12367d2eb568f1f$var$base64url($db9c99c3e40b04ad$exports(header), 'binary');
    var encodedPayload = $f12367d2eb568f1f$var$base64url($db9c99c3e40b04ad$exports(payload), encoding);
    return $2GXeJ$util.format('%s.%s', encodedHeader, encodedPayload);
}
function $f12367d2eb568f1f$var$jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = $d3c781e6457c8052$exports(header.alg);
    var securedInput = $f12367d2eb568f1f$var$jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return $2GXeJ$util.format('%s.%s', securedInput, signature);
}
function $f12367d2eb568f1f$var$SignStream(opts) {
    var secret = opts.secret || opts.privateKey || opts.key;
    var secretStream = new $bc8bb26b6a71586f$exports(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new $bc8bb26b6a71586f$exports(opts.payload);
    this.secret.once('close', (function() {
        if (!this.payload.writable && this.readable) this.sign();
    }).bind(this));
    this.payload.once('close', (function() {
        if (!this.secret.writable && this.readable) this.sign();
    }).bind(this));
}
$2GXeJ$util.inherits($f12367d2eb568f1f$var$SignStream, $2GXeJ$stream);
$f12367d2eb568f1f$var$SignStream.prototype.sign = function sign() {
    try {
        var signature = $f12367d2eb568f1f$var$jwsSign({
            header: this.header,
            payload: this.payload.buffer,
            secret: this.secret.buffer,
            encoding: this.encoding
        });
        this.emit('done', signature);
        this.emit('data', signature);
        this.emit('end');
        this.readable = false;
        return signature;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
$f12367d2eb568f1f$var$SignStream.sign = $f12367d2eb568f1f$var$jwsSign;
module.exports = $f12367d2eb568f1f$var$SignStream;


//# sourceMappingURL=sign-stream.4105c672.js.map
