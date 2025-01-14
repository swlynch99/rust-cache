require("./io.5e60f30f.js");
require("./core.da66a1bd.js");
require("./exec.c3307bd9.js");
require("./glob.5a8e23a7.js");
require("./github.dad38c37.js");
require("./cjs.804d4fb1.js");
require("./error.2f577e2a.js");
require("./options.63da44e1.js");
var $4SFIX$path = require("path");
var $4SFIX$crypto = require("crypto");
var $4SFIX$nodefspromises = require("node:fs/promises");


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

$parcel$export(module.exports, "isFeatureAvailable", () => $0e936ffa509b3009$export$4358ea763ab43e8a);
$parcel$export(module.exports, "saveCache", () => $0e936ffa509b3009$export$7a1d85371c4f69);
$parcel$export(module.exports, "restoreCache", () => $0e936ffa509b3009$export$64a839697be03036);
$parcel$export(module.exports, "ValidationError", () => $161eb9b029f4e863$exports.ValidationError);
$parcel$export(module.exports, "ReserveCacheError", () => $161eb9b029f4e863$exports.ReserveCacheError);

var $44PQM = parcelRequire("44PQM");

var $1irLk = parcelRequire("1irLk");

var $fgXRI = parcelRequire("fgXRI");

var $bY2rr = parcelRequire("bY2rr");
var $1688e3db836febf2$exports = {};
$1688e3db836febf2$exports = new URL("github.dad38c37.js", "file:" + __filename).toString();


var $5f47c10894c850ba$exports = {};
$5f47c10894c850ba$exports = new URL("cjs.804d4fb1.js", "file:" + __filename).toString();




var $161eb9b029f4e863$exports = {};
$161eb9b029f4e863$exports = new URL("error.2f577e2a.js", "file:" + __filename).toString();


var $dbf07f2e56876aea$exports = {};
$dbf07f2e56876aea$exports = new URL("options.63da44e1.js", "file:" + __filename).toString();



const $0e936ffa509b3009$var$ContentTypePrefix = "application/x-actions-cache-gcs-";
function $0e936ffa509b3009$export$4358ea763ab43e8a() {
    return true;
}
async function $0e936ffa509b3009$export$7a1d85371c4f69(paths, key, options) {
    options = (0, $dbf07f2e56876aea$exports.getUploadOptions)(options);
    const method = await $0e936ffa509b3009$var$getCompressionMethod();
    const storage = new (0, $5f47c10894c850ba$exports.Storage)();
    const cachePaths = await $0e936ffa509b3009$var$resolvePaths(paths);
    $1irLk.debug(`Cache Paths: ${JSON.stringify(cachePaths)}`);
    if (cachePaths.length === 0) throw new (0, $161eb9b029f4e863$exports.ValidationError)(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved`);
    const tempdir = await $0e936ffa509b3009$var$createTempDirectory();
    const archive = $4SFIX$path.join(tempdir, `cache.tar.${method}`);
    const repo = (0, $1688e3db836febf2$exports.context).repo.repo;
    $1irLk.debug(`Archive Path: ${archive}`);
    try {
        await $0e936ffa509b3009$var$createTar(archive, tempdir, paths, method);
        const bucket = storage.bucket(options.bucket);
        bucket.upload(archive, {
            destination: `${repo}/${key}`,
            contentType: `${$0e936ffa509b3009$var$ContentTypePrefix}${method}`
        });
    } catch (e) {}
    return 0;
}
async function $0e936ffa509b3009$export$64a839697be03036(paths, primaryKey, restoreKeys, options) {
    options = (0, $dbf07f2e56876aea$exports.getDownloadOptions)(options);
    restoreKeys = restoreKeys || [];
    const keys = [
        primaryKey,
        ...restoreKeys
    ];
    $1irLk.debug(`Resolved Keys: ${JSON.stringify(keys)}`);
    if (keys.length > 10) throw new (0, $161eb9b029f4e863$exports.ValidationError)(`Key Validation Error: Keys are limited to a maximum of 10`);
    for (const key of keys)$0e936ffa509b3009$var$checkKey(key);
    const storage = new (0, $5f47c10894c850ba$exports.Storage)();
    const repository = (0, $1688e3db836febf2$exports.context).repo.repo;
    let destination;
    try {
        const entry = await $0e936ffa509b3009$var$findCacheEntry(storage, keys, options.bucket);
        if (!entry) return undefined;
        let method = entry.metadata.contentType;
        if (!method) {
            $1irLk.warning(`Cache entry ${entry.name} did not have a Content-Type set`);
            return undefined;
        }
        if (!method.startsWith($0e936ffa509b3009$var$ContentTypePrefix)) {
            $1irLk.warning(`Cache entry ${entry.name} had unsupported Content-Type`);
            return undefined;
        }
        method = method.substring($0e936ffa509b3009$var$ContentTypePrefix.length);
        if (method !== "zstd" && method !== "gzip") {
            $1irLk.warning(`Cache entry ${entry.name} had unsupported Content-Type`);
            return undefined;
        }
        if (!options.lookupOnly) {
            const tmpdir = await $0e936ffa509b3009$var$createTempDirectory();
            destination = `${tmpdir}/cache.tar.${method}`;
            await entry.download({
                destination: destination
            });
            await $0e936ffa509b3009$var$extractTar(destination);
        }
        // Strip off the `${repository}/` prefix on the cache object.
        return entry.name.substring(repository.length);
    } catch (e) {
        const error = e;
        if (error.name === (0, $161eb9b029f4e863$exports.ValidationError).name) throw error;
        else // Suppress all non-validation errors because caching should be optional
        $1irLk.warning(`Failed to restore: ${error.message}`);
    } finally{
        try {
            if (destination) await $44PQM.rmRF(destination);
        } catch (e) {
            $1irLk.debug(`Failed to delete archive: ${e}`);
        }
    }
}
function $0e936ffa509b3009$var$checkKey(key) {
    if (key.length > 512) throw new (0, $161eb9b029f4e863$exports.ValidationError)(`Key Validation Error: ${key} cannot be larger than 512 characters.`);
}
async function $0e936ffa509b3009$var$getCompressionMethod() {
    const versionOutput = await $0e936ffa509b3009$var$getZstdVersion();
    if (versionOutput === "") return "gzip";
    else {
        $1irLk.debug(`zstd version: ${versionOutput.trim()}`);
        return "zstd";
    }
}
async function $0e936ffa509b3009$var$getZstdVersion() {
    let output = "";
    $1irLk.debug("Checking zstd --quiet --version");
    try {
        await $fgXRI.exec("zstd", [
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
        $1irLk.debug(`${e}`);
    }
    return output;
}
async function $0e936ffa509b3009$var$findCacheEntry(storage, keys, bucketName) {
    const bucket = storage.bucket(bucketName);
    const repository = (0, $1688e3db836febf2$exports.context).repo.repo;
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
async function $0e936ffa509b3009$var$createTempDirectory() {
    let tempdir = process.env["RUNNER_TEMP"];
    if (!tempdir) {
        let baseloc;
        if (process.platform === "win32") baseloc = process.env["USERPROFILE"] || "C:\\";
        else if (process.platform === "darwin") baseloc = "/Users";
        else baseloc = "/home";
        tempdir = $4SFIX$path.join(baseloc, "actions", "temp");
    }
    const dest = $4SFIX$path.join(tempdir, $4SFIX$crypto.randomUUID());
    await $44PQM.mkdirP(dest);
    return dest;
}
function $0e936ffa509b3009$var$getWorkingDirectory() {
    return process.env["GITHUB_WORKSPACE"] ?? process.cwd();
}
async function $0e936ffa509b3009$var$createTar(archive, tempdir, paths, method) {
    const manifest = $4SFIX$path.join(tempdir, "manifest.txt");
    await (0, $4SFIX$nodefspromises.writeFile)(manifest, paths.join("\n"));
    const args = [
        "cf",
        archive,
        "--files-from",
        manifest
    ];
    if (method === "gzip") args.push("--gzip");
    else args.push("--zstd");
    await $fgXRI.exec("tar", args);
}
async function $0e936ffa509b3009$var$extractTar(archive) {
    const workdir = $0e936ffa509b3009$var$getWorkingDirectory();
    await $44PQM.mkdirP(workdir);
    try {
        $fgXRI.exec("tar", [
            "xf",
            archive
        ]);
    } catch (e) {
        throw new Error(`tar xf ${archive} failed with error: ${e}`);
    }
}
async function $0e936ffa509b3009$var$resolvePaths(patterns) {
    const paths = [];
    const workspace = $0e936ffa509b3009$var$getWorkingDirectory();
    const globber = await $bY2rr.create(patterns.join("\n"), {
        implicitDescendants: false
    });
    for await (const file of globber.globGenerator()){
        const relative = $4SFIX$path.relative(workspace, file).replace(new RegExp(`\\${$4SFIX$path.sep}`, "g"), "/");
        $1irLk.debug(`Matched: ${relative}`);
        if (relative === "") paths.push(".");
        else paths.push(relative);
    }
    return paths;
}


