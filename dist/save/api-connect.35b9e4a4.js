require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
require("./abort-signal.3d10e045.js");
var $8drTM$async_hooks = require("async_hooks");


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
parcelRegister("hF7ta", function(module, exports) {
'use strict';

var $cdbc0f4da2055540$require$AsyncResource = $8drTM$async_hooks.AsyncResource;

var $hA22O = parcelRequire("hA22O");
var $cdbc0f4da2055540$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $cdbc0f4da2055540$require$RequestAbortedError = $hA22O.RequestAbortedError;
var $cdbc0f4da2055540$require$SocketError = $hA22O.SocketError;

var $iiSZx = parcelRequire("iiSZx");

var $99j1E = parcelRequire("99j1E");
var $cdbc0f4da2055540$require$addSignal = $99j1E.addSignal;
var $cdbc0f4da2055540$require$removeSignal = $99j1E.removeSignal;
class $cdbc0f4da2055540$var$ConnectHandler extends $cdbc0f4da2055540$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $cdbc0f4da2055540$require$InvalidArgumentError('invalid opts');
        if (typeof callback !== 'function') throw new $cdbc0f4da2055540$require$InvalidArgumentError('invalid callback');
        const { signal: signal, opaque: opaque, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $cdbc0f4da2055540$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        super('UNDICI_CONNECT');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        $cdbc0f4da2055540$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $cdbc0f4da2055540$require$RequestAbortedError();
        this.abort = abort;
        this.context = context;
    }
    onHeaders() {
        throw new $cdbc0f4da2055540$require$SocketError('bad connect', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback: callback, opaque: opaque, context: context } = this;
        $cdbc0f4da2055540$require$removeSignal(this);
        this.callback = null;
        let headers = rawHeaders;
        // Indicates is an HTTP2Session
        if (headers != null) headers = this.responseHeaders === 'raw' ? $iiSZx.parseRawHeaders(rawHeaders) : $iiSZx.parseHeaders(rawHeaders);
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
        $cdbc0f4da2055540$require$removeSignal(this);
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
function $cdbc0f4da2055540$var$connect(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $cdbc0f4da2055540$var$connect.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        const connectHandler = new $cdbc0f4da2055540$var$ConnectHandler(opts, callback);
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
module.exports = $cdbc0f4da2055540$var$connect;

});


