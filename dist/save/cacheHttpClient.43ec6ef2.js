require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./auth.272c0f2d.js");
require("./cacheUtils.fb4919b4.js");
require("./downloadUtils.a1f362df.js");
require("./options.00c7848b.js");
require("./requestUtils.97b82bb9.js");
require("./version.f2e67d7d.js");
var $2BeD4$crypto = require("crypto");
var $2BeD4$fs = require("fs");
var $2BeD4$url = require("url");


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
parcelRegister("eYGMX", function(module, exports) {
"use strict";
var $ae77dc3c27db0fe1$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $ae77dc3c27db0fe1$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $ae77dc3c27db0fe1$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $ae77dc3c27db0fe1$var$__createBinding(result, mod, k);
    }
    $ae77dc3c27db0fe1$var$__setModuleDefault(result, mod);
    return result;
};
var $ae77dc3c27db0fe1$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.deleteCache = module.exports.saveCache = module.exports.reserveCache = module.exports.reportCacheRestore = module.exports.downloadCache = module.exports.getCacheEntry = module.exports.getCacheVersion = void 0;

const $ae77dc3c27db0fe1$var$core = $ae77dc3c27db0fe1$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

var $1xRqI = parcelRequire("1xRqI");

const $ae77dc3c27db0fe1$var$crypto = $ae77dc3c27db0fe1$var$__importStar($2BeD4$crypto);

const $ae77dc3c27db0fe1$var$fs = $ae77dc3c27db0fe1$var$__importStar($2BeD4$fs);


const $ae77dc3c27db0fe1$var$utils = $ae77dc3c27db0fe1$var$__importStar((parcelRequire("5Nzbd")));

var $4PbLG = parcelRequire("4PbLG");

var $gQsf6 = parcelRequire("gQsf6");

var $bAM4K = parcelRequire("bAM4K");

var $j0yJ0 = parcelRequire("j0yJ0");
const $ae77dc3c27db0fe1$var$versionSalt = '1.0';
function $ae77dc3c27db0fe1$var$getCacheApiUrl(resource) {
    const baseUrl = process.env['BUILDJET_CACHE_URL'] || 'https://cache-api.buildjet.com/';
    if (!baseUrl) throw new Error('Cache Service Url not found, unable to restore cache.');
    const url = `${baseUrl}_apis/artifactcache/${resource}`;
    $ae77dc3c27db0fe1$var$core.debug(`Resource Url: ${url}`);
    return url;
}
function $ae77dc3c27db0fe1$var$createAcceptHeader(type, apiVersion) {
    return `${type};api-version=${apiVersion}`;
}
function $ae77dc3c27db0fe1$var$getRequestOptions() {
    const requestOptions = {
        headers: {
            Accept: $ae77dc3c27db0fe1$var$createAcceptHeader('application/json', '6.0-preview.1'),
            'Action-Cache-Url': process.env['ACTIONS_CACHE_URL'] || '',
            'Github-Repository': process.env['GITHUB_REPOSITORY'] || '',
            'Github-Repository-Id': process.env['GITHUB_REPOSITORY_ID'] || '',
            'Github-Repository-Owner': process.env['GITHUB_REPOSITORY_OWNER'] || '',
            'Github-Repository-Owner-Id': process.env['GITHUB_REPOSITORY_OWNER_ID'] || ''
        }
    };
    return requestOptions;
}
function $ae77dc3c27db0fe1$var$createHttpClient() {
    const token = process.env['ACTIONS_RUNTIME_TOKEN'] || '';
    const actionRepository = process.env['GITHUB_ACTION_REPOSITORY'] || '';
    const runnerArch = process.env['RUNNER_ARCH'] || '';
    const runnerOs = process.env['RUNNER_OS'] || '';
    const bearerCredentialHandler = new $1xRqI.BearerCredentialHandler(token);
    return new $14jHk.HttpClient(`BuildJet-cache/${$j0yJ0.LIB_VERSION} (${runnerOs}; ${runnerArch}) ${actionRepository}`, [
        bearerCredentialHandler
    ], $ae77dc3c27db0fe1$var$getRequestOptions());
}
function $ae77dc3c27db0fe1$var$getCacheVersion(paths, compressionMethod, enableCrossOsArchive = false) {
    const components = paths;
    // Add compression method to cache version to restore
    // compressed cache as per compression method
    if (compressionMethod) components.push(compressionMethod);
    // Only check for windows platforms if enableCrossOsArchive is false
    if (process.platform === 'win32' && !enableCrossOsArchive) components.push('windows-only');
    // Add salt to cache version to support breaking changes in cache entry
    components.push($ae77dc3c27db0fe1$var$versionSalt);
    return $ae77dc3c27db0fe1$var$crypto.createHash('sha256').update(components.join('|')).digest('hex');
}
module.exports.getCacheVersion = $ae77dc3c27db0fe1$var$getCacheVersion;
function $ae77dc3c27db0fe1$var$getCacheEntry(keys, paths, options) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $ae77dc3c27db0fe1$var$createHttpClient();
        const version = $ae77dc3c27db0fe1$var$getCacheVersion(paths, options === null || options === void 0 ? void 0 : options.compressionMethod, options === null || options === void 0 ? void 0 : options.enableCrossOsArchive);
        const resource = `cache?keys=${encodeURIComponent(keys.join(','))}&version=${version}`;
        const response = yield (0, $bAM4K.retryTypedResponse)('getCacheEntry', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($ae77dc3c27db0fe1$var$getCacheApiUrl(resource));
            }));
        // Cache not found
        if (response.statusCode === 204) {
            // List cache for primary key only if cache miss occurs
            if ($ae77dc3c27db0fe1$var$core.isDebug()) yield $ae77dc3c27db0fe1$var$printCachesListForDiagnostics(keys[0], httpClient, version);
            return null;
        }
        if (!(0, $bAM4K.isSuccessStatusCode)(response.statusCode)) throw new Error(`Cache service responded with ${response.statusCode}`);
        const cacheResult = response.result;
        const cacheDownloadUrl = cacheResult === null || cacheResult === void 0 ? void 0 : cacheResult.archiveLocation;
        if (!cacheDownloadUrl) // Cache achiveLocation not found. This should never happen, and hence bail out.
        throw new Error('Cache not found.');
        $ae77dc3c27db0fe1$var$core.setSecret(cacheDownloadUrl);
        $ae77dc3c27db0fe1$var$core.debug(`Cache Result:`);
        $ae77dc3c27db0fe1$var$core.debug(JSON.stringify(cacheResult));
        return cacheResult;
    });
}
module.exports.getCacheEntry = $ae77dc3c27db0fe1$var$getCacheEntry;
function $ae77dc3c27db0fe1$var$printCachesListForDiagnostics(key, httpClient, version) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const resource = `caches?key=${encodeURIComponent(key)}`;
        const response = yield (0, $bAM4K.retryTypedResponse)('listCache', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.getJson($ae77dc3c27db0fe1$var$getCacheApiUrl(resource));
            }));
        if (response.statusCode === 200) {
            const cacheListResult = response.result;
            const totalCount = cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.totalCount;
            if (totalCount && totalCount > 0) {
                $ae77dc3c27db0fe1$var$core.debug(`No matching cache found for cache key '${key}', version '${version} and scope ${process.env['GITHUB_REF']}. There exist one or more cache(s) with similar key but they have different version or scope. See more info on cache matching here: https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#matching-a-cache-key \nOther caches with similar key:`);
                for (const cacheEntry of (cacheListResult === null || cacheListResult === void 0 ? void 0 : cacheListResult.artifactCaches) || [])$ae77dc3c27db0fe1$var$core.debug(`Cache Key: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheKey}, Cache Version: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.cacheVersion}, Cache Scope: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.scope}, Cache Created: ${cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.creationTime}`);
            }
        }
    });
}
function $ae77dc3c27db0fe1$var$downloadCache(archiveLocation, archivePath, options) {
    var _a;
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const archiveUrl = new $2BeD4$url.URL(archiveLocation);
        const downloadOptions = (0, $gQsf6.getDownloadOptions)(options);
        if (process.env['PARALLEL_DOWNLOAD'] == 'false') //Use parallel download as default unless diasbled
        yield (0, $4PbLG.downloadCacheHttpClient)(archiveLocation, archivePath);
        else yield (0, $4PbLG.downloadCachMultiConnection)(archiveLocation, archivePath, (_a = options === null || options === void 0 ? void 0 : options.downloadConcurrency) !== null && _a !== void 0 ? _a : 8);
    });
}
module.exports.downloadCache = $ae77dc3c27db0fe1$var$downloadCache;
function $ae77dc3c27db0fe1$var$reportCacheRestore(report) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $ae77dc3c27db0fe1$var$createHttpClient();
        const response = yield (0, $bAM4K.retryTypedResponse)('cacheRestoreReport', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($ae77dc3c27db0fe1$var$getCacheApiUrl('cacheRestoreReport'), report);
            }));
        if (!(0, $bAM4K.isSuccessStatusCode)(response.statusCode)) throw new Error(`Cache service responded with ${response.statusCode}`);
    });
}
module.exports.reportCacheRestore = $ae77dc3c27db0fe1$var$reportCacheRestore;
// Reserve Cache
function $ae77dc3c27db0fe1$var$reserveCache(key, version, options) {
    var _a;
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $ae77dc3c27db0fe1$var$createHttpClient();
        const reserveCacheRequest = {
            key: key,
            version: version,
            cacheSize: options.cacheSize,
            chunks: (_a = options.uploadConcurrency) !== null && _a !== void 0 ? _a : 4
        };
        const response = yield (0, $bAM4K.retryTypedResponse)('reserveCache', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($ae77dc3c27db0fe1$var$getCacheApiUrl('caches'), reserveCacheRequest);
            }));
        return response;
    });
}
module.exports.reserveCache = $ae77dc3c27db0fe1$var$reserveCache;
function $ae77dc3c27db0fe1$var$getContentRange(start, end) {
    // Format: `bytes start-end/filesize
    // start and end are inclusive
    // filesize can be *
    // For a 200 byte chunk starting at byte 0:
    // Content-Range: bytes 0-199/*
    return `bytes ${start}-${end}/*`;
}
function $ae77dc3c27db0fe1$var$uploadChunk(httpClient, resourceUrl, openStream, start, end) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        $ae77dc3c27db0fe1$var$core.debug(`Uploading chunk of size ${end - start + 1} bytes at offset ${start} with content range: ${$ae77dc3c27db0fe1$var$getContentRange(start, end)}`);
        const additionalHeaders = {
            'Content-Type': 'application/octet-stream',
            'Content-Length': end - start + 1
        };
        const uploadChunkResponse = yield (0, $bAM4K.retryHttpClientResponse)(`uploadChunk (start: ${start}, end: ${end})`, ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.sendStream('PUT', resourceUrl, openStream(), additionalHeaders);
            }));
        $ae77dc3c27db0fe1$var$core.debug(JSON.stringify(uploadChunkResponse.message.headers));
        $ae77dc3c27db0fe1$var$core.debug(JSON.stringify((yield uploadChunkResponse.readBody())));
        if (!(0, $bAM4K.isSuccessStatusCode)(uploadChunkResponse.message.statusCode)) throw new Error(`Cache service responded with ${uploadChunkResponse.message.statusCode} during upload chunk.`);
        return uploadChunkResponse.message.headers.etag;
    });
}
function $ae77dc3c27db0fe1$var$uploadFile(httpClient, urls, archivePath, options) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        // Upload Chunks
        const fileSize = $ae77dc3c27db0fe1$var$utils.getArchiveFileSizeInBytes(archivePath);
        const fd = $ae77dc3c27db0fe1$var$fs.openSync(archivePath, 'r');
        $ae77dc3c27db0fe1$var$core.debug('Awaiting all uploads');
        let offset = 0;
        const maxChunkSize = Math.ceil(fileSize / urls.length);
        try {
            const eTags = yield Promise.all(urls.map((url)=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                    while(offset < fileSize){
                        const chunkSize = Math.min(fileSize - offset, maxChunkSize);
                        const start = offset;
                        const end = offset + chunkSize - 1;
                        offset += chunkSize;
                        return yield $ae77dc3c27db0fe1$var$uploadChunk(httpClient, url, ()=>$ae77dc3c27db0fe1$var$fs.createReadStream(archivePath, {
                                fd: fd,
                                start: start,
                                end: end,
                                autoClose: false
                            }).on('error', (error)=>{
                                throw new Error(`Cache upload failed because file read failed with ${error.message}`);
                            }), start, end);
                    }
                })));
            return eTags;
        } finally{
            $ae77dc3c27db0fe1$var$fs.closeSync(fd);
        }
    });
}
function $ae77dc3c27db0fe1$var$saveCache(key, version, uploadId, urls, archivePath, archiveTimeMs, options) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $ae77dc3c27db0fe1$var$createHttpClient();
        $ae77dc3c27db0fe1$var$core.debug('Upload cache');
        const uploadHttpClient = new $14jHk.HttpClient('actions/cache');
        const beforeUpload = Date.now();
        const eTags = yield $ae77dc3c27db0fe1$var$uploadFile(uploadHttpClient, urls, archivePath, options);
        const uploadTimeMs = Date.now() - beforeUpload;
        // Commit Cache
        $ae77dc3c27db0fe1$var$core.debug('Commiting cache');
        const cacheSize = $ae77dc3c27db0fe1$var$utils.getArchiveFileSizeInBytes(archivePath);
        $ae77dc3c27db0fe1$var$core.info(`Cache Size: ~${Math.round(cacheSize / 1048576)} MB (${cacheSize} B)`);
        let i = 1;
        const parts = eTags.map((eTag)=>{
            const part = {
                partNumber: i++,
                eTag: eTag
            };
            return part;
        });
        const commitCacheRequest = {
            key: key,
            version: version,
            uploadId: uploadId,
            cacheSize: cacheSize,
            parts: parts,
            uploadTimeMs: uploadTimeMs,
            archiveTimeMs: archiveTimeMs
        };
        const commitCacheResponse = yield (0, $bAM4K.retryTypedResponse)('commitCache', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.postJson($ae77dc3c27db0fe1$var$getCacheApiUrl(`commitCache`), commitCacheRequest);
            }));
        if (!(0, $bAM4K.isSuccessStatusCode)(commitCacheResponse.statusCode)) throw new Error(`Cache service responded with ${commitCacheResponse.statusCode} during commit cache.`);
        $ae77dc3c27db0fe1$var$core.info('Cache saved successfully');
    });
}
module.exports.saveCache = $ae77dc3c27db0fe1$var$saveCache;
function $ae77dc3c27db0fe1$var$deleteCache(keys) {
    return $ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
        const httpClient = $ae77dc3c27db0fe1$var$createHttpClient();
        const resource = `cache?keys=${encodeURIComponent(keys.join(','))}`;
        const response = yield (0, $bAM4K.retryHttpClientResponse)('deleteCache', ()=>$ae77dc3c27db0fe1$var$__awaiter(this, void 0, void 0, function*() {
                return httpClient.del($ae77dc3c27db0fe1$var$getCacheApiUrl(resource));
            }));
        if (!(0, $bAM4K.isSuccessStatusCode)(response.message.statusCode)) throw new Error(`Cache service responded with ${response.message.statusCode}`);
    });
}
module.exports.deleteCache = $ae77dc3c27db0fe1$var$deleteCache;

});
parcelRegister("4PbLG", function(module, exports) {
module.exports = new URL("downloadUtils.a1f362df.js", "file:" + __filename).toString();

});

parcelRegister("gQsf6", function(module, exports) {
module.exports = new URL("options.00c7848b.js", "file:" + __filename).toString();

});

parcelRegister("j0yJ0", function(module, exports) {
module.exports = new URL("version.f2e67d7d.js", "file:" + __filename).toString();

});



//# sourceMappingURL=cacheHttpClient.43ec6ef2.js.map
