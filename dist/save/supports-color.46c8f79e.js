require("./has-flag.c22a32be.js");
var $hiGeN$os = require("os");
var $hiGeN$tty = require("tty");


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
parcelRegister("6oxDF", function(module, exports) {
'use strict';



var $fYhCq = parcelRequire("fYhCq");
const { env: $4a7f13efa3b75e6e$var$env } = process;
let $4a7f13efa3b75e6e$var$forceColor;
if ($fYhCq('no-color') || $fYhCq('no-colors') || $fYhCq('color=false') || $fYhCq('color=never')) $4a7f13efa3b75e6e$var$forceColor = 0;
else if ($fYhCq('color') || $fYhCq('colors') || $fYhCq('color=true') || $fYhCq('color=always')) $4a7f13efa3b75e6e$var$forceColor = 1;
if ('FORCE_COLOR' in $4a7f13efa3b75e6e$var$env) {
    if ($4a7f13efa3b75e6e$var$env.FORCE_COLOR === 'true') $4a7f13efa3b75e6e$var$forceColor = 1;
    else if ($4a7f13efa3b75e6e$var$env.FORCE_COLOR === 'false') $4a7f13efa3b75e6e$var$forceColor = 0;
    else $4a7f13efa3b75e6e$var$forceColor = $4a7f13efa3b75e6e$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt($4a7f13efa3b75e6e$var$env.FORCE_COLOR, 10), 3);
}
function $4a7f13efa3b75e6e$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function $4a7f13efa3b75e6e$var$supportsColor(haveStream, streamIsTTY) {
    if ($4a7f13efa3b75e6e$var$forceColor === 0) return 0;
    if ($fYhCq('color=16m') || $fYhCq('color=full') || $fYhCq('color=truecolor')) return 3;
    if ($fYhCq('color=256')) return 2;
    if (haveStream && !streamIsTTY && $4a7f13efa3b75e6e$var$forceColor === undefined) return 0;
    const min = $4a7f13efa3b75e6e$var$forceColor || 0;
    if ($4a7f13efa3b75e6e$var$env.TERM === 'dumb') return min;
    if (process.platform === 'win32') {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = $hiGeN$os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) return Number(osRelease[2]) >= 14931 ? 3 : 2;
        return 1;
    }
    if ('CI' in $4a7f13efa3b75e6e$var$env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in $4a7f13efa3b75e6e$var$env) || $4a7f13efa3b75e6e$var$env.CI_NAME === 'codeship') return 1;
        return min;
    }
    if ('TEAMCITY_VERSION' in $4a7f13efa3b75e6e$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($4a7f13efa3b75e6e$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($4a7f13efa3b75e6e$var$env.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in $4a7f13efa3b75e6e$var$env) {
        const version = parseInt(($4a7f13efa3b75e6e$var$env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch($4a7f13efa3b75e6e$var$env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test($4a7f13efa3b75e6e$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($4a7f13efa3b75e6e$var$env.TERM)) return 1;
    if ('COLORTERM' in $4a7f13efa3b75e6e$var$env) return 1;
    return min;
}
function $4a7f13efa3b75e6e$var$getSupportLevel(stream) {
    const level = $4a7f13efa3b75e6e$var$supportsColor(stream, stream && stream.isTTY);
    return $4a7f13efa3b75e6e$var$translateLevel(level);
}
module.exports = {
    supportsColor: $4a7f13efa3b75e6e$var$getSupportLevel,
    stdout: $4a7f13efa3b75e6e$var$translateLevel($4a7f13efa3b75e6e$var$supportsColor(true, $hiGeN$tty.isatty(1))),
    stderr: $4a7f13efa3b75e6e$var$translateLevel($4a7f13efa3b75e6e$var$supportsColor(true, $hiGeN$tty.isatty(2)))
};

});
parcelRegister("fYhCq", function(module, exports) {
module.exports = new URL("has-flag.c22a32be.js", "file:" + __filename).toString();

});



//# sourceMappingURL=supports-color.46c8f79e.js.map
