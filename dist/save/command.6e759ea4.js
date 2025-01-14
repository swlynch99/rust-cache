require("./utils.ef636853.js");
var $kldI5$os = require("os");

"use strict";
var $d70e04746457e176$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $d70e04746457e176$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $d70e04746457e176$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $d70e04746457e176$var$__createBinding(result, mod, k);
    }
    $d70e04746457e176$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.issue = module.exports.issueCommand = void 0;

const $d70e04746457e176$var$os = $d70e04746457e176$var$__importStar($kldI5$os);
var $0a2f30afbeb4bf28$exports = {};
$0a2f30afbeb4bf28$exports = new URL("utils.ef636853.js", "file:" + __filename).toString();


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $d70e04746457e176$var$issueCommand(command, properties, message) {
    const cmd = new $d70e04746457e176$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $d70e04746457e176$var$os.EOL);
}
module.exports.issueCommand = $d70e04746457e176$var$issueCommand;
function $d70e04746457e176$var$issue(name, message = '') {
    $d70e04746457e176$var$issueCommand(name, {}, message);
}
module.exports.issue = $d70e04746457e176$var$issue;
const $d70e04746457e176$var$CMD_STRING = '::';
class $d70e04746457e176$var$Command {
    constructor(command, properties, message){
        if (!command) command = 'missing.command';
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $d70e04746457e176$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ',';
                    cmdStr += `${key}=${$d70e04746457e176$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$d70e04746457e176$var$CMD_STRING}${$d70e04746457e176$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $d70e04746457e176$var$escapeData(s) {
    return (0, $0a2f30afbeb4bf28$exports.toCommandValue)(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function $d70e04746457e176$var$escapeProperty(s) {
    return (0, $0a2f30afbeb4bf28$exports.toCommandValue)(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}


//# sourceMappingURL=command.6e759ea4.js.map
