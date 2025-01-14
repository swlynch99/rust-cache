require("./log.fa1d5771.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var $5344ae448fc76b83$exports = {};
$5344ae448fc76b83$exports = new URL("log.fa1d5771.js", "file:" + __filename).toString();


const $474479ae3589fe83$var$debugEnvVariable = typeof process !== "undefined" && process.env && process.env.DEBUG || undefined;
let $474479ae3589fe83$var$enabledString;
let $474479ae3589fe83$var$enabledNamespaces = [];
let $474479ae3589fe83$var$skippedNamespaces = [];
const $474479ae3589fe83$var$debuggers = [];
if ($474479ae3589fe83$var$debugEnvVariable) $474479ae3589fe83$var$enable($474479ae3589fe83$var$debugEnvVariable);
const $474479ae3589fe83$var$debugObj = Object.assign((namespace)=>{
    return $474479ae3589fe83$var$createDebugger(namespace);
}, {
    enable: $474479ae3589fe83$var$enable,
    enabled: $474479ae3589fe83$var$enabled,
    disable: $474479ae3589fe83$var$disable,
    log: $5344ae448fc76b83$exports.log
});
function $474479ae3589fe83$var$enable(namespaces) {
    $474479ae3589fe83$var$enabledString = namespaces;
    $474479ae3589fe83$var$enabledNamespaces = [];
    $474479ae3589fe83$var$skippedNamespaces = [];
    const wildcard = /\*/g;
    const namespaceList = namespaces.split(",").map((ns)=>ns.trim().replace(wildcard, ".*?"));
    for (const ns of namespaceList)if (ns.startsWith("-")) $474479ae3589fe83$var$skippedNamespaces.push(new RegExp(`^${ns.substr(1)}$`));
    else $474479ae3589fe83$var$enabledNamespaces.push(new RegExp(`^${ns}$`));
    for (const instance of $474479ae3589fe83$var$debuggers)instance.enabled = $474479ae3589fe83$var$enabled(instance.namespace);
}
function $474479ae3589fe83$var$enabled(namespace) {
    if (namespace.endsWith("*")) return true;
    for (const skipped of $474479ae3589fe83$var$skippedNamespaces){
        if (skipped.test(namespace)) return false;
    }
    for (const enabledNamespace of $474479ae3589fe83$var$enabledNamespaces){
        if (enabledNamespace.test(namespace)) return true;
    }
    return false;
}
function $474479ae3589fe83$var$disable() {
    const result = $474479ae3589fe83$var$enabledString || "";
    $474479ae3589fe83$var$enable("");
    return result;
}
function $474479ae3589fe83$var$createDebugger(namespace) {
    const newDebugger = Object.assign(debug, {
        enabled: $474479ae3589fe83$var$enabled(namespace),
        destroy: $474479ae3589fe83$var$destroy,
        log: $474479ae3589fe83$var$debugObj.log,
        namespace: namespace,
        extend: $474479ae3589fe83$var$extend
    });
    function debug(...args) {
        if (!newDebugger.enabled) return;
        if (args.length > 0) args[0] = `${namespace} ${args[0]}`;
        newDebugger.log(...args);
    }
    $474479ae3589fe83$var$debuggers.push(newDebugger);
    return newDebugger;
}
function $474479ae3589fe83$var$destroy() {
    const index = $474479ae3589fe83$var$debuggers.indexOf(this);
    if (index >= 0) {
        $474479ae3589fe83$var$debuggers.splice(index, 1);
        return true;
    }
    return false;
}
function $474479ae3589fe83$var$extend(namespace) {
    const newDebugger = $474479ae3589fe83$var$createDebugger(`${this.namespace}:${namespace}`);
    newDebugger.log = this.log;
    return newDebugger;
}
var $474479ae3589fe83$export$2e2bcd8739ae039 = $474479ae3589fe83$var$debugObj;


