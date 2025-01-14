require("./errors.621f8b7b.js");
require("./pool-base.0246cf84.js");
require("./pool.5e3fe8ea.js");
require("./symbols.c5dd8fde.js");
require("./util.26715e80.js");


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

var $4V3Kr = parcelRequire("4V3Kr");
var $12c2bdcb431f3f8d$require$BalancedPoolMissingUpstreamError = $4V3Kr.BalancedPoolMissingUpstreamError;
var $12c2bdcb431f3f8d$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;

var $1SMH9 = parcelRequire("1SMH9");
var $12c2bdcb431f3f8d$require$PoolBase = $1SMH9.PoolBase;
var $12c2bdcb431f3f8d$require$kClients = $1SMH9.kClients;
var $12c2bdcb431f3f8d$require$kNeedDrain = $1SMH9.kNeedDrain;
var $12c2bdcb431f3f8d$require$kAddClient = $1SMH9.kAddClient;
var $12c2bdcb431f3f8d$require$kRemoveClient = $1SMH9.kRemoveClient;
var $12c2bdcb431f3f8d$require$kGetDispatcher = $1SMH9.kGetDispatcher;

var $ihqOT = parcelRequire("ihqOT");

var $bMqEt = parcelRequire("bMqEt");
var $12c2bdcb431f3f8d$require$kUrl = $bMqEt.kUrl;
var $12c2bdcb431f3f8d$require$kInterceptors = $bMqEt.kInterceptors;

var $1Z05w = parcelRequire("1Z05w");
var $12c2bdcb431f3f8d$require$parseOrigin = $1Z05w.parseOrigin;
const $12c2bdcb431f3f8d$var$kFactory = Symbol('factory');
const $12c2bdcb431f3f8d$var$kOptions = Symbol('options');
const $12c2bdcb431f3f8d$var$kGreatestCommonDivisor = Symbol('kGreatestCommonDivisor');
const $12c2bdcb431f3f8d$var$kCurrentWeight = Symbol('kCurrentWeight');
const $12c2bdcb431f3f8d$var$kIndex = Symbol('kIndex');
const $12c2bdcb431f3f8d$var$kWeight = Symbol('kWeight');
const $12c2bdcb431f3f8d$var$kMaxWeightPerServer = Symbol('kMaxWeightPerServer');
const $12c2bdcb431f3f8d$var$kErrorPenalty = Symbol('kErrorPenalty');
function $12c2bdcb431f3f8d$var$getGreatestCommonDivisor(a, b) {
    if (b === 0) return a;
    return $12c2bdcb431f3f8d$var$getGreatestCommonDivisor(b, a % b);
}
function $12c2bdcb431f3f8d$var$defaultFactory(origin, opts) {
    return new $ihqOT(origin, opts);
}
class $12c2bdcb431f3f8d$var$BalancedPool extends $12c2bdcb431f3f8d$require$PoolBase {
    constructor(upstreams = [], { factory: factory = $12c2bdcb431f3f8d$var$defaultFactory, ...opts } = {}){
        super();
        this[$12c2bdcb431f3f8d$var$kOptions] = opts;
        this[$12c2bdcb431f3f8d$var$kIndex] = -1;
        this[$12c2bdcb431f3f8d$var$kCurrentWeight] = 0;
        this[$12c2bdcb431f3f8d$var$kMaxWeightPerServer] = this[$12c2bdcb431f3f8d$var$kOptions].maxWeightPerServer || 100;
        this[$12c2bdcb431f3f8d$var$kErrorPenalty] = this[$12c2bdcb431f3f8d$var$kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) upstreams = [
            upstreams
        ];
        if (typeof factory !== 'function') throw new $12c2bdcb431f3f8d$require$InvalidArgumentError('factory must be a function.');
        this[$12c2bdcb431f3f8d$require$kInterceptors] = opts.interceptors && opts.interceptors.BalancedPool && Array.isArray(opts.interceptors.BalancedPool) ? opts.interceptors.BalancedPool : [];
        this[$12c2bdcb431f3f8d$var$kFactory] = factory;
        for (const upstream of upstreams)this.addUpstream(upstream);
        this._updateBalancedPoolStats();
    }
    addUpstream(upstream) {
        const upstreamOrigin = $12c2bdcb431f3f8d$require$parseOrigin(upstream).origin;
        if (this[$12c2bdcb431f3f8d$require$kClients].find((pool)=>pool[$12c2bdcb431f3f8d$require$kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true)) return this;
        const pool = this[$12c2bdcb431f3f8d$var$kFactory](upstreamOrigin, Object.assign({}, this[$12c2bdcb431f3f8d$var$kOptions]));
        this[$12c2bdcb431f3f8d$require$kAddClient](pool);
        pool.on('connect', ()=>{
            pool[$12c2bdcb431f3f8d$var$kWeight] = Math.min(this[$12c2bdcb431f3f8d$var$kMaxWeightPerServer], pool[$12c2bdcb431f3f8d$var$kWeight] + this[$12c2bdcb431f3f8d$var$kErrorPenalty]);
        });
        pool.on('connectionError', ()=>{
            pool[$12c2bdcb431f3f8d$var$kWeight] = Math.max(1, pool[$12c2bdcb431f3f8d$var$kWeight] - this[$12c2bdcb431f3f8d$var$kErrorPenalty]);
            this._updateBalancedPoolStats();
        });
        pool.on('disconnect', (...args)=>{
            const err = args[2];
            if (err && err.code === 'UND_ERR_SOCKET') {
                // decrease the weight of the pool.
                pool[$12c2bdcb431f3f8d$var$kWeight] = Math.max(1, pool[$12c2bdcb431f3f8d$var$kWeight] - this[$12c2bdcb431f3f8d$var$kErrorPenalty]);
                this._updateBalancedPoolStats();
            }
        });
        for (const client of this[$12c2bdcb431f3f8d$require$kClients])client[$12c2bdcb431f3f8d$var$kWeight] = this[$12c2bdcb431f3f8d$var$kMaxWeightPerServer];
        this._updateBalancedPoolStats();
        return this;
    }
    _updateBalancedPoolStats() {
        this[$12c2bdcb431f3f8d$var$kGreatestCommonDivisor] = this[$12c2bdcb431f3f8d$require$kClients].map((p)=>p[$12c2bdcb431f3f8d$var$kWeight]).reduce($12c2bdcb431f3f8d$var$getGreatestCommonDivisor, 0);
    }
    removeUpstream(upstream) {
        const upstreamOrigin = $12c2bdcb431f3f8d$require$parseOrigin(upstream).origin;
        const pool = this[$12c2bdcb431f3f8d$require$kClients].find((pool)=>pool[$12c2bdcb431f3f8d$require$kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true);
        if (pool) this[$12c2bdcb431f3f8d$require$kRemoveClient](pool);
        return this;
    }
    get upstreams() {
        return this[$12c2bdcb431f3f8d$require$kClients].filter((dispatcher)=>dispatcher.closed !== true && dispatcher.destroyed !== true).map((p)=>p[$12c2bdcb431f3f8d$require$kUrl].origin);
    }
    [$12c2bdcb431f3f8d$require$kGetDispatcher]() {
        // We validate that pools is greater than 0,
        // otherwise we would have to wait until an upstream
        // is added, which might never happen.
        if (this[$12c2bdcb431f3f8d$require$kClients].length === 0) throw new $12c2bdcb431f3f8d$require$BalancedPoolMissingUpstreamError();
        const dispatcher = this[$12c2bdcb431f3f8d$require$kClients].find((dispatcher)=>!dispatcher[$12c2bdcb431f3f8d$require$kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
        if (!dispatcher) return;
        const allClientsBusy = this[$12c2bdcb431f3f8d$require$kClients].map((pool)=>pool[$12c2bdcb431f3f8d$require$kNeedDrain]).reduce((a, b)=>a && b, true);
        if (allClientsBusy) return;
        let counter = 0;
        let maxWeightIndex = this[$12c2bdcb431f3f8d$require$kClients].findIndex((pool)=>!pool[$12c2bdcb431f3f8d$require$kNeedDrain]);
        while(counter++ < this[$12c2bdcb431f3f8d$require$kClients].length){
            this[$12c2bdcb431f3f8d$var$kIndex] = (this[$12c2bdcb431f3f8d$var$kIndex] + 1) % this[$12c2bdcb431f3f8d$require$kClients].length;
            const pool = this[$12c2bdcb431f3f8d$require$kClients][this[$12c2bdcb431f3f8d$var$kIndex]];
            // find pool index with the largest weight
            if (pool[$12c2bdcb431f3f8d$var$kWeight] > this[$12c2bdcb431f3f8d$require$kClients][maxWeightIndex][$12c2bdcb431f3f8d$var$kWeight] && !pool[$12c2bdcb431f3f8d$require$kNeedDrain]) maxWeightIndex = this[$12c2bdcb431f3f8d$var$kIndex];
            // decrease the current weight every `this[kClients].length`.
            if (this[$12c2bdcb431f3f8d$var$kIndex] === 0) {
                // Set the current weight to the next lower weight.
                this[$12c2bdcb431f3f8d$var$kCurrentWeight] = this[$12c2bdcb431f3f8d$var$kCurrentWeight] - this[$12c2bdcb431f3f8d$var$kGreatestCommonDivisor];
                if (this[$12c2bdcb431f3f8d$var$kCurrentWeight] <= 0) this[$12c2bdcb431f3f8d$var$kCurrentWeight] = this[$12c2bdcb431f3f8d$var$kMaxWeightPerServer];
            }
            if (pool[$12c2bdcb431f3f8d$var$kWeight] >= this[$12c2bdcb431f3f8d$var$kCurrentWeight] && !pool[$12c2bdcb431f3f8d$require$kNeedDrain]) return pool;
        }
        this[$12c2bdcb431f3f8d$var$kCurrentWeight] = this[$12c2bdcb431f3f8d$require$kClients][maxWeightIndex][$12c2bdcb431f3f8d$var$kWeight];
        this[$12c2bdcb431f3f8d$var$kIndex] = maxWeightIndex;
        return this[$12c2bdcb431f3f8d$require$kClients][maxWeightIndex];
    }
}
module.exports = $12c2bdcb431f3f8d$var$BalancedPool;


//# sourceMappingURL=balanced-pool.cbc80253.js.map
