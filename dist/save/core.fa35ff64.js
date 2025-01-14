require("./command.6e759ea4.js");
require("./file-command.603ae4ee.js");
require("./utils.ef636853.js");
require("./oidc-utils.370fc59f.js");
require("./summary.4d2a0862.js");
require("./path-utils.b8837c2d.js");
require("./platform.0ca26479.js");
var $fO82K$os = require("os");
var $fO82K$path = require("path");


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
parcelRegister("AJTaV", function(module, exports) {
"use strict";
var $06e6f57dd92ece20$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $06e6f57dd92ece20$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $06e6f57dd92ece20$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $06e6f57dd92ece20$var$__createBinding(result, mod, k);
    }
    $06e6f57dd92ece20$var$__setModuleDefault(result, mod);
    return result;
};
var $06e6f57dd92ece20$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.platform = module.exports.toPlatformPath = module.exports.toWin32Path = module.exports.toPosixPath = module.exports.markdownSummary = module.exports.summary = module.exports.getIDToken = module.exports.getState = module.exports.saveState = module.exports.group = module.exports.endGroup = module.exports.startGroup = module.exports.info = module.exports.notice = module.exports.warning = module.exports.error = module.exports.debug = module.exports.isDebug = module.exports.setFailed = module.exports.setCommandEcho = module.exports.setOutput = module.exports.getBooleanInput = module.exports.getMultilineInput = module.exports.getInput = module.exports.addPath = module.exports.setSecret = module.exports.exportVariable = module.exports.ExitCode = void 0;

var $7R3BO = parcelRequire("7R3BO");

var $2BCx6 = parcelRequire("2BCx6");

var $hU8yM = parcelRequire("hU8yM");

const $06e6f57dd92ece20$var$os = $06e6f57dd92ece20$var$__importStar($fO82K$os);

const $06e6f57dd92ece20$var$path = $06e6f57dd92ece20$var$__importStar($fO82K$path);

var $fvoqo = parcelRequire("fvoqo");
/**
 * The code to exit an action
 */ var $06e6f57dd92ece20$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($06e6f57dd92ece20$var$ExitCode || (module.exports.ExitCode = $06e6f57dd92ece20$var$ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $06e6f57dd92ece20$var$exportVariable(name, val) {
    const convertedVal = (0, $hU8yM.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) return (0, $2BCx6.issueFileCommand)('ENV', (0, $2BCx6.prepareKeyValueMessage)(name, val));
    (0, $7R3BO.issueCommand)('set-env', {
        name: name
    }, convertedVal);
}
module.exports.exportVariable = $06e6f57dd92ece20$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $06e6f57dd92ece20$var$setSecret(secret) {
    (0, $7R3BO.issueCommand)('add-mask', {}, secret);
}
module.exports.setSecret = $06e6f57dd92ece20$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $06e6f57dd92ece20$var$addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) (0, $2BCx6.issueFileCommand)('PATH', inputPath);
    else (0, $7R3BO.issueCommand)('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${$06e6f57dd92ece20$var$path.delimiter}${process.env['PATH']}`;
}
module.exports.addPath = $06e6f57dd92ece20$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $06e6f57dd92ece20$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
module.exports.getInput = $06e6f57dd92ece20$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $06e6f57dd92ece20$var$getMultilineInput(name, options) {
    const inputs = $06e6f57dd92ece20$var$getInput(name, options).split('\n').filter((x)=>x !== '');
    if (options && options.trimWhitespace === false) return inputs;
    return inputs.map((input)=>input.trim());
}
module.exports.getMultilineInput = $06e6f57dd92ece20$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $06e6f57dd92ece20$var$getBooleanInput(name, options) {
    const trueValue = [
        'true',
        'True',
        'TRUE'
    ];
    const falseValue = [
        'false',
        'False',
        'FALSE'
    ];
    const val = $06e6f57dd92ece20$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
module.exports.getBooleanInput = $06e6f57dd92ece20$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $06e6f57dd92ece20$var$setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) return (0, $2BCx6.issueFileCommand)('OUTPUT', (0, $2BCx6.prepareKeyValueMessage)(name, value));
    process.stdout.write($06e6f57dd92ece20$var$os.EOL);
    (0, $7R3BO.issueCommand)('set-output', {
        name: name
    }, (0, $hU8yM.toCommandValue)(value));
}
module.exports.setOutput = $06e6f57dd92ece20$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $06e6f57dd92ece20$var$setCommandEcho(enabled) {
    (0, $7R3BO.issue)('echo', enabled ? 'on' : 'off');
}
module.exports.setCommandEcho = $06e6f57dd92ece20$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $06e6f57dd92ece20$var$setFailed(message) {
    process.exitCode = $06e6f57dd92ece20$var$ExitCode.Failure;
    $06e6f57dd92ece20$var$error(message);
}
module.exports.setFailed = $06e6f57dd92ece20$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $06e6f57dd92ece20$var$isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
module.exports.isDebug = $06e6f57dd92ece20$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $06e6f57dd92ece20$var$debug(message) {
    (0, $7R3BO.issueCommand)('debug', {}, message);
}
module.exports.debug = $06e6f57dd92ece20$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $06e6f57dd92ece20$var$error(message, properties = {}) {
    (0, $7R3BO.issueCommand)('error', (0, $hU8yM.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.error = $06e6f57dd92ece20$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $06e6f57dd92ece20$var$warning(message, properties = {}) {
    (0, $7R3BO.issueCommand)('warning', (0, $hU8yM.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.warning = $06e6f57dd92ece20$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $06e6f57dd92ece20$var$notice(message, properties = {}) {
    (0, $7R3BO.issueCommand)('notice', (0, $hU8yM.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.notice = $06e6f57dd92ece20$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $06e6f57dd92ece20$var$info(message) {
    process.stdout.write(message + $06e6f57dd92ece20$var$os.EOL);
}
module.exports.info = $06e6f57dd92ece20$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $06e6f57dd92ece20$var$startGroup(name) {
    (0, $7R3BO.issue)('group', name);
}
module.exports.startGroup = $06e6f57dd92ece20$var$startGroup;
/**
 * End an output group.
 */ function $06e6f57dd92ece20$var$endGroup() {
    (0, $7R3BO.issue)('endgroup');
}
module.exports.endGroup = $06e6f57dd92ece20$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $06e6f57dd92ece20$var$group(name, fn) {
    return $06e6f57dd92ece20$var$__awaiter(this, void 0, void 0, function*() {
        $06e6f57dd92ece20$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $06e6f57dd92ece20$var$endGroup();
        }
        return result;
    });
}
module.exports.group = $06e6f57dd92ece20$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $06e6f57dd92ece20$var$saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) return (0, $2BCx6.issueFileCommand)('STATE', (0, $2BCx6.prepareKeyValueMessage)(name, value));
    (0, $7R3BO.issueCommand)('save-state', {
        name: name
    }, (0, $hU8yM.toCommandValue)(value));
}
module.exports.saveState = $06e6f57dd92ece20$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $06e6f57dd92ece20$var$getState(name) {
    return process.env[`STATE_${name}`] || '';
}
module.exports.getState = $06e6f57dd92ece20$var$getState;
function $06e6f57dd92ece20$var$getIDToken(aud) {
    return $06e6f57dd92ece20$var$__awaiter(this, void 0, void 0, function*() {
        return yield $fvoqo.OidcClient.getIDToken(aud);
    });
}
module.exports.getIDToken = $06e6f57dd92ece20$var$getIDToken;

var $j53s8 = parcelRequire("j53s8");
Object.defineProperty(module.exports, "summary", {
    enumerable: true,
    get: function() {
        return $j53s8.summary;
    }
});

var $j53s8 = parcelRequire("j53s8");
Object.defineProperty(module.exports, "markdownSummary", {
    enumerable: true,
    get: function() {
        return $j53s8.markdownSummary;
    }
});

var $dLp8Y = parcelRequire("dLp8Y");
Object.defineProperty(module.exports, "toPosixPath", {
    enumerable: true,
    get: function() {
        return $dLp8Y.toPosixPath;
    }
});
Object.defineProperty(module.exports, "toWin32Path", {
    enumerable: true,
    get: function() {
        return $dLp8Y.toWin32Path;
    }
});
Object.defineProperty(module.exports, "toPlatformPath", {
    enumerable: true,
    get: function() {
        return $dLp8Y.toPlatformPath;
    }
});

/**
 * Platform utilities exports
 */ module.exports.platform = $06e6f57dd92ece20$var$__importStar((parcelRequire("emSSI")));

});
parcelRegister("7R3BO", function(module, exports) {
module.exports = new URL("command.6e759ea4.js", "file:" + __filename).toString();

});

parcelRegister("2BCx6", function(module, exports) {
module.exports = new URL("file-command.603ae4ee.js", "file:" + __filename).toString();

});

parcelRegister("fvoqo", function(module, exports) {
module.exports = new URL("oidc-utils.370fc59f.js", "file:" + __filename).toString();

});

parcelRegister("j53s8", function(module, exports) {
module.exports = new URL("summary.4d2a0862.js", "file:" + __filename).toString();

});

parcelRegister("dLp8Y", function(module, exports) {
module.exports = new URL("path-utils.b8837c2d.js", "file:" + __filename).toString();

});

parcelRegister("emSSI", function(module, exports) {
module.exports = new URL("platform.0ca26479.js", "file:" + __filename).toString();

});



//# sourceMappingURL=core.fa35ff64.js.map
