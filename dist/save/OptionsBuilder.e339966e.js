var $97e4c681f167998e$export$ecbd7d678ac4909b;
var $97e4c681f167998e$export$ba43bf67f3d48107;
const $97e4c681f167998e$var$defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false,
    allowBooleanAttributes: false,
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataPropName: false,
    numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
        return val;
    },
    attributeValueProcessor: function(attrName, val) {
        return val;
    },
    stopNodes: [],
    alwaysCreateTextNode: false,
    isArray: ()=>false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs) {
        return tagName;
    }
};
const $97e4c681f167998e$var$buildOptions = function(options) {
    return Object.assign({}, $97e4c681f167998e$var$defaultOptions, options);
};
$97e4c681f167998e$export$ecbd7d678ac4909b = $97e4c681f167998e$var$buildOptions;
$97e4c681f167998e$export$ba43bf67f3d48107 = $97e4c681f167998e$var$defaultOptions;


