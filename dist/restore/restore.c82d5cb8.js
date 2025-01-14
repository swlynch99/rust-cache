require("../save/core.fa35ff64.js");
require("../save/cleanup.624f091f.js");
require("../save/config.cb10cea2.js");
require("../save/utils.db04e2b5.js");


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

var $AJTaV = parcelRequire("AJTaV");

var $c2u7m = parcelRequire("c2u7m");

var $74NLn = parcelRequire("74NLn");

var $4u9k0 = parcelRequire("4u9k0");
process.on("uncaughtException", (e)=>{
    $AJTaV.error(e.message);
    if (e.stack) $AJTaV.error(e.stack);
});
async function $4cd56695c3042590$var$run() {
    const cacheProvider = (0, $4u9k0.getCacheProvider)();
    if (!cacheProvider.cache.isFeatureAvailable()) {
        $4cd56695c3042590$var$setCacheHitOutput(false);
        return;
    }
    try {
        var cacheOnFailure = $AJTaV.getInput("cache-on-failure").toLowerCase();
        if (cacheOnFailure !== "true") cacheOnFailure = "false";
        var lookupOnly = $AJTaV.getInput("lookup-only").toLowerCase() === "true";
        $AJTaV.exportVariable("CACHE_ON_FAILURE", cacheOnFailure);
        $AJTaV.exportVariable("CARGO_INCREMENTAL", 0);
        const config = await (0, $74NLn.CacheConfig).new();
        config.printInfo(cacheProvider);
        $AJTaV.info("");
        $AJTaV.info(`... ${lookupOnly ? "Checking" : "Restoring"} cache ...`);
        const key = config.cacheKey;
        // Pass a copy of cachePaths to avoid mutating the original array as reported by:
        // https://github.com/actions/toolkit/pull/1378
        // TODO: remove this once the underlying bug is fixed.
        const restoreKey = await cacheProvider.cache.restoreCache(config.cachePaths.slice(), key, [
            config.restoreKey
        ], {
            lookupOnly: lookupOnly
        });
        if (restoreKey) {
            const match = restoreKey === key;
            $AJTaV.info(`${lookupOnly ? "Found" : "Restored from"} cache key "${restoreKey}" full match: ${match}.`);
            if (!match) {
                // pre-clean the target directory on cache mismatch
                for (const workspace of config.workspaces)try {
                    await (0, $c2u7m.cleanTargetDir)(workspace.target, [], true);
                } catch  {}
                // We restored the cache but it is not a full match.
                config.saveState();
            }
            $4cd56695c3042590$var$setCacheHitOutput(match);
        } else {
            $AJTaV.info("No cache found.");
            config.saveState();
            $4cd56695c3042590$var$setCacheHitOutput(false);
        }
    } catch (e) {
        $4cd56695c3042590$var$setCacheHitOutput(false);
        (0, $4u9k0.reportError)(e);
    }
    process.exit();
}
function $4cd56695c3042590$var$setCacheHitOutput(cacheHit) {
    $AJTaV.setOutput("cache-hit", cacheHit.toString());
}
$4cd56695c3042590$var$run();


//# sourceMappingURL=restore.c82d5cb8.js.map
