require("./build.00613a08.js");


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
module.exports.clear = $fe485bd70c1eba2a$var$clear;
module.exports.getEnv = $fe485bd70c1eba2a$var$getEnv;

var $gRBfr = parcelRequire("gRBfr");
var $fe485bd70c1eba2a$var$GCPEnv;
(function(GCPEnv) {
    GCPEnv["APP_ENGINE"] = "APP_ENGINE";
    GCPEnv["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
    GCPEnv["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
    GCPEnv["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
    GCPEnv["CLOUD_RUN"] = "CLOUD_RUN";
    GCPEnv["NONE"] = "NONE";
})($fe485bd70c1eba2a$var$GCPEnv || (module.exports.GCPEnv = $fe485bd70c1eba2a$var$GCPEnv = {}));
let $fe485bd70c1eba2a$var$envPromise;
function $fe485bd70c1eba2a$var$clear() {
    $fe485bd70c1eba2a$var$envPromise = undefined;
}
async function $fe485bd70c1eba2a$var$getEnv() {
    if ($fe485bd70c1eba2a$var$envPromise) return $fe485bd70c1eba2a$var$envPromise;
    $fe485bd70c1eba2a$var$envPromise = $fe485bd70c1eba2a$var$getEnvMemoized();
    return $fe485bd70c1eba2a$var$envPromise;
}
async function $fe485bd70c1eba2a$var$getEnvMemoized() {
    let env = $fe485bd70c1eba2a$var$GCPEnv.NONE;
    if ($fe485bd70c1eba2a$var$isAppEngine()) env = $fe485bd70c1eba2a$var$GCPEnv.APP_ENGINE;
    else if ($fe485bd70c1eba2a$var$isCloudFunction()) env = $fe485bd70c1eba2a$var$GCPEnv.CLOUD_FUNCTIONS;
    else if (await $fe485bd70c1eba2a$var$isComputeEngine()) {
        if (await $fe485bd70c1eba2a$var$isKubernetesEngine()) env = $fe485bd70c1eba2a$var$GCPEnv.KUBERNETES_ENGINE;
        else if ($fe485bd70c1eba2a$var$isCloudRun()) env = $fe485bd70c1eba2a$var$GCPEnv.CLOUD_RUN;
        else env = $fe485bd70c1eba2a$var$GCPEnv.COMPUTE_ENGINE;
    } else env = $fe485bd70c1eba2a$var$GCPEnv.NONE;
    return env;
}
function $fe485bd70c1eba2a$var$isAppEngine() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
}
function $fe485bd70c1eba2a$var$isCloudFunction() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
}
/**
 * This check only verifies that the environment is running knative.
 * This must be run *after* checking for Kubernetes, otherwise it will
 * return a false positive.
 */ function $fe485bd70c1eba2a$var$isCloudRun() {
    return !!process.env.K_CONFIGURATION;
}
async function $fe485bd70c1eba2a$var$isKubernetesEngine() {
    try {
        await $gRBfr.instance('attributes/cluster-name');
        return true;
    } catch (e) {
        return false;
    }
}
async function $fe485bd70c1eba2a$var$isComputeEngine() {
    return $gRBfr.isAvailable();
}


