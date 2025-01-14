require("./io.a8d88486.js");
require("./core.fa35ff64.js");
require("./exec.123e112c.js");
require("./glob.d60eb4ec.js");
require("./github.71241d9c.js");
require("./cjs.5d9594b0.js");
require("./error.b227620c.js");
require("./options.4d743946.js");
var $3Dlip$path = require("path");
var $3Dlip$crypto = require("crypto");
var $3Dlip$nodefspromises = require("node:fs/promises");


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

$parcel$export(module.exports, "isFeatureAvailable", () => $f68b80954d6e6aca$export$4358ea763ab43e8a);
$parcel$export(module.exports, "saveCache", () => $f68b80954d6e6aca$export$7a1d85371c4f69);
$parcel$export(module.exports, "restoreCache", () => $f68b80954d6e6aca$export$64a839697be03036);
$parcel$export(module.exports, "ValidationError", () => $5c309ffb2a07e850$exports.ValidationError);
$parcel$export(module.exports, "ReserveCacheError", () => $5c309ffb2a07e850$exports.ReserveCacheError);

var $8EyRf = parcelRequire("8EyRf");

var $AJTaV = parcelRequire("AJTaV");

var $5cw91 = parcelRequire("5cw91");

var $jfbLD = parcelRequire("jfbLD");
var $ae108deab312cb67$exports = {};
$ae108deab312cb67$exports = new URL("github.71241d9c.js", "file:" + __filename).toString();


var $5fbf66c33ee4854f$exports = {};
$5fbf66c33ee4854f$exports = new URL("cjs.5d9594b0.js", "file:" + __filename).toString();




var $5c309ffb2a07e850$exports = {};
$5c309ffb2a07e850$exports = new URL("error.b227620c.js", "file:" + __filename).toString();


var $00a70157d8b2fec9$exports = {};
$00a70157d8b2fec9$exports = new URL("options.4d743946.js", "file:" + __filename).toString();



const $f68b80954d6e6aca$var$ContentTypePrefix = "application/x-actions-cache-gcs-";
function $f68b80954d6e6aca$export$4358ea763ab43e8a() {
    return true;
}
async function $f68b80954d6e6aca$export$7a1d85371c4f69(paths, key, options) {
    options = (0, $00a70157d8b2fec9$exports.getUploadOptions)(options);
    const method = await $f68b80954d6e6aca$var$getCompressionMethod();
    const storage = new (0, $5fbf66c33ee4854f$exports.Storage)();
    const cachePaths = await $f68b80954d6e6aca$var$resolvePaths(paths);
    $AJTaV.debug(`Cache Paths: ${JSON.stringify(cachePaths)}`);
    if (cachePaths.length === 0) throw new (0, $5c309ffb2a07e850$exports.ValidationError)(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved`);
    const tempdir = await $f68b80954d6e6aca$var$createTempDirectory();
    const archive = $3Dlip$path.join(tempdir, `cache.tar.${method}`);
    const repo = (0, $ae108deab312cb67$exports.context).repo.repo;
    $AJTaV.debug(`Archive Path: ${archive}`);
    try {
        await $f68b80954d6e6aca$var$createTar(archive, tempdir, paths, method);
        const bucket = storage.bucket(options.bucket);
        bucket.upload(archive, {
            destination: `${repo}/${key}`,
            contentType: `${$f68b80954d6e6aca$var$ContentTypePrefix}${method}`
        });
    } catch (e) {}
    return 0;
}
async function $f68b80954d6e6aca$export$64a839697be03036(paths, primaryKey, restoreKeys, options) {
    options = (0, $00a70157d8b2fec9$exports.getDownloadOptions)(options);
    restoreKeys = restoreKeys || [];
    const keys = [
        primaryKey,
        ...restoreKeys
    ];
    $AJTaV.debug(`Resolved Keys: ${JSON.stringify(keys)}`);
    if (keys.length > 10) throw new (0, $5c309ffb2a07e850$exports.ValidationError)(`Key Validation Error: Keys are limited to a maximum of 10`);
    for (const key of keys)$f68b80954d6e6aca$var$checkKey(key);
    const storage = new (0, $5fbf66c33ee4854f$exports.Storage)();
    const repository = (0, $ae108deab312cb67$exports.context).repo.repo;
    let destination;
    try {
        const entry = await $f68b80954d6e6aca$var$findCacheEntry(storage, keys, options.bucket);
        if (!entry) return undefined;
        let method = entry.metadata.contentType;
        if (!method) {
            $AJTaV.warning(`Cache entry ${entry.name} did not have a Content-Type set`);
            return undefined;
        }
        if (!method.startsWith($f68b80954d6e6aca$var$ContentTypePrefix)) {
            $AJTaV.warning(`Cache entry ${entry.name} had unsupported Content-Type`);
            return undefined;
        }
        method = method.substring($f68b80954d6e6aca$var$ContentTypePrefix.length);
        if (method !== "zstd" && method !== "gzip") {
            $AJTaV.warning(`Cache entry ${entry.name} had unsupported Content-Type`);
            return undefined;
        }
        if (!options.lookupOnly) {
            const tmpdir = await $f68b80954d6e6aca$var$createTempDirectory();
            destination = `${tmpdir}/cache.tar.${method}`;
            await entry.download({
                destination: destination
            });
            await $f68b80954d6e6aca$var$extractTar(destination);
        }
        // Strip off the `${repository}/` prefix on the cache object.
        return entry.name.substring(repository.length);
    } catch (e) {
        const error = e;
        if (error.name === (0, $5c309ffb2a07e850$exports.ValidationError).name) throw error;
        else // Suppress all non-validation errors because caching should be optional
        $AJTaV.warning(`Failed to restore: ${error.message}`);
    } finally{
        try {
            if (destination) await $8EyRf.rmRF(destination);
        } catch (e) {
            $AJTaV.debug(`Failed to delete archive: ${e}`);
        }
    }
}
function $f68b80954d6e6aca$var$checkKey(key) {
    if (key.length > 512) throw new (0, $5c309ffb2a07e850$exports.ValidationError)(`Key Validation Error: ${key} cannot be larger than 512 characters.`);
}
async function $f68b80954d6e6aca$var$getCompressionMethod() {
    const versionOutput = await $f68b80954d6e6aca$var$getZstdVersion();
    if (versionOutput === "") return "gzip";
    else {
        $AJTaV.debug(`zstd version: ${versionOutput.trim()}`);
        return "zstd";
    }
}
async function $f68b80954d6e6aca$var$getZstdVersion() {
    let output = "";
    $AJTaV.debug("Checking zstd --quiet --version");
    try {
        await $5cw91.exec("zstd", [
            "--quiet",
            "--version"
        ], {
            ignoreReturnCode: true,
            silent: true,
            listeners: {
                stdout: (data)=>output += data.toString(),
                stderr: (data)=>output += data.toString()
            }
        });
    } catch (e) {
        $AJTaV.debug(`${e}`);
    }
    return output;
}
async function $f68b80954d6e6aca$var$findCacheEntry(storage, keys, bucketName) {
    const bucket = storage.bucket(bucketName);
    const repository = (0, $ae108deab312cb67$exports.context).repo.repo;
    for (const key of keys){
        const prefix = `${repository}/${key}`;
        const [files] = await bucket.getFiles({
            prefix: prefix
        });
        if (files.length == 0) continue;
        // If there is an exact match then it should be the first returned result.
        if (files[0].name === prefix) return files[0];
        let newest = files[0];
        for (const file of files){
            let ntime = new Date(newest.metadata.timeCreated || 0);
            let ftime = new Date(file.metadata.timeCreated || 0);
            if (ntime < ftime) newest = file;
        }
        return newest;
    }
}
async function $f68b80954d6e6aca$var$createTempDirectory() {
    let tempdir = process.env["RUNNER_TEMP"];
    if (!tempdir) {
        let baseloc;
        if (process.platform === "win32") baseloc = process.env["USERPROFILE"] || "C:\\";
        else if (process.platform === "darwin") baseloc = "/Users";
        else baseloc = "/home";
        tempdir = $3Dlip$path.join(baseloc, "actions", "temp");
    }
    const dest = $3Dlip$path.join(tempdir, $3Dlip$crypto.randomUUID());
    await $8EyRf.mkdirP(dest);
    return dest;
}
function $f68b80954d6e6aca$var$getWorkingDirectory() {
    return process.env["GITHUB_WORKSPACE"] ?? process.cwd();
}
async function $f68b80954d6e6aca$var$createTar(archive, tempdir, paths, method) {
    const manifest = $3Dlip$path.join(tempdir, "manifest.txt");
    await (0, $3Dlip$nodefspromises.writeFile)(manifest, paths.join("\n"));
    const args = [
        "cf",
        archive,
        "--files-from",
        manifest
    ];
    if (method === "gzip") args.push("--gzip");
    else args.push("--zstd");
    await $5cw91.exec("tar", args);
}
async function $f68b80954d6e6aca$var$extractTar(archive) {
    const workdir = $f68b80954d6e6aca$var$getWorkingDirectory();
    await $8EyRf.mkdirP(workdir);
    try {
        $5cw91.exec("tar", [
            "xf",
            archive
        ]);
    } catch (e) {
        throw new Error(`tar xf ${archive} failed with error: ${e}`);
    }
}
async function $f68b80954d6e6aca$var$resolvePaths(patterns) {
    const paths = [];
    const workspace = $f68b80954d6e6aca$var$getWorkingDirectory();
    const globber = await $jfbLD.create(patterns.join("\n"), {
        implicitDescendants: false
    });
    for await (const file of globber.globGenerator()){
        const relative = $3Dlip$path.relative(workspace, file).replace(new RegExp(`\\${$3Dlip$path.sep}`, "g"), "/");
        $AJTaV.debug(`Matched: ${relative}`);
        if (relative === "") paths.push(".");
        else paths.push(relative);
    }
    return paths;
}


//# sourceMappingURL=esm.497ab38b.js.map
