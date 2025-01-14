"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.pipelineContainsDisableKeepAlivePolicy = module.exports.createDisableKeepAlivePolicy = module.exports.disableKeepAlivePolicyName = void 0;
module.exports.disableKeepAlivePolicyName = "DisableKeepAlivePolicy";
function $fd3ca1202bcd7ae6$var$createDisableKeepAlivePolicy() {
    return {
        name: module.exports.disableKeepAlivePolicyName,
        async sendRequest (request, next) {
            request.disableKeepAlive = true;
            return next(request);
        }
    };
}
module.exports.createDisableKeepAlivePolicy = $fd3ca1202bcd7ae6$var$createDisableKeepAlivePolicy;
/**
 * @internal
 */ function $fd3ca1202bcd7ae6$var$pipelineContainsDisableKeepAlivePolicy(pipeline) {
    return pipeline.getOrderedPolicies().some((policy)=>policy.name === module.exports.disableKeepAlivePolicyName);
}
module.exports.pipelineContainsDisableKeepAlivePolicy = $fd3ca1202bcd7ae6$var$pipelineContainsDisableKeepAlivePolicy;


