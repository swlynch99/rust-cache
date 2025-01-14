require("./package-json-helper.a5de06ac.js");
var $iiEK5$path = require("path");
var $iiEK5$querystring = require("querystring");
var $iiEK5$stream = require("stream");
var $iiEK5$url = require("url");


var $f81b2937212cd928$var$$parcel$__dirname = $iiEK5$path.resolve(__dirname, "../../node_modules/@google-cloud/storage/build/cjs/src");
"use strict";
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var $f81b2937212cd928$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $f81b2937212cd928$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f81b2937212cd928$var$__importStar = module.exports && module.exports.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $f81b2937212cd928$var$__createBinding(result, mod, k[i]);
        }
        $f81b2937212cd928$var$__setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.PassThroughShim = void 0;
module.exports.normalize = $f81b2937212cd928$var$normalize;
module.exports.objectEntries = $f81b2937212cd928$var$objectEntries;
module.exports.fixedEncodeURIComponent = $f81b2937212cd928$var$fixedEncodeURIComponent;
module.exports.encodeURI = $f81b2937212cd928$var$encodeURI;
module.exports.qsStringify = $f81b2937212cd928$var$qsStringify;
module.exports.objectKeyToLowercase = $f81b2937212cd928$var$objectKeyToLowercase;
module.exports.unicodeJSONStringify = $f81b2937212cd928$var$unicodeJSONStringify;
module.exports.convertObjKeysToSnakeCase = $f81b2937212cd928$var$convertObjKeysToSnakeCase;
module.exports.formatAsUTCISO = $f81b2937212cd928$var$formatAsUTCISO;
module.exports.getRuntimeTrackingString = $f81b2937212cd928$var$getRuntimeTrackingString;
module.exports.getUserAgentString = $f81b2937212cd928$var$getUserAgentString;
module.exports.getDirName = $f81b2937212cd928$var$getDirName;
module.exports.getModuleFormat = $f81b2937212cd928$var$getModuleFormat;

const $f81b2937212cd928$var$path = $f81b2937212cd928$var$__importStar($iiEK5$path);

const $f81b2937212cd928$var$querystring = $f81b2937212cd928$var$__importStar($iiEK5$querystring);


const $f81b2937212cd928$var$url = $f81b2937212cd928$var$__importStar($iiEK5$url);
var $74d1bad26a1b1793$exports = {};
$74d1bad26a1b1793$exports = new URL("package-json-helper.a5de06ac.js", "file:" + __filename).toString();


// Done to avoid a problem with mangling of identifiers when using esModuleInterop
const $f81b2937212cd928$var$fileURLToPath = $f81b2937212cd928$var$url.fileURLToPath;
const $f81b2937212cd928$var$isEsm = false;
function $f81b2937212cd928$var$normalize(optionsOrCallback, cb) {
    const options = typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback = typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    return {
        options: options,
        callback: callback
    };
}
/**
 * Flatten an object into an Array of arrays, [[key, value], ..].
 * Implements Object.entries() for Node.js <8
 * @internal
 */ function $f81b2937212cd928$var$objectEntries(obj) {
    return Object.keys(obj).map((key)=>[
            key,
            obj[key]
        ]);
}
/**
 * Encode `str` with encodeURIComponent, plus these
 * reserved characters: `! * ' ( )`.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent| MDN: fixedEncodeURIComponent}
 *
 * @param {string} str The URI component to encode.
 * @return {string} The encoded string.
 */ function $f81b2937212cd928$var$fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c)=>'%' + c.charCodeAt(0).toString(16).toUpperCase());
}
/**
 * URI encode `uri` for generating signed URLs, using fixedEncodeURIComponent.
 *
 * Encode every byte except `A-Z a-Z 0-9 ~ - . _`.
 *
 * @param {string} uri The URI to encode.
 * @param [boolean=false] encodeSlash If `true`, the "/" character is not encoded.
 * @return {string} The encoded string.
 */ function $f81b2937212cd928$var$encodeURI(uri, encodeSlash) {
    // Split the string by `/`, and conditionally rejoin them with either
    // %2F if encodeSlash is `true`, or '/' if `false`.
    return uri.split('/').map($f81b2937212cd928$var$fixedEncodeURIComponent).join(encodeSlash ? '%2F' : '/');
}
/**
 * Serialize an object to a URL query string using util.encodeURI(uri, true).
 * @param {string} url The object to serialize.
 * @return {string} Serialized string.
 */ function $f81b2937212cd928$var$qsStringify(qs) {
    return $f81b2937212cd928$var$querystring.stringify(qs, '&', '=', {
        encodeURIComponent: (component)=>$f81b2937212cd928$var$encodeURI(component, true)
    });
}
function $f81b2937212cd928$var$objectKeyToLowercase(object) {
    const newObj = {};
    for (let key of Object.keys(object)){
        const value = object[key];
        key = key.toLowerCase();
        newObj[key] = value;
    }
    return newObj;
}
/**
 * JSON encode str, with unicode \u+ representation.
 * @param {object} obj The object to encode.
 * @return {string} Serialized string.
 */ function $f81b2937212cd928$var$unicodeJSONStringify(obj) {
    return JSON.stringify(obj).replace(/[\u0080-\uFFFF]/g, (char)=>'\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4));
}
/**
 * Converts the given objects keys to snake_case
 * @param {object} obj object to convert keys to snake case.
 * @returns {object} object with keys converted to snake case.
 */ function $f81b2937212cd928$var$convertObjKeysToSnakeCase(obj) {
    if (obj instanceof Date || obj instanceof RegExp) return obj;
    if (Array.isArray(obj)) return obj.map($f81b2937212cd928$var$convertObjKeysToSnakeCase);
    if (obj instanceof Object) return Object.keys(obj).reduce((acc, cur)=>{
        const s = cur[0].toLocaleLowerCase() + cur.slice(1).replace(/([A-Z]+)/g, (match, p1)=>{
            return `_${p1.toLowerCase()}`;
        });
        acc[s] = $f81b2937212cd928$var$convertObjKeysToSnakeCase(obj[cur]);
        return acc;
    }, Object());
    return obj;
}
/**
 * Formats the provided date object as a UTC ISO string.
 * @param {Date} dateTimeToFormat date object to be formatted.
 * @param {boolean} includeTime flag to include hours, minutes, seconds in output.
 * @param {string} dateDelimiter delimiter between date components.
 * @param {string} timeDelimiter delimiter between time components.
 * @returns {string} UTC ISO format of provided date obect.
 */ function $f81b2937212cd928$var$formatAsUTCISO(dateTimeToFormat, includeTime = false, dateDelimiter = '', timeDelimiter = '') {
    const year = dateTimeToFormat.getUTCFullYear();
    const month = dateTimeToFormat.getUTCMonth() + 1;
    const day = dateTimeToFormat.getUTCDate();
    const hour = dateTimeToFormat.getUTCHours();
    const minute = dateTimeToFormat.getUTCMinutes();
    const second = dateTimeToFormat.getUTCSeconds();
    let resultString = `${year.toString().padStart(4, '0')}${dateDelimiter}${month.toString().padStart(2, '0')}${dateDelimiter}${day.toString().padStart(2, '0')}`;
    if (includeTime) resultString = `${resultString}T${hour.toString().padStart(2, '0')}${timeDelimiter}${minute.toString().padStart(2, '0')}${timeDelimiter}${second.toString().padStart(2, '0')}Z`;
    return resultString;
}
/**
 * Examines the runtime environment and returns the appropriate tracking string.
 * @returns {string} metrics tracking string based on the current runtime environment.
 */ function $f81b2937212cd928$var$getRuntimeTrackingString() {
    if (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno.version && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno.version.deno) // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `gl-deno/${globalThis.Deno.version.deno}`;
    else return `gl-node/${process.versions.node}`;
}
/**
 * Looks at package.json and creates the user-agent string to be applied to request headers.
 * @returns {string} user agent string.
 */ function $f81b2937212cd928$var$getUserAgentString() {
    const pkg = (0, $74d1bad26a1b1793$exports.getPackageJSON)();
    const hyphenatedPackageName = pkg.name.replace('@google-cloud', 'gcloud-node') // For legacy purposes.
    .replace('/', '-'); // For UA spec-compliance purposes.
    return hyphenatedPackageName + '/' + pkg.version;
}
function $f81b2937212cd928$var$getDirName() {
    let dirToUse = '';
    try {
        dirToUse = $f81b2937212cd928$var$$parcel$__dirname;
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dirToUse = $f81b2937212cd928$var$$parcel$__dirname;
    }
    return dirToUse;
}
function $f81b2937212cd928$var$getModuleFormat() {
    return $f81b2937212cd928$var$isEsm ? 'ESM' : 'CJS';
}
class $f81b2937212cd928$var$PassThroughShim extends $iiEK5$stream.PassThrough {
    constructor(){
        super(...arguments);
        this.shouldEmitReading = true;
        this.shouldEmitWriting = true;
    }
    _read(size) {
        if (this.shouldEmitReading) {
            this.emit('reading');
            this.shouldEmitReading = false;
        }
        super._read(size);
    }
    _write(chunk, encoding, callback) {
        if (this.shouldEmitWriting) {
            this.emit('writing');
            this.shouldEmitWriting = false;
        }
        // Per the nodejs documention, callback must be invoked on the next tick
        process.nextTick(()=>{
            super._write(chunk, encoding, callback);
        });
    }
    _final(callback) {
        // If the stream is empty (i.e. empty file) final will be invoked before _read / _write
        // and we should still emit the proper events.
        if (this.shouldEmitReading) {
            this.emit('reading');
            this.shouldEmitReading = false;
        }
        if (this.shouldEmitWriting) {
            this.emit('writing');
            this.shouldEmitWriting = false;
        }
        callback(null);
    }
}
module.exports.PassThroughShim = $f81b2937212cd928$var$PassThroughShim;


