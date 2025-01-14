require("./exec.123e112c.js");
var $3vwmD$os = require("os");


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
parcelRegister("bmKR0", function(module, exports) {
"use strict";
var $846617fb0c6b83cc$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $846617fb0c6b83cc$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $846617fb0c6b83cc$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $846617fb0c6b83cc$var$__createBinding(result, mod, k);
    }
    $846617fb0c6b83cc$var$__setModuleDefault(result, mod);
    return result;
};
var $846617fb0c6b83cc$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $846617fb0c6b83cc$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getDetails = module.exports.isLinux = module.exports.isMacOS = module.exports.isWindows = module.exports.arch = module.exports.platform = void 0;

const $846617fb0c6b83cc$var$os_1 = $846617fb0c6b83cc$var$__importDefault($3vwmD$os);

const $846617fb0c6b83cc$var$exec = $846617fb0c6b83cc$var$__importStar((parcelRequire("6Xfhb")));
const $846617fb0c6b83cc$var$getWindowsInfo = ()=>$846617fb0c6b83cc$var$__awaiter(void 0, void 0, void 0, function*() {
        const { stdout: version } = yield $846617fb0c6b83cc$var$exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
            silent: true
        });
        const { stdout: name } = yield $846617fb0c6b83cc$var$exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
            silent: true
        });
        return {
            name: name.trim(),
            version: version.trim()
        };
    });
const $846617fb0c6b83cc$var$getMacOsInfo = ()=>$846617fb0c6b83cc$var$__awaiter(void 0, void 0, void 0, function*() {
        var _a, _b, _c, _d;
        const { stdout: stdout } = yield $846617fb0c6b83cc$var$exec.getExecOutput('sw_vers', undefined, {
            silent: true
        });
        const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
        const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
        return {
            name: name,
            version: version
        };
    });
const $846617fb0c6b83cc$var$getLinuxInfo = ()=>$846617fb0c6b83cc$var$__awaiter(void 0, void 0, void 0, function*() {
        const { stdout: stdout } = yield $846617fb0c6b83cc$var$exec.getExecOutput('lsb_release', [
            '-i',
            '-r',
            '-s'
        ], {
            silent: true
        });
        const [name, version] = stdout.trim().split('\n');
        return {
            name: name,
            version: version
        };
    });
module.exports.platform = $846617fb0c6b83cc$var$os_1.default.platform();
module.exports.arch = $846617fb0c6b83cc$var$os_1.default.arch();
module.exports.isWindows = module.exports.platform === 'win32';
module.exports.isMacOS = module.exports.platform === 'darwin';
module.exports.isLinux = module.exports.platform === 'linux';
function $846617fb0c6b83cc$var$getDetails() {
    return $846617fb0c6b83cc$var$__awaiter(this, void 0, void 0, function*() {
        return Object.assign(Object.assign({}, (yield module.exports.isWindows ? $846617fb0c6b83cc$var$getWindowsInfo() : module.exports.isMacOS ? $846617fb0c6b83cc$var$getMacOsInfo() : $846617fb0c6b83cc$var$getLinuxInfo())), {
            platform: module.exports.platform,
            arch: module.exports.arch,
            isWindows: module.exports.isWindows,
            isMacOS: module.exports.isMacOS,
            isLinux: module.exports.isLinux
        });
    });
}
module.exports.getDetails = $846617fb0c6b83cc$var$getDetails;

});
parcelRegister("6Xfhb", function(module, exports) {
module.exports = new URL("exec.123e112c.js", "file:" + __filename).toString();

});



//# sourceMappingURL=platform.0ca26479.js.map
