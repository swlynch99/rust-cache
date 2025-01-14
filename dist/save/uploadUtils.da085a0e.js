require("./core.fa35ff64.js");
require("./Clients.61a58f07.js");
require("./errors.d1ffffcc.js");


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
var $17e1ab44d9838de6$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $17e1ab44d9838de6$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $17e1ab44d9838de6$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $17e1ab44d9838de6$var$__createBinding(result, mod, k);
    }
    $17e1ab44d9838de6$var$__setModuleDefault(result, mod);
    return result;
};
var $17e1ab44d9838de6$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $17e1ab44d9838de6$var$core = $17e1ab44d9838de6$var$__importStar((parcelRequire("AJTaV")));
var $e36ed3c1f289b4db$exports = {};
$e36ed3c1f289b4db$exports = new URL("Clients.61a58f07.js", "file:" + __filename).toString();


var $f5de4a95dfe5c4a3$exports = {};
$f5de4a95dfe5c4a3$exports = new URL("errors.d1ffffcc.js", "file:" + __filename).toString();


/**
 * Class for tracking the upload state and displaying stats.
 */ class $17e1ab44d9838de6$var$UploadProgress {
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
        $17e1ab44d9838de6$var$core.info(`Sent ${transferredBytes} of ${this.contentLength} (${percentage}%), ${uploadSpeed} MBs/sec`);
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
module.exports.UploadProgress = $17e1ab44d9838de6$var$UploadProgress;
/**
 * Uploads a cache archive directly to Azure Blob Storage using the Azure SDK.
 * This function will display progress information to the console. Concurrency of the
 * upload is determined by the calling functions.
 *
 * @param signedUploadURL
 * @param archivePath
 * @param options
 * @returns
 */ function $17e1ab44d9838de6$var$uploadCacheArchiveSDK(signedUploadURL, archivePath, options) {
    var _a;
    return $17e1ab44d9838de6$var$__awaiter(this, void 0, void 0, function*() {
        const blobClient = new $e36ed3c1f289b4db$exports.BlobClient(signedUploadURL);
        const blockBlobClient = blobClient.getBlockBlobClient();
        const uploadProgress = new $17e1ab44d9838de6$var$UploadProgress((_a = options === null || options === void 0 ? void 0 : options.archiveSizeBytes) !== null && _a !== void 0 ? _a : 0);
        // Specify data transfer options
        const uploadOptions = {
            blockSize: options === null || options === void 0 ? void 0 : options.uploadChunkSize,
            concurrency: options === null || options === void 0 ? void 0 : options.uploadConcurrency,
            maxSingleShotSize: 134217728,
            onProgress: uploadProgress.onProgress()
        };
        try {
            uploadProgress.startDisplayTimer();
            $17e1ab44d9838de6$var$core.debug(`BlobClient: ${blobClient.name}:${blobClient.accountName}:${blobClient.containerName}`);
            const response = yield blockBlobClient.uploadFile(archivePath, uploadOptions);
            // TODO: better management of non-retryable errors
            if (response._response.status >= 400) throw new $f5de4a95dfe5c4a3$exports.InvalidResponseError(`uploadCacheArchiveSDK: upload failed with status code ${response._response.status}`);
            return response;
        } catch (error) {
            $17e1ab44d9838de6$var$core.warning(`uploadCacheArchiveSDK: internal error uploading cache archive: ${error.message}`);
            throw error;
        } finally{
            uploadProgress.stopDisplayTimer();
        }
    });
}
module.exports.uploadCacheArchiveSDK = $17e1ab44d9838de6$var$uploadCacheArchiveSDK;


//# sourceMappingURL=uploadUtils.da085a0e.js.map
