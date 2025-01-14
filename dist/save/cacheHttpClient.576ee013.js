require("./core.da66a1bd.js");
require("./http-client.a6473211.js");
require("./auth.808e04d8.js");
require("./cacheUtils.dc94c7f3.js");
require("./uploadUtils.02b22330.js");
require("./downloadUtils.1f1c7741.js");
require("./options.13758c2e.js");
require("./requestUtils.5a269f0f.js");
require("./config.8782b754.js");
require("./user-agent.bdfa9d84.js");
var $c8xx5$fs = require("fs");
var $c8xx5$url = require("url");


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
parcelRegister("hkQUu", function(module, exports) {
"use strict";
var $c9ed58cae6460513$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $c9ed58cae6460513$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $c9ed58cae6460513$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $c9ed58cae6460513$var$__createBinding(result, mod, k);
    }
    $c9ed58cae6460513$var$__setModuleDefault(result, mod);
    return result;
};
var $c9ed58cae6460513$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $c9ed58cae6460513$var$core = $c9ed58cae6460513$var$__importStar((parcelRequire("1irLk")));

var $jmQwl = parcelRequire("jmQwl");

var $2Xj8U = parcelRequire("2Xj8U");

const $c9ed58cae6460513$var$fs = $c9ed58cae6460513$var$__importStar($c8xx5$fs);


const $c9ed58cae6460513$var$utils = $c9ed58cae6460513$var$__importStar((parcelRequire("5xPwS")));

var $hOxzi = parcelRequire("hOxzi");

var $fEwVg = parcelRequire("fEwVg");

var $7Xdks = parcelRequire("7Xdks");

var $dKAB1 = parcelRequire("dKAB1");

var $4UFp9 = parcelRequire("4UFp9");

var $2EksP = parcelRequire("2EksP");
function $c9ed58cae6460513$var$getCacheApiUrl(resource) {
    const baseUrl = (0, $4UFp9.getCacheServiceURL)();
    if (!baseUrl) throw new Error('Cache Service Url not found, unable to restore cache.');
    const url = `${baseUrl}_apis/artifactcache/${resource}`;
    $c9ed58cae6460513$var$core.debug(`Resource Url: ${url}`);
    return url;
}
function $c9ed58cae6460513$var$createAcceptHeader(type, apiVersion) {
    return `${type};api-version=${apiVersion}`;
}
function $c9ed58cae6460513$var$getRequestOptions() {
    const requestOptions = {
        headers: {
            Accept: $c9ed58cae6460513$var$createAcceptHeader('application/json', '6.0-preview.1')
        }
    };
    return requestOptions;
}
function $c9ed58cae6460513$var$createHttpClient() {
    const token = process.env['ACTIONS_RUNTIME_TOKEN'] || '';
    const bearerCredentialHandler = new $2Xj8U.BearerCredentialHandler(token);
    return new $jmQwl.HttpClient((0, $2EksP.getUserAgentString)(), [
        bearerCredentialHandler
    ], $c9ed58cae6460513$var$getRequestOptions());
}
function $c9ed58cae6460513$var$getCacheEntry(keys, paths, options) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $c9ed58cae6460513$var$createHttpClient();
        const version = $c9ed58cae6460513$var$utils.getCacheVersion(paths, options === null || options === void 0 ? void 0 : options.compressionMethod, options === null || options === void 0 ? void 0 : options.enableCrossOsArchive);
        const resource = `cache?keys=${encodeURIComponent(keys.join(','))}&version=${version}`;
        const response = yield (0, $dKAB1.retryTypedResponse)('getCacheEntry', ()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($c9ed58cae6460513$var$getCacheApiUrl(resource));
            }));
        // Cache not found
        if (response.statusCode === 204) {
            // List cache for primary key only if cache miss occurs
            if ($c9ed58cae6460513$var$core.isDebug()) yield $c9ed58cae6460513$var$printCachesListForDiagnostics(keys[0], httpClient, version);
            return null;
        }
        if (!(0, $dKAB1.isSuccessStatusCode)(response.statusCode)) throw new Error(`Cache service responded with ${response.statusCode}`);
        const cacheResult = response.result;
        const cacheDownloadUrl = cacheResult === null || cacheResult === void 0 ? void 0 : cacheResult.archiveLocation;
        if (!cacheDownloadUrl) // Cache achiveLocation not found. This should never happen, and hence bail out.
        throw new Error('Cache not found.');
        $c9ed58cae6460513$var$core.setSecret(cacheDownloadUrl);
        $c9ed58cae6460513$var$core.debug(`Cache Result:`);
        $c9ed58cae6460513$var$core.debug(JSON.stringify(cacheResult));
        return cacheResult;
    });
}
module.exports.getCacheEntry = $c9ed58cae6460513$var$getCacheEntry;
function $c9ed58cae6460513$var$printCachesListForDiagnostics(key, httpClient, version) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const resource = `caches?key=${encodeURIComponent(key)}`;
        const response = yield (0, $dKAB1.retryTypedResponse)('listCache', ()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($c9ed58cae6460513$var$getCacheApiUrl(resource));
            }));
        if (response.statusCode === 200) {
            const cacheListResult = response.result;
            const totalCount = cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.totalCount;
            if (totalCount && totalCount > 0) {
                $c9ed58cae6460513$var$core.debug(`No matching cache found for cache key '${key}', version '${version} and scope ${process.env['GITHUB_REF']}. There exist one or more cache(s) with similar key but they have different version or scope. See more info on cache matching here: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#matching-a-cache-key \nOther caches with similar key:`);
                for (const cacheEntry of (cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.artifactCaches) || [])$c9ed58cae6460513$var$core.debug(`Cache Key: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheKey}, Cache Version: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheVersion}, Cache Scope: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.scope}, Cache Created: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.creationTime}`);
            }
        }
    });
}
function $c9ed58cae6460513$var$downloadCache(archiveLocation, archivePath, options) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const archiveUrl = new $c8xx5$url.URL(archiveLocation);
        const downloadOptions = (0, $7Xdks.getDownloadOptions)(options);
        if (archiveUrl.hostname.endsWith('.blob.core.windows.net')) {
            if (downloadOptions.useAzureSdk) // Use Azure storage SDK to download caches hosted on Azure to improve speed and reliability.
            yield (0, $fEwVg.downloadCacheStorageSDK)(archiveLocation, archivePath, downloadOptions);
            else if (downloadOptions.concurrentBlobDownloads) // Use concurrent implementation with HttpClient to work around blob SDK issue
            yield (0, $fEwVg.downloadCacheHttpClientConcurrent)(archiveLocation, archivePath, downloadOptions);
            else // Otherwise, download using the Actions http-client.
            yield (0, $fEwVg.downloadCacheHttpClient)(archiveLocation, archivePath);
        } else yield (0, $fEwVg.downloadCacheHttpClient)(archiveLocation, archivePath);
    });
}
module.exports.downloadCache = $c9ed58cae6460513$var$downloadCache;
// Reserve Cache
function $c9ed58cae6460513$var$reserveCache(key, paths, options) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $c9ed58cae6460513$var$createHttpClient();
        const version = $c9ed58cae6460513$var$utils.getCacheVersion(paths, options === null || options === void 0 ? void 0 : options.compressionMethod, options === null || options === void 0 ? void 0 : options.enableCrossOsArchive);
        const reserveCacheRequest = {
            key: key,
            version: version,
            cacheSize: options === null || options === void 0 ? void 0 : options.cacheSize
        };
        const response = yield (0, $dKAB1.retryTypedResponse)('reserveCache', ()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($c9ed58cae6460513$var$getCacheApiUrl('caches'), reserveCacheRequest);
            }));
        return response;
    });
}
module.exports.reserveCache = $c9ed58cae6460513$var$reserveCache;
function $c9ed58cae6460513$var$getContentRange(start, end) {
    // Format: `bytes start-end/filesize
    // start and end are inclusive
    // filesize can be *
    // For a 200 byte chunk starting at byte 0:
    // Content-Range: bytes 0-199/*
    return `bytes ${start}-${end}/*`;
}
function $c9ed58cae6460513$var$uploadChunk(httpClient, resourceUrl, openStream, start, end) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        $c9ed58cae6460513$var$core.debug(`Uploading chunk of size ${end - start + 1} bytes at offset ${start} with content range: ${$c9ed58cae6460513$var$getContentRange(start, end)}`);
        const additionalHeaders = {
            'Content-Type': 'application/octet-stream',
            'Content-Range': $c9ed58cae6460513$var$getContentRange(start, end)
        };
        const uploadChunkResponse = yield (0, $dKAB1.retryHttpClientResponse)(`uploadChunk (start: ${start}, end: ${end})`, ()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.sendStream('PATCH', resourceUrl, openStream(), additionalHeaders);
            }));
        if (!(0, $dKAB1.isSuccessStatusCode)(uploadChunkResponse.message.statusCode)) throw new Error(`Cache service responded with ${uploadChunkResponse.message.statusCode} during upload chunk.`);
    });
}
function $c9ed58cae6460513$var$uploadFile(httpClient, cacheId, archivePath, options) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        // Upload Chunks
        const fileSize = $c9ed58cae6460513$var$utils.getArchiveFileSizeInBytes(archivePath);
        const resourceUrl = $c9ed58cae6460513$var$getCacheApiUrl(`caches/${cacheId.toString()}`);
        const fd = $c9ed58cae6460513$var$fs.openSync(archivePath, 'r');
        const uploadOptions = (0, $7Xdks.getUploadOptions)(options);
        const concurrency = $c9ed58cae6460513$var$utils.assertDefined('uploadConcurrency', uploadOptions.uploadConcurrency);
        const maxChunkSize = $c9ed58cae6460513$var$utils.assertDefined('uploadChunkSize', uploadOptions.uploadChunkSize);
        const parallelUploads = [
            ...new Array(concurrency).keys()
        ];
        $c9ed58cae6460513$var$core.debug('Awaiting all uploads');
        let offset = 0;
        try {
            yield Promise.all(parallelUploads.map(()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                    while(offset < fileSize){
                        const chunkSize = Math.min(fileSize - offset, maxChunkSize);
                        const start = offset;
                        const end = offset + chunkSize - 1;
                        offset += maxChunkSize;
                        yield $c9ed58cae6460513$var$uploadChunk(httpClient, resourceUrl, ()=>$c9ed58cae6460513$var$fs.createReadStream(archivePath, {
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
            $c9ed58cae6460513$var$fs.closeSync(fd);
        }
        return;
    });
}
function $c9ed58cae6460513$var$commitCache(httpClient, cacheId, filesize) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const commitCacheRequest = {
            size: filesize
        };
        return yield (0, $dKAB1.retryTypedResponse)('commitCache', ()=>$c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($c9ed58cae6460513$var$getCacheApiUrl(`caches/${cacheId.toString()}`), commitCacheRequest);
            }));
    });
}
function $c9ed58cae6460513$var$saveCache(cacheId, archivePath, signedUploadURL, options) {
    return $c9ed58cae6460513$var$__awaiter(this, void 0, void 0, function*() {
        const uploadOptions = (0, $7Xdks.getUploadOptions)(options);
        if (uploadOptions.useAzureSdk) {
            // Use Azure storage SDK to upload caches directly to Azure
            if (!signedUploadURL) throw new Error('Azure Storage SDK can only be used when a signed URL is provided.');
            yield (0, $hOxzi.uploadCacheArchiveSDK)(signedUploadURL, archivePath, options);
        } else {
            const httpClient = $c9ed58cae6460513$var$createHttpClient();
            $c9ed58cae6460513$var$core.debug('Upload cache');
            yield $c9ed58cae6460513$var$uploadFile(httpClient, cacheId, archivePath, options);
            // Commit Cache
            $c9ed58cae6460513$var$core.debug('Commiting cache');
            const cacheSize = $c9ed58cae6460513$var$utils.getArchiveFileSizeInBytes(archivePath);
            $c9ed58cae6460513$var$core.info(`Cache Size: ~${Math.round(cacheSize / 1048576)} MB (${cacheSize} B)`);
            const commitCacheResponse = yield $c9ed58cae6460513$var$commitCache(httpClient, cacheId, cacheSize);
            if (!(0, $dKAB1.isSuccessStatusCode)(commitCacheResponse.statusCode)) throw new Error(`Cache service responded with ${commitCacheResponse.statusCode} during commit cache.`);
            $c9ed58cae6460513$var$core.info('Cache saved successfully');
        }
    });
}
module.exports.saveCache = $c9ed58cae6460513$var$saveCache;

});
parcelRegister("hOxzi", function(module, exports) {
module.exports = new URL("uploadUtils.02b22330.js", "file:" + __filename).toString();

});

parcelRegister("fEwVg", function(module, exports) {
module.exports = new URL("downloadUtils.1f1c7741.js", "file:" + __filename).toString();

});

parcelRegister("7Xdks", function(module, exports) {
module.exports = new URL("options.13758c2e.js", "file:" + __filename).toString();

});

parcelRegister("4UFp9", function(module, exports) {
module.exports = new URL("config.8782b754.js", "file:" + __filename).toString();

});

parcelRegister("2EksP", function(module, exports) {
module.exports = new URL("user-agent.bdfa9d84.js", "file:" + __filename).toString();

});



