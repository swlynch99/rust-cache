require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
require("./abort-signal.3d10e045.js");
var $aJu6Q$stream = require("stream");
var $aJu6Q$async_hooks = require("async_hooks");
var $aJu6Q$assert = require("assert");


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
parcelRegister("gftGm", function(module, exports) {
'use strict';

var $bd45125a77f3a74a$require$Readable = $aJu6Q$stream.Readable;
var $bd45125a77f3a74a$require$Duplex = $aJu6Q$stream.Duplex;
var $bd45125a77f3a74a$require$PassThrough = $aJu6Q$stream.PassThrough;

var $hA22O = parcelRequire("hA22O");
var $bd45125a77f3a74a$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $bd45125a77f3a74a$require$InvalidReturnValueError = $hA22O.InvalidReturnValueError;
var $bd45125a77f3a74a$require$RequestAbortedError = $hA22O.RequestAbortedError;

var $iiSZx = parcelRequire("iiSZx");

var $bd45125a77f3a74a$require$AsyncResource = $aJu6Q$async_hooks.AsyncResource;

var $99j1E = parcelRequire("99j1E");
var $bd45125a77f3a74a$require$addSignal = $99j1E.addSignal;
var $bd45125a77f3a74a$require$removeSignal = $99j1E.removeSignal;

const $bd45125a77f3a74a$var$kResume = Symbol('resume');
class $bd45125a77f3a74a$var$PipelineRequest extends $bd45125a77f3a74a$require$Readable {
    constructor(){
        super({
            autoDestroy: true
        });
        this[$bd45125a77f3a74a$var$kResume] = null;
    }
    _read() {
        const { [$bd45125a77f3a74a$var$kResume]: resume } = this;
        if (resume) {
            this[$bd45125a77f3a74a$var$kResume] = null;
            resume();
        }
    }
    _destroy(err, callback) {
        this._read();
        callback(err);
    }
}
class $bd45125a77f3a74a$var$PipelineResponse extends $bd45125a77f3a74a$require$Readable {
    constructor(resume){
        super({
            autoDestroy: true
        });
        this[$bd45125a77f3a74a$var$kResume] = resume;
    }
    _read() {
        this[$bd45125a77f3a74a$var$kResume]();
    }
    _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) err = new $bd45125a77f3a74a$require$RequestAbortedError();
        callback(err);
    }
}
class $bd45125a77f3a74a$var$PipelineHandler extends $bd45125a77f3a74a$require$AsyncResource {
    constructor(opts, handler){
        if (!opts || typeof opts !== 'object') throw new $bd45125a77f3a74a$require$InvalidArgumentError('invalid opts');
        if (typeof handler !== 'function') throw new $bd45125a77f3a74a$require$InvalidArgumentError('invalid handler');
        const { signal: signal, method: method, opaque: opaque, onInfo: onInfo, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $bd45125a77f3a74a$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        if (method === 'CONNECT') throw new $bd45125a77f3a74a$require$InvalidArgumentError('invalid method');
        if (onInfo && typeof onInfo !== 'function') throw new $bd45125a77f3a74a$require$InvalidArgumentError('invalid onInfo callback');
        super('UNDICI_PIPELINE');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new $bd45125a77f3a74a$var$PipelineRequest().on('error', $iiSZx.nop);
        this.ret = new $bd45125a77f3a74a$require$Duplex({
            readableObjectMode: opts.objectMode,
            autoDestroy: true,
            read: ()=>{
                const { body: body } = this;
                if (body && body.resume) body.resume();
            },
            write: (chunk, encoding, callback)=>{
                const { req: req } = this;
                if (req.push(chunk, encoding) || req._readableState.destroyed) callback();
                else req[$bd45125a77f3a74a$var$kResume] = callback;
            },
            destroy: (err, callback)=>{
                const { body: body, req: req, res: res, ret: ret, abort: abort } = this;
                if (!err && !ret._readableState.endEmitted) err = new $bd45125a77f3a74a$require$RequestAbortedError();
                if (abort && err) abort();
                $iiSZx.destroy(body, err);
                $iiSZx.destroy(req, err);
                $iiSZx.destroy(res, err);
                $bd45125a77f3a74a$require$removeSignal(this);
                callback(err);
            }
        }).on('prefinish', ()=>{
            const { req: req } = this;
            // Node < 15 does not call _final in same tick.
            req.push(null);
        });
        this.res = null;
        $bd45125a77f3a74a$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        const { ret: ret, res: res } = this;
        $aJu6Q$assert(!res, 'pipeline cannot be retried');
        if (ret.destroyed) throw new $bd45125a77f3a74a$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume) {
        const { opaque: opaque, handler: handler, context: context } = this;
        if (statusCode < 200) {
            if (this.onInfo) {
                const headers = this.responseHeaders === 'raw' ? $iiSZx.parseRawHeaders(rawHeaders) : $iiSZx.parseHeaders(rawHeaders);
                this.onInfo({
                    statusCode: statusCode,
                    headers: headers
                });
            }
            return;
        }
        this.res = new $bd45125a77f3a74a$var$PipelineResponse(resume);
        let body;
        try {
            this.handler = null;
            const headers = this.responseHeaders === 'raw' ? $iiSZx.parseRawHeaders(rawHeaders) : $iiSZx.parseHeaders(rawHeaders);
            body = this.runInAsyncScope(handler, null, {
                statusCode: statusCode,
                headers: headers,
                opaque: opaque,
                body: this.res,
                context: context
            });
        } catch (err) {
            this.res.on('error', $iiSZx.nop);
            throw err;
        }
        if (!body || typeof body.on !== 'function') throw new $bd45125a77f3a74a$require$InvalidReturnValueError('expected Readable');
        body.on('data', (chunk)=>{
            const { ret: ret, body: body } = this;
            if (!ret.push(chunk) && body.pause) body.pause();
        }).on('error', (err)=>{
            const { ret: ret } = this;
            $iiSZx.destroy(ret, err);
        }).on('end', ()=>{
            const { ret: ret } = this;
            ret.push(null);
        }).on('close', ()=>{
            const { ret: ret } = this;
            if (!ret._readableState.ended) $iiSZx.destroy(ret, new $bd45125a77f3a74a$require$RequestAbortedError());
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
        $iiSZx.destroy(ret, err);
    }
}
function $bd45125a77f3a74a$var$pipeline(opts, handler) {
    try {
        const pipelineHandler = new $bd45125a77f3a74a$var$PipelineHandler(opts, handler);
        this.dispatch({
            ...opts,
            body: pipelineHandler.req
        }, pipelineHandler);
        return pipelineHandler.ret;
    } catch (err) {
        return new $bd45125a77f3a74a$require$PassThrough().destroy(err);
    }
}
module.exports = $bd45125a77f3a74a$var$pipeline;

});


