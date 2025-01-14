require("./io-util.389731fe.js");
var $drooh$assert = require("assert");
var $drooh$path = require("path");


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
parcelRegister("44PQM", function(module, exports) {
"use strict";
var $2f7fc18981dbc333$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $2f7fc18981dbc333$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $2f7fc18981dbc333$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $2f7fc18981dbc333$var$__createBinding(result, mod, k);
    }
    $2f7fc18981dbc333$var$__setModuleDefault(result, mod);
    return result;
};
var $2f7fc18981dbc333$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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


const $2f7fc18981dbc333$var$path = $2f7fc18981dbc333$var$__importStar($drooh$path);

const $2f7fc18981dbc333$var$ioUtil = $2f7fc18981dbc333$var$__importStar((parcelRequire("f1DSc")));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */ function $2f7fc18981dbc333$var$cp(source, dest, options = {}) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        const { force: force, recursive: recursive, copySourceDirectory: copySourceDirectory } = $2f7fc18981dbc333$var$readCopyOptions(options);
        const destStat = (yield $2f7fc18981dbc333$var$ioUtil.exists(dest)) ? yield $2f7fc18981dbc333$var$ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) return;
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory ? $2f7fc18981dbc333$var$path.join(dest, $2f7fc18981dbc333$var$path.basename(source)) : dest;
        if (!(yield $2f7fc18981dbc333$var$ioUtil.exists(source))) throw new Error(`no such file or directory: ${source}`);
        const sourceStat = yield $2f7fc18981dbc333$var$ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            else yield $2f7fc18981dbc333$var$cpDirRecursive(source, newDest, 0, force);
        } else {
            if ($2f7fc18981dbc333$var$path.relative(source, newDest) === '') // a file cannot be copied to itself
            throw new Error(`'${newDest}' and '${source}' are the same file`);
            yield $2f7fc18981dbc333$var$copyFile(source, newDest, force);
        }
    });
}
module.exports.cp = $2f7fc18981dbc333$var$cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */ function $2f7fc18981dbc333$var$mv(source, dest, options = {}) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        if (yield $2f7fc18981dbc333$var$ioUtil.exists(dest)) {
            let destExists = true;
            if (yield $2f7fc18981dbc333$var$ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = $2f7fc18981dbc333$var$path.join(dest, $2f7fc18981dbc333$var$path.basename(source));
                destExists = yield $2f7fc18981dbc333$var$ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) yield $2f7fc18981dbc333$var$rmRF(dest);
                else throw new Error('Destination already exists');
            }
        }
        yield $2f7fc18981dbc333$var$mkdirP($2f7fc18981dbc333$var$path.dirname(dest));
        yield $2f7fc18981dbc333$var$ioUtil.rename(source, dest);
    });
}
module.exports.mv = $2f7fc18981dbc333$var$mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */ function $2f7fc18981dbc333$var$rmRF(inputPath) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        if ($2f7fc18981dbc333$var$ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
        }
        try {
            // note if path does not exist, error is silent
            yield $2f7fc18981dbc333$var$ioUtil.rm(inputPath, {
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
module.exports.rmRF = $2f7fc18981dbc333$var$rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */ function $2f7fc18981dbc333$var$mkdirP(fsPath) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        $drooh$assert.ok(fsPath, 'a path argument must be provided');
        yield $2f7fc18981dbc333$var$ioUtil.mkdir(fsPath, {
            recursive: true
        });
    });
}
module.exports.mkdirP = $2f7fc18981dbc333$var$mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */ function $2f7fc18981dbc333$var$which(tool, check) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        if (!tool) throw new Error("parameter 'tool' is required");
        // recursive when check=true
        if (check) {
            const result = yield $2f7fc18981dbc333$var$which(tool, false);
            if (!result) {
                if ($2f7fc18981dbc333$var$ioUtil.IS_WINDOWS) throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                else throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
            }
            return result;
        }
        const matches = yield $2f7fc18981dbc333$var$findInPath(tool);
        if (matches && matches.length > 0) return matches[0];
        return '';
    });
}
module.exports.which = $2f7fc18981dbc333$var$which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */ function $2f7fc18981dbc333$var$findInPath(tool) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        if (!tool) throw new Error("parameter 'tool' is required");
        // build the list of extensions to try
        const extensions = [];
        if ($2f7fc18981dbc333$var$ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split($2f7fc18981dbc333$var$path.delimiter))if (extension) extensions.push(extension);
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if ($2f7fc18981dbc333$var$ioUtil.isRooted(tool)) {
            const filePath = yield $2f7fc18981dbc333$var$ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) return [
                filePath
            ];
            return [];
        }
        // if any path separators, return empty
        if (tool.includes($2f7fc18981dbc333$var$path.sep)) return [];
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split($2f7fc18981dbc333$var$path.delimiter))if (p) directories.push(p);
        }
        // find all matches
        const matches = [];
        for (const directory of directories){
            const filePath = yield $2f7fc18981dbc333$var$ioUtil.tryGetExecutablePath($2f7fc18981dbc333$var$path.join(directory, tool), extensions);
            if (filePath) matches.push(filePath);
        }
        return matches;
    });
}
module.exports.findInPath = $2f7fc18981dbc333$var$findInPath;
function $2f7fc18981dbc333$var$readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null ? true : Boolean(options.copySourceDirectory);
    return {
        force: force,
        recursive: recursive,
        copySourceDirectory: copySourceDirectory
    };
}
function $2f7fc18981dbc333$var$cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255) return;
        currentDepth++;
        yield $2f7fc18981dbc333$var$mkdirP(destDir);
        const files = yield $2f7fc18981dbc333$var$ioUtil.readdir(sourceDir);
        for (const fileName of files){
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield $2f7fc18981dbc333$var$ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) // Recurse
            yield $2f7fc18981dbc333$var$cpDirRecursive(srcFile, destFile, currentDepth, force);
            else yield $2f7fc18981dbc333$var$copyFile(srcFile, destFile, force);
        }
        // Change the mode for the newly created directory
        yield $2f7fc18981dbc333$var$ioUtil.chmod(destDir, (yield $2f7fc18981dbc333$var$ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function $2f7fc18981dbc333$var$copyFile(srcFile, destFile, force) {
    return $2f7fc18981dbc333$var$__awaiter(this, void 0, void 0, function*() {
        if ((yield $2f7fc18981dbc333$var$ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield $2f7fc18981dbc333$var$ioUtil.lstat(destFile);
                yield $2f7fc18981dbc333$var$ioUtil.unlink(destFile);
            } catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield $2f7fc18981dbc333$var$ioUtil.chmod(destFile, '0666');
                    yield $2f7fc18981dbc333$var$ioUtil.unlink(destFile);
                }
            // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield $2f7fc18981dbc333$var$ioUtil.readlink(srcFile);
            yield $2f7fc18981dbc333$var$ioUtil.symlink(symlinkFull, destFile, $2f7fc18981dbc333$var$ioUtil.IS_WINDOWS ? 'junction' : null);
        } else if (!(yield $2f7fc18981dbc333$var$ioUtil.exists(destFile)) || force) yield $2f7fc18981dbc333$var$ioUtil.copyFile(srcFile, destFile);
    });
}

});
parcelRegister("f1DSc", function(module, exports) {
module.exports = new URL("io-util.389731fe.js", "file:" + __filename).toString();

});



