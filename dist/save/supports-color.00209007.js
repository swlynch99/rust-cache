require("./has-flag.f8665fc4.js");
var $cq11H$os = require("os");
var $cq11H$tty = require("tty");


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
parcelRegister("juyNz", function(module, exports) {
'use strict';



var $a2oqh = parcelRequire("a2oqh");
const { env: $e30bcff1497c8668$var$env } = process;
let $e30bcff1497c8668$var$forceColor;
if ($a2oqh('no-color') || $a2oqh('no-colors') || $a2oqh('color=false') || $a2oqh('color=never')) $e30bcff1497c8668$var$forceColor = 0;
else if ($a2oqh('color') || $a2oqh('colors') || $a2oqh('color=true') || $a2oqh('color=always')) $e30bcff1497c8668$var$forceColor = 1;
if ('FORCE_COLOR' in $e30bcff1497c8668$var$env) {
    if ($e30bcff1497c8668$var$env.FORCE_COLOR === 'true') $e30bcff1497c8668$var$forceColor = 1;
    else if ($e30bcff1497c8668$var$env.FORCE_COLOR === 'false') $e30bcff1497c8668$var$forceColor = 0;
    else $e30bcff1497c8668$var$forceColor = $e30bcff1497c8668$var$env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt($e30bcff1497c8668$var$env.FORCE_COLOR, 10), 3);
}
function $e30bcff1497c8668$var$translateLevel(level) {
    if (level === 0) return false;
    return {
        level: level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function $e30bcff1497c8668$var$supportsColor(haveStream, streamIsTTY) {
    if ($e30bcff1497c8668$var$forceColor === 0) return 0;
    if ($a2oqh('color=16m') || $a2oqh('color=full') || $a2oqh('color=truecolor')) return 3;
    if ($a2oqh('color=256')) return 2;
    if (haveStream && !streamIsTTY && $e30bcff1497c8668$var$forceColor === undefined) return 0;
    const min = $e30bcff1497c8668$var$forceColor || 0;
    if ($e30bcff1497c8668$var$env.TERM === 'dumb') return min;
    if (process.platform === 'win32') {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = $cq11H$os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) return Number(osRelease[2]) >= 14931 ? 3 : 2;
        return 1;
    }
    if ('CI' in $e30bcff1497c8668$var$env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in $e30bcff1497c8668$var$env) || $e30bcff1497c8668$var$env.CI_NAME === 'codeship') return 1;
        return min;
    }
    if ('TEAMCITY_VERSION' in $e30bcff1497c8668$var$env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test($e30bcff1497c8668$var$env.TEAMCITY_VERSION) ? 1 : 0;
    if ($e30bcff1497c8668$var$env.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in $e30bcff1497c8668$var$env) {
        const version = parseInt(($e30bcff1497c8668$var$env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch($e30bcff1497c8668$var$env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test($e30bcff1497c8668$var$env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test($e30bcff1497c8668$var$env.TERM)) return 1;
    if ('COLORTERM' in $e30bcff1497c8668$var$env) return 1;
    return min;
}
function $e30bcff1497c8668$var$getSupportLevel(stream) {
    const level = $e30bcff1497c8668$var$supportsColor(stream, stream && stream.isTTY);
    return $e30bcff1497c8668$var$translateLevel(level);
}
module.exports = {
    supportsColor: $e30bcff1497c8668$var$getSupportLevel,
    stdout: $e30bcff1497c8668$var$translateLevel($e30bcff1497c8668$var$supportsColor(true, $cq11H$tty.isatty(1))),
    stderr: $e30bcff1497c8668$var$translateLevel($e30bcff1497c8668$var$supportsColor(true, $cq11H$tty.isatty(2)))
};

});
parcelRegister("a2oqh", function(module, exports) {
module.exports = new URL("has-flag.f8665fc4.js", "file:" + __filename).toString();

});



