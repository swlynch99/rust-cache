require("./internal-path-helper.390cbae5.js");
var $ktN6m$path = require("path");
var $ktN6m$assert = require("assert");


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
var $b9d3da688dbefeb6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $b9d3da688dbefeb6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b9d3da688dbefeb6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $b9d3da688dbefeb6$var$__createBinding(result, mod, k);
    }
    $b9d3da688dbefeb6$var$__setModuleDefault(result, mod);
    return result;
};
var $b9d3da688dbefeb6$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Path = void 0;

const $b9d3da688dbefeb6$var$path = $b9d3da688dbefeb6$var$__importStar($ktN6m$path);

const $b9d3da688dbefeb6$var$pathHelper = $b9d3da688dbefeb6$var$__importStar((parcelRequire("zxvsl")));

const $b9d3da688dbefeb6$var$assert_1 = $b9d3da688dbefeb6$var$__importDefault($ktN6m$assert);
const $b9d3da688dbefeb6$var$IS_WINDOWS = process.platform === 'win32';
/**
 * Helper class for parsing paths into segments
 */ class $b9d3da688dbefeb6$var$Path {
    /**
     * Constructs a Path
     * @param itemPath Path or array of segments
     */ constructor(itemPath){
        this.segments = [];
        // String
        if (typeof itemPath === 'string') {
            $b9d3da688dbefeb6$var$assert_1.default(itemPath, `Parameter 'itemPath' must not be empty`);
            // Normalize slashes and trim unnecessary trailing slash
            itemPath = $b9d3da688dbefeb6$var$pathHelper.safeTrimTrailingSeparator(itemPath);
            // Not rooted
            if (!$b9d3da688dbefeb6$var$pathHelper.hasRoot(itemPath)) this.segments = itemPath.split($b9d3da688dbefeb6$var$path.sep);
            else {
                // Add all segments, while not at the root
                let remaining = itemPath;
                let dir = $b9d3da688dbefeb6$var$pathHelper.dirname(remaining);
                while(dir !== remaining){
                    // Add the segment
                    const basename = $b9d3da688dbefeb6$var$path.basename(remaining);
                    this.segments.unshift(basename);
                    // Truncate the last segment
                    remaining = dir;
                    dir = $b9d3da688dbefeb6$var$pathHelper.dirname(remaining);
                }
                // Remainder is the root
                this.segments.unshift(remaining);
            }
        } else {
            // Must not be empty
            $b9d3da688dbefeb6$var$assert_1.default(itemPath.length > 0, `Parameter 'itemPath' must not be an empty array`);
            // Each segment
            for(let i = 0; i < itemPath.length; i++){
                let segment = itemPath[i];
                // Must not be empty
                $b9d3da688dbefeb6$var$assert_1.default(segment, `Parameter 'itemPath' must not contain any empty segments`);
                // Normalize slashes
                segment = $b9d3da688dbefeb6$var$pathHelper.normalizeSeparators(itemPath[i]);
                // Root segment
                if (i === 0 && $b9d3da688dbefeb6$var$pathHelper.hasRoot(segment)) {
                    segment = $b9d3da688dbefeb6$var$pathHelper.safeTrimTrailingSeparator(segment);
                    $b9d3da688dbefeb6$var$assert_1.default(segment === $b9d3da688dbefeb6$var$pathHelper.dirname(segment), `Parameter 'itemPath' root segment contains information for multiple segments`);
                    this.segments.push(segment);
                } else {
                    // Must not contain slash
                    $b9d3da688dbefeb6$var$assert_1.default(!segment.includes($b9d3da688dbefeb6$var$path.sep), `Parameter 'itemPath' contains unexpected path separators`);
                    this.segments.push(segment);
                }
            }
        }
    }
    /**
     * Converts the path to it's string representation
     */ toString() {
        // First segment
        let result = this.segments[0];
        // All others
        let skipSlash = result.endsWith($b9d3da688dbefeb6$var$path.sep) || $b9d3da688dbefeb6$var$IS_WINDOWS && /^[A-Z]:$/i.test(result);
        for(let i = 1; i < this.segments.length; i++){
            if (skipSlash) skipSlash = false;
            else result += $b9d3da688dbefeb6$var$path.sep;
            result += this.segments[i];
        }
        return result;
    }
}
module.exports.Path = $b9d3da688dbefeb6$var$Path;


//# sourceMappingURL=internal-path.be4b4a80.js.map
