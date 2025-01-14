require("./pool.5e3fe8ea.js");
require("./mock-utils.830ab1d2.js");
require("./mock-symbols.ad0f5bc1.js");
require("./mock-interceptor.1e7aa961.js");
require("./symbols.c5dd8fde.js");
require("./errors.621f8b7b.js");
var $fenRH$util = require("util");


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

var $08c0b817cdf27c7a$require$promisify = $fenRH$util.promisify;

var $ihqOT = parcelRequire("ihqOT");

var $bhUvh = parcelRequire("bhUvh");
var $08c0b817cdf27c7a$require$buildMockDispatch = $bhUvh.buildMockDispatch;

var $dePme = parcelRequire("dePme");
var $08c0b817cdf27c7a$require$kDispatches = $dePme.kDispatches;
var $08c0b817cdf27c7a$require$kMockAgent = $dePme.kMockAgent;
var $08c0b817cdf27c7a$require$kClose = $dePme.kClose;
var $08c0b817cdf27c7a$require$kOriginalClose = $dePme.kOriginalClose;
var $08c0b817cdf27c7a$require$kOrigin = $dePme.kOrigin;
var $08c0b817cdf27c7a$require$kOriginalDispatch = $dePme.kOriginalDispatch;
var $08c0b817cdf27c7a$require$kConnected = $dePme.kConnected;

var $f7kHl = parcelRequire("f7kHl");
var $08c0b817cdf27c7a$require$MockInterceptor = $f7kHl.MockInterceptor;

var $bMqEt = parcelRequire("bMqEt");

var $4V3Kr = parcelRequire("4V3Kr");
var $08c0b817cdf27c7a$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
/**
 * MockPool provides an API that extends the Pool to influence the mockDispatches.
 */ class $08c0b817cdf27c7a$var$MockPool extends $ihqOT {
    constructor(origin, opts){
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') throw new $08c0b817cdf27c7a$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        this[$08c0b817cdf27c7a$require$kMockAgent] = opts.agent;
        this[$08c0b817cdf27c7a$require$kOrigin] = origin;
        this[$08c0b817cdf27c7a$require$kDispatches] = [];
        this[$08c0b817cdf27c7a$require$kConnected] = 1;
        this[$08c0b817cdf27c7a$require$kOriginalDispatch] = this.dispatch;
        this[$08c0b817cdf27c7a$require$kOriginalClose] = this.close.bind(this);
        this.dispatch = $08c0b817cdf27c7a$require$buildMockDispatch.call(this);
        this.close = this[$08c0b817cdf27c7a$require$kClose];
    }
    get [$bMqEt.kConnected]() {
        return this[$08c0b817cdf27c7a$require$kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new $08c0b817cdf27c7a$require$MockInterceptor(opts, this[$08c0b817cdf27c7a$require$kDispatches]);
    }
    async [$08c0b817cdf27c7a$require$kClose]() {
        await $08c0b817cdf27c7a$require$promisify(this[$08c0b817cdf27c7a$require$kOriginalClose])();
        this[$08c0b817cdf27c7a$require$kConnected] = 0;
        this[$08c0b817cdf27c7a$require$kMockAgent][$bMqEt.kClients].delete(this[$08c0b817cdf27c7a$require$kOrigin]);
    }
}
module.exports = $08c0b817cdf27c7a$var$MockPool;


//# sourceMappingURL=mock-pool.ae9e0f3a.js.map
