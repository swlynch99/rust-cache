require("./logPolicy.df44226d.js");
require("./pipeline.8dad1290.js");
require("./redirectPolicy.b5d491d6.js");
require("./userAgentPolicy.28633420.js");
require("./multipartPolicy.21e26c65.js");
require("./decompressResponsePolicy.dcc2c605.js");
require("./defaultRetryPolicy.58077bca.js");
require("./formDataPolicy.d6c7bfb0.js");
require("./esm.9590f010.js");
require("./proxyPolicy.19690093.js");
require("./setClientRequestIdPolicy.cc641c24.js");
require("./tlsPolicy.df002629.js");
require("./tracingPolicy.93e843ee.js");


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
var $1df7cbc528f6d0e0$exports = {};
$1df7cbc528f6d0e0$exports = new URL("logPolicy.df44226d.js", "file:" + __filename).toString();



var $rB7My = parcelRequire("rB7My");
var $6dccf9c948535ae0$exports = {};
$6dccf9c948535ae0$exports = new URL("redirectPolicy.b5d491d6.js", "file:" + __filename).toString();


var $a819aab8bc554215$exports = {};
$a819aab8bc554215$exports = new URL("userAgentPolicy.28633420.js", "file:" + __filename).toString();


var $8ea5e62a9cff6f7c$exports = {};
$8ea5e62a9cff6f7c$exports = new URL("multipartPolicy.21e26c65.js", "file:" + __filename).toString();


var $3b12de3907efb6f8$exports = {};
$3b12de3907efb6f8$exports = new URL("decompressResponsePolicy.dcc2c605.js", "file:" + __filename).toString();


var $57d03f8561dd1196$exports = {};
$57d03f8561dd1196$exports = new URL("defaultRetryPolicy.58077bca.js", "file:" + __filename).toString();


var $3ac94687f09532f0$exports = {};
$3ac94687f09532f0$exports = new URL("formDataPolicy.d6c7bfb0.js", "file:" + __filename).toString();



var $hACYf = parcelRequire("hACYf");
var $0b3821d5a7e09ca9$exports = {};
$0b3821d5a7e09ca9$exports = new URL("proxyPolicy.19690093.js", "file:" + __filename).toString();


var $6555a75f4fce85c8$exports = {};
$6555a75f4fce85c8$exports = new URL("setClientRequestIdPolicy.cc641c24.js", "file:" + __filename).toString();


var $0a70bbf3df87cea8$exports = {};
$0a70bbf3df87cea8$exports = new URL("tlsPolicy.df002629.js", "file:" + __filename).toString();


var $3aa1e4964daf691e$exports = {};
$3aa1e4964daf691e$exports = new URL("tracingPolicy.93e843ee.js", "file:" + __filename).toString();


function $9e6b77377b2ebd20$export$79e143a6bb5a0b5c(options) {
    var _a;
    const pipeline = (0, $rB7My.createEmptyPipeline)();
    if (0, $hACYf.isNodeLike) {
        if (options.tlsOptions) pipeline.addPolicy((0, $0a70bbf3df87cea8$exports.tlsPolicy)(options.tlsOptions));
        pipeline.addPolicy((0, $0b3821d5a7e09ca9$exports.proxyPolicy)(options.proxyOptions));
        pipeline.addPolicy((0, $3b12de3907efb6f8$exports.decompressResponsePolicy)());
    }
    pipeline.addPolicy((0, $3ac94687f09532f0$exports.formDataPolicy)(), {
        beforePolicies: [
            (0, $8ea5e62a9cff6f7c$exports.multipartPolicyName)
        ]
    });
    pipeline.addPolicy((0, $a819aab8bc554215$exports.userAgentPolicy)(options.userAgentOptions));
    pipeline.addPolicy((0, $6555a75f4fce85c8$exports.setClientRequestIdPolicy)((_a = options.telemetryOptions) === null || _a === void 0 ? void 0 : _a.clientRequestIdHeaderName));
    // The multipart policy is added after policies with no phase, so that
    // policies can be added between it and formDataPolicy to modify
    // properties (e.g., making the boundary constant in recorded tests).
    pipeline.addPolicy((0, $8ea5e62a9cff6f7c$exports.multipartPolicy)(), {
        afterPhase: "Deserialize"
    });
    pipeline.addPolicy((0, $57d03f8561dd1196$exports.defaultRetryPolicy)(options.retryOptions), {
        phase: "Retry"
    });
    pipeline.addPolicy((0, $3aa1e4964daf691e$exports.tracingPolicy)(Object.assign(Object.assign({}, options.userAgentOptions), options.loggingOptions)), {
        afterPhase: "Retry"
    });
    if (0, $hACYf.isNodeLike) // Both XHR and Fetch expect to handle redirects automatically,
    // so only include this policy when we're in Node.
    pipeline.addPolicy((0, $6dccf9c948535ae0$exports.redirectPolicy)(options.redirectOptions), {
        afterPhase: "Retry"
    });
    pipeline.addPolicy((0, $1df7cbc528f6d0e0$exports.logPolicy)(options.loggingOptions), {
        afterPhase: "Sign"
    });
    return pipeline;
}


//# sourceMappingURL=createPipelineFromOptions.a38ebbf0.js.map
