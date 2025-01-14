require("./fxp.c32e4513.js");
require("./xml.common.1f34e2b0.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $d33819981a325fb4$exports = {};
$d33819981a325fb4$exports = new URL("fxp.c32e4513.js", "file:" + __filename).toString();


var $21827e9d5089e855$exports = {};
$21827e9d5089e855$exports = new URL("xml.common.1f34e2b0.js", "file:" + __filename).toString();


function $e5694bd878496507$var$getCommonOptions(options) {
    var _a;
    return {
        attributesGroupName: (0, $21827e9d5089e855$exports.XML_ATTRKEY),
        textNodeName: (_a = options.xmlCharKey) !== null && _a !== void 0 ? _a : (0, $21827e9d5089e855$exports.XML_CHARKEY),
        ignoreAttributes: false,
        suppressBooleanAttributes: false
    };
}
function $e5694bd878496507$var$getSerializerOptions(options = {}) {
    var _a, _b;
    return Object.assign(Object.assign({}, $e5694bd878496507$var$getCommonOptions(options)), {
        attributeNamePrefix: "@_",
        format: true,
        suppressEmptyNode: true,
        indentBy: "",
        rootNodeName: (_a = options.rootName) !== null && _a !== void 0 ? _a : "root",
        cdataPropName: (_b = options.cdataPropName) !== null && _b !== void 0 ? _b : "__cdata"
    });
}
function $e5694bd878496507$var$getParserOptions(options = {}) {
    return Object.assign(Object.assign({}, $e5694bd878496507$var$getCommonOptions(options)), {
        parseAttributeValue: false,
        parseTagValue: false,
        attributeNamePrefix: "",
        stopNodes: options.stopNodes,
        processEntities: true
    });
}
function $e5694bd878496507$export$746eb2ada42c6647(obj, opts = {}) {
    const parserOptions = $e5694bd878496507$var$getSerializerOptions(opts);
    const j2x = new (0, $d33819981a325fb4$exports.XMLBuilder)(parserOptions);
    const node = {
        [parserOptions.rootNodeName]: obj
    };
    const xmlData = j2x.build(node);
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>${xmlData}`.replace(/\n/g, "");
}
async function $e5694bd878496507$export$eacefc55fad2867e(str, opts = {}) {
    if (!str) throw new Error("Document is empty");
    const validation = (0, $d33819981a325fb4$exports.XMLValidator).validate(str);
    if (validation !== true) throw validation;
    const parser = new (0, $d33819981a325fb4$exports.XMLParser)($e5694bd878496507$var$getParserOptions(opts));
    const parsedXml = parser.parse(str);
    // Remove the <?xml version="..." ?> node.
    // This is a change in behavior on fxp v4. Issue #424
    if (parsedXml["?xml"]) delete parsedXml["?xml"];
    if (!opts.includeRoot) for (const key of Object.keys(parsedXml)){
        const value = parsedXml[key];
        return typeof value === "object" ? Object.assign({}, value) : value;
    }
    return parsedXml;
}


//# sourceMappingURL=xml.b351b7a5.js.map
