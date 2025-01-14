require("./internal-path-helper.6deb369b.js");
require("./internal-match-kind.99401cc2.js");


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
parcelRegister("gmc1g", function(module, exports) {
"use strict";
var $be88063c42eccac4$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $be88063c42eccac4$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $be88063c42eccac4$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $be88063c42eccac4$var$__createBinding(result, mod, k);
    }
    $be88063c42eccac4$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.partialMatch = module.exports.match = module.exports.getSearchPaths = void 0;

const $be88063c42eccac4$var$pathHelper = $be88063c42eccac4$var$__importStar((parcelRequire("6s77Q")));

var $603DP = parcelRequire("603DP");
const $be88063c42eccac4$var$IS_WINDOWS = process.platform === 'win32';
/**
 * Given an array of patterns, returns an array of paths to search.
 * Duplicates and paths under other included paths are filtered out.
 */ function $be88063c42eccac4$var$getSearchPaths(patterns) {
    // Ignore negate patterns
    patterns = patterns.filter((x)=>!x.negate);
    // Create a map of all search paths
    const searchPathMap = {};
    for (const pattern of patterns){
        const key = $be88063c42eccac4$var$IS_WINDOWS ? pattern.searchPath.toUpperCase() : pattern.searchPath;
        searchPathMap[key] = 'candidate';
    }
    const result = [];
    for (const pattern of patterns){
        // Check if already included
        const key = $be88063c42eccac4$var$IS_WINDOWS ? pattern.searchPath.toUpperCase() : pattern.searchPath;
        if (searchPathMap[key] === 'included') continue;
        // Check for an ancestor search path
        let foundAncestor = false;
        let tempKey = key;
        let parent = $be88063c42eccac4$var$pathHelper.dirname(tempKey);
        while(parent !== tempKey){
            if (searchPathMap[parent]) {
                foundAncestor = true;
                break;
            }
            tempKey = parent;
            parent = $be88063c42eccac4$var$pathHelper.dirname(tempKey);
        }
        // Include the search pattern in the result
        if (!foundAncestor) {
            result.push(pattern.searchPath);
            searchPathMap[key] = 'included';
        }
    }
    return result;
}
module.exports.getSearchPaths = $be88063c42eccac4$var$getSearchPaths;
/**
 * Matches the patterns against the path
 */ function $be88063c42eccac4$var$match(patterns, itemPath) {
    let result = $603DP.MatchKind.None;
    for (const pattern of patterns)if (pattern.negate) result &= ~pattern.match(itemPath);
    else result |= pattern.match(itemPath);
    return result;
}
module.exports.match = $be88063c42eccac4$var$match;
/**
 * Checks whether to descend further into the directory
 */ function $be88063c42eccac4$var$partialMatch(patterns, itemPath) {
    return patterns.some((x)=>!x.negate && x.partialMatch(itemPath));
}
module.exports.partialMatch = $be88063c42eccac4$var$partialMatch;

});
parcelRegister("6s77Q", function(module, exports) {
module.exports = new URL("internal-path-helper.6deb369b.js", "file:" + __filename).toString();

});

parcelRegister("603DP", function(module, exports) {
module.exports = new URL("internal-match-kind.99401cc2.js", "file:" + __filename).toString();

});



