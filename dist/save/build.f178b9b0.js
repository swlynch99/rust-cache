require("./googleauth.0e32b0cc.js");
require("./build.570a4f39.js");
require("./build.da41aa52.js");
require("./authclient.c802c873.js");
require("./computeclient.d67ad2f4.js");
require("./envDetect.b7542cf7.js");
require("./iam.9567b289.js");
require("./idtokenclient.204ae37e.js");
require("./jwtaccess.d32d1331.js");
require("./jwtclient.e23df61a.js");
require("./impersonated.761437d1.js");
require("./oauth2client.9b56ad56.js");
require("./loginticket.b50b8763.js");
require("./refreshclient.f245d78a.js");
require("./awsclient.73b5e8c9.js");
require("./awsrequestsigner.73be7a5b.js");
require("./identitypoolclient.ffa15c42.js");
require("./externalclient.7c65287f.js");
require("./baseexternalclient.9405bd8a.js");
require("./downscopedclient.422eba98.js");
require("./pluggable-auth-client.47f1fd47.js");
require("./passthrough.c70a72fc.js");
require("./transporters.b3566606.js");


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
var $5c0af36389aea6ac$exports = {};
$5c0af36389aea6ac$exports = new URL("googleauth.0e32b0cc.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "GoogleAuth", {
    enumerable: true,
    get: function() {
        return $5c0af36389aea6ac$exports.GoogleAuth;
    }
});

// Export common deps to ensure types/instances are the exact match. Useful
// for consistently configuring the library across versions.
module.exports.gcpMetadata = (parcelRequire("6PJJI"));

module.exports.gaxios = (parcelRequire("47hCt"));

var $4luEl = parcelRequire("4luEl");
Object.defineProperty(module.exports, "AuthClient", {
    enumerable: true,
    get: function() {
        return $4luEl.AuthClient;
    }
});
Object.defineProperty(module.exports, "DEFAULT_UNIVERSE", {
    enumerable: true,
    get: function() {
        return $4luEl.DEFAULT_UNIVERSE;
    }
});

var $6Wkjq = parcelRequire("6Wkjq");
Object.defineProperty(module.exports, "Compute", {
    enumerable: true,
    get: function() {
        return $6Wkjq.Compute;
    }
});

var $ltHeL = parcelRequire("ltHeL");
Object.defineProperty(module.exports, "GCPEnv", {
    enumerable: true,
    get: function() {
        return $ltHeL.GCPEnv;
    }
});
var $4ec0645e1000ba64$exports = {};
$4ec0645e1000ba64$exports = new URL("iam.9567b289.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "IAMAuth", {
    enumerable: true,
    get: function() {
        return $4ec0645e1000ba64$exports.IAMAuth;
    }
});

var $diI9n = parcelRequire("diI9n");
Object.defineProperty(module.exports, "IdTokenClient", {
    enumerable: true,
    get: function() {
        return $diI9n.IdTokenClient;
    }
});

var $1u9yX = parcelRequire("1u9yX");
Object.defineProperty(module.exports, "JWTAccess", {
    enumerable: true,
    get: function() {
        return $1u9yX.JWTAccess;
    }
});

var $cSX6H = parcelRequire("cSX6H");
Object.defineProperty(module.exports, "JWT", {
    enumerable: true,
    get: function() {
        return $cSX6H.JWT;
    }
});

var $blQrK = parcelRequire("blQrK");
Object.defineProperty(module.exports, "Impersonated", {
    enumerable: true,
    get: function() {
        return $blQrK.Impersonated;
    }
});

var $kdXrB = parcelRequire("kdXrB");
Object.defineProperty(module.exports, "CodeChallengeMethod", {
    enumerable: true,
    get: function() {
        return $kdXrB.CodeChallengeMethod;
    }
});
Object.defineProperty(module.exports, "OAuth2Client", {
    enumerable: true,
    get: function() {
        return $kdXrB.OAuth2Client;
    }
});
Object.defineProperty(module.exports, "ClientAuthentication", {
    enumerable: true,
    get: function() {
        return $kdXrB.ClientAuthentication;
    }
});

var $efSlO = parcelRequire("efSlO");
Object.defineProperty(module.exports, "LoginTicket", {
    enumerable: true,
    get: function() {
        return $efSlO.LoginTicket;
    }
});

var $lSgsl = parcelRequire("lSgsl");
Object.defineProperty(module.exports, "UserRefreshClient", {
    enumerable: true,
    get: function() {
        return $lSgsl.UserRefreshClient;
    }
});

var $1iwOH = parcelRequire("1iwOH");
Object.defineProperty(module.exports, "AwsClient", {
    enumerable: true,
    get: function() {
        return $1iwOH.AwsClient;
    }
});

var $fjwTE = parcelRequire("fjwTE");
Object.defineProperty(module.exports, "AwsRequestSigner", {
    enumerable: true,
    get: function() {
        return $fjwTE.AwsRequestSigner;
    }
});

var $eMpp7 = parcelRequire("eMpp7");
Object.defineProperty(module.exports, "IdentityPoolClient", {
    enumerable: true,
    get: function() {
        return $eMpp7.IdentityPoolClient;
    }
});

var $jMG6n = parcelRequire("jMG6n");
Object.defineProperty(module.exports, "ExternalAccountClient", {
    enumerable: true,
    get: function() {
        return $jMG6n.ExternalAccountClient;
    }
});

var $FFDrG = parcelRequire("FFDrG");
Object.defineProperty(module.exports, "BaseExternalAccountClient", {
    enumerable: true,
    get: function() {
        return $FFDrG.BaseExternalAccountClient;
    }
});
var $a9392ba6cfd40f84$exports = {};
$a9392ba6cfd40f84$exports = new URL("downscopedclient.422eba98.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "DownscopedClient", {
    enumerable: true,
    get: function() {
        return $a9392ba6cfd40f84$exports.DownscopedClient;
    }
});

var $e7qqe = parcelRequire("e7qqe");
Object.defineProperty(module.exports, "PluggableAuthClient", {
    enumerable: true,
    get: function() {
        return $e7qqe.PluggableAuthClient;
    }
});
Object.defineProperty(module.exports, "ExecutableError", {
    enumerable: true,
    get: function() {
        return $e7qqe.ExecutableError;
    }
});
var $7dca45bdd15671fa$exports = {};
$7dca45bdd15671fa$exports = new URL("passthrough.c70a72fc.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "PassThroughClient", {
    enumerable: true,
    get: function() {
        return $7dca45bdd15671fa$exports.PassThroughClient;
    }
});

var $1icVl = parcelRequire("1icVl");
Object.defineProperty(module.exports, "DefaultTransporter", {
    enumerable: true,
    get: function() {
        return $1icVl.DefaultTransporter;
    }
});
const $31be1b93c778bc8a$var$auth = new $5c0af36389aea6ac$exports.GoogleAuth();
module.exports.auth = $31be1b93c778bc8a$var$auth;


//# sourceMappingURL=build.f178b9b0.js.map
