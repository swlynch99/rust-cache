require("./symbols.c5dd8fde.js");
require("./agent.886e033b.js");
require("./mock-symbols.ad0f5bc1.js");
require("./mock-client.41ce9dc9.js");
require("./mock-pool.ae9e0f3a.js");
require("./mock-utils.830ab1d2.js");
require("./errors.621f8b7b.js");
require("./dispatcher.1061760d.js");
require("./pluralizer.90a2dbc5.js");
require("./pending-interceptors-formatter.54cc6c65.js");


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

var $bMqEt = parcelRequire("bMqEt");
var $86f41c6be0eec6a5$require$kClients = $bMqEt.kClients;

var $hEZxa = parcelRequire("hEZxa");

var $dePme = parcelRequire("dePme");
var $86f41c6be0eec6a5$require$kAgent = $dePme.kAgent;
var $86f41c6be0eec6a5$require$kMockAgentSet = $dePme.kMockAgentSet;
var $86f41c6be0eec6a5$require$kMockAgentGet = $dePme.kMockAgentGet;
var $86f41c6be0eec6a5$require$kDispatches = $dePme.kDispatches;
var $86f41c6be0eec6a5$require$kIsMockActive = $dePme.kIsMockActive;
var $86f41c6be0eec6a5$require$kNetConnect = $dePme.kNetConnect;
var $86f41c6be0eec6a5$require$kGetNetConnect = $dePme.kGetNetConnect;
var $86f41c6be0eec6a5$require$kOptions = $dePme.kOptions;
var $86f41c6be0eec6a5$require$kFactory = $dePme.kFactory;

var $2Zf0c = parcelRequire("2Zf0c");
var $fc9bce4534a7ff0a$exports = {};
$fc9bce4534a7ff0a$exports = new URL("mock-pool.ae9e0f3a.js", "file:" + __filename).toString();



var $bhUvh = parcelRequire("bhUvh");
var $86f41c6be0eec6a5$require$matchValue = $bhUvh.matchValue;
var $86f41c6be0eec6a5$require$buildMockOptions = $bhUvh.buildMockOptions;

var $4V3Kr = parcelRequire("4V3Kr");
var $86f41c6be0eec6a5$require$InvalidArgumentError = $4V3Kr.InvalidArgumentError;
var $86f41c6be0eec6a5$require$UndiciError = $4V3Kr.UndiciError;

var $l9JHF = parcelRequire("l9JHF");
var $beb2250843d412de$exports = {};
$beb2250843d412de$exports = new URL("pluralizer.90a2dbc5.js", "file:" + __filename).toString();


var $4d8b952c18cbe6bc$exports = {};
$4d8b952c18cbe6bc$exports = new URL("pending-interceptors-formatter.54cc6c65.js", "file:" + __filename).toString();


class $86f41c6be0eec6a5$var$FakeWeakRef {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
}
class $86f41c6be0eec6a5$var$MockAgent extends $l9JHF {
    constructor(opts){
        super(opts);
        this[$86f41c6be0eec6a5$require$kNetConnect] = true;
        this[$86f41c6be0eec6a5$require$kIsMockActive] = true;
        // Instantiate Agent and encapsulate
        if (opts && opts.agent && typeof opts.agent.dispatch !== 'function') throw new $86f41c6be0eec6a5$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        const agent = opts && opts.agent ? opts.agent : new $hEZxa(opts);
        this[$86f41c6be0eec6a5$require$kAgent] = agent;
        this[$86f41c6be0eec6a5$require$kClients] = agent[$86f41c6be0eec6a5$require$kClients];
        this[$86f41c6be0eec6a5$require$kOptions] = $86f41c6be0eec6a5$require$buildMockOptions(opts);
    }
    get(origin) {
        let dispatcher = this[$86f41c6be0eec6a5$require$kMockAgentGet](origin);
        if (!dispatcher) {
            dispatcher = this[$86f41c6be0eec6a5$require$kFactory](origin);
            this[$86f41c6be0eec6a5$require$kMockAgentSet](origin, dispatcher);
        }
        return dispatcher;
    }
    dispatch(opts, handler) {
        // Call MockAgent.get to perform additional setup before dispatching as normal
        this.get(opts.origin);
        return this[$86f41c6be0eec6a5$require$kAgent].dispatch(opts, handler);
    }
    async close() {
        await this[$86f41c6be0eec6a5$require$kAgent].close();
        this[$86f41c6be0eec6a5$require$kClients].clear();
    }
    deactivate() {
        this[$86f41c6be0eec6a5$require$kIsMockActive] = false;
    }
    activate() {
        this[$86f41c6be0eec6a5$require$kIsMockActive] = true;
    }
    enableNetConnect(matcher) {
        if (typeof matcher === 'string' || typeof matcher === 'function' || matcher instanceof RegExp) {
            if (Array.isArray(this[$86f41c6be0eec6a5$require$kNetConnect])) this[$86f41c6be0eec6a5$require$kNetConnect].push(matcher);
            else this[$86f41c6be0eec6a5$require$kNetConnect] = [
                matcher
            ];
        } else if (typeof matcher === 'undefined') this[$86f41c6be0eec6a5$require$kNetConnect] = true;
        else throw new $86f41c6be0eec6a5$require$InvalidArgumentError('Unsupported matcher. Must be one of String|Function|RegExp.');
    }
    disableNetConnect() {
        this[$86f41c6be0eec6a5$require$kNetConnect] = false;
    }
    // This is required to bypass issues caused by using global symbols - see:
    // https://github.com/nodejs/undici/issues/1447
    get isMockActive() {
        return this[$86f41c6be0eec6a5$require$kIsMockActive];
    }
    [$86f41c6be0eec6a5$require$kMockAgentSet](origin, dispatcher) {
        this[$86f41c6be0eec6a5$require$kClients].set(origin, new $86f41c6be0eec6a5$var$FakeWeakRef(dispatcher));
    }
    [$86f41c6be0eec6a5$require$kFactory](origin) {
        const mockOptions = Object.assign({
            agent: this
        }, this[$86f41c6be0eec6a5$require$kOptions]);
        return this[$86f41c6be0eec6a5$require$kOptions] && this[$86f41c6be0eec6a5$require$kOptions].connections === 1 ? new $2Zf0c(origin, mockOptions) : new $fc9bce4534a7ff0a$exports(origin, mockOptions);
    }
    [$86f41c6be0eec6a5$require$kMockAgentGet](origin) {
        // First check if we can immediately find it
        const ref = this[$86f41c6be0eec6a5$require$kClients].get(origin);
        if (ref) return ref.deref();
        // If the origin is not a string create a dummy parent pool and return to user
        if (typeof origin !== 'string') {
            const dispatcher = this[$86f41c6be0eec6a5$require$kFactory]('http://localhost:9999');
            this[$86f41c6be0eec6a5$require$kMockAgentSet](origin, dispatcher);
            return dispatcher;
        }
        // If we match, create a pool and assign the same dispatches
        for (const [keyMatcher, nonExplicitRef] of Array.from(this[$86f41c6be0eec6a5$require$kClients])){
            const nonExplicitDispatcher = nonExplicitRef.deref();
            if (nonExplicitDispatcher && typeof keyMatcher !== 'string' && $86f41c6be0eec6a5$require$matchValue(keyMatcher, origin)) {
                const dispatcher = this[$86f41c6be0eec6a5$require$kFactory](origin);
                this[$86f41c6be0eec6a5$require$kMockAgentSet](origin, dispatcher);
                dispatcher[$86f41c6be0eec6a5$require$kDispatches] = nonExplicitDispatcher[$86f41c6be0eec6a5$require$kDispatches];
                return dispatcher;
            }
        }
    }
    [$86f41c6be0eec6a5$require$kGetNetConnect]() {
        return this[$86f41c6be0eec6a5$require$kNetConnect];
    }
    pendingInterceptors() {
        const mockAgentClients = this[$86f41c6be0eec6a5$require$kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, scope])=>scope.deref()[$86f41c6be0eec6a5$require$kDispatches].map((dispatch)=>({
                    ...dispatch,
                    origin: origin
                }))).filter(({ pending: pending })=>pending);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: pendingInterceptorsFormatter = new $4d8b952c18cbe6bc$exports() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) return;
        const pluralizer = new $beb2250843d412de$exports('interceptor', 'interceptors').pluralize(pending.length);
        throw new $86f41c6be0eec6a5$require$UndiciError(`
${pluralizer.count} ${pluralizer.noun} ${pluralizer.is} pending:

${pendingInterceptorsFormatter.format(pending)}
`.trim());
    }
}
module.exports = $86f41c6be0eec6a5$var$MockAgent;


//# sourceMappingURL=mock-agent.7956c1fd.js.map
