require("./retry.23da50a1.js");


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
parcelRegister("7yoQv", function(module, exports) {
// Packages

var $ekvcb = parcelRequire("ekvcb");
function $57fefb3eb1356996$var$retry(fn, opts) {
    function run(resolve, reject) {
        var options = opts || {};
        var op;
        // Default `randomize` to true
        if (!('randomize' in options)) options.randomize = true;
        op = $ekvcb.operation(options);
        // We allow the user to abort retrying
        // this makes sense in the cases where
        // knowledge is obtained that retrying
        // would be futile (e.g.: auth errors)
        function bail(err) {
            reject(err || new Error('Aborted'));
        }
        function onError(err, num) {
            if (err.bail) {
                bail(err);
                return;
            }
            if (!op.retry(err)) reject(op.mainError());
            else if (options.onRetry) options.onRetry(err, num);
        }
        function runAttempt(num) {
            var val;
            try {
                val = fn(bail, num);
            } catch (err) {
                onError(err, num);
                return;
            }
            Promise.resolve(val).then(resolve).catch(function catchIt(err) {
                onError(err, num);
            });
        }
        op.attempt(runAttempt);
    }
    return new Promise(run);
}
module.exports = $57fefb3eb1356996$var$retry;

});
parcelRegister("ekvcb", function(module, exports) {
module.exports = new URL("retry.23da50a1.js", "file:" + __filename).toString();

});



