
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
parcelRegister("3oEUF", function(module, exports) {
/**
 * Helpers.
 */ var $27935972ee1c0fc7$var$s = 1000;
var $27935972ee1c0fc7$var$m = $27935972ee1c0fc7$var$s * 60;
var $27935972ee1c0fc7$var$h = $27935972ee1c0fc7$var$m * 60;
var $27935972ee1c0fc7$var$d = $27935972ee1c0fc7$var$h * 24;
var $27935972ee1c0fc7$var$w = $27935972ee1c0fc7$var$d * 7;
var $27935972ee1c0fc7$var$y = $27935972ee1c0fc7$var$d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) return $27935972ee1c0fc7$var$parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? $27935972ee1c0fc7$var$fmtLong(val) : $27935972ee1c0fc7$var$fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function $27935972ee1c0fc7$var$parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * $27935972ee1c0fc7$var$y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * $27935972ee1c0fc7$var$w;
        case 'days':
        case 'day':
        case 'd':
            return n * $27935972ee1c0fc7$var$d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * $27935972ee1c0fc7$var$h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * $27935972ee1c0fc7$var$m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * $27935972ee1c0fc7$var$s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function $27935972ee1c0fc7$var$fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= $27935972ee1c0fc7$var$d) return Math.round(ms / $27935972ee1c0fc7$var$d) + 'd';
    if (msAbs >= $27935972ee1c0fc7$var$h) return Math.round(ms / $27935972ee1c0fc7$var$h) + 'h';
    if (msAbs >= $27935972ee1c0fc7$var$m) return Math.round(ms / $27935972ee1c0fc7$var$m) + 'm';
    if (msAbs >= $27935972ee1c0fc7$var$s) return Math.round(ms / $27935972ee1c0fc7$var$s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function $27935972ee1c0fc7$var$fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= $27935972ee1c0fc7$var$d) return $27935972ee1c0fc7$var$plural(ms, msAbs, $27935972ee1c0fc7$var$d, 'day');
    if (msAbs >= $27935972ee1c0fc7$var$h) return $27935972ee1c0fc7$var$plural(ms, msAbs, $27935972ee1c0fc7$var$h, 'hour');
    if (msAbs >= $27935972ee1c0fc7$var$m) return $27935972ee1c0fc7$var$plural(ms, msAbs, $27935972ee1c0fc7$var$m, 'minute');
    if (msAbs >= $27935972ee1c0fc7$var$s) return $27935972ee1c0fc7$var$plural(ms, msAbs, $27935972ee1c0fc7$var$s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function $27935972ee1c0fc7$var$plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

});


//# sourceMappingURL=ms.2b8d7856.js.map
