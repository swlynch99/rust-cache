require("./esm.f174e5c8.js");
require("./httpHeaders.9e33d74a.js");


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
var $138058ca4425f17c$exports = {};
$138058ca4425f17c$exports = new URL("httpHeaders.9e33d74a.js", "file:" + __filename).toString();


const $22be220b0a8063f8$export$17a6717f6759c6c6 = "formDataPolicy";
function $22be220b0a8063f8$var$formDataToFormDataMap(formData) {
    var _a;
    const formDataMap = {};
    for (const [key, value] of formData.entries()){
        (_a = formDataMap[key]) !== null && _a !== void 0 ? _a : formDataMap[key] = [];
        formDataMap[key].push(value);
    }
    return formDataMap;
}
function $22be220b0a8063f8$export$605ab7ff664094f0() {
    return {
        name: $22be220b0a8063f8$export$17a6717f6759c6c6,
        async sendRequest (request, next) {
            if ((0, $3lAwb.isNodeLike) && typeof FormData !== "undefined" && request.body instanceof FormData) {
                request.formData = $22be220b0a8063f8$var$formDataToFormDataMap(request.body);
                request.body = undefined;
            }
            if (request.formData) {
                const contentType = request.headers.get("Content-Type");
                if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) request.body = $22be220b0a8063f8$var$wwwFormUrlEncode(request.formData);
                else await $22be220b0a8063f8$var$prepareFormData(request.formData, request);
                request.formData = undefined;
            }
            return next(request);
        }
    };
}
function $22be220b0a8063f8$var$wwwFormUrlEncode(formData) {
    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(formData)){
        if (Array.isArray(value)) for (const subValue of value)urlSearchParams.append(key, subValue.toString());
        else urlSearchParams.append(key, value.toString());
    }
    return urlSearchParams.toString();
}
async function $22be220b0a8063f8$var$prepareFormData(formData, request) {
    // validate content type (multipart/form-data)
    const contentType = request.headers.get("Content-Type");
    if (contentType && !contentType.startsWith("multipart/form-data")) // content type is specified and is not multipart/form-data. Exit.
    return;
    request.headers.set("Content-Type", contentType !== null && contentType !== void 0 ? contentType : "multipart/form-data");
    // set body to MultipartRequestBody using content from FormDataMap
    const parts = [];
    for (const [fieldName, values] of Object.entries(formData))for (const value of Array.isArray(values) ? values : [
        values
    ]){
        if (typeof value === "string") parts.push({
            headers: (0, $138058ca4425f17c$exports.createHttpHeaders)({
                "Content-Disposition": `form-data; name="${fieldName}"`
            }),
            body: (0, $3lAwb.stringToUint8Array)(value, "utf-8")
        });
        else if (value === undefined || value === null || typeof value !== "object") throw new Error(`Unexpected value for key ${fieldName}: ${value}. Value should be serialized to string first.`);
        else {
            // using || instead of ?? here since if value.name is empty we should create a file name
            const fileName = value.name || "blob";
            const headers = (0, $138058ca4425f17c$exports.createHttpHeaders)();
            headers.set("Content-Disposition", `form-data; name="${fieldName}"; filename="${fileName}"`);
            // again, || is used since an empty value.type means the content type is unset
            headers.set("Content-Type", value.type || "application/octet-stream");
            parts.push({
                headers: headers,
                body: value
            });
        }
    }
    request.multipartBody = {
        parts: parts
    };
}


