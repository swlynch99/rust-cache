require("./core.fa35ff64.js");
require("./exec.123e112c.js");
require("./cache.c92d3e34.js");
require("./cache.63bcc5fd.js");
require("./esm.497ab38b.js");
var $kjf1w$fs = require("fs");


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

var $5cw91 = parcelRequire("5cw91");
var $177856ea0811b85b$exports = {};
$177856ea0811b85b$exports = new URL("cache.c92d3e34.js", "file:" + __filename).toString();


var $c57715285d90041b$exports = {};
$c57715285d90041b$exports = new URL("cache.63bcc5fd.js", "file:" + __filename).toString();


var $1b95dc68bb9f4b50$exports = {};
$1b95dc68bb9f4b50$exports = new URL("esm.497ab38b.js", "file:" + __filename).toString();



function $0ac5994c1ad1a1e3$export$b33b857ad1d9900e(e) {
    const { commandFailed: commandFailed } = e;
    if (commandFailed) {
        $AJTaV.error(`Command failed: ${commandFailed.command}`);
        $AJTaV.error(commandFailed.stderr);
    } else $AJTaV.error(`${e.stack}`);
}
async function $0ac5994c1ad1a1e3$export$e854d25df5ba010d(cmd, args = [], options = {}) {
    let stdout = "";
    let stderr = "";
    try {
        await $5cw91.exec(cmd, args, {
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
function $0ac5994c1ad1a1e3$export$72501f1463e2e388() {
    const cacheProvider = $AJTaV.getInput("cache-provider");
    let cache;
    switch(cacheProvider){
        case "github":
            cache = $c57715285d90041b$exports;
            break;
        case "buildjet":
            cache = $177856ea0811b85b$exports;
            break;
        case "gcs":
            cache = $1b95dc68bb9f4b50$exports;
            break;
    }
    if (!cache) throw new Error(`The \`cache-provider\` \`{cacheProvider}\` is not valid.`);
    return {
        name: cacheProvider,
        cache: cache
    };
}
async function $0ac5994c1ad1a1e3$export$f7e9f41ea797a17(path) {
    try {
        await (0, ($parcel$interopDefault($kjf1w$fs))).promises.access(path);
        return true;
    } catch  {
        return false;
    }
}


//# sourceMappingURL=utils.db04e2b5.js.map
