require("./client.a6515ab6.js");
require("./mock-utils.830ab1d2.js");
require("./mock-symbols.ad0f5bc1.js");
require("./mock-interceptor.1e7aa961.js");
require("./symbols.c5dd8fde.js");
require("./errors.621f8b7b.js");
var $aXYr0$util = require("util");


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

var $22ccea6d9d1c0a7d$require$promisify = $aXYr0$util.promisify;

var $8FCdh = parcelRequire("8FCdh");
var $f6554c8d8de4d167$exports = {};
$f6554c8d8de4d167$exports = new URL("mock-utils.830ab1d2.js", "file:" + __filename).toString();


var $22ccea6d9d1c0a7d$require$buildMockDispatch = $f6554c8d8de4d167$exports.buildMockDispatch;

var $dePme = parcelRequire("dePme");
var $22ccea6d9d1c0a7d$require$kDispatches = $dePme.kDispatches;
var $22ccea6d9d1c0a7d$require$kMockAgent = $dePme.kMockAgent;
var $22ccea6d9d1c0a7d$require$kClose = $dePme.kClose;
var $22ccea6d9d1c0a7d$require$kOriginalClose = $dePme.kOriginalClose;
var $22ccea6d9d1c0a7d$require$kOrigin = $dePme.kOrigin;
var $22ccea6d9d1c0a7d$require$kOriginalDispatch = $dePme.kOriginalDispatch;
var $22ccea6d9d1c0a7d$require$kConnected = $dePme.kConnected;
var $bcf08b11d7b2fa7f$exports = {};
$bcf08b11d7b2fa7f$exports = new URL("mock-interceptor.1e7aa961.js", "file:" + __filename).toString();


var $22ccea6d9d1c0a7d$require$MockInterceptor = $bcf08b11d7b2fa7f$exports.MockInterceptor;

var $bMqEt = parcelRequire("bMqEt");

var $4V3Kr = parcelRequire("4V3Kr");
var $22ccea6d9d1c0a7d$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
/**
 * MockClient provides an API that extends the Client to influence the mockDispatches.
 */ class $22ccea6d9d1c0a7d$var$MockClient extends $8FCdh {
    constructor(origin, opts){
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') throw new $22ccea6d9d1c0a7d$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        this[$22ccea6d9d1c0a7d$require$kMockAgent] = opts.agent;
        this[$22ccea6d9d1c0a7d$require$kOrigin] = origin;
        this[$22ccea6d9d1c0a7d$require$kDispatches] = [];
        this[$22ccea6d9d1c0a7d$require$kConnected] = 1;
        this[$22ccea6d9d1c0a7d$require$kOriginalDispatch] = this.dispatch;
        this[$22ccea6d9d1c0a7d$require$kOriginalClose] = this.close.bind(this);
        this.dispatch = $22ccea6d9d1c0a7d$require$buildMockDispatch.call(this);
        this.close = this[$22ccea6d9d1c0a7d$require$kClose];
    }
    get [$bMqEt.kConnected]() {
        return this[$22ccea6d9d1c0a7d$require$kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new $22ccea6d9d1c0a7d$require$MockInterceptor(opts, this[$22ccea6d9d1c0a7d$require$kDispatches]);
    }
    async [$22ccea6d9d1c0a7d$require$kClose]() {
        await $22ccea6d9d1c0a7d$require$promisify(this[$22ccea6d9d1c0a7d$require$kOriginalClose])();
        this[$22ccea6d9d1c0a7d$require$kConnected] = 0;
        this[$22ccea6d9d1c0a7d$require$kMockAgent][$bMqEt.kClients].delete(this[$22ccea6d9d1c0a7d$require$kOrigin]);
    }
}
module.exports = $22ccea6d9d1c0a7d$var$MockClient;


//# sourceMappingURL=mock-client.41ce9dc9.js.map
