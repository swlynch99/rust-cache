require("./pool.0c09492a.js");
require("./mock-utils.616f52e7.js");
require("./mock-symbols.39ce3f7c.js");
require("./mock-interceptor.e80b5ffb.js");
require("./symbols.b8a391fa.js");
require("./errors.12b0f892.js");
var $lbvS4$util = require("util");


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

var $8d56dc716e9f50b6$require$promisify = $lbvS4$util.promisify;

var $hZ9i0 = parcelRequire("hZ9i0");

var $iAgtD = parcelRequire("iAgtD");
var $8d56dc716e9f50b6$require$buildMockDispatch = $iAgtD.buildMockDispatch;

var $8dXRR = parcelRequire("8dXRR");
var $8d56dc716e9f50b6$require$kDispatches = $8dXRR.kDispatches;
var $8d56dc716e9f50b6$require$kMockAgent = $8dXRR.kMockAgent;
var $8d56dc716e9f50b6$require$kClose = $8dXRR.kClose;
var $8d56dc716e9f50b6$require$kOriginalClose = $8dXRR.kOriginalClose;
var $8d56dc716e9f50b6$require$kOrigin = $8dXRR.kOrigin;
var $8d56dc716e9f50b6$require$kOriginalDispatch = $8dXRR.kOriginalDispatch;
var $8d56dc716e9f50b6$require$kConnected = $8dXRR.kConnected;

var $lsShG = parcelRequire("lsShG");
var $8d56dc716e9f50b6$require$MockInterceptor = $lsShG.MockInterceptor;

var $dSiuY = parcelRequire("dSiuY");

var $hA22O = parcelRequire("hA22O");
var $8d56dc716e9f50b6$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
/**
 * MockPool provides an API that extends the Pool to influence the mockDispatches.
 */ class $8d56dc716e9f50b6$var$MockPool extends $hZ9i0 {
    constructor(origin, opts){
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') throw new $8d56dc716e9f50b6$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        this[$8d56dc716e9f50b6$require$kMockAgent] = opts.agent;
        this[$8d56dc716e9f50b6$require$kOrigin] = origin;
        this[$8d56dc716e9f50b6$require$kDispatches] = [];
        this[$8d56dc716e9f50b6$require$kConnected] = 1;
        this[$8d56dc716e9f50b6$require$kOriginalDispatch] = this.dispatch;
        this[$8d56dc716e9f50b6$require$kOriginalClose] = this.close.bind(this);
        this.dispatch = $8d56dc716e9f50b6$require$buildMockDispatch.call(this);
        this.close = this[$8d56dc716e9f50b6$require$kClose];
    }
    get [$dSiuY.kConnected]() {
        return this[$8d56dc716e9f50b6$require$kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new $8d56dc716e9f50b6$require$MockInterceptor(opts, this[$8d56dc716e9f50b6$require$kDispatches]);
    }
    async [$8d56dc716e9f50b6$require$kClose]() {
        await $8d56dc716e9f50b6$require$promisify(this[$8d56dc716e9f50b6$require$kOriginalClose])();
        this[$8d56dc716e9f50b6$require$kConnected] = 0;
        this[$8d56dc716e9f50b6$require$kMockAgent][$dSiuY.kClients].delete(this[$8d56dc716e9f50b6$require$kOrigin]);
    }
}
module.exports = $8d56dc716e9f50b6$var$MockPool;


