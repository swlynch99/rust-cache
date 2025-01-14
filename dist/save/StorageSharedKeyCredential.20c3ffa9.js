require("./StorageSharedKeyCredentialPolicy.1bcf8273.js");
require("./Credential.87e60dc1.js");
var $2IGG6$crypto = require("crypto");


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

var $bed1851e0284e816$exports = {};
$bed1851e0284e816$exports = new URL("StorageSharedKeyCredentialPolicy.1bcf8273.js", "file:" + __filename).toString();



var $bwj07 = parcelRequire("bwj07");
class $f3e4c875e32ffe15$export$2c1fd26e7de69311 extends (0, $bwj07.Credential) {
    /**
     * Creates an instance of StorageSharedKeyCredential.
     * @param accountName -
     * @param accountKey -
     */ constructor(accountName, accountKey){
        super();
        this.accountName = accountName;
        this.accountKey = Buffer.from(accountKey, "base64");
    }
    /**
     * Creates a StorageSharedKeyCredentialPolicy object.
     *
     * @param nextPolicy -
     * @param options -
     */ create(nextPolicy, options) {
        return new (0, $bed1851e0284e816$exports.StorageSharedKeyCredentialPolicy)(nextPolicy, options, this);
    }
    /**
     * Generates a hash signature for an HTTP request or for a SAS.
     *
     * @param stringToSign -
     */ computeHMACSHA256(stringToSign) {
        return (0, $2IGG6$crypto.createHmac)("sha256", this.accountKey).update(stringToSign, "utf8").digest("base64");
    }
}


//# sourceMappingURL=StorageSharedKeyCredential.20c3ffa9.js.map
