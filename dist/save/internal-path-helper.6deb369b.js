var $gA457$path = require("path");
var $gA457$assert = require("assert");


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
parcelRegister("kJseX", function(module, exports) {
"use strict";
var $f17dea87ef5df71b$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $f17dea87ef5df71b$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f17dea87ef5df71b$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $f17dea87ef5df71b$var$__createBinding(result, mod, k);
    }
    $f17dea87ef5df71b$var$__setModuleDefault(result, mod);
    return result;
};
var $f17dea87ef5df71b$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.safeTrimTrailingSeparator = module.exports.normalizeSeparators = module.exports.hasRoot = module.exports.hasAbsoluteRoot = module.exports.ensureAbsoluteRoot = module.exports.dirname = void 0;

const $f17dea87ef5df71b$var$path = $f17dea87ef5df71b$var$__importStar($gA457$path);

const $f17dea87ef5df71b$var$assert_1 = $f17dea87ef5df71b$var$__importDefault($gA457$assert);
const $f17dea87ef5df71b$var$IS_WINDOWS = process.platform === 'win32';
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
 */ function $f17dea87ef5df71b$var$dirname(p) {
    // Normalize slashes and trim unnecessary trailing slash
    p = $f17dea87ef5df71b$var$safeTrimTrailingSeparator(p);
    // Windows UNC root, e.g. \\hello or \\hello\world
    if ($f17dea87ef5df71b$var$IS_WINDOWS && /^\\\\[^\\]+(\\[^\\]+)?$/.test(p)) return p;
    // Get dirname
    let result = $f17dea87ef5df71b$var$path.dirname(p);
    // Trim trailing slash for Windows UNC root, e.g. \\hello\world\
    if ($f17dea87ef5df71b$var$IS_WINDOWS && /^\\\\[^\\]+\\[^\\]+\\$/.test(result)) result = $f17dea87ef5df71b$var$safeTrimTrailingSeparator(result);
    return result;
}
module.exports.dirname = $f17dea87ef5df71b$var$dirname;
/**
 * Roots the path if not already rooted. On Windows, relative roots like `\`
 * or `C:` are expanded based on the current working directory.
 */ function $f17dea87ef5df71b$var$ensureAbsoluteRoot(root, itemPath) {
    $f17dea87ef5df71b$var$assert_1.default(root, `ensureAbsoluteRoot parameter 'root' must not be empty`);
    $f17dea87ef5df71b$var$assert_1.default(itemPath, `ensureAbsoluteRoot parameter 'itemPath' must not be empty`);
    // Already rooted
    if ($f17dea87ef5df71b$var$hasAbsoluteRoot(itemPath)) return itemPath;
    // Windows
    if ($f17dea87ef5df71b$var$IS_WINDOWS) {
        // Check for itemPath like C: or C:foo
        if (itemPath.match(/^[A-Z]:[^\\/]|^[A-Z]:$/i)) {
            let cwd = process.cwd();
            $f17dea87ef5df71b$var$assert_1.default(cwd.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${cwd}'`);
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
        } else if ($f17dea87ef5df71b$var$normalizeSeparators(itemPath).match(/^\\$|^\\[^\\]/)) {
            const cwd = process.cwd();
            $f17dea87ef5df71b$var$assert_1.default(cwd.match(/^[A-Z]:\\/i), `Expected current directory to start with an absolute drive root. Actual '${cwd}'`);
            return `${cwd[0]}:\\${itemPath.substr(1)}`;
        }
    }
    $f17dea87ef5df71b$var$assert_1.default($f17dea87ef5df71b$var$hasAbsoluteRoot(root), `ensureAbsoluteRoot parameter 'root' must have an absolute root`);
    // Otherwise ensure root ends with a separator
    if (root.endsWith('/') || $f17dea87ef5df71b$var$IS_WINDOWS && root.endsWith('\\')) ;
    else // Append separator
    root += $f17dea87ef5df71b$var$path.sep;
    return root + itemPath;
}
module.exports.ensureAbsoluteRoot = $f17dea87ef5df71b$var$ensureAbsoluteRoot;
/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\\hello\share` and `C:\hello` (and using alternate separator).
 */ function $f17dea87ef5df71b$var$hasAbsoluteRoot(itemPath) {
    $f17dea87ef5df71b$var$assert_1.default(itemPath, `hasAbsoluteRoot parameter 'itemPath' must not be empty`);
    // Normalize separators
    itemPath = $f17dea87ef5df71b$var$normalizeSeparators(itemPath);
    // Windows
    if ($f17dea87ef5df71b$var$IS_WINDOWS) // E.g. \\hello\share or C:\hello
    return itemPath.startsWith('\\\\') || /^[A-Z]:\\/i.test(itemPath);
    // E.g. /hello
    return itemPath.startsWith('/');
}
module.exports.hasAbsoluteRoot = $f17dea87ef5df71b$var$hasAbsoluteRoot;
/**
 * On Linux/macOS, true if path starts with `/`. On Windows, true for paths like:
 * `\`, `\hello`, `\\hello\share`, `C:`, and `C:\hello` (and using alternate separator).
 */ function $f17dea87ef5df71b$var$hasRoot(itemPath) {
    $f17dea87ef5df71b$var$assert_1.default(itemPath, `isRooted parameter 'itemPath' must not be empty`);
    // Normalize separators
    itemPath = $f17dea87ef5df71b$var$normalizeSeparators(itemPath);
    // Windows
    if ($f17dea87ef5df71b$var$IS_WINDOWS) // E.g. \ or \hello or \\hello
    // E.g. C: or C:\hello
    return itemPath.startsWith('\\') || /^[A-Z]:/i.test(itemPath);
    // E.g. /hello
    return itemPath.startsWith('/');
}
module.exports.hasRoot = $f17dea87ef5df71b$var$hasRoot;
/**
 * Removes redundant slashes and converts `/` to `\` on Windows
 */ function $f17dea87ef5df71b$var$normalizeSeparators(p) {
    p = p || '';
    // Windows
    if ($f17dea87ef5df71b$var$IS_WINDOWS) {
        // Convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // Remove redundant slashes
        const isUnc = /^\\\\+[^\\]/.test(p); // e.g. \\hello
        return (isUnc ? '\\' : '') + p.replace(/\\\\+/g, '\\'); // preserve leading \\ for UNC
    }
    // Remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
module.exports.normalizeSeparators = $f17dea87ef5df71b$var$normalizeSeparators;
/**
 * Normalizes the path separators and trims the trailing separator (when safe).
 * For example, `/foo/ => /foo` but `/ => /`
 */ function $f17dea87ef5df71b$var$safeTrimTrailingSeparator(p) {
    // Short-circuit if empty
    if (!p) return '';
    // Normalize separators
    p = $f17dea87ef5df71b$var$normalizeSeparators(p);
    // No trailing slash
    if (!p.endsWith($f17dea87ef5df71b$var$path.sep)) return p;
    // Check '/' on Linux/macOS and '\' on Windows
    if (p === $f17dea87ef5df71b$var$path.sep) return p;
    // On Windows check if drive root. E.g. C:\
    if ($f17dea87ef5df71b$var$IS_WINDOWS && /^[A-Z]:\\$/i.test(p)) return p;
    // Otherwise trim trailing slash
    return p.substr(0, p.length - 1);
}
module.exports.safeTrimTrailingSeparator = $f17dea87ef5df71b$var$safeTrimTrailingSeparator;

});


