require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./abort-signal.fddc71a6.js");
var $6Im4y$stream = require("stream");
var $6Im4y$async_hooks = require("async_hooks");
var $6Im4y$assert = require("assert");


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
parcelRegister("7A95v", function(module, exports) {
'use strict';

var $5852f1da4e209e9f$require$Readable = $6Im4y$stream.Readable;
var $5852f1da4e209e9f$require$Duplex = $6Im4y$stream.Duplex;
var $5852f1da4e209e9f$require$PassThrough = $6Im4y$stream.PassThrough;

var $4V3Kr = parcelRequire("4V3Kr");
var $5852f1da4e209e9f$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $5852f1da4e209e9f$require$InvalidReturnValueError = $4V3Kr.InvalidReturnValueError;
var $5852f1da4e209e9f$require$RequestAbortedError = $4V3Kr.RequestAbortedError;

var $1Z05w = parcelRequire("1Z05w");

var $5852f1da4e209e9f$require$AsyncResource = $6Im4y$async_hooks.AsyncResource;

var $bPQfQ = parcelRequire("bPQfQ");
var $5852f1da4e209e9f$require$addSignal = $bPQfQ.addSignal;
var $5852f1da4e209e9f$require$removeSignal = $bPQfQ.removeSignal;

const $5852f1da4e209e9f$var$kResume = Symbol('resume');
class $5852f1da4e209e9f$var$PipelineRequest extends $5852f1da4e209e9f$require$Readable {
    constructor(){
        super({
            autoDestroy: true
        });
        this[$5852f1da4e209e9f$var$kResume] = null;
    }
    _read() {
        const { [$5852f1da4e209e9f$var$kResume]: resume } = this;
        if (resume) {
            this[$5852f1da4e209e9f$var$kResume] = null;
            resume();
        }
    }
    _destroy(err, callback) {
        this._read();
        callback(err);
    }
}
class $5852f1da4e209e9f$var$PipelineResponse extends $5852f1da4e209e9f$require$Readable {
    constructor(resume){
        super({
            autoDestroy: true
        });
        this[$5852f1da4e209e9f$var$kResume] = resume;
    }
    _read() {
        this[$5852f1da4e209e9f$var$kResume]();
    }
    _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) err = new $5852f1da4e209e9f$require$RequestAbortedError();
        callback(err);
    }
}
class $5852f1da4e209e9f$var$PipelineHandler extends $5852f1da4e209e9f$require$AsyncResource {
    constructor(opts, handler){
        if (!opts || typeof opts !== 'object') throw new $5852f1da4e209e9f$require$InvalidArgumentError('invalid opts');
        if (typeof handler !== 'function') throw new $5852f1da4e209e9f$require$InvalidArgumentError('invalid handler');
        const { signal: signal, method: method, opaque: opaque, onInfo: onInfo, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $5852f1da4e209e9f$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        if (method === 'CONNECT') throw new $5852f1da4e209e9f$require$InvalidArgumentError('invalid method');
        if (onInfo && typeof onInfo !== 'function') throw new $5852f1da4e209e9f$require$InvalidArgumentError('invalid onInfo callback');
        super('UNDICI_PIPELINE');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new $5852f1da4e209e9f$var$PipelineRequest().on('error', $1Z05w.nop);
        this.ret = new $5852f1da4e209e9f$require$Duplex({
            readableObjectMode: opts.objectMode,
            autoDestroy: true,
            read: ()=>{
                const { body: body } = this;
                if (body && body.resume) body.resume();
            },
            write: (chunk, encoding, callback)=>{
                const { req: req } = this;
                if (req.push(chunk, encoding) || req._readableState.destroyed) callback();
                else req[$5852f1da4e209e9f$var$kResume] = callback;
            },
            destroy: (err, callback)=>{
                const { body: body, req: req, res: res, ret: ret, abort: abort } = this;
                if (!err && !ret._readableState.endEmitted) err = new $5852f1da4e209e9f$require$RequestAbortedError();
                if (abort && err) abort();
                $1Z05w.destroy(body, err);
                $1Z05w.destroy(req, err);
                $1Z05w.destroy(res, err);
                $5852f1da4e209e9f$require$removeSignal(this);
                callback(err);
            }
        }).on('prefinish', ()=>{
            const { req: req } = this;
            // Node < 15 does not call _final in same tick.
            req.push(null);
        });
        this.res = null;
        $5852f1da4e209e9f$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        const { ret: ret, res: res } = this;
        $6Im4y$assert(!res, 'pipeline cannot be retried');
        if (ret.destroyed) throw new $5852f1da4e209e9f$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume) {
        const { opaque: opaque, handler: handler, context: context } = this;
        if (statusCode < 200) {
            if (this.onInfo) {
                const headers = this.responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
                this.onInfo({
                    statusCode: statusCode,
                    headers: headers
                });
            }
            return;
        }
        this.res = new $5852f1da4e209e9f$var$PipelineResponse(resume);
        let body;
        try {
            this.handler = null;
            const headers = this.responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
            body = this.runInAsyncScope(handler, null, {
                statusCode: statusCode,
                headers: headers,
                opaque: opaque,
                body: this.res,
                context: context
            });
        } catch (err) {
            this.res.on('error', $1Z05w.nop);
            throw err;
        }
        if (!body || typeof body.on !== 'function') throw new $5852f1da4e209e9f$require$InvalidReturnValueError('expected Readable');
        body.on('data', (chunk)=>{
            const { ret: ret, body: body } = this;
            if (!ret.push(chunk) && body.pause) body.pause();
        }).on('error', (err)=>{
            const { ret: ret } = this;
            $1Z05w.destroy(ret, err);
        }).on('end', ()=>{
            const { ret: ret } = this;
            ret.push(null);
        }).on('close', ()=>{
            const { ret: ret } = this;
            if (!ret._readableState.ended) $1Z05w.destroy(ret, new $5852f1da4e209e9f$require$RequestAbortedError());
        });
        this.body = body;
    }
    onData(chunk) {
        const { res: res } = this;
        return res.push(chunk);
    }
    onComplete(trailers) {
        const { res: res } = this;
        res.push(null);
    }
    onError(err) {
        const { ret: ret } = this;
        this.handler = null;
        $1Z05w.destroy(ret, err);
    }
}
function $5852f1da4e209e9f$var$pipeline(opts, handler) {
    try {
        const pipelineHandler = new $5852f1da4e209e9f$var$PipelineHandler(opts, handler);
        this.dispatch({
            ...opts,
            body: pipelineHandler.req
        }, pipelineHandler);
        return pipelineHandler.ret;
    } catch (err) {
        return new $5852f1da4e209e9f$require$PassThrough().destroy(err);
    }
}
module.exports = $5852f1da4e209e9f$var$pipeline;

});


//# sourceMappingURL=api-pipeline.d4ec221d.js.map
