require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./auth.272c0f2d.js");
require("./cacheUtils.009fabc1.js");
require("./uploadUtils.da085a0e.js");
require("./downloadUtils.7c9078aa.js");
require("./options.2ffcdd79.js");
require("./requestUtils.22d5c35b.js");
require("./config.69e28e62.js");
require("./user-agent.8d090254.js");
var $5ddYv$fs = require("fs");
var $5ddYv$url = require("url");


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
parcelRegister("8JiiX", function(module, exports) {
"use strict";
var $65b0b9aa312df066$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $65b0b9aa312df066$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $65b0b9aa312df066$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $65b0b9aa312df066$var$__createBinding(result, mod, k);
    }
    $65b0b9aa312df066$var$__setModuleDefault(result, mod);
    return result;
};
var $65b0b9aa312df066$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.saveCache = module.exports.reserveCache = module.exports.downloadCache = module.exports.getCacheEntry = void 0;

const $65b0b9aa312df066$var$core = $65b0b9aa312df066$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

var $1xRqI = parcelRequire("1xRqI");

const $65b0b9aa312df066$var$fs = $65b0b9aa312df066$var$__importStar($5ddYv$fs);


const $65b0b9aa312df066$var$utils = $65b0b9aa312df066$var$__importStar((parcelRequire("3kiUl")));

var $hX0zM = parcelRequire("hX0zM");

var $gNtSn = parcelRequire("gNtSn");

var $i4yWl = parcelRequire("i4yWl");

var $2nuHM = parcelRequire("2nuHM");

var $1zT1c = parcelRequire("1zT1c");

var $6o0Ys = parcelRequire("6o0Ys");
function $65b0b9aa312df066$var$getCacheApiUrl(resource) {
    const baseUrl = (0, $1zT1c.getCacheServiceURL)();
    if (!baseUrl) throw new Error('Cache Service Url not found, unable to restore cache.');
    const url = `${baseUrl}_apis/artifactcache/${resource}`;
    $65b0b9aa312df066$var$core.debug(`Resource Url: ${url}`);
    return url;
}
function $65b0b9aa312df066$var$createAcceptHeader(type, apiVersion) {
    return `${type};api-version=${apiVersion}`;
}
function $65b0b9aa312df066$var$getRequestOptions() {
    const requestOptions = {
        headers: {
            Accept: $65b0b9aa312df066$var$createAcceptHeader('application/json', '6.0-preview.1')
        }
    };
    return requestOptions;
}
function $65b0b9aa312df066$var$createHttpClient() {
    const token = process.env['ACTIONS_RUNTIME_TOKEN'] || '';
    const bearerCredentialHandler = new $1xRqI.BearerCredentialHandler(token);
    return new $14jHk.HttpClient((0, $6o0Ys.getUserAgentString)(), [
        bearerCredentialHandler
    ], $65b0b9aa312df066$var$getRequestOptions());
}
function $65b0b9aa312df066$var$getCacheEntry(keys, paths, options) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $65b0b9aa312df066$var$createHttpClient();
        const version = $65b0b9aa312df066$var$utils.getCacheVersion(paths, options === null || options === void 0 ? void 0 : options.compressionMethod, options === null || options === void 0 ? void 0 : options.enableCrossOsArchive);
        const resource = `cache?keys=${encodeURIComponent(keys.join(','))}&version=${version}`;
        const response = yield (0, $2nuHM.retryTypedResponse)('getCacheEntry', ()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($65b0b9aa312df066$var$getCacheApiUrl(resource));
            }));
        // Cache not found
        if (response.statusCode === 204) {
            // List cache for primary key only if cache miss occurs
            if ($65b0b9aa312df066$var$core.isDebug()) yield $65b0b9aa312df066$var$printCachesListForDiagnostics(keys[0], httpClient, version);
            return null;
        }
        if (!(0, $2nuHM.isSuccessStatusCode)(response.statusCode)) throw new Error(`Cache service responded with ${response.statusCode}`);
        const cacheResult = response.result;
        const cacheDownloadUrl = cacheResult === null || cacheResult === void 0 ? void 0 : cacheResult.archiveLocation;
        if (!cacheDownloadUrl) // Cache achiveLocation not found. This should never happen, and hence bail out.
        throw new Error('Cache not found.');
        $65b0b9aa312df066$var$core.setSecret(cacheDownloadUrl);
        $65b0b9aa312df066$var$core.debug(`Cache Result:`);
        $65b0b9aa312df066$var$core.debug(JSON.stringify(cacheResult));
        return cacheResult;
    });
}
module.exports.getCacheEntry = $65b0b9aa312df066$var$getCacheEntry;
function $65b0b9aa312df066$var$printCachesListForDiagnostics(key, httpClient, version) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const resource = `caches?key=${encodeURIComponent(key)}`;
        const response = yield (0, $2nuHM.retryTypedResponse)('listCache', ()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($65b0b9aa312df066$var$getCacheApiUrl(resource));
            }));
        if (response.statusCode === 200) {
            const cacheListResult = response.result;
            const totalCount = cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.totalCount;
            if (totalCount && totalCount > 0) {
                $65b0b9aa312df066$var$core.debug(`No matching cache found for cache key '${key}', version '${version} and scope ${process.env['GITHUB_REF']}. There exist one or more cache(s) with similar key but they have different version or scope. See more info on cache matching here: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#matching-a-cache-key \nOther caches with similar key:`);
                for (const cacheEntry of (cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.artifactCaches) || [])$65b0b9aa312df066$var$core.debug(`Cache Key: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheKey}, Cache Version: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheVersion}, Cache Scope: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.scope}, Cache Created: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.creationTime}`);
            }
        }
    });
}
function $65b0b9aa312df066$var$downloadCache(archiveLocation, archivePath, options) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const archiveUrl = new $5ddYv$url.URL(archiveLocation);
        const downloadOptions = (0, $i4yWl.getDownloadOptions)(options);
        if (archiveUrl.hostname.endsWith('.blob.core.windows.net')) {
            if (downloadOptions.useAzureSdk) // Use Azure storage SDK to download caches hosted on Azure to improve speed and reliability.
            yield (0, $gNtSn.downloadCacheStorageSDK)(archiveLocation, archivePath, downloadOptions);
            else if (downloadOptions.concurrentBlobDownloads) // Use concurrent implementation with HttpClient to work around blob SDK issue
            yield (0, $gNtSn.downloadCacheHttpClientConcurrent)(archiveLocation, archivePath, downloadOptions);
            else // Otherwise, download using the Actions http-client.
            yield (0, $gNtSn.downloadCacheHttpClient)(archiveLocation, archivePath);
        } else yield (0, $gNtSn.downloadCacheHttpClient)(archiveLocation, archivePath);
    });
}
module.exports.downloadCache = $65b0b9aa312df066$var$downloadCache;
// Reserve Cache
function $65b0b9aa312df066$var$reserveCache(key, paths, options) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $65b0b9aa312df066$var$createHttpClient();
        const version = $65b0b9aa312df066$var$utils.getCacheVersion(paths, options === null || options === void 0 ? void 0 : options.compressionMethod, options === null || options === void 0 ? void 0 : options.enableCrossOsArchive);
        const reserveCacheRequest = {
            key: key,
            version: version,
            cacheSize: options === null || options === void 0 ? void 0 : options.cacheSize
        };
        const response = yield (0, $2nuHM.retryTypedResponse)('reserveCache', ()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($65b0b9aa312df066$var$getCacheApiUrl('caches'), reserveCacheRequest);
            }));
        return response;
    });
}
module.exports.reserveCache = $65b0b9aa312df066$var$reserveCache;
function $65b0b9aa312df066$var$getContentRange(start, end) {
    // Format: `bytes start-end/filesize
    // start and end are inclusive
    // filesize can be *
    // For a 200 byte chunk starting at byte 0:
    // Content-Range: bytes 0-199/*
    return `bytes ${start}-${end}/*`;
}
function $65b0b9aa312df066$var$uploadChunk(httpClient, resourceUrl, openStream, start, end) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        $65b0b9aa312df066$var$core.debug(`Uploading chunk of size ${end - start + 1} bytes at offset ${start} with content range: ${$65b0b9aa312df066$var$getContentRange(start, end)}`);
        const additionalHeaders = {
            'Content-Type': 'application/octet-stream',
            'Content-Range': $65b0b9aa312df066$var$getContentRange(start, end)
        };
        const uploadChunkResponse = yield (0, $2nuHM.retryHttpClientResponse)(`uploadChunk (start: ${start}, end: ${end})`, ()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.sendStream('PATCH', resourceUrl, openStream(), additionalHeaders);
            }));
        if (!(0, $2nuHM.isSuccessStatusCode)(uploadChunkResponse.message.statusCode)) throw new Error(`Cache service responded with ${uploadChunkResponse.message.statusCode} during upload chunk.`);
    });
}
function $65b0b9aa312df066$var$uploadFile(httpClient, cacheId, archivePath, options) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        // Upload Chunks
        const fileSize = $65b0b9aa312df066$var$utils.getArchiveFileSizeInBytes(archivePath);
        const resourceUrl = $65b0b9aa312df066$var$getCacheApiUrl(`caches/${cacheId.toString()}`);
        const fd = $65b0b9aa312df066$var$fs.openSync(archivePath, 'r');
        const uploadOptions = (0, $i4yWl.getUploadOptions)(options);
        const concurrency = $65b0b9aa312df066$var$utils.assertDefined('uploadConcurrency', uploadOptions.uploadConcurrency);
        const maxChunkSize = $65b0b9aa312df066$var$utils.assertDefined('uploadChunkSize', uploadOptions.uploadChunkSize);
        const parallelUploads = [
            ...new Array(concurrency).keys()
        ];
        $65b0b9aa312df066$var$core.debug('Awaiting all uploads');
        let offset = 0;
        try {
            yield Promise.all(parallelUploads.map(()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                    while(offset < fileSize){
                        const chunkSize = Math.min(fileSize - offset, maxChunkSize);
                        const start = offset;
                        const end = offset + chunkSize - 1;
                        offset += maxChunkSize;
                        yield $65b0b9aa312df066$var$uploadChunk(httpClient, resourceUrl, ()=>$65b0b9aa312df066$var$fs.createReadStream(archivePath, {
                                fd: fd,
                                start: start,
                                end: end,
                                autoClose: false
                            }).on('error', (error)=>{
                                throw new Error(`Cache upload failed because file read failed with ${error.message}`);
                            }), start, end);
                    }
                })));
        } finally{
            $65b0b9aa312df066$var$fs.closeSync(fd);
        }
        return;
    });
}
function $65b0b9aa312df066$var$commitCache(httpClient, cacheId, filesize) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const commitCacheRequest = {
            size: filesize
        };
        return yield (0, $2nuHM.retryTypedResponse)('commitCache', ()=>$65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($65b0b9aa312df066$var$getCacheApiUrl(`caches/${cacheId.toString()}`), commitCacheRequest);
            }));
    });
}
function $65b0b9aa312df066$var$saveCache(cacheId, archivePath, signedUploadURL, options) {
    return $65b0b9aa312df066$var$__awaiter(this, void 0, void 0, function*() {
        const uploadOptions = (0, $i4yWl.getUploadOptions)(options);
        if (uploadOptions.useAzureSdk) {
            // Use Azure storage SDK to upload caches directly to Azure
            if (!signedUploadURL) throw new Error('Azure Storage SDK can only be used when a signed URL is provided.');
            yield (0, $hX0zM.uploadCacheArchiveSDK)(signedUploadURL, archivePath, options);
        } else {
            const httpClient = $65b0b9aa312df066$var$createHttpClient();
            $65b0b9aa312df066$var$core.debug('Upload cache');
            yield $65b0b9aa312df066$var$uploadFile(httpClient, cacheId, archivePath, options);
            // Commit Cache
            $65b0b9aa312df066$var$core.debug('Commiting cache');
            const cacheSize = $65b0b9aa312df066$var$utils.getArchiveFileSizeInBytes(archivePath);
            $65b0b9aa312df066$var$core.info(`Cache Size: ~${Math.round(cacheSize / 1048576)} MB (${cacheSize} B)`);
            const commitCacheResponse = yield $65b0b9aa312df066$var$commitCache(httpClient, cacheId, cacheSize);
            if (!(0, $2nuHM.isSuccessStatusCode)(commitCacheResponse.statusCode)) throw new Error(`Cache service responded with ${commitCacheResponse.statusCode} during commit cache.`);
            $65b0b9aa312df066$var$core.info('Cache saved successfully');
        }
    });
}
module.exports.saveCache = $65b0b9aa312df066$var$saveCache;

});
parcelRegister("hX0zM", function(module, exports) {
module.exports = new URL("uploadUtils.da085a0e.js", "file:" + __filename).toString();

});

parcelRegister("gNtSn", function(module, exports) {
module.exports = new URL("downloadUtils.7c9078aa.js", "file:" + __filename).toString();

});

parcelRegister("i4yWl", function(module, exports) {
module.exports = new URL("options.2ffcdd79.js", "file:" + __filename).toString();

});

parcelRegister("1zT1c", function(module, exports) {
module.exports = new URL("config.69e28e62.js", "file:" + __filename).toString();

});

parcelRegister("6o0Ys", function(module, exports) {
module.exports = new URL("user-agent.8d090254.js", "file:" + __filename).toString();

});



//# sourceMappingURL=cacheHttpClient.71f57043.js.map
