require("./core.fa35ff64.js");
require("./http-client.469d5c68.js");
require("./constants.3a1f1756.js");


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
var $870859527e1b223b$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $870859527e1b223b$var$__setModuleDefault = module.exports && module.exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $870859527e1b223b$var$__importStar = module.exports && module.exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $870859527e1b223b$var$__createBinding(result, mod, k);
    }
    $870859527e1b223b$var$__setModuleDefault(result, mod);
    return result;
};
var $870859527e1b223b$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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

const $870859527e1b223b$var$core = $870859527e1b223b$var$__importStar((parcelRequire("AJTaV")));

var $14jHk = parcelRequire("14jHk");

var $5ZPb5 = parcelRequire("5ZPb5");
function $870859527e1b223b$var$isSuccessStatusCode(statusCode) {
    if (!statusCode) return false;
    return statusCode >= 200 && statusCode < 300;
}
module.exports.isSuccessStatusCode = $870859527e1b223b$var$isSuccessStatusCode;
function $870859527e1b223b$var$isServerErrorStatusCode(statusCode) {
    if (!statusCode) return true;
    return statusCode >= 500;
}
module.exports.isServerErrorStatusCode = $870859527e1b223b$var$isServerErrorStatusCode;
function $870859527e1b223b$var$isRetryableStatusCode(statusCode) {
    if (!statusCode) return false;
    const retryableStatusCodes = [
        $14jHk.HttpCodes.BadGateway,
        $14jHk.HttpCodes.ServiceUnavailable,
        $14jHk.HttpCodes.GatewayTimeout
    ];
    return retryableStatusCodes.includes(statusCode);
}
module.exports.isRetryableStatusCode = $870859527e1b223b$var$isRetryableStatusCode;
function $870859527e1b223b$var$sleep(milliseconds) {
    return $870859527e1b223b$var$__awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve)=>setTimeout(resolve, milliseconds));
    });
}
function $870859527e1b223b$var$retry(name, method, getStatusCode, maxAttempts = $5ZPb5.DefaultRetryAttempts, delay = $5ZPb5.DefaultRetryDelay, onError) {
    return $870859527e1b223b$var$__awaiter(this, void 0, void 0, function*() {
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
                if (!$870859527e1b223b$var$isServerErrorStatusCode(statusCode)) return response;
            }
            if (statusCode) {
                isRetryable = $870859527e1b223b$var$isRetryableStatusCode(statusCode);
                errorMessage = `Cache service responded with ${statusCode}`;
            }
            $870859527e1b223b$var$core.debug(`${name} - Attempt ${attempt} of ${maxAttempts} failed with error: ${errorMessage}`);
            if (!isRetryable) {
                $870859527e1b223b$var$core.debug(`${name} - Error is not retryable`);
                break;
            }
            yield $870859527e1b223b$var$sleep(delay);
            attempt++;
        }
        throw Error(`${name} failed: ${errorMessage}`);
    });
}
module.exports.retry = $870859527e1b223b$var$retry;
function $870859527e1b223b$var$retryTypedResponse(name, method, maxAttempts = $5ZPb5.DefaultRetryAttempts, delay = $5ZPb5.DefaultRetryDelay) {
    return $870859527e1b223b$var$__awaiter(this, void 0, void 0, function*() {
        return yield $870859527e1b223b$var$retry(name, method, (response)=>response.statusCode, maxAttempts, delay, // If the error object contains the statusCode property, extract it and return
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
module.exports.retryTypedResponse = $870859527e1b223b$var$retryTypedResponse;
function $870859527e1b223b$var$retryHttpClientResponse(name, method, maxAttempts = $5ZPb5.DefaultRetryAttempts, delay = $5ZPb5.DefaultRetryDelay) {
    return $870859527e1b223b$var$__awaiter(this, void 0, void 0, function*() {
        return yield $870859527e1b223b$var$retry(name, method, (response)=>response.message.statusCode, maxAttempts, delay);
    });
}
module.exports.retryHttpClientResponse = $870859527e1b223b$var$retryHttpClientResponse;


//# sourceMappingURL=requestUtils.97b82bb9.js.map
