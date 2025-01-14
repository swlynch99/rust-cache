require("./core.da66a1bd.js");
require("./utils.8a3f493e.js");
var $edodO$path = require("path");


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


var $w6zhM = parcelRequire("w6zhM");
const $98752307bf2135f4$var$SAVE_TARGETS = new Set([
    "lib",
    "proc-macro"
]);
class $98752307bf2135f4$export$277a57887e565a09 {
    constructor(root, target){
        this.root = root;
        this.target = target;
    }
    async getPackages(filter, ...extraArgs) {
        let packages = [];
        try {
            $1irLk.debug(`collecting metadata for "${this.root}"`);
            const meta = JSON.parse(await (0, $w6zhM.getCmdOutput)("cargo", [
                "metadata",
                "--all-features",
                "--format-version",
                "1",
                ...extraArgs
            ], {
                cwd: this.root
            }));
            $1irLk.debug(`workspace "${this.root}" has ${meta.packages.length} packages`);
            for (const pkg of meta.packages.filter(filter)){
                const targets = pkg.targets.filter((t)=>t.kind.some((kind)=>$98752307bf2135f4$var$SAVE_TARGETS.has(kind))).map((t)=>t.name);
                packages.push({
                    name: pkg.name,
                    version: pkg.version,
                    targets: targets,
                    path: (0, ($parcel$interopDefault($edodO$path))).dirname(pkg.manifest_path)
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


