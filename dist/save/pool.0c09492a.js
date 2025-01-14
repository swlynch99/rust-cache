require("./pool-base.cdada347.js");
require("./client.060f523e.js");
require("./errors.12b0f892.js");
require("./util.c7a5ec55.js");
require("./symbols.b8a391fa.js");
require("./connect.db50106d.js");


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
var $06cc5037234e8ccc$exports = {};
$06cc5037234e8ccc$exports = new URL("pool-base.cdada347.js", "file:" + __filename).toString();


var $d17f56db1b759c73$require$PoolBase = $06cc5037234e8ccc$exports.PoolBase;
var $d17f56db1b759c73$require$kClients = $06cc5037234e8ccc$exports.kClients;
var $d17f56db1b759c73$require$kNeedDrain = $06cc5037234e8ccc$exports.kNeedDrain;
var $d17f56db1b759c73$require$kAddClient = $06cc5037234e8ccc$exports.kAddClient;
var $d17f56db1b759c73$require$kGetDispatcher = $06cc5037234e8ccc$exports.kGetDispatcher;

var $gV7Qd = parcelRequire("gV7Qd");

var $hA22O = parcelRequire("hA22O");
var $d17f56db1b759c73$require$InvalidArgumentError = $hA22O.InvalidArgumentError;

var $iiSZx = parcelRequire("iiSZx");

var $dSiuY = parcelRequire("dSiuY");
var $d17f56db1b759c73$require$kUrl = $dSiuY.kUrl;
var $d17f56db1b759c73$require$kInterceptors = $dSiuY.kInterceptors;

var $eroPN = parcelRequire("eroPN");
const $d17f56db1b759c73$var$kOptions = Symbol('options');
const $d17f56db1b759c73$var$kConnections = Symbol('connections');
const $d17f56db1b759c73$var$kFactory = Symbol('factory');
function $d17f56db1b759c73$var$defaultFactory(origin, opts) {
    return new $gV7Qd(origin, opts);
}
class $d17f56db1b759c73$var$Pool extends $d17f56db1b759c73$require$PoolBase {
    constructor(origin, { connections: connections, factory: factory = $d17f56db1b759c73$var$defaultFactory, connect: connect, connectTimeout: connectTimeout, tls: tls, maxCachedSessions: maxCachedSessions, socketPath: socketPath, autoSelectFamily: autoSelectFamily, autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout, allowH2: allowH2, ...options } = {}){
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) throw new $d17f56db1b759c73$require$InvalidArgumentError('invalid connections');
        if (typeof factory !== 'function') throw new $d17f56db1b759c73$require$InvalidArgumentError('factory must be a function.');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $d17f56db1b759c73$require$InvalidArgumentError('connect must be a function or an object');
        if (typeof connect !== 'function') connect = $eroPN({
            ...tls,
            maxCachedSessions: maxCachedSessions,
            allowH2: allowH2,
            socketPath: socketPath,
            timeout: connectTimeout,
            ...$iiSZx.nodeHasAutoSelectFamily && autoSelectFamily ? {
                autoSelectFamily: autoSelectFamily,
                autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout
            } : undefined,
            ...connect
        });
        this[$d17f56db1b759c73$require$kInterceptors] = options.interceptors && options.interceptors.Pool && Array.isArray(options.interceptors.Pool) ? options.interceptors.Pool : [];
        this[$d17f56db1b759c73$var$kConnections] = connections || null;
        this[$d17f56db1b759c73$require$kUrl] = $iiSZx.parseOrigin(origin);
        this[$d17f56db1b759c73$var$kOptions] = {
            ...$iiSZx.deepClone(options),
            connect: connect,
            allowH2: allowH2
        };
        this[$d17f56db1b759c73$var$kOptions].interceptors = options.interceptors ? {
            ...options.interceptors
        } : undefined;
        this[$d17f56db1b759c73$var$kFactory] = factory;
    }
    [$d17f56db1b759c73$require$kGetDispatcher]() {
        let dispatcher = this[$d17f56db1b759c73$require$kClients].find((dispatcher)=>!dispatcher[$d17f56db1b759c73$require$kNeedDrain]);
        if (dispatcher) return dispatcher;
        if (!this[$d17f56db1b759c73$var$kConnections] || this[$d17f56db1b759c73$require$kClients].length < this[$d17f56db1b759c73$var$kConnections]) {
            dispatcher = this[$d17f56db1b759c73$var$kFactory](this[$d17f56db1b759c73$require$kUrl], this[$d17f56db1b759c73$var$kOptions]);
            this[$d17f56db1b759c73$require$kAddClient](dispatcher);
        }
        return dispatcher;
    }
}
module.exports = $d17f56db1b759c73$var$Pool;


