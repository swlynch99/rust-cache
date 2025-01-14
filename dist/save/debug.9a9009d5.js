require("./log.8fa11c68.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var $2377ad5d791330d6$exports = {};
$2377ad5d791330d6$exports = new URL("log.8fa11c68.js", "file:" + __filename).toString();


const $50f0171cc5b4696d$var$debugEnvVariable = typeof process !== "undefined" && process.env && process.env.DEBUG || undefined;
let $50f0171cc5b4696d$var$enabledString;
let $50f0171cc5b4696d$var$enabledNamespaces = [];
let $50f0171cc5b4696d$var$skippedNamespaces = [];
const $50f0171cc5b4696d$var$debuggers = [];
if ($50f0171cc5b4696d$var$debugEnvVariable) $50f0171cc5b4696d$var$enable($50f0171cc5b4696d$var$debugEnvVariable);
const $50f0171cc5b4696d$var$debugObj = Object.assign((namespace)=>{
    return $50f0171cc5b4696d$var$createDebugger(namespace);
}, {
    enable: $50f0171cc5b4696d$var$enable,
    enabled: $50f0171cc5b4696d$var$enabled,
    disable: $50f0171cc5b4696d$var$disable,
    log: $2377ad5d791330d6$exports.log
});
function $50f0171cc5b4696d$var$enable(namespaces) {
    $50f0171cc5b4696d$var$enabledString = namespaces;
    $50f0171cc5b4696d$var$enabledNamespaces = [];
    $50f0171cc5b4696d$var$skippedNamespaces = [];
    const wildcard = /\*/g;
    const namespaceList = namespaces.split(",").map((ns)=>ns.trim().replace(wildcard, ".*?"));
    for (const ns of namespaceList)if (ns.startsWith("-")) $50f0171cc5b4696d$var$skippedNamespaces.push(new RegExp(`^${ns.substr(1)}$`));
    else $50f0171cc5b4696d$var$enabledNamespaces.push(new RegExp(`^${ns}$`));
    for (const instance of $50f0171cc5b4696d$var$debuggers)instance.enabled = $50f0171cc5b4696d$var$enabled(instance.namespace);
}
function $50f0171cc5b4696d$var$enabled(namespace) {
    if (namespace.endsWith("*")) return true;
    for (const skipped of $50f0171cc5b4696d$var$skippedNamespaces){
        if (skipped.test(namespace)) return false;
    }
    for (const enabledNamespace of $50f0171cc5b4696d$var$enabledNamespaces){
        if (enabledNamespace.test(namespace)) return true;
    }
    return false;
}
function $50f0171cc5b4696d$var$disable() {
    const result = $50f0171cc5b4696d$var$enabledString || "";
    $50f0171cc5b4696d$var$enable("");
    return result;
}
function $50f0171cc5b4696d$var$createDebugger(namespace) {
    const newDebugger = Object.assign(debug, {
        enabled: $50f0171cc5b4696d$var$enabled(namespace),
        destroy: $50f0171cc5b4696d$var$destroy,
        log: $50f0171cc5b4696d$var$debugObj.log,
        namespace: namespace,
        extend: $50f0171cc5b4696d$var$extend
    });
    function debug(...args) {
        if (!newDebugger.enabled) return;
        if (args.length > 0) args[0] = `${namespace} ${args[0]}`;
        newDebugger.log(...args);
    }
    $50f0171cc5b4696d$var$debuggers.push(newDebugger);
    return newDebugger;
}
function $50f0171cc5b4696d$var$destroy() {
    const index = $50f0171cc5b4696d$var$debuggers.indexOf(this);
    if (index >= 0) {
        $50f0171cc5b4696d$var$debuggers.splice(index, 1);
        return true;
    }
    return false;
}
function $50f0171cc5b4696d$var$extend(namespace) {
    const newDebugger = $50f0171cc5b4696d$var$createDebugger(`${this.namespace}:${namespace}`);
    newDebugger.log = this.log;
    return newDebugger;
}
var $50f0171cc5b4696d$export$2e2bcd8739ae039 = $50f0171cc5b4696d$var$debugObj;


//# sourceMappingURL=debug.9a9009d5.js.map
