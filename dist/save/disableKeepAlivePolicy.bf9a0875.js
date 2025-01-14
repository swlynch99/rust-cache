"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.pipelineContainsDisableKeepAlivePolicy = module.exports.createDisableKeepAlivePolicy = module.exports.disableKeepAlivePolicyName = void 0;
module.exports.disableKeepAlivePolicyName = "DisableKeepAlivePolicy";
function $baacd9b9da5b6926$var$createDisableKeepAlivePolicy() {
    return {
        name: module.exports.disableKeepAlivePolicyName,
        async sendRequest (request, next) {
            request.disableKeepAlive = true;
            return next(request);
        }
    };
}
module.exports.createDisableKeepAlivePolicy = $baacd9b9da5b6926$var$createDisableKeepAlivePolicy;
/**
 * @internal
 */ function $baacd9b9da5b6926$var$pipelineContainsDisableKeepAlivePolicy(pipeline) {
    return pipeline.getOrderedPolicies().some((policy)=>policy.name === module.exports.disableKeepAlivePolicyName);
}
module.exports.pipelineContainsDisableKeepAlivePolicy = $baacd9b9da5b6926$var$pipelineContainsDisableKeepAlivePolicy;


//# sourceMappingURL=disableKeepAlivePolicy.bf9a0875.js.map
