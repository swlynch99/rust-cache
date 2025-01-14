"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.enumToMap = void 0;
function $ac6d3492d44ac0f7$var$enumToMap(obj) {
    const res = {};
    Object.keys(obj).forEach((key)=>{
        const value = obj[key];
        if (typeof value === 'number') res[key] = value;
    });
    return res;
}
module.exports.enumToMap = $ac6d3492d44ac0f7$var$enumToMap;


