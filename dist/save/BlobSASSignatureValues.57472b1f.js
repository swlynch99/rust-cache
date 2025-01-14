require("./BlobSASPermissions.759601a6.js");
require("./ContainerSASPermissions.e31480f9.js");
require("./StorageSharedKeyCredential.20c3ffa9.js");
require("./UserDelegationKeyCredential.41d5e6c1.js");
require("./SasIPRange.4bc0f724.js");
require("./SASQueryParameters.c4808fc6.js");
require("./constants.425d5fc4.js");
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
var $d4ec79d9d56fc08a$exports = {};
$d4ec79d9d56fc08a$exports = new URL("BlobSASPermissions.759601a6.js", "file:" + __filename).toString();


var $a51473f24544e42e$exports = {};
$a51473f24544e42e$exports = new URL("ContainerSASPermissions.e31480f9.js", "file:" + __filename).toString();



var $kWeTV = parcelRequire("kWeTV");
var $f63f867b696dd2ec$exports = {};
$f63f867b696dd2ec$exports = new URL("UserDelegationKeyCredential.41d5e6c1.js", "file:" + __filename).toString();


var $6130844fec160ec6$exports = {};
$6130844fec160ec6$exports = new URL("SasIPRange.4bc0f724.js", "file:" + __filename).toString();


var $df342071c059ac9c$exports = {};
$df342071c059ac9c$exports = new URL("SASQueryParameters.c4808fc6.js", "file:" + __filename).toString();



var $daWVB = parcelRequire("daWVB");

var $aiu2u = parcelRequire("aiu2u");
function $58f6b25e7347e2c2$export$151938be7f1cf8b1(blobSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName) {
    return $58f6b25e7347e2c2$export$fb579d2aed41053(blobSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName).sasQueryParameters;
}
function $58f6b25e7347e2c2$export$fb579d2aed41053(blobSASSignatureValues, sharedKeyCredentialOrUserDelegationKey, accountName) {
    const version = blobSASSignatureValues.version ? blobSASSignatureValues.version : (0, $daWVB.SERVICE_VERSION);
    const sharedKeyCredential = sharedKeyCredentialOrUserDelegationKey instanceof (0, $kWeTV.StorageSharedKeyCredential) ? sharedKeyCredentialOrUserDelegationKey : undefined;
    let userDelegationKeyCredential;
    if (sharedKeyCredential === undefined && accountName !== undefined) userDelegationKeyCredential = new (0, $f63f867b696dd2ec$exports.UserDelegationKeyCredential)(accountName, sharedKeyCredentialOrUserDelegationKey);
    if (sharedKeyCredential === undefined && userDelegationKeyCredential === undefined) throw TypeError("Invalid sharedKeyCredential, userDelegationKey or accountName.");
    // Version 2020-12-06 adds support for encryptionscope in SAS.
    if (version >= "2020-12-06") {
        if (sharedKeyCredential !== undefined) return $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20201206(blobSASSignatureValues, sharedKeyCredential);
        else return $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20201206(blobSASSignatureValues, userDelegationKeyCredential);
    }
    // Version 2019-12-12 adds support for the blob tags permission.
    // Version 2018-11-09 adds support for the signed resource and signed blob snapshot time fields.
    // https://docs.microsoft.com/en-us/rest/api/storageservices/constructing-a-service-sas#constructing-the-signature-string
    if (version >= "2018-11-09") {
        if (sharedKeyCredential !== undefined) return $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20181109(blobSASSignatureValues, sharedKeyCredential);
        else {
            // Version 2020-02-10 delegation SAS signature construction includes preauthorizedAgentObjectId, agentObjectId, correlationId.
            if (version >= "2020-02-10") return $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20200210(blobSASSignatureValues, userDelegationKeyCredential);
            else return $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20181109(blobSASSignatureValues, userDelegationKeyCredential);
        }
    }
    if (version >= "2015-04-05") {
        if (sharedKeyCredential !== undefined) return $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20150405(blobSASSignatureValues, sharedKeyCredential);
        else throw new RangeError("'version' must be >= '2018-11-09' when generating user delegation SAS using user delegation key.");
    }
    throw new RangeError("'version' must be >= '2015-04-05'.");
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2015-04-05 AND BEFORE 2018-11-09.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn and identifier.
 *
 * WARNING: When identifier is not provided, permissions and expiresOn are required.
 * You MUST assign value to identifier or expiresOn & permissions manually if you initial with
 * this constructor.
 *
 * @param blobSASSignatureValues -
 * @param sharedKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20150405(blobSASSignatureValues, sharedKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    if (!blobSASSignatureValues.identifier && !(blobSASSignatureValues.permissions && blobSASSignatureValues.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
    let resource = "c";
    if (blobSASSignatureValues.blobName) resource = "b";
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(sharedKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        blobSASSignatureValues.identifier,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        blobSASSignatureValues.cacheControl ? blobSASSignatureValues.cacheControl : "",
        blobSASSignatureValues.contentDisposition ? blobSASSignatureValues.contentDisposition : "",
        blobSASSignatureValues.contentEncoding ? blobSASSignatureValues.contentEncoding : "",
        blobSASSignatureValues.contentLanguage ? blobSASSignatureValues.contentLanguage : "",
        blobSASSignatureValues.contentType ? blobSASSignatureValues.contentType : ""
    ].join("\n");
    const signature = sharedKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType),
        stringToSign: stringToSign
    };
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2018-11-09.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn and identifier.
 *
 * WARNING: When identifier is not provided, permissions and expiresOn are required.
 * You MUST assign value to identifier or expiresOn & permissions manually if you initial with
 * this constructor.
 *
 * @param blobSASSignatureValues -
 * @param sharedKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20181109(blobSASSignatureValues, sharedKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    if (!blobSASSignatureValues.identifier && !(blobSASSignatureValues.permissions && blobSASSignatureValues.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
    let resource = "c";
    let timestamp = blobSASSignatureValues.snapshotTime;
    if (blobSASSignatureValues.blobName) {
        resource = "b";
        if (blobSASSignatureValues.snapshotTime) resource = "bs";
        else if (blobSASSignatureValues.versionId) {
            resource = "bv";
            timestamp = blobSASSignatureValues.versionId;
        }
    }
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(sharedKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        blobSASSignatureValues.identifier,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        resource,
        timestamp,
        blobSASSignatureValues.cacheControl ? blobSASSignatureValues.cacheControl : "",
        blobSASSignatureValues.contentDisposition ? blobSASSignatureValues.contentDisposition : "",
        blobSASSignatureValues.contentEncoding ? blobSASSignatureValues.contentEncoding : "",
        blobSASSignatureValues.contentLanguage ? blobSASSignatureValues.contentLanguage : "",
        blobSASSignatureValues.contentType ? blobSASSignatureValues.contentType : ""
    ].join("\n");
    const signature = sharedKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType),
        stringToSign: stringToSign
    };
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2020-12-06.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn and identifier.
 *
 * WARNING: When identifier is not provided, permissions and expiresOn are required.
 * You MUST assign value to identifier or expiresOn & permissions manually if you initial with
 * this constructor.
 *
 * @param blobSASSignatureValues -
 * @param sharedKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParameters20201206(blobSASSignatureValues, sharedKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    if (!blobSASSignatureValues.identifier && !(blobSASSignatureValues.permissions && blobSASSignatureValues.expiresOn)) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when 'identifier' is not provided.");
    let resource = "c";
    let timestamp = blobSASSignatureValues.snapshotTime;
    if (blobSASSignatureValues.blobName) {
        resource = "b";
        if (blobSASSignatureValues.snapshotTime) resource = "bs";
        else if (blobSASSignatureValues.versionId) {
            resource = "bv";
            timestamp = blobSASSignatureValues.versionId;
        }
    }
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(sharedKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        blobSASSignatureValues.identifier,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        resource,
        timestamp,
        blobSASSignatureValues.encryptionScope,
        blobSASSignatureValues.cacheControl ? blobSASSignatureValues.cacheControl : "",
        blobSASSignatureValues.contentDisposition ? blobSASSignatureValues.contentDisposition : "",
        blobSASSignatureValues.contentEncoding ? blobSASSignatureValues.contentEncoding : "",
        blobSASSignatureValues.contentLanguage ? blobSASSignatureValues.contentLanguage : "",
        blobSASSignatureValues.contentType ? blobSASSignatureValues.contentType : ""
    ].join("\n");
    const signature = sharedKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType, undefined, undefined, undefined, blobSASSignatureValues.encryptionScope),
        stringToSign: stringToSign
    };
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2018-11-09.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn.
 *
 * WARNING: identifier will be ignored, permissions and expiresOn are required.
 *
 * @param blobSASSignatureValues -
 * @param userDelegationKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20181109(blobSASSignatureValues, userDelegationKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    // Stored access policies are not supported for a user delegation SAS.
    if (!blobSASSignatureValues.permissions || !blobSASSignatureValues.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
    let resource = "c";
    let timestamp = blobSASSignatureValues.snapshotTime;
    if (blobSASSignatureValues.blobName) {
        resource = "b";
        if (blobSASSignatureValues.snapshotTime) resource = "bs";
        else if (blobSASSignatureValues.versionId) {
            resource = "bv";
            timestamp = blobSASSignatureValues.versionId;
        }
    }
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(userDelegationKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        userDelegationKeyCredential.userDelegationKey.signedObjectId,
        userDelegationKeyCredential.userDelegationKey.signedTenantId,
        userDelegationKeyCredential.userDelegationKey.signedStartsOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedStartsOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedExpiresOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedExpiresOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedService,
        userDelegationKeyCredential.userDelegationKey.signedVersion,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        resource,
        timestamp,
        blobSASSignatureValues.cacheControl,
        blobSASSignatureValues.contentDisposition,
        blobSASSignatureValues.contentEncoding,
        blobSASSignatureValues.contentLanguage,
        blobSASSignatureValues.contentType
    ].join("\n");
    const signature = userDelegationKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType, userDelegationKeyCredential.userDelegationKey),
        stringToSign: stringToSign
    };
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2020-02-10.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn.
 *
 * WARNING: identifier will be ignored, permissions and expiresOn are required.
 *
 * @param blobSASSignatureValues -
 * @param userDelegationKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20200210(blobSASSignatureValues, userDelegationKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    // Stored access policies are not supported for a user delegation SAS.
    if (!blobSASSignatureValues.permissions || !blobSASSignatureValues.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
    let resource = "c";
    let timestamp = blobSASSignatureValues.snapshotTime;
    if (blobSASSignatureValues.blobName) {
        resource = "b";
        if (blobSASSignatureValues.snapshotTime) resource = "bs";
        else if (blobSASSignatureValues.versionId) {
            resource = "bv";
            timestamp = blobSASSignatureValues.versionId;
        }
    }
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(userDelegationKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        userDelegationKeyCredential.userDelegationKey.signedObjectId,
        userDelegationKeyCredential.userDelegationKey.signedTenantId,
        userDelegationKeyCredential.userDelegationKey.signedStartsOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedStartsOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedExpiresOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedExpiresOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedService,
        userDelegationKeyCredential.userDelegationKey.signedVersion,
        blobSASSignatureValues.preauthorizedAgentObjectId,
        undefined,
        blobSASSignatureValues.correlationId,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        resource,
        timestamp,
        blobSASSignatureValues.cacheControl,
        blobSASSignatureValues.contentDisposition,
        blobSASSignatureValues.contentEncoding,
        blobSASSignatureValues.contentLanguage,
        blobSASSignatureValues.contentType
    ].join("\n");
    const signature = userDelegationKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType, userDelegationKeyCredential.userDelegationKey, blobSASSignatureValues.preauthorizedAgentObjectId, blobSASSignatureValues.correlationId),
        stringToSign: stringToSign
    };
}
/**
 * ONLY AVAILABLE IN NODE.JS RUNTIME.
 * IMPLEMENTATION FOR API VERSION FROM 2020-12-06.
 *
 * Creates an instance of SASQueryParameters.
 *
 * Only accepts required settings needed to create a SAS. For optional settings please
 * set corresponding properties directly, such as permissions, startsOn.
 *
 * WARNING: identifier will be ignored, permissions and expiresOn are required.
 *
 * @param blobSASSignatureValues -
 * @param userDelegationKeyCredential -
 */ function $58f6b25e7347e2c2$var$generateBlobSASQueryParametersUDK20201206(blobSASSignatureValues, userDelegationKeyCredential) {
    blobSASSignatureValues = $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues);
    // Stored access policies are not supported for a user delegation SAS.
    if (!blobSASSignatureValues.permissions || !blobSASSignatureValues.expiresOn) throw new RangeError("Must provide 'permissions' and 'expiresOn' for Blob SAS generation when generating user delegation SAS.");
    let resource = "c";
    let timestamp = blobSASSignatureValues.snapshotTime;
    if (blobSASSignatureValues.blobName) {
        resource = "b";
        if (blobSASSignatureValues.snapshotTime) resource = "bs";
        else if (blobSASSignatureValues.versionId) {
            resource = "bv";
            timestamp = blobSASSignatureValues.versionId;
        }
    }
    // Calling parse and toString guarantees the proper ordering and throws on invalid characters.
    let verifiedPermissions;
    if (blobSASSignatureValues.permissions) {
        if (blobSASSignatureValues.blobName) verifiedPermissions = (0, $d4ec79d9d56fc08a$exports.BlobSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
        else verifiedPermissions = (0, $a51473f24544e42e$exports.ContainerSASPermissions).parse(blobSASSignatureValues.permissions.toString()).toString();
    }
    // Signature is generated on the un-url-encoded values.
    const stringToSign = [
        verifiedPermissions ? verifiedPermissions : "",
        blobSASSignatureValues.startsOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.startsOn, false) : "",
        blobSASSignatureValues.expiresOn ? (0, $aiu2u.truncatedISO8061Date)(blobSASSignatureValues.expiresOn, false) : "",
        $58f6b25e7347e2c2$var$getCanonicalName(userDelegationKeyCredential.accountName, blobSASSignatureValues.containerName, blobSASSignatureValues.blobName),
        userDelegationKeyCredential.userDelegationKey.signedObjectId,
        userDelegationKeyCredential.userDelegationKey.signedTenantId,
        userDelegationKeyCredential.userDelegationKey.signedStartsOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedStartsOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedExpiresOn ? (0, $aiu2u.truncatedISO8061Date)(userDelegationKeyCredential.userDelegationKey.signedExpiresOn, false) : "",
        userDelegationKeyCredential.userDelegationKey.signedService,
        userDelegationKeyCredential.userDelegationKey.signedVersion,
        blobSASSignatureValues.preauthorizedAgentObjectId,
        undefined,
        blobSASSignatureValues.correlationId,
        blobSASSignatureValues.ipRange ? (0, $6130844fec160ec6$exports.ipRangeToString)(blobSASSignatureValues.ipRange) : "",
        blobSASSignatureValues.protocol ? blobSASSignatureValues.protocol : "",
        blobSASSignatureValues.version,
        resource,
        timestamp,
        blobSASSignatureValues.encryptionScope,
        blobSASSignatureValues.cacheControl,
        blobSASSignatureValues.contentDisposition,
        blobSASSignatureValues.contentEncoding,
        blobSASSignatureValues.contentLanguage,
        blobSASSignatureValues.contentType
    ].join("\n");
    const signature = userDelegationKeyCredential.computeHMACSHA256(stringToSign);
    return {
        sasQueryParameters: new (0, $df342071c059ac9c$exports.SASQueryParameters)(blobSASSignatureValues.version, signature, verifiedPermissions, undefined, undefined, blobSASSignatureValues.protocol, blobSASSignatureValues.startsOn, blobSASSignatureValues.expiresOn, blobSASSignatureValues.ipRange, blobSASSignatureValues.identifier, resource, blobSASSignatureValues.cacheControl, blobSASSignatureValues.contentDisposition, blobSASSignatureValues.contentEncoding, blobSASSignatureValues.contentLanguage, blobSASSignatureValues.contentType, userDelegationKeyCredential.userDelegationKey, blobSASSignatureValues.preauthorizedAgentObjectId, blobSASSignatureValues.correlationId, blobSASSignatureValues.encryptionScope),
        stringToSign: stringToSign
    };
}
function $58f6b25e7347e2c2$var$getCanonicalName(accountName, containerName, blobName) {
    // Container: "/blob/account/containerName"
    // Blob:      "/blob/account/containerName/blobName"
    const elements = [
        `/blob/${accountName}/${containerName}`
    ];
    if (blobName) elements.push(`/${blobName}`);
    return elements.join("");
}
function $58f6b25e7347e2c2$var$SASSignatureValuesSanityCheckAndAutofill(blobSASSignatureValues) {
    const version = blobSASSignatureValues.version ? blobSASSignatureValues.version : (0, $daWVB.SERVICE_VERSION);
    if (blobSASSignatureValues.snapshotTime && version < "2018-11-09") throw RangeError("'version' must be >= '2018-11-09' when providing 'snapshotTime'.");
    if (blobSASSignatureValues.blobName === undefined && blobSASSignatureValues.snapshotTime) throw RangeError("Must provide 'blobName' when providing 'snapshotTime'.");
    if (blobSASSignatureValues.versionId && version < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'versionId'.");
    if (blobSASSignatureValues.blobName === undefined && blobSASSignatureValues.versionId) throw RangeError("Must provide 'blobName' when providing 'versionId'.");
    if (blobSASSignatureValues.permissions && blobSASSignatureValues.permissions.setImmutabilityPolicy && version < "2020-08-04") throw RangeError("'version' must be >= '2020-08-04' when provided 'i' permission.");
    if (blobSASSignatureValues.permissions && blobSASSignatureValues.permissions.deleteVersion && version < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'x' permission.");
    if (blobSASSignatureValues.permissions && blobSASSignatureValues.permissions.permanentDelete && version < "2019-10-10") throw RangeError("'version' must be >= '2019-10-10' when providing 'y' permission.");
    if (blobSASSignatureValues.permissions && blobSASSignatureValues.permissions.tag && version < "2019-12-12") throw RangeError("'version' must be >= '2019-12-12' when providing 't' permission.");
    if (version < "2020-02-10" && blobSASSignatureValues.permissions && (blobSASSignatureValues.permissions.move || blobSASSignatureValues.permissions.execute)) throw RangeError("'version' must be >= '2020-02-10' when providing the 'm' or 'e' permission.");
    if (version < "2021-04-10" && blobSASSignatureValues.permissions && blobSASSignatureValues.permissions.filterByTags) throw RangeError("'version' must be >= '2021-04-10' when providing the 'f' permission.");
    if (version < "2020-02-10" && (blobSASSignatureValues.preauthorizedAgentObjectId || blobSASSignatureValues.correlationId)) throw RangeError("'version' must be >= '2020-02-10' when providing 'preauthorizedAgentObjectId' or 'correlationId'.");
    if (blobSASSignatureValues.encryptionScope && version < "2020-12-06") throw RangeError("'version' must be >= '2020-12-06' when provided 'encryptionScope' in SAS.");
    blobSASSignatureValues.version = version;
    return blobSASSignatureValues;
}


//# sourceMappingURL=BlobSASSignatureValues.57472b1f.js.map
