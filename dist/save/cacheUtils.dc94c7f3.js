require("./core.da66a1bd.js");
require("./exec.c3307bd9.js");
require("./glob.e9191789.js");
require("./io.5e60f30f.js");
require("./semver.ddb0454d.js");
require("./constants.4b4283e3.js");
var $izc4p$crypto = require("crypto");
var $izc4p$fs = require("fs");
var $izc4p$path = require("path");
var $izc4p$util = require("util");


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
parcelRegister("5xPwS", function(module, exports) {
"use strict";
var $409801708e450203$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $409801708e450203$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $409801708e450203$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $409801708e450203$var$__createBinding(result, mod, k);
    }
    $409801708e450203$var$__setModuleDefault(result, mod);
    return result;
};
var $409801708e450203$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $409801708e450203$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
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
module.exports.getRuntimeToken = module.exports.getCacheVersion = module.exports.assertDefined = module.exports.getGnuTarPathOnWindows = module.exports.getCacheFileName = module.exports.getCompressionMethod = module.exports.unlinkFile = module.exports.resolvePaths = module.exports.getArchiveFileSizeInBytes = module.exports.createTempDirectory = void 0;

const $409801708e450203$var$core = $409801708e450203$var$__importStar((parcelRequire("1irLk")));

const $409801708e450203$var$exec = $409801708e450203$var$__importStar((parcelRequire("fgXRI")));

const $409801708e450203$var$glob = $409801708e450203$var$__importStar((parcelRequire("fzY1L")));

const $409801708e450203$var$io = $409801708e450203$var$__importStar((parcelRequire("44PQM")));

const $409801708e450203$var$crypto = $409801708e450203$var$__importStar($izc4p$crypto);

const $409801708e450203$var$fs = $409801708e450203$var$__importStar($izc4p$fs);

const $409801708e450203$var$path = $409801708e450203$var$__importStar($izc4p$path);

const $409801708e450203$var$semver = $409801708e450203$var$__importStar((parcelRequire("1Naus")));

const $409801708e450203$var$util = $409801708e450203$var$__importStar($izc4p$util);

var $cMf6B = parcelRequire("cMf6B");
const $409801708e450203$var$versionSalt = '1.0';
// From https://github.com/actions/toolkit/blob/main/packages/tool-cache/src/tool-cache.ts#L23
function $409801708e450203$var$createTempDirectory() {
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        const IS_WINDOWS = process.platform === 'win32';
        let tempDirectory = process.env['RUNNER_TEMP'] || '';
        if (!tempDirectory) {
            let baseLocation;
            if (IS_WINDOWS) // On Windows use the USERPROFILE env variable
            baseLocation = process.env['USERPROFILE'] || 'C:\\';
            else if (process.platform === 'darwin') baseLocation = '/Users';
            else baseLocation = '/home';
            tempDirectory = $409801708e450203$var$path.join(baseLocation, 'actions', 'temp');
        }
        const dest = $409801708e450203$var$path.join(tempDirectory, $409801708e450203$var$crypto.randomUUID());
        yield $409801708e450203$var$io.mkdirP(dest);
        return dest;
    });
}
module.exports.createTempDirectory = $409801708e450203$var$createTempDirectory;
function $409801708e450203$var$getArchiveFileSizeInBytes(filePath) {
    return $409801708e450203$var$fs.statSync(filePath).size;
}
module.exports.getArchiveFileSizeInBytes = $409801708e450203$var$getArchiveFileSizeInBytes;
function $409801708e450203$var$resolvePaths(patterns) {
    var _a, e_1, _b, _c;
    var _d;
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        const paths = [];
        const workspace = (_d = process.env['GITHUB_WORKSPACE']) !== null && _d !== void 0 ? _d : process.cwd();
        const globber = yield $409801708e450203$var$glob.create(patterns.join('\n'), {
            implicitDescendants: false
        });
        try {
            for(var _e = true, _f = $409801708e450203$var$__asyncValues(globber.globGenerator()), _g; _g = yield _f.next(), _a = _g.done, !_a; _e = true){
                _c = _g.value;
                _e = false;
                const file = _c;
                const relativeFile = $409801708e450203$var$path.relative(workspace, file).replace(new RegExp(`\\${$409801708e450203$var$path.sep}`, 'g'), '/');
                $409801708e450203$var$core.debug(`Matched: ${relativeFile}`);
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
                if (!_e && !_a && (_b = _f.return)) yield _b.call(_f);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return paths;
    });
}
module.exports.resolvePaths = $409801708e450203$var$resolvePaths;
function $409801708e450203$var$unlinkFile(filePath) {
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        return $409801708e450203$var$util.promisify($409801708e450203$var$fs.unlink)(filePath);
    });
}
module.exports.unlinkFile = $409801708e450203$var$unlinkFile;
function $409801708e450203$var$getVersion(app, additionalArgs = []) {
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        let versionOutput = '';
        additionalArgs.push('--version');
        $409801708e450203$var$core.debug(`Checking ${app} ${additionalArgs.join(' ')}`);
        try {
            yield $409801708e450203$var$exec.exec(`${app}`, additionalArgs, {
                ignoreReturnCode: true,
                silent: true,
                listeners: {
                    stdout: (data)=>versionOutput += data.toString(),
                    stderr: (data)=>versionOutput += data.toString()
                }
            });
        } catch (err) {
            $409801708e450203$var$core.debug(err.message);
        }
        versionOutput = versionOutput.trim();
        $409801708e450203$var$core.debug(versionOutput);
        return versionOutput;
    });
}
// Use zstandard if possible to maximize cache performance
function $409801708e450203$var$getCompressionMethod() {
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        const versionOutput = yield $409801708e450203$var$getVersion('zstd', [
            '--quiet'
        ]);
        const version = $409801708e450203$var$semver.clean(versionOutput);
        $409801708e450203$var$core.debug(`zstd version: ${version}`);
        if (versionOutput === '') return $cMf6B.CompressionMethod.Gzip;
        else return $cMf6B.CompressionMethod.ZstdWithoutLong;
    });
}
module.exports.getCompressionMethod = $409801708e450203$var$getCompressionMethod;
function $409801708e450203$var$getCacheFileName(compressionMethod) {
    return compressionMethod === $cMf6B.CompressionMethod.Gzip ? $cMf6B.CacheFilename.Gzip : $cMf6B.CacheFilename.Zstd;
}
module.exports.getCacheFileName = $409801708e450203$var$getCacheFileName;
function $409801708e450203$var$getGnuTarPathOnWindows() {
    return $409801708e450203$var$__awaiter(this, void 0, void 0, function*() {
        if ($409801708e450203$var$fs.existsSync($cMf6B.GnuTarPathOnWindows)) return $cMf6B.GnuTarPathOnWindows;
        const versionOutput = yield $409801708e450203$var$getVersion('tar');
        return versionOutput.toLowerCase().includes('gnu tar') ? $409801708e450203$var$io.which('tar') : '';
    });
}
module.exports.getGnuTarPathOnWindows = $409801708e450203$var$getGnuTarPathOnWindows;
function $409801708e450203$var$assertDefined(name, value) {
    if (value === undefined) throw Error(`Expected ${name} but value was undefiend`);
    return value;
}
module.exports.assertDefined = $409801708e450203$var$assertDefined;
function $409801708e450203$var$getCacheVersion(paths, compressionMethod, enableCrossOsArchive = false) {
    // don't pass changes upstream
    const components = paths.slice();
    // Add compression method to cache version to restore
    // compressed cache as per compression method
    if (compressionMethod) components.push(compressionMethod);
    // Only check for windows platforms if enableCrossOsArchive is false
    if (process.platform === 'win32' && !enableCrossOsArchive) components.push('windows-only');
    // Add salt to cache version to support breaking changes in cache entry
    components.push($409801708e450203$var$versionSalt);
    return $409801708e450203$var$crypto.createHash('sha256').update(components.join('|')).digest('hex');
}
module.exports.getCacheVersion = $409801708e450203$var$getCacheVersion;
function $409801708e450203$var$getRuntimeToken() {
    const token = process.env['ACTIONS_RUNTIME_TOKEN'];
    if (!token) throw new Error('Unable to get the ACTIONS_RUNTIME_TOKEN env variable');
    return token;
}
module.exports.getRuntimeToken = $409801708e450203$var$getRuntimeToken;

});
parcelRegister("fzY1L", function(module, exports) {
module.exports = new URL("glob.e9191789.js", "file:" + __filename).toString();

});

parcelRegister("cMf6B", function(module, exports) {
module.exports = new URL("constants.4b4283e3.js", "file:" + __filename).toString();

});



