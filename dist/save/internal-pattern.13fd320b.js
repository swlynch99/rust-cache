require("./internal-path-helper.4d40bc9e.js");
require("./minimatch.93bba7da.js");
require("./internal-match-kind.a0a4a16a.js");
require("./internal-path.ba79ea25.js");
var $8srI7$os = require("os");
var $8srI7$path = require("path");
var $8srI7$assert = require("assert");


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
var $0272913e93d434cc$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0272913e93d434cc$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0272913e93d434cc$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0272913e93d434cc$var$__createBinding(result, mod, k);
    }
    $0272913e93d434cc$var$__setModuleDefault(result, mod);
    return result;
};
var $0272913e93d434cc$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Pattern = void 0;

const $0272913e93d434cc$var$os = $0272913e93d434cc$var$__importStar($8srI7$os);

const $0272913e93d434cc$var$path = $0272913e93d434cc$var$__importStar($8srI7$path);

const $0272913e93d434cc$var$pathHelper = $0272913e93d434cc$var$__importStar((parcelRequire("8MM4y")));

const $0272913e93d434cc$var$assert_1 = $0272913e93d434cc$var$__importDefault($8srI7$assert);
var $111af6fa32e84f65$exports = {};
$111af6fa32e84f65$exports = new URL("minimatch.93bba7da.js", "file:" + __filename).toString();



var $llmOS = parcelRequire("llmOS");
var $a96241549698940a$exports = {};
$a96241549698940a$exports = new URL("internal-path.ba79ea25.js", "file:" + __filename).toString();


const $0272913e93d434cc$var$IS_WINDOWS = process.platform === 'win32';
class $0272913e93d434cc$var$Pattern {
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
            (0, $0272913e93d434cc$var$assert_1.default)(segments.length, `Parameter 'segments' must not empty`);
            const root = $0272913e93d434cc$var$Pattern.getLiteral(segments[0]);
            (0, $0272913e93d434cc$var$assert_1.default)(root && $0272913e93d434cc$var$pathHelper.hasAbsoluteRoot(root), `Parameter 'segments' first element must be a root path`);
            pattern = new $a96241549698940a$exports.Path(segments).toString().trim();
            if (patternOrNegate) pattern = `!${pattern}`;
        }
        // Negate
        while(pattern.startsWith('!')){
            this.negate = !this.negate;
            pattern = pattern.substr(1).trim();
        }
        // Normalize slashes and ensures absolute root
        pattern = $0272913e93d434cc$var$Pattern.fixupPattern(pattern, homedir);
        // Segments
        this.segments = new $a96241549698940a$exports.Path(pattern).segments;
        // Trailing slash indicates the pattern should only match directories, not regular files
        this.trailingSeparator = $0272913e93d434cc$var$pathHelper.normalizeSeparators(pattern).endsWith($0272913e93d434cc$var$path.sep);
        pattern = $0272913e93d434cc$var$pathHelper.safeTrimTrailingSeparator(pattern);
        // Search path (literal path prior to the first glob segment)
        let foundGlob = false;
        const searchSegments = this.segments.map((x)=>$0272913e93d434cc$var$Pattern.getLiteral(x)).filter((x)=>!foundGlob && !(foundGlob = x === ''));
        this.searchPath = new $a96241549698940a$exports.Path(searchSegments).toString();
        // Root RegExp (required when determining partial match)
        this.rootRegExp = new RegExp($0272913e93d434cc$var$Pattern.regExpEscape(searchSegments[0]), $0272913e93d434cc$var$IS_WINDOWS ? 'i' : '');
        this.isImplicitPattern = isImplicitPattern;
        // Create minimatch
        const minimatchOptions = {
            dot: true,
            nobrace: true,
            nocase: $0272913e93d434cc$var$IS_WINDOWS,
            nocomment: true,
            noext: true,
            nonegate: true
        };
        pattern = $0272913e93d434cc$var$IS_WINDOWS ? pattern.replace(/\\/g, '/') : pattern;
        this.minimatch = new $111af6fa32e84f65$exports.Minimatch(pattern, minimatchOptions);
    }
    /**
     * Matches the pattern against the specified path
     */ match(itemPath) {
        // Last segment is globstar?
        if (this.segments[this.segments.length - 1] === '**') {
            // Normalize slashes
            itemPath = $0272913e93d434cc$var$pathHelper.normalizeSeparators(itemPath);
            // Append a trailing slash. Otherwise Minimatch will not match the directory immediately
            // preceding the globstar. For example, given the pattern `/foo/**`, Minimatch returns
            // false for `/foo` but returns true for `/foo/`. Append a trailing slash to handle that quirk.
            if (!itemPath.endsWith($0272913e93d434cc$var$path.sep) && this.isImplicitPattern === false) // Note, this is safe because the constructor ensures the pattern has an absolute root.
            // For example, formats like C: and C:foo on Windows are resolved to an absolute root.
            itemPath = `${itemPath}${$0272913e93d434cc$var$path.sep}`;
        } else // Normalize slashes and trim unnecessary trailing slash
        itemPath = $0272913e93d434cc$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // Match
        if (this.minimatch.match(itemPath)) return this.trailingSeparator ? $llmOS.MatchKind.Directory : $llmOS.MatchKind.All;
        return $llmOS.MatchKind.None;
    }
    /**
     * Indicates whether the pattern may match descendants of the specified path
     */ partialMatch(itemPath) {
        // Normalize slashes and trim unnecessary trailing slash
        itemPath = $0272913e93d434cc$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // matchOne does not handle root path correctly
        if ($0272913e93d434cc$var$pathHelper.dirname(itemPath) === itemPath) return this.rootRegExp.test(itemPath);
        return this.minimatch.matchOne(itemPath.split($0272913e93d434cc$var$IS_WINDOWS ? /\\+/ : /\/+/), this.minimatch.set[0], true);
    }
    /**
     * Escapes glob patterns within a path
     */ static globEscape(s) {
        return ($0272913e93d434cc$var$IS_WINDOWS ? s : s.replace(/\\/g, '\\\\') // escape '\' on Linux/macOS
        ).replace(/(\[)(?=[^/]+\])/g, '[[]') // escape '[' when ']' follows within the path segment
        .replace(/\?/g, '[?]') // escape '?'
        .replace(/\*/g, '[*]'); // escape '*'
    }
    /**
     * Normalizes slashes and ensures absolute root
     */ static fixupPattern(pattern, homedir) {
        // Empty
        (0, $0272913e93d434cc$var$assert_1.default)(pattern, 'pattern cannot be empty');
        // Must not contain `.` segment, unless first segment
        // Must not contain `..` segment
        const literalSegments = new $a96241549698940a$exports.Path(pattern).segments.map((x)=>$0272913e93d434cc$var$Pattern.getLiteral(x));
        (0, $0272913e93d434cc$var$assert_1.default)(literalSegments.every((x, i)=>(x !== '.' || i === 0) && x !== '..'), `Invalid pattern '${pattern}'. Relative pathing '.' and '..' is not allowed.`);
        // Must not contain globs in root, e.g. Windows UNC path \\foo\b*r
        (0, $0272913e93d434cc$var$assert_1.default)(!$0272913e93d434cc$var$pathHelper.hasRoot(pattern) || literalSegments[0], `Invalid pattern '${pattern}'. Root segment must not contain globs.`);
        // Normalize slashes
        pattern = $0272913e93d434cc$var$pathHelper.normalizeSeparators(pattern);
        // Replace leading `.` segment
        if (pattern === '.' || pattern.startsWith(`.${$0272913e93d434cc$var$path.sep}`)) pattern = $0272913e93d434cc$var$Pattern.globEscape(process.cwd()) + pattern.substr(1);
        else if (pattern === '~' || pattern.startsWith(`~${$0272913e93d434cc$var$path.sep}`)) {
            homedir = homedir || $0272913e93d434cc$var$os.homedir();
            (0, $0272913e93d434cc$var$assert_1.default)(homedir, 'Unable to determine HOME directory');
            (0, $0272913e93d434cc$var$assert_1.default)($0272913e93d434cc$var$pathHelper.hasAbsoluteRoot(homedir), `Expected HOME directory to be a rooted path. Actual '${homedir}'`);
            pattern = $0272913e93d434cc$var$Pattern.globEscape(homedir) + pattern.substr(1);
        } else if ($0272913e93d434cc$var$IS_WINDOWS && (pattern.match(/^[A-Z]:$/i) || pattern.match(/^[A-Z]:[^\\]/i))) {
            let root = $0272913e93d434cc$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', pattern.substr(0, 2));
            if (pattern.length > 2 && !root.endsWith('\\')) root += '\\';
            pattern = $0272913e93d434cc$var$Pattern.globEscape(root) + pattern.substr(2);
        } else if ($0272913e93d434cc$var$IS_WINDOWS && (pattern === '\\' || pattern.match(/^\\[^\\]/))) {
            let root = $0272913e93d434cc$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', '\\');
            if (!root.endsWith('\\')) root += '\\';
            pattern = $0272913e93d434cc$var$Pattern.globEscape(root) + pattern.substr(1);
        } else pattern = $0272913e93d434cc$var$pathHelper.ensureAbsoluteRoot($0272913e93d434cc$var$Pattern.globEscape(process.cwd()), pattern);
        return $0272913e93d434cc$var$pathHelper.normalizeSeparators(pattern);
    }
    /**
     * Attempts to unescape a pattern segment to create a literal path segment.
     * Otherwise returns empty string.
     */ static getLiteral(segment) {
        let literal = '';
        for(let i = 0; i < segment.length; i++){
            const c = segment[i];
            // Escape
            if (c === '\\' && !$0272913e93d434cc$var$IS_WINDOWS && i + 1 < segment.length) {
                literal += segment[++i];
                continue;
            } else if (c === '*' || c === '?') return '';
            else if (c === '[' && i + 1 < segment.length) {
                let set = '';
                let closed = -1;
                for(let i2 = i + 1; i2 < segment.length; i2++){
                    const c2 = segment[i2];
                    // Escape
                    if (c2 === '\\' && !$0272913e93d434cc$var$IS_WINDOWS && i2 + 1 < segment.length) {
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
module.exports.Pattern = $0272913e93d434cc$var$Pattern;


//# sourceMappingURL=internal-pattern.13fd320b.js.map
