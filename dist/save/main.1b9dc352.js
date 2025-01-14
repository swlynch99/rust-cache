require("./Dicer.13e0a31b.js");
require("./multipart.408b0b2c.js");
require("./urlencoded.79d2a4b1.js");
require("./parseParams.cb1867b9.js");
var $6x8xc$nodestream = require("node:stream");
var $6x8xc$nodeutil = require("node:util");


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

var $05495dad41eeef74$require$WritableStream = $6x8xc$nodestream.Writable;

var $05495dad41eeef74$require$inherits = $6x8xc$nodeutil.inherits;
var $8b20115f6c280b3e$exports = {};
$8b20115f6c280b3e$exports = new URL("Dicer.13e0a31b.js", "file:" + __filename).toString();


var $5a58784d0a025738$exports = {};
$5a58784d0a025738$exports = new URL("multipart.408b0b2c.js", "file:" + __filename).toString();


var $d160aed228359449$exports = {};
$d160aed228359449$exports = new URL("urlencoded.79d2a4b1.js", "file:" + __filename).toString();



var $ha0Gb = parcelRequire("ha0Gb");
function $05495dad41eeef74$var$Busboy(opts) {
    if (!(this instanceof $05495dad41eeef74$var$Busboy)) return new $05495dad41eeef74$var$Busboy(opts);
    if (typeof opts !== 'object') throw new TypeError('Busboy expected an options-Object.');
    if (typeof opts.headers !== 'object') throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    if (typeof opts.headers['content-type'] !== 'string') throw new TypeError('Missing Content-Type-header.');
    const { headers: headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    $05495dad41eeef74$require$WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
$05495dad41eeef74$require$inherits($05495dad41eeef74$var$Busboy, $05495dad41eeef74$require$WritableStream);
$05495dad41eeef74$var$Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) return;
        this._finished = true;
    }
    $05495dad41eeef74$require$WritableStream.prototype.emit.apply(this, arguments);
};
$05495dad41eeef74$var$Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = $ha0Gb(headers['content-type']);
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
    if ($5a58784d0a025738$exports.detect.test(parsed[0])) return new $5a58784d0a025738$exports(this, cfg);
    if ($d160aed228359449$exports.detect.test(parsed[0])) return new $d160aed228359449$exports(this, cfg);
    throw new Error('Unsupported Content-Type.');
};
$05495dad41eeef74$var$Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = $05495dad41eeef74$var$Busboy;
module.exports.default = $05495dad41eeef74$var$Busboy;
module.exports.Busboy = $05495dad41eeef74$var$Busboy;
module.exports.Dicer = $8b20115f6c280b3e$exports;


//# sourceMappingURL=main.1b9dc352.js.map
