require("./esm.2cb8a1a8.js");
require("./constants.ccb0eb27.js");
require("./userAgent.a16d2177.js");
require("./log.7103fd4e.js");
require("./esm.f174e5c8.js");
require("./restError.8fe9b23b.js");
require("./sanitizer.0fc85cab.js");


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
var $c162ba4e12c4bb49$exports = {};
$c162ba4e12c4bb49$exports = new URL("esm.2cb8a1a8.js", "file:" + __filename).toString();



var $NpdWD = parcelRequire("NpdWD");

var $kAhre = parcelRequire("kAhre");

var $53OzH = parcelRequire("53OzH");

var $3lAwb = parcelRequire("3lAwb");
var $f9ed223b482d81e9$exports = {};
$f9ed223b482d81e9$exports = new URL("restError.8fe9b23b.js", "file:" + __filename).toString();



var $PKEMQ = parcelRequire("PKEMQ");
const $a27e074c917db7e2$export$95e79aa245a9e403 = "tracingPolicy";
function $a27e074c917db7e2$export$3ac4e45166506a4b(options = {}) {
    const userAgentPromise = (0, $kAhre.getUserAgentValue)(options.userAgentPrefix);
    const sanitizer = new (0, $PKEMQ.Sanitizer)({
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters
    });
    const tracingClient = $a27e074c917db7e2$var$tryCreateTracingClient();
    return {
        name: $a27e074c917db7e2$export$95e79aa245a9e403,
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
            const { span: span, tracingContext: tracingContext } = (_a = $a27e074c917db7e2$var$tryCreateSpan(tracingClient, request, spanAttributes)) !== null && _a !== void 0 ? _a : {};
            if (!span || !tracingContext) return next(request);
            try {
                const response = await tracingClient.withContext(tracingContext, next, request);
                $a27e074c917db7e2$var$tryProcessResponse(span, response);
                return response;
            } catch (err) {
                $a27e074c917db7e2$var$tryProcessError(span, err);
                throw err;
            }
        }
    };
}
function $a27e074c917db7e2$var$tryCreateTracingClient() {
    try {
        return (0, $c162ba4e12c4bb49$exports.createTracingClient)({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: (0, $NpdWD.SDK_VERSION)
        });
    } catch (e) {
        (0, $53OzH.logger).warning(`Error when creating the TracingClient: ${(0, $3lAwb.getErrorMessage)(e)}`);
        return undefined;
    }
}
function $a27e074c917db7e2$var$tryCreateSpan(tracingClient, request, spanAttributes) {
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
        (0, $53OzH.logger).warning(`Skipping creating a tracing span due to an error: ${(0, $3lAwb.getErrorMessage)(e)}`);
        return undefined;
    }
}
function $a27e074c917db7e2$var$tryProcessError(span, error) {
    try {
        span.setStatus({
            status: "error",
            error: (0, $3lAwb.isError)(error) ? error : undefined
        });
        if ((0, $f9ed223b482d81e9$exports.isRestError)(error) && error.statusCode) span.setAttribute("http.status_code", error.statusCode);
        span.end();
    } catch (e) {
        (0, $53OzH.logger).warning(`Skipping tracing span processing due to an error: ${(0, $3lAwb.getErrorMessage)(e)}`);
    }
}
function $a27e074c917db7e2$var$tryProcessResponse(span, response) {
    try {
        span.setAttribute("http.status_code", response.status);
        const serviceRequestId = response.headers.get("x-ms-request-id");
        if (serviceRequestId) span.setAttribute("serviceRequestId", serviceRequestId);
        span.setStatus({
            status: "success"
        });
        span.end();
    } catch (e) {
        (0, $53OzH.logger).warning(`Skipping tracing span processing due to an error: ${(0, $3lAwb.getErrorMessage)(e)}`);
    }
}


