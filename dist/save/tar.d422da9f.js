require("./exec.c3307bd9.js");
require("./io.5e60f30f.js");
require("./cacheUtils.dc94c7f3.js");
require("./constants.4b4283e3.js");
var $HKFC4$fs = require("fs");
var $HKFC4$path = require("path");


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
var $6ac5521c35998ae7$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $6ac5521c35998ae7$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $6ac5521c35998ae7$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $6ac5521c35998ae7$var$__createBinding(result, mod, k);
    }
    $6ac5521c35998ae7$var$__setModuleDefault(result, mod);
    return result;
};
var $6ac5521c35998ae7$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $6ac5521c35998ae7$var$io = $6ac5521c35998ae7$var$__importStar((parcelRequire("44PQM")));


const $6ac5521c35998ae7$var$path = $6ac5521c35998ae7$var$__importStar($HKFC4$path);

const $6ac5521c35998ae7$var$utils = $6ac5521c35998ae7$var$__importStar((parcelRequire("5xPwS")));

var $24kx4 = parcelRequire("24kx4");
const $6ac5521c35998ae7$var$IS_WINDOWS = process.platform === 'win32';
// Returns tar path and type: BSD or GNU
function $6ac5521c35998ae7$var$getTarPath() {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        switch(process.platform){
            case 'win32':
                {
                    const gnuTar = yield $6ac5521c35998ae7$var$utils.getGnuTarPathOnWindows();
                    const systemTar = $24kx4.SystemTarPathOnWindows;
                    if (gnuTar) // Use GNUtar as default on windows
                    return {
                        path: gnuTar,
                        type: $24kx4.ArchiveToolType.GNU
                    };
                    else if ((0, $HKFC4$fs.existsSync)(systemTar)) return {
                        path: systemTar,
                        type: $24kx4.ArchiveToolType.BSD
                    };
                    break;
                }
            case 'darwin':
                {
                    const gnuTar = yield $6ac5521c35998ae7$var$io.which('gtar', false);
                    if (gnuTar) // fix permission denied errors when extracting BSD tar archive with GNU tar - https://github.com/actions/cache/issues/527
                    return {
                        path: gnuTar,
                        type: $24kx4.ArchiveToolType.GNU
                    };
                    else return {
                        path: yield $6ac5521c35998ae7$var$io.which('tar', true),
                        type: $24kx4.ArchiveToolType.BSD
                    };
                }
            default:
                break;
        }
        // Default assumption is GNU tar is present in path
        return {
            path: yield $6ac5521c35998ae7$var$io.which('tar', true),
            type: $24kx4.ArchiveToolType.GNU
        };
    });
}
// Return arguments for tar as per tarPath, compressionMethod, method type and os
function $6ac5521c35998ae7$var$getTarArgs(tarPath, compressionMethod, type, archivePath = '') {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        const args = [
            `"${tarPath.path}"`
        ];
        const cacheFileName = $6ac5521c35998ae7$var$utils.getCacheFileName(compressionMethod);
        const tarFile = 'cache.tar';
        const workingDirectory = $6ac5521c35998ae7$var$getWorkingDirectory();
        // Speficic args for BSD tar on windows for workaround
        const BSD_TAR_ZSTD = tarPath.type === $24kx4.ArchiveToolType.BSD && compressionMethod !== $24kx4.CompressionMethod.Gzip && $6ac5521c35998ae7$var$IS_WINDOWS;
        // Method specific args
        switch(type){
            case 'create':
                args.push('--posix', '-cf', BSD_TAR_ZSTD ? tarFile : cacheFileName.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'), '--exclude', BSD_TAR_ZSTD ? tarFile : cacheFileName.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'), '-P', '-C', workingDirectory.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'), '--files-from', $24kx4.ManifestFilename);
                break;
            case 'extract':
                args.push('-xf', BSD_TAR_ZSTD ? tarFile : archivePath.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'), '-P', '-C', workingDirectory.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'));
                break;
            case 'list':
                args.push('-tf', BSD_TAR_ZSTD ? tarFile : archivePath.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'), '-P');
                break;
        }
        // Platform specific args
        if (tarPath.type === $24kx4.ArchiveToolType.GNU) switch(process.platform){
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
function $6ac5521c35998ae7$var$getCommands(compressionMethod, type, archivePath = '') {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        let args;
        const tarPath = yield $6ac5521c35998ae7$var$getTarPath();
        const tarArgs = yield $6ac5521c35998ae7$var$getTarArgs(tarPath, compressionMethod, type, archivePath);
        const compressionArgs = type !== 'create' ? yield $6ac5521c35998ae7$var$getDecompressionProgram(tarPath, compressionMethod, archivePath) : yield $6ac5521c35998ae7$var$getCompressionProgram(tarPath, compressionMethod);
        const BSD_TAR_ZSTD = tarPath.type === $24kx4.ArchiveToolType.BSD && compressionMethod !== $24kx4.CompressionMethod.Gzip && $6ac5521c35998ae7$var$IS_WINDOWS;
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
function $6ac5521c35998ae7$var$getWorkingDirectory() {
    var _a;
    return (_a = process.env['GITHUB_WORKSPACE']) !== null && _a !== void 0 ? _a : process.cwd();
}
// Common function for extractTar and listTar to get the compression method
function $6ac5521c35998ae7$var$getDecompressionProgram(tarPath, compressionMethod, archivePath) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        // -d: Decompress.
        // unzstd is equivalent to 'zstd -d'
        // --long=#: Enables long distance matching with # bits. Maximum is 30 (1GB) on 32-bit OS and 31 (2GB) on 64-bit.
        // Using 30 here because we also support 32-bit self-hosted runners.
        const BSD_TAR_ZSTD = tarPath.type === $24kx4.ArchiveToolType.BSD && compressionMethod !== $24kx4.CompressionMethod.Gzip && $6ac5521c35998ae7$var$IS_WINDOWS;
        switch(compressionMethod){
            case $24kx4.CompressionMethod.Zstd:
                return BSD_TAR_ZSTD ? [
                    'zstd -d --long=30 --force -o',
                    $24kx4.TarFilename,
                    archivePath.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/')
                ] : [
                    '--use-compress-program',
                    $6ac5521c35998ae7$var$IS_WINDOWS ? '"zstd -d --long=30"' : 'unzstd --long=30'
                ];
            case $24kx4.CompressionMethod.ZstdWithoutLong:
                return BSD_TAR_ZSTD ? [
                    'zstd -d --force -o',
                    $24kx4.TarFilename,
                    archivePath.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/')
                ] : [
                    '--use-compress-program',
                    $6ac5521c35998ae7$var$IS_WINDOWS ? '"zstd -d"' : 'unzstd'
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
function $6ac5521c35998ae7$var$getCompressionProgram(tarPath, compressionMethod) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        const cacheFileName = $6ac5521c35998ae7$var$utils.getCacheFileName(compressionMethod);
        const BSD_TAR_ZSTD = tarPath.type === $24kx4.ArchiveToolType.BSD && compressionMethod !== $24kx4.CompressionMethod.Gzip && $6ac5521c35998ae7$var$IS_WINDOWS;
        switch(compressionMethod){
            case $24kx4.CompressionMethod.Zstd:
                return BSD_TAR_ZSTD ? [
                    'zstd -T0 --long=30 --force -o',
                    cacheFileName.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'),
                    $24kx4.TarFilename
                ] : [
                    '--use-compress-program',
                    $6ac5521c35998ae7$var$IS_WINDOWS ? '"zstd -T0 --long=30"' : 'zstdmt --long=30'
                ];
            case $24kx4.CompressionMethod.ZstdWithoutLong:
                return BSD_TAR_ZSTD ? [
                    'zstd -T0 --force -o',
                    cacheFileName.replace(new RegExp(`\\${$6ac5521c35998ae7$var$path.sep}`, 'g'), '/'),
                    $24kx4.TarFilename
                ] : [
                    '--use-compress-program',
                    $6ac5521c35998ae7$var$IS_WINDOWS ? '"zstd -T0"' : 'zstdmt'
                ];
            default:
                return [
                    '-z'
                ];
        }
    });
}
// Executes all commands as separate processes
function $6ac5521c35998ae7$var$execCommands(commands, cwd) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
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
function $6ac5521c35998ae7$var$listTar(archivePath, compressionMethod) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        const commands = yield $6ac5521c35998ae7$var$getCommands(compressionMethod, 'list', archivePath);
        yield $6ac5521c35998ae7$var$execCommands(commands);
    });
}
module.exports.listTar = $6ac5521c35998ae7$var$listTar;
// Extract a tar
function $6ac5521c35998ae7$var$extractTar(archivePath, compressionMethod) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        // Create directory to extract tar into
        const workingDirectory = $6ac5521c35998ae7$var$getWorkingDirectory();
        yield $6ac5521c35998ae7$var$io.mkdirP(workingDirectory);
        const commands = yield $6ac5521c35998ae7$var$getCommands(compressionMethod, 'extract', archivePath);
        yield $6ac5521c35998ae7$var$execCommands(commands);
    });
}
module.exports.extractTar = $6ac5521c35998ae7$var$extractTar;
// Create a tar
function $6ac5521c35998ae7$var$createTar(archiveFolder, sourceDirectories, compressionMethod) {
    return $6ac5521c35998ae7$var$__awaiter(this, void 0, void 0, function*() {
        // Write source directories to manifest.txt to avoid command length limits
        (0, $HKFC4$fs.writeFileSync)($6ac5521c35998ae7$var$path.join(archiveFolder, $24kx4.ManifestFilename), sourceDirectories.join('\n'));
        const commands = yield $6ac5521c35998ae7$var$getCommands(compressionMethod, 'create');
        yield $6ac5521c35998ae7$var$execCommands(commands, archiveFolder);
    });
}
module.exports.createTar = $6ac5521c35998ae7$var$createTar;


