require("./stream.e53e1d64.js");
require("./buffer_list.86b0d4a0.js");
require("./destroy.aa61c9a9.js");
require("./state.7b72e0e7.js");
require("./errors.786067ff.js");
require("./inherits.87144dde.js");
require("./_stream_duplex.3c098e05.js");
require("./string_decoder.4581fbb2.js");
require("./async_iterator.3aa430d8.js");
require("./from.5398b284.js");
var $bfdSk$events = require("events");
var $bfdSk$buffer = require("buffer");
var $bfdSk$util = require("util");


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
parcelRegister("hDCcR", function(module, exports) {
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
'use strict';
module.exports = $cd73b72f393a289c$var$Readable;
/*<replacement>*/ var $cd73b72f393a289c$var$Duplex;
/*</replacement>*/ $cd73b72f393a289c$var$Readable.ReadableState = $cd73b72f393a289c$var$ReadableState;

var $cd73b72f393a289c$require$EE = $bfdSk$events.EventEmitter;
var $cd73b72f393a289c$var$EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};

var $4TwKl = parcelRequire("4TwKl");

var $cd73b72f393a289c$require$Buffer = $bfdSk$buffer.Buffer;
var $cd73b72f393a289c$var$OurUint8Array = (typeof $parcel$global !== 'undefined' ? $parcel$global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function() {};
function $cd73b72f393a289c$var$_uint8ArrayToBuffer(chunk) {
    return $cd73b72f393a289c$require$Buffer.from(chunk);
}
function $cd73b72f393a289c$var$_isUint8Array(obj) {
    return $cd73b72f393a289c$require$Buffer.isBuffer(obj) || obj instanceof $cd73b72f393a289c$var$OurUint8Array;
}

var $cd73b72f393a289c$var$debug;
if ($bfdSk$util && $bfdSk$util.debuglog) $cd73b72f393a289c$var$debug = $bfdSk$util.debuglog('stream');
else $cd73b72f393a289c$var$debug = function debug() {};

var $fj5vS = parcelRequire("fj5vS");

var $lCQrb = parcelRequire("lCQrb");

var $1ZiYk = parcelRequire("1ZiYk");
var $cd73b72f393a289c$var$getHighWaterMark = $1ZiYk.getHighWaterMark;

var $2M35Y = parcelRequire("2M35Y");
var $cd73b72f393a289c$require$_require$codes = $2M35Y.codes;
var $cd73b72f393a289c$var$ERR_INVALID_ARG_TYPE = $cd73b72f393a289c$require$_require$codes.ERR_INVALID_ARG_TYPE, $cd73b72f393a289c$var$ERR_STREAM_PUSH_AFTER_EOF = $cd73b72f393a289c$require$_require$codes.ERR_STREAM_PUSH_AFTER_EOF, $cd73b72f393a289c$var$ERR_METHOD_NOT_IMPLEMENTED = $cd73b72f393a289c$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $cd73b72f393a289c$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT = $cd73b72f393a289c$require$_require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var $cd73b72f393a289c$var$StringDecoder;
var $cd73b72f393a289c$var$createReadableStreamAsyncIterator;
var $cd73b72f393a289c$var$from;

(parcelRequire("lDxVA"))($cd73b72f393a289c$var$Readable, $4TwKl);
var $cd73b72f393a289c$var$errorOrDestroy = $lCQrb.errorOrDestroy;
var $cd73b72f393a289c$var$kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function $cd73b72f393a289c$var$prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}


function $cd73b72f393a289c$var$ReadableState(options, stream, isDuplex) {
    $cd73b72f393a289c$var$Duplex = $cd73b72f393a289c$var$Duplex || (parcelRequire("2Bgns"));
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof $cd73b72f393a289c$var$Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = $cd73b72f393a289c$var$getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new $fj5vS();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!$cd73b72f393a289c$var$StringDecoder) $cd73b72f393a289c$var$StringDecoder = (parcelRequire("cFtbN")).StringDecoder;
        this.decoder = new $cd73b72f393a289c$var$StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}

function $cd73b72f393a289c$var$Readable(options) {
    $cd73b72f393a289c$var$Duplex = $cd73b72f393a289c$var$Duplex || (parcelRequire("2Bgns"));
    if (!(this instanceof $cd73b72f393a289c$var$Readable)) return new $cd73b72f393a289c$var$Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $cd73b72f393a289c$var$Duplex;
    this._readableState = new $cd73b72f393a289c$var$ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    $4TwKl.call(this);
}
Object.defineProperty($cd73b72f393a289c$var$Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
$cd73b72f393a289c$var$Readable.prototype.destroy = $lCQrb.destroy;
$cd73b72f393a289c$var$Readable.prototype._undestroy = $lCQrb.undestroy;
$cd73b72f393a289c$var$Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
$cd73b72f393a289c$var$Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = $cd73b72f393a289c$require$Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return $cd73b72f393a289c$var$readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
$cd73b72f393a289c$var$Readable.prototype.unshift = function(chunk) {
    return $cd73b72f393a289c$var$readableAddChunk(this, chunk, null, true, false);
};
function $cd73b72f393a289c$var$readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    $cd73b72f393a289c$var$debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        $cd73b72f393a289c$var$onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = $cd73b72f393a289c$var$chunkInvalid(state, chunk);
        if (er) $cd73b72f393a289c$var$errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== $cd73b72f393a289c$require$Buffer.prototype) chunk = $cd73b72f393a289c$var$_uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) $cd73b72f393a289c$var$errorOrDestroy(stream, new $cd73b72f393a289c$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else $cd73b72f393a289c$var$addChunk(stream, state, chunk, true);
            } else if (state.ended) $cd73b72f393a289c$var$errorOrDestroy(stream, new $cd73b72f393a289c$var$ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) $cd73b72f393a289c$var$addChunk(stream, state, chunk, false);
                    else $cd73b72f393a289c$var$maybeReadMore(stream, state);
                } else $cd73b72f393a289c$var$addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            $cd73b72f393a289c$var$maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function $cd73b72f393a289c$var$addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) $cd73b72f393a289c$var$emitReadable(stream);
    }
    $cd73b72f393a289c$var$maybeReadMore(stream, state);
}
function $cd73b72f393a289c$var$chunkInvalid(state, chunk) {
    var er;
    if (!$cd73b72f393a289c$var$_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) er = new $cd73b72f393a289c$var$ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer',
        'Uint8Array'
    ], chunk);
    return er;
}
$cd73b72f393a289c$var$Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};

// backwards compatibility.
$cd73b72f393a289c$var$Readable.prototype.setEncoding = function(enc) {
    if (!$cd73b72f393a289c$var$StringDecoder) $cd73b72f393a289c$var$StringDecoder = (parcelRequire("cFtbN")).StringDecoder;
    var decoder = new $cd73b72f393a289c$var$StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var $cd73b72f393a289c$var$MAX_HWM = 0x40000000;
function $cd73b72f393a289c$var$computeNewHighWaterMark(n) {
    if (n >= $cd73b72f393a289c$var$MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = $cd73b72f393a289c$var$MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $cd73b72f393a289c$var$howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = $cd73b72f393a289c$var$computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
$cd73b72f393a289c$var$Readable.prototype.read = function(n) {
    $cd73b72f393a289c$var$debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        $cd73b72f393a289c$var$debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) $cd73b72f393a289c$var$endReadable(this);
        else $cd73b72f393a289c$var$emitReadable(this);
        return null;
    }
    n = $cd73b72f393a289c$var$howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) $cd73b72f393a289c$var$endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    $cd73b72f393a289c$var$debug('need readable', doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        $cd73b72f393a289c$var$debug('length less than watermark', doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        $cd73b72f393a289c$var$debug('reading or ended', doRead);
    } else if (doRead) {
        $cd73b72f393a289c$var$debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = $cd73b72f393a289c$var$howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = $cd73b72f393a289c$var$fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) $cd73b72f393a289c$var$endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function $cd73b72f393a289c$var$onEofChunk(stream, state) {
    $cd73b72f393a289c$var$debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    $cd73b72f393a289c$var$emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            $cd73b72f393a289c$var$emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function $cd73b72f393a289c$var$emitReadable(stream) {
    var state = stream._readableState;
    $cd73b72f393a289c$var$debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        $cd73b72f393a289c$var$debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick($cd73b72f393a289c$var$emitReadable_, stream);
    }
}
function $cd73b72f393a289c$var$emitReadable_(stream) {
    var state = stream._readableState;
    $cd73b72f393a289c$var$debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    $cd73b72f393a289c$var$flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function $cd73b72f393a289c$var$maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick($cd73b72f393a289c$var$maybeReadMore_, stream, state);
    }
}
function $cd73b72f393a289c$var$maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        $cd73b72f393a289c$var$debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
$cd73b72f393a289c$var$Readable.prototype._read = function(n) {
    $cd73b72f393a289c$var$errorOrDestroy(this, new $cd73b72f393a289c$var$ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
$cd73b72f393a289c$var$Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    $cd73b72f393a289c$var$debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        $cd73b72f393a289c$var$debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        $cd73b72f393a289c$var$debug('onend');
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = $cd73b72f393a289c$var$pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        $cd73b72f393a289c$var$debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        $cd73b72f393a289c$var$debug('ondata');
        var ret = dest.write(chunk);
        $cd73b72f393a289c$var$debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && $cd73b72f393a289c$var$indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                $cd73b72f393a289c$var$debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        $cd73b72f393a289c$var$debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if ($cd73b72f393a289c$var$EElistenerCount(dest, 'error') === 0) $cd73b72f393a289c$var$errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    $cd73b72f393a289c$var$prependListener(dest, 'error', onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        $cd73b72f393a289c$var$debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        $cd73b72f393a289c$var$debug('unpipe');
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit('pipe', src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        $cd73b72f393a289c$var$debug('pipe resume');
        src.resume();
    }
    return dest;
};
function $cd73b72f393a289c$var$pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        $cd73b72f393a289c$var$debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && $cd73b72f393a289c$var$EElistenerCount(src, 'data')) {
            state.flowing = true;
            $cd73b72f393a289c$var$flow(src);
        }
    };
}
$cd73b72f393a289c$var$Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = $cd73b72f393a289c$var$indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
$cd73b72f393a289c$var$Readable.prototype.on = function(ev, fn) {
    var res = $4TwKl.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            $cd73b72f393a289c$var$debug('on readable', state.length, state.reading);
            if (state.length) $cd73b72f393a289c$var$emitReadable(this);
            else if (!state.reading) process.nextTick($cd73b72f393a289c$var$nReadingNextTick, this);
        }
    }
    return res;
};
$cd73b72f393a289c$var$Readable.prototype.addListener = $cd73b72f393a289c$var$Readable.prototype.on;
$cd73b72f393a289c$var$Readable.prototype.removeListener = function(ev, fn) {
    var res = $4TwKl.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($cd73b72f393a289c$var$updateReadableListening, this);
    return res;
};
$cd73b72f393a289c$var$Readable.prototype.removeAllListeners = function(ev) {
    var res = $4TwKl.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($cd73b72f393a289c$var$updateReadableListening, this);
    return res;
};
function $cd73b72f393a289c$var$updateReadableListening(self1) {
    var state = self1._readableState;
    state.readableListening = self1.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;
    else if (self1.listenerCount('data') > 0) self1.resume();
}
function $cd73b72f393a289c$var$nReadingNextTick(self1) {
    $cd73b72f393a289c$var$debug('readable nexttick read 0');
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
$cd73b72f393a289c$var$Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        $cd73b72f393a289c$var$debug('resume');
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        $cd73b72f393a289c$var$resume(this, state);
    }
    state.paused = false;
    return this;
};
function $cd73b72f393a289c$var$resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick($cd73b72f393a289c$var$resume_, stream, state);
    }
}
function $cd73b72f393a289c$var$resume_(stream, state) {
    $cd73b72f393a289c$var$debug('resume', state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit('resume');
    $cd73b72f393a289c$var$flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
$cd73b72f393a289c$var$Readable.prototype.pause = function() {
    $cd73b72f393a289c$var$debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        $cd73b72f393a289c$var$debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function $cd73b72f393a289c$var$flow(stream) {
    var state = stream._readableState;
    $cd73b72f393a289c$var$debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
$cd73b72f393a289c$var$Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        $cd73b72f393a289c$var$debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        $cd73b72f393a289c$var$debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === 'function') this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
    // proxy certain important events.
    for(var n = 0; n < $cd73b72f393a289c$var$kProxyEvents.length; n++)stream.on($cd73b72f393a289c$var$kProxyEvents[n], this.emit.bind(this, $cd73b72f393a289c$var$kProxyEvents[n]));
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        $cd73b72f393a289c$var$debug('wrapped _read', n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};

if (typeof Symbol === 'function') $cd73b72f393a289c$var$Readable.prototype[Symbol.asyncIterator] = function() {
    if ($cd73b72f393a289c$var$createReadableStreamAsyncIterator === undefined) $cd73b72f393a289c$var$createReadableStreamAsyncIterator = (parcelRequire("c6Nhc"));
    return $cd73b72f393a289c$var$createReadableStreamAsyncIterator(this);
};
Object.defineProperty($cd73b72f393a289c$var$Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty($cd73b72f393a289c$var$Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty($cd73b72f393a289c$var$Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
});
// exposed for testing purposes only.
$cd73b72f393a289c$var$Readable._fromList = $cd73b72f393a289c$var$fromList;
Object.defineProperty($cd73b72f393a289c$var$Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $cd73b72f393a289c$var$fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function $cd73b72f393a289c$var$endReadable(stream) {
    var state = stream._readableState;
    $cd73b72f393a289c$var$debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick($cd73b72f393a289c$var$endReadableNT, state, stream);
    }
}
function $cd73b72f393a289c$var$endReadableNT(state, stream) {
    $cd73b72f393a289c$var$debug('endReadableNT', state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}

if (typeof Symbol === 'function') $cd73b72f393a289c$var$Readable.from = function(iterable, opts) {
    if ($cd73b72f393a289c$var$from === undefined) $cd73b72f393a289c$var$from = (parcelRequire("dZ4qn"));
    return $cd73b72f393a289c$var$from($cd73b72f393a289c$var$Readable, iterable, opts);
};
function $cd73b72f393a289c$var$indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

});
parcelRegister("4TwKl", function(module, exports) {
module.exports = new URL("stream.e53e1d64.js", "file:" + __filename).toString();

});

parcelRegister("fj5vS", function(module, exports) {
module.exports = new URL("buffer_list.86b0d4a0.js", "file:" + __filename).toString();

});

parcelRegister("lCQrb", function(module, exports) {
module.exports = new URL("destroy.aa61c9a9.js", "file:" + __filename).toString();

});

parcelRegister("1ZiYk", function(module, exports) {
module.exports = new URL("state.7b72e0e7.js", "file:" + __filename).toString();

});

parcelRegister("lDxVA", function(module, exports) {
module.exports = new URL("inherits.87144dde.js", "file:" + __filename).toString();

});

parcelRegister("2Bgns", function(module, exports) {
module.exports = new URL("_stream_duplex.3c098e05.js", "file:" + __filename).toString();

});

parcelRegister("cFtbN", function(module, exports) {
module.exports = new URL("string_decoder.4581fbb2.js", "file:" + __filename).toString();

});

parcelRegister("c6Nhc", function(module, exports) {
module.exports = new URL("async_iterator.3aa430d8.js", "file:" + __filename).toString();

});

parcelRegister("dZ4qn", function(module, exports) {
module.exports = new URL("from.5398b284.js", "file:" + __filename).toString();

});



//# sourceMappingURL=_stream_readable.ecf3b698.js.map
