require("./core.fa35ff64.js");
require("./internal-glob-options-helper.fe097ca6.js");
require("./internal-pattern-helper.9824e01c.js");
require("./internal-match-kind.f81520d5.js");
require("./internal-pattern.491f181d.js");
require("./internal-search-state.8ea89d44.js");
var $lSqkF$fs = require("fs");
var $lSqkF$path = require("path");


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
parcelRegister("CEpM5", function(module, exports) {
module.exports = new URL("internal-glob-options-helper.fe097ca6.js", "file:" + __filename).toString();

});

parcelRegister("arjhJ", function(module, exports) {
module.exports = new URL("internal-pattern-helper.9824e01c.js", "file:" + __filename).toString();

});

"use strict";
var $de3ce8a5a3270a35$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $de3ce8a5a3270a35$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $de3ce8a5a3270a35$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $de3ce8a5a3270a35$var$__createBinding(result, mod, k);
    }
    $de3ce8a5a3270a35$var$__setModuleDefault(result, mod);
    return result;
};
var $de3ce8a5a3270a35$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $de3ce8a5a3270a35$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
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
var $de3ce8a5a3270a35$var$__await = module.exports && module.exports.__await || function(v) {
    return this instanceof $de3ce8a5a3270a35$var$__await ? (this.v = v, this) : new $de3ce8a5a3270a35$var$__await(v);
};
var $de3ce8a5a3270a35$var$__asyncGenerator = module.exports && module.exports.__asyncGenerator || function(thisArg, _arguments, generator) {
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
        r.value instanceof $de3ce8a5a3270a35$var$__await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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

const $de3ce8a5a3270a35$var$core = $de3ce8a5a3270a35$var$__importStar((parcelRequire("AJTaV")));

const $de3ce8a5a3270a35$var$fs = $de3ce8a5a3270a35$var$__importStar($lSqkF$fs);

const $de3ce8a5a3270a35$var$globOptionsHelper = $de3ce8a5a3270a35$var$__importStar((parcelRequire("CEpM5")));

const $de3ce8a5a3270a35$var$path = $de3ce8a5a3270a35$var$__importStar($lSqkF$path);

const $de3ce8a5a3270a35$var$patternHelper = $de3ce8a5a3270a35$var$__importStar((parcelRequire("arjhJ")));

var $6hzt8 = parcelRequire("6hzt8");
var $3996bec42b3aa998$exports = {};
$3996bec42b3aa998$exports = new URL("internal-pattern.491f181d.js", "file:" + __filename).toString();


var $63ef942bdcb4c18b$exports = {};
$63ef942bdcb4c18b$exports = new URL("internal-search-state.8ea89d44.js", "file:" + __filename).toString();


const $de3ce8a5a3270a35$var$IS_WINDOWS = process.platform === 'win32';
class $de3ce8a5a3270a35$var$DefaultGlobber {
    constructor(options){
        this.patterns = [];
        this.searchPaths = [];
        this.options = $de3ce8a5a3270a35$var$globOptionsHelper.getOptions(options);
    }
    getSearchPaths() {
        // Return a copy
        return this.searchPaths.slice();
    }
    glob() {
        var e_1, _a;
        return $de3ce8a5a3270a35$var$__awaiter(this, void 0, void 0, function*() {
            const result = [];
            try {
                for(var _b = $de3ce8a5a3270a35$var$__asyncValues(this.globGenerator()), _c; _c = yield _b.next(), !_c.done;){
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
        return $de3ce8a5a3270a35$var$__asyncGenerator(this, arguments, function* globGenerator_1() {
            // Fill in defaults options
            const options = $de3ce8a5a3270a35$var$globOptionsHelper.getOptions(this.options);
            // Implicit descendants?
            const patterns = [];
            for (const pattern of this.patterns){
                patterns.push(pattern);
                if (options.implicitDescendants && (pattern.trailingSeparator || pattern.segments[pattern.segments.length - 1] !== '**')) patterns.push(new $3996bec42b3aa998$exports.Pattern(pattern.negate, true, pattern.segments.concat('**')));
            }
            // Push the search paths
            const stack = [];
            for (const searchPath of $de3ce8a5a3270a35$var$patternHelper.getSearchPaths(patterns)){
                $de3ce8a5a3270a35$var$core.debug(`Search path '${searchPath}'`);
                // Exists?
                try {
                    // Intentionally using lstat. Detection for broken symlink
                    // will be performed later (if following symlinks).
                    yield $de3ce8a5a3270a35$var$__await($de3ce8a5a3270a35$var$fs.promises.lstat(searchPath));
                } catch (err) {
                    if (err.code === 'ENOENT') continue;
                    throw err;
                }
                stack.unshift(new $63ef942bdcb4c18b$exports.SearchState(searchPath, 1));
            }
            // Search
            const traversalChain = []; // used to detect cycles
            while(stack.length){
                // Pop
                const item = stack.pop();
                // Match?
                const match = $de3ce8a5a3270a35$var$patternHelper.match(patterns, item.path);
                const partialMatch = !!match || $de3ce8a5a3270a35$var$patternHelper.partialMatch(patterns, item.path);
                if (!match && !partialMatch) continue;
                // Stat
                const stats = yield $de3ce8a5a3270a35$var$__await($de3ce8a5a3270a35$var$DefaultGlobber.stat(item, options, traversalChain));
                // Broken symlink, or symlink cycle detected, or no longer exists
                if (!stats) continue;
                // Directory
                if (stats.isDirectory()) {
                    // Matched
                    if (match & $6hzt8.MatchKind.Directory) yield yield $de3ce8a5a3270a35$var$__await(item.path);
                    else if (!partialMatch) continue;
                    // Push the child items in reverse
                    const childLevel = item.level + 1;
                    const childItems = (yield $de3ce8a5a3270a35$var$__await($de3ce8a5a3270a35$var$fs.promises.readdir(item.path))).map((x)=>new $63ef942bdcb4c18b$exports.SearchState($de3ce8a5a3270a35$var$path.join(item.path, x), childLevel));
                    stack.push(...childItems.reverse());
                } else if (match & $6hzt8.MatchKind.File) yield yield $de3ce8a5a3270a35$var$__await(item.path);
            }
        });
    }
    /**
     * Constructs a DefaultGlobber
     */ static create(patterns, options) {
        return $de3ce8a5a3270a35$var$__awaiter(this, void 0, void 0, function*() {
            const result = new $de3ce8a5a3270a35$var$DefaultGlobber(options);
            if ($de3ce8a5a3270a35$var$IS_WINDOWS) {
                patterns = patterns.replace(/\r\n/g, '\n');
                patterns = patterns.replace(/\r/g, '\n');
            }
            const lines = patterns.split('\n').map((x)=>x.trim());
            for (const line of lines){
                // Empty or comment
                if (!line || line.startsWith('#')) continue;
                else result.patterns.push(new $3996bec42b3aa998$exports.Pattern(line));
            }
            result.searchPaths.push(...$de3ce8a5a3270a35$var$patternHelper.getSearchPaths(result.patterns));
            return result;
        });
    }
    static stat(item, options, traversalChain) {
        return $de3ce8a5a3270a35$var$__awaiter(this, void 0, void 0, function*() {
            // Note:
            // `stat` returns info about the target of a symlink (or symlink chain)
            // `lstat` returns info about a symlink itself
            let stats;
            if (options.followSymbolicLinks) try {
                // Use `stat` (following symlinks)
                stats = yield $de3ce8a5a3270a35$var$fs.promises.stat(item.path);
            } catch (err) {
                if (err.code === 'ENOENT') {
                    if (options.omitBrokenSymbolicLinks) {
                        $de3ce8a5a3270a35$var$core.debug(`Broken symlink '${item.path}'`);
                        return undefined;
                    }
                    throw new Error(`No information found for the path '${item.path}'. This may indicate a broken symbolic link.`);
                }
                throw err;
            }
            else // Use `lstat` (not following symlinks)
            stats = yield $de3ce8a5a3270a35$var$fs.promises.lstat(item.path);
            // Note, isDirectory() returns false for the lstat of a symlink
            if (stats.isDirectory() && options.followSymbolicLinks) {
                // Get the realpath
                const realPath = yield $de3ce8a5a3270a35$var$fs.promises.realpath(item.path);
                // Fixup the traversal chain to match the item level
                while(traversalChain.length >= item.level)traversalChain.pop();
                // Test for a cycle
                if (traversalChain.some((x)=>x === realPath)) {
                    $de3ce8a5a3270a35$var$core.debug(`Symlink cycle detected for path '${item.path}' and realpath '${realPath}'`);
                    return undefined;
                }
                // Update the traversal chain
                traversalChain.push(realPath);
            }
            return stats;
        });
    }
}
module.exports.DefaultGlobber = $de3ce8a5a3270a35$var$DefaultGlobber;


//# sourceMappingURL=internal-globber.02d22f3e.js.map
