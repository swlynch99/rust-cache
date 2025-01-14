require("./esm.9590f010.js");
require("./httpHeaders.2ab7c00c.js");


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

var $hACYf = parcelRequire("hACYf");
var $a17e88bd928142c3$exports = {};
$a17e88bd928142c3$exports = new URL("httpHeaders.2ab7c00c.js", "file:" + __filename).toString();


const $a5725404c72738dc$export$17a6717f6759c6c6 = "formDataPolicy";
function $a5725404c72738dc$var$formDataToFormDataMap(formData) {
    var _a;
    const formDataMap = {};
    for (const [key, value] of formData.entries()){
        (_a = formDataMap[key]) !== null && _a !== void 0 ? _a : formDataMap[key] = [];
        formDataMap[key].push(value);
    }
    return formDataMap;
}
function $a5725404c72738dc$export$605ab7ff664094f0() {
    return {
        name: $a5725404c72738dc$export$17a6717f6759c6c6,
        async sendRequest (request, next) {
            if ((0, $hACYf.isNodeLike) && typeof FormData !== "undefined" && request.body instanceof FormData) {
                request.formData = $a5725404c72738dc$var$formDataToFormDataMap(request.body);
                request.body = undefined;
            }
            if (request.formData) {
                const contentType = request.headers.get("Content-Type");
                if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) request.body = $a5725404c72738dc$var$wwwFormUrlEncode(request.formData);
                else await $a5725404c72738dc$var$prepareFormData(request.formData, request);
                request.formData = undefined;
            }
            return next(request);
        }
    };
}
function $a5725404c72738dc$var$wwwFormUrlEncode(formData) {
    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(formData)){
        if (Array.isArray(value)) for (const subValue of value)urlSearchParams.append(key, subValue.toString());
        else urlSearchParams.append(key, value.toString());
    }
    return urlSearchParams.toString();
}
async function $a5725404c72738dc$var$prepareFormData(formData, request) {
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
            headers: (0, $a17e88bd928142c3$exports.createHttpHeaders)({
                "Content-Disposition": `form-data; name="${fieldName}"`
            }),
            body: (0, $hACYf.stringToUint8Array)(value, "utf-8")
        });
        else if (value === undefined || value === null || typeof value !== "object") throw new Error(`Unexpected value for key ${fieldName}: ${value}. Value should be serialized to string first.`);
        else {
            // using || instead of ?? here since if value.name is empty we should create a file name
            const fileName = value.name || "blob";
            const headers = (0, $a17e88bd928142c3$exports.createHttpHeaders)();
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


//# sourceMappingURL=formDataPolicy.d6c7bfb0.js.map
