require("./file.253e2c46.js");
require("./p-limit.d2bcb030.js");
require("./crc32c.ee191616.js");
require("./build.f178b9b0.js");
require("./fxp.c32e4513.js");
require("./async-retry.1806164e.js");
require("./util.5e6d5c35.js");
require("./util.14aba05f.js");
require("./package-json-helper.02eb8661.js");
var $f09E7$path = require("path");
var $f09E7$fs = require("fs");
var $f09E7$crypto = require("crypto");


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
parcelRegister("lSB3Y", function(module, exports) {
"use strict";
/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $fedb6415fc689216$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $fedb6415fc689216$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $fedb6415fc689216$var$__importStar = module.exports && module.exports.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $fedb6415fc689216$var$__createBinding(result, mod, k[i]);
        }
        $fedb6415fc689216$var$__setModuleDefault(result, mod);
        return result;
    };
}();
var $fedb6415fc689216$var$__classPrivateFieldGet = module.exports && module.exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var $fedb6415fc689216$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_setGoogApiClientHeaders, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.TransferManager = module.exports.MultiPartUploadError = void 0;

var $lJUcF = parcelRequire("lJUcF");

const $fedb6415fc689216$var$p_limit_1 = $fedb6415fc689216$var$__importDefault((parcelRequire("2Kx0r")));

const $fedb6415fc689216$var$path = $fedb6415fc689216$var$__importStar($f09E7$path);


var $jL9jF = parcelRequire("jL9jF");

var $4gMhs = parcelRequire("4gMhs");

var $4haMh = parcelRequire("4haMh");

const $fedb6415fc689216$var$async_retry_1 = $fedb6415fc689216$var$__importDefault((parcelRequire("2NKCy")));


var $fJ9ES = parcelRequire("fJ9ES");

var $dY7Uc = parcelRequire("dY7Uc");

var $7OYF7 = parcelRequire("7OYF7");
const $fedb6415fc689216$var$packageJson = (0, $7OYF7.getPackageJSON)();
/**
 * Default number of concurrently executing promises to use when calling uploadManyFiles.
 *
 */ const $fedb6415fc689216$var$DEFAULT_PARALLEL_UPLOAD_LIMIT = 5;
/**
 * Default number of concurrently executing promises to use when calling downloadManyFiles.
 *
 */ const $fedb6415fc689216$var$DEFAULT_PARALLEL_DOWNLOAD_LIMIT = 5;
/**
 * Default number of concurrently executing promises to use when calling downloadFileInChunks.
 *
 */ const $fedb6415fc689216$var$DEFAULT_PARALLEL_CHUNKED_DOWNLOAD_LIMIT = 5;
/**
 * The minimum size threshold in bytes at which to apply a chunked download strategy when calling downloadFileInChunks.
 *
 */ const $fedb6415fc689216$var$DOWNLOAD_IN_CHUNKS_FILE_SIZE_THRESHOLD = 33554432;
/**
 * The chunk size in bytes to use when calling downloadFileInChunks.
 *
 */ const $fedb6415fc689216$var$DOWNLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE = 33554432;
/**
 * The chunk size in bytes to use when calling uploadFileInChunks.
 *
 */ const $fedb6415fc689216$var$UPLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE = 33554432;
/**
 * Default number of concurrently executing promises to use when calling uploadFileInChunks.
 *
 */ const $fedb6415fc689216$var$DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT = 5;
const $fedb6415fc689216$var$EMPTY_REGEX = '(?:)';
/**
 * The `gccl-gcs-cmd` value for the `X-Goog-API-Client` header.
 * Example: `gccl-gcs-cmd/tm.upload_many`
 *
 * @see {@link GCCL_GCS_CMD}.
 * @see {@link GCCL_GCS_CMD_KEY}.
 */ const $fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE = {
    UPLOAD_MANY: 'tm.upload_many',
    DOWNLOAD_MANY: 'tm.download_many',
    UPLOAD_SHARDED: 'tm.upload_sharded',
    DOWNLOAD_SHARDED: 'tm.download_sharded'
};
const $fedb6415fc689216$var$defaultMultiPartGenerator = (bucket, fileName, uploadId, partsMap)=>{
    return new $fedb6415fc689216$var$XMLMultiPartUploadHelper(bucket, fileName, uploadId, partsMap);
};
class $fedb6415fc689216$var$MultiPartUploadError extends Error {
    constructor(message, uploadId, partsMap){
        super(message);
        this.uploadId = uploadId;
        this.partsMap = partsMap;
    }
}
module.exports.MultiPartUploadError = $fedb6415fc689216$var$MultiPartUploadError;
/**
 * Class representing an implementation of MPU in the XML API. This class is not meant for public usage.
 *
 * @private
 *
 */ class $fedb6415fc689216$var$XMLMultiPartUploadHelper {
    constructor(bucket, fileName, uploadId, partsMap){
        $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances.add(this);
        this.authClient = bucket.storage.authClient || new $4gMhs.GoogleAuth();
        this.uploadId = uploadId || '';
        this.bucket = bucket;
        this.fileName = fileName;
        this.baseUrl = `https://${bucket.name}.${new URL(this.bucket.storage.apiEndpoint).hostname}/${fileName}`;
        this.xmlBuilder = new $4haMh.XMLBuilder({
            arrayNodeName: 'Part'
        });
        this.xmlParser = new $4haMh.XMLParser();
        this.partsMap = partsMap || new Map();
        this.retryOptions = {
            retries: this.bucket.storage.retryOptions.maxRetries,
            factor: this.bucket.storage.retryOptions.retryDelayMultiplier,
            maxTimeout: this.bucket.storage.retryOptions.maxRetryDelay * 1000,
            maxRetryTime: this.bucket.storage.retryOptions.totalTimeout * 1000
        };
    }
    /**
     * Initiates a multipart upload (MPU) to the XML API and stores the resultant upload id.
     *
     * @returns {Promise<void>}
     */ async initiateUpload(headers = {}) {
        const url = `${this.baseUrl}?uploads`;
        return (0, $fedb6415fc689216$var$async_retry_1.default)(async (bail)=>{
            try {
                const res = await this.authClient.request({
                    headers: $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_setGoogApiClientHeaders).call(this, headers),
                    method: 'POST',
                    url: url
                });
                if (res.data && res.data.error) throw res.data.error;
                const parsedXML = this.xmlParser.parse(res.data);
                this.uploadId = parsedXML.InitiateMultipartUploadResult.UploadId;
            } catch (e) {
                $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse).call(this, e, bail);
            }
        }, this.retryOptions);
    }
    /**
     * Uploads the provided chunk of data to the XML API using the previously created upload id.
     *
     * @param {number} partNumber the sequence number of this chunk.
     * @param {Buffer} chunk the chunk of data to be uploaded.
     * @param {string | false} validation whether or not to include the md5 hash in the headers to cause the server
     * to validate the chunk was not corrupted.
     * @returns {Promise<void>}
     */ async uploadPart(partNumber, chunk, validation) {
        const url = `${this.baseUrl}?partNumber=${partNumber}&uploadId=${this.uploadId}`;
        let headers = $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_setGoogApiClientHeaders).call(this);
        if (validation === 'md5') {
            const hash = (0, $f09E7$crypto.createHash)('md5').update(chunk).digest('base64');
            headers = {
                'Content-MD5': hash
            };
        }
        return (0, $fedb6415fc689216$var$async_retry_1.default)(async (bail)=>{
            try {
                const res = await this.authClient.request({
                    url: url,
                    method: 'PUT',
                    body: chunk,
                    headers: headers
                });
                if (res.data && res.data.error) throw res.data.error;
                this.partsMap.set(partNumber, res.headers['etag']);
            } catch (e) {
                $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse).call(this, e, bail);
            }
        }, this.retryOptions);
    }
    /**
     * Sends the final request of the MPU to tell GCS the upload is now complete.
     *
     * @returns {Promise<void>}
     */ async completeUpload() {
        const url = `${this.baseUrl}?uploadId=${this.uploadId}`;
        const sortedMap = new Map([
            ...this.partsMap.entries()
        ].sort((a, b)=>a[0] - b[0]));
        const parts = [];
        for (const entry of sortedMap.entries())parts.push({
            PartNumber: entry[0],
            ETag: entry[1]
        });
        const body = `<CompleteMultipartUpload>${this.xmlBuilder.build(parts)}</CompleteMultipartUpload>`;
        return (0, $fedb6415fc689216$var$async_retry_1.default)(async (bail)=>{
            try {
                const res = await this.authClient.request({
                    headers: $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_setGoogApiClientHeaders).call(this),
                    url: url,
                    method: 'POST',
                    body: body
                });
                if (res.data && res.data.error) throw res.data.error;
                return res;
            } catch (e) {
                $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse).call(this, e, bail);
                return;
            }
        }, this.retryOptions);
    }
    /**
     * Aborts an multipart upload that is in progress. Once aborted, any parts in the process of being uploaded fail,
     * and future requests using the upload ID fail.
     *
     * @returns {Promise<void>}
     */ async abortUpload() {
        const url = `${this.baseUrl}?uploadId=${this.uploadId}`;
        return (0, $fedb6415fc689216$var$async_retry_1.default)(async (bail)=>{
            try {
                const res = await this.authClient.request({
                    url: url,
                    method: 'DELETE'
                });
                if (res.data && res.data.error) throw res.data.error;
            } catch (e) {
                $fedb6415fc689216$var$__classPrivateFieldGet(this, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances, "m", $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse).call(this, e, bail);
                return;
            }
        }, this.retryOptions);
    }
}
$fedb6415fc689216$var$_XMLMultiPartUploadHelper_instances = new WeakSet(), $fedb6415fc689216$var$_XMLMultiPartUploadHelper_setGoogApiClientHeaders = function _XMLMultiPartUploadHelper_setGoogApiClientHeaders(headers = {}) {
    let headerFound = false;
    let userAgentFound = false;
    for (const [key, value] of Object.entries(headers)){
        if (key.toLocaleLowerCase().trim() === 'x-goog-api-client') {
            headerFound = true;
            // Prepend command feature to value, if not already there
            if (!value.includes($fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.UPLOAD_SHARDED)) headers[key] = `${value} gccl-gcs-cmd/${$fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.UPLOAD_SHARDED}`;
        } else if (key.toLocaleLowerCase().trim() === 'user-agent') userAgentFound = true;
    }
    // If the header isn't present, add it
    if (!headerFound) headers['x-goog-api-client'] = `${(0, $dY7Uc.getRuntimeTrackingString)()} gccl/${$fedb6415fc689216$var$packageJson.version} gccl-gcs-cmd/${$fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.UPLOAD_SHARDED}`;
    // If the User-Agent isn't present, add it
    if (!userAgentFound) headers['User-Agent'] = (0, $dY7Uc.getUserAgentString)();
    return headers;
}, $fedb6415fc689216$var$_XMLMultiPartUploadHelper_handleErrorResponse = function _XMLMultiPartUploadHelper_handleErrorResponse(err, bail) {
    if (this.bucket.storage.retryOptions.autoRetry && this.bucket.storage.retryOptions.retryableErrorFn(err)) throw err;
    else bail(err);
};
/**
 * Create a TransferManager object to perform parallel transfer operations on a Cloud Storage bucket.
 *
 * @class
 * @hideconstructor
 *
 * @param {Bucket} bucket A {@link Bucket} instance
 *
 */ class $fedb6415fc689216$var$TransferManager {
    constructor(bucket){
        this.bucket = bucket;
    }
    /**
     * @typedef {object} UploadManyFilesOptions
     * @property {number} [concurrencyLimit] The number of concurrently executing promises
     * to use when uploading the files.
     * @property {Function} [customDestinationBuilder] A fuction that will take the current path of a local file
     * and return a string representing a custom path to be used to upload the file to GCS.
     * @property {boolean} [skipIfExists] Do not upload the file if it already exists in
     * the bucket. This will set the precondition ifGenerationMatch = 0.
     * @property {string} [prefix] A prefix to append to all of the uploaded files.
     * @property {object} [passthroughOptions] {@link UploadOptions} Options to be passed through
     * to each individual upload operation.
     *
     */ /**
     * Upload multiple files in parallel to the bucket. This is a convenience method
     * that utilizes {@link Bucket#upload} to perform the upload.
     *
     * @param {array | string} [filePathsOrDirectory] An array of fully qualified paths to the files or a directory name.
     * If a directory name is provided, the directory will be recursively walked and all files will be added to the upload list.
     * to be uploaded to the bucket
     * @param {UploadManyFilesOptions} [options] Configuration options.
     * @returns {Promise<UploadResponse[]>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const bucket = storage.bucket('my-bucket');
     * const transferManager = new TransferManager(bucket);
     *
     * //-
     * // Upload multiple files in parallel.
     * //-
     * const response = await transferManager.uploadManyFiles(['/local/path/file1.txt, 'local/path/file2.txt']);
     * // Your bucket now contains:
     * // - "local/path/file1.txt" (with the contents of '/local/path/file1.txt')
     * // - "local/path/file2.txt" (with the contents of '/local/path/file2.txt')
     * const response = await transferManager.uploadManyFiles('/local/directory');
     * // Your bucket will now contain all files contained in '/local/directory' maintaining the subdirectory structure.
     * ```
     *
     */ async uploadManyFiles(filePathsOrDirectory, options = {}) {
        var _a;
        if (options.skipIfExists && ((_a = options.passthroughOptions) === null || _a === void 0 ? void 0 : _a.preconditionOpts)) options.passthroughOptions.preconditionOpts.ifGenerationMatch = 0;
        else if (options.skipIfExists && options.passthroughOptions === undefined) options.passthroughOptions = {
            preconditionOpts: {
                ifGenerationMatch: 0
            }
        };
        const limit = (0, $fedb6415fc689216$var$p_limit_1.default)(options.concurrencyLimit || $fedb6415fc689216$var$DEFAULT_PARALLEL_UPLOAD_LIMIT);
        const promises = [];
        let allPaths = [];
        if (!Array.isArray(filePathsOrDirectory)) for await (const curPath of this.getPathsFromDirectory(filePathsOrDirectory))allPaths.push(curPath);
        else allPaths = filePathsOrDirectory;
        for (const filePath of allPaths){
            const stat = await $f09E7$fs.promises.lstat(filePath);
            if (stat.isDirectory()) continue;
            const passThroughOptionsCopy = {
                ...options.passthroughOptions,
                [$fJ9ES.GCCL_GCS_CMD_KEY]: $fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.UPLOAD_MANY
            };
            passThroughOptionsCopy.destination = options.customDestinationBuilder ? options.customDestinationBuilder(filePath, options) : filePath.split($fedb6415fc689216$var$path.sep).join($fedb6415fc689216$var$path.posix.sep);
            if (options.prefix) passThroughOptionsCopy.destination = $fedb6415fc689216$var$path.posix.join(...options.prefix.split($fedb6415fc689216$var$path.sep), passThroughOptionsCopy.destination);
            promises.push(limit(()=>this.bucket.upload(filePath, passThroughOptionsCopy)));
        }
        return Promise.all(promises);
    }
    /**
     * @typedef {object} DownloadManyFilesOptions
     * @property {number} [concurrencyLimit] The number of concurrently executing promises
     * to use when downloading the files.
     * @property {string} [prefix] A prefix to append to all of the downloaded files.
     * @property {string} [stripPrefix] A prefix to remove from all of the downloaded files.
     * @property {object} [passthroughOptions] {@link DownloadOptions} Options to be passed through
     * to each individual download operation.
     * @property {boolean} [skipIfExists] Do not download the file if it already exists in
     * the destination.
     *
     */ /**
     * Download multiple files in parallel to the local filesystem. This is a convenience method
     * that utilizes {@link File#download} to perform the download.
     *
     * @param {array | string} [filesOrFolder] An array of file name strings or file objects to be downloaded. If
     * a string is provided this will be treated as a GCS prefix and all files with that prefix will be downloaded.
     * @param {DownloadManyFilesOptions} [options] Configuration options. Setting options.prefix or options.stripPrefix
     * or options.passthroughOptions.destination will cause the downloaded files to be written to the file system
     * instead of being returned as a buffer.
     * @returns {Promise<DownloadResponse[]>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const bucket = storage.bucket('my-bucket');
     * const transferManager = new TransferManager(bucket);
     *
     * //-
     * // Download multiple files in parallel.
     * //-
     * const response = await transferManager.downloadManyFiles(['file1.txt', 'file2.txt']);
     * // The following files have been downloaded:
     * // - "file1.txt" (with the contents from my-bucket.file1.txt)
     * // - "file2.txt" (with the contents from my-bucket.file2.txt)
     * const response = await transferManager.downloadManyFiles([bucket.File('file1.txt'), bucket.File('file2.txt')]);
     * // The following files have been downloaded:
     * // - "file1.txt" (with the contents from my-bucket.file1.txt)
     * // - "file2.txt" (with the contents from my-bucket.file2.txt)
     * const response = await transferManager.downloadManyFiles('test-folder');
     * // All files with GCS prefix of 'test-folder' have been downloaded.
     * ```
     *
     */ async downloadManyFiles(filesOrFolder, options = {}) {
        const limit = (0, $fedb6415fc689216$var$p_limit_1.default)(options.concurrencyLimit || $fedb6415fc689216$var$DEFAULT_PARALLEL_DOWNLOAD_LIMIT);
        const promises = [];
        let files = [];
        if (!Array.isArray(filesOrFolder)) {
            const directoryFiles = await this.bucket.getFiles({
                prefix: filesOrFolder
            });
            files = directoryFiles[0];
        } else files = filesOrFolder.map((curFile)=>{
            if (typeof curFile === 'string') return this.bucket.file(curFile);
            return curFile;
        });
        const stripRegexString = options.stripPrefix ? `^${options.stripPrefix}` : $fedb6415fc689216$var$EMPTY_REGEX;
        const regex = new RegExp(stripRegexString, 'g');
        for (const file of files){
            const passThroughOptionsCopy = {
                ...options.passthroughOptions,
                [$fJ9ES.GCCL_GCS_CMD_KEY]: $fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.DOWNLOAD_MANY
            };
            if (options.prefix || passThroughOptionsCopy.destination) passThroughOptionsCopy.destination = $fedb6415fc689216$var$path.join(options.prefix || '', passThroughOptionsCopy.destination || '', file.name);
            if (options.stripPrefix) passThroughOptionsCopy.destination = file.name.replace(regex, '');
            if (options.skipIfExists && (0, $f09E7$fs.existsSync)(passThroughOptionsCopy.destination || '')) continue;
            promises.push(limit(async ()=>{
                const destination = passThroughOptionsCopy.destination;
                if (destination && destination.endsWith($fedb6415fc689216$var$path.sep)) {
                    await $f09E7$fs.promises.mkdir(destination, {
                        recursive: true
                    });
                    return Promise.resolve([
                        Buffer.alloc(0)
                    ]);
                }
                return file.download(passThroughOptionsCopy);
            }));
        }
        return Promise.all(promises);
    }
    /**
     * @typedef {object} DownloadFileInChunksOptions
     * @property {number} [concurrencyLimit] The number of concurrently executing promises
     * to use when downloading the file.
     * @property {number} [chunkSizeBytes] The size in bytes of each chunk to be downloaded.
     * @property {string | boolean} [validation] Whether or not to perform a CRC32C validation check when download is complete.
     * @property {boolean} [noReturnData] Whether or not to return the downloaded data. A `true` value here would be useful for files with a size that will not fit into memory.
     *
     */ /**
     * Download a large file in chunks utilizing parallel download operations. This is a convenience method
     * that utilizes {@link File#download} to perform the download.
     *
     * @param {File | string} fileOrName {@link File} to download.
     * @param {DownloadFileInChunksOptions} [options] Configuration options.
     * @returns {Promise<void | DownloadResponse>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const bucket = storage.bucket('my-bucket');
     * const transferManager = new TransferManager(bucket);
     *
     * //-
     * // Download a large file in chunks utilizing parallel operations.
     * //-
     * const response = await transferManager.downloadFileInChunks(bucket.file('large-file.txt');
     * // Your local directory now contains:
     * // - "large-file.txt" (with the contents from my-bucket.large-file.txt)
     * ```
     *
     */ async downloadFileInChunks(fileOrName, options = {}) {
        let chunkSize = options.chunkSizeBytes || $fedb6415fc689216$var$DOWNLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE;
        let limit = (0, $fedb6415fc689216$var$p_limit_1.default)(options.concurrencyLimit || $fedb6415fc689216$var$DEFAULT_PARALLEL_CHUNKED_DOWNLOAD_LIMIT);
        const noReturnData = Boolean(options.noReturnData);
        const promises = [];
        const file = typeof fileOrName === 'string' ? this.bucket.file(fileOrName) : fileOrName;
        const fileInfo = await file.get();
        const size = parseInt(fileInfo[0].metadata.size.toString());
        // If the file size does not meet the threshold download it as a single chunk.
        if (size < $fedb6415fc689216$var$DOWNLOAD_IN_CHUNKS_FILE_SIZE_THRESHOLD) {
            limit = (0, $fedb6415fc689216$var$p_limit_1.default)(1);
            chunkSize = size;
        }
        let start = 0;
        const filePath = options.destination || $fedb6415fc689216$var$path.basename(file.name);
        const fileToWrite = await $f09E7$fs.promises.open(filePath, 'w');
        while(start < size){
            const chunkStart = start;
            let chunkEnd = start + chunkSize - 1;
            chunkEnd = chunkEnd > size ? size : chunkEnd;
            promises.push(limit(async ()=>{
                const resp = await file.download({
                    start: chunkStart,
                    end: chunkEnd,
                    [$fJ9ES.GCCL_GCS_CMD_KEY]: $fedb6415fc689216$var$GCCL_GCS_CMD_FEATURE.DOWNLOAD_SHARDED
                });
                const result = await fileToWrite.write(resp[0], 0, resp[0].length, chunkStart);
                if (noReturnData) return;
                return result.buffer;
            }));
            start += chunkSize;
        }
        let chunks;
        try {
            chunks = await Promise.all(promises);
        } finally{
            await fileToWrite.close();
        }
        if (options.validation === 'crc32c' && fileInfo[0].metadata.crc32c) {
            const downloadedCrc32C = await $jL9jF.CRC32C.fromFile(filePath);
            if (!downloadedCrc32C.validate(fileInfo[0].metadata.crc32c)) {
                const mismatchError = new $lJUcF.RequestError($lJUcF.FileExceptionMessages.DOWNLOAD_MISMATCH);
                mismatchError.code = 'CONTENT_DOWNLOAD_MISMATCH';
                throw mismatchError;
            }
        }
        if (noReturnData) return;
        return [
            Buffer.concat(chunks, size)
        ];
    }
    /**
     * @typedef {object} UploadFileInChunksOptions
     * @property {number} [concurrencyLimit] The number of concurrently executing promises
     * to use when uploading the file.
     * @property {number} [chunkSizeBytes] The size in bytes of each chunk to be uploaded.
     * @property {string} [uploadName] Name of the file when saving to GCS. If ommitted the name is taken from the file path.
     * @property {number} [maxQueueSize] The number of chunks to be uploaded to hold in memory concurrently. If not specified
     * defaults to the specified concurrency limit.
     * @property {string} [uploadId] If specified attempts to resume a previous upload.
     * @property {Map} [partsMap] If specified alongside uploadId, attempts to resume a previous upload from the last chunk
     * specified in partsMap
     * @property {object} [headers] headers to be sent when initiating the multipart upload.
     * See {@link https://cloud.google.com/storage/docs/xml-api/post-object-multipart#request_headers| Request Headers: Initiate a Multipart Upload}
     * @property {boolean} [autoAbortFailure] boolean to indicate if an in progress upload session will be automatically aborted upon failure. If not set,
     * failures will be automatically aborted.
     *
     */ /**
     * Upload a large file in chunks utilizing parallel upload opertions. If the upload fails, an uploadId and
     * map containing all the successfully uploaded parts will be returned to the caller. These arguments can be used to
     * resume the upload.
     *
     * @param {string} [filePath] The path of the file to be uploaded
     * @param {UploadFileInChunksOptions} [options] Configuration options.
     * @param {MultiPartHelperGenerator} [generator] A function that will return a type that implements the MPU interface. Most users will not need to use this.
     * @returns {Promise<void>} If successful a promise resolving to void, otherwise a error containing the message, uploadid, and parts map.
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const bucket = storage.bucket('my-bucket');
     * const transferManager = new TransferManager(bucket);
     *
     * //-
     * // Upload a large file in chunks utilizing parallel operations.
     * //-
     * const response = await transferManager.uploadFileInChunks('large-file.txt');
     * // Your bucket now contains:
     * // - "large-file.txt"
     * ```
     *
     *
     */ async uploadFileInChunks(filePath, options = {}, generator = $fedb6415fc689216$var$defaultMultiPartGenerator) {
        const chunkSize = options.chunkSizeBytes || $fedb6415fc689216$var$UPLOAD_IN_CHUNKS_DEFAULT_CHUNK_SIZE;
        const limit = (0, $fedb6415fc689216$var$p_limit_1.default)(options.concurrencyLimit || $fedb6415fc689216$var$DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT);
        const maxQueueSize = options.maxQueueSize || options.concurrencyLimit || $fedb6415fc689216$var$DEFAULT_PARALLEL_CHUNKED_UPLOAD_LIMIT;
        const fileName = options.uploadName || $fedb6415fc689216$var$path.basename(filePath);
        const mpuHelper = generator(this.bucket, fileName, options.uploadId, options.partsMap);
        let partNumber = 1;
        let promises = [];
        try {
            if (options.uploadId === undefined) await mpuHelper.initiateUpload(options.headers);
            const startOrResumptionByte = mpuHelper.partsMap.size * chunkSize;
            const readStream = (0, $f09E7$fs.createReadStream)(filePath, {
                highWaterMark: chunkSize,
                start: startOrResumptionByte
            });
            // p-limit only limits the number of running promises. We do not want to hold an entire
            // large file in memory at once so promises acts a queue that will hold only maxQueueSize in memory.
            for await (const curChunk of readStream){
                if (promises.length >= maxQueueSize) {
                    await Promise.all(promises);
                    promises = [];
                }
                promises.push(limit(()=>mpuHelper.uploadPart(partNumber++, curChunk, options.validation)));
            }
            await Promise.all(promises);
            return await mpuHelper.completeUpload();
        } catch (e) {
            if ((options.autoAbortFailure === undefined || options.autoAbortFailure) && mpuHelper.uploadId) try {
                await mpuHelper.abortUpload();
                return;
            } catch (e) {
                throw new $fedb6415fc689216$var$MultiPartUploadError(e.message, mpuHelper.uploadId, mpuHelper.partsMap);
            }
            throw new $fedb6415fc689216$var$MultiPartUploadError(e.message, mpuHelper.uploadId, mpuHelper.partsMap);
        }
    }
    async *getPathsFromDirectory(directory) {
        const filesAndSubdirectories = await $f09E7$fs.promises.readdir(directory, {
            withFileTypes: true
        });
        for (const curFileOrDirectory of filesAndSubdirectories){
            const fullPath = $fedb6415fc689216$var$path.join(directory, curFileOrDirectory.name);
            curFileOrDirectory.isDirectory() ? yield* this.getPathsFromDirectory(fullPath) : yield fullPath;
        }
    }
}
module.exports.TransferManager = $fedb6415fc689216$var$TransferManager;

});


//# sourceMappingURL=transfer-manager.6021ad2c.js.map
