require("./internal-path-helper.390cbae5.js");
require("./minimatch.93bba7da.js");
require("./internal-match-kind.9b98b3fb.js");
require("./internal-path.be4b4a80.js");
var $gkOOp$os = require("os");
var $gkOOp$path = require("path");
var $gkOOp$assert = require("assert");


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
var $9873a25d7cfd412a$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $9873a25d7cfd412a$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $9873a25d7cfd412a$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $9873a25d7cfd412a$var$__createBinding(result, mod, k);
    }
    $9873a25d7cfd412a$var$__setModuleDefault(result, mod);
    return result;
};
var $9873a25d7cfd412a$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Pattern = void 0;

const $9873a25d7cfd412a$var$os = $9873a25d7cfd412a$var$__importStar($gkOOp$os);

const $9873a25d7cfd412a$var$path = $9873a25d7cfd412a$var$__importStar($gkOOp$path);

const $9873a25d7cfd412a$var$pathHelper = $9873a25d7cfd412a$var$__importStar((parcelRequire("zxvsl")));

const $9873a25d7cfd412a$var$assert_1 = $9873a25d7cfd412a$var$__importDefault($gkOOp$assert);

var $9yUwJ = parcelRequire("9yUwJ");

var $3EnOu = parcelRequire("3EnOu");
var $a159fb897d69693e$exports = {};
$a159fb897d69693e$exports = new URL("internal-path.be4b4a80.js", "file:" + __filename).toString();


const $9873a25d7cfd412a$var$IS_WINDOWS = process.platform === 'win32';
class $9873a25d7cfd412a$var$Pattern {
    constructor(patternOrNegate, isImplicitPattern = false, segments, homedir){
        /**
         * Indicates whether matches should be excluded from the result set
         */ this.negate = false;
        // Pattern overload
        let pattern;
        if (typeof patternOrNegate === 'string') pattern = patternOrNegate.trim();
        else {
            // Convert to pattern
            segments = segments || [];
            $9873a25d7cfd412a$var$assert_1.default(segments.length, `Parameter 'segments' must not empty`);
            const root = $9873a25d7cfd412a$var$Pattern.getLiteral(segments[0]);
            $9873a25d7cfd412a$var$assert_1.default(root && $9873a25d7cfd412a$var$pathHelper.hasAbsoluteRoot(root), `Parameter 'segments' first element must be a root path`);
            pattern = new $a159fb897d69693e$exports.Path(segments).toString().trim();
            if (patternOrNegate) pattern = `!${pattern}`;
        }
        // Negate
        while(pattern.startsWith('!')){
            this.negate = !this.negate;
            pattern = pattern.substr(1).trim();
        }
        // Normalize slashes and ensures absolute root
        pattern = $9873a25d7cfd412a$var$Pattern.fixupPattern(pattern, homedir);
        // Segments
        this.segments = new $a159fb897d69693e$exports.Path(pattern).segments;
        // Trailing slash indicates the pattern should only match directories, not regular files
        this.trailingSeparator = $9873a25d7cfd412a$var$pathHelper.normalizeSeparators(pattern).endsWith($9873a25d7cfd412a$var$path.sep);
        pattern = $9873a25d7cfd412a$var$pathHelper.safeTrimTrailingSeparator(pattern);
        // Search path (literal path prior to the first glob segment)
        let foundGlob = false;
        const searchSegments = this.segments.map((x)=>$9873a25d7cfd412a$var$Pattern.getLiteral(x)).filter((x)=>!foundGlob && !(foundGlob = x === ''));
        this.searchPath = new $a159fb897d69693e$exports.Path(searchSegments).toString();
        // Root RegExp (required when determining partial match)
        this.rootRegExp = new RegExp($9873a25d7cfd412a$var$Pattern.regExpEscape(searchSegments[0]), $9873a25d7cfd412a$var$IS_WINDOWS ? 'i' : '');
        this.isImplicitPattern = isImplicitPattern;
        // Create minimatch
        const minimatchOptions = {
            dot: true,
            nobrace: true,
            nocase: $9873a25d7cfd412a$var$IS_WINDOWS,
            nocomment: true,
            noext: true,
            nonegate: true
        };
        pattern = $9873a25d7cfd412a$var$IS_WINDOWS ? pattern.replace(/\\/g, '/') : pattern;
        this.minimatch = new $9yUwJ.Minimatch(pattern, minimatchOptions);
    }
    /**
     * Matches the pattern against the specified path
     */ match(itemPath) {
        // Last segment is globstar?
        if (this.segments[this.segments.length - 1] === '**') {
            // Normalize slashes
            itemPath = $9873a25d7cfd412a$var$pathHelper.normalizeSeparators(itemPath);
            // Append a trailing slash. Otherwise Minimatch will not match the directory immediately
            // preceding the globstar. For example, given the pattern `/foo/**`, Minimatch returns
            // false for `/foo` but returns true for `/foo/`. Append a trailing slash to handle that quirk.
            if (!itemPath.endsWith($9873a25d7cfd412a$var$path.sep) && this.isImplicitPattern === false) // Note, this is safe because the constructor ensures the pattern has an absolute root.
            // For example, formats like C: and C:foo on Windows are resolved to an absolute root.
            itemPath = `${itemPath}${$9873a25d7cfd412a$var$path.sep}`;
        } else // Normalize slashes and trim unnecessary trailing slash
        itemPath = $9873a25d7cfd412a$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // Match
        if (this.minimatch.match(itemPath)) return this.trailingSeparator ? $3EnOu.MatchKind.Directory : $3EnOu.MatchKind.All;
        return $3EnOu.MatchKind.None;
    }
    /**
     * Indicates whether the pattern may match descendants of the specified path
     */ partialMatch(itemPath) {
        // Normalize slashes and trim unnecessary trailing slash
        itemPath = $9873a25d7cfd412a$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // matchOne does not handle root path correctly
        if ($9873a25d7cfd412a$var$pathHelper.dirname(itemPath) === itemPath) return this.rootRegExp.test(itemPath);
        return this.minimatch.matchOne(itemPath.split($9873a25d7cfd412a$var$IS_WINDOWS ? /\\+/ : /\/+/), this.minimatch.set[0], true);
    }
    /**
     * Escapes glob patterns within a path
     */ static globEscape(s) {
        return ($9873a25d7cfd412a$var$IS_WINDOWS ? s : s.replace(/\\/g, '\\\\') // escape '\' on Linux/macOS
        ).replace(/(\[)(?=[^/]+\])/g, '[[]') // escape '[' when ']' follows within the path segment
        .replace(/\?/g, '[?]') // escape '?'
        .replace(/\*/g, '[*]'); // escape '*'
    }
    /**
     * Normalizes slashes and ensures absolute root
     */ static fixupPattern(pattern, homedir) {
        // Empty
        $9873a25d7cfd412a$var$assert_1.default(pattern, 'pattern cannot be empty');
        // Must not contain `.` segment, unless first segment
        // Must not contain `..` segment
        const literalSegments = new $a159fb897d69693e$exports.Path(pattern).segments.map((x)=>$9873a25d7cfd412a$var$Pattern.getLiteral(x));
        $9873a25d7cfd412a$var$assert_1.default(literalSegments.every((x, i)=>(x !== '.' || i === 0) && x !== '..'), `Invalid pattern '${pattern}'. Relative pathing '.' and '..' is not allowed.`);
        // Must not contain globs in root, e.g. Windows UNC path \\foo\b*r
        $9873a25d7cfd412a$var$assert_1.default(!$9873a25d7cfd412a$var$pathHelper.hasRoot(pattern) || literalSegments[0], `Invalid pattern '${pattern}'. Root segment must not contain globs.`);
        // Normalize slashes
        pattern = $9873a25d7cfd412a$var$pathHelper.normalizeSeparators(pattern);
        // Replace leading `.` segment
        if (pattern === '.' || pattern.startsWith(`.${$9873a25d7cfd412a$var$path.sep}`)) pattern = $9873a25d7cfd412a$var$Pattern.globEscape(process.cwd()) + pattern.substr(1);
        else if (pattern === '~' || pattern.startsWith(`~${$9873a25d7cfd412a$var$path.sep}`)) {
            homedir = homedir || $9873a25d7cfd412a$var$os.homedir();
            $9873a25d7cfd412a$var$assert_1.default(homedir, 'Unable to determine HOME directory');
            $9873a25d7cfd412a$var$assert_1.default($9873a25d7cfd412a$var$pathHelper.hasAbsoluteRoot(homedir), `Expected HOME directory to be a rooted path. Actual '${homedir}'`);
            pattern = $9873a25d7cfd412a$var$Pattern.globEscape(homedir) + pattern.substr(1);
        } else if ($9873a25d7cfd412a$var$IS_WINDOWS && (pattern.match(/^[A-Z]:$/i) || pattern.match(/^[A-Z]:[^\\]/i))) {
            let root = $9873a25d7cfd412a$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', pattern.substr(0, 2));
            if (pattern.length > 2 && !root.endsWith('\\')) root += '\\';
            pattern = $9873a25d7cfd412a$var$Pattern.globEscape(root) + pattern.substr(2);
        } else if ($9873a25d7cfd412a$var$IS_WINDOWS && (pattern === '\\' || pattern.match(/^\\[^\\]/))) {
            let root = $9873a25d7cfd412a$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', '\\');
            if (!root.endsWith('\\')) root += '\\';
            pattern = $9873a25d7cfd412a$var$Pattern.globEscape(root) + pattern.substr(1);
        } else pattern = $9873a25d7cfd412a$var$pathHelper.ensureAbsoluteRoot($9873a25d7cfd412a$var$Pattern.globEscape(process.cwd()), pattern);
        return $9873a25d7cfd412a$var$pathHelper.normalizeSeparators(pattern);
    }
    /**
     * Attempts to unescape a pattern segment to create a literal path segment.
     * Otherwise returns empty string.
     */ static getLiteral(segment) {
        let literal = '';
        for(let i = 0; i < segment.length; i++){
            const c = segment[i];
            // Escape
            if (c === '\\' && !$9873a25d7cfd412a$var$IS_WINDOWS && i + 1 < segment.length) {
                literal += segment[++i];
                continue;
            } else if (c === '*' || c === '?') return '';
            else if (c === '[' && i + 1 < segment.length) {
                let set = '';
                let closed = -1;
                for(let i2 = i + 1; i2 < segment.length; i2++){
                    const c2 = segment[i2];
                    // Escape
                    if (c2 === '\\' && !$9873a25d7cfd412a$var$IS_WINDOWS && i2 + 1 < segment.length) {
                        set += segment[++i2];
                        continue;
                    } else if (c2 === ']') {
                        closed = i2;
                        break;
                    } else set += c2;
                }
                // Closed?
                if (closed >= 0) {
                    // Cannot convert
                    if (set.length > 1) return '';
                    // Convert to literal
                    if (set) {
                        literal += set;
                        i = closed;
                        continue;
                    }
                }
            // Otherwise fall thru
            }
            // Append
            literal += c;
        }
        return literal;
    }
    /**
     * Escapes regexp special characters
     * https://javascript.info/regexp-escaping
     */ static regExpEscape(s) {
        return s.replace(/[[\\^$.|?*+()]/g, '\\$&');
    }
}
module.exports.Pattern = $9873a25d7cfd412a$var$Pattern;


//# sourceMappingURL=internal-pattern.188c781e.js.map
