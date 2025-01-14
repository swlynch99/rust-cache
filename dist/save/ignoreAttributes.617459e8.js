function $c8f29389e1c5f687$var$getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') return ignoreAttributes;
    if (Array.isArray(ignoreAttributes)) return (attrName)=>{
        for (const pattern of ignoreAttributes){
            if (typeof pattern === 'string' && attrName === pattern) return true;
            if (pattern instanceof RegExp && pattern.test(attrName)) return true;
        }
    };
    return ()=>false;
}
module.exports = $c8f29389e1c5f687$var$getIgnoreAttributesFn;


//# sourceMappingURL=ignoreAttributes.617459e8.js.map
