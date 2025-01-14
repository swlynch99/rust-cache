require("./dispatcher-base.350ec1bb.js");
require("./fixed-queue.ebf61991.js");
require("./symbols.b8a391fa.js");
require("./pool-stats.2ef4a2b3.js");


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

var $jgblb = parcelRequire("jgblb");
var $6eba17472b7c6fb9$exports = {};
$6eba17472b7c6fb9$exports = new URL("fixed-queue.ebf61991.js", "file:" + __filename).toString();



var $dSiuY = parcelRequire("dSiuY");
var $6c7669a286189e4b$require$kConnected = $dSiuY.kConnected;
var $6c7669a286189e4b$require$kSize = $dSiuY.kSize;
var $6c7669a286189e4b$require$kRunning = $dSiuY.kRunning;
var $6c7669a286189e4b$require$kPending = $dSiuY.kPending;
var $6c7669a286189e4b$require$kQueued = $dSiuY.kQueued;
var $6c7669a286189e4b$require$kBusy = $dSiuY.kBusy;
var $6c7669a286189e4b$require$kFree = $dSiuY.kFree;
var $6c7669a286189e4b$require$kUrl = $dSiuY.kUrl;
var $6c7669a286189e4b$require$kClose = $dSiuY.kClose;
var $6c7669a286189e4b$require$kDestroy = $dSiuY.kDestroy;
var $6c7669a286189e4b$require$kDispatch = $dSiuY.kDispatch;
var $aa6c5e540eaf3270$exports = {};
$aa6c5e540eaf3270$exports = new URL("pool-stats.2ef4a2b3.js", "file:" + __filename).toString();


const $6c7669a286189e4b$var$kClients = Symbol('clients');
const $6c7669a286189e4b$var$kNeedDrain = Symbol('needDrain');
const $6c7669a286189e4b$var$kQueue = Symbol('queue');
const $6c7669a286189e4b$var$kClosedResolve = Symbol('closed resolve');
const $6c7669a286189e4b$var$kOnDrain = Symbol('onDrain');
const $6c7669a286189e4b$var$kOnConnect = Symbol('onConnect');
const $6c7669a286189e4b$var$kOnDisconnect = Symbol('onDisconnect');
const $6c7669a286189e4b$var$kOnConnectionError = Symbol('onConnectionError');
const $6c7669a286189e4b$var$kGetDispatcher = Symbol('get dispatcher');
const $6c7669a286189e4b$var$kAddClient = Symbol('add client');
const $6c7669a286189e4b$var$kRemoveClient = Symbol('remove client');
const $6c7669a286189e4b$var$kStats = Symbol('stats');
class $6c7669a286189e4b$var$PoolBase extends $jgblb {
    constructor(){
        super();
        this[$6c7669a286189e4b$var$kQueue] = new $6eba17472b7c6fb9$exports();
        this[$6c7669a286189e4b$var$kClients] = [];
        this[$6c7669a286189e4b$require$kQueued] = 0;
        const pool = this;
        this[$6c7669a286189e4b$var$kOnDrain] = function onDrain(origin, targets) {
            const queue = pool[$6c7669a286189e4b$var$kQueue];
            let needDrain = false;
            while(!needDrain){
                const item = queue.shift();
                if (!item) break;
                pool[$6c7669a286189e4b$require$kQueued]--;
                needDrain = !this.dispatch(item.opts, item.handler);
            }
            this[$6c7669a286189e4b$var$kNeedDrain] = needDrain;
            if (!this[$6c7669a286189e4b$var$kNeedDrain] && pool[$6c7669a286189e4b$var$kNeedDrain]) {
                pool[$6c7669a286189e4b$var$kNeedDrain] = false;
                pool.emit('drain', origin, [
                    pool,
                    ...targets
                ]);
            }
            if (pool[$6c7669a286189e4b$var$kClosedResolve] && queue.isEmpty()) Promise.all(pool[$6c7669a286189e4b$var$kClients].map((c)=>c.close())).then(pool[$6c7669a286189e4b$var$kClosedResolve]);
        };
        this[$6c7669a286189e4b$var$kOnConnect] = (origin, targets)=>{
            pool.emit('connect', origin, [
                pool,
                ...targets
            ]);
        };
        this[$6c7669a286189e4b$var$kOnDisconnect] = (origin, targets, err)=>{
            pool.emit('disconnect', origin, [
                pool,
                ...targets
            ], err);
        };
        this[$6c7669a286189e4b$var$kOnConnectionError] = (origin, targets, err)=>{
            pool.emit('connectionError', origin, [
                pool,
                ...targets
            ], err);
        };
        this[$6c7669a286189e4b$var$kStats] = new $aa6c5e540eaf3270$exports(this);
    }
    get [$6c7669a286189e4b$require$kBusy]() {
        return this[$6c7669a286189e4b$var$kNeedDrain];
    }
    get [$6c7669a286189e4b$require$kConnected]() {
        return this[$6c7669a286189e4b$var$kClients].filter((client)=>client[$6c7669a286189e4b$require$kConnected]).length;
    }
    get [$6c7669a286189e4b$require$kFree]() {
        return this[$6c7669a286189e4b$var$kClients].filter((client)=>client[$6c7669a286189e4b$require$kConnected] && !client[$6c7669a286189e4b$var$kNeedDrain]).length;
    }
    get [$6c7669a286189e4b$require$kPending]() {
        let ret = this[$6c7669a286189e4b$require$kQueued];
        for (const { [$6c7669a286189e4b$require$kPending]: pending } of this[$6c7669a286189e4b$var$kClients])ret += pending;
        return ret;
    }
    get [$6c7669a286189e4b$require$kRunning]() {
        let ret = 0;
        for (const { [$6c7669a286189e4b$require$kRunning]: running } of this[$6c7669a286189e4b$var$kClients])ret += running;
        return ret;
    }
    get [$6c7669a286189e4b$require$kSize]() {
        let ret = this[$6c7669a286189e4b$require$kQueued];
        for (const { [$6c7669a286189e4b$require$kSize]: size } of this[$6c7669a286189e4b$var$kClients])ret += size;
        return ret;
    }
    get stats() {
        return this[$6c7669a286189e4b$var$kStats];
    }
    async [$6c7669a286189e4b$require$kClose]() {
        if (this[$6c7669a286189e4b$var$kQueue].isEmpty()) return Promise.all(this[$6c7669a286189e4b$var$kClients].map((c)=>c.close()));
        else return new Promise((resolve)=>{
            this[$6c7669a286189e4b$var$kClosedResolve] = resolve;
        });
    }
    async [$6c7669a286189e4b$require$kDestroy](err) {
        while(true){
            const item = this[$6c7669a286189e4b$var$kQueue].shift();
            if (!item) break;
            item.handler.onError(err);
        }
        return Promise.all(this[$6c7669a286189e4b$var$kClients].map((c)=>c.destroy(err)));
    }
    [$6c7669a286189e4b$require$kDispatch](opts, handler) {
        const dispatcher = this[$6c7669a286189e4b$var$kGetDispatcher]();
        if (!dispatcher) {
            this[$6c7669a286189e4b$var$kNeedDrain] = true;
            this[$6c7669a286189e4b$var$kQueue].push({
                opts: opts,
                handler: handler
            });
            this[$6c7669a286189e4b$require$kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler)) {
            dispatcher[$6c7669a286189e4b$var$kNeedDrain] = true;
            this[$6c7669a286189e4b$var$kNeedDrain] = !this[$6c7669a286189e4b$var$kGetDispatcher]();
        }
        return !this[$6c7669a286189e4b$var$kNeedDrain];
    }
    [$6c7669a286189e4b$var$kAddClient](client) {
        client.on('drain', this[$6c7669a286189e4b$var$kOnDrain]).on('connect', this[$6c7669a286189e4b$var$kOnConnect]).on('disconnect', this[$6c7669a286189e4b$var$kOnDisconnect]).on('connectionError', this[$6c7669a286189e4b$var$kOnConnectionError]);
        this[$6c7669a286189e4b$var$kClients].push(client);
        if (this[$6c7669a286189e4b$var$kNeedDrain]) process.nextTick(()=>{
            if (this[$6c7669a286189e4b$var$kNeedDrain]) this[$6c7669a286189e4b$var$kOnDrain](client[$6c7669a286189e4b$require$kUrl], [
                this,
                client
            ]);
        });
        return this;
    }
    [$6c7669a286189e4b$var$kRemoveClient](client) {
        client.close(()=>{
            const idx = this[$6c7669a286189e4b$var$kClients].indexOf(client);
            if (idx !== -1) this[$6c7669a286189e4b$var$kClients].splice(idx, 1);
        });
        this[$6c7669a286189e4b$var$kNeedDrain] = this[$6c7669a286189e4b$var$kClients].some((dispatcher)=>!dispatcher[$6c7669a286189e4b$var$kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
    }
}
module.exports = {
    PoolBase: $6c7669a286189e4b$var$PoolBase,
    kClients: $6c7669a286189e4b$var$kClients,
    kNeedDrain: $6c7669a286189e4b$var$kNeedDrain,
    kAddClient: $6c7669a286189e4b$var$kAddClient,
    kRemoveClient: $6c7669a286189e4b$var$kRemoveClient,
    kGetDispatcher: $6c7669a286189e4b$var$kGetDispatcher
};


