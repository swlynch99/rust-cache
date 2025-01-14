require("./client.060f523e.js");
require("./mock-utils.616f52e7.js");
require("./mock-symbols.39ce3f7c.js");
require("./mock-interceptor.e80b5ffb.js");
require("./symbols.b8a391fa.js");
require("./errors.12b0f892.js");
var $d3i3q$util = require("util");


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

var $e92500a82013049c$require$promisify = $d3i3q$util.promisify;

var $gV7Qd = parcelRequire("gV7Qd");
var $862c73ac42a164ba$exports = {};
$862c73ac42a164ba$exports = new URL("mock-utils.616f52e7.js", "file:" + __filename).toString();


var $e92500a82013049c$require$buildMockDispatch = $862c73ac42a164ba$exports.buildMockDispatch;

var $8dXRR = parcelRequire("8dXRR");
var $e92500a82013049c$require$kDispatches = $8dXRR.kDispatches;
var $e92500a82013049c$require$kMockAgent = $8dXRR.kMockAgent;
var $e92500a82013049c$require$kClose = $8dXRR.kClose;
var $e92500a82013049c$require$kOriginalClose = $8dXRR.kOriginalClose;
var $e92500a82013049c$require$kOrigin = $8dXRR.kOrigin;
var $e92500a82013049c$require$kOriginalDispatch = $8dXRR.kOriginalDispatch;
var $e92500a82013049c$require$kConnected = $8dXRR.kConnected;
var $7a4ef1227fb03ee3$exports = {};
$7a4ef1227fb03ee3$exports = new URL("mock-interceptor.e80b5ffb.js", "file:" + __filename).toString();


var $e92500a82013049c$require$MockInterceptor = $7a4ef1227fb03ee3$exports.MockInterceptor;

var $dSiuY = parcelRequire("dSiuY");

var $hA22O = parcelRequire("hA22O");
var $e92500a82013049c$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
/**
 * MockClient provides an API that extends the Client to influence the mockDispatches.
 */ class $e92500a82013049c$var$MockClient extends $gV7Qd {
    constructor(origin, opts){
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') throw new $e92500a82013049c$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        this[$e92500a82013049c$require$kMockAgent] = opts.agent;
        this[$e92500a82013049c$require$kOrigin] = origin;
        this[$e92500a82013049c$require$kDispatches] = [];
        this[$e92500a82013049c$require$kConnected] = 1;
        this[$e92500a82013049c$require$kOriginalDispatch] = this.dispatch;
        this[$e92500a82013049c$require$kOriginalClose] = this.close.bind(this);
        this.dispatch = $e92500a82013049c$require$buildMockDispatch.call(this);
        this.close = this[$e92500a82013049c$require$kClose];
    }
    get [$dSiuY.kConnected]() {
        return this[$e92500a82013049c$require$kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new $e92500a82013049c$require$MockInterceptor(opts, this[$e92500a82013049c$require$kDispatches]);
    }
    async [$e92500a82013049c$require$kClose]() {
        await $e92500a82013049c$require$promisify(this[$e92500a82013049c$require$kOriginalClose])();
        this[$e92500a82013049c$require$kConnected] = 0;
        this[$e92500a82013049c$require$kMockAgent][$dSiuY.kClients].delete(this[$e92500a82013049c$require$kOrigin]);
    }
}
module.exports = $e92500a82013049c$var$MockClient;


