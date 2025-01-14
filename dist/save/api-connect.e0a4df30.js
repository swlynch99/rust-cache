require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./abort-signal.fddc71a6.js");
var $aewkP$async_hooks = require("async_hooks");


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
parcelRegister("ewHDq", function(module, exports) {
'use strict';

var $a935e6d90aa9348e$require$AsyncResource = $aewkP$async_hooks.AsyncResource;

var $4V3Kr = parcelRequire("4V3Kr");
var $a935e6d90aa9348e$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $a935e6d90aa9348e$require$RequestAbortedError = $4V3Kr.RequestAbortedError;
var $a935e6d90aa9348e$require$SocketError = $4V3Kr.SocketError;

var $1Z05w = parcelRequire("1Z05w");

var $bPQfQ = parcelRequire("bPQfQ");
var $a935e6d90aa9348e$require$addSignal = $bPQfQ.addSignal;
var $a935e6d90aa9348e$require$removeSignal = $bPQfQ.removeSignal;
class $a935e6d90aa9348e$var$ConnectHandler extends $a935e6d90aa9348e$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $a935e6d90aa9348e$require$InvalidArgumentError('invalid opts');
        if (typeof callback !== 'function') throw new $a935e6d90aa9348e$require$InvalidArgumentError('invalid callback');
        const { signal: signal, opaque: opaque, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $a935e6d90aa9348e$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        super('UNDICI_CONNECT');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        $a935e6d90aa9348e$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $a935e6d90aa9348e$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders() {
        throw new $a935e6d90aa9348e$require$SocketError('bad connect', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback: callback, opaque: opaque, context: context } = this;
        $a935e6d90aa9348e$require$removeSignal(this);
        this.callback = null;
        let headers = rawHeaders;
        // Indicates is an HTTP2Session
        if (headers != null) headers = this.responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
            statusCode: statusCode,
            headers: headers,
            socket: socket,
            opaque: opaque,
            context: context
        });
    }
    onError(err) {
        const { callback: callback, opaque: opaque } = this;
        $a935e6d90aa9348e$require$removeSignal(this);
        if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque: opaque
                });
            });
        }
    }
}
function $a935e6d90aa9348e$var$connect(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $a935e6d90aa9348e$var$connect.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        const connectHandler = new $a935e6d90aa9348e$var$ConnectHandler(opts, callback);
        this.dispatch({
            ...opts,
            method: 'CONNECT'
        }, connectHandler);
    } catch (err) {
        if (typeof callback !== 'function') throw err;
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque: opaque
            }));
    }
}
module.exports = $a935e6d90aa9348e$var$connect;

});


//# sourceMappingURL=api-connect.e0a4df30.js.map
