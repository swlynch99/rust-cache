'use strict';
const $8f41f8c60fa8f095$var$arrify = (value)=>{
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [
        value
    ];
    if (typeof value[Symbol.iterator] === 'function') return [
        ...value
    ];
    return [
        value
    ];
};
module.exports = $8f41f8c60fa8f095$var$arrify;


//# sourceMappingURL=arrify.57a1b273.js.map
