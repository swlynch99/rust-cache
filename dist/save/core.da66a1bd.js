require("./command.9d419cca.js");
require("./file-command.67263606.js");
require("./utils.51ccba28.js");
require("./oidc-utils.9c11212a.js");
require("./summary.6c7283d8.js");
require("./path-utils.f52f2973.js");
require("./platform.e1f14eae.js");
var $9SFlA$os = require("os");
var $9SFlA$path = require("path");


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
parcelRegister("1irLk", function(module, exports) {
"use strict";
var $0f1d01ecff87a621$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0f1d01ecff87a621$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0f1d01ecff87a621$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0f1d01ecff87a621$var$__createBinding(result, mod, k);
    }
    $0f1d01ecff87a621$var$__setModuleDefault(result, mod);
    return result;
};
var $0f1d01ecff87a621$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

var $55loB = parcelRequire("55loB");

var $1OpYG = parcelRequire("1OpYG");

var $ajJpr = parcelRequire("ajJpr");

const $0f1d01ecff87a621$var$os = $0f1d01ecff87a621$var$__importStar($9SFlA$os);

const $0f1d01ecff87a621$var$path = $0f1d01ecff87a621$var$__importStar($9SFlA$path);

var $6P2ms = parcelRequire("6P2ms");
/**
 * The code to exit an action
 */ var $0f1d01ecff87a621$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($0f1d01ecff87a621$var$ExitCode || (module.exports.ExitCode = $0f1d01ecff87a621$var$ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0f1d01ecff87a621$var$exportVariable(name, val) {
    const convertedVal = (0, $ajJpr.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) return (0, $1OpYG.issueFileCommand)('ENV', (0, $1OpYG.prepareKeyValueMessage)(name, val));
    (0, $55loB.issueCommand)('set-env', {
        name: name
    }, convertedVal);
}
module.exports.exportVariable = $0f1d01ecff87a621$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $0f1d01ecff87a621$var$setSecret(secret) {
    (0, $55loB.issueCommand)('add-mask', {}, secret);
}
module.exports.setSecret = $0f1d01ecff87a621$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $0f1d01ecff87a621$var$addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) (0, $1OpYG.issueFileCommand)('PATH', inputPath);
    else (0, $55loB.issueCommand)('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${$0f1d01ecff87a621$var$path.delimiter}${process.env['PATH']}`;
}
module.exports.addPath = $0f1d01ecff87a621$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $0f1d01ecff87a621$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
module.exports.getInput = $0f1d01ecff87a621$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $0f1d01ecff87a621$var$getMultilineInput(name, options) {
    const inputs = $0f1d01ecff87a621$var$getInput(name, options).split('\n').filter((x)=>x !== '');
    if (options && options.trimWhitespace === false) return inputs;
    return inputs.map((input)=>input.trim());
}
module.exports.getMultilineInput = $0f1d01ecff87a621$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $0f1d01ecff87a621$var$getBooleanInput(name, options) {
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
    const val = $0f1d01ecff87a621$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
module.exports.getBooleanInput = $0f1d01ecff87a621$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0f1d01ecff87a621$var$setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) return (0, $1OpYG.issueFileCommand)('OUTPUT', (0, $1OpYG.prepareKeyValueMessage)(name, value));
    process.stdout.write($0f1d01ecff87a621$var$os.EOL);
    (0, $55loB.issueCommand)('set-output', {
        name: name
    }, (0, $ajJpr.toCommandValue)(value));
}
module.exports.setOutput = $0f1d01ecff87a621$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $0f1d01ecff87a621$var$setCommandEcho(enabled) {
    (0, $55loB.issue)('echo', enabled ? 'on' : 'off');
}
module.exports.setCommandEcho = $0f1d01ecff87a621$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $0f1d01ecff87a621$var$setFailed(message) {
    process.exitCode = $0f1d01ecff87a621$var$ExitCode.Failure;
    $0f1d01ecff87a621$var$error(message);
}
module.exports.setFailed = $0f1d01ecff87a621$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $0f1d01ecff87a621$var$isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
module.exports.isDebug = $0f1d01ecff87a621$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $0f1d01ecff87a621$var$debug(message) {
    (0, $55loB.issueCommand)('debug', {}, message);
}
module.exports.debug = $0f1d01ecff87a621$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0f1d01ecff87a621$var$error(message, properties = {}) {
    (0, $55loB.issueCommand)('error', (0, $ajJpr.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.error = $0f1d01ecff87a621$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0f1d01ecff87a621$var$warning(message, properties = {}) {
    (0, $55loB.issueCommand)('warning', (0, $ajJpr.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.warning = $0f1d01ecff87a621$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0f1d01ecff87a621$var$notice(message, properties = {}) {
    (0, $55loB.issueCommand)('notice', (0, $ajJpr.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
module.exports.notice = $0f1d01ecff87a621$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $0f1d01ecff87a621$var$info(message) {
    process.stdout.write(message + $0f1d01ecff87a621$var$os.EOL);
}
module.exports.info = $0f1d01ecff87a621$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $0f1d01ecff87a621$var$startGroup(name) {
    (0, $55loB.issue)('group', name);
}
module.exports.startGroup = $0f1d01ecff87a621$var$startGroup;
/**
 * End an output group.
 */ function $0f1d01ecff87a621$var$endGroup() {
    (0, $55loB.issue)('endgroup');
}
module.exports.endGroup = $0f1d01ecff87a621$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $0f1d01ecff87a621$var$group(name, fn) {
    return $0f1d01ecff87a621$var$__awaiter(this, void 0, void 0, function*() {
        $0f1d01ecff87a621$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $0f1d01ecff87a621$var$endGroup();
        }
        return result;
    });
}
module.exports.group = $0f1d01ecff87a621$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0f1d01ecff87a621$var$saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) return (0, $1OpYG.issueFileCommand)('STATE', (0, $1OpYG.prepareKeyValueMessage)(name, value));
    (0, $55loB.issueCommand)('save-state', {
        name: name
    }, (0, $ajJpr.toCommandValue)(value));
}
module.exports.saveState = $0f1d01ecff87a621$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $0f1d01ecff87a621$var$getState(name) {
    return process.env[`STATE_${name}`] || '';
}
module.exports.getState = $0f1d01ecff87a621$var$getState;
function $0f1d01ecff87a621$var$getIDToken(aud) {
    return $0f1d01ecff87a621$var$__awaiter(this, void 0, void 0, function*() {
        return yield $6P2ms.OidcClient.getIDToken(aud);
    });
}
module.exports.getIDToken = $0f1d01ecff87a621$var$getIDToken;

var $jafI8 = parcelRequire("jafI8");
Object.defineProperty(module.exports, "summary", {
    enumerable: true,
    get: function() {
        return $jafI8.summary;
    }
});

var $jafI8 = parcelRequire("jafI8");
Object.defineProperty(module.exports, "markdownSummary", {
    enumerable: true,
    get: function() {
        return $jafI8.markdownSummary;
    }
});

var $kjsp6 = parcelRequire("kjsp6");
Object.defineProperty(module.exports, "toPosixPath", {
    enumerable: true,
    get: function() {
        return $kjsp6.toPosixPath;
    }
});
Object.defineProperty(module.exports, "toWin32Path", {
    enumerable: true,
    get: function() {
        return $kjsp6.toWin32Path;
    }
});
Object.defineProperty(module.exports, "toPlatformPath", {
    enumerable: true,
    get: function() {
        return $kjsp6.toPlatformPath;
    }
});

/**
 * Platform utilities exports
 */ module.exports.platform = $0f1d01ecff87a621$var$__importStar((parcelRequire("3CnxO")));

});
parcelRegister("55loB", function(module, exports) {
module.exports = new URL("command.9d419cca.js", "file:" + __filename).toString();

});

parcelRegister("1OpYG", function(module, exports) {
module.exports = new URL("file-command.67263606.js", "file:" + __filename).toString();

});

parcelRegister("6P2ms", function(module, exports) {
module.exports = new URL("oidc-utils.9c11212a.js", "file:" + __filename).toString();

});

parcelRegister("jafI8", function(module, exports) {
module.exports = new URL("summary.6c7283d8.js", "file:" + __filename).toString();

});

parcelRegister("kjsp6", function(module, exports) {
module.exports = new URL("path-utils.f52f2973.js", "file:" + __filename).toString();

});

parcelRegister("3CnxO", function(module, exports) {
module.exports = new URL("platform.e1f14eae.js", "file:" + __filename).toString();

});



