require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./Clients.61a58f07.js");
require("./cacheUtils.009fabc1.js");
require("./constants.e122b271.js");
require("./requestUtils.22d5c35b.js");
require("./AbortController.e4a78597.js");
var $hWlCk$buffer = require("buffer");
var $hWlCk$fs = require("fs");
var $hWlCk$stream = require("stream");
var $hWlCk$util = require("util");


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
var $400c70c323312e15$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $400c70c323312e15$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $400c70c323312e15$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $400c70c323312e15$var$__createBinding(result, mod, k);
    }
    $400c70c323312e15$var$__setModuleDefault(result, mod);
    return result;
};
var $400c70c323312e15$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.downloadCacheStorageSDK = module.exports.downloadCacheHttpClientConcurrent = module.exports.downloadCacheHttpClient = module.exports.DownloadProgress = void 0;

const $400c70c323312e15$var$core = $400c70c323312e15$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

var $6q1bv = parcelRequire("6q1bv");

const $400c70c323312e15$var$buffer = $400c70c323312e15$var$__importStar($hWlCk$buffer);

const $400c70c323312e15$var$fs = $400c70c323312e15$var$__importStar($hWlCk$fs);

const $400c70c323312e15$var$stream = $400c70c323312e15$var$__importStar($hWlCk$stream);

const $400c70c323312e15$var$util = $400c70c323312e15$var$__importStar($hWlCk$util);

const $400c70c323312e15$var$utils = $400c70c323312e15$var$__importStar((parcelRequire("3kiUl")));

var $86UTl = parcelRequire("86UTl");
var $15583ba0b89ebe13$exports = {};
$15583ba0b89ebe13$exports = new URL("requestUtils.22d5c35b.js", "file:" + __filename).toString();


var $9a71177f62efbc53$exports = {};
$9a71177f62efbc53$exports = new URL("AbortController.e4a78597.js", "file:" + __filename).toString();


/**
 * Pipes the body of a HTTP response to a stream
 *
 * @param response the HTTP response
 * @param output the writable stream
 */ function $400c70c323312e15$var$pipeResponseToStream(response, output) {
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const pipeline = $400c70c323312e15$var$util.promisify($400c70c323312e15$var$stream.pipeline);
        yield pipeline(response.message, output);
    });
}
/**
 * Class for tracking the download state and displaying stats.
 */ class $400c70c323312e15$var$DownloadProgress {
    constructor(contentLength){
        this.contentLength = contentLength;
        this.segmentIndex = 0;
        this.segmentSize = 0;
        this.segmentOffset = 0;
        this.receivedBytes = 0;
        this.displayedComplete = false;
        this.startTime = Date.now();
    }
    /**
     * Progress to the next segment. Only call this method when the previous segment
     * is complete.
     *
     * @param segmentSize the length of the next segment
     */ nextSegment(segmentSize) {
        this.segmentOffset = this.segmentOffset + this.segmentSize;
        this.segmentIndex = this.segmentIndex + 1;
        this.segmentSize = segmentSize;
        this.receivedBytes = 0;
        $400c70c323312e15$var$core.debug(`Downloading segment at offset ${this.segmentOffset} with length ${this.segmentSize}...`);
    }
    /**
     * Sets the number of bytes received for the current segment.
     *
     * @param receivedBytes the number of bytes received
     */ setReceivedBytes(receivedBytes) {
        this.receivedBytes = receivedBytes;
    }
    /**
     * Returns the total number of bytes transferred.
     */ getTransferredBytes() {
        return this.segmentOffset + this.receivedBytes;
    }
    /**
     * Returns true if the download is complete.
     */ isDone() {
        return this.getTransferredBytes() === this.contentLength;
    }
    /**
     * Prints the current download stats. Once the download completes, this will print one
     * last line and then stop.
     */ display() {
        if (this.displayedComplete) return;
        const transferredBytes = this.segmentOffset + this.receivedBytes;
        const percentage = (100 * (transferredBytes / this.contentLength)).toFixed(1);
        const elapsedTime = Date.now() - this.startTime;
        const downloadSpeed = (transferredBytes / 1048576 / (elapsedTime / 1000)).toFixed(1);
        $400c70c323312e15$var$core.info(`Received ${transferredBytes} of ${this.contentLength} (${percentage}%), ${downloadSpeed} MBs/sec`);
        if (this.isDone()) this.displayedComplete = true;
    }
    /**
     * Returns a function used to handle TransferProgressEvents.
     */ onProgress() {
        return (progress)=>{
            this.setReceivedBytes(progress.loadedBytes);
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
     * Stops the timer that displays the stats. As this typically indicates the download
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
module.exports.DownloadProgress = $400c70c323312e15$var$DownloadProgress;
/**
 * Download the cache using the Actions toolkit http-client
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */ function $400c70c323312e15$var$downloadCacheHttpClient(archiveLocation, archivePath) {
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const writeStream = $400c70c323312e15$var$fs.createWriteStream(archivePath);
        const httpClient = new $14jHk.HttpClient('actions/cache');
        const downloadResponse = yield (0, $15583ba0b89ebe13$exports.retryHttpClientResponse)('downloadCache', ()=>$400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.get(archiveLocation);
            }));
        // Abort download if no traffic received over the socket.
        downloadResponse.message.socket.setTimeout($86UTl.SocketTimeout, ()=>{
            downloadResponse.message.destroy();
            $400c70c323312e15$var$core.debug(`Aborting download, socket timed out after ${$86UTl.SocketTimeout} ms`);
        });
        yield $400c70c323312e15$var$pipeResponseToStream(downloadResponse, writeStream);
        // Validate download size.
        const contentLengthHeader = downloadResponse.message.headers['content-length'];
        if (contentLengthHeader) {
            const expectedLength = parseInt(contentLengthHeader);
            const actualLength = $400c70c323312e15$var$utils.getArchiveFileSizeInBytes(archivePath);
            if (actualLength !== expectedLength) throw new Error(`Incomplete download. Expected file size: ${expectedLength}, actual file size: ${actualLength}`);
        } else $400c70c323312e15$var$core.debug('Unable to validate download, no Content-Length header');
    });
}
module.exports.downloadCacheHttpClient = $400c70c323312e15$var$downloadCacheHttpClient;
/**
 * Download the cache using the Actions toolkit http-client concurrently
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */ function $400c70c323312e15$var$downloadCacheHttpClientConcurrent(archiveLocation, archivePath, options) {
    var _a;
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const archiveDescriptor = yield $400c70c323312e15$var$fs.promises.open(archivePath, 'w');
        const httpClient = new $14jHk.HttpClient('actions/cache', undefined, {
            socketTimeout: options.timeoutInMs,
            keepAlive: true
        });
        try {
            const res = yield (0, $15583ba0b89ebe13$exports.retryHttpClientResponse)('downloadCacheMetadata', ()=>$400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
                    return yield httpClient.request('HEAD', archiveLocation, null, {});
                }));
            const lengthHeader = res.message.headers['content-length'];
            if (lengthHeader === undefined || lengthHeader === null) throw new Error('Content-Length not found on blob response');
            const length = parseInt(lengthHeader);
            if (Number.isNaN(length)) throw new Error(`Could not interpret Content-Length: ${length}`);
            const downloads = [];
            const blockSize = 4194304;
            for(let offset = 0; offset < length; offset += blockSize){
                const count = Math.min(blockSize, length - offset);
                downloads.push({
                    offset: offset,
                    promiseGetter: ()=>$400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
                            return yield $400c70c323312e15$var$downloadSegmentRetry(httpClient, archiveLocation, offset, count);
                        })
                });
            }
            // reverse to use .pop instead of .shift
            downloads.reverse();
            let actives = 0;
            let bytesDownloaded = 0;
            const progress = new $400c70c323312e15$var$DownloadProgress(length);
            progress.startDisplayTimer();
            const progressFn = progress.onProgress();
            const activeDownloads = [];
            let nextDownload;
            const waitAndWrite = ()=>$400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
                    const segment = yield Promise.race(Object.values(activeDownloads));
                    yield archiveDescriptor.write(segment.buffer, 0, segment.count, segment.offset);
                    actives--;
                    delete activeDownloads[segment.offset];
                    bytesDownloaded += segment.count;
                    progressFn({
                        loadedBytes: bytesDownloaded
                    });
                });
            while(nextDownload = downloads.pop()){
                activeDownloads[nextDownload.offset] = nextDownload.promiseGetter();
                actives++;
                if (actives >= ((_a = options.downloadConcurrency) !== null && _a !== void 0 ? _a : 10)) yield waitAndWrite();
            }
            while(actives > 0)yield waitAndWrite();
        } finally{
            httpClient.dispose();
            yield archiveDescriptor.close();
        }
    });
}
module.exports.downloadCacheHttpClientConcurrent = $400c70c323312e15$var$downloadCacheHttpClientConcurrent;
function $400c70c323312e15$var$downloadSegmentRetry(httpClient, archiveLocation, offset, count) {
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const retries = 5;
        let failures = 0;
        while(true)try {
            const timeout = 30000;
            const result = yield $400c70c323312e15$var$promiseWithTimeout(timeout, $400c70c323312e15$var$downloadSegment(httpClient, archiveLocation, offset, count));
            if (typeof result === 'string') throw new Error('downloadSegmentRetry failed due to timeout');
            return result;
        } catch (err) {
            if (failures >= retries) throw err;
            failures++;
        }
    });
}
function $400c70c323312e15$var$downloadSegment(httpClient, archiveLocation, offset, count) {
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const partRes = yield (0, $15583ba0b89ebe13$exports.retryHttpClientResponse)('downloadCachePart', ()=>$400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
                return yield httpClient.get(archiveLocation, {
                    Range: `bytes=${offset}-${offset + count - 1}`
                });
            }));
        if (!partRes.readBodyBuffer) throw new Error('Expected HttpClientResponse to implement readBodyBuffer');
        return {
            offset: offset,
            count: count,
            buffer: yield partRes.readBodyBuffer()
        };
    });
}
/**
 * Download the cache using the Azure Storage SDK.  Only call this method if the
 * URL points to an Azure Storage endpoint.
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 * @param options the download options with the defaults set
 */ function $400c70c323312e15$var$downloadCacheStorageSDK(archiveLocation, archivePath, options) {
    var _a;
    return $400c70c323312e15$var$__awaiter(this, void 0, void 0, function*() {
        const client = new $6q1bv.BlockBlobClient(archiveLocation, undefined, {
            retryOptions: {
                // Override the timeout used when downloading each 4 MB chunk
                // The default is 2 min / MB, which is way too slow
                tryTimeoutInMs: options.timeoutInMs
            }
        });
        const properties = yield client.getProperties();
        const contentLength = (_a = properties.contentLength) !== null && _a !== void 0 ? _a : -1;
        if (contentLength < 0) {
            // We should never hit this condition, but just in case fall back to downloading the
            // file as one large stream
            $400c70c323312e15$var$core.debug('Unable to determine content length, downloading file with http-client...');
            yield $400c70c323312e15$var$downloadCacheHttpClient(archiveLocation, archivePath);
        } else {
            // Use downloadToBuffer for faster downloads, since internally it splits the
            // file into 4 MB chunks which can then be parallelized and retried independently
            //
            // If the file exceeds the buffer maximum length (~1 GB on 32-bit systems and ~2 GB
            // on 64-bit systems), split the download into multiple segments
            // ~2 GB = 2147483647, beyond this, we start getting out of range error. So, capping it accordingly.
            // Updated segment size to 128MB = 134217728 bytes, to complete a segment faster and fail fast
            const maxSegmentSize = Math.min(134217728, $400c70c323312e15$var$buffer.constants.MAX_LENGTH);
            const downloadProgress = new $400c70c323312e15$var$DownloadProgress(contentLength);
            const fd = $400c70c323312e15$var$fs.openSync(archivePath, 'w');
            try {
                downloadProgress.startDisplayTimer();
                const controller = new $9a71177f62efbc53$exports.AbortController();
                const abortSignal = controller.signal;
                while(!downloadProgress.isDone()){
                    const segmentStart = downloadProgress.segmentOffset + downloadProgress.segmentSize;
                    const segmentSize = Math.min(maxSegmentSize, contentLength - segmentStart);
                    downloadProgress.nextSegment(segmentSize);
                    const result = yield $400c70c323312e15$var$promiseWithTimeout(options.segmentTimeoutInMs || 3600000, client.downloadToBuffer(segmentStart, segmentSize, {
                        abortSignal: abortSignal,
                        concurrency: options.downloadConcurrency,
                        onProgress: downloadProgress.onProgress()
                    }));
                    if (result === 'timeout') {
                        controller.abort();
                        throw new Error('Aborting cache download as the download time exceeded the timeout.');
                    } else if (Buffer.isBuffer(result)) $400c70c323312e15$var$fs.writeFileSync(fd, result);
                }
            } finally{
                downloadProgress.stopDisplayTimer();
                $400c70c323312e15$var$fs.closeSync(fd);
            }
        }
    });
}
module.exports.downloadCacheStorageSDK = $400c70c323312e15$var$downloadCacheStorageSDK;
const $400c70c323312e15$var$promiseWithTimeout = (timeoutMs, promise)=>$400c70c323312e15$var$__awaiter(void 0, void 0, void 0, function*() {
        let timeoutHandle;
        const timeoutPromise = new Promise((resolve)=>{
            timeoutHandle = setTimeout(()=>resolve('timeout'), timeoutMs);
        });
        return Promise.race([
            promise,
            timeoutPromise
        ]).then((result)=>{
            clearTimeout(timeoutHandle);
            return result;
        });
    });


//# sourceMappingURL=downloadUtils.7c9078aa.js.map
