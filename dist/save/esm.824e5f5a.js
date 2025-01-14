require("./debug.5f2a5f98.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var $eef46eb7a5c8b479$exports = {};
$eef46eb7a5c8b479$exports = new URL("debug.5f2a5f98.js", "file:" + __filename).toString();


const $ad35e1b636830e04$var$registeredLoggers = new Set();
const $ad35e1b636830e04$var$logLevelFromEnv = typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL || undefined;
let $ad35e1b636830e04$var$azureLogLevel;
const $ad35e1b636830e04$export$e8fb5f2ce3b591d = (0, (/*@__PURE__*/$parcel$interopDefault($eef46eb7a5c8b479$exports)))("azure");
$ad35e1b636830e04$export$e8fb5f2ce3b591d.log = (...args)=>{
    (0, (/*@__PURE__*/$parcel$interopDefault($eef46eb7a5c8b479$exports))).log(...args);
};
const $ad35e1b636830e04$var$AZURE_LOG_LEVELS = [
    "verbose",
    "info",
    "warning",
    "error"
];
if ($ad35e1b636830e04$var$logLevelFromEnv) {
    // avoid calling setLogLevel because we don't want a mis-set environment variable to crash
    if ($ad35e1b636830e04$var$isAzureLogLevel($ad35e1b636830e04$var$logLevelFromEnv)) $ad35e1b636830e04$export$c622e99c0ce7b1c9($ad35e1b636830e04$var$logLevelFromEnv);
    else console.error(`AZURE_LOG_LEVEL set to unknown log level '${$ad35e1b636830e04$var$logLevelFromEnv}'; logging is not enabled. Acceptable values: ${$ad35e1b636830e04$var$AZURE_LOG_LEVELS.join(", ")}.`);
}
function $ad35e1b636830e04$export$c622e99c0ce7b1c9(level) {
    if (level && !$ad35e1b636830e04$var$isAzureLogLevel(level)) throw new Error(`Unknown log level '${level}'. Acceptable values: ${$ad35e1b636830e04$var$AZURE_LOG_LEVELS.join(",")}`);
    $ad35e1b636830e04$var$azureLogLevel = level;
    const enabledNamespaces = [];
    for (const logger of $ad35e1b636830e04$var$registeredLoggers)if ($ad35e1b636830e04$var$shouldEnable(logger)) enabledNamespaces.push(logger.namespace);
    (0, (/*@__PURE__*/$parcel$interopDefault($eef46eb7a5c8b479$exports))).enable(enabledNamespaces.join(","));
}
function $ad35e1b636830e04$export$12dbaabc76fb091a() {
    return $ad35e1b636830e04$var$azureLogLevel;
}
const $ad35e1b636830e04$var$levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
function $ad35e1b636830e04$export$6817aa89e2fe44fd(namespace) {
    const clientRootLogger = $ad35e1b636830e04$export$e8fb5f2ce3b591d.extend(namespace);
    $ad35e1b636830e04$var$patchLogMethod($ad35e1b636830e04$export$e8fb5f2ce3b591d, clientRootLogger);
    return {
        error: $ad35e1b636830e04$var$createLogger(clientRootLogger, "error"),
        warning: $ad35e1b636830e04$var$createLogger(clientRootLogger, "warning"),
        info: $ad35e1b636830e04$var$createLogger(clientRootLogger, "info"),
        verbose: $ad35e1b636830e04$var$createLogger(clientRootLogger, "verbose")
    };
}
function $ad35e1b636830e04$var$patchLogMethod(parent, child) {
    child.log = (...args)=>{
        parent.log(...args);
    };
}
function $ad35e1b636830e04$var$createLogger(parent, level) {
    const logger = Object.assign(parent.extend(level), {
        level: level
    });
    $ad35e1b636830e04$var$patchLogMethod(parent, logger);
    if ($ad35e1b636830e04$var$shouldEnable(logger)) {
        const enabledNamespaces = (0, (/*@__PURE__*/$parcel$interopDefault($eef46eb7a5c8b479$exports))).disable();
        (0, (/*@__PURE__*/$parcel$interopDefault($eef46eb7a5c8b479$exports))).enable(enabledNamespaces + "," + logger.namespace);
    }
    $ad35e1b636830e04$var$registeredLoggers.add(logger);
    return logger;
}
function $ad35e1b636830e04$var$shouldEnable(logger) {
    return Boolean($ad35e1b636830e04$var$azureLogLevel && $ad35e1b636830e04$var$levelMap[logger.level] <= $ad35e1b636830e04$var$levelMap[$ad35e1b636830e04$var$azureLogLevel]);
}
function $ad35e1b636830e04$var$isAzureLogLevel(logLevel) {
    return $ad35e1b636830e04$var$AZURE_LOG_LEVELS.includes(logLevel);
}


