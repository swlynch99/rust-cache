require("./symbols.fbc21de4.js");
require("./cache.a9fdf86e.js");
require("./webidl.107e124b.js");
require("./util.c7a5ec55.js");


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
parcelRegister("bVxri", function(module, exports) {
'use strict';

var $8pr0a = parcelRequire("8pr0a");
var $8aeef4e92d56e564$require$kConstruct = $8pr0a.kConstruct;

var $j8H9K = parcelRequire("j8H9K");
var $8aeef4e92d56e564$require$Cache = $j8H9K.Cache;

var $cpX4f = parcelRequire("cpX4f");
var $8aeef4e92d56e564$require$webidl = $cpX4f.webidl;

var $iiSZx = parcelRequire("iiSZx");
var $8aeef4e92d56e564$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;
class $8aeef4e92d56e564$var$CacheStorage {
    /**
   * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
   * @type {Map<string, import('./cache').requestResponseList}
   */ #caches = new Map();
    constructor(){
        if (arguments[0] !== $8aeef4e92d56e564$require$kConstruct) $8aeef4e92d56e564$require$webidl.illegalConstructor();
    }
    async match(request, options = {}) {
        $8aeef4e92d56e564$require$webidl.brandCheck(this, $8aeef4e92d56e564$var$CacheStorage);
        $8aeef4e92d56e564$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.match'
        });
        request = $8aeef4e92d56e564$require$webidl.converters.RequestInfo(request);
        options = $8aeef4e92d56e564$require$webidl.converters.MultiCacheQueryOptions(options);
        // 1.
        if (options.cacheName != null) // 1.1.1.1
        {
            if (this.#caches.has(options.cacheName)) {
                // 1.1.1.1.1
                const cacheList = this.#caches.get(options.cacheName);
                const cache = new $8aeef4e92d56e564$require$Cache($8aeef4e92d56e564$require$kConstruct, cacheList);
                return await cache.match(request, options);
            }
        } else // 2.2
        for (const cacheList of this.#caches.values()){
            const cache = new $8aeef4e92d56e564$require$Cache($8aeef4e92d56e564$require$kConstruct, cacheList);
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
        $8aeef4e92d56e564$require$webidl.brandCheck(this, $8aeef4e92d56e564$var$CacheStorage);
        $8aeef4e92d56e564$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.has'
        });
        cacheName = $8aeef4e92d56e564$require$webidl.converters.DOMString(cacheName);
        // 2.1.1
        // 2.2
        return this.#caches.has(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#dom-cachestorage-open
   * @param {string} cacheName
   * @returns {Promise<Cache>}
   */ async open(cacheName) {
        $8aeef4e92d56e564$require$webidl.brandCheck(this, $8aeef4e92d56e564$var$CacheStorage);
        $8aeef4e92d56e564$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.open'
        });
        cacheName = $8aeef4e92d56e564$require$webidl.converters.DOMString(cacheName);
        // 2.1
        if (this.#caches.has(cacheName)) {
            // await caches.open('v1') !== await caches.open('v1')
            // 2.1.1
            const cache = this.#caches.get(cacheName);
            // 2.1.1.1
            return new $8aeef4e92d56e564$require$Cache($8aeef4e92d56e564$require$kConstruct, cache);
        }
        // 2.2
        const cache = [];
        // 2.3
        this.#caches.set(cacheName, cache);
        // 2.4
        return new $8aeef4e92d56e564$require$Cache($8aeef4e92d56e564$require$kConstruct, cache);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-delete
   * @param {string} cacheName
   * @returns {Promise<boolean>}
   */ async delete(cacheName) {
        $8aeef4e92d56e564$require$webidl.brandCheck(this, $8aeef4e92d56e564$var$CacheStorage);
        $8aeef4e92d56e564$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'CacheStorage.delete'
        });
        cacheName = $8aeef4e92d56e564$require$webidl.converters.DOMString(cacheName);
        return this.#caches.delete(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-keys
   * @returns {string[]}
   */ async keys() {
        $8aeef4e92d56e564$require$webidl.brandCheck(this, $8aeef4e92d56e564$var$CacheStorage);
        // 2.1
        const keys = this.#caches.keys();
        // 2.2
        return [
            ...keys
        ];
    }
}
Object.defineProperties($8aeef4e92d56e564$var$CacheStorage.prototype, {
    [Symbol.toStringTag]: {
        value: 'CacheStorage',
        configurable: true
    },
    match: $8aeef4e92d56e564$require$kEnumerableProperty,
    has: $8aeef4e92d56e564$require$kEnumerableProperty,
    open: $8aeef4e92d56e564$require$kEnumerableProperty,
    delete: $8aeef4e92d56e564$require$kEnumerableProperty,
    keys: $8aeef4e92d56e564$require$kEnumerableProperty
});
module.exports = {
    CacheStorage: $8aeef4e92d56e564$var$CacheStorage
};

});
parcelRegister("8pr0a", function(module, exports) {
module.exports = new URL("symbols.fbc21de4.js", "file:" + __filename).toString();

});

parcelRegister("j8H9K", function(module, exports) {
module.exports = new URL("cache.a9fdf86e.js", "file:" + __filename).toString();

});



