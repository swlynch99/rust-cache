var $c683589574c817b5$export$a5edf3f35b6dd392;
var $c683589574c817b5$export$83b788b1a3698c03;
/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */ var $c683589574c817b5$export$4950aa0f605343fb;
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */ var $c683589574c817b5$export$bf7199a9ebcb84a9;
// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};
var $c683589574c817b5$export$998d7ff9801e90bb;
var $c683589574c817b5$export$aaa9734c55cb7a19;
var $c683589574c817b5$export$e8f2644f7085b4b1;
'use strict';
const $c683589574c817b5$var$nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const $c683589574c817b5$var$nameChar = $c683589574c817b5$var$nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const $c683589574c817b5$var$nameRegexp = '[' + $c683589574c817b5$var$nameStartChar + '][' + $c683589574c817b5$var$nameChar + ']*';
const $c683589574c817b5$var$regexName = new RegExp('^' + $c683589574c817b5$var$nameRegexp + '$');
const $c683589574c817b5$var$getAllMatches = function(string, regex) {
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
const $c683589574c817b5$var$isName = function(string) {
    const match = $c683589574c817b5$var$regexName.exec(string);
    return !(match === null || typeof match === 'undefined');
};
$c683589574c817b5$export$a5edf3f35b6dd392 = function(v) {
    return typeof v !== 'undefined';
};
$c683589574c817b5$export$83b788b1a3698c03 = function(obj) {
    return Object.keys(obj).length === 0;
};
$c683589574c817b5$export$4950aa0f605343fb = function(target, a, arrayMode) {
    if (a) {
        const keys = Object.keys(a); // will return an array of own properties
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++)if (arrayMode === 'strict') target[keys[i]] = [
            a[keys[i]]
        ];
        else target[keys[i]] = a[keys[i]];
    }
};
$c683589574c817b5$export$bf7199a9ebcb84a9 = function(v) {
    if ($c683589574c817b5$export$a5edf3f35b6dd392(v)) return v;
    else return '';
};
$c683589574c817b5$export$998d7ff9801e90bb = $c683589574c817b5$var$isName;
$c683589574c817b5$export$aaa9734c55cb7a19 = $c683589574c817b5$var$getAllMatches;
$c683589574c817b5$export$e8f2644f7085b4b1 = $c683589574c817b5$var$nameRegexp;


//# sourceMappingURL=util.5f8a6c8c.js.map
