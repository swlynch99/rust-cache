require("./package-json-helper.02eb8661.js");
var $lBGIy$path = require("path");
var $lBGIy$querystring = require("querystring");
var $lBGIy$stream = require("stream");
var $lBGIy$url = require("url");


var $a2b702d54e8b5c43$var$$parcel$__dirname = $lBGIy$path.resolve(__dirname, "../../node_modules/@google-cloud/storage/build/cjs/src");
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
var $a2b702d54e8b5c43$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $a2b702d54e8b5c43$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $a2b702d54e8b5c43$var$__importStar = module.exports && module.exports.__importStar || function() {
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
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $a2b702d54e8b5c43$var$__createBinding(result, mod, k[i]);
        }
        $a2b702d54e8b5c43$var$__setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.PassThroughShim = void 0;
module.exports.normalize = $a2b702d54e8b5c43$var$normalize;
module.exports.objectEntries = $a2b702d54e8b5c43$var$objectEntries;
module.exports.fixedEncodeURIComponent = $a2b702d54e8b5c43$var$fixedEncodeURIComponent;
module.exports.encodeURI = $a2b702d54e8b5c43$var$encodeURI;
module.exports.qsStringify = $a2b702d54e8b5c43$var$qsStringify;
module.exports.objectKeyToLowercase = $a2b702d54e8b5c43$var$objectKeyToLowercase;
module.exports.unicodeJSONStringify = $a2b702d54e8b5c43$var$unicodeJSONStringify;
module.exports.convertObjKeysToSnakeCase = $a2b702d54e8b5c43$var$convertObjKeysToSnakeCase;
module.exports.formatAsUTCISO = $a2b702d54e8b5c43$var$formatAsUTCISO;
module.exports.getRuntimeTrackingString = $a2b702d54e8b5c43$var$getRuntimeTrackingString;
module.exports.getUserAgentString = $a2b702d54e8b5c43$var$getUserAgentString;
module.exports.getDirName = $a2b702d54e8b5c43$var$getDirName;
module.exports.getModuleFormat = $a2b702d54e8b5c43$var$getModuleFormat;

const $a2b702d54e8b5c43$var$path = $a2b702d54e8b5c43$var$__importStar($lBGIy$path);

const $a2b702d54e8b5c43$var$querystring = $a2b702d54e8b5c43$var$__importStar($lBGIy$querystring);


const $a2b702d54e8b5c43$var$url = $a2b702d54e8b5c43$var$__importStar($lBGIy$url);
var $6f4f400f7977f60d$exports = {};
$6f4f400f7977f60d$exports = new URL("package-json-helper.02eb8661.js", "file:" + __filename).toString();


// Done to avoid a problem with mangling of identifiers when using esModuleInterop
const $a2b702d54e8b5c43$var$fileURLToPath = $a2b702d54e8b5c43$var$url.fileURLToPath;
const $a2b702d54e8b5c43$var$isEsm = false;
function $a2b702d54e8b5c43$var$normalize(optionsOrCallback, cb) {
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
 */ function $a2b702d54e8b5c43$var$objectEntries(obj) {
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
 */ function $a2b702d54e8b5c43$var$fixedEncodeURIComponent(str) {
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
 */ function $a2b702d54e8b5c43$var$encodeURI(uri, encodeSlash) {
    // Split the string by `/`, and conditionally rejoin them with either
    // %2F if encodeSlash is `true`, or '/' if `false`.
    return uri.split('/').map($a2b702d54e8b5c43$var$fixedEncodeURIComponent).join(encodeSlash ? '%2F' : '/');
}
/**
 * Serialize an object to a URL query string using util.encodeURI(uri, true).
 * @param {string} url The object to serialize.
 * @return {string} Serialized string.
 */ function $a2b702d54e8b5c43$var$qsStringify(qs) {
    return $a2b702d54e8b5c43$var$querystring.stringify(qs, '&', '=', {
        encodeURIComponent: (component)=>$a2b702d54e8b5c43$var$encodeURI(component, true)
    });
}
function $a2b702d54e8b5c43$var$objectKeyToLowercase(object) {
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
 */ function $a2b702d54e8b5c43$var$unicodeJSONStringify(obj) {
    return JSON.stringify(obj).replace(/[\u0080-\uFFFF]/g, (char)=>'\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4));
}
/**
 * Converts the given objects keys to snake_case
 * @param {object} obj object to convert keys to snake case.
 * @returns {object} object with keys converted to snake case.
 */ function $a2b702d54e8b5c43$var$convertObjKeysToSnakeCase(obj) {
    if (obj instanceof Date || obj instanceof RegExp) return obj;
    if (Array.isArray(obj)) return obj.map($a2b702d54e8b5c43$var$convertObjKeysToSnakeCase);
    if (obj instanceof Object) return Object.keys(obj).reduce((acc, cur)=>{
        const s = cur[0].toLocaleLowerCase() + cur.slice(1).replace(/([A-Z]+)/g, (match, p1)=>{
            return `_${p1.toLowerCase()}`;
        });
        acc[s] = $a2b702d54e8b5c43$var$convertObjKeysToSnakeCase(obj[cur]);
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
 */ function $a2b702d54e8b5c43$var$formatAsUTCISO(dateTimeToFormat, includeTime = false, dateDelimiter = '', timeDelimiter = '') {
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
 */ function $a2b702d54e8b5c43$var$getRuntimeTrackingString() {
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
 */ function $a2b702d54e8b5c43$var$getUserAgentString() {
    const pkg = (0, $6f4f400f7977f60d$exports.getPackageJSON)();
    const hyphenatedPackageName = pkg.name.replace('@google-cloud', 'gcloud-node') // For legacy purposes.
    .replace('/', '-'); // For UA spec-compliance purposes.
    return hyphenatedPackageName + '/' + pkg.version;
}
function $a2b702d54e8b5c43$var$getDirName() {
    let dirToUse = '';
    try {
        dirToUse = $a2b702d54e8b5c43$var$$parcel$__dirname;
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dirToUse = $a2b702d54e8b5c43$var$$parcel$__dirname;
    }
    return dirToUse;
}
function $a2b702d54e8b5c43$var$getModuleFormat() {
    return $a2b702d54e8b5c43$var$isEsm ? 'ESM' : 'CJS';
}
class $a2b702d54e8b5c43$var$PassThroughShim extends $lBGIy$stream.PassThrough {
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
module.exports.PassThroughShim = $a2b702d54e8b5c43$var$PassThroughShim;


//# sourceMappingURL=util.14aba05f.js.map
