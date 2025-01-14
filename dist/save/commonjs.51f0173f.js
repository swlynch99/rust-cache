require("./serializer.147d377a.js");
require("./serviceClient.76ab10a1.js");
require("./pipeline.444e4c80.js");
require("./interfaces.bb5077b3.js");
require("./deserializationPolicy.a2fb488b.js");
require("./serializationPolicy.c203cf52.js");
require("./authorizeRequestOnClaimChallenge.672749d1.js");
require("./authorizeRequestOnTenantChallenge.bd2490d1.js");


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
var $cb15d5b15fffbe36$exports = {};
$cb15d5b15fffbe36$exports = new URL("serializer.147d377a.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "createSerializer", {
    enumerable: true,
    get: function() {
        return $cb15d5b15fffbe36$exports.createSerializer;
    }
});
Object.defineProperty(module.exports, "MapperTypeNames", {
    enumerable: true,
    get: function() {
        return $cb15d5b15fffbe36$exports.MapperTypeNames;
    }
});
var $1166a10f80f13dc1$exports = {};
$1166a10f80f13dc1$exports = new URL("serviceClient.76ab10a1.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "ServiceClient", {
    enumerable: true,
    get: function() {
        return $1166a10f80f13dc1$exports.ServiceClient;
    }
});

var $lIFJo = parcelRequire("lIFJo");
Object.defineProperty(module.exports, "createClientPipeline", {
    enumerable: true,
    get: function() {
        return $lIFJo.createClientPipeline;
    }
});

var $gacFG = parcelRequire("gacFG");
Object.defineProperty(module.exports, "XML_ATTRKEY", {
    enumerable: true,
    get: function() {
        return $gacFG.XML_ATTRKEY;
    }
});
Object.defineProperty(module.exports, "XML_CHARKEY", {
    enumerable: true,
    get: function() {
        return $gacFG.XML_CHARKEY;
    }
});

var $eoko2 = parcelRequire("eoko2");
Object.defineProperty(module.exports, "deserializationPolicy", {
    enumerable: true,
    get: function() {
        return $eoko2.deserializationPolicy;
    }
});
Object.defineProperty(module.exports, "deserializationPolicyName", {
    enumerable: true,
    get: function() {
        return $eoko2.deserializationPolicyName;
    }
});

var $2FZrP = parcelRequire("2FZrP");
Object.defineProperty(module.exports, "serializationPolicy", {
    enumerable: true,
    get: function() {
        return $2FZrP.serializationPolicy;
    }
});
Object.defineProperty(module.exports, "serializationPolicyName", {
    enumerable: true,
    get: function() {
        return $2FZrP.serializationPolicyName;
    }
});
var $f370b62db6ecd828$exports = {};
$f370b62db6ecd828$exports = new URL("authorizeRequestOnClaimChallenge.672749d1.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "authorizeRequestOnClaimChallenge", {
    enumerable: true,
    get: function() {
        return $f370b62db6ecd828$exports.authorizeRequestOnClaimChallenge;
    }
});
var $f05d960ce27ede14$exports = {};
$f05d960ce27ede14$exports = new URL("authorizeRequestOnTenantChallenge.bd2490d1.js", "file:" + __filename).toString();


Object.defineProperty(module.exports, "authorizeRequestOnTenantChallenge", {
    enumerable: true,
    get: function() {
        return $f05d960ce27ede14$exports.authorizeRequestOnTenantChallenge;
    }
});


//# sourceMappingURL=commonjs.51f0173f.js.map
