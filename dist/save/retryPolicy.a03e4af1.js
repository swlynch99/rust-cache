require("./helpers.37c6aaac.js");
require("./esm.824e5f5a.js");
require("./commonjs.747dd214.js");
require("./constants.ccb0eb27.js");


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

var $40vaV = parcelRequire("40vaV");

var $eRZHU = parcelRequire("eRZHU");

var $gapOG = parcelRequire("gapOG");

var $NpdWD = parcelRequire("NpdWD");
const $bdf88d6318c7faf4$var$retryPolicyLogger = (0, $eRZHU.createClientLogger)("core-rest-pipeline retryPolicy");
/**
 * The programmatic identifier of the retryPolicy.
 */ const $bdf88d6318c7faf4$var$retryPolicyName = "retryPolicy";
function $bdf88d6318c7faf4$export$37db893101ba8efb(strategies, options = {
    maxRetries: (0, $NpdWD.DEFAULT_RETRY_POLICY_COUNT)
}) {
    const logger = options.logger || $bdf88d6318c7faf4$var$retryPolicyLogger;
    return {
        name: $bdf88d6318c7faf4$var$retryPolicyName,
        async sendRequest (request, next) {
            var _a, _b;
            let response;
            let responseError;
            let retryCount = -1;
            // eslint-disable-next-line no-constant-condition
            retryRequest: while(true){
                retryCount += 1;
                response = undefined;
                responseError = undefined;
                try {
                    logger.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
                    response = await next(request);
                    logger.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
                } catch (e) {
                    logger.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
                    // RestErrors are valid targets for the retry strategies.
                    // If none of the retry strategies can work with them, they will be thrown later in this policy.
                    // If the received error is not a RestError, it is immediately thrown.
                    responseError = e;
                    if (!e || responseError.name !== "RestError") throw e;
                    response = responseError.response;
                }
                if ((_a = request.abortSignal) === null || _a === void 0 ? void 0 : _a.aborted) {
                    logger.error(`Retry ${retryCount}: Request aborted.`);
                    const abortError = new (0, $gapOG.AbortError)();
                    throw abortError;
                }
                if (retryCount >= ((_b = options.maxRetries) !== null && _b !== void 0 ? _b : (0, $NpdWD.DEFAULT_RETRY_POLICY_COUNT))) {
                    logger.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
                    if (responseError) throw responseError;
                    else if (response) return response;
                    else throw new Error("Maximum retries reached with no response or error to throw");
                }
                logger.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);
                strategiesLoop: for (const strategy of strategies){
                    const strategyLogger = strategy.logger || $bdf88d6318c7faf4$var$retryPolicyLogger;
                    strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);
                    const modifiers = strategy.retry({
                        retryCount: retryCount,
                        response: response,
                        responseError: responseError
                    });
                    if (modifiers.skipStrategy) {
                        strategyLogger.info(`Retry ${retryCount}: Skipped.`);
                        continue strategiesLoop;
                    }
                    const { errorToThrow: errorToThrow, retryAfterInMs: retryAfterInMs, redirectTo: redirectTo } = modifiers;
                    if (errorToThrow) {
                        strategyLogger.error(`Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`, errorToThrow);
                        throw errorToThrow;
                    }
                    if (retryAfterInMs || retryAfterInMs === 0) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`);
                        await (0, $40vaV.delay)(retryAfterInMs, undefined, {
                            abortSignal: request.abortSignal
                        });
                        continue retryRequest;
                    }
                    if (redirectTo) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`);
                        request.url = redirectTo;
                        continue retryRequest;
                    }
                }
                if (responseError) {
                    logger.info(`None of the retry strategies could work with the received error. Throwing it.`);
                    throw responseError;
                }
                if (response) {
                    logger.info(`None of the retry strategies could work with the received response. Returning it.`);
                    return response;
                }
            // If all the retries skip and there's no response,
            // we're still in the retry loop, so a new request will be sent
            // until `maxRetries` is reached.
            }
        }
    };
}


