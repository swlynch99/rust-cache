require("./state.968f2f37.js");

"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getOperationRequestInfo = module.exports.getOperationArgumentValueFromParameter = void 0;
var $30d7c525cef89f25$exports = {};
$30d7c525cef89f25$exports = new URL("state.968f2f37.js", "file:" + __filename).toString();


/**
 * @internal
 * Retrieves the value to use for a given operation argument
 * @param operationArguments - The arguments passed from the generated client
 * @param parameter - The parameter description
 * @param fallbackObject - If something isn't found in the arguments bag, look here.
 *  Generally used to look at the service client properties.
 */ function $9dc72ed4cfefea4f$var$getOperationArgumentValueFromParameter(operationArguments, parameter, fallbackObject) {
    let parameterPath = parameter.parameterPath;
    const parameterMapper = parameter.mapper;
    let value;
    if (typeof parameterPath === "string") parameterPath = [
        parameterPath
    ];
    if (Array.isArray(parameterPath)) {
        if (parameterPath.length > 0) {
            if (parameterMapper.isConstant) value = parameterMapper.defaultValue;
            else {
                let propertySearchResult = $9dc72ed4cfefea4f$var$getPropertyFromParameterPath(operationArguments, parameterPath);
                if (!propertySearchResult.propertyFound && fallbackObject) propertySearchResult = $9dc72ed4cfefea4f$var$getPropertyFromParameterPath(fallbackObject, parameterPath);
                let useDefaultValue = false;
                if (!propertySearchResult.propertyFound) useDefaultValue = parameterMapper.required || parameterPath[0] === "options" && parameterPath.length === 2;
                value = useDefaultValue ? parameterMapper.defaultValue : propertySearchResult.propertyValue;
            }
        }
    } else {
        if (parameterMapper.required) value = {};
        for(const propertyName in parameterPath){
            const propertyMapper = parameterMapper.type.modelProperties[propertyName];
            const propertyPath = parameterPath[propertyName];
            const propertyValue = $9dc72ed4cfefea4f$var$getOperationArgumentValueFromParameter(operationArguments, {
                parameterPath: propertyPath,
                mapper: propertyMapper
            }, fallbackObject);
            if (propertyValue !== undefined) {
                if (!value) value = {};
                value[propertyName] = propertyValue;
            }
        }
    }
    return value;
}
module.exports.getOperationArgumentValueFromParameter = $9dc72ed4cfefea4f$var$getOperationArgumentValueFromParameter;
function $9dc72ed4cfefea4f$var$getPropertyFromParameterPath(parent, parameterPath) {
    const result = {
        propertyFound: false
    };
    let i = 0;
    for(; i < parameterPath.length; ++i){
        const parameterPathPart = parameterPath[i];
        // Make sure to check inherited properties too, so don't use hasOwnProperty().
        if (parent && parameterPathPart in parent) parent = parent[parameterPathPart];
        else break;
    }
    if (i === parameterPath.length) {
        result.propertyValue = parent;
        result.propertyFound = true;
    }
    return result;
}
const $9dc72ed4cfefea4f$var$originalRequestSymbol = Symbol.for("@azure/core-client original request");
function $9dc72ed4cfefea4f$var$hasOriginalRequest(request) {
    return $9dc72ed4cfefea4f$var$originalRequestSymbol in request;
}
function $9dc72ed4cfefea4f$var$getOperationRequestInfo(request) {
    if ($9dc72ed4cfefea4f$var$hasOriginalRequest(request)) return $9dc72ed4cfefea4f$var$getOperationRequestInfo(request[$9dc72ed4cfefea4f$var$originalRequestSymbol]);
    let info = $30d7c525cef89f25$exports.state.operationRequestMap.get(request);
    if (!info) {
        info = {};
        $30d7c525cef89f25$exports.state.operationRequestMap.set(request, info);
    }
    return info;
}
module.exports.getOperationRequestInfo = $9dc72ed4cfefea4f$var$getOperationRequestInfo;


