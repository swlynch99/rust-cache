require("./errors.12b0f892.js");
require("./symbols.b8a391fa.js");
require("./dispatcher-base.350ec1bb.js");
require("./pool.0c09492a.js");
require("./client.060f523e.js");
require("./util.c7a5ec55.js");
require("./redirectInterceptor.98adf1a5.js");
require("./dispatcher-weakref.e1d10064.js");


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
parcelRegister("32t1n", function(module, exports) {
module.exports = new URL("dispatcher-weakref.e1d10064.js", "file:" + __filename).toString();

});

'use strict';

var $hA22O = parcelRequire("hA22O");
var $c11641e86a005a2e$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $dSiuY = parcelRequire("dSiuY");
var $c11641e86a005a2e$require$kClients = $dSiuY.kClients;
var $c11641e86a005a2e$require$kRunning = $dSiuY.kRunning;
var $c11641e86a005a2e$require$kClose = $dSiuY.kClose;
var $c11641e86a005a2e$require$kDestroy = $dSiuY.kDestroy;
var $c11641e86a005a2e$require$kDispatch = $dSiuY.kDispatch;
var $c11641e86a005a2e$require$kInterceptors = $dSiuY.kInterceptors;

var $jgblb = parcelRequire("jgblb");

var $hZ9i0 = parcelRequire("hZ9i0");

var $gV7Qd = parcelRequire("gV7Qd");

var $iiSZx = parcelRequire("iiSZx");

var $gOOBQ = parcelRequire("gOOBQ");

const { WeakRef: $c11641e86a005a2e$var$WeakRef, FinalizationRegistry: $c11641e86a005a2e$var$FinalizationRegistry } = (parcelRequire("32t1n"))();
const $c11641e86a005a2e$var$kOnConnect = Symbol('onConnect');
const $c11641e86a005a2e$var$kOnDisconnect = Symbol('onDisconnect');
const $c11641e86a005a2e$var$kOnConnectionError = Symbol('onConnectionError');
const $c11641e86a005a2e$var$kMaxRedirections = Symbol('maxRedirections');
const $c11641e86a005a2e$var$kOnDrain = Symbol('onDrain');
const $c11641e86a005a2e$var$kFactory = Symbol('factory');
const $c11641e86a005a2e$var$kFinalizer = Symbol('finalizer');
const $c11641e86a005a2e$var$kOptions = Symbol('options');
function $c11641e86a005a2e$var$defaultFactory(origin, opts) {
    return opts && opts.connections === 1 ? new $gV7Qd(origin, opts) : new $hZ9i0(origin, opts);
}
class $c11641e86a005a2e$var$Agent extends $jgblb {
    constructor({ factory: factory = $c11641e86a005a2e$var$defaultFactory, maxRedirections: maxRedirections = 0, connect: connect, ...options } = {}){
        super();
        if (typeof factory !== 'function') throw new $c11641e86a005a2e$require$InvalidArgumentError('factory must be a function.');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $c11641e86a005a2e$require$InvalidArgumentError('connect must be a function or an object');
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) throw new $c11641e86a005a2e$require$InvalidArgumentError('maxRedirections must be a positive number');
        if (connect && typeof connect !== 'function') connect = {
            ...connect
        };
        this[$c11641e86a005a2e$require$kInterceptors] = options.interceptors && options.interceptors.Agent && Array.isArray(options.interceptors.Agent) ? options.interceptors.Agent : [
            $gOOBQ({
                maxRedirections: maxRedirections
            })
        ];
        this[$c11641e86a005a2e$var$kOptions] = {
            ...$iiSZx.deepClone(options),
            connect: connect
        };
        this[$c11641e86a005a2e$var$kOptions].interceptors = options.interceptors ? {
            ...options.interceptors
        } : undefined;
        this[$c11641e86a005a2e$var$kMaxRedirections] = maxRedirections;
        this[$c11641e86a005a2e$var$kFactory] = factory;
        this[$c11641e86a005a2e$require$kClients] = new Map();
        this[$c11641e86a005a2e$var$kFinalizer] = new $c11641e86a005a2e$var$FinalizationRegistry(/* istanbul ignore next: gc is undeterministic */ (key)=>{
            const ref = this[$c11641e86a005a2e$require$kClients].get(key);
            if (ref !== undefined && ref.deref() === undefined) this[$c11641e86a005a2e$require$kClients].delete(key);
        });
        const agent = this;
        this[$c11641e86a005a2e$var$kOnDrain] = (origin, targets)=>{
            agent.emit('drain', origin, [
                agent,
                ...targets
            ]);
        };
        this[$c11641e86a005a2e$var$kOnConnect] = (origin, targets)=>{
            agent.emit('connect', origin, [
                agent,
                ...targets
            ]);
        };
        this[$c11641e86a005a2e$var$kOnDisconnect] = (origin, targets, err)=>{
            agent.emit('disconnect', origin, [
                agent,
                ...targets
            ], err);
        };
        this[$c11641e86a005a2e$var$kOnConnectionError] = (origin, targets, err)=>{
            agent.emit('connectionError', origin, [
                agent,
                ...targets
            ], err);
        };
    }
    get [$c11641e86a005a2e$require$kRunning]() {
        let ret = 0;
        for (const ref of this[$c11641e86a005a2e$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore next: gc is undeterministic */ if (client) ret += client[$c11641e86a005a2e$require$kRunning];
        }
        return ret;
    }
    [$c11641e86a005a2e$require$kDispatch](opts, handler) {
        let key;
        if (opts.origin && (typeof opts.origin === 'string' || opts.origin instanceof URL)) key = String(opts.origin);
        else throw new $c11641e86a005a2e$require$InvalidArgumentError('opts.origin must be a non-empty string or URL.');
        const ref = this[$c11641e86a005a2e$require$kClients].get(key);
        let dispatcher = ref ? ref.deref() : null;
        if (!dispatcher) {
            dispatcher = this[$c11641e86a005a2e$var$kFactory](opts.origin, this[$c11641e86a005a2e$var$kOptions]).on('drain', this[$c11641e86a005a2e$var$kOnDrain]).on('connect', this[$c11641e86a005a2e$var$kOnConnect]).on('disconnect', this[$c11641e86a005a2e$var$kOnDisconnect]).on('connectionError', this[$c11641e86a005a2e$var$kOnConnectionError]);
            this[$c11641e86a005a2e$require$kClients].set(key, new $c11641e86a005a2e$var$WeakRef(dispatcher));
            this[$c11641e86a005a2e$var$kFinalizer].register(dispatcher, key);
        }
        return dispatcher.dispatch(opts, handler);
    }
    async [$c11641e86a005a2e$require$kClose]() {
        const closePromises = [];
        for (const ref of this[$c11641e86a005a2e$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore else: gc is undeterministic */ if (client) closePromises.push(client.close());
        }
        await Promise.all(closePromises);
    }
    async [$c11641e86a005a2e$require$kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[$c11641e86a005a2e$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore else: gc is undeterministic */ if (client) destroyPromises.push(client.destroy(err));
        }
        await Promise.all(destroyPromises);
    }
}
module.exports = $c11641e86a005a2e$var$Agent;


