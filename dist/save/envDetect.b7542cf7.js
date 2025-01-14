require("./build.570a4f39.js");


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
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.GCPEnv = void 0;
module.exports.clear = $fa2dd86b93497ae1$var$clear;
module.exports.getEnv = $fa2dd86b93497ae1$var$getEnv;

var $6PJJI = parcelRequire("6PJJI");
var $fa2dd86b93497ae1$var$GCPEnv;
(function(GCPEnv) {
    GCPEnv["APP_ENGINE"] = "APP_ENGINE";
    GCPEnv["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
    GCPEnv["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
    GCPEnv["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
    GCPEnv["CLOUD_RUN"] = "CLOUD_RUN";
    GCPEnv["NONE"] = "NONE";
})($fa2dd86b93497ae1$var$GCPEnv || (module.exports.GCPEnv = $fa2dd86b93497ae1$var$GCPEnv = {}));
let $fa2dd86b93497ae1$var$envPromise;
function $fa2dd86b93497ae1$var$clear() {
    $fa2dd86b93497ae1$var$envPromise = undefined;
}
async function $fa2dd86b93497ae1$var$getEnv() {
    if ($fa2dd86b93497ae1$var$envPromise) return $fa2dd86b93497ae1$var$envPromise;
    $fa2dd86b93497ae1$var$envPromise = $fa2dd86b93497ae1$var$getEnvMemoized();
    return $fa2dd86b93497ae1$var$envPromise;
}
async function $fa2dd86b93497ae1$var$getEnvMemoized() {
    let env = $fa2dd86b93497ae1$var$GCPEnv.NONE;
    if ($fa2dd86b93497ae1$var$isAppEngine()) env = $fa2dd86b93497ae1$var$GCPEnv.APP_ENGINE;
    else if ($fa2dd86b93497ae1$var$isCloudFunction()) env = $fa2dd86b93497ae1$var$GCPEnv.CLOUD_FUNCTIONS;
    else if (await $fa2dd86b93497ae1$var$isComputeEngine()) {
        if (await $fa2dd86b93497ae1$var$isKubernetesEngine()) env = $fa2dd86b93497ae1$var$GCPEnv.KUBERNETES_ENGINE;
        else if ($fa2dd86b93497ae1$var$isCloudRun()) env = $fa2dd86b93497ae1$var$GCPEnv.CLOUD_RUN;
        else env = $fa2dd86b93497ae1$var$GCPEnv.COMPUTE_ENGINE;
    } else env = $fa2dd86b93497ae1$var$GCPEnv.NONE;
    return env;
}
function $fa2dd86b93497ae1$var$isAppEngine() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
}
function $fa2dd86b93497ae1$var$isCloudFunction() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
}
/**
 * This check only verifies that the environment is running knative.
 * This must be run *after* checking for Kubernetes, otherwise it will
 * return a false positive.
 */ function $fa2dd86b93497ae1$var$isCloudRun() {
    return !!process.env.K_CONFIGURATION;
}
async function $fa2dd86b93497ae1$var$isKubernetesEngine() {
    try {
        await $6PJJI.instance('attributes/cluster-name');
        return true;
    } catch (e) {
        return false;
    }
}
async function $fa2dd86b93497ae1$var$isComputeEngine() {
    return $6PJJI.isAvailable();
}


//# sourceMappingURL=envDetect.b7542cf7.js.map
