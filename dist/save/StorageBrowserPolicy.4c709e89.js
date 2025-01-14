require("./RequestPolicy.3ec6657c.js");
require("./esm.9590f010.js");
require("./constants.425d5fc4.js");
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

var $57vhQ = parcelRequire("57vhQ");

var $hACYf = parcelRequire("hACYf");

var $daWVB = parcelRequire("daWVB");

var $aiu2u = parcelRequire("aiu2u");
class $efb5612776195d1e$export$16e919f346b5ae38 extends (0, $57vhQ.BaseRequestPolicy) {
    /**
     * Creates an instance of StorageBrowserPolicy.
     * @param nextPolicy -
     * @param options -
     */ // The base class has a protected constructor. Adding a public one to enable constructing of this class.
    /* eslint-disable-next-line @typescript-eslint/no-useless-constructor*/ constructor(nextPolicy, options){
        super(nextPolicy, options);
    }
    /**
     * Sends out request.
     *
     * @param request -
     */ async sendRequest(request) {
        if (0, $hACYf.isNode) return this._nextPolicy.sendRequest(request);
        if (request.method.toUpperCase() === "GET" || request.method.toUpperCase() === "HEAD") request.url = (0, $aiu2u.setURLParameter)(request.url, (0, $daWVB.URLConstants).Parameters.FORCE_BROWSER_NO_CACHE, new Date().getTime().toString());
        request.headers.remove((0, $daWVB.HeaderConstants).COOKIE);
        // According to XHR standards, content-length should be fully controlled by browsers
        request.headers.remove((0, $daWVB.HeaderConstants).CONTENT_LENGTH);
        return this._nextPolicy.sendRequest(request);
    }
}


//# sourceMappingURL=StorageBrowserPolicy.4c709e89.js.map
