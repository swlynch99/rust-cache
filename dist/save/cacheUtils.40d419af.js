require("./core.da66a1bd.js");
require("./exec.c3307bd9.js");
require("./glob.64bd1186.js");
require("./io.5e60f30f.js");
require("./semver.ddb0454d.js");
require("./uuid.a02eb3c8.js");
require("./constants.17ebc7c1.js");
var $7ceis$fs = require("fs");
var $7ceis$path = require("path");
var $7ceis$util = require("util");


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
parcelRegister("ecfnw", function(module, exports) {
"use strict";
var $a55e1d857ebcc4d3$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $a55e1d857ebcc4d3$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $a55e1d857ebcc4d3$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $a55e1d857ebcc4d3$var$__createBinding(result, mod, k);
    }
    $a55e1d857ebcc4d3$var$__setModuleDefault(result, mod);
    return result;
};
var $a55e1d857ebcc4d3$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $a55e1d857ebcc4d3$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
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

const $a55e1d857ebcc4d3$var$core = $a55e1d857ebcc4d3$var$__importStar((parcelRequire("1irLk")));

const $a55e1d857ebcc4d3$var$exec = $a55e1d857ebcc4d3$var$__importStar((parcelRequire("fgXRI")));

const $a55e1d857ebcc4d3$var$glob = $a55e1d857ebcc4d3$var$__importStar((parcelRequire("3KFFp")));

const $a55e1d857ebcc4d3$var$io = $a55e1d857ebcc4d3$var$__importStar((parcelRequire("44PQM")));

const $a55e1d857ebcc4d3$var$fs = $a55e1d857ebcc4d3$var$__importStar($7ceis$fs);

const $a55e1d857ebcc4d3$var$path = $a55e1d857ebcc4d3$var$__importStar($7ceis$path);

const $a55e1d857ebcc4d3$var$semver = $a55e1d857ebcc4d3$var$__importStar((parcelRequire("aVqtB")));

const $a55e1d857ebcc4d3$var$util = $a55e1d857ebcc4d3$var$__importStar($7ceis$util);

var $kWyym = parcelRequire("kWyym");

var $eXNaG = parcelRequire("eXNaG");
// From https://github.com/actions/toolkit/blob/main/packages/tool-cache/src/tool-cache.ts#L23
function $a55e1d857ebcc4d3$var$createTempDirectory() {
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        const IS_WINDOWS = process.platform === 'win32';
        let tempDirectory = process.env['RUNNER_TEMP'] || '';
        if (!tempDirectory) {
            let baseLocation;
            if (IS_WINDOWS) // On Windows use the USERPROFILE env variable
            baseLocation = process.env['USERPROFILE'] || 'C:\\';
            else if (process.platform === 'darwin') baseLocation = '/Users';
            else baseLocation = '/home';
            tempDirectory = $a55e1d857ebcc4d3$var$path.join(baseLocation, 'actions', 'temp');
        }
        const dest = $a55e1d857ebcc4d3$var$path.join(tempDirectory, (0, $kWyym.v4)());
        yield $a55e1d857ebcc4d3$var$io.mkdirP(dest);
        return dest;
    });
}
module.exports.createTempDirectory = $a55e1d857ebcc4d3$var$createTempDirectory;
function $a55e1d857ebcc4d3$var$getArchiveFileSizeInBytes(filePath) {
    return $a55e1d857ebcc4d3$var$fs.statSync(filePath).size;
}
module.exports.getArchiveFileSizeInBytes = $a55e1d857ebcc4d3$var$getArchiveFileSizeInBytes;
function $a55e1d857ebcc4d3$var$resolvePaths(patterns) {
    var e_1, _a;
    var _b;
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        const paths = [];
        const workspace = (_b = process.env['GITHUB_WORKSPACE']) !== null && _b !== void 0 ? _b : process.cwd();
        const globber = yield $a55e1d857ebcc4d3$var$glob.create(patterns.join('\n'), {
            implicitDescendants: false
        });
        try {
            for(var _c = $a55e1d857ebcc4d3$var$__asyncValues(globber.globGenerator()), _d; _d = yield _c.next(), !_d.done;){
                const file = _d.value;
                const relativeFile = $a55e1d857ebcc4d3$var$path.relative(workspace, file).replace(new RegExp(`\\${$a55e1d857ebcc4d3$var$path.sep}`, 'g'), '/');
                $a55e1d857ebcc4d3$var$core.debug(`Matched: ${relativeFile}`);
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
module.exports.resolvePaths = $a55e1d857ebcc4d3$var$resolvePaths;
function $a55e1d857ebcc4d3$var$unlinkFile(filePath) {
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        return $a55e1d857ebcc4d3$var$util.promisify($a55e1d857ebcc4d3$var$fs.unlink)(filePath);
    });
}
module.exports.unlinkFile = $a55e1d857ebcc4d3$var$unlinkFile;
function $a55e1d857ebcc4d3$var$getVersion(app, additionalArgs = []) {
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        let versionOutput = '';
        additionalArgs.push('--version');
        $a55e1d857ebcc4d3$var$core.debug(`Checking ${app} ${additionalArgs.join(' ')}`);
        try {
            yield $a55e1d857ebcc4d3$var$exec.exec(`${app}`, additionalArgs, {
                ignoreReturnCode: true,
                silent: true,
                listeners: {
                    stdout: (data)=>versionOutput += data.toString(),
                    stderr: (data)=>versionOutput += data.toString()
                }
            });
        } catch (err) {
            $a55e1d857ebcc4d3$var$core.debug(err.message);
        }
        versionOutput = versionOutput.trim();
        $a55e1d857ebcc4d3$var$core.debug(versionOutput);
        return versionOutput;
    });
}
// Use zstandard if possible to maximize cache performance
function $a55e1d857ebcc4d3$var$getCompressionMethod() {
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        const versionOutput = yield $a55e1d857ebcc4d3$var$getVersion('zstd', [
            '--quiet'
        ]);
        const version = $a55e1d857ebcc4d3$var$semver.clean(versionOutput);
        $a55e1d857ebcc4d3$var$core.debug(`zstd version: ${version}`);
        if (versionOutput === '') return $eXNaG.CompressionMethod.Gzip;
        else return $eXNaG.CompressionMethod.ZstdWithoutLong;
    });
}
module.exports.getCompressionMethod = $a55e1d857ebcc4d3$var$getCompressionMethod;
function $a55e1d857ebcc4d3$var$getCacheFileName(compressionMethod) {
    return compressionMethod === $eXNaG.CompressionMethod.Gzip ? $eXNaG.CacheFilename.Gzip : $eXNaG.CacheFilename.Zstd;
}
module.exports.getCacheFileName = $a55e1d857ebcc4d3$var$getCacheFileName;
function $a55e1d857ebcc4d3$var$getGnuTarPathOnWindows() {
    return $a55e1d857ebcc4d3$var$__awaiter(this, void 0, void 0, function*() {
        if ($a55e1d857ebcc4d3$var$fs.existsSync($eXNaG.GnuTarPathOnWindows)) return $eXNaG.GnuTarPathOnWindows;
        const versionOutput = yield $a55e1d857ebcc4d3$var$getVersion('tar');
        return versionOutput.toLowerCase().includes('gnu tar') ? $a55e1d857ebcc4d3$var$io.which('tar') : '';
    });
}
module.exports.getGnuTarPathOnWindows = $a55e1d857ebcc4d3$var$getGnuTarPathOnWindows;
function $a55e1d857ebcc4d3$var$assertDefined(name, value) {
    if (value === undefined) throw Error(`Expected ${name} but value was undefiend`);
    return value;
}
module.exports.assertDefined = $a55e1d857ebcc4d3$var$assertDefined;
function $a55e1d857ebcc4d3$var$isGhes() {
    const ghUrl = new URL(process.env['GITHUB_SERVER_URL'] || 'https://github.com');
    return ghUrl.hostname.toUpperCase() !== 'GITHUB.COM';
}
module.exports.isGhes = $a55e1d857ebcc4d3$var$isGhes;

});
parcelRegister("3KFFp", function(module, exports) {
module.exports = new URL("glob.64bd1186.js", "file:" + __filename).toString();

});

parcelRegister("aVqtB", function(module, exports) {
module.exports = new URL("semver.ddb0454d.js", "file:" + __filename).toString();

});

parcelRegister("kWyym", function(module, exports) {
module.exports = new URL("uuid.a02eb3c8.js", "file:" + __filename).toString();

});

parcelRegister("eXNaG", function(module, exports) {
module.exports = new URL("constants.17ebc7c1.js", "file:" + __filename).toString();

});



