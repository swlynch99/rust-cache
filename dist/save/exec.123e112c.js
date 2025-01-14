require("./toolrunner.28656699.js");
var $8O3V0$string_decoder = require("string_decoder");


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
parcelRegister("5cw91", function(module, exports) {
"use strict";
var $3c9701fd29e67b22$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $3c9701fd29e67b22$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $3c9701fd29e67b22$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $3c9701fd29e67b22$var$__createBinding(result, mod, k);
    }
    $3c9701fd29e67b22$var$__setModuleDefault(result, mod);
    return result;
};
var $3c9701fd29e67b22$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.getExecOutput = module.exports.exec = void 0;


const $3c9701fd29e67b22$var$tr = $3c9701fd29e67b22$var$__importStar((parcelRequire("eZkuw")));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */ function $3c9701fd29e67b22$var$exec(commandLine, args, options) {
    return $3c9701fd29e67b22$var$__awaiter(this, void 0, void 0, function*() {
        const commandArgs = $3c9701fd29e67b22$var$tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new $3c9701fd29e67b22$var$tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
module.exports.exec = $3c9701fd29e67b22$var$exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */ function $3c9701fd29e67b22$var$getExecOutput(commandLine, args, options) {
    var _a, _b;
    return $3c9701fd29e67b22$var$__awaiter(this, void 0, void 0, function*() {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new $8O3V0$string_decoder.StringDecoder('utf8');
        const stderrDecoder = new $8O3V0$string_decoder.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data)=>{
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) originalStdErrListener(data);
        };
        const stdOutListener = (data)=>{
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) originalStdoutListener(data);
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), {
            stdout: stdOutListener,
            stderr: stdErrListener
        });
        const exitCode = yield $3c9701fd29e67b22$var$exec(commandLine, args, Object.assign(Object.assign({}, options), {
            listeners: listeners
        }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode: exitCode,
            stdout: stdout,
            stderr: stderr
        };
    });
}
module.exports.getExecOutput = $3c9701fd29e67b22$var$getExecOutput;

});
parcelRegister("eZkuw", function(module, exports) {
module.exports = new URL("toolrunner.28656699.js", "file:" + __filename).toString();

});



//# sourceMappingURL=exec.123e112c.js.map
