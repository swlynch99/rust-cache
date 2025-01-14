require("./interfaces.2130312b.js");
require("./operationHelpers.90300366.js");
require("./serializer.cbae7965.js");
require("./interfaceHelpers.0958a5a8.js");


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
module.exports.serializeRequestBody = module.exports.serializeHeaders = module.exports.serializationPolicy = module.exports.serializationPolicyName = void 0;

var $aqYRx = parcelRequire("aqYRx");

var $dxQDb = parcelRequire("dxQDb");

var $gVtaz = parcelRequire("gVtaz");
var $46b140fd9cae8ac3$exports = {};
$46b140fd9cae8ac3$exports = new URL("interfaceHelpers.0958a5a8.js", "file:" + __filename).toString();


/**
 * The programmatic identifier of the serializationPolicy.
 */ module.exports.serializationPolicyName = "serializationPolicy";
/**
 * This policy handles assembling the request body and headers using
 * an OperationSpec and OperationArguments on the request.
 */ function $5b58a03563fc4d38$var$serializationPolicy(options = {}) {
    const stringifyXML = options.stringifyXML;
    return {
        name: module.exports.serializationPolicyName,
        async sendRequest (request, next) {
            const operationInfo = (0, $dxQDb.getOperationRequestInfo)(request);
            const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
            const operationArguments = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationArguments;
            if (operationSpec && operationArguments) {
                $5b58a03563fc4d38$var$serializeHeaders(request, operationArguments, operationSpec);
                $5b58a03563fc4d38$var$serializeRequestBody(request, operationArguments, operationSpec, stringifyXML);
            }
            return next(request);
        }
    };
}
module.exports.serializationPolicy = $5b58a03563fc4d38$var$serializationPolicy;
/**
 * @internal
 */ function $5b58a03563fc4d38$var$serializeHeaders(request, operationArguments, operationSpec) {
    var _a, _b;
    if (operationSpec.headerParameters) for (const headerParameter of operationSpec.headerParameters){
        let headerValue = (0, $dxQDb.getOperationArgumentValueFromParameter)(operationArguments, headerParameter);
        if (headerValue !== null && headerValue !== undefined || headerParameter.mapper.required) {
            headerValue = operationSpec.serializer.serialize(headerParameter.mapper, headerValue, (0, $46b140fd9cae8ac3$exports.getPathStringFromParameter)(headerParameter));
            const headerCollectionPrefix = headerParameter.mapper.headerCollectionPrefix;
            if (headerCollectionPrefix) for (const key of Object.keys(headerValue))request.headers.set(headerCollectionPrefix + key, headerValue[key]);
            else request.headers.set(headerParameter.mapper.serializedName || (0, $46b140fd9cae8ac3$exports.getPathStringFromParameter)(headerParameter), headerValue);
        }
    }
    const customHeaders = (_b = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.requestOptions) === null || _b === void 0 ? void 0 : _b.customHeaders;
    if (customHeaders) for (const customHeaderName of Object.keys(customHeaders))request.headers.set(customHeaderName, customHeaders[customHeaderName]);
}
module.exports.serializeHeaders = $5b58a03563fc4d38$var$serializeHeaders;
/**
 * @internal
 */ function $5b58a03563fc4d38$var$serializeRequestBody(request, operationArguments, operationSpec, stringifyXML = function() {
    throw new Error("XML serialization unsupported!");
}) {
    var _a, _b, _c, _d, _e;
    const serializerOptions = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_b = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _b !== void 0 ? _b : "",
            includeRoot: (_c = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _c !== void 0 ? _c : false,
            xmlCharKey: (_d = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _d !== void 0 ? _d : $aqYRx.XML_CHARKEY
        }
    };
    const xmlCharKey = updatedOptions.xml.xmlCharKey;
    if (operationSpec.requestBody && operationSpec.requestBody.mapper) {
        request.body = (0, $dxQDb.getOperationArgumentValueFromParameter)(operationArguments, operationSpec.requestBody);
        const bodyMapper = operationSpec.requestBody.mapper;
        const { required: required, serializedName: serializedName, xmlName: xmlName, xmlElementName: xmlElementName, xmlNamespace: xmlNamespace, xmlNamespacePrefix: xmlNamespacePrefix, nullable: nullable } = bodyMapper;
        const typeName = bodyMapper.type.name;
        try {
            if (request.body !== undefined && request.body !== null || nullable && request.body === null || required) {
                const requestBodyParameterPathString = (0, $46b140fd9cae8ac3$exports.getPathStringFromParameter)(operationSpec.requestBody);
                request.body = operationSpec.serializer.serialize(bodyMapper, request.body, requestBodyParameterPathString, updatedOptions);
                const isStream = typeName === $gVtaz.MapperTypeNames.Stream;
                if (operationSpec.isXML) {
                    const xmlnsKey = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns";
                    const value = $5b58a03563fc4d38$var$getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, request.body, updatedOptions);
                    if (typeName === $gVtaz.MapperTypeNames.Sequence) request.body = stringifyXML($5b58a03563fc4d38$var$prepareXMLRootList(value, xmlElementName || xmlName || serializedName, xmlnsKey, xmlNamespace), {
                        rootName: xmlName || serializedName,
                        xmlCharKey: xmlCharKey
                    });
                    else if (!isStream) request.body = stringifyXML(value, {
                        rootName: xmlName || serializedName,
                        xmlCharKey: xmlCharKey
                    });
                } else if (typeName === $gVtaz.MapperTypeNames.String && (((_e = operationSpec.contentType) === null || _e === void 0 ? void 0 : _e.match("text/plain")) || operationSpec.mediaType === "text")) // the String serializer has validated that request body is a string
                // so just send the string.
                return;
                else if (!isStream) request.body = JSON.stringify(request.body);
            }
        } catch (error) {
            throw new Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, undefined, "  ")}.`);
        }
    } else if (operationSpec.formDataParameters && operationSpec.formDataParameters.length > 0) {
        request.formData = {};
        for (const formDataParameter of operationSpec.formDataParameters){
            const formDataParameterValue = (0, $dxQDb.getOperationArgumentValueFromParameter)(operationArguments, formDataParameter);
            if (formDataParameterValue !== undefined && formDataParameterValue !== null) {
                const formDataParameterPropertyName = formDataParameter.mapper.serializedName || (0, $46b140fd9cae8ac3$exports.getPathStringFromParameter)(formDataParameter);
                request.formData[formDataParameterPropertyName] = operationSpec.serializer.serialize(formDataParameter.mapper, formDataParameterValue, (0, $46b140fd9cae8ac3$exports.getPathStringFromParameter)(formDataParameter), updatedOptions);
            }
        }
    }
}
module.exports.serializeRequestBody = $5b58a03563fc4d38$var$serializeRequestBody;
/**
 * Adds an xml namespace to the xml serialized object if needed, otherwise it just returns the value itself
 */ function $5b58a03563fc4d38$var$getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, serializedValue, options) {
    // Composite and Sequence schemas already got their root namespace set during serialization
    // We just need to add xmlns to the other schema types
    if (xmlNamespace && ![
        "Composite",
        "Sequence",
        "Dictionary"
    ].includes(typeName)) {
        const result = {};
        result[options.xml.xmlCharKey] = serializedValue;
        result[$aqYRx.XML_ATTRKEY] = {
            [xmlnsKey]: xmlNamespace
        };
        return result;
    }
    return serializedValue;
}
function $5b58a03563fc4d38$var$prepareXMLRootList(obj, elementName, xmlNamespaceKey, xmlNamespace) {
    if (!Array.isArray(obj)) obj = [
        obj
    ];
    if (!xmlNamespaceKey || !xmlNamespace) return {
        [elementName]: obj
    };
    const result = {
        [elementName]: obj
    };
    result[$aqYRx.XML_ATTRKEY] = {
        [xmlNamespaceKey]: xmlNamespace
    };
    return result;
}


