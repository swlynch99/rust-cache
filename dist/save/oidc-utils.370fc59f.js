require("./http-client.469d5c68.js");
require("./auth.272c0f2d.js");
require("./core.fa35ff64.js");


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
var $10b09df4ee4b0d25$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
module.exports.OidcClient = void 0;
var $b954e7f788bef297$exports = {};
$b954e7f788bef297$exports = new URL("http-client.469d5c68.js", "file:" + __filename).toString();


var $3d5e19e122e192ac$exports = {};
$3d5e19e122e192ac$exports = new URL("auth.272c0f2d.js", "file:" + __filename).toString();



var $AJTaV = parcelRequire("AJTaV");
class $10b09df4ee4b0d25$var$OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new $b954e7f788bef297$exports.HttpClient('actions/oidc-client', [
            new $3d5e19e122e192ac$exports.BearerCredentialHandler($10b09df4ee4b0d25$var$OidcClient.getRequestToken())
        ], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return $10b09df4ee4b0d25$var$__awaiter(this, void 0, void 0, function*() {
            const httpclient = $10b09df4ee4b0d25$var$OidcClient.createHttpClient();
            const res = yield httpclient.getJson(id_token_url).catch((error)=>{
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) throw new Error('Response json body do not have ID Token field');
            return id_token;
        });
    }
    static getIDToken(audience) {
        return $10b09df4ee4b0d25$var$__awaiter(this, void 0, void 0, function*() {
            try {
                // New ID Token is requested from action service
                let id_token_url = $10b09df4ee4b0d25$var$OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, $AJTaV.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield $10b09df4ee4b0d25$var$OidcClient.getCall(id_token_url);
                (0, $AJTaV.setSecret)(id_token);
                return id_token;
            } catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
module.exports.OidcClient = $10b09df4ee4b0d25$var$OidcClient;


//# sourceMappingURL=oidc-utils.370fc59f.js.map
