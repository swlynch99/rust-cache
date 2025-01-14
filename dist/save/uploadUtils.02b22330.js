require("./core.da66a1bd.js");
require("./Clients.2d8e13d5.js");
require("./errors.dc1ca1e5.js");


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
var $b2bed965b36bf973$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $b2bed965b36bf973$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b2bed965b36bf973$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $b2bed965b36bf973$var$__createBinding(result, mod, k);
    }
    $b2bed965b36bf973$var$__setModuleDefault(result, mod);
    return result;
};
var $b2bed965b36bf973$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.uploadCacheArchiveSDK = module.exports.UploadProgress = void 0;

const $b2bed965b36bf973$var$core = $b2bed965b36bf973$var$__importStar((parcelRequire("1irLk")));
var $ddbc8f9a6a183148$exports = {};
$ddbc8f9a6a183148$exports = new URL("Clients.2d8e13d5.js", "file:" + __filename).toString();


var $6818f9f5e398e0cc$exports = {};
$6818f9f5e398e0cc$exports = new URL("errors.dc1ca1e5.js", "file:" + __filename).toString();


/**
 * Class for tracking the upload state and displaying stats.
 */ class $b2bed965b36bf973$var$UploadProgress {
    constructor(contentLength){
        this.contentLength = contentLength;
        this.sentBytes = 0;
        this.displayedComplete = false;
        this.startTime = Date.now();
    }
    /**
     * Sets the number of bytes sent
     *
     * @param sentBytes the number of bytes sent
     */ setSentBytes(sentBytes) {
        this.sentBytes = sentBytes;
    }
    /**
     * Returns the total number of bytes transferred.
     */ getTransferredBytes() {
        return this.sentBytes;
    }
    /**
     * Returns true if the upload is complete.
     */ isDone() {
        return this.getTransferredBytes() === this.contentLength;
    }
    /**
     * Prints the current upload stats. Once the upload completes, this will print one
     * last line and then stop.
     */ display() {
        if (this.displayedComplete) return;
        const transferredBytes = this.sentBytes;
        const percentage = (100 * (transferredBytes / this.contentLength)).toFixed(1);
        const elapsedTime = Date.now() - this.startTime;
        const uploadSpeed = (transferredBytes / 1048576 / (elapsedTime / 1000)).toFixed(1);
        $b2bed965b36bf973$var$core.info(`Sent ${transferredBytes} of ${this.contentLength} (${percentage}%), ${uploadSpeed} MBs/sec`);
        if (this.isDone()) this.displayedComplete = true;
    }
    /**
     * Returns a function used to handle TransferProgressEvents.
     */ onProgress() {
        return (progress)=>{
            this.setSentBytes(progress.loadedBytes);
        };
    }
    /**
     * Starts the timer that displays the stats.
     *
     * @param delayInMs the delay between each write
     */ startDisplayTimer(delayInMs = 1000) {
        const displayCallback = ()=>{
            this.display();
            if (!this.isDone()) this.timeoutHandle = setTimeout(displayCallback, delayInMs);
        };
        this.timeoutHandle = setTimeout(displayCallback, delayInMs);
    }
    /**
     * Stops the timer that displays the stats. As this typically indicates the upload
     * is complete, this will display one last line, unless the last line has already
     * been written.
     */ stopDisplayTimer() {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = undefined;
        }
        this.display();
    }
}
module.exports.UploadProgress = $b2bed965b36bf973$var$UploadProgress;
/**
 * Uploads a cache archive directly to Azure Blob Storage using the Azure SDK.
 * This function will display progress information to the console. Concurrency of the
 * upload is determined by the calling functions.
 *
 * @param signedUploadURL
 * @param archivePath
 * @param options
 * @returns
 */ function $b2bed965b36bf973$var$uploadCacheArchiveSDK(signedUploadURL, archivePath, options) {
    var _a;
    return $b2bed965b36bf973$var$__awaiter(this, void 0, void 0, function*() {
        const blobClient = new $ddbc8f9a6a183148$exports.BlobClient(signedUploadURL);
        const blockBlobClient = blobClient.getBlockBlobClient();
        const uploadProgress = new $b2bed965b36bf973$var$UploadProgress((_a = options === null || options === void 0 ? void 0 : options.archiveSizeBytes) !== null && _a !== void 0 ? _a : 0);
        // Specify data transfer options
        const uploadOptions = {
            blockSize: options === null || options === void 0 ? void 0 : options.uploadChunkSize,
            concurrency: options === null || options === void 0 ? void 0 : options.uploadConcurrency,
            maxSingleShotSize: 134217728,
            onProgress: uploadProgress.onProgress()
        };
        try {
            uploadProgress.startDisplayTimer();
            $b2bed965b36bf973$var$core.debug(`BlobClient: ${blobClient.name}:${blobClient.accountName}:${blobClient.containerName}`);
            const response = yield blockBlobClient.uploadFile(archivePath, uploadOptions);
            // TODO: better management of non-retryable errors
            if (response._response.status >= 400) throw new $6818f9f5e398e0cc$exports.InvalidResponseError(`uploadCacheArchiveSDK: upload failed with status code ${response._response.status}`);
            return response;
        } catch (error) {
            $b2bed965b36bf973$var$core.warning(`uploadCacheArchiveSDK: internal error uploading cache archive: ${error.message}`);
            throw error;
        } finally{
            uploadProgress.stopDisplayTimer();
        }
    });
}
module.exports.uploadCacheArchiveSDK = $b2bed965b36bf973$var$uploadCacheArchiveSDK;


