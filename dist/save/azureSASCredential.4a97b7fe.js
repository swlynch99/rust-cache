require("./esm.9590f010.js");


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

var $hACYf = parcelRequire("hACYf");
class $fd2898b280070357$export$144d569f55afc767 {
    /**
     * The value of the shared access signature to be used in authentication
     */ get signature() {
        return this._signature;
    }
    /**
     * Create an instance of an AzureSASCredential for use
     * with a service client.
     *
     * @param signature - The initial value of the shared access signature to use in authentication
     */ constructor(signature){
        if (!signature) throw new Error("shared access signature must be a non-empty string");
        this._signature = signature;
    }
    /**
     * Change the value of the signature.
     *
     * Updates will take effect upon the next request after
     * updating the signature value.
     *
     * @param newSignature - The new shared access signature value to be used
     */ update(newSignature) {
        if (!newSignature) throw new Error("shared access signature must be a non-empty string");
        this._signature = newSignature;
    }
}
function $fd2898b280070357$export$3b616d4df4414a6e(credential) {
    return (0, $hACYf.isObjectWithProperties)(credential, [
        "signature"
    ]) && typeof credential.signature === "string";
}


//# sourceMappingURL=azureSASCredential.4a97b7fe.js.map
