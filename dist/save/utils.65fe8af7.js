"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.enumToMap = void 0;
function $eb52f29e46309e3c$var$enumToMap(obj) {
    const res = {};
    Object.keys(obj).forEach((key)=>{
        const value = obj[key];
        if (typeof value === 'number') res[key] = value;
    });
    return res;
}
module.exports.enumToMap = $eb52f29e46309e3c$var$enumToMap;


//# sourceMappingURL=utils.65fe8af7.js.map
