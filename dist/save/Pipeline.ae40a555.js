require("./tslib.es6.2d62ff9b.js");
require("./commonjs.d9ddd180.js");
require("./esm.346084e9.js");
require("./commonjs.0faacadc.js");
require("./esm.9ecc246c.js");
require("./esm.8b334bf4.js");
require("./log.59f28d95.js");
require("./StorageRetryPolicyFactory.ed90e497.js");
require("./StorageSharedKeyCredential.bcfda9d4.js");
require("./AnonymousCredential.e38fc372.js");
require("./constants.40d31e64.js");
require("./cache.b2fea2b5.js");
require("./StorageBrowserPolicyV2.81e76ae5.js");
require("./StorageRetryPolicyV2.d21fe3f9.js");
require("./StorageSharedKeyCredentialPolicyV2.a6416a5f.js");
require("./StorageBrowserPolicyFactory.cb6b5b5b.js");
require("./StorageCorrectContentLengthPolicy.22928124.js");


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

var $8FaNO = parcelRequire("8FaNO");
var $63bdd51d05c6c807$exports = {};
$63bdd51d05c6c807$exports = new URL("commonjs.d9ddd180.js", "file:" + __filename).toString();



var $huk7e = parcelRequire("huk7e");

var $kRynQ = parcelRequire("kRynQ");
var $f6bd0ba970950c5b$exports = {};
$f6bd0ba970950c5b$exports = new URL("esm.9ecc246c.js", "file:" + __filename).toString();



var $dX4pS = parcelRequire("dX4pS");
var $c22a7e1acb1aba3e$exports = {};
$c22a7e1acb1aba3e$exports = new URL("log.59f28d95.js", "file:" + __filename).toString();


var $86fa7d40bd931bb3$exports = {};
$86fa7d40bd931bb3$exports = new URL("StorageRetryPolicyFactory.ed90e497.js", "file:" + __filename).toString();



var $dZsMs = parcelRequire("dZsMs");

var $ln1Qc = parcelRequire("ln1Qc");

var $3UluS = parcelRequire("3UluS");
var $6c884b761816d9ea$exports = {};
$6c884b761816d9ea$exports = new URL("cache.b2fea2b5.js", "file:" + __filename).toString();


var $69fbc892906d62c3$exports = {};
$69fbc892906d62c3$exports = new URL("StorageBrowserPolicyV2.81e76ae5.js", "file:" + __filename).toString();


var $94b2f17bb93c4029$exports = {};
$94b2f17bb93c4029$exports = new URL("StorageRetryPolicyV2.d21fe3f9.js", "file:" + __filename).toString();


var $96fc648e14e9f184$exports = {};
$96fc648e14e9f184$exports = new URL("StorageSharedKeyCredentialPolicyV2.a6416a5f.js", "file:" + __filename).toString();


var $53ace756c5e58238$exports = {};
$53ace756c5e58238$exports = new URL("StorageBrowserPolicyFactory.cb6b5b5b.js", "file:" + __filename).toString();


var $25bccad694dbdd5a$exports = {};
$25bccad694dbdd5a$exports = new URL("StorageCorrectContentLengthPolicy.22928124.js", "file:" + __filename).toString();


function $cb3a15e84cd5776b$export$c359764ed43025c(pipeline) {
    if (!pipeline || typeof pipeline !== "object") return false;
    const castPipeline = pipeline;
    return Array.isArray(castPipeline.factories) && typeof castPipeline.options === "object" && typeof castPipeline.toServiceClientOptions === "function";
}
class $cb3a15e84cd5776b$export$abd47b564b6c9ce2 {
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
function $cb3a15e84cd5776b$export$e1f0bbad3853f80b(credential, pipelineOptions = {}) {
    if (!credential) credential = new (0, $ln1Qc.AnonymousCredential)();
    const pipeline = new $cb3a15e84cd5776b$export$abd47b564b6c9ce2([], pipelineOptions);
    pipeline._credential = credential;
    return pipeline;
}
function $cb3a15e84cd5776b$var$processDownlevelPipeline(pipeline) {
    const knownFactoryFunctions = [
        $cb3a15e84cd5776b$var$isAnonymousCredential,
        $cb3a15e84cd5776b$var$isStorageSharedKeyCredential,
        $cb3a15e84cd5776b$var$isCoreHttpBearerTokenFactory,
        $cb3a15e84cd5776b$var$isStorageBrowserPolicyFactory,
        $cb3a15e84cd5776b$var$isStorageRetryPolicyFactory,
        $cb3a15e84cd5776b$var$isStorageTelemetryPolicyFactory,
        $cb3a15e84cd5776b$var$isCoreHttpPolicyFactory
    ];
    if (pipeline.factories.length) {
        const novelFactories = pipeline.factories.filter((factory)=>{
            return !knownFactoryFunctions.some((knownFactory)=>knownFactory(factory));
        });
        if (novelFactories.length) {
            const hasInjector = novelFactories.some((factory)=>$cb3a15e84cd5776b$var$isInjectorPolicyFactory(factory));
            // if there are any left over, wrap in a requestPolicyFactoryPolicy
            return {
                wrappedPolicies: (0, $63bdd51d05c6c807$exports.createRequestPolicyFactoryPolicy)(novelFactories),
                afterRetry: hasInjector
            };
        }
    }
    return undefined;
}
function $cb3a15e84cd5776b$export$b48e53d07b8ee7fd(pipeline) {
    var _a;
    const _b = pipeline.options, { httpClient: v1Client } = _b, restOptions = (0, $8FaNO.__rest)(_b, [
        "httpClient"
    ]);
    let httpClient = pipeline._coreHttpClient;
    if (!httpClient) {
        httpClient = v1Client ? (0, $63bdd51d05c6c807$exports.convertHttpClient)(v1Client) : (0, $6c884b761816d9ea$exports.getCachedDefaultHttpClient)();
        pipeline._coreHttpClient = httpClient;
    }
    let corePipeline = pipeline._corePipeline;
    if (!corePipeline) {
        const packageDetails = `azsdk-js-azure-storage-blob/${(0, $3UluS.SDK_VERSION)}`;
        const userAgentPrefix = restOptions.userAgentOptions && restOptions.userAgentOptions.userAgentPrefix ? `${restOptions.userAgentOptions.userAgentPrefix} ${packageDetails}` : `${packageDetails}`;
        corePipeline = (0, $kRynQ.createClientPipeline)(Object.assign(Object.assign({}, restOptions), {
            loggingOptions: {
                additionalAllowedHeaderNames: (0, $3UluS.StorageBlobLoggingAllowedHeaderNames),
                additionalAllowedQueryParameters: (0, $3UluS.StorageBlobLoggingAllowedQueryParameters),
                logger: (0, $c22a7e1acb1aba3e$exports.logger).info
            },
            userAgentOptions: {
                userAgentPrefix: userAgentPrefix
            },
            serializationOptions: {
                stringifyXML: $f6bd0ba970950c5b$exports.stringifyXML,
                serializerOptions: {
                    xml: {
                        // Use customized XML char key of "#" so we can deserialize metadata
                        // with "_" key
                        xmlCharKey: "#"
                    }
                }
            },
            deserializationOptions: {
                parseXML: $f6bd0ba970950c5b$exports.parseXML,
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
            name: (0, $huk7e.decompressResponsePolicyName)
        });
        corePipeline.addPolicy((0, $25bccad694dbdd5a$exports.storageCorrectContentLengthPolicy)());
        corePipeline.addPolicy((0, $94b2f17bb93c4029$exports.storageRetryPolicy)(restOptions.retryOptions), {
            phase: "Retry"
        });
        corePipeline.addPolicy((0, $69fbc892906d62c3$exports.storageBrowserPolicy)());
        const downlevelResults = $cb3a15e84cd5776b$var$processDownlevelPipeline(pipeline);
        if (downlevelResults) corePipeline.addPolicy(downlevelResults.wrappedPolicies, downlevelResults.afterRetry ? {
            afterPhase: "Retry"
        } : undefined);
        const credential = $cb3a15e84cd5776b$export$d64ff796a17ec05f(pipeline);
        if ((0, $dX4pS.isTokenCredential)(credential)) corePipeline.addPolicy((0, $huk7e.bearerTokenAuthenticationPolicy)({
            credential: credential,
            scopes: (_a = restOptions.audience) !== null && _a !== void 0 ? _a : (0, $3UluS.StorageOAuthScopes),
            challengeCallbacks: {
                authorizeRequestOnChallenge: (0, $kRynQ.authorizeRequestOnTenantChallenge)
            }
        }), {
            phase: "Sign"
        });
        else if (credential instanceof (0, $dZsMs.StorageSharedKeyCredential)) corePipeline.addPolicy((0, $96fc648e14e9f184$exports.storageSharedKeyCredentialPolicy)({
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
function $cb3a15e84cd5776b$export$d64ff796a17ec05f(pipeline) {
    // see if we squirreled one away on the type itself
    if (pipeline._credential) return pipeline._credential;
    // if it came from another package, loop over the factories and look for one like before
    let credential = new (0, $ln1Qc.AnonymousCredential)();
    for (const factory of pipeline.factories){
        if ((0, $dX4pS.isTokenCredential)(factory.credential)) // Only works if the factory has been attached a "credential" property.
        // We do that in newPipeline() when using TokenCredential.
        credential = factory.credential;
        else if ($cb3a15e84cd5776b$var$isStorageSharedKeyCredential(factory)) return factory;
    }
    return credential;
}
function $cb3a15e84cd5776b$var$isStorageSharedKeyCredential(factory) {
    if (factory instanceof (0, $dZsMs.StorageSharedKeyCredential)) return true;
    return factory.constructor.name === "StorageSharedKeyCredential";
}
function $cb3a15e84cd5776b$var$isAnonymousCredential(factory) {
    if (factory instanceof (0, $ln1Qc.AnonymousCredential)) return true;
    return factory.constructor.name === "AnonymousCredential";
}
function $cb3a15e84cd5776b$var$isCoreHttpBearerTokenFactory(factory) {
    return (0, $dX4pS.isTokenCredential)(factory.credential);
}
function $cb3a15e84cd5776b$var$isStorageBrowserPolicyFactory(factory) {
    if (factory instanceof (0, $53ace756c5e58238$exports.StorageBrowserPolicyFactory)) return true;
    return factory.constructor.name === "StorageBrowserPolicyFactory";
}
function $cb3a15e84cd5776b$var$isStorageRetryPolicyFactory(factory) {
    if (factory instanceof (0, $86fa7d40bd931bb3$exports.StorageRetryPolicyFactory)) return true;
    return factory.constructor.name === "StorageRetryPolicyFactory";
}
function $cb3a15e84cd5776b$var$isStorageTelemetryPolicyFactory(factory) {
    return factory.constructor.name === "TelemetryPolicyFactory";
}
function $cb3a15e84cd5776b$var$isInjectorPolicyFactory(factory) {
    return factory.constructor.name === "InjectorPolicyFactory";
}
function $cb3a15e84cd5776b$var$isCoreHttpPolicyFactory(factory) {
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


