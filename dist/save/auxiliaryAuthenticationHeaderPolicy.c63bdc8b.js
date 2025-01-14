require("./tokenCycler.bd6619ee.js");
require("./log.7103fd4e.js");


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

var $3bWUW = parcelRequire("3bWUW");

var $53OzH = parcelRequire("53OzH");
const $1fbac1d19ef851aa$export$346034fd5ab68f49 = "auxiliaryAuthenticationHeaderPolicy";
const $1fbac1d19ef851aa$var$AUTHORIZATION_AUXILIARY_HEADER = "x-ms-authorization-auxiliary";
async function $1fbac1d19ef851aa$var$sendAuthorizeRequest(options) {
    var _a, _b;
    const { scopes: scopes, getAccessToken: getAccessToken, request: request } = options;
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions
    };
    return (_b = (_a = await getAccessToken(scopes, getTokenOptions)) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : "";
}
function $1fbac1d19ef851aa$export$9b68b9528118c959(options) {
    const { credentials: credentials, scopes: scopes } = options;
    const logger = options.logger || (0, $53OzH.logger);
    const tokenCyclerMap = new WeakMap();
    return {
        name: $1fbac1d19ef851aa$export$346034fd5ab68f49,
        async sendRequest (request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) throw new Error("Bearer token authentication for auxiliary header is not permitted for non-TLS protected (non-https) URLs.");
            if (!credentials || credentials.length === 0) {
                logger.info(`${$1fbac1d19ef851aa$export$346034fd5ab68f49} header will not be set due to empty credentials.`);
                return next(request);
            }
            const tokenPromises = [];
            for (const credential of credentials){
                let getAccessToken = tokenCyclerMap.get(credential);
                if (!getAccessToken) {
                    getAccessToken = (0, $3bWUW.createTokenCycler)(credential);
                    tokenCyclerMap.set(credential, getAccessToken);
                }
                tokenPromises.push($1fbac1d19ef851aa$var$sendAuthorizeRequest({
                    scopes: Array.isArray(scopes) ? scopes : [
                        scopes
                    ],
                    request: request,
                    getAccessToken: getAccessToken,
                    logger: logger
                }));
            }
            const auxiliaryTokens = (await Promise.all(tokenPromises)).filter((token)=>Boolean(token));
            if (auxiliaryTokens.length === 0) {
                logger.warning(`None of the auxiliary tokens are valid. ${$1fbac1d19ef851aa$var$AUTHORIZATION_AUXILIARY_HEADER} header will not be set.`);
                return next(request);
            }
            request.headers.set($1fbac1d19ef851aa$var$AUTHORIZATION_AUXILIARY_HEADER, auxiliaryTokens.map((token)=>`Bearer ${token}`).join(", "));
            return next(request);
        }
    };
}


