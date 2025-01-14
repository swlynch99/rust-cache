require("./readable.9b0d49fe.js");
require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
require("./util.c5509e95.js");
require("./abort-signal.3d10e045.js");
var $7hkTB$async_hooks = require("async_hooks");


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
parcelRegister("aJRpe", function(module, exports) {
'use strict';

var $55T5q = parcelRequire("55T5q");

var $hA22O = parcelRequire("hA22O");
var $7d1788a742669e9e$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $7d1788a742669e9e$require$RequestAbortedError = $hA22O.RequestAbortedError;

var $iiSZx = parcelRequire("iiSZx");

var $8RTmY = parcelRequire("8RTmY");
var $7d1788a742669e9e$require$getResolveErrorBodyCallback = $8RTmY.getResolveErrorBodyCallback;

var $7d1788a742669e9e$require$AsyncResource = $7hkTB$async_hooks.AsyncResource;

var $bLUEg = parcelRequire("bLUEg");
var $7d1788a742669e9e$require$addSignal = $bLUEg.addSignal;
var $7d1788a742669e9e$require$removeSignal = $bLUEg.removeSignal;
class $7d1788a742669e9e$var$RequestHandler extends $7d1788a742669e9e$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $7d1788a742669e9e$require$InvalidArgumentError('invalid opts');
        const { signal: signal, method: method, opaque: opaque, body: body, onInfo: onInfo, responseHeaders: responseHeaders, throwOnError: throwOnError, highWaterMark: highWaterMark } = opts;
        try {
            if (typeof callback !== 'function') throw new $7d1788a742669e9e$require$InvalidArgumentError('invalid callback');
            if (highWaterMark && (typeof highWaterMark !== 'number' || highWaterMark < 0)) throw new $7d1788a742669e9e$require$InvalidArgumentError('invalid highWaterMark');
            if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $7d1788a742669e9e$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
            if (method === 'CONNECT') throw new $7d1788a742669e9e$require$InvalidArgumentError('invalid method');
            if (onInfo && typeof onInfo !== 'function') throw new $7d1788a742669e9e$require$InvalidArgumentError('invalid onInfo callback');
            super('UNDICI_REQUEST');
        } catch (err) {
            if ($iiSZx.isStream(body)) $iiSZx.destroy(body.on('error', $iiSZx.nop), err);
            throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError;
        this.highWaterMark = highWaterMark;
        if ($iiSZx.isStream(body)) body.on('error', (err)=>{
            this.onError(err);
        });
        $7d1788a742669e9e$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $7d1788a742669e9e$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback: callback, opaque: opaque, abort: abort, context: context, responseHeaders: responseHeaders, highWaterMark: highWaterMark } = this;
        const headers = responseHeaders === 'raw' ? $iiSZx.parseRawHeaders(rawHeaders) : $iiSZx.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) this.onInfo({
                statusCode: statusCode,
                headers: headers
            });
            return;
        }
        const parsedHeaders = responseHeaders === 'raw' ? $iiSZx.parseHeaders(rawHeaders) : headers;
        const contentType = parsedHeaders['content-type'];
        const body = new $55T5q({
            resume: resume,
            abort: abort,
            contentType: contentType,
            highWaterMark: highWaterMark
        });
        this.callback = null;
        this.res = body;
        if (callback !== null) {
            if (this.throwOnError && statusCode >= 400) this.runInAsyncScope($7d1788a742669e9e$require$getResolveErrorBodyCallback, null, {
                callback: callback,
                body: body,
                contentType: contentType,
                statusCode: statusCode,
                statusMessage: statusMessage,
                headers: headers
            });
            else this.runInAsyncScope(callback, null, null, {
                statusCode: statusCode,
                headers: headers,
                trailers: this.trailers,
                opaque: opaque,
                body: body,
                context: context
            });
        }
    }
    onData(chunk) {
        const { res: res } = this;
        return res.push(chunk);
    }
    onComplete(trailers) {
        const { res: res } = this;
        $7d1788a742669e9e$require$removeSignal(this);
        $iiSZx.parseHeaders(trailers, this.trailers);
        res.push(null);
    }
    onError(err) {
        const { res: res, callback: callback, body: body, opaque: opaque } = this;
        $7d1788a742669e9e$require$removeSignal(this);
        if (callback) {
            // TODO: Does this need queueMicrotask?
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque: opaque
                });
            });
        }
        if (res) {
            this.res = null;
            // Ensure all queued handlers are invoked before destroying res.
            queueMicrotask(()=>{
                $iiSZx.destroy(res, err);
            });
        }
        if (body) {
            this.body = null;
            $iiSZx.destroy(body, err);
        }
    }
}
function $7d1788a742669e9e$var$request(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $7d1788a742669e9e$var$request.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        this.dispatch(opts, new $7d1788a742669e9e$var$RequestHandler(opts, callback));
    } catch (err) {
        if (typeof callback !== 'function') throw err;
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque: opaque
            }));
    }
}
module.exports = $7d1788a742669e9e$var$request;
module.exports.RequestHandler = $7d1788a742669e9e$var$RequestHandler;

});
parcelRegister("55T5q", function(module, exports) {
module.exports = new URL("readable.9b0d49fe.js", "file:" + __filename).toString();

});

parcelRegister("8RTmY", function(module, exports) {
module.exports = new URL("util.c5509e95.js", "file:" + __filename).toString();

});

parcelRegister("bLUEg", function(module, exports) {
module.exports = new URL("abort-signal.3d10e045.js", "file:" + __filename).toString();

});



