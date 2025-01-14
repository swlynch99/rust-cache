require("./readable.897429b0.js");
require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./util.0503e649.js");
require("./abort-signal.fddc71a6.js");
var $clhRU$async_hooks = require("async_hooks");


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
parcelRegister("ekCX8", function(module, exports) {
'use strict';

var $jKR2I = parcelRequire("jKR2I");

var $4V3Kr = parcelRequire("4V3Kr");
var $a6f1262dd805ac0d$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $a6f1262dd805ac0d$require$RequestAbortedError = $4V3Kr.RequestAbortedError;

var $1Z05w = parcelRequire("1Z05w");

var $Pr8xJ = parcelRequire("Pr8xJ");
var $a6f1262dd805ac0d$require$getResolveErrorBodyCallback = $Pr8xJ.getResolveErrorBodyCallback;

var $a6f1262dd805ac0d$require$AsyncResource = $clhRU$async_hooks.AsyncResource;

var $8fGEy = parcelRequire("8fGEy");
var $a6f1262dd805ac0d$require$addSignal = $8fGEy.addSignal;
var $a6f1262dd805ac0d$require$removeSignal = $8fGEy.removeSignal;
class $a6f1262dd805ac0d$var$RequestHandler extends $a6f1262dd805ac0d$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $a6f1262dd805ac0d$require$InvalidArgumentError('invalid opts');
        const { signal: signal, method: method, opaque: opaque, body: body, onInfo: onInfo, responseHeaders: responseHeaders, throwOnError: throwOnError, highWaterMark: highWaterMark } = opts;
        try {
            if (typeof callback !== 'function') throw new $a6f1262dd805ac0d$require$InvalidArgumentError('invalid callback');
            if (highWaterMark && (typeof highWaterMark !== 'number' || highWaterMark < 0)) throw new $a6f1262dd805ac0d$require$InvalidArgumentError('invalid highWaterMark');
            if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $a6f1262dd805ac0d$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
            if (method === 'CONNECT') throw new $a6f1262dd805ac0d$require$InvalidArgumentError('invalid method');
            if (onInfo && typeof onInfo !== 'function') throw new $a6f1262dd805ac0d$require$InvalidArgumentError('invalid onInfo callback');
            super('UNDICI_REQUEST');
        } catch (err) {
            if ($1Z05w.isStream(body)) $1Z05w.destroy(body.on('error', $1Z05w.nop), err);
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
        if ($1Z05w.isStream(body)) body.on('error', (err)=>{
            this.onError(err);
        });
        $a6f1262dd805ac0d$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $a6f1262dd805ac0d$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback: callback, opaque: opaque, abort: abort, context: context, responseHeaders: responseHeaders, highWaterMark: highWaterMark } = this;
        const headers = responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) this.onInfo({
                statusCode: statusCode,
                headers: headers
            });
            return;
        }
        const parsedHeaders = responseHeaders === 'raw' ? $1Z05w.parseHeaders(rawHeaders) : headers;
        const contentType = parsedHeaders['content-type'];
        const body = new $jKR2I({
            resume: resume,
            abort: abort,
            contentType: contentType,
            highWaterMark: highWaterMark
        });
        this.callback = null;
        this.res = body;
        if (callback !== null) {
            if (this.throwOnError && statusCode >= 400) this.runInAsyncScope($a6f1262dd805ac0d$require$getResolveErrorBodyCallback, null, {
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
        $a6f1262dd805ac0d$require$removeSignal(this);
        $1Z05w.parseHeaders(trailers, this.trailers);
        res.push(null);
    }
    onError(err) {
        const { res: res, callback: callback, body: body, opaque: opaque } = this;
        $a6f1262dd805ac0d$require$removeSignal(this);
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
                $1Z05w.destroy(res, err);
            });
        }
        if (body) {
            this.body = null;
            $1Z05w.destroy(body, err);
        }
    }
}
function $a6f1262dd805ac0d$var$request(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $a6f1262dd805ac0d$var$request.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        this.dispatch(opts, new $a6f1262dd805ac0d$var$RequestHandler(opts, callback));
    } catch (err) {
        if (typeof callback !== 'function') throw err;
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque: opaque
            }));
    }
}
module.exports = $a6f1262dd805ac0d$var$request;
module.exports.RequestHandler = $a6f1262dd805ac0d$var$RequestHandler;

});
parcelRegister("jKR2I", function(module, exports) {
module.exports = new URL("readable.897429b0.js", "file:" + __filename).toString();

});

parcelRegister("Pr8xJ", function(module, exports) {
module.exports = new URL("util.0503e649.js", "file:" + __filename).toString();

});

parcelRegister("8fGEy", function(module, exports) {
module.exports = new URL("abort-signal.fddc71a6.js", "file:" + __filename).toString();

});



//# sourceMappingURL=api-request.dfe99c80.js.map
