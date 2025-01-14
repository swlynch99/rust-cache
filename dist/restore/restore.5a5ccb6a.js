require("../save/core.da66a1bd.js");
require("../save/cleanup.132082e9.js");
require("../save/config.5213ef98.js");
require("../save/utils.8a3f493e.js");


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

var $1irLk = parcelRequire("1irLk");

var $jE8wq = parcelRequire("jE8wq");

var $fP28i = parcelRequire("fP28i");

var $w6zhM = parcelRequire("w6zhM");
process.on("uncaughtException", (e)=>{
    $1irLk.error(e.message);
    if (e.stack) $1irLk.error(e.stack);
});
async function $a867be997d62eb1e$var$run() {
    const cacheProvider = (0, $w6zhM.getCacheProvider)();
    if (!cacheProvider.cache.isFeatureAvailable()) {
        $a867be997d62eb1e$var$setCacheHitOutput(false);
        return;
    }
    try {
        var cacheOnFailure = $1irLk.getInput("cache-on-failure").toLowerCase();
        if (cacheOnFailure !== "true") cacheOnFailure = "false";
        var lookupOnly = $1irLk.getInput("lookup-only").toLowerCase() === "true";
        $1irLk.exportVariable("CACHE_ON_FAILURE", cacheOnFailure);
        $1irLk.exportVariable("CARGO_INCREMENTAL", 0);
        const config = await (0, $fP28i.CacheConfig).new();
        config.printInfo(cacheProvider);
        $1irLk.info("");
        $1irLk.info(`... ${lookupOnly ? "Checking" : "Restoring"} cache ...`);
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
            $1irLk.info(`${lookupOnly ? "Found" : "Restored from"} cache key "${restoreKey}" full match: ${match}.`);
            if (!match) {
                // pre-clean the target directory on cache mismatch
                for (const workspace of config.workspaces)try {
                    await (0, $jE8wq.cleanTargetDir)(workspace.target, [], true);
                } catch  {}
                // We restored the cache but it is not a full match.
                config.saveState();
            }
            $a867be997d62eb1e$var$setCacheHitOutput(match);
        } else {
            $1irLk.info("No cache found.");
            config.saveState();
            $a867be997d62eb1e$var$setCacheHitOutput(false);
        }
    } catch (e) {
        $a867be997d62eb1e$var$setCacheHitOutput(false);
        (0, $w6zhM.reportError)(e);
    }
    process.exit();
}
function $a867be997d62eb1e$var$setCacheHitOutput(cacheHit) {
    $1irLk.setOutput("cache-hit", cacheHit.toString());
}
$a867be997d62eb1e$var$run();


