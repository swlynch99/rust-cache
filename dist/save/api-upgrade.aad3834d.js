require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
require("./abort-signal.3d10e045.js");
var $0Bq04$async_hooks = require("async_hooks");
var $0Bq04$assert = require("assert");


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
parcelRegister("inH7T", function(module, exports) {
'use strict';

var $hA22O = parcelRequire("hA22O");
var $d61bd3fbe36e0a01$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $d61bd3fbe36e0a01$require$RequestAbortedError = $hA22O.RequestAbortedError;
var $d61bd3fbe36e0a01$require$SocketError = $hA22O.SocketError;

var $d61bd3fbe36e0a01$require$AsyncResource = $0Bq04$async_hooks.AsyncResource;

var $iiSZx = parcelRequire("iiSZx");

var $99j1E = parcelRequire("99j1E");
var $d61bd3fbe36e0a01$require$addSignal = $99j1E.addSignal;
var $d61bd3fbe36e0a01$require$removeSignal = $99j1E.removeSignal;

class $d61bd3fbe36e0a01$var$UpgradeHandler extends $d61bd3fbe36e0a01$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $d61bd3fbe36e0a01$require$InvalidArgumentError('invalid opts');
        if (typeof callback !== 'function') throw new $d61bd3fbe36e0a01$require$InvalidArgumentError('invalid callback');
        const { signal: signal, opaque: opaque, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $d61bd3fbe36e0a01$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        super('UNDICI_UPGRADE');
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        $d61bd3fbe36e0a01$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $d61bd3fbe36e0a01$require$RequestAbortedError();
        this.abort = abort;
        this.context = null;
    }
    onHeaders() {
        throw new $d61bd3fbe36e0a01$require$SocketError('bad upgrade', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback: callback, opaque: opaque, context: context } = this;
        $0Bq04$assert.strictEqual(statusCode, 101);
        $d61bd3fbe36e0a01$require$removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === 'raw' ? $iiSZx.parseRawHeaders(rawHeaders) : $iiSZx.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
            headers: headers,
            socket: socket,
            opaque: opaque,
            context: context
        });
    }
    onError(err) {
        const { callback: callback, opaque: opaque } = this;
        $d61bd3fbe36e0a01$require$removeSignal(this);
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
function $d61bd3fbe36e0a01$var$upgrade(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $d61bd3fbe36e0a01$var$upgrade.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        const upgradeHandler = new $d61bd3fbe36e0a01$var$UpgradeHandler(opts, callback);
        this.dispatch({
            ...opts,
            method: opts.method || 'GET',
            upgrade: opts.protocol || 'Websocket'
        }, upgradeHandler);
    } catch (err) {
        if (typeof callback !== 'function') throw err;
        const opaque = opts && opts.opaque;
        queueMicrotask(()=>callback(err, {
                opaque: opaque
            }));
    }
}
module.exports = $d61bd3fbe36e0a01$var$upgrade;

});


