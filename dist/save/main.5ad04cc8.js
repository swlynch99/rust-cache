require("./Dicer.6b7c6768.js");
require("./multipart.0db37d46.js");
require("./urlencoded.2653f508.js");
require("./parseParams.3c908d5e.js");
var $ix6ki$nodestream = require("node:stream");
var $ix6ki$nodeutil = require("node:util");


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
'use strict';

var $e97d9f0f0b130b1c$require$WritableStream = $ix6ki$nodestream.Writable;

var $e97d9f0f0b130b1c$require$inherits = $ix6ki$nodeutil.inherits;
var $ecc3c55d4771c79b$exports = {};
$ecc3c55d4771c79b$exports = new URL("Dicer.6b7c6768.js", "file:" + __filename).toString();


var $41329276693741ed$exports = {};
$41329276693741ed$exports = new URL("multipart.0db37d46.js", "file:" + __filename).toString();


var $2b3142dd70e8b455$exports = {};
$2b3142dd70e8b455$exports = new URL("urlencoded.2653f508.js", "file:" + __filename).toString();



var $3UsRB = parcelRequire("3UsRB");
function $e97d9f0f0b130b1c$var$Busboy(opts) {
    if (!(this instanceof $e97d9f0f0b130b1c$var$Busboy)) return new $e97d9f0f0b130b1c$var$Busboy(opts);
    if (typeof opts !== 'object') throw new TypeError('Busboy expected an options-Object.');
    if (typeof opts.headers !== 'object') throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    if (typeof opts.headers['content-type'] !== 'string') throw new TypeError('Missing Content-Type-header.');
    const { headers: headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    $e97d9f0f0b130b1c$require$WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
$e97d9f0f0b130b1c$require$inherits($e97d9f0f0b130b1c$var$Busboy, $e97d9f0f0b130b1c$require$WritableStream);
$e97d9f0f0b130b1c$var$Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) return;
        this._finished = true;
    }
    $e97d9f0f0b130b1c$require$WritableStream.prototype.emit.apply(this, arguments);
};
$e97d9f0f0b130b1c$var$Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = $3UsRB(headers['content-type']);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers: headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if ($41329276693741ed$exports.detect.test(parsed[0])) return new $41329276693741ed$exports(this, cfg);
    if ($2b3142dd70e8b455$exports.detect.test(parsed[0])) return new $2b3142dd70e8b455$exports(this, cfg);
    throw new Error('Unsupported Content-Type.');
};
$e97d9f0f0b130b1c$var$Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = $e97d9f0f0b130b1c$var$Busboy;
module.exports.default = $e97d9f0f0b130b1c$var$Busboy;
module.exports.Busboy = $e97d9f0f0b130b1c$var$Busboy;
module.exports.Dicer = $ecc3c55d4771c79b$exports;


