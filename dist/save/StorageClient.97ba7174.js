require("./StorageContextClient.009f0ba0.js");
require("./Pipeline.ae40a555.js");
require("./utils.common.e0a90969.js");


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
var $81d8de02688bd74e$exports = {};
$81d8de02688bd74e$exports = new URL("StorageContextClient.009f0ba0.js", "file:" + __filename).toString();



var $hrLRz = parcelRequire("hrLRz");

var $esTXG = parcelRequire("esTXG");
class $d6a97bb9d89324d6$export$6c85f5032e75eff9 {
    /**
     * Creates an instance of StorageClient.
     * @param url - url to resource
     * @param pipeline - request policy pipeline.
     */ constructor(url, pipeline){
        // URL should be encoded and only once, protocol layer shouldn't encode URL again
        this.url = (0, $esTXG.escapeURLPath)(url);
        this.accountName = (0, $esTXG.getAccountNameFromUrl)(url);
        this.pipeline = pipeline;
        this.storageClientContext = new (0, $81d8de02688bd74e$exports.StorageContextClient)(this.url, (0, $hrLRz.getCoreClientOptions)(pipeline));
        this.isHttps = (0, $esTXG.iEqual)((0, $esTXG.getURLScheme)(this.url) || "", "https");
        this.credential = (0, $hrLRz.getCredentialFromPipeline)(pipeline);
        // Override protocol layer's default content-type
        const storageClientContext = this.storageClientContext;
        storageClientContext.requestContentType = undefined;
    }
}


