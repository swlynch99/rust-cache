var $7D2mW$fs = require("fs");
var $7D2mW$path = require("path");


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
parcelRegister("g0DG5", function(module, exports) {
"use strict";
var $ba7b6ca0a0ee2552$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $ba7b6ca0a0ee2552$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $ba7b6ca0a0ee2552$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $ba7b6ca0a0ee2552$var$__createBinding(result, mod, k);
    }
    $ba7b6ca0a0ee2552$var$__setModuleDefault(result, mod);
    return result;
};
var $ba7b6ca0a0ee2552$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $ba7b6ca0a0ee2552$var$_a;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCmdPath = module.exports.tryGetExecutablePath = module.exports.isRooted = module.exports.isDirectory = module.exports.exists = module.exports.READONLY = module.exports.UV_FS_O_EXLOCK = module.exports.IS_WINDOWS = module.exports.unlink = module.exports.symlink = module.exports.stat = module.exports.rmdir = module.exports.rm = module.exports.rename = module.exports.readlink = module.exports.readdir = module.exports.open = module.exports.mkdir = module.exports.lstat = module.exports.copyFile = module.exports.chmod = void 0;

const $ba7b6ca0a0ee2552$var$fs = $ba7b6ca0a0ee2552$var$__importStar($7D2mW$fs);

const $ba7b6ca0a0ee2552$var$path = $ba7b6ca0a0ee2552$var$__importStar($7D2mW$path);
$ba7b6ca0a0ee2552$var$_a = $ba7b6ca0a0ee2552$var$fs.promises, module.exports.chmod = $ba7b6ca0a0ee2552$var$_a.chmod, module.exports.copyFile = $ba7b6ca0a0ee2552$var$_a.copyFile, module.exports.lstat = $ba7b6ca0a0ee2552$var$_a.lstat, module.exports.mkdir = $ba7b6ca0a0ee2552$var$_a.mkdir, module.exports.open = $ba7b6ca0a0ee2552$var$_a.open, module.exports.readdir = $ba7b6ca0a0ee2552$var$_a.readdir, module.exports.readlink = $ba7b6ca0a0ee2552$var$_a.readlink, module.exports.rename = $ba7b6ca0a0ee2552$var$_a.rename, module.exports.rm = $ba7b6ca0a0ee2552$var$_a.rm, module.exports.rmdir = $ba7b6ca0a0ee2552$var$_a.rmdir, module.exports.stat = $ba7b6ca0a0ee2552$var$_a.stat, module.exports.symlink = $ba7b6ca0a0ee2552$var$_a.symlink, module.exports.unlink = $ba7b6ca0a0ee2552$var$_a.unlink;
// export const {open} = 'fs'
module.exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
module.exports.UV_FS_O_EXLOCK = 0x10000000;
module.exports.READONLY = $ba7b6ca0a0ee2552$var$fs.constants.O_RDONLY;
function $ba7b6ca0a0ee2552$var$exists(fsPath) {
    return $ba7b6ca0a0ee2552$var$__awaiter(this, void 0, void 0, function*() {
        try {
            yield module.exports.stat(fsPath);
        } catch (err) {
            if (err.code === 'ENOENT') return false;
            throw err;
        }
        return true;
    });
}
module.exports.exists = $ba7b6ca0a0ee2552$var$exists;
function $ba7b6ca0a0ee2552$var$isDirectory(fsPath, useStat = false) {
    return $ba7b6ca0a0ee2552$var$__awaiter(this, void 0, void 0, function*() {
        const stats = useStat ? yield module.exports.stat(fsPath) : yield module.exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
module.exports.isDirectory = $ba7b6ca0a0ee2552$var$isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */ function $ba7b6ca0a0ee2552$var$isRooted(p) {
    p = $ba7b6ca0a0ee2552$var$normalizeSeparators(p);
    if (!p) throw new Error('isRooted() parameter "p" cannot be empty');
    if (module.exports.IS_WINDOWS) return p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
    ; // e.g. C: or C:\hello
    return p.startsWith('/');
}
module.exports.isRooted = $ba7b6ca0a0ee2552$var$isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */ function $ba7b6ca0a0ee2552$var$tryGetExecutablePath(filePath, extensions) {
    return $ba7b6ca0a0ee2552$var$__awaiter(this, void 0, void 0, function*() {
        let stats = undefined;
        try {
            // test file exists
            stats = yield module.exports.stat(filePath);
        } catch (err) {
            if (err.code !== 'ENOENT') // eslint-disable-next-line no-console
            console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
        }
        if (stats && stats.isFile()) {
            if (module.exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = $ba7b6ca0a0ee2552$var$path.extname(filePath).toUpperCase();
                if (extensions.some((validExt)=>validExt.toUpperCase() === upperExt)) return filePath;
            } else {
                if ($ba7b6ca0a0ee2552$var$isUnixExecutable(stats)) return filePath;
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions){
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield module.exports.stat(filePath);
            } catch (err) {
                if (err.code !== 'ENOENT') // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
            if (stats && stats.isFile()) {
                if (module.exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = $ba7b6ca0a0ee2552$var$path.dirname(filePath);
                        const upperName = $ba7b6ca0a0ee2552$var$path.basename(filePath).toUpperCase();
                        for (const actualName of yield module.exports.readdir(directory))if (upperName === actualName.toUpperCase()) {
                            filePath = $ba7b6ca0a0ee2552$var$path.join(directory, actualName);
                            break;
                        }
                    } catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                } else {
                    if ($ba7b6ca0a0ee2552$var$isUnixExecutable(stats)) return filePath;
                }
            }
        }
        return '';
    });
}
module.exports.tryGetExecutablePath = $ba7b6ca0a0ee2552$var$tryGetExecutablePath;
function $ba7b6ca0a0ee2552$var$normalizeSeparators(p) {
    p = p || '';
    if (module.exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function $ba7b6ca0a0ee2552$var$isUnixExecutable(stats) {
    return (stats.mode & 1) > 0 || (stats.mode & 8) > 0 && stats.gid === process.getgid() || (stats.mode & 64) > 0 && stats.uid === process.getuid();
}
// Get the path of cmd.exe in windows
function $ba7b6ca0a0ee2552$var$getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
module.exports.getCmdPath = $ba7b6ca0a0ee2552$var$getCmdPath;

});


