require("./esm.f174e5c8.js");
require("./throttlingRetryStrategy.9fdd1d06.js");


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

var $3lAwb = parcelRequire("3lAwb");
var $5c9b4e60180b7676$exports = {};
$5c9b4e60180b7676$exports = new URL("throttlingRetryStrategy.9fdd1d06.js", "file:" + __filename).toString();


// intervals are in milliseconds
const $d6f97f03ca715e16$var$DEFAULT_CLIENT_RETRY_INTERVAL = 1000;
const $d6f97f03ca715e16$var$DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 64000;
function $d6f97f03ca715e16$export$32df8c45a4e0ceb(options = {}) {
    var _a, _b;
    const retryInterval = (_a = options.retryDelayInMs) !== null && _a !== void 0 ? _a : $d6f97f03ca715e16$var$DEFAULT_CLIENT_RETRY_INTERVAL;
    const maxRetryInterval = (_b = options.maxRetryDelayInMs) !== null && _b !== void 0 ? _b : $d6f97f03ca715e16$var$DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
    return {
        name: "exponentialRetryStrategy",
        retry ({ retryCount: retryCount, response: response, responseError: responseError }) {
            const matchedSystemError = $d6f97f03ca715e16$export$4963f644aa8940e5(responseError);
            const ignoreSystemErrors = matchedSystemError && options.ignoreSystemErrors;
            const isExponential = $d6f97f03ca715e16$export$8f4e838352aae1f9(response);
            const ignoreExponentialResponse = isExponential && options.ignoreHttpStatusCodes;
            const unknownResponse = response && ((0, $5c9b4e60180b7676$exports.isThrottlingRetryResponse)(response) || !isExponential);
            if (unknownResponse || ignoreExponentialResponse || ignoreSystemErrors) return {
                skipStrategy: true
            };
            if (responseError && !matchedSystemError && !isExponential) return {
                errorToThrow: responseError
            };
            return (0, $3lAwb.calculateRetryDelay)(retryCount, {
                retryDelayInMs: retryInterval,
                maxRetryDelayInMs: maxRetryInterval
            });
        }
    };
}
function $d6f97f03ca715e16$export$8f4e838352aae1f9(response) {
    return Boolean(response && response.status !== undefined && (response.status >= 500 || response.status === 408) && response.status !== 501 && response.status !== 505);
}
function $d6f97f03ca715e16$export$4963f644aa8940e5(err) {
    if (!err) return false;
    return err.code === "ETIMEDOUT" || err.code === "ESOCKETTIMEDOUT" || err.code === "ECONNREFUSED" || err.code === "ECONNRESET" || err.code === "ENOENT" || err.code === "ENOTFOUND";
}


