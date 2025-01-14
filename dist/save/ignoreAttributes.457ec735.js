function $7ce33e41e1568405$var$getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') return ignoreAttributes;
    if (Array.isArray(ignoreAttributes)) return (attrName)=>{
        for (const pattern of ignoreAttributes){
            if (typeof pattern === 'string' && attrName === pattern) return true;
            if (pattern instanceof RegExp && pattern.test(attrName)) return true;
        }
    };
    return ()=>false;
}
module.exports = $7ce33e41e1568405$var$getIgnoreAttributesFn;


