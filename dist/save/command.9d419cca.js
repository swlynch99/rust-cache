require("./utils.51ccba28.js");
var $cqMDr$os = require("os");

"use strict";
var $1ef173481fd016df$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $1ef173481fd016df$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $1ef173481fd016df$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $1ef173481fd016df$var$__createBinding(result, mod, k);
    }
    $1ef173481fd016df$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.issue = module.exports.issueCommand = void 0;

const $1ef173481fd016df$var$os = $1ef173481fd016df$var$__importStar($cqMDr$os);
var $51e8fc87224cad2e$exports = {};
$51e8fc87224cad2e$exports = new URL("utils.51ccba28.js", "file:" + __filename).toString();


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $1ef173481fd016df$var$issueCommand(command, properties, message) {
    const cmd = new $1ef173481fd016df$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $1ef173481fd016df$var$os.EOL);
}
module.exports.issueCommand = $1ef173481fd016df$var$issueCommand;
function $1ef173481fd016df$var$issue(name, message = '') {
    $1ef173481fd016df$var$issueCommand(name, {}, message);
}
module.exports.issue = $1ef173481fd016df$var$issue;
const $1ef173481fd016df$var$CMD_STRING = '::';
class $1ef173481fd016df$var$Command {
    constructor(command, properties, message){
        if (!command) command = 'missing.command';
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $1ef173481fd016df$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ',';
                    cmdStr += `${key}=${$1ef173481fd016df$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$1ef173481fd016df$var$CMD_STRING}${$1ef173481fd016df$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $1ef173481fd016df$var$escapeData(s) {
    return (0, $51e8fc87224cad2e$exports.toCommandValue)(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function $1ef173481fd016df$var$escapeProperty(s) {
    return (0, $51e8fc87224cad2e$exports.toCommandValue)(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}


