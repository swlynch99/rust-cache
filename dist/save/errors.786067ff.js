
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("2M35Y", function(module, exports) {

$parcel$export(module.exports, "codes", () => $2052771f3bc2ed21$export$e45cb6485273080e, (v) => $2052771f3bc2ed21$export$e45cb6485273080e = v);
var $2052771f3bc2ed21$export$e45cb6485273080e;
'use strict';
const $2052771f3bc2ed21$var$codes = {};
function $2052771f3bc2ed21$var$createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    class NodeError extends Base {
        constructor(arg1, arg2, arg3){
            super(getMessage(arg1, arg2, arg3));
        }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    $2052771f3bc2ed21$var$codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $2052771f3bc2ed21$var$oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i)=>String(i));
        if (len > 2) return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` + expected[len - 1];
        else if (len === 2) return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        else return `of ${thing} ${expected[0]}`;
    } else return `of ${thing} ${String(expected)}`;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function $2052771f3bc2ed21$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $2052771f3bc2ed21$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $2052771f3bc2ed21$var$includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$2052771f3bc2ed21$var$createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
$2052771f3bc2ed21$var$createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === 'string' && $2052771f3bc2ed21$var$startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    let msg;
    if ($2052771f3bc2ed21$var$endsWith(name, ' argument')) // For cases like 'first argument'
    msg = `The ${name} ${determiner} ${$2052771f3bc2ed21$var$oneOf(expected, 'type')}`;
    else {
        const type = $2052771f3bc2ed21$var$includes(name, '.') ? 'property' : 'argument';
        msg = `The "${name}" ${type} ${determiner} ${$2052771f3bc2ed21$var$oneOf(expected, 'type')}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
}, TypeError);
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
$2052771f3bc2ed21$var$createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
$2052771f3bc2ed21$var$createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
$2052771f3bc2ed21$var$createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
$2052771f3bc2ed21$var$createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
$2052771f3bc2ed21$export$e45cb6485273080e = $2052771f3bc2ed21$var$codes;

});


//# sourceMappingURL=errors.786067ff.js.map
