require("./node.188de93c.js");
require("./stream.e53e1d64.js");
require("./destroy.aa61c9a9.js");
require("./state.7b72e0e7.js");
require("./errors.786067ff.js");
require("./inherits.87144dde.js");
require("./_stream_duplex.3c098e05.js");
var $49udc$buffer = require("buffer");


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
parcelRegister("jpokp", function(module, exports) {
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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
module.exports = $e21339345feaa742$var$Writable;
/* <replacement> */ function $e21339345feaa742$var$WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function $e21339345feaa742$var$CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        $e21339345feaa742$var$onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var $e21339345feaa742$var$Duplex;
/*</replacement>*/ $e21339345feaa742$var$Writable.WritableState = $e21339345feaa742$var$WritableState;

/*<replacement>*/ var $e21339345feaa742$var$internalUtil = {
    deprecate: (parcelRequire("lyoIi"))
};

var $cjsKJ = parcelRequire("cjsKJ");

var $e21339345feaa742$require$Buffer = $49udc$buffer.Buffer;
var $e21339345feaa742$var$OurUint8Array = (typeof $parcel$global !== 'undefined' ? $parcel$global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function() {};
function $e21339345feaa742$var$_uint8ArrayToBuffer(chunk) {
    return $e21339345feaa742$require$Buffer.from(chunk);
}
function $e21339345feaa742$var$_isUint8Array(obj) {
    return $e21339345feaa742$require$Buffer.isBuffer(obj) || obj instanceof $e21339345feaa742$var$OurUint8Array;
}

var $8aQCO = parcelRequire("8aQCO");

var $bMNDi = parcelRequire("bMNDi");
var $e21339345feaa742$var$getHighWaterMark = $bMNDi.getHighWaterMark;

var $2M35Y = parcelRequire("2M35Y");
var $e21339345feaa742$require$_require$codes = $2M35Y.codes;
var $e21339345feaa742$var$ERR_INVALID_ARG_TYPE = $e21339345feaa742$require$_require$codes.ERR_INVALID_ARG_TYPE, $e21339345feaa742$var$ERR_METHOD_NOT_IMPLEMENTED = $e21339345feaa742$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $e21339345feaa742$var$ERR_MULTIPLE_CALLBACK = $e21339345feaa742$require$_require$codes.ERR_MULTIPLE_CALLBACK, $e21339345feaa742$var$ERR_STREAM_CANNOT_PIPE = $e21339345feaa742$require$_require$codes.ERR_STREAM_CANNOT_PIPE, $e21339345feaa742$var$ERR_STREAM_DESTROYED = $e21339345feaa742$require$_require$codes.ERR_STREAM_DESTROYED, $e21339345feaa742$var$ERR_STREAM_NULL_VALUES = $e21339345feaa742$require$_require$codes.ERR_STREAM_NULL_VALUES, $e21339345feaa742$var$ERR_STREAM_WRITE_AFTER_END = $e21339345feaa742$require$_require$codes.ERR_STREAM_WRITE_AFTER_END, $e21339345feaa742$var$ERR_UNKNOWN_ENCODING = $e21339345feaa742$require$_require$codes.ERR_UNKNOWN_ENCODING;
var $e21339345feaa742$var$errorOrDestroy = $8aQCO.errorOrDestroy;

(parcelRequire("jxzhY"))($e21339345feaa742$var$Writable, $cjsKJ);
function $e21339345feaa742$var$nop() {}

function $e21339345feaa742$var$WritableState(options, stream, isDuplex) {
    $e21339345feaa742$var$Duplex = $e21339345feaa742$var$Duplex || (parcelRequire("9HhjW"));
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof $e21339345feaa742$var$Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = $e21339345feaa742$var$getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        $e21339345feaa742$var$onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new $e21339345feaa742$var$CorkedRequest(this);
}
$e21339345feaa742$var$WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty($e21339345feaa742$var$WritableState.prototype, 'buffer', {
            get: $e21339345feaa742$var$internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var $e21339345feaa742$var$realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    $e21339345feaa742$var$realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty($e21339345feaa742$var$Writable, Symbol.hasInstance, {
        value: function value(object) {
            if ($e21339345feaa742$var$realHasInstance.call(this, object)) return true;
            if (this !== $e21339345feaa742$var$Writable) return false;
            return object && object._writableState instanceof $e21339345feaa742$var$WritableState;
        }
    });
} else $e21339345feaa742$var$realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};

function $e21339345feaa742$var$Writable(options) {
    $e21339345feaa742$var$Duplex = $e21339345feaa742$var$Duplex || (parcelRequire("9HhjW"));
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $e21339345feaa742$var$Duplex;
    if (!isDuplex && !$e21339345feaa742$var$realHasInstance.call($e21339345feaa742$var$Writable, this)) return new $e21339345feaa742$var$Writable(options);
    this._writableState = new $e21339345feaa742$var$WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    $cjsKJ.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
$e21339345feaa742$var$Writable.prototype.pipe = function() {
    $e21339345feaa742$var$errorOrDestroy(this, new $e21339345feaa742$var$ERR_STREAM_CANNOT_PIPE());
};
function $e21339345feaa742$var$writeAfterEnd(stream, cb) {
    var er = new $e21339345feaa742$var$ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    $e21339345feaa742$var$errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function $e21339345feaa742$var$validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new $e21339345feaa742$var$ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new $e21339345feaa742$var$ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        $e21339345feaa742$var$errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
$e21339345feaa742$var$Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && $e21339345feaa742$var$_isUint8Array(chunk);
    if (isBuf && !$e21339345feaa742$require$Buffer.isBuffer(chunk)) chunk = $e21339345feaa742$var$_uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = $e21339345feaa742$var$nop;
    if (state.ending) $e21339345feaa742$var$writeAfterEnd(this, cb);
    else if (isBuf || $e21339345feaa742$var$validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = $e21339345feaa742$var$writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
$e21339345feaa742$var$Writable.prototype.cork = function() {
    this._writableState.corked++;
};
$e21339345feaa742$var$Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) $e21339345feaa742$var$clearBuffer(this, state);
    }
};
$e21339345feaa742$var$Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new $e21339345feaa742$var$ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty($e21339345feaa742$var$Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function $e21339345feaa742$var$decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = $e21339345feaa742$require$Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty($e21339345feaa742$var$Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function $e21339345feaa742$var$writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = $e21339345feaa742$var$decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else $e21339345feaa742$var$doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function $e21339345feaa742$var$doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new $e21339345feaa742$var$ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function $e21339345feaa742$var$onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick($e21339345feaa742$var$finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        $e21339345feaa742$var$errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        $e21339345feaa742$var$errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        $e21339345feaa742$var$finishMaybe(stream, state);
    }
}
function $e21339345feaa742$var$onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function $e21339345feaa742$var$onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new $e21339345feaa742$var$ERR_MULTIPLE_CALLBACK();
    $e21339345feaa742$var$onwriteStateUpdate(state);
    if (er) $e21339345feaa742$var$onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = $e21339345feaa742$var$needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) $e21339345feaa742$var$clearBuffer(stream, state);
        if (sync) process.nextTick($e21339345feaa742$var$afterWrite, stream, state, finished, cb);
        else $e21339345feaa742$var$afterWrite(stream, state, finished, cb);
    }
}
function $e21339345feaa742$var$afterWrite(stream, state, finished, cb) {
    if (!finished) $e21339345feaa742$var$onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    $e21339345feaa742$var$finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function $e21339345feaa742$var$onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function $e21339345feaa742$var$clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        $e21339345feaa742$var$doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new $e21339345feaa742$var$CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            $e21339345feaa742$var$doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
$e21339345feaa742$var$Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new $e21339345feaa742$var$ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
$e21339345feaa742$var$Writable.prototype._writev = null;
$e21339345feaa742$var$Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) $e21339345feaa742$var$endWritable(this, state, cb);
    return this;
};
Object.defineProperty($e21339345feaa742$var$Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function $e21339345feaa742$var$needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function $e21339345feaa742$var$callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) $e21339345feaa742$var$errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        $e21339345feaa742$var$finishMaybe(stream, state);
    });
}
function $e21339345feaa742$var$prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick($e21339345feaa742$var$callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function $e21339345feaa742$var$finishMaybe(stream, state) {
    var need = $e21339345feaa742$var$needFinish(state);
    if (need) {
        $e21339345feaa742$var$prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function $e21339345feaa742$var$endWritable(stream, state, cb) {
    state.ending = true;
    $e21339345feaa742$var$finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function $e21339345feaa742$var$onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty($e21339345feaa742$var$Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
$e21339345feaa742$var$Writable.prototype.destroy = $8aQCO.destroy;
$e21339345feaa742$var$Writable.prototype._undestroy = $8aQCO.undestroy;
$e21339345feaa742$var$Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

});
parcelRegister("lyoIi", function(module, exports) {
module.exports = new URL("node.188de93c.js", "file:" + __filename).toString();

});



//# sourceMappingURL=_stream_writable.3dddf52a.js.map
