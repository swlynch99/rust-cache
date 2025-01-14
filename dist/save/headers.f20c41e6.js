require("./symbols.b8a391fa.js");
require("./symbols.71ce8940.js");
require("./util.c7a5ec55.js");
require("./util.2100f7c8.js");
require("./webidl.107e124b.js");
var $8CZdr$assert = require("assert");


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
parcelRegister("3FPVg", function(module, exports) {
// https://github.com/Ethan-Arrowood/undici-fetch
'use strict';

var $dSiuY = parcelRequire("dSiuY");
var $2acd7a316917da95$require$kHeadersList = $dSiuY.kHeadersList;
var $2acd7a316917da95$require$kConstruct = $dSiuY.kConstruct;

var $3isYS = parcelRequire("3isYS");
var $2acd7a316917da95$require$kGuard = $3isYS.kGuard;

var $iiSZx = parcelRequire("iiSZx");
var $2acd7a316917da95$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;

var $eXsCL = parcelRequire("eXsCL");
var $2acd7a316917da95$require$makeIterator = $eXsCL.makeIterator;
var $2acd7a316917da95$require$isValidHeaderName = $eXsCL.isValidHeaderName;
var $2acd7a316917da95$require$isValidHeaderValue = $eXsCL.isValidHeaderValue;

var $cpX4f = parcelRequire("cpX4f");
var $2acd7a316917da95$require$webidl = $cpX4f.webidl;

const $2acd7a316917da95$var$kHeadersMap = Symbol('headers map');
const $2acd7a316917da95$var$kHeadersSortedMap = Symbol('headers map sorted');
/**
 * @param {number} code
 */ function $2acd7a316917da95$var$isHTTPWhiteSpaceCharCode(code) {
    return code === 0x00a || code === 0x00d || code === 0x009 || code === 0x020;
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-header-value-normalize
 * @param {string} potentialValue
 */ function $2acd7a316917da95$var$headerValueNormalize(potentialValue) {
    //  To normalize a byte sequence potentialValue, remove
    //  any leading and trailing HTTP whitespace bytes from
    //  potentialValue.
    let i = 0;
    let j = potentialValue.length;
    while(j > i && $2acd7a316917da95$var$isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(j - 1)))--j;
    while(j > i && $2acd7a316917da95$var$isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(i)))++i;
    return i === 0 && j === potentialValue.length ? potentialValue : potentialValue.substring(i, j);
}
function $2acd7a316917da95$var$fill(headers, object) {
    // To fill a Headers object headers with a given object object, run these steps:
    // 1. If object is a sequence, then for each header in object:
    // Note: webidl conversion to array has already been done.
    if (Array.isArray(object)) for(let i = 0; i < object.length; ++i){
        const header = object[i];
        // 1. If header does not contain exactly two items, then throw a TypeError.
        if (header.length !== 2) throw $2acd7a316917da95$require$webidl.errors.exception({
            header: 'Headers constructor',
            message: `expected name/value pair to be length 2, found ${header.length}.`
        });
        // 2. Append (header’s first item, header’s second item) to headers.
        $2acd7a316917da95$var$appendHeader(headers, header[0], header[1]);
    }
    else if (typeof object === 'object' && object !== null) {
        // Note: null should throw
        // 2. Otherwise, object is a record, then for each key → value in object,
        //    append (key, value) to headers
        const keys = Object.keys(object);
        for(let i = 0; i < keys.length; ++i)$2acd7a316917da95$var$appendHeader(headers, keys[i], object[keys[i]]);
    } else throw $2acd7a316917da95$require$webidl.errors.conversionFailed({
        prefix: 'Headers constructor',
        argument: 'Argument 1',
        types: [
            'sequence<sequence<ByteString>>',
            'record<ByteString, ByteString>'
        ]
    });
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-headers-append
 */ function $2acd7a316917da95$var$appendHeader(headers, name, value) {
    // 1. Normalize value.
    value = $2acd7a316917da95$var$headerValueNormalize(value);
    // 2. If name is not a header name or value is not a
    //    header value, then throw a TypeError.
    if (!$2acd7a316917da95$require$isValidHeaderName(name)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
        prefix: 'Headers.append',
        value: name,
        type: 'header name'
    });
    else if (!$2acd7a316917da95$require$isValidHeaderValue(value)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
        prefix: 'Headers.append',
        value: value,
        type: 'header value'
    });
    // 3. If headers’s guard is "immutable", then throw a TypeError.
    // 4. Otherwise, if headers’s guard is "request" and name is a
    //    forbidden header name, return.
    // Note: undici does not implement forbidden header names
    if (headers[$2acd7a316917da95$require$kGuard] === 'immutable') throw new TypeError('immutable');
    else headers[$2acd7a316917da95$require$kGuard];
    // 6. Otherwise, if headers’s guard is "response" and name is a
    //    forbidden response-header name, return.
    // 7. Append (name, value) to headers’s header list.
    return headers[$2acd7a316917da95$require$kHeadersList].append(name, value);
// 8. If headers’s guard is "request-no-cors", then remove
//    privileged no-CORS request headers from headers
}
class $2acd7a316917da95$var$HeadersList {
    /** @type {[string, string][]|null} */ cookies = null;
    constructor(init){
        if (init instanceof $2acd7a316917da95$var$HeadersList) {
            this[$2acd7a316917da95$var$kHeadersMap] = new Map(init[$2acd7a316917da95$var$kHeadersMap]);
            this[$2acd7a316917da95$var$kHeadersSortedMap] = init[$2acd7a316917da95$var$kHeadersSortedMap];
            this.cookies = init.cookies === null ? null : [
                ...init.cookies
            ];
        } else {
            this[$2acd7a316917da95$var$kHeadersMap] = new Map(init);
            this[$2acd7a316917da95$var$kHeadersSortedMap] = null;
        }
    }
    // https://fetch.spec.whatwg.org/#header-list-contains
    contains(name) {
        // A header list list contains a header name name if list
        // contains a header whose name is a byte-case-insensitive
        // match for name.
        name = name.toLowerCase();
        return this[$2acd7a316917da95$var$kHeadersMap].has(name);
    }
    clear() {
        this[$2acd7a316917da95$var$kHeadersMap].clear();
        this[$2acd7a316917da95$var$kHeadersSortedMap] = null;
        this.cookies = null;
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-append
    append(name, value) {
        this[$2acd7a316917da95$var$kHeadersSortedMap] = null;
        // 1. If list contains name, then set name to the first such
        //    header’s name.
        const lowercaseName = name.toLowerCase();
        const exists = this[$2acd7a316917da95$var$kHeadersMap].get(lowercaseName);
        // 2. Append (name, value) to list.
        if (exists) {
            const delimiter = lowercaseName === 'cookie' ? '; ' : ', ';
            this[$2acd7a316917da95$var$kHeadersMap].set(lowercaseName, {
                name: exists.name,
                value: `${exists.value}${delimiter}${value}`
            });
        } else this[$2acd7a316917da95$var$kHeadersMap].set(lowercaseName, {
            name: name,
            value: value
        });
        if (lowercaseName === 'set-cookie') {
            this.cookies ??= [];
            this.cookies.push(value);
        }
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-set
    set(name, value) {
        this[$2acd7a316917da95$var$kHeadersSortedMap] = null;
        const lowercaseName = name.toLowerCase();
        if (lowercaseName === 'set-cookie') this.cookies = [
            value
        ];
        // 1. If list contains name, then set the value of
        //    the first such header to value and remove the
        //    others.
        // 2. Otherwise, append header (name, value) to list.
        this[$2acd7a316917da95$var$kHeadersMap].set(lowercaseName, {
            name: name,
            value: value
        });
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-delete
    delete(name) {
        this[$2acd7a316917da95$var$kHeadersSortedMap] = null;
        name = name.toLowerCase();
        if (name === 'set-cookie') this.cookies = null;
        this[$2acd7a316917da95$var$kHeadersMap].delete(name);
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-get
    get(name) {
        const value = this[$2acd7a316917da95$var$kHeadersMap].get(name.toLowerCase());
        // 1. If list does not contain name, then return null.
        // 2. Return the values of all headers in list whose name
        //    is a byte-case-insensitive match for name,
        //    separated from each other by 0x2C 0x20, in order.
        return value === undefined ? null : value.value;
    }
    *[Symbol.iterator]() {
        // use the lowercased name
        for (const [name, { value: value }] of this[$2acd7a316917da95$var$kHeadersMap])yield [
            name,
            value
        ];
    }
    get entries() {
        const headers = {};
        if (this[$2acd7a316917da95$var$kHeadersMap].size) for (const { name: name, value: value } of this[$2acd7a316917da95$var$kHeadersMap].values())headers[name] = value;
        return headers;
    }
}
// https://fetch.spec.whatwg.org/#headers-class
class $2acd7a316917da95$var$Headers {
    constructor(init){
        if (init === $2acd7a316917da95$require$kConstruct) return;
        this[$2acd7a316917da95$require$kHeadersList] = new $2acd7a316917da95$var$HeadersList();
        // The new Headers(init) constructor steps are:
        // 1. Set this’s guard to "none".
        this[$2acd7a316917da95$require$kGuard] = 'none';
        // 2. If init is given, then fill this with init.
        if (init !== undefined) {
            init = $2acd7a316917da95$require$webidl.converters.HeadersInit(init);
            $2acd7a316917da95$var$fill(this, init);
        }
    }
    // https://fetch.spec.whatwg.org/#dom-headers-append
    append(name, value) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'Headers.append'
        });
        name = $2acd7a316917da95$require$webidl.converters.ByteString(name);
        value = $2acd7a316917da95$require$webidl.converters.ByteString(value);
        return $2acd7a316917da95$var$appendHeader(this, name, value);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    delete(name) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Headers.delete'
        });
        name = $2acd7a316917da95$require$webidl.converters.ByteString(name);
        // 1. If name is not a header name, then throw a TypeError.
        if (!$2acd7a316917da95$require$isValidHeaderName(name)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
            prefix: 'Headers.delete',
            value: name,
            type: 'header name'
        });
        // 2. If this’s guard is "immutable", then throw a TypeError.
        // 3. Otherwise, if this’s guard is "request" and name is a
        //    forbidden header name, return.
        // 4. Otherwise, if this’s guard is "request-no-cors", name
        //    is not a no-CORS-safelisted request-header name, and
        //    name is not a privileged no-CORS request-header name,
        //    return.
        // 5. Otherwise, if this’s guard is "response" and name is
        //    a forbidden response-header name, return.
        // Note: undici does not implement forbidden header names
        if (this[$2acd7a316917da95$require$kGuard] === 'immutable') throw new TypeError('immutable');
        else this[$2acd7a316917da95$require$kGuard];
        // 6. If this’s header list does not contain name, then
        //    return.
        if (!this[$2acd7a316917da95$require$kHeadersList].contains(name)) return;
        // 7. Delete name from this’s header list.
        // 8. If this’s guard is "request-no-cors", then remove
        //    privileged no-CORS request headers from this.
        this[$2acd7a316917da95$require$kHeadersList].delete(name);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-get
    get(name) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Headers.get'
        });
        name = $2acd7a316917da95$require$webidl.converters.ByteString(name);
        // 1. If name is not a header name, then throw a TypeError.
        if (!$2acd7a316917da95$require$isValidHeaderName(name)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
            prefix: 'Headers.get',
            value: name,
            type: 'header name'
        });
        // 2. Return the result of getting name from this’s header
        //    list.
        return this[$2acd7a316917da95$require$kHeadersList].get(name);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-has
    has(name) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Headers.has'
        });
        name = $2acd7a316917da95$require$webidl.converters.ByteString(name);
        // 1. If name is not a header name, then throw a TypeError.
        if (!$2acd7a316917da95$require$isValidHeaderName(name)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
            prefix: 'Headers.has',
            value: name,
            type: 'header name'
        });
        // 2. Return true if this’s header list contains name;
        //    otherwise false.
        return this[$2acd7a316917da95$require$kHeadersList].contains(name);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-set
    set(name, value) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 2, {
            header: 'Headers.set'
        });
        name = $2acd7a316917da95$require$webidl.converters.ByteString(name);
        value = $2acd7a316917da95$require$webidl.converters.ByteString(value);
        // 1. Normalize value.
        value = $2acd7a316917da95$var$headerValueNormalize(value);
        // 2. If name is not a header name or value is not a
        //    header value, then throw a TypeError.
        if (!$2acd7a316917da95$require$isValidHeaderName(name)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
            prefix: 'Headers.set',
            value: name,
            type: 'header name'
        });
        else if (!$2acd7a316917da95$require$isValidHeaderValue(value)) throw $2acd7a316917da95$require$webidl.errors.invalidArgument({
            prefix: 'Headers.set',
            value: value,
            type: 'header value'
        });
        // 3. If this’s guard is "immutable", then throw a TypeError.
        // 4. Otherwise, if this’s guard is "request" and name is a
        //    forbidden header name, return.
        // 5. Otherwise, if this’s guard is "request-no-cors" and
        //    name/value is not a no-CORS-safelisted request-header,
        //    return.
        // 6. Otherwise, if this’s guard is "response" and name is a
        //    forbidden response-header name, return.
        // Note: undici does not implement forbidden header names
        if (this[$2acd7a316917da95$require$kGuard] === 'immutable') throw new TypeError('immutable');
        else this[$2acd7a316917da95$require$kGuard];
        // 7. Set (name, value) in this’s header list.
        // 8. If this’s guard is "request-no-cors", then remove
        //    privileged no-CORS request headers from this
        this[$2acd7a316917da95$require$kHeadersList].set(name, value);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
    getSetCookie() {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        // 1. If this’s header list does not contain `Set-Cookie`, then return « ».
        // 2. Return the values of all headers in this’s header list whose name is
        //    a byte-case-insensitive match for `Set-Cookie`, in order.
        const list = this[$2acd7a316917da95$require$kHeadersList].cookies;
        if (list) return [
            ...list
        ];
        return [];
    }
    // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
    get [$2acd7a316917da95$var$kHeadersSortedMap]() {
        if (this[$2acd7a316917da95$require$kHeadersList][$2acd7a316917da95$var$kHeadersSortedMap]) return this[$2acd7a316917da95$require$kHeadersList][$2acd7a316917da95$var$kHeadersSortedMap];
        // 1. Let headers be an empty list of headers with the key being the name
        //    and value the value.
        const headers = [];
        // 2. Let names be the result of convert header names to a sorted-lowercase
        //    set with all the names of the headers in list.
        const names = [
            ...this[$2acd7a316917da95$require$kHeadersList]
        ].sort((a, b)=>a[0] < b[0] ? -1 : 1);
        const cookies = this[$2acd7a316917da95$require$kHeadersList].cookies;
        // 3. For each name of names:
        for(let i = 0; i < names.length; ++i){
            const [name, value] = names[i];
            // 1. If name is `set-cookie`, then:
            if (name === 'set-cookie') // 1. Let values be a list of all values of headers in list whose name
            //    is a byte-case-insensitive match for name, in order.
            // 2. For each value of values:
            // 1. Append (name, value) to headers.
            for(let j = 0; j < cookies.length; ++j)headers.push([
                name,
                cookies[j]
            ]);
            else {
                // 2. Otherwise:
                // 1. Let value be the result of getting name from list.
                // 2. Assert: value is non-null.
                $8CZdr$assert(value !== null);
                // 3. Append (name, value) to headers.
                headers.push([
                    name,
                    value
                ]);
            }
        }
        this[$2acd7a316917da95$require$kHeadersList][$2acd7a316917da95$var$kHeadersSortedMap] = headers;
        // 4. Return headers.
        return headers;
    }
    keys() {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        if (this[$2acd7a316917da95$require$kGuard] === 'immutable') {
            const value = this[$2acd7a316917da95$var$kHeadersSortedMap];
            return $2acd7a316917da95$require$makeIterator(()=>value, 'Headers', 'key');
        }
        return $2acd7a316917da95$require$makeIterator(()=>[
                ...this[$2acd7a316917da95$var$kHeadersSortedMap].values()
            ], 'Headers', 'key');
    }
    values() {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        if (this[$2acd7a316917da95$require$kGuard] === 'immutable') {
            const value = this[$2acd7a316917da95$var$kHeadersSortedMap];
            return $2acd7a316917da95$require$makeIterator(()=>value, 'Headers', 'value');
        }
        return $2acd7a316917da95$require$makeIterator(()=>[
                ...this[$2acd7a316917da95$var$kHeadersSortedMap].values()
            ], 'Headers', 'value');
    }
    entries() {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        if (this[$2acd7a316917da95$require$kGuard] === 'immutable') {
            const value = this[$2acd7a316917da95$var$kHeadersSortedMap];
            return $2acd7a316917da95$require$makeIterator(()=>value, 'Headers', 'key+value');
        }
        return $2acd7a316917da95$require$makeIterator(()=>[
                ...this[$2acd7a316917da95$var$kHeadersSortedMap].values()
            ], 'Headers', 'key+value');
    }
    /**
   * @param {(value: string, key: string, self: Headers) => void} callbackFn
   * @param {unknown} thisArg
   */ forEach(callbackFn, thisArg = globalThis) {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        $2acd7a316917da95$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'Headers.forEach'
        });
        if (typeof callbackFn !== 'function') throw new TypeError("Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'.");
        for (const [key, value] of this)callbackFn.apply(thisArg, [
            value,
            key,
            this
        ]);
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        $2acd7a316917da95$require$webidl.brandCheck(this, $2acd7a316917da95$var$Headers);
        return this[$2acd7a316917da95$require$kHeadersList];
    }
}
$2acd7a316917da95$var$Headers.prototype[Symbol.iterator] = $2acd7a316917da95$var$Headers.prototype.entries;
Object.defineProperties($2acd7a316917da95$var$Headers.prototype, {
    append: $2acd7a316917da95$require$kEnumerableProperty,
    delete: $2acd7a316917da95$require$kEnumerableProperty,
    get: $2acd7a316917da95$require$kEnumerableProperty,
    has: $2acd7a316917da95$require$kEnumerableProperty,
    set: $2acd7a316917da95$require$kEnumerableProperty,
    getSetCookie: $2acd7a316917da95$require$kEnumerableProperty,
    keys: $2acd7a316917da95$require$kEnumerableProperty,
    values: $2acd7a316917da95$require$kEnumerableProperty,
    entries: $2acd7a316917da95$require$kEnumerableProperty,
    forEach: $2acd7a316917da95$require$kEnumerableProperty,
    [Symbol.iterator]: {
        enumerable: false
    },
    [Symbol.toStringTag]: {
        value: 'Headers',
        configurable: true
    }
});
$2acd7a316917da95$require$webidl.converters.HeadersInit = function(V) {
    if ($2acd7a316917da95$require$webidl.util.Type(V) === 'Object') {
        if (V[Symbol.iterator]) return $2acd7a316917da95$require$webidl.converters['sequence<sequence<ByteString>>'](V);
        return $2acd7a316917da95$require$webidl.converters['record<ByteString, ByteString>'](V);
    }
    throw $2acd7a316917da95$require$webidl.errors.conversionFailed({
        prefix: 'Headers constructor',
        argument: 'Argument 1',
        types: [
            'sequence<sequence<ByteString>>',
            'record<ByteString, ByteString>'
        ]
    });
};
module.exports = {
    fill: $2acd7a316917da95$var$fill,
    Headers: $2acd7a316917da95$var$Headers,
    HeadersList: $2acd7a316917da95$var$HeadersList
};

});


