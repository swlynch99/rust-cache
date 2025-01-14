require("./internal-path-helper.967d1958.js");
require("./minimatch.4b5304f7.js");
require("./internal-match-kind.0d6ea2ed.js");
require("./internal-path.10de1679.js");
var $asqNg$os = require("os");
var $asqNg$path = require("path");
var $asqNg$assert = require("assert");


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
var $eaafdf7c2221e901$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $eaafdf7c2221e901$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $eaafdf7c2221e901$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $eaafdf7c2221e901$var$__createBinding(result, mod, k);
    }
    $eaafdf7c2221e901$var$__setModuleDefault(result, mod);
    return result;
};
var $eaafdf7c2221e901$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Pattern = void 0;

const $eaafdf7c2221e901$var$os = $eaafdf7c2221e901$var$__importStar($asqNg$os);

const $eaafdf7c2221e901$var$path = $eaafdf7c2221e901$var$__importStar($asqNg$path);

const $eaafdf7c2221e901$var$pathHelper = $eaafdf7c2221e901$var$__importStar((parcelRequire("7Xzrw")));

const $eaafdf7c2221e901$var$assert_1 = $eaafdf7c2221e901$var$__importDefault($asqNg$assert);

var $boVxT = parcelRequire("boVxT");

var $7JNaG = parcelRequire("7JNaG");
var $20d2d56506064c87$exports = {};
$20d2d56506064c87$exports = new URL("internal-path.10de1679.js", "file:" + __filename).toString();


const $eaafdf7c2221e901$var$IS_WINDOWS = process.platform === 'win32';
class $eaafdf7c2221e901$var$Pattern {
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
            $eaafdf7c2221e901$var$assert_1.default(segments.length, `Parameter 'segments' must not empty`);
            const root = $eaafdf7c2221e901$var$Pattern.getLiteral(segments[0]);
            $eaafdf7c2221e901$var$assert_1.default(root && $eaafdf7c2221e901$var$pathHelper.hasAbsoluteRoot(root), `Parameter 'segments' first element must be a root path`);
            pattern = new $20d2d56506064c87$exports.Path(segments).toString().trim();
            if (patternOrNegate) pattern = `!${pattern}`;
        }
        // Negate
        while(pattern.startsWith('!')){
            this.negate = !this.negate;
            pattern = pattern.substr(1).trim();
        }
        // Normalize slashes and ensures absolute root
        pattern = $eaafdf7c2221e901$var$Pattern.fixupPattern(pattern, homedir);
        // Segments
        this.segments = new $20d2d56506064c87$exports.Path(pattern).segments;
        // Trailing slash indicates the pattern should only match directories, not regular files
        this.trailingSeparator = $eaafdf7c2221e901$var$pathHelper.normalizeSeparators(pattern).endsWith($eaafdf7c2221e901$var$path.sep);
        pattern = $eaafdf7c2221e901$var$pathHelper.safeTrimTrailingSeparator(pattern);
        // Search path (literal path prior to the first glob segment)
        let foundGlob = false;
        const searchSegments = this.segments.map((x)=>$eaafdf7c2221e901$var$Pattern.getLiteral(x)).filter((x)=>!foundGlob && !(foundGlob = x === ''));
        this.searchPath = new $20d2d56506064c87$exports.Path(searchSegments).toString();
        // Root RegExp (required when determining partial match)
        this.rootRegExp = new RegExp($eaafdf7c2221e901$var$Pattern.regExpEscape(searchSegments[0]), $eaafdf7c2221e901$var$IS_WINDOWS ? 'i' : '');
        this.isImplicitPattern = isImplicitPattern;
        // Create minimatch
        const minimatchOptions = {
            dot: true,
            nobrace: true,
            nocase: $eaafdf7c2221e901$var$IS_WINDOWS,
            nocomment: true,
            noext: true,
            nonegate: true
        };
        pattern = $eaafdf7c2221e901$var$IS_WINDOWS ? pattern.replace(/\\/g, '/') : pattern;
        this.minimatch = new $boVxT.Minimatch(pattern, minimatchOptions);
    }
    /**
     * Matches the pattern against the specified path
     */ match(itemPath) {
        // Last segment is globstar?
        if (this.segments[this.segments.length - 1] === '**') {
            // Normalize slashes
            itemPath = $eaafdf7c2221e901$var$pathHelper.normalizeSeparators(itemPath);
            // Append a trailing slash. Otherwise Minimatch will not match the directory immediately
            // preceding the globstar. For example, given the pattern `/foo/**`, Minimatch returns
            // false for `/foo` but returns true for `/foo/`. Append a trailing slash to handle that quirk.
            if (!itemPath.endsWith($eaafdf7c2221e901$var$path.sep) && this.isImplicitPattern === false) // Note, this is safe because the constructor ensures the pattern has an absolute root.
            // For example, formats like C: and C:foo on Windows are resolved to an absolute root.
            itemPath = `${itemPath}${$eaafdf7c2221e901$var$path.sep}`;
        } else // Normalize slashes and trim unnecessary trailing slash
        itemPath = $eaafdf7c2221e901$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // Match
        if (this.minimatch.match(itemPath)) return this.trailingSeparator ? $7JNaG.MatchKind.Directory : $7JNaG.MatchKind.All;
        return $7JNaG.MatchKind.None;
    }
    /**
     * Indicates whether the pattern may match descendants of the specified path
     */ partialMatch(itemPath) {
        // Normalize slashes and trim unnecessary trailing slash
        itemPath = $eaafdf7c2221e901$var$pathHelper.safeTrimTrailingSeparator(itemPath);
        // matchOne does not handle root path correctly
        if ($eaafdf7c2221e901$var$pathHelper.dirname(itemPath) === itemPath) return this.rootRegExp.test(itemPath);
        return this.minimatch.matchOne(itemPath.split($eaafdf7c2221e901$var$IS_WINDOWS ? /\\+/ : /\/+/), this.minimatch.set[0], true);
    }
    /**
     * Escapes glob patterns within a path
     */ static globEscape(s) {
        return ($eaafdf7c2221e901$var$IS_WINDOWS ? s : s.replace(/\\/g, '\\\\') // escape '\' on Linux/macOS
        ).replace(/(\[)(?=[^/]+\])/g, '[[]') // escape '[' when ']' follows within the path segment
        .replace(/\?/g, '[?]') // escape '?'
        .replace(/\*/g, '[*]'); // escape '*'
    }
    /**
     * Normalizes slashes and ensures absolute root
     */ static fixupPattern(pattern, homedir) {
        // Empty
        $eaafdf7c2221e901$var$assert_1.default(pattern, 'pattern cannot be empty');
        // Must not contain `.` segment, unless first segment
        // Must not contain `..` segment
        const literalSegments = new $20d2d56506064c87$exports.Path(pattern).segments.map((x)=>$eaafdf7c2221e901$var$Pattern.getLiteral(x));
        $eaafdf7c2221e901$var$assert_1.default(literalSegments.every((x, i)=>(x !== '.' || i === 0) && x !== '..'), `Invalid pattern '${pattern}'. Relative pathing '.' and '..' is not allowed.`);
        // Must not contain globs in root, e.g. Windows UNC path \\foo\b*r
        $eaafdf7c2221e901$var$assert_1.default(!$eaafdf7c2221e901$var$pathHelper.hasRoot(pattern) || literalSegments[0], `Invalid pattern '${pattern}'. Root segment must not contain globs.`);
        // Normalize slashes
        pattern = $eaafdf7c2221e901$var$pathHelper.normalizeSeparators(pattern);
        // Replace leading `.` segment
        if (pattern === '.' || pattern.startsWith(`.${$eaafdf7c2221e901$var$path.sep}`)) pattern = $eaafdf7c2221e901$var$Pattern.globEscape(process.cwd()) + pattern.substr(1);
        else if (pattern === '~' || pattern.startsWith(`~${$eaafdf7c2221e901$var$path.sep}`)) {
            homedir = homedir || $eaafdf7c2221e901$var$os.homedir();
            $eaafdf7c2221e901$var$assert_1.default(homedir, 'Unable to determine HOME directory');
            $eaafdf7c2221e901$var$assert_1.default($eaafdf7c2221e901$var$pathHelper.hasAbsoluteRoot(homedir), `Expected HOME directory to be a rooted path. Actual '${homedir}'`);
            pattern = $eaafdf7c2221e901$var$Pattern.globEscape(homedir) + pattern.substr(1);
        } else if ($eaafdf7c2221e901$var$IS_WINDOWS && (pattern.match(/^[A-Z]:$/i) || pattern.match(/^[A-Z]:[^\\]/i))) {
            let root = $eaafdf7c2221e901$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', pattern.substr(0, 2));
            if (pattern.length > 2 && !root.endsWith('\\')) root += '\\';
            pattern = $eaafdf7c2221e901$var$Pattern.globEscape(root) + pattern.substr(2);
        } else if ($eaafdf7c2221e901$var$IS_WINDOWS && (pattern === '\\' || pattern.match(/^\\[^\\]/))) {
            let root = $eaafdf7c2221e901$var$pathHelper.ensureAbsoluteRoot('C:\\dummy-root', '\\');
            if (!root.endsWith('\\')) root += '\\';
            pattern = $eaafdf7c2221e901$var$Pattern.globEscape(root) + pattern.substr(1);
        } else pattern = $eaafdf7c2221e901$var$pathHelper.ensureAbsoluteRoot($eaafdf7c2221e901$var$Pattern.globEscape(process.cwd()), pattern);
        return $eaafdf7c2221e901$var$pathHelper.normalizeSeparators(pattern);
    }
    /**
     * Attempts to unescape a pattern segment to create a literal path segment.
     * Otherwise returns empty string.
     */ static getLiteral(segment) {
        let literal = '';
        for(let i = 0; i < segment.length; i++){
            const c = segment[i];
            // Escape
            if (c === '\\' && !$eaafdf7c2221e901$var$IS_WINDOWS && i + 1 < segment.length) {
                literal += segment[++i];
                continue;
            } else if (c === '*' || c === '?') return '';
            else if (c === '[' && i + 1 < segment.length) {
                let set = '';
                let closed = -1;
                for(let i2 = i + 1; i2 < segment.length; i2++){
                    const c2 = segment[i2];
                    // Escape
                    if (c2 === '\\' && !$eaafdf7c2221e901$var$IS_WINDOWS && i2 + 1 < segment.length) {
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
module.exports.Pattern = $eaafdf7c2221e901$var$Pattern;


