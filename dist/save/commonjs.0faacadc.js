require("./serializer.cbae7965.js");
require("./serviceClient.aadf99fe.js");
require("./pipeline.52edc7ba.js");
require("./interfaces.2130312b.js");
require("./deserializationPolicy.fa2d3d5a.js");
require("./serializationPolicy.60ef005a.js");
require("./authorizeRequestOnClaimChallenge.8dadebb6.js");
require("./authorizeRequestOnTenantChallenge.8f1685fb.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.authorizeRequestOnTenantChallenge = module.exports.authorizeRequestOnClaimChallenge = module.exports.serializationPolicyName = module.exports.serializationPolicy = module.exports.deserializationPolicyName = module.exports.deserializationPolicy = module.exports.XML_CHARKEY = module.exports.XML_ATTRKEY = module.exports.createClientPipeline = module.exports.ServiceClient = module.exports.MapperTypeNames = module.exports.createSerializer = void 0;
var $69cedf1ead59d305$exports = {};
$69cedf1ead59d305$exports = new URL("serializer.cbae7965.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "createSerializer", {
    enumerable: true,
    get: function() {
        return $69cedf1ead59d305$exports.createSerializer;
    }
});
Object.defineProperty(module.exports, "MapperTypeNames", {
    enumerable: true,
    get: function() {
        return $69cedf1ead59d305$exports.MapperTypeNames;
    }
});
var $2f1ae7497827e4c2$exports = {};
$2f1ae7497827e4c2$exports = new URL("serviceClient.aadf99fe.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ServiceClient", {
    enumerable: true,
    get: function() {
        return $2f1ae7497827e4c2$exports.ServiceClient;
    }
});

var $jZ2BA = parcelRequire("jZ2BA");
Object.defineProperty(module.exports, "createClientPipeline", {
    enumerable: true,
    get: function() {
        return $jZ2BA.createClientPipeline;
    }
});

var $aqYRx = parcelRequire("aqYRx");
Object.defineProperty(module.exports, "XML_ATTRKEY", {
    enumerable: true,
    get: function() {
        return $aqYRx.XML_ATTRKEY;
    }
});
Object.defineProperty(module.exports, "XML_CHARKEY", {
    enumerable: true,
    get: function() {
        return $aqYRx.XML_CHARKEY;
    }
});

var $9JhvS = parcelRequire("9JhvS");
Object.defineProperty(module.exports, "deserializationPolicy", {
    enumerable: true,
    get: function() {
        return $9JhvS.deserializationPolicy;
    }
});
Object.defineProperty(module.exports, "deserializationPolicyName", {
    enumerable: true,
    get: function() {
        return $9JhvS.deserializationPolicyName;
    }
});

var $7Qeu9 = parcelRequire("7Qeu9");
Object.defineProperty(module.exports, "serializationPolicy", {
    enumerable: true,
    get: function() {
        return $7Qeu9.serializationPolicy;
    }
});
Object.defineProperty(module.exports, "serializationPolicyName", {
    enumerable: true,
    get: function() {
        return $7Qeu9.serializationPolicyName;
    }
});
var $522e6c1edd3e4323$exports = {};
$522e6c1edd3e4323$exports = new URL("authorizeRequestOnClaimChallenge.8dadebb6.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "authorizeRequestOnClaimChallenge", {
    enumerable: true,
    get: function() {
        return $522e6c1edd3e4323$exports.authorizeRequestOnClaimChallenge;
    }
});
var $1b19c376fe89cca6$exports = {};
$1b19c376fe89cca6$exports = new URL("authorizeRequestOnTenantChallenge.8f1685fb.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "authorizeRequestOnTenantChallenge", {
    enumerable: true,
    get: function() {
        return $1b19c376fe89cca6$exports.authorizeRequestOnTenantChallenge;
    }
});


