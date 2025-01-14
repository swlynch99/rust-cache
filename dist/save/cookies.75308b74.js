require("./parse.d9dd1a42.js");
require("./util.4d38fa7c.js");
require("./webidl.107e124b.js");
require("./headers.f20c41e6.js");


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
parcelRegister("aKgd9", function(module, exports) {
'use strict';

var $i0Gfv = parcelRequire("i0Gfv");
var $7d2ac6728926eebd$require$parseSetCookie = $i0Gfv.parseSetCookie;

var $ebf74 = parcelRequire("ebf74");
var $7d2ac6728926eebd$require$stringify = $ebf74.stringify;
var $7d2ac6728926eebd$require$getHeadersList = $ebf74.getHeadersList;

var $cpX4f = parcelRequire("cpX4f");
var $7d2ac6728926eebd$require$webidl = $cpX4f.webidl;

var $3FPVg = parcelRequire("3FPVg");
var $7d2ac6728926eebd$require$Headers = $3FPVg.Headers;
/**
 * @typedef {Object} Cookie
 * @property {string} name
 * @property {string} value
 * @property {Date|number|undefined} expires
 * @property {number|undefined} maxAge
 * @property {string|undefined} domain
 * @property {string|undefined} path
 * @property {boolean|undefined} secure
 * @property {boolean|undefined} httpOnly
 * @property {'Strict'|'Lax'|'None'} sameSite
 * @property {string[]} unparsed
 */ /**
 * @param {Headers} headers
 * @returns {Record<string, string>}
 */ function $7d2ac6728926eebd$var$getCookies(headers) {
    $7d2ac6728926eebd$require$webidl.argumentLengthCheck(arguments, 1, {
        header: 'getCookies'
    });
    $7d2ac6728926eebd$require$webidl.brandCheck(headers, $7d2ac6728926eebd$require$Headers, {
        strict: false
    });
    const cookie = headers.get('cookie');
    const out = {};
    if (!cookie) return out;
    for (const piece of cookie.split(';')){
        const [name, ...value] = piece.split('=');
        out[name.trim()] = value.join('=');
    }
    return out;
}
/**
 * @param {Headers} headers
 * @param {string} name
 * @param {{ path?: string, domain?: string }|undefined} attributes
 * @returns {void}
 */ function $7d2ac6728926eebd$var$deleteCookie(headers, name, attributes) {
    $7d2ac6728926eebd$require$webidl.argumentLengthCheck(arguments, 2, {
        header: 'deleteCookie'
    });
    $7d2ac6728926eebd$require$webidl.brandCheck(headers, $7d2ac6728926eebd$require$Headers, {
        strict: false
    });
    name = $7d2ac6728926eebd$require$webidl.converters.DOMString(name);
    attributes = $7d2ac6728926eebd$require$webidl.converters.DeleteCookieAttributes(attributes);
    // Matches behavior of
    // https://github.com/denoland/deno_std/blob/63827b16330b82489a04614027c33b7904e08be5/http/cookie.ts#L278
    $7d2ac6728926eebd$var$setCookie(headers, {
        name: name,
        value: '',
        expires: new Date(0),
        ...attributes
    });
}
/**
 * @param {Headers} headers
 * @returns {Cookie[]}
 */ function $7d2ac6728926eebd$var$getSetCookies(headers) {
    $7d2ac6728926eebd$require$webidl.argumentLengthCheck(arguments, 1, {
        header: 'getSetCookies'
    });
    $7d2ac6728926eebd$require$webidl.brandCheck(headers, $7d2ac6728926eebd$require$Headers, {
        strict: false
    });
    const cookies = $7d2ac6728926eebd$require$getHeadersList(headers).cookies;
    if (!cookies) return [];
    // In older versions of undici, cookies is a list of name:value.
    return cookies.map((pair)=>$7d2ac6728926eebd$require$parseSetCookie(Array.isArray(pair) ? pair[1] : pair));
}
/**
 * @param {Headers} headers
 * @param {Cookie} cookie
 * @returns {void}
 */ function $7d2ac6728926eebd$var$setCookie(headers, cookie) {
    $7d2ac6728926eebd$require$webidl.argumentLengthCheck(arguments, 2, {
        header: 'setCookie'
    });
    $7d2ac6728926eebd$require$webidl.brandCheck(headers, $7d2ac6728926eebd$require$Headers, {
        strict: false
    });
    cookie = $7d2ac6728926eebd$require$webidl.converters.Cookie(cookie);
    const str = $7d2ac6728926eebd$require$stringify(cookie);
    if (str) headers.append('Set-Cookie', $7d2ac6728926eebd$require$stringify(cookie));
}
$7d2ac6728926eebd$require$webidl.converters.DeleteCookieAttributes = $7d2ac6728926eebd$require$webidl.dictionaryConverter([
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.DOMString),
        key: 'path',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.DOMString),
        key: 'domain',
        defaultValue: null
    }
]);
$7d2ac6728926eebd$require$webidl.converters.Cookie = $7d2ac6728926eebd$require$webidl.dictionaryConverter([
    {
        converter: $7d2ac6728926eebd$require$webidl.converters.DOMString,
        key: 'name'
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.converters.DOMString,
        key: 'value'
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter((value)=>{
            if (typeof value === 'number') return $7d2ac6728926eebd$require$webidl.converters['unsigned long long'](value);
            return new Date(value);
        }),
        key: 'expires',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters['long long']),
        key: 'maxAge',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.DOMString),
        key: 'domain',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.DOMString),
        key: 'path',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.boolean),
        key: 'secure',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.nullableConverter($7d2ac6728926eebd$require$webidl.converters.boolean),
        key: 'httpOnly',
        defaultValue: null
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.converters.USVString,
        key: 'sameSite',
        allowedValues: [
            'Strict',
            'Lax',
            'None'
        ]
    },
    {
        converter: $7d2ac6728926eebd$require$webidl.sequenceConverter($7d2ac6728926eebd$require$webidl.converters.DOMString),
        key: 'unparsed',
        defaultValue: []
    }
]);
module.exports = {
    getCookies: $7d2ac6728926eebd$var$getCookies,
    deleteCookie: $7d2ac6728926eebd$var$deleteCookie,
    getSetCookies: $7d2ac6728926eebd$var$getSetCookies,
    setCookie: $7d2ac6728926eebd$var$setCookie
};

});
parcelRegister("i0Gfv", function(module, exports) {
module.exports = new URL("parse.d9dd1a42.js", "file:" + __filename).toString();

});



