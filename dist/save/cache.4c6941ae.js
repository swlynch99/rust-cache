require("./core.da66a1bd.js");
require("./cacheUtils.dc94c7f3.js");
require("./cacheHttpClient.576ee013.js");
require("./cacheTwirpClient.05203c57.js");
require("./config.8782b754.js");
require("./tar.d422da9f.js");
require("./constants.4b4283e3.js");
var $eUZ77$path = require("path");


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
parcelRegister("3GFCr", function(module, exports) {
module.exports = new URL("cacheUtils.dc94c7f3.js", "file:" + __filename).toString();

});

parcelRegister("hZftm", function(module, exports) {
module.exports = new URL("cacheHttpClient.576ee013.js", "file:" + __filename).toString();

});

parcelRegister("9SIya", function(module, exports) {
module.exports = new URL("cacheTwirpClient.05203c57.js", "file:" + __filename).toString();

});

"use strict";
var $680b5725ba01cdc9$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $680b5725ba01cdc9$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $680b5725ba01cdc9$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $680b5725ba01cdc9$var$__createBinding(result, mod, k);
    }
    $680b5725ba01cdc9$var$__setModuleDefault(result, mod);
    return result;
};
var $680b5725ba01cdc9$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.saveCache = module.exports.restoreCache = module.exports.isFeatureAvailable = module.exports.ReserveCacheError = module.exports.ValidationError = void 0;

const $680b5725ba01cdc9$var$core = $680b5725ba01cdc9$var$__importStar((parcelRequire("1irLk")));

const $680b5725ba01cdc9$var$path = $680b5725ba01cdc9$var$__importStar($eUZ77$path);

const $680b5725ba01cdc9$var$utils = $680b5725ba01cdc9$var$__importStar((parcelRequire("3GFCr")));

const $680b5725ba01cdc9$var$cacheHttpClient = $680b5725ba01cdc9$var$__importStar((parcelRequire("hZftm")));

const $680b5725ba01cdc9$var$cacheTwirpClient = $680b5725ba01cdc9$var$__importStar((parcelRequire("9SIya")));

var $dBSoB = parcelRequire("dBSoB");
var $54ace18abecca6d4$exports = {};
$54ace18abecca6d4$exports = new URL("tar.d422da9f.js", "file:" + __filename).toString();



var $24kx4 = parcelRequire("24kx4");
class $680b5725ba01cdc9$var$ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
        Object.setPrototypeOf(this, $680b5725ba01cdc9$var$ValidationError.prototype);
    }
}
module.exports.ValidationError = $680b5725ba01cdc9$var$ValidationError;
class $680b5725ba01cdc9$var$ReserveCacheError extends Error {
    constructor(message){
        super(message);
        this.name = 'ReserveCacheError';
        Object.setPrototypeOf(this, $680b5725ba01cdc9$var$ReserveCacheError.prototype);
    }
}
module.exports.ReserveCacheError = $680b5725ba01cdc9$var$ReserveCacheError;
function $680b5725ba01cdc9$var$checkPaths(paths) {
    if (!paths || paths.length === 0) throw new $680b5725ba01cdc9$var$ValidationError(`Path Validation Error: At least one directory or file path is required`);
}
function $680b5725ba01cdc9$var$checkKey(key) {
    if (key.length > 512) throw new $680b5725ba01cdc9$var$ValidationError(`Key Validation Error: ${key} cannot be larger than 512 characters.`);
    const regex = /^[^,]*$/;
    if (!regex.test(key)) throw new $680b5725ba01cdc9$var$ValidationError(`Key Validation Error: ${key} cannot contain commas.`);
}
/**
 * isFeatureAvailable to check the presence of Actions cache service
 *
 * @returns boolean return true if Actions cache service feature is available, otherwise false
 */ function $680b5725ba01cdc9$var$isFeatureAvailable() {
    return !!process.env['ACTIONS_CACHE_URL'];
}
module.exports.isFeatureAvailable = $680b5725ba01cdc9$var$isFeatureAvailable;
/**
 * Restores cache from keys
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching.
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */ function $680b5725ba01cdc9$var$restoreCache(paths, primaryKey, restoreKeys, options, enableCrossOsArchive = false) {
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        const cacheServiceVersion = (0, $dBSoB.getCacheServiceVersion)();
        $680b5725ba01cdc9$var$core.debug(`Cache service version: ${cacheServiceVersion}`);
        $680b5725ba01cdc9$var$checkPaths(paths);
        switch(cacheServiceVersion){
            case 'v2':
                return yield $680b5725ba01cdc9$var$restoreCacheV2(paths, primaryKey, restoreKeys, options, enableCrossOsArchive);
            case 'v1':
            default:
                return yield $680b5725ba01cdc9$var$restoreCacheV1(paths, primaryKey, restoreKeys, options, enableCrossOsArchive);
        }
    });
}
module.exports.restoreCache = $680b5725ba01cdc9$var$restoreCache;
/**
 * Restores cache using the legacy Cache Service
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching.
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param options cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on Windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */ function $680b5725ba01cdc9$var$restoreCacheV1(paths, primaryKey, restoreKeys, options, enableCrossOsArchive = false) {
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        restoreKeys = restoreKeys || [];
        const keys = [
            primaryKey,
            ...restoreKeys
        ];
        $680b5725ba01cdc9$var$core.debug('Resolved Keys:');
        $680b5725ba01cdc9$var$core.debug(JSON.stringify(keys));
        if (keys.length > 10) throw new $680b5725ba01cdc9$var$ValidationError(`Key Validation Error: Keys are limited to a maximum of 10.`);
        for (const key of keys)$680b5725ba01cdc9$var$checkKey(key);
        const compressionMethod = yield $680b5725ba01cdc9$var$utils.getCompressionMethod();
        let archivePath = '';
        try {
            // path are needed to compute version
            const cacheEntry = yield $680b5725ba01cdc9$var$cacheHttpClient.getCacheEntry(keys, paths, {
                compressionMethod: compressionMethod,
                enableCrossOsArchive: enableCrossOsArchive
            });
            if (!(cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.archiveLocation)) // Cache not found
            return undefined;
            if (options === null || options === void 0 ? void 0 : options.lookupOnly) {
                $680b5725ba01cdc9$var$core.info('Lookup only - skipping download');
                return cacheEntry.cacheKey;
            }
            archivePath = $680b5725ba01cdc9$var$path.join((yield $680b5725ba01cdc9$var$utils.createTempDirectory()), $680b5725ba01cdc9$var$utils.getCacheFileName(compressionMethod));
            $680b5725ba01cdc9$var$core.debug(`Archive Path: ${archivePath}`);
            // Download the cache from the cache entry
            yield $680b5725ba01cdc9$var$cacheHttpClient.downloadCache(cacheEntry.archiveLocation, archivePath, options);
            if ($680b5725ba01cdc9$var$core.isDebug()) yield (0, $54ace18abecca6d4$exports.listTar)(archivePath, compressionMethod);
            const archiveFileSize = $680b5725ba01cdc9$var$utils.getArchiveFileSizeInBytes(archivePath);
            $680b5725ba01cdc9$var$core.info(`Cache Size: ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B)`);
            yield (0, $54ace18abecca6d4$exports.extractTar)(archivePath, compressionMethod);
            $680b5725ba01cdc9$var$core.info('Cache restored successfully');
            return cacheEntry.cacheKey;
        } catch (error) {
            const typedError = error;
            if (typedError.name === $680b5725ba01cdc9$var$ValidationError.name) throw error;
            else // Supress all non-validation cache related errors because caching should be optional
            $680b5725ba01cdc9$var$core.warning(`Failed to restore: ${error.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $680b5725ba01cdc9$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $680b5725ba01cdc9$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return undefined;
    });
}
/**
 * Restores cache using Cache Service v2
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache. Lookup is done with prefix matching
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for primaryKey
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */ function $680b5725ba01cdc9$var$restoreCacheV2(paths, primaryKey, restoreKeys, options, enableCrossOsArchive = false) {
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        // Override UploadOptions to force the use of Azure
        options = Object.assign(Object.assign({}, options), {
            useAzureSdk: true
        });
        restoreKeys = restoreKeys || [];
        const keys = [
            primaryKey,
            ...restoreKeys
        ];
        $680b5725ba01cdc9$var$core.debug('Resolved Keys:');
        $680b5725ba01cdc9$var$core.debug(JSON.stringify(keys));
        if (keys.length > 10) throw new $680b5725ba01cdc9$var$ValidationError(`Key Validation Error: Keys are limited to a maximum of 10.`);
        for (const key of keys)$680b5725ba01cdc9$var$checkKey(key);
        let archivePath = '';
        try {
            const twirpClient = $680b5725ba01cdc9$var$cacheTwirpClient.internalCacheTwirpClient();
            const compressionMethod = yield $680b5725ba01cdc9$var$utils.getCompressionMethod();
            const request = {
                key: primaryKey,
                restoreKeys: restoreKeys,
                version: $680b5725ba01cdc9$var$utils.getCacheVersion(paths, compressionMethod, enableCrossOsArchive)
            };
            const response = yield twirpClient.GetCacheEntryDownloadURL(request);
            if (!response.ok) {
                $680b5725ba01cdc9$var$core.warning(`Cache not found for keys: ${keys.join(', ')}`);
                return undefined;
            }
            $680b5725ba01cdc9$var$core.info(`Cache hit for: ${request.key}`);
            if (options === null || options === void 0 ? void 0 : options.lookupOnly) {
                $680b5725ba01cdc9$var$core.info('Lookup only - skipping download');
                return response.matchedKey;
            }
            archivePath = $680b5725ba01cdc9$var$path.join((yield $680b5725ba01cdc9$var$utils.createTempDirectory()), $680b5725ba01cdc9$var$utils.getCacheFileName(compressionMethod));
            $680b5725ba01cdc9$var$core.debug(`Archive path: ${archivePath}`);
            $680b5725ba01cdc9$var$core.debug(`Starting download of archive to: ${archivePath}`);
            yield $680b5725ba01cdc9$var$cacheHttpClient.downloadCache(response.signedDownloadUrl, archivePath, options);
            const archiveFileSize = $680b5725ba01cdc9$var$utils.getArchiveFileSizeInBytes(archivePath);
            $680b5725ba01cdc9$var$core.info(`Cache Size: ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B)`);
            if ($680b5725ba01cdc9$var$core.isDebug()) yield (0, $54ace18abecca6d4$exports.listTar)(archivePath, compressionMethod);
            yield (0, $54ace18abecca6d4$exports.extractTar)(archivePath, compressionMethod);
            $680b5725ba01cdc9$var$core.info('Cache restored successfully');
            return response.matchedKey;
        } catch (error) {
            const typedError = error;
            if (typedError.name === $680b5725ba01cdc9$var$ValidationError.name) throw error;
            else // Supress all non-validation cache related errors because caching should be optional
            $680b5725ba01cdc9$var$core.warning(`Failed to restore: ${error.message}`);
        } finally{
            try {
                if (archivePath) yield $680b5725ba01cdc9$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $680b5725ba01cdc9$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return undefined;
    });
}
/**
 * Saves a list of files with the specified key
 *
 * @param paths a list of file paths to be cached
 * @param key an explicit key for restoring the cache
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @param options cache upload options
 * @returns number returns cacheId if the cache was saved successfully and throws an error if save fails
 */ function $680b5725ba01cdc9$var$saveCache(paths, key, options, enableCrossOsArchive = false) {
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        const cacheServiceVersion = (0, $dBSoB.getCacheServiceVersion)();
        $680b5725ba01cdc9$var$core.debug(`Cache service version: ${cacheServiceVersion}`);
        $680b5725ba01cdc9$var$checkPaths(paths);
        $680b5725ba01cdc9$var$checkKey(key);
        switch(cacheServiceVersion){
            case 'v2':
                return yield $680b5725ba01cdc9$var$saveCacheV2(paths, key, options, enableCrossOsArchive);
            case 'v1':
            default:
                return yield $680b5725ba01cdc9$var$saveCacheV1(paths, key, options, enableCrossOsArchive);
        }
    });
}
module.exports.saveCache = $680b5725ba01cdc9$var$saveCache;
/**
 * Save cache using the legacy Cache Service
 *
 * @param paths
 * @param key
 * @param options
 * @param enableCrossOsArchive
 * @returns
 */ function $680b5725ba01cdc9$var$saveCacheV1(paths, key, options, enableCrossOsArchive = false) {
    var _a, _b, _c, _d, _e;
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        const compressionMethod = yield $680b5725ba01cdc9$var$utils.getCompressionMethod();
        let cacheId = -1;
        const cachePaths = yield $680b5725ba01cdc9$var$utils.resolvePaths(paths);
        $680b5725ba01cdc9$var$core.debug('Cache Paths:');
        $680b5725ba01cdc9$var$core.debug(`${JSON.stringify(cachePaths)}`);
        if (cachePaths.length === 0) throw new Error(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.`);
        const archiveFolder = yield $680b5725ba01cdc9$var$utils.createTempDirectory();
        const archivePath = $680b5725ba01cdc9$var$path.join(archiveFolder, $680b5725ba01cdc9$var$utils.getCacheFileName(compressionMethod));
        $680b5725ba01cdc9$var$core.debug(`Archive Path: ${archivePath}`);
        try {
            yield (0, $54ace18abecca6d4$exports.createTar)(archiveFolder, cachePaths, compressionMethod);
            if ($680b5725ba01cdc9$var$core.isDebug()) yield (0, $54ace18abecca6d4$exports.listTar)(archivePath, compressionMethod);
            const fileSizeLimit = 10737418240; // 10GB per repo limit
            const archiveFileSize = $680b5725ba01cdc9$var$utils.getArchiveFileSizeInBytes(archivePath);
            $680b5725ba01cdc9$var$core.debug(`File Size: ${archiveFileSize}`);
            // For GHES, this check will take place in ReserveCache API with enterprise file size limit
            if (archiveFileSize > fileSizeLimit && !(0, $dBSoB.isGhes)()) throw new Error(`Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the 10GB limit, not saving cache.`);
            $680b5725ba01cdc9$var$core.debug('Reserving Cache');
            const reserveCacheResponse = yield $680b5725ba01cdc9$var$cacheHttpClient.reserveCache(key, paths, {
                compressionMethod: compressionMethod,
                enableCrossOsArchive: enableCrossOsArchive,
                cacheSize: archiveFileSize
            });
            if ((_a = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.result) === null || _a === void 0 ? void 0 : _a.cacheId) cacheId = (_b = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.result) === null || _b === void 0 ? void 0 : _b.cacheId;
            else if ((reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.statusCode) === 400) throw new Error((_d = (_c = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.error) === null || _c === void 0 ? void 0 : _c.message) !== null && _d !== void 0 ? _d : `Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the data cap limit, not saving cache.`);
            else throw new $680b5725ba01cdc9$var$ReserveCacheError(`Unable to reserve cache with key ${key}, another job may be creating this cache. More details: ${(_e = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.error) === null || _e === void 0 ? void 0 : _e.message}`);
            $680b5725ba01cdc9$var$core.debug(`Saving Cache (ID: ${cacheId})`);
            yield $680b5725ba01cdc9$var$cacheHttpClient.saveCache(cacheId, archivePath, '', options);
        } catch (error) {
            const typedError = error;
            if (typedError.name === $680b5725ba01cdc9$var$ValidationError.name) throw error;
            else if (typedError.name === $680b5725ba01cdc9$var$ReserveCacheError.name) $680b5725ba01cdc9$var$core.info(`Failed to save: ${typedError.message}`);
            else $680b5725ba01cdc9$var$core.warning(`Failed to save: ${typedError.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $680b5725ba01cdc9$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $680b5725ba01cdc9$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return cacheId;
    });
}
/**
 * Save cache using Cache Service v2
 *
 * @param paths a list of file paths to restore from the cache
 * @param key an explicit key for restoring the cache
 * @param options cache upload options
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @returns
 */ function $680b5725ba01cdc9$var$saveCacheV2(paths, key, options, enableCrossOsArchive = false) {
    return $680b5725ba01cdc9$var$__awaiter(this, void 0, void 0, function*() {
        // Override UploadOptions to force the use of Azure
        // ...options goes first because we want to override the default values
        // set in UploadOptions with these specific figures
        options = Object.assign(Object.assign({}, options), {
            uploadChunkSize: 67108864,
            uploadConcurrency: 8,
            useAzureSdk: true
        });
        const compressionMethod = yield $680b5725ba01cdc9$var$utils.getCompressionMethod();
        const twirpClient = $680b5725ba01cdc9$var$cacheTwirpClient.internalCacheTwirpClient();
        let cacheId = -1;
        const cachePaths = yield $680b5725ba01cdc9$var$utils.resolvePaths(paths);
        $680b5725ba01cdc9$var$core.debug('Cache Paths:');
        $680b5725ba01cdc9$var$core.debug(`${JSON.stringify(cachePaths)}`);
        if (cachePaths.length === 0) throw new Error(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.`);
        const archiveFolder = yield $680b5725ba01cdc9$var$utils.createTempDirectory();
        const archivePath = $680b5725ba01cdc9$var$path.join(archiveFolder, $680b5725ba01cdc9$var$utils.getCacheFileName(compressionMethod));
        $680b5725ba01cdc9$var$core.debug(`Archive Path: ${archivePath}`);
        try {
            yield (0, $54ace18abecca6d4$exports.createTar)(archiveFolder, cachePaths, compressionMethod);
            if ($680b5725ba01cdc9$var$core.isDebug()) yield (0, $54ace18abecca6d4$exports.listTar)(archivePath, compressionMethod);
            const archiveFileSize = $680b5725ba01cdc9$var$utils.getArchiveFileSizeInBytes(archivePath);
            $680b5725ba01cdc9$var$core.debug(`File Size: ${archiveFileSize}`);
            // For GHES, this check will take place in ReserveCache API with enterprise file size limit
            if (archiveFileSize > $24kx4.CacheFileSizeLimit && !(0, $dBSoB.isGhes)()) throw new Error(`Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the 10GB limit, not saving cache.`);
            // Set the archive size in the options, will be used to display the upload progress
            options.archiveSizeBytes = archiveFileSize;
            $680b5725ba01cdc9$var$core.debug('Reserving Cache');
            const version = $680b5725ba01cdc9$var$utils.getCacheVersion(paths, compressionMethod, enableCrossOsArchive);
            const request = {
                key: key,
                version: version
            };
            const response = yield twirpClient.CreateCacheEntry(request);
            if (!response.ok) throw new $680b5725ba01cdc9$var$ReserveCacheError(`Unable to reserve cache with key ${key}, another job may be creating this cache.`);
            $680b5725ba01cdc9$var$core.debug(`Attempting to upload cache located at: ${archivePath}`);
            yield $680b5725ba01cdc9$var$cacheHttpClient.saveCache(cacheId, archivePath, response.signedUploadUrl, options);
            const finalizeRequest = {
                key: key,
                version: version,
                sizeBytes: `${archiveFileSize}`
            };
            const finalizeResponse = yield twirpClient.FinalizeCacheEntryUpload(finalizeRequest);
            $680b5725ba01cdc9$var$core.debug(`FinalizeCacheEntryUploadResponse: ${finalizeResponse.ok}`);
            if (!finalizeResponse.ok) throw new Error(`Unable to finalize cache with key ${key}, another job may be finalizing this cache.`);
            cacheId = parseInt(finalizeResponse.entryId);
        } catch (error) {
            const typedError = error;
            if (typedError.name === $680b5725ba01cdc9$var$ValidationError.name) throw error;
            else if (typedError.name === $680b5725ba01cdc9$var$ReserveCacheError.name) $680b5725ba01cdc9$var$core.info(`Failed to save: ${typedError.message}`);
            else $680b5725ba01cdc9$var$core.warning(`Failed to save: ${typedError.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $680b5725ba01cdc9$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $680b5725ba01cdc9$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return cacheId;
    });
}


