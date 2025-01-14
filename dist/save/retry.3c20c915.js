require("./retry_operation.fff89ab4.js");


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
parcelRegister("a4jAC", function(module, exports) {

var $kCHoA = parcelRequire("kCHoA");
exports.operation = function(options) {
    var timeouts = exports.timeouts(options);
    return new $kCHoA(timeouts, {
        forever: options && (options.forever || options.retries === Infinity),
        unref: options && options.unref,
        maxRetryTime: options && options.maxRetryTime
    });
};
exports.timeouts = function(options) {
    if (options instanceof Array) return [].concat(options);
    var opts = {
        retries: 10,
        factor: 2,
        minTimeout: 1000,
        maxTimeout: Infinity,
        randomize: false
    };
    for(var key in options)opts[key] = options[key];
    if (opts.minTimeout > opts.maxTimeout) throw new Error('minTimeout is greater than maxTimeout');
    var timeouts = [];
    for(var i = 0; i < opts.retries; i++)timeouts.push(this.createTimeout(i, opts));
    if (options && options.forever && !timeouts.length) timeouts.push(this.createTimeout(i, opts));
    // sort the array numerically ascending
    timeouts.sort(function(a, b) {
        return a - b;
    });
    return timeouts;
};
exports.createTimeout = function(attempt, opts) {
    var random = opts.randomize ? Math.random() + 1 : 1;
    var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
    timeout = Math.min(timeout, opts.maxTimeout);
    return timeout;
};
exports.wrap = function(obj, options, methods) {
    if (options instanceof Array) {
        methods = options;
        options = null;
    }
    if (!methods) {
        methods = [];
        for(var key in obj)if (typeof obj[key] === 'function') methods.push(key);
    }
    for(var i = 0; i < methods.length; i++){
        var method = methods[i];
        var original = obj[method];
        obj[method] = (function retryWrapper(original) {
            var op = exports.operation(options);
            var args = Array.prototype.slice.call(arguments, 1);
            var callback = args.pop();
            args.push(function(err) {
                if (op.retry(err)) return;
                if (err) arguments[0] = op.mainError();
                callback.apply(this, arguments);
            });
            op.attempt(function() {
                original.apply(obj, args);
            });
        }).bind(obj, original);
        obj[method].options = options;
    }
};

});
parcelRegister("kCHoA", function(module, exports) {
module.exports = new URL("retry_operation.fff89ab4.js", "file:" + __filename).toString();

});



//# sourceMappingURL=retry.3c20c915.js.map
