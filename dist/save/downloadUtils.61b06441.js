require("./core.da66a1bd.js");
require("./http-client.a6473211.js");
require("./cacheUtils.40d419af.js");
require("./constants.17ebc7c1.js");
require("./requestUtils.5cab342f.js");
var $bIEGL$fs = require("fs");
var $bIEGL$fspromises = require("fs/promises");
var $bIEGL$stream = require("stream");
var $bIEGL$util = require("util");


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
var $0aa0c43070f7c9ed$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0aa0c43070f7c9ed$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0aa0c43070f7c9ed$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $0aa0c43070f7c9ed$var$__createBinding(result, mod, k);
    }
    $0aa0c43070f7c9ed$var$__setModuleDefault(result, mod);
    return result;
};
var $0aa0c43070f7c9ed$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $0aa0c43070f7c9ed$var$core = $0aa0c43070f7c9ed$var$__importStar((parcelRequire("1irLk")));

var $jmQwl = parcelRequire("jmQwl");

const $0aa0c43070f7c9ed$var$fs = $0aa0c43070f7c9ed$var$__importStar($bIEGL$fs);

const $0aa0c43070f7c9ed$var$fsPromises = $0aa0c43070f7c9ed$var$__importStar($bIEGL$fspromises);

const $0aa0c43070f7c9ed$var$stream = $0aa0c43070f7c9ed$var$__importStar($bIEGL$stream);

const $0aa0c43070f7c9ed$var$util = $0aa0c43070f7c9ed$var$__importStar($bIEGL$util);

const $0aa0c43070f7c9ed$var$utils = $0aa0c43070f7c9ed$var$__importStar((parcelRequire("ecfnw")));

var $3osl1 = parcelRequire("3osl1");
var $450ea9633102a0d2$exports = {};
$450ea9633102a0d2$exports = new URL("requestUtils.5cab342f.js", "file:" + __filename).toString();


/**
 * Pipes the body of a HTTP response to a stream
 *
 * @param response the HTTP response
 * @param output the writable stream
 */ function $0aa0c43070f7c9ed$var$pipeResponseToStream(response, output, progress) {
    return $0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
        const pipeline = $0aa0c43070f7c9ed$var$util.promisify($0aa0c43070f7c9ed$var$stream.pipeline);
        yield pipeline(response.message, new $0aa0c43070f7c9ed$var$stream.Transform({
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
 */ class $0aa0c43070f7c9ed$var$DownloadProgress {
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
        $0aa0c43070f7c9ed$var$core.debug(`Downloading segment at offset ${this.segmentOffset} with length ${this.segmentSize}...`);
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
        $0aa0c43070f7c9ed$var$core.info(`Received ${transferredBytes} of ${this.contentLength} (${percentage}%), ${downloadSpeed} MBs/sec`);
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
module.exports.DownloadProgress = $0aa0c43070f7c9ed$var$DownloadProgress;
/**
 * Download the cache using the Actions toolkit http-client with multiple connections
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 * @param connections number of connections to use
 */ function $0aa0c43070f7c9ed$var$downloadCachMultiConnection(archiveLocation, archivePath, connections) {
    return $0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
        let fileHandle;
        let downloadProgress;
        try {
            fileHandle = yield $0aa0c43070f7c9ed$var$fsPromises.open(archivePath, 'w+');
            const httpClient = new $jmQwl.HttpClient('actions/cache');
            //Request 1 byte to get total content size
            const metadataResponse = yield (0, $450ea9633102a0d2$exports.retryHttpClientResponse)('downloadCache', ()=>$0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
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
            downloadProgress = new $0aa0c43070f7c9ed$var$DownloadProgress(totalLength);
            downloadProgress.startDisplayTimer();
            const segmentSize = Math.ceil(totalLength / connections);
            const promises = [];
            for(let i = 0; i < connections; i++)promises.push((()=>$0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
                    const rangeStart = i * segmentSize;
                    const rangeEnd = Math.min((i + 1) * segmentSize - 1, totalLength - 1);
                    const downloadResponse = yield (0, $450ea9633102a0d2$exports.retryHttpClientResponse)('downloadCache', ()=>$0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
                            return httpClient.get(archiveLocation, {
                                Range: `bytes=${rangeStart}-${rangeEnd}`
                            });
                        }));
                    const writeStream = $0aa0c43070f7c9ed$var$fs.createWriteStream(archiveLocation, {
                        fd: fileHandle.fd,
                        autoClose: false,
                        start: rangeStart
                    });
                    yield $0aa0c43070f7c9ed$var$pipeResponseToStream(downloadResponse, writeStream, downloadProgress);
                }))());
            yield Promise.all(promises);
        } finally{
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.stopDisplayTimer();
            yield fileHandle === null || fileHandle === void 0 ? void 0 : fileHandle.close();
        }
    });
}
module.exports.downloadCachMultiConnection = $0aa0c43070f7c9ed$var$downloadCachMultiConnection;
/**
 * Download the cache using the Actions toolkit http-client
 *
 * @param archiveLocation the URL for the cache
 * @param archivePath the local path where the cache is saved
 */ function $0aa0c43070f7c9ed$var$downloadCacheHttpClient(archiveLocation, archivePath) {
    return $0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
        const writeStream = $0aa0c43070f7c9ed$var$fs.createWriteStream(archivePath);
        const httpClient = new $jmQwl.HttpClient('actions/cache');
        const downloadResponse = yield (0, $450ea9633102a0d2$exports.retryHttpClientResponse)('downloadCache', ()=>$0aa0c43070f7c9ed$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.get(archiveLocation);
            }));
        const contentLengthHeader = downloadResponse.message.headers['content-length'];
        let downloadProgress;
        if (contentLengthHeader) downloadProgress = new $0aa0c43070f7c9ed$var$DownloadProgress(parseInt(contentLengthHeader));
        // Abort download if no traffic received over the socket.
        downloadResponse.message.socket.setTimeout($3osl1.SocketTimeout, ()=>{
            downloadResponse.message.destroy();
            $0aa0c43070f7c9ed$var$core.debug(`Aborting download, socket timed out after ${$3osl1.SocketTimeout} ms`);
        });
        try {
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.startDisplayTimer();
            yield $0aa0c43070f7c9ed$var$pipeResponseToStream(downloadResponse, writeStream, downloadProgress);
        } finally{
            downloadProgress === null || downloadProgress === void 0 || downloadProgress.startDisplayTimer();
        }
        // Validate download size.
        if (contentLengthHeader) {
            const expectedLength = parseInt(contentLengthHeader);
            const actualLength = $0aa0c43070f7c9ed$var$utils.getArchiveFileSizeInBytes(archivePath);
            if (actualLength !== expectedLength) throw new Error(`Incomplete download. Expected file size: ${expectedLength}, actual file size: ${actualLength}`);
        } else $0aa0c43070f7c9ed$var$core.debug('Unable to validate download, no Content-Length header');
    });
}
module.exports.downloadCacheHttpClient = $0aa0c43070f7c9ed$var$downloadCacheHttpClient;
const $0aa0c43070f7c9ed$var$promiseWithTimeout = (timeoutMs, promise)=>$0aa0c43070f7c9ed$var$__awaiter(void 0, void 0, void 0, function*() {
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


