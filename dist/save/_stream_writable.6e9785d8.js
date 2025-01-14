require("./node.d9e33824.js");
require("./stream.40bbd5a4.js");
require("./destroy.feafa427.js");
require("./state.d78e5175.js");
require("./errors.f36c07ef.js");
require("./inherits.8407678e.js");
require("./_stream_duplex.1ab8a7bb.js");
var $cLKgx$buffer = require("buffer");


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
parcelRegister("wphgI", function(module, exports) {
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
module.exports = $061698dd3591434b$var$Writable;
/* <replacement> */ function $061698dd3591434b$var$WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function $061698dd3591434b$var$CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        $061698dd3591434b$var$onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var $061698dd3591434b$var$Duplex;
/*</replacement>*/ $061698dd3591434b$var$Writable.WritableState = $061698dd3591434b$var$WritableState;

/*<replacement>*/ var $061698dd3591434b$var$internalUtil = {
    deprecate: (parcelRequire("4ew0O"))
};

var $5BkBI = parcelRequire("5BkBI");

var $061698dd3591434b$require$Buffer = $cLKgx$buffer.Buffer;
var $061698dd3591434b$var$OurUint8Array = (typeof $parcel$global !== 'undefined' ? $parcel$global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function() {};
function $061698dd3591434b$var$_uint8ArrayToBuffer(chunk) {
    return $061698dd3591434b$require$Buffer.from(chunk);
}
function $061698dd3591434b$var$_isUint8Array(obj) {
    return $061698dd3591434b$require$Buffer.isBuffer(obj) || obj instanceof $061698dd3591434b$var$OurUint8Array;
}

var $1ugsy = parcelRequire("1ugsy");

var $7P73K = parcelRequire("7P73K");
var $061698dd3591434b$var$getHighWaterMark = $7P73K.getHighWaterMark;

var $gvp3l = parcelRequire("gvp3l");
var $061698dd3591434b$require$_require$codes = $gvp3l.codes;
var $061698dd3591434b$var$ERR_INVALID_ARG_TYPE = $061698dd3591434b$require$_require$codes.ERR_INVALID_ARG_TYPE, $061698dd3591434b$var$ERR_METHOD_NOT_IMPLEMENTED = $061698dd3591434b$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $061698dd3591434b$var$ERR_MULTIPLE_CALLBACK = $061698dd3591434b$require$_require$codes.ERR_MULTIPLE_CALLBACK, $061698dd3591434b$var$ERR_STREAM_CANNOT_PIPE = $061698dd3591434b$require$_require$codes.ERR_STREAM_CANNOT_PIPE, $061698dd3591434b$var$ERR_STREAM_DESTROYED = $061698dd3591434b$require$_require$codes.ERR_STREAM_DESTROYED, $061698dd3591434b$var$ERR_STREAM_NULL_VALUES = $061698dd3591434b$require$_require$codes.ERR_STREAM_NULL_VALUES, $061698dd3591434b$var$ERR_STREAM_WRITE_AFTER_END = $061698dd3591434b$require$_require$codes.ERR_STREAM_WRITE_AFTER_END, $061698dd3591434b$var$ERR_UNKNOWN_ENCODING = $061698dd3591434b$require$_require$codes.ERR_UNKNOWN_ENCODING;
var $061698dd3591434b$var$errorOrDestroy = $1ugsy.errorOrDestroy;

(parcelRequire("cOBaW"))($061698dd3591434b$var$Writable, $5BkBI);
function $061698dd3591434b$var$nop() {}

function $061698dd3591434b$var$WritableState(options, stream, isDuplex) {
    $061698dd3591434b$var$Duplex = $061698dd3591434b$var$Duplex || (parcelRequire("1HDuU"));
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof $061698dd3591434b$var$Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = $061698dd3591434b$var$getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
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
        $061698dd3591434b$var$onwrite(stream, er);
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
    this.corkedRequestsFree = new $061698dd3591434b$var$CorkedRequest(this);
}
$061698dd3591434b$var$WritableState.prototype.getBuffer = function getBuffer() {
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
        Object.defineProperty($061698dd3591434b$var$WritableState.prototype, 'buffer', {
            get: $061698dd3591434b$var$internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var $061698dd3591434b$var$realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    $061698dd3591434b$var$realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty($061698dd3591434b$var$Writable, Symbol.hasInstance, {
        value: function value(object) {
            if ($061698dd3591434b$var$realHasInstance.call(this, object)) return true;
            if (this !== $061698dd3591434b$var$Writable) return false;
            return object && object._writableState instanceof $061698dd3591434b$var$WritableState;
        }
    });
} else $061698dd3591434b$var$realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};

function $061698dd3591434b$var$Writable(options) {
    $061698dd3591434b$var$Duplex = $061698dd3591434b$var$Duplex || (parcelRequire("1HDuU"));
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $061698dd3591434b$var$Duplex;
    if (!isDuplex && !$061698dd3591434b$var$realHasInstance.call($061698dd3591434b$var$Writable, this)) return new $061698dd3591434b$var$Writable(options);
    this._writableState = new $061698dd3591434b$var$WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    $5BkBI.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
$061698dd3591434b$var$Writable.prototype.pipe = function() {
    $061698dd3591434b$var$errorOrDestroy(this, new $061698dd3591434b$var$ERR_STREAM_CANNOT_PIPE());
};
function $061698dd3591434b$var$writeAfterEnd(stream, cb) {
    var er = new $061698dd3591434b$var$ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    $061698dd3591434b$var$errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function $061698dd3591434b$var$validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new $061698dd3591434b$var$ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new $061698dd3591434b$var$ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        $061698dd3591434b$var$errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
$061698dd3591434b$var$Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && $061698dd3591434b$var$_isUint8Array(chunk);
    if (isBuf && !$061698dd3591434b$require$Buffer.isBuffer(chunk)) chunk = $061698dd3591434b$var$_uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = $061698dd3591434b$var$nop;
    if (state.ending) $061698dd3591434b$var$writeAfterEnd(this, cb);
    else if (isBuf || $061698dd3591434b$var$validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = $061698dd3591434b$var$writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
$061698dd3591434b$var$Writable.prototype.cork = function() {
    this._writableState.corked++;
};
$061698dd3591434b$var$Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) $061698dd3591434b$var$clearBuffer(this, state);
    }
};
$061698dd3591434b$var$Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
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
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new $061698dd3591434b$var$ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty($061698dd3591434b$var$Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function $061698dd3591434b$var$decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = $061698dd3591434b$require$Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty($061698dd3591434b$var$Writable.prototype, 'writableHighWaterMark', {
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
function $061698dd3591434b$var$writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = $061698dd3591434b$var$decodeChunk(state, chunk, encoding);
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
    } else $061698dd3591434b$var$doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function $061698dd3591434b$var$doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new $061698dd3591434b$var$ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function $061698dd3591434b$var$onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick($061698dd3591434b$var$finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        $061698dd3591434b$var$errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        $061698dd3591434b$var$errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        $061698dd3591434b$var$finishMaybe(stream, state);
    }
}
function $061698dd3591434b$var$onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function $061698dd3591434b$var$onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new $061698dd3591434b$var$ERR_MULTIPLE_CALLBACK();
    $061698dd3591434b$var$onwriteStateUpdate(state);
    if (er) $061698dd3591434b$var$onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = $061698dd3591434b$var$needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) $061698dd3591434b$var$clearBuffer(stream, state);
        if (sync) process.nextTick($061698dd3591434b$var$afterWrite, stream, state, finished, cb);
        else $061698dd3591434b$var$afterWrite(stream, state, finished, cb);
    }
}
function $061698dd3591434b$var$afterWrite(stream, state, finished, cb) {
    if (!finished) $061698dd3591434b$var$onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    $061698dd3591434b$var$finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function $061698dd3591434b$var$onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
}
// if there's something in the buffer waiting, then process it
function $061698dd3591434b$var$clearBuffer(stream, state) {
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
        $061698dd3591434b$var$doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new $061698dd3591434b$var$CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            $061698dd3591434b$var$doWrite(stream, state, false, len, chunk, encoding, cb);
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
$061698dd3591434b$var$Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new $061698dd3591434b$var$ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
$061698dd3591434b$var$Writable.prototype._writev = null;
$061698dd3591434b$var$Writable.prototype.end = function(chunk, encoding, cb) {
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
    if (!state.ending) $061698dd3591434b$var$endWritable(this, state, cb);
    return this;
};
Object.defineProperty($061698dd3591434b$var$Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function $061698dd3591434b$var$needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function $061698dd3591434b$var$callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) $061698dd3591434b$var$errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        $061698dd3591434b$var$finishMaybe(stream, state);
    });
}
function $061698dd3591434b$var$prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick($061698dd3591434b$var$callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function $061698dd3591434b$var$finishMaybe(stream, state) {
    var need = $061698dd3591434b$var$needFinish(state);
    if (need) {
        $061698dd3591434b$var$prefinish(stream, state);
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
function $061698dd3591434b$var$endWritable(stream, state, cb) {
    state.ending = true;
    $061698dd3591434b$var$finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function $061698dd3591434b$var$onCorkedFinish(corkReq, state, err) {
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
Object.defineProperty($061698dd3591434b$var$Writable.prototype, 'destroyed', {
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
$061698dd3591434b$var$Writable.prototype.destroy = $1ugsy.destroy;
$061698dd3591434b$var$Writable.prototype._undestroy = $1ugsy.undestroy;
$061698dd3591434b$var$Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

});
parcelRegister("4ew0O", function(module, exports) {
module.exports = new URL("node.d9e33824.js", "file:" + __filename).toString();

});



