require("./StorageSharedKeyCredentialPolicy.5030129c.js");
require("./Credential.16815cc3.js");
var $a5uih$crypto = require("crypto");


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

var $3b76f8da21e7b673$exports = {};
$3b76f8da21e7b673$exports = new URL("StorageSharedKeyCredentialPolicy.5030129c.js", "file:" + __filename).toString();



var $82QF3 = parcelRequire("82QF3");
class $a2f74c1a457b1457$export$2c1fd26e7de69311 extends (0, $82QF3.Credential) {
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
        return new (0, $3b76f8da21e7b673$exports.StorageSharedKeyCredentialPolicy)(nextPolicy, options, this);
    }
    /**
     * Generates a hash signature for an HTTP request or for a SAS.
     *
     * @param stringToSign -
     */ computeHMACSHA256(stringToSign) {
        return (0, $a5uih$crypto.createHmac)("sha256", this.accountKey).update(stringToSign, "utf8").digest("base64");
    }
}


