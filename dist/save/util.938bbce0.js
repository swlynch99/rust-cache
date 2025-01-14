"use strict";
// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $3a1e1e68a6fbe7c7$var$_LRUCache_instances, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, $3a1e1e68a6fbe7c7$var$_LRUCache_moveToEnd, $3a1e1e68a6fbe7c7$var$_LRUCache_evict;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.LRUCache = void 0;
module.exports.snakeToCamel = $3a1e1e68a6fbe7c7$var$snakeToCamel;
module.exports.originalOrCamelOptions = $3a1e1e68a6fbe7c7$var$originalOrCamelOptions;
/**
 * Returns the camel case of a provided string.
 *
 * @remarks
 *
 * Match any `_` and not `_` pair, then return the uppercase of the not `_`
 * character.
 *
 * @internal
 *
 * @param str the string to convert
 * @returns the camelCase'd string
 */ function $3a1e1e68a6fbe7c7$var$snakeToCamel(str) {
    return str.replace(/([_][^_])/g, (match)=>match.slice(1).toUpperCase());
}
/**
 * Get the value of `obj[key]` or `obj[camelCaseKey]`, with a preference
 * for original, non-camelCase key.
 *
 * @param obj object to lookup a value in
 * @returns a `get` function for getting `obj[key || snakeKey]`, if available
 */ function $3a1e1e68a6fbe7c7$var$originalOrCamelOptions(obj) {
    /**
     *
     * @param key an index of object, preferably snake_case
     * @returns the value `obj[key || snakeKey]`, if available
     */ function get(key) {
        var _a;
        const o = obj || {};
        return (_a = o[key]) !== null && _a !== void 0 ? _a : o[$3a1e1e68a6fbe7c7$var$snakeToCamel(key)];
    }
    return {
        get: get
    };
}
/**
 * A simple LRU cache utility.
 * Not meant for external usage.
 *
 * @experimental
 * @internal
 */ class $3a1e1e68a6fbe7c7$var$LRUCache {
    constructor(options){
        $3a1e1e68a6fbe7c7$var$_LRUCache_instances.add(this);
        /**
         * Maps are in order. Thus, the older item is the first item.
         *
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
         */ $3a1e1e68a6fbe7c7$var$_LRUCache_cache.set(this, new Map());
        this.capacity = options.capacity;
        this.maxAge = options.maxAge;
    }
    /**
     * Add an item to the cache.
     *
     * @param key the key to upsert
     * @param value the value of the key
     */ set(key, value) {
        $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_instances, "m", $3a1e1e68a6fbe7c7$var$_LRUCache_moveToEnd).call(this, key, value);
        $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_instances, "m", $3a1e1e68a6fbe7c7$var$_LRUCache_evict).call(this);
    }
    /**
     * Get an item from the cache.
     *
     * @param key the key to retrieve
     */ get(key) {
        const item = $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").get(key);
        if (!item) return;
        $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_instances, "m", $3a1e1e68a6fbe7c7$var$_LRUCache_moveToEnd).call(this, key, item.value);
        $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_instances, "m", $3a1e1e68a6fbe7c7$var$_LRUCache_evict).call(this);
        return item.value;
    }
}
module.exports.LRUCache = $3a1e1e68a6fbe7c7$var$LRUCache;
$3a1e1e68a6fbe7c7$var$_LRUCache_cache = new WeakMap(), $3a1e1e68a6fbe7c7$var$_LRUCache_instances = new WeakSet(), $3a1e1e68a6fbe7c7$var$_LRUCache_moveToEnd = function _LRUCache_moveToEnd(key, value) {
    $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").delete(key);
    $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").set(key, {
        value: value,
        lastAccessed: Date.now()
    });
}, $3a1e1e68a6fbe7c7$var$_LRUCache_evict = function _LRUCache_evict() {
    const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;
    /**
     * Because we know Maps are in order, this item is both the
     * last item in the list (capacity) and oldest (maxAge).
     */ let oldestItem = $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").entries().next();
    while(!oldestItem.done && ($3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").size > this.capacity || // too many
    oldestItem.value[1].lastAccessed < cutoffDate // too old
    )){
        $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").delete(oldestItem.value[0]);
        oldestItem = $3a1e1e68a6fbe7c7$var$__classPrivateFieldGet(this, $3a1e1e68a6fbe7c7$var$_LRUCache_cache, "f").entries().next();
    }
};


