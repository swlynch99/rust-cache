require("./dispatcher.1061760d.js");
require("./errors.621f8b7b.js");
require("./symbols.c5dd8fde.js");


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
'use strict';
var $071825ddf5712044$exports = {};
$071825ddf5712044$exports = new URL("dispatcher.1061760d.js", "file:" + __filename).toString();



var $4V3Kr = parcelRequire("4V3Kr");
var $c0c826ed07b8f752$require$ClientDestroyedError = $4V3Kr.ClientDestroyedError;
var $c0c826ed07b8f752$require$ClientClosedError = $4V3Kr.ClientClosedError;
var $c0c826ed07b8f752$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;

var $bMqEt = parcelRequire("bMqEt");
var $c0c826ed07b8f752$require$kDestroy = $bMqEt.kDestroy;
var $c0c826ed07b8f752$require$kClose = $bMqEt.kClose;
var $c0c826ed07b8f752$require$kDispatch = $bMqEt.kDispatch;
var $c0c826ed07b8f752$require$kInterceptors = $bMqEt.kInterceptors;
const $c0c826ed07b8f752$var$kDestroyed = Symbol('destroyed');
const $c0c826ed07b8f752$var$kClosed = Symbol('closed');
const $c0c826ed07b8f752$var$kOnDestroyed = Symbol('onDestroyed');
const $c0c826ed07b8f752$var$kOnClosed = Symbol('onClosed');
const $c0c826ed07b8f752$var$kInterceptedDispatch = Symbol('Intercepted Dispatch');
class $c0c826ed07b8f752$var$DispatcherBase extends $071825ddf5712044$exports {
    constructor(){
        super();
        this[$c0c826ed07b8f752$var$kDestroyed] = false;
        this[$c0c826ed07b8f752$var$kOnDestroyed] = null;
        this[$c0c826ed07b8f752$var$kClosed] = false;
        this[$c0c826ed07b8f752$var$kOnClosed] = [];
    }
    get destroyed() {
        return this[$c0c826ed07b8f752$var$kDestroyed];
    }
    get closed() {
        return this[$c0c826ed07b8f752$var$kClosed];
    }
    get interceptors() {
        return this[$c0c826ed07b8f752$require$kInterceptors];
    }
    set interceptors(newInterceptors) {
        if (newInterceptors) for(let i = newInterceptors.length - 1; i >= 0; i--){
            const interceptor = this[$c0c826ed07b8f752$require$kInterceptors][i];
            if (typeof interceptor !== 'function') throw new $c0c826ed07b8f752$require$InvalidArgumentError('interceptor must be an function');
        }
        this[$c0c826ed07b8f752$require$kInterceptors] = newInterceptors;
    }
    close(callback) {
        if (callback === undefined) return new Promise((resolve, reject)=>{
            this.close((err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
        if (typeof callback !== 'function') throw new $c0c826ed07b8f752$require$InvalidArgumentError('invalid callback');
        if (this[$c0c826ed07b8f752$var$kDestroyed]) {
            queueMicrotask(()=>callback(new $c0c826ed07b8f752$require$ClientDestroyedError(), null));
            return;
        }
        if (this[$c0c826ed07b8f752$var$kClosed]) {
            if (this[$c0c826ed07b8f752$var$kOnClosed]) this[$c0c826ed07b8f752$var$kOnClosed].push(callback);
            else queueMicrotask(()=>callback(null, null));
            return;
        }
        this[$c0c826ed07b8f752$var$kClosed] = true;
        this[$c0c826ed07b8f752$var$kOnClosed].push(callback);
        const onClosed = ()=>{
            const callbacks = this[$c0c826ed07b8f752$var$kOnClosed];
            this[$c0c826ed07b8f752$var$kOnClosed] = null;
            for(let i = 0; i < callbacks.length; i++)callbacks[i](null, null);
        };
        // Should not error.
        this[$c0c826ed07b8f752$require$kClose]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(onClosed);
        });
    }
    destroy(err, callback) {
        if (typeof err === 'function') {
            callback = err;
            err = null;
        }
        if (callback === undefined) return new Promise((resolve, reject)=>{
            this.destroy(err, (err, data)=>{
                return err ? /* istanbul ignore next: should never error */ reject(err) : resolve(data);
            });
        });
        if (typeof callback !== 'function') throw new $c0c826ed07b8f752$require$InvalidArgumentError('invalid callback');
        if (this[$c0c826ed07b8f752$var$kDestroyed]) {
            if (this[$c0c826ed07b8f752$var$kOnDestroyed]) this[$c0c826ed07b8f752$var$kOnDestroyed].push(callback);
            else queueMicrotask(()=>callback(null, null));
            return;
        }
        if (!err) err = new $c0c826ed07b8f752$require$ClientDestroyedError();
        this[$c0c826ed07b8f752$var$kDestroyed] = true;
        this[$c0c826ed07b8f752$var$kOnDestroyed] = this[$c0c826ed07b8f752$var$kOnDestroyed] || [];
        this[$c0c826ed07b8f752$var$kOnDestroyed].push(callback);
        const onDestroyed = ()=>{
            const callbacks = this[$c0c826ed07b8f752$var$kOnDestroyed];
            this[$c0c826ed07b8f752$var$kOnDestroyed] = null;
            for(let i = 0; i < callbacks.length; i++)callbacks[i](null, null);
        };
        // Should not error.
        this[$c0c826ed07b8f752$require$kDestroy](err).then(()=>{
            queueMicrotask(onDestroyed);
        });
    }
    [$c0c826ed07b8f752$var$kInterceptedDispatch](opts, handler) {
        if (!this[$c0c826ed07b8f752$require$kInterceptors] || this[$c0c826ed07b8f752$require$kInterceptors].length === 0) {
            this[$c0c826ed07b8f752$var$kInterceptedDispatch] = this[$c0c826ed07b8f752$require$kDispatch];
            return this[$c0c826ed07b8f752$require$kDispatch](opts, handler);
        }
        let dispatch = this[$c0c826ed07b8f752$require$kDispatch].bind(this);
        for(let i = this[$c0c826ed07b8f752$require$kInterceptors].length - 1; i >= 0; i--)dispatch = this[$c0c826ed07b8f752$require$kInterceptors][i](dispatch);
        this[$c0c826ed07b8f752$var$kInterceptedDispatch] = dispatch;
        return dispatch(opts, handler);
    }
    dispatch(opts, handler) {
        if (!handler || typeof handler !== 'object') throw new $c0c826ed07b8f752$require$InvalidArgumentError('handler must be an object');
        try {
            if (!opts || typeof opts !== 'object') throw new $c0c826ed07b8f752$require$InvalidArgumentError('opts must be an object.');
            if (this[$c0c826ed07b8f752$var$kDestroyed] || this[$c0c826ed07b8f752$var$kOnDestroyed]) throw new $c0c826ed07b8f752$require$ClientDestroyedError();
            if (this[$c0c826ed07b8f752$var$kClosed]) throw new $c0c826ed07b8f752$require$ClientClosedError();
            return this[$c0c826ed07b8f752$var$kInterceptedDispatch](opts, handler);
        } catch (err) {
            if (typeof handler.onError !== 'function') throw new $c0c826ed07b8f752$require$InvalidArgumentError('invalid onError method');
            handler.onError(err);
            return false;
        }
    }
}
module.exports = $c0c826ed07b8f752$var$DispatcherBase;


//# sourceMappingURL=dispatcher-base.f09aedf0.js.map
