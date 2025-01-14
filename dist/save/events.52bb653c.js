require("./webidl.35d389df.js");
require("./util.26715e80.js");
var $ajBs7$worker_threads = require("worker_threads");


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

var $iPB2Q = parcelRequire("iPB2Q");
var $a7319442be4f11f5$require$webidl = $iPB2Q.webidl;

var $1Z05w = parcelRequire("1Z05w");
var $a7319442be4f11f5$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;

var $a7319442be4f11f5$require$MessagePort = $ajBs7$worker_threads.MessagePort;
/**
 * @see https://html.spec.whatwg.org/multipage/comms.html#messageevent
 */ class $a7319442be4f11f5$var$MessageEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        $a7319442be4f11f5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'MessageEvent constructor'
        });
        type = $a7319442be4f11f5$require$webidl.converters.DOMString(type);
        eventInitDict = $a7319442be4f11f5$require$webidl.converters.MessageEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get data() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        return this.#eventInit.data;
    }
    get origin() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        return this.#eventInit.origin;
    }
    get lastEventId() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        return this.#eventInit.lastEventId;
    }
    get source() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        return this.#eventInit.source;
    }
    get ports() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        if (!Object.isFrozen(this.#eventInit.ports)) Object.freeze(this.#eventInit.ports);
        return this.#eventInit.ports;
    }
    initMessageEvent(type, bubbles = false, cancelable = false, data = null, origin = '', lastEventId = '', source = null, ports = []) {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$MessageEvent);
        $a7319442be4f11f5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'MessageEvent.initMessageEvent'
        });
        return new $a7319442be4f11f5$var$MessageEvent(type, {
            bubbles: bubbles,
            cancelable: cancelable,
            data: data,
            origin: origin,
            lastEventId: lastEventId,
            source: source,
            ports: ports
        });
    }
}
/**
 * @see https://websockets.spec.whatwg.org/#the-closeevent-interface
 */ class $a7319442be4f11f5$var$CloseEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        $a7319442be4f11f5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CloseEvent constructor'
        });
        type = $a7319442be4f11f5$require$webidl.converters.DOMString(type);
        eventInitDict = $a7319442be4f11f5$require$webidl.converters.CloseEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get wasClean() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$CloseEvent);
        return this.#eventInit.wasClean;
    }
    get code() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$CloseEvent);
        return this.#eventInit.code;
    }
    get reason() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$CloseEvent);
        return this.#eventInit.reason;
    }
}
// https://html.spec.whatwg.org/multipage/webappapis.html#the-errorevent-interface
class $a7319442be4f11f5$var$ErrorEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict){
        $a7319442be4f11f5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'ErrorEvent constructor'
        });
        super(type, eventInitDict);
        type = $a7319442be4f11f5$require$webidl.converters.DOMString(type);
        eventInitDict = $a7319442be4f11f5$require$webidl.converters.ErrorEventInit(eventInitDict ?? {});
        this.#eventInit = eventInitDict;
    }
    get message() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$ErrorEvent);
        return this.#eventInit.message;
    }
    get filename() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$ErrorEvent);
        return this.#eventInit.filename;
    }
    get lineno() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$ErrorEvent);
        return this.#eventInit.lineno;
    }
    get colno() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$ErrorEvent);
        return this.#eventInit.colno;
    }
    get error() {
        $a7319442be4f11f5$require$webidl.brandCheck(this, $a7319442be4f11f5$var$ErrorEvent);
        return this.#eventInit.error;
    }
}
Object.defineProperties($a7319442be4f11f5$var$MessageEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'MessageEvent',
        configurable: true
    },
    data: $a7319442be4f11f5$require$kEnumerableProperty,
    origin: $a7319442be4f11f5$require$kEnumerableProperty,
    lastEventId: $a7319442be4f11f5$require$kEnumerableProperty,
    source: $a7319442be4f11f5$require$kEnumerableProperty,
    ports: $a7319442be4f11f5$require$kEnumerableProperty,
    initMessageEvent: $a7319442be4f11f5$require$kEnumerableProperty
});
Object.defineProperties($a7319442be4f11f5$var$CloseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'CloseEvent',
        configurable: true
    },
    reason: $a7319442be4f11f5$require$kEnumerableProperty,
    code: $a7319442be4f11f5$require$kEnumerableProperty,
    wasClean: $a7319442be4f11f5$require$kEnumerableProperty
});
Object.defineProperties($a7319442be4f11f5$var$ErrorEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'ErrorEvent',
        configurable: true
    },
    message: $a7319442be4f11f5$require$kEnumerableProperty,
    filename: $a7319442be4f11f5$require$kEnumerableProperty,
    lineno: $a7319442be4f11f5$require$kEnumerableProperty,
    colno: $a7319442be4f11f5$require$kEnumerableProperty,
    error: $a7319442be4f11f5$require$kEnumerableProperty
});
$a7319442be4f11f5$require$webidl.converters.MessagePort = $a7319442be4f11f5$require$webidl.interfaceConverter($a7319442be4f11f5$require$MessagePort);
$a7319442be4f11f5$require$webidl.converters['sequence<MessagePort>'] = $a7319442be4f11f5$require$webidl.sequenceConverter($a7319442be4f11f5$require$webidl.converters.MessagePort);
const $a7319442be4f11f5$var$eventInit = [
    {
        key: 'bubbles',
        converter: $a7319442be4f11f5$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'cancelable',
        converter: $a7319442be4f11f5$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'composed',
        converter: $a7319442be4f11f5$require$webidl.converters.boolean,
        defaultValue: false
    }
];
$a7319442be4f11f5$require$webidl.converters.MessageEventInit = $a7319442be4f11f5$require$webidl.dictionaryConverter([
    ...$a7319442be4f11f5$var$eventInit,
    {
        key: 'data',
        converter: $a7319442be4f11f5$require$webidl.converters.any,
        defaultValue: null
    },
    {
        key: 'origin',
        converter: $a7319442be4f11f5$require$webidl.converters.USVString,
        defaultValue: ''
    },
    {
        key: 'lastEventId',
        converter: $a7319442be4f11f5$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'source',
        // Node doesn't implement WindowProxy or ServiceWorker, so the only
        // valid value for source is a MessagePort.
        converter: $a7319442be4f11f5$require$webidl.nullableConverter($a7319442be4f11f5$require$webidl.converters.MessagePort),
        defaultValue: null
    },
    {
        key: 'ports',
        converter: $a7319442be4f11f5$require$webidl.converters['sequence<MessagePort>'],
        get defaultValue () {
            return [];
        }
    }
]);
$a7319442be4f11f5$require$webidl.converters.CloseEventInit = $a7319442be4f11f5$require$webidl.dictionaryConverter([
    ...$a7319442be4f11f5$var$eventInit,
    {
        key: 'wasClean',
        converter: $a7319442be4f11f5$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'code',
        converter: $a7319442be4f11f5$require$webidl.converters['unsigned short'],
        defaultValue: 0
    },
    {
        key: 'reason',
        converter: $a7319442be4f11f5$require$webidl.converters.USVString,
        defaultValue: ''
    }
]);
$a7319442be4f11f5$require$webidl.converters.ErrorEventInit = $a7319442be4f11f5$require$webidl.dictionaryConverter([
    ...$a7319442be4f11f5$var$eventInit,
    {
        key: 'message',
        converter: $a7319442be4f11f5$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'filename',
        converter: $a7319442be4f11f5$require$webidl.converters.USVString,
        defaultValue: ''
    },
    {
        key: 'lineno',
        converter: $a7319442be4f11f5$require$webidl.converters['unsigned long'],
        defaultValue: 0
    },
    {
        key: 'colno',
        converter: $a7319442be4f11f5$require$webidl.converters['unsigned long'],
        defaultValue: 0
    },
    {
        key: 'error',
        converter: $a7319442be4f11f5$require$webidl.converters.any
    }
]);
module.exports = {
    MessageEvent: $a7319442be4f11f5$var$MessageEvent,
    CloseEvent: $a7319442be4f11f5$var$CloseEvent,
    ErrorEvent: $a7319442be4f11f5$var$ErrorEvent
};


//# sourceMappingURL=events.52bb653c.js.map
