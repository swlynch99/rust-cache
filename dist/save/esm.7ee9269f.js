require("./debug.9a9009d5.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var $0b90a447719e9f81$exports = {};
$0b90a447719e9f81$exports = new URL("debug.9a9009d5.js", "file:" + __filename).toString();


const $cc422486803da228$var$registeredLoggers = new Set();
const $cc422486803da228$var$logLevelFromEnv = typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL || undefined;
let $cc422486803da228$var$azureLogLevel;
const $cc422486803da228$export$e8fb5f2ce3b591d = (0, (/*@__PURE__*/$parcel$interopDefault($0b90a447719e9f81$exports)))("azure");
$cc422486803da228$export$e8fb5f2ce3b591d.log = (...args)=>{
    (0, (/*@__PURE__*/$parcel$interopDefault($0b90a447719e9f81$exports))).log(...args);
};
const $cc422486803da228$var$AZURE_LOG_LEVELS = [
    "verbose",
    "info",
    "warning",
    "error"
];
if ($cc422486803da228$var$logLevelFromEnv) {
    // avoid calling setLogLevel because we don't want a mis-set environment variable to crash
    if ($cc422486803da228$var$isAzureLogLevel($cc422486803da228$var$logLevelFromEnv)) $cc422486803da228$export$c622e99c0ce7b1c9($cc422486803da228$var$logLevelFromEnv);
    else console.error(`AZURE_LOG_LEVEL set to unknown log level '${$cc422486803da228$var$logLevelFromEnv}'; logging is not enabled. Acceptable values: ${$cc422486803da228$var$AZURE_LOG_LEVELS.join(", ")}.`);
}
function $cc422486803da228$export$c622e99c0ce7b1c9(level) {
    if (level && !$cc422486803da228$var$isAzureLogLevel(level)) throw new Error(`Unknown log level '${level}'. Acceptable values: ${$cc422486803da228$var$AZURE_LOG_LEVELS.join(",")}`);
    $cc422486803da228$var$azureLogLevel = level;
    const enabledNamespaces = [];
    for (const logger of $cc422486803da228$var$registeredLoggers)if ($cc422486803da228$var$shouldEnable(logger)) enabledNamespaces.push(logger.namespace);
    (0, (/*@__PURE__*/$parcel$interopDefault($0b90a447719e9f81$exports))).enable(enabledNamespaces.join(","));
}
function $cc422486803da228$export$12dbaabc76fb091a() {
    return $cc422486803da228$var$azureLogLevel;
}
const $cc422486803da228$var$levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
function $cc422486803da228$export$6817aa89e2fe44fd(namespace) {
    const clientRootLogger = $cc422486803da228$export$e8fb5f2ce3b591d.extend(namespace);
    $cc422486803da228$var$patchLogMethod($cc422486803da228$export$e8fb5f2ce3b591d, clientRootLogger);
    return {
        error: $cc422486803da228$var$createLogger(clientRootLogger, "error"),
        warning: $cc422486803da228$var$createLogger(clientRootLogger, "warning"),
        info: $cc422486803da228$var$createLogger(clientRootLogger, "info"),
        verbose: $cc422486803da228$var$createLogger(clientRootLogger, "verbose")
    };
}
function $cc422486803da228$var$patchLogMethod(parent, child) {
    child.log = (...args)=>{
        parent.log(...args);
    };
}
function $cc422486803da228$var$createLogger(parent, level) {
    const logger = Object.assign(parent.extend(level), {
        level: level
    });
    $cc422486803da228$var$patchLogMethod(parent, logger);
    if ($cc422486803da228$var$shouldEnable(logger)) {
        const enabledNamespaces = (0, (/*@__PURE__*/$parcel$interopDefault($0b90a447719e9f81$exports))).disable();
        (0, (/*@__PURE__*/$parcel$interopDefault($0b90a447719e9f81$exports))).enable(enabledNamespaces + "," + logger.namespace);
    }
    $cc422486803da228$var$registeredLoggers.add(logger);
    return logger;
}
function $cc422486803da228$var$shouldEnable(logger) {
    return Boolean($cc422486803da228$var$azureLogLevel && $cc422486803da228$var$levelMap[logger.level] <= $cc422486803da228$var$levelMap[$cc422486803da228$var$azureLogLevel]);
}
function $cc422486803da228$var$isAzureLogLevel(logLevel) {
    return $cc422486803da228$var$AZURE_LOG_LEVELS.includes(logLevel);
}


//# sourceMappingURL=esm.7ee9269f.js.map
