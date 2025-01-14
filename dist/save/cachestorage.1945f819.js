require("./symbols.063ce0fc.js");
require("./cache.748ee500.js");
require("./webidl.35d389df.js");
require("./util.26715e80.js");


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
parcelRegister("2Sn13", function(module, exports) {
'use strict';

var $dRV8S = parcelRequire("dRV8S");
var $21827a6c14c72033$require$kConstruct = $dRV8S.kConstruct;

var $7Zw7B = parcelRequire("7Zw7B");
var $21827a6c14c72033$require$Cache = $7Zw7B.Cache;

var $iPB2Q = parcelRequire("iPB2Q");
var $21827a6c14c72033$require$webidl = $iPB2Q.webidl;

var $1Z05w = parcelRequire("1Z05w");
var $21827a6c14c72033$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;
class $21827a6c14c72033$var$CacheStorage {
    /**
   * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
   * @type {Map<string, import('./cache').requestResponseList}
   */ #caches = new Map();
    constructor(){
        if (arguments[0] !== $21827a6c14c72033$require$kConstruct) $21827a6c14c72033$require$webidl.illegalConstructor();
    }
    async match(request, options = {}) {
        $21827a6c14c72033$require$webidl.brandCheck(this, $21827a6c14c72033$var$CacheStorage);
        $21827a6c14c72033$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.match'
        });
        request = $21827a6c14c72033$require$webidl.converters.RequestInfo(request);
        options = $21827a6c14c72033$require$webidl.converters.MultiCacheQueryOptions(options);
        // 1.
        if (options.cacheName != null) // 1.1.1.1
        {
            if (this.#caches.has(options.cacheName)) {
                // 1.1.1.1.1
                const cacheList = this.#caches.get(options.cacheName);
                const cache = new $21827a6c14c72033$require$Cache($21827a6c14c72033$require$kConstruct, cacheList);
                return await cache.match(request, options);
            }
        } else // 2.2
        for (const cacheList of this.#caches.values()){
            const cache = new $21827a6c14c72033$require$Cache($21827a6c14c72033$require$kConstruct, cacheList);
            // 2.2.1.2
            const response = await cache.match(request, options);
            if (response !== undefined) return response;
        }
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-has
   * @param {string} cacheName
   * @returns {Promise<boolean>}
   */ async has(cacheName) {
        $21827a6c14c72033$require$webidl.brandCheck(this, $21827a6c14c72033$var$CacheStorage);
        $21827a6c14c72033$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.has'
        });
        cacheName = $21827a6c14c72033$require$webidl.converters.DOMString(cacheName);
        // 2.1.1
        // 2.2
        return this.#caches.has(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#dom-cachestorage-open
   * @param {string} cacheName
   * @returns {Promise<Cache>}
   */ async open(cacheName) {
        $21827a6c14c72033$require$webidl.brandCheck(this, $21827a6c14c72033$var$CacheStorage);
        $21827a6c14c72033$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.open'
        });
        cacheName = $21827a6c14c72033$require$webidl.converters.DOMString(cacheName);
        // 2.1
        if (this.#caches.has(cacheName)) {
            // await caches.open('v1') !== await caches.open('v1')
            // 2.1.1
            const cache = this.#caches.get(cacheName);
            // 2.1.1.1
            return new $21827a6c14c72033$require$Cache($21827a6c14c72033$require$kConstruct, cache);
        }
        // 2.2
        const cache = [];
        // 2.3
        this.#caches.set(cacheName, cache);
        // 2.4
        return new $21827a6c14c72033$require$Cache($21827a6c14c72033$require$kConstruct, cache);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-delete
   * @param {string} cacheName
   * @returns {Promise<boolean>}
   */ async delete(cacheName) {
        $21827a6c14c72033$require$webidl.brandCheck(this, $21827a6c14c72033$var$CacheStorage);
        $21827a6c14c72033$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.delete'
        });
        cacheName = $21827a6c14c72033$require$webidl.converters.DOMString(cacheName);
        return this.#caches.delete(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-keys
   * @returns {string[]}
   */ async keys() {
        $21827a6c14c72033$require$webidl.brandCheck(this, $21827a6c14c72033$var$CacheStorage);
        // 2.1
        const keys = this.#caches.keys();
        // 2.2
        return [
            ...keys
        ];
    }
}
Object.defineProperties($21827a6c14c72033$var$CacheStorage.prototype, {
    [Symbol.toStringTag]: {
        value: 'CacheStorage',
        configurable: true
    },
    match: $21827a6c14c72033$require$kEnumerableProperty,
    has: $21827a6c14c72033$require$kEnumerableProperty,
    open: $21827a6c14c72033$require$kEnumerableProperty,
    delete: $21827a6c14c72033$require$kEnumerableProperty,
    keys: $21827a6c14c72033$require$kEnumerableProperty
});
module.exports = {
    CacheStorage: $21827a6c14c72033$var$CacheStorage
};

});
parcelRegister("dRV8S", function(module, exports) {
module.exports = new URL("symbols.063ce0fc.js", "file:" + __filename).toString();

});

parcelRegister("7Zw7B", function(module, exports) {
module.exports = new URL("cache.748ee500.js", "file:" + __filename).toString();

});



//# sourceMappingURL=cachestorage.1945f819.js.map
