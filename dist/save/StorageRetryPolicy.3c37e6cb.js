require("./commonjs.e525fcd7.js");
require("./RequestPolicy.3a123c03.js");
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

var $lPyLJ = parcelRequire("lPyLJ");

var $3UluS = parcelRequire("3UluS");

var $esTXG = parcelRequire("esTXG");

var $aM1QT = parcelRequire("aM1QT");
function $4b24cde17b7004cc$export$d345770d3fe30446(retryOptions) {
    return {
        create: (nextPolicy, options)=>{
            return new $4b24cde17b7004cc$export$6d3576f994d2e84(nextPolicy, options, retryOptions);
        }
    };
}
var $4b24cde17b7004cc$export$ed16dfd498f7f657;
(function(StorageRetryPolicyType) {
    /**
     * Exponential retry. Retry time delay grows exponentially.
     */ StorageRetryPolicyType[StorageRetryPolicyType["EXPONENTIAL"] = 0] = "EXPONENTIAL";
    /**
     * Linear retry. Retry time delay grows linearly.
     */ StorageRetryPolicyType[StorageRetryPolicyType["FIXED"] = 1] = "FIXED";
})($4b24cde17b7004cc$export$ed16dfd498f7f657 || ($4b24cde17b7004cc$export$ed16dfd498f7f657 = {}));
// Default values of StorageRetryOptions
const $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS = {
    maxRetryDelayInMs: 120000,
    maxTries: 4,
    retryDelayInMs: 4000,
    retryPolicyType: $4b24cde17b7004cc$export$ed16dfd498f7f657.EXPONENTIAL,
    secondaryHost: "",
    tryTimeoutInMs: undefined
};
const $4b24cde17b7004cc$var$RETRY_ABORT_ERROR = new (0, $4H7QA.AbortError)("The operation was aborted.");
class $4b24cde17b7004cc$export$6d3576f994d2e84 extends (0, $lPyLJ.BaseRequestPolicy) {
    /**
     * Creates an instance of RetryPolicy.
     *
     * @param nextPolicy -
     * @param options -
     * @param retryOptions -
     */ constructor(nextPolicy, options, retryOptions = $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS){
        super(nextPolicy, options);
        // Initialize retry options
        this.retryOptions = {
            retryPolicyType: retryOptions.retryPolicyType ? retryOptions.retryPolicyType : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.retryPolicyType,
            maxTries: retryOptions.maxTries && retryOptions.maxTries >= 1 ? Math.floor(retryOptions.maxTries) : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.maxTries,
            tryTimeoutInMs: retryOptions.tryTimeoutInMs && retryOptions.tryTimeoutInMs >= 0 ? retryOptions.tryTimeoutInMs : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.tryTimeoutInMs,
            retryDelayInMs: retryOptions.retryDelayInMs && retryOptions.retryDelayInMs >= 0 ? Math.min(retryOptions.retryDelayInMs, retryOptions.maxRetryDelayInMs ? retryOptions.maxRetryDelayInMs : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.maxRetryDelayInMs) : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.retryDelayInMs,
            maxRetryDelayInMs: retryOptions.maxRetryDelayInMs && retryOptions.maxRetryDelayInMs >= 0 ? retryOptions.maxRetryDelayInMs : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.maxRetryDelayInMs,
            secondaryHost: retryOptions.secondaryHost ? retryOptions.secondaryHost : $4b24cde17b7004cc$var$DEFAULT_RETRY_OPTIONS.secondaryHost
        };
    }
    /**
     * Sends request.
     *
     * @param request -
     */ async sendRequest(request) {
        return this.attemptSendRequest(request, false, 1);
    }
    /**
     * Decide and perform next retry. Won't mutate request parameter.
     *
     * @param request -
     * @param secondaryHas404 -  If attempt was against the secondary & it returned a StatusNotFound (404), then
     *                                   the resource was not found. This may be due to replication delay. So, in this
     *                                   case, we'll never try the secondary again for this operation.
     * @param attempt -           How many retries has been attempted to performed, starting from 1, which includes
     *                                   the attempt will be performed by this method call.
     */ async attemptSendRequest(request, secondaryHas404, attempt) {
        const newRequest = request.clone();
        const isPrimaryRetry = secondaryHas404 || !this.retryOptions.secondaryHost || !(request.method === "GET" || request.method === "HEAD" || request.method === "OPTIONS") || attempt % 2 === 1;
        if (!isPrimaryRetry) newRequest.url = (0, $esTXG.setURLHost)(newRequest.url, this.retryOptions.secondaryHost);
        // Set the server-side timeout query parameter "timeout=[seconds]"
        if (this.retryOptions.tryTimeoutInMs) newRequest.url = (0, $esTXG.setURLParameter)(newRequest.url, (0, $3UluS.URLConstants).Parameters.TIMEOUT, Math.floor(this.retryOptions.tryTimeoutInMs / 1000).toString());
        let response;
        try {
            (0, $aM1QT.logger).info(`RetryPolicy: =====> Try=${attempt} ${isPrimaryRetry ? "Primary" : "Secondary"}`);
            response = await this._nextPolicy.sendRequest(newRequest);
            if (!this.shouldRetry(isPrimaryRetry, attempt, response)) return response;
            secondaryHas404 = secondaryHas404 || !isPrimaryRetry && response.status === 404;
        } catch (err) {
            (0, $aM1QT.logger).error(`RetryPolicy: Caught error, message: ${err.message}, code: ${err.code}`);
            if (!this.shouldRetry(isPrimaryRetry, attempt, response, err)) throw err;
        }
        await this.delay(isPrimaryRetry, attempt, request.abortSignal);
        return this.attemptSendRequest(request, secondaryHas404, ++attempt);
    }
    /**
     * Decide whether to retry according to last HTTP response and retry counters.
     *
     * @param isPrimaryRetry -
     * @param attempt -
     * @param response -
     * @param err -
     */ shouldRetry(isPrimaryRetry, attempt, response, err) {
        if (attempt >= this.retryOptions.maxTries) {
            (0, $aM1QT.logger).info(`RetryPolicy: Attempt(s) ${attempt} >= maxTries ${this.retryOptions.maxTries}, no further try.`);
            return false;
        }
        // Handle network failures, you may need to customize the list when you implement
        // your own http client
        const retriableErrors = [
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
        if (err) {
            for (const retriableError of retriableErrors)if (err.name.toUpperCase().includes(retriableError) || err.message.toUpperCase().includes(retriableError) || err.code && err.code.toString().toUpperCase() === retriableError) {
                (0, $aM1QT.logger).info(`RetryPolicy: Network error ${retriableError} found, will retry.`);
                return true;
            }
        }
        // If attempt was against the secondary & it returned a StatusNotFound (404), then
        // the resource was not found. This may be due to replication delay. So, in this
        // case, we'll never try the secondary again for this operation.
        if (response || err) {
            const statusCode = response ? response.status : err ? err.statusCode : 0;
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
        if ((err === null || err === void 0 ? void 0 : err.code) === "PARSE_ERROR" && (err === null || err === void 0 ? void 0 : err.message.startsWith(`Error "Error: Unclosed root tag`))) {
            (0, $aM1QT.logger).info("RetryPolicy: Incomplete XML response likely due to service timeout, will retry.");
            return true;
        }
        return false;
    }
    /**
     * Delay a calculated time between retries.
     *
     * @param isPrimaryRetry -
     * @param attempt -
     * @param abortSignal -
     */ async delay(isPrimaryRetry, attempt, abortSignal) {
        let delayTimeInMs = 0;
        if (isPrimaryRetry) switch(this.retryOptions.retryPolicyType){
            case $4b24cde17b7004cc$export$ed16dfd498f7f657.EXPONENTIAL:
                delayTimeInMs = Math.min((Math.pow(2, attempt - 1) - 1) * this.retryOptions.retryDelayInMs, this.retryOptions.maxRetryDelayInMs);
                break;
            case $4b24cde17b7004cc$export$ed16dfd498f7f657.FIXED:
                delayTimeInMs = this.retryOptions.retryDelayInMs;
                break;
        }
        else delayTimeInMs = Math.random() * 1000;
        (0, $aM1QT.logger).info(`RetryPolicy: Delay for ${delayTimeInMs}ms`);
        return (0, $esTXG.delay)(delayTimeInMs, abortSignal, $4b24cde17b7004cc$var$RETRY_ABORT_ERROR);
    }
}


