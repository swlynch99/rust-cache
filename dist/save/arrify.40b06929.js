'use strict';
const $b0c315dd1caa7671$var$arrify = (value)=>{
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
module.exports = $b0c315dd1caa7671$var$arrify;


