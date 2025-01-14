require("./core.fa35ff64.js");
require("./glob.d60eb4ec.js");
require("./dist.736169b4.js");
require("./cleanup.624f091f.js");
require("./utils.db04e2b5.js");
require("./workspace.de4f1baf.js");
var $Hey1M$crypto = require("crypto");
var $Hey1M$fs = require("fs");
var $Hey1M$fspromises = require("fs/promises");
var $Hey1M$os = require("os");
var $Hey1M$path = require("path");


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
var $b815a61ebf5077f8$exports = {};
$b815a61ebf5077f8$exports = new URL("glob.d60eb4ec.js", "file:" + __filename).toString();







var $28641fab60106129$exports = {};
$28641fab60106129$exports = new URL("dist.736169b4.js", "file:" + __filename).toString();



var $c2u7m = parcelRequire("c2u7m");
var $ffdd68c029ee462b$exports = {};
$ffdd68c029ee462b$exports = new URL("utils.db04e2b5.js", "file:" + __filename).toString();


var $49663caf92865e7c$exports = {};
$49663caf92865e7c$exports = new URL("workspace.de4f1baf.js", "file:" + __filename).toString();


const $7dfb127688f878e4$var$HOME = (0, ($parcel$interopDefault($Hey1M$os))).homedir();
const $7dfb127688f878e4$export$f050d8c8ad3d47a3 = process.env.CARGO_HOME || (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$var$HOME, ".cargo");
const $7dfb127688f878e4$var$STATE_CONFIG = "RUST_CACHE_CONFIG";
const $7dfb127688f878e4$var$HASH_LENGTH = 8;
class $7dfb127688f878e4$export$b978f4cf829a09da {
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
        const self = new $7dfb127688f878e4$export$b978f4cf829a09da();
        // Construct key prefix:
        // This uses either the `shared-key` input,
        // or the `key` input combined with the `job` key.
        let key = $AJTaV.getInput("prefix-key") || "v0-rust";
        const sharedKey = $AJTaV.getInput("shared-key");
        if (sharedKey) key += `-${sharedKey}`;
        else {
            const inputKey = $AJTaV.getInput("key");
            if (inputKey) key += `-${inputKey}`;
            const job = process.env.GITHUB_JOB;
            if (job) key += `-${job}`;
        }
        // Add runner OS to the key to avoid cross-contamination of cache
        const runnerOS = (0, ($parcel$interopDefault($Hey1M$os))).type();
        key += `-${runnerOS}`;
        self.keyPrefix = key;
        // Construct environment portion of the key:
        // This consists of a hash that considers the rust version
        // as well as all the environment variables as given by a default list
        // and the `env-vars` input.
        // The env vars are sorted, matched by prefix and hashed into the
        // resulting environment hash.
        let hasher = (0, ($parcel$interopDefault($Hey1M$crypto))).createHash("sha1");
        const rustVersion = await $7dfb127688f878e4$var$getRustVersion();
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
        envPrefixes.push(...$AJTaV.getInput("env-vars").split(/\s+/).filter(Boolean));
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
        key += `-${$7dfb127688f878e4$var$digest(hasher)}`;
        self.restoreKey = key;
        // Construct the lockfiles portion of the key:
        // This considers all the files found via globbing for various manifests
        // and lockfiles.
        self.cacheBin = $AJTaV.getInput("cache-bin").toLowerCase() == "true";
        // Constructs the workspace config and paths to restore:
        // The workspaces are given using a `$workspace -> $target` syntax.
        const workspaces = [];
        const workspacesInput = $AJTaV.getInput("workspaces") || ".";
        for (const workspace of workspacesInput.trim().split("\n")){
            let [root, target = "target"] = workspace.split("->").map((s)=>s.trim());
            root = (0, ($parcel$interopDefault($Hey1M$path))).resolve(root);
            target = (0, ($parcel$interopDefault($Hey1M$path))).join(root, target);
            workspaces.push(new (0, $49663caf92865e7c$exports.Workspace)(root, target));
        }
        self.workspaces = workspaces;
        let keyFiles = await $7dfb127688f878e4$var$globFiles(".cargo/config.toml\nrust-toolchain\nrust-toolchain.toml");
        const parsedKeyFiles = []; // keyFiles that are parsed, pre-processed and hashed
        hasher = (0, ($parcel$interopDefault($Hey1M$crypto))).createHash("sha1");
        for (const workspace of workspaces){
            const root = workspace.root;
            keyFiles.push(...await $7dfb127688f878e4$var$globFiles(`${root}/**/.cargo/config.toml\n${root}/**/rust-toolchain\n${root}/**/rust-toolchain.toml`));
            const workspaceMembers = await workspace.getWorkspaceMembers();
            const cargo_manifests = $7dfb127688f878e4$var$sort_and_uniq(workspaceMembers.map((member)=>(0, ($parcel$interopDefault($Hey1M$path))).join(member.path, "Cargo.toml")));
            for (const cargo_manifest of cargo_manifests)try {
                const content = await (0, ($parcel$interopDefault($Hey1M$fspromises))).readFile(cargo_manifest, {
                    encoding: "utf8"
                });
                // Use any since TomlPrimitive is not exposed
                const parsed = $28641fab60106129$exports.parse(content);
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
                $AJTaV.warning(`Error parsing Cargo.toml manifest, fallback to caching entire file: ${e}`);
                keyFiles.push(cargo_manifest);
            }
            const cargo_lock = (0, ($parcel$interopDefault($Hey1M$path))).join(workspace.root, "Cargo.lock");
            if (await (0, $ffdd68c029ee462b$exports.exists)(cargo_lock)) try {
                const content = await (0, ($parcel$interopDefault($Hey1M$fspromises))).readFile(cargo_lock, {
                    encoding: "utf8"
                });
                const parsed = $28641fab60106129$exports.parse(content);
                if (parsed.version !== 3 && parsed.version !== 4 || !("package" in parsed)) {
                    // Fallback to caching them as regular file since this action
                    // can only handle Cargo.lock format version 3
                    $AJTaV.warning("Unsupported Cargo.lock format, fallback to caching entire file");
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
                $AJTaV.warning(`Error parsing Cargo.lock manifest, fallback to caching entire file: ${e}`);
                keyFiles.push(cargo_lock);
            }
        }
        keyFiles = $7dfb127688f878e4$var$sort_and_uniq(keyFiles);
        for (const file of keyFiles)for await (const chunk of (0, ($parcel$interopDefault($Hey1M$fs))).createReadStream(file))hasher.update(chunk);
        let lockHash = $7dfb127688f878e4$var$digest(hasher);
        keyFiles.push(...parsedKeyFiles);
        self.keyFiles = $7dfb127688f878e4$var$sort_and_uniq(keyFiles);
        key += `-${lockHash}`;
        self.cacheKey = key;
        self.cachePaths = [
            (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$export$f050d8c8ad3d47a3, "registry"),
            (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$export$f050d8c8ad3d47a3, "git")
        ];
        if (self.cacheBin) self.cachePaths = [
            (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$export$f050d8c8ad3d47a3, "bin"),
            (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$export$f050d8c8ad3d47a3, ".crates.toml"),
            (0, ($parcel$interopDefault($Hey1M$path))).join($7dfb127688f878e4$export$f050d8c8ad3d47a3, ".crates2.json"),
            ...self.cachePaths
        ];
        const cacheTargets = $AJTaV.getInput("cache-targets").toLowerCase() || "true";
        if (cacheTargets === "true") self.cachePaths.push(...workspaces.map((ws)=>ws.target));
        const cacheDirectories = $AJTaV.getInput("cache-directories");
        for (const dir of cacheDirectories.trim().split(/\s+/).filter(Boolean))self.cachePaths.push(dir);
        const bins = await (0, $c2u7m.getCargoBins)();
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
        const source = $AJTaV.getState($7dfb127688f878e4$var$STATE_CONFIG);
        if (!source) throw new Error("Cache configuration not found in state");
        const self = new $7dfb127688f878e4$export$b978f4cf829a09da();
        Object.assign(self, JSON.parse(source));
        self.workspaces = self.workspaces.map((w)=>new (0, $49663caf92865e7c$exports.Workspace)(w.root, w.target));
        return self;
    }
    /**
   * Prints the configuration to the action log.
   */ printInfo(cacheProvider) {
        $AJTaV.startGroup("Cache Configuration");
        $AJTaV.info(`Cache Provider:`);
        $AJTaV.info(`    ${cacheProvider.name}`);
        $AJTaV.info(`Workspaces:`);
        for (const workspace of this.workspaces)$AJTaV.info(`    ${workspace.root}`);
        $AJTaV.info(`Cache Paths:`);
        for (const path of this.cachePaths)$AJTaV.info(`    ${path}`);
        $AJTaV.info(`Restore Key:`);
        $AJTaV.info(`    ${this.restoreKey}`);
        $AJTaV.info(`Cache Key:`);
        $AJTaV.info(`    ${this.cacheKey}`);
        $AJTaV.info(`.. Prefix:`);
        $AJTaV.info(`  - ${this.keyPrefix}`);
        $AJTaV.info(`.. Environment considered:`);
        $AJTaV.info(`  - Rust Version: ${this.keyRust}`);
        for (const env of this.keyEnvs)$AJTaV.info(`  - ${env}`);
        $AJTaV.info(`.. Lockfiles considered:`);
        for (const file of this.keyFiles)$AJTaV.info(`  - ${file}`);
        $AJTaV.endGroup();
    }
    /**
   * Saves the configuration to the state store.
   * This is used to restore the configuration in the post action.
   */ saveState() {
        $AJTaV.saveState($7dfb127688f878e4$var$STATE_CONFIG, this);
    }
}
function $7dfb127688f878e4$export$15ee0593145799df() {
    return $AJTaV.getState($7dfb127688f878e4$var$STATE_CONFIG) === "";
}
/**
 * Returns a hex digest of the given hasher truncated to `HASH_LENGTH`.
 *
 * @param hasher The hasher to digest.
 * @returns The hex digest.
 */ function $7dfb127688f878e4$var$digest(hasher) {
    return hasher.digest("hex").substring(0, $7dfb127688f878e4$var$HASH_LENGTH);
}
async function $7dfb127688f878e4$var$getRustVersion() {
    const stdout = await (0, $ffdd68c029ee462b$exports.getCmdOutput)("rustc", [
        "-vV"
    ]);
    let splits = stdout.split(/[\n\r]+/).filter(Boolean).map((s)=>s.split(":").map((s)=>s.trim())).filter((s)=>s.length === 2);
    return Object.fromEntries(splits);
}
async function $7dfb127688f878e4$var$globFiles(pattern) {
    const globber = await $b815a61ebf5077f8$exports.create(pattern, {
        followSymbolicLinks: false
    });
    // fs.statSync resolve the symbolic link and returns stat for the
    // file it pointed to, so isFile would make sure the resolved
    // file is actually a regular file.
    return (await globber.glob()).filter((file)=>(0, ($parcel$interopDefault($Hey1M$fs))).statSync(file).isFile());
}
function $7dfb127688f878e4$var$sort_and_uniq(a) {
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


//# sourceMappingURL=config.cb10cea2.js.map
