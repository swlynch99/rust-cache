var $5cd3a3c84f7c0549$export$1b80ed980367b7c1;
'use strict';
/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */ function $5cd3a3c84f7c0549$var$prettify(node, options) {
    return $5cd3a3c84f7c0549$var$compress(node, options);
}
/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */ function $5cd3a3c84f7c0549$var$compress(arr, options, jPath) {
    let text;
    const compressedObj = {};
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const property = $5cd3a3c84f7c0549$var$propName(tagObj);
        let newJpath = "";
        if (jPath === undefined) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
            if (text === undefined) text = tagObj[property];
            else text += "" + tagObj[property];
        } else if (property === undefined) continue;
        else if (tagObj[property]) {
            let val = $5cd3a3c84f7c0549$var$compress(tagObj[property], options, newJpath);
            const isLeaf = $5cd3a3c84f7c0549$var$isLeafTag(val, options);
            if (tagObj[":@"]) $5cd3a3c84f7c0549$var$assignAttributes(val, tagObj[":@"], newJpath, options);
            else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) val = val[options.textNodeName];
            else if (Object.keys(val).length === 0) {
                if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
                else val = "";
            }
            if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
                if (!Array.isArray(compressedObj[property])) compressedObj[property] = [
                    compressedObj[property]
                ];
                compressedObj[property].push(val);
            } else //TODO: if a node is not an array, then check if it should be an array
            //also determine if it is a leaf node
            if (options.isArray(property, newJpath, isLeaf)) compressedObj[property] = [
                val
            ];
            else compressedObj[property] = val;
        }
    }
    // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
    if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
    } else if (text !== undefined) compressedObj[options.textNodeName] = text;
    return compressedObj;
}
function $5cd3a3c84f7c0549$var$propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key !== ":@") return key;
    }
}
function $5cd3a3c84f7c0549$var$assignAttributes(obj, attrMap, jpath, options) {
    if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++){
            const atrrName = keys[i];
            if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) obj[atrrName] = [
                attrMap[atrrName]
            ];
            else obj[atrrName] = attrMap[atrrName];
        }
    }
}
function $5cd3a3c84f7c0549$var$isLeafTag(obj, options) {
    const { textNodeName: textNodeName } = options;
    const propCount = Object.keys(obj).length;
    if (propCount === 0) return true;
    if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) return true;
    return false;
}
$5cd3a3c84f7c0549$export$1b80ed980367b7c1 = $5cd3a3c84f7c0549$var$prettify;


//# sourceMappingURL=node2json.b87a8f03.js.map
