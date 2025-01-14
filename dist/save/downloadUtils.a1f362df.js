require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./cacheUtils.fb4919b4.js");
require("./constants.3a1f1756.js");
require("./requestUtils.97b82bb9.js");
var $1Z3ZF$fs = require("fs");
var $1Z3ZF$fspromises = require("fs/promises");
var $1Z3ZF$stream = require("stream");
var $1Z3ZF$util = require("util");


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
var $e249c8f773e2901e$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $e249c8f773e2901e$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $e249c8f773e2901e$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $e249c8f773e2901e$var$__createBinding(result, mod, k);
    }
    $e249c8f773e2901e$var$__setModuleDefault(result, mod);
    return result;
};
var $e249c8f773e2901e$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.downloadCacheHttpClient = module.exports.downloadCachMultiConnection = module.exports.DownloadProgress = void 0;

const $e249c8f773e2901e$var$core = $e249c8f773e2901e$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

const $e249c8f773e2901e$var$fs = $e249c8f773e2901e$var$__importStar($1Z3ZF$fs);

const $e249c8f773e2901e$var$fsPromises = $e249c8f773e2901e$var$__importStar($1Z3ZF$fspromises);

const $e249c8f773e2901e$var$stream = $e249c8f773e2901e$var$__importStar($1Z3ZF$stream);

const $e249c8f773e2901e$var$util = $e249c8f773e2901e$var$__importStar($1Z3ZF$util);

const $e249c8f773e2901e$var$utils = $e249c8f773e2901e$var$__importStar((parcelRequire("5Nzbd")));

var $5ZPb5 = parcelRequire("5ZPb5");
var $ab61da82790822b5$exports = {};
$ab61da82790822b5$exports = new URL("requestUtils.97b82bb9.js", "file:" + __filename).toString();


/**
 * Pipes the body of a HTTP response to a stream
 *
 * @param response the HTTP response
 * @param output the writable stream
 */ function $e249c8f773e2901e$var$pipeResponseToStream(response, output, progress) {
    return $e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
        const pipeline = $e249c8f773e2901e$var$util.promisify($e249c8f773e2901e$var$stream.pipeline);
        yield pipeline(response.message, new $e249c8f773e2901e$var$stream.Transform({
            transform (chunk, encoding, callback) {
                if (progress) progress.setReceivedBytes(progress.getTransferredBytes() + chunk.length);
                this.push(chunk);
                callback();
            }
        }), output);
    });
}
/**
 * Class for tracking the download state and displaying stats.
 */ class $e249c8f773e2901e$var$DownloadProgress {
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
        $e249c8f773e2901e$var$core.debug(`Downloading segment at offset ${this.segmentOffset} with length ${this.segmentSize}...`);
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
        $e249c8f773e2901e$var$core.info(`Received ${transferredBytes} of ${this.contentLength} (${percentage}%), ${downloadSpeed} MBs/sec`);
        if (this.isDone()) this.displayedComplete = true;
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
module.exports.DownloadProgress = $e249c8f773e2901e$var$DownloadProgress;
/**
 * Download the cache using the Actions toolkit http-client with multiple connections
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 * @param connections number of connections to use
 */ function $e249c8f773e2901e$var$downloadCachMultiConnection(archiveLocation, archivePath, connections) {
    return $e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
        let fileHandle;
        let downloadProgress;
        try {
            fileHandle = yield $e249c8f773e2901e$var$fsPromises.open(archivePath, 'w+');
            const httpClient = new $14jHk.HttpClient('actions/cache');
            //Request 1 byte to get total content size
            const metadataResponse = yield (0, $ab61da82790822b5$exports.retryHttpClientResponse)('downloadCache', ()=>$e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
                    return httpClient.get(archiveLocation, {
                        Range: 'bytes=0-1'
                    });
                }));
            const contentRange = metadataResponse.message.headers['content-range'];
            if (!contentRange) {
                console.log((yield metadataResponse.readBody()));
                throw new Error("Range request not supported by server");
            }
            const match = contentRange === null || contentRange === void 0 ? void 0 : contentRange.match(/bytes \d+-\d+\/(\d+)/);
            if (!match) throw new Error("Content-Range header in server response not in correct format");
            const totalLength = parseInt(match[1]);
            yield fileHandle.truncate(totalLength);
            yield fileHandle.sync();
            downloadProgress = new $e249c8f773e2901e$var$DownloadProgress(totalLength);
            downloadProgress.startDisplayTimer();
            const segmentSize = Math.ceil(totalLength / connections);
            const promises = [];
            for(let i = 0; i < connections; i++)promises.push((()=>$e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
                    const rangeStart = i * segmentSize;
                    const rangeEnd = Math.min((i + 1) * segmentSize - 1, totalLength - 1);
                    const downloadResponse = yield (0, $ab61da82790822b5$exports.retryHttpClientResponse)('downloadCache', ()=>$e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
                            return httpClient.get(archiveLocation, {
                                Range: `bytes=${rangeStart}-${rangeEnd}`
                            });
                        }));
                    const writeStream = $e249c8f773e2901e$var$fs.createWriteStream(archiveLocation, {
                        fd: fileHandle.fd,
                        autoClose: false,
                        start: rangeStart
                    });
                    yield $e249c8f773e2901e$var$pipeResponseToStream(downloadResponse, writeStream, downloadProgress);
                }))());
            yield Promise.all(promises);
        } finally{
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.stopDisplayTimer();
            yield fileHandle === null || fileHandle === void 0 ? void 0 : fileHandle.close();
        }
    });
}
module.exports.downloadCachMultiConnection = $e249c8f773e2901e$var$downloadCachMultiConnection;
/**
 * Download the cache using the Actions toolkit http-client
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */ function $e249c8f773e2901e$var$downloadCacheHttpClient(archiveLocation, archivePath) {
    return $e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
        const writeStream = $e249c8f773e2901e$var$fs.createWriteStream(archivePath);
        const httpClient = new $14jHk.HttpClient('actions/cache');
        const downloadResponse = yield (0, $ab61da82790822b5$exports.retryHttpClientResponse)('downloadCache', ()=>$e249c8f773e2901e$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.get(archiveLocation);
            }));
        const contentLengthHeader = downloadResponse.message.headers['content-length'];
        let downloadProgress;
        if (contentLengthHeader) downloadProgress = new $e249c8f773e2901e$var$DownloadProgress(parseInt(contentLengthHeader));
        // Abort download if no traffic received over the socket.
        downloadResponse.message.socket.setTimeout($5ZPb5.SocketTimeout, ()=>{
            downloadResponse.message.destroy();
            $e249c8f773e2901e$var$core.debug(`Aborting download, socket timed out after ${$5ZPb5.SocketTimeout} ms`);
        });
        try {
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.startDisplayTimer();
            yield $e249c8f773e2901e$var$pipeResponseToStream(downloadResponse, writeStream, downloadProgress);
        } finally{
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.startDisplayTimer();
        }
        // Validate download size.
        if (contentLengthHeader) {
            const expectedLength = parseInt(contentLengthHeader);
            const actualLength = $e249c8f773e2901e$var$utils.getArchiveFileSizeInBytes(archivePath);
            if (actualLength !== expectedLength) throw new Error(`Incomplete download. Expected file size: ${expectedLength}, actual file size: ${actualLength}`);
        } else $e249c8f773e2901e$var$core.debug('Unable to validate download, no Content-Length header');
    });
}
module.exports.downloadCacheHttpClient = $e249c8f773e2901e$var$downloadCacheHttpClient;
const $e249c8f773e2901e$var$promiseWithTimeout = (timeoutMs, promise)=>$e249c8f773e2901e$var$__awaiter(void 0, void 0, void 0, function*() {
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


//# sourceMappingURL=downloadUtils.a1f362df.js.map
