require("./disableKeepAlivePolicy.62298614.js");
require("./esm.346084e9.js");
require("./commonjs.0faacadc.js");
require("./response.bc1fca6d.js");


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
"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ExtendedServiceClient = void 0;
var $f99a17489f930b38$exports = {};
$f99a17489f930b38$exports = new URL("disableKeepAlivePolicy.62298614.js", "file:" + __filename).toString();



var $huk7e = parcelRequire("huk7e");
var $88083f5804317f36$exports = {};
$88083f5804317f36$exports = new URL("commonjs.0faacadc.js", "file:" + __filename).toString();


var $5c32c4330db434d4$exports = {};
$5c32c4330db434d4$exports = new URL("response.bc1fca6d.js", "file:" + __filename).toString();


/**
 * Client to provide compatability between core V1 & V2.
 */ class $4cf09492540cb4d1$var$ExtendedServiceClient extends $88083f5804317f36$exports.ServiceClient {
    constructor(options){
        var _a, _b;
        super(options);
        if (((_a = options.keepAliveOptions) === null || _a === void 0 ? void 0 : _a.enable) === false && !(0, $f99a17489f930b38$exports.pipelineContainsDisableKeepAlivePolicy)(this.pipeline)) this.pipeline.addPolicy((0, $f99a17489f930b38$exports.createDisableKeepAlivePolicy)());
        if (((_b = options.redirectOptions) === null || _b === void 0 ? void 0 : _b.handleRedirects) === false) this.pipeline.removePolicy({
            name: $huk7e.redirectPolicyName
        });
    }
    /**
     * Compatible send operation request function.
     *
     * @param operationArguments - Operation arguments
     * @param operationSpec - Operation Spec
     * @returns
     */ async sendOperationRequest(operationArguments, operationSpec) {
        var _a;
        const userProvidedCallBack = (_a = operationArguments === null || operationArguments === void 0 ? void 0 : operationArguments.options) === null || _a === void 0 ? void 0 : _a.onResponse;
        let lastResponse;
        function onResponse(rawResponse, flatResponse, error) {
            lastResponse = rawResponse;
            if (userProvidedCallBack) userProvidedCallBack(rawResponse, flatResponse, error);
        }
        operationArguments.options = Object.assign(Object.assign({}, operationArguments.options), {
            onResponse: onResponse
        });
        const result = await super.sendOperationRequest(operationArguments, operationSpec);
        if (lastResponse) Object.defineProperty(result, "_response", {
            value: (0, $5c32c4330db434d4$exports.toCompatResponse)(lastResponse)
        });
        return result;
    }
}
module.exports.ExtendedServiceClient = $4cf09492540cb4d1$var$ExtendedServiceClient;


