require("./pool-base.0246cf84.js");
require("./client.a6515ab6.js");
require("./errors.621f8b7b.js");
require("./util.26715e80.js");
require("./symbols.c5dd8fde.js");
require("./connect.7d5a8838.js");


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
var $e9f0e24a3bb9b2b6$exports = {};
$e9f0e24a3bb9b2b6$exports = new URL("pool-base.0246cf84.js", "file:" + __filename).toString();


var $d4ee9e64906196cc$require$PoolBase = $e9f0e24a3bb9b2b6$exports.PoolBase;
var $d4ee9e64906196cc$require$kClients = $e9f0e24a3bb9b2b6$exports.kClients;
var $d4ee9e64906196cc$require$kNeedDrain = $e9f0e24a3bb9b2b6$exports.kNeedDrain;
var $d4ee9e64906196cc$require$kAddClient = $e9f0e24a3bb9b2b6$exports.kAddClient;
var $d4ee9e64906196cc$require$kGetDispatcher = $e9f0e24a3bb9b2b6$exports.kGetDispatcher;

var $8FCdh = parcelRequire("8FCdh");

var $4V3Kr = parcelRequire("4V3Kr");
var $d4ee9e64906196cc$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;

var $1Z05w = parcelRequire("1Z05w");

var $bMqEt = parcelRequire("bMqEt");
var $d4ee9e64906196cc$require$kUrl = $bMqEt.kUrl;
var $d4ee9e64906196cc$require$kInterceptors = $bMqEt.kInterceptors;

var $bi3kp = parcelRequire("bi3kp");
const $d4ee9e64906196cc$var$kOptions = Symbol('options');
const $d4ee9e64906196cc$var$kConnections = Symbol('connections');
const $d4ee9e64906196cc$var$kFactory = Symbol('factory');
function $d4ee9e64906196cc$var$defaultFactory(origin, opts) {
    return new $8FCdh(origin, opts);
}
class $d4ee9e64906196cc$var$Pool extends $d4ee9e64906196cc$require$PoolBase {
    constructor(origin, { connections: connections, factory: factory = $d4ee9e64906196cc$var$defaultFactory, connect: connect, connectTimeout: connectTimeout, tls: tls, maxCachedSessions: maxCachedSessions, socketPath: socketPath, autoSelectFamily: autoSelectFamily, autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout, allowH2: allowH2, ...options } = {}){
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) throw new $d4ee9e64906196cc$require$InvalidArgumentError('invalid connections');
        if (typeof factory !== 'function') throw new $d4ee9e64906196cc$require$InvalidArgumentError('factory must be a function.');
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') throw new $d4ee9e64906196cc$require$InvalidArgumentError('connect must be a function or an object');
        if (typeof connect !== 'function') connect = $bi3kp({
            ...tls,
            maxCachedSessions: maxCachedSessions,
            allowH2: allowH2,
            socketPath: socketPath,
            timeout: connectTimeout,
            ...$1Z05w.nodeHasAutoSelectFamily && autoSelectFamily ? {
                autoSelectFamily: autoSelectFamily,
                autoSelectFamilyAttemptTimeout: autoSelectFamilyAttemptTimeout
            } : undefined,
            ...connect
        });
        this[$d4ee9e64906196cc$require$kInterceptors] = options.interceptors && options.interceptors.Pool && Array.isArray(options.interceptors.Pool) ? options.interceptors.Pool : [];
        this[$d4ee9e64906196cc$var$kConnections] = connections || null;
        this[$d4ee9e64906196cc$require$kUrl] = $1Z05w.parseOrigin(origin);
        this[$d4ee9e64906196cc$var$kOptions] = {
            ...$1Z05w.deepClone(options),
            connect: connect,
            allowH2: allowH2
        };
        this[$d4ee9e64906196cc$var$kOptions].interceptors = options.interceptors ? {
            ...options.interceptors
        } : undefined;
        this[$d4ee9e64906196cc$var$kFactory] = factory;
    }
    [$d4ee9e64906196cc$require$kGetDispatcher]() {
        let dispatcher = this[$d4ee9e64906196cc$require$kClients].find((dispatcher)=>!dispatcher[$d4ee9e64906196cc$require$kNeedDrain]);
        if (dispatcher) return dispatcher;
        if (!this[$d4ee9e64906196cc$var$kConnections] || this[$d4ee9e64906196cc$require$kClients].length < this[$d4ee9e64906196cc$var$kConnections]) {
            dispatcher = this[$d4ee9e64906196cc$var$kFactory](this[$d4ee9e64906196cc$require$kUrl], this[$d4ee9e64906196cc$var$kOptions]);
            this[$d4ee9e64906196cc$require$kAddClient](dispatcher);
        }
        return dispatcher;
    }
}
module.exports = $d4ee9e64906196cc$var$Pool;


//# sourceMappingURL=pool.5e3fe8ea.js.map
