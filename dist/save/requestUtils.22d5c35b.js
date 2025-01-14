require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./constants.e122b271.js");


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
var $1bb58c26449a5d1d$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $1bb58c26449a5d1d$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $1bb58c26449a5d1d$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $1bb58c26449a5d1d$var$__createBinding(result, mod, k);
    }
    $1bb58c26449a5d1d$var$__setModuleDefault(result, mod);
    return result;
};
var $1bb58c26449a5d1d$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $1bb58c26449a5d1d$var$core = $1bb58c26449a5d1d$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

var $86UTl = parcelRequire("86UTl");
function $1bb58c26449a5d1d$var$isSuccessStatusCode(statusCode) {
    if (!statusCode) return false;
    return statusCode >= 200 && statusCode < 300;
}
module.exports.isSuccessStatusCode = $1bb58c26449a5d1d$var$isSuccessStatusCode;
function $1bb58c26449a5d1d$var$isServerErrorStatusCode(statusCode) {
    if (!statusCode) return true;
    return statusCode >= 500;
}
module.exports.isServerErrorStatusCode = $1bb58c26449a5d1d$var$isServerErrorStatusCode;
function $1bb58c26449a5d1d$var$isRetryableStatusCode(statusCode) {
    if (!statusCode) return false;
    const retryableStatusCodes = [
        $14jHk.HttpCodes.BadGateway,
        $14jHk.HttpCodes.ServiceUnavailable,
        $14jHk.HttpCodes.GatewayTimeout
    ];
    return retryableStatusCodes.includes(statusCode);
}
module.exports.isRetryableStatusCode = $1bb58c26449a5d1d$var$isRetryableStatusCode;
function $1bb58c26449a5d1d$var$sleep(milliseconds) {
    return $1bb58c26449a5d1d$var$__awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve)=>setTimeout(resolve, milliseconds));
    });
}
function $1bb58c26449a5d1d$var$retry(name, method, getStatusCode, maxAttempts = $86UTl.DefaultRetryAttempts, delay = $86UTl.DefaultRetryDelay, onError) {
    return $1bb58c26449a5d1d$var$__awaiter(this, void 0, void 0, function*() {
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
                if (!$1bb58c26449a5d1d$var$isServerErrorStatusCode(statusCode)) return response;
            }
            if (statusCode) {
                isRetryable = $1bb58c26449a5d1d$var$isRetryableStatusCode(statusCode);
                errorMessage = `Cache service responded with ${statusCode}`;
            }
            $1bb58c26449a5d1d$var$core.debug(`${name} - Attempt ${attempt} of ${maxAttempts} failed with error: ${errorMessage}`);
            if (!isRetryable) {
                $1bb58c26449a5d1d$var$core.debug(`${name} - Error is not retryable`);
                break;
            }
            yield $1bb58c26449a5d1d$var$sleep(delay);
            attempt++;
        }
        throw Error(`${name} failed: ${errorMessage}`);
    });
}
module.exports.retry = $1bb58c26449a5d1d$var$retry;
function $1bb58c26449a5d1d$var$retryTypedResponse(name, method, maxAttempts = $86UTl.DefaultRetryAttempts, delay = $86UTl.DefaultRetryDelay) {
    return $1bb58c26449a5d1d$var$__awaiter(this, void 0, void 0, function*() {
        return yield $1bb58c26449a5d1d$var$retry(name, method, (response)=>response.statusCode, maxAttempts, delay, // If the error object contains the statusCode property, extract it and return
        // an TypedResponse<T> so it can be processed by the retry logic.
        (error)=>{
            if (error instanceof $14jHk.HttpClientError) return {
                statusCode: error.statusCode,
                result: null,
                headers: {},
                error: error
            };
            else return undefined;
        });
    });
}
module.exports.retryTypedResponse = $1bb58c26449a5d1d$var$retryTypedResponse;
function $1bb58c26449a5d1d$var$retryHttpClientResponse(name, method, maxAttempts = $86UTl.DefaultRetryAttempts, delay = $86UTl.DefaultRetryDelay) {
    return $1bb58c26449a5d1d$var$__awaiter(this, void 0, void 0, function*() {
        return yield $1bb58c26449a5d1d$var$retry(name, method, (response)=>response.message.statusCode, maxAttempts, delay);
    });
}
module.exports.retryHttpClientResponse = $1bb58c26449a5d1d$var$retryHttpClientResponse;


//# sourceMappingURL=requestUtils.22d5c35b.js.map
