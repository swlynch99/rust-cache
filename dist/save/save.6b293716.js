require("./core.da66a1bd.js");
require("./exec.c3307bd9.js");
require("./cleanup.132082e9.js");
require("./config.5213ef98.js");
require("./utils.8a3f493e.js");


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
var $47123e0603b87c97$exports = {};
$47123e0603b87c97$exports = new URL("core.da66a1bd.js", "file:" + __filename).toString();



var $fgXRI = parcelRequire("fgXRI");
var $e1fd34565fc31926$exports = {};
$e1fd34565fc31926$exports = new URL("cleanup.132082e9.js", "file:" + __filename).toString();



var $fP28i = parcelRequire("fP28i");

var $w6zhM = parcelRequire("w6zhM");
process.on("uncaughtException", (e)=>{
    $47123e0603b87c97$exports.error(e.message);
    if (e.stack) $47123e0603b87c97$exports.error(e.stack);
});
async function $975ba9e76928e1fe$var$run() {
    const cacheProvider = (0, $w6zhM.getCacheProvider)();
    const save = $47123e0603b87c97$exports.getInput("save-if").toLowerCase() || "true";
    if (!(cacheProvider.cache.isFeatureAvailable() && save === "true")) return;
    try {
        if ((0, $fP28i.isCacheUpToDate)()) {
            $47123e0603b87c97$exports.info(`Cache up-to-date.`);
            return;
        }
        const config = (0, $fP28i.CacheConfig).fromState();
        config.printInfo(cacheProvider);
        $47123e0603b87c97$exports.info("");
        // TODO: remove this once https://github.com/actions/toolkit/pull/553 lands
        if (process.env["RUNNER_OS"] == "macOS") await $975ba9e76928e1fe$var$macOsWorkaround();
        const allPackages = [];
        for (const workspace of config.workspaces){
            const packages = await workspace.getPackagesOutsideWorkspaceRoot();
            allPackages.push(...packages);
            try {
                $47123e0603b87c97$exports.info(`... Cleaning ${workspace.target} ...`);
                await (0, $e1fd34565fc31926$exports.cleanTargetDir)(workspace.target, packages);
            } catch (e) {
                $47123e0603b87c97$exports.debug(`${e.stack}`);
            }
        }
        try {
            const crates = $47123e0603b87c97$exports.getInput("cache-all-crates").toLowerCase() || "false";
            $47123e0603b87c97$exports.info(`... Cleaning cargo registry (cache-all-crates: ${crates}) ...`);
            await (0, $e1fd34565fc31926$exports.cleanRegistry)(allPackages, crates !== "true");
        } catch (e) {
            $47123e0603b87c97$exports.debug(`${e.stack}`);
        }
        if (config.cacheBin) try {
            $47123e0603b87c97$exports.info(`... Cleaning cargo/bin ...`);
            await (0, $e1fd34565fc31926$exports.cleanBin)(config.cargoBins);
        } catch (e) {
            $47123e0603b87c97$exports.debug(`${e.stack}`);
        }
        try {
            $47123e0603b87c97$exports.info(`... Cleaning cargo git cache ...`);
            await (0, $e1fd34565fc31926$exports.cleanGit)(allPackages);
        } catch (e) {
            $47123e0603b87c97$exports.debug(`${e.stack}`);
        }
        $47123e0603b87c97$exports.info(`... Saving cache ...`);
        // Pass a copy of cachePaths to avoid mutating the original array as reported by:
        // https://github.com/actions/toolkit/pull/1378
        // TODO: remove this once the underlying bug is fixed.
        await cacheProvider.cache.saveCache(config.cachePaths.slice(), config.cacheKey);
    } catch (e) {
        (0, $w6zhM.reportError)(e);
    }
    process.exit();
}
$975ba9e76928e1fe$var$run();
async function $975ba9e76928e1fe$var$macOsWorkaround() {
    try {
        // Workaround for https://github.com/actions/cache/issues/403
        // Also see https://github.com/rust-lang/cargo/issues/8603
        await $fgXRI.exec("sudo", [
            "/usr/sbin/purge"
        ], {
            silent: true
        });
    } catch  {}
}


