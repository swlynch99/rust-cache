require("./disableKeepAlivePolicy.bf9a0875.js");
require("./esm.b9de7281.js");
require("./commonjs.51f0173f.js");
require("./response.6f98f86d.js");


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
var $a54c1f12e860f196$exports = {};
$a54c1f12e860f196$exports = new URL("disableKeepAlivePolicy.bf9a0875.js", "file:" + __filename).toString();



var $6W8oz = parcelRequire("6W8oz");
var $ab9316f3fb491ff6$exports = {};
$ab9316f3fb491ff6$exports = new URL("commonjs.51f0173f.js", "file:" + __filename).toString();


var $af32cf79ef79584e$exports = {};
$af32cf79ef79584e$exports = new URL("response.6f98f86d.js", "file:" + __filename).toString();


/**
 * Client to provide compatability between core V1 & V2.
 */ class $e247c53030df6ddc$var$ExtendedServiceClient extends $ab9316f3fb491ff6$exports.ServiceClient {
    constructor(options){
        var _a, _b;
        super(options);
        if (((_a = options.keepAliveOptions) === null || _a === void 0 ? void 0 : _a.enable) === false && !(0, $a54c1f12e860f196$exports.pipelineContainsDisableKeepAlivePolicy)(this.pipeline)) this.pipeline.addPolicy((0, $a54c1f12e860f196$exports.createDisableKeepAlivePolicy)());
        if (((_b = options.redirectOptions) === null || _b === void 0 ? void 0 : _b.handleRedirects) === false) this.pipeline.removePolicy({
            name: $6W8oz.redirectPolicyName
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
            value: (0, $af32cf79ef79584e$exports.toCompatResponse)(lastResponse)
        });
        return result;
    }
}
module.exports.ExtendedServiceClient = $e247c53030df6ddc$var$ExtendedServiceClient;


//# sourceMappingURL=extendedClient.c3b78838.js.map
