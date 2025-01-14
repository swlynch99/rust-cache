require("./crypto.d1f27c38.js");


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
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.AwsRequestSigner = void 0;

var $jVpvg = parcelRequire("jVpvg");
/** AWS Signature Version 4 signing algorithm identifier.  */ const $b26225f38e9c78d7$var$AWS_ALGORITHM = 'AWS4-HMAC-SHA256';
/**
 * The termination string for the AWS credential scope value as defined in
 * https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
 */ const $b26225f38e9c78d7$var$AWS_REQUEST_TYPE = 'aws4_request';
/**
 * Implements an AWS API request signer based on the AWS Signature Version 4
 * signing process.
 * https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
 */ class $b26225f38e9c78d7$var$AwsRequestSigner {
    /**
     * Instantiates an AWS API request signer used to send authenticated signed
     * requests to AWS APIs based on the AWS Signature Version 4 signing process.
     * This also provides a mechanism to generate the signed request without
     * sending it.
     * @param getCredentials A mechanism to retrieve AWS security credentials
     *   when needed.
     * @param region The AWS region to use.
     */ constructor(getCredentials, region){
        this.getCredentials = getCredentials;
        this.region = region;
        this.crypto = (0, $jVpvg.createCrypto)();
    }
    /**
     * Generates the signed request for the provided HTTP request for calling
     * an AWS API. This follows the steps described at:
     * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
     * @param amzOptions The AWS request options that need to be signed.
     * @return A promise that resolves with the GaxiosOptions containing the
     *   signed HTTP request parameters.
     */ async getRequestOptions(amzOptions) {
        if (!amzOptions.url) throw new Error('"url" is required in "amzOptions"');
        // Stringify JSON requests. This will be set in the request body of the
        // generated signed request.
        const requestPayloadData = typeof amzOptions.data === 'object' ? JSON.stringify(amzOptions.data) : amzOptions.data;
        const url = amzOptions.url;
        const method = amzOptions.method || 'GET';
        const requestPayload = amzOptions.body || requestPayloadData;
        const additionalAmzHeaders = amzOptions.headers;
        const awsSecurityCredentials = await this.getCredentials();
        const uri = new URL(url);
        const headerMap = await $b26225f38e9c78d7$var$generateAuthenticationHeaderMap({
            crypto: this.crypto,
            host: uri.host,
            canonicalUri: uri.pathname,
            canonicalQuerystring: uri.search.substr(1),
            method: method,
            region: this.region,
            securityCredentials: awsSecurityCredentials,
            requestPayload: requestPayload,
            additionalAmzHeaders: additionalAmzHeaders
        });
        // Append additional optional headers, eg. X-Amz-Target, Content-Type, etc.
        const headers = Object.assign(// Add x-amz-date if available.
        headerMap.amzDate ? {
            'x-amz-date': headerMap.amzDate
        } : {}, {
            Authorization: headerMap.authorizationHeader,
            host: uri.host
        }, additionalAmzHeaders || {});
        if (awsSecurityCredentials.token) Object.assign(headers, {
            'x-amz-security-token': awsSecurityCredentials.token
        });
        const awsSignedReq = {
            url: url,
            method: method,
            headers: headers
        };
        if (typeof requestPayload !== 'undefined') awsSignedReq.body = requestPayload;
        return awsSignedReq;
    }
}
module.exports.AwsRequestSigner = $b26225f38e9c78d7$var$AwsRequestSigner;
/**
 * Creates the HMAC-SHA256 hash of the provided message using the
 * provided key.
 *
 * @param crypto The crypto instance used to facilitate cryptographic
 *   operations.
 * @param key The HMAC-SHA256 key to use.
 * @param msg The message to hash.
 * @return The computed hash bytes.
 */ async function $b26225f38e9c78d7$var$sign(crypto, key, msg) {
    return await crypto.signWithHmacSha256(key, msg);
}
/**
 * Calculates the signing key used to calculate the signature for
 * AWS Signature Version 4 based on:
 * https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
 *
 * @param crypto The crypto instance used to facilitate cryptographic
 *   operations.
 * @param key The AWS secret access key.
 * @param dateStamp The '%Y%m%d' date format.
 * @param region The AWS region.
 * @param serviceName The AWS service name, eg. sts.
 * @return The signing key bytes.
 */ async function $b26225f38e9c78d7$var$getSigningKey(crypto, key, dateStamp, region, serviceName) {
    const kDate = await $b26225f38e9c78d7$var$sign(crypto, `AWS4${key}`, dateStamp);
    const kRegion = await $b26225f38e9c78d7$var$sign(crypto, kDate, region);
    const kService = await $b26225f38e9c78d7$var$sign(crypto, kRegion, serviceName);
    const kSigning = await $b26225f38e9c78d7$var$sign(crypto, kService, 'aws4_request');
    return kSigning;
}
/**
 * Generates the authentication header map needed for generating the AWS
 * Signature Version 4 signed request.
 *
 * @param option The options needed to compute the authentication header map.
 * @return The AWS authentication header map which constitutes of the following
 *   components: amz-date, authorization header and canonical query string.
 */ async function $b26225f38e9c78d7$var$generateAuthenticationHeaderMap(options) {
    const additionalAmzHeaders = options.additionalAmzHeaders || {};
    const requestPayload = options.requestPayload || '';
    // iam.amazonaws.com host => iam service.
    // sts.us-east-2.amazonaws.com => sts service.
    const serviceName = options.host.split('.')[0];
    const now = new Date();
    // Format: '%Y%m%dT%H%M%SZ'.
    const amzDate = now.toISOString().replace(/[-:]/g, '').replace(/\.[0-9]+/, '');
    // Format: '%Y%m%d'.
    const dateStamp = now.toISOString().replace(/[-]/g, '').replace(/T.*/, '');
    // Change all additional headers to be lower case.
    const reformattedAdditionalAmzHeaders = {};
    Object.keys(additionalAmzHeaders).forEach((key)=>{
        reformattedAdditionalAmzHeaders[key.toLowerCase()] = additionalAmzHeaders[key];
    });
    // Add AWS token if available.
    if (options.securityCredentials.token) reformattedAdditionalAmzHeaders['x-amz-security-token'] = options.securityCredentials.token;
    // Header keys need to be sorted alphabetically.
    const amzHeaders = Object.assign({
        host: options.host
    }, // Previously the date was not fixed with x-amz- and could be provided manually.
    // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
    reformattedAdditionalAmzHeaders.date ? {} : {
        'x-amz-date': amzDate
    }, reformattedAdditionalAmzHeaders);
    let canonicalHeaders = '';
    const signedHeadersList = Object.keys(amzHeaders).sort();
    signedHeadersList.forEach((key)=>{
        canonicalHeaders += `${key}:${amzHeaders[key]}\n`;
    });
    const signedHeaders = signedHeadersList.join(';');
    const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html
    const canonicalRequest = `${options.method}\n` + `${options.canonicalUri}\n` + `${options.canonicalQuerystring}\n` + `${canonicalHeaders}\n` + `${signedHeaders}\n` + `${payloadHash}`;
    const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${$b26225f38e9c78d7$var$AWS_REQUEST_TYPE}`;
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
    const stringToSign = `${$b26225f38e9c78d7$var$AWS_ALGORITHM}\n` + `${amzDate}\n` + `${credentialScope}\n` + await options.crypto.sha256DigestHex(canonicalRequest);
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
    const signingKey = await $b26225f38e9c78d7$var$getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
    const signature = await $b26225f38e9c78d7$var$sign(options.crypto, signingKey, stringToSign);
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html
    const authorizationHeader = `${$b26225f38e9c78d7$var$AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/` + `${credentialScope}, SignedHeaders=${signedHeaders}, ` + `Signature=${(0, $jVpvg.fromArrayBufferToHex)(signature)}`;
    return {
        // Do not return x-amz-date if date is available.
        amzDate: reformattedAdditionalAmzHeaders.date ? undefined : amzDate,
        authorizationHeader: authorizationHeader,
        canonicalQuerystring: options.canonicalQuerystring
    };
}


//# sourceMappingURL=awsrequestsigner.73be7a5b.js.map
