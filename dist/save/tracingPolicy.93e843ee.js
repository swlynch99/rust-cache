require("./esm.009e7b5c.js");
require("./constants.5683eabb.js");
require("./userAgent.69569523.js");
require("./log.38c924ec.js");
require("./esm.9590f010.js");
require("./restError.027e27ea.js");
require("./sanitizer.1a683bd1.js");


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
var $faeab4c797404ae0$exports = {};
$faeab4c797404ae0$exports = new URL("esm.009e7b5c.js", "file:" + __filename).toString();



var $l9U3w = parcelRequire("l9U3w");

var $dW5yc = parcelRequire("dW5yc");

var $1A2DQ = parcelRequire("1A2DQ");

var $hACYf = parcelRequire("hACYf");
var $1ae137b933f6a6a9$exports = {};
$1ae137b933f6a6a9$exports = new URL("restError.027e27ea.js", "file:" + __filename).toString();



var $eqRMq = parcelRequire("eqRMq");
const $beb5f5dc186ef0e8$export$95e79aa245a9e403 = "tracingPolicy";
function $beb5f5dc186ef0e8$export$3ac4e45166506a4b(options = {}) {
    const userAgentPromise = (0, $dW5yc.getUserAgentValue)(options.userAgentPrefix);
    const sanitizer = new (0, $eqRMq.Sanitizer)({
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
    });
    const tracingClient = $beb5f5dc186ef0e8$var$tryCreateTracingClient();
    return {
        name: $beb5f5dc186ef0e8$export$95e79aa245a9e403,
        async sendRequest (request, next) {
            var _a;
            if (!tracingClient) return next(request);
            const userAgent = await userAgentPromise;
            const spanAttributes = {
                "http.url": sanitizer.sanitizeUrl(request.url),
                "http.method": request.method,
                "http.user_agent": userAgent,
                requestId: request.requestId
            };
            if (userAgent) spanAttributes["http.user_agent"] = userAgent;
            const { span: span, tracingContext: tracingContext } = (_a = $beb5f5dc186ef0e8$var$tryCreateSpan(tracingClient, request, spanAttributes)) !== null && _a !== void 0 ? _a : {};
            if (!span || !tracingContext) return next(request);
            try {
                const response = await tracingClient.withContext(tracingContext, next, request);
                $beb5f5dc186ef0e8$var$tryProcessResponse(span, response);
                return response;
            } catch (err) {
                $beb5f5dc186ef0e8$var$tryProcessError(span, err);
                throw err;
            }
        }
    };
}
function $beb5f5dc186ef0e8$var$tryCreateTracingClient() {
    try {
        return (0, $faeab4c797404ae0$exports.createTracingClient)({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: (0, $l9U3w.SDK_VERSION)
        });
    } catch (e) {
        (0, $1A2DQ.logger).warning(`Error when creating the TracingClient: ${(0, $hACYf.getErrorMessage)(e)}`);
        return undefined;
    }
}
function $beb5f5dc186ef0e8$var$tryCreateSpan(tracingClient, request, spanAttributes) {
    try {
        // As per spec, we do not need to differentiate between HTTP and HTTPS in span name.
        const { span: span, updatedOptions: updatedOptions } = tracingClient.startSpan(`HTTP ${request.method}`, {
            tracingOptions: request.tracingOptions
        }, {
            spanKind: "client",
            spanAttributes: spanAttributes
        });
        // If the span is not recording, don't do any more work.
        if (!span.isRecording()) {
            span.end();
            return undefined;
        }
        // set headers
        const headers = tracingClient.createRequestHeaders(updatedOptions.tracingOptions.tracingContext);
        for (const [key, value] of Object.entries(headers))request.headers.set(key, value);
        return {
            span: span,
            tracingContext: updatedOptions.tracingOptions.tracingContext
        };
    } catch (e) {
        (0, $1A2DQ.logger).warning(`Skipping creating a tracing span due to an error: ${(0, $hACYf.getErrorMessage)(e)}`);
        return undefined;
    }
}
function $beb5f5dc186ef0e8$var$tryProcessError(span, error) {
    try {
        span.setStatus({
            status: "error",
            error: (0, $hACYf.isError)(error) ? error : undefined
        });
        if ((0, $1ae137b933f6a6a9$exports.isRestError)(error) && error.statusCode) span.setAttribute("http.status_code", error.statusCode);
        span.end();
    } catch (e) {
        (0, $1A2DQ.logger).warning(`Skipping tracing span processing due to an error: ${(0, $hACYf.getErrorMessage)(e)}`);
    }
}
function $beb5f5dc186ef0e8$var$tryProcessResponse(span, response) {
    try {
        span.setAttribute("http.status_code", response.status);
        const serviceRequestId = response.headers.get("x-ms-request-id");
        if (serviceRequestId) span.setAttribute("serviceRequestId", serviceRequestId);
        span.setStatus({
            status: "success"
        });
        span.end();
    } catch (e) {
        (0, $1A2DQ.logger).warning(`Skipping tracing span processing due to an error: ${(0, $hACYf.getErrorMessage)(e)}`);
    }
}


//# sourceMappingURL=tracingPolicy.93e843ee.js.map
