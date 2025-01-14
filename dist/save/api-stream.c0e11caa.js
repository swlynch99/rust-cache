require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./util.0503e649.js");
require("./abort-signal.fddc71a6.js");
var $eROyD$stream = require("stream");
var $eROyD$async_hooks = require("async_hooks");


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
parcelRegister("dF97F", function(module, exports) {
'use strict';

var $9f262e3fa80ec015$require$finished = $eROyD$stream.finished;
var $9f262e3fa80ec015$require$PassThrough = $eROyD$stream.PassThrough;

var $4V3Kr = parcelRequire("4V3Kr");
var $9f262e3fa80ec015$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $9f262e3fa80ec015$require$InvalidReturnValueError = $4V3Kr.InvalidReturnValueError;
var $9f262e3fa80ec015$require$RequestAbortedError = $4V3Kr.RequestAbortedError;

var $1Z05w = parcelRequire("1Z05w");

var $3Hy7c = parcelRequire("3Hy7c");
var $9f262e3fa80ec015$require$getResolveErrorBodyCallback = $3Hy7c.getResolveErrorBodyCallback;

var $9f262e3fa80ec015$require$AsyncResource = $eROyD$async_hooks.AsyncResource;

var $bPQfQ = parcelRequire("bPQfQ");
var $9f262e3fa80ec015$require$addSignal = $bPQfQ.addSignal;
var $9f262e3fa80ec015$require$removeSignal = $bPQfQ.removeSignal;
class $9f262e3fa80ec015$var$StreamHandler extends $9f262e3fa80ec015$require$AsyncResource {
    constructor(opts, factory, callback){
        if (!opts || typeof opts !== 'object') throw new $9f262e3fa80ec015$require$InvalidArgumentError('invalid opts');
        const { signal: signal, method: method, opaque: opaque, body: body, onInfo: onInfo, responseHeaders: responseHeaders, throwOnError: throwOnError } = opts;
        try {
            if (typeof callback !== 'function') throw new $9f262e3fa80ec015$require$InvalidArgumentError('invalid callback');
            if (typeof factory !== 'function') throw new $9f262e3fa80ec015$require$InvalidArgumentError('invalid factory');
            if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $9f262e3fa80ec015$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
            if (method === 'CONNECT') throw new $9f262e3fa80ec015$require$InvalidArgumentError('invalid method');
            if (onInfo && typeof onInfo !== 'function') throw new $9f262e3fa80ec015$require$InvalidArgumentError('invalid onInfo callback');
            super('UNDICI_STREAM');
        } catch (err) {
            if ($1Z05w.isStream(body)) $1Z05w.destroy(body.on('error', $1Z05w.nop), err);
            throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError || false;
        if ($1Z05w.isStream(body)) body.on('error', (err)=>{
            this.onError(err);
        });
        $9f262e3fa80ec015$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $9f262e3fa80ec015$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { factory: factory, opaque: opaque, context: context, callback: callback, responseHeaders: responseHeaders } = this;
        const headers = responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) this.onInfo({
                statusCode: statusCode,
                headers: headers
            });
            return;
        }
        this.factory = null;
        let res;
        if (this.throwOnError && statusCode >= 400) {
            const parsedHeaders = responseHeaders === 'raw' ? $1Z05w.parseHeaders(rawHeaders) : headers;
            const contentType = parsedHeaders['content-type'];
            res = new $9f262e3fa80ec015$require$PassThrough();
            this.callback = null;
            this.runInAsyncScope($9f262e3fa80ec015$require$getResolveErrorBodyCallback, null, {
                callback: callback,
                body: res,
                contentType: contentType,
                statusCode: statusCode,
                statusMessage: statusMessage,
                headers: headers
            });
        } else {
            if (factory === null) return;
            res = this.runInAsyncScope(factory, null, {
                statusCode: statusCode,
                headers: headers,
                opaque: opaque,
                context: context
            });
            if (!res || typeof res.write !== 'function' || typeof res.end !== 'function' || typeof res.on !== 'function') throw new $9f262e3fa80ec015$require$InvalidReturnValueError('expected Writable');
            // TODO: Avoid finished. It registers an unnecessary amount of listeners.
            $9f262e3fa80ec015$require$finished(res, {
                readable: false
            }, (err)=>{
                const { callback: callback, res: res, opaque: opaque, trailers: trailers, abort: abort } = this;
                this.res = null;
                if (err || !res.readable) $1Z05w.destroy(res, err);
                this.callback = null;
                this.runInAsyncScope(callback, null, err || null, {
                    opaque: opaque,
                    trailers: trailers
                });
                if (err) abort();
            });
        }
        res.on('drain', resume);
        this.res = res;
        const needDrain = res.writableNeedDrain !== undefined ? res.writableNeedDrain : res._writableState && res._writableState.needDrain;
        return needDrain !== true;
    }
    onData(chunk) {
        const { res: res } = this;
        return res ? res.write(chunk) : true;
    }
    onComplete(trailers) {
        const { res: res } = this;
        $9f262e3fa80ec015$require$removeSignal(this);
        if (!res) return;
        this.trailers = $1Z05w.parseHeaders(trailers);
        res.end();
    }
    onError(err) {
        const { res: res, callback: callback, opaque: opaque, body: body } = this;
        $9f262e3fa80ec015$require$removeSignal(this);
        this.factory = null;
        if (res) {
            this.res = null;
            $1Z05w.destroy(res, err);
        } else if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque: opaque
                });
            });
        }
        if (body) {
            this.body = null;
            $1Z05w.destroy(body, err);
        }
    }
}
function $9f262e3fa80ec015$var$stream(opts, factory, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $9f262e3fa80ec015$var$stream.call(this, opts, factory, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        this.dispatch(opts, new $9f262e3fa80ec015$var$StreamHandler(opts, factory, callback));
    } catch (err) {
        if (typeof callback !== 'function') throw err;
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque: opaque
            }));
    }
}
module.exports = $9f262e3fa80ec015$var$stream;

});


//# sourceMappingURL=api-stream.c0e11caa.js.map
