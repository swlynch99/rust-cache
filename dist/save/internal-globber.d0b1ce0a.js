require("./core.da66a1bd.js");
require("./internal-glob-options-helper.6de9a823.js");
require("./internal-pattern-helper.c68a57d3.js");
require("./internal-match-kind.c70c9648.js");
require("./internal-pattern.b0ca68af.js");
require("./internal-search-state.df8ce221.js");
var $g9794$fs = require("fs");
var $g9794$path = require("path");


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
parcelRegister("vZYVY", function(module, exports) {
module.exports = new URL("internal-glob-options-helper.6de9a823.js", "file:" + __filename).toString();

});

parcelRegister("dPg8w", function(module, exports) {
module.exports = new URL("internal-pattern-helper.c68a57d3.js", "file:" + __filename).toString();

});

"use strict";
var $e9335ab694d506cb$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $e9335ab694d506cb$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e9335ab694d506cb$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e9335ab694d506cb$var$__createBinding(result, mod, k);
    }
    $e9335ab694d506cb$var$__setModuleDefault(result, mod);
    return result;
};
var $e9335ab694d506cb$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $e9335ab694d506cb$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
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
var $e9335ab694d506cb$var$__await = module.exports && module.exports.__await || function(v) {
    return this instanceof $e9335ab694d506cb$var$__await ? (this.v = v, this) : new $e9335ab694d506cb$var$__await(v);
};
var $e9335ab694d506cb$var$__asyncGenerator = module.exports && module.exports.__asyncGenerator || function(thisArg, _arguments, generator) {
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
        r.value instanceof $e9335ab694d506cb$var$__await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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

const $e9335ab694d506cb$var$core = $e9335ab694d506cb$var$__importStar((parcelRequire("1irLk")));

const $e9335ab694d506cb$var$fs = $e9335ab694d506cb$var$__importStar($g9794$fs);

const $e9335ab694d506cb$var$globOptionsHelper = $e9335ab694d506cb$var$__importStar((parcelRequire("vZYVY")));

const $e9335ab694d506cb$var$path = $e9335ab694d506cb$var$__importStar($g9794$path);

const $e9335ab694d506cb$var$patternHelper = $e9335ab694d506cb$var$__importStar((parcelRequire("dPg8w")));

var $ls9ka = parcelRequire("ls9ka");
var $32f6707e23e5be69$exports = {};
$32f6707e23e5be69$exports = new URL("internal-pattern.b0ca68af.js", "file:" + __filename).toString();


var $f00821aa745033ec$exports = {};
$f00821aa745033ec$exports = new URL("internal-search-state.df8ce221.js", "file:" + __filename).toString();


const $e9335ab694d506cb$var$IS_WINDOWS = process.platform === 'win32';
class $e9335ab694d506cb$var$DefaultGlobber {
    constructor(options){
        this.patterns = [];
        this.searchPaths = [];
        this.options = $e9335ab694d506cb$var$globOptionsHelper.getOptions(options);
    }
    getSearchPaths() {
        // Return a copy
        return this.searchPaths.slice();
    }
    glob() {
        var _a, e_1, _b, _c;
        return $e9335ab694d506cb$var$__awaiter(this, void 0, void 0, function*() {
            const result = [];
            try {
                for(var _d = true, _e = $e9335ab694d506cb$var$__asyncValues(this.globGenerator()), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true){
                    _c = _f.value;
                    _d = false;
                    const itemPath = _c;
                    result.push(itemPath);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return result;
        });
    }
    globGenerator() {
        return $e9335ab694d506cb$var$__asyncGenerator(this, arguments, function* globGenerator_1() {
            // Fill in defaults options
            const options = $e9335ab694d506cb$var$globOptionsHelper.getOptions(this.options);
            // Implicit descendants?
            const patterns = [];
            for (const pattern of this.patterns){
                patterns.push(pattern);
                if (options.implicitDescendants && (pattern.trailingSeparator || pattern.segments[pattern.segments.length - 1] !== '**')) patterns.push(new $32f6707e23e5be69$exports.Pattern(pattern.negate, true, pattern.segments.concat('**')));
            }
            // Push the search paths
            const stack = [];
            for (const searchPath of $e9335ab694d506cb$var$patternHelper.getSearchPaths(patterns)){
                $e9335ab694d506cb$var$core.debug(`Search path '${searchPath}'`);
                // Exists?
                try {
                    // Intentionally using lstat. Detection for broken symlink
                    // will be performed later (if following symlinks).
                    yield $e9335ab694d506cb$var$__await($e9335ab694d506cb$var$fs.promises.lstat(searchPath));
                } catch (err) {
                    if (err.code === 'ENOENT') continue;
                    throw err;
                }
                stack.unshift(new $f00821aa745033ec$exports.SearchState(searchPath, 1));
            }
            // Search
            const traversalChain = []; // used to detect cycles
            while(stack.length){
                // Pop
                const item = stack.pop();
                // Match?
                const match = $e9335ab694d506cb$var$patternHelper.match(patterns, item.path);
                const partialMatch = !!match || $e9335ab694d506cb$var$patternHelper.partialMatch(patterns, item.path);
                if (!match && !partialMatch) continue;
                // Stat
                const stats = yield $e9335ab694d506cb$var$__await($e9335ab694d506cb$var$DefaultGlobber.stat(item, options, traversalChain));
                // Broken symlink, or symlink cycle detected, or no longer exists
                if (!stats) continue;
                // Hidden file or directory?
                if (options.excludeHiddenFiles && $e9335ab694d506cb$var$path.basename(item.path).match(/^\./)) continue;
                // Directory
                if (stats.isDirectory()) {
                    // Matched
                    if (match & $ls9ka.MatchKind.Directory && options.matchDirectories) yield yield $e9335ab694d506cb$var$__await(item.path);
                    else if (!partialMatch) continue;
                    // Push the child items in reverse
                    const childLevel = item.level + 1;
                    const childItems = (yield $e9335ab694d506cb$var$__await($e9335ab694d506cb$var$fs.promises.readdir(item.path))).map((x)=>new $f00821aa745033ec$exports.SearchState($e9335ab694d506cb$var$path.join(item.path, x), childLevel));
                    stack.push(...childItems.reverse());
                } else if (match & $ls9ka.MatchKind.File) yield yield $e9335ab694d506cb$var$__await(item.path);
            }
        });
    }
    /**
     * Constructs a DefaultGlobber
     */ static create(patterns, options) {
        return $e9335ab694d506cb$var$__awaiter(this, void 0, void 0, function*() {
            const result = new $e9335ab694d506cb$var$DefaultGlobber(options);
            if ($e9335ab694d506cb$var$IS_WINDOWS) {
                patterns = patterns.replace(/\r\n/g, '\n');
                patterns = patterns.replace(/\r/g, '\n');
            }
            const lines = patterns.split('\n').map((x)=>x.trim());
            for (const line of lines){
                // Empty or comment
                if (!line || line.startsWith('#')) continue;
                else result.patterns.push(new $32f6707e23e5be69$exports.Pattern(line));
            }
            result.searchPaths.push(...$e9335ab694d506cb$var$patternHelper.getSearchPaths(result.patterns));
            return result;
        });
    }
    static stat(item, options, traversalChain) {
        return $e9335ab694d506cb$var$__awaiter(this, void 0, void 0, function*() {
            // Note:
            // `stat` returns info about the target of a symlink (or symlink chain)
            // `lstat` returns info about a symlink itself
            let stats;
            if (options.followSymbolicLinks) try {
                // Use `stat` (following symlinks)
                stats = yield $e9335ab694d506cb$var$fs.promises.stat(item.path);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    if (options.omitBrokenSymbolicLinks) {
                        $e9335ab694d506cb$var$core.debug(`Broken symlink '${item.path}'`);
                        return undefined;
                    }
                    throw new Error(`No information found for the path '${item.path}'. This may indicate a broken symbolic link.`);
                }
                throw err;
            }
            else // Use `lstat` (not following symlinks)
            stats = yield $e9335ab694d506cb$var$fs.promises.lstat(item.path);
            // Note, isDirectory() returns false for the lstat of a symlink
            if (stats.isDirectory() && options.followSymbolicLinks) {
                // Get the realpath
                const realPath = yield $e9335ab694d506cb$var$fs.promises.realpath(item.path);
                // Fixup the traversal chain to match the item level
                while(traversalChain.length >= item.level)traversalChain.pop();
                // Test for a cycle
                if (traversalChain.some((x)=>x === realPath)) {
                    $e9335ab694d506cb$var$core.debug(`Symlink cycle detected for path '${item.path}' and realpath '${realPath}'`);
                    return undefined;
                }
                // Update the traversal chain
                traversalChain.push(realPath);
            }
            return stats;
        });
    }
}
module.exports.DefaultGlobber = $e9335ab694d506cb$var$DefaultGlobber;


