require("./dispatcher.c6f1a8de.js");
require("./errors.12b0f892.js");
require("./symbols.b8a391fa.js");


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
var $f95a6261af378803$exports = {};
$f95a6261af378803$exports = new URL("dispatcher.c6f1a8de.js", "file:" + __filename).toString();



var $hA22O = parcelRequire("hA22O");
var $e0584ef046cb001e$require$ClientDestroyedError = $hA22O.ClientDestroyedError;
var $e0584ef046cb001e$require$ClientClosedError = $hA22O.ClientClosedError;
var $e0584ef046cb001e$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $dSiuY = parcelRequire("dSiuY");
var $e0584ef046cb001e$require$kDestroy = $dSiuY.kDestroy;
var $e0584ef046cb001e$require$kClose = $dSiuY.kClose;
var $e0584ef046cb001e$require$kDispatch = $dSiuY.kDispatch;
var $e0584ef046cb001e$require$kInterceptors = $dSiuY.kInterceptors;
const $e0584ef046cb001e$var$kDestroyed = Symbol('destroyed');
const $e0584ef046cb001e$var$kClosed = Symbol('closed');
const $e0584ef046cb001e$var$kOnDestroyed = Symbol('onDestroyed');
const $e0584ef046cb001e$var$kOnClosed = Symbol('onClosed');
const $e0584ef046cb001e$var$kInterceptedDispatch = Symbol('Intercepted Dispatch');
class $e0584ef046cb001e$var$DispatcherBase extends $f95a6261af378803$exports {
    constructor(){
        super();
        this[$e0584ef046cb001e$var$kDestroyed] = false;
        this[$e0584ef046cb001e$var$kOnDestroyed] = null;
        this[$e0584ef046cb001e$var$kClosed] = false;
        this[$e0584ef046cb001e$var$kOnClosed] = [];
    }
    get destroyed() {
        return this[$e0584ef046cb001e$var$kDestroyed];
    }
    get closed() {
        return this[$e0584ef046cb001e$var$kClosed];
    }
    get interceptors() {
        return this[$e0584ef046cb001e$require$kInterceptors];
    }
    set interceptors(newInterceptors) {
        if (newInterceptors) for(let i = newInterceptors.length - 1; i >= 0; i--){
            const interceptor = this[$e0584ef046cb001e$require$kInterceptors][i];
            if (typeof interceptor !== 'function') throw new $e0584ef046cb001e$require$InvalidArgumentError('interceptor must be an function');
        }
        this[$e0584ef046cb001e$require$kInterceptors] = newInterceptors;
    }
    close(callback) {
        if (callback === undefined) return new Promise((resolve, reject)=>{
            this.close((err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
        if (typeof callback !== 'function') throw new $e0584ef046cb001e$require$InvalidArgumentError('invalid callback');
        if (this[$e0584ef046cb001e$var$kDestroyed]) {
            queueMicrotask(()=>callback(new $e0584ef046cb001e$require$ClientDestroyedError(), null));
            return;
        }
        if (this[$e0584ef046cb001e$var$kClosed]) {
            if (this[$e0584ef046cb001e$var$kOnClosed]) this[$e0584ef046cb001e$var$kOnClosed].push(callback);
            else queueMicrotask(()=>callback(null, null));
            return;
        }
        this[$e0584ef046cb001e$var$kClosed] = true;
        this[$e0584ef046cb001e$var$kOnClosed].push(callback);
        const onClosed = ()=>{
            const callbacks = this[$e0584ef046cb001e$var$kOnClosed];
            this[$e0584ef046cb001e$var$kOnClosed] = null;
            for(let i = 0; i < callbacks.length; i++)callbacks[i](null, null);
        };
        // Should not error.
        this[$e0584ef046cb001e$require$kClose]().then(()=>this.destroy()).then(()=>{
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
        if (typeof callback !== 'function') throw new $e0584ef046cb001e$require$InvalidArgumentError('invalid callback');
        if (this[$e0584ef046cb001e$var$kDestroyed]) {
            if (this[$e0584ef046cb001e$var$kOnDestroyed]) this[$e0584ef046cb001e$var$kOnDestroyed].push(callback);
            else queueMicrotask(()=>callback(null, null));
            return;
        }
        if (!err) err = new $e0584ef046cb001e$require$ClientDestroyedError();
        this[$e0584ef046cb001e$var$kDestroyed] = true;
        this[$e0584ef046cb001e$var$kOnDestroyed] = this[$e0584ef046cb001e$var$kOnDestroyed] || [];
        this[$e0584ef046cb001e$var$kOnDestroyed].push(callback);
        const onDestroyed = ()=>{
            const callbacks = this[$e0584ef046cb001e$var$kOnDestroyed];
            this[$e0584ef046cb001e$var$kOnDestroyed] = null;
            for(let i = 0; i < callbacks.length; i++)callbacks[i](null, null);
        };
        // Should not error.
        this[$e0584ef046cb001e$require$kDestroy](err).then(()=>{
            queueMicrotask(onDestroyed);
        });
    }
    [$e0584ef046cb001e$var$kInterceptedDispatch](opts, handler) {
        if (!this[$e0584ef046cb001e$require$kInterceptors] || this[$e0584ef046cb001e$require$kInterceptors].length === 0) {
            this[$e0584ef046cb001e$var$kInterceptedDispatch] = this[$e0584ef046cb001e$require$kDispatch];
            return this[$e0584ef046cb001e$require$kDispatch](opts, handler);
        }
        let dispatch = this[$e0584ef046cb001e$require$kDispatch].bind(this);
        for(let i = this[$e0584ef046cb001e$require$kInterceptors].length - 1; i >= 0; i--)dispatch = this[$e0584ef046cb001e$require$kInterceptors][i](dispatch);
        this[$e0584ef046cb001e$var$kInterceptedDispatch] = dispatch;
        return dispatch(opts, handler);
    }
    dispatch(opts, handler) {
        if (!handler || typeof handler !== 'object') throw new $e0584ef046cb001e$require$InvalidArgumentError('handler must be an object');
        try {
            if (!opts || typeof opts !== 'object') throw new $e0584ef046cb001e$require$InvalidArgumentError('opts must be an object.');
            if (this[$e0584ef046cb001e$var$kDestroyed] || this[$e0584ef046cb001e$var$kOnDestroyed]) throw new $e0584ef046cb001e$require$ClientDestroyedError();
            if (this[$e0584ef046cb001e$var$kClosed]) throw new $e0584ef046cb001e$require$ClientClosedError();
            return this[$e0584ef046cb001e$var$kInterceptedDispatch](opts, handler);
        } catch (err) {
            if (typeof handler.onError !== 'function') throw new $e0584ef046cb001e$require$InvalidArgumentError('invalid onError method');
            handler.onError(err);
            return false;
        }
    }
}
module.exports = $e0584ef046cb001e$var$DispatcherBase;


