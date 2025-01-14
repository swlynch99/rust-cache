require("./core.da66a1bd.js");
require("./glob.5a8e23a7.js");
require("./dist.98120c5e.js");
require("./cleanup.132082e9.js");
require("./utils.8a3f493e.js");
require("./workspace.01589570.js");
var $1x2bD$crypto = require("crypto");
var $1x2bD$fs = require("fs");
var $1x2bD$fspromises = require("fs/promises");
var $1x2bD$os = require("os");
var $1x2bD$path = require("path");


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

var $1irLk = parcelRequire("1irLk");
var $275a727a91390501$exports = {};
$275a727a91390501$exports = new URL("glob.5a8e23a7.js", "file:" + __filename).toString();







var $e01e32ad0c504362$exports = {};
$e01e32ad0c504362$exports = new URL("dist.98120c5e.js", "file:" + __filename).toString();



var $jE8wq = parcelRequire("jE8wq");
var $d9202f3af8784861$exports = {};
$d9202f3af8784861$exports = new URL("utils.8a3f493e.js", "file:" + __filename).toString();


var $0a74b3eb4297977c$exports = {};
$0a74b3eb4297977c$exports = new URL("workspace.01589570.js", "file:" + __filename).toString();


const $d7d08b807e588e31$var$HOME = (0, ($parcel$interopDefault($1x2bD$os))).homedir();
const $d7d08b807e588e31$export$f050d8c8ad3d47a3 = process.env.CARGO_HOME || (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$var$HOME, ".cargo");
const $d7d08b807e588e31$var$STATE_CONFIG = "RUST_CACHE_CONFIG";
const $d7d08b807e588e31$var$HASH_LENGTH = 8;
class $d7d08b807e588e31$export$b978f4cf829a09da {
    constructor(){
        /** All the paths we want to cache */ this.cachePaths = [];
        /** The primary cache key */ this.cacheKey = "";
        /** The secondary (restore) key that only contains the prefix and environment */ this.restoreKey = "";
        /** Whether to cache CARGO_HOME/.bin */ this.cacheBin = true;
        /** The workspace configurations */ this.workspaces = [];
        /** The cargo binaries present during main step */ this.cargoBins = [];
        /** The prefix portion of the cache key */ this.keyPrefix = "";
        /** The rust version considered for the cache key */ this.keyRust = "";
        /** The environment variables considered for the cache key */ this.keyEnvs = [];
        /** The files considered for the cache key */ this.keyFiles = [];
    }
    /**
   * Constructs a [`CacheConfig`] with all the paths and keys.
   *
   * This will read the action `input`s, and read and persist `state` as necessary.
   */ static async new() {
        const self = new $d7d08b807e588e31$export$b978f4cf829a09da();
        // Construct key prefix:
        // This uses either the `shared-key` input,
        // or the `key` input combined with the `job` key.
        let key = $1irLk.getInput("prefix-key") || "v0-rust";
        const sharedKey = $1irLk.getInput("shared-key");
        if (sharedKey) key += `-${sharedKey}`;
        else {
            const inputKey = $1irLk.getInput("key");
            if (inputKey) key += `-${inputKey}`;
            const job = process.env.GITHUB_JOB;
            if (job) key += `-${job}`;
        }
        // Add runner OS to the key to avoid cross-contamination of cache
        const runnerOS = (0, ($parcel$interopDefault($1x2bD$os))).type();
        key += `-${runnerOS}`;
        self.keyPrefix = key;
        // Construct environment portion of the key:
        // This consists of a hash that considers the rust version
        // as well as all the environment variables as given by a default list
        // and the `env-vars` input.
        // The env vars are sorted, matched by prefix and hashed into the
        // resulting environment hash.
        let hasher = (0, ($parcel$interopDefault($1x2bD$crypto))).createHash("sha1");
        const rustVersion = await $d7d08b807e588e31$var$getRustVersion();
        let keyRust = `${rustVersion.release} ${rustVersion.host}`;
        hasher.update(keyRust);
        hasher.update(rustVersion["commit-hash"]);
        keyRust += ` (${rustVersion["commit-hash"]})`;
        self.keyRust = keyRust;
        // these prefixes should cover most of the compiler / rust / cargo keys
        const envPrefixes = [
            "CARGO",
            "CC",
            "CFLAGS",
            "CXX",
            "CMAKE",
            "RUST"
        ];
        envPrefixes.push(...$1irLk.getInput("env-vars").split(/\s+/).filter(Boolean));
        // sort the available env vars so we have a more stable hash
        const keyEnvs = [];
        const envKeys = Object.keys(process.env);
        envKeys.sort((a, b)=>a.localeCompare(b));
        for (const key of envKeys){
            const value = process.env[key];
            if (envPrefixes.some((prefix)=>key.startsWith(prefix)) && value) {
                hasher.update(`${key}=${value}`);
                keyEnvs.push(key);
            }
        }
        self.keyEnvs = keyEnvs;
        key += `-${$d7d08b807e588e31$var$digest(hasher)}`;
        self.restoreKey = key;
        // Construct the lockfiles portion of the key:
        // This considers all the files found via globbing for various manifests
        // and lockfiles.
        self.cacheBin = $1irLk.getInput("cache-bin").toLowerCase() == "true";
        // Constructs the workspace config and paths to restore:
        // The workspaces are given using a `$workspace -> $target` syntax.
        const workspaces = [];
        const workspacesInput = $1irLk.getInput("workspaces") || ".";
        for (const workspace of workspacesInput.trim().split("\n")){
            let [root, target = "target"] = workspace.split("->").map((s)=>s.trim());
            root = (0, ($parcel$interopDefault($1x2bD$path))).resolve(root);
            target = (0, ($parcel$interopDefault($1x2bD$path))).join(root, target);
            workspaces.push(new (0, $0a74b3eb4297977c$exports.Workspace)(root, target));
        }
        self.workspaces = workspaces;
        let keyFiles = await $d7d08b807e588e31$var$globFiles(".cargo/config.toml\nrust-toolchain\nrust-toolchain.toml");
        const parsedKeyFiles = []; // keyFiles that are parsed, pre-processed and hashed
        hasher = (0, ($parcel$interopDefault($1x2bD$crypto))).createHash("sha1");
        for (const workspace of workspaces){
            const root = workspace.root;
            keyFiles.push(...await $d7d08b807e588e31$var$globFiles(`${root}/**/.cargo/config.toml\n${root}/**/rust-toolchain\n${root}/**/rust-toolchain.toml`));
            const workspaceMembers = await workspace.getWorkspaceMembers();
            const cargo_manifests = $d7d08b807e588e31$var$sort_and_uniq(workspaceMembers.map((member)=>(0, ($parcel$interopDefault($1x2bD$path))).join(member.path, "Cargo.toml")));
            for (const cargo_manifest of cargo_manifests)try {
                const content = await (0, ($parcel$interopDefault($1x2bD$fspromises))).readFile(cargo_manifest, {
                    encoding: "utf8"
                });
                // Use any since TomlPrimitive is not exposed
                const parsed = $e01e32ad0c504362$exports.parse(content);
                if ("package" in parsed) {
                    const pack = parsed.package;
                    if ("version" in pack) pack["version"] = "0.0.0";
                }
                for (const prefix of [
                    "",
                    "build-",
                    "dev-"
                ]){
                    const section_name = `${prefix}dependencies`;
                    if (!(section_name in parsed)) continue;
                    const deps = parsed[section_name];
                    for (const key of Object.keys(deps)){
                        const dep = deps[key];
                        try {
                            if ("path" in dep) {
                                dep.version = "0.0.0";
                                dep.path = "";
                            }
                        } catch (_e) {
                            continue;
                        }
                    }
                }
                hasher.update(JSON.stringify(parsed));
                parsedKeyFiles.push(cargo_manifest);
            } catch (e) {
                // Fallback to caching them as regular file
                $1irLk.warning(`Error parsing Cargo.toml manifest, fallback to caching entire file: ${e}`);
                keyFiles.push(cargo_manifest);
            }
            const cargo_lock = (0, ($parcel$interopDefault($1x2bD$path))).join(workspace.root, "Cargo.lock");
            if (await (0, $d9202f3af8784861$exports.exists)(cargo_lock)) try {
                const content = await (0, ($parcel$interopDefault($1x2bD$fspromises))).readFile(cargo_lock, {
                    encoding: "utf8"
                });
                const parsed = $e01e32ad0c504362$exports.parse(content);
                if (parsed.version !== 3 && parsed.version !== 4 || !("package" in parsed)) {
                    // Fallback to caching them as regular file since this action
                    // can only handle Cargo.lock format version 3
                    $1irLk.warning("Unsupported Cargo.lock format, fallback to caching entire file");
                    keyFiles.push(cargo_lock);
                    continue;
                }
                // Package without `[[package]].source` and `[[package]].checksum`
                // are the one with `path = "..."` to crates within the workspace.
                const packages = parsed.package.filter((p)=>"source" in p || "checksum" in p);
                hasher.update(JSON.stringify(packages));
                parsedKeyFiles.push(cargo_lock);
            } catch (e) {
                // Fallback to caching them as regular file
                $1irLk.warning(`Error parsing Cargo.lock manifest, fallback to caching entire file: ${e}`);
                keyFiles.push(cargo_lock);
            }
        }
        keyFiles = $d7d08b807e588e31$var$sort_and_uniq(keyFiles);
        for (const file of keyFiles)for await (const chunk of (0, ($parcel$interopDefault($1x2bD$fs))).createReadStream(file))hasher.update(chunk);
        let lockHash = $d7d08b807e588e31$var$digest(hasher);
        keyFiles.push(...parsedKeyFiles);
        self.keyFiles = $d7d08b807e588e31$var$sort_and_uniq(keyFiles);
        key += `-${lockHash}`;
        self.cacheKey = key;
        self.cachePaths = [
            (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$export$f050d8c8ad3d47a3, "registry"),
            (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$export$f050d8c8ad3d47a3, "git")
        ];
        if (self.cacheBin) self.cachePaths = [
            (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$export$f050d8c8ad3d47a3, "bin"),
            (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$export$f050d8c8ad3d47a3, ".crates.toml"),
            (0, ($parcel$interopDefault($1x2bD$path))).join($d7d08b807e588e31$export$f050d8c8ad3d47a3, ".crates2.json"),
            ...self.cachePaths
        ];
        const cacheTargets = $1irLk.getInput("cache-targets").toLowerCase() || "true";
        if (cacheTargets === "true") self.cachePaths.push(...workspaces.map((ws)=>ws.target));
        const cacheDirectories = $1irLk.getInput("cache-directories");
        for (const dir of cacheDirectories.trim().split(/\s+/).filter(Boolean))self.cachePaths.push(dir);
        const bins = await (0, $jE8wq.getCargoBins)();
        self.cargoBins = Array.from(bins.values());
        return self;
    }
    /**
   * Reads and returns the cache config from the action `state`.
   *
   * @throws {Error} if the state is not present.
   * @returns {CacheConfig} the configuration.
   * @see {@link CacheConfig#saveState}
   * @see {@link CacheConfig#new}
   */ static fromState() {
        const source = $1irLk.getState($d7d08b807e588e31$var$STATE_CONFIG);
        if (!source) throw new Error("Cache configuration not found in state");
        const self = new $d7d08b807e588e31$export$b978f4cf829a09da();
        Object.assign(self, JSON.parse(source));
        self.workspaces = self.workspaces.map((w)=>new (0, $0a74b3eb4297977c$exports.Workspace)(w.root, w.target));
        return self;
    }
    /**
   * Prints the configuration to the action log.
   */ printInfo(cacheProvider) {
        $1irLk.startGroup("Cache Configuration");
        $1irLk.info(`Cache Provider:`);
        $1irLk.info(`    ${cacheProvider.name}`);
        $1irLk.info(`Workspaces:`);
        for (const workspace of this.workspaces)$1irLk.info(`    ${workspace.root}`);
        $1irLk.info(`Cache Paths:`);
        for (const path of this.cachePaths)$1irLk.info(`    ${path}`);
        $1irLk.info(`Restore Key:`);
        $1irLk.info(`    ${this.restoreKey}`);
        $1irLk.info(`Cache Key:`);
        $1irLk.info(`    ${this.cacheKey}`);
        $1irLk.info(`.. Prefix:`);
        $1irLk.info(`  - ${this.keyPrefix}`);
        $1irLk.info(`.. Environment considered:`);
        $1irLk.info(`  - Rust Version: ${this.keyRust}`);
        for (const env of this.keyEnvs)$1irLk.info(`  - ${env}`);
        $1irLk.info(`.. Lockfiles considered:`);
        for (const file of this.keyFiles)$1irLk.info(`  - ${file}`);
        $1irLk.endGroup();
    }
    /**
   * Saves the configuration to the state store.
   * This is used to restore the configuration in the post action.
   */ saveState() {
        $1irLk.saveState($d7d08b807e588e31$var$STATE_CONFIG, this);
    }
}
function $d7d08b807e588e31$export$15ee0593145799df() {
    return $1irLk.getState($d7d08b807e588e31$var$STATE_CONFIG) === "";
}
/**
 * Returns a hex digest of the given hasher truncated to `HASH_LENGTH`.
 *
 * @param hasher The hasher to digest.
 * @returns The hex digest.
 */ function $d7d08b807e588e31$var$digest(hasher) {
    return hasher.digest("hex").substring(0, $d7d08b807e588e31$var$HASH_LENGTH);
}
async function $d7d08b807e588e31$var$getRustVersion() {
    const stdout = await (0, $d9202f3af8784861$exports.getCmdOutput)("rustc", [
        "-vV"
    ]);
    let splits = stdout.split(/[\n\r]+/).filter(Boolean).map((s)=>s.split(":").map((s)=>s.trim())).filter((s)=>s.length === 2);
    return Object.fromEntries(splits);
}
async function $d7d08b807e588e31$var$globFiles(pattern) {
    const globber = await $275a727a91390501$exports.create(pattern, {
        followSymbolicLinks: false
    });
    // fs.statSync resolve the symbolic link and returns stat for the
    // file it pointed to, so isFile would make sure the resolved
    // file is actually a regular file.
    return (await globber.glob()).filter((file)=>(0, ($parcel$interopDefault($1x2bD$fs))).statSync(file).isFile());
}
function $d7d08b807e588e31$var$sort_and_uniq(a) {
    return a.sort((a, b)=>a.localeCompare(b)).reduce((accumulator, currentValue)=>{
        const len = accumulator.length;
        // If accumulator is empty or its last element != currentValue
        // Since array is already sorted, elements with the same value
        // are grouped together to be continugous in space.
        //
        // If currentValue != last element, then it must be unique.
        if (len == 0 || accumulator[len - 1].localeCompare(currentValue) != 0) accumulator.push(currentValue);
        return accumulator;
    }, []);
}


