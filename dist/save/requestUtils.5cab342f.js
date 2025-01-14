require("./core.da66a1bd.js");
require("./http-client.a6473211.js");
require("./constants.17ebc7c1.js");


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
var $cbb22143c2e7372f$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $cbb22143c2e7372f$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $cbb22143c2e7372f$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $cbb22143c2e7372f$var$__createBinding(result, mod, k);
    }
    $cbb22143c2e7372f$var$__setModuleDefault(result, mod);
    return result;
};
var $cbb22143c2e7372f$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.retryHttpClientResponse = module.exports.retryTypedResponse = module.exports.retry = module.exports.isRetryableStatusCode = module.exports.isServerErrorStatusCode = module.exports.isSuccessStatusCode = void 0;

const $cbb22143c2e7372f$var$core = $cbb22143c2e7372f$var$__importStar((parcelRequire("1irLk")));

var $jmQwl = parcelRequire("jmQwl");

var $3osl1 = parcelRequire("3osl1");
function $cbb22143c2e7372f$var$isSuccessStatusCode(statusCode) {
    if (!statusCode) return false;
    return statusCode >= 200 && statusCode < 300;
}
module.exports.isSuccessStatusCode = $cbb22143c2e7372f$var$isSuccessStatusCode;
function $cbb22143c2e7372f$var$isServerErrorStatusCode(statusCode) {
    if (!statusCode) return true;
    return statusCode >= 500;
}
module.exports.isServerErrorStatusCode = $cbb22143c2e7372f$var$isServerErrorStatusCode;
function $cbb22143c2e7372f$var$isRetryableStatusCode(statusCode) {
    if (!statusCode) return false;
    const retryableStatusCodes = [
        $jmQwl.HttpCodes.BadGateway,
        $jmQwl.HttpCodes.ServiceUnavailable,
        $jmQwl.HttpCodes.GatewayTimeout
    ];
    return retryableStatusCodes.includes(statusCode);
}
module.exports.isRetryableStatusCode = $cbb22143c2e7372f$var$isRetryableStatusCode;
function $cbb22143c2e7372f$var$sleep(milliseconds) {
    return $cbb22143c2e7372f$var$__awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve)=>setTimeout(resolve, milliseconds));
    });
}
function $cbb22143c2e7372f$var$retry(name, method, getStatusCode, maxAttempts = $3osl1.DefaultRetryAttempts, delay = $3osl1.DefaultRetryDelay, onError) {
    return $cbb22143c2e7372f$var$__awaiter(this, void 0, void 0, function*() {
        let errorMessage = '';
        let attempt = 1;
        while(attempt <= maxAttempts){
            let response = undefined;
            let statusCode = undefined;
            let isRetryable = false;
            try {
                response = yield method();
            } catch (error) {
                if (onError) response = onError(error);
                isRetryable = true;
                errorMessage = error.message;
            }
            if (response) {
                statusCode = getStatusCode(response);
                if (!$cbb22143c2e7372f$var$isServerErrorStatusCode(statusCode)) return response;
            }
            if (statusCode) {
                isRetryable = $cbb22143c2e7372f$var$isRetryableStatusCode(statusCode);
                errorMessage = `Cache service responded with ${statusCode}`;
            }
            $cbb22143c2e7372f$var$core.debug(`${name} - Attempt ${attempt} of ${maxAttempts} failed with error: ${errorMessage}`);
            if (!isRetryable) {
                $cbb22143c2e7372f$var$core.debug(`${name} - Error is not retryable`);
                break;
            }
            yield $cbb22143c2e7372f$var$sleep(delay);
            attempt++;
        }
        throw Error(`${name} failed: ${errorMessage}`);
    });
}
module.exports.retry = $cbb22143c2e7372f$var$retry;
function $cbb22143c2e7372f$var$retryTypedResponse(name, method, maxAttempts = $3osl1.DefaultRetryAttempts, delay = $3osl1.DefaultRetryDelay) {
    return $cbb22143c2e7372f$var$__awaiter(this, void 0, void 0, function*() {
        return yield $cbb22143c2e7372f$var$retry(name, method, (response)=>response.statusCode, maxAttempts, delay, // If the error object contains the statusCode property, extract it and return
        // an TypedResponse<T> so it can be processed by the retry logic.
        (error)=>{
            if (error instanceof $jmQwl.HttpClientError) return {
                statusCode: error.statusCode,
                result: null,
                headers: {},
                error: error
            };
            else return undefined;
        });
    });
}
module.exports.retryTypedResponse = $cbb22143c2e7372f$var$retryTypedResponse;
function $cbb22143c2e7372f$var$retryHttpClientResponse(name, method, maxAttempts = $3osl1.DefaultRetryAttempts, delay = $3osl1.DefaultRetryDelay) {
    return $cbb22143c2e7372f$var$__awaiter(this, void 0, void 0, function*() {
        return yield $cbb22143c2e7372f$var$retry(name, method, (response)=>response.message.statusCode, maxAttempts, delay);
    });
}
module.exports.retryHttpClientResponse = $cbb22143c2e7372f$var$retryHttpClientResponse;


