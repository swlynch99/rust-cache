require("./interfaces.2130312b.js");
require("./esm.346084e9.js");
require("./serializer.cbae7965.js");
require("./operationHelpers.90300366.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.deserializationPolicy = module.exports.deserializationPolicyName = void 0;

var $aqYRx = parcelRequire("aqYRx");

var $huk7e = parcelRequire("huk7e");

var $gVtaz = parcelRequire("gVtaz");
var $c890ec9d3b145a2b$exports = {};
$c890ec9d3b145a2b$exports = new URL("operationHelpers.90300366.js", "file:" + __filename).toString();


const $7155e6c51a51ac5f$var$defaultJsonContentTypes = [
    "application/json",
    "text/json"
];
const $7155e6c51a51ac5f$var$defaultXmlContentTypes = [
    "application/xml",
    "application/atom+xml"
];
/**
 * The programmatic identifier of the deserializationPolicy.
 */ module.exports.deserializationPolicyName = "deserializationPolicy";
/**
 * This policy handles parsing out responses according to OperationSpecs on the request.
 */ function $7155e6c51a51ac5f$var$deserializationPolicy(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const jsonContentTypes = (_b = (_a = options.expectedContentTypes) === null || _a === void 0 ? void 0 : _a.json) !== null && _b !== void 0 ? _b : $7155e6c51a51ac5f$var$defaultJsonContentTypes;
    const xmlContentTypes = (_d = (_c = options.expectedContentTypes) === null || _c === void 0 ? void 0 : _c.xml) !== null && _d !== void 0 ? _d : $7155e6c51a51ac5f$var$defaultXmlContentTypes;
    const parseXML = options.parseXML;
    const serializerOptions = options.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_e = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _e !== void 0 ? _e : "",
            includeRoot: (_f = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _f !== void 0 ? _f : false,
            xmlCharKey: (_g = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _g !== void 0 ? _g : $aqYRx.XML_CHARKEY
        }
    };
    return {
        name: module.exports.deserializationPolicyName,
        async sendRequest (request, next) {
            const response = await next(request);
            return $7155e6c51a51ac5f$var$deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, updatedOptions, parseXML);
        }
    };
}
module.exports.deserializationPolicy = $7155e6c51a51ac5f$var$deserializationPolicy;
function $7155e6c51a51ac5f$var$getOperationResponseMap(parsedResponse) {
    let result;
    const request = parsedResponse.request;
    const operationInfo = (0, $c890ec9d3b145a2b$exports.getOperationRequestInfo)(request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (operationSpec) {
        if (!(operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter)) result = operationSpec.responses[parsedResponse.status];
        else result = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter(operationSpec, parsedResponse);
    }
    return result;
}
function $7155e6c51a51ac5f$var$shouldDeserializeResponse(parsedResponse) {
    const request = parsedResponse.request;
    const operationInfo = (0, $c890ec9d3b145a2b$exports.getOperationRequestInfo)(request);
    const shouldDeserialize = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.shouldDeserialize;
    let result;
    if (shouldDeserialize === undefined) result = true;
    else if (typeof shouldDeserialize === "boolean") result = shouldDeserialize;
    else result = shouldDeserialize(parsedResponse);
    return result;
}
async function $7155e6c51a51ac5f$var$deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, options, parseXML) {
    const parsedResponse = await $7155e6c51a51ac5f$var$parse(jsonContentTypes, xmlContentTypes, response, options, parseXML);
    if (!$7155e6c51a51ac5f$var$shouldDeserializeResponse(parsedResponse)) return parsedResponse;
    const operationInfo = (0, $c890ec9d3b145a2b$exports.getOperationRequestInfo)(parsedResponse.request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (!operationSpec || !operationSpec.responses) return parsedResponse;
    const responseSpec = $7155e6c51a51ac5f$var$getOperationResponseMap(parsedResponse);
    const { error: error, shouldReturnResponse: shouldReturnResponse } = $7155e6c51a51ac5f$var$handleErrorResponse(parsedResponse, operationSpec, responseSpec, options);
    if (error) throw error;
    else if (shouldReturnResponse) return parsedResponse;
    // An operation response spec does exist for current status code, so
    // use it to deserialize the response.
    if (responseSpec) {
        if (responseSpec.bodyMapper) {
            let valueToDeserialize = parsedResponse.parsedBody;
            if (operationSpec.isXML && responseSpec.bodyMapper.type.name === $gVtaz.MapperTypeNames.Sequence) valueToDeserialize = typeof valueToDeserialize === "object" ? valueToDeserialize[responseSpec.bodyMapper.xmlElementName] : [];
            try {
                parsedResponse.parsedBody = operationSpec.serializer.deserialize(responseSpec.bodyMapper, valueToDeserialize, "operationRes.parsedBody", options);
            } catch (deserializeError) {
                const restError = new $huk7e.RestError(`Error ${deserializeError} occurred in deserializing the responseBody - ${parsedResponse.bodyAsText}`, {
                    statusCode: parsedResponse.status,
                    request: parsedResponse.request,
                    response: parsedResponse
                });
                throw restError;
            }
        } else if (operationSpec.httpMethod === "HEAD") // head methods never have a body, but we return a boolean to indicate presence/absence of the resource
        parsedResponse.parsedBody = response.status >= 200 && response.status < 300;
        if (responseSpec.headersMapper) parsedResponse.parsedHeaders = operationSpec.serializer.deserialize(responseSpec.headersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders", {
            xml: {},
            ignoreUnknownProperties: true
        });
    }
    return parsedResponse;
}
function $7155e6c51a51ac5f$var$isOperationSpecEmpty(operationSpec) {
    const expectedStatusCodes = Object.keys(operationSpec.responses);
    return expectedStatusCodes.length === 0 || expectedStatusCodes.length === 1 && expectedStatusCodes[0] === "default";
}
function $7155e6c51a51ac5f$var$handleErrorResponse(parsedResponse, operationSpec, responseSpec, options) {
    var _a;
    const isSuccessByStatus = 200 <= parsedResponse.status && parsedResponse.status < 300;
    const isExpectedStatusCode = $7155e6c51a51ac5f$var$isOperationSpecEmpty(operationSpec) ? isSuccessByStatus : !!responseSpec;
    if (isExpectedStatusCode) {
        if (responseSpec) {
            if (!responseSpec.isError) return {
                error: null,
                shouldReturnResponse: false
            };
        } else return {
            error: null,
            shouldReturnResponse: false
        };
    }
    const errorResponseSpec = responseSpec !== null && responseSpec !== void 0 ? responseSpec : operationSpec.responses.default;
    const initialErrorMessage = ((_a = parsedResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(parsedResponse.status)) ? `Unexpected status code: ${parsedResponse.status}` : parsedResponse.bodyAsText;
    const error = new $huk7e.RestError(initialErrorMessage, {
        statusCode: parsedResponse.status,
        request: parsedResponse.request,
        response: parsedResponse
    });
    // If the item failed but there's no error spec or default spec to deserialize the error,
    // we should fail so we just throw the parsed response
    if (!errorResponseSpec) throw error;
    const defaultBodyMapper = errorResponseSpec.bodyMapper;
    const defaultHeadersMapper = errorResponseSpec.headersMapper;
    try {
        // If error response has a body, try to deserialize it using default body mapper.
        // Then try to extract error code & message from it
        if (parsedResponse.parsedBody) {
            const parsedBody = parsedResponse.parsedBody;
            let deserializedError;
            if (defaultBodyMapper) {
                let valueToDeserialize = parsedBody;
                if (operationSpec.isXML && defaultBodyMapper.type.name === $gVtaz.MapperTypeNames.Sequence) {
                    valueToDeserialize = [];
                    const elementName = defaultBodyMapper.xmlElementName;
                    if (typeof parsedBody === "object" && elementName) valueToDeserialize = parsedBody[elementName];
                }
                deserializedError = operationSpec.serializer.deserialize(defaultBodyMapper, valueToDeserialize, "error.response.parsedBody", options);
            }
            const internalError = parsedBody.error || deserializedError || parsedBody;
            error.code = internalError.code;
            if (internalError.message) error.message = internalError.message;
            if (defaultBodyMapper) error.response.parsedBody = deserializedError;
        }
        // If error response has headers, try to deserialize it using default header mapper
        if (parsedResponse.headers && defaultHeadersMapper) error.response.parsedHeaders = operationSpec.serializer.deserialize(defaultHeadersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
    } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody - "${parsedResponse.bodyAsText}" for the default response.`;
    }
    return {
        error: error,
        shouldReturnResponse: false
    };
}
async function $7155e6c51a51ac5f$var$parse(jsonContentTypes, xmlContentTypes, operationResponse, opts, parseXML) {
    var _a;
    if (!((_a = operationResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(operationResponse.status)) && operationResponse.bodyAsText) {
        const text = operationResponse.bodyAsText;
        const contentType = operationResponse.headers.get("Content-Type") || "";
        const contentComponents = !contentType ? [] : contentType.split(";").map((component)=>component.toLowerCase());
        try {
            if (contentComponents.length === 0 || contentComponents.some((component)=>jsonContentTypes.indexOf(component) !== -1)) {
                operationResponse.parsedBody = JSON.parse(text);
                return operationResponse;
            } else if (contentComponents.some((component)=>xmlContentTypes.indexOf(component) !== -1)) {
                if (!parseXML) throw new Error("Parsing XML not supported.");
                const body = await parseXML(text, opts.xml);
                operationResponse.parsedBody = body;
                return operationResponse;
            }
        } catch (err) {
            const msg = `Error "${err}" occurred while parsing the response body - ${operationResponse.bodyAsText}.`;
            const errCode = err.code || $huk7e.RestError.PARSE_ERROR;
            const e = new $huk7e.RestError(msg, {
                code: errCode,
                statusCode: operationResponse.status,
                request: operationResponse.request,
                response: operationResponse
            });
            throw e;
        }
    }
    return operationResponse;
}


