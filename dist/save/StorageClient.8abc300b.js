require("./StorageContextClient.c986353a.js");
require("./Pipeline.a69306ef.js");
require("./utils.common.1056282c.js");


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
var $ecfcef42ddaffcef$exports = {};
$ecfcef42ddaffcef$exports = new URL("StorageContextClient.c986353a.js", "file:" + __filename).toString();



var $k4Bvl = parcelRequire("k4Bvl");

var $aiu2u = parcelRequire("aiu2u");
class $8682d5a67bfbc51a$export$6c85f5032e75eff9 {
    /**
     * Creates an instance of StorageClient.
     * @param url - url to resource
     * @param pipeline - request policy pipeline.
     */ constructor(url, pipeline){
        // URL should be encoded and only once, protocol layer shouldn't encode URL again
        this.url = (0, $aiu2u.escapeURLPath)(url);
        this.accountName = (0, $aiu2u.getAccountNameFromUrl)(url);
        this.pipeline = pipeline;
        this.storageClientContext = new (0, $ecfcef42ddaffcef$exports.StorageContextClient)(this.url, (0, $k4Bvl.getCoreClientOptions)(pipeline));
        this.isHttps = (0, $aiu2u.iEqual)((0, $aiu2u.getURLScheme)(this.url) || "", "https");
        this.credential = (0, $k4Bvl.getCredentialFromPipeline)(pipeline);
        // Override protocol layer's default content-type
        const storageClientContext = this.storageClientContext;
        storageClientContext.requestContentType = undefined;
    }
}


//# sourceMappingURL=StorageClient.8abc300b.js.map
