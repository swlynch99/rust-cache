require("./utils.ef636853.js");
var $jevr0$crypto = require("crypto");
var $jevr0$fs = require("fs");
var $jevr0$os = require("os");


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
// For internal use, subject to change.
var $a9c4cdc56de43a9b$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $a9c4cdc56de43a9b$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $a9c4cdc56de43a9b$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $a9c4cdc56de43a9b$var$__createBinding(result, mod, k);
    }
    $a9c4cdc56de43a9b$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.prepareKeyValueMessage = module.exports.issueFileCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $a9c4cdc56de43a9b$var$crypto = $a9c4cdc56de43a9b$var$__importStar($jevr0$crypto);

const $a9c4cdc56de43a9b$var$fs = $a9c4cdc56de43a9b$var$__importStar($jevr0$fs);

const $a9c4cdc56de43a9b$var$os = $a9c4cdc56de43a9b$var$__importStar($jevr0$os);

var $hU8yM = parcelRequire("hU8yM");
function $a9c4cdc56de43a9b$var$issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$a9c4cdc56de43a9b$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $a9c4cdc56de43a9b$var$fs.appendFileSync(filePath, `${(0, $hU8yM.toCommandValue)(message)}${$a9c4cdc56de43a9b$var$os.EOL}`, {
        encoding: 'utf8'
    });
}
module.exports.issueFileCommand = $a9c4cdc56de43a9b$var$issueFileCommand;
function $a9c4cdc56de43a9b$var$prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${$a9c4cdc56de43a9b$var$crypto.randomUUID()}`;
    const convertedValue = (0, $hU8yM.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    if (convertedValue.includes(delimiter)) throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    return `${key}<<${delimiter}${$a9c4cdc56de43a9b$var$os.EOL}${convertedValue}${$a9c4cdc56de43a9b$var$os.EOL}${delimiter}`;
}
module.exports.prepareKeyValueMessage = $a9c4cdc56de43a9b$var$prepareKeyValueMessage;


//# sourceMappingURL=file-command.603ae4ee.js.map
