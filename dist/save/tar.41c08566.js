require("./exec.c3307bd9.js");
require("./io.5e60f30f.js");
require("./cacheUtils.40d419af.js");
require("./constants.17ebc7c1.js");
var $1XPEC$fs = require("fs");
var $1XPEC$path = require("path");


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
"use strict";
var $e796bade2bd0c6e6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $e796bade2bd0c6e6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e796bade2bd0c6e6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e796bade2bd0c6e6$var$__createBinding(result, mod, k);
    }
    $e796bade2bd0c6e6$var$__setModuleDefault(result, mod);
    return result;
};
var $e796bade2bd0c6e6$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.createTar = module.exports.extractTar = module.exports.listTar = void 0;

var $fgXRI = parcelRequire("fgXRI");

const $e796bade2bd0c6e6$var$io = $e796bade2bd0c6e6$var$__importStar((parcelRequire("44PQM")));


const $e796bade2bd0c6e6$var$path = $e796bade2bd0c6e6$var$__importStar($1XPEC$path);

const $e796bade2bd0c6e6$var$utils = $e796bade2bd0c6e6$var$__importStar((parcelRequire("ecfnw")));

var $3osl1 = parcelRequire("3osl1");
const $e796bade2bd0c6e6$var$IS_WINDOWS = process.platform === 'win32';
// Returns tar path and type: BSD or GNU
function $e796bade2bd0c6e6$var$getTarPath() {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        switch(process.platform){
            case 'win32':
                {
                    const gnuTar = yield $e796bade2bd0c6e6$var$utils.getGnuTarPathOnWindows();
                    const systemTar = $3osl1.SystemTarPathOnWindows;
                    if (gnuTar) // Use GNUtar as default on windows
                    return {
                        path: gnuTar,
                        type: $3osl1.ArchiveToolType.GNU
                    };
                    else if ((0, $1XPEC$fs.existsSync)(systemTar)) return {
                        path: systemTar,
                        type: $3osl1.ArchiveToolType.BSD
                    };
                    break;
                }
            case 'darwin':
                {
                    const gnuTar = yield $e796bade2bd0c6e6$var$io.which('gtar', false);
                    if (gnuTar) // fix permission denied errors when extracting BSD tar archive with GNU tar - https://github.com/actions/cache/issues/527
                    return {
                        path: gnuTar,
                        type: $3osl1.ArchiveToolType.GNU
                    };
                    else return {
                        path: yield $e796bade2bd0c6e6$var$io.which('tar', true),
                        type: $3osl1.ArchiveToolType.BSD
                    };
                }
            default:
                break;
        }
        // Default assumption is GNU tar is present in path
        return {
            path: yield $e796bade2bd0c6e6$var$io.which('tar', true),
            type: $3osl1.ArchiveToolType.GNU
        };
    });
}
// Return arguments for tar as per tarPath, compressionMethod, method type and os
function $e796bade2bd0c6e6$var$getTarArgs(tarPath, compressionMethod, type, archivePath = '') {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        const args = [
            `"${tarPath.path}"`
        ];
        const cacheFileName = $e796bade2bd0c6e6$var$utils.getCacheFileName(compressionMethod);
        const tarFile = 'cache.tar';
        const workingDirectory = $e796bade2bd0c6e6$var$getWorkingDirectory();
        // Speficic args for BSD tar on windows for workaround
        const BSD_TAR_ZSTD = tarPath.type === $3osl1.ArchiveToolType.BSD && compressionMethod !== $3osl1.CompressionMethod.Gzip && $e796bade2bd0c6e6$var$IS_WINDOWS;
        // Method specific args
        switch(type){
            case 'create':
                args.push('--posix', '-cf', BSD_TAR_ZSTD ? tarFile : cacheFileName.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'), '--exclude', BSD_TAR_ZSTD ? tarFile : cacheFileName.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'), '-P', '-C', workingDirectory.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'), '--files-from', $3osl1.ManifestFilename);
                break;
            case 'extract':
                args.push('-xf', BSD_TAR_ZSTD ? tarFile : archivePath.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'), '-P', '-C', workingDirectory.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'));
                break;
            case 'list':
                args.push('-tf', BSD_TAR_ZSTD ? tarFile : archivePath.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'), '-P');
                break;
        }
        // Platform specific args
        if (tarPath.type === $3osl1.ArchiveToolType.GNU) switch(process.platform){
            case 'win32':
                args.push('--force-local');
                break;
            case 'darwin':
                args.push('--delay-directory-restore');
                break;
        }
        return args;
    });
}
// Returns commands to run tar and compression program
function $e796bade2bd0c6e6$var$getCommands(compressionMethod, type, archivePath = '') {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        let args;
        const tarPath = yield $e796bade2bd0c6e6$var$getTarPath();
        const tarArgs = yield $e796bade2bd0c6e6$var$getTarArgs(tarPath, compressionMethod, type, archivePath);
        const compressionArgs = type !== 'create' ? yield $e796bade2bd0c6e6$var$getDecompressionProgram(tarPath, compressionMethod, archivePath) : yield $e796bade2bd0c6e6$var$getCompressionProgram(tarPath, compressionMethod);
        const BSD_TAR_ZSTD = tarPath.type === $3osl1.ArchiveToolType.BSD && compressionMethod !== $3osl1.CompressionMethod.Gzip && $e796bade2bd0c6e6$var$IS_WINDOWS;
        if (BSD_TAR_ZSTD && type !== 'create') args = [
            [
                ...compressionArgs
            ].join(' '),
            [
                ...tarArgs
            ].join(' ')
        ];
        else args = [
            [
                ...tarArgs
            ].join(' '),
            [
                ...compressionArgs
            ].join(' ')
        ];
        if (BSD_TAR_ZSTD) return args;
        return [
            args.join(' ')
        ];
    });
}
function $e796bade2bd0c6e6$var$getWorkingDirectory() {
    var _a;
    return (_a = process.env['GITHUB_WORKSPACE']) !== null && _a !== void 0 ? _a : process.cwd();
}
// Common function for extractTar and listTar to get the compression method
function $e796bade2bd0c6e6$var$getDecompressionProgram(tarPath, compressionMethod, archivePath) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        // -d: Decompress.
        // unzstd is equivalent to 'zstd -d'
        // --long=#: Enables long distance matching with # bits. Maximum is 30 (1GB) on 32-bit OS and 31 (2GB) on 64-bit.
        // Using 30 here because we also support 32-bit self-hosted runners.
        const BSD_TAR_ZSTD = tarPath.type === $3osl1.ArchiveToolType.BSD && compressionMethod !== $3osl1.CompressionMethod.Gzip && $e796bade2bd0c6e6$var$IS_WINDOWS;
        switch(compressionMethod){
            case $3osl1.CompressionMethod.Zstd:
                return BSD_TAR_ZSTD ? [
                    'zstd -d --long=30 --force -o',
                    $3osl1.TarFilename,
                    archivePath.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/')
                ] : [
                    '--use-compress-program',
                    $e796bade2bd0c6e6$var$IS_WINDOWS ? '"zstd -d --long=30"' : 'unzstd --long=30'
                ];
            case $3osl1.CompressionMethod.ZstdWithoutLong:
                return BSD_TAR_ZSTD ? [
                    'zstd -d --force -o',
                    $3osl1.TarFilename,
                    archivePath.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/')
                ] : [
                    '--use-compress-program',
                    $e796bade2bd0c6e6$var$IS_WINDOWS ? '"zstd -d"' : 'unzstd'
                ];
            default:
                return [
                    '-z'
                ];
        }
    });
}
// Used for creating the archive
// -T#: Compress using # working thread. If # is 0, attempt to detect and use the number of physical CPU cores.
// zstdmt is equivalent to 'zstd -T0'
// --long=#: Enables long distance matching with # bits. Maximum is 30 (1GB) on 32-bit OS and 31 (2GB) on 64-bit.
// Using 30 here because we also support 32-bit self-hosted runners.
// Long range mode is added to zstd in v1.3.2 release, so we will not use --long in older version of zstd.
function $e796bade2bd0c6e6$var$getCompressionProgram(tarPath, compressionMethod) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        const cacheFileName = $e796bade2bd0c6e6$var$utils.getCacheFileName(compressionMethod);
        const BSD_TAR_ZSTD = tarPath.type === $3osl1.ArchiveToolType.BSD && compressionMethod !== $3osl1.CompressionMethod.Gzip && $e796bade2bd0c6e6$var$IS_WINDOWS;
        switch(compressionMethod){
            case $3osl1.CompressionMethod.Zstd:
                return BSD_TAR_ZSTD ? [
                    'zstd -T0 --long=30 --force -o',
                    cacheFileName.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'),
                    $3osl1.TarFilename
                ] : [
                    '--use-compress-program',
                    $e796bade2bd0c6e6$var$IS_WINDOWS ? '"zstd -T0 --long=30"' : 'zstdmt --long=30'
                ];
            case $3osl1.CompressionMethod.ZstdWithoutLong:
                return BSD_TAR_ZSTD ? [
                    'zstd -T0 --force -o',
                    cacheFileName.replace(new RegExp(`\\${$e796bade2bd0c6e6$var$path.sep}`, 'g'), '/'),
                    $3osl1.TarFilename
                ] : [
                    '--use-compress-program',
                    $e796bade2bd0c6e6$var$IS_WINDOWS ? '"zstd -T0"' : 'zstdmt'
                ];
            default:
                return [
                    '-z'
                ];
        }
    });
}
// Executes all commands as separate processes
function $e796bade2bd0c6e6$var$execCommands(commands, cwd) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        for (const command of commands)try {
            yield (0, $fgXRI.exec)(command, undefined, {
                cwd: cwd,
                env: Object.assign(Object.assign({}, process.env), {
                    MSYS: 'winsymlinks:nativestrict'
                })
            });
        } catch (error) {
            throw new Error(`${command.split(' ')[0]} failed with error: ${error === null || error === void 0 ? void 0 : error.message}`);
        }
    });
}
// List the contents of a tar
function $e796bade2bd0c6e6$var$listTar(archivePath, compressionMethod) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        const commands = yield $e796bade2bd0c6e6$var$getCommands(compressionMethod, 'list', archivePath);
        yield $e796bade2bd0c6e6$var$execCommands(commands);
    });
}
module.exports.listTar = $e796bade2bd0c6e6$var$listTar;
// Extract a tar
function $e796bade2bd0c6e6$var$extractTar(archivePath, compressionMethod) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        // Create directory to extract tar into
        const workingDirectory = $e796bade2bd0c6e6$var$getWorkingDirectory();
        yield $e796bade2bd0c6e6$var$io.mkdirP(workingDirectory);
        const commands = yield $e796bade2bd0c6e6$var$getCommands(compressionMethod, 'extract', archivePath);
        yield $e796bade2bd0c6e6$var$execCommands(commands);
    });
}
module.exports.extractTar = $e796bade2bd0c6e6$var$extractTar;
// Create a tar
function $e796bade2bd0c6e6$var$createTar(archiveFolder, sourceDirectories, compressionMethod) {
    return $e796bade2bd0c6e6$var$__awaiter(this, void 0, void 0, function*() {
        // Write source directories to manifest.txt to avoid command length limits
        (0, $1XPEC$fs.writeFileSync)($e796bade2bd0c6e6$var$path.join(archiveFolder, $3osl1.ManifestFilename), sourceDirectories.join('\n'));
        const commands = yield $e796bade2bd0c6e6$var$getCommands(compressionMethod, 'create');
        yield $e796bade2bd0c6e6$var$execCommands(commands, archiveFolder);
    });
}
module.exports.createTar = $e796bade2bd0c6e6$var$createTar;


