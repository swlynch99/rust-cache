require("./esm.f174e5c8.js");
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

var $cc6Ge = parcelRequire("cc6Ge");
const $2bca8f75de8eb558$var$unimplementedMethods = {
    arrayBuffer: ()=>{
        throw new Error("Not implemented");
    },
    slice: ()=>{
        throw new Error("Not implemented");
    },
    text: ()=>{
        throw new Error("Not implemented");
    }
};
/**
 * Private symbol used as key on objects created using createFile containing the
 * original source of the file object.
 *
 * This is used in Node to access the original Node stream without using Blob#stream, which
 * returns a web stream. This is done to avoid a couple of bugs to do with Blob#stream and
 * Readable#to/fromWeb in Node versions we support:
 * - https://github.com/nodejs/node/issues/42694 (fixed in Node 18.14)
 * - https://github.com/nodejs/node/issues/48916 (fixed in Node 20.6)
 *
 * Once these versions are no longer supported, we may be able to stop doing this.
 *
 * @internal
 */ const $2bca8f75de8eb558$var$rawContent = Symbol("rawContent");
function $2bca8f75de8eb558$var$hasRawContent(x) {
    return typeof x[$2bca8f75de8eb558$var$rawContent] === "function";
}
function $2bca8f75de8eb558$export$b4595122821492b(blob) {
    if ($2bca8f75de8eb558$var$hasRawContent(blob)) return blob[$2bca8f75de8eb558$var$rawContent]();
    else return blob.stream();
}
function $2bca8f75de8eb558$export$a2afb2620694249f(stream, name, options = {}) {
    var _a, _b, _c, _d;
    return Object.assign(Object.assign({}, $2bca8f75de8eb558$var$unimplementedMethods), {
        type: (_a = options.type) !== null && _a !== void 0 ? _a : "",
        lastModified: (_b = options.lastModified) !== null && _b !== void 0 ? _b : new Date().getTime(),
        webkitRelativePath: (_c = options.webkitRelativePath) !== null && _c !== void 0 ? _c : "",
        size: (_d = options.size) !== null && _d !== void 0 ? _d : -1,
        name: name,
        stream: ()=>{
            const s = stream();
            if ((0, $cc6Ge.isNodeReadableStream)(s)) throw new Error("Not supported: a Node stream was provided as input to createFileFromStream.");
            return s;
        },
        [$2bca8f75de8eb558$var$rawContent]: stream
    });
}
function $2bca8f75de8eb558$export$982c3a0b9a5cde94(content, name, options = {}) {
    var _a, _b, _c;
    if (0, $3lAwb.isNodeLike) return Object.assign(Object.assign({}, $2bca8f75de8eb558$var$unimplementedMethods), {
        type: (_a = options.type) !== null && _a !== void 0 ? _a : "",
        lastModified: (_b = options.lastModified) !== null && _b !== void 0 ? _b : new Date().getTime(),
        webkitRelativePath: (_c = options.webkitRelativePath) !== null && _c !== void 0 ? _c : "",
        size: content.byteLength,
        name: name,
        arrayBuffer: async ()=>content.buffer,
        stream: ()=>new Blob([
                content
            ]).stream(),
        [$2bca8f75de8eb558$var$rawContent]: ()=>content
    });
    else return new File([
        content
    ], name, options);
}


