require("./errors.621f8b7b.js");
require("./symbols.c5dd8fde.js");
require("./dispatcher-base.f09aedf0.js");
require("./pool.5e3fe8ea.js");
require("./client.a6515ab6.js");
require("./util.26715e80.js");
require("./redirectInterceptor.0ad78b0c.js");
require("./dispatcher-weakref.a407dbf7.js");


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
parcelRegister("2DOoZ", function(module, exports) {
module.exports = new URL("dispatcher-weakref.a407dbf7.js", "file:" + __filename).toString();

});

'use strict';

var $4V3Kr = parcelRequire("4V3Kr");
var $cdb5e772ea531856$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;

var $bMqEt = parcelRequire("bMqEt");
var $cdb5e772ea531856$require$kClients = $bMqEt.kClients;
var $cdb5e772ea531856$require$kRunning = $bMqEt.kRunning;
var $cdb5e772ea531856$require$kClose = $bMqEt.kClose;
var $cdb5e772ea531856$require$kDestroy = $bMqEt.kDestroy;
var $cdb5e772ea531856$require$kDispatch = $bMqEt.kDispatch;
var $cdb5e772ea531856$require$kInterceptors = $bMqEt.kInterceptors;

var $gyaJT = parcelRequire("gyaJT");

var $ihqOT = parcelRequire("ihqOT");

var $8FCdh = parcelRequire("8FCdh");

var $1Z05w = parcelRequire("1Z05w");

var $c4cEr = parcelRequire("c4cEr");

const { WeakRef: $cdb5e772ea531856$var$WeakRef, FinalizationRegistry: $cdb5e772ea531856$var$FinalizationRegistry } = (parcelRequire("2DOoZ"))();
const $cdb5e772ea531856$var$kOnConnect = Symbol('onConnect');
const $cdb5e772ea531856$var$kOnDisconnect = Symbol('onDisconnect');
const $cdb5e772ea531856$var$kOnConnectionError = Symbol('onConnectionError');
const $cdb5e772ea531856$var$kMaxRedirections = Symbol('maxRedirections');
const $cdb5e772ea531856$var$kOnDrain = Symbol('onDrain');
const $cdb5e772ea531856$var$kFactory = Symbol('factory');
const $cdb5e772ea531856$var$kFinalizer = Symbol('finalizer');
const $cdb5e772ea531856$var$kOptions = Symbol('options');
function $cdb5e772ea531856$var$defaultFactory(origin, opts) {
    return opts && opts.connections === 1 ? new $8FCdh(origin, opts) : new $ihqOT(origin, opts);
}
class $cdb5e772ea531856$var$Agent extends $gyaJT {
    constructor({ factory: factory = $cdb5e772ea531856$var$defaultFactory, maxRedirections: maxRedirections = 0, connect: connect, ...options } = {}){
        super();
        if (typeof factory !== 'function') throw new $cdb5e772ea531856$require$InvalidArgumentError('factory must be a function.');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $cdb5e772ea531856$require$InvalidArgumentError('connect must be a function or an object');
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) throw new $cdb5e772ea531856$require$InvalidArgumentError('maxRedirections must be a positive number');
        if (connect && typeof connect !== 'function') connect = {
            ...connect
        };
        this[$cdb5e772ea531856$require$kInterceptors] = options.interceptors && options.interceptors.Agent && Array.isArray(options.interceptors.Agent) ? options.interceptors.Agent : [
            $c4cEr({
                maxRedirections: maxRedirections
            })
        ];
        this[$cdb5e772ea531856$var$kOptions] = {
            ...$1Z05w.deepClone(options),
            connect: connect
        };
        this[$cdb5e772ea531856$var$kOptions].interceptors = options.interceptors ? {
            ...options.interceptors
        } : undefined;
        this[$cdb5e772ea531856$var$kMaxRedirections] = maxRedirections;
        this[$cdb5e772ea531856$var$kFactory] = factory;
        this[$cdb5e772ea531856$require$kClients] = new Map();
        this[$cdb5e772ea531856$var$kFinalizer] = new $cdb5e772ea531856$var$FinalizationRegistry(/* istanbul ignore next: gc is undeterministic */ (key)=>{
            const ref = this[$cdb5e772ea531856$require$kClients].get(key);
            if (ref !== undefined && ref.deref() === undefined) this[$cdb5e772ea531856$require$kClients].delete(key);
        });
        const agent = this;
        this[$cdb5e772ea531856$var$kOnDrain] = (origin, targets)=>{
            agent.emit('drain', origin, [
                agent,
                ...targets
            ]);
        };
        this[$cdb5e772ea531856$var$kOnConnect] = (origin, targets)=>{
            agent.emit('connect', origin, [
                agent,
                ...targets
            ]);
        };
        this[$cdb5e772ea531856$var$kOnDisconnect] = (origin, targets, err)=>{
            agent.emit('disconnect', origin, [
                agent,
                ...targets
            ], err);
        };
        this[$cdb5e772ea531856$var$kOnConnectionError] = (origin, targets, err)=>{
            agent.emit('connectionError', origin, [
                agent,
                ...targets
            ], err);
        };
    }
    get [$cdb5e772ea531856$require$kRunning]() {
        let ret = 0;
        for (const ref of this[$cdb5e772ea531856$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore next: gc is undeterministic */ if (client) ret += client[$cdb5e772ea531856$require$kRunning];
        }
        return ret;
    }
    [$cdb5e772ea531856$require$kDispatch](opts, handler) {
        let key;
        if (opts.origin && (typeof opts.origin === 'string' || opts.origin instanceof URL)) key = String(opts.origin);
        else throw new $cdb5e772ea531856$require$InvalidArgumentError('opts.origin must be a non-empty string or URL.');
        const ref = this[$cdb5e772ea531856$require$kClients].get(key);
        let dispatcher = ref ? ref.deref() : null;
        if (!dispatcher) {
            dispatcher = this[$cdb5e772ea531856$var$kFactory](opts.origin, this[$cdb5e772ea531856$var$kOptions]).on('drain', this[$cdb5e772ea531856$var$kOnDrain]).on('connect', this[$cdb5e772ea531856$var$kOnConnect]).on('disconnect', this[$cdb5e772ea531856$var$kOnDisconnect]).on('connectionError', this[$cdb5e772ea531856$var$kOnConnectionError]);
            this[$cdb5e772ea531856$require$kClients].set(key, new $cdb5e772ea531856$var$WeakRef(dispatcher));
            this[$cdb5e772ea531856$var$kFinalizer].register(dispatcher, key);
        }
        return dispatcher.dispatch(opts, handler);
    }
    async [$cdb5e772ea531856$require$kClose]() {
        const closePromises = [];
        for (const ref of this[$cdb5e772ea531856$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore else: gc is undeterministic */ if (client) closePromises.push(client.close());
        }
        await Promise.all(closePromises);
    }
    async [$cdb5e772ea531856$require$kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[$cdb5e772ea531856$require$kClients].values()){
            const client = ref.deref();
            /* istanbul ignore else: gc is undeterministic */ if (client) destroyPromises.push(client.destroy(err));
        }
        await Promise.all(destroyPromises);
    }
}
module.exports = $cdb5e772ea531856$var$Agent;


//# sourceMappingURL=agent.886e033b.js.map
