require("./safe-buffer.6230cde1.js");
require("./data-stream.21d00c2b.js");
require("./jwa.e3644d49.js");
require("./tostring.52ec2710.js");
var $3R4y2$stream = require("stream");
var $3R4y2$util = require("util");


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
var $a052d1340679ce52$require$Buffer = $lHpT6.Buffer;
var $71a4ca21507fe3fa$exports = {};
$71a4ca21507fe3fa$exports = new URL("data-stream.21d00c2b.js", "file:" + __filename).toString();


var $448ad43faff9bdab$exports = {};
$448ad43faff9bdab$exports = new URL("jwa.e3644d49.js", "file:" + __filename).toString();



var $35512f45ba481815$exports = {};
$35512f45ba481815$exports = new URL("tostring.52ec2710.js", "file:" + __filename).toString();



function $a052d1340679ce52$var$base64url(string, encoding) {
    return $a052d1340679ce52$require$Buffer.from(string, encoding).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function $a052d1340679ce52$var$jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || 'utf8';
    var encodedHeader = $a052d1340679ce52$var$base64url($35512f45ba481815$exports(header), 'binary');
    var encodedPayload = $a052d1340679ce52$var$base64url($35512f45ba481815$exports(payload), encoding);
    return $3R4y2$util.format('%s.%s', encodedHeader, encodedPayload);
}
function $a052d1340679ce52$var$jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = $448ad43faff9bdab$exports(header.alg);
    var securedInput = $a052d1340679ce52$var$jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return $3R4y2$util.format('%s.%s', securedInput, signature);
}
function $a052d1340679ce52$var$SignStream(opts) {
    var secret = opts.secret || opts.privateKey || opts.key;
    var secretStream = new $71a4ca21507fe3fa$exports(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new $71a4ca21507fe3fa$exports(opts.payload);
    this.secret.once('close', (function() {
        if (!this.payload.writable && this.readable) this.sign();
    }).bind(this));
    this.payload.once('close', (function() {
        if (!this.secret.writable && this.readable) this.sign();
    }).bind(this));
}
$3R4y2$util.inherits($a052d1340679ce52$var$SignStream, $3R4y2$stream);
$a052d1340679ce52$var$SignStream.prototype.sign = function sign() {
    try {
        var signature = $a052d1340679ce52$var$jwsSign({
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
$a052d1340679ce52$var$SignStream.sign = $a052d1340679ce52$var$jwsSign;
module.exports = $a052d1340679ce52$var$SignStream;


