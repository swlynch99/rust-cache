require("./internal-globber.d0b1ce0a.js");
require("./internal-hash-files.cabf00bc.js");

"use strict";
var $8b6731296fcf52c2$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.hashFiles = module.exports.create = void 0;
var $a885fd9ae4b5ef0d$exports = {};
$a885fd9ae4b5ef0d$exports = new URL("internal-globber.d0b1ce0a.js", "file:" + __filename).toString();


var $9252261e0226539b$exports = {};
$9252261e0226539b$exports = new URL("internal-hash-files.cabf00bc.js", "file:" + __filename).toString();


/**
 * Constructs a globber
 *
 * @param patterns  Patterns separated by newlines
 * @param options   Glob options
 */ function $8b6731296fcf52c2$var$create(patterns, options) {
    return $8b6731296fcf52c2$var$__awaiter(this, void 0, void 0, function*() {
        return yield $a885fd9ae4b5ef0d$exports.DefaultGlobber.create(patterns, options);
    });
}
module.exports.create = $8b6731296fcf52c2$var$create;
/**
 * Computes the sha256 hash of a glob
 *
 * @param patterns  Patterns separated by newlines
 * @param currentWorkspace  Workspace used when matching files
 * @param options   Glob options
 * @param verbose   Enables verbose logging
 */ function $8b6731296fcf52c2$var$hashFiles(patterns, currentWorkspace = '', options, verbose = false) {
    return $8b6731296fcf52c2$var$__awaiter(this, void 0, void 0, function*() {
        let followSymbolicLinks = true;
        if (options && typeof options.followSymbolicLinks === 'boolean') followSymbolicLinks = options.followSymbolicLinks;
        const globber = yield $8b6731296fcf52c2$var$create(patterns, {
            followSymbolicLinks: followSymbolicLinks
        });
        return (0, $9252261e0226539b$exports.hashFiles)(globber, currentWorkspace, verbose);
    });
}
module.exports.hashFiles = $8b6731296fcf52c2$var$hashFiles;


