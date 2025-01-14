require("./utils.51ccba28.js");
var $cLCOs$crypto = require("crypto");
var $cLCOs$fs = require("fs");
var $cLCOs$os = require("os");


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
var $f6d27b4536163a29$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $f6d27b4536163a29$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f6d27b4536163a29$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $f6d27b4536163a29$var$__createBinding(result, mod, k);
    }
    $f6d27b4536163a29$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.prepareKeyValueMessage = module.exports.issueFileCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $f6d27b4536163a29$var$crypto = $f6d27b4536163a29$var$__importStar($cLCOs$crypto);

const $f6d27b4536163a29$var$fs = $f6d27b4536163a29$var$__importStar($cLCOs$fs);

const $f6d27b4536163a29$var$os = $f6d27b4536163a29$var$__importStar($cLCOs$os);

var $ajJpr = parcelRequire("ajJpr");
function $f6d27b4536163a29$var$issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$f6d27b4536163a29$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $f6d27b4536163a29$var$fs.appendFileSync(filePath, `${(0, $ajJpr.toCommandValue)(message)}${$f6d27b4536163a29$var$os.EOL}`, {
        encoding: 'utf8'
    });
}
module.exports.issueFileCommand = $f6d27b4536163a29$var$issueFileCommand;
function $f6d27b4536163a29$var$prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${$f6d27b4536163a29$var$crypto.randomUUID()}`;
    const convertedValue = (0, $ajJpr.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    if (convertedValue.includes(delimiter)) throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    return `${key}<<${delimiter}${$f6d27b4536163a29$var$os.EOL}${convertedValue}${$f6d27b4536163a29$var$os.EOL}${delimiter}`;
}
module.exports.prepareKeyValueMessage = $f6d27b4536163a29$var$prepareKeyValueMessage;


