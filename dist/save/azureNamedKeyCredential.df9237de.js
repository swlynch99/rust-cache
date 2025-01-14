require("./esm.f174e5c8.js");


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

var $3lAwb = parcelRequire("3lAwb");
class $250df69d821c7c0a$export$f435da19f94fed78 {
    /**
     * The value of the key to be used in authentication.
     */ get key() {
        return this._key;
    }
    /**
     * The value of the name to be used in authentication.
     */ get name() {
        return this._name;
    }
    /**
     * Create an instance of an AzureNamedKeyCredential for use
     * with a service client.
     *
     * @param name - The initial value of the name to use in authentication.
     * @param key - The initial value of the key to use in authentication.
     */ constructor(name, key){
        if (!name || !key) throw new TypeError("name and key must be non-empty strings");
        this._name = name;
        this._key = key;
    }
    /**
     * Change the value of the key.
     *
     * Updates will take effect upon the next request after
     * updating the key value.
     *
     * @param newName - The new name value to be used.
     * @param newKey - The new key value to be used.
     */ update(newName, newKey) {
        if (!newName || !newKey) throw new TypeError("newName and newKey must be non-empty strings");
        this._name = newName;
        this._key = newKey;
    }
}
function $250df69d821c7c0a$export$9117b72f7d656ea5(credential) {
    return (0, $3lAwb.isObjectWithProperties)(credential, [
        "name",
        "key"
    ]) && typeof credential.key === "string" && typeof credential.name === "string";
}


