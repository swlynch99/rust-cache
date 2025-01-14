require("./build.b127b0e3.js");
require("./json-bigint.b4bb3b97.js");
require("./gcp-residency.ae92ab2b.js");


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
parcelRegister("gRBfr", function(module, exports) {
"use strict";
/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */ var $c46e7d47c9b8a48b$var$__createBinding = module.exports && module.exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $c46e7d47c9b8a48b$var$__exportStar = module.exports && module.exports.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) $c46e7d47c9b8a48b$var$__createBinding(exports1, m, p);
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.requestTimeout = module.exports.setGCPResidency = module.exports.getGCPResidency = module.exports.gcpResidencyCache = module.exports.resetIsAvailableCache = module.exports.isAvailable = module.exports.bulk = module.exports.universe = module.exports.project = module.exports.instance = module.exports.METADATA_SERVER_DETECTION = module.exports.HEADERS = module.exports.HEADER_VALUE = module.exports.HEADER_NAME = module.exports.SECONDARY_HOST_ADDRESS = module.exports.HOST_ADDRESS = module.exports.BASE_PATH = void 0;

var $fAzrg = parcelRequire("fAzrg");

var $bCg0L = parcelRequire("bCg0L");

module.exports.BASE_PATH = '/computeMetadata/v1';
module.exports.HOST_ADDRESS = 'http://169.254.169.254';
module.exports.SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';
module.exports.HEADER_NAME = 'Metadata-Flavor';
module.exports.HEADER_VALUE = 'Google';
module.exports.HEADERS = Object.freeze({
    [module.exports.HEADER_NAME]: module.exports.HEADER_VALUE
});
/**
 * Metadata server detection override options.
 *
 * Available via `process.env.METADATA_SERVER_DETECTION`.
 */ module.exports.METADATA_SERVER_DETECTION = Object.freeze({
    'assume-present': "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    'bios-only': "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    'ping-only': 'skip the BIOS probe, and go straight to pinging'
});
/**
 * Returns the base URL while taking into account the GCE_METADATA_HOST
 * environment variable if it exists.
 *
 * @returns The base URL, e.g., http://169.254.169.254/computeMetadata/v1.
 */ function $c46e7d47c9b8a48b$var$getBaseUrl(baseUrl) {
    if (!baseUrl) baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || module.exports.HOST_ADDRESS;
    // If no scheme is provided default to HTTP:
    if (!/^https?:\/\//.test(baseUrl)) baseUrl = `http://${baseUrl}`;
    return new URL(module.exports.BASE_PATH, baseUrl).href;
}
// Accepts an options object passed from the user to the API. In previous
// versions of the API, it referred to a `Request` or an `Axios` request
// options object.  Now it refers to an object with very limited property
// names. This is here to help ensure users don't pass invalid options when
// they  upgrade from 0.4 to 0.5 to 0.8.
function $c46e7d47c9b8a48b$var$validate(options) {
    Object.keys(options).forEach((key)=>{
        switch(key){
            case 'params':
            case 'property':
            case 'headers':
                break;
            case 'qs':
                throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
            default:
                throw new Error(`'${key}' is not a valid configuration option.`);
        }
    });
}
async function $c46e7d47c9b8a48b$var$metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
    let metadataKey = '';
    let params = {};
    let headers = {};
    if (typeof type === 'object') {
        const metadataAccessor = type;
        metadataKey = metadataAccessor.metadataKey;
        params = metadataAccessor.params || params;
        headers = metadataAccessor.headers || headers;
        noResponseRetries = metadataAccessor.noResponseRetries || noResponseRetries;
        fastFail = metadataAccessor.fastFail || fastFail;
    } else metadataKey = type;
    if (typeof options === 'string') metadataKey += `/${options}`;
    else {
        $c46e7d47c9b8a48b$var$validate(options);
        if (options.property) metadataKey += `/${options.property}`;
        headers = options.headers || headers;
        params = options.params || params;
    }
    try {
        const requestMethod = fastFail ? $c46e7d47c9b8a48b$var$fastFailMetadataRequest : $fAzrg.request;
        const res = await requestMethod({
            url: `${$c46e7d47c9b8a48b$var$getBaseUrl()}/${metadataKey}`,
            headers: {
                ...module.exports.HEADERS,
                ...headers
            },
            retryConfig: {
                noResponseRetries: noResponseRetries
            },
            params: params,
            responseType: 'text',
            timeout: $c46e7d47c9b8a48b$var$requestTimeout()
        });
        // NOTE: node.js converts all incoming headers to lower case.
        if (res.headers[module.exports.HEADER_NAME.toLowerCase()] !== module.exports.HEADER_VALUE) throw new Error(`Invalid response from metadata service: incorrect ${module.exports.HEADER_NAME} header.`);
        else if (!res.data) throw new Error('Invalid response from the metadata service');
        if (typeof res.data === 'string') try {
            return $bCg0L.parse(res.data);
        } catch (_a) {
        /* ignore */ }
        return res.data;
    } catch (e) {
        const err = e;
        if (err.response && err.response.status !== 200) err.message = `Unsuccessful response status code. ${err.message}`;
        throw e;
    }
}
async function $c46e7d47c9b8a48b$var$fastFailMetadataRequest(options) {
    const secondaryOptions = {
        ...options,
        url: options.url.replace($c46e7d47c9b8a48b$var$getBaseUrl(), $c46e7d47c9b8a48b$var$getBaseUrl(module.exports.SECONDARY_HOST_ADDRESS))
    };
    // We race a connection between DNS/IP to metadata server. There are a couple
    // reasons for this:
    //
    // 1. the DNS is slow in some GCP environments; by checking both, we might
    //    detect the runtime environment signficantly faster.
    // 2. we can't just check the IP, which is tarpitted and slow to respond
    //    on a user's local machine.
    //
    // Additional logic has been added to make sure that we don't create an
    // unhandled rejection in scenarios where a failure happens sometime
    // after a success.
    //
    // Note, however, if a failure happens prior to a success, a rejection should
    // occur, this is for folks running locally.
    //
    let responded = false;
    const r1 = (0, $fAzrg.request)(options).then((res)=>{
        responded = true;
        return res;
    }).catch((err)=>{
        if (responded) return r2;
        else {
            responded = true;
            throw err;
        }
    });
    const r2 = (0, $fAzrg.request)(secondaryOptions).then((res)=>{
        responded = true;
        return res;
    }).catch((err)=>{
        if (responded) return r1;
        else {
            responded = true;
            throw err;
        }
    });
    return Promise.race([
        r1,
        r2
    ]);
}
/**
 * Obtain metadata for the current GCE instance.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const serviceAccount: {} = await instance('service-accounts/');
 * const serviceAccountEmail: string = await instance('service-accounts/default/email');
 * ```
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $c46e7d47c9b8a48b$var$instance(options) {
    return $c46e7d47c9b8a48b$var$metadataAccessor('instance', options);
}
module.exports.instance = $c46e7d47c9b8a48b$var$instance;
/**
 * Obtain metadata for the current GCP project.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const projectId: string = await project('project-id');
 * const numericProjectId: number = await project('numeric-project-id');
 * ```
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $c46e7d47c9b8a48b$var$project(options) {
    return $c46e7d47c9b8a48b$var$metadataAccessor('project', options);
}
module.exports.project = $c46e7d47c9b8a48b$var$project;
/**
 * Obtain metadata for the current universe.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const universeDomain: string = await universe('universe_domain');
 * ```
 */ function $c46e7d47c9b8a48b$var$universe(options) {
    return $c46e7d47c9b8a48b$var$metadataAccessor('universe', options);
}
module.exports.universe = $c46e7d47c9b8a48b$var$universe;
/**
 * Retrieve metadata items in parallel.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const data = await bulk([
 *   {
 *     metadataKey: 'instance',
 *   },
 *   {
 *     metadataKey: 'project/project-id',
 *   },
 * ] as const);
 *
 * // data.instance;
 * // data['project/project-id'];
 * ```
 *
 * @param properties The metadata properties to retrieve
 * @returns The metadata in `metadatakey:value` format
 */ async function $c46e7d47c9b8a48b$var$bulk(properties) {
    const r = {};
    await Promise.all(properties.map((item)=>{
        return (async ()=>{
            const res = await $c46e7d47c9b8a48b$var$metadataAccessor(item);
            const key = item.metadataKey;
            r[key] = res;
        })();
    }));
    return r;
}
module.exports.bulk = $c46e7d47c9b8a48b$var$bulk;
/*
 * How many times should we retry detecting GCP environment.
 */ function $c46e7d47c9b8a48b$var$detectGCPAvailableRetries() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
}
let $c46e7d47c9b8a48b$var$cachedIsAvailableResponse;
/**
 * Determine if the metadata server is currently available.
 */ async function $c46e7d47c9b8a48b$var$isAvailable() {
    if (process.env.METADATA_SERVER_DETECTION) {
        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(value in module.exports.METADATA_SERVER_DETECTION)) throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(module.exports.METADATA_SERVER_DETECTION).join('`, `')}\`, or unset`);
        switch(value){
            case 'assume-present':
                return true;
            case 'none':
                return false;
            case 'bios-only':
                return $c46e7d47c9b8a48b$var$getGCPResidency();
            case 'ping-only':
        }
    }
    try {
        // If a user is instantiating several GCP libraries at the same time,
        // this may result in multiple calls to isAvailable(), to detect the
        // runtime environment. We use the same promise for each of these calls
        // to reduce the network load.
        if ($c46e7d47c9b8a48b$var$cachedIsAvailableResponse === undefined) $c46e7d47c9b8a48b$var$cachedIsAvailableResponse = $c46e7d47c9b8a48b$var$metadataAccessor('instance', undefined, $c46e7d47c9b8a48b$var$detectGCPAvailableRetries(), // If the default HOST_ADDRESS has been overridden, we should not
        // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
        // a non-GCP environment):
        !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
        await $c46e7d47c9b8a48b$var$cachedIsAvailableResponse;
        return true;
    } catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) console.info(err);
        if (err.type === 'request-timeout') // If running in a GCP environment, metadata endpoint should return
        // within ms.
        return false;
        if (err.response && err.response.status === 404) return false;
        else {
            if (!(err.response && err.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
            // is not populated:
            (!err.code || ![
                'EHOSTDOWN',
                'EHOSTUNREACH',
                'ENETUNREACH',
                'ENOENT',
                'ENOTFOUND',
                'ECONNREFUSED'
            ].includes(err.code))) {
                let code = 'UNKNOWN';
                if (err.code) code = err.code;
                process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, 'MetadataLookupWarning');
            }
            // Failure to resolve the metadata service means that it is not available.
            return false;
        }
    }
}
module.exports.isAvailable = $c46e7d47c9b8a48b$var$isAvailable;
/**
 * reset the memoized isAvailable() lookup.
 */ function $c46e7d47c9b8a48b$var$resetIsAvailableCache() {
    $c46e7d47c9b8a48b$var$cachedIsAvailableResponse = undefined;
}
module.exports.resetIsAvailableCache = $c46e7d47c9b8a48b$var$resetIsAvailableCache;
/**
 * A cache for the detected GCP Residency.
 */ module.exports.gcpResidencyCache = null;
/**
 * Detects GCP Residency.
 * Caches results to reduce costs for subsequent calls.
 *
 * @see setGCPResidency for setting
 */ function $c46e7d47c9b8a48b$var$getGCPResidency() {
    if (module.exports.gcpResidencyCache === null) $c46e7d47c9b8a48b$var$setGCPResidency();
    return module.exports.gcpResidencyCache;
}
module.exports.getGCPResidency = $c46e7d47c9b8a48b$var$getGCPResidency;
/**
 * Sets the detected GCP Residency.
 * Useful for forcing metadata server detection behavior.
 *
 * Set `null` to autodetect the environment (default behavior).
 * @see getGCPResidency for getting
 */ function $c46e7d47c9b8a48b$var$setGCPResidency(value = null) {
    module.exports.gcpResidencyCache = value !== null ? value : (0, (parcelRequire("dlx4Z")).detectGCPResidency)();
}
module.exports.setGCPResidency = $c46e7d47c9b8a48b$var$setGCPResidency;
/**
 * Obtain the timeout for requests to the metadata server.
 *
 * In certain environments and conditions requests can take longer than
 * the default timeout to complete. This function will determine the
 * appropriate timeout based on the environment.
 *
 * @returns {number} a request timeout duration in milliseconds.
 */ function $c46e7d47c9b8a48b$var$requestTimeout() {
    return $c46e7d47c9b8a48b$var$getGCPResidency() ? 0 : 3000;
}
module.exports.requestTimeout = $c46e7d47c9b8a48b$var$requestTimeout;

$c46e7d47c9b8a48b$var$__exportStar((parcelRequire("dlx4Z")), module.exports);

});
parcelRegister("fAzrg", function(module, exports) {
module.exports = new URL("build.b127b0e3.js", "file:" + __filename).toString();

});

parcelRegister("bCg0L", function(module, exports) {
module.exports = new URL("json-bigint.b4bb3b97.js", "file:" + __filename).toString();

});

parcelRegister("dlx4Z", function(module, exports) {
module.exports = new URL("gcp-residency.ae92ab2b.js", "file:" + __filename).toString();

});



