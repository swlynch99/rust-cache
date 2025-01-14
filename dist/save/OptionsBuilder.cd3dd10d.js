var $2105495271737061$export$ecbd7d678ac4909b;
var $2105495271737061$export$ba43bf67f3d48107;
const $2105495271737061$var$defaultOptions = {
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
const $2105495271737061$var$buildOptions = function(options) {
    return Object.assign({}, $2105495271737061$var$defaultOptions, options);
};
$2105495271737061$export$ecbd7d678ac4909b = $2105495271737061$var$buildOptions;
$2105495271737061$export$ba43bf67f3d48107 = $2105495271737061$var$defaultOptions;


//# sourceMappingURL=OptionsBuilder.cd3dd10d.js.map
