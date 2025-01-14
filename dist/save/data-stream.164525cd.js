require("./safe-buffer.7506ac22.js");
var $9AxIy$stream = require("stream");
var $9AxIy$util = require("util");


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
var $fERh9 = parcelRequire("fERh9");
var $74c54ac009b4e271$require$Buffer = $fERh9.Buffer;


function $74c54ac009b4e271$var$DataStream(data) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    // No input
    if (!data) {
        this.buffer = $74c54ac009b4e271$require$Buffer.alloc(0);
        return this;
    }
    // Stream
    if (typeof data.pipe === 'function') {
        this.buffer = $74c54ac009b4e271$require$Buffer.alloc(0);
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
$9AxIy$util.inherits($74c54ac009b4e271$var$DataStream, $9AxIy$stream);
$74c54ac009b4e271$var$DataStream.prototype.write = function write(data) {
    this.buffer = $74c54ac009b4e271$require$Buffer.concat([
        this.buffer,
        $74c54ac009b4e271$require$Buffer.from(data)
    ]);
    this.emit('data', data);
};
$74c54ac009b4e271$var$DataStream.prototype.end = function end(data) {
    if (data) this.write(data);
    this.emit('end', data);
    this.emit('close');
    this.writable = false;
    this.readable = false;
};
module.exports = $74c54ac009b4e271$var$DataStream;


//# sourceMappingURL=data-stream.164525cd.js.map
