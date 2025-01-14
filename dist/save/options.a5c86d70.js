require("./core.da66a1bd.js");


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
var $e4f067ac9ddc6dec$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $e4f067ac9ddc6dec$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e4f067ac9ddc6dec$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e4f067ac9ddc6dec$var$__createBinding(result, mod, k);
    }
    $e4f067ac9ddc6dec$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getDownloadOptions = module.exports.getUploadOptions = void 0;

const $e4f067ac9ddc6dec$var$core = $e4f067ac9ddc6dec$var$__importStar((parcelRequire("1irLk")));
/**
 * Returns a copy of the upload options with defaults filled in.
 *
 * @param copy the original upload options
 */ function $e4f067ac9ddc6dec$var$getUploadOptions(copy) {
    const result = {
        uploadConcurrency: 4,
        uploadChunkSize: 33554432
    };
    if (copy) {
        if (typeof copy.uploadConcurrency === 'number') result.uploadConcurrency = copy.uploadConcurrency;
        if (typeof copy.uploadChunkSize === 'number') result.uploadChunkSize = copy.uploadChunkSize;
    }
    $e4f067ac9ddc6dec$var$core.debug(`Upload concurrency: ${result.uploadConcurrency}`);
    $e4f067ac9ddc6dec$var$core.debug(`Upload chunk size: ${result.uploadChunkSize}`);
    return result;
}
module.exports.getUploadOptions = $e4f067ac9ddc6dec$var$getUploadOptions;
/**
 * Returns a copy of the download options with defaults filled in.
 *
 * @param copy the original download options
 */ function $e4f067ac9ddc6dec$var$getDownloadOptions(copy) {
    const result = {
        useAzureSdk: true,
        downloadConcurrency: 8,
        timeoutInMs: 30000,
        segmentTimeoutInMs: 600000,
        lookupOnly: false
    };
    if (copy) {
        if (typeof copy.useAzureSdk === 'boolean') result.useAzureSdk = copy.useAzureSdk;
        if (typeof copy.downloadConcurrency === 'number') result.downloadConcurrency = copy.downloadConcurrency;
        if (typeof copy.timeoutInMs === 'number') result.timeoutInMs = copy.timeoutInMs;
        if (typeof copy.segmentTimeoutInMs === 'number') result.segmentTimeoutInMs = copy.segmentTimeoutInMs;
        if (typeof copy.lookupOnly === 'boolean') result.lookupOnly = copy.lookupOnly;
    }
    const segmentDownloadTimeoutMins = process.env['SEGMENT_DOWNLOAD_TIMEOUT_MINS'];
    if (segmentDownloadTimeoutMins && !isNaN(Number(segmentDownloadTimeoutMins)) && isFinite(Number(segmentDownloadTimeoutMins))) result.segmentTimeoutInMs = Number(segmentDownloadTimeoutMins) * 60000;
    $e4f067ac9ddc6dec$var$core.debug(`Use Azure SDK: ${result.useAzureSdk}`);
    $e4f067ac9ddc6dec$var$core.debug(`Download concurrency: ${result.downloadConcurrency}`);
    $e4f067ac9ddc6dec$var$core.debug(`Request timeout (ms): ${result.timeoutInMs}`);
    $e4f067ac9ddc6dec$var$core.debug(`Cache segment download timeout mins env var: ${process.env['SEGMENT_DOWNLOAD_TIMEOUT_MINS']}`);
    $e4f067ac9ddc6dec$var$core.debug(`Segment download timeout (ms): ${result.segmentTimeoutInMs}`);
    $e4f067ac9ddc6dec$var$core.debug(`Lookup only: ${result.lookupOnly}`);
    return result;
}
module.exports.getDownloadOptions = $e4f067ac9ddc6dec$var$getDownloadOptions;


