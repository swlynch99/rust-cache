require("./dispatcher-base.f09aedf0.js");
require("./fixed-queue.d5e6fd6b.js");
require("./symbols.c5dd8fde.js");
require("./pool-stats.c342ad36.js");


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

var $gyaJT = parcelRequire("gyaJT");
var $c44d1c960704b586$exports = {};
$c44d1c960704b586$exports = new URL("fixed-queue.d5e6fd6b.js", "file:" + __filename).toString();



var $bMqEt = parcelRequire("bMqEt");
var $15f09b6a952c3ed3$require$kConnected = $bMqEt.kConnected;
var $15f09b6a952c3ed3$require$kSize = $bMqEt.kSize;
var $15f09b6a952c3ed3$require$kRunning = $bMqEt.kRunning;
var $15f09b6a952c3ed3$require$kPending = $bMqEt.kPending;
var $15f09b6a952c3ed3$require$kQueued = $bMqEt.kQueued;
var $15f09b6a952c3ed3$require$kBusy = $bMqEt.kBusy;
var $15f09b6a952c3ed3$require$kFree = $bMqEt.kFree;
var $15f09b6a952c3ed3$require$kUrl = $bMqEt.kUrl;
var $15f09b6a952c3ed3$require$kClose = $bMqEt.kClose;
var $15f09b6a952c3ed3$require$kDestroy = $bMqEt.kDestroy;
var $15f09b6a952c3ed3$require$kDispatch = $bMqEt.kDispatch;
var $aade3106827af426$exports = {};
$aade3106827af426$exports = new URL("pool-stats.c342ad36.js", "file:" + __filename).toString();


const $15f09b6a952c3ed3$var$kClients = Symbol('clients');
const $15f09b6a952c3ed3$var$kNeedDrain = Symbol('needDrain');
const $15f09b6a952c3ed3$var$kQueue = Symbol('queue');
const $15f09b6a952c3ed3$var$kClosedResolve = Symbol('closed resolve');
const $15f09b6a952c3ed3$var$kOnDrain = Symbol('onDrain');
const $15f09b6a952c3ed3$var$kOnConnect = Symbol('onConnect');
const $15f09b6a952c3ed3$var$kOnDisconnect = Symbol('onDisconnect');
const $15f09b6a952c3ed3$var$kOnConnectionError = Symbol('onConnectionError');
const $15f09b6a952c3ed3$var$kGetDispatcher = Symbol('get dispatcher');
const $15f09b6a952c3ed3$var$kAddClient = Symbol('add client');
const $15f09b6a952c3ed3$var$kRemoveClient = Symbol('remove client');
const $15f09b6a952c3ed3$var$kStats = Symbol('stats');
class $15f09b6a952c3ed3$var$PoolBase extends $gyaJT {
    constructor(){
        super();
        this[$15f09b6a952c3ed3$var$kQueue] = new $c44d1c960704b586$exports();
        this[$15f09b6a952c3ed3$var$kClients] = [];
        this[$15f09b6a952c3ed3$require$kQueued] = 0;
        const pool = this;
        this[$15f09b6a952c3ed3$var$kOnDrain] = function onDrain(origin, targets) {
            const queue = pool[$15f09b6a952c3ed3$var$kQueue];
            let needDrain = false;
            while(!needDrain){
                const item = queue.shift();
                if (!item) break;
                pool[$15f09b6a952c3ed3$require$kQueued]--;
                needDrain = !this.dispatch(item.opts, item.handler);
            }
            this[$15f09b6a952c3ed3$var$kNeedDrain] = needDrain;
            if (!this[$15f09b6a952c3ed3$var$kNeedDrain] && pool[$15f09b6a952c3ed3$var$kNeedDrain]) {
                pool[$15f09b6a952c3ed3$var$kNeedDrain] = false;
                pool.emit('drain', origin, [
                    pool,
                    ...targets
                ]);
            }
            if (pool[$15f09b6a952c3ed3$var$kClosedResolve] && queue.isEmpty()) Promise.all(pool[$15f09b6a952c3ed3$var$kClients].map((c)=>c.close())).then(pool[$15f09b6a952c3ed3$var$kClosedResolve]);
        };
        this[$15f09b6a952c3ed3$var$kOnConnect] = (origin, targets)=>{
            pool.emit('connect', origin, [
                pool,
                ...targets
            ]);
        };
        this[$15f09b6a952c3ed3$var$kOnDisconnect] = (origin, targets, err)=>{
            pool.emit('disconnect', origin, [
                pool,
                ...targets
            ], err);
        };
        this[$15f09b6a952c3ed3$var$kOnConnectionError] = (origin, targets, err)=>{
            pool.emit('connectionError', origin, [
                pool,
                ...targets
            ], err);
        };
        this[$15f09b6a952c3ed3$var$kStats] = new $aade3106827af426$exports(this);
    }
    get [$15f09b6a952c3ed3$require$kBusy]() {
        return this[$15f09b6a952c3ed3$var$kNeedDrain];
    }
    get [$15f09b6a952c3ed3$require$kConnected]() {
        return this[$15f09b6a952c3ed3$var$kClients].filter((client)=>client[$15f09b6a952c3ed3$require$kConnected]).length;
    }
    get [$15f09b6a952c3ed3$require$kFree]() {
        return this[$15f09b6a952c3ed3$var$kClients].filter((client)=>client[$15f09b6a952c3ed3$require$kConnected] && !client[$15f09b6a952c3ed3$var$kNeedDrain]).length;
    }
    get [$15f09b6a952c3ed3$require$kPending]() {
        let ret = this[$15f09b6a952c3ed3$require$kQueued];
        for (const { [$15f09b6a952c3ed3$require$kPending]: pending } of this[$15f09b6a952c3ed3$var$kClients])ret += pending;
        return ret;
    }
    get [$15f09b6a952c3ed3$require$kRunning]() {
        let ret = 0;
        for (const { [$15f09b6a952c3ed3$require$kRunning]: running } of this[$15f09b6a952c3ed3$var$kClients])ret += running;
        return ret;
    }
    get [$15f09b6a952c3ed3$require$kSize]() {
        let ret = this[$15f09b6a952c3ed3$require$kQueued];
        for (const { [$15f09b6a952c3ed3$require$kSize]: size } of this[$15f09b6a952c3ed3$var$kClients])ret += size;
        return ret;
    }
    get stats() {
        return this[$15f09b6a952c3ed3$var$kStats];
    }
    async [$15f09b6a952c3ed3$require$kClose]() {
        if (this[$15f09b6a952c3ed3$var$kQueue].isEmpty()) return Promise.all(this[$15f09b6a952c3ed3$var$kClients].map((c)=>c.close()));
        else return new Promise((resolve)=>{
            this[$15f09b6a952c3ed3$var$kClosedResolve] = resolve;
        });
    }
    async [$15f09b6a952c3ed3$require$kDestroy](err) {
        while(true){
            const item = this[$15f09b6a952c3ed3$var$kQueue].shift();
            if (!item) break;
            item.handler.onError(err);
        }
        return Promise.all(this[$15f09b6a952c3ed3$var$kClients].map((c)=>c.destroy(err)));
    }
    [$15f09b6a952c3ed3$require$kDispatch](opts, handler) {
        const dispatcher = this[$15f09b6a952c3ed3$var$kGetDispatcher]();
        if (!dispatcher) {
            this[$15f09b6a952c3ed3$var$kNeedDrain] = true;
            this[$15f09b6a952c3ed3$var$kQueue].push({
                opts: opts,
                handler: handler
            });
            this[$15f09b6a952c3ed3$require$kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler)) {
            dispatcher[$15f09b6a952c3ed3$var$kNeedDrain] = true;
            this[$15f09b6a952c3ed3$var$kNeedDrain] = !this[$15f09b6a952c3ed3$var$kGetDispatcher]();
        }
        return !this[$15f09b6a952c3ed3$var$kNeedDrain];
    }
    [$15f09b6a952c3ed3$var$kAddClient](client) {
        client.on('drain', this[$15f09b6a952c3ed3$var$kOnDrain]).on('connect', this[$15f09b6a952c3ed3$var$kOnConnect]).on('disconnect', this[$15f09b6a952c3ed3$var$kOnDisconnect]).on('connectionError', this[$15f09b6a952c3ed3$var$kOnConnectionError]);
        this[$15f09b6a952c3ed3$var$kClients].push(client);
        if (this[$15f09b6a952c3ed3$var$kNeedDrain]) process.nextTick(()=>{
            if (this[$15f09b6a952c3ed3$var$kNeedDrain]) this[$15f09b6a952c3ed3$var$kOnDrain](client[$15f09b6a952c3ed3$require$kUrl], [
                this,
                client
            ]);
        });
        return this;
    }
    [$15f09b6a952c3ed3$var$kRemoveClient](client) {
        client.close(()=>{
            const idx = this[$15f09b6a952c3ed3$var$kClients].indexOf(client);
            if (idx !== -1) this[$15f09b6a952c3ed3$var$kClients].splice(idx, 1);
        });
        this[$15f09b6a952c3ed3$var$kNeedDrain] = this[$15f09b6a952c3ed3$var$kClients].some((dispatcher)=>!dispatcher[$15f09b6a952c3ed3$var$kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
    }
}
module.exports = {
    PoolBase: $15f09b6a952c3ed3$var$PoolBase,
    kClients: $15f09b6a952c3ed3$var$kClients,
    kNeedDrain: $15f09b6a952c3ed3$var$kNeedDrain,
    kAddClient: $15f09b6a952c3ed3$var$kAddClient,
    kRemoveClient: $15f09b6a952c3ed3$var$kRemoveClient,
    kGetDispatcher: $15f09b6a952c3ed3$var$kGetDispatcher
};


//# sourceMappingURL=pool-base.0246cf84.js.map
