const $b99785aa16bef252$var$hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const $b99785aa16bef252$var$numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;
//polyfill
if (!Number.parseInt && window.parseInt) Number.parseInt = window.parseInt;
if (!Number.parseFloat && window.parseFloat) Number.parseFloat = window.parseFloat;
const $b99785aa16bef252$var$consider = {
    hex: true,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true
};
function $b99785aa16bef252$var$toNumber(str, options = {}) {
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }
    options = Object.assign({}, $b99785aa16bef252$var$consider, options);
    if (!str || typeof str !== "string") return str;
    let trimmedStr = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;
    if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && $b99785aa16bef252$var$hexRegex.test(trimmedStr)) return Number.parseInt(trimmedStr, 16);
    else {
        //separate negative sign, leading zeros, and rest number
        const match = $b99785aa16bef252$var$numRegex.exec(trimmedStr);
        if (match) {
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = $b99785aa16bef252$var$trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            const eNotation = match[4] || match[6];
            if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else {
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if (numStr.search(/[eE]/) !== -1) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (eNotation) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (trimmedStr.indexOf(".") !== -1) {
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if (numStr === "0" && numTrimmedByZeros === "") return num; //0.0
                    else if (numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if (sign && numStr === "-" + numTrimmedByZeros) return num;
                    else return str;
                }
                if (leadingZeros) {
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if (numTrimmedByZeros === numStr) return num;
                    else if (sign + numTrimmedByZeros === numStr) return num;
                    else return str;
                }
                if (trimmedStr === numStr) return num;
                else if (trimmedStr === sign + numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);
                // }
                return str;
            }
        // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
        } else return str;
    }
}
/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */ function $b99785aa16bef252$var$trimZeros(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
    }
    return numStr;
}
module.exports = $b99785aa16bef252$var$toNumber;


