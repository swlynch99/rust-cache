require("./core.fa35ff64.js");
require("./io.a8d88486.js");
require("./config.cb10cea2.js");
require("./utils.db04e2b5.js");
var $64EhM$fs = require("fs");
var $64EhM$path = require("path");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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

var $AJTaV = parcelRequire("AJTaV");

var $8EyRf = parcelRequire("8EyRf");


var $be09cc96f5676102$exports = {};
$be09cc96f5676102$exports = new URL("config.cb10cea2.js", "file:" + __filename).toString();



var $4u9k0 = parcelRequire("4u9k0");
async function $616165fca1e77a2a$export$344db0bb456c84ff(targetDir, packages, checkTimestamp = false) {
    $AJTaV.debug(`cleaning target directory "${targetDir}"`);
    // remove all *files* from the profile directory
    let dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir(targetDir);
    for await (const dirent of dir){
        if (dirent.isDirectory()) {
            let dirName = (0, ($parcel$interopDefault($64EhM$path))).join(dir.path, dirent.name);
            // is it a profile dir, or a nested target dir?
            let isNestedTarget = await (0, $4u9k0.exists)((0, ($parcel$interopDefault($64EhM$path))).join(dirName, "CACHEDIR.TAG")) || await (0, $4u9k0.exists)((0, ($parcel$interopDefault($64EhM$path))).join(dirName, ".rustc_info.json"));
            try {
                if (isNestedTarget) await $616165fca1e77a2a$export$344db0bb456c84ff(dirName, packages, checkTimestamp);
                else await $616165fca1e77a2a$var$cleanProfileTarget(dirName, packages, checkTimestamp);
            } catch  {}
        } else if (dirent.name !== "CACHEDIR.TAG") await $616165fca1e77a2a$var$rm(dir.path, dirent);
    }
}
async function $616165fca1e77a2a$var$cleanProfileTarget(profileDir, packages, checkTimestamp = false) {
    $AJTaV.debug(`cleaning profile directory "${profileDir}"`);
    // Quite a few testing utility crates store compilation artifacts as nested
    // workspaces under `target/tests`. Notably, `target/tests/target` and
    // `target/tests/trybuild`.
    if ((0, ($parcel$interopDefault($64EhM$path))).basename(profileDir) === "tests") {
        try {
            // https://github.com/vertexclique/kaos/blob/9876f6c890339741cc5be4b7cb9df72baa5a6d79/src/cargo.rs#L25
            // https://github.com/eupn/macrotest/blob/c4151a5f9f545942f4971980b5d264ebcd0b1d11/src/cargo.rs#L27
            $616165fca1e77a2a$export$344db0bb456c84ff((0, ($parcel$interopDefault($64EhM$path))).join(profileDir, "target"), packages, checkTimestamp);
        } catch  {}
        try {
            // https://github.com/dtolnay/trybuild/blob/eec8ca6cb9b8f53d0caf1aa499d99df52cae8b40/src/cargo.rs#L50
            $616165fca1e77a2a$export$344db0bb456c84ff((0, ($parcel$interopDefault($64EhM$path))).join(profileDir, "trybuild"), packages, checkTimestamp);
        } catch  {}
        // Delete everything else.
        await $616165fca1e77a2a$var$rmExcept(profileDir, new Set([
            "target",
            "trybuild"
        ]), checkTimestamp);
        return;
    }
    let keepProfile = new Set([
        "build",
        ".fingerprint",
        "deps"
    ]);
    await $616165fca1e77a2a$var$rmExcept(profileDir, keepProfile);
    const keepPkg = new Set(packages.map((p)=>p.name));
    await $616165fca1e77a2a$var$rmExcept((0, ($parcel$interopDefault($64EhM$path))).join(profileDir, "build"), keepPkg, checkTimestamp);
    await $616165fca1e77a2a$var$rmExcept((0, ($parcel$interopDefault($64EhM$path))).join(profileDir, ".fingerprint"), keepPkg, checkTimestamp);
    const keepDeps = new Set(packages.flatMap((p)=>{
        const names = [];
        for (const n of [
            p.name,
            ...p.targets
        ]){
            const name = n.replace(/-/g, "_");
            names.push(name, `lib${name}`);
        }
        return names;
    }));
    await $616165fca1e77a2a$var$rmExcept((0, ($parcel$interopDefault($64EhM$path))).join(profileDir, "deps"), keepDeps, checkTimestamp);
}
async function $616165fca1e77a2a$export$159a619e32f0f246() {
    const bins = new Set();
    try {
        const { installs: installs } = JSON.parse(await (0, ($parcel$interopDefault($64EhM$fs))).promises.readFile((0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), ".crates2.json"), "utf8"));
        for (const pkg of Object.values(installs))for (const bin of pkg.bins)bins.add(bin);
    } catch  {}
    return bins;
}
async function $616165fca1e77a2a$export$b378b6ef1f7a0f0(oldBins) {
    const bins = await $616165fca1e77a2a$export$159a619e32f0f246();
    for (const bin of oldBins)bins.delete(bin);
    const dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "bin"));
    for await (const dirent of dir)if (dirent.isFile() && !bins.has(dirent.name)) await $616165fca1e77a2a$var$rm(dir.path, dirent);
}
async function $616165fca1e77a2a$export$24e2d34c95dc7885(packages, crates = true) {
    // remove `.cargo/credentials.toml`
    try {
        const credentials = (0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), ".cargo", "credentials.toml");
        $AJTaV.debug(`deleting "${credentials}"`);
        await (0, ($parcel$interopDefault($64EhM$fs))).promises.unlink(credentials);
    } catch  {}
    // `.cargo/registry/index`
    let pkgSet = new Set(packages.map((p)=>p.name));
    const indexDir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "registry", "index"));
    for await (const dirent of indexDir)if (dirent.isDirectory()) {
        // eg `.cargo/registry/index/github.com-1ecc6299db9ec823`
        // or `.cargo/registry/index/index.crates.io-e139d0d48fed7772`
        const dirPath = (0, ($parcel$interopDefault($64EhM$path))).join(indexDir.path, dirent.name);
        // for a git registry, we can remove `.cache`, as cargo will recreate it from git
        if (await (0, $4u9k0.exists)((0, ($parcel$interopDefault($64EhM$path))).join(dirPath, ".git"))) await $616165fca1e77a2a$var$rmRF((0, ($parcel$interopDefault($64EhM$path))).join(dirPath, ".cache"));
        else await $616165fca1e77a2a$var$cleanRegistryIndexCache(dirPath, pkgSet);
    }
    if (!crates) {
        $AJTaV.debug("skipping registry cache and src cleanup");
        return;
    }
    // `.cargo/registry/src`
    // Cargo usually re-creates these from the `.crate` cache below,
    // but for some reason that does not work for `-sys` crates that check timestamps
    // to decide if rebuilds are necessary.
    pkgSet = new Set(packages.filter((p)=>p.name.endsWith("-sys")).map((p)=>`${p.name}-${p.version}`));
    const srcDir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "registry", "src"));
    for await (const dirent of srcDir)if (dirent.isDirectory()) {
        // eg `.cargo/registry/src/github.com-1ecc6299db9ec823`
        // or `.cargo/registry/src/index.crates.io-e139d0d48fed7772`
        const dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join(srcDir.path, dirent.name));
        for await (const dirent of dir)if (dirent.isDirectory() && !pkgSet.has(dirent.name)) await $616165fca1e77a2a$var$rmRF((0, ($parcel$interopDefault($64EhM$path))).join(dir.path, dirent.name));
    }
    // `.cargo/registry/cache`
    pkgSet = new Set(packages.map((p)=>`${p.name}-${p.version}.crate`));
    const cacheDir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "registry", "cache"));
    for await (const dirent of cacheDir)if (dirent.isDirectory()) {
        // eg `.cargo/registry/cache/github.com-1ecc6299db9ec823`
        // or `.cargo/registry/cache/index.crates.io-e139d0d48fed7772`
        const dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join(cacheDir.path, dirent.name));
        for await (const dirent of dir)// here we check that the downloaded `.crate` matches one from our dependencies
        if (dirent.isFile() && !pkgSet.has(dirent.name)) await $616165fca1e77a2a$var$rm(dir.path, dirent);
    }
}
/// Recursively walks and cleans the index `.cache`
async function $616165fca1e77a2a$var$cleanRegistryIndexCache(dirName, keepPkg) {
    let dirIsEmpty = true;
    const cacheDir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir(dirName);
    for await (const dirent of cacheDir){
        if (dirent.isDirectory()) {
            if (await $616165fca1e77a2a$var$cleanRegistryIndexCache((0, ($parcel$interopDefault($64EhM$path))).join(dirName, dirent.name), keepPkg)) await $616165fca1e77a2a$var$rm(dirName, dirent);
            else dirIsEmpty &&= false;
        } else if (keepPkg.has(dirent.name)) dirIsEmpty &&= false;
        else await $616165fca1e77a2a$var$rm(dirName, dirent);
    }
    return dirIsEmpty;
}
async function $616165fca1e77a2a$export$e17d861ed52853(packages) {
    const coPath = (0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "git", "checkouts");
    const dbPath = (0, ($parcel$interopDefault($64EhM$path))).join((0, $be09cc96f5676102$exports.CARGO_HOME), "git", "db");
    const repos = new Map();
    for (const p of packages){
        if (!p.path.startsWith(coPath)) continue;
        const [repo, ref] = p.path.slice(coPath.length + 1).split((0, ($parcel$interopDefault($64EhM$path))).sep);
        const refs = repos.get(repo);
        if (refs) refs.add(ref);
        else repos.set(repo, new Set([
            ref
        ]));
    }
    // we have to keep both the clone, and the checkout, removing either will
    // trigger a rebuild
    // clean the db
    try {
        let dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir(dbPath);
        for await (const dirent of dir)if (!repos.has(dirent.name)) await $616165fca1e77a2a$var$rm(dir.path, dirent);
    } catch  {}
    // clean the checkouts
    try {
        let dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir(coPath);
        for await (const dirent of dir){
            const refs = repos.get(dirent.name);
            if (!refs) {
                await $616165fca1e77a2a$var$rm(dir.path, dirent);
                continue;
            }
            if (!dirent.isDirectory()) continue;
            const refsDir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir((0, ($parcel$interopDefault($64EhM$path))).join(dir.path, dirent.name));
            for await (const dirent of refsDir)if (!refs.has(dirent.name)) await $616165fca1e77a2a$var$rm(refsDir.path, dirent);
        }
    } catch  {}
}
const $616165fca1e77a2a$var$ONE_WEEK = 604800000;
/**
 * Removes all files or directories in `dirName` matching some criteria.
 *
 * When the `checkTimestamp` flag is set, this will also remove anything older
 * than one week.
 *
 * Otherwise, it will remove everything that does not match any string in the
 * `keepPrefix` set.
 * The matching strips and trailing `-$hash` suffix.
 */ async function $616165fca1e77a2a$var$rmExcept(dirName, keepPrefix, checkTimestamp = false) {
    const dir = await (0, ($parcel$interopDefault($64EhM$fs))).promises.opendir(dirName);
    for await (const dirent of dir){
        if (checkTimestamp) {
            const fileName = (0, ($parcel$interopDefault($64EhM$path))).join(dir.path, dirent.name);
            const { mtime: mtime } = await (0, ($parcel$interopDefault($64EhM$fs))).promises.stat(fileName);
            const isOutdated = Date.now() - mtime.getTime() > $616165fca1e77a2a$var$ONE_WEEK;
            if (isOutdated) await $616165fca1e77a2a$var$rm(dir.path, dirent);
            return;
        }
        let name = dirent.name;
        // strip the trailing hash
        const idx = name.lastIndexOf("-");
        if (idx !== -1) name = name.slice(0, idx);
        if (!keepPrefix.has(name)) await $616165fca1e77a2a$var$rm(dir.path, dirent);
    }
}
async function $616165fca1e77a2a$var$rm(parent, dirent) {
    try {
        const fileName = (0, ($parcel$interopDefault($64EhM$path))).join(parent, dirent.name);
        $AJTaV.debug(`deleting "${fileName}"`);
        if (dirent.isFile()) await (0, ($parcel$interopDefault($64EhM$fs))).promises.unlink(fileName);
        else if (dirent.isDirectory()) await $8EyRf.rmRF(fileName);
    } catch  {}
}
async function $616165fca1e77a2a$var$rmRF(dirName) {
    $AJTaV.debug(`deleting "${dirName}"`);
    await $8EyRf.rmRF(dirName);
}


//# sourceMappingURL=cleanup.624f091f.js.map
