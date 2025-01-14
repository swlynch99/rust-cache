require("./core.fa35ff64.js");
require("./exec.123e112c.js");
require("./glob.3b2c7507.js");
require("./io.a8d88486.js");
require("./semver.76399bc4.js");
require("./uuid.aa67fd73.js");
require("./constants.3a1f1756.js");
var $3GcjP$fs = require("fs");
var $3GcjP$path = require("path");
var $3GcjP$util = require("util");


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
parcelRegister("5Nzbd", function(module, exports) {
"use strict";
var $438cd15e2dcf9d4d$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $438cd15e2dcf9d4d$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $438cd15e2dcf9d4d$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $438cd15e2dcf9d4d$var$__createBinding(result, mod, k);
    }
    $438cd15e2dcf9d4d$var$__setModuleDefault(result, mod);
    return result;
};
var $438cd15e2dcf9d4d$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $438cd15e2dcf9d4d$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isGhes = module.exports.assertDefined = module.exports.getGnuTarPathOnWindows = module.exports.getCacheFileName = module.exports.getCompressionMethod = module.exports.unlinkFile = module.exports.resolvePaths = module.exports.getArchiveFileSizeInBytes = module.exports.createTempDirectory = void 0;

const $438cd15e2dcf9d4d$var$core = $438cd15e2dcf9d4d$var$__importStar((parcelRequire("AJTaV")));

const $438cd15e2dcf9d4d$var$exec = $438cd15e2dcf9d4d$var$__importStar((parcelRequire("5cw91")));

const $438cd15e2dcf9d4d$var$glob = $438cd15e2dcf9d4d$var$__importStar((parcelRequire("dIqNS")));

const $438cd15e2dcf9d4d$var$io = $438cd15e2dcf9d4d$var$__importStar((parcelRequire("8EyRf")));

const $438cd15e2dcf9d4d$var$fs = $438cd15e2dcf9d4d$var$__importStar($3GcjP$fs);

const $438cd15e2dcf9d4d$var$path = $438cd15e2dcf9d4d$var$__importStar($3GcjP$path);

const $438cd15e2dcf9d4d$var$semver = $438cd15e2dcf9d4d$var$__importStar((parcelRequire("hNerP")));

const $438cd15e2dcf9d4d$var$util = $438cd15e2dcf9d4d$var$__importStar($3GcjP$util);

var $47ETm = parcelRequire("47ETm");

var $4yMWI = parcelRequire("4yMWI");
// From https://github.com/actions/toolkit/blob/main/packages/tool-cache/src/tool-cache.ts#L23
function $438cd15e2dcf9d4d$var$createTempDirectory() {
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        const IS_WINDOWS = process.platform === 'win32';
        let tempDirectory = process.env['RUNNER_TEMP'] || '';
        if (!tempDirectory) {
            let baseLocation;
            if (IS_WINDOWS) // On Windows use the USERPROFILE env variable
            baseLocation = process.env['USERPROFILE'] || 'C:\\';
            else if (process.platform === 'darwin') baseLocation = '/Users';
            else baseLocation = '/home';
            tempDirectory = $438cd15e2dcf9d4d$var$path.join(baseLocation, 'actions', 'temp');
        }
        const dest = $438cd15e2dcf9d4d$var$path.join(tempDirectory, (0, $47ETm.v4)());
        yield $438cd15e2dcf9d4d$var$io.mkdirP(dest);
        return dest;
    });
}
module.exports.createTempDirectory = $438cd15e2dcf9d4d$var$createTempDirectory;
function $438cd15e2dcf9d4d$var$getArchiveFileSizeInBytes(filePath) {
    return $438cd15e2dcf9d4d$var$fs.statSync(filePath).size;
}
module.exports.getArchiveFileSizeInBytes = $438cd15e2dcf9d4d$var$getArchiveFileSizeInBytes;
function $438cd15e2dcf9d4d$var$resolvePaths(patterns) {
    var e_1, _a;
    var _b;
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        const paths = [];
        const workspace = (_b = process.env['GITHUB_WORKSPACE']) !== null && _b !== void 0 ? _b : process.cwd();
        const globber = yield $438cd15e2dcf9d4d$var$glob.create(patterns.join('\n'), {
            implicitDescendants: false
        });
        try {
            for(var _c = $438cd15e2dcf9d4d$var$__asyncValues(globber.globGenerator()), _d; _d = yield _c.next(), !_d.done;){
                const file = _d.value;
                const relativeFile = $438cd15e2dcf9d4d$var$path.relative(workspace, file).replace(new RegExp(`\\${$438cd15e2dcf9d4d$var$path.sep}`, 'g'), '/');
                $438cd15e2dcf9d4d$var$core.debug(`Matched: ${relativeFile}`);
                // Paths are made relative so the tar entries are all relative to the root of the workspace.
                if (relativeFile === '') // path.relative returns empty string if workspace and file are equal
                paths.push('.');
                else paths.push(`${relativeFile}`);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_d && !_d.done && (_a = _c.return)) yield _a.call(_c);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return paths;
    });
}
module.exports.resolvePaths = $438cd15e2dcf9d4d$var$resolvePaths;
function $438cd15e2dcf9d4d$var$unlinkFile(filePath) {
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        return $438cd15e2dcf9d4d$var$util.promisify($438cd15e2dcf9d4d$var$fs.unlink)(filePath);
    });
}
module.exports.unlinkFile = $438cd15e2dcf9d4d$var$unlinkFile;
function $438cd15e2dcf9d4d$var$getVersion(app, additionalArgs = []) {
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        let versionOutput = '';
        additionalArgs.push('--version');
        $438cd15e2dcf9d4d$var$core.debug(`Checking ${app} ${additionalArgs.join(' ')}`);
        try {
            yield $438cd15e2dcf9d4d$var$exec.exec(`${app}`, additionalArgs, {
                ignoreReturnCode: true,
                silent: true,
                listeners: {
                    stdout: (data)=>versionOutput += data.toString(),
                    stderr: (data)=>versionOutput += data.toString()
                }
            });
        } catch (err) {
            $438cd15e2dcf9d4d$var$core.debug(err.message);
        }
        versionOutput = versionOutput.trim();
        $438cd15e2dcf9d4d$var$core.debug(versionOutput);
        return versionOutput;
    });
}
// Use zstandard if possible to maximize cache performance
function $438cd15e2dcf9d4d$var$getCompressionMethod() {
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        const versionOutput = yield $438cd15e2dcf9d4d$var$getVersion('zstd', [
            '--quiet'
        ]);
        const version = $438cd15e2dcf9d4d$var$semver.clean(versionOutput);
        $438cd15e2dcf9d4d$var$core.debug(`zstd version: ${version}`);
        if (versionOutput === '') return $4yMWI.CompressionMethod.Gzip;
        else return $4yMWI.CompressionMethod.ZstdWithoutLong;
    });
}
module.exports.getCompressionMethod = $438cd15e2dcf9d4d$var$getCompressionMethod;
function $438cd15e2dcf9d4d$var$getCacheFileName(compressionMethod) {
    return compressionMethod === $4yMWI.CompressionMethod.Gzip ? $4yMWI.CacheFilename.Gzip : $4yMWI.CacheFilename.Zstd;
}
module.exports.getCacheFileName = $438cd15e2dcf9d4d$var$getCacheFileName;
function $438cd15e2dcf9d4d$var$getGnuTarPathOnWindows() {
    return $438cd15e2dcf9d4d$var$__awaiter(this, void 0, void 0, function*() {
        if ($438cd15e2dcf9d4d$var$fs.existsSync($4yMWI.GnuTarPathOnWindows)) return $4yMWI.GnuTarPathOnWindows;
        const versionOutput = yield $438cd15e2dcf9d4d$var$getVersion('tar');
        return versionOutput.toLowerCase().includes('gnu tar') ? $438cd15e2dcf9d4d$var$io.which('tar') : '';
    });
}
module.exports.getGnuTarPathOnWindows = $438cd15e2dcf9d4d$var$getGnuTarPathOnWindows;
function $438cd15e2dcf9d4d$var$assertDefined(name, value) {
    if (value === undefined) throw Error(`Expected ${name} but value was undefiend`);
    return value;
}
module.exports.assertDefined = $438cd15e2dcf9d4d$var$assertDefined;
function $438cd15e2dcf9d4d$var$isGhes() {
    const ghUrl = new URL(process.env['GITHUB_SERVER_URL'] || 'https://github.com');
    return ghUrl.hostname.toUpperCase() !== 'GITHUB.COM';
}
module.exports.isGhes = $438cd15e2dcf9d4d$var$isGhes;

});
parcelRegister("dIqNS", function(module, exports) {
module.exports = new URL("glob.3b2c7507.js", "file:" + __filename).toString();

});

parcelRegister("hNerP", function(module, exports) {
module.exports = new URL("semver.76399bc4.js", "file:" + __filename).toString();

});

parcelRegister("47ETm", function(module, exports) {
module.exports = new URL("uuid.aa67fd73.js", "file:" + __filename).toString();

});

parcelRegister("4yMWI", function(module, exports) {
module.exports = new URL("constants.3a1f1756.js", "file:" + __filename).toString();

});



//# sourceMappingURL=cacheUtils.fb4919b4.js.map
