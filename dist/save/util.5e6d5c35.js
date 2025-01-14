require("./build.f11bedbe.js");
require("./html-entities.e584490c.js");
require("./build.f178b9b0.js");
require("./retry-request.8c56144b.js");
require("./build.c09b0218.js");
require("./esm-node.c0a21ef2.js");
require("./service.346b1c25.js");
require("./util.14aba05f.js");
require("./duplexify.6b4439ab.js");
require("./package-json-helper.02eb8661.js");
var $1as1s$stream = require("stream");


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
parcelRegister("2iwjH", function(module, exports) {
module.exports = new URL("html-entities.e584490c.js", "file:" + __filename).toString();

});

parcelRegister("lsYEc", function(module, exports) {
module.exports = new URL("retry-request.8c56144b.js", "file:" + __filename).toString();

});

parcelRegister("9A78x", function(module, exports) {
module.exports = new URL("duplexify.6b4439ab.js", "file:" + __filename).toString();

});

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
 */ var $b7328ced60c2c078$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $b7328ced60c2c078$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $b7328ced60c2c078$var$__importStar = module.exports && module.exports.__importStar || function() {
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
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $b7328ced60c2c078$var$__createBinding(result, mod, k[i]);
        }
        $b7328ced60c2c078$var$__setModuleDefault(result, mod);
        return result;
    };
}();
var $b7328ced60c2c078$var$__importDefault = module.exports && module.exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.util = module.exports.Util = module.exports.PartialFailureError = module.exports.ApiError = module.exports.GCCL_GCS_CMD_KEY = void 0;
var $1d8e70f271692f00$exports = {};
$1d8e70f271692f00$exports = new URL("build.f11bedbe.js", "file:" + __filename).toString();



const $b7328ced60c2c078$var$htmlEntities = $b7328ced60c2c078$var$__importStar((parcelRequire("2iwjH")));

var $4gMhs = parcelRequire("4gMhs");

const $b7328ced60c2c078$var$retry_request_1 = $b7328ced60c2c078$var$__importDefault((parcelRequire("lsYEc")));

var $eadb341578354d2a$exports = {};
$eadb341578354d2a$exports = new URL("build.c09b0218.js", "file:" + __filename).toString();



const $b7328ced60c2c078$var$uuid = $b7328ced60c2c078$var$__importStar((parcelRequire("81OEw")));

var $igT1R = parcelRequire("igT1R");
var $a6bb4888373378c2$exports = {};
$a6bb4888373378c2$exports = new URL("util.14aba05f.js", "file:" + __filename).toString();



const $b7328ced60c2c078$var$duplexify_1 = $b7328ced60c2c078$var$__importDefault((parcelRequire("9A78x")));

var $7OYF7 = parcelRequire("7OYF7");
const $b7328ced60c2c078$var$packageJson = (0, $7OYF7.getPackageJSON)();
/**
 * A unique symbol for providing a `gccl-gcs-cmd` value
 * for the `X-Goog-API-Client` header.
 *
 * E.g. the `V` in `X-Goog-API-Client: gccl-gcs-cmd/V`
 **/ module.exports.GCCL_GCS_CMD_KEY = Symbol.for('GCCL_GCS_CMD');
const $b7328ced60c2c078$var$requestDefaults = {
    timeout: 60000,
    gzip: true,
    forever: true,
    pool: {
        maxSockets: Infinity
    }
};
/**
 * Default behavior: Automatically retry retriable server errors.
 *
 * @const {boolean}
 * @private
 */ const $b7328ced60c2c078$var$AUTO_RETRY_DEFAULT = true;
/**
 * Default behavior: Only attempt to retry retriable errors 3 times.
 *
 * @const {number}
 * @private
 */ const $b7328ced60c2c078$var$MAX_RETRY_DEFAULT = 3;
/**
 * Custom error type for API errors.
 *
 * @param {object} errorBody - Error object.
 */ class $b7328ced60c2c078$var$ApiError extends Error {
    constructor(errorBodyOrMessage){
        super();
        if (typeof errorBodyOrMessage !== 'object') {
            this.message = errorBodyOrMessage || '';
            return;
        }
        const errorBody = errorBodyOrMessage;
        this.code = errorBody.code;
        this.errors = errorBody.errors;
        this.response = errorBody.response;
        try {
            this.errors = JSON.parse(this.response.body).error.errors;
        } catch (e) {
            this.errors = errorBody.errors;
        }
        this.message = $b7328ced60c2c078$var$ApiError.createMultiErrorMessage(errorBody, this.errors);
        Error.captureStackTrace(this);
    }
    /**
     * Pieces together an error message by combining all unique error messages
     * returned from a single GoogleError
     *
     * @private
     *
     * @param {GoogleErrorBody} err The original error.
     * @param {GoogleInnerError[]} [errors] Inner errors, if any.
     * @returns {string}
     */ static createMultiErrorMessage(err, errors) {
        const messages = new Set();
        if (err.message) messages.add(err.message);
        if (errors && errors.length) errors.forEach(({ message: message })=>messages.add(message));
        else if (err.response && err.response.body) messages.add($b7328ced60c2c078$var$htmlEntities.decode(err.response.body.toString()));
        else if (!err.message) messages.add('A failure occurred during this request.');
        let messageArr = Array.from(messages);
        if (messageArr.length > 1) {
            messageArr = messageArr.map((message, i)=>`    ${i + 1}. ${message}`);
            messageArr.unshift('Multiple errors occurred during the request. Please see the `errors` array for complete details.\n');
            messageArr.push('\n');
        }
        return messageArr.join('\n');
    }
}
module.exports.ApiError = $b7328ced60c2c078$var$ApiError;
/**
 * Custom error type for partial errors returned from the API.
 *
 * @param {object} b - Error object.
 */ class $b7328ced60c2c078$var$PartialFailureError extends Error {
    constructor(b){
        super();
        const errorObject = b;
        this.errors = errorObject.errors;
        this.name = 'PartialFailureError';
        this.response = errorObject.response;
        this.message = $b7328ced60c2c078$var$ApiError.createMultiErrorMessage(errorObject, this.errors);
    }
}
module.exports.PartialFailureError = $b7328ced60c2c078$var$PartialFailureError;
class $b7328ced60c2c078$var$Util {
    constructor(){
        this.ApiError = $b7328ced60c2c078$var$ApiError;
        this.PartialFailureError = $b7328ced60c2c078$var$PartialFailureError;
    }
    /**
     * No op.
     *
     * @example
     * function doSomething(callback) {
     *   callback = callback || noop;
     * }
     */ noop() {}
    /**
     * Uniformly process an API response.
     *
     * @param {*} err - Error value.
     * @param {*} resp - Response value.
     * @param {*} body - Body value.
     * @param {function} callback - The callback function.
     */ handleResp(err, resp, body, callback) {
        callback = callback || $b7328ced60c2c078$var$util.noop;
        const parsedResp = {
            err: err || null,
            ...resp && $b7328ced60c2c078$var$util.parseHttpRespMessage(resp),
            ...body && $b7328ced60c2c078$var$util.parseHttpRespBody(body)
        };
        // Assign the parsed body to resp.body, even if { json: false } was passed
        // as a request option.
        // We assume that nobody uses the previously unparsed value of resp.body.
        if (!parsedResp.err && resp && typeof parsedResp.body === 'object') parsedResp.resp.body = parsedResp.body;
        if (parsedResp.err && resp) parsedResp.err.response = resp;
        callback(parsedResp.err, parsedResp.body, parsedResp.resp);
    }
    /**
     * Sniff an incoming HTTP response message for errors.
     *
     * @param {object} httpRespMessage - An incoming HTTP response message from `request`.
     * @return {object} parsedHttpRespMessage - The parsed response.
     * @param {?error} parsedHttpRespMessage.err - An error detected.
     * @param {object} parsedHttpRespMessage.resp - The original response object.
     */ parseHttpRespMessage(httpRespMessage) {
        const parsedHttpRespMessage = {
            resp: httpRespMessage
        };
        if (httpRespMessage.statusCode < 200 || httpRespMessage.statusCode > 299) // Unknown error. Format according to ApiError standard.
        parsedHttpRespMessage.err = new $b7328ced60c2c078$var$ApiError({
            errors: new Array(),
            code: httpRespMessage.statusCode,
            message: httpRespMessage.statusMessage,
            response: httpRespMessage
        });
        return parsedHttpRespMessage;
    }
    /**
     * Parse the response body from an HTTP request.
     *
     * @param {object} body - The response body.
     * @return {object} parsedHttpRespMessage - The parsed response.
     * @param {?error} parsedHttpRespMessage.err - An error detected.
     * @param {object} parsedHttpRespMessage.body - The original body value provided
     *     will try to be JSON.parse'd. If it's successful, the parsed value will
     * be returned here, otherwise the original value and an error will be returned.
     */ parseHttpRespBody(body) {
        const parsedHttpRespBody = {
            body: body
        };
        if (typeof body === 'string') try {
            parsedHttpRespBody.body = JSON.parse(body);
        } catch (err) {
            parsedHttpRespBody.body = body;
        }
        if (parsedHttpRespBody.body && parsedHttpRespBody.body.error) // Error from JSON API.
        parsedHttpRespBody.err = new $b7328ced60c2c078$var$ApiError(parsedHttpRespBody.body.error);
        return parsedHttpRespBody;
    }
    /**
     * Take a Duplexify stream, fetch an authenticated connection header, and
     * create an outgoing writable stream.
     *
     * @param {Duplexify} dup - Duplexify stream.
     * @param {object} options - Configuration object.
     * @param {module:common/connection} options.connection - A connection instance used to get a token with and send the request through.
     * @param {object} options.metadata - Metadata to send at the head of the request.
     * @param {object} options.request - Request object, in the format of a standard Node.js http.request() object.
     * @param {string=} options.request.method - Default: "POST".
     * @param {string=} options.request.qs.uploadType - Default: "multipart".
     * @param {string=} options.streamContentType - Default: "application/octet-stream".
     * @param {function} onComplete - Callback, executed after the writable Request stream has completed.
     */ makeWritableStream(dup, options, onComplete) {
        var _a;
        onComplete = onComplete || $b7328ced60c2c078$var$util.noop;
        const writeStream = new $b7328ced60c2c078$var$ProgressStream();
        writeStream.on('progress', (evt)=>dup.emit('progress', evt));
        dup.setWritable(writeStream);
        const defaultReqOpts = {
            method: 'POST',
            qs: {
                uploadType: 'multipart'
            },
            timeout: 0,
            maxRetries: 0
        };
        const metadata = options.metadata || {};
        const reqOpts = {
            ...defaultReqOpts,
            ...options.request,
            qs: {
                ...defaultReqOpts.qs,
                ...(_a = options.request) === null || _a === void 0 ? void 0 : _a.qs
            },
            multipart: [
                {
                    'Content-Type': 'application/json',
                    body: JSON.stringify(metadata)
                },
                {
                    'Content-Type': metadata.contentType || 'application/octet-stream',
                    body: writeStream
                }
            ]
        };
        options.makeAuthenticatedRequest(reqOpts, {
            onAuthenticated (err, authenticatedReqOpts) {
                if (err) {
                    dup.destroy(err);
                    return;
                }
                $b7328ced60c2c078$var$requestDefaults.headers = $b7328ced60c2c078$var$util._getDefaultHeaders(reqOpts[module.exports.GCCL_GCS_CMD_KEY]);
                const request = $eadb341578354d2a$exports.teenyRequest.defaults($b7328ced60c2c078$var$requestDefaults);
                request(authenticatedReqOpts, (err, resp, body)=>{
                    $b7328ced60c2c078$var$util.handleResp(err, resp, body, (err, data)=>{
                        if (err) {
                            dup.destroy(err);
                            return;
                        }
                        dup.emit('response', resp);
                        onComplete(data);
                    });
                });
            }
        });
    }
    /**
     * Returns true if the API request should be retried, given the error that was
     * given the first time the request was attempted. This is used for rate limit
     * related errors as well as intermittent server errors.
     *
     * @param {error} err - The API error to check if it is appropriate to retry.
     * @return {boolean} True if the API request should be retried, false otherwise.
     */ shouldRetryRequest(err) {
        if (err) {
            if ([
                408,
                429,
                500,
                502,
                503,
                504
            ].indexOf(err.code) !== -1) return true;
            if (err.errors) for (const e of err.errors){
                const reason = e.reason;
                if (reason === 'rateLimitExceeded') return true;
                if (reason === 'userRateLimitExceeded') return true;
                if (reason && reason.includes('EAI_AGAIN')) return true;
            }
        }
        return false;
    }
    /**
     * Get a function for making authenticated requests.
     *
     * @param {object} config - Configuration object.
     * @param {boolean=} config.autoRetry - Automatically retry requests if the
     *     response is related to rate limits or certain intermittent server
     * errors. We will exponentially backoff subsequent requests by default.
     * (default: true)
     * @param {object=} config.credentials - Credentials object.
     * @param {boolean=} config.customEndpoint - If true, just return the provided request options. Default: false.
     * @param {boolean=} config.useAuthWithCustomEndpoint - If true, will authenticate when using a custom endpoint. Default: false.
     * @param {string=} config.email - Account email address, required for PEM/P12 usage.
     * @param {number=} config.maxRetries - Maximum number of automatic retries attempted before returning the error. (default: 3)
     * @param {string=} config.keyFile - Path to a .json, .pem, or .p12 keyfile.
     * @param {array} config.scopes - Array of scopes required for the API.
     */ makeAuthenticatedRequestFactory(config) {
        const googleAutoAuthConfig = {
            ...config
        };
        if (googleAutoAuthConfig.projectId === $igT1R.DEFAULT_PROJECT_ID_TOKEN) delete googleAutoAuthConfig.projectId;
        let authClient;
        if (googleAutoAuthConfig.authClient instanceof $4gMhs.GoogleAuth) // Use an existing `GoogleAuth`
        authClient = googleAutoAuthConfig.authClient;
        else // Pass an `AuthClient` & `clientOptions` to `GoogleAuth`, if available
        authClient = new $4gMhs.GoogleAuth({
            ...googleAutoAuthConfig,
            authClient: googleAutoAuthConfig.authClient,
            clientOptions: googleAutoAuthConfig.clientOptions
        });
        function makeAuthenticatedRequest(reqOpts, optionsOrCallback) {
            let stream;
            let projectId;
            const reqConfig = {
                ...config
            };
            let activeRequest_;
            if (!optionsOrCallback) {
                stream = (0, $b7328ced60c2c078$var$duplexify_1.default)();
                reqConfig.stream = stream;
            }
            const options = typeof optionsOrCallback === 'object' ? optionsOrCallback : undefined;
            const callback = typeof optionsOrCallback === 'function' ? optionsOrCallback : undefined;
            async function setProjectId() {
                projectId = await authClient.getProjectId();
            }
            const onAuthenticated = async (err, authenticatedReqOpts)=>{
                const authLibraryError = err;
                const autoAuthFailed = err && typeof err.message === 'string' && err.message.indexOf('Could not load the default credentials') > -1;
                if (autoAuthFailed) // Even though authentication failed, the API might not actually
                // care.
                authenticatedReqOpts = reqOpts;
                if (!err || autoAuthFailed) try {
                    // Try with existing `projectId` value
                    authenticatedReqOpts = $b7328ced60c2c078$var$util.decorateRequest(authenticatedReqOpts, projectId);
                    err = null;
                } catch (e) {
                    if (e instanceof $1d8e70f271692f00$exports.MissingProjectIdError) // A `projectId` was required, but we don't have one.
                    try {
                        // Attempt to get the `projectId`
                        await setProjectId();
                        authenticatedReqOpts = $b7328ced60c2c078$var$util.decorateRequest(authenticatedReqOpts, projectId);
                        err = null;
                    } catch (e) {
                        // Re-use the "Could not load the default credentials error" if
                        // auto auth failed.
                        err = err || e;
                    }
                    else // Some other error unrelated to missing `projectId`
                    err = err || e;
                }
                if (err) {
                    if (stream) stream.destroy(err);
                    else {
                        const fn = options && options.onAuthenticated ? options.onAuthenticated : callback;
                        fn(err);
                    }
                    return;
                }
                if (options && options.onAuthenticated) options.onAuthenticated(null, authenticatedReqOpts);
                else activeRequest_ = $b7328ced60c2c078$var$util.makeRequest(authenticatedReqOpts, reqConfig, (apiResponseError, ...params)=>{
                    if (apiResponseError && apiResponseError.code === 401 && authLibraryError) // Re-use the "Could not load the default credentials error" if
                    // the API request failed due to missing credentials.
                    apiResponseError = authLibraryError;
                    callback(apiResponseError, ...params);
                });
            };
            const prepareRequest = async ()=>{
                try {
                    const getProjectId = async ()=>{
                        if (config.projectId && config.projectId !== $igT1R.DEFAULT_PROJECT_ID_TOKEN) // The user provided a project ID. We don't need to check with the
                        // auth client, it could be incorrect.
                        return config.projectId;
                        if (config.projectIdRequired === false) // A projectId is not required. Return the default.
                        return $igT1R.DEFAULT_PROJECT_ID_TOKEN;
                        return setProjectId();
                    };
                    const authorizeRequest = async ()=>{
                        if (reqConfig.customEndpoint && !reqConfig.useAuthWithCustomEndpoint) // Using a custom API override. Do not use `google-auth-library` for
                        // authentication. (ex: connecting to a local Datastore server)
                        return reqOpts;
                        else return authClient.authorizeRequest(reqOpts);
                    };
                    const [_projectId, authorizedReqOpts] = await Promise.all([
                        getProjectId(),
                        authorizeRequest()
                    ]);
                    if (_projectId) projectId = _projectId;
                    return onAuthenticated(null, authorizedReqOpts);
                } catch (e) {
                    return onAuthenticated(e);
                }
            };
            prepareRequest();
            if (stream) return stream;
            return {
                abort () {
                    setImmediate(()=>{
                        if (activeRequest_) {
                            activeRequest_.abort();
                            activeRequest_ = null;
                        }
                    });
                }
            };
        }
        const mar = makeAuthenticatedRequest;
        mar.getCredentials = authClient.getCredentials.bind(authClient);
        mar.authClient = authClient;
        return mar;
    }
    /**
     * Make a request through the `retryRequest` module with built-in error
     * handling and exponential back off.
     *
     * @param {object} reqOpts - Request options in the format `request` expects.
     * @param {object=} config - Configuration object.
     * @param {boolean=} config.autoRetry - Automatically retry requests if the
     *     response is related to rate limits or certain intermittent server
     * errors. We will exponentially backoff subsequent requests by default.
     * (default: true)
     * @param {number=} config.maxRetries - Maximum number of automatic retries
     *     attempted before returning the error. (default: 3)
     * @param {object=} config.request - HTTP module for request calls.
     * @param {function} callback - The callback function.
     */ makeRequest(reqOpts, config, callback) {
        var _a, _b, _c, _d, _e;
        let autoRetryValue = $b7328ced60c2c078$var$AUTO_RETRY_DEFAULT;
        if (config.autoRetry !== undefined) autoRetryValue = config.autoRetry;
        else if (((_a = config.retryOptions) === null || _a === void 0 ? void 0 : _a.autoRetry) !== undefined) autoRetryValue = config.retryOptions.autoRetry;
        let maxRetryValue = $b7328ced60c2c078$var$MAX_RETRY_DEFAULT;
        if (config.maxRetries !== undefined) maxRetryValue = config.maxRetries;
        else if (((_b = config.retryOptions) === null || _b === void 0 ? void 0 : _b.maxRetries) !== undefined) maxRetryValue = config.retryOptions.maxRetries;
        $b7328ced60c2c078$var$requestDefaults.headers = this._getDefaultHeaders(reqOpts[module.exports.GCCL_GCS_CMD_KEY]);
        const options = {
            request: $eadb341578354d2a$exports.teenyRequest.defaults($b7328ced60c2c078$var$requestDefaults),
            retries: autoRetryValue !== false ? maxRetryValue : 0,
            noResponseRetries: autoRetryValue !== false ? maxRetryValue : 0,
            shouldRetryFn (httpRespMessage) {
                var _a, _b;
                const err = $b7328ced60c2c078$var$util.parseHttpRespMessage(httpRespMessage).err;
                if ((_a = config.retryOptions) === null || _a === void 0 ? void 0 : _a.retryableErrorFn) return err && ((_b = config.retryOptions) === null || _b === void 0 ? void 0 : _b.retryableErrorFn(err));
                return err && $b7328ced60c2c078$var$util.shouldRetryRequest(err);
            },
            maxRetryDelay: (_c = config.retryOptions) === null || _c === void 0 ? void 0 : _c.maxRetryDelay,
            retryDelayMultiplier: (_d = config.retryOptions) === null || _d === void 0 ? void 0 : _d.retryDelayMultiplier,
            totalTimeout: (_e = config.retryOptions) === null || _e === void 0 ? void 0 : _e.totalTimeout
        };
        if (typeof reqOpts.maxRetries === 'number') {
            options.retries = reqOpts.maxRetries;
            options.noResponseRetries = reqOpts.maxRetries;
        }
        if (!config.stream) return (0, $b7328ced60c2c078$var$retry_request_1.default)(reqOpts, options, // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err, response, body)=>{
            $b7328ced60c2c078$var$util.handleResp(err, response, body, callback);
        });
        const dup = config.stream;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let requestStream;
        const isGetRequest = (reqOpts.method || 'GET').toUpperCase() === 'GET';
        if (isGetRequest) {
            requestStream = (0, $b7328ced60c2c078$var$retry_request_1.default)(reqOpts, options);
            dup.setReadable(requestStream);
        } else {
            // Streaming writable HTTP requests cannot be retried.
            requestStream = options.request(reqOpts);
            dup.setWritable(requestStream);
        }
        // Replay the Request events back to the stream.
        requestStream.on('error', dup.destroy.bind(dup)).on('response', dup.emit.bind(dup, 'response')).on('complete', dup.emit.bind(dup, 'complete'));
        dup.abort = requestStream.abort;
        return dup;
    }
    /**
     * Decorate the options about to be made in a request.
     *
     * @param {object} reqOpts - The options to be passed to `request`.
     * @param {string} projectId - The project ID.
     * @return {object} reqOpts - The decorated reqOpts.
     */ decorateRequest(reqOpts, projectId) {
        delete reqOpts.autoPaginate;
        delete reqOpts.autoPaginateVal;
        delete reqOpts.objectMode;
        if (reqOpts.qs !== null && typeof reqOpts.qs === 'object') {
            delete reqOpts.qs.autoPaginate;
            delete reqOpts.qs.autoPaginateVal;
            reqOpts.qs = (0, $1d8e70f271692f00$exports.replaceProjectIdToken)(reqOpts.qs, projectId);
        }
        if (Array.isArray(reqOpts.multipart)) reqOpts.multipart = reqOpts.multipart.map((part)=>{
            return (0, $1d8e70f271692f00$exports.replaceProjectIdToken)(part, projectId);
        });
        if (reqOpts.json !== null && typeof reqOpts.json === 'object') {
            delete reqOpts.json.autoPaginate;
            delete reqOpts.json.autoPaginateVal;
            reqOpts.json = (0, $1d8e70f271692f00$exports.replaceProjectIdToken)(reqOpts.json, projectId);
        }
        reqOpts.uri = (0, $1d8e70f271692f00$exports.replaceProjectIdToken)(reqOpts.uri, projectId);
        return reqOpts;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isCustomType(unknown, module) {
        function getConstructorName(obj) {
            return obj.constructor && obj.constructor.name.toLowerCase();
        }
        const moduleNameParts = module.split('/');
        const parentModuleName = moduleNameParts[0] && moduleNameParts[0].toLowerCase();
        const subModuleName = moduleNameParts[1] && moduleNameParts[1].toLowerCase();
        if (subModuleName && getConstructorName(unknown) !== subModuleName) return false;
        let walkingModule = unknown;
        // eslint-disable-next-line no-constant-condition
        while(true){
            if (getConstructorName(walkingModule) === parentModuleName) return true;
            walkingModule = walkingModule.parent;
            if (!walkingModule) return false;
        }
    }
    /**
     * Given two parameters, figure out if this is either:
     *  - Just a callback function
     *  - An options object, and then a callback function
     * @param optionsOrCallback An options object or callback.
     * @param cb A potentially undefined callback.
     */ maybeOptionsOrCallback(optionsOrCallback, cb) {
        return typeof optionsOrCallback === 'function' ? [
            {},
            optionsOrCallback
        ] : [
            optionsOrCallback,
            cb
        ];
    }
    _getDefaultHeaders(gcclGcsCmd) {
        const headers = {
            'User-Agent': (0, $a6bb4888373378c2$exports.getUserAgentString)(),
            'x-goog-api-client': `${(0, $a6bb4888373378c2$exports.getRuntimeTrackingString)()} gccl/${$b7328ced60c2c078$var$packageJson.version}-${(0, $a6bb4888373378c2$exports.getModuleFormat)()} gccl-invocation-id/${$b7328ced60c2c078$var$uuid.v4()}`
        };
        if (gcclGcsCmd) headers['x-goog-api-client'] += ` gccl-gcs-cmd/${gcclGcsCmd}`;
        return headers;
    }
}
module.exports.Util = $b7328ced60c2c078$var$Util;
/**
 * Basic Passthrough Stream that records the number of bytes read
 * every time the cursor is moved.
 */ class $b7328ced60c2c078$var$ProgressStream extends $1as1s$stream.Transform {
    constructor(){
        super(...arguments);
        this.bytesRead = 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _transform(chunk, encoding, callback) {
        this.bytesRead += chunk.length;
        this.emit('progress', {
            bytesWritten: this.bytesRead,
            contentLength: '*'
        });
        this.push(chunk);
        callback();
    }
}
const $b7328ced60c2c078$var$util = new $b7328ced60c2c078$var$Util();
module.exports.util = $b7328ced60c2c078$var$util;


//# sourceMappingURL=util.5e6d5c35.js.map
