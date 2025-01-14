require("./fxp.e7391f17.js");
require("./xml.common.d8d58805.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $8259c2734f9a78d1$exports = {};
$8259c2734f9a78d1$exports = new URL("fxp.e7391f17.js", "file:" + __filename).toString();


var $aa13aafe4bcd0b4d$exports = {};
$aa13aafe4bcd0b4d$exports = new URL("xml.common.d8d58805.js", "file:" + __filename).toString();


function $15e3f61bb9562fe9$var$getCommonOptions(options) {
    var _a;
    return {
        attributesGroupName: (0, $aa13aafe4bcd0b4d$exports.XML_ATTRKEY),
        textNodeName: (_a = options.xmlCharKey) !== null && _a !== void 0 ? _a : (0, $aa13aafe4bcd0b4d$exports.XML_CHARKEY),
        ignoreAttributes: false,
        suppressBooleanAttributes: false
    };
}
function $15e3f61bb9562fe9$var$getSerializerOptions(options = {}) {
    var _a, _b;
    return Object.assign(Object.assign({}, $15e3f61bb9562fe9$var$getCommonOptions(options)), {
        attributeNamePrefix: "@_",
        format: true,
        suppressEmptyNode: true,
        indentBy: "",
        rootNodeName: (_a = options.rootName) !== null && _a !== void 0 ? _a : "root",
        cdataPropName: (_b = options.cdataPropName) !== null && _b !== void 0 ? _b : "__cdata"
    });
}
function $15e3f61bb9562fe9$var$getParserOptions(options = {}) {
    return Object.assign(Object.assign({}, $15e3f61bb9562fe9$var$getCommonOptions(options)), {
        parseAttributeValue: false,
        parseTagValue: false,
        attributeNamePrefix: "",
        stopNodes: options.stopNodes,
        processEntities: true
    });
}
function $15e3f61bb9562fe9$export$746eb2ada42c6647(obj, opts = {}) {
    const parserOptions = $15e3f61bb9562fe9$var$getSerializerOptions(opts);
    const j2x = new (0, $8259c2734f9a78d1$exports.XMLBuilder)(parserOptions);
    const node = {
        [parserOptions.rootNodeName]: obj
    };
    const xmlData = j2x.build(node);
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>${xmlData}`.replace(/\n/g, "");
}
async function $15e3f61bb9562fe9$export$eacefc55fad2867e(str, opts = {}) {
    if (!str) throw new Error("Document is empty");
    const validation = (0, $8259c2734f9a78d1$exports.XMLValidator).validate(str);
    if (validation !== true) throw validation;
    const parser = new (0, $8259c2734f9a78d1$exports.XMLParser)($15e3f61bb9562fe9$var$getParserOptions(opts));
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


