require("./errors.12b0f892.js");
require("./pool-base.cdada347.js");
require("./pool.0c09492a.js");
require("./symbols.b8a391fa.js");
require("./util.c7a5ec55.js");


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

var $hA22O = parcelRequire("hA22O");
var $4fe7d8aa8f6765f0$require$BalancedPoolMissingUpstreamError = $hA22O.BalancedPoolMissingUpstreamError;
var $4fe7d8aa8f6765f0$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $9jliO = parcelRequire("9jliO");
var $4fe7d8aa8f6765f0$require$PoolBase = $9jliO.PoolBase;
var $4fe7d8aa8f6765f0$require$kClients = $9jliO.kClients;
var $4fe7d8aa8f6765f0$require$kNeedDrain = $9jliO.kNeedDrain;
var $4fe7d8aa8f6765f0$require$kAddClient = $9jliO.kAddClient;
var $4fe7d8aa8f6765f0$require$kRemoveClient = $9jliO.kRemoveClient;
var $4fe7d8aa8f6765f0$require$kGetDispatcher = $9jliO.kGetDispatcher;

var $hZ9i0 = parcelRequire("hZ9i0");

var $dSiuY = parcelRequire("dSiuY");
var $4fe7d8aa8f6765f0$require$kUrl = $dSiuY.kUrl;
var $4fe7d8aa8f6765f0$require$kInterceptors = $dSiuY.kInterceptors;

var $iiSZx = parcelRequire("iiSZx");
var $4fe7d8aa8f6765f0$require$parseOrigin = $iiSZx.parseOrigin;
const $4fe7d8aa8f6765f0$var$kFactory = Symbol('factory');
const $4fe7d8aa8f6765f0$var$kOptions = Symbol('options');
const $4fe7d8aa8f6765f0$var$kGreatestCommonDivisor = Symbol('kGreatestCommonDivisor');
const $4fe7d8aa8f6765f0$var$kCurrentWeight = Symbol('kCurrentWeight');
const $4fe7d8aa8f6765f0$var$kIndex = Symbol('kIndex');
const $4fe7d8aa8f6765f0$var$kWeight = Symbol('kWeight');
const $4fe7d8aa8f6765f0$var$kMaxWeightPerServer = Symbol('kMaxWeightPerServer');
const $4fe7d8aa8f6765f0$var$kErrorPenalty = Symbol('kErrorPenalty');
function $4fe7d8aa8f6765f0$var$getGreatestCommonDivisor(a, b) {
    if (b === 0) return a;
    return $4fe7d8aa8f6765f0$var$getGreatestCommonDivisor(b, a % b);
}
function $4fe7d8aa8f6765f0$var$defaultFactory(origin, opts) {
    return new $hZ9i0(origin, opts);
}
class $4fe7d8aa8f6765f0$var$BalancedPool extends $4fe7d8aa8f6765f0$require$PoolBase {
    constructor(upstreams = [], { factory: factory = $4fe7d8aa8f6765f0$var$defaultFactory, ...opts } = {}){
        super();
        this[$4fe7d8aa8f6765f0$var$kOptions] = opts;
        this[$4fe7d8aa8f6765f0$var$kIndex] = -1;
        this[$4fe7d8aa8f6765f0$var$kCurrentWeight] = 0;
        this[$4fe7d8aa8f6765f0$var$kMaxWeightPerServer] = this[$4fe7d8aa8f6765f0$var$kOptions].maxWeightPerServer || 100;
        this[$4fe7d8aa8f6765f0$var$kErrorPenalty] = this[$4fe7d8aa8f6765f0$var$kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) upstreams = [
            upstreams
        ];
        if (typeof factory !== 'function') throw new $4fe7d8aa8f6765f0$require$InvalidArgumentError('factory must be a function.');
        this[$4fe7d8aa8f6765f0$require$kInterceptors] = opts.interceptors && opts.interceptors.BalancedPool && Array.isArray(opts.interceptors.BalancedPool) ? opts.interceptors.BalancedPool : [];
        this[$4fe7d8aa8f6765f0$var$kFactory] = factory;
        for (const upstream of upstreams)this.addUpstream(upstream);
        this._updateBalancedPoolStats();
    }
    addUpstream(upstream) {
        const upstreamOrigin = $4fe7d8aa8f6765f0$require$parseOrigin(upstream).origin;
        if (this[$4fe7d8aa8f6765f0$require$kClients].find((pool)=>pool[$4fe7d8aa8f6765f0$require$kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true)) return this;
        const pool = this[$4fe7d8aa8f6765f0$var$kFactory](upstreamOrigin, Object.assign({}, this[$4fe7d8aa8f6765f0$var$kOptions]));
        this[$4fe7d8aa8f6765f0$require$kAddClient](pool);
        pool.on('connect', ()=>{
            pool[$4fe7d8aa8f6765f0$var$kWeight] = Math.min(this[$4fe7d8aa8f6765f0$var$kMaxWeightPerServer], pool[$4fe7d8aa8f6765f0$var$kWeight] + this[$4fe7d8aa8f6765f0$var$kErrorPenalty]);
        });
        pool.on('connectionError', ()=>{
            pool[$4fe7d8aa8f6765f0$var$kWeight] = Math.max(1, pool[$4fe7d8aa8f6765f0$var$kWeight] - this[$4fe7d8aa8f6765f0$var$kErrorPenalty]);
            this._updateBalancedPoolStats();
        });
        pool.on('disconnect', (...args)=>{
            const err = args[2];
            if (err && err.code === 'UND_ERR_SOCKET') {
                // decrease the weight of the pool.
                pool[$4fe7d8aa8f6765f0$var$kWeight] = Math.max(1, pool[$4fe7d8aa8f6765f0$var$kWeight] - this[$4fe7d8aa8f6765f0$var$kErrorPenalty]);
                this._updateBalancedPoolStats();
            }
        });
        for (const client of this[$4fe7d8aa8f6765f0$require$kClients])client[$4fe7d8aa8f6765f0$var$kWeight] = this[$4fe7d8aa8f6765f0$var$kMaxWeightPerServer];
        this._updateBalancedPoolStats();
        return this;
    }
    _updateBalancedPoolStats() {
        this[$4fe7d8aa8f6765f0$var$kGreatestCommonDivisor] = this[$4fe7d8aa8f6765f0$require$kClients].map((p)=>p[$4fe7d8aa8f6765f0$var$kWeight]).reduce($4fe7d8aa8f6765f0$var$getGreatestCommonDivisor, 0);
    }
    removeUpstream(upstream) {
        const upstreamOrigin = $4fe7d8aa8f6765f0$require$parseOrigin(upstream).origin;
        const pool = this[$4fe7d8aa8f6765f0$require$kClients].find((pool)=>pool[$4fe7d8aa8f6765f0$require$kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true);
        if (pool) this[$4fe7d8aa8f6765f0$require$kRemoveClient](pool);
        return this;
    }
    get upstreams() {
        return this[$4fe7d8aa8f6765f0$require$kClients].filter((dispatcher)=>dispatcher.closed !== true && dispatcher.destroyed !== true).map((p)=>p[$4fe7d8aa8f6765f0$require$kUrl].origin);
    }
    [$4fe7d8aa8f6765f0$require$kGetDispatcher]() {
        // We validate that pools is greater than 0,
        // otherwise we would have to wait until an upstream
        // is added, which might never happen.
        if (this[$4fe7d8aa8f6765f0$require$kClients].length === 0) throw new $4fe7d8aa8f6765f0$require$BalancedPoolMissingUpstreamError();
        const dispatcher = this[$4fe7d8aa8f6765f0$require$kClients].find((dispatcher)=>!dispatcher[$4fe7d8aa8f6765f0$require$kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
        if (!dispatcher) return;
        const allClientsBusy = this[$4fe7d8aa8f6765f0$require$kClients].map((pool)=>pool[$4fe7d8aa8f6765f0$require$kNeedDrain]).reduce((a, b)=>a && b, true);
        if (allClientsBusy) return;
        let counter = 0;
        let maxWeightIndex = this[$4fe7d8aa8f6765f0$require$kClients].findIndex((pool)=>!pool[$4fe7d8aa8f6765f0$require$kNeedDrain]);
        while(counter++ < this[$4fe7d8aa8f6765f0$require$kClients].length){
            this[$4fe7d8aa8f6765f0$var$kIndex] = (this[$4fe7d8aa8f6765f0$var$kIndex] + 1) % this[$4fe7d8aa8f6765f0$require$kClients].length;
            const pool = this[$4fe7d8aa8f6765f0$require$kClients][this[$4fe7d8aa8f6765f0$var$kIndex]];
            // find pool index with the largest weight
            if (pool[$4fe7d8aa8f6765f0$var$kWeight] > this[$4fe7d8aa8f6765f0$require$kClients][maxWeightIndex][$4fe7d8aa8f6765f0$var$kWeight] && !pool[$4fe7d8aa8f6765f0$require$kNeedDrain]) maxWeightIndex = this[$4fe7d8aa8f6765f0$var$kIndex];
            // decrease the current weight every `this[kClients].length`.
            if (this[$4fe7d8aa8f6765f0$var$kIndex] === 0) {
                // Set the current weight to the next lower weight.
                this[$4fe7d8aa8f6765f0$var$kCurrentWeight] = this[$4fe7d8aa8f6765f0$var$kCurrentWeight] - this[$4fe7d8aa8f6765f0$var$kGreatestCommonDivisor];
                if (this[$4fe7d8aa8f6765f0$var$kCurrentWeight] <= 0) this[$4fe7d8aa8f6765f0$var$kCurrentWeight] = this[$4fe7d8aa8f6765f0$var$kMaxWeightPerServer];
            }
            if (pool[$4fe7d8aa8f6765f0$var$kWeight] >= this[$4fe7d8aa8f6765f0$var$kCurrentWeight] && !pool[$4fe7d8aa8f6765f0$require$kNeedDrain]) return pool;
        }
        this[$4fe7d8aa8f6765f0$var$kCurrentWeight] = this[$4fe7d8aa8f6765f0$require$kClients][maxWeightIndex][$4fe7d8aa8f6765f0$var$kWeight];
        this[$4fe7d8aa8f6765f0$var$kIndex] = maxWeightIndex;
        return this[$4fe7d8aa8f6765f0$require$kClients][maxWeightIndex];
    }
}
module.exports = $4fe7d8aa8f6765f0$var$BalancedPool;


