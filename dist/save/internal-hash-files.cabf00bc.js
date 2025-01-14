require("./core.da66a1bd.js");
var $3rreR$crypto = require("crypto");
var $3rreR$fs = require("fs");
var $3rreR$stream = require("stream");
var $3rreR$util = require("util");
var $3rreR$path = require("path");


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
var $0ce56fd177e3284a$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0ce56fd177e3284a$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0ce56fd177e3284a$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0ce56fd177e3284a$var$__createBinding(result, mod, k);
    }
    $0ce56fd177e3284a$var$__setModuleDefault(result, mod);
    return result;
};
var $0ce56fd177e3284a$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $0ce56fd177e3284a$var$__asyncValues = module.exports && module.exports.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.hashFiles = void 0;

const $0ce56fd177e3284a$var$crypto = $0ce56fd177e3284a$var$__importStar($3rreR$crypto);

const $0ce56fd177e3284a$var$core = $0ce56fd177e3284a$var$__importStar((parcelRequire("1irLk")));

const $0ce56fd177e3284a$var$fs = $0ce56fd177e3284a$var$__importStar($3rreR$fs);

const $0ce56fd177e3284a$var$stream = $0ce56fd177e3284a$var$__importStar($3rreR$stream);

const $0ce56fd177e3284a$var$util = $0ce56fd177e3284a$var$__importStar($3rreR$util);

const $0ce56fd177e3284a$var$path = $0ce56fd177e3284a$var$__importStar($3rreR$path);
function $0ce56fd177e3284a$var$hashFiles(globber, currentWorkspace, verbose = false) {
    var _a, e_1, _b, _c;
    var _d;
    return $0ce56fd177e3284a$var$__awaiter(this, void 0, void 0, function*() {
        const writeDelegate = verbose ? $0ce56fd177e3284a$var$core.info : $0ce56fd177e3284a$var$core.debug;
        let hasMatch = false;
        const githubWorkspace = currentWorkspace ? currentWorkspace : (_d = process.env['GITHUB_WORKSPACE']) !== null && _d !== void 0 ? _d : process.cwd();
        const result = $0ce56fd177e3284a$var$crypto.createHash('sha256');
        let count = 0;
        try {
            for(var _e = true, _f = $0ce56fd177e3284a$var$__asyncValues(globber.globGenerator()), _g; _g = yield _f.next(), _a = _g.done, !_a; _e = true){
                _c = _g.value;
                _e = false;
                const file = _c;
                writeDelegate(file);
                if (!file.startsWith(`${githubWorkspace}${$0ce56fd177e3284a$var$path.sep}`)) {
                    writeDelegate(`Ignore '${file}' since it is not under GITHUB_WORKSPACE.`);
                    continue;
                }
                if ($0ce56fd177e3284a$var$fs.statSync(file).isDirectory()) {
                    writeDelegate(`Skip directory '${file}'.`);
                    continue;
                }
                const hash = $0ce56fd177e3284a$var$crypto.createHash('sha256');
                const pipeline = $0ce56fd177e3284a$var$util.promisify($0ce56fd177e3284a$var$stream.pipeline);
                yield pipeline($0ce56fd177e3284a$var$fs.createReadStream(file), hash);
                result.write(hash.digest());
                count++;
                if (!hasMatch) hasMatch = true;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_e && !_a && (_b = _f.return)) yield _b.call(_f);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        result.end();
        if (hasMatch) {
            writeDelegate(`Found ${count} files to hash.`);
            return result.digest('hex');
        } else {
            writeDelegate(`No matches found for glob`);
            return '';
        }
    });
}
module.exports.hashFiles = $0ce56fd177e3284a$var$hashFiles;


