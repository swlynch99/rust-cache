require("./safe-buffer.6230cde1.js");
var $5R4XH$stream = require("stream");
var $5R4XH$util = require("util");


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
/*global module, process*/ 
var $lHpT6 = parcelRequire("lHpT6");
var $eb67effc295f1644$require$Buffer = $lHpT6.Buffer;


function $eb67effc295f1644$var$DataStream(data) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    // No input
    if (!data) {
        this.buffer = $eb67effc295f1644$require$Buffer.alloc(0);
        return this;
    }
    // Stream
    if (typeof data.pipe === 'function') {
        this.buffer = $eb67effc295f1644$require$Buffer.alloc(0);
        data.pipe(this);
        return this;
    }
    // Buffer or String
    // or Object (assumedly a passworded key)
    if (data.length || typeof data === 'object') {
        this.buffer = data;
        this.writable = false;
        process.nextTick((function() {
            this.emit('end', data);
            this.readable = false;
            this.emit('close');
        }).bind(this));
        return this;
    }
    throw new TypeError('Unexpected data type (' + typeof data + ')');
}
$5R4XH$util.inherits($eb67effc295f1644$var$DataStream, $5R4XH$stream);
$eb67effc295f1644$var$DataStream.prototype.write = function write(data) {
    this.buffer = $eb67effc295f1644$require$Buffer.concat([
        this.buffer,
        $eb67effc295f1644$require$Buffer.from(data)
    ]);
    this.emit('data', data);
};
$eb67effc295f1644$var$DataStream.prototype.end = function end(data) {
    if (data) this.write(data);
    this.emit('end', data);
    this.emit('close');
    this.writable = false;
    this.readable = false;
};
module.exports = $eb67effc295f1644$var$DataStream;


