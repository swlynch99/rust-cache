require("./lower-camel-case.794a3493.js");

var $70dea8f0758eab22$exports = {};
$70dea8f0758eab22$exports = new URL("lower-camel-case.794a3493.js", "file:" + __filename).toString();


function $51f06a813d513f1d$export$be413f38429b6a36(method, service) {
    var _a, _b, _c;
    let m = method;
    m.service = service;
    m.localName = (_a = m.localName) !== null && _a !== void 0 ? _a : (0, $70dea8f0758eab22$exports.lowerCamelCase)(m.name);
    // noinspection PointlessBooleanExpressionJS
    m.serverStreaming = !!m.serverStreaming;
    // noinspection PointlessBooleanExpressionJS
    m.clientStreaming = !!m.clientStreaming;
    m.options = (_b = m.options) !== null && _b !== void 0 ? _b : {};
    m.idempotency = (_c = m.idempotency) !== null && _c !== void 0 ? _c : undefined;
    return m;
}
function $51f06a813d513f1d$export$3ba9ba63a93d45c9(service, methodName, extensionName, extensionType) {
    var _a;
    const options = (_a = service.methods.find((m, i)=>m.localName === methodName || i === methodName)) === null || _a === void 0 ? void 0 : _a.options;
    return options && options[extensionName] ? extensionType.fromJson(options[extensionName]) : undefined;
}
function $51f06a813d513f1d$export$34893ad81be62fb5(service, methodName, extensionName, extensionType) {
    var _a;
    const options = (_a = service.methods.find((m, i)=>m.localName === methodName || i === methodName)) === null || _a === void 0 ? void 0 : _a.options;
    if (!options) return undefined;
    const optionVal = options[extensionName];
    if (optionVal === undefined) return optionVal;
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}
function $51f06a813d513f1d$export$9145af61cab450c3(service, extensionName, extensionType) {
    const options = service.options;
    if (!options) return undefined;
    const optionVal = options[extensionName];
    if (optionVal === undefined) return optionVal;
    return extensionType ? extensionType.fromJson(optionVal) : optionVal;
}


