require("./operation.b48e817f.js");
require("./constants.94d162dd.js");
require("./poller.d5804d9c.js");
require("./operation.bb27da07.js");


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
module.exports.LroEngine = void 0;
var $9dca3887842cd625$exports = {};
$9dca3887842cd625$exports = new URL("operation.b48e817f.js", "file:" + __filename).toString();



var $7aNHL = parcelRequire("7aNHL");
var $ef58421c472ec77f$exports = {};
$ef58421c472ec77f$exports = new URL("poller.d5804d9c.js", "file:" + __filename).toString();



var $2rqCk = parcelRequire("2rqCk");
/**
 * The LRO Engine, a class that performs polling.
 */ class $4cf3a0c66c4a8d6d$var$LroEngine extends $ef58421c472ec77f$exports.Poller {
    constructor(lro, options){
        const { intervalInMs: intervalInMs = $7aNHL.POLL_INTERVAL_IN_MS, resumeFrom: resumeFrom, resolveOnUnsuccessful: resolveOnUnsuccessful = false, isDone: isDone, lroResourceLocationConfig: lroResourceLocationConfig, processResult: processResult, updateState: updateState } = options || {};
        const state = resumeFrom ? (0, $2rqCk.deserializeState)(resumeFrom) : {};
        const operation = new $9dca3887842cd625$exports.GenericPollOperation(state, lro, !resolveOnUnsuccessful, lroResourceLocationConfig, processResult, updateState, isDone);
        super(operation);
        this.resolveOnUnsuccessful = resolveOnUnsuccessful;
        this.config = {
            intervalInMs: intervalInMs
        };
        operation.setPollerConfig(this.config);
    }
    /**
     * The method used by the poller to wait before attempting to update its operation.
     */ delay() {
        return new Promise((resolve)=>setTimeout(()=>resolve(), this.config.intervalInMs));
    }
}
module.exports.LroEngine = $4cf3a0c66c4a8d6d$var$LroEngine;


//# sourceMappingURL=lroEngine.9a06b451.js.map
