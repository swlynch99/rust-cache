require("./operation.24f40171.js");
require("./constants.94590164.js");
require("./poller.67d6b047.js");
require("./operation.909a11a3.js");


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
var $ef1fad2dde372c2e$exports = {};
$ef1fad2dde372c2e$exports = new URL("operation.24f40171.js", "file:" + __filename).toString();



var $enhiB = parcelRequire("enhiB");
var $88c2fac0f80f157d$exports = {};
$88c2fac0f80f157d$exports = new URL("poller.67d6b047.js", "file:" + __filename).toString();



var $f9oNC = parcelRequire("f9oNC");
/**
 * The LRO Engine, a class that performs polling.
 */ class $7c6a2bad9432d6cc$var$LroEngine extends $88c2fac0f80f157d$exports.Poller {
    constructor(lro, options){
        const { intervalInMs: intervalInMs = $enhiB.POLL_INTERVAL_IN_MS, resumeFrom: resumeFrom, resolveOnUnsuccessful: resolveOnUnsuccessful = false, isDone: isDone, lroResourceLocationConfig: lroResourceLocationConfig, processResult: processResult, updateState: updateState } = options || {};
        const state = resumeFrom ? (0, $f9oNC.deserializeState)(resumeFrom) : {};
        const operation = new $ef1fad2dde372c2e$exports.GenericPollOperation(state, lro, !resolveOnUnsuccessful, lroResourceLocationConfig, processResult, updateState, isDone);
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
module.exports.LroEngine = $7c6a2bad9432d6cc$var$LroEngine;


