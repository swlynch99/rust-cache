require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
var $cKGaW$assert = require("assert");
var $cKGaW$stream = require("stream");


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
// Ported from https://github.com/nodejs/undici/pull/907
'use strict';


var $3d164a3d1ca2ccb8$require$Readable = $cKGaW$stream.Readable;

var $hA22O = parcelRequire("hA22O");
var $3d164a3d1ca2ccb8$require$RequestAbortedError = $hA22O.RequestAbortedError;
var $3d164a3d1ca2ccb8$require$NotSupportedError = $hA22O.NotSupportedError;
var $3d164a3d1ca2ccb8$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $iiSZx = parcelRequire("iiSZx");

var $iiSZx = parcelRequire("iiSZx");
var $3d164a3d1ca2ccb8$require$ReadableStreamFrom = $iiSZx.ReadableStreamFrom;
var $3d164a3d1ca2ccb8$require$toUSVString = $iiSZx.toUSVString;
let $3d164a3d1ca2ccb8$var$Blob;
const $3d164a3d1ca2ccb8$var$kConsume = Symbol('kConsume');
const $3d164a3d1ca2ccb8$var$kReading = Symbol('kReading');
const $3d164a3d1ca2ccb8$var$kBody = Symbol('kBody');
const $3d164a3d1ca2ccb8$var$kAbort = Symbol('abort');
const $3d164a3d1ca2ccb8$var$kContentType = Symbol('kContentType');
const $3d164a3d1ca2ccb8$var$noop = ()=>{};
module.exports = class BodyReadable extends $3d164a3d1ca2ccb8$require$Readable {
    constructor({ resume: resume, abort: abort, contentType: contentType = '', highWaterMark: highWaterMark = 65536 // Same as nodejs fs streams.
     }){
        super({
            autoDestroy: true,
            read: resume,
            highWaterMark: highWaterMark
        });
        this._readableState.dataEmitted = false;
        this[$3d164a3d1ca2ccb8$var$kAbort] = abort;
        this[$3d164a3d1ca2ccb8$var$kConsume] = null;
        this[$3d164a3d1ca2ccb8$var$kBody] = null;
        this[$3d164a3d1ca2ccb8$var$kContentType] = contentType;
        // Is stream being consumed through Readable API?
        // This is an optimization so that we avoid checking
        // for 'data' and 'readable' listeners in the hot path
        // inside push().
        this[$3d164a3d1ca2ccb8$var$kReading] = false;
    }
    destroy(err) {
        if (this.destroyed) // Node < 16
        return this;
        if (!err && !this._readableState.endEmitted) err = new $3d164a3d1ca2ccb8$require$RequestAbortedError();
        if (err) this[$3d164a3d1ca2ccb8$var$kAbort]();
        return super.destroy(err);
    }
    emit(ev, ...args) {
        if (ev === 'data') // Node < 16.7
        this._readableState.dataEmitted = true;
        else if (ev === 'error') // Node < 16
        this._readableState.errorEmitted = true;
        return super.emit(ev, ...args);
    }
    on(ev, ...args) {
        if (ev === 'data' || ev === 'readable') this[$3d164a3d1ca2ccb8$var$kReading] = true;
        return super.on(ev, ...args);
    }
    addListener(ev, ...args) {
        return this.on(ev, ...args);
    }
    off(ev, ...args) {
        const ret = super.off(ev, ...args);
        if (ev === 'data' || ev === 'readable') this[$3d164a3d1ca2ccb8$var$kReading] = this.listenerCount('data') > 0 || this.listenerCount('readable') > 0;
        return ret;
    }
    removeListener(ev, ...args) {
        return this.off(ev, ...args);
    }
    push(chunk) {
        if (this[$3d164a3d1ca2ccb8$var$kConsume] && chunk !== null && this.readableLength === 0) {
            $3d164a3d1ca2ccb8$var$consumePush(this[$3d164a3d1ca2ccb8$var$kConsume], chunk);
            return this[$3d164a3d1ca2ccb8$var$kReading] ? super.push(chunk) : true;
        }
        return super.push(chunk);
    }
    // https://fetch.spec.whatwg.org/#dom-body-text
    async text() {
        return $3d164a3d1ca2ccb8$var$consume(this, 'text');
    }
    // https://fetch.spec.whatwg.org/#dom-body-json
    async json() {
        return $3d164a3d1ca2ccb8$var$consume(this, 'json');
    }
    // https://fetch.spec.whatwg.org/#dom-body-blob
    async blob() {
        return $3d164a3d1ca2ccb8$var$consume(this, 'blob');
    }
    // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
    async arrayBuffer() {
        return $3d164a3d1ca2ccb8$var$consume(this, 'arrayBuffer');
    }
    // https://fetch.spec.whatwg.org/#dom-body-formdata
    async formData() {
        // TODO: Implement.
        throw new $3d164a3d1ca2ccb8$require$NotSupportedError();
    }
    // https://fetch.spec.whatwg.org/#dom-body-bodyused
    get bodyUsed() {
        return $iiSZx.isDisturbed(this);
    }
    // https://fetch.spec.whatwg.org/#dom-body-body
    get body() {
        if (!this[$3d164a3d1ca2ccb8$var$kBody]) {
            this[$3d164a3d1ca2ccb8$var$kBody] = $3d164a3d1ca2ccb8$require$ReadableStreamFrom(this);
            if (this[$3d164a3d1ca2ccb8$var$kConsume]) {
                // TODO: Is this the best way to force a lock?
                this[$3d164a3d1ca2ccb8$var$kBody].getReader() // Ensure stream is locked.
                ;
                $cKGaW$assert(this[$3d164a3d1ca2ccb8$var$kBody].locked);
            }
        }
        return this[$3d164a3d1ca2ccb8$var$kBody];
    }
    dump(opts) {
        let limit = opts && Number.isFinite(opts.limit) ? opts.limit : 262144;
        const signal = opts && opts.signal;
        if (signal) try {
            if (typeof signal !== 'object' || !('aborted' in signal)) throw new $3d164a3d1ca2ccb8$require$InvalidArgumentError('signal must be an AbortSignal');
            $iiSZx.throwIfAborted(signal);
        } catch (err) {
            return Promise.reject(err);
        }
        if (this.closed) return Promise.resolve(null);
        return new Promise((resolve, reject)=>{
            const signalListenerCleanup = signal ? $iiSZx.addAbortListener(signal, ()=>{
                this.destroy();
            }) : $3d164a3d1ca2ccb8$var$noop;
            this.on('close', function() {
                signalListenerCleanup();
                if (signal && signal.aborted) reject(signal.reason || Object.assign(new Error('The operation was aborted'), {
                    name: 'AbortError'
                }));
                else resolve(null);
            }).on('error', $3d164a3d1ca2ccb8$var$noop).on('data', function(chunk) {
                limit -= chunk.length;
                if (limit <= 0) this.destroy();
            }).resume();
        });
    }
};
// https://streams.spec.whatwg.org/#readablestream-locked
function $3d164a3d1ca2ccb8$var$isLocked(self) {
    // Consume is an implicit lock.
    return self[$3d164a3d1ca2ccb8$var$kBody] && self[$3d164a3d1ca2ccb8$var$kBody].locked === true || self[$3d164a3d1ca2ccb8$var$kConsume];
}
// https://fetch.spec.whatwg.org/#body-unusable
function $3d164a3d1ca2ccb8$var$isUnusable(self) {
    return $iiSZx.isDisturbed(self) || $3d164a3d1ca2ccb8$var$isLocked(self);
}
async function $3d164a3d1ca2ccb8$var$consume(stream, type) {
    if ($3d164a3d1ca2ccb8$var$isUnusable(stream)) throw new TypeError('unusable');
    $cKGaW$assert(!stream[$3d164a3d1ca2ccb8$var$kConsume]);
    return new Promise((resolve, reject)=>{
        stream[$3d164a3d1ca2ccb8$var$kConsume] = {
            type: type,
            stream: stream,
            resolve: resolve,
            reject: reject,
            length: 0,
            body: []
        };
        stream.on('error', function(err) {
            $3d164a3d1ca2ccb8$var$consumeFinish(this[$3d164a3d1ca2ccb8$var$kConsume], err);
        }).on('close', function() {
            if (this[$3d164a3d1ca2ccb8$var$kConsume].body !== null) $3d164a3d1ca2ccb8$var$consumeFinish(this[$3d164a3d1ca2ccb8$var$kConsume], new $3d164a3d1ca2ccb8$require$RequestAbortedError());
        });
        process.nextTick($3d164a3d1ca2ccb8$var$consumeStart, stream[$3d164a3d1ca2ccb8$var$kConsume]);
    });
}
function $3d164a3d1ca2ccb8$var$consumeStart(consume) {
    if (consume.body === null) return;
    const { _readableState: state } = consume.stream;
    for (const chunk of state.buffer)$3d164a3d1ca2ccb8$var$consumePush(consume, chunk);
    if (state.endEmitted) $3d164a3d1ca2ccb8$var$consumeEnd(this[$3d164a3d1ca2ccb8$var$kConsume]);
    else consume.stream.on('end', function() {
        $3d164a3d1ca2ccb8$var$consumeEnd(this[$3d164a3d1ca2ccb8$var$kConsume]);
    });
    consume.stream.resume();
    while(consume.stream.read() != null);
}

function $3d164a3d1ca2ccb8$var$consumeEnd(consume) {
    const { type: type, body: body, resolve: resolve, stream: stream, length: length } = consume;
    try {
        if (type === 'text') resolve($3d164a3d1ca2ccb8$require$toUSVString(Buffer.concat(body)));
        else if (type === 'json') resolve(JSON.parse(Buffer.concat(body)));
        else if (type === 'arrayBuffer') {
            const dst = new Uint8Array(length);
            let pos = 0;
            for (const buf of body){
                dst.set(buf, pos);
                pos += buf.byteLength;
            }
            resolve(dst.buffer);
        } else if (type === 'blob') {
            if (!$3d164a3d1ca2ccb8$var$Blob) $3d164a3d1ca2ccb8$var$Blob = $3d164a3d1ca2ccb8$import$d04c39d37e012a99$3b660928c86ff55c;
            resolve(new $3d164a3d1ca2ccb8$var$Blob(body, {
                type: stream[$3d164a3d1ca2ccb8$var$kContentType]
            }));
        }
        $3d164a3d1ca2ccb8$var$consumeFinish(consume);
    } catch (err) {
        stream.destroy(err);
    }
}
function $3d164a3d1ca2ccb8$var$consumePush(consume, chunk) {
    consume.length += chunk.length;
    consume.body.push(chunk);
}
function $3d164a3d1ca2ccb8$var$consumeFinish(consume, err) {
    if (consume.body === null) return;
    if (err) consume.reject(err);
    else consume.resolve();
    consume.type = null;
    consume.stream = null;
    consume.resolve = null;
    consume.reject = null;
    consume.length = 0;
    consume.body = null;
}


