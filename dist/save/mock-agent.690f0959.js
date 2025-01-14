require("./symbols.b8a391fa.js");
require("./agent.7a15b627.js");
require("./mock-symbols.39ce3f7c.js");
require("./mock-client.28fd70e5.js");
require("./mock-pool.6271ea2d.js");
require("./mock-utils.616f52e7.js");
require("./errors.12b0f892.js");
require("./dispatcher.c6f1a8de.js");
require("./pluralizer.0b552682.js");
require("./pending-interceptors-formatter.a8e0bec2.js");


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

var $dSiuY = parcelRequire("dSiuY");
var $7103c121c3ddba09$require$kClients = $dSiuY.kClients;

var $gzNqH = parcelRequire("gzNqH");

var $8dXRR = parcelRequire("8dXRR");
var $7103c121c3ddba09$require$kAgent = $8dXRR.kAgent;
var $7103c121c3ddba09$require$kMockAgentSet = $8dXRR.kMockAgentSet;
var $7103c121c3ddba09$require$kMockAgentGet = $8dXRR.kMockAgentGet;
var $7103c121c3ddba09$require$kDispatches = $8dXRR.kDispatches;
var $7103c121c3ddba09$require$kIsMockActive = $8dXRR.kIsMockActive;
var $7103c121c3ddba09$require$kNetConnect = $8dXRR.kNetConnect;
var $7103c121c3ddba09$require$kGetNetConnect = $8dXRR.kGetNetConnect;
var $7103c121c3ddba09$require$kOptions = $8dXRR.kOptions;
var $7103c121c3ddba09$require$kFactory = $8dXRR.kFactory;

var $k11q7 = parcelRequire("k11q7");
var $52660938edd04b99$exports = {};
$52660938edd04b99$exports = new URL("mock-pool.6271ea2d.js", "file:" + __filename).toString();



var $iAgtD = parcelRequire("iAgtD");
var $7103c121c3ddba09$require$matchValue = $iAgtD.matchValue;
var $7103c121c3ddba09$require$buildMockOptions = $iAgtD.buildMockOptions;

var $hA22O = parcelRequire("hA22O");
var $7103c121c3ddba09$require$InvalidArgumentError = $hA22O.InvalidArgumentError;
var $7103c121c3ddba09$require$UndiciError = $hA22O.UndiciError;

var $4A6EU = parcelRequire("4A6EU");
var $4687eba5ede60fda$exports = {};
$4687eba5ede60fda$exports = new URL("pluralizer.0b552682.js", "file:" + __filename).toString();


var $41095fb1c2fc0d4c$exports = {};
$41095fb1c2fc0d4c$exports = new URL("pending-interceptors-formatter.a8e0bec2.js", "file:" + __filename).toString();


class $7103c121c3ddba09$var$FakeWeakRef {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
}
class $7103c121c3ddba09$var$MockAgent extends $4A6EU {
    constructor(opts){
        super(opts);
        this[$7103c121c3ddba09$require$kNetConnect] = true;
        this[$7103c121c3ddba09$require$kIsMockActive] = true;
        // Instantiate Agent and encapsulate
        if (opts && opts.agent && typeof opts.agent.dispatch !== 'function') throw new $7103c121c3ddba09$require$InvalidArgumentError('Argument opts.agent must implement Agent');
        const agent = opts && opts.agent ? opts.agent : new $gzNqH(opts);
        this[$7103c121c3ddba09$require$kAgent] = agent;
        this[$7103c121c3ddba09$require$kClients] = agent[$7103c121c3ddba09$require$kClients];
        this[$7103c121c3ddba09$require$kOptions] = $7103c121c3ddba09$require$buildMockOptions(opts);
    }
    get(origin) {
        let dispatcher = this[$7103c121c3ddba09$require$kMockAgentGet](origin);
        if (!dispatcher) {
            dispatcher = this[$7103c121c3ddba09$require$kFactory](origin);
            this[$7103c121c3ddba09$require$kMockAgentSet](origin, dispatcher);
        }
        return dispatcher;
    }
    dispatch(opts, handler) {
        // Call MockAgent.get to perform additional setup before dispatching as normal
        this.get(opts.origin);
        return this[$7103c121c3ddba09$require$kAgent].dispatch(opts, handler);
    }
    async close() {
        await this[$7103c121c3ddba09$require$kAgent].close();
        this[$7103c121c3ddba09$require$kClients].clear();
    }
    deactivate() {
        this[$7103c121c3ddba09$require$kIsMockActive] = false;
    }
    activate() {
        this[$7103c121c3ddba09$require$kIsMockActive] = true;
    }
    enableNetConnect(matcher) {
        if (typeof matcher === 'string' || typeof matcher === 'function' || matcher instanceof RegExp) {
            if (Array.isArray(this[$7103c121c3ddba09$require$kNetConnect])) this[$7103c121c3ddba09$require$kNetConnect].push(matcher);
            else this[$7103c121c3ddba09$require$kNetConnect] = [
                matcher
            ];
        } else if (typeof matcher === 'undefined') this[$7103c121c3ddba09$require$kNetConnect] = true;
        else throw new $7103c121c3ddba09$require$InvalidArgumentError('Unsupported matcher. Must be one of String|Function|RegExp.');
    }
    disableNetConnect() {
        this[$7103c121c3ddba09$require$kNetConnect] = false;
    }
    // This is required to bypass issues caused by using global symbols - see:
    // https://github.com/nodejs/undici/issues/1447
    get isMockActive() {
        return this[$7103c121c3ddba09$require$kIsMockActive];
    }
    [$7103c121c3ddba09$require$kMockAgentSet](origin, dispatcher) {
        this[$7103c121c3ddba09$require$kClients].set(origin, new $7103c121c3ddba09$var$FakeWeakRef(dispatcher));
    }
    [$7103c121c3ddba09$require$kFactory](origin) {
        const mockOptions = Object.assign({
            agent: this
        }, this[$7103c121c3ddba09$require$kOptions]);
        return this[$7103c121c3ddba09$require$kOptions] && this[$7103c121c3ddba09$require$kOptions].connections === 1 ? new $k11q7(origin, mockOptions) : new $52660938edd04b99$exports(origin, mockOptions);
    }
    [$7103c121c3ddba09$require$kMockAgentGet](origin) {
        // First check if we can immediately find it
        const ref = this[$7103c121c3ddba09$require$kClients].get(origin);
        if (ref) return ref.deref();
        // If the origin is not a string create a dummy parent pool and return to user
        if (typeof origin !== 'string') {
            const dispatcher = this[$7103c121c3ddba09$require$kFactory]('http://localhost:9999');
            this[$7103c121c3ddba09$require$kMockAgentSet](origin, dispatcher);
            return dispatcher;
        }
        // If we match, create a pool and assign the same dispatches
        for (const [keyMatcher, nonExplicitRef] of Array.from(this[$7103c121c3ddba09$require$kClients])){
            const nonExplicitDispatcher = nonExplicitRef.deref();
            if (nonExplicitDispatcher && typeof keyMatcher !== 'string' && $7103c121c3ddba09$require$matchValue(keyMatcher, origin)) {
                const dispatcher = this[$7103c121c3ddba09$require$kFactory](origin);
                this[$7103c121c3ddba09$require$kMockAgentSet](origin, dispatcher);
                dispatcher[$7103c121c3ddba09$require$kDispatches] = nonExplicitDispatcher[$7103c121c3ddba09$require$kDispatches];
                return dispatcher;
            }
        }
    }
    [$7103c121c3ddba09$require$kGetNetConnect]() {
        return this[$7103c121c3ddba09$require$kNetConnect];
    }
    pendingInterceptors() {
        const mockAgentClients = this[$7103c121c3ddba09$require$kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, scope])=>scope.deref()[$7103c121c3ddba09$require$kDispatches].map((dispatch)=>({
                    ...dispatch,
                    origin: origin
                }))).filter(({ pending: pending })=>pending);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: pendingInterceptorsFormatter = new $41095fb1c2fc0d4c$exports() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) return;
        const pluralizer = new $4687eba5ede60fda$exports('interceptor', 'interceptors').pluralize(pending.length);
        throw new $7103c121c3ddba09$require$UndiciError(`
${pluralizer.count} ${pluralizer.noun} ${pluralizer.is} pending:

${pendingInterceptorsFormatter.format(pending)}
`.trim());
    }
}
module.exports = $7103c121c3ddba09$var$MockAgent;


