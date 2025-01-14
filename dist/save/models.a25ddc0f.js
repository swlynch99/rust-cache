require("./constants.425d5fc4.js");


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

var $daWVB = parcelRequire("daWVB");
var $0ad0f34996ad7ae1$export$e44d3f3c13370fcb;
(function(BlockBlobTier) {
    /**
     * Optimized for storing data that is accessed frequently.
     */ BlockBlobTier["Hot"] = "Hot";
    /**
     * Optimized for storing data that is infrequently accessed and stored for at least 30 days.
     */ BlockBlobTier["Cool"] = "Cool";
    /**
     * Optimized for storing data that is rarely accessed.
     */ BlockBlobTier["Cold"] = "Cold";
    /**
     * Optimized for storing data that is rarely accessed and stored for at least 180 days
     * with flexible latency requirements (on the order of hours).
     */ BlockBlobTier["Archive"] = "Archive";
})($0ad0f34996ad7ae1$export$e44d3f3c13370fcb || ($0ad0f34996ad7ae1$export$e44d3f3c13370fcb = {}));
var $0ad0f34996ad7ae1$export$a980182357eaf579;
(function(PremiumPageBlobTier) {
    /**
     * P4 Tier.
     */ PremiumPageBlobTier["P4"] = "P4";
    /**
     * P6 Tier.
     */ PremiumPageBlobTier["P6"] = "P6";
    /**
     * P10 Tier.
     */ PremiumPageBlobTier["P10"] = "P10";
    /**
     * P15 Tier.
     */ PremiumPageBlobTier["P15"] = "P15";
    /**
     * P20 Tier.
     */ PremiumPageBlobTier["P20"] = "P20";
    /**
     * P30 Tier.
     */ PremiumPageBlobTier["P30"] = "P30";
    /**
     * P40 Tier.
     */ PremiumPageBlobTier["P40"] = "P40";
    /**
     * P50 Tier.
     */ PremiumPageBlobTier["P50"] = "P50";
    /**
     * P60 Tier.
     */ PremiumPageBlobTier["P60"] = "P60";
    /**
     * P70 Tier.
     */ PremiumPageBlobTier["P70"] = "P70";
    /**
     * P80 Tier.
     */ PremiumPageBlobTier["P80"] = "P80";
})($0ad0f34996ad7ae1$export$a980182357eaf579 || ($0ad0f34996ad7ae1$export$a980182357eaf579 = {}));
function $0ad0f34996ad7ae1$export$a18e54c8c8d78ec9(tier) {
    if (tier === undefined) return undefined;
    return tier; // No more check if string is a valid AccessTier, and left this to underlay logic to decide(service).
}
function $0ad0f34996ad7ae1$export$ab793a80c8d6781e(cpk, isHttps) {
    if (cpk && !isHttps) throw new RangeError("Customer-provided encryption key must be used over HTTPS.");
    if (cpk && !cpk.encryptionAlgorithm) cpk.encryptionAlgorithm = (0, $daWVB.EncryptionAlgorithmAES25);
}
var $0ad0f34996ad7ae1$export$a70b8ec7341ed31f;
(function(StorageBlobAudience) {
    /**
     * The OAuth scope to use to retrieve an AAD token for Azure Storage.
     */ StorageBlobAudience["StorageOAuthScopes"] = "https://storage.azure.com/.default";
    /**
     * The OAuth scope to use to retrieve an AAD token for Azure Disk.
     */ StorageBlobAudience["DiskComputeOAuthScopes"] = "https://disk.compute.azure.com/.default";
})($0ad0f34996ad7ae1$export$a70b8ec7341ed31f || ($0ad0f34996ad7ae1$export$a70b8ec7341ed31f = {}));
function $0ad0f34996ad7ae1$export$b115a6ec2f02bbd6(storageAccountName) {
    return `https://${storageAccountName}.blob.core.windows.net/.default`;
}


//# sourceMappingURL=models.a25ddc0f.js.map
