require("./core.da66a1bd.js");
require("./cacheUtils.40d419af.js");
require("./cacheHttpClient.c7b08504.js");
require("./tar.41c08566.js");
var $2kSQF$path = require("path");


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
parcelRegister("60ztZ", function(module, exports) {
module.exports = new URL("cacheUtils.40d419af.js", "file:" + __filename).toString();

});

parcelRegister("c4n5a", function(module, exports) {
module.exports = new URL("cacheHttpClient.c7b08504.js", "file:" + __filename).toString();

});

"use strict";
var $4e9c1b31a68f4cb7$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $4e9c1b31a68f4cb7$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $4e9c1b31a68f4cb7$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $4e9c1b31a68f4cb7$var$__createBinding(result, mod, k);
    }
    $4e9c1b31a68f4cb7$var$__setModuleDefault(result, mod);
    return result;
};
var $4e9c1b31a68f4cb7$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.deleteCache = module.exports.saveCache = module.exports.restoreCache = module.exports.isFeatureAvailable = module.exports.ReserveCacheError = module.exports.ValidationError = void 0;

const $4e9c1b31a68f4cb7$var$core = $4e9c1b31a68f4cb7$var$__importStar((parcelRequire("1irLk")));

const $4e9c1b31a68f4cb7$var$path = $4e9c1b31a68f4cb7$var$__importStar($2kSQF$path);

const $4e9c1b31a68f4cb7$var$utils = $4e9c1b31a68f4cb7$var$__importStar((parcelRequire("60ztZ")));

const $4e9c1b31a68f4cb7$var$cacheHttpClient = $4e9c1b31a68f4cb7$var$__importStar((parcelRequire("c4n5a")));
var $0e5129e1c0e1748b$exports = {};
$0e5129e1c0e1748b$exports = new URL("tar.41c08566.js", "file:" + __filename).toString();


class $4e9c1b31a68f4cb7$var$ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
        Object.setPrototypeOf(this, $4e9c1b31a68f4cb7$var$ValidationError.prototype);
    }
}
module.exports.ValidationError = $4e9c1b31a68f4cb7$var$ValidationError;
class $4e9c1b31a68f4cb7$var$ReserveCacheError extends Error {
    constructor(message){
        super(message);
        this.name = 'ReserveCacheError';
        Object.setPrototypeOf(this, $4e9c1b31a68f4cb7$var$ReserveCacheError.prototype);
    }
}
module.exports.ReserveCacheError = $4e9c1b31a68f4cb7$var$ReserveCacheError;
function $4e9c1b31a68f4cb7$var$checkPaths(paths) {
    if (!paths || paths.length === 0) throw new $4e9c1b31a68f4cb7$var$ValidationError(`Path Validation Error: At least one directory or file path is required`);
}
function $4e9c1b31a68f4cb7$var$checkKey(key) {
    if (key.length > 512) throw new $4e9c1b31a68f4cb7$var$ValidationError(`Key Validation Error: ${key} cannot be larger than 512 characters.`);
    const regex = /^[^,]*$/;
    if (!regex.test(key)) throw new $4e9c1b31a68f4cb7$var$ValidationError(`Key Validation Error: ${key} cannot contain commas.`);
}
/**
 * isFeatureAvailable to check the presence of Actions cache service
 *
 * @returns boolean return true if Actions cache service feature is available, otherwise false
 */ function $4e9c1b31a68f4cb7$var$isFeatureAvailable() {
    return !!process.env['ACTIONS_CACHE_URL'];
}
module.exports.isFeatureAvailable = $4e9c1b31a68f4cb7$var$isFeatureAvailable;
/**
 * Restores cache from keys
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for key
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */ function $4e9c1b31a68f4cb7$var$restoreCache(paths, primaryKey, restoreKeys, options, enableCrossOsArchive = false) {
    var _a;
    return $4e9c1b31a68f4cb7$var$__awaiter(this, void 0, void 0, function*() {
        $4e9c1b31a68f4cb7$var$checkPaths(paths);
        restoreKeys = restoreKeys || [];
        const keys = [
            primaryKey,
            ...restoreKeys
        ];
        $4e9c1b31a68f4cb7$var$core.debug('Resolved Keys:');
        $4e9c1b31a68f4cb7$var$core.debug(JSON.stringify(keys));
        if (keys.length > 10) throw new $4e9c1b31a68f4cb7$var$ValidationError(`Key Validation Error: Keys are limited to a maximum of 10.`);
        for (const key of keys)$4e9c1b31a68f4cb7$var$checkKey(key);
        const compressionMethod = yield $4e9c1b31a68f4cb7$var$utils.getCompressionMethod();
        let archivePath = '';
        try {
            // path are needed to compute version
            const cacheEntry = yield $4e9c1b31a68f4cb7$var$cacheHttpClient.getCacheEntry(keys, paths, {
                compressionMethod: compressionMethod,
                enableCrossOsArchive: enableCrossOsArchive
            });
            if (!(cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.archiveLocation)) // Cache not found
            return undefined;
            if (options === null || options === void 0 ? void 0 : options.lookupOnly) {
                $4e9c1b31a68f4cb7$var$core.info('Lookup only - skipping download');
                return cacheEntry.cacheKey;
            }
            archivePath = $4e9c1b31a68f4cb7$var$path.join((yield $4e9c1b31a68f4cb7$var$utils.createTempDirectory()), $4e9c1b31a68f4cb7$var$utils.getCacheFileName(compressionMethod));
            $4e9c1b31a68f4cb7$var$core.debug(`Archive Path: ${archivePath}`);
            // Download the cache from the cache entry
            const beforeDownload = Date.now();
            yield $4e9c1b31a68f4cb7$var$cacheHttpClient.downloadCache(cacheEntry.archiveLocation, archivePath, options);
            const downloadTimeMs = Date.now() - beforeDownload;
            if ($4e9c1b31a68f4cb7$var$core.isDebug()) yield (0, $0e5129e1c0e1748b$exports.listTar)(archivePath, compressionMethod);
            const archiveFileSize = $4e9c1b31a68f4cb7$var$utils.getArchiveFileSizeInBytes(archivePath);
            $4e9c1b31a68f4cb7$var$core.info(`Cache Size: ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B)`);
            const beforeExtract = Date.now();
            yield (0, $0e5129e1c0e1748b$exports.extractTar)(archivePath, compressionMethod);
            const extractTimeMs = Date.now() - beforeExtract;
            $4e9c1b31a68f4cb7$var$core.info('Cache restored successfully');
            yield $4e9c1b31a68f4cb7$var$cacheHttpClient.reportCacheRestore({
                cacheKey: cacheEntry.cacheKey,
                cacheVersion: cacheEntry.cacheVersion,
                scope: cacheEntry.scope,
                size: archiveFileSize,
                downloadConcurrency: (_a = options === null || options === void 0 ? void 0 : options.downloadConcurrency) !== null && _a !== void 0 ? _a : 8,
                downloadTimeMs: downloadTimeMs,
                extractTimeMs: extractTimeMs
            });
            return cacheEntry.cacheKey;
        } catch (error) {
            const typedError = error;
            if (typedError.name === $4e9c1b31a68f4cb7$var$ValidationError.name) throw error;
            else // Supress all non-validation cache related errors because caching should be optional
            $4e9c1b31a68f4cb7$var$core.warning(`Failed to restore: ${error.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $4e9c1b31a68f4cb7$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $4e9c1b31a68f4cb7$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return undefined;
    });
}
module.exports.restoreCache = $4e9c1b31a68f4cb7$var$restoreCache;
/**
 * Saves a list of files with the specified key
 *
 * @param paths a list of file paths to be cached
 * @param key an explicit key for restoring the cache
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @param options cache upload options
 * @returns number returns cacheId if the cache was saved successfully and throws an error if save fails
 */ function $4e9c1b31a68f4cb7$var$saveCache(paths, key, options, enableCrossOsArchive = false) {
    var _a, _b, _c, _d, _e, _f;
    return $4e9c1b31a68f4cb7$var$__awaiter(this, void 0, void 0, function*() {
        $4e9c1b31a68f4cb7$var$checkPaths(paths);
        $4e9c1b31a68f4cb7$var$checkKey(key);
        const compressionMethod = yield $4e9c1b31a68f4cb7$var$utils.getCompressionMethod();
        const cachePaths = yield $4e9c1b31a68f4cb7$var$utils.resolvePaths(paths);
        $4e9c1b31a68f4cb7$var$core.debug('Cache Paths:');
        $4e9c1b31a68f4cb7$var$core.debug(`${JSON.stringify(cachePaths)}`);
        if (cachePaths.length === 0) throw new Error(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.`);
        const archiveFolder = yield $4e9c1b31a68f4cb7$var$utils.createTempDirectory();
        const archivePath = $4e9c1b31a68f4cb7$var$path.join(archiveFolder, $4e9c1b31a68f4cb7$var$utils.getCacheFileName(compressionMethod));
        $4e9c1b31a68f4cb7$var$core.debug(`Archive Path: ${archivePath}`);
        try {
            const beforeArchive = Date.now();
            yield (0, $0e5129e1c0e1748b$exports.createTar)(archiveFolder, cachePaths, compressionMethod);
            const archiveTimeMs = Date.now() - beforeArchive;
            if ($4e9c1b31a68f4cb7$var$core.isDebug()) yield (0, $0e5129e1c0e1748b$exports.listTar)(archivePath, compressionMethod);
            const fileSizeLimit = 5357971701.76; // 4.99 per cache limit
            const archiveFileSize = $4e9c1b31a68f4cb7$var$utils.getArchiveFileSizeInBytes(archivePath);
            $4e9c1b31a68f4cb7$var$core.debug(`File Size: ${archiveFileSize}`);
            // For GHES, this check will take place in ReserveCache API with enterprise file size limit
            if (archiveFileSize > fileSizeLimit && !$4e9c1b31a68f4cb7$var$utils.isGhes()) throw new Error(`Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the 10GB limit, not saving cache.`);
            $4e9c1b31a68f4cb7$var$core.debug('Reserving Cache');
            const version = $4e9c1b31a68f4cb7$var$cacheHttpClient.getCacheVersion(paths, compressionMethod, enableCrossOsArchive);
            const reserveCacheResponse = yield $4e9c1b31a68f4cb7$var$cacheHttpClient.reserveCache(key, version, {
                compressionMethod: compressionMethod,
                enableCrossOsArchive: enableCrossOsArchive,
                cacheSize: archiveFileSize,
                uploadConcurrency: options === null || options === void 0 ? void 0 : options.uploadConcurrency
            });
            let uploadId;
            let urls;
            if ((_a = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.result) === null || _a === void 0 ? void 0 : _a.uploadId) {
                uploadId = (_b = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.result) === null || _b === void 0 ? void 0 : _b.uploadId;
                urls = (_c = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.result) === null || _c === void 0 ? void 0 : _c.urls;
            } else if ((reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.statusCode) === 400) throw new Error((_e = (_d = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.error) === null || _d === void 0 ? void 0 : _d.message) !== null && _e !== void 0 ? _e : `Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the data cap limit, not saving cache.`);
            else throw new $4e9c1b31a68f4cb7$var$ReserveCacheError(`Unable to reserve cache with key ${key}, another job may be creating this cache. More details: ${(_f = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.error) === null || _f === void 0 ? void 0 : _f.message}`);
            $4e9c1b31a68f4cb7$var$core.debug(`Saving Cache (ID: ${uploadId})`);
            yield $4e9c1b31a68f4cb7$var$cacheHttpClient.saveCache(key, version, uploadId, urls, archivePath, archiveTimeMs, options);
        } catch (error) {
            const typedError = error;
            if (typedError.name === $4e9c1b31a68f4cb7$var$ValidationError.name) throw error;
            else if (typedError.name === $4e9c1b31a68f4cb7$var$ReserveCacheError.name) $4e9c1b31a68f4cb7$var$core.info(`Failed to save: ${typedError.message}`);
            else $4e9c1b31a68f4cb7$var$core.warning(`Failed to save: ${typedError.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $4e9c1b31a68f4cb7$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $4e9c1b31a68f4cb7$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        //Return a 0 for competibility
        return 0;
    });
}
module.exports.saveCache = $4e9c1b31a68f4cb7$var$saveCache;
/**
 * Delete a list of caches with the specified keys
 * @param keys a list of keys for deleting the cache
 */ function $4e9c1b31a68f4cb7$var$deleteCache(keys) {
    return $4e9c1b31a68f4cb7$var$__awaiter(this, void 0, void 0, function*() {
        $4e9c1b31a68f4cb7$var$core.debug('Deleting Cache');
        $4e9c1b31a68f4cb7$var$core.debug(`Cache Keys: ${keys}`);
        try {
            yield $4e9c1b31a68f4cb7$var$cacheHttpClient.deleteCache(keys);
        } catch (error) {
            $4e9c1b31a68f4cb7$var$core.warning(`Failed to delete: ${error.message}`);
        }
    });
}
module.exports.deleteCache = $4e9c1b31a68f4cb7$var$deleteCache;


