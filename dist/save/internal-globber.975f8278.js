require("./core.da66a1bd.js");
require("./internal-glob-options-helper.72a223ea.js");
require("./internal-pattern-helper.adab4b3e.js");
require("./internal-match-kind.0d6ea2ed.js");
require("./internal-pattern.3a9b6e45.js");
require("./internal-search-state.307c1697.js");
var $2JTT1$fs = require("fs");
var $2JTT1$path = require("path");


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
parcelRegister("3pmDv", function(module, exports) {
module.exports = new URL("internal-glob-options-helper.72a223ea.js", "file:" + __filename).toString();

});

parcelRegister("hJVDy", function(module, exports) {
module.exports = new URL("internal-pattern-helper.adab4b3e.js", "file:" + __filename).toString();

});

"use strict";
var $b61cfab0c4a10e21$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $b61cfab0c4a10e21$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b61cfab0c4a10e21$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $b61cfab0c4a10e21$var$__createBinding(result, mod, k);
    }
    $b61cfab0c4a10e21$var$__setModuleDefault(result, mod);
    return result;
};
var $b61cfab0c4a10e21$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $b61cfab0c4a10e21$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var $b61cfab0c4a10e21$var$__await = module.exports && module.exports.__await || function(v) {
    return this instanceof $b61cfab0c4a10e21$var$__await ? (this.v = v, this) : new $b61cfab0c4a10e21$var$__await(v);
};
var $b61cfab0c4a10e21$var$__asyncGenerator = module.exports && module.exports.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $b61cfab0c4a10e21$var$__await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.DefaultGlobber = void 0;

const $b61cfab0c4a10e21$var$core = $b61cfab0c4a10e21$var$__importStar((parcelRequire("1irLk")));

const $b61cfab0c4a10e21$var$fs = $b61cfab0c4a10e21$var$__importStar($2JTT1$fs);

const $b61cfab0c4a10e21$var$globOptionsHelper = $b61cfab0c4a10e21$var$__importStar((parcelRequire("3pmDv")));

const $b61cfab0c4a10e21$var$path = $b61cfab0c4a10e21$var$__importStar($2JTT1$path);

const $b61cfab0c4a10e21$var$patternHelper = $b61cfab0c4a10e21$var$__importStar((parcelRequire("hJVDy")));

var $7JNaG = parcelRequire("7JNaG");
var $f8bb6288cadf07df$exports = {};
$f8bb6288cadf07df$exports = new URL("internal-pattern.3a9b6e45.js", "file:" + __filename).toString();


var $b0389dfda75eed37$exports = {};
$b0389dfda75eed37$exports = new URL("internal-search-state.307c1697.js", "file:" + __filename).toString();


const $b61cfab0c4a10e21$var$IS_WINDOWS = process.platform === 'win32';
class $b61cfab0c4a10e21$var$DefaultGlobber {
    constructor(options){
        this.patterns = [];
        this.searchPaths = [];
        this.options = $b61cfab0c4a10e21$var$globOptionsHelper.getOptions(options);
    }
    getSearchPaths() {
        // Return a copy
        return this.searchPaths.slice();
    }
    glob() {
        var e_1, _a;
        return $b61cfab0c4a10e21$var$__awaiter(this, void 0, void 0, function*() {
            const result = [];
            try {
                for(var _b = $b61cfab0c4a10e21$var$__asyncValues(this.globGenerator()), _c; _c = yield _b.next(), !_c.done;){
                    const itemPath = _c.value;
                    result.push(itemPath);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return result;
        });
    }
    globGenerator() {
        return $b61cfab0c4a10e21$var$__asyncGenerator(this, arguments, function* globGenerator_1() {
            // Fill in defaults options
            const options = $b61cfab0c4a10e21$var$globOptionsHelper.getOptions(this.options);
            // Implicit descendants?
            const patterns = [];
            for (const pattern of this.patterns){
                patterns.push(pattern);
                if (options.implicitDescendants && (pattern.trailingSeparator || pattern.segments[pattern.segments.length - 1] !== '**')) patterns.push(new $f8bb6288cadf07df$exports.Pattern(pattern.negate, true, pattern.segments.concat('**')));
            }
            // Push the search paths
            const stack = [];
            for (const searchPath of $b61cfab0c4a10e21$var$patternHelper.getSearchPaths(patterns)){
                $b61cfab0c4a10e21$var$core.debug(`Search path '${searchPath}'`);
                // Exists?
                try {
                    // Intentionally using lstat. Detection for broken symlink
                    // will be performed later (if following symlinks).
                    yield $b61cfab0c4a10e21$var$__await($b61cfab0c4a10e21$var$fs.promises.lstat(searchPath));
                } catch (err) {
                    if (err.code === 'ENOENT') continue;
                    throw err;
                }
                stack.unshift(new $b0389dfda75eed37$exports.SearchState(searchPath, 1));
            }
            // Search
            const traversalChain = []; // used to detect cycles
            while(stack.length){
                // Pop
                const item = stack.pop();
                // Match?
                const match = $b61cfab0c4a10e21$var$patternHelper.match(patterns, item.path);
                const partialMatch = !!match || $b61cfab0c4a10e21$var$patternHelper.partialMatch(patterns, item.path);
                if (!match && !partialMatch) continue;
                // Stat
                const stats = yield $b61cfab0c4a10e21$var$__await($b61cfab0c4a10e21$var$DefaultGlobber.stat(item, options, traversalChain));
                // Broken symlink, or symlink cycle detected, or no longer exists
                if (!stats) continue;
                // Directory
                if (stats.isDirectory()) {
                    // Matched
                    if (match & $7JNaG.MatchKind.Directory) yield yield $b61cfab0c4a10e21$var$__await(item.path);
                    else if (!partialMatch) continue;
                    // Push the child items in reverse
                    const childLevel = item.level + 1;
                    const childItems = (yield $b61cfab0c4a10e21$var$__await($b61cfab0c4a10e21$var$fs.promises.readdir(item.path))).map((x)=>new $b0389dfda75eed37$exports.SearchState($b61cfab0c4a10e21$var$path.join(item.path, x), childLevel));
                    stack.push(...childItems.reverse());
                } else if (match & $7JNaG.MatchKind.File) yield yield $b61cfab0c4a10e21$var$__await(item.path);
            }
        });
    }
    /**
     * Constructs a DefaultGlobber
     */ static create(patterns, options) {
        return $b61cfab0c4a10e21$var$__awaiter(this, void 0, void 0, function*() {
            const result = new $b61cfab0c4a10e21$var$DefaultGlobber(options);
            if ($b61cfab0c4a10e21$var$IS_WINDOWS) {
                patterns = patterns.replace(/\r\n/g, '\n');
                patterns = patterns.replace(/\r/g, '\n');
            }
            const lines = patterns.split('\n').map((x)=>x.trim());
            for (const line of lines){
                // Empty or comment
                if (!line || line.startsWith('#')) continue;
                else result.patterns.push(new $f8bb6288cadf07df$exports.Pattern(line));
            }
            result.searchPaths.push(...$b61cfab0c4a10e21$var$patternHelper.getSearchPaths(result.patterns));
            return result;
        });
    }
    static stat(item, options, traversalChain) {
        return $b61cfab0c4a10e21$var$__awaiter(this, void 0, void 0, function*() {
            // Note:
            // `stat` returns info about the target of a symlink (or symlink chain)
            // `lstat` returns info about a symlink itself
            let stats;
            if (options.followSymbolicLinks) try {
                // Use `stat` (following symlinks)
                stats = yield $b61cfab0c4a10e21$var$fs.promises.stat(item.path);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    if (options.omitBrokenSymbolicLinks) {
                        $b61cfab0c4a10e21$var$core.debug(`Broken symlink '${item.path}'`);
                        return undefined;
                    }
                    throw new Error(`No information found for the path '${item.path}'. This may indicate a broken symbolic link.`);
                }
                throw err;
            }
            else // Use `lstat` (not following symlinks)
            stats = yield $b61cfab0c4a10e21$var$fs.promises.lstat(item.path);
            // Note, isDirectory() returns false for the lstat of a symlink
            if (stats.isDirectory() && options.followSymbolicLinks) {
                // Get the realpath
                const realPath = yield $b61cfab0c4a10e21$var$fs.promises.realpath(item.path);
                // Fixup the traversal chain to match the item level
                while(traversalChain.length >= item.level)traversalChain.pop();
                // Test for a cycle
                if (traversalChain.some((x)=>x === realPath)) {
                    $b61cfab0c4a10e21$var$core.debug(`Symlink cycle detected for path '${item.path}' and realpath '${realPath}'`);
                    return undefined;
                }
                // Update the traversal chain
                traversalChain.push(realPath);
            }
            return stats;
        });
    }
}
module.exports.DefaultGlobber = $b61cfab0c4a10e21$var$DefaultGlobber;


