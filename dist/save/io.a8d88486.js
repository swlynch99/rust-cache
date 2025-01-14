require("./io-util.595d8c50.js");
var $b9fk1$assert = require("assert");
var $b9fk1$path = require("path");


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
parcelRegister("8EyRf", function(module, exports) {
"use strict";
var $64cd1936894374d1$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $64cd1936894374d1$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $64cd1936894374d1$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $64cd1936894374d1$var$__createBinding(result, mod, k);
    }
    $64cd1936894374d1$var$__setModuleDefault(result, mod);
    return result;
};
var $64cd1936894374d1$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.findInPath = module.exports.which = module.exports.mkdirP = module.exports.rmRF = module.exports.mv = module.exports.cp = void 0;


const $64cd1936894374d1$var$path = $64cd1936894374d1$var$__importStar($b9fk1$path);

const $64cd1936894374d1$var$ioUtil = $64cd1936894374d1$var$__importStar((parcelRequire("eMv59")));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */ function $64cd1936894374d1$var$cp(source, dest, options = {}) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        const { force: force, recursive: recursive, copySourceDirectory: copySourceDirectory } = $64cd1936894374d1$var$readCopyOptions(options);
        const destStat = (yield $64cd1936894374d1$var$ioUtil.exists(dest)) ? yield $64cd1936894374d1$var$ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) return;
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory ? $64cd1936894374d1$var$path.join(dest, $64cd1936894374d1$var$path.basename(source)) : dest;
        if (!(yield $64cd1936894374d1$var$ioUtil.exists(source))) throw new Error(`no such file or directory: ${source}`);
        const sourceStat = yield $64cd1936894374d1$var$ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            else yield $64cd1936894374d1$var$cpDirRecursive(source, newDest, 0, force);
        } else {
            if ($64cd1936894374d1$var$path.relative(source, newDest) === '') // a file cannot be copied to itself
            throw new Error(`'${newDest}' and '${source}' are the same file`);
            yield $64cd1936894374d1$var$copyFile(source, newDest, force);
        }
    });
}
module.exports.cp = $64cd1936894374d1$var$cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */ function $64cd1936894374d1$var$mv(source, dest, options = {}) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        if (yield $64cd1936894374d1$var$ioUtil.exists(dest)) {
            let destExists = true;
            if (yield $64cd1936894374d1$var$ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = $64cd1936894374d1$var$path.join(dest, $64cd1936894374d1$var$path.basename(source));
                destExists = yield $64cd1936894374d1$var$ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) yield $64cd1936894374d1$var$rmRF(dest);
                else throw new Error('Destination already exists');
            }
        }
        yield $64cd1936894374d1$var$mkdirP($64cd1936894374d1$var$path.dirname(dest));
        yield $64cd1936894374d1$var$ioUtil.rename(source, dest);
    });
}
module.exports.mv = $64cd1936894374d1$var$mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */ function $64cd1936894374d1$var$rmRF(inputPath) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        if ($64cd1936894374d1$var$ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
        }
        try {
            // note if path does not exist, error is silent
            yield $64cd1936894374d1$var$ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        } catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
module.exports.rmRF = $64cd1936894374d1$var$rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */ function $64cd1936894374d1$var$mkdirP(fsPath) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        $b9fk1$assert.ok(fsPath, 'a path argument must be provided');
        yield $64cd1936894374d1$var$ioUtil.mkdir(fsPath, {
            recursive: true
        });
    });
}
module.exports.mkdirP = $64cd1936894374d1$var$mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */ function $64cd1936894374d1$var$which(tool, check) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        if (!tool) throw new Error("parameter 'tool' is required");
        // recursive when check=true
        if (check) {
            const result = yield $64cd1936894374d1$var$which(tool, false);
            if (!result) {
                if ($64cd1936894374d1$var$ioUtil.IS_WINDOWS) throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                else throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
            }
            return result;
        }
        const matches = yield $64cd1936894374d1$var$findInPath(tool);
        if (matches && matches.length > 0) return matches[0];
        return '';
    });
}
module.exports.which = $64cd1936894374d1$var$which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */ function $64cd1936894374d1$var$findInPath(tool) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        if (!tool) throw new Error("parameter 'tool' is required");
        // build the list of extensions to try
        const extensions = [];
        if ($64cd1936894374d1$var$ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split($64cd1936894374d1$var$path.delimiter))if (extension) extensions.push(extension);
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if ($64cd1936894374d1$var$ioUtil.isRooted(tool)) {
            const filePath = yield $64cd1936894374d1$var$ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) return [
                filePath
            ];
            return [];
        }
        // if any path separators, return empty
        if (tool.includes($64cd1936894374d1$var$path.sep)) return [];
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split($64cd1936894374d1$var$path.delimiter))if (p) directories.push(p);
        }
        // find all matches
        const matches = [];
        for (const directory of directories){
            const filePath = yield $64cd1936894374d1$var$ioUtil.tryGetExecutablePath($64cd1936894374d1$var$path.join(directory, tool), extensions);
            if (filePath) matches.push(filePath);
        }
        return matches;
    });
}
module.exports.findInPath = $64cd1936894374d1$var$findInPath;
function $64cd1936894374d1$var$readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null ? true : Boolean(options.copySourceDirectory);
    return {
        force: force,
        recursive: recursive,
        copySourceDirectory: copySourceDirectory
    };
}
function $64cd1936894374d1$var$cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255) return;
        currentDepth++;
        yield $64cd1936894374d1$var$mkdirP(destDir);
        const files = yield $64cd1936894374d1$var$ioUtil.readdir(sourceDir);
        for (const fileName of files){
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield $64cd1936894374d1$var$ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) // Recurse
            yield $64cd1936894374d1$var$cpDirRecursive(srcFile, destFile, currentDepth, force);
            else yield $64cd1936894374d1$var$copyFile(srcFile, destFile, force);
        }
        // Change the mode for the newly created directory
        yield $64cd1936894374d1$var$ioUtil.chmod(destDir, (yield $64cd1936894374d1$var$ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function $64cd1936894374d1$var$copyFile(srcFile, destFile, force) {
    return $64cd1936894374d1$var$__awaiter(this, void 0, void 0, function*() {
        if ((yield $64cd1936894374d1$var$ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield $64cd1936894374d1$var$ioUtil.lstat(destFile);
                yield $64cd1936894374d1$var$ioUtil.unlink(destFile);
            } catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield $64cd1936894374d1$var$ioUtil.chmod(destFile, '0666');
                    yield $64cd1936894374d1$var$ioUtil.unlink(destFile);
                }
            // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield $64cd1936894374d1$var$ioUtil.readlink(srcFile);
            yield $64cd1936894374d1$var$ioUtil.symlink(symlinkFull, destFile, $64cd1936894374d1$var$ioUtil.IS_WINDOWS ? 'junction' : null);
        } else if (!(yield $64cd1936894374d1$var$ioUtil.exists(destFile)) || force) yield $64cd1936894374d1$var$ioUtil.copyFile(srcFile, destFile);
    });
}

});
parcelRegister("eMv59", function(module, exports) {
module.exports = new URL("io-util.595d8c50.js", "file:" + __filename).toString();

});



//# sourceMappingURL=io.a8d88486.js.map
