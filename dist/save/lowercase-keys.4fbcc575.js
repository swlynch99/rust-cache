function $8d93cf1e898e68f6$export$425260add75dc677(object) {
    if (!object) return {};
    return Object.keys(object).reduce((newObj, key)=>{
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}


