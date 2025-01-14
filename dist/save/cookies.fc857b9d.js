require("./parse.e0a5663d.js");
require("./util.d296b80c.js");
require("./webidl.35d389df.js");
require("./headers.e172861b.js");


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
parcelRegister("bCvnC", function(module, exports) {
'use strict';

var $cfi9L = parcelRequire("cfi9L");
var $875b95ba23af0dfc$require$parseSetCookie = $cfi9L.parseSetCookie;

var $5ebk3 = parcelRequire("5ebk3");
var $875b95ba23af0dfc$require$stringify = $5ebk3.stringify;
var $875b95ba23af0dfc$require$getHeadersList = $5ebk3.getHeadersList;

var $iPB2Q = parcelRequire("iPB2Q");
var $875b95ba23af0dfc$require$webidl = $iPB2Q.webidl;

var $3wPNm = parcelRequire("3wPNm");
var $875b95ba23af0dfc$require$Headers = $3wPNm.Headers;
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
 */ function $875b95ba23af0dfc$var$getCookies(headers) {
    $875b95ba23af0dfc$require$webidl.argumentLengthCheck(arguments, 1, {
        header: 'getCookies'
    });
    $875b95ba23af0dfc$require$webidl.brandCheck(headers, $875b95ba23af0dfc$require$Headers, {
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
 */ function $875b95ba23af0dfc$var$deleteCookie(headers, name, attributes) {
    $875b95ba23af0dfc$require$webidl.argumentLengthCheck(arguments, 2, {
        header: 'deleteCookie'
    });
    $875b95ba23af0dfc$require$webidl.brandCheck(headers, $875b95ba23af0dfc$require$Headers, {
        strict: false
    });
    name = $875b95ba23af0dfc$require$webidl.converters.DOMString(name);
    attributes = $875b95ba23af0dfc$require$webidl.converters.DeleteCookieAttributes(attributes);
    // Matches behavior of
    // https://github.com/denoland/deno_std/blob/63827b16330b82489a04614027c33b7904e08be5/http/cookie.ts#L278
    $875b95ba23af0dfc$var$setCookie(headers, {
        name: name,
        value: '',
        expires: new Date(0),
        ...attributes
    });
}
/**
 * @param {Headers} headers
 * @returns {Cookie[]}
 */ function $875b95ba23af0dfc$var$getSetCookies(headers) {
    $875b95ba23af0dfc$require$webidl.argumentLengthCheck(arguments, 1, {
        header: 'getSetCookies'
    });
    $875b95ba23af0dfc$require$webidl.brandCheck(headers, $875b95ba23af0dfc$require$Headers, {
        strict: false
    });
    const cookies = $875b95ba23af0dfc$require$getHeadersList(headers).cookies;
    if (!cookies) return [];
    // In older versions of undici, cookies is a list of name:value.
    return cookies.map((pair)=>$875b95ba23af0dfc$require$parseSetCookie(Array.isArray(pair) ? pair[1] : pair));
}
/**
 * @param {Headers} headers
 * @param {Cookie} cookie
 * @returns {void}
 */ function $875b95ba23af0dfc$var$setCookie(headers, cookie) {
    $875b95ba23af0dfc$require$webidl.argumentLengthCheck(arguments, 2, {
        header: 'setCookie'
    });
    $875b95ba23af0dfc$require$webidl.brandCheck(headers, $875b95ba23af0dfc$require$Headers, {
        strict: false
    });
    cookie = $875b95ba23af0dfc$require$webidl.converters.Cookie(cookie);
    const str = $875b95ba23af0dfc$require$stringify(cookie);
    if (str) headers.append('Set-Cookie', $875b95ba23af0dfc$require$stringify(cookie));
}
$875b95ba23af0dfc$require$webidl.converters.DeleteCookieAttributes = $875b95ba23af0dfc$require$webidl.dictionaryConverter([
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.DOMString),
        key: 'path',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.DOMString),
        key: 'domain',
        defaultValue: null
    }
]);
$875b95ba23af0dfc$require$webidl.converters.Cookie = $875b95ba23af0dfc$require$webidl.dictionaryConverter([
    {
        converter: $875b95ba23af0dfc$require$webidl.converters.DOMString,
        key: 'name'
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.converters.DOMString,
        key: 'value'
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter((value)=>{
            if (typeof value === 'number') return $875b95ba23af0dfc$require$webidl.converters['unsigned long long'](value);
            return new Date(value);
        }),
        key: 'expires',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters['long long']),
        key: 'maxAge',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.DOMString),
        key: 'domain',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.DOMString),
        key: 'path',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.boolean),
        key: 'secure',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.nullableConverter($875b95ba23af0dfc$require$webidl.converters.boolean),
        key: 'httpOnly',
        defaultValue: null
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.converters.USVString,
        key: 'sameSite',
        allowedValues: [
            'Strict',
            'Lax',
            'None'
        ]
    },
    {
        converter: $875b95ba23af0dfc$require$webidl.sequenceConverter($875b95ba23af0dfc$require$webidl.converters.DOMString),
        key: 'unparsed',
        defaultValue: []
    }
]);
module.exports = {
    getCookies: $875b95ba23af0dfc$var$getCookies,
    deleteCookie: $875b95ba23af0dfc$var$deleteCookie,
    getSetCookies: $875b95ba23af0dfc$var$getSetCookies,
    setCookie: $875b95ba23af0dfc$var$setCookie
};

});
parcelRegister("cfi9L", function(module, exports) {
module.exports = new URL("parse.e0a5663d.js", "file:" + __filename).toString();

});



//# sourceMappingURL=cookies.fc857b9d.js.map
