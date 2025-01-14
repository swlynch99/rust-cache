require("./state.8d136f8f.js");

"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getOperationRequestInfo = module.exports.getOperationArgumentValueFromParameter = void 0;
var $89457aefdbfc40b3$exports = {};
$89457aefdbfc40b3$exports = new URL("state.8d136f8f.js", "file:" + __filename).toString();


/**
 * @internal
 * Retrieves the value to use for a given operation argument
 * @param operationArguments - The arguments passed from the generated client
 * @param parameter - The parameter description
 * @param fallbackObject - If something isn't found in the arguments bag, look here.
 *  Generally used to look at the service client properties.
 */ function $82b9e2b3cacec2c3$var$getOperationArgumentValueFromParameter(operationArguments, parameter, fallbackObject) {
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
                let propertySearchResult = $82b9e2b3cacec2c3$var$getPropertyFromParameterPath(operationArguments, parameterPath);
                if (!propertySearchResult.propertyFound && fallbackObject) propertySearchResult = $82b9e2b3cacec2c3$var$getPropertyFromParameterPath(fallbackObject, parameterPath);
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
            const propertyValue = $82b9e2b3cacec2c3$var$getOperationArgumentValueFromParameter(operationArguments, {
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
module.exports.getOperationArgumentValueFromParameter = $82b9e2b3cacec2c3$var$getOperationArgumentValueFromParameter;
function $82b9e2b3cacec2c3$var$getPropertyFromParameterPath(parent, parameterPath) {
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
const $82b9e2b3cacec2c3$var$originalRequestSymbol = Symbol.for("@azure/core-client original request");
function $82b9e2b3cacec2c3$var$hasOriginalRequest(request) {
    return $82b9e2b3cacec2c3$var$originalRequestSymbol in request;
}
function $82b9e2b3cacec2c3$var$getOperationRequestInfo(request) {
    if ($82b9e2b3cacec2c3$var$hasOriginalRequest(request)) return $82b9e2b3cacec2c3$var$getOperationRequestInfo(request[$82b9e2b3cacec2c3$var$originalRequestSymbol]);
    let info = $89457aefdbfc40b3$exports.state.operationRequestMap.get(request);
    if (!info) {
        info = {};
        $89457aefdbfc40b3$exports.state.operationRequestMap.set(request, info);
    }
    return info;
}
module.exports.getOperationRequestInfo = $82b9e2b3cacec2c3$var$getOperationRequestInfo;


//# sourceMappingURL=operationHelpers.49efe402.js.map
