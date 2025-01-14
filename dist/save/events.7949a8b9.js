require("./webidl.107e124b.js");
require("./util.c7a5ec55.js");
var $85THA$worker_threads = require("worker_threads");


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

var $cpX4f = parcelRequire("cpX4f");
var $4b71c1b3356c3ac2$require$webidl = $cpX4f.webidl;

var $iiSZx = parcelRequire("iiSZx");
var $4b71c1b3356c3ac2$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;

var $4b71c1b3356c3ac2$require$MessagePort = $85THA$worker_threads.MessagePort;
/**
 * @see https://html.spec.whatwg.org/multipage/comms.html#messageevent
 */ class $4b71c1b3356c3ac2$var$MessageEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        $4b71c1b3356c3ac2$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'MessageEvent constructor'
        });
        type = $4b71c1b3356c3ac2$require$webidl.converters.DOMString(type);
        eventInitDict = $4b71c1b3356c3ac2$require$webidl.converters.MessageEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get data() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        return this.#eventInit.data;
    }
    get origin() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        return this.#eventInit.origin;
    }
    get lastEventId() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        return this.#eventInit.lastEventId;
    }
    get source() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        return this.#eventInit.source;
    }
    get ports() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        if (!Object.isFrozen(this.#eventInit.ports)) Object.freeze(this.#eventInit.ports);
        return this.#eventInit.ports;
    }
    initMessageEvent(type, bubbles = false, cancelable = false, data = null, origin = '', lastEventId = '', source = null, ports = []) {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$MessageEvent);
        $4b71c1b3356c3ac2$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'MessageEvent.initMessageEvent'
        });
        return new $4b71c1b3356c3ac2$var$MessageEvent(type, {
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
 */ class $4b71c1b3356c3ac2$var$CloseEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        $4b71c1b3356c3ac2$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CloseEvent constructor'
        });
        type = $4b71c1b3356c3ac2$require$webidl.converters.DOMString(type);
        eventInitDict = $4b71c1b3356c3ac2$require$webidl.converters.CloseEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
    }
    get wasClean() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$CloseEvent);
        return this.#eventInit.wasClean;
    }
    get code() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$CloseEvent);
        return this.#eventInit.code;
    }
    get reason() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$CloseEvent);
        return this.#eventInit.reason;
    }
}
// https://html.spec.whatwg.org/multipage/webappapis.html#the-errorevent-interface
class $4b71c1b3356c3ac2$var$ErrorEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict){
        $4b71c1b3356c3ac2$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'ErrorEvent constructor'
        });
        super(type, eventInitDict);
        type = $4b71c1b3356c3ac2$require$webidl.converters.DOMString(type);
        eventInitDict = $4b71c1b3356c3ac2$require$webidl.converters.ErrorEventInit(eventInitDict ?? {});
        this.#eventInit = eventInitDict;
    }
    get message() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$ErrorEvent);
        return this.#eventInit.message;
    }
    get filename() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$ErrorEvent);
        return this.#eventInit.filename;
    }
    get lineno() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$ErrorEvent);
        return this.#eventInit.lineno;
    }
    get colno() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$ErrorEvent);
        return this.#eventInit.colno;
    }
    get error() {
        $4b71c1b3356c3ac2$require$webidl.brandCheck(this, $4b71c1b3356c3ac2$var$ErrorEvent);
        return this.#eventInit.error;
    }
}
Object.defineProperties($4b71c1b3356c3ac2$var$MessageEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'MessageEvent',
        configurable: true
    },
    data: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    origin: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    lastEventId: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    source: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    ports: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    initMessageEvent: $4b71c1b3356c3ac2$require$kEnumerableProperty
});
Object.defineProperties($4b71c1b3356c3ac2$var$CloseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'CloseEvent',
        configurable: true
    },
    reason: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    code: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    wasClean: $4b71c1b3356c3ac2$require$kEnumerableProperty
});
Object.defineProperties($4b71c1b3356c3ac2$var$ErrorEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'ErrorEvent',
        configurable: true
    },
    message: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    filename: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    lineno: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    colno: $4b71c1b3356c3ac2$require$kEnumerableProperty,
    error: $4b71c1b3356c3ac2$require$kEnumerableProperty
});
$4b71c1b3356c3ac2$require$webidl.converters.MessagePort = $4b71c1b3356c3ac2$require$webidl.interfaceConverter($4b71c1b3356c3ac2$require$MessagePort);
$4b71c1b3356c3ac2$require$webidl.converters['sequence<MessagePort>'] = $4b71c1b3356c3ac2$require$webidl.sequenceConverter($4b71c1b3356c3ac2$require$webidl.converters.MessagePort);
const $4b71c1b3356c3ac2$var$eventInit = [
    {
        key: 'bubbles',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'cancelable',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'composed',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.boolean,
        defaultValue: false
    }
];
$4b71c1b3356c3ac2$require$webidl.converters.MessageEventInit = $4b71c1b3356c3ac2$require$webidl.dictionaryConverter([
    ...$4b71c1b3356c3ac2$var$eventInit,
    {
        key: 'data',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.any,
        defaultValue: null
    },
    {
        key: 'origin',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.USVString,
        defaultValue: ''
    },
    {
        key: 'lastEventId',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'source',
        // Node doesn't implement WindowProxy or ServiceWorker, so the only
        // valid value for source is a MessagePort.
        converter: $4b71c1b3356c3ac2$require$webidl.nullableConverter($4b71c1b3356c3ac2$require$webidl.converters.MessagePort),
        defaultValue: null
    },
    {
        key: 'ports',
        converter: $4b71c1b3356c3ac2$require$webidl.converters['sequence<MessagePort>'],
        get defaultValue () {
            return [];
        }
    }
]);
$4b71c1b3356c3ac2$require$webidl.converters.CloseEventInit = $4b71c1b3356c3ac2$require$webidl.dictionaryConverter([
    ...$4b71c1b3356c3ac2$var$eventInit,
    {
        key: 'wasClean',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'code',
        converter: $4b71c1b3356c3ac2$require$webidl.converters['unsigned short'],
        defaultValue: 0
    },
    {
        key: 'reason',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.USVString,
        defaultValue: ''
    }
]);
$4b71c1b3356c3ac2$require$webidl.converters.ErrorEventInit = $4b71c1b3356c3ac2$require$webidl.dictionaryConverter([
    ...$4b71c1b3356c3ac2$var$eventInit,
    {
        key: 'message',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.DOMString,
        defaultValue: ''
    },
    {
        key: 'filename',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.USVString,
        defaultValue: ''
    },
    {
        key: 'lineno',
        converter: $4b71c1b3356c3ac2$require$webidl.converters['unsigned long'],
        defaultValue: 0
    },
    {
        key: 'colno',
        converter: $4b71c1b3356c3ac2$require$webidl.converters['unsigned long'],
        defaultValue: 0
    },
    {
        key: 'error',
        converter: $4b71c1b3356c3ac2$require$webidl.converters.any
    }
]);
module.exports = {
    MessageEvent: $4b71c1b3356c3ac2$var$MessageEvent,
    CloseEvent: $4b71c1b3356c3ac2$var$CloseEvent,
    ErrorEvent: $4b71c1b3356c3ac2$var$ErrorEvent
};


