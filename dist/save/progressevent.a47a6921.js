require("./webidl.35d389df.js");


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
var $7f49e52dacfbb7ef$require$webidl = $iPB2Q.webidl;
const $7f49e52dacfbb7ef$var$kState = Symbol('ProgressEvent state');
/**
 * @see https://xhr.spec.whatwg.org/#progressevent
 */ class $7f49e52dacfbb7ef$var$ProgressEvent extends Event {
    constructor(type, eventInitDict = {}){
        type = $7f49e52dacfbb7ef$require$webidl.converters.DOMString(type);
        eventInitDict = $7f49e52dacfbb7ef$require$webidl.converters.ProgressEventInit(eventInitDict ?? {});
        super(type, eventInitDict);
        this[$7f49e52dacfbb7ef$var$kState] = {
            lengthComputable: eventInitDict.lengthComputable,
            loaded: eventInitDict.loaded,
            total: eventInitDict.total
        };
    }
    get lengthComputable() {
        $7f49e52dacfbb7ef$require$webidl.brandCheck(this, $7f49e52dacfbb7ef$var$ProgressEvent);
        return this[$7f49e52dacfbb7ef$var$kState].lengthComputable;
    }
    get loaded() {
        $7f49e52dacfbb7ef$require$webidl.brandCheck(this, $7f49e52dacfbb7ef$var$ProgressEvent);
        return this[$7f49e52dacfbb7ef$var$kState].loaded;
    }
    get total() {
        $7f49e52dacfbb7ef$require$webidl.brandCheck(this, $7f49e52dacfbb7ef$var$ProgressEvent);
        return this[$7f49e52dacfbb7ef$var$kState].total;
    }
}
$7f49e52dacfbb7ef$require$webidl.converters.ProgressEventInit = $7f49e52dacfbb7ef$require$webidl.dictionaryConverter([
    {
        key: 'lengthComputable',
        converter: $7f49e52dacfbb7ef$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'loaded',
        converter: $7f49e52dacfbb7ef$require$webidl.converters['unsigned long long'],
        defaultValue: 0
    },
    {
        key: 'total',
        converter: $7f49e52dacfbb7ef$require$webidl.converters['unsigned long long'],
        defaultValue: 0
    },
    {
        key: 'bubbles',
        converter: $7f49e52dacfbb7ef$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'cancelable',
        converter: $7f49e52dacfbb7ef$require$webidl.converters.boolean,
        defaultValue: false
    },
    {
        key: 'composed',
        converter: $7f49e52dacfbb7ef$require$webidl.converters.boolean,
        defaultValue: false
    }
]);
module.exports = {
    ProgressEvent: $7f49e52dacfbb7ef$var$ProgressEvent
};


//# sourceMappingURL=progressevent.a47a6921.js.map
