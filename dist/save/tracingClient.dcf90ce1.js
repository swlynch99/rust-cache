require("./instrumenter.283bf840.js");
require("./tracingContext.917682cf.js");


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

var $11mMx = parcelRequire("11mMx");

var $j9AQa = parcelRequire("j9AQa");
function $6c38bad68f617221$export$3bcb12d844328c5c(options) {
    const { namespace: namespace, packageName: packageName, packageVersion: packageVersion } = options;
    function startSpan(name, operationOptions, spanOptions) {
        var _a;
        const startSpanResult = (0, $11mMx.getInstrumenter)().startSpan(name, Object.assign(Object.assign({}, spanOptions), {
            packageName: packageName,
            packageVersion: packageVersion,
            tracingContext: (_a = operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) === null || _a === void 0 ? void 0 : _a.tracingContext
        }));
        let tracingContext = startSpanResult.tracingContext;
        const span = startSpanResult.span;
        if (!tracingContext.getValue((0, $j9AQa.knownContextKeys).namespace)) tracingContext = tracingContext.setValue((0, $j9AQa.knownContextKeys).namespace, namespace);
        span.setAttribute("az.namespace", tracingContext.getValue((0, $j9AQa.knownContextKeys).namespace));
        const updatedOptions = Object.assign({}, operationOptions, {
            tracingOptions: Object.assign(Object.assign({}, operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions), {
                tracingContext: tracingContext
            })
        });
        return {
            span: span,
            updatedOptions: updatedOptions
        };
    }
    async function withSpan(name, operationOptions, callback, spanOptions) {
        const { span: span, updatedOptions: updatedOptions } = startSpan(name, operationOptions, spanOptions);
        try {
            const result = await withContext(updatedOptions.tracingOptions.tracingContext, ()=>Promise.resolve(callback(updatedOptions, span)));
            span.setStatus({
                status: "success"
            });
            return result;
        } catch (err) {
            span.setStatus({
                status: "error",
                error: err
            });
            throw err;
        } finally{
            span.end();
        }
    }
    function withContext(context, callback, ...callbackArgs) {
        return (0, $11mMx.getInstrumenter)().withContext(context, callback, ...callbackArgs);
    }
    /**
     * Parses a traceparent header value into a span identifier.
     *
     * @param traceparentHeader - The traceparent header to parse.
     * @returns An implementation-specific identifier for the span.
     */ function parseTraceparentHeader(traceparentHeader) {
        return (0, $11mMx.getInstrumenter)().parseTraceparentHeader(traceparentHeader);
    }
    /**
     * Creates a set of request headers to propagate tracing information to a backend.
     *
     * @param tracingContext - The context containing the span to serialize.
     * @returns The set of headers to add to a request.
     */ function createRequestHeaders(tracingContext) {
        return (0, $11mMx.getInstrumenter)().createRequestHeaders(tracingContext);
    }
    return {
        startSpan: startSpan,
        withSpan: withSpan,
        withContext: withContext,
        parseTraceparentHeader: parseTraceparentHeader,
        createRequestHeaders: createRequestHeaders
    };
}


