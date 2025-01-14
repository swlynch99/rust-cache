require("./core.fa35ff64.js");
require("./utils.db04e2b5.js");
var $6Z9vx$path = require("path");


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


var $4u9k0 = parcelRequire("4u9k0");
const $2dee028dc354e30a$var$SAVE_TARGETS = new Set([
    "lib",
    "proc-macro"
]);
class $2dee028dc354e30a$export$277a57887e565a09 {
    constructor(root, target){
        this.root = root;
        this.target = target;
    }
    async getPackages(filter, ...extraArgs) {
        let packages = [];
        try {
            $AJTaV.debug(`collecting metadata for "${this.root}"`);
            const meta = JSON.parse(await (0, $4u9k0.getCmdOutput)("cargo", [
                "metadata",
                "--all-features",
                "--format-version",
                "1",
                ...extraArgs
            ], {
                cwd: this.root
            }));
            $AJTaV.debug(`workspace "${this.root}" has ${meta.packages.length} packages`);
            for (const pkg of meta.packages.filter(filter)){
                const targets = pkg.targets.filter((t)=>t.kind.some((kind)=>$2dee028dc354e30a$var$SAVE_TARGETS.has(kind))).map((t)=>t.name);
                packages.push({
                    name: pkg.name,
                    version: pkg.version,
                    targets: targets,
                    path: (0, ($parcel$interopDefault($6Z9vx$path))).dirname(pkg.manifest_path)
                });
            }
        } catch (err) {
            console.error(err);
        }
        return packages;
    }
    async getPackagesOutsideWorkspaceRoot() {
        return await this.getPackages((pkg)=>!pkg.manifest_path.startsWith(this.root));
    }
    async getWorkspaceMembers() {
        return await this.getPackages((_)=>true, "--no-deps");
    }
}


//# sourceMappingURL=workspace.de4f1baf.js.map
