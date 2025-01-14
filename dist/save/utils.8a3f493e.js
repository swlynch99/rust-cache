require("./core.da66a1bd.js");
require("./exec.c3307bd9.js");
require("./cache.5c7e6208.js");
require("./cache.4c6941ae.js");
require("./esm.b7d6b04d.js");
var $6YNR8$fs = require("fs");


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

var $fgXRI = parcelRequire("fgXRI");
var $1c9882250c64e7e3$exports = {};
$1c9882250c64e7e3$exports = new URL("cache.5c7e6208.js", "file:" + __filename).toString();


var $4bf503f3d37b9428$exports = {};
$4bf503f3d37b9428$exports = new URL("cache.4c6941ae.js", "file:" + __filename).toString();


var $8d8506e4caf65e35$exports = {};
$8d8506e4caf65e35$exports = new URL("esm.b7d6b04d.js", "file:" + __filename).toString();



function $d178f43dc53f2645$export$b33b857ad1d9900e(e) {
    const { commandFailed: commandFailed } = e;
    if (commandFailed) {
        $1irLk.error(`Command failed: ${commandFailed.command}`);
        $1irLk.error(commandFailed.stderr);
    } else $1irLk.error(`${e.stack}`);
}
async function $d178f43dc53f2645$export$e854d25df5ba010d(cmd, args = [], options = {}) {
    let stdout = "";
    let stderr = "";
    try {
        await $fgXRI.exec(cmd, args, {
            silent: true,
            listeners: {
                stdout (data) {
                    stdout += data.toString();
                },
                stderr (data) {
                    stderr += data.toString();
                }
            },
            ...options
        });
    } catch (e) {
        e.commandFailed = {
            command: `${cmd} ${args.join(" ")}`,
            stderr: stderr
        };
        throw e;
    }
    return stdout;
}
function $d178f43dc53f2645$export$72501f1463e2e388() {
    const cacheProvider = $1irLk.getInput("cache-provider");
    let cache;
    switch(cacheProvider){
        case "github":
            cache = $4bf503f3d37b9428$exports;
            break;
        case "buildjet":
            cache = $1c9882250c64e7e3$exports;
            break;
        case "gcs":
            cache = $8d8506e4caf65e35$exports;
            break;
    }
    if (!cache) throw new Error(`The \`cache-provider\` \`{cacheProvider}\` is not valid.`);
    return {
        name: cacheProvider,
        cache: cache
    };
}
async function $d178f43dc53f2645$export$f7e9f41ea797a17(path) {
    try {
        await (0, ($parcel$interopDefault($6YNR8$fs))).promises.access(path);
        return true;
    } catch  {
        return false;
    }
}


