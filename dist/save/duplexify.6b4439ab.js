require("./readable.d7c7d328.js");
require("./end-of-stream.3840e204.js");
require("./inherits.87144dde.js");
require("./stream-shift.95f1e342.js");


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
parcelRegister("iqI8d", function(module, exports) {

var $5ZPuP = parcelRequire("5ZPuP");

var $1LEst = parcelRequire("1LEst");

var $jxzhY = parcelRequire("jxzhY");

var $CFLvO = parcelRequire("CFLvO");
var $d6ace34e85eb4741$var$SIGNAL_FLUSH = Buffer.from && Buffer.from !== Uint8Array.from ? Buffer.from([
    0
]) : new Buffer([
    0
]);
var $d6ace34e85eb4741$var$onuncork = function(self, fn) {
    if (self._corked) self.once('uncork', fn);
    else fn();
};
var $d6ace34e85eb4741$var$autoDestroy = function(self, err) {
    if (self._autoDestroy) self.destroy(err);
};
var $d6ace34e85eb4741$var$destroyer = function(self, end) {
    return function(err) {
        if (err) $d6ace34e85eb4741$var$autoDestroy(self, err.message === 'premature close' ? null : err);
        else if (end && !self._ended) self.end();
    };
};
var $d6ace34e85eb4741$var$end = function(ws, fn) {
    if (!ws) return fn();
    if (ws._writableState && ws._writableState.finished) return fn();
    if (ws._writableState) return ws.end(fn);
    ws.end();
    fn();
};
var $d6ace34e85eb4741$var$noop = function() {};
var $d6ace34e85eb4741$var$toStreams2 = function(rs) {
    return new $5ZPuP.Readable({
        objectMode: true,
        highWaterMark: 16
    }).wrap(rs);
};
var $d6ace34e85eb4741$var$Duplexify = function(writable, readable, opts) {
    if (!(this instanceof $d6ace34e85eb4741$var$Duplexify)) return new $d6ace34e85eb4741$var$Duplexify(writable, readable, opts);
    $5ZPuP.Duplex.call(this, opts);
    this._writable = null;
    this._readable = null;
    this._readable2 = null;
    this._autoDestroy = !opts || opts.autoDestroy !== false;
    this._forwardDestroy = !opts || opts.destroy !== false;
    this._forwardEnd = !opts || opts.end !== false;
    this._corked = 1 // start corked
    ;
    this._ondrain = null;
    this._drained = false;
    this._forwarding = false;
    this._unwrite = null;
    this._unread = null;
    this._ended = false;
    this.destroyed = false;
    if (writable) this.setWritable(writable);
    if (readable) this.setReadable(readable);
};
$jxzhY($d6ace34e85eb4741$var$Duplexify, $5ZPuP.Duplex);
$d6ace34e85eb4741$var$Duplexify.obj = function(writable, readable, opts) {
    if (!opts) opts = {};
    opts.objectMode = true;
    opts.highWaterMark = 16;
    return new $d6ace34e85eb4741$var$Duplexify(writable, readable, opts);
};
$d6ace34e85eb4741$var$Duplexify.prototype.cork = function() {
    if (++this._corked === 1) this.emit('cork');
};
$d6ace34e85eb4741$var$Duplexify.prototype.uncork = function() {
    if (this._corked && --this._corked === 0) this.emit('uncork');
};
$d6ace34e85eb4741$var$Duplexify.prototype.setWritable = function(writable) {
    if (this._unwrite) this._unwrite();
    if (this.destroyed) {
        if (writable && writable.destroy) writable.destroy();
        return;
    }
    if (writable === null || writable === false) {
        this.end();
        return;
    }
    var self = this;
    var unend = $1LEst(writable, {
        writable: true,
        readable: false
    }, $d6ace34e85eb4741$var$destroyer(this, this._forwardEnd));
    var ondrain = function() {
        var ondrain = self._ondrain;
        self._ondrain = null;
        if (ondrain) ondrain();
    };
    var clear = function() {
        self._writable.removeListener('drain', ondrain);
        unend();
    };
    if (this._unwrite) process.nextTick(ondrain) // force a drain on stream reset to avoid livelocks
    ;
    this._writable = writable;
    this._writable.on('drain', ondrain);
    this._unwrite = clear;
    this.uncork() // always uncork setWritable
    ;
};
$d6ace34e85eb4741$var$Duplexify.prototype.setReadable = function(readable) {
    if (this._unread) this._unread();
    if (this.destroyed) {
        if (readable && readable.destroy) readable.destroy();
        return;
    }
    if (readable === null || readable === false) {
        this.push(null);
        this.resume();
        return;
    }
    var self = this;
    var unend = $1LEst(readable, {
        writable: false,
        readable: true
    }, $d6ace34e85eb4741$var$destroyer(this));
    var onreadable = function() {
        self._forward();
    };
    var onend = function() {
        self.push(null);
    };
    var clear = function() {
        self._readable2.removeListener('readable', onreadable);
        self._readable2.removeListener('end', onend);
        unend();
    };
    this._drained = true;
    this._readable = readable;
    this._readable2 = readable._readableState ? readable : $d6ace34e85eb4741$var$toStreams2(readable);
    this._readable2.on('readable', onreadable);
    this._readable2.on('end', onend);
    this._unread = clear;
    this._forward();
};
$d6ace34e85eb4741$var$Duplexify.prototype._read = function() {
    this._drained = true;
    this._forward();
};
$d6ace34e85eb4741$var$Duplexify.prototype._forward = function() {
    if (this._forwarding || !this._readable2 || !this._drained) return;
    this._forwarding = true;
    var data;
    while(this._drained && (data = $CFLvO(this._readable2)) !== null){
        if (this.destroyed) continue;
        this._drained = this.push(data);
    }
    this._forwarding = false;
};
$d6ace34e85eb4741$var$Duplexify.prototype.destroy = function(err, cb) {
    if (!cb) cb = $d6ace34e85eb4741$var$noop;
    if (this.destroyed) return cb(null);
    this.destroyed = true;
    var self = this;
    process.nextTick(function() {
        self._destroy(err);
        cb(null);
    });
};
$d6ace34e85eb4741$var$Duplexify.prototype._destroy = function(err) {
    if (err) {
        var ondrain = this._ondrain;
        this._ondrain = null;
        if (ondrain) ondrain(err);
        else this.emit('error', err);
    }
    if (this._forwardDestroy) {
        if (this._readable && this._readable.destroy) this._readable.destroy();
        if (this._writable && this._writable.destroy) this._writable.destroy();
    }
    this.emit('close');
};
$d6ace34e85eb4741$var$Duplexify.prototype._write = function(data, enc, cb) {
    if (this.destroyed) return;
    if (this._corked) return $d6ace34e85eb4741$var$onuncork(this, this._write.bind(this, data, enc, cb));
    if (data === $d6ace34e85eb4741$var$SIGNAL_FLUSH) return this._finish(cb);
    if (!this._writable) return cb();
    if (this._writable.write(data) === false) this._ondrain = cb;
    else if (!this.destroyed) cb();
};
$d6ace34e85eb4741$var$Duplexify.prototype._finish = function(cb) {
    var self = this;
    this.emit('preend');
    $d6ace34e85eb4741$var$onuncork(this, function() {
        $d6ace34e85eb4741$var$end(self._forwardEnd && self._writable, function() {
            // haxx to not emit prefinish twice
            if (self._writableState.prefinished === false) self._writableState.prefinished = true;
            self.emit('prefinish');
            $d6ace34e85eb4741$var$onuncork(self, cb);
        });
    });
};
$d6ace34e85eb4741$var$Duplexify.prototype.end = function(data, enc, cb) {
    if (typeof data === 'function') return this.end(null, null, data);
    if (typeof enc === 'function') return this.end(data, null, enc);
    this._ended = true;
    if (data) this.write(data);
    if (!this._writableState.ending && !this._writableState.destroyed) this.write($d6ace34e85eb4741$var$SIGNAL_FLUSH);
    return $5ZPuP.Writable.prototype.end.call(this, cb);
};
module.exports = $d6ace34e85eb4741$var$Duplexify;

});
parcelRegister("5ZPuP", function(module, exports) {
module.exports = new URL("readable.d7c7d328.js", "file:" + __filename).toString();

});

parcelRegister("1LEst", function(module, exports) {
module.exports = new URL("end-of-stream.3840e204.js", "file:" + __filename).toString();

});

parcelRegister("CFLvO", function(module, exports) {
module.exports = new URL("stream-shift.95f1e342.js", "file:" + __filename).toString();

});



//# sourceMappingURL=duplexify.6b4439ab.js.map
