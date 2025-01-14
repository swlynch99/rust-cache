require("./nodejs-common.868e4b2b.js");
require("./build.3ffc0cbc.js");
require("./build.97320181.js");
require("./bucket.c6139490.js");
require("./channel.ce6e413e.js");
require("./file.003b58da.js");
require("./util.569826f4.js");
require("./package-json-helper.a5de06ac.js");
require("./hmacKey.1386e53a.js");
require("./crc32c.9e825062.js");
require("./build.ae3b9a9c.js");
var $iYsop$stream = require("stream");


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
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Storage = module.exports.RETRYABLE_ERR_FN_DEFAULT = module.exports.MAX_RETRY_DELAY_DEFAULT = module.exports.TOTAL_TIMEOUT_DEFAULT = module.exports.RETRY_DELAY_MULTIPLIER_DEFAULT = module.exports.MAX_RETRY_DEFAULT = module.exports.AUTO_RETRY_DEFAULT = module.exports.PROTOCOL_REGEX = module.exports.StorageExceptionMessages = module.exports.ExceptionMessages = module.exports.IdempotencyStrategy = void 0;

var $c5iBM = parcelRequire("c5iBM");
var $7fd735a1ccc7c132$exports = {};
$7fd735a1ccc7c132$exports = new URL("build.3ffc0cbc.js", "file:" + __filename).toString();



var $gt46O = parcelRequire("gt46O");

var $ebb61faeb807a8ec$exports = {};
$ebb61faeb807a8ec$exports = new URL("bucket.c6139490.js", "file:" + __filename).toString();


var $c41e8bb4be932d31$exports = {};
$c41e8bb4be932d31$exports = new URL("channel.ce6e413e.js", "file:" + __filename).toString();



var $8Lm7l = parcelRequire("8Lm7l");

var $liF6k = parcelRequire("liF6k");

var $6lv1n = parcelRequire("6lv1n");
var $bca4ba1e151a84f0$exports = {};
$bca4ba1e151a84f0$exports = new URL("hmacKey.1386e53a.js", "file:" + __filename).toString();



var $lEAcs = parcelRequire("lEAcs");

var $198ix = parcelRequire("198ix");
var $405bab3871f2d147$var$IdempotencyStrategy;
(function(IdempotencyStrategy) {
    IdempotencyStrategy[IdempotencyStrategy["RetryAlways"] = 0] = "RetryAlways";
    IdempotencyStrategy[IdempotencyStrategy["RetryConditional"] = 1] = "RetryConditional";
    IdempotencyStrategy[IdempotencyStrategy["RetryNever"] = 2] = "RetryNever";
})($405bab3871f2d147$var$IdempotencyStrategy || (module.exports.IdempotencyStrategy = $405bab3871f2d147$var$IdempotencyStrategy = {}));
var $405bab3871f2d147$var$ExceptionMessages;
(function(ExceptionMessages) {
    ExceptionMessages["EXPIRATION_DATE_INVALID"] = "The expiration date provided was invalid.";
    ExceptionMessages["EXPIRATION_DATE_PAST"] = "An expiration date cannot be in the past.";
})($405bab3871f2d147$var$ExceptionMessages || (module.exports.ExceptionMessages = $405bab3871f2d147$var$ExceptionMessages = {}));
var $405bab3871f2d147$var$StorageExceptionMessages;
(function(StorageExceptionMessages) {
    StorageExceptionMessages["BUCKET_NAME_REQUIRED"] = "A bucket name is needed to use Cloud Storage.";
    StorageExceptionMessages["BUCKET_NAME_REQUIRED_CREATE"] = "A name is required to create a bucket.";
    StorageExceptionMessages["HMAC_SERVICE_ACCOUNT"] = "The first argument must be a service account email to create an HMAC key.";
    StorageExceptionMessages["HMAC_ACCESS_ID"] = "An access ID is needed to create an HmacKey object.";
})($405bab3871f2d147$var$StorageExceptionMessages || (module.exports.StorageExceptionMessages = $405bab3871f2d147$var$StorageExceptionMessages = {}));
module.exports.PROTOCOL_REGEX = /^(\w*):\/\//;
/**
 * Default behavior: Automatically retry retriable server errors.
 *
 * @const {boolean}
 */ module.exports.AUTO_RETRY_DEFAULT = true;
/**
 * Default behavior: Only attempt to retry retriable errors 3 times.
 *
 * @const {number}
 */ module.exports.MAX_RETRY_DEFAULT = 3;
/**
 * Default behavior: Wait twice as long as previous retry before retrying.
 *
 * @const {number}
 */ module.exports.RETRY_DELAY_MULTIPLIER_DEFAULT = 2;
/**
 * Default behavior: If the operation doesn't succeed after 600 seconds,
 *  stop retrying.
 *
 * @const {number}
 */ module.exports.TOTAL_TIMEOUT_DEFAULT = 600;
/**
 * Default behavior: Wait no more than 64 seconds between retries.
 *
 * @const {number}
 */ module.exports.MAX_RETRY_DELAY_DEFAULT = 64;
/**
 * Default behavior: Retry conditionally idempotent operations if correct preconditions are set.
 *
 * @const {enum}
 * @private
 */ const $405bab3871f2d147$var$IDEMPOTENCY_STRATEGY_DEFAULT = $405bab3871f2d147$var$IdempotencyStrategy.RetryConditional;
/**
 * Returns true if the API request should be retried, given the error that was
 * given the first time the request was attempted.
 * @const
 * @param {error} err - The API error to check if it is appropriate to retry.
 * @return {boolean} True if the API request should be retried, false otherwise.
 */ const $405bab3871f2d147$var$RETRYABLE_ERR_FN_DEFAULT = function(err) {
    var _a;
    const isConnectionProblem = (reason)=>{
        return reason.includes('eai_again') || // DNS lookup error
        reason === 'econnreset' || reason === 'unexpected connection closure' || reason === 'epipe' || reason === 'socket connection timeout';
    };
    if (err) {
        if ([
            408,
            429,
            500,
            502,
            503,
            504
        ].indexOf(err.code) !== -1) return true;
        if (typeof err.code === 'string') {
            if ([
                '408',
                '429',
                '500',
                '502',
                '503',
                '504'
            ].indexOf(err.code) !== -1) return true;
            const reason = err.code.toLowerCase();
            if (isConnectionProblem(reason)) return true;
        }
        if (err.errors) for (const e of err.errors){
            const reason = (_a = e === null || e === void 0 ? void 0 : e.reason) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
            if (reason && isConnectionProblem(reason)) return true;
        }
    }
    return false;
};
module.exports.RETRYABLE_ERR_FN_DEFAULT = $405bab3871f2d147$var$RETRYABLE_ERR_FN_DEFAULT;
/*! Developer Documentation
 *
 * Invoke this method to create a new Storage object bound with pre-determined
 * configuration options. For each object that can be created (e.g., a bucket),
 * there is an equivalent static and instance method. While they are classes,
 * they can be instantiated without use of the `new` keyword.
 */ /**
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share objects with other
 * users and allow other users to access your buckets and objects.
 *
 * This object provides constants to refer to the three permission levels that
 * can be granted to an entity:
 *
 *   - `gcs.acl.OWNER_ROLE` - ("OWNER")
 *   - `gcs.acl.READER_ROLE` - ("READER")
 *   - `gcs.acl.WRITER_ROLE` - ("WRITER")
 *
 * See {@link https://cloud.google.com/storage/docs/access-control/lists| About Access Control Lists}
 *
 * @name Storage#acl
 * @type {object}
 * @property {string} OWNER_ROLE
 * @property {string} READER_ROLE
 * @property {string} WRITER_ROLE
 *
 * @example
 * ```
 * const {Storage} = require('@google-cloud/storage');
 * const storage = new Storage();
 * const albums = storage.bucket('albums');
 *
 * //-
 * // Make all of the files currently in a bucket publicly readable.
 * //-
 * const options = {
 *   entity: 'allUsers',
 *   role: storage.acl.READER_ROLE
 * };
 *
 * albums.acl.add(options, function(err, aclObject) {});
 *
 * //-
 * // Make any new objects added to a bucket publicly readable.
 * //-
 * albums.acl.default.add(options, function(err, aclObject) {});
 *
 * //-
 * // Grant a user ownership permissions to a bucket.
 * //-
 * albums.acl.add({
 *   entity: 'user-useremail@example.com',
 *   role: storage.acl.OWNER_ROLE
 * }, function(err, aclObject) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * albums.acl.add(options).then(function(data) {
 *   const aclObject = data[0];
 *   const apiResponse = data[1];
 * });
 * ```
 */ /**
 * Get {@link Bucket} objects for all of the buckets in your project as
 * a readable object stream.
 *
 * @method Storage#getBucketsStream
 * @param {GetBucketsRequest} [query] Query object for listing buckets.
 * @returns {ReadableStream} A readable stream that emits {@link Bucket}
 *     instances.
 *
 * @example
 * ```
 * storage.getBucketsStream()
 *   .on('error', console.error)
 *   .on('data', function(bucket) {
 *     // bucket is a Bucket object.
 *   })
 *   .on('end', function() {
 *     // All buckets retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * storage.getBucketsStream()
 *   .on('data', function(bucket) {
 *     this.end();
 *   });
 * ```
 */ /**
 * Get {@link HmacKey} objects for all of the HMAC keys in the project in a
 * readable object stream.
 *
 * @method Storage#getHmacKeysStream
 * @param {GetHmacKeysOptions} [options] Configuration options.
 * @returns {ReadableStream} A readable stream that emits {@link HmacKey}
 *     instances.
 *
 * @example
 * ```
 * storage.getHmacKeysStream()
 *   .on('error', console.error)
 *   .on('data', function(hmacKey) {
 *     // hmacKey is an HmacKey object.
 *   })
 *   .on('end', function() {
 *     // All HmacKey retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * storage.getHmacKeysStream()
 *   .on('data', function(bucket) {
 *     this.end();
 *   });
 * ```
 */ /**
 * <h4>ACLs</h4>
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share files with other users
 * and allow other users to access your buckets and files.
 *
 * To learn more about ACLs, read this overview on
 * {@link https://cloud.google.com/storage/docs/access-control| Access Control}.
 *
 * See {@link https://cloud.google.com/storage/docs/overview| Cloud Storage overview}
 * See {@link https://cloud.google.com/storage/docs/access-control| Access Control}
 *
 * @class
 */ class $405bab3871f2d147$var$Storage extends $c5iBM.Service {
    getBucketsStream() {
        // placeholder body, overwritten in constructor
        return new $iYsop$stream.Readable();
    }
    getHmacKeysStream() {
        // placeholder body, overwritten in constructor
        return new $iYsop$stream.Readable();
    }
    /**
     * @callback Crc32cGeneratorToStringCallback
     * A method returning the CRC32C as a base64-encoded string.
     *
     * @returns {string}
     *
     * @example
     * Hashing the string 'data' should return 'rth90Q=='
     *
     * ```js
     * const buffer = Buffer.from('data');
     * crc32c.update(buffer);
     * crc32c.toString(); // 'rth90Q=='
     * ```
     **/ /**
     * @callback Crc32cGeneratorValidateCallback
     * A method validating a base64-encoded CRC32C string.
     *
     * @param {string} [value] base64-encoded CRC32C string to validate
     * @returns {boolean}
     *
     * @example
     * Should return `true` if the value matches, `false` otherwise
     *
     * ```js
     * const buffer = Buffer.from('data');
     * crc32c.update(buffer);
     * crc32c.validate('DkjKuA=='); // false
     * crc32c.validate('rth90Q=='); // true
     * ```
     **/ /**
     * @callback Crc32cGeneratorUpdateCallback
     * A method for passing `Buffer`s for CRC32C generation.
     *
     * @param {Buffer} [data] data to update CRC32C value with
     * @returns {undefined}
     *
     * @example
     * Hashing buffers from 'some ' and 'text\n'
     *
     * ```js
     * const buffer1 = Buffer.from('some ');
     * crc32c.update(buffer1);
     *
     * const buffer2 = Buffer.from('text\n');
     * crc32c.update(buffer2);
     *
     * crc32c.toString(); // 'DkjKuA=='
     * ```
     **/ /**
     * @typedef {object} CRC32CValidator
     * @property {Crc32cGeneratorToStringCallback}
     * @property {Crc32cGeneratorValidateCallback}
     * @property {Crc32cGeneratorUpdateCallback}
     */ /**
     * @callback Crc32cGeneratorCallback
     * @returns {CRC32CValidator}
     */ /**
     * @typedef {object} StorageOptions
     * @property {string} [projectId] The project ID from the Google Developer's
     *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
     *     variable `GCLOUD_PROJECT` for your project ID. If your app is running
     * in an environment which supports {@link
     * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
     * Application Default Credentials}, your project ID will be detected
     * automatically.
     * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
     *     downloaded from the Google Developers Console. If you provide a path to
     * a JSON file, the `projectId` option above is not necessary. NOTE: .pem and
     *     .p12 require you to specify the `email` option as well.
     * @property {string} [email] Account email address. Required when using a .pem
     *     or .p12 keyFilename.
     * @property {object} [credentials] Credentials object.
     * @property {string} [credentials.client_email]
     * @property {string} [credentials.private_key]
     * @property {object} [retryOptions] Options for customizing retries. Retriable server errors
     *     will be retried with exponential delay between them dictated by the formula
     *     max(maxRetryDelay, retryDelayMultiplier*retryNumber) until maxRetries or totalTimeout
     *     has been reached. Retries will only happen if autoRetry is set to true.
     * @property {boolean} [retryOptions.autoRetry=true] Automatically retry requests if the
     *     response is related to rate limits or certain intermittent server
     * errors. We will exponentially backoff subsequent requests by default.
     * @property {number} [retryOptions.retryDelayMultiplier = 2] the multiplier by which to
     *   increase the delay time between the completion of failed requests, and the
     *   initiation of the subsequent retrying request.
     * @property {number} [retryOptions.totalTimeout = 600] The total time, starting from
     *  when the initial request is sent, after which an error will
     *   be returned, regardless of the retrying attempts made meanwhile.
     * @property {number} [retryOptions.maxRetryDelay = 64] The maximum delay time between requests.
     *   When this value is reached, ``retryDelayMultiplier`` will no longer be used to
     *   increase delay time.
     * @property {number} [retryOptions.maxRetries=3] Maximum number of automatic retries
     *     attempted before returning the error.
     * @property {function} [retryOptions.retryableErrorFn] Function that returns true if a given
     *     error should be retried and false otherwise.
     * @property {enum} [retryOptions.idempotencyStrategy=IdempotencyStrategy.RetryConditional] Enumeration
     *     controls how conditionally idempotent operations are retried. Possible values are: RetryAlways -
     *     will respect other retry settings and attempt to retry conditionally idempotent operations. RetryConditional -
     *     will retry conditionally idempotent operations if the correct preconditions are set. RetryNever - never
     *     retry a conditionally idempotent operation.
     * @property {string} [userAgent] The value to be prepended to the User-Agent
     *     header in API requests.
     * @property {object} [authClient] `AuthClient` or `GoogleAuth` client to reuse instead of creating a new one.
     * @property {number} [timeout] The amount of time in milliseconds to wait per http request before timing out.
     * @property {object[]} [interceptors_] Array of custom request interceptors to be returned in the order they were assigned.
     * @property {string} [apiEndpoint = storage.google.com] The API endpoint of the service used to make requests.
     * @property {boolean} [useAuthWithCustomEndpoint = false] Controls whether or not to use authentication when using a custom endpoint.
     * @property {Crc32cGeneratorCallback} [callback] A function that generates a CRC32C Validator. Defaults to {@link CRC32C}
     */ /**
     * Constructs the Storage client.
     *
     * @example
     * Create a client that uses Application Default Credentials
     * (ADC)
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * ```
     *
     * @example
     * Create a client with explicit credentials
     * ```
     * const storage = new Storage({
     *   projectId: 'your-project-id',
     *   keyFilename: '/path/to/keyfile.json'
     * });
     * ```
     *
     * @example
     * Create a client with credentials passed
     * by value as a JavaScript object
     * ```
     * const storage = new Storage({
     *   projectId: 'your-project-id',
     *   credentials: {
     *     type: 'service_account',
     *     project_id: 'xxxxxxx',
     *     private_key_id: 'xxxx',
     *     private_key:'-----BEGIN PRIVATE KEY-----xxxxxxx\n-----END PRIVATE KEY-----\n',
     *     client_email: 'xxxx',
     *     client_id: 'xxx',
     *     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
     *     token_uri: 'https://oauth2.googleapis.com/token',
     *     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
     *     client_x509_cert_url: 'xxx',
     *     }
     * });
     * ```
     *
     * @example
     * Create a client with credentials passed
     * by loading a JSON file directly from disk
     * ```
     * const storage = new Storage({
     *   projectId: 'your-project-id',
     *   credentials: require('/path/to-keyfile.json')
     * });
     * ```
     *
     * @example
     * Create a client with an `AuthClient` (e.g. `DownscopedClient`)
     * ```
     * const {DownscopedClient} = require('google-auth-library');
     * const authClient = new DownscopedClient({...});
     *
     * const storage = new Storage({authClient});
     * ```
     *
     * Additional samples:
     * - https://github.com/googleapis/google-auth-library-nodejs#sample-usage-1
     * - https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/downscopedclient.js
     *
     * @param {StorageOptions} [options] Configuration options.
     */ constructor(options = {}){
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const universe = options.universeDomain || $198ix.DEFAULT_UNIVERSE;
        let apiEndpoint = `https://storage.${universe}`;
        let customEndpoint = false;
        // Note: EMULATOR_HOST is an experimental configuration variable. Use apiEndpoint instead.
        const EMULATOR_HOST = process.env.STORAGE_EMULATOR_HOST;
        if (typeof EMULATOR_HOST === 'string') {
            apiEndpoint = $405bab3871f2d147$var$Storage.sanitizeEndpoint(EMULATOR_HOST);
            customEndpoint = true;
        }
        if (options.apiEndpoint && options.apiEndpoint !== apiEndpoint) {
            apiEndpoint = $405bab3871f2d147$var$Storage.sanitizeEndpoint(options.apiEndpoint);
            customEndpoint = true;
        }
        options = Object.assign({}, options, {
            apiEndpoint: apiEndpoint
        });
        // Note: EMULATOR_HOST is an experimental configuration variable. Use apiEndpoint instead.
        const baseUrl = EMULATOR_HOST || `${options.apiEndpoint}/storage/v1`;
        const config = {
            apiEndpoint: options.apiEndpoint,
            retryOptions: {
                autoRetry: ((_a = options.retryOptions) === null || _a === void 0 ? void 0 : _a.autoRetry) !== undefined ? (_b = options.retryOptions) === null || _b === void 0 ? void 0 : _b.autoRetry : module.exports.AUTO_RETRY_DEFAULT,
                maxRetries: ((_c = options.retryOptions) === null || _c === void 0 ? void 0 : _c.maxRetries) ? (_d = options.retryOptions) === null || _d === void 0 ? void 0 : _d.maxRetries : module.exports.MAX_RETRY_DEFAULT,
                retryDelayMultiplier: ((_e = options.retryOptions) === null || _e === void 0 ? void 0 : _e.retryDelayMultiplier) ? (_f = options.retryOptions) === null || _f === void 0 ? void 0 : _f.retryDelayMultiplier : module.exports.RETRY_DELAY_MULTIPLIER_DEFAULT,
                totalTimeout: ((_g = options.retryOptions) === null || _g === void 0 ? void 0 : _g.totalTimeout) ? (_h = options.retryOptions) === null || _h === void 0 ? void 0 : _h.totalTimeout : module.exports.TOTAL_TIMEOUT_DEFAULT,
                maxRetryDelay: ((_j = options.retryOptions) === null || _j === void 0 ? void 0 : _j.maxRetryDelay) ? (_k = options.retryOptions) === null || _k === void 0 ? void 0 : _k.maxRetryDelay : module.exports.MAX_RETRY_DELAY_DEFAULT,
                retryableErrorFn: ((_l = options.retryOptions) === null || _l === void 0 ? void 0 : _l.retryableErrorFn) ? (_m = options.retryOptions) === null || _m === void 0 ? void 0 : _m.retryableErrorFn : module.exports.RETRYABLE_ERR_FN_DEFAULT,
                idempotencyStrategy: ((_o = options.retryOptions) === null || _o === void 0 ? void 0 : _o.idempotencyStrategy) !== undefined ? (_p = options.retryOptions) === null || _p === void 0 ? void 0 : _p.idempotencyStrategy : $405bab3871f2d147$var$IDEMPOTENCY_STRATEGY_DEFAULT
            },
            baseUrl: baseUrl,
            customEndpoint: customEndpoint,
            useAuthWithCustomEndpoint: options === null || options === void 0 ? void 0 : options.useAuthWithCustomEndpoint,
            projectIdRequired: false,
            scopes: [
                'https://www.googleapis.com/auth/iam',
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/devstorage.full_control'
            ],
            packageJson: (0, $6lv1n.getPackageJSON)()
        };
        super(config, options);
        /**
         * Reference to {@link Storage.acl}.
         *
         * @name Storage#acl
         * @see Storage.acl
         */ this.acl = $405bab3871f2d147$var$Storage.acl;
        this.crc32cGenerator = options.crc32cGenerator || $lEAcs.CRC32C_DEFAULT_VALIDATOR_GENERATOR;
        this.retryOptions = config.retryOptions;
        this.getBucketsStream = $7fd735a1ccc7c132$exports.paginator.streamify('getBuckets');
        this.getHmacKeysStream = $7fd735a1ccc7c132$exports.paginator.streamify('getHmacKeys');
    }
    static sanitizeEndpoint(url) {
        if (!module.exports.PROTOCOL_REGEX.test(url)) url = `https://${url}`;
        return url.replace(/\/+$/, ''); // Remove trailing slashes
    }
    /**
     * Get a reference to a Cloud Storage bucket.
     *
     * @param {string} name Name of the bucket.
     * @param {object} [options] Configuration object.
     * @param {string} [options.kmsKeyName] A Cloud KMS key that will be used to
     *     encrypt objects inserted into this bucket, if no encryption method is
     *     specified.
     * @param {string} [options.userProject] User project to be billed for all
     *     requests made from this Bucket object.
     * @returns {Bucket}
     * @see Bucket
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const albums = storage.bucket('albums');
     * const photos = storage.bucket('photos');
     * ```
     */ bucket(name, options) {
        if (!name) throw new Error($405bab3871f2d147$var$StorageExceptionMessages.BUCKET_NAME_REQUIRED);
        return new $ebb61faeb807a8ec$exports.Bucket(this, name, options);
    }
    /**
     * Reference a channel to receive notifications about changes to your bucket.
     *
     * @param {string} id The ID of the channel.
     * @param {string} resourceId The resource ID of the channel.
     * @returns {Channel}
     * @see Channel
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const channel = storage.channel('id', 'resource-id');
     * ```
     */ channel(id, resourceId) {
        return new $c41e8bb4be932d31$exports.Channel(this, id, resourceId);
    }
    /**
     * @typedef {array} CreateBucketResponse
     * @property {Bucket} 0 The new {@link Bucket}.
     * @property {object} 1 The full API response.
     */ /**
     * @callback CreateBucketCallback
     * @param {?Error} err Request error, if any.
     * @param {Bucket} bucket The new {@link Bucket}.
     * @param {object} apiResponse The full API response.
     */ /**
     * Metadata to set for the bucket.
     *
     * @typedef {object} CreateBucketRequest
     * @property {boolean} [archive=false] Specify the storage class as Archive.
     * @property {object} [autoclass.enabled=false] Specify whether Autoclass is
     *     enabled for the bucket.
     * @property {object} [autoclass.terminalStorageClass='NEARLINE'] The storage class that objects in an Autoclass bucket eventually transition to if
     *     they are not read for a certain length of time. Valid values are NEARLINE and ARCHIVE.
     * @property {boolean} [coldline=false] Specify the storage class as Coldline.
     * @property {Cors[]} [cors=[]] Specify the CORS configuration to use.
     * @property {CustomPlacementConfig} [customPlacementConfig={}] Specify the bucket's regions for dual-region buckets.
     *     For more information, see {@link https://cloud.google.com/storage/docs/locations| Bucket Locations}.
     * @property {boolean} [dra=false] Specify the storage class as Durable Reduced
     *     Availability.
     * @property {boolean} [enableObjectRetention=false] Specifiy whether or not object retention should be enabled on this bucket.
     * @property {object} [hierarchicalNamespace.enabled=false] Specify whether or not to enable hierarchical namespace on this bucket.
     * @property {string} [location] Specify the bucket's location. If specifying
     *     a dual-region, the `customPlacementConfig` property should be set in conjunction.
     *     For more information, see {@link https://cloud.google.com/storage/docs/locations| Bucket Locations}.
     * @property {boolean} [multiRegional=false] Specify the storage class as
     *     Multi-Regional.
     * @property {boolean} [nearline=false] Specify the storage class as Nearline.
     * @property {boolean} [regional=false] Specify the storage class as Regional.
     * @property {boolean} [requesterPays=false] Force the use of the User Project metadata field to assign operational
     *     costs when an operation is made on a Bucket and its objects.
     * @property {string} [rpo] For dual-region buckets, controls whether turbo
     *      replication is enabled (`ASYNC_TURBO`) or disabled (`DEFAULT`).
     * @property {boolean} [standard=true] Specify the storage class as Standard.
     * @property {string} [storageClass] The new storage class. (`standard`,
     *     `nearline`, `coldline`, or `archive`).
     *     **Note:** The storage classes `multi_regional`, `regional`, and
     *     `durable_reduced_availability` are now legacy and will be deprecated in
     *     the future.
     * @property {Versioning} [versioning=undefined] Specify the versioning status.
     * @property {string} [userProject] The ID of the project which will be billed
     *     for the request.
     */ /**
     * Create a bucket.
     *
     * Cloud Storage uses a flat namespace, so you can't create a bucket with
     * a name that is already in use. For more information, see
     * {@link https://cloud.google.com/storage/docs/bucketnaming.html#requirements| Bucket Naming Guidelines}.
     *
     * See {@link https://cloud.google.com/storage/docs/json_api/v1/buckets/insert| Buckets: insert API Documentation}
     * See {@link https://cloud.google.com/storage/docs/storage-classes| Storage Classes}
     *
     * @param {string} name Name of the bucket to create.
     * @param {CreateBucketRequest} [metadata] Metadata to set for the bucket.
     * @param {CreateBucketCallback} [callback] Callback function.
     * @returns {Promise<CreateBucketResponse>}
     * @throws {Error} If a name is not provided.
     * @see Bucket#create
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const callback = function(err, bucket, apiResponse) {
     *   // `bucket` is a Bucket object.
     * };
     *
     * storage.createBucket('new-bucket', callback);
     *
     * //-
     * // Create a bucket in a specific location and region. <em>See the <a
     * // href="https://cloud.google.com/storage/docs/json_api/v1/buckets/insert">
     * // Official JSON API docs</a> for complete details on the `location`
     * option.
     * // </em>
     * //-
     * const metadata = {
     *   location: 'US-CENTRAL1',
     *   regional: true
     * };
     *
     * storage.createBucket('new-bucket', metadata, callback);
     *
     * //-
     * // Create a bucket with a retention policy of 6 months.
     * //-
     * const metadata = {
     *   retentionPolicy: {
     *     retentionPeriod: 15780000 // 6 months in seconds.
     *   }
     * };
     *
     * storage.createBucket('new-bucket', metadata, callback);
     *
     * //-
     * // Enable versioning on a new bucket.
     * //-
     * const metadata = {
     *   versioning: {
     *     enabled: true
     *   }
     * };
     *
     * storage.createBucket('new-bucket', metadata, callback);
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * storage.createBucket('new-bucket').then(function(data) {
     *   const bucket = data[0];
     *   const apiResponse = data[1];
     * });
     *
     * ```
     * @example <caption>include:samples/buckets.js</caption>
     * region_tag:storage_create_bucket
     * Another example:
     */ createBucket(name, metadataOrCallback, callback) {
        if (!name) throw new Error($405bab3871f2d147$var$StorageExceptionMessages.BUCKET_NAME_REQUIRED_CREATE);
        let metadata;
        if (!callback) {
            callback = metadataOrCallback;
            metadata = {};
        } else metadata = metadataOrCallback;
        const body = {
            ...metadata,
            name: name
        };
        const storageClasses = {
            archive: 'ARCHIVE',
            coldline: 'COLDLINE',
            dra: 'DURABLE_REDUCED_AVAILABILITY',
            multiRegional: 'MULTI_REGIONAL',
            nearline: 'NEARLINE',
            regional: 'REGIONAL',
            standard: 'STANDARD'
        };
        const storageClassKeys = Object.keys(storageClasses);
        for (const storageClass of storageClassKeys)if (body[storageClass]) {
            if (metadata.storageClass && metadata.storageClass !== storageClass) throw new Error(`Both \`${storageClass}\` and \`storageClass\` were provided.`);
            body.storageClass = storageClasses[storageClass];
            delete body[storageClass];
        }
        if (body.requesterPays) {
            body.billing = {
                requesterPays: body.requesterPays
            };
            delete body.requesterPays;
        }
        const query = {
            project: this.projectId
        };
        if (body.userProject) {
            query.userProject = body.userProject;
            delete body.userProject;
        }
        if (body.enableObjectRetention) {
            query.enableObjectRetention = body.enableObjectRetention;
            delete body.enableObjectRetention;
        }
        if (body.predefinedAcl) {
            query.predefinedAcl = body.predefinedAcl;
            delete body.predefinedAcl;
        }
        if (body.predefinedDefaultObjectAcl) {
            query.predefinedDefaultObjectAcl = body.predefinedDefaultObjectAcl;
            delete body.predefinedDefaultObjectAcl;
        }
        if (body.projection) {
            query.projection = body.projection;
            delete body.projection;
        }
        this.request({
            method: 'POST',
            uri: '/b',
            qs: query,
            json: body
        }, (err, resp)=>{
            if (err) {
                callback(err, null, resp);
                return;
            }
            const bucket = this.bucket(name);
            bucket.metadata = resp;
            callback(null, bucket, resp);
        });
    }
    /**
     * @typedef {object} CreateHmacKeyOptions
     * @property {string} [projectId] The project ID of the project that owns
     *     the service account of the requested HMAC key. If not provided,
     *     the project ID used to instantiate the Storage client will be used.
     * @property {string} [userProject] This parameter is currently ignored.
     */ /**
     * @typedef {object} HmacKeyMetadata
     * @property {string} accessId The access id identifies which HMAC key was
     *     used to sign a request when authenticating with HMAC.
     * @property {string} etag Used to perform a read-modify-write of the key.
     * @property {string} id The resource name of the HMAC key.
     * @property {string} projectId The project ID.
     * @property {string} serviceAccountEmail The service account's email this
     *     HMAC key is created for.
     * @property {string} state The state of this HMAC key. One of "ACTIVE",
     *     "INACTIVE" or "DELETED".
     * @property {string} timeCreated The creation time of the HMAC key in
     *     RFC 3339 format.
     * @property {string} [updated] The time this HMAC key was last updated in
     *     RFC 3339 format.
     */ /**
     * @typedef {array} CreateHmacKeyResponse
     * @property {HmacKey} 0 The HmacKey instance created from API response.
     * @property {string} 1 The HMAC key's secret used to access the XML API.
     * @property {object} 3 The raw API response.
     */ /**
     * @callback CreateHmacKeyCallback Callback function.
     * @param {?Error} err Request error, if any.
     * @param {HmacKey} hmacKey The HmacKey instance created from API response.
     * @param {string} secret The HMAC key's secret used to access the XML API.
     * @param {object} apiResponse The raw API response.
     */ /**
     * Create an HMAC key associated with an service account to authenticate
     * requests to the Cloud Storage XML API.
     *
     * See {@link https://cloud.google.com/storage/docs/authentication/hmackeys| HMAC keys documentation}
     *
     * @param {string} serviceAccountEmail The service account's email address
     *     with which the HMAC key is created for.
     * @param {CreateHmacKeyCallback} [callback] Callback function.
     * @return {Promise<CreateHmacKeyResponse>}
     *
     * @example
     * ```
     * const {Storage} = require('google-cloud/storage');
     * const storage = new Storage();
     *
     * // Replace with your service account's email address
     * const serviceAccountEmail =
     *   'my-service-account@appspot.gserviceaccount.com';
     *
     * storage.createHmacKey(serviceAccountEmail, function(err, hmacKey, secret) {
     *   if (!err) {
     *     // Securely store the secret for use with the XML API.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * storage.createHmacKey(serviceAccountEmail)
     *   .then((response) => {
     *     const hmacKey = response[0];
     *     const secret = response[1];
     *     // Securely store the secret for use with the XML API.
     *   });
     * ```
     */ createHmacKey(serviceAccountEmail, optionsOrCb, cb) {
        if (typeof serviceAccountEmail !== 'string') throw new Error($405bab3871f2d147$var$StorageExceptionMessages.HMAC_SERVICE_ACCOUNT);
        const { options: options, callback: callback } = (0, $liF6k.normalize)(optionsOrCb, cb);
        const query = Object.assign({}, options, {
            serviceAccountEmail: serviceAccountEmail
        });
        const projectId = query.projectId || this.projectId;
        delete query.projectId;
        this.request({
            method: 'POST',
            uri: `/projects/${projectId}/hmacKeys`,
            qs: query,
            maxRetries: 0
        }, (err, resp)=>{
            if (err) {
                callback(err, null, null, resp);
                return;
            }
            const metadata = resp.metadata;
            const hmacKey = this.hmacKey(metadata.accessId, {
                projectId: metadata.projectId
            });
            hmacKey.metadata = resp.metadata;
            callback(null, hmacKey, resp.secret, resp);
        });
    }
    /**
     * Query object for listing buckets.
     *
     * @typedef {object} GetBucketsRequest
     * @property {boolean} [autoPaginate=true] Have pagination handled
     *     automatically.
     * @property {number} [maxApiCalls] Maximum number of API calls to make.
     * @property {number} [maxResults] Maximum number of items plus prefixes to
     *     return per call.
     *     Note: By default will handle pagination automatically
     *     if more than 1 page worth of results are requested per call.
     *     When `autoPaginate` is set to `false` the smaller of `maxResults`
     *     or 1 page of results will be returned per call.
     * @property {string} [pageToken] A previously-returned page token
     *     representing part of the larger set of results to view.
     * @property {string} [userProject] The ID of the project which will be billed
     *     for the request.
     *  @param {boolean} [softDeleted] If true, returns the soft-deleted object.
     *     Object `generation` is required if `softDeleted` is set to True.
     */ /**
     * @typedef {array} GetBucketsResponse
     * @property {Bucket[]} 0 Array of {@link Bucket} instances.
     * @property {object} 1 nextQuery A query object to receive more results.
     * @property {object} 2 The full API response.
     */ /**
     * @callback GetBucketsCallback
     * @param {?Error} err Request error, if any.
     * @param {Bucket[]} buckets Array of {@link Bucket} instances.
     * @param {object} nextQuery A query object to receive more results.
     * @param {object} apiResponse The full API response.
     */ /**
     * Get Bucket objects for all of the buckets in your project.
     *
     * See {@link https://cloud.google.com/storage/docs/json_api/v1/buckets/list| Buckets: list API Documentation}
     *
     * @param {GetBucketsRequest} [query] Query object for listing buckets.
     * @param {GetBucketsCallback} [callback] Callback function.
     * @returns {Promise<GetBucketsResponse>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * storage.getBuckets(function(err, buckets) {
     *   if (!err) {
     *     // buckets is an array of Bucket objects.
     *   }
     * });
     *
     * //-
     * // To control how many API requests are made and page through the results
     * // manually, set `autoPaginate` to `false`.
     * //-
     * const callback = function(err, buckets, nextQuery, apiResponse) {
     *   if (nextQuery) {
     *     // More results exist.
     *     storage.getBuckets(nextQuery, callback);
     *   }
     *
     *   // The `metadata` property is populated for you with the metadata at the
     *   // time of fetching.
     *   buckets[0].metadata;
     *
     *   // However, in cases where you are concerned the metadata could have
     *   // changed, use the `getMetadata` method.
     *   buckets[0].getMetadata(function(err, metadata, apiResponse) {});
     * };
     *
     * storage.getBuckets({
     *   autoPaginate: false
     * }, callback);
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * storage.getBuckets().then(function(data) {
     *   const buckets = data[0];
     * });
     *
     * ```
     * @example <caption>include:samples/buckets.js</caption>
     * region_tag:storage_list_buckets
     * Another example:
     */ getBuckets(optionsOrCallback, cb) {
        const { options: options, callback: callback } = (0, $liF6k.normalize)(optionsOrCallback, cb);
        options.project = options.project || this.projectId;
        this.request({
            uri: '/b',
            qs: options
        }, (err, resp)=>{
            if (err) {
                callback(err, null, null, resp);
                return;
            }
            const itemsArray = resp.items ? resp.items : [];
            const buckets = itemsArray.map((bucket)=>{
                const bucketInstance = this.bucket(bucket.id);
                bucketInstance.metadata = bucket;
                return bucketInstance;
            });
            const nextQuery = resp.nextPageToken ? Object.assign({}, options, {
                pageToken: resp.nextPageToken
            }) : null;
            callback(null, buckets, nextQuery, resp);
        });
    }
    getHmacKeys(optionsOrCb, cb) {
        const { options: options, callback: callback } = (0, $liF6k.normalize)(optionsOrCb, cb);
        const query = Object.assign({}, options);
        const projectId = query.projectId || this.projectId;
        delete query.projectId;
        this.request({
            uri: `/projects/${projectId}/hmacKeys`,
            qs: query
        }, (err, resp)=>{
            if (err) {
                callback(err, null, null, resp);
                return;
            }
            const itemsArray = resp.items ? resp.items : [];
            const hmacKeys = itemsArray.map((hmacKey)=>{
                const hmacKeyInstance = this.hmacKey(hmacKey.accessId, {
                    projectId: hmacKey.projectId
                });
                hmacKeyInstance.metadata = hmacKey;
                return hmacKeyInstance;
            });
            const nextQuery = resp.nextPageToken ? Object.assign({}, options, {
                pageToken: resp.nextPageToken
            }) : null;
            callback(null, hmacKeys, nextQuery, resp);
        });
    }
    /**
     * @typedef {array} GetServiceAccountResponse
     * @property {object} 0 The service account resource.
     * @property {object} 1 The full
     * {@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource| API response}.
     */ /**
     * @callback GetServiceAccountCallback
     * @param {?Error} err Request error, if any.
     * @param {object} serviceAccount The serviceAccount resource.
     * @param {string} serviceAccount.emailAddress The service account email
     *     address.
     * @param {object} apiResponse The full
     * {@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource| API response}.
     */ /**
     * Get the email address of this project's Google Cloud Storage service
     * account.
     *
     * See {@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount/get| Projects.serviceAccount: get API Documentation}
     * See {@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource| Projects.serviceAccount Resource}
     *
     * @param {object} [options] Configuration object.
     * @param {string} [options.userProject] User project to be billed for this
     *     request.
     * @param {GetServiceAccountCallback} [callback] Callback function.
     * @returns {Promise<GetServiceAccountResponse>}
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     *
     * storage.getServiceAccount(function(err, serviceAccount, apiResponse) {
     *   if (!err) {
     *     const serviceAccountEmail = serviceAccount.emailAddress;
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * storage.getServiceAccount().then(function(data) {
     *   const serviceAccountEmail = data[0].emailAddress;
     *   const apiResponse = data[1];
     * });
     * ```
     */ getServiceAccount(optionsOrCallback, cb) {
        const { options: options, callback: callback } = (0, $liF6k.normalize)(optionsOrCallback, cb);
        this.request({
            uri: `/projects/${this.projectId}/serviceAccount`,
            qs: options
        }, (err, resp)=>{
            if (err) {
                callback(err, null, resp);
                return;
            }
            const camelCaseResponse = {};
            for(const prop in resp)// eslint-disable-next-line no-prototype-builtins
            if (resp.hasOwnProperty(prop)) {
                const camelCaseProp = prop.replace(/_(\w)/g, (_, match)=>match.toUpperCase());
                camelCaseResponse[camelCaseProp] = resp[prop];
            }
            callback(null, camelCaseResponse, resp);
        });
    }
    /**
     * Get a reference to an HmacKey object.
     * Note: this does not fetch the HMAC key's metadata. Use HmacKey#get() to
     * retrieve and populate the metadata.
     *
     * To get a reference to an HMAC key that's not created for a service
     * account in the same project used to instantiate the Storage client,
     * supply the project's ID as `projectId` in the `options` argument.
     *
     * @param {string} accessId The HMAC key's access ID.
     * @param {HmacKeyOptions} options HmacKey constructor options.
     * @returns {HmacKey}
     * @see HmacKey
     *
     * @example
     * ```
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const hmacKey = storage.hmacKey('ACCESS_ID');
     * ```
     */ hmacKey(accessId, options) {
        if (!accessId) throw new Error($405bab3871f2d147$var$StorageExceptionMessages.HMAC_ACCESS_ID);
        return new $bca4ba1e151a84f0$exports.HmacKey(this, accessId, options);
    }
}
module.exports.Storage = $405bab3871f2d147$var$Storage;
/**
 * {@link Bucket} class.
 *
 * @name Storage.Bucket
 * @see Bucket
 * @type {Constructor}
 */ $405bab3871f2d147$var$Storage.Bucket = $ebb61faeb807a8ec$exports.Bucket;
/**
 * {@link Channel} class.
 *
 * @name Storage.Channel
 * @see Channel
 * @type {Constructor}
 */ $405bab3871f2d147$var$Storage.Channel = $c41e8bb4be932d31$exports.Channel;
/**
 * {@link File} class.
 *
 * @name Storage.File
 * @see File
 * @type {Constructor}
 */ $405bab3871f2d147$var$Storage.File = $8Lm7l.File;
/**
 * {@link HmacKey} class.
 *
 * @name Storage.HmacKey
 * @see HmacKey
 * @type {Constructor}
 */ $405bab3871f2d147$var$Storage.HmacKey = $bca4ba1e151a84f0$exports.HmacKey;
$405bab3871f2d147$var$Storage.acl = {
    OWNER_ROLE: 'OWNER',
    READER_ROLE: 'READER',
    WRITER_ROLE: 'WRITER'
};
/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */ $7fd735a1ccc7c132$exports.paginator.extend($405bab3871f2d147$var$Storage, [
    'getBuckets',
    'getHmacKeys'
]);
/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */ (0, $gt46O.promisifyAll)($405bab3871f2d147$var$Storage, {
    exclude: [
        'bucket',
        'channel',
        'hmacKey'
    ]
});


