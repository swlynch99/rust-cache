var $1lLVS$path = require("path");
var $1lLVS$assert = require("assert");


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
parcelRegister("zxvsl", function(module, exports) {
"use strict";
var $06ad42a9dda4f443$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $06ad42a9dda4f443$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $06ad42a9dda4f443$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $06ad42a9dda4f443$var$__createBinding(result, mod, k);
    }
    $06ad42a9dda4f443$var$__setModuleDefault(result, mod);
    return result;
};
var $06ad42a9dda4f443$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.safeTrimTrailingSeparator = module.exports.normalizeSeparators = module.exports.hasRoot = module.exports.hasAbsoluteRoot = module.exports.ensureAbsoluteRoot = module.exports.dirname = void 0;

const $06ad42a9dda4f443$var$path = $06ad42a9dda4f443$var$__importStar($1lLVS$path);

const $06ad42a9dda4f443$var$assert_1 = $06ad42a9dda4f443$var$__importDefault($1lLVS$assert);
const $06ad42a9dda4f443$var$IS_WINDOWS = process.platform === 'win32';
/**
 * Similar to path.dirname except normalizes the path separators and slightly better handling for Windows UNC paths.
 *
 * For example, on Linux/macOS:
 * - `/               => /`
 * - `/hello          => /`
 *
 * For example, on Windows:
 * - `C:\             => C:\`
 * - `C:\hello        => C:\`
 * - `C:              => C:`
 * - `C:hello         => C:`
 * - `\               => \`
 * - `\hello          => \`
 * - `\\hello         => \\hello`
 * - `\\hello\world   => \\hello\world`
 */ function $06ad42a9dda4f443$var$dirname(p) {
    // Normalize slashes and trim unnecessary trailing slash
    p = $06ad42a9dda4f443$var$safeTrimTrailingSeparator(p);
    // Windows UNC root, e.g. \\hello or \\hello\world
    if ($06ad42a9dda4f443$var$IS_WINDOWS && /^\\\\[^\\]+(\\[^\\]+)?$/.test(p)) return p;
    // Get dirname
    let result = $06ad42a9dda4f443$var$path.dirname(p);
    // Trim trailing slash for Windows UNC root, e.g. \\hello\world\
    if ($06ad42a9dda4f443$var$IS_WINDOWS && /^\\\\[^\\]+\\[^\\]+\\$/.test(result)) result = $06ad42a9dda4f443$var$safeTrimTrailingSeparator(result);
    return result;
}
module.exports.dirname = $06ad42a9dda4f443$var$dirname;
/**
 * Roots the path if not already rooted. On Windows, relative roots like `\`
 * or `C:` are expanded based on the current working directory.
 */ function $06ad42a9dda4f443$var$ensureAbsoluteRoot(root, itemPath) {
    $06ad42a9dda4f443$var$assert_1.default(root, `ensureAbsoluteRoot parameter 'root' must not be empty`);
    $06ad42a9dda4f443$var$assert_1.default(itemPath, `ensureAbsoluteRoot parameter 'itemPath' must not be empty`);
    // Already rooted
    if ($06ad42a9dda4f443$var$hasAbsoluteRoot(itemPath)) return itemPath;
    // Windows
    if ($06ad42a9dda4f443$var$IS_WINDOWS) {
        // Check for itemPath like C: or C:foo
        if (itemPath.match(/^[A-Z]:[^\\/]|^[A-Z]:$/i)) {
            let cwd = process.cwd();
            $06ad42a9dda4f443$var$assert_1.default(cwd.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${cwd}'`);
            // Drive letter matches cwd? Expand to cwd
            if (itemPath[0].toUpperCase() === cwd[0].toUpperCase()) {
                // Drive only, e.g. C:
                if (itemPath.length === 2) // Preserve specified drive letter case (upper or lower)
                return `${itemPath[0]}:\\${cwd.substr(3)}`;
                else {
                    if (!cwd.endsWith('\\')) cwd += '\\';
                    // Preserve specified drive letter case (upper or lower)
                    return `${itemPath[0]}:\\${cwd.substr(3)}${itemPath.substr(2)}`;
                }
            } else return `${itemPath[0]}:\\${itemPath.substr(2)}`;
        } else if ($06ad42a9dda4f443$var$normalizeSeparators(itemPath).match(/^\\$|^\\[^\\]/)) {
            const cwd = process.cwd();
            $06ad42a9dda4f443$var$assert_1.default(cwd.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${cwd}'`);
            return `${cwd[0]}:\\${itemPath.substr(1)}`;
        }
    }
    $06ad42a9dda4f443$var$assert_1.default($06ad42a9dda4f443$var$hasAbsoluteRoot(root), `ensureAbsoluteRoot parameter 'root' must have an absolute root`);
    // Otherwise ensure root ends with a separator
    if (root.endsWith('/') || $06ad42a9dda4f443$var$IS_WINDOWS && root.endsWith('\\')) ;
    else // Append separator
    root += $06ad42a9dda4f443$var$path.sep;
    return root + itemPath;
}
module.exports.ensureAbsoluteRoot = $06ad42a9dda4f443$var$ensureAbsoluteRoot;
/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\\hello\share` and `C:\hello` (and using alternate separator).
 */ function $06ad42a9dda4f443$var$hasAbsoluteRoot(itemPath) {
    $06ad42a9dda4f443$var$assert_1.default(itemPath, `hasAbsoluteRoot parameter 'itemPath' must not be empty`);
    // Normalize separators
    itemPath = $06ad42a9dda4f443$var$normalizeSeparators(itemPath);
    // Windows
    if ($06ad42a9dda4f443$var$IS_WINDOWS) // E.g. \\hello\share or C:\hello
    return itemPath.startsWith('\\\\') || /^[A-Z]:\\/i.test(itemPath);
    // E.g. /hello
    return itemPath.startsWith('/');
}
module.exports.hasAbsoluteRoot = $06ad42a9dda4f443$var$hasAbsoluteRoot;
/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\`, `\hello`, `\\hello\share`, `C:`, and `C:\hello` (and using alternate separator).
 */ function $06ad42a9dda4f443$var$hasRoot(itemPath) {
    $06ad42a9dda4f443$var$assert_1.default(itemPath, `isRooted parameter 'itemPath' must not be empty`);
    // Normalize separators
    itemPath = $06ad42a9dda4f443$var$normalizeSeparators(itemPath);
    // Windows
    if ($06ad42a9dda4f443$var$IS_WINDOWS) // E.g. \ or \hello or \\hello
    // E.g. C: or C:\hello
    return itemPath.startsWith('\\') || /^[A-Z]:/i.test(itemPath);
    // E.g. /hello
    return itemPath.startsWith('/');
}
module.exports.hasRoot = $06ad42a9dda4f443$var$hasRoot;
/**
 * Removes redundant slashes and converts `/` to `\` on Windows
 */ function $06ad42a9dda4f443$var$normalizeSeparators(p) {
    p = p || '';
    // Windows
    if ($06ad42a9dda4f443$var$IS_WINDOWS) {
        // Convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // Remove redundant slashes
        const isUnc = /^\\\\+[^\\]/.test(p); // e.g. \\hello
        return (isUnc ? '\\' : '') + p.replace(/\\\\+/g, '\\'); // preserve leading \\ for UNC
    }
    // Remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
module.exports.normalizeSeparators = $06ad42a9dda4f443$var$normalizeSeparators;
/**
 * Normalizes the path separators and trims the trailing separator (when safe).
 * For example, `/foo/ => /foo` but `/ => /`
 */ function $06ad42a9dda4f443$var$safeTrimTrailingSeparator(p) {
    // Short-circuit if empty
    if (!p) return '';
    // Normalize separators
    p = $06ad42a9dda4f443$var$normalizeSeparators(p);
    // No trailing slash
    if (!p.endsWith($06ad42a9dda4f443$var$path.sep)) return p;
    // Check '/' on Linux/macOS and '\' on Windows
    if (p === $06ad42a9dda4f443$var$path.sep) return p;
    // On Windows check if drive root. E.g. C:\
    if ($06ad42a9dda4f443$var$IS_WINDOWS && /^[A-Z]:\\$/i.test(p)) return p;
    // Otherwise trim trailing slash
    return p.substr(0, p.length - 1);
}
module.exports.safeTrimTrailingSeparator = $06ad42a9dda4f443$var$safeTrimTrailingSeparator;

});


//# sourceMappingURL=internal-path-helper.390cbae5.js.map
