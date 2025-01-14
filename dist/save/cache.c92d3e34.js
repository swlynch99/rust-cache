require("./core.fa35ff64.js");
require("./cacheUtils.fb4919b4.js");
require("./cacheHttpClient.43ec6ef2.js");
require("./tar.4f8439ec.js");
var $bRe9c$path = require("path");


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
parcelRegister("7dEm7", function(module, exports) {
module.exports = new URL("cacheUtils.fb4919b4.js", "file:" + __filename).toString();

});

parcelRegister("gr87b", function(module, exports) {
module.exports = new URL("cacheHttpClient.43ec6ef2.js", "file:" + __filename).toString();

});

"use strict";
var $f922b1b04929ee0f$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $f922b1b04929ee0f$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $f922b1b04929ee0f$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $f922b1b04929ee0f$var$__createBinding(result, mod, k);
    }
    $f922b1b04929ee0f$var$__setModuleDefault(result, mod);
    return result;
};
var $f922b1b04929ee0f$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $f922b1b04929ee0f$var$core = $f922b1b04929ee0f$var$__importStar((parcelRequire("AJTaV")));

const $f922b1b04929ee0f$var$path = $f922b1b04929ee0f$var$__importStar($bRe9c$path);

const $f922b1b04929ee0f$var$utils = $f922b1b04929ee0f$var$__importStar((parcelRequire("7dEm7")));

const $f922b1b04929ee0f$var$cacheHttpClient = $f922b1b04929ee0f$var$__importStar((parcelRequire("gr87b")));
var $76a316278d9293d1$exports = {};
$76a316278d9293d1$exports = new URL("tar.4f8439ec.js", "file:" + __filename).toString();


class $f922b1b04929ee0f$var$ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
        Object.setPrototypeOf(this, $f922b1b04929ee0f$var$ValidationError.prototype);
    }
}
module.exports.ValidationError = $f922b1b04929ee0f$var$ValidationError;
class $f922b1b04929ee0f$var$ReserveCacheError extends Error {
    constructor(message){
        super(message);
        this.name = 'ReserveCacheError';
        Object.setPrototypeOf(this, $f922b1b04929ee0f$var$ReserveCacheError.prototype);
    }
}
module.exports.ReserveCacheError = $f922b1b04929ee0f$var$ReserveCacheError;
function $f922b1b04929ee0f$var$checkPaths(paths) {
    if (!paths || paths.length === 0) throw new $f922b1b04929ee0f$var$ValidationError(`Path Validation Error: At least one directory or file path is required`);
}
function $f922b1b04929ee0f$var$checkKey(key) {
    if (key.length > 512) throw new $f922b1b04929ee0f$var$ValidationError(`Key Validation Error: ${key} cannot be larger than 512 characters.`);
    const regex = /^[^,]*$/;
    if (!regex.test(key)) throw new $f922b1b04929ee0f$var$ValidationError(`Key Validation Error: ${key} cannot contain commas.`);
}
/**
 * isFeatureAvailable to check the presence of Actions cache service
 *
 * @returns boolean return true if Actions cache service feature is available, otherwise false
 */ function $f922b1b04929ee0f$var$isFeatureAvailable() {
    return !!process.env['ACTIONS_CACHE_URL'];
}
module.exports.isFeatureAvailable = $f922b1b04929ee0f$var$isFeatureAvailable;
/**
 * Restores cache from keys
 *
 * @param paths a list of file paths to restore from the cache
 * @param primaryKey an explicit key for restoring the cache
 * @param restoreKeys an optional ordered list of keys to use for restoring the cache if no cache hit occurred for key
 * @param downloadOptions cache download options
 * @param enableCrossOsArchive an optional boolean enabled to restore on windows any cache created on any platform
 * @returns string returns the key for the cache hit, otherwise returns undefined
 */ function $f922b1b04929ee0f$var$restoreCache(paths, primaryKey, restoreKeys, options, enableCrossOsArchive = false) {
    var _a;
    return $f922b1b04929ee0f$var$__awaiter(this, void 0, void 0, function*() {
        $f922b1b04929ee0f$var$checkPaths(paths);
        restoreKeys = restoreKeys || [];
        const keys = [
            primaryKey,
            ...restoreKeys
        ];
        $f922b1b04929ee0f$var$core.debug('Resolved Keys:');
        $f922b1b04929ee0f$var$core.debug(JSON.stringify(keys));
        if (keys.length > 10) throw new $f922b1b04929ee0f$var$ValidationError(`Key Validation Error: Keys are limited to a maximum of 10.`);
        for (const key of keys)$f922b1b04929ee0f$var$checkKey(key);
        const compressionMethod = yield $f922b1b04929ee0f$var$utils.getCompressionMethod();
        let archivePath = '';
        try {
            // path are needed to compute version
            const cacheEntry = yield $f922b1b04929ee0f$var$cacheHttpClient.getCacheEntry(keys, paths, {
                compressionMethod: compressionMethod,
                enableCrossOsArchive: enableCrossOsArchive
            });
            if (!(cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.archiveLocation)) // Cache not found
            return undefined;
            if (options === null || options === void 0 ? void 0 : options.lookupOnly) {
                $f922b1b04929ee0f$var$core.info('Lookup only - skipping download');
                return cacheEntry.cacheKey;
            }
            archivePath = $f922b1b04929ee0f$var$path.join((yield $f922b1b04929ee0f$var$utils.createTempDirectory()), $f922b1b04929ee0f$var$utils.getCacheFileName(compressionMethod));
            $f922b1b04929ee0f$var$core.debug(`Archive Path: ${archivePath}`);
            // Download the cache from the cache entry
            const beforeDownload = Date.now();
            yield $f922b1b04929ee0f$var$cacheHttpClient.downloadCache(cacheEntry.archiveLocation, archivePath, options);
            const downloadTimeMs = Date.now() - beforeDownload;
            if ($f922b1b04929ee0f$var$core.isDebug()) yield (0, $76a316278d9293d1$exports.listTar)(archivePath, compressionMethod);
            const archiveFileSize = $f922b1b04929ee0f$var$utils.getArchiveFileSizeInBytes(archivePath);
            $f922b1b04929ee0f$var$core.info(`Cache Size: ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B)`);
            const beforeExtract = Date.now();
            yield (0, $76a316278d9293d1$exports.extractTar)(archivePath, compressionMethod);
            const extractTimeMs = Date.now() - beforeExtract;
            $f922b1b04929ee0f$var$core.info('Cache restored successfully');
            yield $f922b1b04929ee0f$var$cacheHttpClient.reportCacheRestore({
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
            if (typedError.name === $f922b1b04929ee0f$var$ValidationError.name) throw error;
            else // Supress all non-validation cache related errors because caching should be optional
            $f922b1b04929ee0f$var$core.warning(`Failed to restore: ${error.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $f922b1b04929ee0f$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $f922b1b04929ee0f$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        return undefined;
    });
}
module.exports.restoreCache = $f922b1b04929ee0f$var$restoreCache;
/**
 * Saves a list of files with the specified key
 *
 * @param paths a list of file paths to be cached
 * @param key an explicit key for restoring the cache
 * @param enableCrossOsArchive an optional boolean enabled to save cache on windows which could be restored on any platform
 * @param options cache upload options
 * @returns number returns cacheId if the cache was saved successfully and throws an error if save fails
 */ function $f922b1b04929ee0f$var$saveCache(paths, key, options, enableCrossOsArchive = false) {
    var _a, _b, _c, _d, _e, _f;
    return $f922b1b04929ee0f$var$__awaiter(this, void 0, void 0, function*() {
        $f922b1b04929ee0f$var$checkPaths(paths);
        $f922b1b04929ee0f$var$checkKey(key);
        const compressionMethod = yield $f922b1b04929ee0f$var$utils.getCompressionMethod();
        const cachePaths = yield $f922b1b04929ee0f$var$utils.resolvePaths(paths);
        $f922b1b04929ee0f$var$core.debug('Cache Paths:');
        $f922b1b04929ee0f$var$core.debug(`${JSON.stringify(cachePaths)}`);
        if (cachePaths.length === 0) throw new Error(`Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.`);
        const archiveFolder = yield $f922b1b04929ee0f$var$utils.createTempDirectory();
        const archivePath = $f922b1b04929ee0f$var$path.join(archiveFolder, $f922b1b04929ee0f$var$utils.getCacheFileName(compressionMethod));
        $f922b1b04929ee0f$var$core.debug(`Archive Path: ${archivePath}`);
        try {
            const beforeArchive = Date.now();
            yield (0, $76a316278d9293d1$exports.createTar)(archiveFolder, cachePaths, compressionMethod);
            const archiveTimeMs = Date.now() - beforeArchive;
            if ($f922b1b04929ee0f$var$core.isDebug()) yield (0, $76a316278d9293d1$exports.listTar)(archivePath, compressionMethod);
            const fileSizeLimit = 5357971701.76; // 4.99 per cache limit
            const archiveFileSize = $f922b1b04929ee0f$var$utils.getArchiveFileSizeInBytes(archivePath);
            $f922b1b04929ee0f$var$core.debug(`File Size: ${archiveFileSize}`);
            // For GHES, this check will take place in ReserveCache API with enterprise file size limit
            if (archiveFileSize > fileSizeLimit && !$f922b1b04929ee0f$var$utils.isGhes()) throw new Error(`Cache size of ~${Math.round(archiveFileSize / 1048576)} MB (${archiveFileSize} B) is over the 10GB limit, not saving cache.`);
            $f922b1b04929ee0f$var$core.debug('Reserving Cache');
            const version = $f922b1b04929ee0f$var$cacheHttpClient.getCacheVersion(paths, compressionMethod, enableCrossOsArchive);
            const reserveCacheResponse = yield $f922b1b04929ee0f$var$cacheHttpClient.reserveCache(key, version, {
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
            else throw new $f922b1b04929ee0f$var$ReserveCacheError(`Unable to reserve cache with key ${key}, another job may be creating this cache. More details: ${(_f = reserveCacheResponse === null || reserveCacheResponse === void 0 ? void 0 : reserveCacheResponse.error) === null || _f === void 0 ? void 0 : _f.message}`);
            $f922b1b04929ee0f$var$core.debug(`Saving Cache (ID: ${uploadId})`);
            yield $f922b1b04929ee0f$var$cacheHttpClient.saveCache(key, version, uploadId, urls, archivePath, archiveTimeMs, options);
        } catch (error) {
            const typedError = error;
            if (typedError.name === $f922b1b04929ee0f$var$ValidationError.name) throw error;
            else if (typedError.name === $f922b1b04929ee0f$var$ReserveCacheError.name) $f922b1b04929ee0f$var$core.info(`Failed to save: ${typedError.message}`);
            else $f922b1b04929ee0f$var$core.warning(`Failed to save: ${typedError.message}`);
        } finally{
            // Try to delete the archive to save space
            try {
                yield $f922b1b04929ee0f$var$utils.unlinkFile(archivePath);
            } catch (error) {
                $f922b1b04929ee0f$var$core.debug(`Failed to delete archive: ${error}`);
            }
        }
        //Return a 0 for competibility
        return 0;
    });
}
module.exports.saveCache = $f922b1b04929ee0f$var$saveCache;
/**
 * Delete a list of caches with the specified keys
 * @param keys a list of keys for deleting the cache
 */ function $f922b1b04929ee0f$var$deleteCache(keys) {
    return $f922b1b04929ee0f$var$__awaiter(this, void 0, void 0, function*() {
        $f922b1b04929ee0f$var$core.debug('Deleting Cache');
        $f922b1b04929ee0f$var$core.debug(`Cache Keys: ${keys}`);
        try {
            yield $f922b1b04929ee0f$var$cacheHttpClient.deleteCache(keys);
        } catch (error) {
            $f922b1b04929ee0f$var$core.warning(`Failed to delete: ${error.message}`);
        }
    });
}
module.exports.deleteCache = $f922b1b04929ee0f$var$deleteCache;


//# sourceMappingURL=cache.c92d3e34.js.map
