require("./esm.f174e5c8.js");
require("./concat.371b3010.js");
require("./typeGuards.97fbaafd.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $3lAwb = parcelRequire("3lAwb");
var $94e0017af83d1f65$exports = {};
$94e0017af83d1f65$exports = new URL("concat.371b3010.js", "file:" + __filename).toString();



var $cc6Ge = parcelRequire("cc6Ge");
function $4897a2cd3e55e68d$var$generateBoundary() {
    return `----AzSDKFormBoundary${(0, $3lAwb.randomUUID)()}`;
}
function $4897a2cd3e55e68d$var$encodeHeaders(headers) {
    let result = "";
    for (const [key, value] of headers)result += `${key}: ${value}\r\n`;
    return result;
}
function $4897a2cd3e55e68d$var$getLength(source) {
    if (source instanceof Uint8Array) return source.byteLength;
    else if ((0, $cc6Ge.isBlob)(source)) // if was created using createFile then -1 means we have an unknown size
    return source.size === -1 ? undefined : source.size;
    else return undefined;
}
function $4897a2cd3e55e68d$var$getTotalLength(sources) {
    let total = 0;
    for (const source of sources){
        const partLength = $4897a2cd3e55e68d$var$getLength(source);
        if (partLength === undefined) return undefined;
        else total += partLength;
    }
    return total;
}
async function $4897a2cd3e55e68d$var$buildRequestBody(request, parts, boundary) {
    const sources = [
        (0, $3lAwb.stringToUint8Array)(`--${boundary}`, "utf-8"),
        ...parts.flatMap((part)=>[
                (0, $3lAwb.stringToUint8Array)("\r\n", "utf-8"),
                (0, $3lAwb.stringToUint8Array)($4897a2cd3e55e68d$var$encodeHeaders(part.headers), "utf-8"),
                (0, $3lAwb.stringToUint8Array)("\r\n", "utf-8"),
                part.body,
                (0, $3lAwb.stringToUint8Array)(`\r\n--${boundary}`, "utf-8")
            ]),
        (0, $3lAwb.stringToUint8Array)("--\r\n\r\n", "utf-8")
    ];
    const contentLength = $4897a2cd3e55e68d$var$getTotalLength(sources);
    if (contentLength) request.headers.set("Content-Length", contentLength);
    request.body = await (0, $94e0017af83d1f65$exports.concat)(sources);
}
const $4897a2cd3e55e68d$export$45727809134cc21e = "multipartPolicy";
const $4897a2cd3e55e68d$var$maxBoundaryLength = 70;
const $4897a2cd3e55e68d$var$validBoundaryCharacters = new Set(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?`);
function $4897a2cd3e55e68d$var$assertValidBoundary(boundary) {
    if (boundary.length > $4897a2cd3e55e68d$var$maxBoundaryLength) throw new Error(`Multipart boundary "${boundary}" exceeds maximum length of 70 characters`);
    if (Array.from(boundary).some((x)=>!$4897a2cd3e55e68d$var$validBoundaryCharacters.has(x))) throw new Error(`Multipart boundary "${boundary}" contains invalid characters`);
}
function $4897a2cd3e55e68d$export$5b3d05101322c3af() {
    return {
        name: $4897a2cd3e55e68d$export$45727809134cc21e,
        async sendRequest (request, next) {
            var _a;
            if (!request.multipartBody) return next(request);
            if (request.body) throw new Error("multipartBody and regular body cannot be set at the same time");
            let boundary = request.multipartBody.boundary;
            const contentTypeHeader = (_a = request.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "multipart/mixed";
            const parsedHeader = contentTypeHeader.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
            if (!parsedHeader) throw new Error(`Got multipart request body, but content-type header was not multipart: ${contentTypeHeader}`);
            const [, contentType, parsedBoundary] = parsedHeader;
            if (parsedBoundary && boundary && parsedBoundary !== boundary) throw new Error(`Multipart boundary was specified as ${parsedBoundary} in the header, but got ${boundary} in the request body`);
            boundary !== null && boundary !== void 0 ? boundary : boundary = parsedBoundary;
            if (boundary) $4897a2cd3e55e68d$var$assertValidBoundary(boundary);
            else boundary = $4897a2cd3e55e68d$var$generateBoundary();
            request.headers.set("Content-Type", `${contentType}; boundary=${boundary}`);
            await $4897a2cd3e55e68d$var$buildRequestBody(request, request.multipartBody.parts, boundary);
            request.multipartBody = undefined;
            return next(request);
        }
    };
}


