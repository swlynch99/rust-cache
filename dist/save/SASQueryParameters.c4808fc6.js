require("./SasIPRange.4bc0f724.js");
require("./utils.common.1056282c.js");


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

var $j8R6O = parcelRequire("j8R6O");

var $aiu2u = parcelRequire("aiu2u");
var $ff644c42f701f91b$export$93b55577e50f05dd;
(function(SASProtocol) {
    /**
     * Protocol that allows HTTPS only
     */ SASProtocol["Https"] = "https";
    /**
     * Protocol that allows both HTTPS and HTTP
     */ SASProtocol["HttpsAndHttp"] = "https,http";
})($ff644c42f701f91b$export$93b55577e50f05dd || ($ff644c42f701f91b$export$93b55577e50f05dd = {}));
class $ff644c42f701f91b$export$5bab423c4be401d9 {
    /**
     * Optional. IP range allowed for this SAS.
     *
     * @readonly
     */ get ipRange() {
        if (this.ipRangeInner) return {
            end: this.ipRangeInner.end,
            start: this.ipRangeInner.start
        };
        return undefined;
    }
    constructor(version, signature, permissionsOrOptions, services, resourceTypes, protocol, startsOn, expiresOn, ipRange, identifier, resource, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, userDelegationKey, preauthorizedAgentObjectId, correlationId, encryptionScope){
        this.version = version;
        this.signature = signature;
        if (permissionsOrOptions !== undefined && typeof permissionsOrOptions !== "string") {
            // SASQueryParametersOptions
            this.permissions = permissionsOrOptions.permissions;
            this.services = permissionsOrOptions.services;
            this.resourceTypes = permissionsOrOptions.resourceTypes;
            this.protocol = permissionsOrOptions.protocol;
            this.startsOn = permissionsOrOptions.startsOn;
            this.expiresOn = permissionsOrOptions.expiresOn;
            this.ipRangeInner = permissionsOrOptions.ipRange;
            this.identifier = permissionsOrOptions.identifier;
            this.encryptionScope = permissionsOrOptions.encryptionScope;
            this.resource = permissionsOrOptions.resource;
            this.cacheControl = permissionsOrOptions.cacheControl;
            this.contentDisposition = permissionsOrOptions.contentDisposition;
            this.contentEncoding = permissionsOrOptions.contentEncoding;
            this.contentLanguage = permissionsOrOptions.contentLanguage;
            this.contentType = permissionsOrOptions.contentType;
            if (permissionsOrOptions.userDelegationKey) {
                this.signedOid = permissionsOrOptions.userDelegationKey.signedObjectId;
                this.signedTenantId = permissionsOrOptions.userDelegationKey.signedTenantId;
                this.signedStartsOn = permissionsOrOptions.userDelegationKey.signedStartsOn;
                this.signedExpiresOn = permissionsOrOptions.userDelegationKey.signedExpiresOn;
                this.signedService = permissionsOrOptions.userDelegationKey.signedService;
                this.signedVersion = permissionsOrOptions.userDelegationKey.signedVersion;
                this.preauthorizedAgentObjectId = permissionsOrOptions.preauthorizedAgentObjectId;
                this.correlationId = permissionsOrOptions.correlationId;
            }
        } else {
            this.services = services;
            this.resourceTypes = resourceTypes;
            this.expiresOn = expiresOn;
            this.permissions = permissionsOrOptions;
            this.protocol = protocol;
            this.startsOn = startsOn;
            this.ipRangeInner = ipRange;
            this.encryptionScope = encryptionScope;
            this.identifier = identifier;
            this.resource = resource;
            this.cacheControl = cacheControl;
            this.contentDisposition = contentDisposition;
            this.contentEncoding = contentEncoding;
            this.contentLanguage = contentLanguage;
            this.contentType = contentType;
            if (userDelegationKey) {
                this.signedOid = userDelegationKey.signedObjectId;
                this.signedTenantId = userDelegationKey.signedTenantId;
                this.signedStartsOn = userDelegationKey.signedStartsOn;
                this.signedExpiresOn = userDelegationKey.signedExpiresOn;
                this.signedService = userDelegationKey.signedService;
                this.signedVersion = userDelegationKey.signedVersion;
                this.preauthorizedAgentObjectId = preauthorizedAgentObjectId;
                this.correlationId = correlationId;
            }
        }
    }
    /**
     * Encodes all SAS query parameters into a string that can be appended to a URL.
     *
     */ toString() {
        const params = [
            "sv",
            "ss",
            "srt",
            "spr",
            "st",
            "se",
            "sip",
            "si",
            "ses",
            "skoid",
            "sktid",
            "skt",
            "ske",
            "sks",
            "skv",
            "sr",
            "sp",
            "sig",
            "rscc",
            "rscd",
            "rsce",
            "rscl",
            "rsct",
            "saoid",
            "scid"
        ];
        const queries = [];
        for (const param of params)switch(param){
            case "sv":
                this.tryAppendQueryParameter(queries, param, this.version);
                break;
            case "ss":
                this.tryAppendQueryParameter(queries, param, this.services);
                break;
            case "srt":
                this.tryAppendQueryParameter(queries, param, this.resourceTypes);
                break;
            case "spr":
                this.tryAppendQueryParameter(queries, param, this.protocol);
                break;
            case "st":
                this.tryAppendQueryParameter(queries, param, this.startsOn ? (0, $aiu2u.truncatedISO8061Date)(this.startsOn, false) : undefined);
                break;
            case "se":
                this.tryAppendQueryParameter(queries, param, this.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(this.expiresOn, false) : undefined);
                break;
            case "sip":
                this.tryAppendQueryParameter(queries, param, this.ipRange ? (0, $j8R6O.ipRangeToString)(this.ipRange) : undefined);
                break;
            case "si":
                this.tryAppendQueryParameter(queries, param, this.identifier);
                break;
            case "ses":
                this.tryAppendQueryParameter(queries, param, this.encryptionScope);
                break;
            case "skoid":
                this.tryAppendQueryParameter(queries, param, this.signedOid);
                break;
            case "sktid":
                this.tryAppendQueryParameter(queries, param, this.signedTenantId);
                break;
            case "skt":
                this.tryAppendQueryParameter(queries, param, this.signedStartsOn ? (0, $aiu2u.truncatedISO8061Date)(this.signedStartsOn, false) : undefined);
                break;
            case "ske":
                this.tryAppendQueryParameter(queries, param, this.signedExpiresOn ? (0, $aiu2u.truncatedISO8061Date)(this.signedExpiresOn, false) : undefined);
                break;
            case "sks":
                this.tryAppendQueryParameter(queries, param, this.signedService);
                break;
            case "skv":
                this.tryAppendQueryParameter(queries, param, this.signedVersion);
                break;
            case "sr":
                this.tryAppendQueryParameter(queries, param, this.resource);
                break;
            case "sp":
                this.tryAppendQueryParameter(queries, param, this.permissions);
                break;
            case "sig":
                this.tryAppendQueryParameter(queries, param, this.signature);
                break;
            case "rscc":
                this.tryAppendQueryParameter(queries, param, this.cacheControl);
                break;
            case "rscd":
                this.tryAppendQueryParameter(queries, param, this.contentDisposition);
                break;
            case "rsce":
                this.tryAppendQueryParameter(queries, param, this.contentEncoding);
                break;
            case "rscl":
                this.tryAppendQueryParameter(queries, param, this.contentLanguage);
                break;
            case "rsct":
                this.tryAppendQueryParameter(queries, param, this.contentType);
                break;
            case "saoid":
                this.tryAppendQueryParameter(queries, param, this.preauthorizedAgentObjectId);
                break;
            case "scid":
                this.tryAppendQueryParameter(queries, param, this.correlationId);
                break;
        }
        return queries.join("&");
    }
    /**
     * A private helper method used to filter and append query key/value pairs into an array.
     *
     * @param queries -
     * @param key -
     * @param value -
     */ tryAppendQueryParameter(queries, key, value) {
        if (!value) return;
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);
        if (key.length > 0 && value.length > 0) queries.push(`${key}=${value}`);
    }
}


//# sourceMappingURL=SASQueryParameters.c4808fc6.js.map
