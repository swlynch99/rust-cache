require("./googleauth.f40ed5c1.js");
require("./build.00613a08.js");
require("./build.b127b0e3.js");
require("./authclient.6e6a5fff.js");
require("./computeclient.d71a80d2.js");
require("./envDetect.6e785ed2.js");
require("./iam.5defabca.js");
require("./idtokenclient.d8a7058c.js");
require("./jwtaccess.67ba0346.js");
require("./jwtclient.3822357b.js");
require("./impersonated.1a56c5eb.js");
require("./oauth2client.de126385.js");
require("./loginticket.6cd59f49.js");
require("./refreshclient.3d16a1b6.js");
require("./awsclient.bf357161.js");
require("./awsrequestsigner.faa3439a.js");
require("./identitypoolclient.138c4bd2.js");
require("./externalclient.878b9ba6.js");
require("./baseexternalclient.eb7653ba.js");
require("./downscopedclient.6f693cbe.js");
require("./pluggable-auth-client.fac9f80b.js");
require("./passthrough.7e012796.js");
require("./transporters.57f9aa4b.js");


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
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.GoogleAuth = module.exports.auth = module.exports.DefaultTransporter = module.exports.PassThroughClient = module.exports.ExecutableError = module.exports.PluggableAuthClient = module.exports.DownscopedClient = module.exports.BaseExternalAccountClient = module.exports.ExternalAccountClient = module.exports.IdentityPoolClient = module.exports.AwsRequestSigner = module.exports.AwsClient = module.exports.UserRefreshClient = module.exports.LoginTicket = module.exports.ClientAuthentication = module.exports.OAuth2Client = module.exports.CodeChallengeMethod = module.exports.Impersonated = module.exports.JWT = module.exports.JWTAccess = module.exports.IdTokenClient = module.exports.IAMAuth = module.exports.GCPEnv = module.exports.Compute = module.exports.DEFAULT_UNIVERSE = module.exports.AuthClient = module.exports.gaxios = module.exports.gcpMetadata = void 0;
var $2c68a3d12be1e3c1$exports = {};
$2c68a3d12be1e3c1$exports = new URL("googleauth.f40ed5c1.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "GoogleAuth", {
    enumerable: true,
    get: function() {
        return $2c68a3d12be1e3c1$exports.GoogleAuth;
    }
});

// Export common deps to ensure types/instances are the exact match. Useful
// for consistently configuring the library across versions.
module.exports.gcpMetadata = (parcelRequire("gRBfr"));

module.exports.gaxios = (parcelRequire("XskYs"));

var $fbhxX = parcelRequire("fbhxX");
Object.defineProperty(module.exports, "AuthClient", {
    enumerable: true,
    get: function() {
        return $fbhxX.AuthClient;
    }
});
Object.defineProperty(module.exports, "DEFAULT_UNIVERSE", {
    enumerable: true,
    get: function() {
        return $fbhxX.DEFAULT_UNIVERSE;
    }
});

var $3RNdG = parcelRequire("3RNdG");
Object.defineProperty(module.exports, "Compute", {
    enumerable: true,
    get: function() {
        return $3RNdG.Compute;
    }
});

var $lPxw0 = parcelRequire("lPxw0");
Object.defineProperty(module.exports, "GCPEnv", {
    enumerable: true,
    get: function() {
        return $lPxw0.GCPEnv;
    }
});
var $4dca2de4f1a21807$exports = {};
$4dca2de4f1a21807$exports = new URL("iam.5defabca.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "IAMAuth", {
    enumerable: true,
    get: function() {
        return $4dca2de4f1a21807$exports.IAMAuth;
    }
});

var $7g63a = parcelRequire("7g63a");
Object.defineProperty(module.exports, "IdTokenClient", {
    enumerable: true,
    get: function() {
        return $7g63a.IdTokenClient;
    }
});

var $idptU = parcelRequire("idptU");
Object.defineProperty(module.exports, "JWTAccess", {
    enumerable: true,
    get: function() {
        return $idptU.JWTAccess;
    }
});

var $ht7B1 = parcelRequire("ht7B1");
Object.defineProperty(module.exports, "JWT", {
    enumerable: true,
    get: function() {
        return $ht7B1.JWT;
    }
});

var $9tqIz = parcelRequire("9tqIz");
Object.defineProperty(module.exports, "Impersonated", {
    enumerable: true,
    get: function() {
        return $9tqIz.Impersonated;
    }
});

var $flpnV = parcelRequire("flpnV");
Object.defineProperty(module.exports, "CodeChallengeMethod", {
    enumerable: true,
    get: function() {
        return $flpnV.CodeChallengeMethod;
    }
});
Object.defineProperty(module.exports, "OAuth2Client", {
    enumerable: true,
    get: function() {
        return $flpnV.OAuth2Client;
    }
});
Object.defineProperty(module.exports, "ClientAuthentication", {
    enumerable: true,
    get: function() {
        return $flpnV.ClientAuthentication;
    }
});

var $jRaUz = parcelRequire("jRaUz");
Object.defineProperty(module.exports, "LoginTicket", {
    enumerable: true,
    get: function() {
        return $jRaUz.LoginTicket;
    }
});

var $4v6DU = parcelRequire("4v6DU");
Object.defineProperty(module.exports, "UserRefreshClient", {
    enumerable: true,
    get: function() {
        return $4v6DU.UserRefreshClient;
    }
});

var $lmr4F = parcelRequire("lmr4F");
Object.defineProperty(module.exports, "AwsClient", {
    enumerable: true,
    get: function() {
        return $lmr4F.AwsClient;
    }
});

var $l3mid = parcelRequire("l3mid");
Object.defineProperty(module.exports, "AwsRequestSigner", {
    enumerable: true,
    get: function() {
        return $l3mid.AwsRequestSigner;
    }
});

var $7Y9ku = parcelRequire("7Y9ku");
Object.defineProperty(module.exports, "IdentityPoolClient", {
    enumerable: true,
    get: function() {
        return $7Y9ku.IdentityPoolClient;
    }
});

var $k6qVC = parcelRequire("k6qVC");
Object.defineProperty(module.exports, "ExternalAccountClient", {
    enumerable: true,
    get: function() {
        return $k6qVC.ExternalAccountClient;
    }
});

var $kW196 = parcelRequire("kW196");
Object.defineProperty(module.exports, "BaseExternalAccountClient", {
    enumerable: true,
    get: function() {
        return $kW196.BaseExternalAccountClient;
    }
});
var $3342c6ea8d98fc35$exports = {};
$3342c6ea8d98fc35$exports = new URL("downscopedclient.6f693cbe.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "DownscopedClient", {
    enumerable: true,
    get: function() {
        return $3342c6ea8d98fc35$exports.DownscopedClient;
    }
});

var $dRvMe = parcelRequire("dRvMe");
Object.defineProperty(module.exports, "PluggableAuthClient", {
    enumerable: true,
    get: function() {
        return $dRvMe.PluggableAuthClient;
    }
});
Object.defineProperty(module.exports, "ExecutableError", {
    enumerable: true,
    get: function() {
        return $dRvMe.ExecutableError;
    }
});
var $a88d31254d1e5649$exports = {};
$a88d31254d1e5649$exports = new URL("passthrough.7e012796.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "PassThroughClient", {
    enumerable: true,
    get: function() {
        return $a88d31254d1e5649$exports.PassThroughClient;
    }
});

var $kjYG3 = parcelRequire("kjYG3");
Object.defineProperty(module.exports, "DefaultTransporter", {
    enumerable: true,
    get: function() {
        return $kjYG3.DefaultTransporter;
    }
});
const $0d5d1183e76a9c94$var$auth = new $2c68a3d12be1e3c1$exports.GoogleAuth();
module.exports.auth = $0d5d1183e76a9c94$var$auth;


