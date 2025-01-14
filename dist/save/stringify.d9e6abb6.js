/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ let $bdde48266cc5c10b$var$BARE_KEY = /^[a-z0-9-_]+$/i;
function $bdde48266cc5c10b$var$extendedTypeOf(obj) {
    let type = typeof obj;
    if (type === 'object') {
        if (Array.isArray(obj)) return 'array';
        if (obj instanceof Date) return 'date';
    }
    return type;
}
function $bdde48266cc5c10b$var$isArrayOfTables(obj) {
    for(let i = 0; i < obj.length; i++){
        if ($bdde48266cc5c10b$var$extendedTypeOf(obj[i]) !== 'object') return false;
    }
    return obj.length != 0;
}
function $bdde48266cc5c10b$var$formatString(s) {
    return JSON.stringify(s).replace(/\x7f/g, '\\u007f');
}
function $bdde48266cc5c10b$var$stringifyValue(val, type, depth) {
    if (depth === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    if (type === 'number') {
        if (isNaN(val)) return 'nan';
        if (val === Infinity) return 'inf';
        if (val === -Infinity) return '-inf';
        return val.toString();
    }
    if (type === 'bigint' || type === 'boolean') return val.toString();
    if (type === 'string') return $bdde48266cc5c10b$var$formatString(val);
    if (type === 'date') {
        if (isNaN(val.getTime())) throw new TypeError('cannot serialize invalid date');
        return val.toISOString();
    }
    if (type === 'object') return $bdde48266cc5c10b$var$stringifyInlineTable(val, depth);
    if (type === 'array') return $bdde48266cc5c10b$var$stringifyArray(val, depth);
}
function $bdde48266cc5c10b$var$stringifyInlineTable(obj, depth) {
    let keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    let res = '{ ';
    for(let i = 0; i < keys.length; i++){
        let k = keys[i];
        if (i) res += ', ';
        res += $bdde48266cc5c10b$var$BARE_KEY.test(k) ? k : $bdde48266cc5c10b$var$formatString(k);
        res += ' = ';
        res += $bdde48266cc5c10b$var$stringifyValue(obj[k], $bdde48266cc5c10b$var$extendedTypeOf(obj[k]), depth - 1);
    }
    return res + ' }';
}
function $bdde48266cc5c10b$var$stringifyArray(array, depth) {
    if (array.length === 0) return '[]';
    let res = '[ ';
    for(let i = 0; i < array.length; i++){
        if (i) res += ', ';
        if (array[i] === null || array[i] === void 0) throw new TypeError('arrays cannot contain null or undefined values');
        res += $bdde48266cc5c10b$var$stringifyValue(array[i], $bdde48266cc5c10b$var$extendedTypeOf(array[i]), depth - 1);
    }
    return res + ' ]';
}
function $bdde48266cc5c10b$var$stringifyArrayTable(array, key, depth) {
    if (depth === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    let res = '';
    for(let i = 0; i < array.length; i++){
        res += `[[${key}]]\n`;
        res += $bdde48266cc5c10b$var$stringifyTable(array[i], key, depth);
        res += '\n\n';
    }
    return res;
}
function $bdde48266cc5c10b$var$stringifyTable(obj, prefix, depth) {
    if (depth === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    let preamble = '';
    let tables = '';
    let keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        let k = keys[i];
        if (obj[k] !== null && obj[k] !== void 0) {
            let type = $bdde48266cc5c10b$var$extendedTypeOf(obj[k]);
            if (type === 'symbol' || type === 'function') throw new TypeError(`cannot serialize values of type '${type}'`);
            let key = $bdde48266cc5c10b$var$BARE_KEY.test(k) ? k : $bdde48266cc5c10b$var$formatString(k);
            if (type === 'array' && $bdde48266cc5c10b$var$isArrayOfTables(obj[k])) tables += $bdde48266cc5c10b$var$stringifyArrayTable(obj[k], prefix ? `${prefix}.${key}` : key, depth - 1);
            else if (type === 'object') {
                let tblKey = prefix ? `${prefix}.${key}` : key;
                tables += `[${tblKey}]\n`;
                tables += $bdde48266cc5c10b$var$stringifyTable(obj[k], tblKey, depth - 1);
                tables += '\n\n';
            } else {
                preamble += key;
                preamble += ' = ';
                preamble += $bdde48266cc5c10b$var$stringifyValue(obj[k], type, depth);
                preamble += '\n';
            }
        }
    }
    return `${preamble}\n${tables}`.trim();
}
function $bdde48266cc5c10b$export$fac44ee5b035f737(obj, opts) {
    if ($bdde48266cc5c10b$var$extendedTypeOf(obj) !== 'object') throw new TypeError('stringify can only be called with an object');
    let maxDepth = opts?.maxDepth ?? 1000;
    return $bdde48266cc5c10b$var$stringifyTable(obj, '', maxDepth);
}


//# sourceMappingURL=stringify.d9e6abb6.js.map
