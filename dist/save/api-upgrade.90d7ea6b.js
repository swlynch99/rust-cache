require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./abort-signal.fddc71a6.js");
var $kFGpq$async_hooks = require("async_hooks");
var $kFGpq$assert = require("assert");


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
parcelRegister("2T2Jh", function(module, exports) {
'use strict';

var $4V3Kr = parcelRequire("4V3Kr");
var $21a2d5d5a7290dc7$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $21a2d5d5a7290dc7$require$RequestAbortedError = $4V3Kr.RequestAbortedError;
var $21a2d5d5a7290dc7$require$SocketError = $4V3Kr.SocketError;

var $21a2d5d5a7290dc7$require$AsyncResource = $kFGpq$async_hooks.AsyncResource;

var $1Z05w = parcelRequire("1Z05w");

var $bPQfQ = parcelRequire("bPQfQ");
var $21a2d5d5a7290dc7$require$addSignal = $bPQfQ.addSignal;
var $21a2d5d5a7290dc7$require$removeSignal = $bPQfQ.removeSignal;

class $21a2d5d5a7290dc7$var$UpgradeHandler extends $21a2d5d5a7290dc7$require$AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') throw new $21a2d5d5a7290dc7$require$InvalidArgumentError('invalid opts');
        if (typeof callback !== 'function') throw new $21a2d5d5a7290dc7$require$InvalidArgumentError('invalid callback');
        const { signal: signal, opaque: opaque, responseHeaders: responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') throw new $21a2d5d5a7290dc7$require$InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        super('UNDICI_UPGRADE');
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        $21a2d5d5a7290dc7$require$addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (!this.callback) throw new $21a2d5d5a7290dc7$require$RequestAbortedError();
        this.abort = abort;
        this.context = null;
    }
    onHeaders() {
        throw new $21a2d5d5a7290dc7$require$SocketError('bad upgrade', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback: callback, opaque: opaque, context: context } = this;
        $kFGpq$assert.strictEqual(statusCode, 101);
        $21a2d5d5a7290dc7$require$removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === 'raw' ? $1Z05w.parseRawHeaders(rawHeaders) : $1Z05w.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
            headers: headers,
            socket: socket,
            opaque: opaque,
            context: context
        });
    }
    onError(err) {
        const { callback: callback, opaque: opaque } = this;
        $21a2d5d5a7290dc7$require$removeSignal(this);
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
function $21a2d5d5a7290dc7$var$upgrade(opts, callback) {
    if (callback === undefined) return new Promise((resolve, reject)=>{
        $21a2d5d5a7290dc7$var$upgrade.call(this, opts, (err, data)=>{
            return err ? reject(err) : resolve(data);
        });
    });
    try {
        const upgradeHandler = new $21a2d5d5a7290dc7$var$UpgradeHandler(opts, callback);
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
module.exports = $21a2d5d5a7290dc7$var$upgrade;

});


//# sourceMappingURL=api-upgrade.90d7ea6b.js.map
