require("./_stream_readable.c863737c.js");
require("./_stream_writable.6e9785d8.js");
require("./inherits.8407678e.js");


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
parcelRegister("1HDuU", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/ var $13d871f7d22553d9$var$objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = $13d871f7d22553d9$var$Duplex;

var $gfDCe = parcelRequire("gfDCe");

var $j3yr1 = parcelRequire("j3yr1");

(parcelRequire("cOBaW"))($13d871f7d22553d9$var$Duplex, $gfDCe);
// Allow the keys array to be GC'ed.
var $13d871f7d22553d9$var$keys = $13d871f7d22553d9$var$objectKeys($j3yr1.prototype);
for(var $13d871f7d22553d9$var$v = 0; $13d871f7d22553d9$var$v < $13d871f7d22553d9$var$keys.length; $13d871f7d22553d9$var$v++){
    var $13d871f7d22553d9$var$method = $13d871f7d22553d9$var$keys[$13d871f7d22553d9$var$v];
    if (!$13d871f7d22553d9$var$Duplex.prototype[$13d871f7d22553d9$var$method]) $13d871f7d22553d9$var$Duplex.prototype[$13d871f7d22553d9$var$method] = $j3yr1.prototype[$13d871f7d22553d9$var$method];
}
function $13d871f7d22553d9$var$Duplex(options) {
    if (!(this instanceof $13d871f7d22553d9$var$Duplex)) return new $13d871f7d22553d9$var$Duplex(options);
    $gfDCe.call(this, options);
    $j3yr1.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', $13d871f7d22553d9$var$onend);
        }
    }
}
Object.defineProperty($13d871f7d22553d9$var$Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty($13d871f7d22553d9$var$Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty($13d871f7d22553d9$var$Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function $13d871f7d22553d9$var$onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick($13d871f7d22553d9$var$onEndNT, this);
}
function $13d871f7d22553d9$var$onEndNT(self) {
    self.end();
}
Object.defineProperty($13d871f7d22553d9$var$Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

});
parcelRegister("j3yr1", function(module, exports) {
module.exports = new URL("_stream_writable.6e9785d8.js", "file:" + __filename).toString();

});



