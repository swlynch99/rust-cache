require("./logPolicy.660a5313.js");
require("./pipeline.e7843679.js");
require("./redirectPolicy.afb12413.js");
require("./userAgentPolicy.c938e56a.js");
require("./multipartPolicy.be865674.js");
require("./decompressResponsePolicy.20e968cb.js");
require("./defaultRetryPolicy.8867c0c6.js");
require("./formDataPolicy.5e6c2121.js");
require("./esm.f174e5c8.js");
require("./proxyPolicy.a9b501da.js");
require("./setClientRequestIdPolicy.6780edf1.js");
require("./tlsPolicy.048b3438.js");
require("./tracingPolicy.939c45f0.js");


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
var $81aae7c3b4c9cc6a$exports = {};
$81aae7c3b4c9cc6a$exports = new URL("logPolicy.660a5313.js", "file:" + __filename).toString();



var $aKwS1 = parcelRequire("aKwS1");
var $d682bc1898004b7b$exports = {};
$d682bc1898004b7b$exports = new URL("redirectPolicy.afb12413.js", "file:" + __filename).toString();


var $eb720536bafd062e$exports = {};
$eb720536bafd062e$exports = new URL("userAgentPolicy.c938e56a.js", "file:" + __filename).toString();


var $4fa5dc49b44f35f2$exports = {};
$4fa5dc49b44f35f2$exports = new URL("multipartPolicy.be865674.js", "file:" + __filename).toString();


var $1c666d59da690f06$exports = {};
$1c666d59da690f06$exports = new URL("decompressResponsePolicy.20e968cb.js", "file:" + __filename).toString();


var $702fb7cbf4582cdf$exports = {};
$702fb7cbf4582cdf$exports = new URL("defaultRetryPolicy.8867c0c6.js", "file:" + __filename).toString();


var $1c45dac1b0922c7e$exports = {};
$1c45dac1b0922c7e$exports = new URL("formDataPolicy.5e6c2121.js", "file:" + __filename).toString();



var $3lAwb = parcelRequire("3lAwb");
var $6a639251797f0517$exports = {};
$6a639251797f0517$exports = new URL("proxyPolicy.a9b501da.js", "file:" + __filename).toString();


var $81ec7f073b17f1c8$exports = {};
$81ec7f073b17f1c8$exports = new URL("setClientRequestIdPolicy.6780edf1.js", "file:" + __filename).toString();


var $d0ab10d3025328e6$exports = {};
$d0ab10d3025328e6$exports = new URL("tlsPolicy.048b3438.js", "file:" + __filename).toString();


var $046a4a4a0b538f3f$exports = {};
$046a4a4a0b538f3f$exports = new URL("tracingPolicy.939c45f0.js", "file:" + __filename).toString();


function $9711fa9ce11125d2$export$79e143a6bb5a0b5c(options) {
    var _a;
    const pipeline = (0, $aKwS1.createEmptyPipeline)();
    if (0, $3lAwb.isNodeLike) {
        if (options.tlsOptions) pipeline.addPolicy((0, $d0ab10d3025328e6$exports.tlsPolicy)(options.tlsOptions));
        pipeline.addPolicy((0, $6a639251797f0517$exports.proxyPolicy)(options.proxyOptions));
        pipeline.addPolicy((0, $1c666d59da690f06$exports.decompressResponsePolicy)());
    }
    pipeline.addPolicy((0, $1c45dac1b0922c7e$exports.formDataPolicy)(), {
        beforePolicies: [
            (0, $4fa5dc49b44f35f2$exports.multipartPolicyName)
        ]
    });
    pipeline.addPolicy((0, $eb720536bafd062e$exports.userAgentPolicy)(options.userAgentOptions));
    pipeline.addPolicy((0, $81ec7f073b17f1c8$exports.setClientRequestIdPolicy)((_a = options.telemetryOptions) === null || _a === void 0 ? void 0 : _a.clientRequestIdHeaderName));
    // The multipart policy is added after policies with no phase, so that
    // policies can be added between it and formDataPolicy to modify
    // properties (e.g., making the boundary constant in recorded tests).
    pipeline.addPolicy((0, $4fa5dc49b44f35f2$exports.multipartPolicy)(), {
        afterPhase: "Deserialize"
    });
    pipeline.addPolicy((0, $702fb7cbf4582cdf$exports.defaultRetryPolicy)(options.retryOptions), {
        phase: "Retry"
    });
    pipeline.addPolicy((0, $046a4a4a0b538f3f$exports.tracingPolicy)(Object.assign(Object.assign({}, options.userAgentOptions), options.loggingOptions)), {
        afterPhase: "Retry"
    });
    if (0, $3lAwb.isNodeLike) // Both XHR and Fetch expect to handle redirects automatically,
    // so only include this policy when we're in Node.
    pipeline.addPolicy((0, $d682bc1898004b7b$exports.redirectPolicy)(options.redirectOptions), {
        afterPhase: "Retry"
    });
    pipeline.addPolicy((0, $81aae7c3b4c9cc6a$exports.logPolicy)(options.loggingOptions), {
        afterPhase: "Sign"
    });
    return pipeline;
}


