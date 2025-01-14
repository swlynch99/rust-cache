var $3dab6a8bea6a521c$export$a5edf3f35b6dd392;
var $3dab6a8bea6a521c$export$83b788b1a3698c03;
/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */ var $3dab6a8bea6a521c$export$4950aa0f605343fb;
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */ var $3dab6a8bea6a521c$export$bf7199a9ebcb84a9;
// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};
var $3dab6a8bea6a521c$export$998d7ff9801e90bb;
var $3dab6a8bea6a521c$export$aaa9734c55cb7a19;
var $3dab6a8bea6a521c$export$e8f2644f7085b4b1;
'use strict';
const $3dab6a8bea6a521c$var$nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const $3dab6a8bea6a521c$var$nameChar = $3dab6a8bea6a521c$var$nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const $3dab6a8bea6a521c$var$nameRegexp = '[' + $3dab6a8bea6a521c$var$nameStartChar + '][' + $3dab6a8bea6a521c$var$nameChar + ']*';
const $3dab6a8bea6a521c$var$regexName = new RegExp('^' + $3dab6a8bea6a521c$var$nameRegexp + '$');
const $3dab6a8bea6a521c$var$getAllMatches = function(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while(match){
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for(let index = 0; index < len; index++)allmatches.push(match[index]);
        matches.push(allmatches);
        match = regex.exec(string);
    }
    return matches;
};
const $3dab6a8bea6a521c$var$isName = function(string) {
    const match = $3dab6a8bea6a521c$var$regexName.exec(string);
    return !(match === null || typeof match === 'undefined');
};
$3dab6a8bea6a521c$export$a5edf3f35b6dd392 = function(v) {
    return typeof v !== 'undefined';
};
$3dab6a8bea6a521c$export$83b788b1a3698c03 = function(obj) {
    return Object.keys(obj).length === 0;
};
$3dab6a8bea6a521c$export$4950aa0f605343fb = function(target, a, arrayMode) {
    if (a) {
        const keys = Object.keys(a); // will return an array of own properties
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++)if (arrayMode === 'strict') target[keys[i]] = [
            a[keys[i]]
        ];
        else target[keys[i]] = a[keys[i]];
    }
};
$3dab6a8bea6a521c$export$bf7199a9ebcb84a9 = function(v) {
    if ($3dab6a8bea6a521c$export$a5edf3f35b6dd392(v)) return v;
    else return '';
};
$3dab6a8bea6a521c$export$998d7ff9801e90bb = $3dab6a8bea6a521c$var$isName;
$3dab6a8bea6a521c$export$aaa9734c55cb7a19 = $3dab6a8bea6a521c$var$getAllMatches;
$3dab6a8bea6a521c$export$e8f2644f7085b4b1 = $3dab6a8bea6a521c$var$nameRegexp;


