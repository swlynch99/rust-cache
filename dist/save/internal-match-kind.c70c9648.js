"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.MatchKind = void 0;
/**
 * Indicates whether a pattern matches a path
 */ var $f9e37215ec637ebd$var$MatchKind;
(function(MatchKind) {
    /** Not matched */ MatchKind[MatchKind["None"] = 0] = "None";
    /** Matched if the path is a directory */ MatchKind[MatchKind["Directory"] = 1] = "Directory";
    /** Matched if the path is a regular file */ MatchKind[MatchKind["File"] = 2] = "File";
    /** Matched */ MatchKind[MatchKind["All"] = 3] = "All";
})($f9e37215ec637ebd$var$MatchKind || (module.exports.MatchKind = $f9e37215ec637ebd$var$MatchKind = {}));


