require("./commonjs.e525fcd7.js");
require("./esm.346084e9.js");
require("./esm.f174e5c8.js");
require("./constants.40d31e64.js");
require("./utils.common.e0a90969.js");
require("./log.59f28d95.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $4H7QA = parcelRequire("4H7QA");

var $huk7e = parcelRequire("huk7e");

var $3lAwb = parcelRequire("3lAwb");

var $3UluS = parcelRequire("3UluS");

var $esTXG = parcelRequire("esTXG");

var $aM1QT = parcelRequire("aM1QT");
const $9e17d511f2788db4$export$3f45bd1eb24801df = "storageRetryPolicy";
var $9e17d511f2788db4$export$ed16dfd498f7f657;
(function(StorageRetryPolicyType) {
    /**
     * Exponential retry. Retry time delay grows exponentially.
     */ StorageRetryPolicyType[StorageRetryPolicyType["EXPONENTIAL"] = 0] = "EXPONENTIAL";
    /**
     * Linear retry. Retry time delay grows linearly.
     */ StorageRetryPolicyType[StorageRetryPolicyType["FIXED"] = 1] = "FIXED";
})($9e17d511f2788db4$export$ed16dfd498f7f657 || ($9e17d511f2788db4$export$ed16dfd498f7f657 = {}));
// Default values of StorageRetryOptions
const $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS = {
    maxRetryDelayInMs: 120000,
    maxTries: 4,
    retryDelayInMs: 4000,
    retryPolicyType: $9e17d511f2788db4$export$ed16dfd498f7f657.EXPONENTIAL,
    secondaryHost: "",
    tryTimeoutInMs: undefined
};
const $9e17d511f2788db4$var$retriableErrors = [
    "ETIMEDOUT",
    "ESOCKETTIMEDOUT",
    "ECONNREFUSED",
    "ECONNRESET",
    "ENOENT",
    "ENOTFOUND",
    "TIMEOUT",
    "EPIPE",
    "REQUEST_SEND_ERROR"
];
const $9e17d511f2788db4$var$RETRY_ABORT_ERROR = new (0, $4H7QA.AbortError)("The operation was aborted.");
function $9e17d511f2788db4$export$9b65cecfa6ed48dc(options = {}) {
    var _a, _b, _c, _d, _e, _f;
    const retryPolicyType = (_a = options.retryPolicyType) !== null && _a !== void 0 ? _a : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.retryPolicyType;
    const maxTries = (_b = options.maxTries) !== null && _b !== void 0 ? _b : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.maxTries;
    const retryDelayInMs = (_c = options.retryDelayInMs) !== null && _c !== void 0 ? _c : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.retryDelayInMs;
    const maxRetryDelayInMs = (_d = options.maxRetryDelayInMs) !== null && _d !== void 0 ? _d : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.maxRetryDelayInMs;
    const secondaryHost = (_e = options.secondaryHost) !== null && _e !== void 0 ? _e : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.secondaryHost;
    const tryTimeoutInMs = (_f = options.tryTimeoutInMs) !== null && _f !== void 0 ? _f : $9e17d511f2788db4$var$DEFAULT_RETRY_OPTIONS.tryTimeoutInMs;
    function shouldRetry({ isPrimaryRetry: isPrimaryRetry, attempt: attempt, response: response, error: error }) {
        var _a, _b;
        if (attempt >= maxTries) {
            (0, $aM1QT.logger).info(`RetryPolicy: Attempt(s) ${attempt} >= maxTries ${maxTries}, no further try.`);
            return false;
        }
        if (error) {
            for (const retriableError of $9e17d511f2788db4$var$retriableErrors)if (error.name.toUpperCase().includes(retriableError) || error.message.toUpperCase().includes(retriableError) || error.code && error.code.toString().toUpperCase() === retriableError) {
                (0, $aM1QT.logger).info(`RetryPolicy: Network error ${retriableError} found, will retry.`);
                return true;
            }
            if ((error === null || error === void 0 ? void 0 : error.code) === "PARSE_ERROR" && (error === null || error === void 0 ? void 0 : error.message.startsWith(`Error "Error: Unclosed root tag`))) {
                (0, $aM1QT.logger).info("RetryPolicy: Incomplete XML response likely due to service timeout, will retry.");
                return true;
            }
        }
        // If attempt was against the secondary & it returned a StatusNotFound (404), then
        // the resource was not found. This may be due to replication delay. So, in this
        // case, we'll never try the secondary again for this operation.
        if (response || error) {
            const statusCode = (_b = (_a = response === null || response === void 0 ? void 0 : response.status) !== null && _a !== void 0 ? _a : error === null || error === void 0 ? void 0 : error.statusCode) !== null && _b !== void 0 ? _b : 0;
            if (!isPrimaryRetry && statusCode === 404) {
                (0, $aM1QT.logger).info(`RetryPolicy: Secondary access with 404, will retry.`);
                return true;
            }
            // Server internal error or server timeout
            if (statusCode === 503 || statusCode === 500) {
                (0, $aM1QT.logger).info(`RetryPolicy: Will retry for status code ${statusCode}.`);
                return true;
            }
        }
        // [Copy source error code] Feature is pending on service side, skip retry on copy source error for now.
        // if (response) {
        //   // Retry select Copy Source Error Codes.
        //   if (response?.status >= 400) {
        //     const copySourceError = response.headers.get(HeaderConstants.X_MS_CopySourceErrorCode);
        //     if (copySourceError !== undefined) {
        //       switch (copySourceError) {
        //         case "InternalError":
        //         case "OperationTimedOut":
        //         case "ServerBusy":
        //           return true;
        //       }
        //     }
        //   }
        // }
        return false;
    }
    function calculateDelay(isPrimaryRetry, attempt) {
        let delayTimeInMs = 0;
        if (isPrimaryRetry) switch(retryPolicyType){
            case $9e17d511f2788db4$export$ed16dfd498f7f657.EXPONENTIAL:
                delayTimeInMs = Math.min((Math.pow(2, attempt - 1) - 1) * retryDelayInMs, maxRetryDelayInMs);
                break;
            case $9e17d511f2788db4$export$ed16dfd498f7f657.FIXED:
                delayTimeInMs = retryDelayInMs;
                break;
        }
        else delayTimeInMs = Math.random() * 1000;
        (0, $aM1QT.logger).info(`RetryPolicy: Delay for ${delayTimeInMs}ms`);
        return delayTimeInMs;
    }
    return {
        name: $9e17d511f2788db4$export$3f45bd1eb24801df,
        async sendRequest (request, next) {
            // Set the server-side timeout query parameter "timeout=[seconds]"
            if (tryTimeoutInMs) request.url = (0, $esTXG.setURLParameter)(request.url, (0, $3UluS.URLConstants).Parameters.TIMEOUT, String(Math.floor(tryTimeoutInMs / 1000)));
            const primaryUrl = request.url;
            const secondaryUrl = secondaryHost ? (0, $esTXG.setURLHost)(request.url, secondaryHost) : undefined;
            let secondaryHas404 = false;
            let attempt = 1;
            let retryAgain = true;
            let response;
            let error;
            while(retryAgain){
                const isPrimaryRetry = secondaryHas404 || !secondaryUrl || ![
                    "GET",
                    "HEAD",
                    "OPTIONS"
                ].includes(request.method) || attempt % 2 === 1;
                request.url = isPrimaryRetry ? primaryUrl : secondaryUrl;
                response = undefined;
                error = undefined;
                try {
                    (0, $aM1QT.logger).info(`RetryPolicy: =====> Try=${attempt} ${isPrimaryRetry ? "Primary" : "Secondary"}`);
                    response = await next(request);
                    secondaryHas404 = secondaryHas404 || !isPrimaryRetry && response.status === 404;
                } catch (e) {
                    if ((0, $huk7e.isRestError)(e)) {
                        (0, $aM1QT.logger).error(`RetryPolicy: Caught error, message: ${e.message}, code: ${e.code}`);
                        error = e;
                    } else {
                        (0, $aM1QT.logger).error(`RetryPolicy: Caught error, message: ${(0, $3lAwb.getErrorMessage)(e)}`);
                        throw e;
                    }
                }
                retryAgain = shouldRetry({
                    isPrimaryRetry: isPrimaryRetry,
                    attempt: attempt,
                    response: response,
                    error: error
                });
                if (retryAgain) await (0, $esTXG.delay)(calculateDelay(isPrimaryRetry, attempt), request.abortSignal, $9e17d511f2788db4$var$RETRY_ABORT_ERROR);
                attempt++;
            }
            if (response) return response;
            throw error !== null && error !== void 0 ? error : new (0, $huk7e.RestError)("RetryPolicy failed without known error.");
        }
    };
}


