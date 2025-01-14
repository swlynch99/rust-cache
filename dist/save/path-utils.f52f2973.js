var $bGxmc$path = require("path");

"use strict";
var $22257d78d2fe3a23$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $22257d78d2fe3a23$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $22257d78d2fe3a23$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $22257d78d2fe3a23$var$__createBinding(result, mod, k);
    }
    $22257d78d2fe3a23$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.toPlatformPath = module.exports.toWin32Path = module.exports.toPosixPath = void 0;

const $22257d78d2fe3a23$var$path = $22257d78d2fe3a23$var$__importStar($bGxmc$path);
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */ function $22257d78d2fe3a23$var$toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
module.exports.toPosixPath = $22257d78d2fe3a23$var$toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */ function $22257d78d2fe3a23$var$toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
module.exports.toWin32Path = $22257d78d2fe3a23$var$toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */ function $22257d78d2fe3a23$var$toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, $22257d78d2fe3a23$var$path.sep);
}
module.exports.toPlatformPath = $22257d78d2fe3a23$var$toPlatformPath;


