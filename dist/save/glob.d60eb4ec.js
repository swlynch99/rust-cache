require("./internal-globber.e6bd3b16.js");
require("./internal-hash-files.bf03292a.js");

"use strict";
var $e0288bc17b4c4a1a$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $dc72591485c0eb34$exports = {};
$dc72591485c0eb34$exports = new URL("internal-globber.e6bd3b16.js", "file:" + __filename).toString();


var $c1c5ac6c3fd6a02f$exports = {};
$c1c5ac6c3fd6a02f$exports = new URL("internal-hash-files.bf03292a.js", "file:" + __filename).toString();


/**
 * Constructs a globber
 *
 * @param patterns  Patterns separated by newlines
 * @param options   Glob options
 */ function $e0288bc17b4c4a1a$var$create(patterns, options) {
    return $e0288bc17b4c4a1a$var$__awaiter(this, void 0, void 0, function*() {
        return yield $dc72591485c0eb34$exports.DefaultGlobber.create(patterns, options);
    });
}
module.exports.create = $e0288bc17b4c4a1a$var$create;
/**
 * Computes the sha256 hash of a glob
 *
 * @param patterns  Patterns separated by newlines
 * @param currentWorkspace  Workspace used when matching files
 * @param options   Glob options
 * @param verbose   Enables verbose logging
 */ function $e0288bc17b4c4a1a$var$hashFiles(patterns, currentWorkspace = '', options, verbose = false) {
    return $e0288bc17b4c4a1a$var$__awaiter(this, void 0, void 0, function*() {
        let followSymbolicLinks = true;
        if (options && typeof options.followSymbolicLinks === 'boolean') followSymbolicLinks = options.followSymbolicLinks;
        const globber = yield $e0288bc17b4c4a1a$var$create(patterns, {
            followSymbolicLinks: followSymbolicLinks
        });
        return (0, $c1c5ac6c3fd6a02f$exports.hashFiles)(globber, currentWorkspace, verbose);
    });
}
module.exports.hashFiles = $e0288bc17b4c4a1a$var$hashFiles;


//# sourceMappingURL=glob.d60eb4ec.js.map
