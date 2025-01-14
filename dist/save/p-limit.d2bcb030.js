require("./yocto-queue.9053387c.js");


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
parcelRegister("2Kx0r", function(module, exports) {
'use strict';

var $1tmhl = parcelRequire("1tmhl");
const $20097af5a7578dd8$var$pLimit = (concurrency)=>{
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    const queue = new $1tmhl();
    let activeCount = 0;
    const next = ()=>{
        activeCount--;
        if (queue.size > 0) queue.dequeue()();
    };
    const run = async (fn, resolve, ...args)=>{
        activeCount++;
        const result = (async ()=>fn(...args))();
        resolve(result);
        try {
            await result;
        } catch  {}
        next();
    };
    const enqueue = (fn, resolve, ...args)=>{
        queue.enqueue(run.bind(null, fn, resolve, ...args));
        (async ()=>{
            // This function needs to wait until the next microtask before comparing
            // `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
            // when the run function is dequeued and called. The comparison in the if-statement
            // needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
            await Promise.resolve();
            if (activeCount < concurrency && queue.size > 0) queue.dequeue()();
        })();
    };
    const generator = (fn, ...args)=>new Promise((resolve)=>{
            enqueue(fn, resolve, ...args);
        });
    Object.defineProperties(generator, {
        activeCount: {
            get: ()=>activeCount
        },
        pendingCount: {
            get: ()=>queue.size
        },
        clearQueue: {
            value: ()=>{
                queue.clear();
            }
        }
    });
    return generator;
};
module.exports = $20097af5a7578dd8$var$pLimit;

});
parcelRegister("1tmhl", function(module, exports) {
module.exports = new URL("yocto-queue.9053387c.js", "file:" + __filename).toString();

});



//# sourceMappingURL=p-limit.d2bcb030.js.map
