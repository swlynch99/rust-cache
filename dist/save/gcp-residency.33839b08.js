var $19ram$fs = require("fs");
var $19ram$os = require("os");


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
parcelRegister("aySkt", function(module, exports) {
"use strict";
/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.detectGCPResidency = module.exports.isGoogleComputeEngine = module.exports.isGoogleComputeEngineMACAddress = module.exports.isGoogleComputeEngineLinux = module.exports.isGoogleCloudServerless = module.exports.GCE_LINUX_BIOS_PATHS = void 0;


/**
 * Known paths unique to Google Compute Engine Linux instances
 */ module.exports.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: '/sys/class/dmi/id/bios_date',
    BIOS_VENDOR: '/sys/class/dmi/id/bios_vendor'
};
const $7b0739075c0b54b7$var$GCE_MAC_ADDRESS_REGEX = /^42:01/;
/**
 * Determines if the process is running on a Google Cloud Serverless environment (Cloud Run or Cloud Functions instance).
 *
 * Uses the:
 * - {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
 * - {@link https://cloud.google.com/functions/docs/env-var Cloud Functions environment variables}.
 *
 * @returns {boolean} `true` if the process is running on GCP serverless, `false` otherwise.
 */ function $7b0739075c0b54b7$var$isGoogleCloudServerless() {
    /**
     * `CLOUD_RUN_JOB` is used for Cloud Run Jobs
     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
     *
     * `FUNCTION_NAME` is used in older Cloud Functions environments:
     * - See {@link https://cloud.google.com/functions/docs/env-var Python 3.7 and Go 1.11}.
     *
     * `K_SERVICE` is used in Cloud Run and newer Cloud Functions environments:
     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
     * - See {@link https://cloud.google.com/functions/docs/env-var Cloud Functions newer runtimes}.
     */ const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
    return !!isGFEnvironment;
}
module.exports.isGoogleCloudServerless = $7b0739075c0b54b7$var$isGoogleCloudServerless;
/**
 * Determines if the process is running on a Linux Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on Linux GCE, `false` otherwise.
 */ function $7b0739075c0b54b7$var$isGoogleComputeEngineLinux() {
    if ((0, $19ram$os.platform)() !== 'linux') return false;
    try {
        // ensure this file exist
        (0, $19ram$fs.statSync)(module.exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        // ensure this file exist and matches
        const biosVendor = (0, $19ram$fs.readFileSync)(module.exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8');
        return /Google/.test(biosVendor);
    } catch (_a) {
        return false;
    }
}
module.exports.isGoogleComputeEngineLinux = $7b0739075c0b54b7$var$isGoogleComputeEngineLinux;
/**
 * Determines if the process is running on a Google Compute Engine instance with a known
 * MAC address.
 *
 * @returns {boolean} `true` if the process is running on GCE (as determined by MAC address), `false` otherwise.
 */ function $7b0739075c0b54b7$var$isGoogleComputeEngineMACAddress() {
    const interfaces = (0, $19ram$os.networkInterfaces)();
    for (const item of Object.values(interfaces)){
        if (!item) continue;
        for (const { mac: mac } of item){
            if ($7b0739075c0b54b7$var$GCE_MAC_ADDRESS_REGEX.test(mac)) return true;
        }
    }
    return false;
}
module.exports.isGoogleComputeEngineMACAddress = $7b0739075c0b54b7$var$isGoogleComputeEngineMACAddress;
/**
 * Determines if the process is running on a Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on GCE, `false` otherwise.
 */ function $7b0739075c0b54b7$var$isGoogleComputeEngine() {
    return $7b0739075c0b54b7$var$isGoogleComputeEngineLinux() || $7b0739075c0b54b7$var$isGoogleComputeEngineMACAddress();
}
module.exports.isGoogleComputeEngine = $7b0739075c0b54b7$var$isGoogleComputeEngine;
/**
 * Determines if the process is running on Google Cloud Platform.
 *
 * @returns {boolean} `true` if the process is running on GCP, `false` otherwise.
 */ function $7b0739075c0b54b7$var$detectGCPResidency() {
    return $7b0739075c0b54b7$var$isGoogleCloudServerless() || $7b0739075c0b54b7$var$isGoogleComputeEngine();
}
module.exports.detectGCPResidency = $7b0739075c0b54b7$var$detectGCPResidency;

});


//# sourceMappingURL=gcp-residency.33839b08.js.map
