require("./webidl.107e124b.js");


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
var $7256cc778a199d81$require$webidl = $cpX4f.webidl;
const $7256cc778a199d81$var$kState = Symbol('ProgressEvent state');
/**
 * @see https://xhr.spec.whatwg.org/#progressevent
 */ class $7256cc778a199d81$var$ProgressEvent extends Event {
    constructor(type, eventInitDict = {}){
        type = $7256cc778a199d81$require$webidl.converters.DOMString(type);
        eventInitDict = $7256cc778a199d81$require$webidl.converters.ProgressEventInit(eventInitDict ?? {});
        super(type, eventInitDict);
        this[$7256cc778a199d81$var$kState] = {
            lengthComputable: eventInitDict.lengthComputable,
            loaded: eventInitDict.loaded,
            total: eventInitDict.total
        };
    }
    get lengthComputable() {
        $7256cc778a199d81$require$webidl.brandCheck(this, $7256cc778a199d81$var$ProgressEvent);
        return this[$7256cc778a199d81$var$kState].lengthComputable;
    }
    get loaded() {
        $7256cc778a199d81$require$webidl.brandCheck(this, $7256cc778a199d81$var$ProgressEvent);
        return this[$7256cc778a199d81$var$kState].loaded;
    }
    get total() {
        $7256cc778a199d81$require$webidl.brandCheck(this, $7256cc778a199d81$var$ProgressEvent);
        return this[$7256cc778a199d81$var$kState].total;
    }
}
$7256cc778a199d81$require$webidl.converters.ProgressEventInit = $7256cc778a199d81$require$webidl.dictionaryConverter([
    {
        key: 'lengthComputable',
        converter: $7256cc778a199d81$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'loaded',
        converter: $7256cc778a199d81$require$webidl.converters['unsigned long long'],
        defaultValue: 0
    },
    {
        key: 'total',
        converter: $7256cc778a199d81$require$webidl.converters['unsigned long long'],
        defaultValue: 0
    },
    {
        key: 'bubbles',
        converter: $7256cc778a199d81$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'cancelable',
        converter: $7256cc778a199d81$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'composed',
        converter: $7256cc778a199d81$require$webidl.converters.boolean,
        defaultValue: false
    }
]);
module.exports = {
    ProgressEvent: $7256cc778a199d81$var$ProgressEvent
};


