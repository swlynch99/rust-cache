require("./core.fa35ff64.js");
require("./exec.123e112c.js");
require("./cleanup.624f091f.js");
require("./config.cb10cea2.js");
require("./utils.db04e2b5.js");


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
var $9289a1aaf210b2db$exports = {};
$9289a1aaf210b2db$exports = new URL("core.fa35ff64.js", "file:" + __filename).toString();



var $5cw91 = parcelRequire("5cw91");
var $3b9a23beb3f7d3dd$exports = {};
$3b9a23beb3f7d3dd$exports = new URL("cleanup.624f091f.js", "file:" + __filename).toString();



var $74NLn = parcelRequire("74NLn");

var $4u9k0 = parcelRequire("4u9k0");
process.on("uncaughtException", (e)=>{
    $9289a1aaf210b2db$exports.error(e.message);
    if (e.stack) $9289a1aaf210b2db$exports.error(e.stack);
});
async function $f63b0a140d2ece8e$var$run() {
    const cacheProvider = (0, $4u9k0.getCacheProvider)();
    const save = $9289a1aaf210b2db$exports.getInput("save-if").toLowerCase() || "true";
    if (!(cacheProvider.cache.isFeatureAvailable() && save === "true")) return;
    try {
        if ((0, $74NLn.isCacheUpToDate)()) {
            $9289a1aaf210b2db$exports.info(`Cache up-to-date.`);
            return;
        }
        const config = (0, $74NLn.CacheConfig).fromState();
        config.printInfo(cacheProvider);
        $9289a1aaf210b2db$exports.info("");
        // TODO: remove this once https://github.com/actions/toolkit/pull/553 lands
        if (process.env["RUNNER_OS"] == "macOS") await $f63b0a140d2ece8e$var$macOsWorkaround();
        const allPackages = [];
        for (const workspace of config.workspaces){
            const packages = await workspace.getPackagesOutsideWorkspaceRoot();
            allPackages.push(...packages);
            try {
                $9289a1aaf210b2db$exports.info(`... Cleaning ${workspace.target} ...`);
                await (0, $3b9a23beb3f7d3dd$exports.cleanTargetDir)(workspace.target, packages);
            } catch (e) {
                $9289a1aaf210b2db$exports.debug(`${e.stack}`);
            }
        }
        try {
            const crates = $9289a1aaf210b2db$exports.getInput("cache-all-crates").toLowerCase() || "false";
            $9289a1aaf210b2db$exports.info(`... Cleaning cargo registry (cache-all-crates: ${crates}) ...`);
            await (0, $3b9a23beb3f7d3dd$exports.cleanRegistry)(allPackages, crates !== "true");
        } catch (e) {
            $9289a1aaf210b2db$exports.debug(`${e.stack}`);
        }
        if (config.cacheBin) try {
            $9289a1aaf210b2db$exports.info(`... Cleaning cargo/bin ...`);
            await (0, $3b9a23beb3f7d3dd$exports.cleanBin)(config.cargoBins);
        } catch (e) {
            $9289a1aaf210b2db$exports.debug(`${e.stack}`);
        }
        try {
            $9289a1aaf210b2db$exports.info(`... Cleaning cargo git cache ...`);
            await (0, $3b9a23beb3f7d3dd$exports.cleanGit)(allPackages);
        } catch (e) {
            $9289a1aaf210b2db$exports.debug(`${e.stack}`);
        }
        $9289a1aaf210b2db$exports.info(`... Saving cache ...`);
        // Pass a copy of cachePaths to avoid mutating the original array as reported by:
        // https://github.com/actions/toolkit/pull/1378
        // TODO: remove this once the underlying bug is fixed.
        await cacheProvider.cache.saveCache(config.cachePaths.slice(), config.cacheKey);
    } catch (e) {
        (0, $4u9k0.reportError)(e);
    }
    process.exit();
}
$f63b0a140d2ece8e$var$run();
async function $f63b0a140d2ece8e$var$macOsWorkaround() {
    try {
        // Workaround for https://github.com/actions/cache/issues/403
        // Also see https://github.com/rust-lang/cargo/issues/8603
        await $5cw91.exec("sudo", [
            "/usr/sbin/purge"
        ], {
            silent: true
        });
    } catch  {}
}


//# sourceMappingURL=save.a8dbcf21.js.map
