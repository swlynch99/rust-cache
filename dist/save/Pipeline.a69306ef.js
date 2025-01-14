require("./tslib.es6.69735110.js");
require("./commonjs.92e91766.js");
require("./esm.b9de7281.js");
require("./commonjs.51f0173f.js");
require("./esm.11fdf116.js");
require("./esm.da2e0ec6.js");
require("./log.c80a09bd.js");
require("./StorageRetryPolicyFactory.96f4f7ca.js");
require("./StorageSharedKeyCredential.20c3ffa9.js");
require("./AnonymousCredential.949eec33.js");
require("./constants.425d5fc4.js");
require("./cache.64828807.js");
require("./StorageBrowserPolicyV2.589db091.js");
require("./StorageRetryPolicyV2.b8bb1461.js");
require("./StorageSharedKeyCredentialPolicyV2.7db2562d.js");
require("./StorageBrowserPolicyFactory.1153dd07.js");
require("./StorageCorrectContentLengthPolicy.95aeb46b.js");


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

var $7PS2Y = parcelRequire("7PS2Y");
var $23d72bf354d54576$exports = {};
$23d72bf354d54576$exports = new URL("commonjs.92e91766.js", "file:" + __filename).toString();



var $6W8oz = parcelRequire("6W8oz");

var $1PYyb = parcelRequire("1PYyb");
var $7a32aabd77d49faa$exports = {};
$7a32aabd77d49faa$exports = new URL("esm.11fdf116.js", "file:" + __filename).toString();



var $3y2tp = parcelRequire("3y2tp");
var $60a35bd9269de20b$exports = {};
$60a35bd9269de20b$exports = new URL("log.c80a09bd.js", "file:" + __filename).toString();


var $e7d7edf376d9f193$exports = {};
$e7d7edf376d9f193$exports = new URL("StorageRetryPolicyFactory.96f4f7ca.js", "file:" + __filename).toString();



var $kWeTV = parcelRequire("kWeTV");

var $4suru = parcelRequire("4suru");

var $daWVB = parcelRequire("daWVB");
var $78e586075c6b1e4a$exports = {};
$78e586075c6b1e4a$exports = new URL("cache.64828807.js", "file:" + __filename).toString();


var $4a1eb609addb810a$exports = {};
$4a1eb609addb810a$exports = new URL("StorageBrowserPolicyV2.589db091.js", "file:" + __filename).toString();


var $970e479e57b1dd48$exports = {};
$970e479e57b1dd48$exports = new URL("StorageRetryPolicyV2.b8bb1461.js", "file:" + __filename).toString();


var $338277910f64d6b3$exports = {};
$338277910f64d6b3$exports = new URL("StorageSharedKeyCredentialPolicyV2.7db2562d.js", "file:" + __filename).toString();


var $6253ffc972c99c12$exports = {};
$6253ffc972c99c12$exports = new URL("StorageBrowserPolicyFactory.1153dd07.js", "file:" + __filename).toString();


var $c4723f47fca89442$exports = {};
$c4723f47fca89442$exports = new URL("StorageCorrectContentLengthPolicy.95aeb46b.js", "file:" + __filename).toString();


function $e9d145fd1016b0e7$export$c359764ed43025c(pipeline) {
    if (!pipeline || typeof pipeline !== "object") return false;
    const castPipeline = pipeline;
    return Array.isArray(castPipeline.factories) && typeof castPipeline.options === "object" && typeof castPipeline.toServiceClientOptions === "function";
}
class $e9d145fd1016b0e7$export$abd47b564b6c9ce2 {
    /**
     * Creates an instance of Pipeline. Customize HTTPClient by implementing IHttpClient interface.
     *
     * @param factories -
     * @param options -
     */ constructor(factories, options = {}){
        this.factories = factories;
        this.options = options;
    }
    /**
     * Transfer Pipeline object to ServiceClientOptions object which is required by
     * ServiceClient constructor.
     *
     * @returns The ServiceClientOptions object from this Pipeline.
     */ toServiceClientOptions() {
        return {
            httpClient: this.options.httpClient,
            requestPolicyFactories: this.factories
        };
    }
}
function $e9d145fd1016b0e7$export$e1f0bbad3853f80b(credential, pipelineOptions = {}) {
    if (!credential) credential = new (0, $4suru.AnonymousCredential)();
    const pipeline = new $e9d145fd1016b0e7$export$abd47b564b6c9ce2([], pipelineOptions);
    pipeline._credential = credential;
    return pipeline;
}
function $e9d145fd1016b0e7$var$processDownlevelPipeline(pipeline) {
    const knownFactoryFunctions = [
        $e9d145fd1016b0e7$var$isAnonymousCredential,
        $e9d145fd1016b0e7$var$isStorageSharedKeyCredential,
        $e9d145fd1016b0e7$var$isCoreHttpBearerTokenFactory,
        $e9d145fd1016b0e7$var$isStorageBrowserPolicyFactory,
        $e9d145fd1016b0e7$var$isStorageRetryPolicyFactory,
        $e9d145fd1016b0e7$var$isStorageTelemetryPolicyFactory,
        $e9d145fd1016b0e7$var$isCoreHttpPolicyFactory
    ];
    if (pipeline.factories.length) {
        const novelFactories = pipeline.factories.filter((factory)=>{
            return !knownFactoryFunctions.some((knownFactory)=>knownFactory(factory));
        });
        if (novelFactories.length) {
            const hasInjector = novelFactories.some((factory)=>$e9d145fd1016b0e7$var$isInjectorPolicyFactory(factory));
            // if there are any left over, wrap in a requestPolicyFactoryPolicy
            return {
                wrappedPolicies: (0, $23d72bf354d54576$exports.createRequestPolicyFactoryPolicy)(novelFactories),
                afterRetry: hasInjector
            };
        }
    }
    return undefined;
}
function $e9d145fd1016b0e7$export$b48e53d07b8ee7fd(pipeline) {
    var _a;
    const _b = pipeline.options, { httpClient: v1Client } = _b, restOptions = (0, $7PS2Y.__rest)(_b, [
        "httpClient"
    ]);
    let httpClient = pipeline._coreHttpClient;
    if (!httpClient) {
        httpClient = v1Client ? (0, $23d72bf354d54576$exports.convertHttpClient)(v1Client) : (0, $78e586075c6b1e4a$exports.getCachedDefaultHttpClient)();
        pipeline._coreHttpClient = httpClient;
    }
    let corePipeline = pipeline._corePipeline;
    if (!corePipeline) {
        const packageDetails = `azsdk-js-azure-storage-blob/${(0, $daWVB.SDK_VERSION)}`;
        const userAgentPrefix = restOptions.userAgentOptions && restOptions.userAgentOptions.userAgentPrefix ? `${restOptions.userAgentOptions.userAgentPrefix} ${packageDetails}` : `${packageDetails}`;
        corePipeline = (0, $1PYyb.createClientPipeline)(Object.assign(Object.assign({}, restOptions), {
            loggingOptions: {
                additionalAllowedHeaderNames: (0, $daWVB.StorageBlobLoggingAllowedHeaderNames),
                additionalAllowedQueryParameters: (0, $daWVB.StorageBlobLoggingAllowedQueryParameters),
                logger: (0, $60a35bd9269de20b$exports.logger).info
            },
            userAgentOptions: {
                userAgentPrefix: userAgentPrefix
            },
            serializationOptions: {
                stringifyXML: $7a32aabd77d49faa$exports.stringifyXML,
                serializerOptions: {
                    xml: {
                        // Use customized XML char key of "#" so we can deserialize metadata
                        // with "_" key
                        xmlCharKey: "#"
                    }
                }
            },
            deserializationOptions: {
                parseXML: $7a32aabd77d49faa$exports.parseXML,
                serializerOptions: {
                    xml: {
                        // Use customized XML char key of "#" so we can deserialize metadata
                        // with "_" key
                        xmlCharKey: "#"
                    }
                }
            }
        }));
        corePipeline.removePolicy({
            phase: "Retry"
        });
        corePipeline.removePolicy({
            name: (0, $6W8oz.decompressResponsePolicyName)
        });
        corePipeline.addPolicy((0, $c4723f47fca89442$exports.storageCorrectContentLengthPolicy)());
        corePipeline.addPolicy((0, $970e479e57b1dd48$exports.storageRetryPolicy)(restOptions.retryOptions), {
            phase: "Retry"
        });
        corePipeline.addPolicy((0, $4a1eb609addb810a$exports.storageBrowserPolicy)());
        const downlevelResults = $e9d145fd1016b0e7$var$processDownlevelPipeline(pipeline);
        if (downlevelResults) corePipeline.addPolicy(downlevelResults.wrappedPolicies, downlevelResults.afterRetry ? {
            afterPhase: "Retry"
        } : undefined);
        const credential = $e9d145fd1016b0e7$export$d64ff796a17ec05f(pipeline);
        if ((0, $3y2tp.isTokenCredential)(credential)) corePipeline.addPolicy((0, $6W8oz.bearerTokenAuthenticationPolicy)({
            credential: credential,
            scopes: (_a = restOptions.audience) !== null && _a !== void 0 ? _a : (0, $daWVB.StorageOAuthScopes),
            challengeCallbacks: {
                authorizeRequestOnChallenge: (0, $1PYyb.authorizeRequestOnTenantChallenge)
            }
        }), {
            phase: "Sign"
        });
        else if (credential instanceof (0, $kWeTV.StorageSharedKeyCredential)) corePipeline.addPolicy((0, $338277910f64d6b3$exports.storageSharedKeyCredentialPolicy)({
            accountName: credential.accountName,
            accountKey: credential.accountKey
        }), {
            phase: "Sign"
        });
        pipeline._corePipeline = corePipeline;
    }
    return Object.assign(Object.assign({}, restOptions), {
        allowInsecureConnection: true,
        httpClient: httpClient,
        pipeline: corePipeline
    });
}
function $e9d145fd1016b0e7$export$d64ff796a17ec05f(pipeline) {
    // see if we squirreled one away on the type itself
    if (pipeline._credential) return pipeline._credential;
    // if it came from another package, loop over the factories and look for one like before
    let credential = new (0, $4suru.AnonymousCredential)();
    for (const factory of pipeline.factories){
        if ((0, $3y2tp.isTokenCredential)(factory.credential)) // Only works if the factory has been attached a "credential" property.
        // We do that in newPipeline() when using TokenCredential.
        credential = factory.credential;
        else if ($e9d145fd1016b0e7$var$isStorageSharedKeyCredential(factory)) return factory;
    }
    return credential;
}
function $e9d145fd1016b0e7$var$isStorageSharedKeyCredential(factory) {
    if (factory instanceof (0, $kWeTV.StorageSharedKeyCredential)) return true;
    return factory.constructor.name === "StorageSharedKeyCredential";
}
function $e9d145fd1016b0e7$var$isAnonymousCredential(factory) {
    if (factory instanceof (0, $4suru.AnonymousCredential)) return true;
    return factory.constructor.name === "AnonymousCredential";
}
function $e9d145fd1016b0e7$var$isCoreHttpBearerTokenFactory(factory) {
    return (0, $3y2tp.isTokenCredential)(factory.credential);
}
function $e9d145fd1016b0e7$var$isStorageBrowserPolicyFactory(factory) {
    if (factory instanceof (0, $6253ffc972c99c12$exports.StorageBrowserPolicyFactory)) return true;
    return factory.constructor.name === "StorageBrowserPolicyFactory";
}
function $e9d145fd1016b0e7$var$isStorageRetryPolicyFactory(factory) {
    if (factory instanceof (0, $e7d7edf376d9f193$exports.StorageRetryPolicyFactory)) return true;
    return factory.constructor.name === "StorageRetryPolicyFactory";
}
function $e9d145fd1016b0e7$var$isStorageTelemetryPolicyFactory(factory) {
    return factory.constructor.name === "TelemetryPolicyFactory";
}
function $e9d145fd1016b0e7$var$isInjectorPolicyFactory(factory) {
    return factory.constructor.name === "InjectorPolicyFactory";
}
function $e9d145fd1016b0e7$var$isCoreHttpPolicyFactory(factory) {
    const knownPolicies = [
        "GenerateClientRequestIdPolicy",
        "TracingPolicy",
        "LogPolicy",
        "ProxyPolicy",
        "DisableResponseDecompressionPolicy",
        "KeepAlivePolicy",
        "DeserializationPolicy"
    ];
    const mockHttpClient = {
        sendRequest: async (request)=>{
            return {
                request: request,
                headers: request.headers.clone(),
                status: 500
            };
        }
    };
    const mockRequestPolicyOptions = {
        log (_logLevel, _message) {
        /* do nothing */ },
        shouldLog (_logLevel) {
            return false;
        }
    };
    const policyInstance = factory.create(mockHttpClient, mockRequestPolicyOptions);
    const policyName = policyInstance.constructor.name;
    // bundlers sometimes add a custom suffix to the class name to make it unique
    return knownPolicies.some((knownPolicyName)=>{
        return policyName.startsWith(knownPolicyName);
    });
}


//# sourceMappingURL=Pipeline.a69306ef.js.map
