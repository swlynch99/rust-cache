function $47cdd6ff1ae25edb$export$425260add75dc677(object) {
    if (!object) return {};
    return Object.keys(object).reduce((newObj, key)=>{
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}


//# sourceMappingURL=lowercase-keys.e60b524e.js.map
